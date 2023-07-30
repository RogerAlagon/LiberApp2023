<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Vehiculo">
                    <v-select label="placaVeh" v-model="yvehiculo" :options="yvehiculos" style="flex: 1;" @input="Listar()"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Estado">
                    <b-form-select v-model="estado" :options="estados"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Desde">
                    <flat-pickr v-model="fechaInicio" class="form-control" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Hasta">
                    <flat-pickr v-model="fechaFin" class="form-control" :config="{ minDate: fechaInicio }"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" xl="12" class="text-center">
                <b-button variant="success" @click="Listar()" :disabled="showLoading">
                    <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Listar</span>
                </b-button>
                <b-button variant="warning" :href="'/LiberAPP/Falla/Exportar/'+this.yvehiculo.idVehiculo+'/'+this.estado+'/'+this.fechaInicio+'/'+this.fechaFin" target="_blank">
                    <feather-icon icon="FileTextIcon" class="mr-50"/>
                    <span class="align-middle">Exportar</span>
                </b-button>
            </b-col>
        </b-row>
    </b-card>
    <b-card v-if="(fallas.length > 0)">
        <b-row>
            <b-col md="12" xl="12" class="text-center">
                <h2 class="text-primary">{{ seleccionado.nombre }} - {{seleccionado.estado}}</h2>
            </b-col>
        </b-row>
        <!---------------------------------- tabla -------------------------------->
        <b-row>
            <b-col md="6" xl="6">
                <b-button variant="success" @click="Nuevo()" :disabled="showLoading" v-b-modal.modal-formulario v-if="(seleccionado.estado == 'SOLICITADO' && yvehiculo.idVehiculo > 0)">
                    <feather-icon icon="PlusIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Nuevo Reporte</span>
                </b-button>
                <!--<b-button variant="primary" @click="OT()" v-if="seleccionado.estado == 'SOLICITADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-ot>-->
                <!--<b-button variant="primary" @click="OT()" v-if="seleccionado.estado == 'SOLICITADO'" :disabled="showLoading" v-b-modal.modal-ot>-->
                <b-button variant="primary" @click="OT()" v-if="(seleccionado.estado == 'SOLICITADO' && yvehiculo.idVehiculo > 0 && seleccionados.length > 0)" :disabled="showLoading" v-b-modal.modal-ot>
                    <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Generar OT ({{seleccionados.length}})</span>
                </b-button>
            </b-col>
            <b-col md="6" xl="6" class="text-right">
                <!---------------------------------- búsqueda -------------------------------->
                <div class="custom-search d-flex justify-content-end">
                    <b-form-group>
                        <div class="d-flex align-items-center">
                            <label class="mr-1">Buscar:</label>
                            <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                        </div>
                    </b-form-group>
                </div>
            </b-col>
       </b-row>
        <!---------------------------------- tabla -------------------------------->
        <vue-good-table
            :columns="tcolumnas" :rows="fallas" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
        >
            <!---------------------------------- columnas especiales -------------------------------->
            <template slot="table-row" slot-scope="props">
                <!---------------------------------- acciones -------------------------------->
                <span v-if="props.column.field === 'seleccionar' && yvehiculo.idVehiculo > 0" class="text-center">
                    <!--<b-form-checkbox v-model="seleccionados" :value="props.row" class="custom-control-primary text-center"></b-form-checkbox>-->
                    <b-button variant="success" class="btn-icon rounded-circle" v-if="props.row.seleccionado == true" @click="props.row.seleccionado = false, Seleccion(props.row)">
                        <feather-icon icon="CheckIcon" />
                    </b-button>
                    <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="props.row.seleccionado = true, Seleccion(props.row)">
                        <feather-icon icon="CrosshairIcon" />
                    </b-button>
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idFalla)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>
                <span v-else-if="props.column.field === 'seleccionar' && yvehiculo.idVehiculo == 0" class="text-center">
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idFalla)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>
                <span v-else-if="props.column.field === 'Reporte_idReporte'">
                    <a :href="'/LiberAPP/Reportef/Pdf/'+props.row.Reporte_idReporte" target="_blank" class="btn btn-flat-danger btn-sm text-bold">{{props.row.Reporte_idReporte}}</a>
                </span>
                <span v-else-if="props.column.field === 'Ordent_idOrdent'">
                    <a :href="'/LiberAPP/Ordent/Pdf/'+props.row.Ordent_idOrdent" target="_blank" class="btn btn-flat-warning btn-sm text-bold" v-if="props.row.Ordent_idOrdent != null">{{props.row.Ordent_idOrdent}}</a>
                </span>
                <!-- Column: Common -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
    </b-card>
    <b-card v-else>
        <b-row>
            <b-col md="12" xl="12" class="text-left">
                <h4 class="text-warning">NO HAY REGISTROS ENCONTRADOS</h4>
            </b-col>
            <b-col md="6" xl="6">
                <b-button variant="success" @click="Nuevo()" v-if="(seleccionado.estado == 'SOLICITADO' && yvehiculo !== '0')" :disabled="showLoading" v-b-modal.modal-formulario >
                    <feather-icon icon="PlusIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Nuevo Reporte</span>
                </b-button>
                <b-button variant="primary" @click="OT()" v-if="seleccionado.estado == 'SOLICITADO' && seleccionados.length > 0" :disabled="showLoading" v-b-modal.modal-ot>
                    <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Generar OT ({{seleccionados.length}})</span>
                </b-button>
            </b-col>
        </b-row>
    </b-card>
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
                <b-form-group label="Vehiculo / Marca / Modelo">
                    <h2 class="text-primary">{{  reporte.placaVeh+" / "+ reporte.marcaVeh+" / "+reporte.modeloVeh }}</h2>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Tipo de Reporte">
                    <!---<b-form-select v-model="reporte.motivo" :options="motivo"/>-->
                    <b-button v-if="reporte.motivo == ''" variant="success" size="sm" @click="reporte.motivo='REPORTE EN RUTA'">REPORTE FALLA {{ reporte.motivo = 'REPORTE FALLA' }}</b-button>
                    <b-button v-if="reporte.motivo == 'REPORTE EN RUTA'" variant="warning" size="sm" @click="reporte.motivo='AUXILIO MECANICO'">{{ reporte.motivo }}</b-button>
                    <b-button v-if="reporte.motivo == 'AUXILIO MECANICO'" variant="danger" size="sm" @click="reporte.motivo='ATENCION TERCERO'">{{ reporte.motivo }}</b-button>
                    <b-button v-if="reporte.motivo == 'ATENCION TERCERO'" variant="primary" size="sm" @click="reporte.motivo='REPORTE FALLA'">{{ reporte.motivo  }}</b-button>
                    <b-button v-if="reporte.motivo == 'REPORTE FALLA'" variant="success" size="sm" @click="reporte.motivo='SINIESTRO'">{{ reporte.motivo  }}</b-button>
                    <b-button v-if="reporte.motivo == 'SINIESTRO'" size="sm" @click="reporte.motivo='REPORTE EN RUTA'">{{ reporte.motivo  }}</b-button>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <h6>Fecha:</h6>
                <b-form-datepicker v-model="reporte.fechaRep" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Kilometraje:">
                    <cleave v-model="reporte.kilometrajeKil" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Cuenta:">
                    <v-select label="valorDat" v-model="zcuenta" :options="cuentas" style="flex: 1;" @input="reporte.cuenta = zcuenta.idDato"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Reportado Por:">
                    <v-select label="trabajadorPer" v-model="zpersona" :options="personas" style="flex: 1;" @input="reporte.persona = zpersona.idPersona"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <!--<b-col md="12" xl="12">
                <h5 class="text-primary">SELECCIONE COMPONENTES</h5>
            </b-col>
            <b-col md="4" xl="2">
                <b-form-group label="Tipo">
                    <b-button v-if="ztipo == 'FALLA'" variant="success" size="sm" @click="ztipo='PENDIENTE';">FALLA</b-button>
                    <b-button v-if="ztipo == 'PENDIENTE'" variant="warning" size="sm" @click="ztipo='FALLA';">PENDIENTE</b-button>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group label="Componente">
                    <v-select label="com" v-model="zfalla" :options="componentes" style="flex: 1;" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Falla">
                    <b-form-input v-model="zdetalle" class="form-control"/>
                </b-form-group>
            </b-col>
            <b-col md="12" xl="12" class="text-center mb-2">
                <b-button variant="success" @click="AgregarFila()">
                    <feather-icon icon="CheckIcon"/> Agregar
                </b-button>
            </b-col>-->
            
            <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered">
                    <tr><th style="width: 50px;">TIPO</th><th style="min-width: 300px;">Componente</th><th style="width: 350px;">Falla</th><th style="width: 50px;">Acciones</th></tr>
                    <tr>
                        <td>
                            <b-button variant="success" size="sm">FALLA</b-button>
                        </td>
                        <td>
                            <v-select label="com" v-model="zfalla" :options="componentes" style="flex: 1;" />
                        </td>
                        <td>
                            <b-form-input v-model="zdetalle" class="form-control"/>
                        </td>
                        <td>
                            <b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarFila()">
                                <feather-icon icon="CheckIcon"/>
                            </b-button>
                        </td>
                    </tr>
                    <tr v-for="(ufalla,indice) in reporte.fallas">
                        <td> 
                            <b-badge variant="success" v-if="ufalla.tipo == 'FALLA'">{{ ufalla.tipo }}</b-badge>
                            <b-badge variant="warning" v-if="ufalla.tipo == 'PENDIENTE'">{{ ufalla.tipo }}</b-badge>
                        </td>
                        <td>{{ufalla.componente}}</td>
                        <td><b-form-input v-model="ufalla.falla" class="form-control"/></td>
                        <td>
                            <b-button variant="danger" class="btn-icon rounded-circle" @click="EliminarFila(indice)">
                                <feather-icon icon="TrashIcon"/>
                            </b-button>
                        </td>
                    </tr>
                </table>
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
                <b-button variant="success" size="sm" @click="GuardarReporte" :disabled="showLoading">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Guardar</span>
                </b-button>
            </div>
        </template>
        <b-overlay :show="showLoading" no-wrap/>
    </b-modal>
    <!---------------------------------- modal -------------------------------->
    <b-modal
      id="modal-ot" v-model="showModal2"
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
            <b-col md="12" xl="12">
                <h4>Placa :  {{ot.vehiculo}}</h4>
            </b-col>
            <b-col md="6" xl="6">
                <h6>Fecha Ingreso</h6>
                <b-form-datepicker v-model="ot.fecha" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es">
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="6">
                <h6>Hora Ingreso</h6>
                <b-form-timepicker id="timepicker-buttons" v-model="ot.hora" class="form-control" now-button reset-button locale="es"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="6" xl="4">
                <b-form-group label="Cuenta">
                    <v-select label="valorDat" v-model="ot.cuenta" :options="cuentas" style="flex: 1;"  :reduce="cuenta => cuenta.idDato"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Taller">
                    <v-select label="valorDat" v-model="ot.taller" :options="talleres" style="flex: 1;"/>
                    <!--<v-select label="valorDat" v-model="ot.taller" :options="talleres" style="flex: 1;" :reduce="taller => taller.idDato"/>-->
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Tipo de Mantenimiento">
                    <v-select v-model="ot.mantenimiento" :options="mantenimientos" style="flex: 1;" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" xl="12">
                <br>
                <h5 class="text-primary">FALLAS SELECCIONADAS</h5>
            </b-col>           
            <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered text-center">
                    <tr><th>Nro</th><th>APARTADO</th><th>COMPONENTE</th><th>FALLA</th></tr>
                    <tr v-for="(ufalla,indice) in ot.fallas">
                        <td>{{indice+1}}</td>
                        <td>{{ufalla.nombreApa}}</td>
                        <td>{{ufalla.nombreCom}}</td>
                        <td>{{ufalla.detalleFal}}</td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
            <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModal2 = false" :disabled="showLoading">
                    <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="GuardarOrden" :disabled="showLoading">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Guardar</span>
                </b-button>
            </div>
        </template>
        <b-overlay :show="showLoading" no-wrap/>
    </b-modal>
