<template>
    <div>
        <b-card>
            <!---------------------------------- nuevo solicitud -------------------------------->
            <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="Trabajador">
                        <v-select label="trabajadorPer" v-model="ypersona" :options="ypersonas" style="flex: 1;" multiple/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Concepto">
                        <v-select label="valorDat" v-model="yconcepto" :options="yconceptos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3" class="mb-1">
                    <b-form-group label="Monto">
                        <cleave v-model="ymonto" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" @focus="$event.target.select()"/>
                    </b-form-group>
                </b-col>
            </b-row> 
            <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="Detalle">
                        <b-form-textarea v-model="ydetalle" class="form-control" placeholder="Ingrese el detalle" rows="2"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Tipo">
                        <b-form-select v-model="ytipo" :options="[{value: 'DEPOSITO', text:'DEPOSITO'}]"/>
                        <!--<b-form-select v-model="ytipo" :options="[{value: 'CAJA CHICA', text: 'CAJA CHICA'},{value: 'DEPOSITO', text:'DEPOSITO'}]"/>-->
                    </b-form-group>
                </b-col>
                <!--<b-col md="6" xl="3">
                    <h6>Fecha de Uso del Viático:</h6>
                    <b-form-datepicker v-model="yfecha" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="en" new=date()>
                    </b-form-datepicker>
                </b-col>-->
            </b-row>
            <b-row>
                <b-col md="12" xl="12" class="align-middle text-center">
                    <b-button variant="success" @click="AgregarTrabajador">
                        <feather-icon icon="ArrowDownIcon" /> Solicitar Viático
                    </b-button>
                </b-col>
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="12" xl="12" class="text-center">
                    <h2 class="text-primary">MIS SOLICITUDES {{ver}}</h2>
                </b-col>
                <!--<b-col md="6" xl="6" class="text-left">
                    <b-button v-b-modal.modal-formulario variant="danger" @click="Nuevo">
                        <feather-icon icon="TrashIcon" class="mr-50"/>
                        <span class="align-middle">Viáticos Anulado del Mes</span>
                    </b-button><br><br>
                </b-col>-->
                <b-col md="6" xl="6" class="text-left">
                    <b-button variant="danger" @click="ListarAnulado" v-if="ver == 'PENDIENTES'">
                        <feather-icon icon="TrashIcon" class="mr-50"/>
                        <span class="align-middle">Ver Viáticos Anulados</span>
                    </b-button>
                    <b-button variant="success" @click="Listar" v-else>
                        <feather-icon icon="CheckIcon" class="mr-50"/>
                        <span class="align-middle">Ver Viáticos Solicitados</span>
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
                :columns="tcolumnas" :rows="montos" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
                >
                <!------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'">
                        <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idMonto)" v-if="props.row.estadoMon != 'ANULADO'">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field === 'concepto'">
                        <b-button v-b-tooltip.hover="props.row.detalleMon" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark>
                            {{props.row.concepto}}           
                        </b-button> 
                    </span>
                    <span v-else-if="props.column.field === 'estadoMon'">
                        <b-badge variant="success" v-if="props.row.estadoMon != 'ANULADO'">{{props.row.estadoMon}}</b-badge>
                        <b-badge variant="danger" v-else>{{props.row.estadoMon}}</b-badge>
                    </span>
                    <span v-else-if="props.column.field === 'totalMon'">
                        S/. {{props.row.totalMon}}
                    </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
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
              size="xl"
              cancel-variant="secondary" ok-variant="success">
                <!---------------------------------- formulario -------------------------------->
                <b-row>
                    <b-col md="6" xl="6">
                        <b-form-group label="Trabajador">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <v-select label="trabajadorPer" v-model="ypersona" :options="ypersonas" style="flex: 1;"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="3">
                        <b-form-group label="Concepto">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <v-select label="valorDat" v-model="yconcepto" :options="yconceptos" style="flex: 1;"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="3" class="mb-1">
                        <b-form-group label="Monto">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <cleave v-model="ymonto" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row> 
                <b-row>
                    <b-col md="6" xl="3">
                        <b-form-group label="Tipo">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-select v-model="ytipo" :options="[{value: 'CAJA CHICA', text: 'CAJA CHICA'},{value: 'DEPOSITO', text:'DEPOSITO'}]"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>       
                    <b-col md="6" xl="3">
                        <b-form-group label="Detalle">
                            <b-input-group class="input-group-merge">
                                <b-form-textarea v-model="ydetalle" class="form-control" placeholder="Ingrese el detalle" rows="2"/>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="3">
                        <h6>Fecha:</h6>
                        <b-form-datepicker v-model="yfecha" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="en" new=date()>
                        </b-form-datepicker>
                    </b-col>
                    <b-col md="6" xl="3" class="align-middle text-center">
                        <br><br>
                        <b-button variant="warning" @click="AgregarTrabajador">
                            <feather-icon icon="ArrowDownIcon" /> Agregar a la Cola
                        </b-button>
                    </b-col>
                    <b-col md="12" xl="12" class="align-middle text-center">
                        <b-badge variant="warning"><feather-icon icon="AlertTriangleIcon"/> <span>Los Registros en Cola SOLO se Guardarán cuando haga Click en "Guardar"</span></b-badge>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" class="mb-2">
                        <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse table-secondary text-center">
                            <thead class="thead-dark">
                                <tr>
                                    <th></th>
                                    <th>NRO</th>
                                    <th>TRABAJADOR</th>
                                    <th>CONCEPTO</th>
                                    <th>MONTO</th>
                                    <th>TIPO</th>
                                    <th>DETALLE</th>
                                    <th>FECHA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(usolicitud,indice) in ysolicitud">
                                    <td>
                                        <b-button variant="gradient-danger" class="btn-icon rounded-circle" @click="EliminarSolicitud(indice)">
                                            <feather-icon icon="TrashIcon"/>
                                        </b-button>
                                    </td>
                                    <td>{{ indice+1}}</td>
                                    <td>{{ usolicitud.trabajador}}</td>
                                    <!-- <td><b-form-select v-model="usolicitud.forma" :options="[{ value: 'COMPRA', text: 'COMPRA' },{value: 'PASAJE', text:'PASAJE'},{value: 'PRESTAMO', text:'PRESTAMO'}]"/>-->
                                    <td>{{ usolicitud.concepto}}</td>
                                    <td><cleave v-model="usolicitud.monto" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                                    </td>
                                    <td><b-form-select v-model="usolicitud.tipo" :options="[{value: 'CAJA CHICA', text: 'CAJA CHICA'},{value: 'DEPOSITO', text:'DEPOSITO'}]"/></td>
                                    <td><b-form-input v-model="usolicitud.detalle" class="form-control"/></td>
                                    <td>{{usolicitud.fecha}}</td>
                                    <td style="display:none;">{{usolicitud.idDato}}</td>
                                </tr>
                            </tbody>
                        </table>  
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
                            <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Guardar</span>
                        </b-button>
                        <b-button variant="primary" size="sm" @click="Actualizar" v-else :disabled="showLoading">
                            <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Actualizar</span>
                        </b-button>

                    </div>
                </template>
                <b-overlay :show="showLoading" no-wrap  />
            </b-modal>
        </b-card>
    </div>
