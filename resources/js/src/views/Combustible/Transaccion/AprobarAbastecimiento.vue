<template>
  <div>
    <b-card>
      <!---------------------------------- aprobar solicitud -------------------------------->
      <b-row>
        <b-col md="12" xl="12" class="text-center">
            <h2 class="text-primary">APROBAR SOLICITUDES</h2>
        </b-col>
        <b-col md="6" xl="6" class="text-left">
            <b-button variant="success" @click="Procesar">
                <feather-icon icon="CheckIcon" class="mr-50"/>
                Aprobar Abastecimientos
            </b-button>
        </b-col>
        <b-col md="6" xl="6" class="text-left">
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
      <br>
      <vue-good-table
        :columns="columns" :rows="abastecimientos" :rtl="direction"
        :search-options="{ enabled: true, externalQuery: searchTerm }"
        :select-options="{
            enabled: true,
            selectOnCheckboxOnly: true, 
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, 

          }">
          <!-- styleClass="table condensed table-bordered table-striped"-->

        <template slot="table-row" slot-scope="props">

            <span v-if="props.column.field === 'estadoAba'">
                <b-button v-if="props.row.estadoAba=='SOLICITADO'" variant="secondary" size="sm" @click="props.row.estadoAba='APROBADO';CambiarEstado(props.row.idAbastecimiento,props.row.estadoAba)">SOLICITADO
                </b-button> 
                <b-button v-else-if="props.row.estadoAba=='APROBADO'" variant="success" size="sm" @click="props.row.estadoAba='ANULADO';CambiarEstado(props.row.idAbastecimiento,props.row.estadoAba)">APROBADO
                </b-button>
                <b-button v-else variant="danger" size="sm" @click="props.row.estadoAba='SOLICITADO';CambiarEstado(props.row.idAbastecimiento,props.row.estadoAba)">ANULADO
                </b-button>       
            </span>
            <span v-else-if="props.column.field === 'detalle'">
                        <b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle" @click="Detalle(props.formattedRow)">
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
                    </span>
            
              <!-- Column: Common -->
            <span v-else>
                {{ props.formattedRow[props.column.field] }}
            </span>

        </template>
      </vue-good-table>
    </b-card>
     <!-- Modal Descripcion -->
    <b-modal
      id="modal-descripcion" v-model="showModalD"
      :header-bg-variant="headerBgVariantD" :header-text-variant="headerTextVariantD" :title="headerTitleVariantD"
      :footer-bg-variant="footerBgVariantD" :footer-text-variant="footerTextVariantD"
      centered no-close-on-backdrop
      hide-footer
      title-tag="div"
      cancel-title="Cancelar" ok-title="Guardar"
      size="xl"
      cancel-variant="secondary" ok-variant="success"
      >
        <b-row>
          <b-col md="3" xl="3">
              <b-form-group label="ID">
                  <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                      <b-form-input v-model="abastecimientoc.idAbastecimiento" readonly/>
                  </b-input-group>
              </b-form-group>
          </b-col>
          <b-col md="9" xl="3">
              <b-form-group label="Fecha Abastecimiento">
                  <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                      <flat-pickr v-model="abastecimientoc.fechaAba" class="form-control" disabled />
                  </b-input-group>
               </b-form-group>
          </b-col>
          <b-col md="12" xl="3">
              <b-form-group label="Grifo">
                  <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                      <v-select label="nombreGri" style="flex: 1;" v-model="abastecimientoc.Grifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" :disable="grifos.nombreGri" disabled/>
                  </b-input-group>
              </b-form-group>
          </b-col>
          <b-col md="12" xl="3">
              <b-form-group label="Cuentas">
                  <b-input-group class="input-group-merge">
                      <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                      <v-select label="nombreCue" style="flex: 1;" v-model="abastecimientoc.idCuenta" :reduce="cuentas => cuentas.idCuenta" :options="cuentas" disabled />
                  </b-input-group>
              </b-form-group>
          </b-col>
        </b-row>
        <feather-icon icon="TruckIcon" />
        <span>Detalle </span>
        <hr class="invoice-spacing">
        <vue-good-table
          :columns="tcolumnas" :rows="abastecimientod" :rtl="direction"
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
           :pagination-options="{ enabled: true, perPage:pageLength}"
            >
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
    </b-modal>
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BCard, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormTextarea, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab,VBTooltip, VBPopover
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
    BButtonToolbar, BBadge, BCard, BToast, BCardCode, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BFormTextarea, BButton, BButtonGroup, VueGoodTable, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BFormCheckbox, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText, flatPickr,
  },
  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
    'b-popover': VBPopover,
  },
 
