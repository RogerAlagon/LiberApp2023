<template>
    <b-card>
        <!---------------------------------- nuevo -------------------------------->
        <b-button v-b-modal.modal-formulario variant="gradient-success" @click="Nuevo">
            <feather-icon icon="MapPinIcon" class="mr-50"/>
            <span class="align-middle">NUEVA GEOCERCA</span>
        </b-button>
        <!---------------------------------- búsqueda -------------------------------->
        <div class="custom-search d-flex justify-content-end">
            <b-form-group>
                <div class="d-flex align-items-center">
                    <label class="mr-1">Buscar:</label>
                    <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                </div>
            </b-form-group>
        </div>
        <!---------------------------------- tabla -------------------------------->
        <vue-good-table
            :columns="columns"
            :rows="arr_geocercas"
            :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
        >
            <!---------------------------------- columnas especiales -------------------------------->
            <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idGeocerca)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>
                <!-- Column: Common -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
        <!---------------------------------- modal -------------------------------->
        <b-modal
            id="modal-formulario" v-model="showModal"
            :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
            :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="xl"
            cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="coordenadas.idGeocerca" readonly/> 
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Nombre">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="coordenadas.nombreGeo" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Tipo de Geocerca">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="coordenadas.tipoGeo" :options="tipoGeocerca"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="MapPinIcon" />
            <span>Coordenadas</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row>
                <b-col md="12" xl="12">
                    <app-timeline>
                        <app-timeline-item variant="success">
                            <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Nueva Coordenada</span>
                                </div>
                            </div>
                            <b-row v-if="coordenadas.length > 0">
                                <b-col>
                                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                                        <thead class="thead-dark">
                                            <tr><th>Nro</th><th>LATITUD</th><th>LONGITUD</th><th>ACCIONES</th></tr>
                                        </thead>
                                        <tr>
                                            <td>#</td>
                                            <td>
                                                <b-form-input v-model="coordenadas[0].coordenada.latitud" class="form-control" />
                                            </td>
                                            <td>
                                                <b-form-input v-model="coordenadas[0].coordenada.longitud" class="form-control" />
                                            </td>
                                            <td>
                                                <b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarCoordenada( coordenadas[0].coordenada )">
                                                    <feather-icon icon="CheckIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                        <tr v-for="(ucoordenadas,indice) in coordenadas[0].coordenadas">
                                            <td>{{ indice+1 }}</td>
                                            <td>{{ ucoordenadas.latitud }}</td>
                                            <td>{{ ucoordenadas.longitud }}</td>
                                            <td>
                                                <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarCoordenada( indice )">
                                                    <feather-icon icon="TrashIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                    </table>
                                </b-col>
                            </b-row>
                        </app-timeline-item>
                    </app-timeline>
                </b-col>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Guardar" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="Actualizar" v-else :disabled="showLoading">
                        <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Actualizar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </b-card>
</template>
<script>
import BCardCode from '@core/components/b-card-code'
import {
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BCard, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'
import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useRefHistory } from '@vueuse/core'

