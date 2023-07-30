<template><div>
    <b-card>
        <b-row>
            <b-col md="6" xl="3">
                <b-form-group label="Buscar por:">
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                        <b-form-select v-model="estado" :options="estados"/>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="3">
                <h6>Desde:</h6>
                <b-form-datepicker v-model="yfinicio" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="3">
                <h6>Hasta:</h6>
                <b-form-datepicker v-model="yffin" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                </b-form-datepicker>
            </b-col>
            <b-col md="6" xl="2">
                <div class="demo-inline-spacing">
                    <b-button variant="success" @click="Listar()" :disabled="showLoading">
                        <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Listar</span>
                    </b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>
    <b-card>
        <b-row>
            <b-col md="9" xl="9" class="text-left">
                <h4> HISTORIAL DE SOLICITUD DE PAPELETAS</h4>
            </b-col>
            <b-col md="3" xl="3" class="text-left">
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
        </b-row><br>

    <!---------------------------------- tabla -------------------------------->
    <vue-good-table
        :columns="columns" :rows="papeletas" :rtl="direction"
        :search-options="{ enabled: true, externalQuery: searchTerm }"
        :select-options="{
            selectOnCheckboxOnly: true, 
            selectionInfoClass: 'custom-class',
            selectionText: 'rows selected',
            clearSelectionText: 'clear',
            disableSelectInfo: true, // disable the select info panel on top
            selectAllByGroup: true, 
          }"
          :pagination-options="{enabled: true, perPage:pageLength }" >
        <!---------------------------------- columnas especiales -------------------------------->
        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'jefeareaPer'">
                <b-badge v-if="props.row.jefeareaPer==null">SIN ACCION</b-badge>
                <b-badge v-if="props.row.jefeareaPer=='0' || props.row.jefeareaPer=='true'" variant="success">APROBADO</b-badge>
                <b-badge v-if="props.row.jefeareaPer=='1' || props.row.jefeareaPer=='false'" variant="danger">ANULADO</b-badge>
            </span> 
            <span v-else-if="props.column.field === 'recursoPer'">
                <b-badge v-if="props.row.recursoPer==null">SIN ACCION</b-badge>
                <b-badge v-if="props.row.recursoPer=='0' || props.row.recursoPer=='true'" variant="success">APROBADO</b-badge>
                <b-badge v-if="props.row.recursoPer=='1' || props.row.recursoPer=='false'" variant="danger">ANULADO</b-badge>
            </span>

            <!-- Column: Common -->
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
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
   BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'

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
            userData: JSON.parse(localStorage.getItem('userData')), //Datos del usuario Local

        
        /**************************** tabla ****************************/
            columns: [
                { label:'', field:'acciones', hidden:true, },
                { label:'ID', field:'idPermiso', hidden:true, },
                { label:'Jefe Area', field:'jefeareaPer'},
                { label:'Recursos H.', field:'recursoPer'},
                { label:'Trabajador', field:'trabajadorPer' }, 
                { label:'Estado', field:'estadoPer' }, 
                { label:'Fecha', field:'fechaPer'},
                { label:'Fecha Inicio', field:'finicioPer'},
                { label:'Fecha Fin', field:'ffinPer'},
                { label:'Hora Inicio', field:'hinicioPer'},
                { label:'Hora Fin', field:'hfinPer'},
                { label:'Hora Permiso', field:'hdiferenciaPer'},
                { label:'Destino', field:'destinoPer'},
                { label:'Motivo', field:'motivoPer'},
                { label:'Observación', field:'observacionPer'},
            ],
        showLoading: false,
        /**************************** entorno ****************************/ 
        papeletas:[],
        ypersonas:[],
        montos: [],
        estados: [
            { value: 'APROBADO', text: 'APROBADO EL' },
            { value: 'ANULADO', text: 'ANULADO EL' },
            { value: 'SOLICITADO', text: 'SOLICITADO EL' },
        ],
        yfinicio: '',
        yffin: '',
        estado: "",
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
        this.$http.get('/LiberAPP/Persona/Papeleta/Listar/'+this.userData.id+'/jefearea/'+this.estado+'/'+this.yfinicio+'/'+this.yffin)
        .then(res => {
            this.showLoading = false;
            this.papeletas = res.data
        })
        .catch(error => {
            this.Toast(true,'danger','Viáticos','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },

},
computed: {
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
  created()
  {
    this.$http.get('/LiberAPP/Persona/Select')
      .then(res => {
          this.ypersonas = res.data;
      })
      .catch(error => {
          this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
          this.showLoading = false;
    });
  },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
</style>