</div></template>



<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
   BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker, 
} from 'bootstrap-vue'
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
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BButtonGroup,
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
        BLink,
        BOverlay,
        vSelect,
        BFormCheckbox,
        BCardBody,
        BInputGroup,
        BInputGroupPrepend,
        BTabs,
        BTab,
        BFormSpinbutton,
        BFormDatepicker,
        BFormTimepicker,
        flatPickr,
        Cleave,
  },
  directives: {
    Ripple,
  },
 
data() {
    return {
 
        /**************************** elementos de ux ****************************/
        dir: false,
        pageLength: 5,
        searchTerm: '',
        tabIndex: 1,
        
        /**************************** tabla ****************************/
        tcolumnas: [
            { label: 'Acciones', field: 'seleccionar'},
            { label: 'Nro. R.F.', field: 'Reporte_idReporte'},
            { label: 'Nro. O.T.', field: 'Ordent_idOrdent'},
            { label: 'Vehiculo.', field: 'placaVeh'},
            { label: 'Apartado', field: 'nombreApa'},
            { label: 'Componente', field: 'nombreCom'},
            { label: 'Detalle de Falla', field: 'detalleFal'},
            { label: 'Fecha R.F.', field: 'fechaRep', hidden: true },
            { label: 'Retraso', field: 'retraso', hidden: true },
            { label: 'Fecha O.T.', field: 'fechaRep'},
            { label: 'Tipo', field: 'motivoRep'},
            { label: 'Estado', field: 'estadoFal' },
            { label: 'idFalla', field: 'idFalla', hidden: true },
            /*{ label: 'Reporte', field: 'acciones'},*/
            /*{ label: 'Fec. Rendición', field: 'frendicionMon'},
            { label: 'Monto', field: 'totalMon'},
            { label: 'Detalle', field: 'detalleMon'}*/
        ],

        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'success',
        headerTitleVariant: 'NUEVO REPORTE',
        bodyBgVariant: 'light',
        bodyTextVariant: 'success',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showModal2: false,
        showLoading: false,
        boton: false,

        /**************************** entorno ****************************/   
        estadoBoton: false,   
        yvehiculos:[],
        personas: [],
        kilometrajes: [],
        estados: [
            { value: 'TODOS', text: 'TODOS' },
            { value: 'SOLICITADO', text: 'PENDIENTE' },
            { value: 'INICIADO', text: 'INICIADO' },
            { value: 'REPARACION', text: 'EN REPARACION' },
            { value: 'TERMINADO', text: 'TERMINADO' },
            { value: 'ENTREGADO', text: 'ENTREGADO' },
            { value: 'REPROGRAMADO', text: 'REPROGRAMADO' },
        ],
        motivo: [
            { value: 'REPORTE EN RUTA', text: 'REPORTE EN RUTA' },
            { value: 'REPORTE FALLA', text: 'REPORTE FALLA' },
            { value: 'AUXILIO MECANICO', text: 'AUXILIO MECANICO' },
            { value: 'ATENCION TERCERO', text: 'ATENCION TERCERO' },
        ],
        
        fallas: [],

        reporte: {
            fechaRep: "",
            kilometrajeKil: "",
            vehiculo: 0,
            placaVeh:"",
            marcaVeh:"", 
            modeloVeh:"",
            reporte: 0,
            motivo:"",
            usuario: 0,
            fallas: [],
            persona: 0,
            cuenta: 0,
        },
        seleccionados: [],
        idReporte: 0,
        versionRep: 0,
        talleres: [],
        cuentas: [],
        mantenimientos: ["CORRECTIVO","PREVENTIVO","PREDICTIVO","AUXILIO","CAMPAÑA"],

        yvehiculo: {},
        estado: "SOLICITADO",
        seleccionado: {
            estado: "",
            nombre: "",
            id: 0,
        },
        showLoading: false,

        componentes: [],
        zfalla: [],
        zdetalle: "",
        zpersona: 0,
        zcuenta: 0,
        ztipo: "FALLA",
        zmotivo: "REPORTE FALLA",
        fechaInicio: "",
        fechaFin: "",

        lcomponentes: {},
        lidReporte: 0,
        lversionRep: 0,

        pcomponentes: {},
        pidReporte: 0,
        pversionRep: 0,

        ot: {
            fecha: "",
            hora: "",
            vehiculo: "",
            idVehiculo: "",
            usuario: "",
            cuenta: {},
            taller: {},
            mantenimiento: "CORRECTIVO",
            fallas : {},
        },
        userData: JSON.parse(localStorage.getItem('userData')),
        /**************************** formulario ****************************/   
        kilometraje: {
             //idKilometraje: 0,
             kilometrajeKil: "",
             horometrajeKil: "",
             fechaKil: "",
        },
        terminado: false,
    }
},
methods: {
    Toast(prm_append = false, variant = null,prm_titulo = "", prm_mensaje = "")
    {
        var toaster = 'b-toaster-bottom-full';

        this.$bvToast.toast(prm_mensaje, {
            title: prm_titulo,
            toaster,
            variant,
            solid: false,
            appendToast: prm_append,
        })
    },
    Listar()
    {
        this.showLoading = true;
        var grupo = this.yvehiculo.grupoVeh;

        this.$http.get('/LiberAPP/Falla/Historial/'+this.yvehiculo.idVehiculo+'/'+this.estado+'/'+this.fechaInicio+'/'+this.fechaFin)
        .then(res => {
            this.showLoading = false;
            this.fallas = res.data;

            this.fallas = this.fallas.map(v => ({...v, seleccionado: false}));
            this.seleccionados = [];

            this.seleccionado.nombre = this.yvehiculo.placaVeh;
            this.seleccionado.id = this.yvehiculo.idVehiculo;
            this.seleccionado.estado = this.estado;

            if(grupo == "PESADA")
            {
                this.componentes = this.pcomponentes;
                this.idReporte = this.pidReporte;
                this.versionRep = this.pversionRep;
            }
            else if(grupo == "LIVIANA")
            {
                this.componentes = this.lcomponentes;
                this.idReporte = this.lidReporte;
                this.versionRep = this.lversionRep;
            }
            else if(grupo == "ACOPLE")
            {
                this.componentes = this.pcomponentes;
                this.idReporte = this.pidReporte;
                this.versionRep = this.pversionRep;
            }

        })
        .catch(error => {
            this.Toast(true,'danger','Kilometraje','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },
    Eliminar(prm_fila)
    {
      this.showLoading = true;
      console.log('idFalla:: ', prm_fila );
      this.boxOne = ''
      this.$bvModal.msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
          cancelVariant: 'outline-secondary',
        }).then(value => {
          this.boxOne = value
          if(this.boxOne === true) 
          {
            this.$http.post('/LiberAPP/Falla/Desactivar',
            {
              idFalla : prm_fila,
            }).then(res => {
              this.Toast(true,'primary','Falla','Falla eliminado Correctamente');
              this.showModal = false;
              this.showLoading = false;
              this.Listar();
            }).catch(error => {
              this.Toast(true,'danger','Falla','Error al eliminar el Falla: '+error);
              this.showLoading = false;
            })
          }
          else
            this.showLoading = false;
        })
      /*this.$bvModal
        .msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
          cancelVariant: 'outline-secondary',
        })
        .then(value => {
          this.boxOne = value
          if(this.boxOne === true) 
          {
            this.$http.post('/LiberAPP/Kilometraje/Desactivar',
            {
              idKilometraje : prm_fila,
            })
            .then(res => {
              this.Toast(true,'primary','Kilometraje','Kilometraje eliminado Correctamente');
              this.showModal = false;
              this.showLoading = false;
              this.Listar();
            })
            .catch(error => {
              this.Toast(true,'danger','Kilometraje','Error al eliminar el Kilometraje: '+error);
              this.showLoading = false;
            })
          }
          else
            this.showLoading = false;
        })*/
    },
    Nuevo()
    {
        var fecha = new Date();
        this.reporte.fechaRep = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
        //this.reporte.fechaRep = "";
        this.reporte.kilometrajeKil = "";
        this.reporte.fallas = [];
        this.zcuenta = {};
        this.zpersona = {};
        
        this.reporte.vehiculo = this.seleccionado.id;
        this.reporte.placaVeh = this.seleccionado.nombre;
        this.reporte.marcaVeh = this.yvehiculo.marcaVeh;
        this.reporte.modeloVeh = this.yvehiculo.modeloVeh;
        this.reporte.usuario = this.userData.id;
        this.reporte.reporte = this.idReporte;
        this.reporte.version = this.versionRep;
        this.reporte.motivo = "";
    },
    
    /*Asignar(prm_id)
    {
        var falla = {
            id: prm_id,
            componente: "12",
            falla: "ffea",
        };
        this.zfallas.push(falla);
    },*/

    AgregarFila()
    {
        if (this.zfalla != null && this.zfalla != "" && this.zfalla != [] && this.zfalla != {})
        {
             var falla = {
                id: this.zfalla.id,
                tipo: this.ztipo,
                componente: this.zfalla.com,
                falla: this.zdetalle,
            };
            this.reporte.fallas.push(falla);
            this.zfalla = [];
            this.zdetalle = "";
        }
        else
        {
            this.Toast(true,'warning','Agregar Falla','Debe seleccionar un Componente');
        }
    },

    EliminarFila(prm_indice)
    {
        this.reporte.fallas.splice(prm_indice, 1);
    },

    GuardarReporte()
    {
        if( this.reporte.vehiculo == 0 )
        {
            this.Toast(true,'warning','Falla','Seleccione una Placa y presione Listar ');
            this.showLoading = false;
            return;
        }
        this.showLoading = true;
        var jsonReporte = JSON.stringify(this.reporte);
 
        if(this.reporte.fallas.length == 0)
        {
            this.Toast(true,'warning','Falla','Debe ingresar al menos una falla. ');
            this.showLoading = false;
            return;
        }

        this.$http.post('/LiberAPP/Reportef/Guardar',
        {
            reportef: jsonReporte,
        }).then(res => {
          this.Toast(true,'primary','Solicitud','Guardado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.ysolicitud = [];
          this.Listar();
        })
        .catch(error => {
          this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
          this.showLoading = false;
        });
    },
    Seleccion(prm_falla)
    {
        //var uestado= { idMonto: prm_id, estadoMon: prm_estado};

        for (var i = 0; i < this.seleccionados.length; i++)
        {
            if(this.seleccionados[i].idFalla == prm_falla.idFalla)
            {
                this.seleccionados.splice(i,1);
                break;
            }
        }
        
        if(prm_falla.seleccionado)
            this.seleccionados.push(prm_falla);
    },
    GuardarOrden()
    {
        /*this.ot = {
            id: this.seleccionado.id,
            vehiculo: this.seleccionado.nombre,
            operacion: "",
            fecha: new Date,
            hora: "",
            taller: "",
            tipo: "",
            fallas: this.seleccionados,
        };*/

        this.showLoading = true;
        var jsonOrden = JSON.stringify(this.ot);
        console.log('jsonOrden:: ', jsonOrden );
        //return;
        /*if(this.ot.fallas == 0)
        {
            this.Toast(true,'warning','Orden de Trabajo','Debe seleccionar al menos una falla.');
            this.showLoading = false;
            return;
        }*/
        this.$http.post('/LiberAPP/Ordent/Guardar',
        {
            ordent: jsonOrden,
        }).then(res => {
          this.Toast(true,'primary','Solicitud','Guardado Correctamente');
          this.showModal2 = false;
          this.showLoading = false;
          this.ysolicitud = [];
          this.Listar();
          window.open('/LiberAPP/Ordent/Pdf/'+res.data, '_blank');

        }).catch(error => {
          this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
          this.showLoading = false;
        });
    },
    OT()
    {
        var fecha = new Date();
        /*this.ot = {
            'fecha' : fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate(),
            'hora' : fecha.getHours() + ":" + fecha.getMinutes(),
            'vehiculo' : this.seleccionado.nombre,
            'idVehiculo' : this.seleccionado.id,
            'usuario': this.userData.id,
            'cuenta' : {},
            'taller' : {},
            'mantenimiento' : "CORRECTIVO",
            'fallas' : this.seleccionados,
        };*/
        for ( var i = 0; i < this.seleccionados.length; i++) 
        {
            //this.ot.cuenta = this.seleccionados[i].Cuenta_idDato;
            this.ot.cuenta = parseInt(this.seleccionados[i].Cuenta_idDato);
        }

        this.ot.fecha = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
        this.ot.hora = fecha.getHours() + ":" + fecha.getMinutes();
        this.ot.vehiculo = this.seleccionado.nombre; 
        this.ot.idVehiculo = this.seleccionado.id; 
        this.ot.usuario = this.userData.id;
        //this.ot.cuenta = {}; 
        //this.ot.taller = {}; 
        this.ot.mantenimiento = "CORRECTIVO"; 
        this.ot.fallas = this.seleccionados;
    },
},
computed: {
   /* statusVariant() {
      const statusColor = {
        Aprobado      : 'light-sucess',
        Noaprobado    : 'light-danger',
        Pendiente     : 'light-info',
      }

      return status => statusColor[status]
    },*/
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() 
  {
        const fecha = new Date()
        var day = fecha.getDate()
        var month = fecha.getMonth() + 1
        var year = fecha.getFullYear()
        this.fechaInicio = year+'-'+month+'-01'
        this.fechaFin = year+'-'+month+'-'+day
        this.yvehiculo = { idVehiculo:'0', placaVeh: 'TODOS' };
        this.estado = "TODOS";
        this.Listar();

        this.$http.get('/LiberAPP/Vehiculo/Select').then(res => {
            this.yvehiculos = res.data;
            this.yvehiculos.unshift({idVehiculo: '0', placaVeh: 'TODOS' });
        }).catch(error => {
            this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA PESADA').then(res => {
            this.pcomponentes = res.data.componentes;
            this.pidReporte = res.data.reporte;
            this.pversionRep = res.data.version;
            this.componentes = res.data.componentes;
            this.idReporte = res.data.reporte;
            this.versionRep = res.data.version;
          }).catch(error => {
            this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA LIVIANA').then(res => {
            this.lcomponentes = res.data.componentes;
            this.lidReporte = res.data.reporte;
            this.lversionRep = res.data.version;
          }).catch(error => {
            this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res => {
            this.cuentas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Dato/Select/TALLER/MANTENIMIENTO').then(res => {
            this.talleres = res.data;
            this.ot.taller = { idDato: res.data[0].idDato, valorDat: res.data[0].valorDat };
        }).catch(error => {
            this.Toast(true,'danger','Taller','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Persona/Select').then(res => {
            this.personas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>

