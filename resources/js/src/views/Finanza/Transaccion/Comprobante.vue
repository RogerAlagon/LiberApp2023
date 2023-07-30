<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Proveedor/Cliente:">
                        <v-select label="nombreExt" style="flex: 1;" v-model="externo" :options="zexternos" />
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Tipo">
                        <b-button variant="primary" @click="tipo = 'FACTURA'" v-if="tipo == 'TODO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> TODO</b-button>
                        <b-button variant="primary" @click="tipo = 'BOLETA'" v-if="tipo == 'FACTURA'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> FACTURA</b-button>
                        <b-button variant="info" @click="tipo = 'LEASING'" v-else-if="tipo == 'BOLETA'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> BOLETA</b-button>
                        <b-button variant="info" @click="tipo = 'PRESTAMO'" v-else-if="tipo == 'LEASING'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> LEASING</b-button>
                        <b-button variant="info" @click="tipo = 'TODO'" v-else-if="tipo == 'PRESTAMO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> PRESTAMO</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Condición">
                        <b-button variant="primary" @click="condicion = 'DEUDA'" v-if="condicion == 'TODO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> TODO</b-button>
                        <b-button variant="primary" @click="condicion = 'ABONO'" v-if="condicion == 'DEUDA'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> DEUDA</b-button>
                        <b-button variant="info" @click="condicion = 'TODO'" v-else-if="condicion == 'ABONO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> ABONO</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Estado">
                        <b-button variant="primary" @click="estado = 'FACTURADO'" v-if="estado == 'TODO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> TODO</b-button>
                        <b-button variant="primary" @click="estado = 'ENTREGADO'" v-if="estado == 'FACTURADO'" style="margin-top: 2px;"><feather-icon icon="ToggleRightIcon"/> FACTURADO</b-button>
                        <b-button variant="info" @click="estado = 'REGISTRADO'" v-else-if="estado == 'ENTREGADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> ENTREGADO</b-button>
                        <b-button variant="info" @click="estado = 'PAGADO'" v-else-if="estado == 'REGISTRADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> REGISTRADO</b-button>
                        <b-button variant="info" @click="estado = 'CERRADO'" v-else-if="estado == 'PAGADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> PAGADO</b-button>
                        <b-button variant="info" @click="estado = 'TODO'" v-else-if="estado == 'CERRADO'" style="margin-top: 2px;"><feather-icon icon="ToggleLeftIcon"/> CERRADO</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Desde">
                        <flat-pickr v-model="desde" class="form-control" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Hasta">
                        <flat-pickr v-model="hasta" class="form-control" :config="{ minDate: desde }"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12" class="text-center">
                    <b-button variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                    <b-button variant="success" @click="Importar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Importar Excel</span>
                    </b-button>
                </b-col>
            </b-row>
            <!---------------------------------- tabla -------------------------------->
            <br>
            <vue-good-table
                :columns="tcolumnas" :rows="facturas" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }">
                <!---------------------------------- columnas especiales ------------------------------>
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'ver'">
                        <a :href="'/LiberAPP/Consumo/ComprobantePdf/'+props.row.idComprobante" target="_blank" class="btn btn-icon rounded-circle btn-danger"><feather-icon icon="EyeIcon" /></a>
                    </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
                </template>
            </vue-good-table>
        </b-card>
    </div>
</template>
<script>
import BCardCode from '@core/components/b-card-code'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'

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
        flatPickr
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
            
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
                showLoading: false,
                boton: false,

            /**************************** tabla ****************************/
            tcolumnas: [
                    { label: '', field: 'ver' },
                    { label: 'Proveedor', field: 'clienteCom'},
                    { label: 'Fecha Emision', field: 'femisionCom'},
                    { label: 'Total', field: 'totalCom'},
                    { label: 'Serie', field: 'serie'},
                    { label: 'ID', field: 'idComprobante', hidden:true},
                ],
            /**************************** entorno ****************************/
            facturas:[],
            empresas:[],
            zexternos: [],

            /**************************** formulario ****************************/
            externo: 0,
            tipo: "TODO",
            condicion: "TODO",
            estado: "TODO",
            desde: "",
            hasta: "",

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
            this.$http.get('/LiberAPP/Comprobante/Listar/' + this.externo.idExterno + '/' + this.desde + '/' + this.hasta+ '/' + this.tipo+ '/' + this.condicion).then(res => {
                this.facturas = res.data;
                this.showLoading = false;
            }).catch(error => {
                this.Toast(true,'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
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
        }
    }, 
    created() {

        var today = new Date();

        this.desde = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";
        this.hasta = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

        this.$http.get('/LiberAPP/Externo/Select').then( res=> {
            this.zexternos = res.data; 
            this.zexternos.unshift({ idExterno: 0, nombreExt:'TODOS'})
            this.externo = { idExterno: 0, nombreExt:'TODOS'};
        }).catch( error => {
            this.Toast(true, 'danger','Externo','Error al cargar los registros: '+error);
        })

        /*this.$http.get('/LiberAPP/Abastecimiento/Comprobante/Combustible/Consumo/Listar').then(res => {
            this.facturas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
            this.showLoading = false;
        });*/
    }
}
</script>
<style lang="scss">
  @import "~@core/scss/base/pages/app-ecommerce-details.scss";
  @import '~@core/scss/vue/libs/vue-good-table.scss';
  @import '~@core/scss/vue/libs/vue-select.scss';
  @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>