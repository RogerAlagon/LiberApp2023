<template>
    <div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Grifo">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <v-select label="nombreGri" style="flex: 1;" v-model="grifo" :reduce="grifos => grifos.idGrifo" :options="grifos" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Empresa">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <v-select label="empresaGri" style="flex: 1;" v-model="empresa" :reduce="empresas => empresas.empresaGri" :options="empresas" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Desde">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <flat-pickr class="form-control" v-model="fechaInicio" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Hasta">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <flat-pickr class="form-control" v-model="fechaFin" :config="{ minDate: fechaInicio }"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Tipo Combustible">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <v-select label="valorDat" style="flex: 1;" v-model="tipocombustible" :reduce="tcombustible => tcombustible.idDato" :options="tcombustible" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <b-form-group label="Ciudades">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <v-select label="valorDat" style="flex: 1;" v-model="ciudad" :reduce="ciudades => ciudades.idDato" :options="ciudades" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <div class="demo-inline-spacing">
                    <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                </div>
            </b-col>
        </b-row>
        <!----<b-row>
            <b-col md="6" xl="6">
                <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                <feather-icon icon="PlusIcon" class="mr-50"/>
                <span class="align-middle">NUEVO PRECIO</span>
                </b-button>
            </b-col>
            <b-col md="6" xl="6">
                <div class="custom-search d-flex justify-content-end">
                    <b-form-group>
                        <div class="d-flex align-items-center">
                            <label class="mr-1">Buscar:</label>
                            <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                        </div>
                    </b-form-group>
                </div>
            </b-col>
        </b-row>-->
        <b-row>
            <b-col md="12" xl="12">
            <div class="otabla">
                <table class="table table-condensed table-bordered">
                    <thead>
                        <tr>
                            <th rowspan="2">Nro</th>
                            <th rowspan="2">Grifo</th>
                            <th rowspan="2">Ciudad</th>
                            <th rowspan="2">Empresa</th>
                            <th rowspan="2" v-for="indice in indices">{{ indice }}</th>
                            <th rowspan="2">Grifo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(ucabecera,indexv,nrov) in precios">
                            <th>{{ nrov+1 }}</th>
                            <th>{{ ucabecera.nombreGri }}</th>
                            <td>{{ ucabecera.ciudadGri }}</td>
                            <td>{{ ucabecera.empresaGri }}</td>
                            <td v-for="(uprecio,indexk,nrok) in ucabecera.precios" class="oact" @click="Seleccionar(ucabecera.idGrifo, tipocombustible, indices[indexk], uprecio)" v-b-modal.modal-formulario>
                                <h5>{{ uprecio }}</h5>
                            </td>
                        <th>{{ ucabecera.nombreGri }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-col>
        </b-row>

        <!---------------------------------- tabla -------------------------------->
        <!---<vue-good-table
            :columns="columns"
            :rows="precios"
            :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
        >
            -------------------------------- columnas especiales 
            <template slot="table-row" slot-scope="props">
                ------------------------------ acciones -----------------------------
                <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-formulario variant="gradient-primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>
                </span>
                 Column: Common 
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>-->

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
                <b-col md="6" xl="4">
                    <b-form-group label="ID"> <b-form-input v-model="precio.idCombustible" readonly/> </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Tipo de Combustible">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ClipboardIcon"/></b-input-group-prepend>
                            <!--<v-select label="id" style="flex: 1;" v-model="precio.nombreCom" :reduce="nombreCombustible => nombreCombustible.value" :options="nombreCombustible" />-->
                            <v-select label="valorDat" style="flex: 1;" v-model="precio.nombreCom" :reduce="tcombustible => tcombustible.idDato" :options="tcombustible" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <!--<b-form-group label="Precio Combustible"> <b-form-input v-model="precio.precioCom"/> </b-form-group>-->
                    <b-form-group label="Precio Combustible">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="DollarSignIcon"/></b-input-group-prepend>
                            <!--<b-form-input v-model="precio.precioCom" />-->
                            <cleave v-model="precio.precioCom" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Fecha Inicio">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="CalendarIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="precio.fechaCom" class="form-control"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Fecha Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="CalendarIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="precio.fechaFin" class="form-control" :config="{ minDate: precio.fechaCom }"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <!--<b-form-group label="Id Grifo"> <b-form-input v-model="precio.Grifo_idGrifo"/> </b-form-group>-->
                    <b-form-group label="Nombre Grifo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="TruckIcon"/></b-input-group-prepend>
                            <v-select label="nombreGri" style="flex: 1;" v-model="precio.Grifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" />
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
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </b-card>
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
            /**************************** tabla ****************************/
            pageLength: 5,
            dir: false,
            searchTerm: '',
            columns: [
                { label: 'Acciones', field: 'acciones', },
                { label: 'ID', field: 'idCombustible', }, 
                { label: 'Tipo Combustible', field: 'nombreCom', },
                { label: 'Precio', field: 'precioCom', },
                { label: 'Fecha', field: 'fechaCom', },
                { label: 'idGrifo', field: 'Grifo_idGrifo', hidden:true, }, //Ocultar idGrifo
                { label: 'Nombre Grifo', field: 'nombreGri', },
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO PRECIO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            precios: [],
            indices:[],
            tcombustible: [], 
            grifos: [],
            empresas:[],
            ciudades:[],
            precio: {
                idCombustible: '', 
                nombreCom: '', 
                precioCom: '',
                fechaCom: '', 
                fechaFin:'',
                Grifo_idGrifo: ''
            }, 
            grifo:"", 
            tipocombustible:"",
            empresa:"",
            fechaInicio:"", 
            fechaFin:"",
            ciudad:"",
            /*nombreCombustible: [
                { id: 'DIESEL', value: 'DIESEL' }, 
                { id: 'PETROLEO', value: 'PETROLEO' }, 
                { id: 'GASOLINA', value: 'GASOLINA' },
            ]*/
        }
    },
    methods: {
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
        Nuevo() 
        {
            this.headerTextVariant = 'success';
            this.headerTitleVariant = 'NUEVO GRIFO';
            this.boton = false;
            this.precio = {
                idCombustible: '', 
                nombreCom: '', 
                precioCom: '', 
                fechaCom: '', 
                Grifo_idGrifo: ''
            }
        },
        Editar(prm_precio)
        {
            this.headerTextVariant = 'primary'; 
            this.headerTitleVariant = "EDITAR PRECIO"
            this.boton = true;
            this.precio = prm_precio;
            this.precio.Grifo_idGrifo = Number(this.precio.Grifo_idGrifo);
        },
        Guardar()
        {
            this.showLoading = true; 
            var jsonPrecio = JSON.stringify(this.precio);
            this.$http.post('/LiberAPP/Grifo/Precio/Guardar',
            {
                combustible: jsonPrecio,
            })
            .then(res => {
                console.log('guardado:: ', res.data);
                this.Toast(true,'success','Agregar Precio','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Listar();
            })
            .catch(error => {
                console.log('error:: ', error.data);
                this.Toast(true,'danger','Agregar Precio','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        }, 
        Actualizar()
        {
            this.showLoading = true; 
            var jsonPrecio = JSON.stringify(this.precio);
            this.$http.post('/LiberAPP/Grifo/Precio/Actualizar',
            {
                precio: jsonPrecio,
            }).then(res => {
                this.Toast(true,'primary','Guardar Precio','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Filtro();
                //this.Precios();
            }).catch(error => {
                this.Toast(true,'danger','Guardar Precio','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Seleccionar( idGrifo, tipo, fecha, precio )
        {

          this.precio.nombreCom = tipo;
          this.precio.Grifo_idGrifo = idGrifo;
          this.precio.fechaCom = fecha;
          this.precio.precioCom = precio;
        }, 
        Precios()
        {
            this.$http.get('/LiberAPP/Grifo/Precio/Select').then(res=> { 
                this.precios = res.data
            })
            .catch(error => {
                this.Toast(true, 'danger','Precio', 'Error al cargar los registros: '+error);
            })
        },
        Filtro()
        {
            this.$http.get('/LiberAPP/Grifo/Precio/Select/grifo/' + this.grifo + '/' + this.tipocombustible ).then( res => {
                this.precios = res.data;
            })
            .catch( error => {
                this.Toast(true,'danger','listar precio','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Grifo/Precio/Select/grifo/' + this.grifo + '/' + this.tipocombustible + '/' + this.empresa + '/' + this.fechaInicio + '/' + this.fechaFin + '/' + this.ciudad).then( res => {
                this.precios = res.data.registros;
                this.indices = res.data.indices;
                this.showLoading = false;
            })
            .catch( error => {
                this.Toast(true,'danger','listar precio','Error al cargar los registros: '+error);
                this.showLoading = false;
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
        this.$http.get('/LiberAPP/Grifo/Select').then(res=> {
            this.grifos = res.data;
            this.grifos.unshift({ idGrifo:'0', nombreGri:'TODOS'})
        }).catch(error => { 
            this.Toast(true, 'danger','Grifo','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Grifo/Empresa/Select').then( res=> {
            this.empresas = res.data; 
            this.empresas.unshift({ empresaGri:'TODOS'})
        }).catch( error => {
            this.Toast(true, 'danger','Empresas','Error al cargar los registros: '+error);
        })

        /*this.$http.get('/LiberAPP/Grifo/Precio/Select').then(res=> { 
            this.precios = res.data
        }).catch(error => {
            this.Toast(true, 'danger','Precio', 'Error al cargar los registros: '+error);
        })*/
        
        this.$http.get('/LiberAPP/Dato/Select/TIPO/COMBUSTIBLE').then(res=> {
            this.tcombustible = res.data
            //this.tcombustible.unshift({ valorDat:'TODOS'})
        }).catch(error => {
            this.Toast(true, 'danger','Dato', 'Error al cargar los registros: '+error);
        })
        
        this.$http.get('/LiberAPP/Dato/Select/CIUDAD/COMBUSTIBLE').then(res=> {
            this.ciudades = res.data
            this.ciudades.unshift({ idDato:'TODOS', valorDat:'TODOS'})
        }).catch(error => {
            this.Toast(true, 'danger','Ciudad', 'Error al cargar los registros: '+error);
        })
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>

<style scoped>
    .leyenda
    {
        text-align: center;
        width: 100%;
    }

    .otabla
    {
        height: 70vh;
        overflow: scroll;
        position: relative;
    }
    .otabla .table
    {
        position: relative;
    }
    /*fila fija*/
    thead th /*fijar filas thead*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    thead tr:nth-child(1) th/*posicionar primera fila */
    {
      top: 0;
    }
    thead tr:nth-child(2) th/*posicionar segunda fila*/
    {
      top: 22pt;
    }
    /*columna fija*/
    thead tr:nth-child(1) th:first-child/*posicionar primera columna thead*/
    {
        left: 0;
        z-index: 1;
    }
    thead tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna thead*/
    {
        left: 25pt;
        z-index: 1;
    }
    /*thead tr:nth-child(1) th:last-child/*posicionar ultima columna thead*/
    /*{
        z-index: 1;
    }*/
    tfoot th/*fijar filas tfoot*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    tfoot tr:nth-child(1) th:first-child/*posicionar primera columna tfoot*/
    {
        left: 0;
        z-index: 1;
    }
    tfoot tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna tfoot*/
    {
        left: 25pt;
        z-index: 1;
    }

    tbody th/*fijar columnas*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    tbody tr th:nth-child(1)/*posicionar primera columna*/
    {
      left: 0;
    }
    tbody tr th:nth-child(2)/*posicionar segunda columna*/
    {
      left: 25pt;
    }

    /*.table tr td:nth-child(2), .table tr td:nth-last-child(7)*/
    .table tbody th
    {
        /*min-width: 120pt !important;*/
        font-weight: bold;
        white-space: nowrap;
    }
    .table th, .table td
    {
        padding-left: 0.8rem !important;
        padding-right: 0.8rem !important;
        text-align: center !important;
    } 
    /*animacion para cada dia*/
    .oact
    {
        cursor: pointer;
    }
    .oact:hover
    {
        box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,1);
    }
    .oina
    {
        background-color: rgb(200, 199, 204);
        color: rgb(142, 142, 147);
    }
    .omini
    {
        font-size: 7pt;
        font-weight: bold;
    }
    .osombreado
    {
        background-color: rgba(128,128,128,1);
        color: white !important;
    }
    .ohora
    {
        margin-top: 2pt;
        display:  block;
    }


.asistencia
{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    border-radius: 15%;
    font-weight: bold !important;
    font-size: 0.8rem !important;
}

.btn-defaultz {
  background-color: #ffffff;
  border-color: #c8c7cc;
  color: #8e8e93;
}
.btn-defaultz:hover {
  background-color: #ffffff;
  border-color: #bbbac0;
  color: #8e8e93 !important;
}
.btn-defaultz:active, .btn-defaultz.active, .btn-defaultz.active:focus, .btn-defaultz:active:focus, .btn-defaultz:active:hover {
  background-color: #f8f8f8;
  border-color: #d5d4d8;
  color: #5b5b60 !important;
}
.btn-defaultz:focus {
  background-color: #ffffff;
  border-color: #bbbac0;
  color: #5b5b60 !important;
}
.btn-defaultz.disabled:hover, .btn-defaultz.disabled:focus, .btn-defaultz.disabled:active, .btn-defaultz.disabled.active, .btn-defaultz[disabled], .btn-defaultz[disabled]:hover, .btn-defaultz[disabled]:focus, .btn-defaultz[disabled]:active, .btn-defaultz[disabled].active, fieldset[disabled] .btn-defaultz:hover, fieldset[disabled] .btn-defaultz:focus, fieldset[disabled] .btn-defaultz:active, fieldset[disabled] .btn-defaultz.active {
  background-color: #ffffff;
  border-color: #e2e2e4;
  color: #cfcfd1;
}

/*********************************************/
.btn-primaryz {
  background-color: #007AFF;
  border-color: #007AFF;
  color: #ffffff;
}
.btn-primaryz:hover {
  background-color: #3395ff !important;
  border-color: #3395ff;
  color: #ffffff;
}
.btn-primaryz:active, .btn-primaryz.active, .btn-primaryz.active:focus, .btn-primaryz:active:focus, .btn-primaryz:active:hover, .btn-primaryz.dropdown-toggle:active:hover {
  background-color: #006ee6 !important;
  border-color: #006ee6;
}
.btn-primaryz:focus {
  background-color: #4da2ff;
  border-color: #4da2ff;
}
.btn-primaryz.disabled:hover, .btn-primaryz.disabled:focus, .btn-primaryz.disabled:active, .btn-primaryz.disabled.active, .btn-primaryz[disabled], .btn-primaryz[disabled]:hover, .btn-primaryz[disabled]:focus, .btn-primaryz[disabled]:active, .btn-primaryz[disabled].active, fieldset[disabled] .btn-primaryz:hover, fieldset[disabled] .btn-primaryz:focus, fieldset[disabled] .btn-primaryz:active, fieldset[disabled] .btn-primaryz.active {
  background-color: #66afff;
  border-color: #66afff;
  color: #ffffff;
}
.btn-primaryz.btn-o {
  border: 1px solid #007AFF;
  color: #007AFF;
}
.btn-primaryz.btn-o:hover {
  /*color: #3395ff;
  border-color: #3395ff;*/
  background: none !important;
}
.btn-primaryz.btn-o:active, .btn-primaryz.btn-o.active, .btn-primaryz.btn-o.active:focus, .btn-primaryz.btn-o:active:focus, .btn-primaryz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #0055b3 !important;
  color: #0055b3 !important;
}
.btn-primaryz.btn-o:focus {
  background-color: #66afff;
  border-color: #66afff;
  color: #3395ff;
}
.btn-primaryz.btn-o.disabled:hover, .btn-primaryz.btn-o.disabled:focus, .btn-primaryz.btn-o.disabled:active, .btn-primaryz.btn-o.disabled.active, .btn-primaryz.btn-o[disabled], .btn-primaryz.btn-o[disabled]:hover, .btn-primaryz.btn-o[disabled]:focus, .btn-primaryz.btn-o[disabled]:active, .btn-primaryz.btn-o[disabled].active, fieldset[disabled] .btn-primaryz.btn-o:hover, fieldset[disabled] .btn-primaryz.btn-o:focus, fieldset[disabled] .btn-primaryz.btn-o:active, fieldset[disabled] .btn-primaryz.btn-o.active {
  border-color: #66afff;
  color: #66afff;
}

/*********************************************/
.btn-successz {
  background-color: #5cb85c;
  border-color: #5cb85c;
  color: #ffffff;
}
.btn-successz:hover {
  background-color: #80c780 !important;
  border-color: #80c780;
  color: #ffffff;
}
.btn-successz:active, .btn-successz.active, .btn-successz.active:focus, .btn-successz:active:focus, .btn-successz:active:hover, .btn-successz.dropdown-toggle:active:hover {
  background-color: #4cae4c !important;
  border-color: #4cae4c;
}
.btn-successz:focus {
  background-color: #91cf91;
  border-color: #91cf91;
}
.btn-successz.disabled:hover, .btn-successz.disabled:focus, .btn-successz.disabled:active, .btn-successz.disabled.active, .btn-successz[disabled], .btn-successz[disabled]:hover, .btn-successz[disabled]:focus, .btn-successz[disabled]:active, .btn-successz[disabled].active, fieldset[disabled] .btn-successz:hover, fieldset[disabled] .btn-successz:focus, fieldset[disabled] .btn-successz:active, fieldset[disabled] .btn-successz.active {
  background-color: #a3d7a3;
  border-color: #a3d7a3;
  color: #ffffff;
}
.btn-successz.btn-o {
  border: 1px solid #5cb85c;
  color: #5cb85c;
}
.btn-successz.btn-o:hover {
  /*color: #80c780;
  border-color: #80c780;*/
  background: none !important;
}
.btn-successz.btn-o:active, .btn-successz.btn-o.active, .btn-successz.btn-o.active:focus, .btn-successz.btn-o:active:focus, .btn-successz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #3d8b3d !important;
  color: #3d8b3d !important;
}
.btn-successz.btn-o:focus {
  background-color: #a3d7a3;
  border-color: #a3d7a3;
  color: #80c780;
}
.btn-successz.btn-o.disabled:hover, .btn-successz.btn-o.disabled:focus, .btn-successz.btn-o.disabled:active, .btn-successz.btn-o.disabled.active, .btn-successz.btn-o[disabled], .btn-successz.btn-o[disabled]:hover, .btn-successz.btn-o[disabled]:focus, .btn-successz.btn-o[disabled]:active, .btn-successz.btn-o[disabled].active, fieldset[disabled] .btn-successz.btn-o:hover, fieldset[disabled] .btn-successz.btn-o:focus, fieldset[disabled] .btn-successz.btn-o:active, fieldset[disabled] .btn-successz.btn-o.active {
  border-color: #a3d7a3;
  color: #a3d7a3;
}

/*********************************************/
.btn-infoz {
  background-color: #46b8da;
  border-color: #46b8da;
  color: #ffffff;
}
.btn-infoz:hover {
  background-color: #71c8e2 !important;
  border-color: #71c8e2;
  color: #ffffff;
}
.btn-infoz:active, .btn-infoz.active, .btn-infoz.active:focus, .btn-infoz:active:focus, .btn-infoz:active:hover, .btn-infoz.dropdown-toggle:active:hover {
  background-color: #31b0d6 !important;
  border-color: #31b0d6;
}
.btn-infoz:focus {
  background-color: #86d0e7;
  border-color: #86d0e7;
}
.btn-infoz.disabled:hover, .btn-infoz.disabled:focus, .btn-infoz.disabled:active, .btn-infoz.disabled.active, .btn-infoz[disabled], .btn-infoz[disabled]:hover, .btn-infoz[disabled]:focus, .btn-infoz[disabled]:active, .btn-infoz[disabled].active, fieldset[disabled] .btn-infoz:hover, fieldset[disabled] .btn-infoz:focus, fieldset[disabled] .btn-infoz:active, fieldset[disabled] .btn-infoz.active {
  background-color: #9bd9eb;
  border-color: #9bd9eb;
  color: #ffffff;
}
.btn-infoz.btn-o {
  border: 1px solid #46b8da;
  color: #46b8da;
}
.btn-infoz.btn-o:hover {
  /*color: #71c8e2;
  border-color: #71c8e2;*/
  background: none !important;
}
.btn-infoz.btn-o:active, .btn-infoz.btn-o.active, .btn-infoz.btn-o.active:focus, .btn-infoz.btn-o:active:focus, .btn-infoz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #2390b0 !important;
  color: #2390b0 !important;
}
.btn-infoz.btn-o:focus {
  background-color: #9bd9eb;
  border-color: #9bd9eb;
  color: #71c8e2;
}
.btn-infoz.btn-o.disabled:hover, .btn-infoz.btn-o.disabled:focus, .btn-infoz.btn-o.disabled:active, .btn-infoz.btn-o.disabled.active, .btn-infoz.btn-o[disabled], .btn-infoz.btn-o[disabled]:hover, .btn-infoz.btn-o[disabled]:focus, .btn-infoz.btn-o[disabled]:active, .btn-infoz.btn-o[disabled].active, fieldset[disabled] .btn-infoz.btn-o:hover, fieldset[disabled] .btn-infoz.btn-o:focus, fieldset[disabled] .btn-infoz.btn-o:active, fieldset[disabled] .btn-infoz.btn-o.active {
  border-color: #9bd9eb;
  color: #9bd9eb;
}

/*********************************************/
.btn-warningz {
  background-color: #eea236;
  border-color: #eea236;
  color: #ffffff;
}
.btn-warningz:hover {
  background-color: #f2b865 !important;
  border-color: #f2b865;
  color: #ffffff;
}
.btn-warningz:active, .btn-warningz.active, .btn-warningz.active:focus, .btn-warningz:active:focus, .btn-warningz:active:hover, .btn-warningz.dropdown-toggle:active:hover {
  background-color: #ec971e !important;
  border-color: #ec971e;
}
.btn-warningz:focus {
  background-color: #f4c37d;
  border-color: #f4c37d;
}
.btn-warningz.disabled:hover, .btn-warningz.disabled:focus, .btn-warningz.disabled:active, .btn-warningz.disabled.active, .btn-warningz[disabled], .btn-warningz[disabled]:hover, .btn-warningz[disabled]:focus, .btn-warningz[disabled]:active, .btn-warningz[disabled].active, fieldset[disabled] .btn-warningz:hover, fieldset[disabled] .btn-warningz:focus, fieldset[disabled] .btn-warningz:active, fieldset[disabled] .btn-warningz.active {
  background-color: #f6ce94;
  border-color: #f6ce94;
  color: #ffffff;
}
.btn-warningz.btn-o {
  border: 1px solid #eea236;
  color: #eea236;
}
.btn-warningz.btn-o:hover {
  /*color: #f2b865;
  border-color: #f2b865;*/
  background: none !important;
}
.btn-warningz.btn-o:active, .btn-warningz.btn-o.active, .btn-warningz.btn-o.active:focus, .btn-warningz.btn-o:active:focus, .btn-warningz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c77c11 !important;
  color: #c77c11 !important;
}
.btn-warningz.btn-o:focus {
  background-color: #f6ce94;
  border-color: #f6ce94;
  color: #f2b865;
}
.btn-warningz.btn-o.disabled:hover, .btn-warningz.btn-o.disabled:focus, .btn-warningz.btn-o.disabled:active, .btn-warningz.btn-o.disabled.active, .btn-warningz.btn-o[disabled], .btn-warningz.btn-o[disabled]:hover, .btn-warningz.btn-o[disabled]:focus, .btn-warningz.btn-o[disabled]:active, .btn-warningz.btn-o[disabled].active, fieldset[disabled] .btn-warningz.btn-o:hover, fieldset[disabled] .btn-warningz.btn-o:focus, fieldset[disabled] .btn-warningz.btn-o:active, fieldset[disabled] .btn-warningz.btn-o.active {
  border-color: #f6ce94;
  color: #f6ce94;
}

/*********************************************/
.btn-dangerz {
  background-color: #d43f3a;
  border-color: #d43f3a;
  color: #ffffff;
}
.btn-dangerz:hover {
  background-color: #dd6864 !important;
  border-color: #dd6864;
  color: #ffffff;
}
.btn-dangerz:active, .btn-dangerz.active, .btn-dangerz.active:focus, .btn-dangerz:active:focus, .btn-dangerz:active:hover, .btn-dangerz.dropdown-toggle:active:hover {
  background-color: #c9312c !important;
  border-color: #c9312c;
}
.btn-dangerz:focus {
  background-color: #e27c79;
  border-color: #e27c79;
}
.btn-dangerz.disabled:hover, .btn-dangerz.disabled:focus, .btn-dangerz.disabled:active, .btn-dangerz.disabled.active, .btn-dangerz[disabled], .btn-dangerz[disabled]:hover, .btn-dangerz[disabled]:focus, .btn-dangerz[disabled]:active, .btn-dangerz[disabled].active, fieldset[disabled] .btn-dangerz:hover, fieldset[disabled] .btn-dangerz:focus, fieldset[disabled] .btn-dangerz:active, fieldset[disabled] .btn-dangerz.active {
  background-color: #e6918e;
  border-color: #e6918e;
  color: #ffffff;
}
.btn-dangerz.btn-o {
  border: 1px solid #d43f3a;
  color: #d43f3a;
}
.btn-dangerz.btn-o:hover {
  /*color: #dd6864;
  border-color: #dd6864;*/
  background: none !important;
}
.btn-dangerz.btn-o:active, .btn-dangerz.btn-o.active, .btn-dangerz.btn-o.active:focus, .btn-dangerz.btn-o:active:focus, .btn-dangerz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #9f2723 !important;
  color: #9f2723 !important;
}
.btn-dangerz.btn-o:focus {
  background-color: #e6918e;
  border-color: #e6918e;
  color: #dd6864;
}
.btn-dangerz.btn-o.disabled:hover, .btn-dangerz.btn-o.disabled:focus, .btn-dangerz.btn-o.disabled:active, .btn-dangerz.btn-o.disabled.active, .btn-dangerz.btn-o[disabled], .btn-dangerz.btn-o[disabled]:hover, .btn-dangerz.btn-o[disabled]:focus, .btn-dangerz.btn-o[disabled]:active, .btn-dangerz.btn-o[disabled].active, fieldset[disabled] .btn-dangerz.btn-o:hover, fieldset[disabled] .btn-dangerz.btn-o:focus, fieldset[disabled] .btn-dangerz.btn-o:active, fieldset[disabled] .btn-dangerz.btn-o.active {
  border-color: #e6918e;
  color: #e6918e;
}

/*********************************************/
.btn-azure {
  background-color: #0095C8;
  border-color: #0095C8;
  color: #ffffff;
}
.btn-azure:hover {
  background-color: #00bbfb !important;
  border-color: #00bbfb;
  color: #ffffff;
}
.btn-azure:active, .btn-azure.active, .btn-azure.active:focus, .btn-azure:active:focus, .btn-azure:active:hover, .btn-azure.dropdown-toggle:active:hover {
  background-color: #0082af !important;
  border-color: #0082af;
}
.btn-azure:focus {
  background-color: #16c3ff;
  border-color: #16c3ff;
  color: #ffffff;
}
.btn-azure.disabled:hover, .btn-azure.disabled:focus, .btn-azure.disabled:active, .btn-azure.disabled.active, .btn-azure[disabled], .btn-azure[disabled]:hover, .btn-azure[disabled]:focus, .btn-azure[disabled]:active, .btn-azure[disabled].active, fieldset[disabled] .btn-azure:hover, fieldset[disabled] .btn-azure:focus, fieldset[disabled] .btn-azure:active, fieldset[disabled] .btn-azure.active {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #ffffff;
}
.btn-azure.btn-o {
  border: 1px solid #0095C8;
  color: #0095C8;
}
.btn-azure.btn-o:hover {
  color: #00bbfb;
  border-color: #00bbfb;
  background: none !important;
}
.btn-azure.btn-o:active, .btn-azure.btn-o.active, .btn-azure.btn-o.active:focus, .btn-azure.btn-o:active:focus, .btn-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #005c7c !important;
  color: #005c7c !important;
}
.btn-azure.btn-o:focus {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #00bbfb;
}
.btn-azure.btn-o.disabled:hover, .btn-azure.btn-o.disabled:focus, .btn-azure.btn-o.disabled:active, .btn-azure.btn-o.disabled.active, .btn-azure.btn-o[disabled], .btn-azure.btn-o[disabled]:hover, .btn-azure.btn-o[disabled]:focus, .btn-azure.btn-o[disabled]:active, .btn-azure.btn-o[disabled].active, fieldset[disabled] .btn-azure.btn-o:hover, fieldset[disabled] .btn-azure.btn-o:focus, fieldset[disabled] .btn-azure.btn-o:active, fieldset[disabled] .btn-azure.btn-o.active {
  border-color: #2fcaff;
  color: #2fcaff;
}

/*********************************************/
.btn-light-azure {
  background-color: #00a8e2;
  border-color: #00a8e2;
  color: #ffffff;
}
.btn-light-azure:hover {
  background-color: #16c3ff !important;
  border-color: #16c3ff;
  color: #ffffff;
}
.btn-light-azure:active, .btn-light-azure.active, .btn-light-azure.active:focus, .btn-light-azure:active:focus, .btn-light-azure:active:hover, .btn-light-azure.dropdown-toggle:active:hover {
  background-color: #0095c8 !important;
  border-color: #0095c8;
}
.btn-light-azure:focus {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #ffffff;
}
.btn-light-azure.disabled:hover, .btn-light-azure.disabled:focus, .btn-light-azure.disabled:active, .btn-light-azure.disabled.active, .btn-light-azure[disabled], .btn-light-azure[disabled]:hover, .btn-light-azure[disabled]:focus, .btn-light-azure[disabled]:active, .btn-light-azure[disabled].active, fieldset[disabled] .btn-light-azure:hover, fieldset[disabled] .btn-light-azure:focus, fieldset[disabled] .btn-light-azure:active, fieldset[disabled] .btn-light-azure.active {
  background-color: #49d0ff;
  border-color: #49d0ff;
  color: #ffffff;
}
.btn-light-azure.btn-o {
  border: 1px solid #00a8e2;
  color: #00a8e2;
}
.btn-light-azure.btn-o:hover {
  color: #16c3ff;
  border-color: #16c3ff;
  background: none !important;
}
.btn-light-azure.btn-o:active, .btn-light-azure.btn-o.active, .btn-light-azure.btn-o.active:focus, .btn-light-azure.btn-o:active:focus, .btn-light-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #006f95 !important;
  color: #006f95 !important;
}
.btn-light-azure.btn-o:focus {
  background-color: #49d0ff;
  border-color: #49d0ff;
  color: #16c3ff;
}
.btn-light-azure.btn-o.disabled:hover, .btn-light-azure.btn-o.disabled:focus, .btn-light-azure.btn-o.disabled:active, .btn-light-azure.btn-o.disabled.active, .btn-light-azure.btn-o[disabled], .btn-light-azure.btn-o[disabled]:hover, .btn-light-azure.btn-o[disabled]:focus, .btn-light-azure.btn-o[disabled]:active, .btn-light-azure.btn-o[disabled].active, fieldset[disabled] .btn-light-azure.btn-o:hover, fieldset[disabled] .btn-light-azure.btn-o:focus, fieldset[disabled] .btn-light-azure.btn-o:active, fieldset[disabled] .btn-light-azure.btn-o.active {
  border-color: #49d0ff;
  color: #49d0ff;
}

/*********************************************/
.btn-dark-azure {
  background-color: #006f95;
  border-color: #006f95;
  color: #ffffff;
}
.btn-dark-azure:hover {
  background-color: #0095c8 !important;
  border-color: #0095c8;
  color: #ffffff;
}
.btn-dark-azure:active, .btn-dark-azure.active, .btn-dark-azure.active:focus, .btn-dark-azure:active:focus, .btn-dark-azure:active:hover, .btn-dark-azure.dropdown-toggle:active:hover {
  background-color: #005c7c !important;
  border-color: #005c7c;
}
.btn-dark-azure:focus {
  background-color: #00a8e2;
  border-color: #00a8e2;
  color: #ffffff;
}
.btn-dark-azure.disabled:hover, .btn-dark-azure.disabled:focus, .btn-dark-azure.disabled:active, .btn-dark-azure.disabled.active, .btn-dark-azure[disabled], .btn-dark-azure[disabled]:hover, .btn-dark-azure[disabled]:focus, .btn-dark-azure[disabled]:active, .btn-dark-azure[disabled].active, fieldset[disabled] .btn-dark-azure:hover, fieldset[disabled] .btn-dark-azure:focus, fieldset[disabled] .btn-dark-azure:active, fieldset[disabled] .btn-dark-azure.active {
  background-color: #00bbfb;
  border-color: #00bbfb;
  color: #ffffff;
}
.btn-dark-azure.btn-o {
  border: 1px solid #006f95;
  color: #006f95;
}
.btn-dark-azure.btn-o:hover {
  color: #0095c8;
  border-color: #0095c8;
  background: none !important;
}
.btn-dark-azure.btn-o:active, .btn-dark-azure.btn-o.active, .btn-dark-azure.btn-o.active:focus, .btn-dark-azure.btn-o:active:focus, .btn-dark-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #003649 !important;
  color: #003649 !important;
}
.btn-dark-azure.btn-o:focus {
  background-color: #00bbfb;
  border-color: #00bbfb;
  color: #0095c8;
}
.btn-dark-azure.btn-o.disabled:hover, .btn-dark-azure.btn-o.disabled:focus, .btn-dark-azure.btn-o.disabled:active, .btn-dark-azure.btn-o.disabled.active, .btn-dark-azure.btn-o[disabled], .btn-dark-azure.btn-o[disabled]:hover, .btn-dark-azure.btn-o[disabled]:focus, .btn-dark-azure.btn-o[disabled]:active, .btn-dark-azure.btn-o[disabled].active, fieldset[disabled] .btn-dark-azure.btn-o:hover, fieldset[disabled] .btn-dark-azure.btn-o:focus, fieldset[disabled] .btn-dark-azure.btn-o:active, fieldset[disabled] .btn-dark-azure.btn-o.active {
  border-color: #00bbfb;
  color: #00bbfb;
}

/*********************************************/
.btn-blue {
  background-color: #5F8295;
  border-color: #5F8295;
  color: #ffffff;
}
.btn-blue:hover {
  background-color: #7c9bab !important;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-blue:active, .btn-blue.active, .btn-blue.active:focus, .btn-blue:active:focus, .btn-blue:active:hover, .btn-blue.dropdown-toggle:active:hover {
  background-color: #557485 !important;
  border-color: #557485;
}
.btn-blue:focus {
  background-color: #8ba6b5;
  border-color: #8ba6b5;
  color: #ffffff;
}
.btn-blue.disabled:hover, .btn-blue.disabled:focus, .btn-blue.disabled:active, .btn-blue.disabled.active, .btn-blue[disabled], .btn-blue[disabled]:hover, .btn-blue[disabled]:focus, .btn-blue[disabled]:active, .btn-blue[disabled].active, fieldset[disabled] .btn-blue:hover, fieldset[disabled] .btn-blue:focus, fieldset[disabled] .btn-blue:active, fieldset[disabled] .btn-blue.active {
  background-color: #9bb2bf;
  border-color: #9bb2bf;
  color: #ffffff;
}
.btn-blue.btn-o {
  border: 1px solid #5F8295;
  color: #5F8295;
}
.btn-blue.btn-o:hover {
  color: #7c9bab;
  border-color: #7c9bab;
  background: none !important;
}
.btn-blue.btn-o:active, .btn-blue.btn-o.active, .btn-blue.btn-o.active:focus, .btn-blue.btn-o:active:focus, .btn-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #415966 !important;
  color: #415966 !important;
}
.btn-blue.btn-o:focus {
  background-color: #9bb2bf;
  border-color: #9bb2bf;
  color: #7c9bab;
}
.btn-blue.btn-o.disabled:hover, .btn-blue.btn-o.disabled:focus, .btn-blue.btn-o.disabled:active, .btn-blue.btn-o.disabled.active, .btn-blue.btn-o[disabled], .btn-blue.btn-o[disabled]:hover, .btn-blue.btn-o[disabled]:focus, .btn-blue.btn-o[disabled]:active, .btn-blue.btn-o[disabled].active, fieldset[disabled] .btn-blue.btn-o:hover, fieldset[disabled] .btn-blue.btn-o:focus, fieldset[disabled] .btn-blue.btn-o:active, fieldset[disabled] .btn-blue.btn-o.active {
  border-color: #9bb2bf;
  color: #9bb2bf;
}

/*********************************************/
.btn-light-blue {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-light-blue:hover {
  background-color: #9bb2bf !important;
  border-color: #9bb2bf;
  color: #ffffff;
}
.btn-light-blue:active, .btn-light-blue.active, .btn-light-blue.active:focus, .btn-light-blue:active:focus, .btn-light-blue:active:hover, .btn-light-blue.dropdown-toggle:active:hover {
  background-color: #6c8fa1 !important;
  border-color: #6c8fa1;
}
.btn-light-blue:focus {
  background-color: #aabec9;
  border-color: #aabec9;
  color: #ffffff;
}
.btn-light-blue.disabled:hover, .btn-light-blue.disabled:focus, .btn-light-blue.disabled:active, .btn-light-blue.disabled.active, .btn-light-blue[disabled], .btn-light-blue[disabled]:hover, .btn-light-blue[disabled]:focus, .btn-light-blue[disabled]:active, .btn-light-blue[disabled].active, fieldset[disabled] .btn-light-blue:hover, fieldset[disabled] .btn-light-blue:focus, fieldset[disabled] .btn-light-blue:active, fieldset[disabled] .btn-light-blue.active {
  background-color: #bacad3;
  border-color: #bacad3;
  color: #ffffff;
}
.btn-light-blue.btn-o {
  border: 1px solid #7c9bab;
  color: #7c9bab;
}
.btn-light-blue.btn-o:hover {
  color: #9bb2bf;
  border-color: #9bb2bf;
  background: none !important;
}
.btn-light-blue.btn-o:active, .btn-light-blue.btn-o.active, .btn-light-blue.btn-o.active:focus, .btn-light-blue.btn-o:active:focus, .btn-light-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #557485 !important;
  color: #557485 !important;
}
.btn-light-blue.btn-o:focus {
  background-color: #bacad3;
  border-color: #bacad3;
  color: #9bb2bf;
}
.btn-light-blue.btn-o.disabled:hover, .btn-light-blue.btn-o.disabled:focus, .btn-light-blue.btn-o.disabled:active, .btn-light-blue.btn-o.disabled.active, .btn-light-blue.btn-o[disabled], .btn-light-blue.btn-o[disabled]:hover, .btn-light-blue.btn-o[disabled]:focus, .btn-light-blue.btn-o[disabled]:active, .btn-light-blue.btn-o[disabled].active, fieldset[disabled] .btn-light-blue.btn-o:hover, fieldset[disabled] .btn-light-blue.btn-o:focus, fieldset[disabled] .btn-light-blue.btn-o:active, fieldset[disabled] .btn-light-blue.btn-o.active {
  border-color: #bacad3;
  color: #bacad3;
}

/*********************************************/
.btn-dark-blue {
  background-color: #4b6776;
  border-color: #4b6776;
  color: #ffffff;
}
.btn-dark-blue:hover {
  background-color: #5f8295 !important;
  border-color: #5f8295;
  color: #ffffff;
}
.btn-dark-blue:active, .btn-dark-blue.active, .btn-dark-blue.active:focus, .btn-dark-blue:active:focus, .btn-dark-blue:active:hover, .btn-dark-blue.dropdown-toggle:active:hover {
  background-color: #415966 !important;
  border-color: #415966;
}
.btn-dark-blue:focus {
  background-color: #6c8fa1;
  border-color: #6c8fa1;
  color: #ffffff;
}
.btn-dark-blue.disabled:hover, .btn-dark-blue.disabled:focus, .btn-dark-blue.disabled:active, .btn-dark-blue.disabled.active, .btn-dark-blue[disabled], .btn-dark-blue[disabled]:hover, .btn-dark-blue[disabled]:focus, .btn-dark-blue[disabled]:active, .btn-dark-blue[disabled].active, fieldset[disabled] .btn-dark-blue:hover, fieldset[disabled] .btn-dark-blue:focus, fieldset[disabled] .btn-dark-blue:active, fieldset[disabled] .btn-dark-blue.active {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-dark-blue.btn-o {
  border: 1px solid #4b6776;
  color: #4b6776;
}
.btn-dark-blue.btn-o:hover {
  color: #5f8295;
  border-color: #5f8295;
  background: none !important;
}
.btn-dark-blue.btn-o:active, .btn-dark-blue.btn-o.active, .btn-dark-blue.btn-o.active:focus, .btn-dark-blue.btn-o:active:focus, .btn-dark-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #2d3e47 !important;
  color: #2d3e47 !important;
}
.btn-dark-blue.btn-o:focus {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #5f8295;
}
.btn-dark-blue.btn-o.disabled:hover, .btn-dark-blue.btn-o.disabled:focus, .btn-dark-blue.btn-o.disabled:active, .btn-dark-blue.btn-o.disabled.active, .btn-dark-blue.btn-o[disabled], .btn-dark-blue.btn-o[disabled]:hover, .btn-dark-blue.btn-o[disabled]:focus, .btn-dark-blue.btn-o[disabled]:active, .btn-dark-blue.btn-o[disabled].active, fieldset[disabled] .btn-dark-blue.btn-o:hover, fieldset[disabled] .btn-dark-blue.btn-o:focus, fieldset[disabled] .btn-dark-blue.btn-o:active, fieldset[disabled] .btn-dark-blue.btn-o.active {
  border-color: #7c9bab;
  color: #7c9bab;
}

/*********************************************/
.btn-green {
  background-color: #1FBBA6;
  border-color: #1FBBA6;
  color: #ffffff;
}
.btn-green:hover {
  background-color: #30ddc6 !important;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-green:active, .btn-green.active, .btn-green.active:focus, .btn-green:active:focus, .btn-green:active:hover, .btn-green.dropdown-toggle:active:hover {
  background-color: #1ba593 !important;
  border-color: #1ba593;
}
.btn-green:focus {
  background-color: #46e0cc;
  border-color: #46e0cc;
  color: #ffffff;
}
.btn-green.disabled:hover, .btn-green.disabled:focus, .btn-green.disabled:active, .btn-green.disabled.active, .btn-green[disabled], .btn-green[disabled]:hover, .btn-green[disabled]:focus, .btn-green[disabled]:active, .btn-green[disabled].active, fieldset[disabled] .btn-green:hover, fieldset[disabled] .btn-green:focus, fieldset[disabled] .btn-green:active, fieldset[disabled] .btn-green.active {
  background-color: #5ce4d2;
  border-color: #5ce4d2;
  color: #ffffff;
}
.btn-green.btn-o {
  border: 1px solid #1FBBA6;
  color: #1FBBA6;
}
.btn-green.btn-o:hover {
  color: #30ddc6;
  border-color: #30ddc6;
  background: none !important;
}
.btn-green.btn-o:active, .btn-green.btn-o.active, .btn-green.btn-o.active:focus, .btn-green.btn-o:active:focus, .btn-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #14796c !important;
  color: #14796c !important;
}
.btn-green.btn-o:focus {
  background-color: #5ce4d2;
  border-color: #5ce4d2;
  color: #30ddc6;
}
.btn-green.btn-o.disabled:hover, .btn-green.btn-o.disabled:focus, .btn-green.btn-o.disabled:active, .btn-green.btn-o.disabled.active, .btn-green.btn-o[disabled], .btn-green.btn-o[disabled]:hover, .btn-green.btn-o[disabled]:focus, .btn-green.btn-o[disabled]:active, .btn-green.btn-o[disabled].active, fieldset[disabled] .btn-green.btn-o:hover, fieldset[disabled] .btn-green.btn-o:focus, fieldset[disabled] .btn-green.btn-o:active, fieldset[disabled] .btn-green.btn-o.active {
  border-color: #5ce4d2;
  color: #5ce4d2;
}

/*********************************************/
.btn-light-green {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-light-green:hover {
  background-color: #5ce4d2 !important;
  border-color: #5ce4d2;
  color: #ffffff;
}
.btn-light-green:active, .btn-light-green.active, .btn-light-green.active:focus, .btn-light-green:active:focus, .btn-light-green:active:hover, .btn-light-green.dropdown-toggle:active:hover {
  background-color: #23d1b9 !important;
  border-color: #23d1b9;
}
.btn-light-green:focus {
  background-color: #72e8d8;
  border-color: #72e8d8;
  color: #ffffff;
}
.btn-light-green.disabled:hover, .btn-light-green.disabled:focus, .btn-light-green.disabled:active, .btn-light-green.disabled.active, .btn-light-green[disabled], .btn-light-green[disabled]:hover, .btn-light-green[disabled]:focus, .btn-light-green[disabled]:active, .btn-light-green[disabled].active, fieldset[disabled] .btn-light-green:hover, fieldset[disabled] .btn-light-green:focus, fieldset[disabled] .btn-light-green:active, fieldset[disabled] .btn-light-green.active {
  background-color: #88ebde;
  border-color: #88ebde;
  color: #ffffff;
}
.btn-light-green.btn-o {
  border: 1px solid #30ddc6;
  color: #30ddc6;
}
.btn-light-green.btn-o:hover {
  color: #5ce4d2;
  border-color: #5ce4d2;
  background: none !important;
}
.btn-light-green.btn-o:active, .btn-light-green.btn-o.active, .btn-light-green.btn-o.active:focus, .btn-light-green.btn-o:active:focus, .btn-light-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #1ba593 !important;
  color: #1ba593 !important;
}
.btn-light-green.btn-o:focus {
  background-color: #88ebde;
  border-color: #88ebde;
  color: #5ce4d2;
}
.btn-light-green.btn-o.disabled:hover, .btn-light-green.btn-o.disabled:focus, .btn-light-green.btn-o.disabled:active, .btn-light-green.btn-o.disabled.active, .btn-light-green.btn-o[disabled], .btn-light-green.btn-o[disabled]:hover, .btn-light-green.btn-o[disabled]:focus, .btn-light-green.btn-o[disabled]:active, .btn-light-green.btn-o[disabled].active, fieldset[disabled] .btn-light-green.btn-o:hover, fieldset[disabled] .btn-light-green.btn-o:focus, fieldset[disabled] .btn-light-green.btn-o:active, fieldset[disabled] .btn-light-green.btn-o.active {
  border-color: #88ebde;
  color: #88ebde;
}

/*********************************************/
.btn-dark-green {
  background-color: #188f7f;
  border-color: #188f7f;
  color: #ffffff;
}
.btn-dark-green:hover {
  background-color: #1fbba6 !important;
  border-color: #1fbba6;
  color: #ffffff;
}
.btn-dark-green:active, .btn-dark-green.active, .btn-dark-green.active:focus, .btn-dark-green:active:focus, .btn-dark-green:active:hover, .btn-dark-green.dropdown-toggle:active:hover {
  background-color: #14796c !important;
  border-color: #14796c;
}
.btn-dark-green:focus {
  background-color: #23d1b9;
  border-color: #23d1b9;
  color: #ffffff;
}
.btn-dark-green.disabled:hover, .btn-dark-green.disabled:focus, .btn-dark-green.disabled:active, .btn-dark-green.disabled.active, .btn-dark-green[disabled], .btn-dark-green[disabled]:hover, .btn-dark-green[disabled]:focus, .btn-dark-green[disabled]:active, .btn-dark-green[disabled].active, fieldset[disabled] .btn-dark-green:hover, fieldset[disabled] .btn-dark-green:focus, fieldset[disabled] .btn-dark-green:active, fieldset[disabled] .btn-dark-green.active {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-dark-green.btn-o {
  border: 1px solid #188f7f;
  color: #188f7f;
}
.btn-dark-green.btn-o:hover {
  color: #1fbba6;
  border-color: #1fbba6;
  background: none !important;
}
.btn-dark-green.btn-o:active, .btn-dark-green.btn-o.active, .btn-dark-green.btn-o.active:focus, .btn-dark-green.btn-o:active:focus, .btn-dark-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #0d4e45 !important;
  color: #0d4e45 !important;
}
.btn-dark-green.btn-o:focus {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #1fbba6;
}
.btn-dark-green.btn-o.disabled:hover, .btn-dark-green.btn-o.disabled:focus, .btn-dark-green.btn-o.disabled:active, .btn-dark-green.btn-o.disabled.active, .btn-dark-green.btn-o[disabled], .btn-dark-green.btn-o[disabled]:hover, .btn-dark-green.btn-o[disabled]:focus, .btn-dark-green.btn-o[disabled]:active, .btn-dark-green.btn-o[disabled].active, fieldset[disabled] .btn-dark-green.btn-o:hover, fieldset[disabled] .btn-dark-green.btn-o:focus, fieldset[disabled] .btn-dark-green.btn-o:active, fieldset[disabled] .btn-dark-green.btn-o.active {
  border-color: #30ddc6;
  color: #30ddc6;
}

/*********************************************/
.btn-orange {
  background-color: #FF6600;
  border-color: #FF6600;
  color: #ffffff;
}
.btn-orange:hover {
  background-color: #ff8533 !important;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-orange:active, .btn-orange.active, .btn-orange.active:focus, .btn-orange:active:focus, .btn-orange:active:hover, .btn-orange.dropdown-toggle:active:hover {
  background-color: #e65c00 !important;
  border-color: #e65c00;
}
.btn-orange:focus {
  background-color: #ff944d;
  border-color: #ff944d;
  color: #ffffff;
}
.btn-orange.disabled:hover, .btn-orange.disabled:focus, .btn-orange.disabled:active, .btn-orange.disabled.active, .btn-orange[disabled], .btn-orange[disabled]:hover, .btn-orange[disabled]:focus, .btn-orange[disabled]:active, .btn-orange[disabled].active, fieldset[disabled] .btn-orange:hover, fieldset[disabled] .btn-orange:focus, fieldset[disabled] .btn-orange:active, fieldset[disabled] .btn-orange.active {
  background-color: #ffa366;
  border-color: #ffa366;
  color: #ffffff;
}
.btn-orange.btn-o {
  border: 1px solid #FF6600;
  color: #FF6600;
}
.btn-orange.btn-o:hover {
  color: #ff8533;
  border-color: #ff8533;
  background: none !important;
}
.btn-orange.btn-o:active, .btn-orange.btn-o.active, .btn-orange.btn-o.active:focus, .btn-orange.btn-o:active:focus, .btn-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #b34700 !important;
  color: #b34700 !important;
}
.btn-orange.btn-o:focus {
  background-color: #ffa366;
  border-color: #ffa366;
  color: #ff8533;
}
.btn-orange.btn-o.disabled:hover, .btn-orange.btn-o.disabled:focus, .btn-orange.btn-o.disabled:active, .btn-orange.btn-o.disabled.active, .btn-orange.btn-o[disabled], .btn-orange.btn-o[disabled]:hover, .btn-orange.btn-o[disabled]:focus, .btn-orange.btn-o[disabled]:active, .btn-orange.btn-o[disabled].active, fieldset[disabled] .btn-orange.btn-o:hover, fieldset[disabled] .btn-orange.btn-o:focus, fieldset[disabled] .btn-orange.btn-o:active, fieldset[disabled] .btn-orange.btn-o.active {
  border-color: #ffa366;
  color: #ffa366;
}

/*********************************************/
.btn-light-orange {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-light-orange:hover {
  background-color: #ffa366 !important;
  border-color: #ffa366;
  color: #ffffff;
}
.btn-light-orange:active, .btn-light-orange.active, .btn-light-orange.active:focus, .btn-light-orange:active:focus, .btn-light-orange:active:hover, .btn-light-orange.dropdown-toggle:active:hover {
  background-color: #ff751a !important;
  border-color: #ff751a;
}
.btn-light-orange:focus {
  background-color: #ffb380;
  border-color: #ffb380;
  color: #ffffff;
}
.btn-light-orange.disabled:hover, .btn-light-orange.disabled:focus, .btn-light-orange.disabled:active, .btn-light-orange.disabled.active, .btn-light-orange[disabled], .btn-light-orange[disabled]:hover, .btn-light-orange[disabled]:focus, .btn-light-orange[disabled]:active, .btn-light-orange[disabled].active, fieldset[disabled] .btn-light-orange:hover, fieldset[disabled] .btn-light-orange:focus, fieldset[disabled] .btn-light-orange:active, fieldset[disabled] .btn-light-orange.active {
  background-color: #ffc299;
  border-color: #ffc299;
  color: #ffffff;
}
.btn-light-orange.btn-o {
  border: 1px solid #ff8533;
  color: #ff8533;
}
.btn-light-orange.btn-o:hover {
  color: #ffa366;
  border-color: #ffa366;
  background: none !important;
}
.btn-light-orange.btn-o:active, .btn-light-orange.btn-o.active, .btn-light-orange.btn-o.active:focus, .btn-light-orange.btn-o:active:focus, .btn-light-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #e65c00 !important;
  color: #e65c00 !important;
}
.btn-light-orange.btn-o:focus {
  background-color: #ffc299;
  border-color: #ffc299;
  color: #ffa366;
}
.btn-light-orange.btn-o.disabled:hover, .btn-light-orange.btn-o.disabled:focus, .btn-light-orange.btn-o.disabled:active, .btn-light-orange.btn-o.disabled.active, .btn-light-orange.btn-o[disabled], .btn-light-orange.btn-o[disabled]:hover, .btn-light-orange.btn-o[disabled]:focus, .btn-light-orange.btn-o[disabled]:active, .btn-light-orange.btn-o[disabled].active, fieldset[disabled] .btn-light-orange.btn-o:hover, fieldset[disabled] .btn-light-orange.btn-o:focus, fieldset[disabled] .btn-light-orange.btn-o:active, fieldset[disabled] .btn-light-orange.btn-o.active {
  border-color: #ffc299;
  color: #ffc299;
}

/*********************************************/
.btn-dark-orange {
  background-color: #cc5200;
  border-color: #cc5200;
  color: #ffffff;
}
.btn-dark-orange:hover {
  background-color: #ff6600 !important;
  border-color: #ff6600;
  color: #ffffff;
}
.btn-dark-orange:active, .btn-dark-orange.active, .btn-dark-orange.active:focus, .btn-dark-orange:active:focus, .btn-dark-orange:active:hover, .btn-dark-orange.dropdown-toggle:active:hover {
  background-color: #b34700 !important;
  border-color: #b34700;
}
.btn-dark-orange:focus {
  background-color: #ff751a;
  border-color: #ff751a;
  color: #ffffff;
}
.btn-dark-orange.disabled:hover, .btn-dark-orange.disabled:focus, .btn-dark-orange.disabled:active, .btn-dark-orange.disabled.active, .btn-dark-orange[disabled], .btn-dark-orange[disabled]:hover, .btn-dark-orange[disabled]:focus, .btn-dark-orange[disabled]:active, .btn-dark-orange[disabled].active, fieldset[disabled] .btn-dark-orange:hover, fieldset[disabled] .btn-dark-orange:focus, fieldset[disabled] .btn-dark-orange:active, fieldset[disabled] .btn-dark-orange.active {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-dark-orange.btn-o {
  border: 1px solid #cc5200;
  color: #cc5200;
}
.btn-dark-orange.btn-o:hover {
  color: #ff6600;
  border-color: #ff6600;
  background: none !important;
}
.btn-dark-orange.btn-o:active, .btn-dark-orange.btn-o.active, .btn-dark-orange.btn-o.active:focus, .btn-dark-orange.btn-o:active:focus, .btn-dark-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #803300 !important;
  color: #803300 !important;
}
.btn-dark-orange.btn-o:focus {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ff6600;
}
.btn-dark-orange.btn-o.disabled:hover, .btn-dark-orange.btn-o.disabled:focus, .btn-dark-orange.btn-o.disabled:active, .btn-dark-orange.btn-o.disabled.active, .btn-dark-orange.btn-o[disabled], .btn-dark-orange.btn-o[disabled]:hover, .btn-dark-orange.btn-o[disabled]:focus, .btn-dark-orange.btn-o[disabled]:active, .btn-dark-orange.btn-o[disabled].active, fieldset[disabled] .btn-dark-orange.btn-o:hover, fieldset[disabled] .btn-dark-orange.btn-o:focus, fieldset[disabled] .btn-dark-orange.btn-o:active, fieldset[disabled] .btn-dark-orange.btn-o.active {
  border-color: #ff8533;
  color: #ff8533;
}

/*********************************************/
.btn-red {
  background-color: #C82E29;
  border-color: #C82E29;
  color: #ffffff;
}
.btn-red:hover {
  background-color: #da4f4a !important;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-red:active, .btn-red.active, .btn-red.active:focus, .btn-red:active:focus, .btn-red:active:hover, .btn-red.dropdown-toggle:active:hover {
  background-color: #b32925 !important;
  border-color: #b32925;
}
.btn-red:focus {
  background-color: #de635f;
  border-color: #de635f;
  color: #ffffff;
}
.btn-red.disabled:hover, .btn-red.disabled:focus, .btn-red.disabled:active, .btn-red.disabled.active, .btn-red[disabled], .btn-red[disabled]:hover, .btn-red[disabled]:focus, .btn-red[disabled]:active, .btn-red[disabled].active, fieldset[disabled] .btn-red:hover, fieldset[disabled] .btn-red:focus, fieldset[disabled] .btn-red:active, fieldset[disabled] .btn-red.active {
  background-color: #e37874;
  border-color: #e37874;
  color: #ffffff;
}
.btn-red.btn-o {
  border: 1px solid #C82E29;
  color: #C82E29;
}
.btn-red.btn-o:hover {
  color: #da4f4a;
  border-color: #da4f4a;
  background: none !important;
}
.btn-red.btn-o:active, .btn-red.btn-o.active, .btn-red.btn-o.active:focus, .btn-red.btn-o:active:focus, .btn-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #891f1c !important;
  color: #891f1c !important;
}
.btn-red.btn-o:focus {
  background-color: #e37874;
  border-color: #e37874;
  color: #da4f4a;
}
.btn-red.btn-o.disabled:hover, .btn-red.btn-o.disabled:focus, .btn-red.btn-o.disabled:active, .btn-red.btn-o.disabled.active, .btn-red.btn-o[disabled], .btn-red.btn-o[disabled]:hover, .btn-red.btn-o[disabled]:focus, .btn-red.btn-o[disabled]:active, .btn-red.btn-o[disabled].active, fieldset[disabled] .btn-red.btn-o:hover, fieldset[disabled] .btn-red.btn-o:focus, fieldset[disabled] .btn-red.btn-o:active, fieldset[disabled] .btn-red.btn-o.active {
  border-color: #e37874;
  color: #e37874;
}

/*********************************************/
.btn-light-red {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-light-red:hover {
  background-color: #e37874 !important;
  border-color: #e37874;
  color: #ffffff;
}
.btn-light-red:active, .btn-light-red.active, .btn-light-red.active:focus, .btn-light-red:active:focus, .btn-light-red:active:hover, .btn-light-red.dropdown-toggle:active:hover {
  background-color: #d63a35 !important;
  border-color: #d63a35;
}
.btn-light-red:focus {
  background-color: #e78d8a;
  border-color: #e78d8a;
  color: #ffffff;
}
.btn-light-red.disabled:hover, .btn-light-red.disabled:focus, .btn-light-red.disabled:active, .btn-light-red.disabled.active, .btn-light-red[disabled], .btn-light-red[disabled]:hover, .btn-light-red[disabled]:focus, .btn-light-red[disabled]:active, .btn-light-red[disabled].active, fieldset[disabled] .btn-light-red:hover, fieldset[disabled] .btn-light-red:focus, fieldset[disabled] .btn-light-red:active, fieldset[disabled] .btn-light-red.active {
  background-color: #eba19f;
  border-color: #eba19f;
  color: #ffffff;
}
.btn-light-red.btn-o {
  border: 1px solid #da4f4a;
  color: #da4f4a;
}
.btn-light-red.btn-o:hover {
  color: #e37874;
  border-color: #e37874;
  background: none !important;
}
.btn-light-red.btn-o:active, .btn-light-red.btn-o.active, .btn-light-red.btn-o.active:focus, .btn-light-red.btn-o:active:focus, .btn-light-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #b32925 !important;
  color: #b32925 !important;
}
.btn-light-red.btn-o:focus {
  background-color: #eba19f;
  border-color: #eba19f;
  color: #e37874;
}
.btn-light-red.btn-o.disabled:hover, .btn-light-red.btn-o.disabled:focus, .btn-light-red.btn-o.disabled:active, .btn-light-red.btn-o.disabled.active, .btn-light-red.btn-o[disabled], .btn-light-red.btn-o[disabled]:hover, .btn-light-red.btn-o[disabled]:focus, .btn-light-red.btn-o[disabled]:active, .btn-light-red.btn-o[disabled].active, fieldset[disabled] .btn-light-red.btn-o:hover, fieldset[disabled] .btn-light-red.btn-o:focus, fieldset[disabled] .btn-light-red.btn-o:active, fieldset[disabled] .btn-light-red.btn-o.active {
  border-color: #eba19f;
  color: #eba19f;
}

/*********************************************/
.btn-dark-red {
  background-color: #9e2420;
  border-color: #9e2420;
  color: #ffffff;
}
.btn-dark-red:hover {
  background-color: #c82e29 !important;
  border-color: #c82e29;
  color: #ffffff;
}
.btn-dark-red:active, .btn-dark-red.active, .btn-dark-red.active:focus, .btn-dark-red:active:focus, .btn-dark-red:active:hover, .btn-dark-red.dropdown-toggle:active:hover {
  background-color: #891f1c !important;
  border-color: #891f1c;
}
.btn-dark-red:focus {
  background-color: #d63a35;
  border-color: #d63a35;
  color: #ffffff;
}
.btn-dark-red.disabled:hover, .btn-dark-red.disabled:focus, .btn-dark-red.disabled:active, .btn-dark-red.disabled.active, .btn-dark-red[disabled], .btn-dark-red[disabled]:hover, .btn-dark-red[disabled]:focus, .btn-dark-red[disabled]:active, .btn-dark-red[disabled].active, fieldset[disabled] .btn-dark-red:hover, fieldset[disabled] .btn-dark-red:focus, fieldset[disabled] .btn-dark-red:active, fieldset[disabled] .btn-dark-red.active {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-dark-red.btn-o {
  border: 1px solid #9e2420;
  color: #9e2420;
}
.btn-dark-red.btn-o:hover {
  color: #c82e29;
  border-color: #c82e29;
  background: none !important;
}
.btn-dark-red.btn-o:active, .btn-dark-red.btn-o.active, .btn-dark-red.btn-o.active:focus, .btn-dark-red.btn-o:active:focus, .btn-dark-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #5e1613 !important;
  color: #5e1613 !important;
}
.btn-dark-red.btn-o:focus {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #c82e29;
}
.btn-dark-red.btn-o.disabled:hover, .btn-dark-red.btn-o.disabled:focus, .btn-dark-red.btn-o.disabled:active, .btn-dark-red.btn-o.disabled.active, .btn-dark-red.btn-o[disabled], .btn-dark-red.btn-o[disabled]:hover, .btn-dark-red.btn-o[disabled]:focus, .btn-dark-red.btn-o[disabled]:active, .btn-dark-red.btn-o[disabled].active, fieldset[disabled] .btn-dark-red.btn-o:hover, fieldset[disabled] .btn-dark-red.btn-o:focus, fieldset[disabled] .btn-dark-red.btn-o:active, fieldset[disabled] .btn-dark-red.btn-o.active {
  border-color: #da4f4a;
  color: #da4f4a;
}

/*********************************************/
.btn-purple {
  background-color: #804C75;
  border-color: #804C75;
  color: #ffffff;
}
.btn-purple:hover {
  background-color: #a05f92 !important;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-purple:active, .btn-purple.active, .btn-purple.active:focus, .btn-purple:active:focus, .btn-purple:active:hover, .btn-purple.dropdown-toggle:active:hover {
  background-color: #704366 !important;
  border-color: #704366;
}
.btn-purple:focus {
  background-color: #aa6f9d;
  border-color: #aa6f9d;
  color: #ffffff;
}
.btn-purple.disabled:hover, .btn-purple.disabled:focus, .btn-purple.disabled:active, .btn-purple.disabled.active, .btn-purple[disabled], .btn-purple[disabled]:hover, .btn-purple[disabled]:focus, .btn-purple[disabled]:active, .btn-purple[disabled].active, fieldset[disabled] .btn-purple:hover, fieldset[disabled] .btn-purple:focus, fieldset[disabled] .btn-purple:active, fieldset[disabled] .btn-purple.active {
  background-color: #b37fa8;
  border-color: #b37fa8;
  color: #ffffff;
}
.btn-purple.btn-o {
  border: 1px solid #804C75;
  color: #804C75;
}
.btn-purple.btn-o:hover {
  color: #a05f92;
  border-color: #a05f92;
  background: none !important;
}
.btn-purple.btn-o:active, .btn-purple.btn-o.active, .btn-purple.btn-o.active:focus, .btn-purple.btn-o:active:focus, .btn-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #503049 !important;
  color: #503049 !important;
}
.btn-purple.btn-o:focus {
  background-color: #b37fa8;
  border-color: #b37fa8;
  color: #a05f92;
}
.btn-purple.btn-o.disabled:hover, .btn-purple.btn-o.disabled:focus, .btn-purple.btn-o.disabled:active, .btn-purple.btn-o.disabled.active, .btn-purple.btn-o[disabled], .btn-purple.btn-o[disabled]:hover, .btn-purple.btn-o[disabled]:focus, .btn-purple.btn-o[disabled]:active, .btn-purple.btn-o[disabled].active, fieldset[disabled] .btn-purple.btn-o:hover, fieldset[disabled] .btn-purple.btn-o:focus, fieldset[disabled] .btn-purple.btn-o:active, fieldset[disabled] .btn-purple.btn-o.active {
  border-color: #b37fa8;
  color: #b37fa8;
}

/*********************************************/
.btn-light-purple {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-light-purple:hover {
  background-color: #b37fa8 !important;
  border-color: #b37fa8;
  color: #ffffff;
}
.btn-light-purple:active, .btn-light-purple.active, .btn-light-purple.active:focus, .btn-light-purple:active:focus, .btn-light-purple:active:hover, .btn-light-purple.dropdown-toggle:active:hover {
  background-color: #905684 !important;
  border-color: #905684;
}
.btn-light-purple:focus {
  background-color: #bd8fb3;
  border-color: #bd8fb3;
  color: #ffffff;
}
.btn-light-purple.disabled:hover, .btn-light-purple.disabled:focus, .btn-light-purple.disabled:active, .btn-light-purple.disabled.active, .btn-light-purple[disabled], .btn-light-purple[disabled]:hover, .btn-light-purple[disabled]:focus, .btn-light-purple[disabled]:active, .btn-light-purple[disabled].active, fieldset[disabled] .btn-light-purple:hover, fieldset[disabled] .btn-light-purple:focus, fieldset[disabled] .btn-light-purple:active, fieldset[disabled] .btn-light-purple.active {
  background-color: #c69fbe;
  border-color: #c69fbe;
  color: #ffffff;
}
.btn-light-purple.btn-o {
  border: 1px solid #a05f92;
  color: #a05f92;
}
.btn-light-purple.btn-o:hover {
  color: #b37fa8;
  border-color: #b37fa8;
  background: none !important;
}
.btn-light-purple.btn-o:active, .btn-light-purple.btn-o.active, .btn-light-purple.btn-o.active:focus, .btn-light-purple.btn-o:active:focus, .btn-light-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #704366 !important;
  color: #704366 !important;
}
.btn-light-purple.btn-o:focus {
  background-color: #c69fbe;
  border-color: #c69fbe;
  color: #b37fa8;
}
.btn-light-purple.btn-o.disabled:hover, .btn-light-purple.btn-o.disabled:focus, .btn-light-purple.btn-o.disabled:active, .btn-light-purple.btn-o.disabled.active, .btn-light-purple.btn-o[disabled], .btn-light-purple.btn-o[disabled]:hover, .btn-light-purple.btn-o[disabled]:focus, .btn-light-purple.btn-o[disabled]:active, .btn-light-purple.btn-o[disabled].active, fieldset[disabled] .btn-light-purple.btn-o:hover, fieldset[disabled] .btn-light-purple.btn-o:focus, fieldset[disabled] .btn-light-purple.btn-o:active, fieldset[disabled] .btn-light-purple.btn-o.active {
  border-color: #c69fbe;
  color: #c69fbe;
}

/*********************************************/
.btn-dark-purple {
  background-color: #603958;
  border-color: #603958;
  color: #ffffff;
}
.btn-dark-purple:hover {
  background-color: #804c75 !important;
  border-color: #804c75;
  color: #ffffff;
}
.btn-dark-purple:active, .btn-dark-purple.active, .btn-dark-purple.active:focus, .btn-dark-purple:active:focus, .btn-dark-purple:active:hover, .btn-dark-purple.dropdown-toggle:active:hover {
  background-color: #503049 !important;
  border-color: #503049;
}
.btn-dark-purple:focus {
  background-color: #905684;
  border-color: #905684;
  color: #ffffff;
}
.btn-dark-purple.disabled:hover, .btn-dark-purple.disabled:focus, .btn-dark-purple.disabled:active, .btn-dark-purple.disabled.active, .btn-dark-purple[disabled], .btn-dark-purple[disabled]:hover, .btn-dark-purple[disabled]:focus, .btn-dark-purple[disabled]:active, .btn-dark-purple[disabled].active, fieldset[disabled] .btn-dark-purple:hover, fieldset[disabled] .btn-dark-purple:focus, fieldset[disabled] .btn-dark-purple:active, fieldset[disabled] .btn-dark-purple.active {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-dark-purple.btn-o {
  border: 1px solid #603958;
  color: #603958;
}
.btn-dark-purple.btn-o:hover {
  color: #804c75;
  border-color: #804c75;
  background: none !important;
}
.btn-dark-purple.btn-o:active, .btn-dark-purple.btn-o.active, .btn-dark-purple.btn-o.active:focus, .btn-dark-purple.btn-o:active:focus, .btn-dark-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #301c2c !important;
  color: #301c2c !important;
}
.btn-dark-purple.btn-o:focus {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #804c75;
}
.btn-dark-purple.btn-o.disabled:hover, .btn-dark-purple.btn-o.disabled:focus, .btn-dark-purple.btn-o.disabled:active, .btn-dark-purple.btn-o.disabled.active, .btn-dark-purple.btn-o[disabled], .btn-dark-purple.btn-o[disabled]:hover, .btn-dark-purple.btn-o[disabled]:focus, .btn-dark-purple.btn-o[disabled]:active, .btn-dark-purple.btn-o[disabled].active, fieldset[disabled] .btn-dark-purple.btn-o:hover, fieldset[disabled] .btn-dark-purple.btn-o:focus, fieldset[disabled] .btn-dark-purple.btn-o:active, fieldset[disabled] .btn-dark-purple.btn-o.active {
  border-color: #a05f92;
  color: #a05f92;
}

/*********************************************/
.btn-beige {
  background-color: #D2BD8E;
  border-color: #D2BD8E;
  color: #ffffff;
}
.btn-beige:hover {
  background-color: #e1d2b2 !important;
  border-color: #e1d2b2;
  color: #ffffff;
}
.btn-beige:active, .btn-beige.active, .btn-beige.active:focus, .btn-beige:active:focus, .btn-beige:active:hover, .btn-beige.dropdown-toggle:active:hover {
  background-color: #cbb27c !important;
  border-color: #cbb27c;
}
.btn-beige:focus {
  background-color: #e8ddc5;
  border-color: #e8ddc5;
  color: #ffffff;
}
.btn-beige.disabled:hover, .btn-beige.disabled:focus, .btn-beige.disabled:active, .btn-beige.disabled.active, .btn-beige[disabled], .btn-beige[disabled]:hover, .btn-beige[disabled]:focus, .btn-beige[disabled]:active, .btn-beige[disabled].active, fieldset[disabled] .btn-beige:hover, fieldset[disabled] .btn-beige:focus, fieldset[disabled] .btn-beige:active, fieldset[disabled] .btn-beige.active {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #ffffff;
}
.btn-beige.btn-o {
  border: 1px solid #D2BD8E;
  color: #D2BD8E;
}
.btn-beige.btn-o:hover {
  color: #e1d2b2;
  border-color: #e1d2b2;
  background: none !important;
}
.btn-beige.btn-o:active, .btn-beige.btn-o.active, .btn-beige.btn-o.active:focus, .btn-beige.btn-o:active:focus, .btn-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #bc9d57 !important;
  color: #bc9d57 !important;
}
.btn-beige.btn-o:focus {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #e1d2b2;
}
.btn-beige.btn-o.disabled:hover, .btn-beige.btn-o.disabled:focus, .btn-beige.btn-o.disabled:active, .btn-beige.btn-o.disabled.active, .btn-beige.btn-o[disabled], .btn-beige.btn-o[disabled]:hover, .btn-beige.btn-o[disabled]:focus, .btn-beige.btn-o[disabled]:active, .btn-beige.btn-o[disabled].active, fieldset[disabled] .btn-beige.btn-o:hover, fieldset[disabled] .btn-beige.btn-o:focus, fieldset[disabled] .btn-beige.btn-o:active, fieldset[disabled] .btn-beige.btn-o.active {
  border-color: #efe8d7;
  color: #efe8d7;
}

/*********************************************/
.btn-light-beige {
  background-color: #d9c8a0;
  border-color: #d9c8a0;
  color: #ffffff;
}
.btn-light-beige:hover {
  background-color: #e8ddc5 !important;
  border-color: #e8ddc5;
  color: #ffffff;
}
.btn-light-beige:active, .btn-light-beige.active, .btn-light-beige.active:focus, .btn-light-beige:active:focus, .btn-light-beige:active:hover, .btn-light-beige.dropdown-toggle:active:hover {
  background-color: #d2bd8e !important;
  border-color: #d2bd8e;
}
.btn-light-beige:focus {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #ffffff;
}
.btn-light-beige.disabled:hover, .btn-light-beige.disabled:focus, .btn-light-beige.disabled:active, .btn-light-beige.disabled.active, .btn-light-beige[disabled], .btn-light-beige[disabled]:hover, .btn-light-beige[disabled]:focus, .btn-light-beige[disabled]:active, .btn-light-beige[disabled].active, fieldset[disabled] .btn-light-beige:hover, fieldset[disabled] .btn-light-beige:focus, fieldset[disabled] .btn-light-beige:active, fieldset[disabled] .btn-light-beige.active {
  background-color: #f6f2e9;
  border-color: #f6f2e9;
  color: #ffffff;
}
.btn-light-beige.btn-o {
  border: 1px solid #d9c8a0;
  color: #d9c8a0;
}
.btn-light-beige.btn-o:hover {
  color: #e8ddc5;
  border-color: #e8ddc5;
  background: none !important;
}
.btn-light-beige.btn-o:active, .btn-light-beige.btn-o.active, .btn-light-beige.btn-o.active:focus, .btn-light-beige.btn-o:active:focus, .btn-light-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c3a86a !important;
  color: #c3a86a !important;
}
.btn-light-beige.btn-o:focus {
  background-color: #f6f2e9;
  border-color: #f6f2e9;
  color: #e8ddc5;
}
.btn-light-beige.btn-o.disabled:hover, .btn-light-beige.btn-o.disabled:focus, .btn-light-beige.btn-o.disabled:active, .btn-light-beige.btn-o.disabled.active, .btn-light-beige.btn-o[disabled], .btn-light-beige.btn-o[disabled]:hover, .btn-light-beige.btn-o[disabled]:focus, .btn-light-beige.btn-o[disabled]:active, .btn-light-beige.btn-o[disabled].active, fieldset[disabled] .btn-light-beige.btn-o:hover, fieldset[disabled] .btn-light-beige.btn-o:focus, fieldset[disabled] .btn-light-beige.btn-o:active, fieldset[disabled] .btn-light-beige.btn-o.active {
  border-color: #f6f2e9;
  color: #f6f2e9;
}

/*********************************************/
.btn-dark-beige {
  background-color: #c3a86a;
  border-color: #c3a86a;
  color: #ffffff;
}
.btn-dark-beige:hover {
  background-color: #d2bd8e !important;
  border-color: #d2bd8e;
  color: #ffffff;
}
.btn-dark-beige:active, .btn-dark-beige.active, .btn-dark-beige.active:focus, .btn-dark-beige:active:focus, .btn-dark-beige:active:hover, .btn-dark-beige.dropdown-toggle:active:hover {
  background-color: #bc9d57 !important;
  border-color: #bc9d57;
}
.btn-dark-beige:focus {
  background-color: #d9c8a0;
  border-color: #d9c8a0;
  color: #ffffff;
}
.btn-dark-beige.disabled:hover, .btn-dark-beige.disabled:focus, .btn-dark-beige.disabled:active, .btn-dark-beige.disabled.active, .btn-dark-beige[disabled], .btn-dark-beige[disabled]:hover, .btn-dark-beige[disabled]:focus, .btn-dark-beige[disabled]:active, .btn-dark-beige[disabled].active, fieldset[disabled] .btn-dark-beige:hover, fieldset[disabled] .btn-dark-beige:focus, fieldset[disabled] .btn-dark-beige:active, fieldset[disabled] .btn-dark-beige.active {
  background-color: #e1d2b2;
  border-color: #e1d2b2;
  color: #ffffff;
}
.btn-dark-beige.btn-o {
  border: 1px solid #c3a86a;
  color: #c3a86a;
}
.btn-dark-beige.btn-o:hover {
  color: #d2bd8e;
  border-color: #d2bd8e;
  background: none !important;
}
.btn-dark-beige.btn-o:active, .btn-dark-beige.btn-o.active, .btn-dark-beige.btn-o.active:focus, .btn-dark-beige.btn-o:active:focus, .btn-dark-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #a18340 !important;
  color: #a18340 !important;
}
.btn-dark-beige.btn-o:focus {
  background-color: #e1d2b2;
  border-color: #e1d2b2;
  color: #d2bd8e;
}
.btn-dark-beige.btn-o.disabled:hover, .btn-dark-beige.btn-o.disabled:focus, .btn-dark-beige.btn-o.disabled:active, .btn-dark-beige.btn-o.disabled.active, .btn-dark-beige.btn-o[disabled], .btn-dark-beige.btn-o[disabled]:hover, .btn-dark-beige.btn-o[disabled]:focus, .btn-dark-beige.btn-o[disabled]:active, .btn-dark-beige.btn-o[disabled].active, fieldset[disabled] .btn-dark-beige.btn-o:hover, fieldset[disabled] .btn-dark-beige.btn-o:focus, fieldset[disabled] .btn-dark-beige.btn-o:active, fieldset[disabled] .btn-dark-beige.btn-o.active {
  border-color: #e1d2b2;
  color: #e1d2b2;
}

/*********************************************/
.btn-yellow {
  background-color: #FFB848;
  border-color: #FFB848;
  color: #ffffff;
}
.btn-yellow:hover {
  background-color: #ffcc7b !important;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-yellow:active, .btn-yellow.active, .btn-yellow.active:focus, .btn-yellow:active:focus, .btn-yellow:active:hover, .btn-yellow.dropdown-toggle:active:hover {
  background-color: #ffae2e !important;
  border-color: #ffae2e;
}
.btn-yellow:focus {
  background-color: #ffd694;
  border-color: #ffd694;
  color: #ffffff;
}
.btn-yellow.disabled:hover, .btn-yellow.disabled:focus, .btn-yellow.disabled:active, .btn-yellow.disabled.active, .btn-yellow[disabled], .btn-yellow[disabled]:hover, .btn-yellow[disabled]:focus, .btn-yellow[disabled]:active, .btn-yellow[disabled].active, fieldset[disabled] .btn-yellow:hover, fieldset[disabled] .btn-yellow:focus, fieldset[disabled] .btn-yellow:active, fieldset[disabled] .btn-yellow.active {
  background-color: #ffe0ae;
  border-color: #ffe0ae;
  color: #ffffff;
}
.btn-yellow.btn-o {
  border: 1px solid #FFB848;
  color: #FFB848;
}
.btn-yellow.btn-o:hover {
  color: #ffcc7b;
  border-color: #ffcc7b;
  background: none !important;
}
.btn-yellow.btn-o:active, .btn-yellow.btn-o.active, .btn-yellow.btn-o.active:focus, .btn-yellow.btn-o:active:focus, .btn-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #fa9900 !important;
  color: #fa9900 !important;
}
.btn-yellow.btn-o:focus {
  background-color: #ffe0ae;
  border-color: #ffe0ae;
  color: #ffcc7b;
}
.btn-yellow.btn-o.disabled:hover, .btn-yellow.btn-o.disabled:focus, .btn-yellow.btn-o.disabled:active, .btn-yellow.btn-o.disabled.active, .btn-yellow.btn-o[disabled], .btn-yellow.btn-o[disabled]:hover, .btn-yellow.btn-o[disabled]:focus, .btn-yellow.btn-o[disabled]:active, .btn-yellow.btn-o[disabled].active, fieldset[disabled] .btn-yellow.btn-o:hover, fieldset[disabled] .btn-yellow.btn-o:focus, fieldset[disabled] .btn-yellow.btn-o:active, fieldset[disabled] .btn-yellow.btn-o.active {
  border-color: #ffe0ae;
  color: #ffe0ae;
}

