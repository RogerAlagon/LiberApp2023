<template>
    <b-row>
        <b-col md="12" xl="12">
            <b-card>
                <b-row>
                    <b-col md="6" xl="3">
                        <b-form-group label="Eje X:">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-select v-model="yejex" :options="ejexs"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="3">
                        <b-form-group label="Eje Y:">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-select v-model="yejey" :options="ejeys"/>
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
                    <b-col md="12" xl="12" class="text-center">
                        <b-button variant="info" @click="Analizar()" :disabled="showLoading">
                            <feather-icon icon="BarChart2Icon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Generar Reporte</span>
                        </b-button>
                    </b-col>
                </b-row>
            </b-card>
            <b-card>
                <app-collapse>
                    <app-collapse-item title="Filtros:">
                        <b-row>
                            <b-col md="12" xl="12">
                                <b-form-group label="Conductores:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select label="trabajadorPer" v-model="fpersona" :options="personas" :reduce="persona => persona.idPersona" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" xl="6">
                                <b-form-group label="Vehiculos:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select v-model="fvehiculo" :options="vehiculos" :reduce="vehiculo => vehiculo.idVehiculo" label="placaVeh" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" xl="6">
                                <b-form-group label="Cuentas:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select v-model="fcuenta" :options="cuentas" :reduce="cuenta => cuenta.idCuenta" label="nombreCue" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col md="12" xl="12">
                                <b-form-group label="Clientes:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select v-model="fexterno" :options="externos" :reduce="externo => externo.idExterno" label="nombreExt" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" xl="6">
                                <b-form-group label="Grifos:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select v-model="fgrifo" :options="grifos" :reduce="grifo => grifo.idGrifo" label="nombreGri" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" xl="6">
                                <b-form-group label="Ciudades:">
                                    <b-input-group class="input-group-merge">
                                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                        <v-select v-model="fciudad" :options="ciudades" :reduce="ciudad => ciudad.ciudadGri" label="ciudadGri" style="flex: 1;" multiple/>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </app-collapse-item>
                </app-collapse>
            </b-card>
        </b-col>
        <b-col md="12" xl="12" v-if="!showLoading && aparecer">
            <b-card no-body>
                <b-card-header>
                    <div>
                        <b-card-title class="mb-1">GRÁFICO CONSOLIDADO</b-card-title>
                    </div>
                    <!-- badge -->
                    <!--<div class="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
                        <h5 class="font-weight-bolder mb-0 mr-1">$ 100,000</h5>
                        <b-badge variant="light-secondary">
                            <feather-icon icon="ArrowDownIcon" size="16" class="text-danger mr-25"/>
                            <span class="align-middle">20%</span>
                        </b-badge>
                    </div>-->
                    <!--/ badge -->
                </b-card-header>
                <b-card-body>
                    <vue-apex-charts
                        type="bar"
                        height="400"
                        :options="apexChatData.barChart.chartOptions"
                        :series="apexChatData.barChart.series"
                    />
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker,  BCardHeader, BCardTitle } from 'bootstrap-vue'

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'
import vSelect from 'vue-select'

export default {
  components: {
    VueApexCharts,
    BToast,    
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
    BCardHeader,
    BCardTitle,
    AppCollapse,
    AppCollapseItem,
  },
  data() {
    return {
        apexChatData,
        /**************************** entorno ****************************/  
        ejexs: ["POR PLACA","POR TRABAJADOR","POR CIUDAD","POR GRIFO","POR CLIENTE","POR CUENTA","POR MESES"],
        ejeys: ["POR COMBUSTIBLE","POR FACTURACION","POR RENDIMIENTO"],
        vehiculos: [],
        grifos: [],
        ciudades: [],
        externos: [],
        personas: [],
        cuentas: [],

        yejex: '',
        yejey: '',
        yfinicio: '',
        yffin: '',

        showLoading: false,
        aparecer: false,
        /**************************** filtro ****************************/ 
        fvehiculo: [],
        fgrifo: [],
        fciudad: [],
        fexterno: [],
        fpersona: [],
        fcuenta: [],
    }
  },
  methods : {
        Analizar()
        {
            this.showLoading = true;
            this.aparecer = true;

            var jvehiculo = JSON.stringify(this.fvehiculo);
            var jgrifo = JSON.stringify(this.fgrifo);
            var jciudad = JSON.stringify(this.fciudad);
            var jexterno = JSON.stringify(this.fexterno);
            var jpersona = JSON.stringify(this.fpersona);
            var jcuenta = JSON.stringify(this.fcuenta);

            this.$http.post('/LiberAPP/Abastecimiento/Analizar',
            {
                ejex: this.yejex,
                ejey: this.yejey,
                finicio: this.yfinicio,
                ffin: this.yffin,
                vehiculos: jvehiculo,
                grifos: jgrifo,
                ciudades: jciudad,
                externos: jexterno,
                personas: jpersona,
                cuentas: jcuenta,
            })
            .then(res => {
                this.apexChatData.barChart.chartOptions.xaxis.categories = res.data.ejex;
                this.apexChatData.barChart.series[0].data = res.data.ejey;
                
                this.showLoading = false;
                /*this.Toast(true,'success','Agregar Ruta','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Rutas();*/
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Ruta','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
    },
  created()
  {
    this.$http.get('/LiberAPP/Persona/Select')
      .then(res => {
          this.personas = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Personas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Vehiculo/Select')
      .then(res => {
          this.vehiculos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Vehiculos','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Externo/Select')
      .then(res => {
          this.externos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Clientes','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Cuenta/Select')
      .then(res => {
          this.cuentas = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Cuentas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Grifo/Select')
      .then(res => {
          this.grifos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Cuentas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Grifo/Ciudades')
      .then(res => {
          this.ciudades = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Listar Cuentas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
@import '~@core/scss/vue/libs/chart-apex.scss';
</style>
