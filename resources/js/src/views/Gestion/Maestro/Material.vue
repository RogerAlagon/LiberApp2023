
<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="12" xl="12">
                    <h3>MATERIALES</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="6">
                    <!---------------------------------- nuevo -------------------------------->
                    <b-button v-b-modal.modal-material variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">NUEVO MATERIAL</span>
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
              :columns="columns"
              :rows="materiales"
              :rtl="direction"
              :search-options="{ enabled: true, externalQuery: searchTerm }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                  <!---------------------------------- acciones -------------------------------->
                  <span v-if="props.column.field === 'acciones'">
                    <b-button v-b-modal.modal-material variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow, false)">
                        <feather-icon icon="Edit2Icon"/>
                    </b-button>
                    <b-button v-b-modal.modal-material variant="warning" class="btn-icon rounded-circle" @click="Stock(props.formattedRow, true)">
                        <feather-icon icon="BoxIcon"/>
                    </b-button>
                  </span>
                  <!-- Column: Common -->
                  <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                  </span>
                </template>
            </vue-good-table>
        </b-card>
        <!------------------------------------------------- Modal Material ---------------------------------------->
        <b-modal
          id="modal-material" v-model="showModal"
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
                        <b-form-input v-model="material.idMaterial" readonly/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="Material">
                        <b-form-input v-model="material.nombreMat" :disabled="tipoEdicion" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-if="tipoEdicion == false">
                    <b-form-group label="Clasificación Material">
                        <v-select label="valorDat" v-model="material.Unidad_idDato" :reduce="clasificacion => clasificacion.idDato" :options="clasificacion" style="flex: 1;" :disabled="boton" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-if="tipoEdicion == true">
                    <b-form-group label="Tipo">
                        <b-button v-if="material.tipoKar == 'ENTRADA'" variant="success" size="sm" @click="material.tipoKar='SALIDA';">INGRESO A ALMACÉN</b-button>
                        <b-button v-if="material.tipoKar == 'SALIDA'" variant="warning" size="sm" @click="material.tipoKar='ENTRADA';">SALIDA DE ALMACÉN</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-if="tipoEdicion == false">
                    <b-form-group label="Cantidad">
                        <b-form-input v-model="material.stockMat" :disabled="boton" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-else >
                    <b-form-group label="Cantidad">
                        <b-form-input v-model="material.stockKar" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-if="tipoEdicion == false">
                    <b-form-group label="Almacen">
                        <v-select label="nombreAlm" v-model="material.Almacen_idAlmacen" :reduce="almacen => almacen.idAlmacen" :options="almacen" style="flex: 1;" :disabled="boton" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6" v-if="tipoEdicion == true">
                    <b-form-group label="Motivo del Movimiento">
                        <b-form-input v-model="material.conceptoKar" />
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
                    <b-button variant="primary" size="sm" @click="Actualizar(tipoEdicion)" v-else :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Actualizar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </div>