</template>



<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
    BRow, BCol, BCalendar, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonToolbar, BButtonGroup, BAvatar, BBadge, BPagination, BFormTextarea, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormDatepicker, VBTooltip, BCard } from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButtonToolbar, BCalendar, BBadge, BToast, BRow, BCol, BImg, BSpinner, BFormGroup, BFormInput, BFormCheckbox, BForm, BFormTextarea, BButton, BButtonGroup, VueGoodTable, BAvatar, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCardText, BOverlay, vSelect, BFormCheckbox, BCardBody, FormWizard, TabContent, BInputGroup, BInputGroupPrepend, BTabs, BTab, Cleave, BCardText, BFormDatepicker, VBTooltip, BCard
  },
  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
  },
 
data() {
        return {
            /**************************** elementos de ux ****************************/
            dir: false,
            pageLength: 10,
            searchTerm: '',
            tabIndex: 1,
            value: '',
            /**************************** tabla ****************************/
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idMonto'},
                { label: 'Trabajador', field: 'trabajadorPer'},
                { label: 'Estado', field: 'estadoMon'},
                { label: 'Concepto', field: 'concepto'},
                { label: 'Monto', field: 'totalMon'},
                { label: 'Disposición', field: 'disposicionMon'},
                { label: 'Fecha Solicitud', field: 'fsolicitudMon'}
            ],

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO SOLICITUD',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
                       
            /**************************** entorno ****************************/
            montos: [],
            yconceptos: [],
            ysolicitud: [],
            ypersonas: [],
            titulo: "",
            value: '',
            maxChar: 20,
  
            plantilla: {
                idMonto: 0,
                Persona_idPersona: 0,
                Dato_idDato: "COMPRA",
                totalMon: 0,
                disposicionMon: "DEPOSITO",
                detalleMon: "",
                fechaMon: "",
                estadoMon: "SOLICITADO",
            },
            monto: {
                idMonto: 0,
                Persona_idPersona: 0,
                Dato_idDato: "COMPRA",
                totalMon: 0,
                disposicionMon: "DEPOSITO",
                detalleMon: "",
                fechaMon: "",
                estadoMon: "SOLICITADO",
            },
            userData: JSON.parse(localStorage.getItem('userData')),
            ver: "PENDIENTES",

        /**** mini tabla *******/
            yconcepto: {},
            ypersona: [],
            ymonto:0,
            ytipo: "DEPOSITO",
            yforma: "",
            ydetalle: "",
            yfecha: "",
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
            this.ysolicitud.length = 0;
            this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVA SOLICITUD";
            this.solicitud = Object.assign({}, this.plantilla);
        },
        AgregarTrabajador()
        {
            //if(this.ypersona == null || this.ypersona == {} || Object.keys(this.ypersona).length === 0)
            if(this.ypersona == null || this.ypersona == [] || this.ypersona.length === 0)
            {
                this.Toast(true,'danger','Agregar Trabajador','Seleccione un Trabajador');
                return;
            }
            if(this.yconcepto == null || this.yconcepto == "")
            {
                this.Toast(true, 'warning','Agregar Concepto','Ingrese un concepto');
                return;
            }
            if(this.ymonto == null || this.ymonto == 0)
            {
                this.Toast(true, 'warning','Agregar Monto','Ingrese un monto');
                return;
            }
            if(this.ytipo == null || this.ytipo == "")
            {
                this.Toast(true, 'warning','Agregar Tipo','Ingrese un Tipo');
                return;
            }


            for (var i = 0; i < this.ypersona.length; i++)
            {
                var usolicitud = {
                    idPersona: this.ypersona[i].idPersona,
                    trabajador: this.ypersona[i].trabajadorPer,
                    concepto: this.yconcepto.valorDat,
                    monto: this.ymonto,
                    tipo: this.ytipo,
                    detalle: this.ydetalle,
                    fecha: this.yfecha,
                    idDato: this.yconcepto.idDato,
                };

                this.ysolicitud.push(usolicitud);
            }

            

            /*var encontrado = this.ysolicitud.filter(function (tpersona)
                {
                    return (tpersona.id == usolicitud.id);
                },this);*/

          
            var fecha = new Date();
            var dia = fecha.getDate();
            if(dia < 10)
                dia = "0"+dia;
            var mes = fecha.getMonth()+1;
            if(mes < 10)
                mes = "0"+mes;

            //if(encontrado.length == 0){
               
                this.ypersona = [];
                this.yconcepto = {};
                this.yforma = "";
                this.ymonto = 0;
                this.ytipo = "DEPOSITO";
                this.ydetalle = "";
                this.yfecha = fecha.getFullYear() + "-" + mes+ "-" + dia;
             /*//   }
           // else
            {
                this.Toast(true,'warning','Agregar Persona','La Persona ya fue ingresada');
            }*/
            this.Guardar();
        },
        EliminarSolicitud(prm_indice)
        {
            this.ysolicitud.splice(prm_indice, 1);
        },
        Guardar()
        {
            this.showLoading = true;
            var jsonMonto = JSON.stringify(this.ysolicitud);
            if(this.ysolicitud.length == 0)
            {
                this.Toast(true,'warning','Solicitud','Debe ingresar al menos un registro a la cola. ');
                this.showLoading = false;
                return;
            }

            this.$http.post('/LiberAPP/Monto/Guardar/'+this.userData.id,
            {
                monto: jsonMonto,
            })
            .then(res => {
              this.Toast(true,'primary','Solicitud','Guardado Correctamente');
              this.showModal = false;
              this.showLoading = false;
              this.ysolicitud = [];
              this.Listar();
            })
            .catch(error => {
              this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
              this.showLoading = false;
            });
        },
        Eliminar(prm_fila)
        {
          this.showLoading = true;

          this.boxOne = ''
          this.$bvModal
            .msgBoxConfirm('Esta seguro de eliminar el registro?', {
              cancelVariant: 'outline-secondary',
            })
            .then(value => {
              this.boxOne = value
              if(this.boxOne === true) 
              {
                this.$http.put('/LiberAPP/Monto/Desactivar',
                {
                  idMonto : prm_fila,
                })
                .then(res => {
                  this.Toast(true,'primary','Solicitud','Solicitud eliminado Correctamente');
                  this.showModal = false;
                  this.showLoading = false;
                  this.Listar();
                })
                .catch(error => {
                  this.Toast(true,'danger','Solicutd','Error al eliminar la Solicitud: '+error);
                  this.showLoading = false;
                })
              }
              else
              {
                this.showLoading = false;
              }
            })
        },
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Monto/Usuario/SOLICITADO/'+this.userData.id)
            .then(res => {
                this.montos = res.data;
                this.showLoading = false;
                this.ver = "PENDIENTES";
            })
            .catch(error => {
                this.Toast(true,'danger','Solicitud','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        ListarAnulado()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Monto/Usuario/ANULADO/'+this.userData.id)
            .then(res => {
                this.montos = res.data;
                this.showLoading = false;
                this.ver = "ANULADAS";
            })
            .catch(error => {
                this.Toast(true,'danger','Solicitud','Error al cargar los registros: '+error);
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
    created() 
    {

        var today = new Date();
        this.yfecha = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

        this.$http.get('/LiberAPP/Persona/Select')
            .then(res => {
                this.ypersonas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
                this.showLoading = false;
        });
        this.$http.get('/LiberAPP/Monto/Usuario/SOLICITADO/'+this.userData.id)
          .then(res => {
              this.montos = res.data;
          })
          .catch(error => {
              this.Toast(true,'danger','Cargando Datos','Error al cargar los registros: '+error);
              this.showLoading = false;
        });
        this.$http.get('/LiberAPP/Dato/Select/VIATICO/PERSONAL')
          .then(res => {
              this.yconceptos = res.data;
          })
          .catch(error => {
              this.Toast(true,'danger','Viatico','Error al cargar los registros: '+error);
              this.showLoading = false;
          });
    },  
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>

