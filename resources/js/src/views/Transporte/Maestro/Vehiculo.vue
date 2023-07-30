<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="6">
                <!---------------------------------- nuevo -------------------------------->
                <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Vehiculo</span>
                </b-button>
            </b-col>
            <b-col md="6" xl="6">
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
            :columns="tcolumnas" :rows="vehiculos" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            compactMode
        >

            <!---------------------------------- columnas especiales -------------------------------->
            <template slot="table-row" slot-scope="props">
                <!---------------------------------- acciones -------------------------------->
                <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idVehiculo)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>
                <!-- Column: Common -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
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
        <b-tabs content-class="mt-2" justified v-model="tabIndex">
            <b-tab active>
                <template #title>
                    <feather-icon icon="ArchiveIcon" />
                    <span>Datos Técnicos</span>
                </template>
                <b-row>
                    <b-col md="3" xl="4">
                        <b-form-group label="ID">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                                    <b-form-input v-model="vehiculo.idVehiculo" readonly/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6" xl="6">
                        <b-form-group label="Placa"><b-form-input v-model="vehiculo.placaVeh" /></b-form-group>
                    </b-col>
                    <b-col md="6" xl="6">
                        <b-form-group label="Año de fabricacion">
                            <cleave v-model="vehiculo.fabricacionVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"  maxlength="4" placeholder="0000" />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Número de Ejes">
                            <cleave v-model="vehiculo.ejeVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Peso Bruto">
                            <cleave v-model="vehiculo.pbrutoVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Peso Neto">
                            <cleave v-model="vehiculo.pnetoVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Carga Util">
                            <cleave v-model="vehiculo.cutilVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                    <!--<b-col md="12" xl="6">
                        <b-form-group label="Capacidad">
                            <b-input-group class="input-group-merge">
                                 <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <cleave v-model="vehiculo.capacidadVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'thousand'}"/>
                                </b-input-group>
                            </b-form-group>
                    </b-col>-->
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Serie / Chasis"><b-form-input v-model="vehiculo.chasisVeh"/></b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Serie / Motor"><b-form-input v-model="vehiculo.motorVeh"/></b-form-group>
                    </b-col>
                </b-row>
            </b-tab>

            <!-- TAB DATOS GENERALES--->
            <b-tab>
                <template #title>
                    <feather-icon icon="TruckIcon" />
                    <span>Datos Generales</span>
                </template>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Color"><b-form-input v-model="vehiculo.colorVeh"/></b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Largo">
                            <cleave v-model="vehiculo.largoVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Ancho">
                            <cleave v-model="vehiculo.anchoVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Alto">
                            <cleave v-model="vehiculo.altoVeh" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Marca">
                            <v-select label="valorDat" v-model="vehiculo.Marca_idDato" :reduce="marca => marca.idDato" :options="marcas" style="flex: 1;"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Modelo">
                            <v-select label="valorDat" v-model="vehiculo.Modelo_idDato" :reduce="modelo => modelo.idDato" :options="modelos" style="flex: 1;"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Tipo del Unidad">
                            <v-select label="valorDat" v-model="vehiculo.Tipo_idDato" :reduce="tipo => tipo.idDato" :options="tipos" style="flex: 1;"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Cuenta Operativa">
                            <v-select label="valorDat" v-model="vehiculo.Cuenta_idDato" :reduce="cuenta => cuenta.idDato" :options="cuentas" style="flex: 1;"/>
                        </b-form-group>
                    </b-col>
                    <!--<b-col md="12" xl="6">
                        <b-form-group label="Sede de control del Vehiculo">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="valorDat" v-model="vehiculo.sedeVeh" :reduce="sede => sede.valorDat" :options="sedes" style="flex: 1;"/>
                                </b-input-group>
                            </b-form-group>
                    </b-col>-->
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Ciudad Emisión Tarjeta de Propiedad"><b-form-input v-model="vehiculo.tpciudadVeh"/></b-form-group>
                    </b-col>
                    <b-col md="12" xl="6">
                        <b-form-group label="Leasing"><b-form-input v-model="vehiculo.leasingVeh"/></b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12" xl="6">
                        <b-form-group label="Grupo de Unidad">
                            <v-select v-model="vehiculo.grupoVeh" :options="grupos" style="flex: 1;"/>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
        
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Guardar" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="Actualizar" v-else :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Actualizar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </b-card>
</div></template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab,BCard
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
        BCard,
        Cleave,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            /**************************** elementos de ux ****************************/
            dir: false,
            pageLength: 20,
            searchTerm: '',
            tabIndex: 1,

            /**************************** tabla ****************************/
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idVehiculo'},
                { label: 'Placa', field: 'placaVeh'},
                //{ label: 'Año fabricacion', field: 'fabricacionVeh'},
                { label: 'Cuenta', field: 'cuentaVeh'},
                { label: 'Marca', field: 'marcaVeh'},
                { label: 'Modelo', field: 'modeloVeh'},
                { label: 'Tipo', field: 'tipoVeh'},

                { label: 'Grupo', field: 'grupoVeh'},
                { label: 'Año Fab.', field: 'fabricacionVeh'},
                { label: 'Color', field: 'colorVeh'},
                { label: 'Nro. Ejes', field: 'ejeVeh'},
                { label: 'P. Bruto', field: 'pbrutoVeh'},
                { label: 'P. Neto', field: 'pnetoVeh'},
                { label: 'Carga Util', field: 'cutilVeh'},
                { label: 'Largo', field: 'largoVeh'},
                { label: 'Ancho', field: 'anchoVeh'},
                { label: 'Alto', field: 'altoVeh'},
                { label: 'Nro. Chasis', field: 'chasisVeh'},
                { label: 'Nro. Motor', field: 'motorVeh'},
                { label: 'Ciudad TP', field: 'tpciudadVeh'},
                { label: 'Leasing', field: 'leasingVeh'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO VEHICULO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            ubicaciones: [],
            marcas: [],
            modelos: [],
            vehiculos: [],
            sedes: [],
            tipos: [],
            cuentas: [],
            grupos: ["LIVIANA","PESADA","ACOPLE"],
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
                capacidadVeh: "",
                asignacionVeh: "",
                leasingVeh: "",
                tpciudad: "",
                Marca_idDato: 0,
                Modelo_idDato: 0,
                Tipo_idDato: 0,
                Cuenta_idDato: 0,
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
                capacidadVeh: "",
                asignacionVeh: "",
                leasingVeh: "",
                tpciudad: "",
                Marca_idDato: 0,
                Modelo_idDato: 0,
                Tipo_idDato: 0,
                Cuenta_idDato: 0,
            },
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
                this.Toast(true,'success','Vehiculo','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Vehiculos();
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Actualizar()
        {
            this.showLoading = true;

            var vehiculo = Object.assign({}, this.vehiculo);
            delete vehiculo.marcaVeh;
            delete vehiculo.modeloVeh;
            delete vehiculo.tipoVeh;
            delete vehiculo.cuentaVeh;
            delete vehiculo.vgt_id;
            delete vehiculo.originalIndex;

            var jsonVehiculo = JSON.stringify(vehiculo);

            this.$http.post('/LiberAPP/Vehiculo/Actualizar',
            {
                vehiculo: jsonVehiculo,
            })
            .then(res => {
                this.Toast(true,'primary','Vehiculo','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Vehiculos();
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Eliminar( prm_fila )
        {
            this.showLoading = true; 

            this.boxOne = ''; 
            this.$bvModal.msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
                cancelVariant: 'outline-secondary',
            }).then(value => {
                this.boxOne = value
                if(this.boxOne === true) 
                {
                    this.$http.post('/LiberAPP/Vehiculo/Desactivar',{
                        idVehiculo : prm_fila,
                    }).then(res => {
                        this.Toast(true,'primary','Vehiculo','Vehiculo eliminado Correctamente');
                        this.showModal = false;
                        this.showLoading = false;
                        this.Vehiculos();
                    }).catch(error => {
                        this.Toast(true,'danger','Vehiculo','Error al eliminar el Vehiculo: '+error);
                        this.showLoading = false;
                    })
                } else
                    this.showLoading = false;
            })
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
        this.$http.get('/LiberAPP/Vehiculo')
            .then(res => {
               this.vehiculos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Dato/Select/UBICACION/TRANSPORTE')
            .then(res => {
                this.ubicaciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Ubicacion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
         this.$http.get('/LiberAPP/Dato/Select/MARCA/VEHICULO')
            .then(res => {
                this.marcas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Marca','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/MODELO/VEHICULO')
            .then(res => {
                this.modelos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Modelo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/TIPO/VEHICULO')
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
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3)/*posicionar segunda columna thead*/
    {
        left: 70pt;
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
        left: 35pt;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table tbody tr td:nth-child(3)/*posicionar segunda columna*/
    {
        left: 70pt;
        position: -webkit-sticky; /* for Safari */

        position: sticky;
        left: 70pt;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
</style>
