<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="Operadores">
                        <v-select label="trabajadorPer" :value="0" v-model="persona" :options="personas" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grifos">
                        <v-select label="nombreGri" v-model="grifo" :options="grifos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Operación">
                        <v-select label="valorDat" v-model="cuenta" :options="cuentas" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                  </div>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Vehiculos">
                        <v-select label="placaVeh" v-model="vehiculo" :options="vehiculos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Desde">
                        <flat-pickr v-model="fechaInicio" class="form-control" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hasta">
                        <flat-pickr v-model="fechaFin" class="form-control" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="warning" :href="'/LiberAPP/Abastecimiento/Reporte/ExportarAbastecimiento/' + this.persona.idPersona + '/' + this.grifo.idGrifo + '/' + this.cuenta.idCuenta + '/' + 
                            this.vehiculo.idVehiculo + '/' + this.estado + '/' + this.fechaInicio + '/' + this.fechaFin + '/' + this.externo.idExterno +'/'" target="_blank">
                            <feather-icon icon="FileTextIcon" class="mr-50"/>Exportar Registros
                        </b-button>
                    </div>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Clientes">
                        <v-select label="nombreExt" v-model="externo" :options="externos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Estado">
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-form-group>
                </b-col>
            </b-row>
                <!---------------------------------- tabla -------------------------------->
            <vue-good-table
              :columns="columns" :rows="abastecimientod" :rtl="direction"
              :search-options="{ enabled: true, externalQuery: searchTerm }"
              :row-style-class="rowStyleClassFn"
              :pagination-options="{enabled: true, perPage:pageLength }" >
              <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'vale'">
                    <!--<span v-if="props.column.field === 'vale'">-->
                        <b-dropdown
                            id="dropdown-1"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            text="Imagenes"
                            variant="primary"
                            v-if="props.row.vale != null">
                            <b-dropdown-item v-if="props.row.vale != null" :href="MostrarImg(props.row.vale)" target="_blank">Vale</b-dropdown-item>
                            <b-dropdown-item v-if="props.row.surtidor != null" :href="MostrarImg(props.row.surtidor)" target="_blank">Surtidor</b-dropdown-item>
                            <b-dropdown-item v-if="props.row.kilometraje != null" :href="MostrarImg(props.row.kilometraje)" target="_blank">Kilometraje</b-dropdown-item>
                            <b-dropdown-item v-if="props.row.tanquei != null" :href="MostrarImg(props.row.tanquei)" target="_blank">Tanque Izq.</b-dropdown-item>
                            <b-dropdown-item v-if="props.row.tanqued != null" :href="MostrarImg(props.row.tanqued)" target="_blank">Tanque Der.</b-dropdown-item>
                        </b-dropdown>
                        <!--<a v-if="props.row.vale != null" :href="MostrarImg(props.row.vale)" target="_blank">
                        <a :href="'data:image/jpeg;base64,'+ props.row.vale" target="_blank">-->
                            <!--<b-button v-if="props.row.vale != null" variant="primary" size="sm">Vale</b-button> 
                        </a>-->
                    </span>
                    <!--<span v-else-if="props.column.field == 'surtidor'">
                        <a v-if="props.row.surtidor != null" :href="MostrarImg(props.row.surtidor)" target="_blank">
                        <a v-if="props.row.surtidor != null" :href="'data:image/jpeg;base64,'+ props.row.surtidor" target="_blank">
                            <b-button v-if="props.row.surtidor != null" variant="primary" size="sm">Surtidor</b-button> 
                        </a>
                    </span>
                    <span v-else-if="props.column.field === 'kilometraje'">
                        <a v-if="props.row.kilometraje != null" :href="MostrarImg(props.row.kilometraje)" target="_blank">
                        <a v-if="props.row.kilometraje != null" :href="'data:image/jpeg;base64,'+ props.row.kilometraje" target="_blank">
                            <b-button v-if="props.row.kilometraje != null" variant="primary" size="sm">Kilometraje</b-button> 
                        </a>
                    </span>
                    <span v-else-if="props.column.field === 'tanquei'">
                        <a v-if="props.row.tanquei != null" :href="MostrarImg(props.row.tanquei)" target="_blank">
                        <a v-if="props.row.tanquei != null" :href="'data:image/jpeg;base64,'+ props.row.tanquei" target="_blank">
                            <b-button v-if="props.row.tanquei != null" variant="primary" size="sm">Tanque Izq.</b-button> 
                        </a>
                    </span>
                    <span v-else-if="props.column.field === 'tanqued'">
                        <a v-if="props.row.tanqued != null" :href="MostrarImg(props.row.tanqued)" target="_blank">
                        <a v-if="props.row.tanqued != null" :href="'data:image/jpeg;base64,'+ props.row.tanqued" target="_blank">
                            <b-button v-if="props.row.tanqued != null" variant="primary" size="sm">Tanque Der.</b-button>
                        </a>
                    </span>-->
              </template>
              <!---------------------------------- paginación -------------------------------->
                <template slot="pagination-bottom" slot-scope="props">
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="d-flex align-items-center mb-0 mt-1">
                            <span class="text-nowrap">
                                {{ $t('message.pagelength') }}
                            </span>
                            <b-form-select v-model="pageLength" :options="['3','5','10']" class="mx-1" @input="(value)=>props.perPageChanged({currentPerPage:value})"/>
                            <span class="text-nowrap">  {{ $t('message.of') }} {{ props.total }} {{ $t('message.pageText2') }} </span>
                        </div>
                        <div>
                            <b-pagination :value="1" :total-rows="props.total" :per-page="pageLength" first-number last-number align="right" prev-class="prev-item"next-class="next-item" class="mt-1 mb-0" @input="(value)=>props.pageChanged({currentPage:value})">
                                <template #prev-text>
                                    <feather-icon icon="ChevronLeftIcon" size="18" />
                                </template>
                                <template #next-text>
                                    <feather-icon icon="ChevronRightIcon" size="18" />
                                </template>
                            </b-pagination>
                        </div>
                    </div>
                </template>
            </vue-good-table>
        </b-card>
    </div>
