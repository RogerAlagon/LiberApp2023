<template>
    <b-card>
        <!---------------------------------- nuevo -------------------------------->
        <b-button v-b-modal.modal-formulario variant="gradient-success" @click="Nuevo">
            <feather-icon icon="PlusIcon" class="mr-50"/>
            <span class="align-middle">NUEVO EVENTO</span>
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
            :rows="arr_eventos"
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
            size="lg"
            cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="evento.idEvento" readonly/> 
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="invoice-spacing primary">
            <b-row>
                <b-col md="4" xl="4">
                    <b-form-group label="Cambio">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="evento.alteracionEve" :options="alteracion" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Nombre">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="evento.nombreEve" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Origen">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="evento.origenEve" :options="origen"/>
                        </b-input-group>
                    </b-form-group>
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
                    { label:'ID', field:'idEvento' }, 
                    { label:'Cambio', field:'alteracionEve' },
                    { label:'Nombre', field:'nombreEve' }, 
                    { label:'Origen', field:'origenEve' },
                ],
                /**************************** modal ****************************/
                headerBgVariant: 'dark',
                headerTextVariant: 'success',
                headerTitleVariant: 'NUEVO EVENTO',
                bodyBgVariant: 'light',
                bodyTextVariant: 'success',
                footerBgVariant: 'dark',
                footerTextVariant: 'dark',
                showModal: false,
                showLoading: false,
                boton: false,
                /**************************** entorno ****************************/
                arr_eventos: [],
                alteracion: [ 
                    { value:'RUTA', text:'RUTA' },
                    { value:'FECHA', text:'FECHA' },
                    { value:'AMBOS', text:'AMBOS' },
                ],
                origen: [ 
                    { value:'PERSONA', text:'PERSONA' },
                    { value:'VEHICULO', text:'VEHICULO' },
                    { value:'EXTERNO', text:'EXTERNO' },
                    { value:'OPERACIONES', text:'OPERACIONES' },
                    { value:'MANTENIMIENTO', text:'MANTENIMIENTO' },
                    { value:'FLOTA', text:'FLOTA' },
                    { value:'LOGISTICA', text:'LOGISTICA' },
                    { value:'RRHH', text:'RRHH' },
                    { value:'ADMINISTRATIVO', text:'ADMINISTRATIVO' },
                    { value:'CLIMATOLOGICO', text:'CLIMATOLOGICO' },
                    { value:'SOCIAL', text:'SOCIAL' },
                    { value:'CLIENTE', text:'CLIENTE' },
                ],
                evento: { 
                    idEvento: 0, 
                    alteracionEve:'', 
                    nombreEve:'', 
                    origenEve:''
                },
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
                this.headerTitleVariant = 'NUEVO EVENTO';
                this.boton = false;
                this.evento = { 
                    idEvento: '', 
                    alteracionEve:'', 
                    nombreEve:'', 
                    origenEve:''
                };
            },
            Editar( prm_detalle )
            {
                this.boton = true; 
                this.headerTextVariant = 'primary'; 
                this.headerTitleVariant = 'EDITAR EVENTO';

                this.evento = prm_detalle;
            },
            Guardar()
            {
                if ( this.evento.alteracionEve == null || this.evento.alteracionEve == "") {
                    this.Toast(true,'warning','Cambio','Seleccione Cambio'); 
                    return;
                }
                if ( this.evento.nombreEve == null || this.evento.nombreEve == "") {
                    this.Toast(true,'warning','Nombre','Ingrese Nombre de Evento'); 
                    return;
                }
                if ( this.evento.origenEve == null || this.evento.origenEve == "") {
                    this.Toast(true,'warning','Origen','Seleccione Origen'); 
                    return;
                }

                this.showLoading = true; 
                var jsonEvento = JSON.stringify( this.evento );
                this.$http.post('/LiberAPP/Evento/Guardar', 
                {
                    evento: jsonEvento,
                }).then( res=> {
                    this.Toast(true,'success','Agregar Evento','Guardado Correctamente');
                    this.showModal = false; 
                    this.showLoading = false;
                    this.Eventos();
                }).catch( error=> { 
                    this.Toast(true,'danger','Agregar Evento','Error al guardar el registro: ' + error);
                    this.showLoading = false;
                });
            }, 
            Actualizar()
            {
                if ( this.evento.alteracionEve == null || this.evento.alteracionEve == "") {
                    this.Toast(true,'warning','Cambio','Seleccione Cambio'); 
                    return;
                }
                if ( this.evento.nombreEve == null || this.evento.nombreEve == "") {
                    this.Toast(true,'warning','Nombre','Ingrese Nombre de Evento'); 
                    return;
                }
                if ( this.evento.origenEve == null || this.evento.origenEve == "") {
                    this.Toast(true,'warning','Origen','Seleccione Origen'); 
                    return;
                }
                
                this.showLoading = true; 
                var jsonEvento = JSON.stringify( this.evento );
                this.$http.post('/LiberAPP/Evento/Actualizar', 
                {
                    evento: jsonEvento,
                }).then( res=> {
                    this.Toast(true,'success','Actualizar Evento','Guardado Correctamente');
                    this.showModal = false; 
                    this.showLoading = false;
                    this.Eventos();
                }).catch( error=> { 
                    this.Toast(true,'danger','Actualizar Evento','Error al guardar el registro: ' + error);
                    this.showLoading = false;
                });
            },
            Eventos()
            {
                this.$http.get('/LiberAPP/Evento/Listar').then( res => {
                    this.arr_eventos = res.data
                }).catch(error => { 
                    this.Toast(true, 'danger','Eventos','Error al cargar los registros: '+error);
                })
            }
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
            this.$http.get('/LiberAPP/Evento/Listar').then( res => {
                this.arr_eventos = res.data
            }).catch(error => { 
                this.Toast(true, 'danger','Eventos','Error al cargar los registros: '+error);
            })
        }
    }
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>