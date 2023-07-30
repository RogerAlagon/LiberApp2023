<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="6">
                    <!---------------------------------- nuevo -------------------------------->
                        <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">Nuevo Abastecimiento</span>
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
            <b-row>
                <b-col md="2" xl="2">
                    <b-form-group label="Registros">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="ordenID" :options="orden"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Operación">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreCue" v-model="cuenta" :options="cuentas" style="flex: 1;"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Clientes">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" v-model="externo" :options="externos" style="flex: 1;"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                  </div>
                </b-col>
            </b-row>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table
                :columns="tcolumnas" :rows="abastecimientos" :rtl="direction"
                :search-options="{ enabled: true, externalQuery: searchTerm }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'acciones'">
                        <b-button v-b-modal.modal-formulario variant="primary" class="btn-icon rounded-circle" @click="Editar(props.formattedRow)">
                            <feather-icon icon="Edit2Icon"/>
                        </b-button>
                    </span>
                    <span v-if="props.column.field === 'ver'">
                        <b-button v-b-modal.modal-descripcion variant="secondary" class="btn-icon rounded-circle" @click="Detalle(props.formattedRow)">
                            <feather-icon icon="EyeIcon"/>
                        </b-button>
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
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
        <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="ID">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="abastecimientoc.idAbastecimiento" readonly/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="3">
                    <b-form-group label="Fecha Abastecimiento">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="abastecimientoc.fechaAba" class="form-control" />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grifo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreGri" style="flex: 1;" v-model="abastecimientoc.Grifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cuentas">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreCue" style="flex: 1;" v-model="abastecimientoc.idCuenta" :reduce="cuentas => cuentas.idCuenta" :options="cuentas" />
                            <!---<v-select label="valorDat" style="flex: 1;" v-model="abastecimientoc.idCuenta" :reduce="cuentas => cuentas.idDato" :options="cuentas" />-->
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Clientes">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreExt" style="flex: 1;" v-model="abastecimientoc.Externo_idExterno" :reduce="externos => externos.idExterno" :options="externos" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <!--<b-col md="12" xl="3">
                    <b-form-group label="Rutas">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="abreviacionRut" style="flex: 1;" v-model="abastecimientoc.Ruta_idRuta" :reduce="rutas => rutas.idRuta" :options="rutas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>-->
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="TruckIcon" />
            <span>Detalle Abastecimiento</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row><!-- Detalle de Abastecimiento -->
                <b-col md="12" xl="3">
                    <b-form-group>
                        <!---<label>{{ 'Vehiculo - ' + yVehiculo.modeloVeh }}</label>-->
                        <label>{{ 'Vehiculo - ' + yVehiculo.modeloVeh }}</label>
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="placaVeh" v-model="yVehiculo" style="flex: 1;" :options="vehiculos" @input="ultimoKM()"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Operador">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="trabajadorPer" v-model="yOperador" style="flex: 1;" :options="personas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="4">
                    <b-form-group label="Reten">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="trabajadorPer" v-model="yReten" style="flex: 1;" :options="personas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Estado Carreta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="yCarretaEst" :options="estados"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <!--<b-col md="4" xl="3">
                    <b-form-group label="Carreta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="placaVeh" style="flex: 1;" v-model="yCarreta" :reduce="carretas => carretas.idVehiculo" :options="carretas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>-->
                <b-col md="4" xl="3">
                    <b-form-group label="Carreta Cargada">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="yCarretaReg" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Carreta Vacia">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="yCarretaOp" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Galonaje">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <cleave class="form-control" v-model="yGalon" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <label>{{ 'Kilometraje [ ' + this.yKm + ' ]' }}</label>
                    <b-form-group>
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon" /></b-input-group-prepend>
                            <cleave class="form-control" v-model="yKilometraje" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Tabla">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="yTabla" />
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="4" xl="2">
                    <b-form-group label="Ruta">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="valorDat" style="flex: 1;" v-model="yRuta" :reduce="rutas => rutas.idDato" :options="rutas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="2">
                    <b-form-group label="Motivo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="ymotivo" :options="motivo"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="2">
                    <b-form-group label="Tipo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="ytipo" :options="tipo"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Observacion">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-textarea v-model="yObservacion" class="form-control" placeholder="Ingrese Observación" rows="2"/>
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
                <b-col md="12" xl="12" class="align-middle text-center">
                    <b-button variant="warning" @click="AgregarDetalleAba" size="sm">
                        <feather-icon icon="ArrowDownIcon" /> Agregar a la Cola
                    </b-button>
                    <br>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mb-2">
                    <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse table-secondary text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th></th>
                                <th>NRO</th>
                                <th>Vehiculo</th>
                                <th>Operador</th>
                                <th>Reten</th>
                                <th>Galon</th>
                                <th>Kilometraje</th>
                                <th>Tabla</th>
                                <th>Exceso</th>
                                <th>KM.Ant.</th>
                                <th>KM.Nue.</th>
                                <th>Rendimiento</th>
                                <th>Fecha.Ant.</th>
                                <th>Ruta</th>
                                <th>Observacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(udetalle,indice) in abastecimientod">
                                <td v-if="udetalle.placaVeh != 'DELETE'" >
                                    <b-button v-if="!boton" variant="gradient-danger" class="btn-icon rounded-circle" @click="EliminarDetalle(indice)">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                    <b-button v-else variant="gradient-danger" class="btn-icon rounded-circle" @click="BajaDetalle(indice)">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                </td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ indice+1 }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.placaVeh }}</td>
                                <!--<td v-if="udetalle.placaVeh != 'DELETE'" ><v-select label="placaVeh" v-model="udetalle.placaVeh" style="flex: 1;" :options="vehiculos" /></td>-->
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.trabajadorPer }}</td>
                                <!--<td v-if="udetalle.placaVeh != 'DELETE'"><v-select label="trabajadorPer" v-model="udetalle.trabajadorPer" style="flex: 1;" :options="personas" /></td>-->
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.retenPer }}</td>
                                <!--<td v-if="udetalle.placaVeh != 'DELETE'" ><v-select label="trabajadorPer" v-model="udetalle.retenPer" style="flex: 1;" :options="personas" /></td>-->
                                <td v-if="udetalle.placaVeh != 'DELETE'" ><cleave v-model="udetalle.galonesAba" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/></td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" ><cleave v-model="udetalle.kilometrajeKil" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none' }"/></td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" ><cleave v-model="udetalle.tablaAba" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/></td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ (udetalle.tablaAba - udetalle.galonesAba).toFixed(4) }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.kmAnt }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.kilometrajeKil - udetalle.kmAnt }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ (( udetalle.kilometrajeKil - udetalle.kmAnt ) / udetalle.galonesAba).toFixed(4) }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.fechaK }}</td>
                                <td v-if="udetalle.placaVeh != 'DELETE'" >{{ udetalle.rutaAba }} </td>
                                <!--<td v-if="udetalle.placaVeh != 'DELETE'" ><b-form-input v-model="udetalle.rutaAba" class="form-control"/></td>-->
                                <td v-if="udetalle.placaVeh != 'DELETE'" ><b-form-textarea v-model="udetalle.observacionAba" class="form-control" :raw="false" placeholder="Ingrese Observación" rows="1"/></td>
                            </tr>
                        </tbody>
                    </table>
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
        <!-- Modal Descripcion -->
        <b-modal
          id="modal-descripcion" v-model="showModalD"
          :header-bg-variant="headerBgVariantD" :header-text-variant="headerTextVariantD" :title="headerTitleVariantD"
          :footer-bg-variant="footerBgVariantD" :footer-text-variant="footerTextVariantD"
          centered no-close-on-backdrop
          hide-footer
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <b-row>
                <b-col md="3" xl="3">
                    <b-form-group label="ID">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <b-form-input v-model="abastecimientoc.idAbastecimiento" readonly/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="9" xl="3">
                    <b-form-group label="Fecha Abastecimiento">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="abastecimientoc.fechaAba" class="form-control" disabled />
                        </b-input-group>
                     </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Grifo">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreGri" style="flex: 1;" v-model="abastecimientoc.Grifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" disabled/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="3">
                    <b-form-group label="Cuentas">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="nombreCue" style="flex: 1;" v-model="abastecimientoc.idCuenta" :reduce="cuentas => cuentas.idCuenta" :options="cuentas" disabled />
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            
            <h5 class="text-primary">
                <feather-icon icon="TruckIcon" />
                <span>Detalle </span>
            </h5>
            <hr class="invoice-spacing">
            <vue-good-table
                :columns="tcolumnas2" :rows="abastecimientod2" :rtl="direction"
            >
            </vue-good-table>
        </b-modal>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab
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
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: '', field: 'ver'},
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
                { label: 'Externo_idExterno', field: 'Externo_idExterno', hidden:true },

            ],

            tcolumnas2: [
                { label:'ID', field:'idAbastecimientod', hidden:true, }, 
                { label:'Placa', field:'placaVeh'},
                { label:'Operador', field:'trabajadorPer'},
                { label:'Reten', field:'retenPer'},
                { label:'Galones', field:'galonesAba'}, 
                { label:'ID abs', field:'Abastecimientoc_idAbastecimiento', hidden:true },
                { label:'Kilometraje', field:'kilometrajeKil'}, 
                { label:'Rendimiento', field:'rendimientoAba' },
                { label:'Diferencia km', field:'diferenciakmAba' },
                { label:'Ruta', field:'rutaAba'},
                { label:'Observación', field:'observacionAba'},
                { label:'Placa Carreta', field:'carretaAba'},
                { label:'Estado Carreta', field:'cargadoAba'},
                { label:'Carreta Alterna', field:'carretaopAba'},
                
            ],

            estados: [

                { value:'CARGADO', text:'CARGADO' },
                { value:'VACIO', text:'VACIO' },
                { value:'COMPLETO', text:'COMPLETO' },
            ],
            orden: [
                { value:'ASC', text:'RECIENTE'}, 
                { value:'DESC', text:'ANTIGUO'}, 
            ],

            motivo: [
                { value:'ADMINISTRACION', text:'ADMINISTRACION'},
                { value:'OPERACION', text:'OPERACION'},
                { value:'MANTENIMIENTO', text:'MANTENIMIENTO'},
                { value:'LOGISTICA', text:'LOGISTICA'}
            ], 
            tipo: [
                { value:'RELLENO', text:'RELLENO'}, 
                { value:'FULL', text:'FULL'}, 
            ],


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
            headerTitleVariantD: 'DESCRIPCION ABASTECIMIENTO',
            bodyBgVariantD: 'light',
            bodyTextVariantD: 'success',
            footerBgVariantD: 'dark',
            footerTextVariantD: 'dark',
            showModalD: false,
            /**************************** entorno ****************************/      
            grifos: [],
            cuentas: [],
            vehiculos: [],
            carretas: [],
            personas: [],
            externos:[],
            rutas:[],
            externo: "",
            cuenta: "",
            ordenID:'',
            abastecimientosc:[],
            abastecimientoc: {
                idAbastecimiento: "", 
                fechaAba: "", 
                Grifo_idGrifo: "", 
                estadoAba: "", 
                Usuario_idUsuario: "", 
                idCuenta: "", 
                Externo_idExterno:"",
                Ruta_idDato:"",
            }, 
            abastecimientos: [],
            abastecimientod: [],
            abastecimientod2: [],
            rutas: [],

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
            ytipo:"",
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
        Detalle(prm_detalle)
        {
            this.headerBgVariantD = 'secondary'; 
            this.headerTitleVariantD = "VER DETALLE"
            this.boton = true; 
            this.abastecimientoc = prm_detalle;
            this.abastecimientoc.Grifo_idGrifo = Number(this.abastecimientoc.Grifo_idGrifo); 
            this.abastecimientoc.idCuenta = Number(this.abastecimientoc.idCuenta); 
            this.abastecimientoc.Externo_idExterno = Number(this.abastecimientoc.Externo_idExterno);

            this.$http.get('/LiberAPP/Abastecimiento/Select/'+ prm_detalle.idAbastecimiento ).then(res=> {
                this.abastecimientod2 = res.data;
            })
            .catch(error=> {
                this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
            })
        },
        Editar(prm_detalle)
        {
            this.headerTextVariant = 'primary'; 
            this.headerTitleVariant = 'EDITAR ABASTECIMIENTO'
            this.boton = true;
            this.abastecimientoc = prm_detalle;
            this.abastecimientoc.Grifo_idGrifo = Number(this.abastecimientoc.Grifo_idGrifo); 
            this.abastecimientoc.idCuenta = Number(this.abastecimientoc.idCuenta);
            this.abastecimientoc.Externo_idExterno = Number(this.abastecimientoc.Externo_idExterno);

            this.$http.get('/LiberAPP/Abastecimiento/Select/' + prm_detalle.idAbastecimiento ).then(res=> {
                this.abastecimientod = res.data;
            })
            .catch(error=> {
                this.Toast(true, 'danger','Detalle Abastecimiento','Error al cargar los registros: '+error);
            })
        },
        Nuevo()
        {
            this.headerTextVariant = 'success'; 
            this.headerTitleVariant = 'NUEVO ABASTECIMIENTO'; 
            this.boton = false; 
            this.abastecimientod = [];
            this.abastecimientoc = { 
                idAbastecimiento: '', 
                fechaAba: '', 
                Grifo_idGrifo: '', 
                estadoAba: '', 
                Usuario_idUsuario: '', 
                operacionAba: '',
            }
            this.yTabla = "";
        },
        Guardar()
        {
            //this.showLoading = true; 
            this.abastecimientoc.Usuario_idUsuario = this.userData.id
            
            var jsonAbastecimientoc = JSON.stringify(this.abastecimientoc); 
            var jsonAbastecimientod = JSON.stringify(this.abastecimientod);

            this.$http.post('/LiberAPP/Abastecimiento/Guardar',
            {
                abastecimientoc: jsonAbastecimientoc,
                abastecimientod: jsonAbastecimientod
            })
            .then(res => {
                this.Toast(true,'success','Agregar Abastecimiento','Guardado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.abastecimientod = [];
                this.Abastecimientos();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Abastecimiento','Error al guardar el registro: '+error);
                this.showLoading = false;
            })
        },
        Actualizar()
        {
            this.showLoading = true;
            //this.abastecimientod.Vehiculo_idVehiculo = this.abastecimientod.placaVeh.idVehiculo;
            var jsonAbastecimientoc = JSON.stringify(this.abastecimientoc);
            var jsonAbastecimientod = JSON.stringify(this.abastecimientod);
            //console.log('abastecimientod:: ', this.abastecimientod )
            this.$http.post('/LiberAPP/Abastecimiento/Actualizar', 
            {
                abastecimientoc: jsonAbastecimientoc,
                abastecimientod: jsonAbastecimientod,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Abastecimiento','Actualizado Correctamente');
                this.showModal = false; 
                this.showLoading = false;
                this.Abastecimientos();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Abastecimiento','Error al actualizar el registro: '+error);
                this.showLoading = false;
            })
        },
        ultimoKM(  )
        {
            this.$http.get('/LiberAPP/Abastecimiento/Kilometraje/' + this.yVehiculo.idVehiculo ).then( res=> {
                //this.yKm = res.data.kilometrajeKil
                this.yKm = res.data[0].kilometrajeKil; 
                this.yF = res.data[0].fechaKil;
            }).catch( error => {
                this.yKm = 'sin kilometraje'
            })
        },
        AgregarDetalleAba()
        {
            /*var idVehiculo = this.yVehiculo.idVehiculo;
            this.$http.get('/LiberAPP/Abastecimiento/Kilometraje/' + this.yVehiculo.idVehiculo).then( res=> {
                //this.yKm = res.data.kilometrajeKil
                this.yKm = res.data[0].kilometrajeKil; 
                this.yF = res.data[0].fechaKil;
                console.log('Detalle:: ', this.yKm);
            }).catch( error => {
                this.yKm = 'sin kilometraje'
            })*/

            if ( this.ymotivo == null || this.ymotivo == "")
            {
                this.Toast(true,'warning','Seleccione Motivo','Seleccione un Motivo');
                return;
            }
            if ( this.ytipo == null || this.ytipo == "")
            {
                this.Toast(true,'warning','Seleccione Tipo','Seleccione un tipo');
                return;
            }
            if ( this.yVehiculo == null || this.yVehiculo == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Seleccione un Vehiculo');
                return;
            }
            if ( this.yOperador == null || this.yOperador == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Seleccione un Operador');
                return;
            } 
            if ( this.yGalon == null || this.yGalon == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Ingrese Galón'); 
                return;
            }
            if ( this.yGalon >= 230 )
            {
                this.Toast(true, 'warning','Detalle Galon','El galón no puede ser mayor y/o igual 230'); 
                return;
            }
            if ( this.yKilometraje == null || this.yKilometraje == "" )
            {
                this.Toast(true,'warning','Agregar Detalle','Ingrese Kilometraje'); 
                return;
            }

            var uabastecimientod = {
                    placaVeh: this.yVehiculo.placaVeh,
                    trabajadorPer: this.yOperador.trabajadorPer,
                    retenPer: this.yReten.trabajadorPer, 
                    Vehiculo_idVehiculo: this.yVehiculo.idVehiculo,
                    Persona_idPersona: this.yOperador.idPersona,
                    Reten_idPersona: this.yReten.idPersona,
                    galonesAba: this.yGalon,
                    kilometrajeKil: this.yKilometraje,
                    excesoAba: this.yExceso,
                    tablaAba: this.yTabla,
                    Ruta_idDato: this.yRuta, 
                    observacionAba: this.yObservacion,
                    kmAnt: this.yKm,
                    diferenciakmAba: this.yKilometraje - this.yKm,
                    rendimientoAba: (( this.yKilometraje - this.yKm ) / this.yGalon).toFixed(4),
                    fechaK: this.yF,
                    Acople_idVehiculo: this.yCarreta,
                    cargadoAba: this.yCarretaEst,
                    carretaAba: this.yCarretaReg,
                    carretaopAba: this.yCarretaOp,
                    motivoAba: this.ymotivo, 
                    tipoAba: this.ytipo,
                    estado: "NUEVO",
                }; 
                var encontrado = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    return ( tabastecimientod.Vehiculo_idVehiculo == uabastecimientod.Vehiculo_idVehiculo );
                }, this);
                var operador = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    return ( tabastecimientod.Persona_idPersona == uabastecimientod.Persona_idPersona );
                }, this);
                var reten = this.abastecimientod.filter(function (tabastecimientod) 
                {
                    if (uabastecimientod.Reten_idPersona != null)
                    {
                        return ( tabastecimientod.Reten_idPersona == uabastecimientod.Reten_idPersona );
                    } else {
                        return 0
                    }
                }, this);

                if ( encontrado.length == 0 && operador.length == 0 && reten.length == 0 )
                {
                    this.abastecimientod.push(uabastecimientod)
                    this.yVehiculo = ""; 
                    this.yOperador = ""; 
                    this.yReten = "";
                    this.yGalon = "";
                    this.yKilometraje = "";
                    this.yRuta = ""; 
                    this.yObservacion = "";
                    this.yCarreta = ""; 
                    this.yCarretaEst = "";
                    this.yCarretaReg = "";
                    this.yCarretaOp = "";
                    this.yTabla = "";
                    this.yF = ""; 
                    this.yKm = "";
                    this.ymotivo = ""; 
                    this.ytipo = "";
                } else {
                    this.Toast(true,'warning','Agregar Detalle','Los datos ingresados ya Existen');
                }
        }, 
        BajaDetalle(prm_indice)
        {
            this.abastecimientod[prm_indice].placaVeh = 'DELETE'
        },

        EliminarDetalle(prm_indice)
        {
            this.abastecimientod.splice(prm_indice, 1);
        },
        Abastecimientos()
        {
            this.$http.get('/LiberAPP/Abastecimiento/Select').then(res=> {
                this.abastecimientos = res.data;
            })
            .catch(error=> {
                this.Toast(true,'danger','Abastecimientos2','Error al cargar los registros: '+error);
                this.showLoading = false
            })
        },
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Abastecimiento/Buscar/Select/' + this.externo.idExterno + '/' + this.cuenta.idCuenta + '/' + this.ordenID ).then( res => {
                this.abastecimientos = res.data;
                this.showLoading = false;
            })
            .catch( error => {
                this.Toast(true,'danger','detalle abastecimiento','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
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
                this.dir = true
                return this.dir
            }
            this.dir = false
            return this.dir
        },
    },
    created() {
        /*this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res=> {
            this.cuentas = res.data;
        })*/
        this.$http.get('/LiberAPP/Cuenta/Select').then(res=> {
            this.cuentas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Vehiculo/Select').then(res=> {
            this.vehiculos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })

        this.$http.get('/LiberAPP/Vehiculo/Select/Carreta').then(res=> {
            this.carretas = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Vehiculos','Error al cargar los registros: '+error)
        })

        this.$http.get('/LiberAPP/Persona/Select').then(res=> {
            this.personas = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Operador','Error al cargar los registros: '+error)
        })

        /*this.$http.get('/LiberAPP/Abastecimiento/Select').then(res=> {
            this.abastecimientos = res.data;
        })
        .catch(error => { 
            this.Toast(true, 'danger','Abastecimientos','Error al cargar los registros: '+error);
        })*/

        this.$http.get('/LiberAPP/Externo/Select').then(res=> {
            this.externos = res.data;
            //this.externos.unshift({idExterno:'0', nombreExt:'TODOS'});
        })
        .catch(error => {
            this.Toast(true,'danger','Externos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Ruta/Select/Abreviacion').then(res=> {
            this.rutas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
        })
        
        this.$http.get('/LiberAPP/Dato/Select/RUTA/COMBUSTIBLE').then(res=> {
            this.rutas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Tramos','Error al cargar los registros: ' + error);
        })

        this.$http.get('/LiberAPP/Grifo/Select').then(grifo=> {
            this.$http.get('/LiberAPP/Abastecimiento/Select').then(res=> {
                this.abastecimientos = res.data;
                this.grifos = grifo.data;
            })
        })
        .catch(error => { 
            this.Toast(true, 'danger','Grifo','Error al cargar los registros: '+error);
        })
    },
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>