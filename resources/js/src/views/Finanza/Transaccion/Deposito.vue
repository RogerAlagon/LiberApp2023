<template>
  <div>
    <!---------------------------------- Botones Caja Chica, Deposito -------------------------------->
    <b-card>
        <b-col md="6" xl="3">
            <b-form-group label="Seleccione Tipo:">
                <b-button-toolbar>
                    <b-button-group>
                        <b-button value="Caja Chica" variant="outline-primary" @click="ListarDisposicion('CAJA CHICA')" :disabled="showLoading"><b-spinner small v-if="showLoading"/> Caja Chica
                        </b-button>
                        <b-button variant="outline-success" @click="ListarDisposicion('DEPOSITO')" :disabled="showLoading"> <b-spinner small v-if="showLoading"/> Depósito</b-button>
                    </b-button-group>
                </b-button-toolbar>
            </b-form-group>
        </b-col>
    </b-card>
    <!---------------------------------- Procesar aprobacion -------------------------------->
    <b-card v-if="opcion != ''">
        <b-row>
            <b-col md="8" xl="8">
                <h3>Fondos Entregados: {{opcion}}</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="6" xl="8">
                <b-form-group label="Aprobaciones del Día:" class="mt-0 mb-0 pt-0 pb-0">
                    <b-form-checkbox-group v-model="agrupar" :options="horas" name="flavour-1a" class="demo-inline-spacing mt-1"/>
                </b-form-group>
            </b-col>
            <!--<b-col md="4" xl="3" class="demo-inline-spacing">
                <b-form-group label="Alimentación">
                    <b-form-checkbox checked="true" class="custom-control-primary" name="check-button" switch>
                        <span class="switch-icon-left"><feather-icon icon="EyeIcon" /></span>
                        <span class="switch-icon-right"><feather-icon icon="EyeOffIcon" /></span>
                    </b-form-checkbox>
                </b-form-group>
                <b-form-group label="Otros">
                    <b-form-checkbox checked="true" class="custom-control-primary" name="check-button" switch>
                        <span class="switch-icon-left"><feather-icon icon="EyeIcon" /></span>
                        <span class="switch-icon-right"><feather-icon icon="EyeOffIcon" /></span>
                    </b-form-checkbox>
                </b-form-group>
            </b-col>-->
            <b-col md="6" xl="4" class="text-right mb-0 pb-0">
                <b-form-group label="Opciones de Exportación:" class="mb-0 pb-0">
                    <b-button-toolbar class="d-flex justify-content-end">
                            <b-button variant="dark" @click="Exportar()">Descargar</b-button>
                    </b-button-toolbar>
                </b-form-group>
            </b-col>
        </b-row>
        <hr class="invoice-spacing primary">
        <b-row>
            <b-col md="8" xl="8">
                <h3>Fondos por Entregar: {{opcion}}</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8" xl="8" class="text-left">
                <b-button variant="success" @click="Procesar()" :disabled="showLoading || estados.length == 0">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    Entregar Viáticos
                </b-button>&nbsp;&nbsp;&nbsp;
                <b-button variant="outline-warning" @click="SeleccionarTodo()" :disabled="showLoading">
                    <feather-icon icon="CheckCircleIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    Seleccionar Todo
                </b-button>
            </b-col>
            <b-col md="4" xl="4" class="text-left">
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
        <b-row>
            <br>
            <b-col md="12" xl="12" class="text-center">
                <h4><template v-for="(ubanco,indice) in bancos">
                    <b-badge variant="light-danger" v-if="indice == 'VACIO'">SIN BANCO: S/. {{ubanco.toFixed(2)}}</b-badge>
                    <b-badge variant="light-primary" v-else>BANCO {{indice}}: S/. {{ubanco.toFixed(2)}}</b-badge>&nbsp;
                </template>
                </h4>
            </b-col>
            <br>
        </b-row>
        <!---------------------------------- tabla -------------------------------->
          <br><vue-good-table
            :columns="columns" :rows="depositos" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            :select-options="{
                selectOnCheckboxOnly: true, 
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, 
              }">

            <template slot="table-row" slot-scope="props">

                <!--Columna Accion ---->
                <span v-if="props.column.field === 'action'">
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.formattedRow)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>

                <span v-if="props.column.field === 'estadoMon'">
                    <b-button v-if="props.row.estadoMon=='APROBADO'" variant="secondary" size="sm" @click="props.row.estadoMon='APLICADO';CambiarEstado(props.row.idMonto,props.row.estadoMon)">APROBADO
                    </b-button> 
                    <b-button v-else variant="success" size="sm" @click="props.row.estadoMon='APROBADO';CambiarEstado(props.row.idMonto,props.row.estadoMon)">A DEPOSITAR
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
        <!--<div  class="flotante">
            <b-button variant="warning" :href="'/LiberAPP/Monto/ExportarDeposito/' + identificador" target="_blank" @click="Exportar()" v-if="exportables.length > 0">
                <feather-icon icon="FileTextIcon" class="mr-50"/>
                Exportar Ultima Entrega
            </b-button>
        </div>-->
        <!--************** modal****************** -->
        <b-modal id="modal1" title="Detalle" ok-only ok-title="Accept">
            <b-card-text>
                <p>user</p>
            </b-card-text>
        </b-modal>
    </b-card>