</template>
<script>
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BCard, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import { computed } from 'vue-demi'

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
            { label:'Acciones', field:'acciones' },
            { label:'ID', field:'idMaterial' },
            { label:'Material', field:'nombreMat' },
            { label:'Stock', field:'stockMat' },
            { label:'Clasificacion', field:'valorDat' },
            { label:'Dato', field:'Unidad_idDato', hidden: true },
            { label:'idAlmacen', field:'Almacen_idAlmacen', hidden: true },
            { label:'tipoKar', field:'tipoKar', hidden: true },
            { label:'idKardex', field:'idKardex', hidden: true },
        ],
        
        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'success',
        headerTitleVariant: 'NUEVO MATERIAL',
        bodyBgVariant: 'light',
        bodyTextVariant: 'success',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showLoading: false,
        boton: false,

        /**************************** entorno ****************************/
        clasificacion: [],
        materiales: [],
        almacen: [],
        tipoEdicion: false, //Editar Material, Kardex
        /**************************** formulario ****************************/
        material: { 
            idMaterial: 0, 
            nombreMat: "", 
            Unidad_idDato: 0,
            stockMat: 0, 
            stockKar: 0,
            Almacen_idAlmacen: 0, 
            conceptoKar: "",
            tipoKar: "ENTRADA",
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
        this.headerTitleVariant = 'NUEVO MATERIAL';
        this.boton = false;
        this.material = {
            idMaterial: 0, 
            nombreMat: "", 
            Unidad_idDato: 0,
            stockMat: 0, 
            stockKar: 0,
            Almacen_idAlmacen: 0,
            conceptoKar: "",
            tipoKar:"",
        };
    }, 
    Editar( prm_material, tipo )
    {
        this.headerTextVariant = 'primary';
        this.headerTitleVariant = "EDITAR MATERIAL"
        this.boton = true;
        this.material = prm_material;
        this.tipoEdicion = tipo;
    },
    Stock( prm_material, tipo )
    {
        this.headerTextVariant = 'primary';
        this.headerTitleVariant = "MOVIMIENTO KARDEX";
        this.boton = true;
        this.material = prm_material;
        this.tipoEdicion = tipo;
    },
    Guardar()
    {
        if ( this.material.nombreMat == null || this.material.nombreMat == "") 
        {
            this.Toast(true,'danger','Material','Ingrese un Material');
            return;
        }

        if ( this.material.Unidad_idDato == null || this.material.Unidad_idDato == 0) 
        {
            this.Toast(true,'danger','Clasificacion','Seleccione una Clasificación');
            return;
        }

        if ( this.material.stockMat == null || this.material.stockMat == 0 )
        {
            this.Toast(true,'danger','Material','Ingrese Cantidad');
            return;
        }

        if ( this.material.Almacen_idAlmacen == null || this.material.Almacen_idAlmacen == 0 ) 
        {
            this.Toast(true,'danger','Almacen','Seleccione Almacen');
            return;
        }

        this.showLoading = true
        var jsonMateriales = JSON.stringify( this.material )
        this.$http.post('/LiberAPP/Material/Guardar', 
        {
            material: jsonMateriales,
        }).then(res => {
            this.Toast(true,'primary','Guardar Material','Guardado Correctamente');
            this.showModal = false; 
            this.showLoading = false;
            this.ListarMateriales();
        }).catch(error => {
            this.Toast(true,'danger','Guardar Material','Error al Guardar el registro: '+error);
            this.showLoading = false;
        })
    },
    Actualizar( edicion )
    {
        var jsonMateriales = JSON.stringify( this.material );
        if ( edicion == false ) //Actualizar Material
        {
            this.showLoading = true
            this.$http.post('/LiberAPP/Material/Actualizar', 
            {
                material: jsonMateriales,
            }).then(res => {
                this.Toast(true,'primary','Actualizar Material','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.ListarMateriales();
            }).catch(error => {
                this.Toast(true,'danger','Actualizar Material','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        }

        if ( edicion == true ) //Actualizar Kardex
        {
            if ( this.material.stockKar == null || this.material.stockKar == 0) 
            {
                this.Toast(true,'danger','Cantidad','Ingrese Cantidad');
                return;
            }
            if ( this.material.conceptoKar == null || this.material.conceptoKar == "") 
            {
                this.Toast(true,'danger','Concepto','Ingrese Concepto');
                return;
            }

            this.showLoading = true
            this.$http.post('/LiberAPP/Kardex/Guardar', 
            {
                kardex: jsonMateriales,
            }).then(res => {
                this.Toast(true,'primary','Actualizar Material','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.ListarMateriales();
            }).catch(error => {
                this.Toast(true,'danger','Actualizar Material','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        }
    },
    ListarMateriales()
    {
        this.$http.get('/LiberAPP/Material/Listar').then(res=> {
            this.materiales = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Materiales','Error al cargar los registros: ' + error);
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
    
    this.$http.get('/LiberAPP/Dato/Select/MEDIDA/LOGISTICA').then(medida => {
        this.$http.get('/LiberAPP/Dato/Select/UNIDAD/LOGISTICA').then( unidad => { 
            this.clasificacion = medida.data;
            this.clasificacion = this.clasificacion.concat(unidad.data);
        }).catch( error => { 
            this.Toast(true,'danger','Clasificacion Unidad','Error al cargar los registros: ' + error);
        })
    }).catch(error => {
        this.Toast(true,'danger','Clasificacion Medida','Error al cargar los registros: ' + error);
    })
    
    this.$http.get('/LiberAPP/Material/Listar').then(res=> {
        this.materiales = res.data;
    }).catch(error => {
        this.Toast(true,'danger','Materiales','Error al cargar los registros: ' + error);
    })

    this.$http.get('/LiberAPP/Almacen/Listar').then(res=> {
        this.almacen = res.data;
    }).catch(error => {
        this.Toast(true,'danger','Almacen','Error al cargar los registros: ' + error);
    })

  },
}
</script>
<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';
</style>