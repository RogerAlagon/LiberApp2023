<template><div>
    <b-card v-if="vista_entidad == 0">
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Tipo Entidad:">
                    <v-select label="valorDat" :options="zentidades" v-model="yentidad" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Area:">
                    <v-select label="nombreAre" :options="zareas" v-model="yarea" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <!--<b-col md="6" xl="3">
                <b-form-group label="Tipo Implemento:">
                    <b-form-select :options="zimplementos" v-model="yimplemento"/>
                </b-form-group>
            </b-col>-->
            <b-col md="6" xl="3" class="text-center">
                <div class="demo-inline-spacing">
                    <b-button variant="primary" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                    <!--<b-button variant="success" @click="Excel()" :disabled="showLoading">
                        <feather-icon icon="FileTextIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Excel</span>
                    </b-button>-->
                </div>
            </b-col>
        </b-row>
    </b-card>

    <b-card>
        <b-row>
            <b-col md="6" xl="6">
                <!---------------------------------- nuevo -------------------------------->
                <!---<b-button v-b-modal.modal-grupo variant="primary" @click="Nuevo" v-if="Object.keys(this.grupos).length > 0">-->
                <b-button v-b-modal.modal-grupo variant="primary" @click="Nuevo(yentidad, yarea)">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Grupo</span>
                </b-button>
                <!---<b-button v-b-modal.modal-implemento variant="success" @click="Nuevo">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Implemento</span>
                </b-button>-->
            </b-col>
            <!---------------------------------- búsqueda -------------------------------->
            <b-col md="6" xl="6">
                <div class="custom-search d-flex justify-content-end">
                    <b-form class="faq-search-input">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text> <feather-icon icon="SearchIcon" /> </b-input-group-prepend>
                            <b-form-input id="searchbar" v-model="faqSearchQuery" placeholder="Buscar Implemento" />
                        </b-input-group>
                    </b-form>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" xl="12" class="text-center">
                <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" pills nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">
                    <b-tab v-for="(ugrupo, indice) in resultado" :key="indice">
                      <!-- title -->
                        <template #title>
                            <feather-icon icon="FolderIcon" size="18" class="mr-1" />
                            <span class="font-weight-bold text-left">{{ ugrupo.nombreGru }}</span>
                            <!---<div style="margin-left: 10%;">
                                <b-button v-b-modal.modal-implemento variant="secondary" class="mr-1 btn-icon rounded-circle" @click="Nuevo(yentidad, ugrupo )">
                                    <feather-icon icon="Edit2Icon" size="20"/>
                                </b-button>
                            </div>-->
                        </template>
                        <div v-if="ugrupo">
                            <div class="d-flex align-items-center">
                                <b-avatar rounded size="42" variant="light-primary" class="mr-1">
                                    <feather-icon icon="FolderIcon" size="20"/>
                                </b-avatar>
                                <div>
                                    <h4 class="mb-0 text-primary"> {{ ugrupo.nombreGru }} </h4>
                                    <span>{{ ugrupo.idGrupo }}</span>
                                </div>
                                <div style="margin-left: 70%;">
                                    <b-button v-b-modal.modal-implemento variant="success" class="mr-1 btn-icon rounded-circle" @click="Nuevo(yentidad, ugrupo )">
                                        <feather-icon icon="PlusIcon" size="20"/>
                                    </b-button>
                                </div>
                            </div>
                            <!-- collapse -->
                            <app-collapse id="faq-payment-qna" accordion type="margin" class="mt-2">
                                <app-collapse-item v-for="( uimplemento,index) in ugrupo.implementos" :key="index" :title="uimplemento.nombreImp" :bcolor="'success'" tcolor="'success'">
                                    <b-button v-b-modal.modal-implemento variant="secondary" class="mr-1 btn-icon rounded-circle" @click="EditarImplemento(uimplemento )">
                                        <feather-icon icon="Edit2Icon" size="20"/>
                                    </b-button>
                                    {{ uimplemento.nombreImp }}
                                </app-collapse-item>
                            </app-collapse>
                            <!--/ collapse -->
                        </div>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
    </b-card>

    <!--<b-card>-->
        
        <!---------------------------------- tabla -------------------------------->
        <!--<vue-good-table
            :columns="tcolumnas" :rows="rutas" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
        >-->
        
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
            <!--<template slot="table-row" slot-scope="props">-->
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
                <!---<span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>-->
                     <!--<b-button variant="flat-primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)"><feather-icon icon="EditIcon" style="width:20px; height: 20px;" /></b-button>-->
                <!---</span>-->
                <!-- Column: Common -->
                <!--<span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>-->

            <!---------------------------------- paginación -------------------------------->
            <!---<template slot="pagination-bottom" slot-scope="props">
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
        </vue-good-table>-->

        <!---------------------------------- modal grupo -------------------------------->
        <b-modal
          id="modal-grupo" v-model="showModal"
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
                <b-col md="3" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="grupo.idGrupo" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <b-form-group label="Nombre Grupo">
                        <b-form-input v-model="grupo.nombreGru" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Entidad">
                        <v-select label="valorDat" v-model="grupo.Entidad_idDato" :reduce="entidades => entidades.idDato" :options="zentidades" style="flex: 1;" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Area">
                        <v-select label="nombreAre" v-model="grupo.Area_idArea" :reduce="areas => areas.idArea" :options="zareas" style="flex: 1;" disabled/>
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
        <!---------------------------------- modal implemento -------------------------------->
        <b-modal
          id="modal-implemento" v-model="showModalI"
          :header-bg-variant="headerBgVariantI" :header-text-variant="headerTextVariantI" :title="headerTitleVariantI"
          :footer-bg-variant="footerBgVariantI" :footer-text-variant="footerTextVariantI"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
        <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="3" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="grupo.idGrupo" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Nombre del Implemento">
                        <b-form-input v-model="implemento.nombreImp" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Vigencia Implemento ( Meses )">
                        <!---<b-form-input v-model="implemento.vigenciaImp" class="form-control"/>-->
                        <b-form-select v-model="implemento.vigenciaImp" :options="vigenciaImplemento"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="¿ Es Renovable ?">
                        <!--<b-form-input v-model="implemento.renovableImp" class="form-control"/>-->
                        <b-form-select v-model="implemento.renovableImp" :options="renovacionImplemento"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Entidad">
                        <v-select label="valorDat" v-model="implemento.Entidad_idDato" :reduce="entidades => entidades.idDato" :options="zentidades" style="flex: 1;" :disabled="true" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grupo">
                        <v-select label="nombreGru" v-model="implemento.Grupo_idGrupo" :reduce="grupos => grupos.idGrupo" :options="grupos2" style="flex: 1;" :disabled="true" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Costo">
                        <b-form-input v-model="implemento.costoImp" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cantidad">
                        <b-form-input v-model="implemento.cantidadImp" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Tipo Implemento">
                        <b-form-select v-model="implemento.tipoImp" :options="tipoImplemento"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Material">
                        <v-select label="nombreMat" v-model="implemento.Material_idMaterial" :reduce="material => material.idMaterial" :options="material" style="flex: 1;" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <!---<b-form-group label="Propiedad Implemento">-->
                    <b-form-group label="¿ Es Transferible / instransferible ?">
                        <b-form-select v-model="implemento.propiedadImp" :options="propiedadImplemento"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Proveedor">
                        <v-select label="nombreExt" v-model="implemento.Proveedor_idExterno" :reduce="externo => externo.idExterno" :options="externos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Validar Por">
                        <b-form-select v-model="implemento.validacionImp" :options="validacionImplemento"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Alerta Implemento (días)">
                        <b-form-input v-model="implemento.alertaImp" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Renovacion Implemento (Meses)">
                        <b-form-input v-model="implemento.renovacionImp" class="form-control"/>
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
                    <b-button variant="success" size="sm" @click="GuardarImplemento" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="ActualizarImplemento" v-else :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Actualizar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    <!---</b-card>-->