/*********************************************/
.btn-light-yellow {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-light-yellow:hover {
  background-color: #ffe0ae !important;
  border-color: #ffe0ae;
  color: #ffffff;
}
.btn-light-yellow:active, .btn-light-yellow.active, .btn-light-yellow.active:focus, .btn-light-yellow:active:focus, .btn-light-yellow:active:hover, .btn-light-yellow.dropdown-toggle:active:hover {
  background-color: #ffc261 !important;
  border-color: #ffc261;
}
.btn-light-yellow:focus {
  background-color: #ffe9c7;
  border-color: #ffe9c7;
  color: #ffffff;
}
.btn-light-yellow.disabled:hover, .btn-light-yellow.disabled:focus, .btn-light-yellow.disabled:active, .btn-light-yellow.disabled.active, .btn-light-yellow[disabled], .btn-light-yellow[disabled]:hover, .btn-light-yellow[disabled]:focus, .btn-light-yellow[disabled]:active, .btn-light-yellow[disabled].active, fieldset[disabled] .btn-light-yellow:hover, fieldset[disabled] .btn-light-yellow:focus, fieldset[disabled] .btn-light-yellow:active, fieldset[disabled] .btn-light-yellow.active {
  background-color: #fff3e1;
  border-color: #fff3e1;
  color: #ffffff;
}
.btn-light-yellow.btn-o {
  border: 1px solid #ffcc7b;
  color: #ffcc7b;
}
.btn-light-yellow.btn-o:hover {
  color: #ffe0ae;
  border-color: #ffe0ae;
  background: none !important;
}
.btn-light-yellow.btn-o:active, .btn-light-yellow.btn-o.active, .btn-light-yellow.btn-o.active:focus, .btn-light-yellow.btn-o:active:focus, .btn-light-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #ffae2e !important;
  color: #ffae2e !important;
}
.btn-light-yellow.btn-o:focus {
  background-color: #fff3e1;
  border-color: #fff3e1;
  color: #ffe0ae;
}
.btn-light-yellow.btn-o.disabled:hover, .btn-light-yellow.btn-o.disabled:focus, .btn-light-yellow.btn-o.disabled:active, .btn-light-yellow.btn-o.disabled.active, .btn-light-yellow.btn-o[disabled], .btn-light-yellow.btn-o[disabled]:hover, .btn-light-yellow.btn-o[disabled]:focus, .btn-light-yellow.btn-o[disabled]:active, .btn-light-yellow.btn-o[disabled].active, fieldset[disabled] .btn-light-yellow.btn-o:hover, fieldset[disabled] .btn-light-yellow.btn-o:focus, fieldset[disabled] .btn-light-yellow.btn-o:active, fieldset[disabled] .btn-light-yellow.btn-o.active {
  border-color: #fff3e1;
  color: #fff3e1;
}

