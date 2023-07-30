<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Tipo Entidad:">
                    <v-select label="valorDat" :options="zentidades" v-model="entidad" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Area:">
                    <v-select label="nombreAre" :options="zareas" v-model="area" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="6" class="text-center">
                <div class="demo-inline-spacing">
                    <b-button variant="primary" @click="Cargar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                    <b-button variant="warning" :href="'/LiberAPP/Asignacion/ExportarVencimiento/'+ this.idEntidad+'/'+this.idArea" target="_blank">
                        <feather-icon icon="FileTextIcon" class="mr-50"/>
                        <span class="align-middle">Exportar</span>
                    </b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>
    <b-card>
            <b-row>
                <b-col md="12" xl="12">
                    <h3>PLANTILLAS {{narea}}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <div class="demo-inline-spacing" >
                        <b-button variant="outline-secondary" @click="Listar(uplantilla.idPlantilla,uplantilla.nombrePla); clicked = uplantilla.idPlantilla" :disabled="showLoading" size="sm" v-for="(uplantilla, indice) in plantillas" :key="indice" pill v-bind:class="{ 'btn-outline-info': (clicked == uplantilla.idPlantilla) }">
                            <feather-icon icon="ArrowRightIcon" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">{{uplantilla.nombrePla}}</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    <b-card>
        <b-row>
            <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered table-hover">
                    <tr>
                        <th>TOTAL</th>
                        <th>VIGENTE</th>
                        <th>FALTANTE</th>
                        <th>POR VENCER</th>
                        <th>VENCIDO</th>
                    </tr>
                    <tr>
                        <td>{{totales.total}}</td>
                        <td>{{totales.vigente}}</td>
                        <td>{{totales.faltante}}</td>
                        <td>{{totales.xvencer}}</td>
                        <td>{{totales.vencido}}</td>
                    </tr>
                    <tr>
                        <td>{{totales.ptotal}}</td>
                        <td>{{totales.pvigente}}%</td>
                        <td>{{totales.pfaltante}}%</td>
                        <td>{{totales.pxvencer}}%</td>
                        <td>{{totales.pvencido}}%</td>
                    </tr>
                </table>
                <br><br>
            </b-col>
            <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered table-hover">
                    <template v-for="(ugrupo, indice) in grupos">
                        <tr><th colspan="11" class="titulo">{{ugrupo.gru}}</th></tr>
                        <tr>
                            <th>IMPLEMENTO</th>
                            <th>TOTAL</th>
                            <th>REG.</th>
                            <th>FALTANTE</th>
                            <th>PERMANENTE</th>
                            <th>VIGENTE</th>
                            <th>POR VENCER</th>
                            <th>VENCIDO</th>
                            <th>APLAZADO</th>
                            <th>TRAMITADO</th>
                            <th>URGENTE</th>
                            <!--<th>APROBADO</th>
                            <th>PAGADO</th>
                            <th>FACTURADO</th>-->
                        </tr>
                        <tr v-for="(uimplemento, indice2) in ugrupo.imp">
                            <td class="subsubtitulo">{{uimplemento.nombreImp}}</td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.asi,'tot')" size="sm" variant="outline-dark" v-if="uimplemento.tot > 0">{{uimplemento.tot}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aenc,'enc')" size="sm" variant="outline-info" v-if="uimplemento.enc > 0">{{uimplemento.enc}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.afal,'fal')" size="sm" variant="outline-danger" v-if="uimplemento.fal > 0">{{uimplemento.fal}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aper,'per')" size="sm" variant="outline-info" v-if="uimplemento.per > 0">{{uimplemento.per}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.avig,'vig')" size="sm" variant="outline-success" v-if="uimplemento.vig > 0">{{uimplemento.vig}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aale,'ale')" size="sm" variant="outline-warning" v-if="uimplemento.ale > 0">{{uimplemento.ale}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aven,'ven')" size="sm" variant="outline-danger" v-if="uimplemento.ven > 0">{{uimplemento.ven}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aapl,'apl')" size="sm" variant="outline-info" v-if="uimplemento.apl > 0">{{uimplemento.apl}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.atra,'tra')" size="sm" variant="outline-primary" v-if="uimplemento.tra > 0">{{uimplemento.tra}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aurg,'urg')" size="sm" variant="outline-danger" v-if="uimplemento.urg > 0">{{uimplemento.urg}}</b-button>
                            </td>
                            <!--
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.aapr,'apr')" size="sm" variant="outline-primary" v-if="uimplemento.apr > 0">{{uimplemento.apr}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.apag,'pag')" size="sm" variant="outline-primary" v-if="uimplemento.pag > 0">{{uimplemento.pag}}</b-button>
                            </td>
                            <td>
                                <b-button v-b-modal.modal-formulario @click="Mostrar(uimplemento.afac,'fac')" size="sm" variant="outline-primary" v-if="uimplemento.fac > 0">{{uimplemento.fac}}</b-button>
                            </td>-->
                        </tr>
                    </template>
                </table>

                <!---------------------------------- modal -------------------------------->
                <b-modal
                  id="modal-formulario" v-model="showModal"
                  :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
                  :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
                  centered no-close-on-backdrop
                  title-tag="div"
                  size="lg"
                  cancel-title="Cancelar" ok-title="Guardar"
                  cancel-variant="secondary" ok-variant="success"
                >
                    <!---------------------------------- formulario -------------------------------->
                    <table class="table table-condensed table-bordered">
                        <tr>
                            <th>NRO</th>
                            <th>ENTIDAD</th>
                            <th>VENCIMIENTO</th>
                            <th>VIGENCIA</th>
                        </tr>
                        <tr v-for="(ulista, indice3,posicion) in lista">
                            <td v-if="posicon == '' || posicion == null">{{indice3+1}}</td>
                            <td v-else>{{posicion+1}}</td>
                            <td>{{ulista.ent}}</td>
                            <td>{{ulista.ven}}</td>
                            <td v-if="ulista.ret">
                                <b-badge variant="light-dark" v-if="condicion == 'tot'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-danger" v-else-if="condicion == 'fal'">{{ulista.fal}} días</b-badge>
                                <b-badge variant="light-success" v-else-if="condicion == 'per'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-success" v-else-if="condicion == 'vig'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-warning" v-else-if="condicion == 'ale'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-danger" v-else-if="condicion == 'ven'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-info" v-else-if="condicion == 'apl'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-primary" v-else-if="condicion == 'tra'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-primary" v-else-if="condicion == 'apr'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-primary" v-else-if="condicion == 'pag'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-primary" v-else-if="condicion == 'fac'">{{ulista.ret}} días</b-badge>
                                <b-badge variant="light-dark" v-else>{{ulista.ret}} días</b-badge>
                            </td>
                            <td v-else></td>

                        </tr>
                    </table>        


                        
                            <b-row>
                                <b-col md="12" xl="12">
                                </b-col>
                            </b-row>
                    <!---------------------------------- modal acciones -------------------------------->
                    <template #modal-footer>
                        <div class="w-100 d-flex justify-content-between">
                            <!--<b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
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
                            </b-button>-->
                        </div>
                    </template>
                    <b-overlay :show="showLoading" no-wrap/>
                </b-modal>
            </b-col>
        </b-row>
    </b-card>
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
            headerTitleVariant: 'RESUMEN',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            lista:[],
            condicion: '',


            zentidades: [],
            zareas: [],
            zimplementos: ['ACTIVO', 'CONSUMIBLE', 'DOCUMENTO', 'ACTIVIDAD', 'CHECK'],

            yentidad: {},
            yarea: {},
            yimplemento: {},

            grupos: [],
            resultado: [],


            rutas: [],
            tvehiculos: [],
            cargas: [],
            ubicaciones: [],
            externos: [],
            tramos: [],
            recorridos: [],
            plantillas: [],
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
            clicked: 0,

            entidad: {},
            area: {},

            narea: "",
            idArea: 0,
            nentidad: "",
            idEntidad: 0,
            plantilla: 0,
            nplantilla: "",
            totales: [],
            /**************************** formulario ****************************/
            
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
        Cargar()
        {
            
            this.showLoading = true;

            this.narea = this.area.nombreAre;
            this.idArea = this.area.idArea;
            this.nentidad = this.entidad.valorDat;
            this.idEntidad = this.entidad.idDato;

            /*this.idEntidad = 287; 
            this.idArea = 4;*/

            this.$http.get('/LiberAPP/Plantilla/ListarSelect/'+ this.idEntidad+'/'+this.idArea).then(res => {
                this.showLoading = false;
                this.plantillas = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },

        Listar(prm_plantilla,prm_nplantilla)
        {
            //this.entidad.idDato = 287; 
            //this.area.idArea = 4;
            this.showLoading = true;

            this.$http.get('/LiberAPP/Asignacion/Vencimiento/'+ this.idEntidad+'/'+this.idArea+'/'+prm_plantilla).then(res => {
            //this.$http.get('/LiberAPP/Asignacion/Vencimiento/'+ this.idEntidad+'/'+this.idArea).then(res => {
            
                this.showLoading = false;
                this.titulos = res.data.titulos; 
                this.registros = res.data.registros;
                this.seleccionados = [];
                this.plantilla = prm_plantilla;
                this.nplantilla = prm_nplantilla;

                this.grupos = res.data.grupos;
                this.resultado = res.data.grupos;
                this.totales = res.data.totales;

            }).catch(error => {
                this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },

        /*Listar(prm_plantilla,prm_nplantilla)
        {
            this.showLoading = true;

            this.narea = this.area.nombreAre;
            this.idArea = this.area.idArea;
            this.nentidad = this.entidad.valorDat;
            this.idEntidad = this.entidad.idDato;

            /*this.idEntidad = 287; 
            this.idArea = 4;*/

            /*this.$http.get('/LiberAPP/Plantilla/ListarSelect/'+ this.idEntidad+'/'+this.idArea).then(res => {
                this.showLoading = false;
                this.plantillas = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },*/

        /*Listar()
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

            var entidad = this.yentidad;
            var area = this.yarea;

            this.$http.get('/LiberAPP/Asignacion/Vencimiento/'+this.entidad.idDato+'/'+this.area.idArea)
            .then(res => {
               this.grupos = res.data;
               this.resultado = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Asignacion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },*/


        Mostrar(prm_lista,prm_condicion)
        {
            this.lista = prm_lista;
            this.condicion = prm_condicion;
        },
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

        this.$http.get('/LiberAPP/Externo/Select')
            .then(res => {
                this.externos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/

        this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL')
            .then(res => {
                this.zentidades = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Area/Select')
            .then(res => {
                this.zareas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
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

    .table
    {
        text-align: center;
    }
    .table th
    {
        color: white;
        background-color: rgb(75,75,75);
    }
    .table tr:hover
    {
        background-color: rgba(215,215,215,0.5);
    }
    .titulo
    {
        font-size: 18pt;
    }
    .subtitulo
    {
        font-size: 15pt;
    }
    .subsubtitulo
    {
        font-size: 10pt;
        font-weight: bold;
    }

</style>