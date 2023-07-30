<template><div>
    <b-card>
        <b-row>
            <b-col md="12" xl="7">
                <b-form-group label="Vehiculo">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <v-select label="placaVeh" v-model="yvehiculo" :options="yvehiculos" style="flex: 1;"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <!--<b-col md="6" xl="3">
                <b-form-group label="Estado">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-input-group>
                </b-form-group>
            </b-col>-->
            <b-col md="6" xl="2">
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
    <!--<b-card v-if="kilometrajes.length > 0">-->
    <b-card v-if="kilometrajes.length > 0 || status == true">
        <b-row>
            <b-col md="6" xl="6" class="text-left">
                <h4 class="text-primary">ÚLTIMOS 30 KILOMETRAJES - {{ seleccionado.vehiculo}}</h4>
            </b-col>
            <!--<b-col md="6" xl="6" class="text-right">
                <b-button variant="success" @click="Nuevo()" :disabled="showLoading" v-b-modal.modal-formulario>
                    <feather-icon icon="PlusIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Nuevo</span>
                </b-button>
            </b-col>-->
            <b-col md="12" xl="12">
                <span>
                    Revisar los kilometrajes incoherentes de arriba hacia abajo para cuadrar de forma óptima
                </span>
            </b-col>
        </b-row><br>

    <!---------------------------------- tabla -------------------------------->
        <table class="table table-condensed table-bordered table-hover text-center">
            <thead>
                <tr>
                    <th>Acciones</th>
                    <th>ID</th>
                    <th>Kilometraje</th>
                    <th>Fecha</th>
                    <th>KM. x Día</th>
                    <th>Fuente</th>
                    <th>Registrado Por</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ukilometraje,indice) in kilometrajes">
                    <td>
                        <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(ukilometraje.idKilometraje)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                    </td>
                    <td>{{ukilometraje.idKilometraje}}</td>
                    <td>{{ukilometraje.kilometrajeKil}}</td>
                    <td>{{ukilometraje.fechaKil}}</td>
                    <td v-if="ukilometraje.error" class="bg-danger text-light">{{ukilometraje.variacion}}</td>
                    <td v-else>{{ukilometraje.variacion}}</td>
                    <td>{{ukilometraje.tipoKil}}</td>
                    <td>{{ ukilometraje.nombreUsu }}</td>
                    <!--<td>{{ukilometraje.idKilometraje}}</td>
                    <td>{{ukilometraje.idKilometraje}}</td>-->
                </tr>
            </tbody>
        </table>
    </b-card>
    <b-card v-else>
        <b-row>
            <b-col md="12" xl="12" class="text-left">
                <h5 class="text-warning">NO HAY REGISTROS ENCONTRADOS</h5>
            </b-col>
        </b-row>
    </b-card>
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
                <h6>Fecha:</h6>
                <b-form-datepicker v-model="kilometraje.fechaKil" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="en" new=date()>
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group label="Kilometraje">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <cleave v-model="kilometraje.kilometrajeKil" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group label="Horometraje">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <cleave v-model="kilometraje.horometrajeKil" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                    </b-input-group>
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
                <b-button variant="success" size="sm" @click="Guardar" :disabled="showLoading">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Guardar</span>
                </b-button>
            </div>
        </template>
        <b-overlay :show="showLoading" no-wrap/>
    </b-modal>
