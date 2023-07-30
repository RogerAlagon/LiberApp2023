<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="12" xl="12">
                    <h3>SERVICIOS</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="6">
                    <!---------------------------------- nuevo -------------------------------->
                    <b-button v-b-modal.modal-proyeccion variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">NUEVO SERVICIO</span>
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
                :columns="tcolumnas" :rows="proyecciones" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }">
                <!---------------------------------- columnas especiales ------------------------------>
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-proyeccion variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                    </span>
                    <span v-if="props.column.field === 'activoPro'">
                        <b-badge v-if="props.row.activoPro == 1" variant="success">ACTIVO</b-badge>
                        <b-badge v-if="props.row.activoPro == 0" variant="danger">CERRADO</b-badge>
                    </span>
                    <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </span>
                </template>
            </vue-good-table>
            <!------------------------------------------------- Modal Proyeccion ---------------------------------------->
        <b-modal
          id="modal-proyeccion" v-model="showModal"
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
                <b-col md="3" xl="4">
                    <b-form-group label="ID">
                        <b-form-input v-model="proyeccion.idProyeccion" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <b-form-group label="Nombre">
                        <b-form-input v-model="proyeccion.nombrePro" />
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12">
                    <b-form-group label="Ruta">
                        <v-select label="nombreRut" v-model="proyeccion.Ruta_idRuta" :reduce="rutas => rutas.idRuta" :options="rutas" style="flex: 1;" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Fecha Inicio">
                        <flat-pickr v-model="proyeccion.inicioPro" class="form-control" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Fecha Fin">
                        <flat-pickr v-model="proyeccion.finPro" class="form-control" :config="{ minDate: proyeccion.inicioPro }"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Cantidad">
                        <b-form-input v-model="proyeccion.valorPro" />
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
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="Actualizar()" v-else :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
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
    BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BCard, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'

export default { 
    components: {
    BToast,
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
    BCard,
    flatPickr,
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

            tcolumnas: [
                    { label: 'Acciones', field: 'acciones' },
                    { label: 'ID', field: 'idProyeccion'},
                    { label: 'Nombre', field: 'nombrePro'},
                    { label: 'Ruta', field: 'nombreRut'},
                    { label: 'F. Inicio', field: 'inicioPro'},
                    { label: 'F. Fin', field: 'finPro'},
                    { label: 'Cantidad', field: 'valorPro'},
                    { label: 'Estado', field: 'activoPro'},
                    { label: 'Ruta_idRuta', field: 'Ruta_idRuta', hidden: true },
                ],

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO SERVICIO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            
            /**************************** entorno ****************************/
            rutas: [], 
            externos: [],
            proyecciones: [],
            
            /**************************** formulario ****************************/
            proyeccion: { 
                idProyeccion: 0, 
                inicioPro: "", 
                finPro: "",
                nombrePro: "",
                valorPro: 0, 
                Ruta_idRuta: 0,
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
            this.headerTitleVariant = 'NUEVO PROYECCION';
            this.boton = false;
            this.proyeccion = { 
                idProyeccion: 0, 
                inicioPro: "", 
                finPro: "",
                nombrePro: "",
                valorPro: 0, 
                Ruta_idRuta: 0,
            }
        },
        Editar( prm_proyeccion ) 
        {
            this.headerTextVariant = 'primary';
            this.headerTitleVariant = "EDITAR PROYECCION"
            this.boton = true;
            this.proyeccion = prm_proyeccion;
        }, 

        Guardar() 
        {
            if ( this.proyeccion.nombrePro == null || this.proyeccion.nombrePro == "" )
            {
                this.Toast(true,'danger','Ruta','Ingrese Nombre');
                return;
            }

            if ( this.proyeccion.Ruta_idRuta == 0 || this.proyeccion.Ruta_idRuta == "" )
            {
                this.Toast(true,'danger','Ruta','Seleccione una Ruta');
                return;
            }
            
            if ( this.proyeccion.inicioPro == null || this.proyeccion.inicioPro == "" )
            {
                this.Toast(true,'danger','Cantidad','Seleccione Fecha Inicio');
                return;
            }

            if ( this.proyeccion.finPro == null || this.proyeccion.finPro == "" )
            {
                this.Toast(true,'danger','Cantidad','Seleccione Fecha Fin');
                return;
            }

            if ( this.proyeccion.valorPro == 0 || this.proyeccion.valorPro == "" )
            {
                this.Toast(true,'danger','Cantidad','Ingrese una Cantidad');
                return;
            }

            this.showLoading = true; 
            var jsonProyeccion = JSON.stringify( this.proyeccion ); 
            
            this.$http.post('/LiberAPP/Proyeccion/Guardar', {
                proyeccion: jsonProyeccion,
            }).then(res => {
                this.Toast(true,'primary','Guardar Proyeccion','Guardado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Proyeccion();
                
            }).catch(error => {
                this.Toast(true,'danger','Guardar Proyeccion','Error al Guardar el registro: '+error);
                this.showLoading = false;
            })

        }, 
        Actualizar() 
        {
            this.showLoading = true;
            var jsonProyeccion = JSON.stringify( this.proyeccion ); 
            this.$http.post('/LiberAPP/Proyeccion/Actualizar', 
            {
                proyeccion: jsonProyeccion,
            }).then( res => { 
                this.Toast(true,'primary','Actualizar Proyeccion','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Proyeccion();
            }).catch( error => { 
                this.Toast(true,'danger','Actualizar Proyeccion','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        },
        Proyeccion() 
        {
            this.$http.get('/LiberAPP/Proyeccion/Listar').then(res => {
                this.proyecciones = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Proyecciones','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
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
        
        this.$http.get('/LiberAPP/Proyeccion/Listar').then(res => {
            this.proyecciones = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Proyecciones','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Ruta/Select').then(res => {
            this.rutas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Ruta','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        this.$http.get('/LiberAPP/Externo/Select').then(res => {
            this.externos = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    } 
}
</script>
<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>