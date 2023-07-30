<template>
  <b-card-code title="Listado de Grifos">
    <!---------------------------------- nuevo -------------------------------->
    <b-button v-b-modal.modal-formulario variant="gradient-success" @click="Nuevo">
        <feather-icon icon="PlusIcon" class="mr-50"/>
        <span class="align-middle">NUEVO GRIFO</span>
    </b-button>

    <!---------------------------------- búsqueda -------------------------------->
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">Buscar:</label>
          <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
        </div>
      </b-form-group>
    </div>

    <!---------------------------------- tabla -------------------------------->
    <vue-good-table
      :columns="columns"
      :rows="grifos"
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
      <!---------------------------------- columnas especiales -------------------------------->
      <template slot="table-row" slot-scope="props">
        <!---------------------------------- acciones -------------------------------->
        <span v-if="props.column.field === 'acciones'">
          <b-button v-b-modal.modal-formulario variant="gradient-primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
              <feather-icon icon="Edit2Icon"/>
          </b-button>
        </span>
        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!---------------------------------- paginación --------------------------------
      <template slot="pagination-bottom" slot-scope="props">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              {{ $t('message.pagelength') }}
            </span>
            <b-form-select v-model="pageLength" :options="['3','5','10']" class="mx-1" @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap">  {{ $t('message.of') }} {{ props.total }} {{ $t('message.pageText2') }} </span>
          </div>
          <div>
            <b-pagination :value="1" :total-rows="props.total" :per-page="pageLength" first-number last-number align="right" prev-class="prev-item"
            next-class="next-item" class="mt-1 mb-0" @input="(value)=>props.pageChanged({currentPage:value})">
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>-->
    </vue-good-table>

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
          <b-form-group label="ID"> <b-form-input v-model="grifo.idGrifo" readonly/> </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" xl="6">
          <b-form-group label="Nombre Grifo"> <b-form-input v-model="grifo.nombreGri"/> </b-form-group>
        </b-col>
        <b-col md="12" xl="6">
          <b-form-group label="Ciudad"> 
            <!--<b-form-input v-model="grifo.ciudadGri"/> -->
            <!--<v-select label="valorDat" v-model="grifo.ciudadGri" :reduce="ciudad => ciudad.idDato" :options="ciudades" style="flex: 1;"/>-->
            <v-select label="valorDat" v-model="grifo.detalleCiudad" :options="ciudades" style="flex: 1;"/>
          </b-form-group>
        </b-col>
        <b-col md="12" xl="6">
          <b-form-group label="Empresa"> <b-form-input v-model="grifo.empresaGri"/> </b-form-group>
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
      <b-overlay
          :show="showLoading"
          no-wrap
        />
    </b-modal>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'

import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner
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
        { label: 'ID', field: 'idGrifo', },
        { label: 'Grifo', field: 'nombreGri',},
        { label: 'Ciudad', field: 'ciudadGri',},
        { label: 'Empresa', field: 'empresaGri', },
        { label: 'idDato', field: 'detalleCiudad', hidden: true },
      ],
      /**************************** modal ****************************/
      headerBgVariant: 'dark',
      headerTextVariant: 'success',
      headerTitleVariant: 'NUEVO GRIFO',
      bodyBgVariant: 'light',
      bodyTextVariant: 'success',
      footerBgVariant: 'dark',
      footerTextVariant: 'dark',
      showModal: false,
      showLoading: false,
      boton: false,
      /**************************** entorno ****************************/
      grifos: [],
      ciudades: [],
      grifo: {
        idGrifo: '',
        nombreGri: '',
        ciudadGri: '',
        empresaGri: '',
        detalleCiudad: '',
        Ciudad_idDato: '',
        },
    }
  },
  methods : {
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
        this.grifo= {
          idGrifo: '',
          nombreGri: '',
          ciudadGri: '',
          empresaGri: '',
          detalleCiudad: '', 
          Ciudad_idDato: '',
        };
      },
      Editar(prm_grifo)
      {
        this.headerTextVariant = 'primary';
        this.headerTitleVariant = "EDITAR GRIFO"
        this.boton = true;
        this.grifo = prm_grifo;
      },
      Guardar()
      {
        this.showLoading = true;
        this.grifo.Ciudad_idDato = this.grifo.detalleCiudad.idDato;
        this.grifo.ciudadGri = this.grifo.detalleCiudad.valorDat;
        var jsonGrifo = JSON.stringify(this.grifo);
        this.$http.post('/LiberAPP/Grifo/Guardar',
        {
          grifo: jsonGrifo,
        })
        .then(res => {
          this.Toast(true,'success','Agregar Grifo','Guardado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.Grifo();
          //respuesta
          //this.grifos = res.data;
        })
        .catch(error => {
          this.Toast(true,'danger','Actualizar Grifo','Error al guardar el registro: '+error);
          this.showLoading = false;
        });
      },
      Actualizar()
      {
        this.showLoading = true;
        this.grifo.Ciudad_idDato = this.grifo.detalleCiudad.idDato;
        this.grifo.ciudadGri = this.grifo.detalleCiudad.valorDat;
        var jsonGrifo = JSON.stringify(this.grifo);
        this.$http.post('/LiberAPP/Grifo/Actualizar',
        {
          grifo: jsonGrifo,
        })
        .then(res => {
          this.Toast(true,'primary','Actualizar Grifo','Actualizado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.Grifo();

          //respuesta
          //this.grifos = res.data;
        })
        .catch(error => {
          this.Toast(true,'danger','Actualizar Grifo','Error al actualizar el registro: '+error);
          this.showLoading = false;
        });
      },
      Grifo()
      {
        this.$http.get('/LiberAPP/Grifo').then(res => {
          this.grifos = res.data;
        })
        .catch(error => {
          this.Toast(true,'danger','Grifo','Error al cargar los registros: '+error);
          this.showLoading = false;
        });
      },

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
      this.$http.get('/LiberAPP/Grifo').then(res => {
        this.grifos = res.data;
      }).catch(error => {
        this.Toast(true,'danger','Grifo','Error al cargar los registros: '+error);
        this.showLoading = false;
      });

      this.$http.get('/LiberAPP/Dato/Select/CIUDAD/COMBUSTIBLE').then(res=> {
        this.ciudades = res.data;
      }).catch(error => {
          this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
      })
  },

}
</script>
<style lang="scss" >
@import '~@core/scss/vue/libs/vue-good-table.scss';
</style>
