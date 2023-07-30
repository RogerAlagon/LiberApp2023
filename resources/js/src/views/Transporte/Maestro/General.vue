<template><div>
	<b-card>
      <b-tabs content-class="pt-1" fill>
        <b-tab active title="Tipo" @click="Cambiar('tvehiculo')">
           <template #title>
                <feather-icon icon="CodesandboxIcon" />
                <span>Tipo de Vehículo</span>
            </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">TIPOS DE VEHÍCULO</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" >
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nuevo Tipo de Vehículo</span>             
              </b-button>
            </template>
        </b-tab>

        <!------------------------ TAB MARCA ------------------------>
        <b-tab title="Marca" @click="Cambiar('marca')">
          <template #title>
            <feather-icon icon="SlackIcon" />
              <span>Marca</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">MARCAS</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nueva Marca</span>
              </b-button>
            </template>
        </b-tab>

        <!------------------------------ TAB MODELOS -------------------->
        <b-tab title="Modelo" @click="Cambiar('modelo')">
          <template #title >
            <feather-icon icon="CodepenIcon" />
              <span>Modelo</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">MODELOS</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nuevo Modelo</span>
              </b-button>
            </template>
        </b-tab>

      <!------------------------------ TAB CARGA -------------------->
        <b-tab title="Carga" @click="Cambiar('carga')">
          <template #title>
            <feather-icon icon="TruckIcon" />
              <span>Tipo de Carga</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">TIPOS DE CARGA</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nuevo Tipo de Carga</span>
              </b-button>
            </template>
        </b-tab>


        <!------------------------------ TAB UNIDAD -------------------->
        <b-tab title="Unidad" @click="Cambiar('unidad')">
          <template #title>
            <feather-icon icon="UnderlineIcon" />
              <span>Unidad</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">UNIDADES DE MEDIDA</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nueva Unidad de Medida</span>
              </b-button>
            </template>
        </b-tab>


        <!------------------------------ TAB UBICACIONES -------------------->
        <b-tab title="Ubicacion" @click="Cambiar('ubicacion')">
          <template #title>
            <feather-icon icon="MapPinIcon" />
              <span>Ubicacion</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">UBICACIONES</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nueva Ubicación</span>
              </b-button>
            </template>
        </b-tab>

        <!------------------------------ TAB DIRECCIONES -------------------->
        <b-tab title="Direccion" @click="Cambiar('direccion')">
          <template #title >
            <feather-icon icon="TargetIcon" />
              <span>Direcciones</span>
          </template>
            <b-card-text class="text-center">
              <h3 class="text-primary">DIRECCIONES</h3>
            </b-card-text>
            <template>
              <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">Nueva Direccion</span>
              </b-button>
            </template>
        </b-tab>
      </b-tabs>

      <template>
        <div>
          <br>       
            <!---------------------------------- búsqueda -------------------------------->
            <div class="custom-search d-flex justify-content-end">
                <b-form-group>
                  <div class="d-flex align-items-end">
                    <label class="mr-1">Buscar:</label>
                    <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                  </div>
                </b-form-group>
              </div>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
               :columns="tcolumnas" :rows="tabla" :rtl="direction"
               :search-options="{ enabled: true, externalQuery: searchTerm }"
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
             <!-- <b-row>
                <b-col md="12" xl="6">
                  <b-form-group label="Tipo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <v-select label="tipoDat" v-model="general.tipoDat" :reduce="tipo => tipo.tipoDat" :options="arquetipos" style="flex: 1;"/>
                            </b-input-group>
                        </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                  <b-form-group label="Grupo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <v-select label="grupoDat" v-model="general.grupoDat" :reduce="grupo => grupo.grupoDat" :options="grupos" style="flex: 1;"/>
                            </b-input-group>
                        </b-form-group>
                </b-col>
              </b-row>-->
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
          
        </div><!--Container-->
      </template>

 	</b-card>
