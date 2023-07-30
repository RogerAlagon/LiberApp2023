<template>
    <div>
        <b-card>
            <b-row>
                <b-col cols="12" class="mb-2 text-center">
                    
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                        <thead class="thead-dark">
                            <tr style="border: none;">
                                <td colspan="2" style="border: none" class="text-left">
                                    <b-img :src="require('@/assets/images/minilogo.png')"/>
                                </td>
                                <td style="border: none" colspan="3"><h1 class="text-dark text-bold text-center">PROGRAMACIÓN DE UNIDADES</h1></td>
                                <td style="border: none" colspan="4" class="text-right">
                                    <div class="d-flex justify-content-start flex-wrap">
                                        <div class="text-center tractos colors-container rounded text-white width-150 height-60 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow" v-b-modal.modal-detalle @click="listarUnidad(1)">
                                          <span><h3 class="margin-top">{{ 'TRACTOS ' + tractos }}</h3></span>
                                        </div>
                                        <div class="text-center carretas colors-container rounded text-white width-150 height-60 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow" v-b-modal.modal-detalle @click="listarUnidad(2)">
                                            <span><h3 class="margin-top">{{ 'CARRETAS ' + carretas }}</h3></span>
                                        </div>
                                        <b-button variant="gradient-warning-4" class="text-center paginacion colors-container rounded text-white width-100 height-50 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow" @click="avanzarPagina()">
                                            <span><h1 class="margin-top">{{ pagina_actual + ' / ' + total_paginas }}</h1></span>
                                        </b-button>
                                    </div>
                                </td>
                                <td style="border: none" colspan="3" class="text-right">
                                    <h3 v-b-modal.modal-formulario @click="Nuevo()">{{hoy}}</h3>
                                </td>
                            </tr>
                            <tr>
                                <th>Nro.</th>
                                <th>TRACTO</th>
                                <th>CARRETA</th>
                                <th>TÉCNICO</th>
                                <th>Nro. BAHÍA</th>
                                <th>ACTIVIDAD</th>
                                <th>INICIO</th>
                                <th>TIEMPO PROMEDIO</th>
                                <th>TIEMPO TRANSCURRIDO</th>
                                <th>ESPERA</th>
                                <th>EN PROCESO</th>
                                <th>OPERATIVO</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="(umonitoreo,indice) in monitoreos">
                                <td class="text-bold" v-b-modal.modal-formulario @click="Editar(umonitoreo)">{{indice+1}}</td>
                                <td class="text-bold">{{umonitoreo.placaVeh}}</td>
                                <td class="text-bold">{{umonitoreo.acopleVeh}}</td>
                                <td>{{umonitoreo.trabajadorPer}}</td>
                                <td class="text-bold">{{umonitoreo.bahiaMon}}</td>
                                <td>{{umonitoreo.detalleMon}}</td>
                                <td><h1><b-badge variant="light-primary">{{umonitoreo.hinicioMon}}</b-badge></h1></td>
                                <td><h1><b-badge variant="light-info">{{umonitoreo.idealMon}}</b-badge></h1></td>
                                <td>
                                    <!--<Transition><h1 v-if="titilar">-->
                                    <Transition><h1 class="titilar">
                                        <b-badge v-if="umonitoreo.estadoMon == 'ESPERA' || umonitoreo.estadoMon == 'PENDIENTE'" variant="light-secondary">{{umonitoreo.diferencia}}</b-badge>
                                        <b-badge v-else-if="umonitoreo.idealMon > umonitoreo.diferencia"  variant="light-success">{{umonitoreo.diferencia}}</b-badge>
                                        <b-badge v-else-if="umonitoreo.idealMon == umonitoreo.diferencia" variant="light-warning">{{umonitoreo.diferencia}}</b-badge>
                                        <b-badge v-else-if="umonitoreo.idealMon < umonitoreo.diferencia" variant="light-danger">{{umonitoreo.diferencia}}</b-badge>
                                    </h1></Transition>
                                </td>
                                <td>
                                    <!--<b-spinner variant="danger" style="width: 3rem; height: 3rem;" type="grow" v-if="umonitoreo.estadoMon == 'ESPERA' || umonitoreo.estadoMon == 'PENDIENTE'"/>-->
                                    <b-button style="width: 3rem; height: 3rem;" class="btn-icon en-espera rounded-circle" v-if="umonitoreo.estadoMon == 'ESPERA' || umonitoreo.estadoMon == 'PENDIENTE'"></b-button>
                                    <!--<div class="titilar paginacion border-radius width-50 height-50 shadow" v-if="umonitoreo.estadoMon == 'ESPERA' || umonitoreo.estadoMon == 'PENDIENTE'"></div>-->
                                </td>
                                <!--<td><b-spinner variant="warning" style="width: 3rem; height: 3rem;" v-if="umonitoreo.estadoMon == 'EN PROCESO'"/></td>-->
                                <!--<td><div class="titilar en-proceso border-radius d-flex ml-1 shadow" v-if="umonitoreo.estadoMon == 'EN PROCESO'"></div></td>-->
                                <td><b-button style="width: 3rem; height: 3rem;" class="titilar btn-icon en-proceso rounded-circle" v-if="umonitoreo.estadoMon == 'EN PROCESO'"></b-button></td>
                                <!---<td><b-spinner variant="success" style="width: 3rem; height: 3rem;" v-if="umonitoreo.estadoMon == 'TERMINADO'"/></td>-->
                                <td><b-button style="width: 3rem; height: 3rem;" class="btn-icon operativa rounded-circle" v-if="umonitoreo.estadoMon == 'TERMINADO'"></b-button></td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-card>
        <!---------------------------------- modal -------------------------------->
        <b-modal
          id="modal-formulario" v-model="showModal"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
        <!---------------------------------- formulario -------------------------------->
             <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="Vehículo">
                        <v-select label="placaVeh" v-model="yVehiculo" style="flex: 1;" :options="vehiculos" @input="monitoreo.Vehiculo_idVehiculo = yVehiculo.idVehiculo"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Carreta">
                        <v-select label="placaVeh" v-model="yCarreta" style="flex: 1;" :options="vehiculos" @input="monitoreo.Acople_idVehiculo = yCarreta.idVehiculo"/>
                        <!--<v-select label="placaVeh" v-model="yCarreta" style="flex: 1;" :options="vehiculos" @input="monitoreo.Acople_idVehiculo = yVehiculo.idVehiculo"/>-->
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Técnico">
                        <v-select label="trabajadorPer" v-model="yOperador" style="flex: 1;" :options="personas" @input="monitoreo.Persona_idPersona = yOperador.idPersona"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12">
                    <b-form-group label="Descripción de la Actividad">
                        <b-form-input v-model="monitoreo.detalleMon" class="form-control"/>
                    </b-form-group>                     
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Fecha de Inicio">
                        <flat-pickr v-model="monitoreo.finicioMon" class="form-control" />
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Hora de Inicio">
                        <cleave v-model="monitoreo.hinicioMon" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm"/>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group>
                        <label>Fecha de Termino</label>
                            <b-input-group>
                                <flat-pickr v-model="monitoreo.fterminoMon" class="form-control" />
                                <b-input-group-append is-text @click="Ahora()">
                                    <feather-icon icon="CalendarIcon" class="cursor-pointer"/>
                                </b-input-group-append>
                            </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                     <b-form-group>
                        <label>Hora de Termino</label>
                            <b-input-group>
                                <cleave v-model="monitoreo.hterminoMon" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm"/>
                                <b-input-group-append is-text @click="Ahora">
                                    <feather-icon icon="ClockIcon" class="cursor-pointer"/>
                                </b-input-group-append>
                            </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Nro de Bahía">
                        <cleave class="form-control" v-model="monitoreo.bahiaMon" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Tiempo Promedio">
                        <cleave v-model="monitoreo.idealMon" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Estado">
                        <b-form-select v-model="monitoreo.estadoMon" :options="estados"/>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Observación">
                        <b-form-textarea v-model="monitoreo.observacionMon" class="form-control" placeholder="Ingrese Observación" rows="2"/>
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
        <!---------------------------------- modal -------------------------------->
        <b-modal
            id="modal-detalle" v-model="showModalD"
            :header-bg-variant="headerBgVariantD" :header-text-variant="headerTextVariantD" :title="headerTitleVariantD"
            :footer-bg-variant="footerBgVariantD" :footer-text-variant="footerTextVariantD"
            centered no-close-on-backdrop
            title-tag="div"
            size="lg"
            cancel-title="Cancelar" ok-title="Guardar"
            cancel-variant="secondary" ok-variant="success"
            >
                <!---------------------------------- formulario -------------------------------->
                <table class="table table-condensed table-bordered">
                    <tr v-if="estado == 1">
                        <th colspan="7" style="text-align: center;">TRACTOS</th>
                    </tr>
                    <tr v-if="estado == 2">
                        <th colspan="7" style="text-align: center;">CARRETAS</th>
                    </tr>
                    <tr>
                        <th>NRO</th>
                        <th>VEHICULO</th>
                        <th>ESPERA</th>
                        <th>PENDIENTE</th>
                        <th>PROCESO</th>
                        <th>TERMINADO</th>
                        <th>CANT. ACTIVIDAD</th>
                    </tr>
                    <tr v-for="(ulista, indice, posicion) in lista_unidades">
                        <td>{{ posicion+1 }}</td>
                        <td>{{ ulista.vehiculo }}</td>
                        <td>{{ ulista.espera }}</td>
                        <td>{{ ulista.pendiente }}</td>
                        <td>{{ ulista.proceso }}</td>
                        <td>{{ ulista.terminado }}</td>
                        <td>{{ ulista.cantidad }}</td>
                    </tr>
                </table>        

                <!---------------------------------- modal acciones -------------------------------->
                <template #modal-footer>
                    <div class="w-100 d-flex justify-content-between">
                    </div>
                </template>
                <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BInputGroupAppend
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { OctagonIcon } from 'vue-feather-icons'

