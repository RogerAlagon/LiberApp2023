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
                    <b-form-group label="Desde">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="fechaInicio" class="form-control" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Hasta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="fechaFin" class="form-control" :config="{ minDate: fechaInicio }"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="facturas" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }">
                <!---------------------------------- columnas especiales ------------------------------>
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'ver' && props.row.estadoCom == 'CERRADO'">
                        <a :href="'/LiberAPP/Consumo/ComprobantePdf/'+props.row.idComprobante" target="_blank" class="btn btn-icon rounded-circle btn-danger"><feather-icon icon="EyeIcon" /></a>
                    </span>
                    <span v-if="props.column.field === 'estadoCom'">
                        <b-badge v-if="props.row.estadoCom == 'FACTURADO'" variant="danger">ABIERTO</b-badge>
                        <b-badge v-if="props.row.estadoCom == 'CERRADO'" variant="success">{{ props.row.estadoCom }}</b-badge>
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
                    { label: 'Estado', field: 'estadoCom'},
                    { label: 'ID', field: 'idComprobante', hidden:true},
                ],
            /**************************** entorno ****************************/
            facturas:[],
            empresas:[],

            /**************************** formulario ****************************/
            cliente:"",
            fechaInicio: "",
            fechaFin: "",

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
            this.$http.get('/LiberAPP/Comprobante/Listar/' + this.cliente + '/' + this.fechaInicio + '/' + this.fechaFin).then(res => {
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
        this.$http.get('/LiberAPP/Grifo/Empresa/Select').then( res=> {
            this.empresas = res.data; 
            this.empresas.unshift({ empresaGri:'TODOS'})
        }).catch( error => {
            this.Toast(true, 'danger','Empresas','Error al cargar los registros: '+error);
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