</div></template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BCard
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButtonToolbar, BToast, BCardCode, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, VueGoodTable, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BFormCheckbox, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText,BCard,
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
            tipos: [],
            marcas: [],
            grupos: [],
            cargas: [],
            unidades: [],
            ubicaciones: [],
            direcciones: [],
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
              tipoDat: "",
              grupoDat: "",
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
            switch (prm_valor)
            {
                case "tvehiculo":
                  this.tabla = this.tipos;
                  this.titulo = "Tipos de Vehículo";
                  this.datos = {tipoDat:'TIPO',grupoDat:'VEHICULO'};
                  this.opcion=1;
                  break;
                case "marca":
                  this.tabla = this.marcas;
                  this.titulo = "Marcas";
                  this.datos = {tipoDat:'MARCA',grupoDat:'VEHICULO'};
                  this.opcion=2;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
                  break;
                case "modelo":
                  this.tabla = this.modelos;
                  this.titulo = "Modelos";
                  this.datos = {tipoDat:'MODELO',grupoDat:'VEHICULO'};
                  this.opcion=3;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
                  break;
                case "carga":
                  this.tabla = this.cargas;
                  this.titulo = "Tipos de Carga";
                  this.datos = {tipoDat:'CARGA',grupoDat:'TRANSPORTE'};
                  this.opcion=4;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
                  break;
                case "unidad":
                  this.tabla = this.unidades;
                  this.titulo = "Unidades de Medida";
                  this.datos = {tipoDat:'UNIDAD',grupoDat:'TRANSPORTE'};
                  this.opcion=5;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
                  break;
                case "ubicacion":
                  this.tabla = this.ubicaciones;
                  this.titulo = "Ubicaciones";
                  this.datos = {tipoDat:'UBICACION',grupoDat:'TRANSPORTE'};
                  this.opcion=6;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
                  break;
                case "direccion":
                  this.tabla = this.direcciones;
                  this.titulo = "Direcciones";
                  this.datos = {tipoDat:'DIRECCION',grupoDat:'TRANSPORTE'};
                  this.opcion=7;
                  //this.tcolumnas[2] = { label: 'Marca', field: 'valorDat'};
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
                switch(this.opcion){
                  case 1: this.Tipos();
                          break;
                  case 2: this.Marcas();
                          break;
                  case 3: this.Modelos();
                          break;
                  case 4: this.Cargas();
                          break;
                  case 5: this.Unidades();
                          break;
                  case 6: this.Ubicaciones();
                          break;
                  case 7: this.Direcciones();
                          break; 
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Tipo','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
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
                this.Toast(true,'primary','Actualizar Tipo','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                switch(this.opcion){
                  case 1: this.Tipos();
                          break;
                  case 2: this.Marcas();
                          break;
                  case 3: this.Modelos();
                          break;
                  case 4: this.Cargas();
                          break;
                  case 5: this.Unidades();
                          break;
                  case 6: this.Ubicaciones();
                          break;
                  case 7: this.Direcciones();
                          break; 
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Tipo','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Tipos()
        {   this.$http.get('/LiberAPP/Dato/Select/TIPO/VEHICULO')
            .then(res => {
               this.tipos = res.data;
               this.tabla = this.tipos;
            })
            .catch(error => {
                this.Toast(true,'danger','Tipo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Marcas()
        {
            this.$http.get('/LiberAPP/Dato/Select/MARCA/VEHICULO')
            .then(res => {
               this.marcas = res.data;
               this.tabla = this.marcas;
            })
            .catch(error => {
                this.Toast(true,'danger','Marca','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Modelos()
        {
            this.$http.get('/LiberAPP/Dato/Select/MODELO/VEHICULO')
            .then(res => {
               this.modelos = res.data;
               this.tabla = this.modelos;
            })
            .catch(error => {
                this.Toast(true,'danger','Modelo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Cargas()
        {
            this.$http.get('/LiberAPP/Dato/Select/CARGA/TRANSPORTE')
            .then(res => {
               this.cargas = res.data;
               this.tabla = this.cargas;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Unidades()
        {
            this.$http.get('/LiberAPP/Dato/Select/UNIDAD/TRANSPORTE')
            .then(res => {
               this.unidades = res.data;
               this.tabla = this.unidades;
            })
            .catch(error => {
                this.Toast(true,'danger','Unidad','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Ubicaciones()
        {
            this.$http.get('/LiberAPP/Dato/Select/UBICACION/TRANSPORTE')
            .then(res => {
               this.ubicaciones = res.data;
               this.tabla = this.ubicaciones;
            })
            .catch(error => {
                this.Toast(true,'danger','Ubicacion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Direcciones()
        {
            this.$http.get('/LiberAPP/Dato/Select/DIRECCION/TRANSPORTE')
            .then(res => {
               this.direcciones = res.data;
               this.tabla = this.direcciones;
            })
            .catch(error => {
                this.Toast(true,'danger','Direccion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
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
        },
    },
    created() {
          this.$http.get('/LiberAPP/Dato/Select/TIPO/VEHICULO')
            .then(res => {
                this.tipos = res.data;

                /******/
                this.tabla = this.tipos;
                this.titulo = "Tipos de Vehículo";
                this.datos = {tipoDat:'TIPO',grupoDat:'VEHICULO'};
                this.opcion=1;
                /******/
            })
            .catch(error => {
                this.Toast(true,'danger','Tipo','Error al cargar los registros: '+error);
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
          this.$http.get('/LiberAPP/Dato/Select/CARGA/TRANSPORTE')
            .then(res => {
                this.cargas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
          this.$http.get('/LiberAPP/Dato/Select/UNIDAD/TRANSPORTE')
            .then(res => {
                this.unidades = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Unidad','Error al cargar los registros: '+error);
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
          this.$http.get('/LiberAPP/Dato/Select/DIRECCION/TRANSPORTE')
            .then(res => {
                this.direcciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Direccion','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
    },
    mounted() {
       this.Tipos();

    },
    Tipos()
        {
            this.$http.get('/LiberAPP/Dato/Select/TIPO/TRANSPORTE')
            .then(res => {
               this.tipos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Tipo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>