/*********************************************/
.btn-dark-yellow {
  background-color: #ffa415;
  border-color: #ffa415;
  color: #ffffff;
}
.btn-dark-yellow:hover {
  background-color: #ffb848 !important;
  border-color: #ffb848;
  color: #ffffff;
}
.btn-dark-yellow:active, .btn-dark-yellow.active, .btn-dark-yellow.active:focus, .btn-dark-yellow:active:focus, .btn-dark-yellow:active:hover, .btn-dark-yellow.dropdown-toggle:active:hover {
  background-color: #fa9900 !important;
  border-color: #fa9900;
}
.btn-dark-yellow:focus {
  background-color: #ffc261;
  border-color: #ffc261;
  color: #ffffff;
}
.btn-dark-yellow.disabled:hover, .btn-dark-yellow.disabled:focus, .btn-dark-yellow.disabled:active, .btn-dark-yellow.disabled.active, .btn-dark-yellow[disabled], .btn-dark-yellow[disabled]:hover, .btn-dark-yellow[disabled]:focus, .btn-dark-yellow[disabled]:active, .btn-dark-yellow[disabled].active, fieldset[disabled] .btn-dark-yellow:hover, fieldset[disabled] .btn-dark-yellow:focus, fieldset[disabled] .btn-dark-yellow:active, fieldset[disabled] .btn-dark-yellow.active {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-dark-yellow.btn-o {
  border: 1px solid #ffa415;
  color: #ffa415;
}
.btn-dark-yellow.btn-o:hover {
  color: #ffb848;
  border-color: #ffb848;
  background: none !important;
}
.btn-dark-yellow.btn-o:active, .btn-dark-yellow.btn-o.active, .btn-dark-yellow.btn-o.active:focus, .btn-dark-yellow.btn-o:active:focus, .btn-dark-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c77a00 !important;
  color: #c77a00 !important;
}
.btn-dark-yellow.btn-o:focus {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffb848;
}
.btn-dark-yellow.btn-o.disabled:hover, .btn-dark-yellow.btn-o.disabled:focus, .btn-dark-yellow.btn-o.disabled:active, .btn-dark-yellow.btn-o.disabled.active, .btn-dark-yellow.btn-o[disabled], .btn-dark-yellow.btn-o[disabled]:hover, .btn-dark-yellow.btn-o[disabled]:focus, .btn-dark-yellow.btn-o[disabled]:active, .btn-dark-yellow.btn-o[disabled].active, fieldset[disabled] .btn-dark-yellow.btn-o:hover, fieldset[disabled] .btn-dark-yellow.btn-o:focus, fieldset[disabled] .btn-dark-yellow.btn-o:active, fieldset[disabled] .btn-dark-yellow.btn-o.active {
  border-color: #ffcc7b;
  color: #ffcc7b;
}

