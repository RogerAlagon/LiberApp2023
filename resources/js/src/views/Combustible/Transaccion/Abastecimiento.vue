<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="4" xl="3">
                    <b-form-group label="Desde">
                        <flat-pickr v-model="desde" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Hasta">
                        <flat-pickr v-model="hasta" class="form-control"/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Tabla de Consumo">
                        <v-select v-model="tablas" :options="consumos" :reduce="consumo => consumo.idConsumo" label="nombreCon" style="flex: 1;" multiple/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="6" xl="6">
                    <!---------------------------------- nuevo -------------------------------->
                    <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">Nuevo Abastecimiento</span>
                    </b-button>
                </b-col>
                <b-col md="6" xl="6">
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
                :columns="tcolumnas" :rows="abastecimientos" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'" class="d-inline-flex">
                        <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.row)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                        <!--<b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle ml-1" @click="Detalle(props.formattedRow)">
                            <feather-icon icon="SearchIcon"/>
                        </b-button>-->
                    </span>
                    <!-- Column: Common -->
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
                <b-col md="12" xl="3">
                    <b-form-group label="ID">
                        <b-form-input v-model="abastecimientoc.idAbastecimiento" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="Fecha de Abastecimiento">
                        <flat-pickr v-model="abastecimientoc.fechaAba" class="form-control" />
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Tabla de Consumo">
                        <v-select label="nombreCon" style="flex: 1;" v-model="yconsumo" :options="consumos" @input="Consumo()"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Intervalo">
                        <v-select label="nombreInt" style="flex: 1;" v-model="yintervalo" :options="yintervalos" @input="abastecimientoc.Intervalo_idIntervalo = yintervalo.idIntervalo"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grifo">
                        <v-select label="nombreGri" style="flex: 1;" v-model="ygrifo" :options="grifos" @input="abastecimientoc.Grifo_idGrifo = ygrifo.idGrifo"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cuenta">
                        <b-form-input v-model="abastecimientoc.cuenta" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cliente">
                        <b-form-input v-model="abastecimientoc.externo" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Unidad">
                        <b-button variant="success" size="sm" @click="abastecimientoc.unidad = 'VACIO'" v-if="abastecimientoc.unidad == 'CARGADO'" style="margin-top: 2px;">Cargada</b-button>
                        <b-button variant="danger" size="sm" @click="abastecimientoc.unidad = 'COMPLETO'" v-else-if="abastecimientoc.unidad == 'VACIO'" style="margin-top: 2px;">Vacia</b-button>
                        <b-button variant="warning" size="sm" @click="abastecimientoc.unidad = 'CARGADO'" v-else-if="abastecimientoc.unidad == 'COMPLETO'" style="margin-top: 2px;">Mixta</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="2">
                    <b-form-group label="Motivo de Abastecimiento">
                        <b-button variant="primary" size="sm" @click="abastecimientoc.motivo = 'MANTENIMIENTO'" v-if="abastecimientoc.motivo == 'OPERACION'" style="margin-top: 2px;">Operación</b-button>
                        <b-button variant="dark" size="sm" @click="abastecimientoc.motivo = 'LOGISTICA'" v-else-if="abastecimientoc.motivo == 'MANTENIMIENTO'" style="margin-top: 2px;">Mantenimiento</b-button>
                        <b-button variant="dark" size="sm" @click="abastecimientoc.motivo = 'ADMINISTRATIVO'" v-else-if="abastecimientoc.motivo == 'LOGISTICA'" style="margin-top: 2px;">Logistica</b-button>
                        <b-button variant="dark" size="sm" @click="abastecimientoc.motivo = 'OPERACION'" v-else-if="abastecimientoc.motivo == 'ADMINISTRATIVO'" style="margin-top: 2px;">Administrativo</b-button>
                    </b-form-group>
                </b-col>
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="TruckIcon" />
            <span>Detalle Abastecimiento</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row><!-- Detalle de Abastecimiento -->
                <b-col md="12" xl="4">
                    <b-form-group>
                        <label>{{ 'Vehiculo - ' + yVehiculo.modeloVeh }}</label>
                        <v-select label="placaVeh" v-model="yVehiculo" style="flex: 1;" :options="vehiculos" @input="ultimoKM()"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Operador">
                        <v-select label="trabajadorPer" v-model="yOperador" style="flex: 1;" :options="personas" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Operador 2">
                        <v-select label="trabajadorPer" v-model="yReten" style="flex: 1;" :options="personas" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" xl="2">
                    <!--<b-form-group label="Tipo">
                        <b-form-select v-model="ytipo" :options="tipo"/>
                    </b-form-group>-->
                    <b-form-group label="Tipo de Abastecimiento">
                        <b-button variant="primary" size="sm" @click="yTipo = 'RELLENO'" v-if="yTipo == 'FULL'" style="margin-top: 2px;">Full</b-button>
                        <b-button variant="warning" size="sm" @click="yTipo = 'FULL'" v-else-if="yTipo == 'RELLENO'" style="margin-top: 2px;">Relleno</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Galonaje">
                        <cleave class="form-control" v-model="yGalon" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <label>{{ 'Kilometraje [ ' + this.yKm + ' ]' }}</label>
                    <b-form-group>
                        <cleave class="form-control" v-model="yKilometraje" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                    </b-form-group>
                </b-col>
                    <datalist id="carretas">
                        <option value="C1M-996 - PESADA"></option>
                        <option value="C1M-997 - PESADA"></option>
                        <option value="C2D-976 - PESADA"></option>
                        <option value="C2P-989 - PESADA"></option>
                        <option value="C2P-971 - PESADA"></option>
                        <option value="C2R-979 - PESADA"></option>
                        <option value="C2R-978 - PESADA"></option>
                        <option value="C5I-993 - PESADA"></option>
                        <option value="C6E-980 - PESADA"></option>

                        <option value="C6M-978 - LIVIANA"></option>
                        <option value="C6Z-998 - LIVIANA"></option>
                        <option value="C6Z-999 - LIVIANA"></option>
                        <option value="C6Z-997 - LIVIANA"></option>
                        <option value="C7A-970 - LIVIANA"></option>
                        <option value="C0I-972 - LIVIANA"></option>
                        <option value="C0I-973 - LIVIANA"></option>
                    </datalist>
                    <b-col md="3" xl="2">
                    <b-form-group label="Carreta CARGADA">
                        <b-form-input v-model="yCarretaReg" list="carretas"/>
                    </b-form-group>   

                </b-col>
                <b-col md="3" xl="2">
                    <b-form-group label="Carreta VACIA">
                        <b-form-input v-model="yCarretaOp" list="carretas"/>
                    </b-form-group>                     
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Observacion">
                        <b-form-textarea v-model="yObservacion" class="form-control" placeholder="Ingrese Observación" rows="2"/>
                    </b-form-group>                     
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" xl="4" class="align-middle text-center">
                    
                </b-col>
                <b-col md="4" xl="4" class="align-middle text-center">
                    <b-button variant="primary" @click="AgregarDetalleAba(true)" size="sm">
                        <feather-icon icon="ArrowDownIcon" /> Agregar a la Cola
                    </b-button>
                    <br>
                </b-col>
                <b-col md="4" xl="4" class="align-middle text-right">
                    <b-button variant="warning" @click="AgregarDetalleAba(false)" size="sm">
                        <feather-icon icon="ArrowDownIcon" /> Omitir Duplicados
                    </b-button>
                    <br>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mb-2">
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th></th>
                                <th>NRO</th>
                                <th>Vehiculo</th>
                                <th>Operador</th>
                                <th>Operador 2</th>
                                <th>Tipo</th>
                                <th>Galonaje</th>
                                <th>Km. Ant</th>
                                <th>Km. Act</th>
                                <th>Dif. Km.</th>
                                <th>Rendimiento</th>
                                <th>Observacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(udetalle,indice) in abastecimientod" v-if="udetalle.placaVeh != 'DELETE'">
                                <td>
                                    <b-button v-if="!boton" variant="danger" class="btn-icon rounded-circle" @click="EliminarDetalle(indice)">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                    <b-button v-else variant="danger" class="btn-icon rounded-circle" @click="BajaDetalle(indice)">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                </td>
                                <td>{{ indice+1 }}</td>
                                <td>{{ udetalle.placaVeh }}</td>
                                <td>{{ udetalle.trabajadorPer }}</td>
                                <td>{{ udetalle.retenPer }}</td>
                                <td>
                                    <!--{{ udetalle.tipoAba }}-->
                                    <b-button variant="primary" size="sm" @click="udetalle.tipoAba = 'RELLENO'" v-if="udetalle.tipoAba == 'FULL'">Full</b-button>
                                    <b-button variant="warning" size="sm" @click="udetalle.tipoAba = 'FULL'" v-else-if="udetalle.tipoAba == 'RELLENO'">Relleno</b-button>
                                </td>
                                <td><cleave v-model="udetalle.galonesAba" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" @input="udetalle.rendimiento = (udetalle.diferenciakmAba / udetalle.galonesAba).toFixed(2)"/></td>
                                <td>{{ udetalle.kmAnt }}</td>
                                <td><cleave v-model="udetalle.kilometrajeKil" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none' }" @input="udetalle.diferenciakmAba = udetalle.kilometrajeKil - udetalle.kmAnt; udetalle.rendimiento = (udetalle.diferenciakmAba / udetalle.galonesAba).toFixed(2)"/></td>
                                <td>{{ udetalle.diferenciakmAba }}</td>
                                <td>{{ udetalle.rendimiento }}</td>
                                <td><b-form-textarea v-model="udetalle.observacionAba" class="form-control" :raw="false" placeholder="Ingrese Observación" rows="1"/></td>
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
                        <b-form-input v-model="abastecimientoc.idAbastecimiento" readonly/>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Fecha Abastecimiento">
                        <b-form-input v-model="abastecimientoc.fechaAba" readonly/>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grifo">
                        <v-select label="nombreGri" style="flex: 1;" v-model="abastecimientoc.Grifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cuenta">
                        <v-select label="nombreCue" style="flex: 1;" v-model="abastecimientoc.idCuenta" :reduce="cuentas => cuentas.idCuenta" :options="cuentas" disabled />
                    </b-form-group>
                </b-col>
            </b-row>
            
            <h5 class="text-primary">
                <feather-icon icon="TruckIcon" />
                <span>Detalle </span>
            </h5>
            <hr class="invoice-spacing">
            <vue-good-table
                :columns="tcolumnas2" :rows="abastecimientod2" :rtl="direction"
            >
            </vue-good-table>
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
                /*{ label: '', field: 'acciones'},
                { label: 'ID', field: 'idAbastecimiento'},
                { label:'ID GRIFO', field: 'Grifo_idGrifo', hidden:true },
                { label:'idCuenta', field: 'idCuenta', hidden:true },
                { label:'idRuta', field: 'Ruta_idRuta', hidden:true },
                { label: 'Operacion', field: 'nombreCue'},
                { label: 'Fecha Vale', field: 'fechaAba'},
                { label: 'Registro', field: 'fecharegAba'},
                { label: 'Estado', field: 'estadoAba'},
                { label: 'Grifo', field: 'nombreGri'},
                { label: 'Usuario', field: 'nombreUsu'},
                { label: 'Cliente', field: 'nombreExt'},
                { label: 'Externo_idExterno', field: 'Externo_idExterno', hidden:true },*/
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idAbastecimiento'},
                //{ label: 'Vehiculo', field: 'placaVeh'},
                { label: 'Fecha Abas.', field: 'fechaAba'},
                { label: 'Fecha Ingreso', field: 'fecharegAba'},
                { label: 'Tabla Consumo', field: 'nombreCon'},
                { label: 'Intervalo', field: 'nombreInt'},
                /*{ label: 'Cuenta', field: 'cuenta'},*/
                { label: 'Grifo', field: 'nombreGri'},
                { label: 'Proveedor', field: 'empresaGri'},
                //{ label: 'Usuario', field: 'nombreUsu'},
            ],

            tcolumnas2: [
                { label:'ID', field:'idAbastecimientod', hidden:true, }, 
                { label:'Placa', field:'placaVeh'},
                { label:'Operador', field:'trabajadorPer'},
                { label:'Operador 2', field:'retenPer'},
                { label:'Tipo', field:'tipoAba'}, 
                { label:'Galones', field:'galonesAba'},
                { label:'ID abs', field:'Abastecimientoc_idAbastecimiento', hidden:true },
                { label:'Kilometraje', field:'kilometrajeKil'}, 
                /*{ label:'Rendimiento', field:'rendimientoAba' },
                { label:'Diferencia km', field:'diferenciakmAba' },*/
                { label:'Placa Carreta', field:'carretaAba'},
                /*{ label:'Estado Carreta', field:'cargadoAba'},*/
                { label:'Carreta Alterna', field:'carretaopAba'},
                { label:'Observación', field:'observacionAba'},
                
            ],

            estados: [

                { value:'CARGADO', text:'CARGADO' },
                { value:'VACIO', text:'VACIO' },
                { value:'COMPLETO', text:'COMPLETO' },
            ],
            orden: [
                { value:'ASC', text:'RECIENTE'}, 
                { value:'DESC', text:'ANTIGUO'}, 
            ],

            motivo: [
                { value:'ADMINISTRACION', text:'ADMINISTRACION'},
                { value:'OPERACION', text:'OPERACION'},
                { value:'MANTENIMIENTO', text:'MANTENIMIENTO'},
                { value:'LOGISTICA', text:'LOGISTICA'}
            ], 
            tipo: [
                { value:'RELLENO', text:'RELLENO'}, 
                { value:'FULL', text:'FULL'}, 
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
            grifos: [],
            cuentas: [],
            vehiculos: [],
            personas: [],
            externos:[],
            rutas:[],
            intervalos: [],
            consumos: [],
            externo: "",
            cuenta: "",
            ordenID:'',
            abastecimientosc:[],
            abastecimientoc: {
                idAbastecimiento: "", 
                fechaAba: "", 
                Grifo_idGrifo: "", 
                estadoAba: "", 
                Realizado_idUsuario: "", 
                idCuenta: "", 
                Externo_idExterno:"",
                Ruta_idDato:"",
            }, 
            abastecimientos: [],
            abastecimientod: [],
            abastecimientod2: [],
            rutas: [],

            //minitabla 
            yVehiculo: "", 
            yOperador: "",
            yReten: "",
            yGalon: "",
            yKilometraje:"",
            yTabla:"",
            yExceso:"",
            yRuta:"", 
            yObservacion:"",
            yKmAnt:"",
            yKmUlt:"",
            yCarreta: "", 
            yCarretaEst: "",
            yCarretaOp: "",
            yCarretaReg: "",
            yKm:"0",
            yF:"0",
            ymotivo:"", 
            yTipo:"FULL",
            yintervalo: {},
            yconsumo: {},
            ygrifo: {},
            yintervalos: [],
            desde: "",
            hasta: "",
            tablas: [],
        }
    }, 
    methods : {
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
        /*Detalle(prm_detalle)
        {
            this.headerBgVariantD = 'secondary'; 
            this.headerTitleVariantD = "VER DETALLE"
            this.boton = true; 
            this.abastecimientoc = prm
            _detalle;
            this.abastecimientoc.Grifo_idGrifo = Number(this.abastecimientoc.Grifo_idGrifo); 
            this.abastecimientoc.idCuenta = Number(this.abastecimientoc.idCuenta); 
            this.abastecimientoc.Externo_idExterno = Number(this.abastecimientoc.Externo_idExterno);

            this.$http.get('/LiberAPP/Abastecimiento/Select/'+ prm_detalle.idAbastecimiento ).then(res=> {
                this.abastecimientod2 = res.data;
            })
            .catch(error=> {
                this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
            })
        },*/
        
        Nuevo()//Formulario de Nuevo Abastecimiento
        {
            this.headerTextVariant = 'success'; 
            this.headerTitleVariant = 'NUEVO ABASTECIMIENTO'; 
            this.boton = false; 
            this.abastecimientod = [];
        
            var today = new Date();
            var fecha = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            
            this.abastecimientoc = { 
                idAbastecimiento: '',
                fechaAba: fecha,
                Grifo_idGrifo: 0,
                estadoAba: "APLICADO",
                //fecharegAba: "",
                //Realizado_idUsuario: "",
                Cuenta_idCuenta: 0,
                Externo_idExterno: 0,
                operacionAba: 0,
                Ruta_idDato: 0,
                Consumo_idConsumo: 0,
                Intervalo_idIntervalo: 0,

                cuenta: "",
                externo: "",
                unidad: "COMPLETO",
                motivo: "OPERACION"
            };

            this.yconsumo = {};
            this.yintervalo = {};
            this.ygrifo = {};

            this.yTabla = "";
        },
        Editar(prm_abastecimiento)
        {
            this.headerTextVariant = 'primary'; 
            this.headerTitleVariant = 'EDITAR ABASTECIMIENTO';
            this.boton = true;
            this.abastecimientoc = prm_abastecimiento;
            /*this.abastecimientoc.Grifo_idGrifo = Number(this.abastecimientoc.Grifo_idGrifo); 
            this.abastecimientoc.idCuenta = Number(this.abastecimientoc.idCuenta);
            this.abastecimientoc.Externo_idExterno = Number(this.abastecimientoc.Externo_idExterno);*/

            //this.abastecimientoc.Intervalo_idIntervalo = 0;

            /*this.abastecimientoc = { 
                idAbastecimiento: '',
                fechaAba: fecha,
                Grifo_idGrifo: 0,
                estadoAba: "APLICADO",
                //fecharegAba: "",
                //Realizado_idUsuario: "",
                Cuenta_idCuenta: 0,
                Externo_idExterno: 0,
                operacionAba: 0,
                Ruta_idDato: 0,
                Consumo_idConsumo: 0,
                Intervalo_idIntervalo: 0,

                cuenta: "",
                externo: "",
                unidad: "COMPLETO",
                motivo: "OPERACION"
            };

            this.yconsumo = {};
            this.yintervalo = {};
            this.ygrifo = {};*/

            //Encontrando el registro de consumo del array
            var encontrado = this.consumos.filter(function (tconsumo)
            {
                return (tconsumo.idConsumo == prm_abastecimiento.Consumo_idConsumo)
            },this);

            if(encontrado.length == 0)
            {
                this.yconsumo = {};
                this.abastecimientoc.Consumo_idConsumo = null;
            }
            else
            {
                this.yconsumo = encontrado[0];

                this.abastecimientoc.cuenta = this.yconsumo.cuenta;
                this.abastecimientoc.externo = this.yconsumo.nombreExt; 
                this.abastecimientoc.Externo_idExterno = this.yconsumo.Externo_idExterno; 
                this.abastecimientoc.Consumo_idConsumo = this.yconsumo.idConsumo;
            }
            
            //agregando los intervalos segun la tabla de consumo
            var intervalos = [];
            for (let i = 0; i < this.intervalos.length; i++)
            {
                var uintervalo = this.intervalos[i];
                if(uintervalo.Consumo_idConsumo == this.yconsumo.idConsumo)
                {
                    intervalos.push(uintervalo);
                }
            }
            this.yintervalos = intervalos;

            //Encontrando el registro de intervalo del array
            encontrado = this.yintervalos.filter(function (tintervalo)
            {
                return (tintervalo.idIntervalo == prm_abastecimiento.Intervalo_idIntervalo)
            },this);

            if(encontrado.length == 0)
            {
                this.yintervalo = {};
                this.abastecimientoc.Intervalo_idIntervalo = null;
            }
            else
            {
                this.yintervalo = encontrado[0];
            }

            //Encontrando el registro de grifo del array
            encontrado = this.grifos.filter(function (tgrifo)
            {
                return (tgrifo.idGrifo == prm_abastecimiento.Grifo_idGrifo)
            },this);

            if(encontrado.Grifo_idGrifo == 0)
            {
                this.ygrifo = {};
                this.abastecimientoc.Grifo_idGrifo = null;
            }
            else
            {
                this.ygrifo = encontrado[0];
            }

            this.$http.get('/LiberAPP/Abastecimiento/Detalle/' + prm_abastecimiento.idAbastecimiento ).then(res=> {
                this.abastecimientod = res.data;
                this.abastecimientoc.unidad = this.abastecimientod[0].cargadoAba;
                this.abastecimientoc.motivo = this.abastecimientod[0].motivoAba;

                /*this.abastecimientoc = { 
                idAbastecimiento: '',
                fechaAba: fecha,
                Grifo_idGrifo: 0,
                estadoAba: "APLICADO",
                //fecharegAba: "",
                //Realizado_idUsuario: "",
                Cuenta_idCuenta: 0,
                Externo_idExterno: 0,
                operacionAba: 0,
                Ruta_idDato: 0,
                Consumo_idConsumo: 0,
                Intervalo_idIntervalo: 0,

                cuenta: "",
                externo: "",
                unidad: "COMPLETO",
                motivo: "OPERACION"*/
            //};*/

            })
            .catch(error=> {
                this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
            })
        },
        Consumo()//Seteo de Variables al Cambiar la Tabla de Consumo: Intervalo, Cliente, Cuenta
        {
            this.abastecimientoc.cuenta = this.yconsumo.cuenta;
            this.abastecimientoc.externo = this.yconsumo.nombreExt; 
            this.abastecimientoc.Externo_idExterno = this.yconsumo.Externo_idExterno; 
            this.abastecimientoc.Consumo_idConsumo = this.yconsumo.idConsumo;
            this.abastecimientoc.Intervalo_idIntervalo = 0;
            this.yintervalo = {};

            var intervalos = [];
            for (let i = 0; i < this.intervalos.length; i++)
            {
                var uintervalo = this.intervalos[i];
                if(uintervalo.Consumo_idConsumo == this.yconsumo.idConsumo)
                {
                    intervalos.push(uintervalo);
                }
            }
            this.yintervalos = intervalos;
        },
        Guardar()
        {
            this.showLoading = true; 
            this.abastecimientoc.Realizado_idUsuario = this.userData.id
            
            var jsonAbastecimientoc = JSON.stringify(this.abastecimientoc); 
            var jsonAbastecimientod = JSON.stringify(this.abastecimientod);

            this.$http.post('/LiberAPP/Abastecimiento/Guardar',
            {
                abastecimientoc: jsonAbastecimientoc,
                abastecimientod: jsonAbastecimientod
            })
            .then(res => {
                this.Toast(true,'success','Agregar Abastecimiento','Guardado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.abastecimientod = [];
                this.Listar();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Abastecimiento','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        Actualizar()
        {
            this.showLoading = true;
            //this.abastecimientod.Vehiculo_idVehiculo = this.abastecimientod.placaVeh.idVehiculo;
            var jsonAbastecimientoc = JSON.stringify(this.abastecimientoc);
            var jsonAbastecimientod = JSON.stringify(this.abastecimientod);
            //console.log('abastecimientod:: ', this.abastecimientod )
            this.$http.post('/LiberAPP/Abastecimiento/Actualizar', 
            {
                abastecimientoc: jsonAbastecimientoc,
                abastecimientod: jsonAbastecimientod,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Abastecimiento','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Listar();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Abastecimiento','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        },
        ultimoKM()//Calcular el ultimo kilometraje dependiendo del km del vehiculo ingresado
        {
            this.$http.get('/LiberAPP/Kilometraje/UltimoKilometraje/' + this.yVehiculo.idVehiculo ).then( res=> {
                //this.yKm = res.data.kilometrajeKil
                this.yKm = res.data.kilometrajeKil; 
                this.yFecha = res.data.fechaKil;
            }).catch( error => {
                this.yKm = 'sin kilometraje'
            })

            /*this.$http.get('/LiberAPP/Abastecimiento/Kilometraje/' + this.yVehiculo.idVehiculo ).then( res=> {
                //this.yKm = res.data.kilometrajeKil
                this.yKm = res.data[0].kilometrajeKil; 
                this.yF = res.data[0].fechaKil;
            }).catch( error => {
                this.yKm = 'sin kilometraje'
            })*/
        },
        AgregarDetalleAba(prm_validacion)//
        {
            /*var idVehiculo = this.yVehiculo.idVehiculo;
            this.$http.get('/LiberAPP/Abastecimiento/Kilometraje/' + this.yVehiculo.idVehiculo).then( res=> {
                //this.yKm = res.data.kilometrajeKil
                this.yKm = res.data[0].kilometrajeKil; 
                this.yF = res.data[0].fechaKil;
                console.log('Detalle:: ', this.yKm);
            }).catch( error => {
                this.yKm = 'sin kilometraje'
            })*/
            
            if ( this.yVehiculo == null || this.yVehiculo == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Seleccione un Vehiculo');
                return;
            }
            if ( this.yOperador == null || this.yOperador == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Seleccione un Operador');
                return;
            }    
            if ( this.yTipo == null || this.yTipo == "")
            {
                this.Toast(true,'warning','Seleccione Tipo','Seleccione un tipo');
                return;
            }
            if ( this.yGalon == null || this.yGalon == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Ingrese Galón'); 
                return;
            }
            if ( this.yGalon < 0 || this.yGalon > 230 )
            {
                this.Toast(true, 'warning','Detalle Galon','El galón debe estar entre 0 y 230'); 
                return;
            }
            if ( this.yKilometraje == null || this.yKilometraje == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Ingrese Kilometraje'); 
                return;
            }

            var diferencia = 0;
            var anterior = 0;
            if(this.yKm == "Sin Kilometraje")
            {
                anterior = 0;
                diferencia = this.yKilometraje;
            }
            else
            {
                anterior = this.yKm;
                diferencia = this.yKilometraje - parseInt(this.yKm);
            }

            var uabastecimientod = {
                    idAbastecimientod: 0,
                    placaVeh: this.yVehiculo.placaVeh,
                    trabajadorPer: this.yOperador.trabajadorPer,
                    retenPer: this.yReten.trabajadorPer, 
                    Vehiculo_idVehiculo: this.yVehiculo.idVehiculo,
                    Persona_idPersona: this.yOperador.idPersona,
                    Reten_idPersona: this.yReten.idPersona,
                    galonesAba: this.yGalon,
                    kilometrajeKil: this.yKilometraje,
                    //excesoAba: this.yExceso,
                    //tablaAba: this.yTabla,
                    //Ruta_idDato: this.yRuta, 
                    observacionAba: this.yObservacion,
                    kmAnt: anterior,
                    diferenciakmAba: diferencia,
                    rendimiento: 0,
                    //rendimientoAba: (( this.yKilometraje - this.yKm ) / this.yGalon).toFixed(4),
                    //fechaK: this.yF,
                    Acople_idVehiculo: this.yCarreta,
                    cargadoAba: this.yCarretaEst,
                    carretaAba: this.yCarretaReg,
                    carretaopAba: this.yCarretaOp,
                    //motivoAba: this.ymotivo,
                    tipoAba: this.yTipo,
                    //estado: "NUEVO",
                };

                var encontrado = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    return ( tabastecimientod.Vehiculo_idVehiculo == uabastecimientod.Vehiculo_idVehiculo );
                }, this);
                var operador = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    return ( tabastecimientod.Persona_idPersona == uabastecimientod.Persona_idPersona );
                }, this);
                var reten = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    if (uabastecimientod.Reten_idPersona != null)
                    {
                        return ( tabastecimientod.Reten_idPersona == uabastecimientod.Reten_idPersona );
                    } else {
                        return 0
                    }
                }, this);

                if ( encontrado.length == 0 && operador.length == 0 && reten.length == 0 && prm_validacion == true)
                {
                    this.abastecimientod.push(uabastecimientod);
                    this.yVehiculo = "";
                    this.yOperador = "";
                    this.yReten = "";
                    this.yGalon = "";
                    this.yKilometraje = "";
                    this.yRuta = ""; 
                    this.yObservacion = "";
                    this.yCarreta = "";
                    this.yCarretaEst = "";
                    this.yCarretaReg = "";
                    this.yCarretaOp = "";
                    //this.yTabla = "";
                    this.yF = ""; 
                    this.yKm = "";
                    //this.ymotivo = ""; 
                    this.yTipo = "FULL";
                }
                else if(prm_validacion == false)
                {
                    this.abastecimientod.push(uabastecimientod);
                    this.yVehiculo = "";
                    this.yOperador = "";
                    this.yReten = "";
                    this.yGalon = "";
                    this.yKilometraje = "";
                    this.yRuta = ""; 
                    this.yObservacion = "";
                    this.yCarreta = "";
                    this.yCarretaEst = "";
                    this.yCarretaReg = "";
                    this.yCarretaOp = "";
                    //this.yTabla = "";
                    this.yF = ""; 
                    this.yKm = "";
                    //this.ymotivo = ""; 
                    this.yTipo = "FULL";   
                }
                else
                {
                    this.Toast(true,'warning','Agregar Detalle','Los datos ingresados ya Existen');
                }
        }, 
        BajaDetalle(prm_indice)
        {
            this.abastecimientod[prm_indice].placaVeh = 'DELETE';
        },

        EliminarDetalle(prm_indice)
        {
            this.abastecimientod.splice(prm_indice, 1);
        },
        Listar()
        {
            var tablas = JSON.stringify(this.tablas);

            this.showLoading = true;
            this.$http.get('/LiberAPP/Abastecimiento/Listar/'+this.desde+'/'+this.hasta+'/'+tablas).then( res => {
                this.abastecimientos = res.data;
                this.showLoading = false;
            })
            .catch( error => {
                this.Toast(true,'danger','detalle abastecimiento','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
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
        /*this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res=> {
            this.cuentas = res.data;
        })*/

        var today = new Date();

        this.desde = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";
        this.hasta = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

        this.$http.get('/LiberAPP/Cuenta/Select').then(res=> {
            this.cuentas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Vehiculo/ListarVehiculo').then(res=> {
            this.vehiculos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })

        /*this.$http.get('/LiberAPP/Vehiculo/Select/Carreta').then(res=> {
            this.carretas = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })*/

        this.$http.get('/LiberAPP/Persona/Select').then(res=> {
            this.personas = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Operador','Error al cargar los registros: '+error)
        })

        /*this.$http.get('/LiberAPP/Abastecimiento/Select').then(res=> {
            this.abastecimientos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Abastecimientos','Error al cargar los registros: '+error);
        })*/

        this.$http.get('/LiberAPP/Externo/Select').then(res=> {
            this.externos = res.data;
            //this.externos.unshift({idExterno:'0', nombreExt:'TODOS'});
        })
        .catch(error => {
            this.Toast(true,'danger','Externos','Error al cargar los registros: ' + error);
        })
        
        /*this.$http.get('/LiberAPP/Dato/Select/RUTA/COMBUSTIBLE').then(res=> {
            this.rutas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
        })*/

        this.$http.get('/LiberAPP/Grifo/GrifoSelect').then(res=> {
            this.grifos = res.data;
        })
        .catch(error => {
            this.Toast(true, 'danger','Grifo','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Abastecimiento/Listar/'+this.desde+'/'+this.hasta+'/[]').then(res=> {
            this.abastecimientos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Grifo','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Consumo/Select').then(res=> {
            this.consumos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Consumo','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Intervalo/Select').then(res=> {
            this.intervalos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Intervalo','Error al cargar los registros: '+error);
        })
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>