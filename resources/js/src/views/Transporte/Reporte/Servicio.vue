<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Cliente">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" style="flex: 1;" v-model="idExterno"  :reduce="clientes => clientes.idExterno" :options="clientes" />
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
                    <b-form-group label="Estado Servicio">
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <br>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="servicios" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
            ></vue-good-table>
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
            pageLength: 10,
            searchTerm: '',
            tabIndex: 1,

            /**************************** tabla ****************************/
            tcolumnas: [ 
                { label:'CLIENTE', field:'cliente' },
                { label:'FECHA SALIDA', field:'finicioCon' },
                { label:'PUNTO PARTIDA', field:'partida' },
                { label:'NOMBRE DEL OPERADOR', field:'trabajadorPer' },
                { label:'TRACTO', field:'placaVeh' },
                { label:'CARRETA', field:'carreta' },
                { label:'DESCRIPCION CARGA', field:'cargaCon' },
                { label:'ORIGEN', field:'origenCon' },
                { label:'DESTINO', field:'destinoCon' },
                { label:'FECHA TERMINO', field:'fterminoCon' },
                { label:'ROUND TRIP', field:'roundtripCon' },
            ],
            /**************************** modal ****************************/
            showLoading: false,
            boton: false,

            /**************************** entorno ****************************/
            servicios:[],
            clientes:[],
            fechaInicio:"", 
            fechaFin:"",
            estado:"",
            idExterno:"",
            estados: [
                { value:'ANULADO', text:'ANULADO'},
                { value:'PROGRAMADO', text:'PROGRAMADO'},
                { value:'RUTA', text:'RUTA'},
                { value:'TERMINADO', text:'TERMINADO'},
                { value:'VALORIZADO', text:'VALORIZADO'},
                { value:'FACTURADO', text:'FACTURADO'},
                { value:'PAGADO', text:'PAGADO'},
                { value:'REEMPLAZADO', text:'REEMPLAZADO'},
            ]
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
            this.$http.get('/LiberAPP/Servicio/Listar/'+this.idExterno+'/'+this.fechaInicio+'/'+this.fechaFin+'/'+this.estado).then( res=> {
                this.servicios = res.data;
                this.showLoading = false
            }).catch( error => { 
                this.Toast(true, 'danger','Servicios','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
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
        this.$http.get('/LiberAPP/Externo/Select').then( res=> {
            this.clientes = res.data;
            this.clientes.unshift({ idExterno:'0', nombreExt:'TODOS'});
        }).catch( error => { 
            this.Toast(true, 'danger','Servicios','Error al cargar los registros: '+error);
        })
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
.vgt-responsive #vgt-table tbody tr td:nth-child(1)/*posicionar primera columna*/
{
    left: 0;
    position: -webkit-sticky; /* for Safari */
    
    position: sticky;
    left: 0;
    background-color: rgb(75,75,75) !important;
    color: white !important;
}
.vgt-responsive #vgt-table tbody tr td:nth-child(2)/*posicionar segunda columna*/
{
    left: 30pt;
    position: -webkit-sticky; /* for Safari */

    position: sticky;
    left: 35pt;
    background-color: rgb(75,75,75) !important;
    color: white !important;
}
.vgt-responsive #vgt-table tbody tr td:nth-child(3)/*posicionar segunda columna*/
{
    left: 70pt;
    position: -webkit-sticky; /* for Safari */

    position: sticky;
    left: 70pt;
    background-color: rgb(75,75,75) !important;
    color: white !important;
}
</style>