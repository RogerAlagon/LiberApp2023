<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="3" xl="3">
                    <b-form-group label="Cuenta:">
                        <!--<v-select label="valorDat" v-model="zcuenta" :options="cuentas" style="flex: 1;" @input="reporte.cuenta = zcuenta.idDato"/>-->
                        <v-select label="valorDat" v-model="idCuenta" :options="grupos" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <h6>Fecha Inicio:</h6>
                    <b-form-datepicker class="form-control" v-model="fechaIni" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                    </b-form-datepicker>
                </b-col>
                <b-col md="3" xl="3">
                    <h6>Fecha Fin:</h6>
                    <b-form-datepicker class="form-control" v-model="fechaFin" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                    </b-form-datepicker>
                </b-col>
                <b-col md="3" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button variant="primary" @click="buscarConvoy">
                            <feather-icon icon="SearchIcon" class="mr-50"/>
                            <span class="align-middle">BUSCAR</span>
                        </b-button>
                        <b-button variant="success">
                            <feather-icon icon="MapPinIcon" class="mr-50"/>
                            <span class="align-middle">ACTUALIZAR</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>

        </b-card>
        <b-modal
            id="modal-formulario" v-model="showModal" ref="my-modal"
            :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
            :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="lg"
            cancel-variant="secondary" ok-variant="success"
        >
        <!---------------------------------- formulario -------------------------------->
        <div class="card convoy">
            <div class="card-title text-center">
                <h5 class="text-primary mt-2">{{ convoy.convoy +': TRANSPORTE DE '+convoy.carga }} 
                    <b-badge v-b-modal.modal-eventos-lista variant="warning" class="badge-glow" @click="listarEventos( convoy )"> 
                        <feather-icon icon="AlertTriangleIcon"/> {{ contador_eventualidad }}
                    </b-badge>
                </h5>
            </div>
            <hr>
            <div class="card-body">
                <b-row>
                    <b-col md="12" xl="12" class="border-left-primary border-left-3">
                        <dl class="row">
                            <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                            <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                            <dd class="col-sm-4 text-center font-weight-bolder">EVENTOS</dd>
                        </dl>
                        <dl class="row" v-for="( uservicio, indice ) in convoy.servicios">
                            <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                            </dt>
                            <dd class="col-sm-5 text-center"> 
                                <b-badge variant="primary" v-if="uservicio.escoltaSer == 1">Sup.</b-badge> {{ uservicio.trabajador }}
                            </dd>
                            <dd class="col-sm-4 text-center">
                                <b-badge v-b-modal.modal-eventos variant="warning" class="badge-glow" @click="nuevoEvento(uservicio)"> 
                                    <feather-icon icon="AlertTriangleIcon"/>
                                </b-badge>
                            </dd>
                        </dl>
                    </b-col>
                </b-row>
            </div>
        </div>
        <!--<h5 class="text-primary">
            <feather-icon icon="TruckIcon" />
            <span>Servicios</span>
        </h5>
        <div class="card-body">
            <b-row>
                <b-col md="3" xl="2">
                        <b-button variant="primary" size="sm" @click="cargarServicios(convoy)">
                            <feather-icon icon="MapPinIcon" class="mr-50"/>
                            <span class="align-middle">Cargar Servicios en Mapa</span>
                        </b-button>
                </b-col>
            </b-row>
        </div>-->
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
            <div class="w-100 d-flex justify-content-between">
            </div>
        </template>
        <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!-------------------------------------------- MODAL FORMULARIO EVENTOS --------------------------------------------->
        <b-modal
            id="modal-eventos" v-model="showModalE" ref=""
            :header-bg-variant="headerBgVariantE" :header-text-variant="headerTextVariantE" :title="headerTitleVariantE"
            :footer-bg-variant="footerBgVariantE" :footer-text-variant="footerTextVariantE"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="lg"
            cancel-variant="secondary" ok-variant="success"
        >
            <b-row>
                <b-col md="4" xl="4">
                    <b-form-group label="Tipo de Evento">
                        <v-select label="nombreEve" v-model="obj_evento.Evento_idEvento" :options="eventos" />
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Ciudad">
                        <v-select label="valorDat" v-model="obj_evento.Ciudad_idDato" :options="ciudades" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Fecha Inicio">
                        <b-form-datepicker class="form-control" v-model="obj_evento.finicioEvt" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Hora Inicio">
                        <cleave class="form-control" :raw="false" v-model="obj_evento.hinicioEvt" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Fecha Fin">
                        <b-form-datepicker class="form-control" v-model="obj_evento.ffinEvt" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Hora Fin">
                        <cleave class="form-control" :raw="false" v-model="obj_evento.hfinEvt" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Aplicar Evento">
                        <v-select label="text" v-model="obj_evento.tipoEvt" :options="tipoEvento" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" :disabled="showLoadingE">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoadingE"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="guardarEventualidad" :disabled="showLoadingE">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoadingE"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!-------------------------------------------- MODAL LISTA EVENTOS --------------------------------------------->
        <b-modal
            id="modal-eventos-lista" v-model="showModalEL" ref="eventos-lista"
            :header-bg-variant="headerBgVariantEL" :header-text-variant="headerTextVariantEL" :title="headerTitleVariantEL"
            :footer-bg-variant="footerBgVariantEL" :footer-text-variant="footerTextVariantEL"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="xl"
            cancel-variant="secondary" ok-variant="success"
        >
            <b-row>
                <b-col md="12" xl="12" class="border-left-warning border-left-3 border-right-warning border-right-3">
                    <dl class="row border-warning border-3">
                        <dt class="col-sm-1 text-center font-weight-bolder">Ciudad</dt>
                        <dt class="col-sm-2 text-center font-weight-bolder">Evento</dt>
                        <dt class="col-sm-3 text-center font-weight-bolder">Unidad/Operador</dt>
                        <dd class="col-sm-1 text-center font-weight-bolder">F.Inicio</dd>
                        <dd class="col-sm-1 text-center font-weight-bolder">F.Fin</dd>
                        <dd class="col-sm-1 text-center font-weight-bolder">Tipo</dd>
                        <dd class="col-sm-1 text-center font-weight-bolder">Acciones</dd>
                    </dl>
                    <dl class="row" v-for="( ueventos, indice ) in eventualidades.eventualidades">
                        <dd class="col-sm-1 text-center"> 
                            <span class="text-danger" style="font-weight: bold;">{{ ueventos.ciudad }}</span><br>
                        </dd>
                        <dd class="col-sm-2 text-center"> 
                            <span class="text-danger" style="font-weight: bold;">{{ ueventos.evento }}</span><br>
                        </dd>
                        <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                            <span class="text-dark">{{ ueventos.trabajadorPer }}</span><br>
                            <span class="text-secondary">{{ ueventos.placaVeh + ' / '+ ueventos.acopleVeh }}</span>
                        </dt>
                        <dd class="col-sm-1 text-center" style="white-space: nowrap;"> 
                            <span class="text-dark">{{ ueventos.finicioEvt }}</span><br>
                            <span class="text-secondary">{{ ueventos.hinicioEvt }}</span>
                        </dd>
                        <dd class="col-sm-1 text-center" style="white-space: nowrap;"> 
                            <span class="text-dark">{{ ueventos.ffinEvt }}</span><br>
                            <span class="text-secondary">{{ ueventos.hfinEvt }}</span>
                        </dd>
                        <dd class="col-sm-1 text-center"> 
                            <span class="text-dark">{{ ueventos.tipoEvt }}</span><br>
                        </dd>
                        <dd class="col-sm-1 text-center">
                            <b-badge variant="danger" class="badge-glow" @click="eliminarEventualidad( ueventos.idEventualidad )"> 
                                <feather-icon icon="TrashIcon"/>
                            </b-badge>
                        </dd>
                    </dl>
                </b-col>
                <!---<b-col md="12" xl="12">
                    <table class="table table-condensed table-bordered text-center">
                        <tr>
                            <th>Ciudad</th>
                            <th>Evento</th>
                            <th>Placa</th>
                            <th>Operador</th>
                            <th>Latitud</th>
                            <th>Longitud</th>
                            <th>F.Inicio</th>
                            <th>H.Inicio</th>
                            <th>F.Fin</th>
                            <th>H.Fin</th>
                            <th>Tipo</th>
                        </tr>
                        <tr v-for="( ueventos, indice ) in eventualidades.eventualidades ">
                            <td>{{ ueventos.ciudad }}</td>
                            <td>{{ ueventos.evento }}</td>
                            <td>{{ ueventos.placaVeh }}</td>
                            <td>{{ ueventos.trabajadorPer }}</td>
                            <td>{{ ueventos.latitudEvt }}</td>
                            <td>{{ ueventos.longitudEvt }}</td>
                            <td>{{ ueventos.finicioEvt }}</td>
                            <td>{{ ueventos.hinicioEvt }}</td>
                            <td>{{ ueventos.ffinEvt }}</td>
                            <td>{{ ueventos.hfinEvt }}</td>
                            <td>{{ ueventos.tipoEvt }}</td>
                        </tr>
                    </table>
                </b-col>-->
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!-------------------------------------------- MODAL ESTADO --------------------------------------------------------->
        <b-modal
            id="modal-formulario-estado" v-model="showModalES" ref="formulario-estado"
            :header-bg-variant="headerBgVariantES" :header-text-variant="headerTextVariantES" :title="headerTitleVariantES"
            :footer-bg-variant="footerBgVariantES" :footer-text-variant="footerTextVariantES"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="lg"
            cancel-variant="secondary" ok-variant="success"
        >
        <!---------------------------------- formulario -------------------------------->
        <div class="card convoy">
            <div class="card-title text-center">
                <h5 class="text-primary mt-2"><b>{{ convoy.convoy +': TRANSPORTE DE ' + convoy.carga }}</b>
                </h5>
            </div>
            <hr>
            <div class="card-body">
                <b-row>
                    <b-col md="4" xl="4">
                        <b-form-group label="Fecha Inicio Servicio">
                            <b-form-datepicker class="form-control" v-model="convoy.finicioCon" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                            </b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Hora Inicio Servicio">
                            <cleave v-model="convoy.hfinicioCon" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Fecha Fin Carga">
                            <b-form-datepicker class="form-control" v-model="convoy.ffincargaCon" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                            </b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Hora Fin Carga">
                            <cleave v-model="convoy.hfincargaCon" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Fecha Destino">
                            <b-form-datepicker class="form-control" v-model="convoy.fdestinoCon" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                            </b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Hora Destino">
                            <cleave v-model="convoy.hfdestinoCon" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Fecha Fin Descarga">
                            <b-form-datepicker class="form-control" v-model="convoy.ffindescargaCon" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short' }" locale="es" new=date() placeholder="YYYY-MM-DD">
                            </b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" xl="4">
                        <b-form-group label="Hora Fin Descarga">
                            <cleave v-model="convoy.hfindescargaCon" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss" />
                        </b-form-group>
                    </b-col>
                </b-row>
                <h5 class="text-success">
                    <feather-icon icon="TruckIcon" />
                    <span><b>Servicios</b></span>
                </h5>
                <hr class="invoice-spacing">
                <b-row>
                    <b-col md="12" xl="12" class="border-left-success border-left-3">
                        <dl class="row">
                            <dt class="col-sm-1 text-center font-weight-bolder"></dt>
                            <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                            <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                        </dl>
                        <dl class="row" v-for="( uservicio, indice ) in convoy.servicios">
                            <dd class="col-sm-1 text-center"> 
                                <h2 class="text-success" v-if="uservicio.escoltaSer == 1" size="md">
                                    <feather-icon icon="UserCheckIcon"/>
                                </h2>
                                <h2 class="text-warning" v-else size="md">
                                    <feather-icon icon="TruckIcon"/>
                                </h2>
                            </dd>
                            <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                            </dt>
                            <dd class="col-sm-5 text-center"> 
                                <b-badge variant="success" v-if="uservicio.escoltaSer == 1">Sup.</b-badge> {{ uservicio.trabajador }}
                            </dd>
                        </dl>
                    </b-col>
                </b-row>
            </div>
        </div>
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
            <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalES = false" :disabled="showLoadingES">
                    <feather-icon icon="XIcon" class="mr-50" v-if="!showLoadingES"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="primary" size="sm" @click="actualizarSeguimiento" :disabled="showLoadingES">
                    <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoadingES"/>
                    <b-spinner small v-else/>
                    <span class="align-middle">Actualizar</span>
                </b-button>
            </div>
        </template>
        <b-overlay :show="showLoadingES" no-wrap/>
        </b-modal>
        <b-card>
            <div id="map">
            </div>
        </b-card>
    </div>
