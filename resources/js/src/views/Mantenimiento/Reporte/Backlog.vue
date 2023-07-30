<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Vehiculo">
                    <v-select label="placaVeh" v-model="yvehiculo" :options="yvehiculos" style="flex: 1;" @input="Listar()"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Motivo">
                    <b-form-select v-model="tipo" :options="tipos"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Estado">
                    <b-form-select v-model="estado" :options="estados"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Cuenta">
                    <v-select label="valorDat" style="flex: 1;" v-model="ycuenta" :options="cuentas" />
                    <!--<v-select label="valorDat" style="flex: 1;" v-model="ycuenta" :reduce="cuenta => cuenta.idDato" :options="cuentas" />-->
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Fecha Inicio">
                  <b-form-datepicker v-model="yfinicio" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                  </b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Fecha Fin">
                  <b-form-datepicker v-model="yffin" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                  </b-form-datepicker>
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
                <b-button variant="warning" :href="'/LiberAPP/Falla/Exportar/'+this.yvehiculo.idVehiculo+'/'+this.estado+'/'+this.yfinicio+'/'+this.yffin+'/'+this.ycuenta.idDato+'/'+this.tipo" target="_blank">
                    <feather-icon icon="FileTextIcon" class="mr-50"/>
                    <span class="align-middle">Exportar</span>
                </b-button>
            </b-col>
        </b-row>
    </b-card>
    <b-card>
        <!---------------------------------- tabla -------------------------------->
        <vue-good-table
            :columns="tcolumnas" :rows="backlogs" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
        >
            <!---------------------------------- columnas especiales -------------------------------->
            <template slot="table-row" slot-scope="props">
                <!---------------------------------- acciones -------------------------------->
                <span v-if="props.column.field === 'tipoBac'">
                    <b-badge variant="light-warning" size="sm" v-if="props.row.tipoBac == 'CORRECTIVO'">CORRECTIVO</b-badge>
                    <b-badge variant="light-primary" size="sm" v-else-if="props.row.tipoBac == 'PREVENTIVO'">PREVENTIVO</b-badge>
                    <b-badge variant="light-danger" size="sm" v-else-if="props.row.tipoBac == 'CAMPANA'">CAMPAÑA</b-badge>
                </span>
                <span v-else-if="props.column.field === 'origen'">
                    <a :href="'/LiberAPP/Reportef/Pdf/'+props.row.Reporte_idReporte" target="_blank" class="btn btn-flat-danger btn-sm text-bold" v-if="props.row.tipoBac == 'CORRECTIVO'">{{props.row.Origen_idOrigen}}</a>
                </span>
                <!-- Column: Common -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
    </b-card>
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
            { label: 'Vehiculo.', field: 'placaVeh'},
            { label: 'Tipo', field: 'tipoBac'},
            { label: 'Origen', field: 'origen'},
            { label: 'Mantenimiento', field: 'mantenimiento'},
            { label: 'Tipo Mant.', field: 'tipo_preventivo'},
            { label: 'Frecuencia', field: 'frecuencia'},
            { label: 'Apartado', field: 'nombreApa'},
            { label: 'Componente', field: 'nombreCom'},
            { label: 'Detalle', field: 'detalleFal'},
            { label: 'Motivo', field: 'motivoRep'},
            { label: 'Estado', field: 'estadoFal'},
            { label: 'Fecha', field: 'fechaRep'}
        ],


        /**************************** entorno ****************************/   
        estadoBoton: false,   
        yvehiculos:[],
        personas: [],
        kilometrajes: [],
        estados: [
            { value: 'TODOS', text: 'TODOS' },
            { value: 'INICIADO', text: 'INICIADO' },
            { value: 'PENDIENTE', text: 'PENDIENTE' },
            { value: 'SOLICITADO', text: 'SOLICITADO' },
            { value: 'TERMINADO', text: 'TERMINADO' },
            { value: 'REPROGRAMADO', text: 'REPROGRAMADO'},
        ],
        tipos: [
            { value: 'TODOS', text: 'TODOS' },
            { value: 'AUXILIO MECANICO', text: 'AUXILIO MECANICO' },
            { value: 'REPORTE EN RUTA', text: 'REPORTE EN RUTA' },
            { value: 'REPORTE FALLA', text: 'REPORTE FALLA' },
            { value: 'SINIESTRO', text: 'SINIESTRO' },

            /*{ value: 'TERMINADO', text: 'TERMINADO' },
            { value: 'ENTREGADO', text: 'ENTREGADO' },
            { value: 'REPROGRAMADO', text: 'REPROGRAMADO' },*/
        ],
        motivo: [
            { value: 'REPORTE EN RUTA', text: 'REPORTE EN RUTA' },
            { value: 'REPORTE FALLA', text: 'REPORTE FALLA' },
            { value: 'AUXILIO MECANICO', text: 'AUXILIO MECANICO' },
            { value: 'ATENCION TERCERO', text: 'ATENCION TERCERO' },
        ],
        
        fallas: [],
        backlogs: [],

        seleccionados: [],
        idReporte: 0,
        versionRep: 0,
        talleres: [],
        cuentas: [],
        mantenimientos: ["CORRECTIVO","PREVENTIVO","PREDICTIVO","AUXILIO","CAMPAÑA"],

        yvehiculo: {},
        estado: "PENDIENTE",
        tipo: "TODOS",
        showLoading: false,

        componentes: [],
        zfalla: [],
        zdetalle: "",
        zpersona: 0,
        zcuenta: 0,

        lcomponentes: {},
        lidReporte: 0,
        lversionRep: 0,

        pcomponentes: {},
        pidReporte: 0,
        pversionRep: 0,
        
        yfinicio:'', 
        yffin:'',
        ycuenta:'',

        userData: JSON.parse(localStorage.getItem('userData')),

        /**************************** formulario ****************************/   

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

        //this.$http.get('/LiberAPP/Backlog/Listar/'+this.yvehiculo.idVehiculo+'/'+this.tipo)
        //+this.yvehiculo.idVehiculo+'/'+this.estado+'/'+this.yfinicio+'/'+this.yffin+'/'+this.ycuenta.idDato+'/'+this.tipo
        this.$http.get('/LiberAPP/Backlog/ListarReporte/'+this.yvehiculo.idVehiculo+'/'+this.tipo+'/'+this.estado+'/'+this.ycuenta.idDato+'/'+this.yfinicio+'/'+this.yffin)
        .then(res => {
            this.showLoading = false;
            this.backlogs = res.data;

            this.backlogs = this.backlogs.map(v => ({...v, seleccionado: false}));

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
        this.yfinicio = year+'-'+month+'-01'
        this.yffin = year+'-'+month+'-'+day
        this.yvehiculo = { idVehiculo:'0', placaVeh: 'TODOS' };
        this.ycuenta = { idDato:'0', valorDat: 'TODOS'};
        this.estado = "TODOS";
        this.Listar();

        this.$http.get('/LiberAPP/Vehiculo/Select').then(res => {
            this.yvehiculos = res.data;
            this.yvehiculos.unshift({idVehiculo: '0', placaVeh: 'TODOS' });
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


    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>

