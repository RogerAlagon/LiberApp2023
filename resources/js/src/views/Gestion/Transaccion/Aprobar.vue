<template><div>
    <b-card>
    <!---------------------------------- aprobar solicitud -------------------------------->
    <b-row>
        <b-col md="12" xl="12" class="text-center">
            <h2 class="text-primary">APROBAR SOLICITUDES DE DINERO</h2>
        </b-col>
        <b-col md="6" xl="6" class="text-left">
            <b-button variant="success" @click="Procesar">
                <feather-icon icon="CheckIcon" class="mr-50"/>
                Aprobar Solicitudes
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
      <vue-good-table
        :columns="columns" :rows="montos" :rtl="direction"
        :search-options="{ enabled: true, externalQuery: searchTerm }">
          <!-- styleClass="table condensed table-bordered table-striped"-->

        <template slot="table-row" slot-scope="props">

            <!--Columna Accion ---->
            <!--<span v-if="props.column.field === 'action'">
                <b-button variant="danger" class="btn-icon rounded-circle" @click="Procesar(props.formattedRow)">
                    <feather-icon icon="Trash2Icon"/>
                </b-button>
            </span>-->

            <span v-if="props.column.field === 'estadoMon'">
                <b-button v-if="props.row.estadoMon=='SOLICITADO'" variant="secondary" size="sm" @click="props.row.estadoMon='APROBADO';CambiarEstado(props.row.idMonto,props.row.estadoMon)">SOLICITADO
                </b-button> 
                <b-button v-else-if="props.row.estadoMon=='APROBADO'" variant="success" size="sm" @click="props.row.estadoMon='ANULADO';CambiarEstado(props.row.idMonto,props.row.estadoMon)">APROBADO
                </b-button>
                <b-button v-else variant="danger" size="sm" @click="props.row.estadoMon='SOLICITADO';CambiarEstado(props.row.idMonto,props.row.estadoMon)">ANULADO
                </b-button>       
            </span>
            <span v-else-if="props.column.field === 'concepto'">
                <b-button v-b-tooltip.hover="props.row.detalleMon" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark>
                    {{props.row.concepto}}           
                </b-button> 
            </span>
            <span v-else-if="props.column.field === 'totalMon'">
                  S/. {{props.row.totalMon}}  
            </span>
            
              <!-- Column: Common -->
            <span v-else>
                {{ props.formattedRow[props.column.field] }}
            </span>

        </template>
    </vue-good-table>
</b-card>
  </div>
</template>



<script>
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormTextarea, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab,VBTooltip, BCard
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButtonToolbar, BBadge, BToast, BCardCode, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BFormTextarea, BButton, BButtonGroup, VueGoodTable, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BFormCheckbox, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText, BCard
  },
  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
  },
 
data() {
    return {
        pageLength: 3,
        dir: false,

        columns: [
            { label: 'ID', field: 'idMonto'},
            { label: 'Trabajador', field: 'trabajadorPer'},
            { label: 'Estado', field: 'estadoMon'},
            { label: 'Servicio', field: 'Servicio_idServicio'},
            { label: 'Evento', field: 'nombreEve'},
            { label: 'Concepto', field: 'concepto'},
            { label: 'Monto', field: 'totalMon', type:'number'},
            { label: 'Banco', field: 'bancoPer'},
            { label: 'Disposición', field: 'disposicionMon'},
            { label: 'Fecha Solicitud', field: 'fsolicitudMon'},
            { label: 'Usuario Solicita', field: 'nombreUsu'}
      ],
      montos: [],
      estados: [],
      searchTerm: '',
      monto: {
         idMonto: 0,
         estadoMon: "",
      },
      estado: {
        idMonto: 0,
        estadoMon: "",
      },
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
      CambiarEstado(prm_id,prm_estado)
      {
        var uestado= { idMonto: prm_id, estadoMon: prm_estado};

        for (var i = 0; i < this.estados.length; i++)
        {
            if(this.estados[i].idMonto == prm_id)
            {
                this.estados.splice(i,1);
                break;
            }
        }
        if(prm_estado != "SOLICITADO")
            this.estados.push(uestado);
      },
      Procesar()
      {
        this.showLoading = true;
        
       var jsonMonto = JSON.stringify(this.estados);

       this.$http.post('/LiberAPP/Monto/Procesar',
        {
            monto: jsonMonto,
        })
        .then(res => {
          this.Toast(true,'primary','Procesar Solicitudes','Procesado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.estados = [];
          this.Solicitar();
        })
        .catch(error => {
          this.Toast(true,'danger','Procesar Solicitudes','Error al actualizar la solicitud: '+error);
          this.showLoading = false;
        });
      },
      Solicitar()
      {
        this.$http.get('/LiberAPP/Monto/SOLICITADO')
        .then(res => {
          this.montos = res.data;
          this.estados = [];
        })
        .catch(error => {
            this.Toast(true,'danger','Solicitando solictudes estado Seleccionado','Error al cargar los registros: '+error);
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
    this.$http.get('/LiberAPP/Monto/SOLICITADO')
      .then(res => {
        this.montos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando solicitudes estado Selecionado','Error al cargar los registros: '+error);
          this.showLoading = false;
       });
    // this.estados.pop();
  },

}
</script>
<style lang="scss" >
 @import '~@core/scss/vue/libs/vue-good-table.scss';

  .boton{
    display: flex;
    justify-content:center;
  }
</style>

