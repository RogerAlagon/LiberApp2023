<template>
    <div>
        <b-tabs content-class="pt-1" fill>
            <!--------------------------- TAB COMBUSTIBLE --------------------->
            <b-tab active title="Combustible" @click="Cambiar('combustible')">
                <template #title>
                    <feather-icon icon="DollarSignIcon" />
                    <span>Combustible</span>
                </template>
                <b-card-text>
                    <b-badge pill variant="light-warning">Tipos de Combustible</b-badge>
                </b-card-text>
                <template>
                    <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" >
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Combustible</span>             
                    </b-button>
                </template>
            </b-tab>
            <!--------------------------- TAB COMBUSTIBLE --------------------->
            <b-tab title="Ruta" @click="Cambiar('ruta')">
                <template #title>
                    <feather-icon icon="MapIcon" />
                    <span>Rutas</span>
                </template>
                <b-card-text>
                    <b-badge pill variant="light-warning">Rutas</b-badge>
                </b-card-text>
                <template>
                    <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" >
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nueva Ruta</span>             
                    </b-button>
                </template>
            </b-tab>
            <!--------------------------- TAB CIUDADES --------------------->
            <b-tab title="Ciudad" @click="Cambiar('ciudad')">
                <template #title>
                    <feather-icon icon="TargetIcon" />
                    <span>Ciudades</span>
                </template>
                <b-card-text>
                    <b-badge pill variant="light-warning">Ciudades</b-badge>
                </b-card-text>
                <template>
                    <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" >
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nueva Ciudad</span>             
                    </b-button>
                </template>
            </b-tab>
        </b-tabs>
        <template>
            <div>
                <br>
                <vue-good-table
                    :columns="tcolumnas" :rows="tabla" :rtl="direction"
                    :search-options="{ enabled: true, externalQuery: searchTerm }"
                    :select-options="{
                        enabled: true,
                        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                        selectionInfoClass: 'custom-class',
                        selectionText: 'rows selected',
                        clearSelectionText: 'clear',
                        disableSelectInfo: true, // disable the select info panel on top
                        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
                    }"
                    :pagination-options="{ enabled: true, perPage:pageLength}">
                    <!------------------------- columnas especiales -------------------------------->
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'acciones'">
                            <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
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
                    cancel-variant="secondary" ok-variant="success" >

                    <!---------------------------------- formulario -------------------------------->
                    <b-row>
                        <b-col md="12" xl="12">
                            <b-form-group label="Ingrese Valor"><b-form-input v-model="general.valorDat"/></b-form-group>
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
            </div>
        </template>
    </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
    components: {
        BButtonToolbar, BToast, BCardCode, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, VueGoodTable, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BFormCheckbox, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            /**************************** elementos de ux ****************************/
            dir: false,
            pageLength: 10,
            searchTerm: '',
            tabIndex: 1,
            /**************************** tabla ****************************/
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idDato'},
                { label: 'Valor', field: 'valorDat'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            tabla: [],
            combustibles: [],
            rutas: [],
            ciudades: [],
            titulo: "",
            opcion:0,

            plantilla: {
                idDato: 0,
                valorDat: "",
            },
            /**************************** formulario ****************************/
            general: {
                idDato: 0,
                valorDat: "",
            },
            /******************************** variables *********************/
            datos: {
              tipoDat: "TIPO",
              grupoDat: "COMBUSTIBLE",
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
            this.headerTitleVariant = "NUEVO";
            this.general = Object.assign({}, this.plantilla);
        },
        Cambiar(prm_valor)
        {
            switch ( prm_valor)
            {
                case "combustible":
                    this.tabla = this.combustibles;
                    this.titulo = "Tipos de Combustibles";
                    this.datos = {tipoDat:'TIPO',grupoDat:'COMBUSTIBLE'};
                    this.opcion=1;
                    break;
                case "ruta":
                    this.tabla = this.rutas;
                    this.titulo = "Rutas";
                    this.datos = {tipoDat:'RUTA',grupoDat:'COMBUSTIBLE'};
                    this.opcion=2;
                    break;
                case "ciudad":
                    this.tabla = this.ciudades;
                    this.titulo = "Ciudad";
                    this.datos = {tipoDat:'CIUDAD',grupoDat:'COMBUSTIBLE'};
                    this.opcion=3;
                    break;
            }
        }, 
        Editar(prm_general)
        {
            this.headerTextVariant= 'primary';
            this.headerTitleVariant = "EDITAR";
            this.boton = true;
            this.general = prm_general;
        },
        Guardar()
        {
            this.showLoading = true;
            var jsonGeneral = JSON.stringify({...this.general,...this.datos});
            this.$http.post('/LiberAPP/General/Guardar',
            {
                general : jsonGeneral,
            })
            .then(res => {
                this.Toast(true,'success','Agregar Tipo','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                switch(this.opcion) {
                    case 0: this.Combustibles(); 
                            break;
                    case 1: this.Combustibles();
                            break;
                    case 2: this.Rutas(); 
                            break;
                    case 3: this.Ciudades(); 
                            break;
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Viatico','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        Actualizar()
        {
            this.showLoading = true;
            var jsonGeneral = JSON.stringify(this.general);

            this.$http.post('/LiberAPP/General/Actualizar',
            {
                general: jsonGeneral,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Viatico','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                console.log('opcion:: ', this.opcion )
                switch(this.opcion) {
                    case 0: this.Combustibles();
                            break;
                    case 1: this.Combustibles();
                            break;
                    case 2: this.Rutas();
                            break;
                    case 3: this.Ciudades(); 
                            break;
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Viatico','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Combustibles()
        {
            this.$http.get('/LiberAPP/Dato/Select/TIPO/COMBUSTIBLE')
            .then(res => {
                this.combustibles = res.data
                this.tabla = this.combustibles
            })
            .catch(error => {
                this.Toast(true,'danger','Combustibles','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        Rutas()
        {
            this.$http.get('/LiberAPP/Dato/Select/RUTA/COMBUSTIBLE')
            .then(res => {
                this.rutas = res.data
                this.tabla = this.rutas
            })
            .catch(error => {
                this.Toast(true,'danger','rutas','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        Ciudades()
        {
            this.$http.get('/LiberAPP/Dato/Select/CIUDAD/COMBUSTIBLE')
            .then(res => {
                this.ciudades = res.data;
                this.tabla = this.ciudades;
            })
            .catch(error => {
                this.Toast(true,'danger','ciudad','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
    }, 
    computed: {
        direction()
        {
            if (store.state.appConfig.isRTL)
            {
                this.dir = true
                return this.dir
            }
            this.dir = false
            return this.dir
        },
    }, 
    created() {
        this.$http.get('/LiberAPP/Dato/Select/COMBUSTIBLE/COMBUSTIBLE')
        .then(res => {
            this.combustibles = res.data
        })
        .catch(error => {
            this.Toast(true,'danger','Combustible','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
        this.$http.get('/LiberAPP/Dato/Select/RUTA/COMBUSTIBLE')
        .then(res => {
            this.rutas = res.data
        })
        .catch(error => {
            this.Toast(true,'danger','Rutas','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
        this.$http.get('/LiberAPP/Dato/Select/CIUDAD/COMBUSTIBLE')
        .then(res => {
            this.ciudades = res.data
        })
        .catch(error => {
            this.Toast(true,'danger','Ciudades','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
    }, 
    mounted() {
        this.Combustibles();
    }, 
    Combustibles()
    {
        this.$http.get('/LiberAPP/Dato/Select/COMBUSTIBLE/COMBUSTIBLE')
        .then(res => {
            this.combustibles = res.data
        })
        .catch(error => {
            this.Toast(true,'danger','Viatico','Error al cargar los registros: '+error);
            this.showLoading = false;
        })
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>