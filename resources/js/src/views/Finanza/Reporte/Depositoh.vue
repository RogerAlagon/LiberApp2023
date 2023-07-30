<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Buscar por:">
                    <b-form-select v-model="estado" :options="estados"/>
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
            <b-col md="6" xl="3">
                <b-form-group label="Tipo Viático:">
                    <v-select label="valorDat" :options="viaticos" v-model="yviatico" @input="viatico = yviatico.idDato" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="12" xl="8">
                <b-form-group label="Trabajador:">
                    <v-select v-model="ypersona" :options="ypersonas" label="trabajadorPer" @input="persona = ypersona.idPersona" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="12" xl="4" class="text-center">
                <div class="demo-inline-spacing">
                    <b-button variant="primary" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                    <b-button variant="success" @click="Excel()" :disabled="showLoading">
                        <feather-icon icon="FileTextIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Excel</span>
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
        compactMode
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
            { label: 'Trabajador', field: 'trabajadorPer'},
            { label: 'Tipo', field: 'concepto'},
            { label: 'Estado', field: 'estadoMon'},
            { label: 'Fec. Solicitud', field: 'fsolicitudMon'},
            { label: 'Fec. Aprobación', field: 'faprobacionMon'},
            { label: 'Fec. Depósito', field: 'faplicacionMon'},
            { label: 'Fec. Rendición', field: 'frendicionMon'},
            { label: 'Monto', field: 'totalMon'},
            { label: 'Rendido', field: 'rendicionMon'},
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
        viaticos: [],
        ypersona: {},
        yfinicio: '',
        yffin: '',
        estado: "SOLICITADO",
        viatico: 0,
        persona: 0,
        ypersona: {idPersona:0, trabajadorPer:'TODOS'},
        yviatico: {idDato:0, valorDat:'TODOS'},
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

        this.$http.get('/LiberAPP/Monto/Historial/'+this.estado+'/'+this.yfinicio+'/'+this.yffin+'/'+this.persona+'/'+this.viatico)
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
    Excel()
    {
        window.open('/LiberAPP/Monto/ExportarHistorial/'+this.estado+'/'+this.yfinicio+'/'+this.yffin+'/'+this.persona+'/'+this.viatico, '_blank');
    }
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
    var today = new Date();

    this.yfinicio = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";
    this.yffin = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    this.$http.get('/LiberAPP/Persona/Select')
      .then(res => {
          this.ypersonas = res.data;
          this.ypersonas.unshift({idPersona:0, trabajadorPer:'TODOS'});
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/VIATICO/PERSONAL')
        .then(res=> {
            this.viaticos = res.data;
            this.viaticos.unshift({idDato:0, valorDat:'TODOS'});
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
<style lang="scss">
    .vgt-responsive
    {
        height: 70vh;
        overflow: scroll;
        position: relative;
    }
    .vgt-responsive #vgt-table
    {
        position: relative;
    }
    
    .vgt-responsive #vgt-table thead th /*fijar filas thead*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th/*posicionar primera fila */
    {
      top: 0 !important;
    }
    /*.vgt-responsive #vgt-table thead tr:nth-child(1) th
    {
      top: 0 !important;
    }*/
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child/*posicionar primera columna thead*/
    {
        left: 0;
        z-index: 2;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna thead*/
    {
        left: 30pt;
        z-index: 2;
    }
    .vgt-responsive #vgt-table tbody th/*fijar columnas*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table tbody tr td:nth-child(1)/*posicionar primera columna*/
    {
        left: 0;
        position: -webkit-sticky; /* for Safari */
        
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table tbody tr td:nth-child(2)/*posicionar segunda columna*/
    {
        left: 30pt;
        position: -webkit-sticky; /* for Safari */

        position: sticky;
        left: 25pt;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
</style>