</template>
<script>
import BCardCode from '@core/components/b-card-code'
import {
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BCard, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BFormDatepicker, BDropdown, BDropdownItem, BImg, BCardText, BOverlay, BSpinner, BPopover
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'
import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useRefHistory } from '@vueuse/core'
import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDbPs3OzDYsESNgSFuPfw5Ix7f_KKuivFk';

export default { 
    components: {
        BToast,
        BPopover,
        BCardCode,
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
        BCard,
        BCardText,
        BOverlay,
        vSelect,
        flatPickr,
        Cleave,
        BFormTextarea,
        AppTimeline,
        AppTimelineItem,
        BFormDatepicker,
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

            /**************************** modal formulario ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'SEGUIMIENTO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            
            /**************************** modal formulario eventualidad ****************************/
            headerBgVariantE: 'dark',
            headerTextVariantE: 'success',
            headerTitleVariantE: 'EVENTOS',
            bodyBgVariantE: 'light',
            bodyTextVariantE: 'success',
            footerBgVariantE: 'dark',
            footerTextVariantE: 'dark',
            showModalE: false,
            showLoadingE: false,
            botonE: false,
            /**************************** modal lista eventualidad ****************************/
            headerBgVariantEL: 'dark',
            headerTextVariantEL: 'success',
            headerTitleVariantEL: 'EVENTOS',
            bodyBgVariantEL: 'light',
            bodyTextVariantEL: 'success',
            footerBgVariantEL: 'dark',
            footerTextVariantEL: 'dark',
            showModalEL: false,
            showLoadingEL: false,
            botonEL: false,
            /**************************** modal formulario estado ****************************/
            headerBgVariantES: 'dark',
            headerTextVariantES: 'success',
            headerTitleVariantES: 'ESTADO SERVICIOS',
            bodyBgVariantES: 'light',
            bodyTextVariantES: 'success',
            footerBgVariantES: 'dark',
            footerTextVariantES: 'dark',
            showModalES: false,
            showLoadingES: false,
            botonES: false,


            arr_servicios: [],
            arr_seguimiento: [],
            loader: new Loader({ 
                apiKey: GOOGLE_MAPS_API_KEY,
            }),
            mapOptions: { 
                center: { 
                    lat: -15.30963057960103, 
                    lng: -71.5662905590773,
                }, 
                zoom: 7, 
                disableDefaultUI: false,
            },
            markers: [ 
                { 
                    lat: -16.33737000,
                    lng: -71.59412000,
                    label: 'Convoy 512',
                    servicios: 'Cantidad: 5',
                },
                { 
                    lat: -16.33742000,
                    lng: -71.59413000,
                    label: 'Convoy 513',
                    servicios: 'Cantidad: 4',
                },
                { 
                    lat: -17.02724000,
                    lng: -72.00420000,
                    label: 'Convoy 514',
                    servicios: 'Cantidad: 5',
                },
            ],
            marcadores:[],
            marcadores_convoy:[],
            eventos:[],
            ciudades:[],
            cuentas: [],
            grupos: [],
            convoy: [],
            eventualidades: [],
            popoverShow: false,
            idCuenta: [], 
            fechaIni: '', 
            fechaFin: '',
            tipoEvento : [ 
                { tipo: 'GENERAL', text: 'A TODO EL CONVOY'}, 
                { tipo: 'ESPECIFICO', text: 'A UNA UNIDAD'},
            ],
            obj_evento: {
                idEventualidad: 0, 
                Evento_idEvento: 0, 
                Ciudad_idDato: 0, 
                latitudEvt: '', 
                longitudEvt: '', 
                finicioEvt: '', 
                hinicioEvt: '', 
                ffinEvt: '', 
                hfinEvt: '',
                activoEvt: 1, 
                tipoEvt: '', 
                Servicio_idServicio: 0,
                ciudad:'', 
                placaVeh:'',
                acopleVeh:'',
                evento:'',
                trabajadorPer:'',
                tipoEvt:'',
            }, 
            contador_eventualidad: 0,
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
        cargarConvoyMaps( array ) 
        {
            this.loader.load().then(( google ) => { 
                const map = new google.maps.Map(
                    document.getElementById("map"), 
                    this.mapOptions
                );
                /*for(var c = 0; c < array.length; c++ ) {  
                    console.log( 'array[c]:: ',array[c].convoy );
                    var convoy = array[c].convoy;
                    const marker = new google.maps.Marker({ 
                        position: { 
                            lat: array[c].lat, 
                            lng: array[c].lng,
                        },
                        map,
                        icon: "https://grupolibertad.pe/camion.png",
                        title: array[c].convoy,
                        label: array[c].label,
                    });
                    //marker.setAnimation( google.maps.Animation.BOUNCE);
                
                    const infoWindow = new google.maps.InfoWindow({content: ""});
                    marker.addListener("click", (e) => {
                        this.$refs['my-modal'].show(); 
                        //console.log('id:: ', array[c].label);
                    });

                    marker.addListener("mouseover", (e) => {
                        const d = new Date(0);
                        d.setUTCMilliseconds("Hora");

                        const contentString = 
                        '<div class="info-window-content">'+
                        '<h2>' + convoy + '</h2>'+
                        '<h3>Magnitude</h3><p>Texto de relleno</p>'+
                        '</div>';
                    
                        infoWindow.setContent(contentString);
                        infoWindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false, 
                        });
                    });

                    marker.addListener("mouseout", (e) => { 
                        infoWindow.close();
                    })

                    //cargar servicios 
                    for ( var s = 0; s < array[c].servicios.length; s++) { 
                        const markerS = new google.maps.Marker({ 
                            position: { 
                                lat: array[c].servicios[s].lat,
                                lng: array[c].servicios[s].lng,
                            },
                            map, 
                            icon: "https://grupolibertad.pe/camion.png",
                        })
                    }
                }*/
                array.forEach( (arrayConvoy) => {  
                    console.log('salida:: ', arrayConvoy );
                    const marker = new google.maps.Marker({ 
                        position: { 
                            lat: arrayConvoy.lat, 
                            lng: arrayConvoy.lng,
                        },
                        map,
                        icon: "https://grupolibertad.pe/camion.png",
                        title: arrayConvoy.convoy,
                        label: arrayConvoy.label,
                    });
                    //marker.setAnimation( google.maps.Animation.BOUNCE);
                    const infoWindow = new google.maps.InfoWindow({content: ""});
                    marker.addListener("click", (e) => {
                        var modal_evento = this.$refs['my-modal'];
                        var modal_eventos_lista = this.$refs['eventos-lista'];
                        var modal_estado = this.$refs['formulario-estado'];
                        var funciones = this;
                        this.contador_eventualidad = arrayConvoy.eventualidades.length;

                        const cabecera = 
                        '<div class="info-window-content">'+
                            '<h2>'+ arrayConvoy.convoy +'</h2>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                    '<h5>SUP. '+ arrayConvoy.escolta + '</h5>'+
                                '</div>'+
                                '<div class="columna-circulo">'+
                                    '<div class="circulo"><p class="circulo-texto">'+ arrayConvoy.cantidadEsc +'/'+ arrayConvoy.cantidadCon +'</p></div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                    '<p>'+ arrayConvoy.escoltaUnd +'</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                '</div>'+
                            '</div>'+
                            '<hr>';
                        const datos_convoy = 
                            '<div class="container-info">'+
                                '<div class="columna-convoy-carga">'+
                                    '<a class="badge-convoy">'+ arrayConvoy.carga +'</a>' +
                                '</div>'+   
                                '<div class="columna-convoy">'+
                                    '<p><b>ESTADO: PROCESO CARGA</b></p>' +
                                '</div>'+  
                                '<div class="columna-convoy">'+
                                    '<p><b>N° EVENTOS: <a id="ver_eventos" class="badge-convoy">'+ this.contador_eventualidad +'</a></b></p>' +
                                '</div>'+     
                            '</div><br><hr><table>';
                        var servicios = '';
                        arrayConvoy.servicios.forEach( ( tot_servicios ) => { 
                            servicios = tot_servicios.servicios + servicios;
                        });
                        const final = '</table><hr>';
                        const botones = 
                            '<div class="container-botones">'+
                                '<div class="columna-botones">'+
                                    '<a id="evento" class="boton-evento">EVENTOS</a>' +
                                '</div>'+
                                '<div class="columna-botones">'+
                                    '<a id="recorrido" class="boton-evento">RECORRIDO</a>' +
                                '</div>'+
                                '<div class="columna-botones">'+
                                    '<a id="convoy" class="boton-evento">VER CONVOY</a>' +
                                '</div>'+
                                '<div class="columna-botones">'+
                                    '<a id="estado" class="boton-evento">ESTADO</a>' +
                                '</div>'+
                            '</div>';
                        infoWindow.setContent(cabecera+datos_convoy+servicios+final+botones);
                        infoWindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false, 
                        });

                        infoWindow.addListener('domready', function() { 
                            var evento = document.getElementById('evento');
                            var recorrido = document.getElementById('recorrido');
                            var convoy = document.getElementById('convoy');
                            var estado = document.getElementById('estado');
                            var ver_eventos = document.getElementById('ver_eventos');

                            evento.addEventListener('click', function() { 
                                modal_evento.show();
                                funciones.cargarConvoy( arrayConvoy );
                            });
                            recorrido.addEventListener('click', function() { 
                                console.log('recorrido');
                            });
                            convoy.addEventListener('click', function() {
                                console.log('convoy'); 
                            });
                            estado.addEventListener('click', function() {
                                modal_estado.show(); 
                                funciones.cargarConvoy( arrayConvoy );
                            });
                            ver_eventos.addEventListener('click', function() { 
                                modal_eventos_lista.show();
                                funciones.listarEventos( arrayConvoy );
                            });
                        })
                    });

                    marker.addListener("mouseover", (e) => {
                        /*const d = new Date(0);
                        d.setUTCMilliseconds("Hora");*/

                        /*const contentString = 
                        '<div class="info-window-content">'+
                            '<h2>'+ arrayConvoy.carga + '/' + arrayConvoy.tipoVeh + '/' +arrayConvoy.convoy +'</h2>'+
                            '<ul>';
                                var servicios = '';
                                arrayConvoy.servicios.forEach( ( tot_servicios ) => { 
                                    servicios = tot_servicios.servicios + servicios;
                                });
                        const final ='</ul>'
                        '</div>';*/
                    
                        //infoWindow.setContent(contentString+servicios+final);

                        /*const contentString = 
                        '<div class="info-window-content">'+
                            '<h2>'+ arrayConvoy.convoy +'</h2>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                    '<h5>SUP. CAMPOS COLQUE SATURNINO</h5>'+
                                '</div>'+
                                '<div class="columna-circulo">'+
                                    '<div class="circulo"><p class="circulo-texto">1/5</p></div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                    '<p>'+ arrayConvoy.unidadEscolta +'</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="container-info">'+
                                '<div class="columna">'+
                                '</div>'+
                            '</div>'+
                            '<hr><table>';
                                    var servicios = '';
                                    arrayConvoy.servicios.forEach( ( tot_servicios ) => { 
                                        servicios = tot_servicios.servicios + servicios;
                                    });
                        const final = '</table><hr>'+
                        '</div>';
                        infoWindow.setContent(contentString+servicios+final);
                        infoWindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false, 
                        });*/

                    });

                    marker.addListener("mouseout", (e) => { 
                        //infoWindow.close();
                    })
                    //cargar servicios 
                    /*arrayConvoy.servicios.forEach( (servicios) => { 
                        const markerS = new google.maps.Marker({ 
                            position: { 
                                lat: servicios.lat,
                                lng: servicios.lng,
                            },
                            map, 
                            icon: "https://grupolibertad.pe/camion.png",
                        })
                    })*/
                });
                return;
            }).catch((e) => { 
                console.log(e);
            })
        },
        cargarServiciosMaps( arrayConvoy ) 
        {
            console.log( 'array:: ', arrayConvoy.servicios.length );
            this.loader.load().then(( google ) => { 
                const map = new google.maps.Map(
                    document.getElementById("map"), 
                    {
                        center: { 
                            lat: Number(arrayConvoy.lat), 
                            lng: Number(arrayConvoy.lng),
                        },
                        zoom: 18, 
                        disableDefaultUI: false,
                    }
                );

                const ubicacionConvoy = new google.maps.Marker({ 
                    position: { 
                        lat: Number(arrayConvoy.lat),
                        lng: Number(arrayConvoy.lng),
                    },
                    map, 
                    icon: "https://img.icons8.com/?size=50&id=sf3OWsyCR9fh&format=png",
                    label: {
                        text: arrayConvoy.servicios.length.toString(),
                        color: "#000000", 
                        background: "red",
                        fontSize: "20px", 
                        fontweight: "bold",
                    }, 
                    title: 'Reestablecer Vista'
                })

                ubicacionConvoy.addListener("click", (e) => {
                    console.log('salida de datos'); 
                    this.cargarConvoyMaps( this.marcadores_convoy );
                });

                arrayConvoy.servicios.forEach( (arrayServicio) => {
                    var icono = "https://grupolibertad.pe/camion.png";
                    
                    if ( arrayServicio.tipoVeh == "CAMIONETA") 
                    {
                        //icono = "https://grupolibertad.pe/camioneta_.png";
                        icono = "https://grupolibertad.pe/camioneta_.png";
                    }
                    const ubicacionServicio = new google.maps.Marker({ 
                        position: { 
                            lat: arrayServicio.lat, 
                            lng: arrayServicio.lng,
                        },
                        map,
                        //icon: "https://grupolibertad.pe/camion.png",
                        icon: icono,
                        title: arrayServicio.convoy,
                        label: arrayServicio.label,
                    });
                    //marker.setAnimation( google.maps.Animation.BOUNCE);
                
                    const infoWindow = new google.maps.InfoWindow({content: ""});
                    /*marker.addListener("click", (e) => {
                        //this.$refs['my-modal'].show();
                        this.cargarConvoy( arrayConvoy );
                    });*/

                    ubicacionServicio.addListener("mouseover", (e) => {
                        console.log('servicio:: ', arrayConvoy);

                        const contentString = 
                        '<div class="info-window-content">'+
                            '<h2>'+ arrayServicio.placa_acople + '</h2>'+
                            '<h3>'+ arrayServicio.trabajador +'</h3>'+
                        '</div>';
                    
                        infoWindow.setContent(contentString);
                        infoWindow.open({
                            anchor: ubicacionServicio,
                            map,
                            shouldFocus: false, 
                        });

                    });

                    ubicacionServicio.addListener("mouseout", (e) => { 
                        infoWindow.close();
                    })
                    //cargar servicios 
                    /*arrayConvoy.servicios.forEach( (servicios) => { 
                        const markerS = new google.maps.Marker({ 
                            position: { 
                                lat: servicios.lat,
                                lng: servicios.lng,
                            },
                            map, 
                            icon: "https://grupolibertad.pe/camion.png",
                        })
                    })*/
                });

                

                return;
            }).catch((e) => { 
                console.log(e);
            })
        },

        buscarConvoy( ) 
        {
            console.log('idCuenta:: ' + this.idCuenta.idDato + ' FechaIni:: ' + this.fechaIni + ' FechaFin:: ' + this.fechaFin );
            this.$http.get('/LiberAPP/Convoy/Activo/'+ this.idCuenta.idDato + '/' + this.fechaIni + '/' + this.fechaFin).then( res => {
                this.arr_servicios = []; 
                this.marcadores_convoy = [];
                this.arr_servicios = res.data;
                for( var i = 0; i < this.arr_servicios.length; i++) 
                {
                    if ( this.arr_servicios[i].ubicacionCon !== null) 
                    {
                        var coordenadas = this.arr_servicios[i].ubicacionCon.split(",");
                        this.marcadores_convoy.push({ 
                            lat: Number( coordenadas[0] ), 
                            lng: Number( coordenadas[1] ), 
                            convoy: 'Convoy ' + this.arr_servicios[i].idConvoy,
                            idConvoy: this.arr_servicios[i].idConvoy,
                            carga: this.arr_servicios[i].cargaCon,
                            tipoVeh: this.arr_servicios[i].tvehiculoCon,
                            eventos: this.arr_servicios[i].eventualidades.length,
                            escoltaUnd: this.arr_servicios[i].escoltaUnd,
                            cantidadCon: this.arr_servicios.escoltaUnd !== '' ? this.arr_servicios[i].servicios.length - 1 : this.arr_servicios[i].length,
                            cantidadEsc: this.arr_servicios.escolta !== '' ? 1 : 1,
                            escolta: this.arr_servicios[i].escolta,
                            finicioCon: this.arr_servicios[i].finicioCon,
                            hfinicioCon: this.arr_servicios[i].hfinicioCon,
                            fterminoCon: this.arr_servicios[i].fterminoCon,
                            hfterminoCon: this.arr_servicios[i].hfterminoCon,
                            ffincargaCon: this.arr_servicios[i].ffincargaCon,
                            hfincargaCon: this.arr_servicios[i].hfincargaCon, 
                            fdestinoCon: this.arr_servicios[i].fdestinoCon,
                            hfdestinoCon: this.arr_servicios[i].hfdestinoCon,
                            ffindescargaCon: this.arr_servicios[i].ffindescargaCon,
                            hfindescargaCon: this.arr_servicios[i].hfindescargaCon,
                            servicios: [],
                            eventualidades: [],
                        }); 

                        for ( var e = 0; e < this.arr_servicios[i].eventualidades.length; e++)
                        {
                            this.marcadores_convoy[i].eventualidades.push({ 
                                idEventualidad: this.arr_servicios[i].eventualidades[e].idEventualidad,
                                evento: this.arr_servicios[i].eventualidades[e].evento, 
                                Evento_idEvento: this.arr_servicios[i].eventualidades[e].Evento_idEvento,
                                ciudad: this.arr_servicios[i].eventualidades[e].ciudad,
                                Ciudad_idDato: this.arr_servicios[i].eventualidades[e].Ciudad_idDato, 
                                finicioEvt: this.arr_servicios[i].eventualidades[e].finicioEvt,
                                hinicioEvt: this.arr_servicios[i].eventualidades[e].hinicioEvt,
                                ffinEvt: this.arr_servicios[i].eventualidades[e].ffinEvt,
                                hfinEvt: this.arr_servicios[i].eventualidades[e].hfinEvt,
                                activoEvt: this.arr_servicios[i].eventualidades[e].activoEvt,
                                tipoEvt: this.arr_servicios[i].eventualidades[e].tipoEvt,
                                Servicio_idServicio: this.arr_servicios[i].eventualidades[e].Servicio_idServicio,
                                Convoy_idConvoy: this.arr_servicios[i].eventualidades[e].Convoy_idConvoy,
                                placaVeh: this.arr_servicios[i].eventualidades[e].placaVeh,
                                acopleVeh: this.arr_servicios[i].eventualidades[e].acopleVeh,
                                trabajadorPer: this.arr_servicios[i].eventualidades[e].trabajadorPer,
                            });
                        }

                        for( var s = 0; s < this.arr_servicios[i].servicios.length; s++)
                        {
                            // ejecuta si la ubicacion esta cargada en los servicios
                            if ( this.arr_servicios[i].servicios[s].ubicacionSer !== null) 
                            {
                                /*if ( this.arr_servicios[i].servicios[s].acopleVeh !== null ) 
                                {*/
                                    var coordenadas = this.arr_servicios[i].servicios[s].ubicacionSer.split(",");
                                    var undEscolta = this.arr_servicios[i].servicios[s].acopleVeh !== null ? this.arr_servicios[i].servicios[s].placaVeh : '';

                                    this.marcadores_convoy[i].servicios.push({ 
                                        lat: Number( coordenadas[0] ),
                                        lng: Number( coordenadas[1] ), 
                                        convoy: 'Convoy ' + this.arr_servicios[i].idConvoy,
                                        idServicio: this.arr_servicios[i].servicios[s].idServicio,
                                        placaVeh: this.arr_servicios[i].servicios[s].placaVeh,
                                        acopleVeh: this.arr_servicios[i].servicios[s].acopleVeh,
                                        escoltaSer: this.arr_servicios[i].servicios[s].escoltaSer,
                                        placa_acople: this.arr_servicios[i].servicios[s].placaVeh + '/' + this.arr_servicios[i].servicios[s].acopleVeh,
                                        trabajador: this.arr_servicios[i].servicios[s].trabajadorPer,
                                        servicios: this.arr_servicios[i].servicios[s].acopleVeh !== null ? '<tr><td>' + '<b>'+this.arr_servicios[i].servicios[s].placaVeh + '</b>' +'/' + this.arr_servicios[i].servicios[s].acopleVeh + 
                                            ' ' + '<b>' + this.arr_servicios[i].servicios[s].trabajadorPer + '</b>' +'</td></tr>':'', 
                                        tipoVeh: this.arr_servicios[i].servicios[s].tipoVeh,
                                    });
                                //}
                            }
                            else
                            {
                                //console.log('marcadores.servicios:: ', this.marcadores_convoy[0]);
                                /*this.marcadores_convoy[i].servicios.push({ 
                                    convoy: 'Convoy ' + this.arr_servicios[i].idConvoy,
                                    placa_acople: this.arr_servicios[i].servicios[s].placaVeh + '/' + this.arr_servicios[i].servicios[s].acopleVeh,
                                    trabajador: this.arr_servicios[i].servicios[s].trabajadorPer,
                                    servicios: '<li>' + '<b>'+this.arr_servicios[i].servicios[s].placaVeh + '</b>' +'/' + this.arr_servicios[i].servicios[s].acopleVeh + 
                                        ' ' + '<b>' + this.arr_servicios[i].servicios[s].trabajadorPer + '</b>' +'</li>', 
                                        tipoVeh: this.arr_servicios[i].servicios[s].tipoVeh,
                                });*/
                            }
                        }
                    }
                    //this.marcadores_convoy[0]
                }
                console.log( 'datos_array:: ', this.marcadores_convoy );
                this.cargarConvoyMaps( this.marcadores_convoy );
            }).catch( error => { 
                this.Toast(true, 'danger','Servicios','Error al cargar los registros: '+error);
            })
        },
        cargarConvoy( array_convoy )
        {
            this.convoy = array_convoy;
            this.contador_eventualidad = array_convoy.eventualidades.length;
            this.cantidadEventos( array_convoy );
            console.log( 'array_convoy:: ', array_convoy );
        },
        cargarServicios( array_convoy ) 
        {
            console.log( array_convoy );
            this.$refs['my-modal'].hide();
            this.cargarServiciosMaps( array_convoy );
        },
        nuevoEvento( servicio ) 
        {
            this.obj_evento =  { 
                idEventualidad: 0, 
                Evento_idEvento: 0, 
                Ciudad_idDato: 0, 
                latitudEvt: '', 
                longitudEvt: '', 
                finicioEvt: '', 
                hinicioEvt: '', 
                ffinEvt: '', 
                hfinEvt: '',
                activoEvt: 1, 
                tipoEvt: '', 
                Servicio_idServicio: servicio.idServicio,
                ciudad:'', 
                placaVeh: servicio.placaVeh,
                acopleVeh: servicio.acopleVeh !== null ? servicio.acopleVeh: '',
                evento:'',
                trabajadorPer: servicio.trabajador,
                tipoEvt:'',
            };
            //console.log('obj_evento:: ', this.obj_evento);
        },
        guardarEventualidad() 
        {
            if ( this.obj_evento.Evento_idEvento == null || this.obj_evento.Evento_idEvento == "" )
            {
                this.Toast(true,'warning','Eventos','Seleccione un Evento');
                return;
            }
            if ( this.obj_evento.Ciudad_idDato == 0 || this.obj_evento.Ciudad_idDato == "" )
            {
                this.Toast(true,'warning','Eventos','Seleccione una Ciudad');
                return;
            }
            if ( this.obj_evento.finicioEvt == null || this.obj_evento.finicioEvt == "" )
            {
                this.Toast(true,'warning','Eventos','Seleccione Fecha Inicio');
                return;
            }
            if ( this.obj_evento.hinicioEvt == null || this.obj_evento.hinicioEvt == "" )
            {
                this.Toast(true,'warning','Eventos','Ingrese Hora Inicio');
                return;
            }
            if ( this.obj_evento.ffinEvt == null || this.obj_evento.ffinEvt == "" )
            {
                this.Toast(true,'warning','Eventos','Seleccione Fecha Fin');
                return;
            }
            if ( this.obj_evento.hfinEvt == null || this.obj_evento.hfinEvt == "" )
            {
                this.Toast(true,'warning','Eventos','Ingrese Hora Fin');
                return;
            }
            if ( this.obj_evento.tipoEvt == null || this.obj_evento.tipoEvt == "" )
            {
                this.Toast(true,'warning','Eventos','Seleccione Tipo de Evento');
                return;
            }
            this.showLoadingE = true;
            this.obj_evento.ciudad = this.obj_evento.Ciudad_idDato.valorDat;
            this.obj_evento.evento = this.obj_evento.Evento_idEvento.nombreEve; 
            this.obj_evento.tipoEvt = this.obj_evento.tipoEvt.tipo;
            this.obj_evento.Ciudad_idDato = this.obj_evento.Ciudad_idDato.idDato;
            this.obj_evento.Evento_idEvento = this.obj_evento.Evento_idEvento.idEvento; 

            var jsonEventualidad = JSON.stringify( this.obj_evento );

            this.$http.post('/LiberAPP/Trazabilidad/Guardar', 
            { 
                eventualidad: jsonEventualidad,
            }).then( res => { 
                this.Toast(true,'primary','Eventualidad','Agregado Correctamente');
                this.showModalE = false;
                this.showLoadingE = false; 
                this.obj_evento = [];
                this.convoy.eventualidades.push( res.data );
                this.contador_eventualidad = this.convoy.eventualidades.length;
            }).catch( error => { 
                this.Toast(true,'danger','Eventualidad','Error al guardar los registros: ' + error )
                this.showLoadingE = false;
            })
        },
        registroEvento( convoy ) { 
            console.log('registroEvento:: ', convoy );
        }, 
        eliminarEventualidad( id ) {
            console.log('id:: ', id);
            this.boxOne = ''
            this.$bvModal.msgBoxConfirm('¿Esta seguro de eliminar el registro?', 
            { 
                cancelVariant: 'outline-secondary',
            }).then(value => {
                this.boxOne = value
                if(this.boxOne === true) 
                {
                    this.$http.post('/LiberAPP/Eventualidad/Desactivar', 
                    {
                        idEventualidad: id,
                    }).then( res => { 
                        this.Toast(true,'primary','Evento','Evento eliminado Correctamente');
                        this.showModalEL = false;
                        this.showLoadingEL = false;
                        let eliminar = this.eventualidades.eventualidades.findIndex( evento => evento.idEventualidad = id ); 
                        this.eventualidades.eventualidades.splice(eliminar, 1);
                        this.contador_eventualidad = this.eventualidades.eventualidades.length;
                    }).catch( error => {
                        this.Toast(true,'danger','Evento','Error al eliminar el Evento: '+error);
                        this.showLoadingEL = false;
                    })
                }
                else
                  this.showLoadingEL = false;
            })
        },
        cantidadEventos( array_convoy ) { 
            this.$http.get('/LiberAPP/Eventualidad/Listar/'+array_convoy.idConvoy).then( res => {
                this.contador_eventualidad = res.data.length;
            }).catch(error => { 
                this.Toast(true, 'danger','Eventualidad','Error al cargar los registros: '+error);
            })
        },
        listarEventos( convoy ) {
            this.eventualidades = convoy;
        },
        actualizarSeguimiento() { 
            
            if ( this.convoy.finicioCon == null || this.convoy.finicioCon == "" )
            {
                this.Toast(true,'warning','Estado','Seleccione Fecha de Inicio');
                return;
            }
            if ( this.convoy.hfinicioCon == null || this.convoy.hfinicioCon == "" )
            {
                this.Toast(true,'warning','Estado','Ingrese Hora Inicio de Servicio');
                return;
            } 
            if ( this.convoy.ffincargaCon == null || this.convoy.ffincargaCon == "" )
            {
                this.Toast(true,'warning','Estado','Seleccione Fecha Fin Carga');
                return;
            }

        }
    },
    computed: { 
        direction() { 
            if (store.state.appConfig.isRTL) {
                this.dir = true
                return this.dir
            }
            this.dir = false
            return this.dir
        }
    }, 
    created() { 
        var today = new Date();
        this.fechaIni = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";
        this.fechaFin = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

        this.$http.get('/LiberAPP/Evento/Listar').then( res => {
            this.eventos = res.data
        }).catch(error => { 
            this.Toast(true, 'danger','Eventos','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Dato/Select/CIUDAD/COMBUSTIBLE').then(res=> {
            this.ciudades = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Dato/Select/GRUPO/TRANSPORTE').then(res => {
            this.grupos = res.data;
            this.idCuenta = this.grupos[0];
        }).catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
        
        this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res => {
            this.cuentas = res.data;
        }).catch(error => {
            this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });

        /*this.$http.get('/LiberAPP/Convoy/Activo').then( res => { 
            this.arr_servicios = res.data;
            for( var i = 0; i < this.arr_servicios.length; i++) 
            {
                var coordenadas = this.arr_servicios[i].ubicacionCon.split(","); 
                this.marcadores_convoy.push({ 
                    lat: Number( coordenadas[0] ), 
                    lng: Number( coordenadas[1] ), 
                    servicio: 'Convoy ' + this.arr_servicios[i].idConvoy,
                })
            }
        }).catch( error => { 
            this.Toast(true, 'danger','Servicios','Error al cargar los registros: '+error);
        })*/

        //console.log( 'marcadores_convoy:: ', this.marcadores_convoy );
        //this.cargarConvoyMaps( this.marcadores_convoy );

        const headers = { "Content-Type": "application/json" };
        fetch("http://190.12.73.85:8080/Tracklog/maptrack/recorrido-unidades?listUni=57201,&fini=2023-05-30%2012:00&ffin=2023-05-30%2018:30&flagSegui=2&flotaSelect=0", { headers }).then( 
            async response => { 
                this.showLoading = true;
                const data = await response.json(); 
                if ( response.object ) { 
                    const error = (data);
                    return Promise.reject( error );
                }
                this.showLoading = false;
                this.arr_seguimiento = data.object;
                for( var i = 0; i < this.arr_seguimiento.length; i++) 
                {
                    this.marcadores.push({ 
                        lat: Number(this.arr_seguimiento[i].nLat), 
                        lng: Number(this.arr_seguimiento[i].nLon), 
                        estado: this.arr_seguimiento[i].cEstado, 
                        referencia: this.arr_seguimiento[i].cRef, 
                        geocerca: this.arr_seguimiento[i].cNombre, 
                    });
                }
                console.log('ubicaciones:: ', this.marcadores);
            }
        );
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
<style>
#map { 
    height: 800px;
    width: 100%;
    /*margin: auto;*/
}
.circulo {
    width: 30px;
    height: 30px;
    /*border-radius: 50%;*/
    /*background-color: rgba(231, 40, 26, 0.658);*/
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
}
.circulo-texto { 
    margin: 10%;
}
.container-info {
    white-space: nowrap;
    /*background-color: red;*/
    width: 100%;
    height: 15px;
}

.columna {
    display: inline-flex;
    margin-right: 10px; /* Añade margen entre los elementos */
    /*background-color: lightgray;*/
    padding: 10px;
}
.columna-circulo { 
    display: inline-flex;
    margin-left: 50px; /* Añade margen entre los elementos */
    background-color: rgba(204, 10, 10, 0.555);
    padding: 10px;
    border-radius: 15%;
}
/*.boton-evento{
    display:inline-block;
    width:25%;
    padding: 2%;
    /*border: 3px solid black;*//*
    background: rgba(103, 24, 206, 0.616);
    color:white !important;
    border-radius:50px;
    text-align: center;
    
  }*/
/* contenedores para botones */
.container-botones {
    white-space: nowrap;
    /*background-color: red;*/
    width: 100%;
    /*height: 38px;*/
}
.columna-botones {
    display: inline-flex;
    padding: 3px;
}
.boton-evento {
    display:initial;
    width:100px;
    padding: 5%;
    /*border: 3px solid black;*/
    background: #7367f0;
    color:white !important;
    border-radius:5px;
    text-align: center;
    height: 28px;
  }
.columna-convoy-carga {
    display: inline-flex;
    padding-left: 0px;
}
.columna-convoy {
    display: inline-flex;
    padding-left: 5%;
}
.badge-convoy { 
    display:initial;
    width:100px;
    padding: 7%;
    background: #aaa;
    color:white !important;
    border-radius:17px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    height: 28px;
}
</style>