</div></template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCard, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, VBToggle, BCollapse, BTabs, BTab
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'


import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { props } from 'vue-prism-component'

export default {
    props: { 
        vista_entidad: { 
            type: Number,
            default: 0, 
            required: false,
        },
        vista_area: { 
            type: Number,
            default: 0, 
            required: false,
        },
        vista_nentidad: { 
            type: String,
            default: "", 
            required: false,
        },
        vista_narea: { 
            type: String,
            default: "", 
            required: false,
        },
        vista_implemento: {
            type: String,
            default: "GENERICO", 
            required: false,
        },
    },
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
        BCard,
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
        Cleave,
        AppTimeline,
        AppTimelineItem,
        BCollapse,
        BTabs,
        BTab,
        AppCollapseItem,
        AppCollapse,
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
                { label: 'ID', field: 'idRuta'},
                { label: 'Cliente', field: 'nombreExt'},
                { label: 'Tipo Veh.', field: 'vehiculoRut'},
                { label: 'Carga', field: 'cargaRut'},
                { label: 'Origen', field: 'origenRut'},
                { label: 'Destino', field: 'destinoRut'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO GRUPO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,

            headerBgVariantI: 'dark',
            headerTextVariantI: 'success',
            headerTitleVariantI: 'NUEVO IMPLEMENTO',
            bodyBgVariantI: 'light',
            bodyTextVariantI: 'success',
            footerBgVariantI: 'dark',
            footerTextVariantI: 'dark',
            showModalI: false,
            /**************************** entorno ****************************/
            validacionImplemento: [
                { value:'NINGUNO', text:'NINGUNO'},
                { value:'KILOMETRAJE', text:'KILOMETRAJE'},
                { value:'FECHA', text:'FECHA'},
                { value:'CHECK', text:'CHECK'},
                { value:'HOROMETRAJE', text:'HOROMETRAJE'},
            ],
            tipoImplemento: [
                { value: 'ACTIVO', text: 'ACTIVO' },
                { value: 'CONSUMIBLE', text: 'CONSUMIBLE' },
                { value: 'DOCUMENTO', text: 'DOCUMENTO' },
                { value: 'ACTIVIDAD', text: 'ACTIVIDAD' },
                { value: 'CHECK', text: 'CHECK' },
            ],
            vigenciaImplemento: [
                { value:'0', text:'NO'},
                { value:'1', text:'SI'},
            ],
            renovacionImplemento: [
                { value:'0', text:'NO'},
                { value:'1', text:'SI'},
            ],
            propiedadImplemento: [
                { value:'INSTRANSFERIBLE', text: 'INSTRANSFERIBLE'},
                { value:'TRANSFERIBLE', text: 'TRANSFERIBLE'}
            ],
            zentidades: [],
            material: [],
            zareas: [],
            zimplementos: ['ACTIVO', 'CONSUMIBLE', 'DOCUMENTO', 'ACTIVIDAD', 'CHECK'],

            yentidad: {},
            yarea: {},
            yimplemento: {},
            entidad: {}, 
            area: {},

            grupos2: [],
            grupos: [],
            resultado: [],


            rutas: [],
            tvehiculos: [],
            cargas: [],
            ubicaciones: [],
            externos: [],
            tramos: [],
            recorridos: [],
            plantilla: {
                idPlantilla: 0, 
                Area_idArea: 0, 
                nombrePla: "", 
                Cuenta_idDato: 0, 
                Entidad_idDato: 0, 
                multiplicadorPla: 0,
            },
            /*plantilla: {
                idRuta: "",
                nombreRut: "",
                vehiculoRut: "",
                cargaRut: "",
                origenRut: "",
                destinoRut: "",
                roundtripRut: 0,
                alimentacionRut: "",
                tramosRut: "",
                hospedajesRut: "",
                cocherasRut: "",
                viaticosRut: "",
            },*/

            /**************************** formulario ****************************/
            grupo: {
                idGrupo:0,
                nombreGru:"", 
                Entidad_idDato: 0, 
                Area_idArea:0,
            },

            ruta: {
                idRuta: "",
                nombreRut: "",
                vehiculoRut: "",
                cargaRut: "",
                origenRut: "",
                destinoRut: "",
                roundtripRut: 0,
                alimentacionRut: "",
                tramosRut: "",
                hospedajesRut: "",
                cocherasRut: "",
                viaticosRut: "",
            },

            implemento: {
                idImplemento: 0, 
                nombreImp: "", 
                vigenciaImp: "", 
                renovableImp: "", 
                graveImp: "", 
                medioImp: "", 
                leveImp: "", 
                Entidad_idDato: 0, 
                costoImp: 0, 
                cantidadImp: 0, 
                Grupo_idGrupo: 0, 
                tipoImp: "", 
                propiedadImp: "", 
                Proveedor_idExterno: 0, 
                validacionImp: "", 
                Medida_idDato: 0, 
                alertaImp: "",
                Material_idMaterial: 0, 
                renovacionImp:"",
            }, 
            //costos: [],
            recorridos_actuales: [],
            //minitabla
            /*ytramo: {},
            yhospedaje: "",
            ycochera: "",
            yviatico: "",*/
            ynro: 0,

            faqData: {},
            faqSearchQuery: '',


            informacion: {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCardIcon',
      title: 'Payment',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Does my subscription automatically renew?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'Can I store the item on an intranet so everyone has access?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'What does non-exclusive mean?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'Is the Regular License the same thing as an editorial license?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'Which license do I need for an end product that is only accessible to paying users?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          question: 'Which license do I need to use an item in a commercial?',
          ans:
            'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.',
        },
        {
          question: 'Can I re-distribute an item? What about under an Extended License?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.',
        },
      ],
    },
    // delivery
    delivery: {
      icon: 'ShoppingBagIcon',
      title: 'Delivery',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Where has my order reached?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question:
            'The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'What if my shipment is marked as lost?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'My shipment status shows that it’s out for delivery. By when will I receive it?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'What do I need to do to get the shipment delivered within a specific timeframe?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
    // cancellation and return
    cancellationReturn: {
      icon: 'RefreshCwIcon',
      title: 'Cancellation & Return',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can my security guard or neighbour receive my shipment if I am not available?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'How can I get the contact number of my delivery agent?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I cancel my shipment?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'I have received a defective/damaged product. What do I do?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'How do I change my delivery address?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          question: 'What documents do I need to carry for self-collection of my shipment?',
          ans:
            'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.',
        },
        {
          question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.',
        },
      ],
    },
    // my orders
    myOrders: {
      icon: 'PackageIcon',
      title: 'My Orders',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can I avail of an open delivery?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'I haven’t received the refund of my returned shipment. What do I do?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I ship my order to an international location?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'I missed the delivery of my order today. What should I do?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'The delivery of my order is delayed. What should I do?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
    // product and services
    productServices: {
      icon: 'SettingsIcon',
      title: 'Product & Services',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'How can I register a complaint against the courier executive who came to deliver my order?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I get a proof of delivery for my shipment?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'How can I avail your services?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
      ],
    },
  },
},


        }
    },
    watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.fetchData()
      },
    },
  },
    methods : {

        fetchData() {
            
            /*this.$http.get('/faq/data', { params: { q: this.faqSearchQuery } }).then(res => {
            this.faqData = res.data
            })*/

            /*const { q = '' } = { q: this.faqSearchQuery };
            const queryLowered = q.toLowerCase();

            const filteredData = {}

            Object.entries(this.informacion.faqData).forEach(entry => {
                const [categoryName, categoryObj] = entry
                // eslint-disable-next-line arrow-body-style
                const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
                    return qAndAObj.question.toLowerCase().includes(queryLowered)
                })
                if (filteredQAndAOfCategory.length)
                {
                    filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
                }
            })

            this.faqData = filteredData;*/
            //return [200, filteredData];

            const { q = '' } = { q: this.faqSearchQuery };
            const queryLowered = q.toLowerCase();

            const filteredData = {}

            Object.entries(this.grupos).forEach(entry => {
                const [categoryName, categoryObj] = entry
                // eslint-disable-next-line arrow-body-style
                const filteredQAndAOfCategory = categoryObj.implementos.filter(qAndAObj => {
                    return qAndAObj.nombreImp.toLowerCase().includes(queryLowered)
                })
                if (filteredQAndAOfCategory.length)
                {
                    filteredData[categoryName] = { ...categoryObj, implementos: filteredQAndAOfCategory }
                }
            })

            this.resultado = filteredData;
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

        Listar()
        {
            if(this.yentidad == null || this.yentidad == {})
            {
                this.Toast(true,'warning','Listar','Debe Ingresar un Tipo de Entidad');
                return;
            }
            if(this.yarea == null || this.yarea == {})
            {
                this.Toast(true,'warning','Listar','Debe Ingresar un Area');
                return;
            }

            /*var entidad = this.yentidad;
            var area = this.yarea;

            entidad.idDato = 287;
            area.idArea = 4;*/
            //this.$http.get('/LiberAPP/Implemento/Listar/'+entidad.idDato+'/'+area.idArea)
            
            //this.$http.get('/LiberAPP/Implemento/Listar/'+this.yentidad.idDato+'/'+this.yarea.idArea)
            this.$http.get('/LiberAPP/Implemento/Listar/'+this.yentidad.idDato+'/'+this.yarea.idArea).then(res => {
               this.grupos = res.data;
               this.resultado = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        NuevoRecorrido(prm_posicion)
        {
            var urecorrido = {
                "nroRec": this.ynro,
                "idRecorrido": 0, 
                "nombreRec": "NUEVO RECORRIDO",
                "roundtripRec": "", 
                "yrecorrido": [],
                "tramos": [],
                "tramo": {
                    "ytramo": {},
                    "yhospedaje": "", 
                    "ycochera": "",
                    "yviatico": "",
                    }
                };
            this.ynro++;
            prm_posicion++;
            this.recorridos_actuales.splice(prm_posicion,0,urecorrido);
        },
        EliminarRecorrido(prm_posicion)
        {
            this.recorridos_actuales.splice(prm_posicion,1);
        },
        //AgregarTramo(prm_recorrido,prm_nro)
        AgregarTramo(prm_tramo,prm_posicion)
        {
            if(prm_tramo.ytramo == null || prm_tramo.ytramo == {} || Object.keys(prm_tramo.ytramo).length === 0)
            {
                this.Toast(true,'danger','Agregar Tramo','Seleccione un Tramo');
                return;
            }
            if(prm_tramo.yhospedaje == null || prm_tramo.yhospedaje == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Hospedaje');
                return;
            }
            if(prm_tramo.ycochera == null || prm_tramo.ycochera == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Operador');
                return;
            }
            if(prm_tramo.yecochera == null || prm_tramo.yecochera == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Escoltas');
                return;
            }
            if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
                return;
            }
            if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
                return;
            }
            if(prm_tramo.ydviatico == null || prm_tramo.ydviatico == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Detalle del Gasto Adicional');
                return;
            }

            var utramo = {
                id: prm_tramo.ytramo.idTramo,
                inicio: prm_tramo.ytramo.inicioTra,
                termino: prm_tramo.ytramo.terminoTra,
                hospedaje: prm_tramo.yhospedaje,
                cochera: prm_tramo.ycochera,
                ecochera: prm_tramo.yecochera,
                viatico: prm_tramo.yviatico,
                dviatico: prm_tramo.ydviatico,
                peaje: prm_tramo.ytramo.peajeTra,
                camioneta: prm_tramo.ytramo.camionetaTra,
            };

            //AGREGANDO EL TRAMO A LA LISTA
            this.recorridos_actuales[prm_posicion].tramos.push(utramo);

            this.recorridos_actuales[prm_posicion].tramo = {
                    "ytramo": {},
                    "yhospedaje": "", 
                    "ycochera": "",
                    "yecochera": "",
                    "yviatico": "",
                    "ydviatico": "",
                    };

            /*var encontrado = this.costos.filter(function (tcosto)
            {
                return (tcosto.id == ucosto.id);
            },this);

            if(encontrado.length == 0)
            {
                this.costos.push(ucosto);

                this.ytramo = {};
                this.yhospedaje = "";
                this.ycochera = "";
                this.yviatico = "";
            }
            else
            {
                this.Toast(true,'warning','Agregar Tramo','Los Parámetros Ingresados ya Existen');
            }*/
        },
        EliminarTramo(prm_pos,prm_indice)
        {
            //if(this.costos[prm_indice].corte == "1")
                //this.cortes[1].disabled = false;//se inhabilita el corte porque ya se ingreso uno
            //if(this.costos[prm_indice].corte == "2")
                //this.cortes[2].disabled = false;//se inhabilita el corte porque ya se ingreso uno
            this.recorridos_actuales[prm_pos].tramos.splice(prm_indice, 1);
        },
        Roundtrip()
        {
            var roundtrip = 0;
            /*this.recorridos_actuales.forEach(function(urecorrido)
            {
                roundtrip += urecorrido.roundtripRec;
            });*/

            for (let urecorrido of this.recorridos_actuales)
            {
                roundtrip += Number(urecorrido.roundtripRec);
            }

            //this.ruta.roundtripRut = 0;
            this.ruta.roundtripRut = roundtrip;
        },
        Nuevo( prm_entidad, prm_grupo )
        {
            this.grupo.Entidad_idDato = this.yentidad.idDato;
            this.grupo.Area_idArea = this.yarea.idArea;
            this.implemento.Entidad_idDato = prm_entidad.idDato;
            this.implemento.Grupo_idGrupo = prm_grupo.idgrupo;
            this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVA GRUPO";

            if ( this.vista_entidad !== 0) 
            {
                this.grupo.Entidad_idDato = this.vista_entidad; 
                this.grupo.Area_idArea = this.vista_area;
            }
            //Seteando los valores para el modal
            this.ruta = Object.assign({}, this.plantilla);
            this.recorridos_actuales = [];
            this.ynro = 0;
            this.implemento = { 
                    idImplemento: 0, 
                    nombreImp: "", 
                    vigenciaImp: "", 
                    renovableImp: "", 
                    graveImp: "", 
                    medioImp: "", 
                    leveImp: "", 
                    Entidad_idDato: this.implemento.Entidad_idDato, 
                    costoImp: 0, 
                    cantidadImp: 0, 
                    Grupo_idGrupo: this.implemento.Grupo_idGrupo, 
                    tipoImp: "", 
                    propiedadImp: "", 
                    Proveedor_idExterno: 0, 
                    validacionImp: "", 
                    Medida_idDato: 0, 
                    alertaImp: "",
                }
        },
        EditarImplemento( prm_grupo )
        {
            this.headerTextVariant = 'primary'
            this.headerTitleVariant = 'EDITAR IMPLEMENTO'
            this.implemento = prm_grupo
            this.boton = true
        },
        Editar(prm_ruta)
        {
            this.headerTextVariant= 'primary';
            this.headerTitleVariant = "EDITAR RUTA";
            this.boton = true;
            //Seteando los valores para el modal
            this.ruta = Object.assign({}, prm_ruta);
            delete this.ruta.vgt_id;
            delete this.ruta.originalIndex;

            //Agregando los parámetros de viáticos adicionales
            let ahospedajes = prm_ruta.hospedajesRut.split('-');
            let acocheras = prm_ruta.cocherasRut.split("-");
            let aecocheras = prm_ruta.ecocherasRut.split("-");
            let aviaticos = prm_ruta.viaticosRut.split("-");
            let adviaticos = prm_ruta.dviaticosRut.split("-");
            let atramos = prm_ruta.tramosRut.split("-");
            let arecorridos = prm_ruta.recorridosRut.split("-");
            let aroundtrips = prm_ruta.diasRut.split("-");
            let aasignaciones = prm_ruta.asignacionesRut.split("-");

            var recorridos = [];
            var apartado = 0;
            var cantidad = 0;

            for (var i = 0; i < atramos.length; i++)
            {
                if(cantidad == 0)
                {
                    var zrecorridos = this.recorridos.filter(function (urecorrido) { return urecorrido.idDato == arecorridos[i]; });
                    var zrecorrido = (zrecorridos.length > 0) ? zrecorridos[0] : null;

                    var urecorrido = {
                            "nroRec": apartado,
                            "idRecorrido": arecorridos[i],
                            "nombreRec": zrecorrido.valorDat,
                            "roundtripRec": aroundtrips[apartado], 
                            "yrecorrido": zrecorrido,
                            "tramos": [],
                            "tramo": {
                                "ytramo": {},
                                "yhospedaje": "", 
                                "ycochera": "",
                                "yecochera": "",
                                "yviatico": "",
                                "ydviatico": "",
                            }
                        };
                    cantidad = aasignaciones[apartado];
                    recorridos.push(urecorrido);
                    apartado++;
                }

                var ztramos = this.tramos.filter(function (utramo) { return utramo.idTramo == atramos[i]; });
                var ztramo = (ztramos.length > 0) ? ztramos[0] : null;
                var utramo = {
                        "inicio": ztramo.inicioTra,
                        "termino": ztramo.terminoTra,
                        "id": ztramo.idTramo,
                        "hospedaje": ahospedajes[i], 
                        "cochera": acocheras[i],
                        "ecochera": aecocheras[i],
                        "viatico": aviaticos[i],
                        "dviatico": adviaticos[i],
                        "peaje": ztramo.peajeTra,
                        "camioneta": ztramo.camionetaTra,
                    };

                recorridos[apartado-1].tramos.push(utramo);
                cantidad--;
                

                /**/////////////////////////////

                /*if(inicial != aasignaciones[])
                //Encontrar un objeto en un array por una de sus propiedades
                var ztramos = this.tramos.filter(function (utramo) { return utramo.idTramo == atramos[i]; });
                var ztramo = (ztramos.length > 0) ? ztramos[0] : null;

                var ucosto = {
                    id: atramos[i],
                    recorrido: arecorridos[i],
                    inicio: ztramo.inicioTra,
                    termino: ztramo.terminoTra,
                    hospedaje: ahospedajes[i],
                    cochera: acocheras[i],
                    viatico: aviaticos[i],
                };
                this.costos.push(ucosto);*/
            }
            this.recorridos_actuales = recorridos;
            this.ynro = apartado;
        },
        /*Recorrido()
        {
            if(this.recorrido_actual == this.recorrido_siguiente)
                this.recorrido_actual = this.recorrido_actual-1;
            else
                this.recorrido_actual++;
            if(this.recorrido_actual > this.recorrido_detalle.length)
                this.recorrido_actual--;
        },*/
        
        Guardar()
        {
            this.showLoading = true;

            var jsonGrupo = JSON.stringify(this.grupo)
            this.$http.post('/LiberAPP/grupo/Guardar', 
            {
                grupo: jsonGrupo
            }).then( res => {
                this.Toast(true,'success','Agregar Grupo','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Listar()
                this.GrupoImplemento()
            }).catch( error => { 
                this.Toast(true,'danger','Agregar Grupo','Error al guardar el registro: '+error);
                this.showLoading = false;
            })

            //buscando el nombre del externo
            /*var zidexterno = this.ruta.Externo_idExterno;
            var zexternos = this.externos.filter(function (uexterno) { return uexterno.idExterno == zidexterno; });
            var zexterno = (zexternos.length > 0) ? zexternos[0] : null;
            this.ruta.nombreExt = zexterno.nombreExt;
            //this.ruta.roundtripRut = parseInt(this.ruta.roundtripcRut) + parseInt(this.ruta.roundtripeRut) + parseInt(this.ruta.roundtriprRut);

            var jsonRuta = JSON.stringify(this.ruta);
            //var jsonTramo = JSON.stringify(this.costos);
            var jsonRecorrido = JSON.stringify(this.recorridos_actuales);

            this.$http.post('/LiberAPP/Ruta/Guardar',
            {
                ruta: jsonRuta,
                //tramo: jsonTramo,
                recorrido: jsonRecorrido
            })
            .then(res => {
                this.Toast(true,'success','Agregar Ruta','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Rutas();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Ruta','Error al guardar el registro: '+error);
                this.showLoading = false;
            });*/
        },
        Actualizar()
        {
            this.showLoading = true;

            //buscando el nombre del externo
            var zidexterno = this.ruta.Externo_idExterno;
            var zexternos = this.externos.filter(function (uexterno) { return uexterno.idExterno == zidexterno; });
            var zexterno = (zexternos.length > 0) ? zexternos[0] : null;
            this.ruta.nombreExt = zexterno.nombreExt;
            
            var jsonRuta = JSON.stringify(this.ruta);
            //var jsonTramo = JSON.stringify(this.costos);
            var jsonRecorrido = JSON.stringify(this.recorridos_actuales);
            //this.ruta.roundtripRut = parseInt(this.ruta.roundtripcRut) + parseInt(this.ruta.roundtripeRut) + parseInt(this.ruta.roundtriprRut);

            this.$http.post('/LiberAPP/Ruta/Actualizar',
            {
                ruta: jsonRuta,
                //tramo: jsonTramo
                recorrido: jsonRecorrido
            }).then(res => {
                this.Toast(true,'primary','Actualizar Ruta','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Rutas();
            }).catch(error => {
                this.Toast(true,'danger','Actualizar Ruta','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        GuardarImplemento()
        {
            this.shiowloading = true;
            var jsonImplemento = JSON.stringify(this.implemento)
            this.$http.post('/LiberAPP/Implemento/Guardar', 
            {
                implemento: jsonImplemento
            }).then( res => {
                this.Toast(true,'success','Agregar Grupo','Guardado Correctamente');
                this.showModalI = false;
                this.showLoading = false;
                this.Listar();
                //this.implemento = [];
                this.implemento = { 
                    idImplemento: 0, 
                    nombreImp: "", 
                    vigenciaImp: "", 
                    renovableImp: "", 
                    graveImp: "", 
                    medioImp: "", 
                    leveImp: "", 
                    Entidad_idDato: this.implemento.Entidad_idDato, 
                    costoImp: 0, 
                    cantidadImp: 0, 
                    Grupo_idGrupo: this.implemento.Grupo_idGrupo, 
                    tipoImp: "", 
                    propiedadImp: "", 
                    Proveedor_idExterno: 0, 
                    validacionImp: "", 
                    Medida_idDato: 0, 
                    alertaImp: "",
                }
            }).catch( error => {
                this.Toast(true,'danger','Agregar Grupo','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        }, 
        ActualizarImplemento()
        {
            var jsonImplemento = JSON.stringify( this.implemento )

            this.$http.post('/LiberAPP/Implemento/Actualizar', 
            {
                implemento: jsonImplemento,
            }).then( res => { 
                this.Toast(true,'primary','Actualizar Implemento','Actualizado Correctamente');
                this.showModalI = false
                this.showLoading = false
                this.Listar()
            }).catch( error => { 
                this.Toast(true,'danger','Actualizar Implemento','Error al actualizar registro: '+ error);
                this.showLoading = false
            })
        },
        Grupo()
        {
            this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(res => {
                this.zentidades = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        GrupoImplemento()
        {
            
            this.$http.get('/LiberAPP/grupo/Listar').then( res => {
                this.grupos2 = res.data
            }).catch( error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
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

        this.entidad =  {
            idDato: this.vista_entidad, 
            valorDat: this.vista_nentidad,
        }; 
        this.area = { 
            idArea: this.vista_area,
            nombreAre: this.vista_narea,
        };

        if(this.vista_implemento == "GENERICO")//Si es Generico se Listan las Entidades y las Areas para Seleccionar
        {
            this.$http.get('/LiberAPP/Implemento/Listar/'+this.entidad+'/'+this.area).then(res => {
                this.grupos = res.data;
                this.resultado = res.data;    
            }).catch(error => {
                this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
            });
        } else { 
            this.narea = this.area.nombreAre;
          
            this.idArea = this.area.idArea;
            this.nentidad = this.entidad.valorDat;
            this.idEntidad = this.entidad.idDato;
            this.yentidad.idDato = this.entidad.idDato;
            this.yarea.idArea = this.area.idArea;

            this.$http.get('/LiberAPP/Implemento/Listar/'+this.vista_entidad+'/'+this.vista_area).then(res => {
                this.grupos = res.data;
                this.resultado = res.data;    
            }).catch(error => {
                this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
            });
        }


        /*if ( this.vista_entidad )
        {
            this.$http.get('/LiberAPP/Implemento/Listar/'+this.vista_entidad+'/'+this.vista_area).then(res => {
                this.grupos = res.data;
                this.resultado = res.data;    
            }).catch(error => {
                this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        }
        // Solo si existe la variable 
        if ( this.entidad )
        {
            this.$http.get('/LiberAPP/Implemento/Listar/'+this.entidad+'/'+this.area).then(res => {
                this.grupos = res.data;
                this.resultado = res.data;    
            }).catch(error => {
                this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        }*/


        /*this.$http.get('/LiberAPP/Ruta')
            .then(res => {
               this.rutas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Ruta','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Tramo/SelectViatico')
            .then(res => {
                this.tramos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Tramo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Dato/Select/TVEHICULO/TRANSPORTE')
            .then(res => {
                this.tvehiculos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Dato/Select/CARGA/TRANSPORTE')
            .then(res => {
                this.cargas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Dato/Select/RECORRIDO/TRANSPORTE')
            .then(res => {
                this.recorridos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
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
                */
        this.$http.get('/LiberAPP/grupo/Listar').then( res => {
            this.grupos2 = res.data
        }).catch( error => {
            this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
            this.showLoading = false;
        })

        this.$http.get('/LiberAPP/Externo/Select').then(res => {
            this.externos = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(res => {
            this.zentidades = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
        this.$http.get('/LiberAPP/Area/Select').then(res => {
            this.zareas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
        this.$http.get('/LiberAPP/Material/Listar').then(res => {
            this.material = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Material','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        /*zentidades
        zareas
        zimplementos*/
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>
<style scoped>
    .tabs
    {
        margin-top: 10pt;
        padding-top: 10pt;
        padding-bottom: 10pt;
        /*border:  1px solid rgb(123,123,123);
        background-color: rgba(123,123,123,0.1);
        border-radius: 5pt;
        box-shadow: 0px 0px 17px 5px #757575 !important;*/
    }
    .tab-pane
    {
        padding: 10pt;
        border:  1px solid rgb(123,123,123);
        background-color: rgba(40,199,111,0.1);
        border-radius: 5pt;
        /*box-shadow: 0px 0px 10px 3px #757575 !important;*/
    }
</style>