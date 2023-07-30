<template>
    <div>
        <b-card>
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="PROVEEDOR">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <v-select label="empresaGri" style="flex: 1;" v-model="cliente" :reduce="empresas => empresas.empresaGri" :options="empresas" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="5">
                    <b-form-group label="Estado">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-select v-model="estado" :options="estados" :disabled="bloqueoEstado" style="flex: 1;" @input="Listar()"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
            <br />
        </b-card>
        <b-card>
            <b-row>
                <b-col md="12" xl="12" class="demo-inline-spacing" v-if="estado == 'FACTURADO'">
                    <h2 class="text-primary">Facturas Pendientes</h2>
                </b-col>
                <div class="demo-inline-spacing" v-for="(ufactura, indice) in facturas" :key="indice">
                    <b-button variant="outline-secondary" @click="FacturaDetalle( ufactura )" v-bind:class="{ 'btn-outline-info': ufactura.clicked, 'btn-outline-primary': !ufactura.clicked }" :disabled="showLoading" size="sm" pill>
                        <feather-icon icon="FileIcon" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">{{ ufactura.factura }}</span>
                    </b-button>
                </div>
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="12" xl="12" class="text-rigth" v-if="boton">
                    <h2 class="text-primary">Edición Factura: {{ yserieCom + '-' + ynumeroCom }} - Total Galonaje: {{ galonajeTotal }} Total Monto: {{ montoTotal }}</h2>
                </b-col>
                <b-col md="6" xl="10" class="text-center">
                    <b-button variant="primary" @click="Factura()" v-if="estado =='REGISTRADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-factura>
                        <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Nueva Factura ({{ seleccionados.length }})</span>
                    </b-button>
                    <b-button variant="warning" @click="LimpiarSeleccionados()" v-if="estado == 'REGISTRADO'" :disabled="showLoading || seleccionados.length == 0">
                        <feather-icon icon="Trash2Icon" class="mr-50"/>
                        <span class="align-middle">Limpiar Seleccionados</span>
                    </b-button>
                    <b-button variant="success" @click="ActualizarFactura('cerrar')" v-if="estado == 'FACTURADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-factura>
                        <feather-icon icon="FileIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cerrar Factura</span>
                    </b-button>
                    <b-button variant="info" v-if="estado == 'FACTURADO'" :disabled="showLoading || seleccionados.length == 0" v-b-modal.modal-factura @click="calcularGal()">
                        <feather-icon icon="EyeIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Ver Factura ({{ seleccionados.length }})</span>
                    </b-button>
                    <b-button variant="warning" @click="calcularGal()" v-if="estado == 'FACTURADO'" :disabled="showLoading || seleccionados.length == 0">
                        <feather-icon icon="CheckCircleIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Calcular</span>
                    </b-button>
                </b-col>
                <b-col md="6" xl="2">
                    <div class="text-center">
                        <b-form-input v-model="searchTerm" :placeholder="'Ingrese texto a buscar'" type="text" class="d-inline-block"/>
                    </div>
                </b-col>
            </b-row>
            <br>
            <!---------------------------------- tabla -------------------------------->
            <vue-good-table v-if="estado == 'REGISTRADO' || boton == true"
                :columns="tcolumnas" :rows="vconsumos" :rtl="direction"
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
              :pagination-options="{enabled: true, perPage:pageLength }"
            >
                <!---------------------------------- columnas especiales -------------------------------->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'rendimiento'">
                        <b-badge variant="danger" v-if="Math.sign(props.row.rendimiento) == -1">{{props.row.rendimiento}}</b-badge>
                        <p v-else>{{ props.row.rendimiento }}</p>
                    </span>
                    <span v-else-if="props.column.field === 'seleccionar'" class="text-center">
                        <b-button variant="success" class="btn-icon rounded-circle" v-if="props.row.seleccionado == true" @click="props.row.seleccionado = false, Seleccion(props.row)">
                            <feather-icon icon="CheckIcon" />
                        </b-button>
                        <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="props.row.seleccionado = true, Seleccion(props.row)">
                            <feather-icon icon="CrosshairIcon" />
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field =='eliminar'">
                        <b-button variant="danger" class="btn-icon rounded-circle" @click="Eliminar(props.row.idAbastecimientod2)">
                            <feather-icon icon="Trash2Icon"/>
                        </b-button>
                    </span>
                    <span v-else-if="props.column.field === 'gal2'">
                        <b><p>{{ props.row.gal2 }}</p></b>
                    </span>
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
        <!---------------------------------- modal Factura-------------------------------->
        <b-modal
          id="modal-factura" v-model="showModal2"
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
                <b-col md="6" xl="3">
                    <b-form-group label="SERIE">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-input v-model="yserieCom" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="NUMERO">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-input v-model="ynumeroCom" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                        <b-form-group label="PROVEEDOR">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <v-select label="empresaGri" v-model="yclienteCom" style="flex: 1;" :reduce="empresas => empresas.empresaGri" :options="empresas" />
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="FECHA EMISION">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="yfemisionCom" class="form-control" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="9">
                    <b-form-group label="Observacion">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-textarea v-model="yobservacionCom" class="form-control" placeholder="Ingrese Observación" rows="2"/>
                        </b-input-group>
                    </b-form-group>                     
                </b-col>
            </b-row>
            <h5 class="text-primary">
            <feather-icon icon="DollarSignIcon" />
            <span>Encuadre de Galones Consumidos y Precio Total</span>
            </h5>
            <hr class="invoice-spacing primary">
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Precio Total en Soles">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-input v-model="ytotalCom" readonly/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Diferencia de Precio Total">
                        <!--<b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="precioEncuadre"/>
                        </b-input-group>-->
                        <h2 class="text-primary">{{ yencuadreTotal }}</h2>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Encuadre de Precio Total">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="precioTotal" @input="calcularGal"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Total Galones Consumidos">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                <b-form-input v-model="galonajeTotal" readonly/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Diferencia de Monto">
                        <!--<b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <cleave v-model="yencuadreCom" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" readonly />
                        </b-input-group>-->
                        <!--<span>{{ yencuadreCom }}</span>-->
                        <h2 class="text-primary">{{ yencuadreCom }}</h2>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <b-form-group label="Encuadre de Monto">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                            <b-form-input v-model="montoTotal" @input="calcularGal"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                    <div class="demo-inline-spacing">
                        <b-button variant="primary" size="sm" @click="calcularGal" :disabled="showLoading">
                                    <feather-icon icon="CheckCircleIcon" class="mr-50" v-if="!showLoading"/>
                                    <b-spinner small v-else/>
                                    <span class="align-middle">Calcular</span>
                                </b-button>
                        <!--<b-button block variant="success" @click="Listar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Listar</span>
                        </b-button>-->
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <br>
                    <h5 class="text-primary">VALES SELECCIONADOS</h5>
                </b-col>
                <b-col md="12" xl="12">
                    <table class="table table-condensed table-bordered">
                        <tr>
                            <th style="width: 25px;">Eliminar</th>
                            <th style="width: 60px;">ID</th>
                            <th style="width: 50px;">Placa</th>
                            <th style="width: 25px;">Galonaje</th>
                            <th style="width: 30px;">Fecha Abasto</th>
                            <th style="width: 45px;">Km.Recorrido</th>
                            <th style="width: 70px;">Ciudad</th>
                            <th style="width: 120px;">Rendimiento</th>
                            <th style="width: 50px;">Observacion</th>
                            <th style="width: 26px;">Precio</th>
                            <th style="width: 32px;">Monto (S/.)</th>
                        </tr>
                        <tr v-for="(uvale, indice) in this.seleccionados">
                            <td>
                                <b-button variant="success" class="btn-icon rounded-circle" v-if="uvale.seleccionado == true" @click="EliminarDetalle(indice, uvale.idAbastecimientod2),uvale.seleccionado = false">
                                    <feather-icon icon="CheckIcon" />
                                </b-button>
                                <b-button variant="outline-primary" class="btn-icon rounded-circle" v-else @click="EliminarDetalle(indice, uvale.idAbastecimientod2)">
                                    <feather-icon icon="CrosshairIcon" />
                                </b-button>
                            </td>
                            <td v-if="uvale.estado == 0" class="bg-success bg-lighten-5 text-light">{{ uvale.idAbastecimientod2 }}</td>
                            <td v-else>{{ uvale.idAbastecimientod2 }}</td>
                            <td>{{ uvale.placaVeh }}</td>
                            <td><cleave v-model="uvale.galonaje2" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" /></td>
                            <td>{{ uvale.fecha2 }}</td>
                            <td>{{ uvale.diferenciakmAba }}</td>
                            <td>{{ uvale.ciudad2 }}</td>
                            <td>{{ uvale.rendimientoAba }}</td>
                            <td><b-form-textarea v-model="uvale.observacionAba" style="width: 150px; height: 40px;" class="form-control" :raw="false" placeholder="Ingrese Observación" rows="1"/></td>
                            <!---<td v-if="uvale.precioGri == null || uvale.precioGri == 0" class="bg-danger text-light">{{ uvale.precioGri + ' | SIN PRECIO'}}</td>-->
                            <td v-if="uvale.precioGri == null || uvale.precioGri == 0" class="bg-danger text-light">
                                <b-button v-b-modal.modal-descripcion-precio variant="primary" class="btn-icon rounded-circle" @click="precioCombustible( uvale, indice )">
                                    <feather-icon icon="Edit2Icon"/>
                                </b-button>{{ uvale.precioGri }}
                            </td>
                            <td v-if="uvale.estadoGrifo == null || uvale.estadoGrifo == 'FACTURADO'" class="bg-warning text-light">{{ uvale.precioGri + ' | FACTURADO'}}</td>
                            <td v-else-if="uvale.precioGri !== 0 && uvale.estadoGrifo !== 'FACTURADO'"> 
                                <b-button v-b-modal.modal-descripcion-precio variant="primary" class="btn-icon rounded-circle" @click="precioCombustible( uvale, indice )">
                                    <feather-icon icon="Edit2Icon"/>
                                </b-button>{{ uvale.precioGri }}
                            </td>
                             <td>{{ (uvale.precioGri * uvale.galonaje2).toFixed(5) }}</td>
                        </tr>
                        <!--<tr>
                            <th>Total Galonaje </th>
                            <th>{{ galonajeTotal }}</th>
                        </tr>
                        <tr>
                            <th>Monto de Ajuste</th>
                            <th><cleave v-model="yencuadreCom" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"  /></th>
                        </tr>
                        <tr>
                            <th>Total Monto (S/.)</th>
                            <th>{{ montoTotal }}</th>
                        </tr>
                        <tr>
                            <th colspan="2">
                                <b-button variant="primary" size="sm" @click="calcularGal" :disabled="showLoading">
                                    <feather-icon icon="CheckCircleIcon" class="mr-50" v-if="!showLoading"/>
                                    <b-spinner small v-else/>
                                    <span class="align-middle">Calcular</span>
                                </b-button>
                            </th>
                        </tr>-->
                    </table>
                </b-col>           
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModal2 = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="GuardarFactura" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="ActualizarFactura('guardar')" v-if="boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Actualizar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!------------------------------------------- modal precios------------------------------->
        <b-modal
            id="modal-descripcion-precio" v-model="showModalP"
            :header-bg-variant="headerBgVariantP" :header-text-variant="headerTextVariantP" :title="headerTitleVariantP"
            :footer-bg-variant="footerBgVariantP" :footer-text-variant="footerTextVariantP"
            centered no-close-on-backdrop
            title-tag="div"
            cancel-title="Cancelar" ok-title="Guardar"
            size="lg"
            cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="ID"> <b-form-input v-model="yidCombustible" readonly/> </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Tipo de Combustible">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="ClipboardIcon"/></b-input-group-prepend>
                            <!--<v-select label="id" style="flex: 1;" v-model="precio.nombreCom" :reduce="nombreCombustible => nombreCombustible.value" :options="nombreCombustible" />-->
                            <v-select label="valorDat" style="flex: 1;" v-model="yTipo_iDato" :reduce="tcombustible => tcombustible.idDato" :options="tcombustible" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Precio Combustible">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="DollarSignIcon"/></b-input-group-prepend>
                            <cleave v-model="yprecioCom" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/>
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="6">
                    <b-form-group label="Fecha">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="CalendarIcon"/></b-input-group-prepend>
                            <flat-pickr v-model="yfechaCom" class="form-control" :disabled="true" />
                        </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col md="12" xl="12">
                    <b-form-group label="GRIFO (NOMBRE - EMPRESA - CIUDAD)">
                        <b-input-group class="input-group-merge">
                            <b-input-group-prepend is-text><feather-icon icon="TruckIcon"/></b-input-group-prepend>
                            <v-select label="nombreGri" style="flex: 1;" v-model="yGrifo_idGrifo" :reduce="grifos => grifos.idGrifo" :options="grifos" :disabled="true" />
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
                    <b-button variant="success" size="sm" @click="ActualizarPrecio" :disabled="showLoading">
                        <feather-icon icon="SaveIcon" class="mr-50" v-if="!showLoading"/>
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
BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BFormTextarea, BForm, BButton, BAvatar, BBadge, BPagination, BFormSelect, BInputGroup, BInputGroupPrepend, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BOverlay, BSpinner
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import flatPickr from 'vue-flatpickr-component'
import store from '@/store/index'
import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { options } from 'preact'

