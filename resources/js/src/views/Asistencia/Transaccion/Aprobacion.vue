<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Procesar">
                            <feather-icon icon="ArrowDownIcon" class="mr-50"/>
                            <span class="align-middle">Procesar Papeletas</span>
                        </b-button>
                  </div>
                </b-col>
            </b-row>
            <br>
                <!---------------------------------- tabla -------------------------------->
            <vue-good-table
            :columns="columns" :rows="papeletas" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, 
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, 
              }"
              :pagination-options="{enabled: true, perPage:pageLength }" >
              <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'jefeareaPer'">
                            <b-button v-if="props.row.jefeareaPer==null" variant="secondary" size="sm" @click="props.row.jefeareaPer='true';CambiarEstado(props.row.idPermiso,props.row.jefeareaPer,'jefe')">SIN ACCION
                            </b-button>
                            <b-button v-if="props.row.jefeareaPer=='0' || props.row.jefeareaPer=='true'" variant="success" size="sm" @click="props.row.jefeareaPer='false';CambiarEstado(props.row.idPermiso,props.row.jefeareaPer,'jefe')">APROBADO
                            </b-button>
                            <b-button v-if="props.row.jefeareaPer=='1' || props.row.jefeareaPer=='false'" variant="danger" size="sm" @click="props.row.jefeareaPer='true';CambiarEstado(props.row.idPermiso,props.row.jefeareaPer,'jefe')">ANULADO
                            </b-button>      
                        </span> 
                        <span v-else-if="props.column.field === 'recursoPer'">
                            <b-button v-if="props.row.recursoPer==null" variant="secondary" size="sm" @click="props.row.recursoPer='true';CambiarEstado(props.row.idPermiso,props.row.recursoPer,'recurso')">SIN ACCION
                            </b-button>
                            <b-button v-if="props.row.recursoPer=='0' || props.row.recursoPer=='true'" variant="success" size="sm" @click="props.row.recursoPer='false';CambiarEstado(props.row.idPermiso,props.row.recursoPer,'recurso')">APROBADO
                            </b-button> 
                            <b-button v-if="props.row.recursoPer=='1' || props.row.recursoPer=='false'" variant="danger" size="sm" @click="props.row.recursoPer='true';CambiarEstado(props.row.idPermiso,props.row.recursoPer,'recurso')">ANULADO
                            </b-button>
                        </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
                </template>
              <!---------------------------------- paginación -------------------------------->
                <!--<template slot="pagination-bottom" slot-scope="props">
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
                </template>-->
            </vue-good-table>
        </b-card>
    </div>
</template>
<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
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
        flatPickr
  },
  directives: {
    Ripple,
  },
  data() {
      return {
          recursoPer: false,
          jefeareaPer: false,
           /**************************** elementos de ux ****************************/
            dir: false,
            pageLength: 10,
            searchTerm: '',
            tabIndex: 1,
            userData: JSON.parse(localStorage.getItem('userData')), //Datos del usuario Local

            /**************************** tabla ****************************/
            columns: [
                { label:'', field:'acciones', hidden:true,},
                { label:'ID', field:'idPermiso' },
                { label:'Jefe Area', field:'jefeareaPer'},
                { label:'Trabajador', field:'trabajadorPer' }, 
                { label:'Estado', field:'estadoPer' }, 
                { label:'Fecha', field:'fechaPer'},
                { label:'Fecha Inicio', field:'finicioPer'},
                { label:'Fecha Fin', field:'ffinPer'},
                { label:'Hora Inicio', field:'hinicioPer'},
                { label:'Hora Fin', field:'hfinPer'},
                { label:'Hora Permiso', field:'hdiferenciaPer'},
                { label:'Destino', field:'destinoPer'},
                { label:'Motivo', field:'motivo'},
                { label:'Observación', field:'observacionPer'},
            ],

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO ABASTECIMIENTO',
            headerTitleVariantD: 'DESCRIPCION ABASTECIMIENTO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/      
            papeletas:[],
            aprobacion:[],
            usuarioIn:'',
            papeleta: {
                trabajadorPer: "", 
                idPermiso: "", 
                fechaPer: "", 
                estadoPer: "", 
                finicioPer: "", 
                ffinPer: "", 
                destinoPer: "", 
                hinicioPer: "", 
                hfinPer: "", 
                motivoPer: "", 
                hdiferenciaPer: "", 
                observacionPer: "", 
                jefeareaPer: "", 
                recursoPer: "", 
            }
      }
  }, 
  methods: {
      Toast(prm_append = false, variant = null, prm_titulo = "", prm_mensaje = "")
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
      CambiarEstado( prm_id, prm_estado, responsable )
      {
        if ( responsable == 'jefe' && this.userData.id != '731' && this.userData.id != '744')
        {
            var uestado= { idPermiso: prm_id, jefeareaPer: prm_estado };
            this.aprobacion.push(uestado);
        }
        if ( responsable == 'recurso' && this.userData.id =='744')
        {
            var uestado = { idPermiso: prm_id, recursoPer: prm_estado };
            this.aprobacion.push( uestado )
        } 
        if ( responsable == 'recurso' && this.userData.id =='731')
        {
            var uestado = { idPermiso: prm_id, recursoPer: prm_estado };
            this.aprobacion.push( uestado )
        }
      },
      Procesar()
      {
        this.showLoading = true; 
        var jsonJefearea = JSON.stringify(this.aprobacion); 
        console.log( 'aprobación:: ', jsonJefearea );
          
        this.$http.post('/LiberAPP/Persona/Papeleta/Jefe/Procesar',
        {
            aprobacionP: jsonJefearea,
        })
        .then(res => {
          this.Toast(true,'primary','Procesar Aprobación','Procesado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.Papeletas()
        })
        .catch(error => {
          this.Toast(true,'danger','Procesar Aprobación','Error al actualizar la solicitud: '+error);
          this.showLoading = false;
        });

      },
      Editar(prm_detalle)
      {
        this.headerTextVariant = 'primary'; 
        this.headerTitleVariant = 'EDITAR PAPELETA' 
        this.boton = true; 
        this.papeleta = prm_detalle; 
        //console.log( 'this.papeleta:: ', this.papeleta )
        console.log( 'papeletas2:: ', this.aprobacion );
      },
      Actualizar() 
      {
          this.showLoading = true; 
          var jsonPapeleta = JSON.stringify(this.papeleta); 
          console.log( 'update papeleta:: ', jsonPapeleta);
      }, 
      Papeletas()
      {
        this.$http.get('/LiberAPP/Persona/Papeleta/' + this.userData.id + '/aprobacion').then(res => {
          this.papeletas = res.data;
        }).catch(error => {
          this.Toast(true,'danger','Cargando Papeletas','Error al cargar los registros: ' +error);
          this.showLoading = false;
        })
      }
  },
  computed: {
        direction() {

            if (store.state.appConfig.isRTL) {
                this.dir = true
                return this.dir
            }
            this.dir = false
            return this.dir
        },
    }, 
  created() {
      this.$http.get('/LiberAPP/Persona/Papeleta/' + this.userData.id +'/aprobacion').then(res => {
          this.papeletas = res.data;
      }).catch(error => {
          this.Toast(true,'danger','Cargando Papeletas','Error al cargar los registros: ' +error);
          this.showLoading = false;
      })
  },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>