/*********************************************/
.btn-grey {
  background-color: #c8c7cc;
  border-color: #c8c7cc;
  color: #ffffff;
}
.btn-grey:hover {
  background-color: #e2e2e4 !important;
  border-color: #e2e2e4;
  color: #ffffff;
}
.btn-grey:active, .btn-grey.active, .btn-grey.active:focus, .btn-grey:active:focus, .btn-grey:active:hover, .btn-grey.dropdown-toggle:active:hover {
  background-color: #bbbac0 !important;
  border-color: #bbbac0;
}
.btn-grey:focus {
  background-color: #efeff0;
  border-color: #efeff0;
  color: #ffffff;
}
.btn-grey.disabled:hover, .btn-grey.disabled:focus, .btn-grey.disabled:active, .btn-grey.disabled.active, .btn-grey[disabled], .btn-grey[disabled]:hover, .btn-grey[disabled]:focus, .btn-grey[disabled]:active, .btn-grey[disabled].active, fieldset[disabled] .btn-grey:hover, fieldset[disabled] .btn-grey:focus, fieldset[disabled] .btn-grey:active, fieldset[disabled] .btn-grey.active {
  background-color: #fcfcfd;
  border-color: #fcfcfd;
  color: #ffffff;
}
.btn-grey.btn-o {
  border: 1px solid #c8c7cc;
  color: #c8c7cc;
}
.btn-grey.btn-o:hover {
  color: #e2e2e4;
  border-color: #e2e2e4;
  background: none !important;
}
.btn-grey.btn-o:active, .btn-grey.btn-o.active, .btn-grey.btn-o.active:focus, .btn-grey.btn-o:active:focus, .btn-grey.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #a19fa8 !important;
  color: #a19fa8 !important;
}
.btn-grey.btn-o:focus {
  background-color: #fcfcfd;
  border-color: #fcfcfd;
  color: #e2e2e4;
}
.btn-grey.btn-o.disabled:hover, .btn-grey.btn-o.disabled:focus, .btn-grey.btn-o.disabled:active, .btn-grey.btn-o.disabled.active, .btn-grey.btn-o[disabled], .btn-grey.btn-o[disabled]:hover, .btn-grey.btn-o[disabled]:focus, .btn-grey.btn-o[disabled]:active, .btn-grey.btn-o[disabled].active, fieldset[disabled] .btn-grey.btn-o:hover, fieldset[disabled] .btn-grey.btn-o:focus, fieldset[disabled] .btn-grey.btn-o:active, fieldset[disabled] .btn-grey.btn-o.active {
  border-color: #fcfcfd;
  color: #fcfcfd;
}

