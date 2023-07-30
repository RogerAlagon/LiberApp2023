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
                    <b-form-group label="Estado">
                        <b-button variant="success" @click="descontado = 'NO DESCONTADO'" v-if="descontado == 'DESCONTADO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> DESCONTADO</b-button>
                        <b-button variant="danger" @click="descontado = 'DESCONTADO'" v-else-if="descontado == 'NO DESCONTADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> NO DESCONTADO</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12" class="text-center">
                    <b-button variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                    <b-button variant="success" @click="Exportar()" :disabled="showLoading">
                        <feather-icon icon="FilterIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Descuentos</span>
                    </b-button>
                </b-col>
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
                :columns="tcolumnas" :rows="registros" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
                :pagination-options="{enabled: true, perPage:pageLength }"
                @on-row-click=""
            >
            <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <!--<span v-if="props.column.field === 'recorrido' && props.formattedRow.recorrido > 0">
                        <b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle" @click="Consumo(props.formattedRow.recargas)">
                            {{ props.formattedRow.recorrido }}
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
                    </span>-->
                    <span v-if="props.column.field === 'acciones'" class="text-center d-inline-flex">
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
          id="modal-detalle" v-model="showModal"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <template>
                <h3>{{seleccionado.placaVeh}}</h3>
            <b-row>
                <b-col md="12" xl="12">
                    <table class="table table-condensed table-bordered">
                        <tr>
                            <!--<th></th>-->
                            <th>ID</th>
                            <th>Placa</th>
                            <th>Fecha</th>
                            <th>Total Galones</th>
                            <th>Precio</th>
                            <th>Exceso Gal.</th>
                            <th>Tolerancia </th>
                            <th>Saldo Pendiente</th>
                            <th>Descuento</th>
                            <th>Observaciones</th>
                        </tr>
                        <tr>
                            <td>{{seleccionado.idAbastecimientod}}</td>
                            <td>{{seleccionado.placaVeh}}</td>
                            <td>{{seleccionado.fechaAba}}</td>
                            <td><b>{{seleccionado.galones}}</b> Gal.</td>
                            <td>S/. <b>{{Math.round(seleccionado.precio*100)/100}}</b></td>
                            <td><b>{{seleccionado.exceso}}</b> Gal.</td>
                            <td>
                                <!--<b-form-input v-model="seleccionado.tolerancia" type="text" class="d-inline-block" @input="seleccionado.descuento = (seleccionado.saldo - seleccionado.tolerancia).toFixed(2);"/>-->
                                <b-form-input v-model="seleccionado.tolerancia" type="text" class="d-inline-block" @input="seleccionado.saldo = (seleccionado.exceso - seleccionado.tolerancia).toFixed(4); seleccionado.descuento = (seleccionado.saldo * seleccionado.precio).toFixed(4)" size="xs"/>
                            </td>
                            <td><b>{{seleccionado.saldo}}</b> Gal</td>
                            <td>S/. <b>{{seleccionado.descuento}}</b></td>
                            <td>{{seleccionado.observacionAba}}</td>
                        </tr>
                    </table>
                </b-col>
                <b-col md="12" xl="12">
                    <table class="table table-condensed table-bordered">
                        <tr>
                            <th>ID</th>
                            <th>Trabajador</th>
                            <th>Descontar (Gal.)</th>
                            <th>Descontar (S/.)</th>
                            <th>Observaciones</th>
                        </tr>
                        <tr v-for="(utrabajador, indice) in seleccionado.trabajadores">
                            <td>{{utrabajador.id}}</td>
                            <td>{{utrabajador.per}}</td>
                            <td>
                                <cleave v-model="utrabajador.des" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" @focus="$event.target.select()" @input="utrabajador.tot = (utrabajador.des * seleccionado.precio).toFixed(2)"/>
                            </td>
                            <td>{{utrabajador.tot}}</td>
                            <td>
                                <b-form-input v-model="utrabajador.observacion" type="text" class="d-inline-block" size="xs"/>
                            </td>
                        </tr>
                    </table>
                </b-col>   
            </b-row>
            </template>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModal = false" :disabled="showLoading">
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
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner, VBTooltip
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
                { label:'ID', field:'idAbastecimientod'},
                { label:'Placa', field:'placaVeh'},
                { label:'Ruta', field:'rutaCon'},
                { label:'Fecha', field:'fechaAba'},
                { label:'Galonaje', field:'galones'},
                { label:'Precio', field:'precio'},
                { label:'Exceso', field: 'excesoAba'},
                { label:'A Descontar', field:'descontar'},
                { label:'Trabajadores', field:'nombres'},
                { label:'Observacion', field:'observacionAba'},
                
                /*{ label:'Km. Act.', field:'km2'},
                { label:'Km. Rec.', field:'diferencia'},
                { label:'Km. Dia', field:'kmdia'},
                { label:'Rendimiento', field:'rendimiento'},
                { label:'Galonaje', field:'galonaje2'},
                { label:'Galonaje Ideal', field:'ideal'},
                { label:'Exceso', field:'exceso'},*/
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

            registros: [],

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
            galonajeTotal:0,
            precioTotal:0,
            montoAjuste:0,
            galrecarga:0,

            desde: '',
            hasta: '',
            descontado: "NO DESCONTADO",

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
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Consumo/ListarDescuentos/' + this.desde + '/'+ this.hasta + '/'+ this.descontado)
            .then( res => {

                this.registros = res.data.registros;

                /*this.consumos = res.data.consumos;
                this.consumos = this.consumos.map(c => ({ ...c, seleccionado: false }));
                this.seleccionados = [];*/
                this.showLoading = false;
            }).catch( error => {
                this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        
        /*Anular(prm_fila)
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
        },*/

        Detalle(prm_detalle)
        {
            this.seleccionado = prm_detalle;
        },
        Guardar()
        {
            var pordescontar = 0;
            var trabajadores = Object.values(this.seleccionado.trabajadores);
            for (var i = 0; i < trabajadores.length; i++)
            {
                var utrabajador = trabajadores[i];
                pordescontar += parseFloat(utrabajador.des);
                //console.log(utrabajador.des);
            }

            var saldo_superior = (this.seleccionado.saldo + 0.01).toFixed(2);
            var saldo_inferior = (this.seleccionado.saldo - 0.01).toFixed(2);
            
            if(pordescontar < saldo_inferior || pordescontar > saldo_superior)
            {
                this.Toast(true,'warning','Descuentos','Los galones a descontar no coinciden con el Descuento');
                this.showLoading = false;
                return;
            }


            this.showLoading = true;
            var jDescuento = JSON.stringify(this.seleccionado);

            this.$http.post('/LiberAPP/Consumo/GuardarDescuentos',
            {
                descuentos: jDescuento,
            }).then( res => {
                this.Toast(true,'primary','Consumo','Guardado Correctamente');
                this.showLoading = false;
                this.seleccionado = {};
                this.Listar();
            })
            .catch(error => {
                this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
                this.showLoading = false;
            });
        },
        Exportar()
        {
            window.open('/LiberAPP/Descuento/ExportarDescuento/COMBUSTIBLE/'+this.desde+'/'+this.hasta, '_blank')
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