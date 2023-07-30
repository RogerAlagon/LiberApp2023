<template>
    <b-card title="">
        <b-row>
            <b-col md="8" xl="8" class="align-middle text-bold">
                Filtrar por: 
                <!--<b-badge href="#" @click="filtro = 'TODO'" variant="info"><feather-icon icon="LinkIcon"/> <span>Todos</span></b-badge>
                <b-badge href="#" @click="filtro = 'PROGRAMADO'" variant="dark"><feather-icon icon="LinkIcon"/> <span>Programado</span></b-badge>
                <b-badge href="#" @click="filtro = 'CARGA'" variant="success"><feather-icon icon="LinkIcon"/> <span>En Ruta-Carga</span></b-badge>
                <b-badge href="#" @click="filtro = 'ENTREGA'" variant="warning"><feather-icon icon="LinkIcon"/> <span>En Ruta-Entrega</span></b-badge>
                <b-badge href="#" @click="filtro = 'RETORNO'" variant="primary"><feather-icon icon="LinkIcon"/> <span>En Ruta-Retorno</span></b-badge>
                <b-badge href="#" @click="filtro = 'TERMINADO'" variant="secondary"><feather-icon icon="LinkIcon"/> <span>Terminado</span></b-badge>-->
            </b-col>
            <b-col md="4" xl="4" class="align-middle text-right">
                <!---------------------------------- nuevo -------------------------------->
                <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" class="mb-2">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Convoy</span>
                </b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="12" xl="12" class="align-middle text-center" v-for="(uconvoy,indice) in convoys" :key="uconvoy.idConvoy">
                <b-card class="card convoy" :border-variant="card[uconvoy.estadoCon]" bg-variant="transparent">
                    <div class="card-title">
                        <h6 class="text-primary mt-2">TRANSPORTE DE {{ uconvoy.cargaCon }}</h6>
                        <b-badge variant="dark" v-if="uconvoy.estadoCon == 'PROGRAMADO'">PROGRAMADO</b-badge>
                        <b-badge variant="success" v-else-if="uconvoy.estadoCon == 'CARGA'">RUTA-CARGA</b-badge>
                        <b-badge variant="warning" v-else-if="uconvoy.estadoCon == 'ENTREGA'">RUTA-ENTREGA</b-badge>
                        <b-badge variant="info" v-else-if="uconvoy.estadoCon == 'RETORNO'">RUTA-RETORNO</b-badge>
                        <b-badge variant="secondary" v-else-if="uconvoy.estadoCon == 'TERMINADO'">TERMINADO</b-badge>
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col md="5" xl="5" class="text-left">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ uconvoy.clienteExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ uconvoy.tipoCon }}: </span><span class="text-primary">{{ uconvoy.origenCon }} - {{ uconvoy.pasoCon }} - {{ uconvoy.destinoCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ uconvoy.roundtripCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad: </span><span class="font-weight-bolder">{{ uconvoy.vehiculoCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ uconvoy.remitenteExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{ uconvoy.partidaCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ uconvoy.destinatarioExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder">{{ uconvoy.llegadaCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ uconvoy.finicioCon }}</span><br>
                                <!--<feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Carga: </span><span class=" text-warning font-weight-bolder">{{ uconvoy.fcargaCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de de Descarga: </span><span class=" text-info font-weight-bolder">{{ uconvoy.fdescargaCon }}</span><br>-->
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-primary font-weight-bolder">{{ uconvoy.fterminoCon }}</span><br>
                            </b-col>
                            <b-col md="7" xl="7" class="border-left-primary border-left-3">
                                <dl class="row">
                                    <dd class="col-sm-2 text-center font-weight-bolder">O.S.</dd>
                                    <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                    <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                    <dd class="col-sm-2 text-center font-weight-bolder">CARGA</dd>
                                </dl>
                                <dl class="row" v-for="(uservicio,indice2) in uconvoy.servicios" :key="uservicio.idServicio">
                                    <dd class="col-sm-2 text-center"> {{ uservicio.idServicio }}</dd>
                                    <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                        <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                        <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                    </dt>
                                    <dd class="col-sm-5 text-center"> {{ uservicio.trabajadorPer }}</dd>
                                    <dd class="col-sm-2 text-center"> {{ uservicio.cargaSer }}</dd>
                                </dl>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="card-footer">
                        <!--<b-button variant="outline-primary" size="sm" @click="Editar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="Edit2Icon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Editar</span>
                        </b-button>-->
                        <b-button variant="outline-primary" size="sm" v-b-modal.modal-recorrido  @click="Recorrido(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="SendIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Iniciar Recorrido</span>
                        </b-button>
                        <b-button variant="outline-danger" size="sm" @click="Anular(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Anular</span>
                        </b-button>
                        <b-button variant="outline-success" size="sm" v-b-modal.modal-carga  @click="Cargar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="SendIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Guías de Remisión</span>
                        </b-button>
                        <!--<b-button variant="outline-secondary" size="sm" v-b-modal.modal-reasignar :disabled="showLoading" v-if="uconvoy.estadoCon == 'CARGA' || uconvoy.estadoCon == 'ENTREGA' || uconvoy.estadoCon == 'RETORNO'">
                            <feather-icon icon="RepeatIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Reasignar Recursos</span>
                        </b-button>-->
                        <!--<b-button variant="outline-success" size="sm" v-b-modal.modal-carga  @click="Cargar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="SendIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Iniciar Ruta-Carga</span>
                        </b-button>
                        <b-button variant="outline-warning" size="sm" v-b-modal.modal-entrega  @click="Entregar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'CARGA'">
                            <feather-icon icon="PackageIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Iniciar Ruta-Entrega</span>
                        </b-button>
                        <b-button variant="outline-primary" size="sm" v-b-modal.modal-retorno  @click="Retornar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'ENTREGA'">
                            <feather-icon icon="PackageIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Iniciar Ruta-Retorno</span>
                        </b-button>
                        <b-button variant="outline-primary" size="sm" v-b-modal.modal-finalizar  @click="Finalizar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'RETORNO'">
                            <feather-icon icon="PackageIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Finalizar Servicio</span>
                        </b-button>
                        <b-button variant="outline-danger" size="sm"  @click="Iniciar(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon != 'PROGRAMADO'">
                            <feather-icon icon="FileTextIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Guías</span>
                        </b-button>-->
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <!---------------------------------- modal -------------------------------->
        <b-modal
          id="modal-formulario" v-model="showModalProgramar"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <div class="card convoy">
                <div class="card-title text-center">
                    <h5 class="text-primary mt-2">TRANSPORTE DE {{ convoy.cargaCon }}</h5>
                </div>
                <div class="card-body">
                    <b-row>
                        <b-col md="5" xl="5">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.cliente }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad: </span><span class="font-weight-bolder">{{ convoy.vehiculoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{ convoy.partidaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{ convoy.llegadaCon }}</span>
                        </b-col>
                        <b-col md="7" xl="7" class="border-left-primary border-left-3">
                            <dl class="row">
                                <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                <dd class="col-sm-2 text-center font-weight-bolder">CARGA</dd>
                                <dd class="col-sm-1"></dd>
                            </dl>
                            <dl class="row" v-for="(uservicio,indice) in servicios" :key="uservicio.idServicio" v-if="uservicio.estadoSer != 'ANULADO'">
                                <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }} </dd>
                                <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                    <span class="text-dark">{{ uservicio.vehiculo }}</span><br>
                                    <span class="text-secondary">{{ uservicio.acople }}</span>
                                </dt>
                                <dd class="col-sm-5 text-center"> {{ uservicio.persona }} </dd>
                                <dd class="col-sm-2 text-center" style="white-space: nowrap;"> {{ uservicio.cargaSer }} </dd>
                                <dd class="col-sm-1 text-center">
                                    <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarServicio(indice)">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                </dd>
                            </dl>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <b-tabs content-class="mt-2" justified v-model="tabIndex">
                <b-tab active>
                    <template #title>
                        <feather-icon icon="MapPinIcon" />
                        <span>Datos del Servicio</span>
                    </template>
                    <b-row>
                        <b-col md="12" xl="12">
                            <b-form-group label="Ruta Comercial" description="Formato: Ruta 'Cliente' | Carga - Unidad | 'Origen' - 'Paso' - 'Destino'">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="ChevronsRightIcon"/></b-input-group-prepend>
                                    <v-select label="nombreRut" v-model="zruta" :options="rutas" style="flex: 1;" @input="Asignar('ruta')" />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="12" xl="6">
                            <b-form-group label="Remitente">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="nombreExt" v-model="zremitente" :options="externos" style="flex:1" @input="convoy.remitenteCon = zremitente.nombreExt; convoy.Remitente_idExterno = zremitente.idExterno" />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="12" xl="6">
                            <b-form-group label="Destinatario">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="nombreExt" v-model="zdestinatario" :options="externos" style="flex:1;" @input="convoy.destinatarioCon = zdestinatario.nombreExt; convoy.Destinatario_idExterno = zdestinatario.idExterno" />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="12" xl="6">
                            <b-form-group label="Dirección de Partida">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="valorDat" v-model="zpartida" :options="direcciones" style="flex:1;" @input="convoy.partidaCon = zpartida.valorDat; convoy.Partida_idDato = zpartida.idDato"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="12" xl="6">
                            <b-form-group label="Dirección de Llegada">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="valorDat" v-model="zllegada" :options="direcciones" style="flex:1;" @input="convoy.llegadaCon = zllegada.valorDat; convoy.Llegada_idDato = zllegada.idDato"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-tab>
                <b-tab>
                    <template #title>
                        <feather-icon icon="TruckIcon" />
                        <span>Datos del Convoy</span>
                    </template>
                    <b-row>
                        <b-col md="2" xl="2" class="align-middle text-center">
                            <b-form-group label="Supervisor">
                                <b-form-checkbox v-model="yescolta" plain v-on:change="yacople={}"></b-form-checkbox>
                            </b-form-group>
                        </b-col>
                        <b-col md="10" xl="10">
                            <b-form-group label="Operador">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="trabajadorPer" v-model="yoperador" :options="personas" style="flex:1;"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="4">
                            <b-form-group label="Vehiculo">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="placaVeh" v-model="yvehiculo" :options="vehiculos" style="flex:1;"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="4">
                            <b-form-group label="Acople">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <v-select label="placaVeh" v-model="yacople" :options="vehiculos" style="flex:1;" :disabled="yescolta"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="3">
                            <b-form-group label="Carga">
                                <b-input-group class="input-group-merge">
                                    <b-input-group-prepend is-text><feather-icon icon="FastForwardIcon"/></b-input-group-prepend>
                                    <b-form-input v-model="ycarga"/>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="1" class="align-middle text-center">
                            <br>
                            <b-button variant="warning" class="btn-icon rounded-circle" @click="AgregarServicio"><feather-icon icon="ArrowDownIcon" /></b-button>
                        </b-col>
                    </b-row>
                    <!--<b-row>
                        <b-col cols="12" class="mb-2">
                            <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse table-secondary text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th></th>
                                        <th>O.S.</th>
                                        <th>OPERADOR</th>
                                        <th>VEHICULO</th>
                                        <th>ACOPLE</th>
                                        <th>CARGA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(uservicio,indice) in servicios" v-if="uservicio.estadoSer != 'ANULADO'">
                                        <td>
                                            <b-button variant="gradient-danger" class="btn-icon rounded-circle" @click="EliminarServicio(indice)">
                                                <feather-icon icon="TrashIcon"/>
                                            </b-button>
                                        </td>
                                        <td>{{ uservicio.idServicio }}</td>
                                        <td>{{ uservicio.persona }}</td>
                                        <td>{{ uservicio.vehiculo }}</td>
                                        <td>{{ uservicio.acople }}</td>
                                        <td>{{ uservicio.cargaSer }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-col>
                    </b-row>-->
                </b-tab>
            </b-tabs>
            <!--<div class="text-center">
                <b-button-group class="mt-1">
                    <b-button variant="outline-primary" @click="tabIndex--"> <feather-icon icon="ArrowLeftIcon" /> </b-button>
                    <b-button variant="outline-primary" @click="tabIndex++"> <feather-icon icon="ArrowRightIcon" /> </b-button>
                </b-button-group>
                <b-card-text>
                    <small>Pestaña actual: {{ tabIndex }}</small>
                </b-card-text>
            </div>-->
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalProgramar = false" :disabled="showLoading">
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
        <!---------------------------------- modal recorrido -------------------------------->
        <b-modal
          id="modal-recorrido" v-model="showModalRecorrido"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
            <div class="card convoy">
                <div class="card-title text-center">
                    <h5 class="text-primary mt-2">TRANSPORTE DE {{ convoy.cargaCon }}</h5>
                </div>
                <div class="card-body">
                    <b-row>
                        <b-col md="5" xl="5">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.cliente }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad: </span><span class="font-weight-bolder">{{ convoy.vehiculoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{ convoy.partidaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{ convoy.llegadaCon }}</span>
                        </b-col>
                        <b-col md="7" xl="7" class="border-left-primary border-left-3">
                            <dl class="row">
                                <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                <dd class="col-sm-2 text-center font-weight-bolder">CARGA</dd>
                                <!--<dd class="col-sm-1 text-center font-weight-bolder">GUIA</dd>-->
                            </dl>
                            <dl class="row" v-for="(uservicio,indice) in servicios" :key="uservicio.idServicio" v-if="uservicio.estadoSer != 'ANULADO'">
                                <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }} </dd>
                                <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                    <span class="text-dark">{{ uservicio.vehiculo }}</span><br>
                                    <span class="text-secondary">{{ uservicio.acople }}</span>
                                </dt>
                                <dd class="col-sm-5 text-center"> {{ uservicio.persona }} </dd>
                                <dd class="col-sm-2 text-center" style="white-space: nowrap;"> {{ uservicio.cargaSer }} </dd>
                                <!--<dd class="col-sm-1 text-center">
                                    <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="Guia(indice)">
                                        <feather-icon icon="ClipboardIcon"/>
                                    </b-button>
                                </dd>-->
                            </dl>
                        </b-col>
                    </b-row>
                </div>
            </div>

            <b-row>
                <b-col md="12" xl="12">
                    <app-timeline>
                        <app-timeline-item variant="success">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-success">INICIO DE RUTA</h6>
                            </div>
                            <p>Gestione los Recorridos dentro de la Ruta</p>
                            <!--<div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Nuevo Recorrido</span>
                                    <div>
                                        <b-button variant="info" class="btn-icon rounded-circle btn-sm" @click="NuevoRecorrido(-1)">
                                            <feather-icon icon="ArrowDownIcon" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>-->
                        </app-timeline-item>
                        <!---------------------- RECORRIDOS ---------------------->
                        <app-timeline-item variant="primary" icon="TrendingUpIcon" v-for="(urecorrido,pos) in recorridos_actuales" :key="urecorrido.nroRec">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-primary">{{urecorrido.nombreRec}}</h6>
                            </div>
                            <div>
                                <span class="text-bold mb-50 d-block">Recorrido</span>
                                <div>
                                    <v-select label="valorDat" class="input-sm" v-model="urecorrido.yrecorrido" :options="recorridos" style="flex: 1;" v-on:input="urecorrido.idRecorrido = urecorrido.yrecorrido.idDato; urecorrido.nombreRec = urecorrido.yrecorrido.valorDat"/>
                                </div>
                            </div>
                            <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <div>
                                    <span class="text-bold mb-50 d-block">RoundTrip Estimado</span>
                                    <div>
                                        <cleave class="form-control form-control-sm" v-model="urecorrido.roundtripRec" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" size="sm" :disabled="urecorrido.cerrado"/>
                                    </div>
                                </div>
                                <!--<div>
                                    <span class="text-bold mb-50 d-block">Inicio</span>
                                    <div>
                                        <flat-pickr v-model="urecorrido.finicioRec" class="form-control form-control-sm" :config="{ altInput: true, enableTime: true,dateFormat: 'Y-m-d H:i',time_24hr: true, altFormat: 'F j, Y (H:i)'}" :disabled="urecorrido.cerrado"/>
                                    </div>
                                </div>
                                <!--<div>
                                    <span class="text-bold mb-50 d-block">Termino</span>
                                    <div>
                                        <flat-pickr v-model="urecorrido.fterminoRec" class="form-control form-control-sm" :config="{ altInput: true, enableTime: true,dateFormat: 'Y-m-d H:i',time_24hr: true, altFormat: 'F j, Y (H:i)', minDate: urecorrido.finicioRec}"/>
                                    </div>
                                </div>-->
                                <!--<div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Tramos</span>
                                    <div>
                                        <b-button variant="primary" class="btn-icon rounded-circle btn-sm">
                                            <feather-icon icon="TrendingDownIcon" />
                                        </b-button>
                                    </div>
                                </div>-->
                                <!--<div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Nuevo Recorrido</span>
                                    <div>
                                        <b-button variant="info" class="btn-icon rounded-circle btn-sm" @click="NuevoRecorrido(pos)">
                                            <feather-icon icon="ArrowDownIcon"/>
                                        </b-button>
                                    </div>
                                </div>-->
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Cerrar Recorrido</span>
                                    <div v-if="!urecorrido.cerrado">
                                        <b-button variant="primary" class="btn-icon rounded-circle btn-sm" @click="CerrarRecorrido(pos)">
                                            <feather-icon icon="CheckCircleIcon" />
                                        </b-button>
                                    </div>
                                </div>
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Eliminar</span>
                                    <div v-if="!urecorrido.cerrado">
                                        <b-button variant="danger" class="btn-icon rounded-circle btn-sm" @click="EliminarRecorrido(pos)">
                                            <feather-icon icon="XIcon" />
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                            <div id="report-list-with-icon">
                                <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse table-secondary text-center">
                                    <thead class="thead-dark">
                                        <tr>
                                            
                                            <th width="25%">ORIGEN</th>
                                            <th width="25%">DESTINO</th>
                                            <th>HOSPEDAJE</th>
                                            <th>COCHERA</th>
                                            <th>VIÁTICO</th>
                                            <th>PEAJE</th>
                                            <th width="15%" v-if="!urecorrido.cerrado"></th>
                                            <th width="15%" v-else>REALIZADO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(utramo,indice) in urecorrido.tramos">
                                            <td>{{ utramo.inicio }}</td>
                                            <td>{{ utramo.termino }}</td>
                                            <td><cleave v-model="utramo.hospedaje" class="form-control form-control-sm" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" :disabled="urecorrido.cerrado"/></td>
                                            <td><cleave v-model="utramo.cochera" class="form-control form-control-sm" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" :disabled="urecorrido.cerrado"/></td>
                                            <td><cleave v-model="utramo.viatico" class="form-control form-control-sm" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" :disabled="urecorrido.cerrado"/></td>
                                            <td><cleave v-model="utramo.peaje" class="form-control form-control-sm" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" disabled/></td>
                                            <td v-if="!urecorrido.cerrado">
                                                <b-button variant="flat-danger" class="btn-icon rounded-circle btn-sm" @click="EliminarTramo(pos,indice)" v-if="!urecorrido.cerrado">
                                                    <feather-icon icon="TrashIcon"/>
                                                </b-button>
                                            </td>
                                            <td v-else>
                                                <b-button variant="flat-primary" class="btn-icon rounded-circle btn-sm" @click="AgregarTramo(urecorrido.tramo,pos)">
                                                    <feather-icon icon="PocketIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><v-select label="tramoTra" v-model="urecorrido.tramo.ytramo" :options="tramos" style="flex:1;"/></td>
                                            <td><cleave class="form-control form-control-sm" v-model="urecorrido.tramo.yhospedaje" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/></td>
                                            <td><cleave class="form-control form-control-sm" v-model="urecorrido.tramo.ycochera" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/></td>
                                            <td><cleave class="form-control form-control-sm" v-model="urecorrido.tramo.yviatico" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}"/></td>
                                            <td><cleave class="form-control form-control-sm" disabled /></td>
                                            <td>
                                                <b-button variant="flat-success" class="btn-icon rounded-circle btn-sm" @click="AgregarTramo(urecorrido.tramo,pos)">
                                                    <feather-icon icon="CheckIcon"/>
                                                </b-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </app-timeline-item>
                        <app-timeline-item variant="secondary">
                            <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <div class="mb-1 mb-sm-0">
                                    <span class="text-bold mb-50">Nuevo Recorrido</span>
                                    <div>
                                        <b-button variant="primary" class="btn-icon rounded-circle btn-sm" @click="NuevoRecorrido(0)">
                                            <feather-icon icon="PlusIcon"/>
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </app-timeline-item>
                        <app-timeline-item variant="danger">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-danger">FIN DE RUTA</h6>
                            </div>
                            <p>Fin de la Ruta, no tiene Recorridos</p>
                            <small class="text-muted">* Los peajes se calculan en base a los tramos ingresados en cada recorrido.</small>
                        </app-timeline-item>
                    </app-timeline>
                </b-col>
            </b-row>

            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalProgramar = false" :disabled="showLoading">
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
    </b-card>




</template>

<script>
import BCardCode from '@core/components/b-card-code'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import flatPickr from 'vue-flatpickr-component'
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
        AppTimeline,
        AppTimelineItem,
        flatPickr,
        Cleave,
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

            /**************************** tabla ****************************/
            tcolumnas: [
                { label: '', field: 'acciones'},
                { label: 'ID', field: 'idConvoy'},
                { label: 'Código', field: 'codigoCon'},
                { label: 'Cliente', field: 'nombreCli'},
                { label: 'Carga', field: 'cargaCon'},
                { label: 'Origen', field: 'origenCon'},
                { label: 'Destino', field: 'destinoCon'},
                { label: 'Convoy', field: 'convoy'},
            ],
            /**************************** modal ****************************/
            headerBgVariant: 'dark',
            headerTextVariant: 'success',
            headerTitleVariant: 'NUEVO CONVOY',
            bodyBgVariant: 'light',
            bodyTextVariant: 'success',
            footerBgVariant: 'dark',
            footerTextVariant: 'dark',
            showModalProgramar: false,
            showModalRecorrido: false,
            /*showModalCargar: false,
            showModalEntregar: false,
            showModalRetornar: false,
            showModalFinalizar: false,*/
            showLoading: false,
            boton: false,
            /**************************** entorno ****************************/
            convoys: [],
            direcciones: [],
            externos: [],
            personas: [],
            vehiculos: [],
            rutas: [],
            card: {
                'PROGRAMADO': 'dark',
                'RUTA': 'primary',
                'TERMINADO': 'secondary',
            },
            /*filtro: 'TODO',*/
            /**************************** formulario ****************************/
            plantilla: {
                idConvoy: "",
                codigoCon: "",
                Ruta_idRuta: 0,
                cargaCon: "",
                vehiculoCon: "",
                origenCon: "",
                destinoCon: "",
                roundtripCon: 0,
                Cliente_idExterno: 0,
                Remitente_idExterno: 0,
                Destinatario_idExterno: 0,
                partidaCon: "",
                Partida_idDato: 0,
                llegadaCon: "",
                Llegada_idDato: 0,
            },
            convoy: {
                idConvoy: "",
                codigoCon: "",
                Ruta_idRuta: 0,
                cargaCon: "",
                vehiculoCon: "",
                origenCon: "",
                destinoCon: "",
                roundtripCon: 0,
                Cliente_idExterno: 0,
                Remitente_idExterno: 0,
                Destinatario_idExterno: 0,
                partidaCon: "",
                Partida_idDato: 0,
                llegadaCon: "",
                Llegada_idDato: 0,
            },
            servicios: [],
            tramos: [],

            //vue select form
            zruta: {},
            zremitente: {},
            zdestinatario: {},
            zpartida: {},
            zllegada: {},

            //minitabla
            yoperador: {},
            yvehiculo: {},
            yacople: {},
            ycarga: "",
            yescolta: false,

            //recorridos
            recorridos_actuales: [],
            ynro: 0,

            vacio: '',
            recorridos: [],

        }
    },
    methods : {
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
        Convoy()
        {
            this.$http.get('/LiberAPP/Convoy')
            .then(res => {
               this.convoys = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Convoy','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Nuevo()
        {
            this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVO CONVOY";
            //Seteando los valores para el modal
            this.convoy = Object.assign({}, this.plantilla);
            this.zruta = {};
            this.zremitente = {};
            this.zdestinatario = {};
            this.zpartida = {};
            this.zllegada = {};
            this.servicios = [];
        },
        Anular(prm_convoy)
        {
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;

            this.$bvModal
                .msgBoxConfirm('¿Estás Seguro de Anular el Convoy?', {
                  title: 'Anular Convoy',
                  size: 'sm',
                  okVariant: 'danger',
                  okTitle: 'Si, Eliminar',
                  cancelTitle: 'No',
                  cancelVariant: 'outline-secondary',
                  hideHeaderClose: false,
                  centered: true,
                })
                .then(value => {
                    if(value == true)
                    {
                        this.Procesar("ANULADO");
                    }
                })
        },
        Recorrido(prm_convoy)
        {

            this.headerTextVariant = 'primary'
            this.headerTitleVariant = 'REVISAR RECORRIDO';
            //this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;



            /*this.headerTextVariant = 'success';
            this.boton = false;
            this.headerTitleVariant = "NUEVO CONVOY";
            //Seteando los valores para el modal
            this.convoy = Object.assign({}, this.plantilla);
            this.zruta = {};
            this.zremitente = {};
            this.zdestinatario = {};
            this.zpartida = {};
            this.zllegada = {};
            this.servicios = [];*/
        },
        /*Editar(prm_convoy)
        {
            this.headerTextVariant = 'primary';
            this.headerTitleVariant = "EDITAR CONVOY";
            this.boton = true;
            this.convoy = prm_convoy;
        },
        Cargar(prm_convoy)
        {
            this.headerTextVariant = 'success'
            this.headerTitleVariant = 'INICIAR RUTA';
            this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;
        },
        Entregar(prm_convoy)
        {
            this.headerTextVariant = 'warning'
            this.headerTitleVariant = 'ENTREGA DE CARGA';
            this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;
        },
        Retornar(prm_convoy)
        {
            this.headerTextVariant = 'info'
            this.headerTitleVariant = 'RETORNO A BASE';
            this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;
        },
        Finalizar(prm_convoy)
        {
            this.headerTextVariant = 'primary'
            this.headerTitleVariant = 'FINALIZAR SERVICIO';
            this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;
        },*/
        
        Asignar(prm_asignacion) ////////////////////////////////////////REVISAR
        {
            switch (prm_asignacion)
            {
                case "ruta":
                    this.convoy.cargaCon = this.zruta.cargaRut;
                    this.convoy.origenCon = this.zruta.origenRut;
                    this.convoy.pasoCon = this.zruta.pasoRut;
                    this.convoy.destinoCon = this.zruta.destinoRut;
                    this.convoy.vehiculoCon = this.zruta.vehiculoRut;
                    this.convoy.tipoCon = this.zruta.tipoRut;
                    this.convoy.Ruta_idRuta = this.zruta.idRuta;
                    this.convoy.Cliente_idExterno = this.zruta.Externo_idExterno;
                    this.convoy.cliente = this.zruta.nombreExt;
                    this.convoy.roundtripCon = this.zruta.roundtripRut;
                    break;
                case "inicio":
                    var fllegada = new Date(this.convoy.finicioCon);
                    var dias = this.convoy.roundtripCon;
                    if(isNaN(dias))
                        dias = 0;
                    fllegada.setDate(fllegada.getDate() + dias);
                    this.convoy.fterminoCon = fllegada;
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        AgregarServicio()
        {
            if(this.yoperador == null || this.yoperador == {})
            {
                this.Toast(true,'danger','Agregar Servicio','Seleccione un Operador');
                return;
            }
            if(this.yvehiculo == null || this.yvehiculo == {})
            {
                this.Toast(true,'warning','Agregar Servicio','Seleccione un Vehiculo');
                return;
            }
            if(this.yacople == null || this.yacople == {})
            {
                this.Toast(true,'warning','Agregar Servicio','Seleccione un Acople');
                return;
            }
            if(this.ycarga == null || this.ycarga == "")
            {
                this.Toast(true,'warning','Agregar Servicio','Seleccione la Cantidad Cargada');
                return;
            }
            if(this.yvehiculo == this.yacople)
            {
                this.Toast(true,'warning','Agregar Servicio','Vehiculo y Acople Similares');
                return;
            }

            var uservicio = {
                idServicio: "?",
                escoltaSer: this.yescolta,
                Persona_idPersona: this.yoperador.idPersona,
                Vehiculo_idVehiculo: this.yvehiculo.idVehiculo,
                Acople_idVehiculo: this.yacople.idVehiculo,
                persona: this.yoperador.trabajadorPer,
                vehiculo: this.yvehiculo.placaVeh,
                acople: this.yacople.placaVeh,
                cargaSer: this.ycarga,
                estadoSer: "PROGRAMADO",
            };

            var encontrado = this.servicios.filter(function (tservicio)
            {
                return ((tservicio.Persona_idPersona == uservicio.Persona_idPersona || tservicio.Vehiculo_idVehiculo == uservicio.Vehiculo_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Vehiculo_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Vehiculo_idVehiculo) && tservicio.estadoSer != 'ANULADO');
            },this);//tambien verifica si el supervisor no de ingrese dos veces

            if(encontrado.length == 0)
            {
                this.servicios.push(uservicio);

                this.yoperador = {};
                this.yvehiculo = {};
                this.yacople = {};
                this.yescolta = false;
                this.ycarga = "";
            }
            else
            {
                this.Toast(true,'warning','Agregar Convoy','Los Parámetros Ingresados ya Existen');
            }
        },
        EliminarServicio(prm_indice)
        {
            if(this.servicios[prm_indice].idServicio == 0)
                this.servicios.splice(prm_indice, 1);
            else
                this.servicios[prm_indice].estadoSer = "ANULADO";
        },
        Guardar()
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);

            this.$http.post('/LiberAPP/Convoy/Guardar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
            })
            .then(res => {
                this.Toast(true,'success','Agregar Convoy','Guardado Correctamente');
                this.showModalProgramar = false;
                this.showLoading = false;
                //respuesta
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Convoy','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        /*Actualizar()
        {
            this.showLoading = true;

            //this.convoy.cargaCon = this.zcarga.valorDat;
            //this.convoy.Cliente_idExterno = this.zcliente.idExterno;
            //this.convoy.Remitente_idExterno = this.zremitente.idExterno;
            //this.convoy.Destinatario_idExterno = this.zdestinatario.idExterno;
            //this.convoy.partidaCon = this.zpartida.valorDat;
            //this.convoy.llegadaCon = this.zllegada.valorDat;
            //this.convoy.Ruta_idRuta = this.zruta.idRuta;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);

            this.$http.post('/LiberAPP/Convoy/Actualizar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
            })
            .then(res => {
                this.Toast(true,'primary','Actualizar Convoy','Actualizado Correctamente');
                this.showModalProgramar = false;
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Convoy','Error al actualizar el registro: '+error);
                this.showLoading = false;
            });
        },*/
        Procesar(prm_estado)
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);

            this.$http.post('/LiberAPP/Convoy/Procesar/',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                estado: prm_estado,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                /*this.showModalCargar = false;
                this.showModalEntregar = false;
                this.showModalRetornar = false;
                this.showModalFinalizar = false;*/
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        NuevoRecorrido()
        {
            var urecorrido = {
                "nroRec": this.ynro,
                "idRecorrido": 0, 
                "nombreRec": "---",
                "roundtripRec": "", 
                "yrecorrido": [],
                "tramos": [],
                "tramo": {
                    "ytramo": {},
                    "yhospedaje": "", 
                    "ycochera": "",
                    "yviatico": "",
                    },
                "info1Rec": "",
                "info2Rec": "",
                "info3Rec": "",
                "info4Rec": "",
                "finicioRec": "",
                "fterminoRec": "",
                "cerrado": false,
                };
            this.ynro++;
            this.recorridos_actuales.push(urecorrido);
        },
        EliminarRecorrido(prm_posicion)
        {
            this.recorridos_actuales.splice(prm_posicion,1);
        },
        //AgregarTramo(prm_recorrido,prm_nro)
        AgregarTramo(prm_tramo,prm_posicion)
        {
            if(prm_tramo.ytramo == null || prm_tramo.ytramo == {} || Object.keys(prm_tramo.ytramo).length === 0)
            {
                this.Toast(true,'danger','Agregar Tramo','Seleccione un Tramo');
                return;
            }
            if(prm_tramo.yhospedaje == null || prm_tramo.yhospedaje == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Hospedaje');
                return;
            }
            if(prm_tramo.ycochera == null || prm_tramo.ycochera == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera');
                return;
            }
            if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
            {
                this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
                return;
            }

            var utramo = {
                id: prm_tramo.ytramo.idTramo,
                inicio: prm_tramo.ytramo.inicioTra,
                termino: prm_tramo.ytramo.terminoTra,
                hospedaje: prm_tramo.yhospedaje,
                cochera: prm_tramo.ycochera,
                viatico: prm_tramo.yviatico,
                realizado: false,
                peaje: "",
            };

            //AGREGANDO EL TRAMO A LA LISTA
            this.recorridos_actuales[prm_posicion].tramos.push(utramo);

            this.recorridos_actuales[prm_posicion].tramo = {
                    "ytramo": {},
                    "yhospedaje": "", 
                    "ycochera": "",
                    "yviatico": "",
                    };

            /*var encontrado = this.costos.filter(function (tcosto)
            {
                return (tcosto.id == ucosto.id);
            },this);

            if(encontrado.length == 0)
            {
                this.costos.push(ucosto);

                this.ytramo = {};
                this.yhospedaje = "";
                this.ycochera = "";
                this.yviatico = "";
            }
            else
            {
                this.Toast(true,'warning','Agregar Tramo','Los Parámetros Ingresados ya Existen');
            }*/
        },
        EliminarTramo(prm_pos,prm_indice)
        {
            //if(this.costos[prm_indice].corte == "1")
                //this.cortes[1].disabled = false;//se inhabilita el corte porque ya se ingreso uno
            //if(this.costos[prm_indice].corte == "2")
                //this.cortes[2].disabled = false;//se inhabilita el corte porque ya se ingreso uno
            this.recorridos_actuales[prm_pos].tramos.splice(prm_indice, 1);
        },
    },
    computed: {
    /*statusVariant() {
        const statusColor = {

            Current      : 'light-primary',
            Professional : 'light-success',
            Rejected     : 'light-danger',
            Resigned     : 'light-warning',
            Applied      : 'light-info',
        }

      return status => statusColor[status]
    },*/
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

        this.$http.get('/LiberAPP/Convoy')
            .then(res => {
               this.convoys = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Convoy','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Dato/Select/DIRECCION/TRANSPORTE')
            .then(res => {
                this.direcciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Dirección','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Vehiculo/Select')
            .then(res => {
                this.vehiculos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Persona/Select')
            .then(res => {
                this.personas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Persona','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Externo/Select')
            .then(res => {
                this.externos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Tramo/Select')
            .then(res => {
                this.tramos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Tramo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

        this.$http.get('/LiberAPP/Ruta/Select')
            .then(res => {
                this.rutas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Ruta','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Ruta/SelectRecorrido')
            .then(res => {
                this.rutas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Ruta','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/RECORRIDO/TRANSPORTE')
            .then(res => {
                this.recorridos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
    },
}
</script>

<style lang="scss" >
  @import "~@core/scss/base/pages/app-ecommerce-details.scss";
  @import '~@core/scss/vue/libs/vue-good-table.scss';
  @import '~@core/scss/vue/libs/vue-select.scss';
  @import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
</style>

<style lang="scss" scoped>
.checkout-form-wizard ::v-deep {
  .wizard-tab-content {
    box-shadow: none !important;
    background: transparent !important;
    padding: 0;
  }
}
.input-group-text
{
  border-color: rgb(128,128,128);
}
.form-control
{
  border-color: rgb(128,128,128);
}
.convoy:hover
{
    box-shadow: 0px 0px 17px 5px #757575 !important;
}
</style>
