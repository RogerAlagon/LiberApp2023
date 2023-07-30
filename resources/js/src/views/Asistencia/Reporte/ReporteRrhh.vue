<template>
    <div>
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
                    <flat-pickr v-model="yfinicio" class="form-control" />
                    <!--<b-form-datepicker v-model="yfinicio" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                    </b-form-datepicker>-->
                </b-col>
                <b-col md="6" xl="3">
                    <h6>Hasta:</h6>
                    <flat-pickr v-model="yffin" class="form-control" :config="{ minDate: yfinicio }" />
                    <!--<b-form-datepicker v-model="yffin" class="form-control" :minDate="yfinicio" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" new=date()>
                    </b-form-datepicker>-->
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
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-formulario variant="gradient-primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                    </span>
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
                <b-col md="12" xl="2">
                    <b-form-group label="ID">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="papeleta.idPermiso" readonly/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="4">
                    <b-form-group label="Fecha Solicitud">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="papeleta.fechaPer" class="form-control" disabled/>
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Fecha Inicio">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                          <flat-pickr v-model="papeleta.finicioPer" class="form-control" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Fecha Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="papeleta.ffinPer" class="form-control" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Nueva Fecha Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr :disabled='estadoFechaN' v-model="papeleta.ffinPerN" class="form-control" :config="{ minDate: papeleta.finicioPer }" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="invoice-spacing">
            <b-row>    
                <b-col md="12" xl="6">
                    <b-form-group label="Motivo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="valorDat" style="flex: 1;" v-model="papeleta.Permiso_idDato" :reduce="motivos => motivos.idDato" :options="motivos" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hora Inicio">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="papeleta.hinicioPer" class="form-control" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i',}" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hora Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <flat-pickr v-model="papeleta.hfinPer" class="form-control" :config="{ enableTime:true, noCalendar: true, dateFormat:'H:i', }" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Nueva Hora Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <flat-pickr :disabled='estadoHoraN' v-model="papeleta.hfinPerN" class="form-control" :config="{ enableTime:true, noCalendar: true, dateFormat:'H:i', }"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="invoice-spacing">
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Destino">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-textarea v-model="papeleta.destinoPer" class="form-control" placeholder="Ingrese Destino" rows="2"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Observación / sustento">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-textarea v-model="papeleta.observacionPer" class="form-control" placeholder="Ingrese Observación" rows="2"/>
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
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="Actualizar" v-else :disabled="showLoading">
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
import BCardCode from '@core/components/b-card-code'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
   BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker
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
        flatPickr, 
        BFormTextarea
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
            { label:'Acciones', field:'acciones'},
            { label:'Trabajador', field:'trabajadorPer' }, 
            { label:'Estado', field:'estadoPer' }, 
            { label:'Fecha', field:'fechaPer'},
            { label:'Fecha Inicio', field:'finicioPer'},
            { label:'Fecha Fin', field:'ffinPer'},
            { label:'N. Fecha Fin', field:'ffinPerN'},
            { label:'Hora Inicio', field:'hinicioPer'},
            { label:'Hora Fin', field:'hfinPer'},
            { label:'N. Hora Fin', field:'hfinPerN'},
            { label:'Hora Permiso', field:'hdiferenciaPer'},
            { label:'Destino', field:'destinoPer'},
            { label:'Motivo', field:'valorDat'},
            { label:'Observación', field:'observacionPer'},
            { label:'idDato', field:'Permiso_idDato', hidden:true, },
            { label:'Valor', field:'valorDat', hidden:true, },
        ],
        /**************************** modal ****************************/
        headerBgVariant: 'dark',
        headerTextVariant: 'success',
        headerTitleVariant: 'CREAR PAPELETA',
        bodyBgVariant: 'light',
        bodyTextVariant: 'success',
        footerBgVariant: 'dark',
        footerTextVariant: 'dark',
        showModal: false,
        showLoading: false,
        boton: false,
        /**************************** entorno ****************************/ 
        motivos: [],
        estadoHora:true,
        estadoHoraN:true,
        estadoFechaN:true,
        papeletas:[],
        ypersonas:[],
        montos: [],
        estados: [
            { value: 'APROBADO', text: 'APROBADO EL' },
            { value: 'ANULADO', text: 'ANULADO EL' },
            { value: 'SOLICITADO', text: 'SOLICITADO EL' },
        ],
        papeleta: {
            idPermiso: "", 
            fechaPer: "", 
            estadoPer: "",
            finicioPer: "", 
            ffinPer: "", 
            destinoPer: "", 
            hinicioPer: "", 
            hfinPer: "", 
            motivoPer: "",
            hdiferenciaPer: "", 
            observacionPer: "", 
            Persona_idPersona: "", 
            tareoPer: "", 
            Permiso_idDato: ""
        },
        yfinicio: '',
        yffin: '',
        estado: "",

         locale: {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
          longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],         
        }, 
        months: {
          shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
          longhand: ['Enero', 'Febreo', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        },
      },
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
    Actualizar()
    {
        this.showLoading = true;
        this.papeleta.Persona_idPersona = this.userData.id
        if ( this.estadoHora == false ) {
            var diferencia = this.DiferenciaHora(this.papeleta.hinicioPer, this.papeleta.hfinPer); 
            this.papeleta.hdiferenciaPer = diferencia
        } else { 
            this.papeleta.hdiferenciaPer = '' 
        }
        if ( this.estadoHoraN == false ) {
            var diferencia = this.DiferenciaHora(this.papeleta.hinicioPer, this.papeleta.hfinPerN); 
            this.papeleta.hdiferenciaPer = diferencia
        }

        var jsonPermiso = JSON.stringify(this.papeleta);
        this.$http.post('/LiberAPP/Persona/Actualizar',
        {
            permiso: jsonPermiso
        })
        .then(res=> {
            this.Toast(true,'primary','Actualizar Papeleta','Actualizado Correctamente');
            this.showModal = false; 
            this.showLoading = false;
            this.Listar();
        })
        .catch(error=> {
            this.Toast(true,'danger','Actualizar Papeleta','Error al actualizar el registro: ' + error); 
            this.showLoading = false
        })
    },
    Editar( prm_detalle )
    {
        this.headerTextVariant = 'primary'; 
        this.headerTitleVariant = 'EDITAR PAPELETA'
        this.boton = true; 
        this.papeleta = prm_detalle
        if ( this.papeleta.finicioPer == this.papeleta.ffinPer )
        {
            this.Motivos('hora')
            this.estadoHora = false;
            this.estadoHoraN = false;
            this.estadoFechaN = true;
        } else { 
            this.Motivos('dias')
            this.estadoFechaN = false;
            this.estadoHora = true;
            this.estadoHoraN = true;
        }
    },
    Listar()
    {
        this.showLoading = true;
        this.$http.get('/LiberAPP/Persona/Papeleta/Listar/'+this.userData.id+'/rrhh/'+this.estado+'/'+this.yfinicio+'/'+this.yffin)
        .then(res => {
            this.showLoading = false;
            this.papeletas = res.data
            console.log( 'filtro:: ', res.data )
        })
        .catch(error => {
            this.Toast(true,'danger','Papeletas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    },
    DiferenciaHora( inicio, fin )
    {
        inicio = inicio.split(":");
        fin = fin.split(":");
        var startDate = new Date(0, 0, 0, inicio[0], inicio[1], 0);
        var endDate = new Date(0, 0, 0, fin[0], fin[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);

        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    },
    Motivos( estado ) 
    {
        this.$http.get('/LiberAPP/Persona/Motivo/'+ estado).then(res=> {
            this.motivos = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Motivo','Error al cargar los registros: '+error)
        })
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
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