data() {
    return {
        pageLength: 3,
        dir: false,
        tcolumnas: [
          { label:'ID', field:'idAbastecimientod', hidden:true, }, 
          { label:'Placa', field:'placaVeh'},
          { label:'Operador', field:'trabajadorPer'},
          /*{ label:'Reten', field:'retenPer'},
          { label:'Galones', field:'galonesAba'}, 
          { label:'ID abs', field:'Abastecimientoc_idAbastecimiento', hidden:true },
          { label:'Kilometraje', field:'kilometrajeKil'}, 
          { label:'Rendimiento', field:'rendimientoAba' },
          { label:'Diferencia km', field:'diferenciakmAba' },
          { label:'Ruta', field:'rutaAba'},
          { label:'Observación', field:'observacionAba'}*/
        ],
        columns: [
          { label: 'ID', field: 'idAbastecimiento'},
          { label:'ID GRIFO', field: 'Grifo_idGrifo', hidden:true },
          { label:'idCuenta', field: 'idCuenta', hidden:true },
          { label: 'Estado', field: 'estadoAba'},
          { label: 'Operacion', field: 'nombreCue'},
          { label: 'Fecha', field: 'fechaAba'},
          { label: 'Grifo', field: 'nombreGri'},
          { label: 'Solicitado Por', field: 'nombreUsu'},
          { label: 'Grifo', field: 'nombreGri'},
          { label: 'Ciudad', field: 'ciudadGri'},
          { label: 'Detalle', field: 'detalle'},
        ],
          /**************************** modal descripcion ******************/
          headerBgVariantD: 'dark',
          headerTextVariantD: 'success',
          headerTitleVariantD: 'DESCRIPCION ABASTECIMIENTO',
          bodyBgVariantD: 'light',
          bodyTextVariantD: 'success',
          footerBgVariantD: 'dark',
          footerTextVariantD: 'dark',
          showModalD: false,
          /**************************** entorno ****************************/      
          abastecimientoc: {
            idAbastecimiento: "", 
            fechaAba: "", 
            Grifo_idGrifo: "", 
            estadoAba: "", 
            Usuario_idUsuario: "", 
            idCuenta: "", 
            Externo_idExterno:"",
          }, 
          grifos: [],
          cuentas: [],
          abastecimientod: [],
          abastecimientos: [],
          estados: [],
          searchTerm: '',
    }
  },
  methods:{
    Toast(append = false, variant = null,titulo = "", mensaje = "")
    {
      var toaster = 'b-toaster-bottom-full';
      this.$bvToast.toast(mensaje, {
        title: titulo,
        toaster,
        variant,
        solid: false,
        appendToast: append,
      })
    },
    Detalle(prm_detalle)
    {
      this.headerBgVariantD = 'primary'; 
      this.headerTitleVariantD = "BUSCAR DETALLE"
      this.boton = true; 
      this.abastecimientoc = prm_detalle
      this.$http.get('/LiberAPP/Abastecimiento/Select/'+ prm_detalle.idAbastecimiento ).then(res=> {
          this.abastecimientod = res.data;
      })
      .catch(error=> {
          this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
      })
    },
    CambiarEstado(prm_id,prm_estado)
    {
      var uestado= { idAbastecimiento: prm_id, estadoAba: prm_estado};
      this.estados.push(uestado);
    },
    Procesar()
    {
      this.showLoading = true;  
      var jsonAbastecimiento = JSON.stringify(this.estados);
      console.log( 'log__ ', jsonAbastecimiento )

      this.$http.post('/LiberAPP/Abastecimiento/Procesar',
      {
        abastecimiento: jsonAbastecimiento,
      })
      .then(res => {
        this.Toast(true,'primary','Procesar Solicitudes','Procesado Correctamente');
        this.showModal = false;
        this.showLoading = false;
        this.Solicitar();
      })
      .catch(error => {
        this.Toast(true,'danger','Procesar Solicitudes','Error al actualizar la solicitud: '+error);
        this.showLoading = false;
      });
    },
    Solicitar()
    {
      this.$http.get('/LiberAPP/Abastecimiento/Aprobar/Select')
      .then(res => {
        this.abastecimientos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Registro de Abastecimiento','Error al cargar los registros: '+error);
          this.showLoading = false;
       });
    }
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
    this.$http.get('/LiberAPP/Abastecimiento/Aprobar/Select')
      .then(res => {
        this.abastecimientos = res.data;
    })
    .catch(error => {
      this.Toast(true,'danger','Registro de Abastecimiento','Error al cargar los registros: '+error);
      this.showLoading = false;
    });
    this.$http.get('/LiberAPP/Grifo/Select').then(res=> {
      this.grifos = res.data;
    })
    .catch(error => { 
      this.Toast(true, 'danger','Grifo','Error al cargar los registros: '+error);
    })
    this.$http.get('/LiberAPP/Cuenta/Select').then(res=> {
      this.cuentas = res.data;
    })
    .catch(error => {
      this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
    })
  },

}
</script>
<style lang="scss" >
 @import '~@core/scss/vue/libs/vue-good-table.scss';
 @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 

  .boton{
    display: flex;
    justify-content:center;
  }
</style>