</div></template>



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
        columns: [
            { label: 'ID', field: 'idKilometraje'},
            { label: 'Acciones', field: 'acciones'},
            { label: 'Kilometraje', field: 'kilometrajeKil'},
            { label: 'Fecha', field: 'fechaKil'},
            /*{ label: 'Fec. Rendición', field: 'frendicionMon'},
            { label: 'Monto', field: 'totalMon'},
            { label: 'Detalle', field: 'detalleMon'}*/
        ],

        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'success',
        headerTitleVariant: 'NUEVO KILOMETRAJE',
        bodyBgVariant: 'light',
        bodyTextVariant: 'success',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showLoading: false,
        boton: false,

        /**************************** entorno ****************************/      
        yvehiculos:[],
        kilometrajes: [],
        status: false,
        estados: [
            { value: 'APLICADO', text: 'ENTREGADO' },
            { value: 'RENDIDO', text: 'RENDIDO' },
            { value: 'REASIGNADO', text: 'DESCONTADO' }
        ],
        montos: [],
        yvehiculo: {},
        estado: "",
        seleccionado: {
            estado: "",
            vehiculo: "",
            id: 0,
        },
        showLoading: false,

        /**************************** formulario ****************************/   
        kilometraje: {
             //idKilometraje: 0,
             kilometrajeKil: "",
             horometrajeKil: "",
             fechaKil: "",
             Vehiculo_idVehiculo: 0,
        },
        terminado: false,
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
    Listar()
    {
        this.showLoading = true;

        this.$http.get('/LiberAPP/Kilometraje/Historial/'+this.yvehiculo.idVehiculo)
        .then(res => {
            this.showLoading = false;
            this.kilometrajes = res.data;
            //this.seleccionado.estado = this.estado;
            this.seleccionado.vehiculo = this.yvehiculo.placaVeh;
            this.seleccionado.id = this.yvehiculo.idVehiculo;
            this.status = true
        })
        .catch(error => {
            this.Toast(true,'danger','Kilometraje','Error al cargar los registros: '+error);
            this.showLoading = false;
            this.status = false
        });
    },
    Eliminar(prm_fila)
    {
      this.showLoading = true;

      this.boxOne = ''
      this.$bvModal
        .msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
          cancelVariant: 'outline-secondary',
        })
        .then(value => {
          this.boxOne = value
          if(this.boxOne === true) 
          {
            this.$http.post('/LiberAPP/Kilometraje/Desactivar',
            {
              idKilometraje : prm_fila,
            })
            .then(res => {
              this.Toast(true,'primary','Kilometraje','Kilometraje eliminado Correctamente');
              this.showModal = false;
              this.showLoading = false;
              this.Listar();
            })
            .catch(error => {
              this.Toast(true,'danger','Kilometraje','Error al eliminar el Kilometraje: '+error);
              this.showLoading = false;
            })
          }
          else
            this.showLoading = false;
        })
    },
    Nuevo()
    {
        var fecha = new Date();
        var dia = fecha.getDate();
        if(dia < 10)
            dia = "0"+dia;
        var mes = fecha.getMonth()+1;
        if(mes < 10)
            mes = "0"+mes;
        this.kilometraje.kilometrajeKil = "";
        this.kilometraje.horometrajeKil = "";
        this.kilometraje.fechaKil = fecha.getFullYear() + "-" + mes+ "-" + dia;
        this.kilometraje.Vehiculo_idVehiculo = this.seleccionado.id;
    },
    Guardar()
    {
        this.showLoading = true;
        if(this.kilometraje.kilometrajeKil == "")
        {
            this.showLoading = false;
            this.Toast(true,'warning','Agregar Kilometraje','Debe Ingresar un Kilometraje Válido');
            return;
        }

        var jsonKilometraje = JSON.stringify(this.kilometraje);

        this.$http.post('/LiberAPP/Kilometraje/GuardarUnidad',
        {
            kilometraje: jsonKilometraje,
        })
        .then(res => {
            this.Toast(true,'primary','Guardar Kilometraje','Guardado Correctamente');
            this.showModal = false;
            this.showLoading = false;
            this.Listar();
        })
        .catch(error => {
            this.Toast(true,'danger','Actualizar Tramo','Error al actualizar el registro: '+error);
            this.showLoading = false;
        });
    },
    /*Editar(prm_monto)
    {
        this.boton = true;
        //Asignando el valor
        this.monto = Object.assign({}, prm_monto);
        if(this.monto.estadoMon != "APLICADO")
            this.terminado = true;
        else
            this.terminado = false;
    },*/
},
computed: {
   /* statusVariant() {
      const statusColor = {
        Aprobado      : 'light-sucess',
        Noaprobado    : 'light-danger',
        Pendiente     : 'light-info',
      }

      return status => statusColor[status]
    },*/
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
  created() 
  {
    this.$http.get('/LiberAPP/Vehiculo/Select')
      .then(res => {
          this.yvehiculos = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
  },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>