</div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormTextarea, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, VBTooltip, BModal, VBModal, BCard,BFormCheckboxGroup
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'



export default {
  components: {
    BButtonToolbar, BBadge, BToast, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BFormTextarea, BButton, BButtonGroup, VueGoodTable, BAvatar, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText, VBTooltip, BModal, BCard , BFormCheckboxGroup
  },

  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
    'b-modal': VBModal,
  },
 
data() {
    return {
      pageLength: 10,
      dir: false,
      columns: [
        { label: 'ID', field: 'idMonto'},
        { label: 'Estado', field: 'estadoMon'},
        { label: 'Trabajador', field: 'trabajadorPer'},
        { label: 'Concepto', field: 'concepto'},
        { label: 'Monto', field: 'totalMon'},
        { label: 'Banco', field: 'bancoPer'},
        { label: 'Fecha Solicitud', field: 'fsolicitudMon'},
        { label: 'Fecha Aprobación', field: 'faprobacionMon'},
        { label: 'Solicitante', field: 'nombreUsu'},
      ],
      showLoading: false,
      depositos: [],
      estados: [],
      bancos: [],
      exportables: [],
      searchTerm: '',
      deposito: {
         idMonto: 0,
         estadoMon: "",
         trabajadorPer: "",
         concepto: "",
         detalleMon: "",
         totalMon: 0,
         fsolicitudMon: "",
      },
      monto: {
         idMonto: 0,
         estadoMon: "",
      },
      estado: {
        idMonto: 0,
        estadoMon: "",
      },
      opcion: '',
      identificador: '',

        agrupar: [],
        horas: [],

        encontrado: '',


    }
  },
  methods: {
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
      
      ListarDisposicion(prm_opcion)
      {
        
        this.showLoading = true;

        this.opcion = prm_opcion;

        this.$http.get('/LiberAPP/Monto/Disposicion/' + prm_opcion)
          .then(res => {
              this.depositos = res.data.montos;
              this.horas = res.data.horas;
              this.bancos = res.data.bancos;
              this.estados = [];
              this.showLoading = false;
          })
          .catch(error => {
              this.Toast(true,'danger','Listar Registros','Error al cargar los registros: '+error);
              this.showLoading = false;
          });
      },
      CambiarEstado(prm_id,prm_estado)
      {

        let encontrado = this.estados.findIndex(testado => testado.idMonto == prm_id);

        if(encontrado >= 0)
        {
            this.estados.splice(encontrado,1);
        }
        if(prm_estado == "APLICADO")
        {
            var uestado= { idMonto: prm_id, estadoMon: prm_estado};
            this.estados.push(uestado);
        }
      },
      
      SeleccionarTodo()
      {
        this.estados = [];
        for (var i = 0; i < this.depositos.length; i++)
        {
            this.depositos[i].estadoMon = "APLICADO";
            var uestado= { idMonto: this.depositos[i].idMonto, estadoMon: this.depositos[i].estadoMon};
            this.estados.push(uestado);
        }
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
            this.exportables = this.estados;
            
            this.identificador = res.data;
            var horas = [];
            horas[0] = res.data;

            var jsonAgrupar = JSON.stringify(horas);
            window.open('/LiberAPP/Monto/ExportarDeposito/'+this.opcion+'/'+jsonAgrupar, '_blank');

            this.ListarDisposicion(this.opcion);
          })
          .catch(error => {
            this.Toast(true,'danger','Procesar Solicitudes','Error al actualizar la solicitud: '+error);
            this.showLoading = false;
          });
      },
      Solicitar()
      {
        this.$http.get('/LiberAPP/Monto/APROBADO')
        .then(res => {
          this.depositos = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Solicitando solicitudes estado Aprobado','Error al cargar los registros: '+error);
            this.showLoading = false;
          });
      },
      Exportar()
      {
        var jsonAgrupar = JSON.stringify(this.agrupar);
        window.open('/LiberAPP/Monto/ExportarDeposito/'+this.opcion+'/'+jsonAgrupar, '_blank');
        //window.open('/LiberAPP/Monto/ExportarDeposito/'+this.identificador, '_blank');
      }
  },
  computed: {
   
    direction() {
      if (store.state.appConfig.isRTL) {
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
    /*this.$http.get('/LiberAPP/Monto/APROBADO')
      .then(res => {
          this.depositos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando Datos','Error al cargar los registros: '+error);
          this.showLoading = false;
    });*/
  },
}
</script>

<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';

  .right{
    float: right;
  }
  .btn-space{
    margin-right: 14px;
  }
  .boton{
    font-size: 20px;
    font-weight: bold;
  }
.flotante
{
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    padding: 10px;
}
.demo-inline-spacing, .custom-control-inline, .form-group
{
    margin-top: 0 !important;
}
</style>