/*********************************************/
.btn-light-grey {
  background-color: #f7f7f8;
  border-color: #f7f7f8;
  color: #8e8e93;
}
.btn-light-grey:hover {
  background-color: white !important;
  border-color: white;
  color: #8e8e93;
}
.btn-light-grey:active, .btn-light-grey.active, .btn-light-grey.active:focus, .btn-light-grey:active:focus, .btn-light-grey:active:hover, .btn-light-grey.dropdown-toggle:active:hover {
  background-color: #eaeaec !important;
  border-color: #eaeaec;
}
.btn-light-grey:focus {
  background-color: white;
  border-color: white;
  color: #8e8e93;
}
.btn-light-grey.disabled:hover, .btn-light-grey.disabled:focus, .btn-light-grey.disabled:active, .btn-light-grey.disabled.active, .btn-light-grey[disabled], .btn-light-grey[disabled]:hover, .btn-light-grey[disabled]:focus, .btn-light-grey[disabled]:active, .btn-light-grey[disabled].active, fieldset[disabled] .btn-light-grey:hover, fieldset[disabled] .btn-light-grey:focus, fieldset[disabled] .btn-light-grey:active, fieldset[disabled] .btn-light-grey.active {
  background-color: white;
  border-color: white;
  color: #c2c2c5;
}
.btn-light-grey.btn-o {
  border: 1px solid #f7f7f8;
  color: #f7f7f8;
}
.btn-light-grey.btn-o:hover {
  color: #a8a8ac;
  border-color: white;
  background: none !important;
}
.btn-light-grey.btn-o:active, .btn-light-grey.btn-o.active, .btn-light-grey.btn-o.active:focus, .btn-light-grey.btn-o:active:focus, .btn-light-grey.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #d0cfd3 !important;
  color: #68686d !important;
}
.btn-light-grey.btn-o:focus {
  background-color: white;
  border-color: white;
  color: white;
}
.btn-light-grey.btn-o.disabled:hover, .btn-light-grey.btn-o.disabled:focus, .btn-light-grey.btn-o.disabled:active, .btn-light-grey.btn-o.disabled.active, .btn-light-grey.btn-o[disabled], .btn-light-grey.btn-o[disabled]:hover, .btn-light-grey.btn-o[disabled]:focus, .btn-light-grey.btn-o[disabled]:active, .btn-light-grey.btn-o[disabled].active, fieldset[disabled] .btn-light-grey.btn-o:hover, fieldset[disabled] .btn-light-grey.btn-o:focus, fieldset[disabled] .btn-light-grey.btn-o:active, fieldset[disabled] .btn-light-grey.btn-o.active {
  border-color: white;
  color: #c2c2c5;
}