export default {
    components: {
        BToast,
        BCard,
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
        BCardText,
        BOverlay,
        vSelect,
        BFormCheckbox,
        BCardBody,
        FormWizard,
        TabContent,
        BInputGroup,
        BInputGroupPrepend,
        BTabs,
        BTab,
        Cleave,
        flatPickr,
        BFormTextarea,
        BInputGroupAppend
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
            estados: [
                    { value: "PENDIENTE", text: 'PENDIENTE' },
                    { value: "ESPERA", text: 'ESPERA' },
                    { value: "EN PROCESO", text: 'EN PROCESO' },
                    { value: "TERMINADO", text: 'OPERATIVO  ' },
                    { value: "ANULADO", text: 'ANULAR ACTIVIDAD'},
                ],

            tcolumnas: [
                /*{ label: '', field: 'acciones'},
                { label: 'ID', field: 'idAbastecimiento'},
                { label:'ID GRIFO', field: 'Grifo_idGrifo', hidden:true },
                { label:'idCuenta', field: 'idCuenta', hidden:true },
                { label:'idRuta', field: 'Ruta_idRuta', hidden:true },
                { label: 'Operacion', field: 'nombreCue'},
                { label: 'Fecha Vale', field: 'fechaAba'},
                { label: 'Registro', field: 'fecharegAba'},
                { label: 'Estado', field: 'estadoAba'},
                { label: 'Grifo', field: 'nombreGri'},
                { label: 'Usuario', field: 'nombreUsu'},
                { label: 'Cliente', field: 'nombreExt'},
                { label: 'Externo_idExterno', field: 'Externo_idExterno', hidden:true },*/
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idAbastecimiento'},
                //{ label: 'Vehiculo', field: 'placaVeh'},
                { label: 'Fecha Abas.', field: 'fechaAba'},
                { label: 'Fecha Ingreso', field: 'fecharegAba'},
                { label: 'Tabla Consumo', field: 'nombreCon'},
                { label: 'Intervalo', field: 'nombreInt'},
                /*{ label: 'Cuenta', field: 'cuenta'},*/
                { label: 'Grifo', field: 'nombreGri'},
                { label: 'Proveedor', field: 'empresaGri'},
                //{ label: 'Usuario', field: 'nombreUsu'},
            ],


            monitoreo: { 
                        Vehiculo_idVehiculo: 0,
                        Acople_idVehiculo: 0,
                        Persona_idPersona: 0,
                        detalleMon: "",
                        finicioMon: "",
                        hinicioMon: "",
                        fterminoMon: "",
                        hterminoMon: "",
                        bahiaMon: "",
                        idealMon: "",
                        estadoMon: "",
                        observacionMon: "",
                },

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO ABASTECIMIENTO',
            headerTitleVariantD: 'DESCRIPCION ABASTECIMIENTO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModal: false,
            showLoading: false,
            boton: false,
            
            /**************************** modal descripcion ******************/
            headerBgVariantD: 'dark',
            headerTextVariantD: 'success',
            headerTitleVariantD: 'LISTA DE UNDADES',
            bodyBgVariantD: 'light',
            bodyTextVariantD: 'success',
            footerBgVariantD: 'dark',
            footerTextVariantD: 'dark',
            showModalD: false,
            /**************************** entorno ****************************/      
            grifos: [],
            cuentas: [],
            vehiculos: [],
            personas: [],
            externos:[],
            rutas:[],
            intervalos: [],
            consumos: [],
            externo: "",
            cuenta: "",
            ordenID:'',

            monitoreos: [],
            monitoreos_temporal:[],
            titilar: true,

            hoy: "",
            //minitabla 
            yVehiculo: "", 
            yOperador: "",
            yReten: "",
            yGalon: "",
            yKilometraje:"",
            yTabla:"",
            yExceso:"",
            yRuta:"", 
            yObservacion:"",
            yKmAnt:"",
            yKmUlt:"",
            yCarreta: "", 
            yCarretaEst: "",
            yCarretaOp: "",
            yCarretaReg: "",
            yKm:"0",
            yF:"0",
            ymotivo:"", 
            yTipo:"FULL",
            yintervalo: {},
            yconsumo: {},
            ygrifo: {},
            yintervalos: [],
            desde: "",
            hasta: "",
            tablas: [],
            tractos:0, 
            carretas: 0,
            lista_unidades:[],
            cantidad_registros: 7,
            total_paginas: 1, 
            pagina_actual: 1,
            estado:0,
            contador: 0,
        }
    }, 
    methods : {
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
        /*Detalle(prm_detalle)
        {
            this.headerBgVariantD = 'secondary'; 
            this.headerTitleVariantD = "VER DETALLE"
            this.boton = true; 
            this.abastecimientoc = prm
            _detalle;
            this.abastecimientoc.Grifo_idGrifo = Number(this.abastecimientoc.Grifo_idGrifo); 
            this.abastecimientoc.idCuenta = Number(this.abastecimientoc.idCuenta); 
            this.abastecimientoc.Externo_idExterno = Number(this.abastecimientoc.Externo_idExterno);

            this.$http.get('/LiberAPP/Abastecimiento/Select/'+ prm_detalle.idAbastecimiento ).then(res=> {
                this.abastecimientod2 = res.data;
            })
            .catch(error=> {
                this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
            })
        },*/
        
        Nuevo()//Formulario de Nuevo Abastecimiento
        {
            this.boton = false;
            var today = new Date();

            this.monitoreo.Vehiculo_idVehiculo = 0;
            this.monitoreo.Acople_idVehiculo = 0;
            this.monitoreo.Persona_idPersona = 0;
            this.monitoreo.detalleMon = "";
            this.monitoreo.finicioMon = today.getFullYear() + "-" + (today.getMonth() + 1) + "-"+ today.getDate();
            this.monitoreo.hinicioMon = today.getHours() + ":" + today.getMinutes();
            this.monitoreo.fterminoMon = "";
            this.monitoreo.hterminoMon = "";
            this.monitoreo.bahiaMon = "";
            this.monitoreo.idealMon = 0;
            this.monitoreo.estadoMon = "PENDIENTE";
            this.monitoreo.observacionMon = "";

            this.headerTextVariant = 'success'; 
            this.headerTitleVariant = 'NUEVO REGISTRO';
            this.yVehiculo = ""; 
            this.yCarreta = ""; 
            this.yOperador = "";
        },
        Editar(prm_monitoreo)
        {
            this.boton = true;
            this.monitoreo = { 
                Vehiculo_idVehiculo: 0,
                Acople_idVehiculo: 0,
                Persona_idPersona: 0,
                detalleMon: "",
                finicioMon: "",
                hinicioMon: "",
                fterminoMon: "",
                hterminoMon: "",
                bahiaMon: "",
                idealMon: "",
                estadoMon: "",
                observacionMon: "",
            };
            this.yVehiculo = 0; 
            this.yCarreta = 0;
            

            this.monitoreo = prm_monitoreo;
            /*this.monitoreo.Vehiculo_idVehiculo = prm_monitoreo.Vehiculo_idVehiculo;
            this.monitoreo.Acople_idVehiculo = prm_monitoreo.Acople_idVehiculo;
            this.monitoreo.Persona_idPersona = prm_monitoreo.Persona_idPersona;
            this.monitoreo.detalleMon = prm_monitoreo.detalleMon;
            this.monitoreo.finicioMon = prm_monitoreo.finicioMon;
            this.monitoreo.hinicioMon = today.getHours() + ":" + today.getMinutes();
            this.monitoreo.fterminoMon = "";
            this.monitoreo.hterminoMon = "";
            this.monitoreo.bahiaMon = "";
            this.monitoreo.idealMon = 0;
            this.monitoreo.estadoMon = "PENDIENTE";
            this.monitoreo.observacionMon = "";*/
            
            this.headerTextVariant = 'primary'; 
            this.headerTitleVariant = 'EDITAR REGISTRO';
            this.boton = true;

            //Encontrando el registro de consumo del array
            var encontrado = this.vehiculos.filter(function (tvehiculo)
            {
                return (tvehiculo.idVehiculo == prm_monitoreo.Vehiculo_idVehiculo)
            },this);

            if(encontrado.length > 0)
                this.yVehiculo = encontrado[0];


            var encontrado = this.vehiculos.filter(function (tvehiculo)
            {
                return (tvehiculo.idVehiculo == prm_monitoreo.Acople_idVehiculo)
            },this);

            if(encontrado.length > 0)
                this.yCarreta = encontrado[0];


            var encontrado = this.personas.filter(function (tpersona)
            {
                return (tpersona.idPersona == prm_monitoreo.Persona_idPersona)
            },this);

            if(encontrado.length > 0)
                this.yOperador = encontrado[0];

        },
        Ahora()
        {

        },
        Guardar()
        {
            if( this.monitoreo.Persona_idPersona == null || this.monitoreo.Persona_idPersona == "" )
            {
                this.Toast(true,'warning','Tecnico','Seleccione Tecnico');
                return;
            }

            if( this.monitoreo.detalleMon == null || this.monitoreo.detalleMon == "" )
            {
                this.Toast(true,'warning','Actividad','Ingrese Actividad');
                return;
            }

            if( this.monitoreo.fterminoMon == null || this.monitoreo.fterminoMon == "" )
            {
                this.Toast(true,'warning','Fecha Termino','Seleccione Fecha de Termino');
                return;
            }

            if( this.monitoreo.hterminoMon == null || this.monitoreo.hterminoMon == "" )
            {
                this.Toast(true,'warning','Hora Termino','Ingrese Hora Termino');
                return;
            }

            if( this.monitoreo.bahiaMon == null || this.monitoreo.bahiaMon == "" )
            {
                this.Toast(true,'warning','Bahia','Ingrese Nro Bahia');
                return;
            }

            if( this.monitoreo.idealMon == null || this.monitoreo.idealMon == 0 )
            {
                this.Toast(true,'warning','Tiempo Ideal','Ingrese Tiempo Ideal');
                return;
            }

            this.showLoading = true; 
            var jsonMonitoreo = JSON.stringify(this.monitoreo);
            this.$http.post('/LiberAPP/Monitoreo/Guardar',
            {
                monitoreo: jsonMonitoreo
            }).then(res => {
                this.Toast(true,'success','Agregar','Guardado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.yVehiculo = ""; 
                this.yCarreta = ""; 
                this.yOperador = "";
                this.Listar();
            }).catch(error => {
                this.Toast(true,'danger','Agregar','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        Actualizar()
        {
            this.showLoading = true; 
            
            var jsonMonitoreo = JSON.stringify(this.monitoreo);

            this.$http.post('/LiberAPP/Monitoreo/Actualizar',
            {
                monitoreo: jsonMonitoreo
            })
            .then(res => {
                this.Toast(true,'success','Actualizar','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Listar();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        Listar()
        {
            const total_items = this.monitoreos_temporal.length;
            //const items_disponible = 12; 
            let division_paginas = total_items / this.cantidad_registros;
            console.log('monitores', total_items)
            console.log('Number', Number(division_paginas.toFixed(2)));
            
            if ( Number(division_paginas.toFixed(2)) > Math.round(division_paginas) && Math.round( division_paginas) > 0) 
            {
                division_paginas = Math.round(division_paginas) + 1
            } else if( Math.round( division_paginas ) == 0 ) { 
                division_paginas = 1;
            } else { 
                division_paginas = Math.round(division_paginas);
            }
            
            console.log('cont_totalpag', this.contador+'_'+this.total_paginas);
            
            if ( this.contador < this.total_paginas ) 
            {
                this.showLoading = true;
            
                this.$http.get('/LiberAPP/Monitoreo/Listar').then( res => {
                    this.monitoreos = res.data;
                    this.monitoreos_temporal = res.data;
                    this.showLoading = false;
                    var obj_tractos = {};
                    var obj_carretas = {};

                    this.monitoreos.forEach(element => {
                        if( !obj_tractos[element.Vehiculo_idVehiculo] && element.placaVeh !== null ) {
                            obj_tractos[element.Vehiculo_idVehiculo] = 1;
                        }  else if( element.placaVeh !== null ){ 
                            obj_tractos[element.Vehiculo_idVehiculo]++;
                        } 
                    });
                    
                    this.monitoreos.forEach( element => { 
                        if ( !obj_carretas[element.Acople_idVehiculo] && element.acopleVeh !== null ) { 
                            obj_carretas[element.Acople_idVehiculo] = 1;
                        } else if ( element.acopleVeh !== null ) { 
                            obj_carretas[element.Acople_idVehiculo]++;
                        }
                    });

                    this.tractos = Object.keys(obj_tractos).length;
                    this.carretas = Object.keys(obj_carretas).length;
                    //console.log("monitoreos:: ", this.monitoreos.length);
                    const total_items = this.monitoreos.length;
                    //const items_disponible = 12; 
                    let division_paginas = total_items / this.cantidad_registros;
                    //let pagina_actual = 1;

                    if ( Number(division_paginas.toFixed(2)) > Math.round(division_paginas) && Math.round(division_paginas) > 0) 
                    {
                        division_paginas = Math.round(division_paginas) + 1
                    } else if( Math.round( division_paginas ) == 0 ) { 
                        division_paginas = 1;
                    } else { 
                        division_paginas = Math.round(division_paginas);
                    }

                    if ( this.contador <= division_paginas && division_paginas > 1) 
                    {
                        this.contador = this.contador + 1;
                        this.pagina_actual = this.contador;
                        const items_siguiente = ( this.pagina_actual - 1 ) * this.cantidad_registros; 
                        const items = this.monitoreos.slice( items_siguiente, this.cantidad_registros + items_siguiente )
                        /*console.log('items:: ', items );
                        console.log('paginas:: ', division_paginas );*/
                        console.log('pagina actual:: ', this.pagina_actual);

                        this.total_paginas = division_paginas;
                        this.monitoreos = items;

                    } else { 
                        this.contador = 0;
                    }

                }).catch( error => {
                    this.Toast(true,'danger','Monitoreo','Error al cargar los registros: '+error);
                    this.showLoading = false;
                })
                //this.contador = this.contador + 1; 
                console.log('cont:: ', this.contador);
            } else { 
                this.contador = 0;
            }
        },
        listarUnidad( unidad ) { 
            //console.log('temporal:: ', this.monitoreos_temporal);
            if ( unidad == 1 ) //tractos 
            {
                this.estado = 1;
                this.lista_unidades = [];
                var obj_temporal = [];
                var obj_tractos = {};
               
                this.monitoreos_temporal.forEach(element => {
                    var contadorPendiente = 0; 
                    var contadorEspera = 0; 
                    var contadorProceso = 0; 
                    var contadorTerminado = 0;
                    var cantidadActividad = 0;

                    if( !obj_temporal[element.placaVeh] && element.placaVeh !== null ) {
                        obj_temporal[element.placaVeh] = 1;
                        obj_temporal[element.estadoMon] = 1;
                        cantidadActividad = obj_temporal[element.placaVeh];
                        
                        if ( element.estadoMon == 'PENDIENTE' ) 
                         {
                            contadorPendiente = 1;
                         } else if( element.estadoMon == 'ESPERA' ) { 
                            contadorEspera = 1;
                         } else if ( element.estadoMon == 'EN PROCESO' ) { 
                            contadorProceso = 1;
                         } else if ( element.estadoMon == 'TERMINADO' ) { 
                            contadorTerminado = 1;
                         }

                    }  else if( element.placaVeh !== null ){ 
                        obj_temporal[element.placaVeh]++;
                        obj_temporal[element.estadoMon]++;
                        cantidadActividad = obj_temporal[element.placaVeh];
                        if ( element.estadoMon == 'PENDIENTE' ) 
                         {
                            contadorPendiente = obj_temporal[element.estadoMon]++;
                         } else if( element.estadoMon == 'ESPERA' ) { 
                            contadorEspera = obj_temporal[element.estadoMon]++;
                         } else if ( element.estadoMon == 'EN PROCESO' ) { 
                            contadorProceso = obj_temporal[element.estadoMon]++;
                         } else if ( element.estadoMon == 'TERMINADO' ) { 
                            contadorTerminado = obj_temporal[element.estadoMon]++;
                         }
                    } 

                    if ( element.placaVeh !== null ) {
                        
                        obj_tractos[element.placaVeh] = { 
                            vehiculo: element.placaVeh,
                            pendiente: contadorPendiente,  
                            espera: contadorEspera,  
                            proceso: contadorProceso,  
                            terminado: contadorTerminado,
                            cantidad: cantidadActividad,
                        };
                    }
                });
                this.lista_unidades = obj_tractos;
            }

            if ( unidad == 2 )//carretas 
            {
                this.estado = 2;
                this.lista_unidades = [];
                var obj_temporal = [];
                var obj_carretas = {};
               
                this.monitoreos_temporal.forEach(element => {
                    var contadorPendiente = 0; 
                    var contadorEspera = 0; 
                    var contadorProceso = 0; 
                    var contadorTerminado = 0;
                    var cantidadActividad = 0;

                    if( !obj_temporal[element.acopleVeh] && element.acopleVeh !== null ) {
                        obj_temporal[element.acopleVeh] = 1;
                        obj_temporal[element.estadoMon] = 1;
                        cantidadActividad = obj_temporal[element.acopleVeh];
                        
                        if ( element.estadoMon == 'PENDIENTE' ) 
                         {
                            contadorPendiente = 1;
                         } else if( element.estadoMon == 'ESPERA' ) { 
                            contadorEspera = 1;
                         } else if ( element.estadoMon == 'EN PROCESO' ) { 
                            contadorProceso = 1;
                         } else if ( element.estadoMon == 'TERMINADO' ) { 
                            contadorTerminado = 1;
                         }

                    }  else if( element.acopleVeh !== null ){ 
                        obj_temporal[element.acopleVeh]++;
                        obj_temporal[element.estadoMon]++;
                        cantidadActividad = obj_temporal[element.acopleVeh];
                        if ( element.estadoMon == 'PENDIENTE' ) 
                         {
                            contadorPendiente = obj_temporal[element.estadoMon]++;
                         } else if( element.estadoMon == 'ESPERA' ) { 
                            contadorEspera = obj_temporal[element.estadoMon]++;
                         } else if ( element.estadoMon == 'EN PROCESO' ) { 
                            contadorProceso = obj_temporal[element.estadoMon]++;
                         } else if ( element.estadoMon == 'TERMINADO' ) { 
                            contadorTerminado = obj_temporal[element.estadoMon]++;
                         }
                    } 

                    if ( element.acopleVeh !== null ) {
                        
                        obj_carretas[element.acopleVeh] = { 
                            vehiculo: element.acopleVeh,
                            pendiente: contadorPendiente,  
                            espera: contadorEspera,  
                            proceso: contadorProceso,  
                            terminado: contadorTerminado,
                            cantidad: cantidadActividad,
                        };
                    }
                });
                this.lista_unidades = obj_carretas;
            }
        },
        avanzarPagina() { 
            this.Listar();
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
                this.dir = true
                return this.dir
            }
            this.dir = false
            return this.dir
        },
    },
    created() {

        var today = new Date();
        const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

        //console.log(fecha);
            /*this.monitoreo.Vehiculo_idVehiculo = 0;
            this.monitoreo.Acople_idVehiculo = 0;
            this.monitoreo.Persona_idPersona = 0;
            this.monitoreo.detalleMon = "";
            this.monitoreo.finicioMon =  + "-" + (today.getMonth() + 1) + "-"+ ;
            this.monitoreo.hinicioMon = today.getHours() + ":" + today.getMinutes();*/

        this.hoy = dias[today.getDay()]+" "+today.getDate()+" de  "+meses[today.getMonth()]+" del "+today.getFullYear();

        this.Nuevo();

        this.$http.get('/LiberAPP/Monitoreo/Listar').then( res => {
            this.monitoreos = res.data;
            this.monitoreos_temporal = res.data;
            this.showLoading = false;
            var obj_tractos = {};
            var obj_carretas = {};

            this.monitoreos.forEach(element => {
                if( !obj_tractos[element.Vehiculo_idVehiculo] && element.placaVeh !== null ) {
                    obj_tractos[element.placaVeh] = element.placaVeh;
                }  else if( element.placaVeh !== null ){ 
                    obj_tractos[element.placaVeh] = element.placaVeh;
                } 
            });

            this.monitoreos.forEach( element => { 
                if ( !obj_carretas[element.Acople_idVehiculo] && element.acopleVeh !== null ) { 
                    obj_carretas[element.acopleVeh] = element.acopleVeh;
                } else if ( element.acopleVeh !== null ) { 
                    obj_carretas[element.acopleVeh] = element.acopleVeh;
                }
            })

            this.tractos = Object.keys(obj_tractos).length;
            this.carretas = Object.keys(obj_carretas).length;
            //console.log('tractos:: ', obj_tractos );
            //console.log('carretas:: ', obj_carretas );
            //console.log("monitoreos:: ", this.monitoreos.length);
            const total_items = this.monitoreos.length;
            //const items_disponible = 12; 
            let division_paginas = total_items / this.cantidad_registros;
            //this.pagina_actual = 3;

            const items_siguiente = ( this.pagina_actual - 1 ) * this.cantidad_registros; 
            const items = this.monitoreos.slice( items_siguiente, this.cantidad_registros + items_siguiente )
            //console.log('items:: ', items );
            //console.log('paginas:: ', Number(division_paginas.toFixed(2)) )
            //console.log('paginas:: ', Math.round(division_paginas) )

            if ( Number(division_paginas.toFixed(2)) > Math.round(division_paginas) && Math.round(division_paginas) > 0) 
            {
                division_paginas = Math.round(division_paginas) + 1
            } else if( Math.round( division_paginas ) == 0 ) { 
                division_paginas = 1;
            } else { 
                division_paginas = Math.round(division_paginas);
            }

            this.total_paginas = division_paginas;
            this.monitoreos = items;
            this.contador = 1; //inicializo en la primera pagina

        }).catch( error => {
            this.Toast(true,'danger','Monitoreos','Error al cargar los registros: '+error);
            this.showLoading = false;
        })

        this.$http.get('/LiberAPP/Vehiculo/ListarVehiculo').then(res=> {
            this.vehiculos = res.data;
        }).catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })

        window.setInterval(() => {
            this.Listar();
        }, 60000); // interval set to one sec. 
        //}, 60000); // interval set to one sec. 
        /*window.setInterval(() => {
            this.titilar = !this.titilar;
        }, 1000);*/ // interval set to one sec. 

        /*this.$http.get('/LiberAPP/Vehiculo/Select/Carreta').then(res=> {
            this.carretas = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })*/

        this.$http.get('/LiberAPP/Persona/Select').then(res=> {
            this.personas = res.data;
        }).catch(error => { 
            this.Toast(true, 'danger','Operador','Error al cargar los registros: '+error)
        })
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
<style>
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.7s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 1;
    }
    .carretas
    {
        /*background-color: #28c76fad;*/
        background-color: #28c76fad;
        color: black !important;
    }
    .tractos
    {
        /*background-color: #ea5455;*/
        background-color: #ea54549c;
        color: black !important;
    }
    .paginacion 
    {
        background-color: #ff9e43b2;
        color: black !important;
    }
    /* Actividad en Proceso*/ 
    .en-proceso  
    {
        background-color: rgb(255, 255, 0) !important;
        color: black !important;
    }
    /* Actividad en Espera */
    .en-espera 
    {
        background-color: red !important;
        color: black !important;
    }
    /* Actividad en Operativa */
    .operativa 
    {
        background-color: rgb(1, 255, 1) !important;
        color: black !important;
    }
    .table-condensed th { 
        padding: 0.72rem 1rem !important;
    }
    .text-bold { 
        font-weight: bold;
        font-size: 12pt;
    }
    .margin-top { 
        margin-top: 10px;
        font-weight: bold;
    }
    .titilar { 
        animation-name: parpadeo;
        animation-duration: 3s;
        /*animation-timing-function: linear;*/
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;

        -webkit-animation-name:parpadeo;
        -webkit-animation-duration: 3s;
        /*-webkit-animation-timing-function: linear;*/
        -webkit-animation-timing-function: ease-out;
        -webkit-animation-iteration-count: infinite;   
    }
    .border-radius { 
        border-radius: 2.0rem !important;
        width: 42px !important;
        height: 42px !important;
    }

    @-moz-keyframes parpadeo{  
        0% { opacity: 1.0; }
        50% { opacity: 0.0; }
        100% { opacity: 1.0; }
    }

    @-webkit-keyframes parpadeo {  
        0% { opacity: 1.0; }
        50% { opacity: 0.0; }
        100% { opacity: 1.0; }
    }

    @keyframes parpadeo {  
        0% { opacity: 1.0; }
        50% { opacity: 0.0; }
        100% { opacity: 1.0; }
    }
</style>