export default {
    components: {
        BToast,
        BCard,
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
        BCardText,
        BOverlay,
        vSelect,
        flatPickr,
        Cleave,
        BFormTextarea
    },
    directives: {
        Ripple,
    },
    data() {
        return {
             /**************************** elementos de ux ****************************/
             dir: false,
            pageLength: 25,
            searchTerm: '',
            tabIndex: 1,

            /**************************** tabla ****************************/

            tcolumnas: [
                { label:'Sel.', field:'seleccionar'},
                { label:'Acciones', field:'eliminar'},
                { label:'ID', field:'idAbastecimientod2'},
                { label: 'Placa', field: 'placaVeh'},
                { label: 'Proveedor', field: 'proveedor'},
                { label: 'Fecha', field: 'fecha2'},
                { label: 'Galonaje', field: 'galonaje2'},
                { label: 'Kilometraje', field: 'km2'},
                { label: 'Rendimiento', field: 'rendimientoAba'},
                { label: 'Comprobante', field: 'idComprobante', hidden: true },
                { label: 'Estado', field: 'estadoCom', hidden: true },
                { label: 'Observaciones', field: 'observacionAba', hidden: true },


            ],

            tcolumnas2: [
                { label:'ID', field:'idAbastecimientod2'},
                { label:'Placa', field:'placaVeh'},
                { label:'Ciudad', field:'ciudad2'},
                { label:'Empresa', field:'proveedor'},
                { label:'Fecha', field:'fecha2'},
                { label:'Galon', field:'galonaje2'},
                { label:'Kilometraje', field:'km2'},
            ],

            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'RELLENO CONSUMO',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showLoading: false,
            showModal2: false,
            boton: false,
            showModal: false,

            /**************************** modal precios **************************/
            headerBgVariantP: 'dark',
            headerTextVariantP: 'success',
            headerTitleVariantP: 'PRECIO COMBUSTIBLE',
            bodyBgVariantP: 'light',
            bodyTextVariantP: 'success',
            footerBgVariantP: 'dark',
            footerTextVariantP: 'dark',
            showLoadingP: false,
            showModalP: false,
            botonP: false,
            showModalP: false,


            vconsumos:[],
            tcombustible:[],
            dconsumos:[],
            vehiculos:[],
            empresas:[],
            grifos:[],
            facturas:[],
            seleccionados: [],
            detalleFactura: [],
            eliminados: [],
            vale: {},
            estados: [ 
                { value:'REGISTRADO', text:'REGISTRADO'},
                { value:'FACTURADO', text:'FACTURADO'},
                //{ value:'CERRADO', text:'CERRADO'},
                /*{ value:'REGISTRADO', text:'REGISTRADO'},
                { value:'FACTURADO', text:'FACTURADO'},
                { value:'ANULADO', text:'ANULADO'},
                { value:'APLICADO', text:'APLICADO'},*/
            ],
            seleccionado: {
                cliente: "", 
                estado: "",
            },

            /**************************** formulario ****************************/
            vehiculo:0,
            cliente:"",
            estado:"",
            bloqueoEstado: false,
            galonajeTotal:0,
            montoTotal:0,
            precioTotal:0,
            montoAjuste:0,
            galrecarga:0,
            precioEncuadre: 0,

            cont:0,
            factura: {
                serieCom:"",
                numeroCom:"", 
                totalCom:"",
                femisionCom: "",
                clienteCom:"",
                encuadreCom: 0,
                encuadretotalCom: 0,
                estado: "",
                observacionCom:"",
                estadoCom: "",
            },
            precio: {
                idCombustible: 0,
                nombreCom:'',
                precioCom: '', 
                fechaCom: '', 
                fechaFin: '', 
                Grifo_idGrifo: '',
            },

            yidCombustible: 0,
            yGrifo_idGrifo: 0,
            yfechaCom: '', 
            yprecioCom: 0,
            yindice: 0,
            yTipo_iDato: 0,

            yidComprobante: 0,
            yserieCom:"",
            ynumeroCom:"", 
            ytotalCom:"",
            yfemisionCom: "",
            yclienteCom:"",
            yencuadreCom: 0,
            yencuadreTotal: 0,
            yobservacionCom: "",
            clicked: false,
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
        calcularGal()
        {
            
            /*this.galonajeTotal = 0
            this.montoTotal = 0
            this.total = 0; 
            this.galrecarga = 0;

                this.seleccionados.forEach(recarga => {
                    this.galonajeTotal += parseFloat(recarga.galonaje2)
                    this.montoTotal += parseFloat( recarga.precioGri * recarga.galonaje2 )
                    this.total += parseFloat( recarga.precioGri * recarga.galonaje2 )  
                if ( recarga.galrecarga == "" )
                {
                    this.galrecarga = parseFloat(recarga.galonaje2)
                } else if( recarga.galrecarga !== ""){
                    this.galrecarga = parseFloat(recarga.galoanje2) + parseFloat(recarga.galrecarga)
                }
                
                this.seleccionados.forEach(element => {
                    
                    if (recarga.abastecimiento2 == element.abastecimiento2 && element.tipoAba == 'FULL' )
                    {
                        element.rendimiento = parseFloat(element.diferencia / this.galrecarga ).toFixed(2)
                    }
                });
            })
            if ( this.yencuadreCom =="") { this.yencuadreCom = 0; }
            this.galonajeTotal = this.galonajeTotal.toFixed(3)
            this.ytotalCom = this.total.toFixed(4);
            this.montoTotal = this.montoTotal + parseFloat(this.yencuadreCom)
            this.montoTotal = this.montoTotal.toFixed(4)*/



            this.galonajeTotal = 0
            this.total = 0; 
            this.galrecarga = 0;

                this.seleccionados.forEach(recarga => {
                    this.galonajeTotal += parseFloat(recarga.galonaje2)
                    this.total += parseFloat( recarga.precioGri * recarga.galonaje2 )  
                if ( recarga.galrecarga == "" )
                {
                    this.galrecarga = parseFloat(recarga.galonaje2)
                } else if( recarga.galrecarga !== ""){
                    this.galrecarga = parseFloat(recarga.galoanje2) + parseFloat(recarga.galrecarga)
                }
                
                this.seleccionados.forEach(element => {
                    
                    if (recarga.abastecimiento2 == element.abastecimiento2 && element.tipoAba == 'FULL' )
                    {
                        element.rendimiento = parseFloat(element.diferencia / this.galrecarga ).toFixed(2)
                    }
                });
            })
            this.galonajeTotal = this.galonajeTotal.toFixed(3)
            this.ytotalCom = this.total.toFixed(4);
            if ( this.montoTotal !== 0 && this.montoTotal !== "")
            {
                this.yencuadreCom = this.montoTotal - parseFloat( this.ytotalCom);
                this.yencuadreCom = this.yencuadreCom.toFixed(4);
            } else if( this.montoTotal == "" ) { 
                this.yencuadreCom = 0;
            }

            if ( this.precioTotal !== 0 && this.precioTotal !== "")
            {
                this.yencuadreTotal = parseFloat(this.precioTotal) - parseFloat( this.ytotalCom );
                this.yencuadreTotal = this.yencuadreTotal.toFixed(4);
            } else if( this.precioTotal == "") { 
                this.yencuadreTotal = 0;
            }

        },
        Consumo( prm_consumo )
        {
            this.boton = true;
            this.dconsumos = prm_consumo
        },
        Listar()
        {
            this.showLoading = true;
            this.$http.get('/LiberAPP/Consumo/ListarFacturas/' + this.cliente + '/' + this.estado).then( res => { 
                this.facturas = res.data
            }).catch( error => { 
                this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })


            this.showLoading = true;
            this.$http.get('/LiberAPP/Consumo/Validar/' + this.cliente + '/'+ this.estado).then( res => {
                if ( res.data.consumos)
                {
                    if ( this.seleccionados.length > 0) 
                    {
                        this.vconsumos = res.data.consumos
                        this.vconsumos.forEach( element => {
                            this.seleccionados.forEach( select => {
                                if ( element.idAbastecimientod2 == select.idAbastecimientod2 )
                                {
                                    element.seleccionado = select.seleccionado
                                    select.precioGri = element.precioGri
                                }
                            })
                        })
                        this.seleccionado.cliente = this.cliente
                        this.seleccionado.estado = this.estado
                    } else {
                        this.vconsumos = res.data.consumos;
                        this.vconsumos = this.vconsumos.map(v => ({ ...v, seleccionado: false }));
                        this.seleccionado.cliente = this.cliente; 
                        this.seleccionado.estado = this.estado;
                    }
                    this.showLoading = false;
                } else { 
                    this.vconsumos = []
                    this.showLoading = false;
                }

                if ( this.estado == 'REGISTRADO' ) 
                    this.boton = false 
                    this.seleccionados = [];
                    this.yidComprobante =  0;
                    this.yserieCom = "";
                    this.ynumeroCom = "";
                    this.ytotalCom = "";
                    this.yfemisionCom = "";
                    this.yclienteCom = "";
                    this.yencuadreCom =  0;
                    this.yencuadreTotal =  0;
                    this.yobservacionCom = "";
                    
            }).catch( error => {
                this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                this.showLoading = false;
            })
        },
        EliminarDetalle(prm_indice, abastecimiento2)
        {
            this.eliminados.push( this.seleccionados[prm_indice])
            this.seleccionados.splice(prm_indice, 1)
        },
        Eliminar( prm_fila )
        {
            this.boxOne = ''
            this.$bvModal
              .msgBoxConfirm('¿Esta seguro de eliminar el registro?', {
                cancelVariant: 'outline-secondary',
              })
              .then(value => {
                this.boxOne = value
                if(this.boxOne === true) 
                {
                  //this.$http.post('/LiberAPP/Abastecimiento/Consumo/Desactivar',
                  this.$http.post('/LiberAPP/Consumo/Desactivar',
                  {
                    idAbastecimiento : prm_fila,
                  })
                  .then(res => {
                    this.Toast(true,'primary','Abastecimiento','Abastecimento eliminado Correctamente');
                    this.showModal = false;
                    this.showLoading = false;
                    this.Listar();
                  })
                  .catch(error => {
                    this.Toast(true,'danger','Abastecimiento','Error al eliminar el Abastecimiento: '+error);
                    this.showLoading = false;
                  })
                }
                else
                  this.showLoading = false;
              })
        },
        Seleccion(prm_vale)
        {
            for (var i = 0; i < this.seleccionados.length; i++)
            {
                //if(this.seleccionados[i].abastecimiento2 == prm_vale.abastecimiento2)
                if(this.seleccionados[i].idAbastecimientod2 == prm_vale.idAbastecimientod2)
                {
                    this.seleccionados.splice(i,1);
                    break;
                }
            }

            if(prm_vale.seleccionado && this.boton )
            {
                prm_vale.estado = 0
                this.seleccionados.push(prm_vale);
            } else if( prm_vale.seleccionado && this.boton == false) {
                this.seleccionados.push(prm_vale);
            }
        },
        Factura()
        {
            //this.yclienteCom = this.cliente;
            this.galonajeTotal = 0;
            
            this.factura = {
                serieCom:"",
                numeroCom:"", 
                totalCom:"",
                femisionCom: "",
                clienteCom:"",
                idComprobante:0,
            }

            this.vale = {'factura': this.seleccionados,};
            this.dconsumos = this.seleccionados;

            for (var j = 0; j < this.dconsumos.length; j++)
            {
                this.galonajeTotal = Number(this. galonajeTotal) + Number(this.dconsumos[j].gal2); 
            }
            if ( this.bloqueoEstado )
                this.boton = true;

        },
        FacturaDetalle( prm_detalle )
        {
            this.showLoading = true;
            this.clicked = true;
            prm_detalle.clicked = true;
            if ( prm_detalle.estadoCom == 'FACTURADO') 
            {
                // Cambiar de color boton->plantilla 
                for ( var i = 0; i < this.facturas.length; i++ )
                {
                    if ( this.facturas[i].idComprobante !== prm_detalle.idComprobante) 
                    {
                        this.facturas[i].clicked = false;
                    }
                }
                //

                this.boton = true;

                this.$http.get('/LiberAPP/Consumo/Validar/' + this.cliente + '/REGISTRADO').then( res => 
                {
                    if ( res.data.consumos)
                    {   
                        if ( this.seleccionados.length > 0) 
                        {
                            this.vconsumos = res.data.consumos
                            this.vconsumos.forEach( element => {
                                this.seleccionados.forEach( select => {
                                    if ( element.idAbastecimientod2 == select.idAbastecimientod2 )
                                    {
                                        element.seleccionado = select.seleccionado
                                        select.precioGri = element.precioGri
                                    }
                                })
                            })
                            this.seleccionado.cliente = this.cliente
                            this.seleccionado.estado = this.estado
                        } else {
                            this.vconsumos = res.data.consumos;
                            this.vconsumos = this.vconsumos.map(v => ({ ...v, seleccionado: false }));
                            this.seleccionado.cliente = this.cliente; 
                            this.seleccionado.estado = this.estado;
                        }
                        this.showLoading = false;
                    } else { 
                        this.vconsumos = []
                        this.showLoading = false;
                    }

                    if ( this.estado == 'REGISTRADO' ) 
                        this.boton = false 
                }).catch( error => {
                    this.Toast(true,'danger','Validacion Consumo','Error al cargar los registros: '+error);
                    this.showLoading = false;
                })

                this.$http.get('/LiberAPP/Consumo/ListarDetalleComprobante/' + prm_detalle.idComprobante).then( res => {
                    this.seleccionados = res.data.consumos
                    this.seleccionados = this.seleccionados.map( v => ({ ...v, seleccionado: true }));
                    this.dconsumos = this.seleccionados;
                    this.yidComprobante = res.data.cabecera[0].idComprobante;
                    this.yserieCom = res.data.cabecera[0].serieCom;
                    this.ynumeroCom = res.data.cabecera[0].numeroCom;
                    this.ytotalCom = res.data.cabecera[0].totalCom;
                    this.yfemisionCom = res.data.cabecera[0].fingresoCom;
                    this.yclienteCom = res.data.cabecera[0].clienteCom;
                    this.yencuadreCom = res.data.cabecera[0].encuadreCom;
                    this.yencuadreTotal = res.data.cabecera[0].encuadretotalCom;
                    this.yobservacionCom = res.data.cabecera[0].observacionCom;
                    this.montoTotal = 0; 
                    this.precioTotal = 0;
                }).catch( error => {
                    this.Toast(true,'danger','Factura Detalle','Error al cargar los registros: '+error);
                    this.showLoading = false;
                })

            } else { 
                this.boton = false; 
            }
        },
        precioCombustible( prm_precio, prm_indice )
        {
            this.yidCombustible = parseInt( prm_precio.idCombustible );
            this.yGrifo_idGrifo = parseInt( prm_precio.idGrifo );
            this.yfechaCom = prm_precio.fecha2; 
            this.yprecioCom = prm_precio.precioGri;
            this.yindice = prm_indice;
        },
        LimpiarSeleccionados()
        {
            this.seleccionados = [];
            this.yserieCom = ""; 
            this.ynumeroCom = "";
            this.ytotalCom = ""; 
            this.yfemisionCom = ""; 
            this.yclienteCom = ""; 
            this.yencuadreCom = 0;
            this.yencuadreTotal = 0;
            this.yobservacionCom = "";
            this.boton = false;
            this.Listar();
        },
        GuardarFactura()
        {
            this.showLoading = true;
            if ( this.yserieCom == "" || this.yserieCom == undefined ) 
            {
                this.Toast(true,'warning','Serie','Ingrese la Serie ');
                this.showLoading = false;
                return;
            }
            
            if ( this.ynumeroCom == "" || this.ynumeroCom == undefined ) 
            {
                this.Toast(true,'warning','Número','Ingrese Número ');
                this.showLoading = false;
                return;
            }

            if ( this.yclienteCom == "" || this.yclienteCom == undefined ) 
            {
                this.Toast(true,'warning','Proveedor','Seleccione Proveedor ');
                this.showLoading = false;
                return;
            }

            if ( this.yfemisionCom == "" || this.yfemisionCom == undefined ) 
            {
                this.Toast(true,'warning','Fecha Emisión','Seleccione Fecha');
                this.showLoading = false;
                return;
            }

            if ( this.ytotalCom == "" || this.ytotalCom == undefined ) 
            {
                this.Toast(true,'warning','Total','Ingrese Total');
                this.showLoading = false;
                return;
            }

            this.factura.serieCom = this.yserieCom;
            this.factura.numeroCom = this.ynumeroCom; 
            this.factura.totalCom = this.ytotalCom;
            this.factura.femisionCom = this.yfemisionCom;
            this.factura.clienteCom = this.yclienteCom;
            this.factura.encuadreCom = this.yencuadreCom;
            this.factura.encuadretotalCom = this.yencuadreTotal;
            this.factura.observacionCom = this.yobservacionCom;

            var jsonFactura = JSON.stringify(this.factura) 
            var jsonVale = JSON.stringify(this.dconsumos);

            this.$http.post('/LiberAPP/Consumo/GuardarComprobante', 
            {
                comprobante: jsonFactura, 
                vale: jsonVale,
            }).then( res => {
                this.Toast(true,'primary','Factura','Guardado Correctamente');
                this.showModal2 = false;
                this.showLoading = false; 
                this.seleccionados = [];
                this.yserieCom = "";
                this.ynumeroCom = "";
                this.ytotalCom = "";
                this.yfemisionCom = ""; 
                this.yclienteCom = ""; 
                this.yencuadreCom = 0;
                this.yencuadreTotal = 0;
                this.yobservacionCom = "";
                this.Listar();
            }).catch(error => {
                this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
                this.showLoading = false;
            });
        }, 
        ActualizarPrecio()
        {
            this.showLoadingP = true; 
            this.precio.nombreCom = 'DIESEL';
            this.precio.precioCom = this.yprecioCom; 
            this.precio.fechaCom = this.yfechaCom; 
            this.precio.fechaFin = this.yfechaCom;
            this.precio.Grifo_idGrifo = this.yGrifo_idGrifo;
            
            var jsonPrecio = JSON.stringify( this.precio );

            if ( this.precio.idCombustible == "") 
            {
                this.precio.nombreCom = this.yTipo_iDato;
                var jsonPrecio = JSON.stringify(this.precio);
                this.$http.post('/LiberAPP/Grifo/Precio/Guardar',
                {
                    combustible: jsonPrecio,
                }).then(res => {
                    this.Toast(true,'success','Agregar Precio','Guardado Correctamente');
                    this.showModalP = false;
                    this.showLoadingP = false;
                    this.seleccionados[this.yindice].precioGri = this.yprecioCom;

                    if ( this.seleccionados.length > 0) 
                    {
                        this.seleccionados.forEach( select => {
                            if ( this.yGrifo_idGrifo == select.idGrifo && this.yfechaCom == select.fecha2 )
                            {
                                select.precioGri = this.yprecioCom
                                select.idCombustible = res.data
                            }
                        })
                    }

                }).catch(error => {
                    this.Toast(true,'danger','Agregar Precio','Error al guardar el registro: '+error);
                    this.showLoadingP = false;
                });
            }

            if ( this.precio.idCombustible !== 0)
            {
                this.$http.post('/LiberAPP/Grifo/Precio/Actualizar',
                {
                    precio: jsonPrecio,
                }).then(res => {
                    this.Toast(true,'primary','Guardar Precio','Actualizado Correctamente');
                    this.showModalP = false;
                    this.showLoadingP = false;
                    //this.seleccionados[this.yindice].precioGri = this.yprecioCom;
                    if ( this.seleccionados.length > 0) 
                    {
                        this.seleccionados.forEach( select => {
                            if ( this.yGrifo_idGrifo == select.idGrifo && this.yfechaCom == select.fecha2 )
                            {
                                select.precioGri = this.yprecioCom
                            }
                        })
                    }
                    //this.seleccionados[this.yindice].
                    /*if ( estado == 'cerrar')
                        this.facturas = [];*/
                }).catch(error => {
                    this.Toast(true,'danger','Guardar Precio','Error al actualizar el registro: '+error);
                    this.showLoadingP = false;
                });
            }
        },
        ActualizarFactura( estado )
        {
            this.showLoading = true;
            
            if ( estado == 'guardar')
            {
                this.factura.idComprobante = this.yidComprobante;
                this.factura.serieCom = this.yserieCom;
                this.factura.numeroCom = this.ynumeroCom; 
                this.factura.totalCom = this.ytotalCom;
                this.factura.femisionCom = this.yfemisionCom;
                this.factura.clienteCom = this.yclienteCom;
                this.factura.encuadreCom = this.yencuadreCom;
                this.factura.encuadretotalCom = this.yencuadreTotal;
                this.factura.observacionCom = this.yobservacionCom;
                this.factura.estado = 'guardar'
                //this.factura.estadoCom = 'FACTURADO';
                //this.FacturaDetalle( this.factura );
            }

            if ( estado == 'cerrar') 
            {
                this.factura.idComprobante = this.yidComprobante;
                this.factura.serieCom = this.yserieCom;
                this.factura.numeroCom = this.ynumeroCom; 
                this.factura.totalCom = this.ytotalCom;
                this.factura.femisionCom = this.yfemisionCom;
                this.factura.clienteCom = this.yclienteCom;
                this.factura.encuadreCom = this.yencuadreCom;
                this.factura.encuadretotalCom = this.yencuadreTotal;
                this.factura.observacionCom = this.yobservacionCom;
                this.factura.estado = 'cerrar';
                this.boton = false; 
                this.LimpiarSeleccionados();
            }

            var jsonFactura = JSON.stringify(this.factura) 
            var jsonVale = JSON.stringify(this.dconsumos)
            var jsonValeEliminados = JSON.stringify( this.eliminados )
    
            this.$http.post('/LiberAPP/Consumo/ActualizarComprobante', 
            {
                comprobante: jsonFactura, 
                vale: jsonVale,
                eliminados: jsonValeEliminados,
            }).then( res => {
                this.Toast(true,'primary','Factura','Actualizado Correctamente');
                this.showModal2 = false;
                this.showLoading = false;
                if ( estado == 'cerrar')
                    this.facturas = [];
                //this.seleccionados = [];
                //this.boton = false;
                //this.Listar();
                /*
                this.bloqueoEstado = false;
                this.yserieCom = ""; 
                this.ynumeroCom = "";
                this.ytotalCom = ""; 
                this.yfemisionCom = ""; 
                this.yclienteCom = ""; 
                this.yencuadreCom = 0;
                this.yobservacionCom = "";*/
            }).catch(error => {
                this.Toast(true,'danger','Solicitud','Error al procesar la solicitud: '+error);
                this.showLoading = false;
                //this.bloqueoEstado = false;
            });
        },
        AgregarVale()
        {
            this.estado = 'REGISTRADO';
            this.Listar();
            this.bloqueoEstado = true;
        },
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
        //this.$http.get('/LiberAPP/Grifo/Select').then( res=> {
        this.$http.get('/LiberAPP/Grifo/Select').then( res=> {
            this.grifos = res.data; 
            this.grifos.unshift({ nombreGri:'TODOS', idGrifo:0 })
        }).catch( error => {
            this.Toast(true, 'danger','Grifos','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Grifo/Empresa/Select').then( res=> {
            this.empresas = res.data; 
            this.empresas.unshift({ empresaGri:'TODOS'})
        }).catch( error => {
            this.Toast(true, 'danger','Empresas','Error al cargar los registros: '+error);
        })

        this.$http.get('/LiberAPP/Vehiculo/Select').then(res => {
            this.vehiculos = res.data;
            this.vehiculos.unshift({idVehiculo:'0', placaVeh:'TODOS'})
        }).catch(error => {
            this.Toast(true,'danger','Cargando Vehiculos','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
        this.$http.get('/LiberAPP/Dato/Select/TIPO/COMBUSTIBLE').then(res=> {
            this.tcombustible = res.data
            this.yTipo_iDato = res.data[0].idDato;
        }).catch(error => {
            this.Toast(true, 'danger','Dato', 'Error al cargar los registros: '+error);
        })
    }
}
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss'; // tabla 
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>
<style lang="scss">
    .resaltar 
    {
        background: red;
    }
    .vgt-responsive
    {
        height: 70vh;
        overflow: scroll;
        position: relative;
    }
    .vgt-responsive #vgt-table
    {
        position: relative;
    }
    .vgt-responsive #vgt-table thead th /*fijar filas thead*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th/*posicionar primera fila */
    {
      top: 0 !important;
    }
    /*.vgt-responsive #vgt-table thead tr:nth-child(1) th
    {
      top: 0 !important;
    }*/
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child/*posicionar primera columna thead*/
    {
        left: 0;
        z-index: 2;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna thead*/
    {
        left: 30pt;
        z-index: 2;
    }
    .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3)/*posicionar segunda columna thead*/
    {
        left: 70pt;
        z-index: 2;
    }
    .vgt-responsive #vgt-table tbody th/*fijar columnas*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
</style>