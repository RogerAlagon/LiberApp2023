<template><div>
    <b-card>
        <b-row>
            <b-col md="3" xl="2" class="text-center">
                <br>
                <b-button variant="success" @click="activos = false; Cesados(); ypersona = {}" v-if="activos" size="sm">
                    <feather-icon icon="ArrowDownIcon" class="mr-50"/>
                    <span class="align-middle">Activos</span>
                </b-button>
                <b-button variant="secondary" @click="activos = true; ypersona = {}" v-else size="sm">
                    <feather-icon icon="ArrowDownIcon" class="mr-50"/>
                    <span class="align-middle">Cesados</span>
                </b-button>
            </b-col>
            <b-col md="12" xl="7">
                <b-form-group label="Trabajador" v-if="activos">
                    <v-select label="trabajadorPer" v-model="ypersona" :options="ypersonas" style="flex: 1;"/>
                </b-form-group>
                <b-form-group label="Trabajador" v-else>
                    <v-select label="trabajadorPer" v-model="ypersona" :options="cesados" style="flex: 1;"/>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Estado">
                    <b-form-select v-model="estado" :options="estados"/>
                </b-form-group>
            </b-col>
            <!--<b-col md="6" xl="2">
                <b-form-group label="Agrupar">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <b-form-select v-model="agrupar" :options="agrupaciones"/>
                    </b-input-group>
                </b-form-group>
            </b-col>-->
            <b-col md="12" xl="12" class="text-center">
                <b-button variant="success" @click="Listar()" :disabled="showLoading">
                    <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Listar</span>
                </b-button>
            </b-col>
        </b-row>
    </b-card>

    <b-card v-if="rendiciones.length > 0">
        <b-row>
            <b-col md="6" xl="6" class="text-left">
                <h4 class="text-primary">VIÁTICOS {{ seleccionado.estado }}S - {{ seleccionado.trabajador}}</h4>
            </b-col>
            <b-col md="6" xl="6" class="text-right">
                <div class="custom-search d-flex justify-content-end">
                    <b-form-group>
                        <div class="d-flex align-items-center">
                            <label class="mr-1">Buscar:</label>
                            <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                        </div>
                    </b-form-group>
                </div>
            </b-col>
        </b-row><br>

        <!---------------------------------- tabla -------------------------------->
        <vue-good-table
        :columns="columns2" :rows="rendiciones" :rtl="direction"
        :search-options="{ enabled: true, externalQuery: searchTerm }">

            <template slot="table-row" slot-scope="props">

                <!--Columna Accion ---->
                
                <!--<span v-if="props.column.field === 'action'">
                    <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.formattedRow)">
                        <feather-icon icon="Trash2Icon"/>
                    </b-button>
                </span>-->
                <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-rendicion variant="primary" class="btn-icon rounded-circle" @click="Rendir(props.row)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>
                </span>
                <!--
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-rendicion variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                    </span>
                -->
                <span v-if="props.column.field === 'mon'">
                    {{props.formattedRow[props.column.field].length}}
                </span>

                <!-- Column: Common -->
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
    </b-card>
    <b-card v-else>
        <b-row>
            <b-col md="12" xl="12" class="text-left">
                <h4 class="text-warning">NO HAY REGISTROS ENCONTRADOS</h4>
            </b-col>
        </b-row>
    </b-card>

    <!---------------------------------- modal -------------------------------->
    <b-modal
      id="modal-rendicion" v-model="showModal2"
      :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
      :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
      centered no-close-on-backdrop
      title-tag="div"
      cancel-title="Cancelar" ok-title="Guardar"
      size="xl"
      cancel-variant="secondary" ok-variant="success"
    >
        <!---------------------------------- formulario -------------------------------->
        <b-row>
            <b-col md="12" xl="12">
                <table class="table table-bordered table-hover">
                    <tr>
                        <th colspan="3">FECHA DE ENTREGA</th>
                        <th colspan="3">FECHA DE RENDICIÓN</th>
                    <tr>
                    <tr>
                        <td colspan="3">{{rendicion.fec}}</td>
                        <td colspan="3">{{rendicion.fecr}}</td>
                    <tr>
                    <tr>
                        <th>ID</th>
                        <th>TIPO</th>
                        <th>DETALLE</th>
                        <th>MONTO</th>
                        <th>RENDICIÓN</th>
                        <th>SALDO</th>
                    </tr>
                    <tr v-for="(umonto,indice) in rendicion.mon">
                        <td>{{umonto.idMonto}}</td>
                        <td>{{umonto.concepto}}</td>
                        <td>{{umonto.detalleMon}}</td>
                        <td>
                            <!--<b-button variant="outline-danger" class="btn-icon rounded-circle" >
                            </b-button>--->
                            <b-button variant="outline-dark" size="sm" @click="umonto.rendicionMon = umonto.totalMon; umonto.saldoMon = 0;">
                                <span class="align-middle">{{umonto.totalMon}}</span>
                                <feather-icon icon="ChevronsRightIcon"/>
                            </b-button>
                        </td>
                        <td class="text-center">
                            <b-form-input size="sm" class="text-center" v-model="umonto.rendicionMon" style="width: 100px;" @input="umonto.saldoMon = umonto.totalMon - umonto.rendicionMon; umonto.saldoMon = Number(umonto.saldoMon.toFixed(2)); calculado = false;"/>
                        </td>
                        <td>{{umonto.saldoMon}}</td>
                    </tr>
                    <tr>
                        <th colspan="3"></th>
                        <th colspan="3" class="text-center">
                            <b-button variant="warning" size="sm" @click="Parcial()" v-if="rendicion.fecr == null">
                                <feather-icon icon="PercentIcon"/>
                                <span class="align-middle">Rendición Parcial</span>
                            </b-button>
                            <b-button variant="info" size="sm" @click="Calcular()">
                                <feather-icon icon="DollarSignIcon"/>
                                <span class="align-middle">Calcular</span>
                            </b-button>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3"></th>
                        <th>TOTAL</th>
                        <th>RENDIDO</th>
                        <th v-if="rendicion.sal < 0" class="bg-warning text-light">REEMBOLSO</th>
                        <th v-else-if="rendicion.sal > 0" class="bg-success text-light">VUELTO</th>
                        <th v-else>-</th>
                    </tr>
                    <tr>
                        <th colspan="3" class="text-right">
                        </th>
                        <td>{{rendicion.tot}}</td>
                        <td>{{rendicion.ren}}</td>
                        <td v-if="rendicion.sal < 0">{{rendicion.sal * - 1}}</td>
                        <td v-else>{{rendicion.sal}}</td>
                    </tr>
                    <tr v-if="rendicion.sal > 0">
                        <th colspan="5" class="text-right">DINERO DEVUELTO</th>
                        <td><b-form-input size="sm" class="text-center" v-model="rendicion.dev" style="width: 100px;" @input="rendicion.des = rendicion.sal - rendicion.dev; rendicion.des = Number(rendicion.des.toFixed(2))"/></td>
                    </tr>
                    <tr>
                        <th colspan="5" class="text-right">FORMA DE DEVOLUCIÓN:</th>
                        <td>
                            <b-button variant="info" size="sm" @click="rendicion.dis = 'CAJA CHICA'" v-if="rendicion.dis == 'DEPOSITO'">
                                <span class="align-middle">Depósito</span>
                            </b-button>
                            <b-button variant="primary" size="sm" @click="rendicion.dis = 'DEPOSITO'" v-else-if="rendicion.dis == 'CAJA CHICA'">
                                <span class="align-middle">Caja Chica</span>
                            </b-button>
                        </td>
                    </tr>
                    <tr v-if="rendicion.sal > 0">
                        <th colspan="5" class="text-right">DESCUENTO</th>
                        <td>{{rendicion.des}}</td>
                    </tr>
                    <tr>
                        <th colspan="5" class="text-right">OBSERVACIÓN</th>
                        <td>
                            <b-form-textarea v-model="rendicion.obs"/>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
            <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModal2 = false" :disabled="showLoading">
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
   BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker, BFormTextarea
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
        BFormTextarea,
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
            { label: 'ID', field: 'idMonto'},
            { label: 'Acciones', field: 'acciones'},
            { label: 'Tipo', field: 'concepto'},
            { label: 'Fec. Deposito', field: 'faplicacionMon'},
            { label: 'Fec. Rendición', field: 'frendicionMon'},
            { label: 'Monto', field: 'totalMon'},
            { label: 'Detalle', field: 'detalleMon'}
        ],

        columns2: [
            { label: 'Acciones', field: 'acciones'},
            { label: 'Tipo', field: 'tip'},
            { label: 'Total Rendición', field: 'tot'},
            { label: 'Rendido', field: 'ren'},
            { label: 'Pendiente', field: 'sal'},
            { label: 'Fecha Depósito', field: 'fec'},
            { label: 'Fecha Rendición', field: 'fecr'},
            { label: 'Disposición', field: 'dis'},
            { label: 'Items', field: 'mon'},
        ],

        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'warning',
        headerTitleVariant: 'EDITAR RENDICIÓN',
        bodyBgVariant: 'light',
        bodyTextVariant: 'warning',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showModal2: false,
        showLoading: false,
        boton: false,

        /**************************** entorno ****************************/      
        ypersonas:[],
        cesados: [],
        montos: [],
        estados: [
            { value: 'APLICADO', text: 'ENTREGADO' },
            { value: 'RENDIDO', text: 'RENDIDO' },
        ],
        agrupaciones: [
            { value: 'true', text: 'AGRUPAR' },
            { value: 'false', text: 'NO AGRUPAR' },
        ],
        ypersona: {},
        estado: "APLICADO",
        agrupar: 'true',
        seleccionado: {
            estado: "",
            trabajador: "",
            idPersona:"",
        },
        rendiciones: [],
        showLoading: false,
        rendicion: [],
        calculado: false,
        activos: true,

        /**************************** formulario ****************************/   
        monto: {
             IdMonto: 0,
             estadoMon: "",
             conceptoMon: "",
             detalleMon: "",
             faprobacionMon: "",
        },
        terminado: false,
        userData: JSON.parse(localStorage.getItem('userData')),
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

        this.$http.get('/LiberAPP/Monto/Rendicion/'+this.estado+'/'+this.ypersona.idPersona+'/'+this.agrupar)
        .then(res => {
            this.showLoading = false;
            //this.montos = res.data;
            this.rendiciones = res.data;
            this.seleccionado.estado = this.estado;
            this.seleccionado.trabajador = this.ypersona.trabajadorPer;
            this.seleccionado.idPersona = this.ypersona.idPersona;
        })
        .catch(error => {
            this.Toast(true,'danger','Viáticos','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },
    Cesados()
    {
        if(this.cesados.length == 0)
        {
            this.$http.get('/LiberAPP/Persona/SelectCesado')
              .then(res => {
                  this.cesados = res.data;
              })
              .catch(error => {
                  this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
                  this.showLoading = false;
            });
        }
    },

    /*Actualizar()
    {
        this.showLoading = true;
        if(this.monto.estadoMon == "REASIGNADO" && this.monto.reasignadoMon == "")
        {
            this.showLoading = false;
            this.Toast(true,'warning','Actualizar Rendición','Debe Ingresar el Monto a Descontar');
            return;
        }
        if(this.monto.estadoMon == "REASIGNADO" && this.monto.reasignadoMon >= this.monto.totalMon && this.monto.reasignadoMon >= 0)
        {
            this.showLoading = false;
            this.Toast(true,'warning','Actualizar Rendición','El Monto a Descontar debe ser Menor al Entregado ');
            return;
        }


        var jsonMonto = JSON.stringify(this.monto);

        this.$http.post('/LiberAPP/Monto/ProcesarUnidad',
        {
            monto: jsonMonto,
        })
        .then(res => {
            this.Toast(true,'primary','Actualizar Monto','Actualizado Correctamente');
            this.showModal = false;
            this.showLoading = false;
            this.Listar();
        })
        .catch(error => {
            this.Toast(true,'danger','Actualizar Tramo','Error al actualizar el registro: '+error);
            this.showLoading = false;
        });
    },*/
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
    Rendir(prm_rendicion)
    {
        this.rendicion = prm_rendicion;
        this.calculado = false;
        //this.boton = true;
        //Asignando el valor
    },
    Parcial()
    {
        /*this.calculado = true;
        var montos = this.rendicion.mon;
        var rendido = 0;
        var saldo = 0;

        for (var i = 0; i < montos.length; i++)
        {
            var umonto = montos[i];

            rendido += parseFloat(umonto.rendicionMon);
            saldo += umonto.saldoMon;            
        }

        this.rendicion.ren = rendido;
        this.rendicion.sal = saldo;
        if(saldo > 0)
        {
            this.rendicion.dev = 0;
            this.rendicion.des = saldo;
        }
        else
        {
            this.rendicion.dev = null;
            this.rendicion.des = null;
        }*/


        this.showLoading = true;

        /*if(isNaN(this.rendicion.ren))
        {
            this.showLoading = false;
            this.Toast(true,'warning','Guardar Rendición','Montos Inválidos Ingrese Números');
            return;
        }*/
        /*if(!this.calculado)
        {
            this.showLoading = false;
            this.Toast(true,'warning','Guardar Rendición','Tiene que calcular el Total de la Rendición');
            return;
        }*/
        /*if(this.rendicion.sal > 0)
        {
            if(isNaN(this.rendicion.des))
            {
                this.showLoading = false;
                this.Toast(true,'warning','Guardar Rendición','Ingrese el Dinero devuelto');
                return;
            }
            if(this.rendicion.des > this.rendicion.sal)
            {
                this.showLoading = false;
                this.Toast(true,'warning','Guardar Rendición','El Descuento no Puede ser Mayor al Saldo a Deber');
                return;
            }
        }*/

        var jsonRendicion = JSON.stringify(this.rendicion);

        this.$http.post('/LiberAPP/Monto/GuardarParcial',
        {
            rendicion: jsonRendicion,
        })
        .then(res => {
            this.Toast(true,'primary','Actualizar Monto','Actualizado Correctamente');
            this.showModal2 = false;
            this.showLoading = false;
            this.Listar();
        })
        .catch(error => {
            this.Toast(true,'danger','Actualizar Tramo','Error al actualizar el registro: '+error);
            this.showLoading = false;
        });

    },
    Calcular()
    {
        this.calculado = true;
        var montos = this.rendicion.mon;
        var rendido = 0;
        var saldo = 0;

        for (var i = 0; i < montos.length; i++)
        {
            var umonto = montos[i];

            rendido += parseFloat(umonto.rendicionMon);
            saldo += parseFloat(umonto.saldoMon);
        }

        this.rendicion.ren = Number(Number(rendido).toFixed(2));
        this.rendicion.sal = Number(Number(saldo).toFixed(2));
        if(this.rendicion.sal > 0)
        {
            this.rendicion.dev = 0;
            this.rendicion.des = this.rendicion.sal;
        }
        else
        {
            this.rendicion.dev = null;
            this.rendicion.des = null;
        }
    },
    Guardar()
    {
        this.showLoading = true;

        if(isNaN(this.rendicion.ren))
        {
            this.showLoading = false;
            this.Toast(true,'warning','Guardar Rendición','Montos Inválidos Ingrese Números');
            return;
        }
        if(!this.calculado)
        {
            this.showLoading = false;
            this.Toast(true,'warning','Guardar Rendición','Tiene que calcular el Total de la Rendición');
            return;
        }
        if(this.rendicion.sal > 0)
        {
            if(isNaN(this.rendicion.des))
            {
                this.showLoading = false;
                this.Toast(true,'warning','Guardar Rendición','Ingrese el Dinero devuelto');
                return;
            }
            if(this.rendicion.des > this.rendicion.sal)
            {
                this.showLoading = false;
                this.Toast(true,'warning','Guardar Rendición','El Descuento no Puede ser Mayor al Saldo a Deber');
                return;
            }
        }

        var jsonRendicion = JSON.stringify(this.rendicion);

        this.$http.post('/LiberAPP/Monto/GuardarRendicion/'+this.userData.id,
        {
            rendicion: jsonRendicion,
        })
        .then(res => {
            this.Toast(true,'primary','Guardar Rendicion','Actualizado Correctamente');
            var idMonto = res.data;
            this.showModal2 = false;
            this.showLoading = false;
            this.Listar();
            if(this.rendicion.des > 0)
            {
                window.open('/LiberAPP/Monto/Reporte/Descuento/'+idMonto+'/'+this.seleccionado.idPersona, '_blank');
            }
        })
        .catch(error => {
            this.Toast(true,'danger','Guardar Rendicion','Error al actualizar el registro: '+error);
            this.showLoading = false;
        });
    },



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
    this.$http.get('/LiberAPP/Persona/Select')
      .then(res => {
          this.ypersonas = res.data;
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