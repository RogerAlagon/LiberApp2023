<template>
    <b-card>
        <!---------------------------------- nuevo -------------------------------->
        <b-button v-b-modal.modal-formulario variant="gradient-success" @click="Nuevo">
            <feather-icon icon="PlusIcon" class="mr-50"/>
            <span class="align-middle">NUEVO CONSUMO</span>
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
            :rows="arr_consumos"
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
            size="xl"
            cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="yidConsumo" readonly/> 
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Nombre">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ynombreCon" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Cuentas">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="valorDat" v-model="yCuenta_idDato" style="flex: 1;" :reduce="cuentas => cuentas.idDato" :options="cuentas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Cliente">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" v-model="yExterno_idExterno" style="flex: 1;" :reduce="externos => externos.idExterno" :options="externos" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Grupo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="valorDat" v-model="yGrupo_idDato" style="flex: 1;" :reduce="grupos => grupos.idDato" :options="grupos" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Ruta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="yrutaCon" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="TruckIcon" />
            <span>Detalle Consumo</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row>
                <b-col md="12" xl="12">
                    <app-timeline>
                        <app-timeline-item variant="success">
                            <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Nuevo Intervalo</span>
                                    <div>
                                        <b-button variant="info" class="btn-icon rounded-circle btn-sm" @click="NuevoIntervalo(-1)">
                                            <feather-icon icon="ArrowDownIcon" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </app-timeline-item>
                        <!---------------------- INTERVALOS ---------------------->
                        <app-timeline-item variant="primary" icon="TrendingUpIcon" v-for="(uconsumo,pos) in consumos" :key="uconsumo.nroCon">
                            <div v-if="uconsumo.eliminar == false" class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-primary">{{ uconsumo.nombreCon_ }}</h6>
                                <!---<h6 class="text-primary">{{ ynombreIntervalo }}</h6>--->
                            </div>
                            <b-row v-if="uconsumo.eliminar == false">
                                <b-col md="4" xl="3">
                                    <b-form-group label="Nombre Intervalo">
                                        <b-input-group class="input-group-merge">
                                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                            <b-form-input v-model="uconsumo.nombreInt" @input="NombreIntervalo( uconsumo.nombreInt, pos )" />
                                        </b-input-group>
                                    </b-form-group>                     
                                </b-col>
                                <b-col md="4" xl="3">
                                    <b-form-group label="Tipo de Recarga">
                                        <b-input-group class="input-group-merge">
                                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                            <b-form-select v-model="uconsumo.cargaInt" :options="tipoRecarga"/>
                                        </b-input-group>
                                    </b-form-group>
                                </b-col>
                                <b-col md="4" xl="3">
                                    <b-form-group label="Kilometraje Recorrido">
                                        <b-input-group class="input-group-merge">
                                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                            <b-form-input v-model="uconsumo.kilometrajeInt" />
                                        </b-input-group>
                                    </b-form-group>                     
                                </b-col>
                            </b-row>
                            <b-row v-if="uconsumo.eliminar == false">
                                <div class="mb-1 mb-sm-0">
                                    <div>
                                        <b-button variant="danger" class="btn-icon btn-sm" @click="EliminarIntervaloGrupo(pos)">
                                            <span class="align-middle">Eliminar Intervalo</span>
                                        </b-button>
                                    </div>
                                </div>
                            </b-row>
                            <b-row v-if="uconsumo.eliminar == false">
                                <b-col>
                                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                                        <thead class="thead-dark">
                                            <tr><th>Nro</th><th>VEHICULO/MODELO</th><th>GALONES</th><th>ACCIONES</th></tr>
                                        </thead>
                                        <tr>
                                            <td>#</td>
                                            <td>
                                                <v-select label="valorDat" v-model="uconsumo.intervalo.unidadesInt" :options="modelos" style="flex: 1;" />
                                            </td>
                                            <td>
                                                <b-form-input v-model="uconsumo.intervalo.galonajesInt" class="form-control" />
                                            </td>
                                            <td>
                                                <b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarIntervalo( uconsumo.intervalo, uconsumo, pos)">
                                                    <feather-icon icon="CheckIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                        <tr v-for="(uintervalo,indice) in uconsumo.intervalos">
                                            <td>{{ indice+1 }}</td>
                                            <td>{{ uintervalo.unidadNom }}</td>
                                            <td>{{ uintervalo.galonajesInt }}</td>
                                            <td>
                                                <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarIntervalo( pos, indice )">
                                                    <feather-icon icon="TrashIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                    </table>
                                </b-col>
                            </b-row>
                            <hr>
                        </app-timeline-item>
                        <app-timeline-item variant="danger">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                            </div>
                            <p></p>
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
                /*{ label: '', field: 'eliminar', },*/
                { label:'ID', field:'idConsumo'}, 
                { label:'Cuenta', field:'cuenta'}, 
                { label:'Grupo', field:'grupo'}, 
                { label:'Ruta', field:'rutaCon'}, 
                { label:'Nombre', field:'nombreCon'}, 
                { label:'Cliente', field:'nombreExt'}, 
                { label:'Cuenta_idDato', field:'Cuenta_idDato', hidden: true }, 
                { label:'Externo_idExterno', field:'Externo_idExterno', hidden: true }, 
                { label:'Grupo_idDato', field:'Grupo_idDato', hidden: true },
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO CONSUMO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            cuentas:[],
            modelos:[],
            externos:[],
            grupos:[],
            consumo:[],
            tipoRecarga: [
                { value:'FULL', text:'FULL' },
                { value:'RELLENO', text:'RELLENO' },
                { value:'MIXTO', text:'MIXTO' },
            ],
            consumos: [],
            arr_consumos:[],
            ynro: 0,
            ynombreCon: "", 
            yCuenta_idDato: 0,
            yExterno_idExterno: 0, 
            yGrupo_idDato: 0, 
            yrutaCon: "",
            yidConsumo: 0,
            ynombreIntervalo: "",
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
        NombreIntervalo( nombreInt, posicion )
        {
            this.consumos[posicion].nombreCon_ = nombreInt;
        },
        NuevoIntervalo(prm_posicion)
        {
            if ( this.ynombreCon == null || this.ynombreCon == "") 
            {
                this.Toast(true,'danger','Nombre','Ingrese un Nombre');
                return;
            }
            if ( this.yCuenta_idDato == null || this.yCuenta_idDato == "") 
            {
                this.Toast(true,'danger','Cuenta','Seleccione una Cuenta');
                return;
            }
            if ( this.yExterno_idExterno == null || this.yExterno_idExterno == "") 
            {
                this.Toast(true,'danger','Cliente','Seleccione un Cliente');
                return;
            }
            if ( this.yGrupo_idDato == null || this.yGrupo_idDato == "") 
            {
                this.Toast(true,'danger','Grupo','Seleccione un Grupo');
                return;
            }
            if ( this.yrutaCon == null || this.yrutaCon == "") 
            {
                this.Toast(true,'danger','Ruta','Ingrese una Ruta');
                return;
            }

            var uconsumo = {
                "nroCon": this.ynro, 
                "nombreCon_":"NUEVO INTERVALO",
                "Cuenta_idDato":"", 
                "Grupo_idDato":"", 
                "rutaCon":"", 
                "nombreCon":"", 
                "Externo_idExterno":"",
                "nombreInt":"", 
                "cargaInt":"",
                "estado": true,
                "eliminar": false,
                "kilometrajeInt":"",
                "intervalos":[],
                "intervalo": {
                    "galonajesInt":"", 
                    "unidadesInt":"", 
                }
            };
            this.ynro++;
            prm_posicion++;

            this.consumos.splice( prm_posicion, 0, uconsumo )
        },
        AgregarIntervalo( prm_intervalo, prm_consumo, prm_posicion )
        {
            if ( prm_consumo.nombreInt == null || prm_consumo.nombreInt == "") 
            {
                this.Toast(true,'danger','Nombre Intervalo','Ingrese un Nombre Intervalo');
                return;
            }
            if ( prm_consumo.cargaInt == null || prm_consumo.cargaInt == "") 
            {
                this.Toast(true,'danger','Tipo Recarga','Seleccione Tipo de Recarga');
                return;
            }
            /*if ( prm_consumo.kilometrajeInt == null || prm_consumo.kilometrajeInt == "") 
            {
                this.Toast(true,'danger','Kilometraje','Ingrese un Kilometraje');
                return;
            }*/
            if ( prm_intervalo.unidadesInt == null || prm_intervalo.unidadesInt == "") 
            {
                this.Toast(true,'danger','Vehiculo/Modelo','Seleccione Vehiculo/Modelo');
                return;
            }
            if ( prm_intervalo.galonajesInt == null || prm_intervalo.galonajesInt == "") 
            {
                this.Toast(true,'danger','Galonaje','Ingrese un Galonaje');
                return;
            }

            var uintervalo = { 
                nombreInt: prm_consumo.nombreInt,
                cargaInt: prm_consumo.cargaInt, 
                kilometrajeInt: prm_consumo.kilometrajeInt,
                galonajesInt: prm_intervalo.galonajesInt, 
                unidadNom: prm_intervalo.unidadesInt.valorDat,
                unidadesInt: prm_intervalo.unidadesInt.idDato, 
            }

            this.consumos[prm_posicion].intervalos.push(uintervalo)
            this.consumos[prm_posicion].intervalo = {
                "intervalo": {
                    "nombreInt":"", 
                    "cargaInt":"", 
                    "galonajesInt":"", 
                    "unidadesInt":"", 
                    "kilometrajeInt":"",
                },
            }
            this.consumos[prm_posicion].nombreCon = this.ynombreCon
            this.consumos[prm_posicion].Cuenta_idDato = this.yCuenta_idDato
            this.consumos[prm_posicion].Externo_idExterno = this.yExterno_idExterno
            this.consumos[prm_posicion].Grupo_idDato = this.yGrupo_idDato
            this.consumos[prm_posicion].rutaCon = this.yrutaCon
        },
        EliminarIntervaloGrupo(prm_posicion)
        {
            //this.consumos.splice(prm_posicion,1);              
            this.boxOne = ''
            this.$bvModal.msgBoxConfirm('¿Esta seguro de eliminar el intervalo?', {
                cancelVariant: 'outline-secondary',
            }).then(value => {
                this.boxOne = value
                if(this.boxOne === true) { this.consumos[prm_posicion].eliminar = true; }
            })
        },
        EliminarIntervalo( prm_pos, prm_indice )
        {
            //console.log('consumos:: ', this.consumos[prm_pos].intervalo["idIntervalo"]);
            this.consumos[prm_pos].intervalo["idIntervalo"] = this.consumos[prm_pos].intervalos[prm_indice]["idIntervalo"]; 
            this.consumos[prm_pos].intervalos.splice(prm_indice, 1);
            //console.log("consumos:: ", this.consumos);
            //this.consumos[prm_pos].intervalo = this.consumos[prm_pos].intervalos[prm_indice].idIntervalo;
        },
        Nuevo()
        {
            this.headerTextVariant = 'success';
            this.headerTitleVariant = 'NUEVO CONSUMO';
            this.boton = false;
            this.consumos = [];
            this.yidConsumo = ""; 
            this.ynombreCon = ""; 
            this.yCuenta_idDato = ""; 
            this.yExterno_idExterno = ""; 
            this.yGrupo_idDato = ""; 
            this.yrutaCon = "";
        },
        Editar( prm_detalle )
        {
            this.consumos = [];
            var recorridos = [];
            var intervalos = [];
            this.headerTextVariant = 'primary'; 
            this.headerTitleVariant = 'EDITAR CONSUMO'
            this.boton = true;

            this.yidConsumo = Number(prm_detalle.idConsumo);
            this.ynombreCon = prm_detalle.nombreCon;
            this.yCuenta_idDato = Number(prm_detalle.Cuenta_idDato); 
            this.yExterno_idExterno = Number(prm_detalle.Externo_idExterno); 
            this.yGrupo_idDato = Number(prm_detalle.Grupo_idDato);
            this.yrutaCon = prm_detalle.rutaCon;
            

            this.$http.get('/LiberAPP/Consumo/Detalle/' + prm_detalle.idConsumo ).then( res => {
                intervalos.push( res.data )

                for ( var i = 0; i < intervalos[0].length; i++) 
                {
                    var urecorrido = {
                        "nroCon": i+1,
                        "idConsumo": this.yidConsumo, 
                        "nombreCon_": intervalos[0][i].nombreInt,
                        "Cuenta_idDato": this.yCuenta_idDato, 
                        "Grupo_idDato": this.yGrupo_idDato, 
                        "rutaCon": this.yrutaCon, 
                        "nombreCon": this.ynombreCon, 
                        "Externo_idExterno": this.yExterno_idExterno,
                        "nombreInt": intervalos[0][i].nombreInt, 
                        "cargaInt": intervalos[0][i].cargaInt,
                        "kilometrajeInt": intervalos[0][i].kilometrajeInt,
                        "eliminar": false,
                        "intervalos":[],
                        "intervalo": {
                            "galonajesInt":"", 
                            "unidadesInt":"", 
                            "idIntervalo":"", 
                        }
                    };
                    
                    let unidadesInt = intervalos[0][i].unidadesInt.split("-");
                    let galonajesInt = intervalos[0][i].galonajesInt.split("-");

                    recorridos.push( urecorrido )
                    this.consumos.push( urecorrido )

                    for ( var j = 0; j < unidadesInt.length; j++)
                    {
                        var zunidades = this.modelos.filter( function ( unidad ) { return unidad.idDato == unidadesInt[j] });
                        var zunidad = ( zunidades.length > 0) ? zunidades[0] : null;
                        var uintervalo = {
                            "idIntervalo": intervalos[0][i].idIntervalo,
                            "nombreInt": intervalos[0][i].nombreInt,  
                            "cargaInt": intervalos[0][i].cargaInt,
                            "galonajesInt": galonajesInt[j], 
                            "unidadesInt": zunidad.idDato, 
                            "unidadNom": zunidad.valorDat, 
                            "kilometrajeInt": intervalos[0][i].kilometrajeInt, 
                        }; 
                        this.consumos[i].intervalos.push( uintervalo )
                    }
                }

            }).catch( error => {
                this.Toast(true, 'danger','Consumos','Error al cargar los registros: '+error);
            })
        },
        Guardar()
        {
            this.showLoading = true;
            if ( this.consumos.length > 0)
            {
                var jsonConsumo = JSON.stringify(this.consumos)
                this.$http.post('/LiberAPP/Consumo/Guardar',
                {
                    consumo: jsonConsumo,
                }).then(res => {
                    this.Toast(true,'success','Agregar Consumo','Guardado Correctamente');
                    this.showModal = false;
                    this.showLoading = false;
                    this.Consumos();
                    this.consumos = [];
                    this.ynombreCon = ""; 
                    this.yCuenta_idDato = ""; 
                    this.yExterno_idExterno = ""; 
                    this.yGrupo_idDato = ""; 
                    this.yrutaCon = "";
                }).catch(error => {
                    this.Toast(true,'danger','Agregar Consumo','Error al guardar el registro: ' + error);
                    this.showLoading = false;
                });
            } else { 
                this.Toast(true,'warning','Intervalo','Agregue un Intervalo');
                this.showLoading = false;
            }
        },
        Actualizar()
        {
            this.consumos[0].idConsumo = Number(this.yidConsumo); 
            this.consumos[0].nombreCon = this.ynombreCon; 
            this.consumos[0].Cuenta_idDato = Number(this.yCuenta_idDato); 
            this.consumos[0].Externo_idExterno = Number(this.yExterno_idExterno); 
            this.consumos[0].Grupo_idDato = Number(this.yGrupo_idDato); 
            this.consumos[0].rutaCon = this.yrutaCon; 

            this.showLoading = true
            var jsonConsumo = JSON.stringify( this.consumos )
            //console.log('jsonConsumo:: ', jsonConsumo );
            this.$http.post('/LiberAPP/Consumo/Actualizar', 
            {
                consumo: jsonConsumo,
            }).then(res => {
                this.Toast(true,'primary','Actualizar Consumo','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Consumos();
            }).catch(error => {
                this.Toast(true,'danger','Actualizar Consumo','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        },

        Consumos()
        {
            this.$http.get('/LiberAPP/Consumo/Select').then( res => {
                this.arr_consumos = res.data
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
        this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res=> {
            this.cuentas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Dato/Select/MODELO/VEHICULO').then(res=> {
            this.modelos = res.data;
        }).catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })

        this.$http.get('/LiberAPP/Dato/Select/MODELO/VEHICULO').then(res=> {
            this.modelos = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Modelos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Dato/Select/GRUPO/TRANSPORTE').then(res=> {
            this.grupos = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Grupos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Externo/Select').then(res => {
            this.externos = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        //this.$http.get('/LiberAPP/Abastecimiento/Consumo/Select').then( res => {
        this.$http.get('/LiberAPP/Consumo/Select').then( res => {
            this.arr_consumos = res.data
        }).catch(error => { 
            this.Toast(true, 'danger','Consumos','Error al cargar los registros: '+error);
        })
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>