<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Proveedor">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" v-model="yproveedor" :options="externos" style="flex: 1;" @input="Proveedor($event)"/>
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Desde">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="yfinicio" class="form-control" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hasta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="yffin" class="form-control" :config="{ minDate: yfinicio }" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Estado">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-select v-model="yestado" :options="estadoOrd" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Tipo de Orden">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-select v-model="ytipoOrden" :options="tipoOrd" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="6" xl="6">
                    <div class="demo-inline-spacing">
                        <b-button v-b-modal.modal-formulario variant="success">
                            <feather-icon icon="PlusIcon" class="mr-50"/>
                            <span class="align-middle">Orden Servicio</span>
                        </b-button>
                        <b-button variant="warning" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col> 
                <b-col md="6" xl="12">
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
            <br>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="orden" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'idOrdenc'">
                        <a :href="'/LiberAPP/Ordenc/Pdf/'+props.row.idOrdenc" target="_blank" class="btn btn-flat-warning btn-sm text-bold" v-if="props.row.idOrdenc != null">{{props.row.idOrdenc}}</a>
                    </span>
                    <span v-else-if="props.column.field =='estadoOrd'">
                        <b-badge variant="success">{{ props.row.estadoOrd }}</b-badge>
                    </span>
                    <span v-else-if="props.column.field =='tipoOrd'">
                        <b-badge variant="secondary">{{ props.row.tipoOrd }}</b-badge>
                    </span>
                    <span v-else-if="props.column.field =='totalOrd'">
                        {{ props.row.totalOrd.toFixed(2) }}
                    </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
                </template>
            </vue-good-table>
        </b-card>
        <!---------------------------------- modal -------------------------------->
        <b-modal
          id="modal-formulario" v-model="showModal"
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
                <b-col md="12" xl="4">
                    <b-form-group label="Proveedor">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" v-model="ordenc.Externo_idExterno" :options="externos" style="flex: 1;" @input="Proveedor($event)"/>
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="RUC">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="obj_proveedor.rucExt" readonly />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Dirección">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="obj_proveedor.direccionExt"  readonly />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="Tipo Moneda">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <!---<b-form-input v-model="obj_proveedor.moneda" />-->
                            <v-select label="valorDat" v-model="ordenc.Moneda_idDato" :reduce="moneda => moneda.idDato" :options="tipoMoneda" style="flex: 1;" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="Tipo de Orden">
                        <b-button v-if="ordenc.tipoOrd == 'SERVICIO'" variant="success" size="sm">SERVICIO</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="Forma de Pago">
                            <b-button v-if="ordenc.pagoOrd == 'CONTADO'" variant="primary" size="sm" @click="ordenc.pagoOrd='CREDITO'; Credito( ordenc.pagoOrd )">CONTADO</b-button>
                            <b-button v-if="ordenc.pagoOrd == 'CREDITO'" variant="secondary" size="sm" @click="ordenc.pagoOrd='CUOTA'; Credito( ordenc.pagoOrd )">CREDITO</b-button>
                            <b-button v-if="ordenc.pagoOrd == 'CUOTA'" variant="success" size="sm" @click="ordenc.pagoOrd='CONTADO'; Credito( ordenc.pagoOrd )">CUOTA</b-button>
                     </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="FECHA EMISION">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <flat-pickr class="form-control" v-model="ordenc.femisionOrd" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="Tipo de Costo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <v-select label="valorDat" style="flex: 1;" v-model="ordenc.Inversion_idDato" :reduce="asignacion => asignacion.idDato" :options="asignacion" />
                            <!--<b-button v-if="ordenc.Inversion_idDato == ''" variant="secondary" size="sm" @click="ordenc.Inversion_idDato='OPERATIVO';">ADMINISTRATIVO</b-button>
                            <b-button v-if="ordenc.Inversion_idDato == 'OPERATIVO'" variant="success" size="sm" @click="ordenc.Inversion_idDato='';">OPERATIVO</b-button>-->
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Centro de Costo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <v-select label="nombreAre" v-model="ordenc.Area_idArea" :reduce="areas => areas.idArea" :options="areas" style="flex: 1;"/>
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="Subtotal">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ordenc.subtotalOrd" readonly/>
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="% I.G.V">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="obj_proveedor.igv" @input="CalcularIgv" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="2">
                    <b-form-group label="I.G.V">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ordenc.igvOrd" readonly />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Total">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ordenc.totalOrd" @input="CalcularIgv" readonly />
                        </b-input-group>
                     </b-form-group>
                </b-col>
            
                <b-col md="12" xl="3" v-if="estadoCredito == true">
                    <b-form-group label="FECHA PAGO">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <flat-pickr class="form-control" v-model="ordenc.fpagoOrd" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="3" v-if="estadoCredito == true">
                    <b-form-group label="ADELANTO">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ordenc.adelantoOrd" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Observacion">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="ordenc.observacionOrd" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="FileTextIcon" />
            <span>Detalle Orden</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row>
                <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse table-secondary text-center">
                    <thead class="thead-dark"> 
                        <tr>
                            <th style="width: 50px;">NRO</th>
                            <th style="min-width: 400px;">MATERIAL / SERVICIO</th>
                            <th style="width: 50px;">CANTIDAD</th>
                            <th style="width: 200px;">PRECIO</th>
                            <th style="min-width: 300px;">APLICADO A</th>
                            <th style="min-width: 300px;">OBSERVACION</th>
                            <th style="width: 50px;">ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(udetalle,indice) in ordend">
                            <td>{{ indice+1 }}</td>
                            <!--<td>{{ udetalle.nombreMat }}</td>-->    
                            <td><v-select label="nombreMat" v-model="udetalle.Material_idMaterial" :reduce="material => material.idMaterial" :options="material" style="flex: 1;" /></td>
                            <td><cleave v-model="udetalle.cantidadOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" /></td>
                            <!--<td><cleave v-model="udetalle.precioOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/></td>-->
                            <td><cleave v-model="udetalle.precioOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/></td>
                            <!---<td>{{ udetalle.nombreEnt }}</td>-->
                            <td> <v-select label="nombreEnt" v-model="udetalle.Entidad_idEntidad" :reduce="entidad => entidad.idEntidad" :options="entidades" style="flex: 1;" /></td>
                            <td><b-form-input v-model="udetalle.observacionOrd" class="form-cotrol" :raw="false" ></b-form-input></td>
                            <td>
                                <b-button variant="danger" class="btn-icon rounded-circle" @click="EliminarDetalle(indice)">
                                    <feather-icon icon="TrashIcon"/>
                                </b-button>
                            </td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>
                                <v-select label="nombreMat" v-model="yMaterial" :options="material" style="flex: 1;" />
                            </td>
                            <td>
                                <!--<b-form-input v-model="ycantidadOrd" />-->
                                <cleave v-model="ycantidadOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                            </td>
                            <td>
                                <cleave v-model="yprecioOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                            </td>
                            <td>
                                <v-select label="nombreEnt" v-model="yEntidad_idEntidad" :options="entidades" style="flex: 1;" />
                            </td>
                            <td>
                                <b-form-input v-model="yobservacionOrd" />
                            </td>
                            <td>
                                <b-button variant="warning" class="btn-icon rounded-circle" @click="AgregarDetalle()">
                                    <feather-icon icon="PlusIcon"/>
                                </b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="info" size="sm" @click="Recalcular" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="RefreshCwIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Recalcular</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Guardar" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
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
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab
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
        BCard,
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
        BCardText,
        BOverlay,
        vSelect,
        BFormCheckbox,
        BCardBody,
        FormWizard,
        TabContent,
        BInputGroup,
        BInputGroupPrepend,
        BTabs,
        BTab,
        Cleave,
        flatPickr,
        BFormTextarea
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
            userData: JSON.parse(localStorage.getItem('userData')), //Datos del usuario Local,

            /**************************** tabla ****************************/
            tcolumnas: [
                { label: 'ID', field: 'idOrdenc' },
                { label: 'Fecha Emision', field: 'femisionOrd' },
                { label: 'Estado', field: 'estadoOrd' },
                { label: 'Solicitado Por', field: 'nombreUsu' },
                { label: 'Proveedor', field: 'nombreExt' },
                { label: 'Tipo Orden', field: 'tipoOrd' },
                { label: 'Total', field: 'totalOrd' },
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'ORDEN DE SERVICIO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,

            /**************************** tabla ****************************/
            formapago: [
                { value:'CREDITO',  text:'CREDITO'},
                { value:'CONTADO',  text:'CONTADO'},
                { value:'CUOTA',  text:'CUOTA'},
            ],
            estadoOrd: [
                { value:'SOLICITADO', text:'SOLICITADO'},
                { value:'APROBADO', text:'APROBADO'},
                { value:'APLICADO', text:'APLICADO'},
                { value:'FACTURADO', text:'FACTURADO'},
                { value:'CERRADO', text:'CERRADO'},
                { value:'ANULADO', text:'ANULADO'},
            ],
            tipoOrd: [ 
                { value:'SERVICIO', text:'SERVICIO' },
            ],
            /**************************** entorno ****************************/      
            externos:[],
            areas:[],
            asignacion:[],
            material:[],
            entidades:[],
            tipoMoneda:[],
            estadoCredito: false,
            orden:[],
            ordenc: {
                idOrdenc: 0, 
                femisionOrd: "",
                Externo_idExterno: 0,
                totalOrd: 0, 
                tipoOrd: "SERVICIO", 
                observacionOrd: "", 
                subtotalOrd: 0, 
                igvOrd: 0, 
                detraccionOrd: 0, 
                fpagoOrd: "", 
                adelantoOrd: 0, 
                pagoOrd: "CONTADO", 
                Moneda_idDato:"",
                Inversion_idDato:"",
                Area_idArea: 0, 
                Usuario_idUsuario: 0,
            },
            
            yMaterial: 0, 
            ycantidadOrd: 0, 
            yprecioOrd: 0, 
            yobservacionOrd: "", 
            yEntidad_idEntidad: 0,

            ordend:[],
            obj_proveedor: { 
                id: "",
                direccionExt: "", 
                rucExt: "",
                moneda: "", 
                igv: "",
            }, 
            yproveedor: "", 
            yfinicio: "", 
            yffin: "", 
            yestado: "", 
            ytipoOrden: "",

            yproveedor: { idExterno: '0', nombreExt:'TODOS' },
            yestado: 'SOLICITADO',
            ytipoOrden: 'SERVICIO',
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
        Proveedor( event )
        {
            this.obj_proveedor.direccionExt = event.direccionExt 
            this.obj_proveedor.rucExt = event.rucExt
            this.obj_proveedor.igv = event.igv 
            this.ordenc.Moneda_idDato = event.Moneda_idDato
            this.obj_proveedor.id = event.idExterno;
        }, 
        Credito( event )
        {
            if ( event == 'CREDITO' || event == 'CUOTA')
            {
                this.estadoCredito = true
            } else { 
                this.estadoCredito = false
            }
        },
        CalcularIgv()
        {
            this.ordenc.subtotalOrd = ( this.ordenc.totalOrd / this.obj_proveedor.igv ).toFixed(2)
            this.ordenc.igvOrd = ( this.ordenc.totalOrd - this.ordenc.subtotalOrd ).toFixed(2)
        },
        Recalcular()
        {
            this.showLoading = true
            this.ordenc.totalOrd = 0
            var total = 0
            for ( let i = 0; i < this.ordend.length; i++)
            {
                this.ordenc.totalOrd+=parseFloat(this.ordend[i]["precioOrd"]) * parseFloat( this.ordend[i]["cantidadOrd"])
            }
            //1,324.00 format( output ) total = new Intl.NumberFormat('es-MX').format( this.ordenc.totalOrd )
            total = ( this.ordenc.totalOrd ).toFixed(2)
            this.ordenc.totalOrd = total
            this.CalcularIgv()
            setTimeout(() => {
                this.showLoading = false
            }, 900);
        },
        AgregarDetalle()
        {
            if ( this.yMaterial == null || this.yMaterial == "") 
            {
                this.Toast(true,'warning','Material','Seleccione el Material');
                return;
            }
            if ( this.ycantidadOrd == null || this.ycantidadOrd == "" )
            {
                this.Toast(true,'warning','Cantidad','Ingrese una Cantidad');
                return;
            } 
            if ( this.yprecioOrd == null || this.yprecioOrd == "") 
            {
                this.Toast(true,'warning','Precio','Ingrese un Precio');
                return;
            }
            if ( this.yEntidad_idEntidad == null || this.yEntidad_idEntidad == "") 
            {
                this.Toast(true,'warning','Aplicar','Seleccione Aplicar a');
                return;
            }

            var uordend = {
                Material_idMaterial: this.yMaterial.idMaterial,
                nombreMat: this.yMaterial.nombreMat, 
                cantidadOrd: this.ycantidadOrd, 
                precioOrd: this.yprecioOrd, 
                Entidad_idEntidad: this.yEntidad_idEntidad.idEntidad,
                nombreEnt: this.yEntidad_idEntidad.nombreEnt,
                observacionOrd: this.yobservacionOrd, 
            }
            var total = 0
            this.ordend.push(uordend)
            this.ordenc.totalOrd = 0
            for ( let i = 0; i < this.ordend.length; i++)
            {
                this.ordenc.totalOrd+=parseFloat(this.ordend[i]["precioOrd"]) * parseFloat( this.ordend[i]["cantidadOrd"])
            }
            total = ( this.ordenc.totalOrd ).toFixed(2)
            this.ordenc.totalOrd = total
            this.CalcularIgv()
            this.yMaterial = ""
            this.ycantidadOrd = "" 
            this.yprecioOrd = "" 
            this.yEntidad_idEntidad = ""
            this.yobservacionOrd = ""
        },
        EliminarDetalle( prm_indice )
        {
            this.ordend.splice( prm_indice, 1 )
            this.ordenc.totalOrd = 0
            for ( let i = 0; i < this.ordend.length; i++)
            {
                this.ordenc.totalOrd+=parseFloat(this.ordend[i]["precioOrd"]) * parseFloat( this.ordend[i]["cantidadOrd"])
            }
            this.CalcularIgv()
        },
        Listar()
        {
            this.showLoading = true; 
            this.$http.get('/LiberAPP/Ordenc/Listar/' + this.yproveedor.idExterno + '/' + this.yfinicio + '/' + this.yffin + '/' + this.yestado + '/' + this.ytipoOrden).then( res => {
                this.orden = res.data
                this.showLoading = false
            }).catch( error => {
                this.Toast(true,'danger','Orden','Error al cargar los registros: ' + error)
                this.showLoading = false
            })
        },
        Guardar()
        {
            this.ordenc.Usuario_idUsuario = this.userData.id
            this.ordenc.Externo_idExterno = this.obj_proveedor.id
            
            if ( this.ordenc.Externo_idExterno == null || this.ordenc.Externo_idExterno == "") 
            {
                this.Toast(true,'warning','Proveedor','Seleccione un Proveedor');
                return;
            }
            if ( this.ordenc.Moneda_idDato == null || this.ordenc.Moneda_idDato == "")
            {
                this.Toast(true,'warning','Moneda','Seleccione tipo Moneda');
                return;
            }
            if ( this.ordenc.femisionOrd == null || this.ordenc.femisionOrd == "")
            {
                this.Toast(true,'warning','Fecha Emisión','Seleccione Fecha de Emisión');
                return;
            }
            if ( this.ordenc.Inversion_idDato == null || this.ordenc.Inversion_idDato == "")
            {
                this.Toast(true,'warning','Costo','Seleccione Centro de Costo')
                return;
            }
            if ( this.ordenc.Area_idArea == null || this.ordenc.Area_idArea == "")
            {
                this.Toast(true,'warning','Area','Seleccione Area');
                return;
            }
            if ( this.obj_proveedor.igv == null || this.obj_proveedor.igv == "")
            {
                this.Toast(true,'warning','IGV','Ingrese %I.G.V.');
                return;
            }

            this.showLoading = true; 

            var jsonOrdenc = JSON.stringify(this.ordenc)
            var jsonOrdend = JSON.stringify(this.ordend)

            this.$http.post('/LiberAPP/Ordenc/GuardarOrden', 
            {
                ordenc: jsonOrdenc, 
                ordend: jsonOrdend
            }).then( res => { 
                this.Toast(true,'success','Agregar Orden','Guardado Correctamente')
                this.showModal = false
                this.showLoading = false 
                this.ordenc = {
                    idOrdenc: 0, 
                    femisionOrd: "",
                    Externo_idExterno: 0,
                    totalOrd: 0, 
                    tipoOrd: "SERVICIO", 
                    observacionOrd: "", 
                    subtotalOrd: 0, 
                    igvOrd: 0, 
                    detraccionOrd: 0, 
                    fpagoOrd: "", 
                    adelantoOrd: 0, 
                    pagoOrd: "", 
                    Moneda_idDato:"",
                    Inversion_idDato:"",
                    Area_idArea: 0, 
                    Usuario_idUsuario: 0,
                },
                this.ordend = []
                this.obj_proveedor = []
                var orden = res.data
                window.open('/LiberAPP/Ordenc/Pdf/'+orden, '_blank');
            }).catch( error => { 
                this.Toast(true,'danger','Agregar Orden','Error al guardar el registro: ' + error)
                this.showLoading = false
            })
        }
    },
    computed: {
        statusVariant() {
            const statusColor = {
                /* eslint-disable key-spacing */
                Current      : 'light-primary',
                Professional : 'light-success',
                Rejected     : 'light-danger',
                Resigned     : 'light-warning',
                Applied      : 'light-info',
                /* eslint-enable key-spacing */
            }
            return status => statusColor[status]
        },
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

        const fecha = new Date()
        var day = fecha.getDate()
        var month = fecha.getMonth() + 1
        var year = fecha.getFullYear()

        this.yfinicio = year+'-'+month+'-01'
        this.yffin = year+'-'+month+'-'+day
        this.Listar()
        this.ordenc.Moneda_idDato = { idDato: 300, valorDat: "SOLES" }
        
        this.$http.get('/LiberAPP/Area/Select').then(res => {
            this.areas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Area','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Externo/Select').then(res=> {
            this.externos = res.data
            this.externos.unshift({idExterno:'0', nombreExt:'TODOS'})
        }).catch(error => {
            this.Toast(true,'danger','Externos','Error al cargar los registros: ' + error)
        })

        this.$http.get('/LiberAPP/Dato/Select/ASIGNACION/LOGISTICA').then(res=> {
            this.asignacion = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Material/Listar').then(res => { 
              this.material = res.data;
        }).catch( error => { 
            this.Toast(true,'danger','Material','Error al cargar los registros: '+error);
            this.showLoading = false;
        })

        this.$http.get('/LiberAPP/Entidad/Listar').then(res => {
            this.entidades = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Entidad_Entidad','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
        
        this.$http.get('/LiberAPP/Dato/Select/MONEDA/LOGISTICA').then(res=> {
            this.tipoMoneda = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Tipo Moneda','Error al cargar los registros: ' + error);
        })
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>