<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="4" xl="4">
                    <!---------------------------------- nuevo -------------------------------->
                    <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">Crear Papeleta</span>
                    </b-button>
                </b-col>
                <b-col md="4" xl="4">
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
            :columns="columns" :rows="papeletas" :rtl="direction"
            :search-options="{ enabled: true, externalQuery: searchTerm }"
            :select-options="{
                enabled: true,
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
                    <span v-if="props.column.field == 'acciones'">
                        <b-button variant="gradient-primary" class="btn-icon rounded-circle" @click="PapeletaBaja(props.formattedRow)">
                            <feather-icon icon="Trash2Icon"/>
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
              <!---------------------------------- paginación -------------------------------->
                <template slot="pagination-bottom" slot-scope="props">
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="d-flex align-items-center mb-0 mt-1">
                            <span class="text-nowrap">
                                {{ $t('message.pagelength') }}
                            </span>
                            <b-form-select v-model="pageLength" :options="['3','5','10']" class="mx-1" @input="(value)=>props.perPageChanged({currentPerPage:value})"/>
                            <span class="text-nowrap">  {{ $t('message.of') }} {{ props.total }} {{ $t('message.pageText2') }} </span>
                        </div>
                        <div>
                            <b-pagination :value="1" :total-rows="props.total" :per-page="pageLength" first-number last-number align="right" prev-class="prev-item"next-class="next-item" class="mt-1 mb-0" @input="(value)=>props.pageChanged({currentPage:value})">
                                <template #prev-text>
                                    <feather-icon icon="ChevronLeftIcon" size="18" />
                                </template>
                                <template #next-text>
                                    <feather-icon icon="ChevronRightIcon" size="18" />
                                </template>
                            </b-pagination>
                        </div>
                    </div>
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
                          <flat-pickr v-model="papeleta.finicioPer" class="form-control" @input="DiferenciaFecha()"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Fecha Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="papeleta.ffinPer" class="form-control" @input="DiferenciaFecha()" :config="{ minDate: papeleta.finicioPer }" />
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
                            <v-select label="valorDat" style="flex: 1;" v-model="papeleta.Permiso_idDato" :reduce="motivos => motivos.idDato" :options="motivos" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hora Inicio">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr :disabled='estadoHora' v-model="papeleta.hinicioPer" class="form-control" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i',}"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hora Fin">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <flat-pickr :disabled='estadoHora' v-model="papeleta.hfinPer" class="form-control" :config="{ enableTime:true, noCalendar: true, dateFormat:'H:i', }"/>
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
            pageLength: 10,
            searchTerm: '',
            tabIndex: 1,
            userData: JSON.parse(localStorage.getItem('userData')), //Datos del usuario Local,

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
                { label:'Hora Inicio', field:'hinicioPer'},
                { label:'Hora Fin', field:'hfinPer'},
                { label:'Hora Permiso', field:'hdiferenciaPer'},
                { label:'Destino', field:'destinoPer'},
                { label:'Motivo', field:'motivo'},
                { label:'Observación', field:'observacionPer'},
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
            papeletas: [],
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
            }
      }
  },
    methods: {
        Toast(prm_append = false, variant = null, prm_titulo = "", prm_mensaje = "")
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
        Nuevo()
        {
            this.headerTextVariant = 'success'; 
            this.headerTitleVariant = 'CREAR PAPELETA'; 
            this.boton = false;
            this.papeleta = {
                idPermiso: '', 
                fechaPer: '', 
                estadoPer: '', 
                finicioPer: '', 
                ffinPer: '', 
                destinoPer: '', 
                hinicioPer: '', 
                hfinPer: '', 
                motivoPer: '', 
                hdiferenciaPer: '', 
                observacionPer: '', 
                Persona_idPersona: '', 
                tareoPer: ''
            }
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
            } else { 
                this.Motivos('dias')
                this.estadoHora = true;
            }
        },
        Guardar()
        {
            this.showLoading = true;
            this.papeleta.Persona_idPersona = this.userData.id

            if ( this.estadoHora == false )
            {
                var diferencia = this.DiferenciaHora(this.papeleta.hinicioPer, this.papeleta.hfinPer); 
                this.papeleta.hdiferenciaPer = diferencia
            }

            var jsonPapeleta = JSON.stringify(this.papeleta);

            this.$http.post('/LiberAPP/Persona/Guardar', 
            {
                permiso: jsonPapeleta
            })
            .then(res => {
                this.Toast(true,'success','Crear Papeleta','Guardado Correctamente');
                this.showModal = false; 
                this.showLoading = false; 
                this.Papeleta();
            })
            .catch(error => {
                this.Toast(true,'danger','Crear Papeleta','Error al guardar el registro: '+error);
                this.showLoading = false;
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
            var jsonPermiso = JSON.stringify(this.papeleta);
            this.$http.post('/LiberAPP/Persona/Actualizar',
            {
                permiso: jsonPermiso
            })
            .then(res=> {
                this.Toast(true,'primary','Actualizar Papeleta','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Papeleta();
            })
            .catch(error=> {
                this.Toast(true,'danger','Actualizar Papeleta','Error al actualizar el registro: ' + error); 
                this.showLoading = false
            })
        },
        DiferenciaFecha()
        {
            if ( this.papeleta.finicioPer == this.papeleta.ffinPer )
            {
                this.Motivos('hora')
                this.estadoHora = false;
                this.papeleta.motivoPer = ''
            } else { 
                this.Motivos('dias')
                this.estadoHora = true;
                this.papeleta.hinicioPer = '' 
                this.papeleta.hfinPer = ''
                this.papeleta.motivoPer = ''
            }
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
        Papeleta()
        {
            this.$http.get('/LiberAPP/Persona/Papeleta/' + this.userData.id + '/solicitud').then(res=> {
                this.papeletas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Papeletas','Error al cargar los registros: '+error)
            })
        },
        PapeletaBaja( prm_papeleta ) {
            this.papeleta = prm_papeleta
            this.$swal({
                title: 'Anular la Papeleta?',
                text: "No podrás revertir esto.!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, anular!',
                customClass: {
                  confirmButton: 'btn btn-primary',
                  cancelButton: 'btn btn-outline-danger ml-1',
                },
                buttonsStyling: false,
            }).then(result => {
                if (result.value) {
                    console.log( 'anulada:: ', result.value )
                    this.papeleta.estadoPer = 'ANULADO';
                    var jsonPapeleta = JSON.stringify( this.papeleta )
                    this.$http.post('/LiberAPP/Persona/Anular', 
                    {
                        permiso: jsonPapeleta
                    }).then(res => {
                        this.$swal({
                            icon: 'success',
                            title: 'Anulación Exitosa!',
                            text: 'La papeleta fue Anulada.',
                            customClass: {
                                confirmButton: 'btn btn-success',
                            },
                        })
                        this.Papeleta();
                    }).catch(error => {
                        this.Toast(true,'danger','Anular Papeleta','Error al anular papeleta: ' + error);
                    })
                }
            })
        },
    },
    computed: {
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
        this.$http.get('/LiberAPP/Persona/Motivo/todo').then(res=> {
            this.motivos = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Motivo','Error al cargar los registros: '+error)
        })
        this.$http.get('/LiberAPP/Persona/Papeleta/' + this.userData.id + '/solicitud').then(res=> {
            this.papeletas = res.data;
            console.log( 'Responsable:: ', res.data )
        })
        .catch(error => {
            this.Toast(true,'danger','Papeletas','Error al cargar los registros: '+error)
        })
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
    @import '~@core/scss/vue/libs/vue-sweetalert.scss';
</style>