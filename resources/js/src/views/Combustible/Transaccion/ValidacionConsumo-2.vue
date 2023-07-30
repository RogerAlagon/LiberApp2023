<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="CLIENTES">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="empresaGri" style="flex: 1;" v-model="cliente" :reduce="empresas => empresas.empresaGri" :options="empresas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Estado">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="estado" :options="estados" style="flex: 1;"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="2">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                  </div>
                </b-col>
                <b-col md="3" xl="2">
                    <div class="demo-inline-spacing">
                        <b-button variant="primary" @click="Factura()" v-if="estado =='REGISTRADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-factura>
                            <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Generar Factura ({{ seleccionados.length }})</span>
                        </b-button>
                  </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="6"></b-col>
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
                :columns="tcolumnas" :rows="vconsumos" :rtl="direction"
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
              :pagination-options="{enabled: true, perPage:pageLength }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'recorrido' && props.formattedRow.recorrido > 0">
                        <b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle" @click="Consumo(props.formattedRow.recargas)">
                            {{ props.formattedRow.recorrido }}
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field === 'rendimiento'">
                        <b-badge variant="danger" v-if="Math.sign(props.row.rendimiento) == -1">{{props.row.rendimiento}}</b-badge>
                        <p v-else>{{ props.row.rendimiento }}</p>
                    </span>
                    <span v-else-if="props.column.field === 'seleccionar' && estado !== 'FACTURADO'" class="text-center">
                        <b-button variant="success" class="btn-icon rounded-circle" v-if="props.row.seleccionado == true" @click="props.row.seleccionado = false, Seleccion(props.row)">
                            <feather-icon icon="CheckIcon" />
                        </b-button>
                        <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="props.row.seleccionado = true, Seleccion(props.row)">
                            <feather-icon icon="CrosshairIcon" />
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field =='eliminar' && estado !== 'FACTURADO'">
                        <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.abastecimiento2)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field === 'seleccionar' && estado == 'FACTURADO'" class="text-center">
                        <a :href="'/LiberAPP/Abastecimiento/Reporte/Combustible/Consumo/Pdf/'+props.row.idComprobante" target="_blank" class="btn btn-icon rounded-circle btn-danger"><feather-icon icon="EyeIcon" /></a>
                    </span>
                    <span v-else-if="props.column.field === 'gal2'">
                        <b><p>{{ props.row.gal2 }}</p></b>
                    </span>
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
        </b-card>
        <!-- Modal Descripcion -->
        <b-modal
          id="modal-descripcion" v-model="showModal"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          hide-footer
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="lg"
          cancel-variant="secondary" ok-variant="success"
        >
        <vue-good-table
                :columns="tcolumnas2" :rows="dconsumos" :rtl="direction"
            >
            </vue-good-table>
        </b-modal>
            <!---------------------------------- modal Factura-------------------------------->
    <b-modal
      id="modal-factura" v-model="showModal2"
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
            <b-col md="6" xl="4">
                <b-form-group label="SERIE">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="factura.serieCom" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="NUMERO">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="factura.numeroCom" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                    <b-form-group label="PROVEEDOR">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="empresaGri" v-model="factura.clienteCom" style="flex: 1;" :reduce="empresas => empresas.empresaGri" :options="empresas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="FECHA EMISION">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <flat-pickr v-model="factura.femisionCom" class="form-control" />
                    </b-input-group>
                </b-form-group>
            </b-col>
                <b-col md="6" xl="4">
                <b-form-group label="TOTAL">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="factura.totalCom" />
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" xl="12">
                <br>
                <h5 class="text-primary">VALES SELECCIONADOS</h5>
            </b-col>
            <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered">
                    <tr>
                        <th>Eliminar</th>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Abastecimiento</th>
                        <th>Fecha Abasto</th>
                        <th>Km.Recorrido</th>
                        <th>Ciudad Actual</th>
                        <th>Ciudad Anterior.</th>
                        <th>Rendimiento</th>
                        <th>Operador</th>
                        <th>Reten</th>
                        <th>Precio Galonaje</th>
                        <th>Monto (S/.)</th>
                    </tr>
                    <!--<tr v-for="(uvale, indice) in vale.factura">-->
                    <tr v-for="(uvale, indice) in this.seleccionados">
                        <!---<tr v-for="(selec, indice) in this.seleccionados">-->
                            <td>
                                <b-button variant="success" class="btn-icon rounded-circle" v-if="uvale.seleccionado == true" @click="EliminarDetalle(indice, uvale.abastecimiento2),uvale.seleccionado = false">
                                    <feather-icon icon="CheckIcon" />
                                </b-button>
                                <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="EliminarDetalle(indice, uvale.abastecimiento2)">
                                    <feather-icon icon="CrosshairIcon" />
                                </b-button>
                            </td>
                        <!--</tr>-->

                        <!--<td>
                            <b-button variant="danger" class="btn-icon rounded-circle" @click="EliminarDetalle(indice, uvale.abastecimiento2)">
                                <feather-icon icon="XIcon"/>
                            </b-button>
                        </td>-->
                        <td>{{ uvale.abastecimiento2 }}</td>
                        <td>{{ uvale.placaVeh }}</td>
                        <!--<td>{{ uvale.gal2 }}</td>-->
                        <td><cleave v-model="uvale.gal2" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" /></td>
                        <!---<td>{{ uvale.gal2 }}</td>-->
                        <td>{{ uvale.fecha2 }}</td>
                        <td>{{ uvale.diferencia }}</td>
                        <td>{{ uvale.ciudadActual }}</td>
                        <td>{{ uvale.ciudadAnterior }}</td>
                        <td>{{ uvale.rendimiento }}</td>
                        <td>{{ uvale.trabajadorPer }}</td>
                        <td>{{ uvale.reten }}</td>
                        <td v-if="uvale.precioGri == null || uvale.precioGri == 0" class="bg-danger text-light">{{ uvale.precioGri }}</td>
                        <td v-else>{{ uvale.precioGri }}</td>
                        <td>{{ (uvale.precioGri * uvale.gal2).toFixed(5) }}</td>
                    </tr>
                    <tr>
                        <th>Total Galonaje </th>
                        <th>{{ galonajeTotal }}</th>
                    </tr>
                    <tr>
                        <th>Monto de Ajuste</th>
                        <th><cleave v-model="factura.encuadreCom" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"  /></th>
                    </tr>
                    <tr>
                        <th>Total Monto (S/.)</th>
                        <th>{{ precioTotal }}</th>
                    </tr>
                    <tr>
                        <th colspan="2">
                            <b-button variant="primary" size="sm" @click="calcularGal" :disabled="showLoading">
                                <feather-icon icon="CheckCircleIcon" class="mr-50" v-if="!showLoading"/>
                                <b-spinner small v-else/>
                                <span class="align-middle">Calcular</span>
                            </b-button>
                        </th>
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
                <b-button variant="success" size="sm" @click="GuardarFactura" :disabled="showLoading">
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
    import {
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'
import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { options } from 'preact'

export default {
    components: {
        BToast,
        BCard,
        BRow,
        BCol,
        BImg,
        BSpinner,
        BFormGroup,
        BInputGroup,
        BInputGroupPrepend,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
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
        flatPickr,
        Cleave
    },
    directives: {
        Ripple,
    },
    data() {
        return {
             /**************************** elementos de ux ****************************/
             dir: false,
            pageLength: 25,
            searchTerm: '',
            tabIndex: 1,

            /**************************** tabla ****************************/
            tcolumnas: [
                { label:'Sel.', field:'seleccionar'},
                { label:'Acciones', field:'eliminar'},
                { label:'Cant. Recorrido', field:'recorrido'},
                { label:'ID', field:'abastecimiento2'},
                { label:'Placa', field:'placaVeh'},
                { label:'Fecha', field:'fecha2'},
                { label:'Cliente', field:'cliente'},
                { label:'Ciudad Actual', field:'ciudadActual'},
                { label:'Ciudad Anterior', field:'ciudadAnterior'},
                { label:'Kilometraje', field:'km'},
                { label:'Kilometraje Ant.', field:'kmAnterior'},
                { label:'galonaje', field:'gal2'},
                //{ label:'galonaje Ant.', field:'gal2'},
                { label:'galrecargas', field:'galrecarga', hidden:true },
                { label:'Km. rec', field:'diferencia'},
                { label:'Rendimiento', field:'rendimiento'},
                { label:'idrecarga', field:'idrecargas', hidden:true },
                { label:'recargas', field:'recargas', hidden:true },
                { label:'ids', field:'ids', hidden:true },
                { labe:'idComprobante', filed:'idComprobante', hidden:true },
                { label:'idVehiculo', field:'idVehiculo', hidden:true },
                { label:'galtotal', field:'galtotal', hidden:true },
            ],

            tcolumnas2: [
                { label:'ID', field:'idAbastecimientod'},
                { label:'Placa', field:'placaVeh'},
                { label:'Ciudad', field:'valorDat'},
                { label:'Empresa', field:'empresaGri'},
                { label:'Fecha', field:'fecharegAba'},
                { label:'Galon', field:'galonesAba'},
                { label:'Kilometraje', field:'kilometrajeKil'},
            ],

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'RELLENO CONSUMO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showLoading: false,
            showModal2: false,
            boton: false,
            showModal: false,

            vconsumos:[],
            dconsumos:[],
            recargas:[],
            vehiculos:[],
            empresas:[],
            seleccionados: [],
            vale: {},
            estados: [ 
                { value:'SOLICITADO', text:'SOLICITADO'},
                { value:'APROBADO', text:'APROBADO'},
                { value:'REGISTRADO', text:'REGISTRADO'},
                { value:'FACTURADO', text:'FACTURADO'},
                { value:'ANULADO', text:'ANULADO'},
                { value:'APLICADO', text:'APLICADO'},
            ],
            seleccionado: {
                cliente: "", 
                estado: "",
            },

            /**************************** formulario ****************************/
            vehiculo:0,
            cliente:"",
            estado:"",
            galonajeTotal:0,
            precioTotal:0,
            montoAjuste:0,
            galrecarga:0,

            cont:0,
            factura: {
                serieCom:"",
                numeroCom:"", 
                totalCom:"",
                femisionCom: "",
                clienteCom:"",
                encuadreCom: "0",
            }
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
        calcularGal()
        {
            this.galonajeTotal = 0
            this.precioTotal = 0
            //this.montoAjuste = 0;
            this.galrecarga = 0;
            //this.vale.factura.forEach(element => {
                
                /*this.seleccionados.forEach(element => {
                    this.galonajeTotal += parseFloat(element.gal2)
                    this.precioTotal += parseFloat( element.precioGri * element.gal2 )    
                });*/

                this.seleccionados.forEach(recarga => {
                    this.galonajeTotal += parseFloat(recarga.gal2)
                    this.precioTotal += parseFloat( recarga.precioGri * recarga.gal2 )    
                if ( recarga.galrecarga == "" )
                {
                    this.galrecarga = parseFloat(recarga.gal2)
                } else if( recarga.galrecarga !== ""){
                    this.galrecarga = parseFloat(recarga.gal2) + parseFloat(recarga.galrecarga)
                }
                
                this.seleccionados.forEach(element => {
                    
                    if (recarga.abastecimiento2 == element.abastecimiento2 && element.tipoAba == 'FULL' )
                    {
                        element.rendimiento = parseFloat(element.diferencia / this.galrecarga ).toFixed(2)
                    }
                    //if ( element.precioGri == null)
                    //element.precioGri = 0
                });
            })
            if ( this.factura.encuadreCom =="") { this.factura.encuadreCom = 0; }
            this.galonajeTotal = this.galonajeTotal.toFixed(3)
            this.precioTotal = this.precioTotal + parseFloat(this.factura.encuadreCom)
            this.precioTotal = this.precioTotal.toFixed(4)
        },
        Consumo( prm_consumo )
        {
            this.boton = true;
            this.dconsumos = prm_consumo
        },
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Abastecimiento/Vconsumo/Select/' + this.cliente + '/'+ this.estado)
            .then( res => {
                if ( res.data.consumos)
                {
                    if ( this.seleccionados.length > 0) 
                    {
                        this.vconsumos = res.data.consumos
                        this.vconsumos.forEach( element => {
                            this.seleccionados.forEach( select => {
                                if ( element.abastecimiento2 == select.abastecimiento2 )
                                {
                                    element.seleccionado = select.seleccionado
                                }
                            })
                        })
                        this.seleccionado.cliente = this.cliente
                        this.seleccionado.estado = this.estado
                    } else {
                        this.vconsumos = res.data.consumos;
                        this.vconsumos = this.vconsumos.map(v => ({ ...v, seleccionado: false }));
                        this.seleccionado.cliente = this.cliente; 
                        this.seleccionado.estado = this.estado;
                    }
                    this.showLoading = false;
                } else { 
                    this.vconsumos = []
                    this.showLoading = false;
                }
            }).catch( error => {
                this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        EliminarDetalle(prm_indice, abastecimiento2)
        {
            this.vale.factura.splice(prm_indice, 1)
        },
        Eliminar( prm_fila )
        {
            this.boxOne = ''
            this.$bvModal
              .msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
                cancelVariant: 'outline-secondary',
              })
              .then(value => {
                this.boxOne = value
                if(this.boxOne === true) 
                {
                  this.$http.post('/LiberAPP/Abastecimiento/Consumo/Desactivar',
                  {
                    idAbastecimiento : prm_fila,
                  })
                  .then(res => {
                    this.Toast(true,'primary','Abastecimiento','Abastecimento eliminado Correctamente');
                    this.showModal = false;
                    this.showLoading = false;
                    this.Listar();
                  })
                  .catch(error => {
                    this.Toast(true,'danger','Abastecimiento','Error al eliminar el Abastecimiento: '+error);
                    this.showLoading = false;
                  })
                }
                else
                  this.showLoading = false;
              })
        },
        Seleccion(prm_vale)
        {

            for (var i = 0; i < this.seleccionados.length; i++)
            {
                if(this.seleccionados[i].abastecimiento2 == prm_vale.abastecimiento2)
                {
                    this.seleccionados.splice(i,1);
                    break;
                }
            }
        
            if(prm_vale.seleccionado)
                this.seleccionados.push(prm_vale);
                //console.log(this.seleccionados);
                //this.recargas.push( JSON.stringify(prm_vale.recargas))
        },
        Factura()
        {
            this.galonajeTotal = 0;
            
            this.factura = {
                serieCom:"",
                numeroCom:"", 
                totalCom:"",
                femisionCom: "",
                clienteCom:"",
            }

            this.vale = {
                'factura': this.seleccionados,
            };
            this.dconsumos = this.seleccionados;

            for (var j = 0; j < this.dconsumos.length; j++)
            {
                this.galonajeTotal = Number(this. galonajeTotal) + Number(this.dconsumos[j].gal2); 
            }
        },
        GuardarFactura()
        {
            this.showLoading = true;
            var jsonFactura = JSON.stringify(this.factura) 
            var jsonVale = JSON.stringify(this.dconsumos)
            
            this.$http.post('/LiberAPP/Abastecimiento/Comprobante/Combustible/Guardar', 
            {
                comprobante: jsonFactura, 
                vale: jsonVale,
            }).then( res => {
                this.Toast(true,'primary','Factura','Guardado Correctamente');
                this.showModal2 = false;
                this.showModal2 = false;
                this.showLoading = false; 
                this.seleccionados = [];
                this.recargas = [];
                this.Listar();
            })
            .catch(error => {
                this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
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
        this.$http.get('/LiberAPP/Grifo/Empresa/Select').then( res=> {
            this.empresas = res.data; 
            this.empresas.unshift({ empresaGri:'TODOS'})
        }).catch( error => {
            this.Toast(true, 'danger','Empresas','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Vehiculo/Select')
        .then(res => {
          this.vehiculos = res.data;
          this.vehiculos.unshift({idVehiculo:'0', placaVeh:'TODOS'})
        }).catch(error => {
          this.Toast(true,'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
          this.showLoading = false;
        });
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
<style lang="scss">
    .vgt-responsive
    {
        height: 70vh;
        overflow: scroll;
        position: relative;
    }
    .vgt-responsive #vgt-table
    {
        position: relative;
    }
    .vgt-responsive #vgt-table thead th /*fijar filas thead*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th/*posicionar primera fila */
    {
      top: 0 !important;
    }
    /*.vgt-responsive #vgt-table thead tr:nth-child(1) th
    {
      top: 0 !important;
    }*/
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child/*posicionar primera columna thead*/
    {
        left: 0;
        z-index: 2;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna thead*/
    {
        left: 30pt;
        z-index: 2;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3)/*posicionar segunda columna thead*/
    {
        left: 70pt;
        z-index: 2;
    }
    .vgt-responsive #vgt-table tbody th/*fijar columnas*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
</style>