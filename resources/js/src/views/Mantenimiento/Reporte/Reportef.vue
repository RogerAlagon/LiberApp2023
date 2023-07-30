<template>
    <div>
        <b-card>
            <!---------------------------------- nuevo -------------------------------->
            <!--<b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nuevo Reporte</span>
            </b-button>-->
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="Desde">
                        <flat-pickr v-model="fechaInicio" class="form-control" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Hasta">
                        <flat-pickr v-model="fechaFin" class="form-control" :config="{ minDate: fechaInicio }"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Buscar">
                        <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
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
                </b-col>
            </b-row>
            <br>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="reportes" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
            >

                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <!---------------------------------- acciones -------------------------------->
                    <span v-if="props.column.field === 'estadoRep'">
                        <b-badge variant="warning" v-if="props.row.estadoRep == 'SOLICITADO'">SOLICITADO</b-badge>
                        <b-badge variant="success" v-if="props.row.estadoRep == 'TERMINADO'">TERMINADO</b-badge>
                        <!--<b-badge variant="danger">Danger</b-badge>-->
                    </span>
                    <span v-else-if="props.column.field === 'acciones'">
                        <!--<b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>-->
                        <a :href="'/LiberAPP/Reportef/Pdf/'+props.row.idReportef" target="_blank" class="btn btn-icon rounded-circle btn-danger"><feather-icon icon="FileIcon" title="Reporte de Fallas" /></a>
                        <!--<a :href="'/LiberAPP/Reportef/PdfOT/'+props.row.idReportef" target="_blank" class="btn btn-icon rounded-circle btn-warning"><feather-icon icon="FileTextIcon" title="Orden de Trabajo" /></a>-->
                        <a href="#" class="btn btn-icon rounded-circle btn-primary" v-b-modal.modal-formulario  @click="Verificar(props.row.idReportef)"><feather-icon icon="SendIcon" title="Orden de Trabajo" /></a>
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
                <b-col md="12" xl="12">
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                        <template v-for="(uapartado,indice) in reportef.cuerpo" v-if="uapartado.com.length > 0">
                            <tr>
                                <th colspan="5">{{ uapartado.det }}</th>
                            </tr>
                            <tr>
                                <th>DETALLE</th>
                                <th>OBSERVACION</th>
                                <th>R</th>
                                <th>S</th>
                                <!--<th>LEVANTADO</th>-->
                            </tr>
                            <tr v-for="(ucomponente,indice) in uapartado.com">
                                <td>{{ ucomponente.det }}</td>
                                <td>{{ ucomponente.val }}</td>
                                <td v-if="ucomponente.tip == 'VEHICULO' || ucomponente.tip == 'AMBOS'">X</td>
                                <td v-else></td>
                                <td v-if="ucomponente.tip == 'ACOPLE' || ucomponente.tip == 'AMBOS'">X</td>
                                <td v-else></td>
                                <!--<td>
                                    <b-button variant="success" v-if="ucomponente.lev" class="btn-icon rounded-circle"  @click="ucomponente.lev = false"> <feather-icon icon="CheckIcon"/></b-button>
                                    <b-button variant="warning" v-else class="btn-icon rounded-circle" @click="ucomponente.lev = true"> <feather-icon icon="ClockIcon"  /></b-button>
                                </td>-->
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
                        <!--<b-button variant="success" size="sm" @click="Validar" v-if="!boton" :disabled="showLoading">
                            <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Guardar</span>
                        </b-button>
                        <b-button variant="primary" size="sm" @click="Actualizar" v-else :disabled="showLoading">
                            <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Actualizar</span>
                        </b-button>-->
                    </div>
                </template>
                <b-overlay :show="showLoading" no-wrap/>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BCard
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
        BCardText,
        BOverlay,
        vSelect,
        BFormCheckbox,
        BCardBody,
        FormWizard,
        TabContent,
        BInputGroup,
        BInputGroupPrepend,
        BTabs,
        BTab,
        flatPickr,
        Cleave,
        BCard,
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
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idReportef'},
                { label: 'Estado', field: 'estadoRep'},
                { label: 'Vehiculo', field: 'placaVeh'},
                { label: 'Acople', field: 'acopleVeh'},
                { label: 'Conductor', field: 'trabajadorPer'},
                { label: 'Fecha', field: 'fechaRep'},
                { label: 'Ingresado Por', field: 'nombreUsu'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'RESUMEN DE FALLAS',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            reportes: [],
            ubicaciones: [],
            marcas: [],
            modelos: [],
            vehiculos: [],
            sedes: [],
            tipos: [],
            cuentas: [],
            plantilla: {
                idVehiculo: 0,
                placaVeh: "",
                fabricacionVeh: "",
                colorVeh: "",
                ejeVeh: "",
                pbrutoVeh: "",
                pnetoVeh: "",
                cutilVeh: "",
                largoVeh: "",
                anchoVeh: "",
                altoVeh: "",
                chasisVeh: "",
                motorVeh: "",
                activoVeh: 0,
                cuentaVeh: "",
                lugartpVeh: "",
                capacidadVeh: "",
                asignacionVeh: "",
                marcaVeh: "",
                modeloVeh: "",
                tipoVeh: "",
            },
            /**************************** formulario ****************************/
            vehiculo: {
                idVehiculo: 0,
                placaVeh: "",
                fabricacionVeh: "",
                colorVeh: "",
                ejeVeh: "",
                pbrutoVeh: "",
                pnetoVeh: "",
                cutilVeh: "",
                largoVeh: "",
                anchoVeh: "",
                altoVeh: "",
                chasisVeh: "",
                motorVeh: "",
                activoVeh: 0,
                cuentaVeh: "",
                lugartpVeh: "",
                capacidadVeh: "",
                asignacionVeh: "",
                marcaVeh: "",
                modeloVeh: "",
                tipoVeh: "",
            },
            reportef: {},
            fechaInicio: "", 
            fechaFin: "",
            //vue select form
            //zinicio: {},
           // ztermino: {},
        }
    },
    methods : {
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
            this.$http.get('/LiberAPP/Reportef/Listar/' + this.fechaInicio + '/' + this.fechaFin).then(res => {
               this.reportes = res.data;
               this.showLoading = false;
            }).catch(error => {
                this.Toast(true,'danger','Fallas','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Nuevo()
        {
            this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVO VEHICULO";
            this.vehiculo = Object.assign({}, this.plantilla);
        },
        Editar(prm_vehiculo)
        {
            this.headerTextVariant= 'primary';
            this.headerTitleVariant = "EDITAR VEHICULO";
            this.boton = true;
            this.vehiculo = Object.assign({}, prm_vehiculo);
        },
        Guardar()
        {
            this.showLoading = true;

           var jsonVehiculo = JSON.stringify(this.vehiculo);

            this.$http.post('/LiberAPP/Vehiculo/Guardar',
            {
                vehiculo: jsonVehiculo,
            })
            .then(res => {
                this.Toast(true,'success','Agregar Vehiculo','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Vehiculos();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Vehiculo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Actualizar()
        {
            this.showLoading = true;

            var jsonVehiculo = JSON.stringify(this.vehiculo);
            alert(this.jsonVehiculo);

            this.$http.post('/LiberAPP/Vehiculo/Actualizar',
            {
                vehiculo: jsonVehiculo,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Vehiculo','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Vehiculos();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Vehiculo','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Vehiculos()
        {
            this.$http.get('/LiberAPP/Vehiculo')
            .then(res => {
               this.vehiculos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Verificar(prm_reportef)
        {
            //this.showLoading = true;

            //var jsonVehiculo = JSON.stringify(this.vehiculo);

            this.$http.get('/LiberAPP/Reportef/Verificar/'+prm_reportef,
            {
                //vehiculo: jsonVehiculo,
            })
            .then(res => {
                //this.Toast(true,'success','Agregar Vehiculo','Guardado Correctamente');
                //this.showModal = false;
                //this.showLoading = false;
                this.reportef = res.data;
                //this.Vehiculos();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Vehiculo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Validar()
        {
            //this.showLoading = true;

            var jsonReportef = JSON.stringify(this.reportef);

            this.$http.post('/LiberAPP/Reportef/Validar',
            {
                reportef: jsonReportef,
            })
            .then(res => {
                this.Toast(true,'success','Reporte de Fallas','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                //this.reportef = res.data;
                this.Reportes();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Vehiculo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Reportes()
        {
            this.$http.get('/LiberAPP/Reportef')
            .then(res => {
               this.reportes = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        }
    },
    computed: {
    /*statusVariant() {
        const statusColor = {

            Current      : 'light-primary',
            Professional : 'light-success',
            Rejected     : 'light-danger',
            Resigned     : 'light-warning',
            Applied      : 'light-info',
        }

      return status => statusColor[status]
    },*/
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
        },
    },
    created() {
        
        const fecha = new Date()
        var day = fecha.getDate()
        var month = fecha.getMonth() + 1
        var year = fecha.getFullYear()

        this.fechaInicio = year+'-'+month+'-01'
        this.fechaFin = year+'-'+month+'-'+day

        this.$http.get('/LiberAPP/Reportef/Listar/' + this.fechaInicio + '/' + this.fechaFin).then(res => {
           this.reportes = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Fallas','Error al cargar los registros: '+error);
        });

        /*this.$http.get('/LiberAPP/Reportef')
            .then(res => {
               this.reportes = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/

        /*this.$http.get('/LiberAPP/Dato/Select/UBICACION/TRANSPORTE')
            .then(res => {
                this.ubicaciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Ubicacion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
         this.$http.get('/LiberAPP/Dato/Select/MARCA/TRANSPORTE')
            .then(res => {
                this.marcas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Marca','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/MODELO/TRANSPORTE')
            .then(res => {
                this.modelos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Modelo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/TIPO/TRANSPORTE')
            .then(res => {
                this.tipos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Tipo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/SEDE/GENERAL')
            .then(res => {
                this.sedes = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Sede','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE')
            .then(res => {
                this.cuentas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Cuenta','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
