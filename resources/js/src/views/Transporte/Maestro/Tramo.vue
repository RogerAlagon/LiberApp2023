<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="6">
                <!---------------------------------- nuevo -------------------------------->
                <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Tramo</span>
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
            :columns="tcolumnas" :rows="tramos" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
        >
        
      <!---------------------------------- revisar -------------------------------->
      <!--<template slot="table-column" slot-scope="props" >
        <span
          v-if="props.column.label ==='Name'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.name') }}
        </span>
        <span
          v-else-if="props.column.label ==='Email'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.email') }}
        </span>
        <span
          v-else-if="props.column.label ==='Date'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.date') }}
        </span>
        <span
          v-else-if="props.column.label ==='Salary'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.salary') }}
        </span>
        <span
          v-else-if="props.column.label ==='Status'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.status') }}
        </span>
        <span
          v-else-if="props.column.label ==='Action'"
          class="text-nowrap"
        >
          {{ $t('message.tableHeader.action') }}
        </span>
        <span v-else>
          {{ props.column.label }}
        </span>
      </template>-->

            <!---------------------------------- columnas especiales -------------------------------->
            <template slot="table-row" slot-scope="props">
                <!---------------------------------- acciones -------------------------------->
                <!--<span v-if="props.column.field === 'estadoCon'">
                    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                            <feather-icon icon="MoreVerticalIcon" size="16" class="text-body align-middle mr-25"/>
                        </template>
                        <b-dropdown-item>
                            <feather-icon icon="Edit2Icon" class="mr-50"/>
                            <span>Edit</span>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <feather-icon icon="TrashIcon" class="mr-50"/> <span>Delete</span>
                        </b-dropdown-item>
                    </b-dropdown>
                </span>-->
                <!-- Column: Common -->
                <!--<span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>-->
                <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                        <feather-icon icon="Edit2Icon"/>
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
             <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="ID">
                        <b-form-input v-model="tramo.idTramo" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Inicio">
                        <v-select label="valorDat" v-model="tramo.inicioTra" :reduce="ubicacion => ubicacion.valorDat" :options="ubicaciones" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Termino">
                        <v-select label="valorDat" v-model="tramo.terminoTra" :reduce="ubicacion => ubicacion.valorDat" :options="ubicaciones" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <!--<b-col md="12" xl="6">
                    <b-form-group label="Kilometros">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="tramo.kmTra"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>-->
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Nombre Peaje">
                        <b-form-input v-model="tramo.puntoTra"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Costo de Peaje por Eje">
                        <cleave class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4}" v-model="tramo.peajeTra"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Costo de Peaje Unidad Liviana">
                        <cleave class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4}" v-model="tramo.camionetaTra"/>
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
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BCard,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
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
            pageLength: 5,
            searchTerm: '',
            tabIndex: 1,

            /**************************** tabla ****************************/
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idTramo'},
                { label: 'Inicio', field: 'inicioTra'},
                { label: 'Termino', field: 'terminoTra'},
                /*{ label: 'Kilometraje', field: 'kmTra'},*/
                { label: 'Peaje', field: 'puntoTra'},
                { label: 'Costo Peaje por Eje', field: 'peajeTra'},
                { label: 'Costo Peaje Camioneta', field: 'camionetaTra'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO TRAMO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            ubicaciones: [],
            tramos: [],
            plantilla: {
                idTramo: "",
                inicioTra: "",
                terminoTra: "",
                kmTra: 0,
                peajeTra: 0,
                camionetaTra: 0,
            },
            /**************************** formulario ****************************/
            tramo: {
                idTramo: "",
                inicioTra: "",
                terminoTra: "",
                kmTra: 0,
                peajeTra: 0,
            },
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
            this.headerTitleVariant = "NUEVO TRAMO";
            //Asignando el valor
            this.tramo = Object.assign({}, this.plantilla);
        },
        Editar(prm_tramo)
        {
            this.headerTextVariant= 'primary';
            this.headerTitleVariant = "EDITAR TRAMO";
            this.boton = true;
            //Asignando el valor
            this.tramo = Object.assign({}, prm_tramo);
            delete this.tramo.vgt_id;
            delete this.tramo.originalIndex;
        },
        Guardar()
        {
            this.showLoading = true;

            if(this.tramo.inicioTra == null || this.tramo.inicioTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Inicio del Tramo');
                this.showLoading = false;
                return;
            }
            if(this.tramo.terminoTra == null || this.tramo.terminoTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Fin del Tramo');
                this.showLoading = false;
                return;
            }
            if(this.tramo.puntoTra == null || this.tramo.puntoTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Nombre del Peaje');
                this.showLoading = false;
                return;
            }
            if(this.tramo.peajeTra == "" || this.tramo.peajeTra < 0)
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar un Costo de Peaje Válido');
                this.showLoading = false;
                return;
            }
            if(this.tramo.camionetaTra == "" || this.tramo.camionetaTra < 0)
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar un Costo de Peaje Válido');
                this.showLoading = false;
                return;
            }

            var jsonTramo = JSON.stringify(this.tramo);

            this.$http.post('/LiberAPP/Tramo/Guardar',
            {
                tramo: jsonTramo,
            })
            .then(res => {
                this.Toast(true,'success','Agregar Tramo','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Tramos();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Tramo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Actualizar()
        {
            this.showLoading = true;

            if(this.tramo.inicioTra == null || this.tramo.inicioTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Inicio del Tramo');
                this.showLoading = false;
                return;
            }
            if(this.tramo.terminoTra == null || this.tramo.terminoTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Fin del Tramo');
                this.showLoading = false;
                return;
            }
            if(this.tramo.puntoTra == null || this.tramo.puntoTra == "")
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar el Nombre del Peaje');
                this.showLoading = false;
                return;
            }
            if(this.tramo.peajeTra == "" || this.tramo.peajeTra < 0)
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar un Costo de Peaje Válido');
                this.showLoading = false;
                return;
            }
            if(this.tramo.camionetaTra == "" || this.tramo.camionetaTra < 0)
            {
                this.Toast(true,'warning','Guardar Tramo','Debe Ingresar un Costo de Peaje Válido');
                this.showLoading = false;
                return;
            }

            var jsonTramo = JSON.stringify(this.tramo);

            this.$http.post('/LiberAPP/Tramo/Actualizar',
            {
                tramo: jsonTramo,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Tramo','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Tramos();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Tramo','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Tramos()
        {
            this.$http.get('/LiberAPP/Tramo')
            .then(res => {
               this.tramos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Trano','Error al cargar los registros: '+error);
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

        this.$http.get('/LiberAPP/Tramo')
            .then(res => {
               this.tramos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Trano','Error al cargar los registros: '+error);
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
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>
