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
                <b-col md="4" xl="3">
                    <b-form-group label="Rendimiento">
                        <b-button variant="success" @click="calculado = false" v-if="calculado == true" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> CALCULADO</b-button>
                        <b-button variant="danger" @click="calculado = true" v-else-if="calculado == false" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> NO CALCULADO</b-button>
                    </b-form-group>
                </b-col>
                <!--<b-col md="4" xl="3">
                    <b-form-group label="Vales">
                        <b-button variant="primary" @click="estado = 'REGISTRADO'" v-if="estado == 'FACTURADO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> FACTURADO</b-button>
                        <b-button variant="info" @click="estado = 'FACTURADO'" v-else-if="estado == 'REGISTRADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> REGISTRADO</b-button>
                    </b-form-group>
                </b-col>-->
                <b-col md="4" xl="3">
                    <b-form-group label="Vales">
                        <b-button variant="success" @click="situacion = 'NO TERMINADO'" v-if="situacion == 'TERMINADO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> VUELTA CERRADA</b-button>
                        <b-button variant="danger" @click="situacion = 'TERMINADO'" v-else-if="situacion == 'NO TERMINADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> VUELTA INCONCLUSA</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12" class="text-center">
                    <b-button variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                </b-col>
                <!--<b-col md="3" xl="2">
                    <div class="demo-inline-spacing">
                        <b-button variant="primary" @click="Factura()" v-if="estado =='REGISTRADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-factura>
                            <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Generar Factura ({{ seleccionados.length }})</span>
                        </b-button>
                    </div>
                </b-col>-->
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="6" xl="6">
                    <b-button variant="primary" v-b-modal.modal-consumo :disabled="showLoading" v-if="this.seleccionados.length > 0">
                        <feather-icon icon="FilterIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar Consumos ({{this.seleccionados.length}})</span>
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
                :columns="tcolumnas" :rows="consumos" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
                :pagination-options="{enabled: true, perPage:pageLength }"
                @on-row-click=""
            >
            <!----------------------------------
                 columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <!--<span v-if="props.column.field === 'recorrido' && props.formattedRow.recorrido > 0">
                        <b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle" @click="Consumo(props.formattedRow.recargas)">
                            {{ props.formattedRow.recorrido }}
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
                    </span>-->
                    <span v-if="props.column.field === 'rendimiento'">
                        <template v-if="props.row.rendimiento > 0">
                            {{ props.row.rendimiento }}
                        </template>
                        <!--<b-badge variant="danger" v-if="Math.sign(props.row.rendimiento) == -1">{{props.row.rendimiento}}</b-badge>-->
                    </span>
                    <span v-else-if="props.column.field === 'acciones'" class="text-center d-inline-flex">
                        <template v-if="props.row.tipoAba2 == 'FULL'">
                            <b-button variant="success" class="btn-icon rounded-circle" v-if="props.row.seleccionado == true" @click="props.row.seleccionado = false, Seleccion(props.row)">
                                <feather-icon icon="CheckIcon" />
                            </b-button>
                            <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="props.row.seleccionado = true, Seleccion(props.row)">
                                <feather-icon icon="CrosshairIcon" />
                            </b-button>&nbsp;    
                        </template>
                        <b-button variant="info" class="btn-icon rounded-circle" v-b-modal.modal-detalle @click="Detalle(props.row)">
                            <feather-icon icon="SearchIcon" />
                        </b-button>&nbsp;
                        <!--<b-button variant="primary" class="btn-icon rounded-circle" @click="">
                            <feather-icon icon="Edit2Icon" />
                        </b-button>&nbsp;-->

                        <!--<a :href="'/LiberAPP/Abastecimiento/Reporte/Combustible/Consumo/Pdf/'+props.row.idComprobante" target="_blank" class="btn btn-icon rounded-circle btn-danger"><feather-icon icon="EyeIcon" /></a>-->
                    </span>
                    <span v-else-if="props.column.field === 'tipo'">
                        <b-badge variant="light-success" v-if="props.row.tipo == 'FULL'">{{ props.row.tipo }}</b-badge>
                        <b-badge variant="light-success" v-else-if="props.row.tipo == 'FULL-FULL'">{{ props.row.tipo }}</b-badge>
                        <b-badge variant="light-warning" v-else-if="props.row.tipo == 'RELLENO-FULL'">{{ props.row.tipo }}</b-badge>
                        <b-badge variant="light-danger" v-else>{{ props.row.tipo }}</b-badge>

                        <!--<template v-if="props.row.rendimiento > 0">-->
                        <!--</template>-->
                        <!--<b-badge variant="danger" v-if="Math.sign(props.row.rendimiento) == -1">{{props.row.rendimiento}}</b-badge>-->
                    </span>
                    <span v-else-if="props.column.field === 'km1'">
                        <template v-if="props.row.km1 > 0">
                            {{ props.row.km1 }}
                        </template>
                        <!--<b-badge variant="danger" v-if="Math.sign(props.row.rendimiento) == -1">{{props.row.rendimiento}}</b-badge>-->
                    </span>
                    <span v-else-if="props.column.field === 'kmdia'">
                        <template v-if="props.row.kmdia < 0 || props.row.kmdia > 1000">
                            <span class="text-bold text-danger">{{ props.row.kmdia }}</span>
                        </template>
                        <template v-else>
                            {{ props.row.kmdia }}
                        </template>
                    </span>
                    <!--<span v-else-if="props.column.field === 'gal2'">
                        <b><p>{{ props.row.gal2 }}</p></b>
                    </span>-->
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
          id="modal-detalle" v-model="showModal"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          hide-footer
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <h3>{{seleccionado.placaVeh}}</h3>
            <table class="table table-condensed">
                <tr>
                    <th></th>
                    <th>Fecha</th>
                    <th>Ruta</th>
                    <th>Intervalo</th>
                    <th>Ciudad</th>
                    <th>Tipo</th>
                    <th>Cargado</th>
                    <th>Kilometraje</th>
                    <th>Recorrido / Día</th>
                    <th>Galonaje</th>
                    <th>Proveedor</th>
                    <th>Conductor</th>
                    <th>Observaciones</th>
                </tr>
                <tr>
                    <td class="d-inline-flex">
                        <!--<b-button variant="outline-primary" class="btn-icon rounded-circle" @click="Editar()" v-if="seleccionado.idAbastecimientod1 != 0">
                            <feather-icon icon="Edit2Icon" />
                        </b-button>&nbsp;-->
                        <b-button variant="outline-danger" class="btn-icon rounded-circle" @click="Anular(seleccionado.idAbastecimientod1)" v-if="seleccionado.edit1">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>
                    </td>
                    <td>{{seleccionado.fecha1}}</td>
                    <td>{{seleccionado.ruta1}}</td>
                    <td>{{seleccionado.intervalo1}}</td>
                    <td>{{seleccionado.ciudad1}}</td>
                    <td>{{seleccionado.tipoAba1}}</td>
                    <td>{{seleccionado.cargadoAba1}}</td>
                    <td>{{seleccionado.km1}}</td>
                    <td></td>
                    <td>{{seleccionado.galonaje1}}</td>
                    <td>{{seleccionado.proveedor1}}</td>
                    <td>{{seleccionado.operador1}}</td>
                    <td>{{seleccionado.obs1}}</td>
                </tr>
                <tr v-for="(urecarga, indice) in seleccionado.recargas">
                    <td class="d-inline-flex">
                        <!--<b-button variant="outline-primary" class="btn-icon rounded-circle" @click="Editar()">
                            <feather-icon icon="Edit2Icon" />
                        </b-button>&nbsp;-->
                        <b-button variant="outline-danger" class="btn-icon rounded-circle" @click="Anular(urecarga.idAbastecimientod)" v-if="urecarga.estadoAba == 'REGISTRADO'">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>
                    </td>
                    <td>{{urecarga.fechaAba}}</td>
                    <td>{{urecarga.rutaCon}}</td>
                    <td>{{urecarga.nombreInt}}</td>
                    <td>{{urecarga.ciudad}}</td>
                    <td>{{urecarga.tipoAba}}</td>
                    <td>{{urecarga.acabadoAba}}</td>
                    <td>{{urecarga.kilometrajeAba}}</td>
                    <td></td>
                    <td>{{urecarga.galonesAba}}</td>
                    <td>{{urecarga.empresaGri}}</td>
                    <td>{{urecarga.trabajadorPer}} {{urecarga.retenPer}}</td>
                    <td>{{urecarga.observacionAba}}</td>
                </tr>
                <tr>
                    <td class="d-inline-flex">
                        <!--<b-button variant="outline-primary" class="btn-icon rounded-circle" @click="Editar()">
                            <feather-icon icon="Edit2Icon" />
                        </b-button>&nbsp;-->
                        <b-button variant="outline-danger" class="btn-icon rounded-circle" @click="Anular(seleccionado.idAbastecimientod2)" v-if="seleccionado.edit2">
                            <feather-icon icon="Trash2Icon" />
                        </b-button>
                    </td>
                    <td>{{seleccionado.fecha2}}</td>
                    <td>{{seleccionado.ruta2}}</td>
                    <td>{{seleccionado.intervalo2}}</td>
                    <td>{{seleccionado.ciudad2}}</td>
                    <td>{{seleccionado.tipoAba2}}</td>
                    <td>{{seleccionado.cargadoAba2}}</td>
                    <td>{{seleccionado.km2}}</td>
                    <td>{{seleccionado.kmdia}}</td>
                    <td>{{seleccionado.galonaje2}}</td>
                    <td>{{seleccionado.proveedor2}}</td>
                    <td>{{seleccionado.operador2}}</td>
                    <td>{{seleccionado.obs2}}</td>
                </tr>
            </table>
        </b-modal>
        <!---------------------------------- modal Consumo -------------------------------->
        <b-modal
          id="modal-consumo" v-model="showModal2"
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
                <table class="table table-condensed table-bordered">
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Fecha</th>
                        <th>Ruta</th>
                        <th>Intervalo</th>
                        <th>Tipo</th>
                        <th>Observación</th>
                        <!--<th>Conductores</th>-->
                        <th>Kilometraje</th>
                        <th>Galonaje</th>
                        <th>Galonaje Ideal</th>
                        <th>Exceso</th>
                    </tr>
                    <tr v-for="(useleccionado, indice) in seleccionados">
                        <td>
                            <b-button variant="outline-danger" class="btn-icon rounded-circle" @click="EliminarSeleccion(useleccionado,indice)">
                                <feather-icon icon="XIcon" />
                            </b-button>
                        </td>
                        <td>{{useleccionado.idAbastecimientod2}}</td>
                        <td>
                            <b-button v-b-tooltip.hover="'Modelo: '+useleccionado.modelo" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark>
                                {{useleccionado.placaVeh}}
                            </b-button> 
                        </td>
                        <td>{{useleccionado.fecha2}}</td>
                        <td>{{useleccionado.fecha2}}</td>
                        <td>
                            <b-button v-b-tooltip.hover="'Ruta: '+useleccionado.ruta2" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark>
                                {{useleccionado.intervalo2}}
                            </b-button> 
                        </td>
                        <td>{{useleccionado.tipo}}</td>
                        <td>{{useleccionado.obs1}}</td>
                        <!--<td>{{useleccionado.operador2}}</td>-->
                        <td>{{useleccionado.diferencia}} Km.</td>
                        <td>{{useleccionado.gtotal}} Gal.</td>
                        <td>
                            <!--<template v-if="useleccionado.ideal != 0">
                                <b-button v-b-tooltip.hover="'Km: '+useleccionado.kmint+' - Gal: '+useleccionado.galonajeint" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark >
                                    {{useleccionado.ideal}}
                                </b-button>    
                            </template>-->
                            <template>
                                <b-button v-b-tooltip.hover="'Km: '+useleccionado.kmint+' - Gal: '+useleccionado.galonajeint" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark 
                                v-bind:id="'popover-consumo-'+useleccionado.idAbastecimientod2" @click="Reemplazar(useleccionado)"

                                >
                                    {{useleccionado.ideal}}
                                </b-button>
                                <b-popover
                                    :ref="'ppopover'+useleccionado.idAbastecimientod2"
                                    :target="'popover-consumo-'+useleccionado.idAbastecimientod2"
                                    triggers="click"
                                    :show.sync="useleccionado.activo"
                                    class="text-center"
                                    style="max-width: 800px !important;"
                                >
                                    <template v-slot:title>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span>CALCULO MANUAL</span>
                                            <b-button class="close" variant="transparent" @click="seleccionado.activo = false">
                                                <span class="d-inline-block text-white" aria-hidden="true">&times;</span>
                                            </b-button>
                                        </div>
                                    </template>
                                    <div class="text-center">
                                        <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center" style="background-color: white">
                                            <tr>
                                                <th colspan="2">Kilometraje</th>
                                                <td>
                                                    <cleave class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" v-model="useleccionado.kmint" @input="useleccionado.ideal = (useleccionado.diferencia * useleccionado.galonajeint / useleccionado.kmint).toFixed(4); useleccionado.exceso = (useleccionado.gtotal - useleccionado.ideal).toFixed(4)"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Galonaje</th>
                                                <td>
                                                    <cleave class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" v-model="useleccionado.galonajeint" @input="useleccionado.ideal = (useleccionado.diferencia * useleccionado.galonajeint / useleccionado.kmint).toFixed(4); useleccionado.exceso = (useleccionado.gtotal - useleccionado.ideal).toFixed(4)"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Gal. Ideal</th>
                                                <td>
                                                    {{useleccionado.ideal}}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </b-popover>
                            </template>
                        </td>
                        <td>
                            {{useleccionado.exceso}} Gal.
                            <!--<template v-if="useleccionado.exceso > 0"></template>
                            <template v-else>S/E</template>-->
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
                <b-button variant="success" size="sm" @click="Guardar()" :disabled="showLoading">
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
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner, VBTooltip, BPopover
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
        Cleave,
        BPopover,
    },
    directives: {
        Ripple,
        'b-tooltip': VBTooltip,
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
                { label:'Acciones', field:'acciones'},
                { label:'ID', field:'idAbastecimientod2'},
                { label:'Placa', field:'placaVeh'},
                { label:'Fecha', field:'fecha2'},
                { label:'Tipo', field:'tipo'},
                { label:'Ruta', field:'ruta2'},
                { label:'Intervalo', field:'intervalo2'},
                { label:'Ciudad Ant.', field:'ciudad1'},
                { label:'Ciudad Act.', field:'ciudad2'},
                { label:'Km. Ant.', field:'km1'},
                { label:'Km. Act.', field:'km2'},
                { label:'Km. Rec.', field:'diferencia'},
                { label:'Km. Dia', field:'kmdia'},
                { label:'Rendimiento', field:'rendimiento'},
                { label:'Galonaje', field:'gtotal'},
                
                { label:'Galonaje Ideal', field:'ideal'},
                { label:'Exceso', field:'exceso'},
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

            consumos:[],
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

            desde: '',
            hasta: '',
            calculado: false,
            estado: "REGISTRADO",
            situacion: "TERMINADO",

            cont:0,
            factura: {
                serieCom:"",
                numeroCom:"", 
                totalCom:"",
                femisionCom: "",
                clienteCom:"",
                encuadreCom: "0",
            },
            empresaGri: "",

            seleccionado: {},
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
        /*calcularGal()
        {
            this.galonajeTotal = 0
            this.precioTotal = 0
            this.galrecarga = 0;

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
                });
            })
            if ( this.factura.encuadreCom =="") { this.factura.encuadreCom = 0; }
            this.galonajeTotal = this.galonajeTotal.toFixed(3)
            this.precioTotal = this.precioTotal + parseFloat(this.factura.encuadreCom)
            this.precioTotal = this.precioTotal.toFixed(4)
        },*/
        /*Consumo( prm_consumo )
        {
            this.boton = true;
            this.dconsumos = prm_consumo
        },*/
        Listar()
        {
            this.showLoading = true;
            /*this.$http.get('/LiberAPP/Consumo/Calcular/' + this.desde + '/'+ this.hasta + '/'+ this.calculado + '/'+ this.estado)*/
            this.$http.get('/LiberAPP/Consumo/Calcular/' + this.desde + '/'+ this.hasta + '/'+ this.calculado + '/'+ this.situacion)
            .then( res => {
                this.consumos = res.data.consumos;
                this.consumos = this.consumos.map(c => ({ ...c, seleccionado: false }));
                this.seleccionados = [];
                this.showLoading = false;
                /*if ( res.data.consumos)
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
                }*/
            }).catch( error => {
                this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        
        Anular(prm_fila)
        {
            this.boxOne = ''
            this.$bvModal
              .msgBoxConfirm('¿Esta seguro de Eliminar el Registro?', {
                cancelVariant: 'outline-secondary',
              })
              .then(value => {
                this.boxOne = value
                if(this.boxOne === true) 
                {
                  this.$http.post('/LiberAPP/Abastecimiento/Desactivar',
                  {
                    idAbastecimiento : prm_fila,
                  })
                  .then(res => {
                    this.Toast(true,'primary','Abastecimiento','Abastecimento Anulado Correctamente');
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

        /*Eliminar( prm_fila )
        {
            this.boxOne = ''
            this.$bvModal
              .msgBoxConfirm('¿Esta seguro de Eliminar el Registro?', {
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
        },*/
        Detalle(prm_detalle)
        {
            this.seleccionado = prm_detalle;
        },
        Seleccion(prm_detalle)
        {
            for (var i = 0; i < this.seleccionados.length; i++)
            {
                if(this.seleccionados[i].idAbastecimientod2 == prm_detalle.idAbastecimientod2)
                {
                    this.seleccionados.splice(i,1);
                    break;
                }
            }
        
            if(prm_detalle.seleccionado)
                this.seleccionados.push(prm_detalle);
        },
        EliminarSeleccion(prm_consumo,prm_indice)
        {
            this.seleccionados.splice(prm_indice, 1)
        },
        /*Factura()
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
        },*/
        Guardar()
        {
            this.showLoading = true;
            var jConsumos = JSON.stringify(this.seleccionados);
            this.$http.post('/LiberAPP/Consumo/ActualizarConsumos',
            {
                consumos: jConsumos,
            }).then( res => {
                this.Toast(true,'primary','Consumo','Guardado Correctamente');
                //this.showModal2 = false;
                this.showLoading = false;
                this.seleccionados = [];
                this.seleccionado = {};
                //this.recargas = [];
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

        var today = new Date();

        this.desde = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";
        this.hasta = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        
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