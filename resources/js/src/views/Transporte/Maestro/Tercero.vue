<template>
    <div>
        <b-card>
            <b-row>
                <!---------------------------------- nuevo -------------------------------->
                <b-col md="6" xl="6" class="text-left">
                    <b-button v-b-modal.modal-formulario variant="gradient-success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">NUEVO CLIENTE</span>
                    </b-button>
                </b-col>
                <!---------------------------------- búsqueda -------------------------------->
                <b-col md="6" xl="6" class="text-left">
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
            <vue-good-table
                :columns="columnas" :rows="clientes" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
                :select-options="{
                    enabled: true,
                    selectOnCheckboxOnly: true, 
                    selectionInfoClass: 'custom-class',
                    selectionText: 'rows selected',
                    clearSelectionText: 'clear',
                    disableSelectInfo: true, // disable the select info panel on top
                    selectAllByGroup: true, 
                    }">
                <!------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                    </span>
                    <!-- Column: Common -->
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
              scrollable centered no-close-on-backdrop
              title-tag="div"
              cancel-title="Cancelar" ok-title="Guardar"
              size="lg"
              cancel-variant="secondary" ok-variant="success"
            >
                <!---------------------------------- formulario -------------------------------->
                <b-row>
                  <b-col md="12" xl="12">
                    <b-form-group label="Ingrese Cliente"> <b-form-input v-model="cliente.nombreExt" /> </b-form-group>
                  </b-col>
                  <b-col md="12" xl="12">
                    <b-form-group label="Ingrese Abreviatura"> <b-form-input v-model="cliente.abreviaturaExt" /> </b-form-group>
                  </b-col>
                </b-row>
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
                <b-overlay
                    :show="showLoading"
                    no-wrap
                />
            </b-modal>
        </b-card>
    </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'

import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BCard, BButton, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
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
        BCard
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            /**************************** elementos de ux ****************************/
            pageLength: 5,
            dir: false,
            searchTerm: '',
            /**************************** tabla ****************************/
            columnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idExterno'},
                { label: 'Valor', field: 'nombreExt'},
                { label: 'Abreviatura', field: 'abreviaturaExt'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO CLIENTE',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            clientes:[], 
            cliente: {
                idExterno:'', 
                nombreExt:'',
                abreviaturaExt:''
            }
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
            this.headerTitleVariant = 'NUEVO CLIENTE';
            this.boton = false;
            this.cliente= {
              idExterno:'',
              nombreExt:'',
              abreviaturaExt:'',
            };
        }, 
        Editar( prm_cliente )
        {
            this.headerTextVariant = 'primary';
            this.headerTitleVariant = "EDITAR CLIENTE"
            this.boton = true;
            this.cliente = prm_cliente;
        },
        Guardar()
        {
            this.showLoading = true
            var jsonExterno = JSON.stringify(this.cliente)
            console.log(jsonExterno)
            this.$http.post('/LiberAPP/Externo/Guardar',
            {
                Externo: jsonExterno,
            })
            .then(res => { 
                this.Toast(true,'success','Agregar Cliente','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Externo();    
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Cliente','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Actualizar()
        {
            this.showLoading = true 
            var jsonExterno = JSON.stringify(this.cliente)
            
            this.$http.post('/LiberAPP/Externo/Actualizar',
            {
                Externo: jsonExterno,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Cliente','Actualizado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Externo();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Cliente','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },
        Externo() 
        {
            this.$http.get('/LiberAPP/Externo/Select')
                .then(res => {
                    this.clientes = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
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
        this.$http.get('/LiberAPP/Externo/Select')
            .then(res => {
                this.clientes = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    }
}
</script>
<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';
</style>