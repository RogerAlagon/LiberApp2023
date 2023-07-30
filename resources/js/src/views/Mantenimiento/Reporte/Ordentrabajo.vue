<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="Cuenta">
                        <v-select label="valorDat" style="flex: 1;" v-model="ycuenta" :options="cuentas" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Vehiculo">
                        <v-select label="placaVeh" v-model="yvehiculo" :options="yvehiculos" style="flex: 1;"/>
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
                <b-col md="6" xl="3">
                    <b-form-group label="Estado">
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-form-group>
                </b-col>
                <!--<b-col md="6" xl="3">
                    <b-form-group label="Tipo de Mantenimiento">
                        <b-form-select v-model="mantt" :options="mantenimiento"/>
                    </b-form-group>
                </b-col>-->
                <b-col md="6" xl="6">
                    <div class="demo-inline-spacing">
                        <b-button variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                        <b-button variant="warning" :href="'/LiberAPP/Ordent/Exportar/' + this.ycuenta.idDato + '/' + this.yvehiculo.idVehiculo + '/' + this.fechaInicio + '/' + this.fechaFin + '/' + this.estado + '/' + this.mantt" target="_blank">
                            <feather-icon icon="FileTextIcon" class="mr-50"/>Exportar Registros
                        </b-button>
                    </div>
                </b-col>     
            </b-row>
        </b-card>
        <b-card>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="ordentrabajo" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }">
                <!---------------------------------- columnas especiales ------------------------------>
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-formulario variant="warning" class="btn-icon rounded-circle" @click="Visualizar(props.formattedRow)">
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field === 'estadoOrd'">
                        <b-badge variant="light-warning" size="sm" v-if="props.row.estadoOrd == 'INICIADO'">INICIADO</b-badge>
                        <b-badge variant="light-primary" size="sm" v-else-if="props.row.estadoOrd == 'EN PROCESO'">EN PROCESO</b-badge>
                        <b-badge variant="light-success" size="sm" v-else-if="props.row.estadoOrd == 'TERMINADO'">TERMINADO</b-badge>
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
                <b-col md="12" xl="12">
                    <b-row>
                        <b-col md="4" xl="3">
                            <b-form-group label="Fecha de Inicio OT">
                                <b-form-input v-model="ot.fechaOrd" readonly/>
                             </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Cuenta">
                                <b-form-input v-model="ot.cuenta" readonly/>
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Taller">
                                <b-form-input v-model="ot.taller" readonly/>
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Placa">
                                <b-form-input v-model="ot.placaVeh" readonly/>
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Fecha de Termino OT">
                                <flat-pickr v-model="ot.ffinOrd" class="form-control" disabled/>
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Hora de Salida OT">
                                <cleave v-model="ot.hora" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" readonly />
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="3">
                            <b-form-group label="Estado">
                                <b-button v-if="ot.estadoOrd == 'INICIADO'" variant="warning" size="sm">INICIADO</b-button>
                                <b-button v-if="ot.estadoOrd == 'TERMINADO'" variant="success" size="sm">TERMINADO</b-button>
                                <b-button v-if="ot.estadoOrd == 'ANULADO'" variant="danger" size="sm">ANULADO</b-button>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                        <template v-if="correctivos.length > 0">
                            <tr>
                                <th colspan="5">CORRECTIVOS</th>
                            </tr>
                            <tr>
                                <th>NRO</th>
                                <th>APARTADO</th>
                                <th>COMPONENTE</th>
                                <th>FALLA</th>
                                <th>ESTADO</th>
                            </tr>
                            <tr v-for="(ucorrectivo,indice) in correctivos">
                                <td>{{ indice+1 }}</td>
                                <td>{{ ucorrectivo.apa }}</td>
                                <td>{{ ucorrectivo.com }}</td>
                                <td>{{ ucorrectivo.det }}</td>
                                <td v-if="ucorrectivo.estadoTra == 'DEPRECIADO'">
                                    <b-badge variant="light-danger" size="sm">REPROGRAMADO</b-badge>
                                </td>
                                <td v-if="ucorrectivo.estadoTra !== 'DEPRECIADO'">
                                    <b-badge variant="light-success" size="sm" v-if="ucorrectivo.estadoTra =='TERMINADO'">{{ ucorrectivo.estadoTra }}</b-badge>
                                    <b-badge variant="light-warning" size="sm" v-if="ucorrectivo.estadoTra =='INICIADO'">{{ ucorrectivo.estadoTra }}</b-badge>
                                </td>
                            </tr>
                        </template>
                        <template v-if="preventivos.length > 0">
                            <tr>
                                <th colspan="5">PREVENTIVOS</th>
                            </tr>
                            <tr>
                                <th>NRO</th>
                                <th>GRUPO</th>
                                <th>TIPO PREVENTIVO</th>
                                <th>FRECUENCIA</th>
                                <th>ESTADO</th>
                            </tr>
                            <tr v-for="(upreventivo,indice) in preventivos">
                                <td>{{ indice+1 }}</td>
                                <td>{{ upreventivo.apa }}</td>
                                <td>{{ upreventivo.com }}</td>
                                <td>{{ upreventivo.det }}</td>
                                <td v-if="upreventivo.estadoTra == 'DEPRECIADO'">
                                    <b-badge variant="light-danger" size="sm">REPROGRAMADO</b-badge>
                                </td>
                                <td v-if="upreventivo.estadoTra !== 'DEPRECIADO'">
                                    <b-badge variant="light-success" size="sm" v-if="upreventivo.estadoTra =='TERMINADO'">{{ upreventivo.estadoTra }}</b-badge>
                                    <b-badge variant="light-warning" size="sm" v-if="upreventivo.estadoTra =='INICIADO'">{{ upreventivo.estadoTra }}</b-badge>
                                </td>
                            </tr>
                        </template>
                        <template v-if="campanas.length > 0">
                            <tr>
                                <th colspan="5">CAMPAÑAS</th>
                            </tr>
                            <tr>
                                <th>NRO</th>
                                <th>GRUPO</th>
                                <th>TIPO PREVENTIVO</th>
                                <th>FRECUENCIA</th>
                                <th>ESTADO</th>
                            </tr>
                            <tr v-for="(ucampana, indice) in campanas">
                                <td>{{ indice+1 }}</td>
                                <td>{{ ucampana.apa }}</td>
                                <td>{{ ucampana.com }}</td>
                                <td>{{ ucampana.det }}</td>
                                <td v-if="ucampana.estadoTra == 'DEPRECIADO'">
                                    <b-badge variant="light-danger" size="sm">REPROGRAMADO</b-badge>
                                </td>
                                <td v-if="ucampana.estadoTra !== 'DEPRECIADO'">
                                    <b-badge variant="light-success" size="sm" v-if="ucampana.estadoTra =='TERMINADO'">{{ ucampana.estadoTra }}</b-badge>
                                    <b-badge variant="light-warning" size="sm" v-if="ucampana.estadoTra =='INICIADO'">{{ ucampana.estadoTra }}</b-badge>
                                </td>
                            </tr>
                        </template>
                    </table>
                </b-col>
            
                <!---------------------------------- modal acciones -------------------------------->
                <template #modal-footer>
                    <div class="w-100 d-flex justify-content-between">
                        <b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
                            <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Cancelar</span>
                        </b-button>
                    </div>
                </template>
                <b-overlay :show="showLoading" no-wrap/>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
    import BCardCode from '@core/components/b-card-code'
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
                
                /**************************** modal ****************************/
                headerBgVariant: 'dark',
                headerTextVariant: 'success',
                headerTitleVariant: 'TERMINAR ORDEN DE TRABAJO',
                bodyBgVariant: 'light',
                bodyTextVariant: 'success',
                footerBgVariant: 'dark',
                footerTextVariant: 'dark',
                showModal: false,
                showLoading: false,
                boton: false,
                disabled: 0,

                /**************************** tabla ****************************/
                tcolumnas: [
                    { label: '', field: 'acciones' },
                    { label:'ID', field: 'idOrdent', hidden: true },
                    { label: 'OT.', field: 'idOrdent'},
                    { label: 'Fecha', field: 'fechaOrd'},
                    { label: 'Placa', field: 'placaVeh'},
                    { label: 'Estado', field: 'estadoOrd'},
                    { label: 'Tipo', field: 'mantenimientoOrd' },
                    /*{ label: 'Tipo Mantenimiento', field: 'mantenimientoOrd'},*/
                    { label: 'Taller', field: 'taller'},
                    { label: 'Cuenta', field: 'cuenta'},
                    { label: 'Registrado Por', field: 'nombreUsu'},
                    { label: 'ffinOrd', field: 'ffinOrd', hidden:true },
                    { label: 'hora', field: 'hora', hidden:true },
                    { label: 'idVehiculo', field: 'idVehiculo', hidden:true },
                    { label: 'idDato', field: 'idDato', hidden:true },
                ],
                /**************************** entorno ****************************/
                yvehiculos:[],
                cuentas: [],
                ycuenta: {},
                yvehiculo:{},
                estado:0,
                mantt:0,
                fechaInicio: "",
                fechaFin: "",
                ordentrabajo: [],
                fallas:[],
                preventivos:[],
                correctivos:[],
                campanas:[],
                aprobacion:[],
                componentes: [],
                ot: {
                    idOrdent: "", 
                    fechaOrd: "", 
                    cuenta: "", 
                    taller: "", 
                    placaVeh: "",
                    mantenimientoOrd: "", 
                    hora: "",
                    ffinOrd:"",
                },

                estados: [
                    { value:'0', text:'TODOS'},
                    { value:'INICIADO', text:'INICIADO' },
                    //{ value:'EN PROCESO', text:'EN PROCESO' },
                    { value:'TERMINADO', text:'TERMINADO' },
                    { value:'ANULADO', text:'ANULADO' },
                ],

                mantenimiento : [
                    { value:'0', text:'TODOS'},
                    { value:'PREVENTIVO', text:'PREVENTIVO'},
                    { value:'CORRECTIVO', text:'CORRECTIVO'},
                    { value:'PREDICTIVO', text:'PREDICTIVO'},
                    { value:'AUXILIO', text:'AUXILIO'},
                    { value:'CAMPAÑA', text:'CAMPAÑA'},
                ],

                actividades : [
                    { value:'AJUSTAR', text:'AJUSTAR'},
                    { value:'RELLENAR', text:'RELLENAR'},
                    { value:'MONTAR', text:'MONTAR'},
                    { value:'REEMPLAZAR', text:'REEMPLAZAR'},
                    { value:'REPARAR', text:'REPARAR'},
                    { value:'DESMONTAR', text:'DESMONTAR'},
                    { value:'INSPECCION', text:'INSPECCION'},
                    { value:'DRENAR', text:'DRENAR'},
                    { value:'LUBRICAR', text:'LUBRICAR'},
                    { value:'INSTALAR', text:'INSTALAR'},
                    { value:'LIMPIAR', text:'LIMPIAR'},
                    { value:'REGULAR', text:'REGULAR'},
                    { value:'SOLDAR', text:'SOLDAR'},
                    { value:'MANTENIMIENTO', text:'MANTENIMIENTO'},
                    { value:'PRUEBA', text:'PRUEBA'},
                    { value:'REAJUSTAR', text:'REAJUSTAR'},
                    { value:'MUESTRA', text:'MUESTRA'},
                    { value:'APLICAR', text:'APLICAR'},
                    { value:'LAVAR', text:'LAVAR'},
                    { value:'CAMPAÑA', text:'CAMPAÑA'},
                ],
                ycomponente: "", 
                yfalla: "", 
                yestadoTra: "PENDIENTE",
                arr_pendientes:[],
                personas:[],
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
            Visualizar( prm_orden )
            {
                this.showLoading = true;
                this.boton = true;
                this.ot = Object.assign({}, prm_orden);
                this.preventivos = [];
                this.correctivos = [];
                this.campanas = [];
                this.arr_pendientes = [];
                
                this.$http.get('/LiberAPP/Trabajo/Listar/'+ prm_orden.idOrdent).then(res => {
                    this.showLoading = false;
                    this.preventivos = res.data.preventivos;
                    this.correctivos = res.data.correctivos;
                    this.campanas = res.data.campanas;
                }).catch(error => {
                    this.Toast(true,'danger','Fallas','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
            },
            Listar()
            {
                this.showLoading = true;
                //this.$http.get('/LiberAPP/Ordent/ListarAbierto/' + this.yvehiculo.idVehiculo).then( res => {
                this.$http.get('/LiberAPP/Ordent/Listar/' + this.ycuenta.idDato+'/'+this.yvehiculo.idVehiculo+'/'+this.fechaInicio+'/'+this.fechaFin+'/'+this.estado+'/'+this.mantt).then( res => {
                    this.ordentrabajo = res.data;
                    this.showLoading = false;
                }).catch( error => {
                    this.Toast(true,'danger','Kilometraje','Error al cargar los registros: '+error);
                    this.showLoading = false;
                }) 
            },

        }, 
        computed: {
            direction() 
            {
                if (store.state.appConfig.isRTL)
                {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.dir = true
                    return this.dir
                }
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.dir = false
                return this.dir
            }
        }, 
        created() {
            const fecha = new Date()
            var day = fecha.getDate()
            var month = fecha.getMonth() + 1
            var year = fecha.getFullYear()
            this.fechaInicio = year+'-'+month+'-01'
            this.fechaFin = year+'-'+month+'-'+day
            this.ycuenta = { idDato:'0', valorDat: 'TODOS' };
            this.yvehiculo = { idVehiculo:'0', placaVeh:'TODOS' };
            this.Listar();
            
            this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res => {
                this.cuentas = res.data;
                this.cuentas.unshift({idDato:'0', valorDat:'TODOS'});
            }).catch(error => {
                this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Vehiculo/Select').then(res => {
                this.yvehiculos = res.data;
                this.yvehiculos.unshift({idVehiculo:'0', placaVeh:'TODOS'})
            }).catch(error => {
                this.Toast(true,'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
            
            this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA PESADA').then(res => {
                this.componentes = res.data.componentes;
            }).catch(error => {
                this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Persona/Select').then(res => {
                this.personas = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        }
    }
</script>
<style lang="scss" >
    @import "~@core/scss/base/pages/app-ecommerce-details.scss";
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-select.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
  </style>