/*********************************************/
.btn-dark-grey {
  background-color: #aeacb4;
  border-color: #aeacb4;
  color: #ffffff;
}
.btn-dark-grey:hover {
  background-color: #c8c7cc !important;
  border-color: #c8c7cc;
  color: #ffffff;
}
.btn-dark-grey:active, .btn-dark-grey.active, .btn-dark-grey.active:focus, .btn-dark-grey:active:focus, .btn-dark-grey:active:hover, .btn-dark-grey.dropdown-toggle:active:hover {
  background-color: #a19fa8 !important;
  border-color: #a19fa8;
}
.btn-dark-grey:focus {
  background-color: #d5d4d8;
  border-color: #d5d4d8;
  color: #ffffff;
}
.btn-dark-grey.disabled:hover, .btn-dark-grey.disabled:focus, .btn-dark-grey.disabled:active, .btn-dark-grey.disabled.active, .btn-dark-grey[disabled], .btn-dark-grey[disabled]:hover, .btn-dark-grey[disabled]:focus, .btn-dark-grey[disabled]:active, .btn-dark-grey[disabled].active, fieldset[disabled] .btn-dark-grey:hover, fieldset[disabled] .btn-dark-grey:focus, fieldset[disabled] .btn-dark-grey:active, fieldset[disabled] .btn-dark-grey.active {
  background-color: #e2e2e4;
  border-color: #e2e2e4;
  color: #ffffff;
}
.btn-dark-grey.btn-o {
  border: 1px solid #aeacb4;
  color: #aeacb4;
}
.btn-dark-grey.btn-o:hover {
  color: #c8c7cc;
  border-color: #c8c7cc;
  background: none !important;
}
.btn-dark-grey.btn-o:active, .btn-dark-grey.btn-o.active, .btn-dark-grey.btn-o.active:focus, .btn-dark-grey.btn-o:active:focus, .btn-dark-grey.btn-o:active:hover {
  background-color: #a19fa8 !important;
  border-color: #86848f !important;
  color: #86848f !important;
}
.btn-dark-grey.btn-o:focus {
  background-color: #e2e2e4;
  border-color: #e2e2e4;
  color: #c8c7cc;
}
.btn-dark-grey.btn-o.disabled:hover, .btn-dark-grey.btn-o.disabled:focus, .btn-dark-grey.btn-o.disabled:active, .btn-dark-grey.btn-o.disabled.active, .btn-dark-grey.btn-o[disabled], .btn-dark-grey.btn-o[disabled]:hover, .btn-dark-grey.btn-o[disabled]:focus, .btn-dark-grey.btn-o[disabled]:active, .btn-dark-grey.btn-o[disabled].active, fieldset[disabled] .btn-dark-grey.btn-o:hover, fieldset[disabled] .btn-dark-grey.btn-o:focus, fieldset[disabled] .btn-dark-grey.btn-o:active, fieldset[disabled] .btn-dark-grey.btn-o.active {
  border-color: #e2e2e4;
  color: #e2e2e4;
}
/*********************************************/
.btn-transparent-white {
  background: none;
  border-color: rgba(255, 255, 255, 0.6);
  border-width: 1px;
  color: #ffffff !important;
}
.btn-transparent-white:hover, .btn-transparent-white:focus, .btn-transparent-white:active, .btn-transparent-white.active {
  background-color: rgba(44, 47, 59, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}
.btn-transparent-white.disabled:hover, .btn-transparent-white.disabled:focus, .btn-transparent-white.disabled:active, .btn-transparent-white.disabled.active, .btn-transparent-white[disabled]:hover, .btn-transparent-white[disabled]:focus, .btn-transparent-white[disabled]:active, .btn-transparent-white[disabled].active, fieldset[disabled] .btn-transparent-white:hover, fieldset[disabled] .btn-transparent-white:focus, fieldset[disabled] .btn-transparent-white:active, fieldset[disabled] .btn-transparent-white.active {
  background: none;
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/*********************************************/
.btn-transparent-grey {
  background: none;
  border-color: rgba(200, 199, 204, 0.3);
  border-width: 1px;
  color: #c8c7cc !important;
}
.btn-transparent-grey:hover, .btn-transparent-grey:focus, .btn-transparent-grey:active, .btn-transparent-grey.active {
  background-color: rgba(200, 199, 204, 0.1);
  border-color: rgba(200, 199, 204, 0.6);
  box-shadow: none !important;
}
.btn-transparent-grey.disabled:hover, .btn-transparent-grey.disabled:focus, .btn-transparent-grey.disabled:active, .btn-transparent-grey.disabled.active, .btn-transparent-grey[disabled]:hover, .btn-transparent-grey[disabled]:focus, .btn-transparent-grey[disabled]:active, .btn-transparent-grey[disabled].active, fieldset[disabled] .btn-transparent-grey:hover, fieldset[disabled] .btn-transparent-grey:focus, fieldset[disabled] .btn-transparent-grey:active, fieldset[disabled] .btn-transparent-grey.active {
  background: none;
  border-color: rgba(200, 199, 204, 0.3);
  color: #c8c7cc;
}

/*********************************************/
.btn-transparent-red {
  background: none;
  border-color: rgba(200, 46, 41, 0.6);
  border-width: 2px;
  color: #C82E29 !important;
}
.btn-transparent-red:hover, .btn-transparent-red:focus, .btn-transparent-red:active, .btn-transparent-red.active {
  background-color: rgba(200, 46, 41, 0.1);
  border-color: rgba(200, 46, 41, 0.8);
}
.btn-transparent-red.disabled:hover, .btn-transparent-red.disabled:focus, .btn-transparent-red.disabled:active, .btn-transparent-red.disabled.active, .btn-transparent-red[disabled]:hover, .btn-transparent-red[disabled]:focus, .btn-transparent-red[disabled]:active, .btn-transparent-red[disabled].active, fieldset[disabled] .btn-transparent-red:hover, fieldset[disabled] .btn-transparent-red:focus, fieldset[disabled] .btn-transparent-red:active, fieldset[disabled] .btn-transparent-red.active {
  background: none;
  border-color: rgba(200, 46, 41, 0.3);
  color: #C82E29;
}
</style>