export default { 
        components: {
        BToast,
        BCardCode,
        BRow,
        BCol,
        BImg,
        BSpinner,
        BFormGroup,
        BInputGroup,
        BInputGroupPrepend,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        VueGoodTable,
        BAvatar,
        BBadge,
        BPagination,
        BFormSelect,
        BAlert,
        BDropdown,
        BDropdownItem,
        BCard,
        BCardText,
        BOverlay,
        vSelect,
        flatPickr,
        Cleave,
        BFormTextarea,
        AppTimeline,
        AppTimelineItem,
        },
        directives: {
            Ripple,
        },
        data() {
            return {
                /**************************** tabla ****************************/
                pageLength: 5,
                dir: false,
                searchTerm: '',
                columns: [ 
                    { label: 'Acciones', field: 'acciones' },
                    { label:'ID', field:'idGeocerca'}, 
                    { label:'Nombre', field:'nombreGeo'}, 
                    { label:'Tipo', field:'tipoGeo'}, 
                    { label:'latitudGeo', field:'latitudGeo', hidden: true }, 
                    { label:'longitudGeo', field:'longitudGeo', hidden: true },
                    { label:'estado', field:'activoGeo', hidden: true },
                ],
                /**************************** modal ****************************/
                headerBgVariant: 'dark',
                headerTextVariant: 'success',
                headerTitleVariant: 'NUEVA GEOCERCA',
                bodyBgVariant: 'light',
                bodyTextVariant: 'success',
                footerBgVariant: 'dark',
                footerTextVariant: 'dark',
                showModal: false,
                showLoading: false,
                boton: false,
                /**************************** entorno ****************************/
                arr_geocercas: [],
                tipoGeocerca: [
                    { value:'BASE TL', text:'BASE TL' },
                    { value:'CENTRO POBLADO', text:'CENTRO POBLADO' },
                    { value:'CHECKPOINT', text:'CHECKPOINT' },
                    { value:'DESTINATARIOS', text:'DESTINATARIOS' },
                    { value:'GARITA', text:'GARITA' },
                    { value:'GRIFO', text:'GRIFO' },
                    { value:'ESTADIA', text:'ESTADIA' },
                    { value:'PUNTO DESCARGA', text:'PUNTO DESCARGA' },
                    { value:'PUNTO CARGA', text:'PUNTO CARGA' },
                ],
                coordenadas: [],
            }
        },
        methods: { 
            Toast(append = false, variant = null,titulo = "", mensaje = "")
            {
                var toaster = 'b-toaster-bottom-full';
                this.$bvToast.toast(mensaje, {
                    title: titulo,
                    toaster,
                    variant,
                    solid: false,
                    appendToast: append,
                })
            },
            Nuevo() 
            {
                this.headerTextVariant = 'success'; 
                this.headerTitleVariant = 'NUEVA GEOCERCA';
                this.boton = false;
                var ucoordenadas = {
                    "idGeocerca":0, 
                    "nombreGeo":"", 
                    "tipoGeo":"",
                    "activoGeo":"",
                    "coordenadas": [], 
                    "coordenada": { 
                        "latitud":"", 
                        "longitud":"",
                    }
                }
                if ( this.coordenadas.length == 0 )
                {
                    this.coordenadas.splice(0,0,ucoordenadas);
                }
                this.coordenadas[0].coordenadas = [];
                this.coordenadas.idGeocerca = ""; 
                this.coordenadas.nombreGeo = ""; 
                this.coordenadas.tipoGeo = "";
            },
            EliminarCoordenada( prm_indice )
            {
                this.coordenadas[0].coordenadas.splice( prm_indice, 1 );
            },
            Eliminar( prm_fila )
            {
                this.boxOne = ''
                this.$bvModal.msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
                    cancelVariant: 'outline-secondary',
                }).then(value => {
                    this.boxOne = value
                    if(this.boxOne === true) 
                    {
                        //this.$http.post('/LiberAPP/Abastecimiento/Consumo/Desactivar',
                        this.$http.post('/LiberAPP/Geocerca/Desactivar',
                        {
                            idGeocerca : prm_fila,
                        }).then(res => {
                            this.Toast(true,'primary','Geocerca','Geocerca eliminado Correctamente');
                            this.showModal = false;
                            this.showLoading = false;
                            this.Geocercas();
                        }).catch(error => {
                            this.Toast(true,'danger','Geocerca','Error al eliminar el Geocerca: '+error);
                            this.showLoading = false;
                        })
                    } 
                    else
                        this.showLoading = false;
                })
            },
            AgregarCoordenada( prm_coordenada )
            {
                if ( prm_coordenada.latitud == null || prm_coordenada.latitud == "") 
                {
                    this.Toast(true,'danger','Latitud','Seleccione Latitud'); 
                    return;
                }
                if ( prm_coordenada.longitud == null || prm_coordenada.longitud == "") 
                {
                    this.Toast(true,'danger','Longitud','Seleccione Longitud'); 
                    return;
                }
                var ucoordenada = { 
                    latitud: prm_coordenada.latitud,
                    longitud: prm_coordenada.longitud,
                }
                this.coordenadas[0].coordenadas.push(ucoordenada);
                this.coordenadas[0].coordenada = { 
                    "coordenada": { 
                        "latitud":"",
                        "longitud":"",
                    }
                }
                console.log('coordenadas:: ', this.coordenadas[0])
                
                /*this.coordenadas.push(ucoordenada);
                console.log('agregar coordenada:: ', prm_coordenada );
                console.log('coordenadas:: ', this.coordenadas );*/
            },
            Editar( prm_detalle )
            {
                this.boton = true; 
                this.headerTextVariant = 'primary'; 
                this.headerTitleVariant = 'EDITAR GEOCERCA';

                var ucoordenadas = {
                    "idGeocerca":0, 
                    "nombreGeo":"", 
                    "tipoGeo":"",
                    "activoGeo":"",
                    "coordenadas": [], 
                    "coordenada": { 
                        "latitud":"", 
                        "longitud":"",
                    }
                }

                if ( this.coordenadas.length == 0 )
                {
                    this.coordenadas.splice(0,0,ucoordenadas);
                }

                this.coordenadas[0].coordenadas = [];
                this.coordenadas.idGeocerca = prm_detalle.idGeocerca; 
                this.coordenadas.nombreGeo = prm_detalle.nombreGeo;
                this.coordenadas.tipoGeo = prm_detalle.tipoGeo;
                this.coordenadas.activoGeo = prm_detalle.activoGeo;

                let latitud = prm_detalle.latitudGeo.split(",");
                let longitud = prm_detalle.longitudGeo.split(",");

                for( var i = 0; i < latitud.length; i++) 
                {
                    var ucoordenada = { 
                        latitud: latitud[i],
                        longitud: longitud[i],
                    }
                    this.coordenadas[0].coordenadas.push(ucoordenada);
                }
            },

            Guardar()
            {
                if ( this.coordenadas.nombreGeo == null || this.coordenadas.nombreGeo == "" ) {
                    this.Toast(true,'danger','nombre','Ingrese nombre de Geocerca'); 
                    return;
                }
                
                if ( this.coordenadas.tipoGeo == null || this.coordenadas.tipoGeo == "" ) {
                    this.Toast(true,'danger','tipo','Seleccione Tipo de Geocerca'); 
                    return;
                }
                if ( this.coordenadas[0].coordenadas.length == 0 ) { 
                    this.Toast(true, 'danger', 'Coordenadas','Ingrese Coordenadas');
                    return;
                }

                this.coordenadas[0].nombreGeo = this.coordenadas.nombreGeo;
                this.coordenadas[0].tipoGeo = this.coordenadas.tipoGeo;
                this.showLoading = true; 
                var jsonCoordenadas = JSON.stringify(this.coordenadas[0])
                this.$http.post('/LiberAPP/Geocerca/Guardar',
                {
                    coordenada: jsonCoordenadas,
                }).then(res => {
                    this.Toast(true,'success','Agregar Coordenada','Guardado Correctamente');
                    this.showModal = false;
                    this.showLoading = false;
                    this.Geocercas();
                }).catch(error => {
                    this.Toast(true,'danger','Agregar Coordenada','Error al guardar el registro: ' + error);
                    this.showLoading = false;
                });

            }, 
            Actualizar() 
            {
                if ( this.coordenadas.nombreGeo == null || this.coordenadas.nombreGeo == "" ) {
                    this.Toast(true,'danger','nombre','Ingrese nombre de Geocerca'); 
                    return;
                }
                
                if ( this.coordenadas.tipoGeo == null || this.coordenadas.tipoGeo == "" ) {
                    this.Toast(true,'danger','tipo','Seleccione Tipo de Geocerca'); 
                    return;
                }
                
                if ( this.coordenadas[0].coordenadas.length == 0 ) { 
                    this.Toast(true, 'danger', 'Coordenadas','Ingrese Coordenadas');
                    return;
                }

                this.coordenadas[0].idGeocerca = this.coordenadas.idGeocerca;
                this.coordenadas[0].nombreGeo = this.coordenadas.nombreGeo; 
                this.coordenadas[0].tipoGeo = this.coordenadas.tipoGeo;
                this.showLoading = true; 
                var jsonCoordenadas = JSON.stringify( this.coordenadas[0] );
                this.$http.post('/LiberAPP/Geocerca/Actualizar', 
                {
                    coordenada: jsonCoordenadas,
                }).then( res => { 
                    this.Toast( true, 'success', 'Actualizar Coordenada','Actualizado Correctamente');
                    this.showModal = false; 
                    this.showLoading = false;
                    this.Geocercas();
                }).catch( error => { 
                    this.Toast( true, 'danger', 'Actualizar Coordenada', 'Error al actualizar el registro: ' + error );
                    this.showLoading = false;
                });
            },
            Geocercas() 
            {
                this.$http.get('/LiberAPP/Geocerca/Listar').then( res => {
                    this.arr_geocercas = res.data
                }).catch(error => { 
                    this.Toast(true, 'danger','Consumos','Error al cargar los registros: '+error);
                })
            },
        },
        computed: { 
            direction() {
                if (store.state.appConfig.isRTL) {
                    this.dir = true
                    return this.dir
                }
                this.dir = false
                return this.dir
            },
        },
        created() {
            this.$http.get('/LiberAPP/Geocerca/Listar').then( res => {
                this.arr_geocercas = res.data
            }).catch(error => { 
                this.Toast(true, 'danger','Geocercas','Error al cargar los registros: '+error);
            })
        }
    }
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>