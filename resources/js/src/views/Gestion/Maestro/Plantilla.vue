<template>
    <div>
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
                <b-col md="6" xl="3" class="text-center">
                    <div class="demo-inline-spacing">
                        <b-button variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="6" xl="6">
                    <h3 class="text-primary text-bold">PLANTILLAS {{narea}}</h3>
                </b-col>
                <b-col md="6" xl="6">
                    <div class="custom-search d-flex justify-content-end">
                        <!---------------------------------- nuevo -------------------------------->
                        <b-button v-b-modal.modal-plantilla variant="success" @click="Nuevo( yentidad, yarea )">
                            <feather-icon icon="PlusIcon" class="float-end mr-50"/>
                            <span class="align-middle">Nueva Plantilla</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <div class="demo-inline-spacing" v-for="(uplantilla, indice) in arr_plantillas" :key="indice">
                    <b-button variant="outline-secondary" @click="ListarImplementos( uplantilla )" v-bind:class="{ 'btn-outline-info': uplantilla.clicked, 'btn-outline-primary': !uplantilla.clicked }" :disabled="showLoading" size="sm" pill>
                        <feather-icon icon="ArrowRightIcon" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">{{ uplantilla.nombrePla }}</span>
                    </b-button>
                </div>
            </b-row>
        </b-card>
        <b-card v-if="plantilla.idPlantilla !== 0 && mostrar">
            <b-row>
                <b-col md="6" xl="6" class="d-flex align-items-center">
                    <b-button-group size="sm">
                        <b-button variant="primary">1</b-button>
                        <b-button variant="outline-primary" @click="mostrar = !mostrar">2</b-button>
                    </b-button-group>&nbsp;&nbsp;
                    <h3 class="text-success text-bold mt-1">ASIGNAR ENTIDADES - {{ plantilla.nombrePla }}</h3>
                </b-col>
                <!---------------------------------- búsqueda -------------------------------->
                <b-col md="6" xl="6">
                    <div class="custom-search d-flex justify-content-end">
                        <b-form class="faq-search-input">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text> <feather-icon icon="SearchIcon" /> </b-input-group-prepend>
                                <b-form-input id="searchbar" v-model="SearchHomologacion" placeholder="Buscar Homologacion" />
                            </b-input-group>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12" class="text-center">
                    <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">
                        <b-tab v-for="(uregistro, indice) in registros" :key="indice">
                            <!-- Titulo--> 
                            <template #title>
                                <feather-icon icon="FolderIcon" size="18" class="mr-1" />
                                <span class="font-weight-bold text-left">{{ uregistro.gru }}</span>
                            </template>
                            <div v-if="uregistro">
                                <b-col md="12" xl="12">
                                    <table class="table table-condensed table-bordered">
                                        <tr>
                                            <th style="width: 10px;">Seleccionar</th>
                                            <th style="width: 150px;">Descripcion</th>
                                        </tr>
                                        <tr v-for="( udetalle, index ) in uregistro.ent">
                                            <td>
                                                <b-button variant="success" class="btn-icon rounded-circle" v-if="udetalle.sel == true" @click="udetalle.sel = false, SeleccionHomologacion(udetalle, plantilla)" :disabled="showLoading">
                                                    <feather-icon icon="CheckIcon" v-if="!showLoading"/>
                                                    <b-spinner small v-else/>
                                                </b-button>

                                                <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else="udetalle.sel == false" @click="udetalle.sel = true, SeleccionHomologacion(udetalle, plantilla)">
                                                    <feather-icon icon="CrosshairIcon" />
                                                </b-button>
                                            </td>
                                            <td>{{ udetalle.nom }}</td>
                                        </tr>
                                    </table>
                                </b-col>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-card>
        <b-card v-if="plantilla.idPlantilla !== 0 && !mostrar">
            <b-row>
                <b-col md="6" xl="6" class="d-flex align-items-center">
                    <b-button-group size="sm">
                        <b-button variant="outline-primary" @click="mostrar = !mostrar">1</b-button>
                        <b-button variant="primary">2</b-button>
                    </b-button-group>&nbsp;&nbsp;
                    <h3 class="text-success text-bold mt-1">ASIGNAR {{vista_implemento}} - {{ plantilla.nombrePla }}</h3>
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
                <b-col md="12" xl="12" class="text-center">
                    <b-tabs vertical content-class="col-12 col-md-8 col-lg-9" pills nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12" nav-class="nav-left">
                        <b-tab v-for="(ugrupo_imp, indice) in resultado" :key="indice">
                            <!-- Titulo -->
                            <template #title>
                                <feather-icon icon="FolderIcon" size="18" class="mr-1" />
                                <span class="font-weight-bold text-left">{{ ugrupo_imp.nombreGru }}</span>
                            </template>
                            <div v-if="ugrupo_imp">
                                <b-col md="12" xl="12">
                                    <table class="table table-condensed table-bordered">
                                        <tr>
                                            <th style="width: 10px;">Sel.</th>
                                            <th style="width: 150px;">Implementos</th>
                                            <th style="width: 200px;">Validar Por</th>
                                            <th style="min-width: 10px;">Materiales</th>
                                            <th style="width: 100px;">Anticipacion de Alerta</th>
                                            <th style="width: 100px;">Renovacion Implemento (meses)</th>
                                        </tr>
                                        <tr v-for="( uimplemento,index) in ugrupo_imp.implementos">
                                            <td>
                                                <b-button variant="success" class="btn-icon rounded-circle" v-if="uimplemento.sel == true" @click="uimplemento.sel = false, Seleccion(uimplemento, plantilla)">
                                                <!---<b-button variant="success" class="btn-icon rounded-circle" v-if="uimplemento.sel == true" @click="uimplemento.sel = false, Seleccion(uimplemento, plantilla.idPlantilla)">-->
                                                    <feather-icon icon="CheckIcon" />
                                                </b-button>
                                                <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else="uimplemento.sel == false" @click="uimplemento.sel = true, Seleccion(uimplemento, plantilla)">
                                                    <feather-icon icon="CrosshairIcon" />
                                                </b-button>
                                            </td>
                                            <td>{{ uimplemento.nombreImp }}</td>
                                            <td>
                                                <b-form-select v-model="uimplemento.validacionDis" :options="validarPor" @change="Editar(uimplemento)"/>
                                            </td>
                                            <td v-if="uimplemento.idDistribucion !== undefined">
                                                <b-badge v-b-modal.modal-material variant="success" @click="EditarMaterial(uimplemento)">Material</b-badge>
                                            </td>
                                            <td v-else>
                                                <b-badge variant="danger">Sin Material</b-badge>
                                            </td>
                                            <td>
                                                <b-form-input v-model="uimplemento.alertaDis" type="text" class="d-inline-block" @change="Editar(uimplemento)" />
                                                <!--<cleave class="form-control" v-model="uimplemento.alertaDis" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" @change="Editar(uimplemento)"/>-->
                                            </td>
                                            <td>
                                                <b-form-input v-model="uimplemento.renovacionDis" type="text" class="d-inline-block" @change="Editar(uimplemento)" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="6">
                                                <b-button variant="success" :disabled="showLoading" @click="ActualizarDistribucion()">
                                                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                                                    <b-spinner small v-else/>
                                                    <span class="align-middle">Actualizar Seleccionados</span>
                                                </b-button>
                                            </td>
                                        </tr>
                                    </table>
                                </b-col>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>
        </b-card>
        <!------------------------------------------------- Modal Plantilla ---------------------------------------->
        <b-modal
          id="modal-plantilla" v-model="showModal"
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
                        <b-form-input v-model="plantilla.idPlantilla" readonly/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="8">
                    <b-form-group label="Cuenta">
                        <v-select label="valorDat" v-model="plantilla.Cuenta_idDato" :reduce="entidades => entidades.idDato" :options="zcuentas" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <b-form-group label="Nombre Plantilla">
                        <b-form-input v-model="plantilla.nombrePla" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Entidad">
                        <v-select label="valorDat" v-model="plantilla.Entidad_idDato" :reduce="entidades => entidades.idDato" :options="zentidades" style="flex: 1;" disabled />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Area">
                        <v-select label="nombreAre" v-model="plantilla.Area_idArea" :reduce="areas => areas.idArea" :options="zareas" style="flex: 1;" disabled />
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
                    <b-button variant="success" size="sm" @click="GuardarPlantilla" v-if="!boton" :disabled="showLoading">
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
        <!------------------------------------------------- Modal Materiales ---------------------------------------->
        <b-modal
          id="modal-material" v-model="showModalM"
          :header-bg-variant="headerBgVariantM" :header-text-variant="headerTextVariantM" :title="headerTitleVariantM"
          :footer-bg-variant="footerBgVariantM" :footer-text-variant="footerTextVariantM"
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
                        <b-form-input v-model="distribucion.idDistribucion" readonly/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="6">
                    <b-form-group label="Nombre Implemento">
                        <b-form-input v-model="distribucion.nombreImp" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                        <thead class="thead-dark">
                            <tr><th style="width: 10px;">Nro</th><th style="width: 200px;">MATERIAL</th><th style="width: 25px;">CANTIDAD</th><th style="width: 25px;">ACCIONES</th></tr>
                        </thead>
                        <tr>
                            <td>#</td>
                            <td>
                                <v-select label="nombreMat" v-model="distribucion.materialesDis" :options="materiales" style="flex: 1;"/>
                            </td>
                            <td>
                                <b-form-input v-model="distribucion.cantidadesDis" class="form-control" />
                            </td>
                            <td>
                                <!---<b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarIntervalo( uconsumo.intervalo, uconsumo, pos)">-->
                                <b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarMateriales( distribucion )">
                                    <feather-icon icon="CheckIcon"/>
                                </b-button>
                            </td>
                        </tr>
                        <tr v-for="(uintervalo,indice) in distribucion.materiales">
                            <td>{{ indice+1 }}</td>
                            <td>{{ uintervalo.descripcionDis }}</td>
                            <td>{{ uintervalo.cantidadesDis }}</td>
                            <td>
                                <!--<b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarIntervalo( pos, indice )">-->
                                <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarMateriales( indice )">
                                    <feather-icon icon="TrashIcon"/>
                                </b-button>
                            </td>
                        </tr>
                    </table>
                </b-col>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalM = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="GuardarMateriales" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </div>