</template>

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
        flatPickr
  },
  directives: {
    Ripple,
  },
 
data() {
    return {
        /**************************** elementos de ux ****************************/
        dir: false,
        pageLength: 50,
        searchTerm: '',
        tabIndex: 1,

        /**************************** tabla ****************************/
        columns: [
            { label:'ID', field:'idAbastecimientod', hidden:true, }, 
            { label:'Fecha', field:'fechaAba'},
            { label:'Operación', field:'nombreCue'},
            { label:'Operador', field:'trabajadorPer'},
            { label:'Reten', field:'retenPer', hidden:true, },
            { label:'Galones', field:'galonesAba'}, 
            { label:'Rendimiento', field:'rendimientoAba', sortable: true, formatFn: this.formatear, },
            { label:'Grifo', field:'nombreGri'},
            { label:'Diferencia km', field:'diferenciakmAba'},
            //{ label:'Ruta', field:'rutaAba'},
            { label:'Precio', field:'precioCom'},
            { label:'Observación', field:'observacionAba'}, 
            { label:'Cliente', field:'nombreExt'},
            { label:'Estado', field:'estadoAba', hidden:true, },
            { label:'Placa', field:'placaVeh'},
            { label:'ID abs', field:'Abastecimientoc_idAbastecimiento', hidden:true, },
            { label:'Kilometraje', field:'kilometrajeKil'},
            //{ label:'Imagenes ', field:'vale'},
            /*{ label:'Surtidor', field:'surtidor'},
            { label:'Kilometraje Img.', field:'kilometraje'},
            { label:'Tanque Izq.', field:'tanquei'},
            { label:'Tanque Der.', field:'tanqued'},*/
        ],
        /**************************** modal ****************************/
        showLoading: false,

        /**************************** entorno ****************************/      
        abastecimientod:[],
        personas:[],
        grifos:[],
        cuentas:[], 
        vehiculos:[],
        externos:[],
        estados: [
            { value:'0', text:'TODOS'},
            { value:'SOLICITADO', text:'SOLICITADO' },
            { value:'APROBADO', text:'APROBADO' },
            { value:'REGISTRADO', text:'REGISTRADO' },
            { value:'FACTURADO', text:'FACTURADO' },
            { value:'ANULADO', text:'ANULADO' },
            { value:'APLICADO', text:'APLICADO' },
        ],
        persona: { idPersona:'0', trabajadorPer:'TODOS' }, 
        grifo: { idGrifo:'0', nombreGri:'TODOS' },
        cuenta: { idDato:'0', valorDat:'TODOS' },
        vehiculo: { idVehiculo:'0', placaVeh:'TODOS' },
        externo: { idExterno:'0', nombreExt:'TODOS'},
        estado: '0',
        fechaInicio: "",
        fechaFin: "",
        imagen:"",
        fechas: [
        ]
    }
},
methods: {
    formatear: function( value ) {
        let formateoN = parseInt(value)
        formateoN = formateoN.toFixed(4)
        if ( !isNaN(formateoN) ) { return formateoN; }
    },
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
    rowStyleClassFn(abastecimientod) {
      return abastecimientod.vale != null ? "green":"";
    },
    MostrarImg( imagen)
    {
        let salida = '/LiberAPP/Abastecimiento/Reporte/Imagen/'+imagen
        return salida;

        /*this.$http.get('/LiberAPP/Abastecimiento/Reporte/Imagen/'+imagen).then(res => {
            imagen = res
            return imagen;
        })*/

        //let img = '/LiberAPP/Abastecimiento/Reporte/Imagen/'+imagen 
        //let salida = 'data:image/jpeg;base64,'+ img
    },
    Listar()
    {
        this.showLoading = true; 
        /*console.log( 'persona', this.persona );
        console.log( 'grifo' ,this.grifo );
        console.log( 'cuenta', this.cuenta );
        console.log( 'vehiculo', this.vehiculo );
        console.log( 'estado', this.estado );
        console.log( 'fechaInicio ', this.fechaInicio );
        console.log( 'fechaFin ', this.fechaFin );*/

        this.$http.get('/LiberAPP/Abastecimiento/Reporte/Detalle/' + this.persona.idPersona + '/' + this.grifo.idGrifo + '/' + this.cuenta.idDato + '/' + 
                        this.vehiculo.idVehiculo + '/' + this.estado + '/' + this.fechaInicio + '/' + this.fechaFin + '/' + this.externo.idExterno + '/').then(res=> {
            this.abastecimientod = res.data;
            this.showLoading = false;
        })
        .catch(error => {
            this.Toast(true,'danger','detalle abastecimiento','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
    },
    Reporte()
    {
        this.showLoading = true; 
        this.$http.get('/LiberAPP/Abastecimiento/Reporte/ExportarAbastecimiento/' + this.persona.idPersona + '/' + this.grifo.idGrifo + '/' + this.cuenta.idCuenta + '/' + 
                        this.vehiculo.idVehiculo + '/' + this.estado + '/' + this.fechaInicio + '/' + this.fechaFin + '/').then(res=> {
           console.log( res.data );
            this.showLoading = false;
        })
        .catch(error => {
            this.Toast(true,'danger','detalle abastecimiento','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
    },
},
computed: {
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
    /*this.$http.get('/LiberAPP/Abastecimiento/Select/Reporte/detalle/').then(res => {
        this.abastecimientod = res.data;
    })
    .catch(error => {
        console.log( error )
        this.Toast(true,'danger','Cargando Detalle Abastecimiento','Error al cargar los registros: '+error);
        this.showLoading = false;
    });*/
    this.$http.get('/LiberAPP/Persona/Select').then(res=> {
        this.personas = res.data;
        this.personas.unshift({idPersona:'0', trabajadorPer:'TODOS'});
    }).catch(error => {
        this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
        this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Grifo/Select').then(res=> {
        this.grifos = res.data;
        this.grifos.unshift({idGrifo:'0', nombreGri:'TODOS'})
    })
    .catch(error => {
        this.Toast(true,'danger','Cargando Grifos','Error al cargar los registros: '+error);
        this.showLoading = false;
    })
     //this.$http.get('/LiberAPP/Cuenta/Select').then(res=> {
     this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res=> {
        this.cuentas = res.data;
        this.cuentas.unshift({idDato:'0', valorDat:'TODOS'});
    }).catch(error => {
        this.Toast(true,'danger','Cargando Cuentas','Error al cargar los registros: '+error);
        this.showLoading = false;
    })

    this.$http.get('/LiberAPP/Vehiculo/Select').then(res=> {
        this.vehiculos = res.data;
        this.vehiculos.unshift({idVehiculo:'0', placaVeh:'TODOS'})
    })
    .catch(error => { 
        this.Toast(true, 'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
        this.showLoading = false;
    })

    this.$http.get('/LiberAPP/Abastecimiento/Reporte/FechaIni').then(res=> {
        this.fechaInicio = res.data[0].fechaIni;
        this.fechaFin = res.data[0].fechaFin;
    })
    .catch(error => {
        this.Toast(true,'danger','Cargando Fechas','Error al cargar los registros: '+error);
        this.showLoading = false;
    })

    this.$http.get('/LiberAPP/Externo/Select').then(res=> {
        this.externos = res.data;
        this.externos.unshift({idExterno:'0', nombreExt:'TODOS'});
    })
    .catch(error => {
        this.Toast(true,'danger','Externos','Error al cargar los registros: ' + error);
    })
  },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
<style>
.green {
  background-color: #C0C0C0;
}
</style>
