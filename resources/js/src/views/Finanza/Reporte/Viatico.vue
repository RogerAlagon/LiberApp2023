<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Buscar por:">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <h6>Desde:</h6>
                <b-form-datepicker v-model="yfinicio" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="3">
                <h6>Hasta:</h6>
                <b-form-datepicker v-model="yffin" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="2">
                <div class="demo-inline-spacing">
                    <b-button variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>
    <b-card>
        <b-row>
            <b-col md="9" xl="9" class="text-left">
                <h4> HISTORIAL DE SOLICITUD DE FONDOS</h4>
            </b-col>
            <!--<b-col md="6" xl="4" class="text-right">
                <b-button variant="success">procesar</b-button>
            </b-col>-->
            <b-col md="3" xl="3" class="text-left">
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
        </b-row><br>

    <!---------------------------------- tabla -------------------------------->
    <vue-good-table
        :columns="columns" :rows="montos" :rtl="direction"
        :search-options="{ enabled: true, externalQuery: searchTerm }"
        >

        <template slot="table-row" slot-scope="props">

            <!--Columna Accion ---->
            
            <!--<span v-if="props.column.field === 'action'">
                <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.formattedRow)">
                    <feather-icon icon="Trash2Icon"/>
                </b-button>
            </span>
            <span v-if="props.column.field === 'acciones'">
                <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                    <feather-icon icon="Edit2Icon"/>
                </b-button>
            </span>-->
            <span v-if="props.column.field === 'estadoMon'">
                <b-badge variant="warning" v-if="props.row.estadoMon == 'SOLICITADO'">SOLICITADO</b-badge>
                <b-badge variant="primary" v-else-if="props.row.estadoMon == 'APROBADO'">APROBADO</b-badge>
                <b-badge variant="danger" v-else-if="props.row.estadoMon == 'ANULADO'">NO APROBADO</b-badge>
                <b-badge variant="success" v-else-if="props.row.estadoMon == 'APLICADO'">DEPOSITADO</b-badge>
                <b-badge variant="secondary" v-else-if="props.row.estadoMon == 'RENDIDO'">RENDIDO</b-badge>
            </span>


            <!-- Column: Common -->
            <span v-else>
                {{ props.formattedRow[props.column.field] }}
            </span>
        </template>
    </vue-good-table>
  </b-card>
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
            <b-col md="6" xl="6">
                <b-form-group label="ID">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                        <b-form-input v-model="monto.idMonto" readonly/>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="6" xl="6">
                <b-form-group label="Estado">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <b-form-select v-model="monto.estadoMon" :options="estados" :disabled="terminado"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group label="Observación">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="monto.observacionMon"/>
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
                <b-button variant="warning" size="sm" @click="Actualizar" :disabled="showLoading">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Actualizar</span>
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
   BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
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
        columns: [
            { label: 'ID', field: 'idMonto'},
            { label: 'Tipo', field: 'concepto'},
            { label: 'Estado', field: 'estadoMon'},
            { label: 'Trabajador', field: 'trabajadorPer'},
            { label: 'Fec. Solicitud', field: 'fsolicitudMon'},
            { label: 'Fec. Aprobación', field: 'faprobacionMon'},
            { label: 'Fec. Depósito', field: 'faplicacionMon'},
            { label: 'Fec. Rendición', field: 'frendicionMon'},
            { label: 'Monto', field: 'totalMon'},
            { label: 'Solicitado Por', field: 'nombreUsu'},
            { label: 'Detalle', field: 'detalleMon'}
        ],

        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'warning',
        headerTitleVariant: 'EDITAR RENDICIÓN',
        bodyBgVariant: 'light',
        bodyTextVariant: 'warning',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showLoading: false,
        boton: false,

        /**************************** entorno ****************************/      
        ypersonas:[],
        montos: [],
        estados: [
            { value: 'SOLICITADO', text: 'SOLICITADO EL' },
            { value: 'APROBADO', text: 'APROBADO EL' },
            { value: 'APLICADO', text: 'DEPOSITADO EL' },
            { value: 'RENDIDO', text: 'RENDIDO EL' },
        ],
        ypersona: {},
        yfinicio: '',
        yffin: '',
        estado: "",
        seleccionado: {
            estado: "",
        },
        showLoading: false,

        /**************************** formulario ****************************/   
        monto: {
             IdMonto: 0,
             estadoMon: "",
             conceptoMon: "",
             detalleMon: "",
             faprobacionMon: "",
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

        this.$http.get('/LiberAPP/Monto/Historial/'+this.estado+'/'+this.yfinicio+'/'+this.yffin)
        .then(res => {
            this.showLoading = false;
            this.montos = res.data;
            this.seleccionado.estado = this.estado;
        })
        .catch(error => {
            this.Toast(true,'danger','Viáticos','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },
    Actualizar()
    {
        this.showLoading = true;

        var jsonMonto = JSON.stringify(this.monto);

        this.$http.post('/LiberAPP/Monto/ProcesarUnidad',
        {
            monto: jsonMonto,
        })
        .then(res => {
            this.Toast(true,'primary','Actualizar Monto','Actualizado Correctamente');
            this.showModal = false;
            this.showLoading = false;
            this.Listar();
        })
        .catch(error => {
            this.Toast(true,'danger','Actualizar Tramo','Error al actualizar el registro: '+error);
            this.showLoading = false;
        });
    },
    Editar(prm_monto)
    {
        this.boton = true;
        //Asignando el valor
        this.monto = Object.assign({}, prm_monto);
        if(this.monto.estadoMon != "APLICADO")
            this.terminado = true;
        else
            this.terminado = false;
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
    this.$http.get('/LiberAPP/Persona/Select')
      .then(res => {
          this.ypersonas = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
  },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>