</template>
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

            //Modal materiales 
            headerBgVariantM: 'dark',
            headerTextVariantM: 'success',
            headerTitleVariantM: 'AGREGAR MATERIAL',
            bodyBgVariantM: 'light',
            bodyTextVariantM: 'success',
            footerBgVariantM: 'dark',
            footerTextVariantM: 'dark',
            showModalM: false,

            /**************************** entorno ****************************/
            yentidad: {},
            yarea: {},
            zentidades: [],
            zareas: [],
            zcuentas: [],
            arr_plantillas:[],
            grupo_implemento:[],
            resultado:[],
            faqSearchQuery: '',
            SearchHomologacion: '',

            /**************************** formulario ****************************/
            plantilla: { 
                idPlantilla: 0, 
                nombrePla: "", 
                Area_idArea: 0, 
                Cuenta_idDato: 0, 
                Entidad_idDato: 0,
            },
            validarPor: [
                { value:'NINGUNO' , text:'NINGUNO'},
                { value:'KILOMETRAJE' , text:'KILOMETRAJE'},
                { value:'FECHA' , text:'FECHA'},
                { value:'CHECK' , text:'CHECK'},
                { value:'HOROMETRAJE' , text:'HOROMETRAJE'},
            ],

            seleccionados: [],
            editar_distribucion: [],
            obj_distribucion: {
                Plantilla_idPlantilla: 0, 
                Implemento_idImplemento: 0, 
                validacionDis: "", 
                alertaDis: "",
            },
            clicked: false,
            titulos:[],
            registros:[],
            grupo_homologacion:[],
            materiales:[],
            distribucion: {
                idDistribucion: 0, 
                nombreImp: "",
                Implemento_idImplemento: 0, 
                Plantilla_idPlantilla: 0,
                materialesDis:"",
                cantidadesDis:"",
                materiales:[],
            },

            narea: "" ,
            idArea: 0,
            nentidad: "",
            idEntidad: 0, 

            mostrar: true,
        }
    }, 
    watch: {
    faqSearchQuery: {
      immediate: true,
      handler() {
        this.fetchData()
      },
    },

    SearchHomologacion: {
        immediate: true, 
        handler() { 
            this.fetchHomologacion()
        }
    }
  },
    methods: {
        fetchData() {
            const { q = '' } = { q: this.faqSearchQuery };
            const queryLowered = q.toLowerCase();

            const filteredData = {}

            Object.entries(this.grupo_implemento).forEach(entry => {
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
        fetchHomologacion() {
            const { q = '' } = { q: this.SearchHomologacion };
            const queryLowered = q.toLowerCase();

            const filteredData = {}

            Object.entries(this.grupo_homologacion).forEach(entry => {
                const [categoryName, categoryObj] = entry
                // eslint-disable-next-line arrow-body-style
                const filteredQAndAOfCategory = categoryObj.ent.filter(qAndAObj => {
                    return qAndAObj.nom.toLowerCase().includes(queryLowered)
                })
                if (filteredQAndAOfCategory.length)
                {
                    filteredData[categoryName] = { ...categoryObj, ent: filteredQAndAOfCategory }
                }
            })
            this.registros = filteredData;
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
            
            this.narea = this.yarea.nombreAre;
            this.idArea = this.yarea.idArea;
            this.nentidad = this.yentidad.valorDat;
            this.idEntidad = this.yentidad.idDato;

            this.$http.get('/LiberAPP/Plantilla/Listar/'+this.idEntidad+'/'+this.idArea).then(res => {
            //this.$http.get('/LiberAPP/Plantilla/Listar/286/3').then(res => {
               this.arr_plantillas = res.data;
               this.resultado = [];
               this.grupo_implemento = [];
               this.seleccionados = [];
               this.plantilla.idPlantilla = 0; 
               this.nombrePla = ""; 
               this.Area_idArea = 0; 
               this.Cuenta_idDato = 0; 
               this.Entidad_idDato = 0;
            }).catch(error => {
                this.Toast(true,'danger','Plantilla','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        ListarImplementos( prm_plantilla )
        {
            this.showLoading = true;
            this.clicked = true;
            prm_plantilla.clicked = true;
            for ( var i = 0; i < this.arr_plantillas.length; i++ )
            {
                if ( this.arr_plantillas[i].idPlantilla !== prm_plantilla.idPlantilla) 
                {
                    this.arr_plantillas[i].clicked = false;
                }
            }

            this.plantilla.idPlantilla = prm_plantilla.idPlantilla
            this.plantilla.nombrePla = prm_plantilla.nombrePla

            this.$http.get('/LiberAPP/Plantilla/Listar/Implemento/'+this.yentidad.idDato+'/'+this.yarea.idArea+'/'+this.plantilla.idPlantilla).then( res => {
                this.grupo_implemento = res.data
                this.resultado = res.data;
                this.seleccionados = [];
                this.showLoading = false;
            }).catch( error => { 
                this.Toast(true,'danger','Plantilla','Error al cargar los registros: '+error);
            })

            //Listar Entidades 
            this.$http.get('/LiberAPP/Homologacion/Listar/'+ this.yentidad.idDato+'/'+this.yarea.idArea+'/'+prm_plantilla.idPlantilla).then(res => {
                this.grupo_homologacion = res.data.registros;
                this.registros = res.data.registros;
            }).catch(error => {
                this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        },
        Seleccion( prm_implemento, prm_idPlantilla )
        {
            for (var i = 0; i < this.seleccionados.length; i++)
            {
                if(this.seleccionados[i].idImplemento == prm_implemento.idImplemento)
                {
                    this.seleccionados.splice(i,1);
                    break;
                }
            }

            if ( prm_implemento.sel == false )
            {
                var jsonDistribucion = JSON.stringify( prm_implemento.idDistribucion )
                this.$http.post('/LiberAPP/Distribucion/Desactivar', 
                {
                    idDistribucion: jsonDistribucion
                }).then( res => {
                    this.Toast(true,'success','Eliminar Implemento','Eliminado Correctamente');
                    this.ListarImplementos( prm_idPlantilla);
                    //ListarImplementoMateriales();
                }).catch( error => { 
                    this.Toast(true,'danger','Eliminar Implemento','Error al eliminar registro: '+error);
                })
            }

            if ( prm_implemento.sel == true ) 
            {
                prm_implemento.idPlantilla = prm_idPlantilla.idPlantilla
                var jsonDistribucion = JSON.stringify( prm_implemento)
                //var jsonDistribucion = JSON.stringify( this.seleccionados )
                
                this.$http.post('/LiberAPP/Distribucion/Guardar', 
                {
                    distribucion: jsonDistribucion
                }).then( res => {
                    /*this.Toast(true,'success','Agregar Implemento Agregado','Guardado Correctamente');
                    this.ListarImplementos(prm_idPlantilla);*/
                    //ListarImplementoMateriales();
                }).catch( error => { 
                    this.Toast(true,'danger','Agregar Implemento','Error al guardar el registro: '+error);
                })
            }
        
            if(prm_implemento.sel)
            {
                prm_implemento.idPlantilla = prm_idPlantilla.idPlantilla
                this.seleccionados.push(prm_implemento);
            }
        },

        SeleccionHomologacion( prm_implemento, prm_plantilla )
        {
            if ( prm_implemento.sel == true ) 
            {
                var uhomologacion = {
                    Entidad_idEntidad: prm_implemento.id,
                    Plantilla_idPlantilla: prm_plantilla.idPlantilla
                }
                var jsonHomologacion = JSON.stringify( uhomologacion )

                this.$http.post('/LiberAPP/Homologacion/Guardar', 
                {
                    homologacion: jsonHomologacion
                }).then( res => {
                    /*this.Toast(true,'success','Agregar Homologacion','Guardado Correctamente');
                    this.ListarHomologacion( prm_plantilla );*/
                }).catch( error => { 
                    this.Toast(true,'danger','Agregar Homologacion','Error al guardar el registro: '+error);
                })
            }

            if ( prm_implemento.sel == false ) 
            {
                var jsonHomologacion = JSON.stringify( prm_implemento.idHomologacion )
                this.$http.post('/LiberAPP/Homologacion/Desactivar', 
                {
                    idHomologacion: jsonHomologacion
                }).then( res => {
                    this.Toast(true,'success','Eliminar Homologacion','Eliminado Correctamente');
                    this.ListarHomologacion( prm_plantilla );
                }).catch( error => { 
                    this.Toast(true,'danger','Eliminar Homologacion','Error al eliminar registro: '+error);
                })
            }
        },
        
        Nuevo( prm_entidad, prm_area )
        {
            this.plantilla.Entidad_idDato = prm_entidad.idDato;
            this.plantilla.Area_idArea = prm_area.idArea;
            this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVA PLANTILLA";
        },
        Editar( prm_implemento )
        {
            for (var i = 0; i < this.editar_distribucion.length; i++)
            {
                if(this.editar_distribucion[i].Implemento_idImplemento == prm_implemento.Implemento_idImplemento)
                {
                    this.editar_distribucion.splice(i,1);
                    break;
                }
            }

            if(prm_implemento)
            {
                this.editar_distribucion.push(prm_implemento)
            }
        },
        EditarMaterial( prm_implemento )
        {
            this.distribucion.idDistribucion = prm_implemento.idDistribucion; 
            this.distribucion.nombreImp = prm_implemento.nombreImp;
            this.distribucion.Implemento_idImplemento = prm_implemento.Implemento_idImplemento; 
            this.distribucion.Plantilla_idPlantilla = prm_implemento.Plantilla_idPlantilla;

            if ( prm_implemento.materialesDis !== null )
            {
                let materiales = prm_implemento.materialesDis.split("-");
                let cantidades = prm_implemento.cantidadesDis.split("-");
                
                for ( var j = 0; j < materiales.length; j++) 
                {
                    var zmateriales = this.materiales.filter( function ( material ) { return material.idMaterial == materiales[j] });
                    var zmaterial = ( zmateriales.length > 0) ? zmateriales[0] : null;
                    var umateriales = { 
                        "materialesDis": zmaterial.idMaterial,
                        "descripcionDis": zmaterial.nombreMat,
                        "cantidadesDis": cantidades[j]
                    };
                    this.distribucion.materiales.push(umateriales);
                }
            } else {
                this.distribucion.materiales = [];
            } 

        },
        AgregarMateriales( prm_distribucion )
        {
            if ( prm_distribucion.materialesDis.idMaterial == null || prm_distribucion.materialesDis.idMaterial == "") 
            {
                this.Toast(true,'danger','Material','Ingrese un Material');
                return;
            }

            if ( prm_distribucion.cantidadesDis == null || prm_distribucion.cantidadesDis == "") 
            {
                this.Toast(true,'danger','Cantidad','Ingrese una Cantidad');
                return;
            }

            var umaterial = {
                materialesDis: prm_distribucion.materialesDis.idMaterial, 
                descripcionDis: prm_distribucion.materialesDis.nombreMat,
                cantidadesDis: prm_distribucion.cantidadesDis
            }; 

            this.distribucion.materiales.push(umaterial);
            this.distribucion.materialesDis = "", 
            this.distribucion.cantidadesDis = "";
            //console.log("distribucion:: ", this.distribucion )
        },
        EliminarMateriales( prm_indice )
        {
            this.distribucion.materiales.splice( prm_indice, 1)
        },
        GuardarMateriales()
        {
            this.showLoading = true
            var jsonMateriales = JSON.stringify( this.distribucion )
            this.$http.post('/LiberAPP/Distribucion/ActualizarMaterial', 
            {
                materiales: jsonMateriales,
            }).then(res => {
                this.Toast(true,'primary','Actualizar Materiales','Actualizado Correctamente');
                this.showModalM = false; 
                this.showLoading = false;
                this.distribucion.materiales = [];
                this.ListarImplementoMateriales();
            }).catch(error => {
                this.Toast(true,'danger','Actualizar Materiales','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        },
        GuardarPlantilla()
        {
            this.showLoading = true
            var jsonPlantilla = JSON.stringify( this.plantilla )
            this.$http.post('/LiberAPP/Plantilla/Guardar',
            {
                plantilla: jsonPlantilla
            }).then( res => {
                this.Toast(true,'success','Agregar Plantilla','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Listar()
            }).catch( error => { 
                this.Toast(true,'danger','Agregar Plantilla','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        ActualizarDistribucion()
        {
            var jsonDistribucion = JSON.stringify( this.editar_distribucion )
            this.$http.post('/LiberAPP/Distribucion/Actualizar',
            {
                distribucion: jsonDistribucion
            }).then( res => {
                this.Toast(true,'success','Actualizar Distribucion','Actualizado Correctamente');
            }).catch( error => { 
                this.Toast(true,'danger','Actualizar Distribucion','Error al Actualizar registro: '+error);
            })
        },
        ListarHomologacion( prm_plantilla )
        {
            this.$http.get('/LiberAPP/Homologacion/Listar/'+ this.yentidad.idDato+'/'+this.yarea.idArea+'/'+prm_plantilla.idPlantilla).then(res => {
                this.grupo_homologacion = res.data.registros;
                this.registros = res.data.registros;
            }).catch(error => {
                this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        ListarImplementoMateriales()
        {
            this.$http.get('/LiberAPP/Plantilla/Listar/Implemento/'+this.yentidad.idDato+'/'+this.yarea.idArea+'/'+this.plantilla.idPlantilla).then( res => {
                this.grupo_implemento = res.data
                this.resultado = res.data;
                this.seleccionados = [];
            }).catch( error => { 
                this.Toast(true,'danger','Plantilla','Error al cargar los registros: '+error);
            })
        }
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
        this.yentidad =  {
            idDato: this.vista_entidad, 
            valorDat: this.vista_nentidad,
        }; 
        this.yarea = { 
          idArea: this.vista_area,
          nombreAre: this.vista_narea,
        };

        this.narea = this.yarea.nombreAre;
        this.idArea = this.yarea.idArea;
        this.nentidad = this.yentidad.valorDat;
        this.idEntidad = this.yentidad.idDato;

        if(this.vista_implemento == "GENERICO")//Si es Generico se Listan las Entidades y las Areas para Seleccionar
        {
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
        }
        else
        {
            this.showLoading = true;

            this.$http.get('/LiberAPP/Plantilla/Listar/'+this.idEntidad+'/'+this.idArea).then(res => {
               this.arr_plantillas = res.data;
               this.resultado = [];
               this.grupo_implemento = [];
               this.seleccionados = [];
               this.plantilla.idPlantilla = 0; 
               this.nombrePla = ""; 
               this.Area_idArea = 0; 
               this.Cuenta_idDato = 0; 
               this.Entidad_idDato = 0;

               this.showLoading = false;
            }).catch(error => {
                this.Toast(true,'danger','Plantilla','Error al cargar los registros: '+error);
                this.showLoading = false;
            });            
        }

        this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res=> {
            this.zcuentas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Material/Listar').then(res=> {
            this.materiales = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Materiales','Error al cargar los registros: ' + error);
        })

    }
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
    }
    .tab-pane
    {
        padding: 10pt;
        border:  1px solid rgb(123,123,123);
        background-color: rgba(40,199,111,0.1);
        border-radius: 5pt;
    }
</style>