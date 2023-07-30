<template>
    <b-card title="">
        <b-row>
            <b-col md="8" xl="8" class="align-middle text-bold">
                Seleccione Cuenta:
                <b-button-group size="sm">
                    <b-button variant="outline-primary" @click="filtroGrupo = '0'" :class="[(filtroGrupo == '0') ? 'btn-primary' : '']">
                      Todos
                    </b-button>
                    <b-button variant="outline-primary" v-for="(ugrupo,indice) in grupos" :key="indice" @click="filtroGrupo = ugrupo.idDato" :class="[(filtroGrupo == ugrupo.idDato) ? 'btn-primary' : '']">
                        {{ugrupo.valorDat}}
                    </b-button>
                </b-button-group><br><br>
                Filtro Estado:
                <b-button-group size="sm">
                    <b-button variant="outline-primary" @click="filtroEstado = 'TODO'" :class="[(filtroEstado == 'TODO') ? 'btn-primary' : '']">
                      Todos
                    </b-button>
                    <b-button variant="outline-secondary" @click="filtroEstado = 'PROGRAMADO'" :class="[(filtroEstado == 'PROGRAMADO') ? 'btn-dark' : '']">
                      Programado
                    </b-button>
                    <b-button variant="outline-secondary" @click="filtroEstado = 'POR SALIR'" :class="[(filtroEstado == 'POR SALIR') ? 'btn-warning' : '']">
                      Por Salir
                    </b-button>
                    <b-button variant="outline-secondary" @click="filtroEstado = 'RUTA'" :class="[(filtroEstado == 'RUTA') ? 'btn-info' : '']">
                      Ruta
                    </b-button>
                </b-button-group>                
            </b-col>
            <b-col md="4" xl="4" class="align-middle text-right">
                <!---------------------------------- nuevo -------------------------------->
                <b-button v-b-modal.modal-alimentacion variant="primary" class="mb-2" @click="GestionarAlimentacionLibre">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Alimentación en Base</span>
                </b-button>
                <b-button v-b-modal.modal-formulario variant="success" @click="Nuevo" class="mb-2">
                    <feather-icon icon="PlusIcon" class="mr-50"/>
                    <span class="align-middle">Nuevo Convoy</span>
                </b-button>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col md="12" xl="12" class="align-middle text-center" v-for="(uconvoy,indice) in convoys" :key="uconvoy.idConvoy">
                <b-card class="card convoy" :border-variant="card[uconvoy.estadoCon]" bg-variant="transparent" 
                    v-if="(filtroEstado == 'TODO' || filtroEstado == uconvoy.estadoCon) && (filtroGrupo == '0' || filtroGrupo == uconvoy.Grupo_idDato)"
                >
                    <div class="card-title">
                        <h6 class="text-primary mt-2">Nro. {{uconvoy.idConvoy}}: TRANSPORTE DE {{ uconvoy.cargaCon }}</h6>
                        <b-badge variant="dark" v-if="uconvoy.estadoCon == 'PROGRAMADO'">PROGRAMADO</b-badge>
                        <b-badge variant="warning" v-if="uconvoy.estadoCon == 'POR SALIR'">POR SALIR</b-badge>
                        <b-badge variant="info" v-else-if="uconvoy.estadoCon == 'RUTA'">EN RUTA</b-badge>
                        <b-badge variant="secondary" v-else-if="uconvoy.estadoCon == 'TERMINADO'">TERMINADO</b-badge>
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col md="4" xl="4" class="text-left">
                                <hr class="invoice-spacing primary">
                                <h5 class="text-primary">
                                    <feather-icon icon="TruckIcon" />
                                    <span>Información del Servicio</span>
                                </h5>
                                <hr class="invoice-spacing primary">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ uconvoy.clienteExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ uconvoy.tipoCon }}: </span><span class="text-primary">{{ uconvoy.origenCon }} - {{ uconvoy.pasoCon }} - {{ uconvoy.destinoCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ uconvoy.roundtripCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo Acople: </span><span class="font-weight-bolder">{{ uconvoy.tvehiculoCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo de Carga: </span><span class="font-weight-bolder">{{ uconvoy.cargaCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad de Carga: </span><span class="font-weight-bolder">{{ uconvoy.unidadCon }} - {{uconvoy.unidadSunatCon}}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ uconvoy.finicioCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-warning font-weight-bolder">{{ uconvoy.fterminoCon }}</span><br>
                                <hr class="invoice-spacing primary">
                                <h5 class="text-primary">
                                    <feather-icon icon="TruckIcon" />
                                    <span>Información de la Guía</span>
                                </h5>
                                <hr class="invoice-spacing primary">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Serie: </span><span class="font-weight-bolder">{{ uconvoy.serieCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ uconvoy.remitenteExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{uconvoy.ubigeopCon}} - {{ uconvoy.partidaCon }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ uconvoy.destinatarioExt }}</span><br>
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{uconvoy.ubigeolCon}} - {{ uconvoy.llegadaCon }}</span>
                            </b-col>
                            <b-col md="8" xl="8" class="border-left-primary border-left-3">
                                <dl class="row">
                                    <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                    <dd class="col-sm-1 text-center font-weight-bolder">G.R.</dd>
                                    <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                    <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                    <!--<dd class="col-sm-2 text-center font-weight-bolder" v-if="uconvoy.estadoCon == 'RUTA'">GASTOS</dd>-->
                                    <dd class="col-sm-2 text-center font-weight-bolder">ACCIÓN</dd>
                                </dl>
                                <dl class="row" v-for="(uservicio,indice2) in uconvoy.servicios" :key="uservicio.idServicio" :class="[{ 'escolta': uservicio.escoltaSer == 1 }]">
                                    <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }}</dd>
                                    <dd class="col-sm-1 text-center" v-if="uservicio.guia != null">
                                        <!--<b-button variant="flat-danger" class="btn-icon" :href="'/LiberAPP/Guia/Pdf/' + uservicio.guia.idGuia" target="_blank">{{ uservicio.guia.idGuia }}</b-button>-->
                                        <b-button variant="flat-danger" class="btn-icon" :href="uservicio.guia.enlaceGui" target="_blank">{{ uservicio.guia.serieGui }}-{{uservicio.guia.nroGui}}</b-button>
                                    </dd>
                                    <dd class="col-sm-1 text-center" v-else>
                                        <b-button variant="flat-danger" class="btn-icon" @click="GenerarG(uconvoy,uservicio)">?</b-button>
                                    </dd>
                                    
                                    <!---------------- PLACAS -------------->
                                    <dt class="col-sm-3 text-center" style="white-space: nowrap;" v-if="uconvoy.estadoCon == 'RUTA' || uconvoy.estadoCon == 'POR SALIR'">
                                        <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                        <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                    </dt>
                                    <dt class="col-sm-3 text-center" style="white-space: nowrap;" v-else>
                                        <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                        <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                    </dt>
                                    <!---------------- TRABAJADOR -------------->
                                    <dd class="col-sm-5 text-center" v-if="uconvoy.estadoCon == 'RUTA' || uconvoy.estadoCon == 'POR SALIR'"> <b-badge variant="primary" v-if="uservicio.escoltaSer == 1"> Sup. </b-badge> {{ uservicio.trabajadorPer }}
                                    </dd>
                                    <dd class="col-sm-5 text-center" v-else> <b-badge variant="primary" v-if="uservicio.escoltaSer == 1">Sup.</b-badge> {{ uservicio.trabajadorPer }}</dd>
                                    <dd class="col-sm-2 text-center">
                                        <b-dropdown id="dropdown-grouped" variant="info" class="dropdown-icon-wrapper" size="sm" text="Small">
                                            <template #button-content>
                                              <feather-icon icon="MenuIcon" size="16" class="align-middle"/>
                                            </template>
                                            <b-dropdown-item variant="primary" @click="Reemplazar(uservicio,uconvoy)">
                                              <feather-icon icon="RefreshCcwIcon" size="18"/> Cambio de Recursos
                                            </b-dropdown-item>
                                            <b-dropdown-item variant="danger" @click="AnularS(uservicio)">
                                              <feather-icon icon="SlashIcon" size="18"/> Anular Servicio
                                            </b-dropdown-item>
                                            <!--<b-dropdown-item variant="success" @click="Guia(uservicio)">
                                              <feather-icon icon="FileTextIcon" size="18"/> Emitir Guía
                                            </b-dropdown-item>-->
                                            <b-dropdown-item variant="info" @click="Evento(uconvoy,uservicio)">
                                              <feather-icon icon="FileTextIcon" size="18"/> Guia por Evento
                                            </b-dropdown-item>
                                            <b-dropdown-item variant="warning" @click="AnularG(uservicio)">
                                              <feather-icon icon="SlashIcon" size="18"/> Anular Guía
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </dd>
                                </dl>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="card-footer">
                        <b-button variant="outline-primary" size="sm" v-b-modal.modal-recorrido  @click="Inicio(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="SendIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Iniciar Ruta</span>
                        </b-button>
                        <b-button variant="outline-danger" size="sm" @click="Anular(uconvoy)" :disabled="showLoading" v-if="uconvoy.estadoCon == 'PROGRAMADO'">
                            <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Anular</span>
                        </b-button>
                        <b-button variant="outline-danger" size="sm" v-b-modal.modal-carga  @click="Prueba()" :disabled="showLoading" v-if="uconvoy.estadoCon != 'PROGRAMADO'">
                            <feather-icon icon="FileTextIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Guías de Remisión</span>
                        </b-button>
                        <b-button variant="outline-warning" size="sm" v-b-modal.modal-os  @click="Recorrido(uconvoy,false,false)" :disabled="showLoading">
                            <feather-icon icon="PlusIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Adicionar O.S.</span>
                        </b-button>
                        <b-button variant="outline-primary" size="sm" v-b-modal.modal-recorrido  @click="Recorrido(uconvoy,false,false)" :disabled="showLoading" v-if="uconvoy.estadoCon != 'PROGRAMADO'">
                            <feather-icon icon="UserCheckIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Asistencia y Gastos de Viaje</span>
                        </b-button>
                        <b-button variant="outline-success" size="sm" v-b-modal.modal-recorrido  @click="Recorrido(uconvoy,true,false)" :disabled="showLoading" v-if="uconvoy.estadoCon != 'PROGRAMADO'">
                            <feather-icon icon="TargetIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Terminar Servicio</span>
                        </b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <!---------------------------------- modal Programar -------------------------------->
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
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información del Servicio</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.cliente }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo Acople: </span><span class="font-weight-bolder">{{ convoy.tvehiculoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo de Carga: </span><span class="font-weight-bolder">{{ convoy.cargaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad de Carga: </span><span class="font-weight-bolder">{{ convoy.unidadCon }} - {{convoy.unidadSunatCon}}</span><br>
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información de la Guía</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Serie: </span><span class="font-weight-bolder">{{ convoy.serieCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{convoy.ubigeopCon}} - {{ convoy.partidaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{convoy.ubigeolCon}} - {{ convoy.llegadaCon }}</span>
                        </b-col>
                        <b-col md="7" xl="7" class="border-left-primary border-left-3">
                            <dl class="row">
                                <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                <dd class="col-sm-2 text-center font-weight-bolder">CARGA ({{convoy.unidadSunatCon}})</dd>
                                <dd class="col-sm-1">
                                    <b-button variant="flat-danger" class="btn-icon btn-sm">
                                        <feather-icon icon="TrashIcon"/>
                                    </b-button>
                                </dd>
                            </dl>
                            <dl class="row" v-for="(uservicio,indice) in servicios" :key="indice" v-if="uservicio.estadoSer != 'ANULADO'" :class="[{ 'escolta': uservicio.escoltaSer == 1 }]">
                                <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }} </dd>
                                <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                    <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                    <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                </dt>
                                <dd class="col-sm-5 text-center"> <b-badge variant="primary" v-if="uservicio.escoltaSer == 1"> Sup. </b-badge> {{ uservicio.trabajadorPer }} </dd>
                                <dd class="col-sm-2 text-center" style="white-space: nowrap;"> {{ uservicio.cargaSer }} {{convoy.unidadSunatCon}}</dd>
                                <dd class="col-sm-1 text-center">
                                    <b-button variant="flat-danger" class="btn-icon btn-sm" @click="EliminarServicio(indice)">
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
                                <v-select label="nombreRut" v-model="zruta" :options="rutas" style="flex: 1;" @input="Asignar('ruta')" />
                            </b-form-group>
                        </b-col>
                        <!--<b-col md="12" xl="6">
                            <b-form-group label="Remitente">
                                <v-select label="nombreExt" v-model="zremitente" :options="externos" style="flex:1" @input="convoy.remitenteCon = zremitente.nombreExt; convoy.Remitente_idExterno = zremitente.idExterno" />
                            </b-form-group>
                        </b-col>-->
                        <!--<b-col md="12" xl="6">
                            <b-form-group label="Destinatario">
                                <v-select label="nombreExt" v-model="zdestinatario" :options="externos" style="flex:1;" @input="convoy.destinatarioCon = zdestinatario.nombreExt; convoy.Destinatario_idExterno = zdestinatario.idExterno" />
                            </b-form-group>
                        </b-col>-->
                        <!--<b-col md="12" xl="6">
                            <b-form-group label="Dirección de Partida">
                                <v-select label="valorDat" v-model="zpartida" :options="direcciones" style="flex:1;" @input="convoy.partidaCon = zpartida.valorDat; convoy.Partida_idDato = zpartida.idDato"/>
                            </b-form-group>
                        </b-col>-->
                        <!--<b-col md="12" xl="6">
                            <b-form-group label="Dirección de Llegada">
                                <v-select label="valorDat" v-model="zllegada" :options="direcciones" style="flex:1;" @input="convoy.llegadaCon = zllegada.valorDat; convoy.Llegada_idDato = zllegada.idDato"/>
                            </b-form-group>
                        </b-col>-->
                    </b-row>
                </b-tab>
                <b-tab>
                    <template #title>
                        <feather-icon icon="TruckIcon" />
                        <span>Datos del Convoy</span>
                    </template>
                    <b-row>
                        <b-col md="2" xl="2" class="align-middle text-center">
                            <b-form-group label="Supervisor - Operador">
                                <!--<b-form-checkbox v-model="yescolta" plain v-on:change="yacople={}"></b-form-checkbox>-->
                                <b-button variant="primary" @click="yescolta = false" v-if="yescolta" style="margin-top: 2px;">
                                    <feather-icon icon="UserCheckIcon" class="mr-50"/>
                                    <span class="align-middle">Escolta</span>
                                </b-button>
                                <b-button variant="secondary" @click="yescolta = true" v-if="!yescolta" style="margin-top: 2px;">
                                    <feather-icon icon="UsersIcon" class="mr-50"/>
                                    <span class="align-middle">Operador</span>
                                </b-button>
                            </b-form-group>
                        </b-col>
                        <b-col md="10" xl="10">
                            <b-form-group label="Operador">
                                <v-select label="trabajadorPer" v-model="yoperador" :options="personas" style="flex:1;"/>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="4">
                            <b-form-group label="Vehiculo">
                                <v-select label="placaVeh" v-model="yvehiculo" :options="vehiculos" style="flex:1;"/>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="4">
                            <b-form-group label="Acople">
                                <v-select label="placaVeh" v-model="yacople" :options="vehiculos" style="flex:1;" :disabled="yescolta"/>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="3">
                            <b-form-group>
                                <!--<b-form-input v-model="ycarga" :disabled="yescolta"/>-->
                                <label>Cantidad Cargada: <span class="text-primary text-bold">{{ convoy.unidadSunatCon }}</span></label>
                                <cleave v-model="ycarga" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" @focus="$event.target.select()" :disabled="yescolta"/>
                            </b-form-group>
                        </b-col>
                        <b-col md="6" xl="1" class="align-middle text-center">
                            <b-button variant="outline-success" @click="AgregarServicio" style="margin-top: 25px;"><feather-icon icon="CheckCircleIcon" /></b-button>
                        </b-col>
                    </b-row>
                </b-tab>
            </b-tabs>
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
        <!---------------------------------- modal OS -------------------------------->
        <b-modal
          id="modal-os" v-model="showModalOS"
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
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información del Servicio</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.clienteExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo Acople: </span><span class="font-weight-bolder">{{ convoy.tvehiculoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo de Carga: </span><span class="font-weight-bolder">{{ convoy.cargaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad de Carga: </span><span class="font-weight-bolder">{{ convoy.unidadCon }} - {{convoy.unidadSunatCon}}</span><br>
                            <template v-if="convoy.finicioCon != null">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ convoy.finicioCon }}</span><br>
                            </template>
                            <template v-if="convoy.fterminoCon != null">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-warning font-weight-bolder">{{ convoy.fterminoCon }}</span><br>
                            </template>
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información de la Guía</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Serie: </span><span class="font-weight-bolder">{{ convoy.serieCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{convoy.ubigeopCon}} - {{ convoy.partidaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{convoy.ubigeolCon}} - {{ convoy.llegadaCon }}</span>
                        </b-col>
                        <b-col md="7" xl="7" class="border-left-primary border-left-3">
                            <dl class="row">
                                <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                <dd class="col-sm-1 text-center font-weight-bolder">G.R.</dd>
                                <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                <dd class="col-sm-2 text-center font-weight-bolder">CARGA</dd>
                            </dl>
                            <dl class="row" v-for="(uservicio,indice) in servicios" :key="indice" v-if="uservicio.estadoSer != 'ANULADO'" :class="[{ 'escolta': uservicio.escoltaSer == 1 }]">
                                <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }} </dd>
                                <dd class="col-sm-1 text-center" v-if="uservicio.Guia_idGuia != null"> {{ uservicio.Guia_idGuia }} </dd><dd class="col-sm-1 text-center" v-else> ?</dd>
                                <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                    <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                    <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                </dt>
                                <dd class="col-sm-5 text-center"> <b-badge variant="primary" v-if="uservicio.escoltaSer == 1">Sup.</b-badge> {{ uservicio.trabajadorPer }} </dd>
                                <dd class="col-sm-2 text-center" style="white-space: nowrap;"> {{ uservicio.cargaSer }} </dd>
                            </dl>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <b-tabs content-class="mt-2" justified v-model="tabIndex">
                <b-row>
                    <b-col md="2" xl="2" class="align-middle text-center">
                        <b-form-group label="Supervisor">
                            <!--<b-form-checkbox v-model="yescolta" plain v-on:change="yacople={}"></b-form-checkbox>-->
                            <b-button variant="primary" @click="yescolta = false" v-if="yescolta" style="margin-top: 2px;">Escolta</b-button>
                            <b-button variant="secondary" @click="yescolta = true" v-if="!yescolta" style="margin-top: 2px;">Operador</b-button>
                        </b-form-group>
                    </b-col>
                    <b-col md="10" xl="10">
                        <b-form-group label="Operador">
                            <v-select label="trabajadorPer" v-model="yoperador" :options="personas" style="flex:1;"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="4">
                        <b-form-group label="Vehiculo">
                            <v-select label="placaVeh" v-model="yvehiculo" :options="vehiculos" style="flex:1;"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="4">
                        <b-form-group label="Acople">
                            <v-select label="placaVeh" v-model="yacople" :options="vehiculos" style="flex:1;" :disabled="yescolta"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="3">
                        <b-form-group label="Carga">
                            <b-form-input v-model="ycarga" :disabled="yescolta"/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" xl="1" class="align-middle text-center">
                        <b-button variant="outline-success" @click="AgregarServicio" style="margin-top: 25px;"><feather-icon icon="CheckCircleIcon" /></b-button>
                </b-col>
                </b-row>
            </b-tabs>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalOS = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Actualizar()" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!---------------------------------- modal Recorrido -------------------------------->
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
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información del Servicio</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.clienteExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo Acople: </span><span class="font-weight-bolder">{{ convoy.tvehiculoCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo de Carga: </span><span class="font-weight-bolder">{{ convoy.cargaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad de Carga: </span><span class="font-weight-bolder">{{ convoy.unidadCon }} - {{convoy.unidadSunatCon}}</span><br>
                            <template v-if="convoy.finicioCon != null">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ convoy.finicioCon }}</span><br>
                            </template>
                            <template v-if="convoy.fterminoCon != null">
                                <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-warning font-weight-bolder">{{ convoy.fterminoCon }}</span><br>
                            </template>
                            <hr class="invoice-spacing primary">
                            <h5 class="text-primary">
                                <feather-icon icon="TruckIcon" />
                                <span>Información de la Guía</span>
                            </h5>
                            <hr class="invoice-spacing primary">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Serie: </span><span class="font-weight-bolder">{{ convoy.serieCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{convoy.ubigeopCon}} - {{ convoy.partidaCon }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioExt }}</span><br>
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{convoy.ubigeolCon}} - {{ convoy.llegadaCon }}</span>
                        </b-col>
                        <b-col md="7" xl="7" class="border-left-primary border-left-3">
                            <dl class="row">
                                <dd class="col-sm-1 text-center font-weight-bolder">O.S.</dd>
                                <dd class="col-sm-1 text-center font-weight-bolder">G.R.</dd>
                                <dt class="col-sm-3 text-center font-weight-bolder">UNIDAD</dt>
                                <dd class="col-sm-5 text-center font-weight-bolder">OPERADOR</dd>
                                <dd class="col-sm-2 text-center font-weight-bolder">CARGA</dd>
                            </dl>
                            <dl class="row" v-for="(uservicio,indice) in servicios" :key="indice" v-if="uservicio.estadoSer != 'ANULADO'" :class="[{ 'escolta': uservicio.escoltaSer == 1 }]">
                                <dd class="col-sm-1 text-center"> {{ uservicio.idServicio }} </dd>
                                <dd class="col-sm-1 text-center" v-if="uservicio.Guia_idGuia != null"> {{ uservicio.Guia_idGuia }} </dd><dd class="col-sm-1 text-center" v-else> ?</dd>
                                <dt class="col-sm-3 text-center" style="white-space: nowrap;">
                                    <span class="text-dark">{{ uservicio.placaVeh }}</span><br>
                                    <span class="text-secondary">{{ uservicio.acopleVeh }}</span>
                                </dt>
                                <dd class="col-sm-5 text-center"> <b-badge variant="primary" v-if="uservicio.escoltaSer == 1">Sup.</b-badge> {{ uservicio.trabajadorPer }} </dd>
                                <dd class="col-sm-2 text-center" style="white-space: nowrap;"> {{ uservicio.cargaSer }} </dd>
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
                            <template v-if="convoy.estadoCon == 'PROGRAMADO'">
                                <p>Ingrese la Información de Inicio</p>
                                <small class="text-muted">* El nro de Guía se genera automáticamente.</small>
                                <!--<div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">-->
                                <div class="d-flex flex-sm-row flex-column align-items-start">
                                    <b-col md="3" xl="3">
                                        <h6>Fecha de Inicio</h6>
                                        <b-form-datepicker v-model="convoy.fechai" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" @input="convoy.finicioCon = convoy.fechai+' '+convoy.horai">
                                        </b-form-datepicker>
                                    </b-col>
                                    <b-col md="3" xl="3">
                                        <h6>Hora de Inicio</h6>
                                        <cleave v-model="convoy.horai" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm" @input="convoy.finicioCon = convoy.fechai+' '+convoy.horai"/>
                                    </b-col>
                                </div>
                            </template>
                            <template v-else>
                                <h5 class="text-bold">{{convoy.finicioCon}}</h5>
                            </template>
                        </app-timeline-item>
                        <!---------------------- RECORRIDOS ---------------------->

                        <app-timeline-item variant="primary" icon="TrendingUpIcon" v-for="(urecorrido,pos) in recorridos_actuales" v-if="convoy.estadoCon != 'PROGRAMADO'" :key="pos">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h5 class="text-primary text-bold" v-if="urecorrido.estadoRec == 'OMITIDO'">
                                    RECORRIDO {{pos+1}} DE {{recorridos_actuales.length}}: {{urecorrido.nombreRec}}
                                    <b-badge variant="light-danger"><feather-icon icon="SlashIcon" class="mr-25"/><span>OMITIDO</span></b-badge>
                                </h5>
                                <h5 class="text-primary text-bold" v-else-if="urecorrido.estadoRec == 'PROGRAMADO'">
                                    RECORRIDO {{pos+1}} DE {{recorridos_actuales.length}}: {{urecorrido.nombreRec}} 
                                    <b-badge variant="light-dark"><feather-icon icon="ClockIcon" class="mr-25"/><span>PROGRAMADO</span></b-badge>
                                </h5>
                                <h5 class="text-primary text-bold" v-else-if="urecorrido.estadoRec == 'EJECUTADO'">
                                    RECORRIDO {{pos+1}} DE {{recorridos_actuales.length}}: {{urecorrido.nombreRec}}
                                    <b-badge variant="light-success"><feather-icon icon="CheckIcon" class="mr-25"/><span>EJECUTADO</span></b-badge>
                                </h5>
                            </div>
                            <div>
                                <b-row v-if="urecorrido.actual && !finalizar">
                                    <b-col md="12" xl="5">
                                        <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                                            <tr>
                                                <th colspan="4">PEAJES</th>
                                            </tr>
                                            <tr>
                                                <th>NRO</th><th>PEAJES</th><th>PEAJE X EJE</th><th>PEAJE LIVIANA</th>
                                            </tr>
                                            <tr v-for="(upeaje,indice) in urecorrido.peajes" :key="indice"><!--:key="upeaje.id">-->
                                                <td>{{indice+1}}</td><td>{{upeaje.punto}}</td><td>{{upeaje.peaje}}</td><td>{{upeaje.cpeaje}}</td>
                                            </tr>
                                        </table>
                                    </b-col>
                                    <b-col md="12" xl="7" class="border-left-primary border-left-3">
                                        <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center" >
                                            <tr>
                                                <th colspan="6">GASTOS DE VIAJE</th>
                                            </tr>
                                            <tr>
                                                <th>NRO</th><th>TIPO</th><th>DETALLE</th><th>TOTAL</th><th>APLICABLE A</th>
                                            </tr>
                                            <tr v-for="(ugasto,indice) in urecorrido.gastos" :key="indice">
                                                <td>{{indice+1}}</td><td>{{ugasto.gasto}}</td><td>{{ugasto.detalle}}</td><td>{{ugasto.total}}</td><td>{{ugasto.aplicable}}</td>
                                            </tr>
                                        </table>
                                    </b-col>
                                </b-row>

                                <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center" v-if="urecorrido.actual && !finalizar">
                                    <tr><th colspan="10" style="padding: 7pt; font-size: 14pt">GASTOS POR OPERADOR</th></tr>
                                    <tr>
                                        <th colspan="2">Operador</th>
                                        <th colspan="2">Unidad</th>
                                        <th colspan="2">Peaje</th>
                                        <th colspan="2">Otros Gastos</th>
                                        <th colspan="2">Total</th>
                                    </tr>
                                    <tr v-for="(uservicio,indice) in servicios" :key="indice" v-if="uservicio.estadoSer != 'ANULADO'">
                                        <td colspan="2"><b-badge variant="primary" v-if="uservicio.escoltaSer == 1"> Sup. </b-badge> {{ uservicio.trabajadorPer }}</td>
                                        <td colspan="2">{{ uservicio.placaVeh }}</td>
                                        <!--<td colspan="2" v-if="uservicio.tipoVeh == 'CAMIONETA'">
                                            <template v-if="urecorrido.tcpeaje > 0">S/ {{urecorrido.tcpeaje}}</template>
                                            <template v-else> - </template>
                                        </td>-->
                                        <td colspan="2" v-if="uservicio.escoltaSer == 1">
                                            <template v-if="urecorrido.tcpeaje > 0">S/ {{urecorrido.tcpeaje}}</template>
                                            <template v-else> - </template>
                                        </td>
                                        <td colspan="2" v-else>
                                            <template v-if="(urecorrido.tpeaje * (Number(uservicio.vejeVeh) + Number(uservicio.aejeVeh))) > 0">S/ {{(urecorrido.tpeaje * (Number(uservicio.vejeVeh) + Number(uservicio.aejeVeh))).toFixed(2)}} </template>
                                            <template v-else> - </template>
                                        </td>
                                        <template v-if="uservicio.escoltaSer == 1">
                                            <td colspan="2" v-if="urecorrido.tsgasto > 0">S/ {{urecorrido.tsgasto}} </td>
                                            <td colspan="2" v-else> - </td>
                                        </template>
                                        <template v-else>
                                            <td colspan="2" v-if="urecorrido.togasto > 0">S/ {{urecorrido.togasto}} </td>
                                            <td colspan="2" v-else> - </td>
                                        </template>

                                        <template v-if="uservicio.escoltaSer == 1">
                                            <td colspan="2">S/ {{ (urecorrido.tcpeaje + urecorrido.tsgasto).toFixed(2) }} </td>
                                        </template>
                                        <template v-else>
                                            <td colspan="2">S/ {{ (urecorrido.tpeaje * (Number(uservicio.vejeVeh) + Number(uservicio.aejeVeh)) + urecorrido.togasto).toFixed(2) }} </td>
                                        </template>
                                    </tr>
                                    <tr>
                                        <td colspan="12">
                                            <b-button variant="primary" size="sm" @click="Procesar()">
                                                <feather-icon icon="CheckCircleIcon" class="mr-50"/>
                                                <span class="align-middle">Generar Gastos y Asistencia</span>
                                            </b-button>
                                            <b-button variant="warning" size="sm" @click="Omitir(urecorrido)" v-if="!finalizar">
                                                <feather-icon icon="AlertTriangleIcon" class="mr-50"/>
                                                <span class="align-middle">Omitir Gastos y Asistencia</span>
                                            </b-button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <hr>
                        </app-timeline-item>
                        <app-timeline-item variant="danger" icon="UserCheckIcon" v-if="convoy.estadoCon != 'PROGRAMADO'" :key="urecorrido.idRecorrido">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-danger">ASISTENCIA Y ALIMENTACIÓN</h6>
                            </div>
                            <div>
                                <small class="text-muted text-bold">* Asistencia Basada en Gastos de Viaje.</small>
                            </div>
                            <hr>
                            <table class="table table-hover table-bordered text-center table-responsive">
                                <tr>
                                    <th colspan="2">ROUNDTRIP</th>

                                    <td colspan="2" v-for="(ucabecera,indice) in alimentaciones.cabecera" :key="indice">
                                        <b-badge variant="light-primary" v-if="ucabecera.i">{{ucabecera.n}}<br><h4 class="text-bold">{{ucabecera.d}}</h4></b-badge>
                                        <b-badge variant="light-warning" v-else>{{ucabecera.n}}<br><h4>{{ucabecera.d}}</h4></b-badge>
                                    </td>
                                    <td>
                                        <b-button variant="success" size="sm" @click="Aplazar()">
                                            <feather-icon icon="PlusIcon"/><br>
                                            Extender
                                        </b-button>
                                    </td>
                                </tr>
                                <tr v-for="(uservicio,indice) in servicios" :key="indice" v-if="uservicio.estadoSer != 'ANULADO'">
                                    <td colspan="2"><b-badge variant="primary" v-if="uservicio.escoltaSer == 1"> Sup. </b-badge> {{ uservicio.trabajadorPer }}</td>
                                    <template v-if="
                                    alimentaciones != null && 
                                    alimentaciones['cuerpo'] != undefined && 
                                    alimentaciones['cuerpo']['p'+uservicio['Persona_idPersona']] != undefined && 
                                    alimentaciones['cuerpo']['p'+uservicio['Persona_idPersona']] != null && 
                                    alimentaciones['cuerpo']['p'+uservicio['Persona_idPersona']] != {}"
                                    >
                                    <td colspan="2" v-for="(udia,indice) in alimentaciones['cuerpo']['p'+uservicio['Persona_idPersona']]['f']" :key="indice" >
                                        <b-badge variant="light-primary" v-if="udia.a == 'A'">
                                            {{udia.a}}<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                        <b-badge variant="light-warning" v-else-if="udia.a != null">
                                            {{udia.a}}<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                        <b-badge variant="light-secondary" v-else>
                                            -<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                    </td>
                                </template>
                                    <td v-if="indice == 0" :rowspan="servicios.length">
                                        <b-button variant="outline-primary" size="sm" @click="Alimentaciones(35)">
                                            <h4>{{extraAlimentacion}}</h4>
                                            Solicitar<br>
                                            Alimentación
                                            Ruta Sur
                                            <h4 class="text-bold">S/.35.00</h4>
                                        </b-button>


                                        <b-button variant="outline-warning" size="sm" @click="Alimentaciones(40)">
                                            <h4>{{extraAlimentacion}}</h4>
                                            Solicitar<br>
                                            Alimentación
                                            Ruta Centro
                                            <h4 class="text-bold">S/.40.00</h4>
                                        </b-button>
                                    </td>
                                </tr>
                            </table>
                        </app-timeline-item>
                        <app-timeline-item variant="info" icon="InfoIcon" v-if="convoy.estadoCon != 'PROGRAMADO'" :key="urecorrido.idRecorrido">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-info">GASTOS DE VIAJE AUTOMÁTICOS</h6>
                            </div>
                            <div>
                                <small class="text-muted text-bold">* Gastos PRE - Aprobados.</small>
                                <br>

                                <template v-for="(umonto,nro) in montos">
                                    <app-collapse v-if="(umonto.length > 0 && umonto[0].adicionalMon != 1)">
                                        <app-collapse-item :title="'GRUPO DE GASTOS NRO '+(nro+1)+': DEPÓSITO '+umonto[0].faplicacionMon">
                                            <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center table-responsive">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Trabajador</th>
                                                    <th>Concepto</th>
                                                    <th>Monto</th>
                                                    <th>Detalle</th>
                                                    <th>Tipo</th>
                                                    <th>Estado</th>
                                                    <th>Acción</th>
                                                </tr>
                                                <template v-for="fila in umonto">
                                                    <tr>
                                                        <td>{{fila.idMonto}}</td>
                                                        <td>{{fila.trabajadorPer}}</td>
                                                        <td>{{fila.concepto}}</td>
                                                        <td>S/ {{fila.totalMon}}</td>
                                                        <td>{{fila.detalleMon}}</td>
                                                        <td>{{fila.disposicionMon}}</td>
                                                        <td>
                                                            <b-button v-b-tooltip.hover="fila.fsolicitudMon" variant="flat-success" size="sm" v-b-tooltip.hover.v-dark v-if="fila.estadoMon == 'APROBADO'"> {{fila.estadoMon}}</b-button>
                                                            <b-button v-b-tooltip.hover="fila.fsolicitudMon" variant="flat-danger" size="sm" v-b-tooltip.hover.v-dark v-else-if="fila.estadoMon == 'ANULADO'"> {{fila.estadoMon}}</b-button>
                                                            <b-button v-b-tooltip.hover="fila.fsolicitudMon" variant="flat-info" size="sm" v-b-tooltip.hover.v-dark v-else-if="fila.estadoMon == 'DEPOSITO'"> {{fila.estadoMon}}</b-button>
                                                            <b-button v-b-tooltip.hover="fila.fsolicitudMon" variant="flat-info" size="sm" v-b-tooltip.hover.v-dark v-else-if="fila.estadoMon == 'RENDIDO'"> {{fila.estadoMon}}</b-button>
                                                            <b-button v-b-tooltip.hover="fila.fsolicitudMon" variant="flat-dark" size="sm" v-b-tooltip.hover.v-dark v-else> {{fila.estadoMon}}</b-button>
                                                        </td>
                                                        <td>
                                                            <b-button variant="danger" size="sm" v-if="fila.estadoMon == 'APROBADO'" @click="AnularM(fila)"> ANULAR</b-button>
                                                        </td>
                                                    </tr>
                                                </template>
                                            </table>
                                        </app-collapse-item>
                                    </app-collapse>
                                </template>
                            </div>
                            <hr>
                        </app-timeline-item>
                        <app-timeline-item variant="warning" icon="InfoIcon" v-if="convoy.estadoCon != 'PROGRAMADO'" :key="urecorrido.idRecorrido">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-warning">GASTOS DE VIAJE ADICIONALES</h6>
                            </div>
                            <div>
                                <small class="text-muted text-bold">* Los Gastos Adicionales deben ser Aprobados para su Deposito.</small>
                                <br>
                                <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                                    <tr>
                                        <th width="5%">ID</th><th width="20%">Trabajador</th><th width="15%">Concepto</th><th width="15%">Evento/Causa</th><th width="5%">Monto</th><th width="24%">Detalle</th><th width="8%">Tipo</th><th width="8%">Estado</th><!--<th width="15%">Fecha</th>-->
                                    </tr>
                                    <tr v-for="(umonto,indice) in montos[montos.length-1]" :key="umonto.idMonto">
                                        <td> {{umonto.idMonto}} </td>
                                        <td> {{umonto.trabajadorPer}} </td>
                                        <td> {{umonto.concepto}} </td>
                                        <td> {{umonto.nombreEve}} </td>
                                        <td> S/ {{umonto.totalMon}} </td>
                                        <td> {{umonto.detalleMon}} </td>
                                        <td> {{umonto.disposicionMon}} </td>
                                        <td> {{umonto.estadoMon}} </td>
                                        <!--<td> {{umonto.fechaMon}} </td>-->
                                    </tr>
                                </table>
                                <table class="table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center">
                                    <tr>
                                        <td colspan="2">
                                            <v-select label="trabajadorPer" :options="servicios" v-model="monto.servicio" style="transform: scale(0.8); flex: 1; width: 100%;" multiple/>
                                        </td>
                                        <td>
                                            <v-select label="valorDat" :options="yconceptos" v-model="monto.concepto" style="transform: scale(0.8); flex: 1;"/>
                                        </td>
                                        <td>
                                            <v-select label="nombreEve" :options="eventos" v-model="monto.evento" style="transform: scale(0.8); flex: 1;"/>
                                        </td>
                                        <td>
                                            <cleave class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" v-model="monto.total" style="transform: scale(0.8);" />
                                        </td>
                                        <td>
                                            <b-form-input size="sm" v-model="monto.detalle"/>
                                        </td>
                                        <td>
                                            <b-form-select :options="[/*{value: 'CAJA CHICA', text: 'CAJA CHICA'},*/{value: 'DEPOSITO', text:'DEPOSITO'}]" size="sm" v-model="monto.disposicion"/>
                                        </td>
                                        <!--<td>
                                            <b-form-datepicker class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" size="sm" v-model="monto.fecha"></b-form-datepicker>
                                        </td>-->
                                        <td>
                                            <b-button variant="flat-success" class="btn-icon rounded-circle btn-sm" @click="GuardarMonto()">
                                                <feather-icon icon="CheckCircleIcon"/>
                                            </b-button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <hr>
                        </app-timeline-item>

                        <app-timeline-item variant="danger" v-if="convoy.estadoCon != 'PROGRAMADO' && finalizar">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6 class="text-danger">FIN DE RUTA</h6>
                            </div>
                            <p>La fecha de Termino está Definida en el Apartado Asistencia y Alimentación.</p>
                            <!--<div class="d-flex flex-sm-row flex-column align-items-start">
                                <b-col md="3" xl="3">
                                    <h6>Fecha de Termino</h6>
                                    <b-form-datepicker v-model="convoy.fechat" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" @input="convoy.fterminoCon = convoy.fechat+' '+convoy.horat">
                                    </b-form-datepicker>
                                </b-col>
                                <b-col md="3" xl="3">
                                    <h6>Hora de Termino</h6>
                                    <cleave v-model="convoy.horat" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm" @input="convoy.fterminoCon = convoy.fechat+' '+convoy.horat"/>
                                </b-col>
                            </div>-->
                        </app-timeline-item>
                    </app-timeline>
                </b-col>
            </b-row>

            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalRecorrido = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="primary" size="sm" @click="Iniciar()" v-if="convoy.estadoCon == 'PROGRAMADO'" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Guardar</span>
                    </b-button>
                    <!--<b-button variant="success" size="sm" @click="Duplicar()" v-if="finalizar" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Crear Duplicado</span>
                    </b-button>-->
                    <b-button variant="primary" size="sm" @click="Terminar()" v-if="finalizar && convoy.estadoCon != 'PROGRAMADO'" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Terminar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>

        <!---------------------------------- modal Reemplazo -------------------------------->
        <b-modal
          id="modal-reemplazo" v-model="showModalReemplazo"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="'REASIGNAR RECURSOS'"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="lg"
          cancel-variant="secondary" ok-variant="success"
        >
            <b-tabs content-class="mt-2" justified v-model="tabIndex">
                <b-row>
                    <b-col md="12" xl="12" class="align-middle text-center">
                        <table class="table table-bordered table-condensed">
                            <tr>
                                <td colspan="2">
                                    <b-button variant="primary" v-if="reemplazo.escoltaSer == '1'" style="margin-top: 2px;">Escolta</b-button>
                                    <b-button variant="secondary" v-else style="margin-top: 2px;">Operador</b-button>
                                </td>
                            </tr>
                            <tr><th>ANTERIOR</th><th>NUEVO</th></tr>
                            <tr><td colspan="2"><span class="text-primary">Fecha - Hora Cambio</span></td></tr>
                            <tr>
                                <td>
                                    <b-form-datepicker v-model="reemplazo.fcambioSer" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" :min="convoy.finicioCon" :max="convoy.fterminoCon">
                                    </b-form-datepicker>
                                </td>
                                <td>
                                    <cleave v-model="reemplazo.hcambioSer" class="form-control" :raw="false" :options="{time: true,timePattern: ['h', 'm']}" placeholder="hh:mm"/>
                                </td>
                            </tr>
                            <tr><td colspan="2"><span class="text-primary">Operador</span></td></tr>
                            <tr>
                                <td>{{reemplazo.trabajadorPer}}</td>
                                <td>
                                    <v-select label="trabajadorPer" v-model="yreemplazop" :options="personas" style="flex:1;" @input="reemplazo.idReemplazop = yreemplazop.idPersona"/>
                                </td>
                            </tr>
                            <tr><td colspan="2"><span class="text-primary">Vehículo</span></td></tr>
                            <tr>
                                <td>{{reemplazo.placaVeh}}</td>
                                <td>
                                    <v-select label="placaVeh" v-model="yreemplazov" :options="vehiculos" style="flex:1;" @input="reemplazo.idReemplazov = yreemplazov.idVehiculo"/>
                                </td>
                            </tr>
                            <template v-if="reemplazo.escoltaSer == '0'">
                                <tr><td colspan="2"><span class="text-primary">Acople</span></td></tr>
                                <tr>
                                    <td>{{reemplazo.acopleVeh}}</td>
                                    <td>
                                        <v-select label="placaVeh" v-model="yreemplazoa" :options="vehiculos" style="flex:1;" @input="reemplazo.idReemplazoa = yreemplazoa.idVehiculo"/>
                                    </td>
                                </tr>
                            </template>
                        </table>
                    </b-col>
                </b-row>
            </b-tabs>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalReemplazo = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Reasignar()" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Reasignar</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!---------------------------------- modal Guia -------------------------------->
        <b-modal
          id="modal-guia" v-model="showModalGuia"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="'GUÍA DE REMISIÓN TRANSPORTISTA'"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="lg"
          cancel-variant="secondary" ok-variant="success"
        >
            <b-row>
                <b-col md="6" xl="6">
                    <hr class="invoice-spacing primary">
                        <h5 class="text-primary">
                            <feather-icon icon="TruckIcon" />
                            <span>Información del Servicio</span>
                        </h5>
                        <hr class="invoice-spacing primary">
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.clienteExt }}</span><br>
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Roundtrip: </span><span class="text-primary">{{ convoy.roundtripCon }}</span><br>
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo Acople: </span><span class="font-weight-bolder">{{ convoy.tvehiculoCon }}</span><br>
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Tipo de Carga: </span><span class="font-weight-bolder">{{ convoy.cargaCon }}</span><br>
                        <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Unidad de Carga: </span><span class="font-weight-bolder">{{ convoy.unidadCon }} - {{convoy.unidadSunatCon}}</span><br>
                        <template v-if="convoy.finicioCon != null">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ convoy.finicioCon }}</span><br>
                        </template>
                        <template v-if="convoy.fterminoCon != null">
                            <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-warning font-weight-bolder">{{ convoy.fterminoCon }}</span><br>
                        </template>
                    <br>
                </b-col>
                <b-col md="6" xl="6" class="border-left-primary border-left-3">
                    <hr class="invoice-spacing primary">
                    <h5 class="text-primary">
                        <feather-icon icon="TruckIcon" />
                        <span>Información de la Guía</span>
                    </h5>
                    <hr class="invoice-spacing primary">
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Serie: </span><span class="font-weight-bolder">{{ convoy.serieCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteExt }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Partida: </span><span class="font-weight-bolder"> {{convoy.ubigeopCon}} - {{ convoy.partidaCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioExt }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Llegada: </span><span class="font-weight-bolder"> {{convoy.ubigeolCon}} - {{ convoy.llegadaCon }}</span>
                </b-col>
            </b-row>
            
            <hr class="invoice-spacing warning">
            <h5 class="text-warning"> <feather-icon icon="ArrowRightIcon" /> <span>Detalle Guía Remisión Remitente</span> </h5>
            <hr class="invoice-spacing warning">
            <b-row>
                <b-col md="4" xl="4">
                    <b-form-group label="Serie GRR">
                        <b-form-input v-model="guia.grrserie" :disabled="yescolta"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Nro GRR">
                        <b-form-input v-model="guia.grrnro" :disabled="yescolta"/>
                    </b-form-group>
                </b-col>
                <!--<b-col md="4" xl="4">
                    <b-form-group label="Fecha Emisión GRR">
                        <b-form-datepicker v-model="guia.grremision" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es"></b-form-datepicker>
                    </b-form-group>
                </b-col>-->
            </b-row>
            <hr class="invoice-spacing primary">
            <h5 class="text-primary"> <feather-icon icon="ArrowRightIcon" /> <span>Detalle Guía Remisión Transportista</span> </h5>
            <hr class="invoice-spacing-primary">
            <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="Operador">
                        <b-form-input v-model="servicio.trabajadorPer" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Placa">
                        <b-form-input v-model="servicio.placaVeh" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Acople">
                        <b-form-input v-model="servicio.acopleVeh" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="F. Inicio Traslado">
                        <b-form-datepicker v-model="guia.grttraslado" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es"></b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group>
                        <label>Peso de Carga: <span class="text-primary text-bold">KG.</span></label>
                        <b-form-input v-model="guia.pesoSer"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group>
                        <label>Cantidad Cargada: <span class="text-primary text-bold">{{ convoy.unidadSunatCon }}</span></label>
                        <b-form-input v-model="servicio.cargaSer"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6">
                    <b-form-group label="Operador Reten">
                            <v-select label="trabajadorPer" v-model="guia.reten" :options="personas" style="flex:1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="6">
                    <b-form-group label="Observación">
                        <b-form-input v-model="guia.grtobservacion"/>
                    </b-form-group>
                </b-col>
            </b-row>
            </b-tabs>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalReemplazo = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="GenerarGRT()" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar GRT</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!---------------------------------- modal Guia Evento -------------------------------->
        <b-modal
          id="modal-guiaevento" v-model="showModalGuiaEvento"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="'GUÍA DE REMISIÓN TRANSPORTISTA'"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="lg"
          cancel-variant="secondary" ok-variant="success"
        >
            <b-row>
                <b-col md="12" xl="12">
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Cliente: </span><span class="font-weight-bolder">{{ convoy.clienteExt }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Ruta </span><span class="font-weight-bolder">{{ convoy.tipoCon }}: </span><span class="text-primary">{{ convoy.origenCon }} - {{ convoy.pasoCon }} - {{ convoy.destinoCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Remitente: </span><span class="font-weight-bolder">{{ convoy.remitenteExt }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Punto de Partida: </span><span class="font-weight-bolder"> {{ convoy.partidaCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Destinatario: </span><span class="font-weight-bolder">{{ convoy.destinatarioExt }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span> Punto de Llegada: </span><span class="font-weight-bolder">{{ convoy.llegadaCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Inicio: </span><span class=" text-success font-weight-bolder">{{ convoy.finicioCon }}</span><br>
                    <feather-icon icon="ChevronRightIcon" class="text-primary"/><span>Fecha de Termino: </span><span class=" text-warning font-weight-bolder">{{ convoy.fterminoCon }}</span><br>
                    <br>
                </b-col>
            </b-row>

            <h5 class="text-warning"> <feather-icon icon="ArrowRightIcon" /> <span>Detalle Documento de Referencia</span> </h5>
            <hr class="invoice-spacing warning">
            <b-row>
                <b-col md="4" xl="4">
                    <b-form-group label="Serie">
                        <b-form-input v-model="guia.grrserie" :disabled="yescolta"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Nro">
                        <b-form-input v-model="guia.grrnro" :disabled="yescolta"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Fecha Emisión">
                        <b-form-datepicker v-model="guia.grremision" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es"></b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>

            <h5 class="text-primary"> <feather-icon icon="ArrowRightIcon" /> <span>Detalle Guía Remisión Transportista</span> </h5>
            <hr class="invoice-spacing-primary">
            <b-row>
                <b-col md="6" xl="6">
                    <b-form-group label="Operador">
                        <b-form-input v-model="servicio.trabajadorPer" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Placa">
                        <b-form-input v-model="servicio.placaVeh" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="3" xl="3">
                    <b-form-group label="Acople">
                        <b-form-input v-model="servicio.acopleVeh" disabled/>
                    </b-form-group>
                </b-col>

                <b-col md="4" xl="4">
                    <b-form-group label="Serie">
                        <b-form-input v-model="guia.grtserie"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Unidad de Carga">
                        <b-form-input v-model="guia.grtunidad"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Cantidad Cargada">
                        <b-form-input v-model="guia.grtcantidad"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="F. Inicio Traslado">
                        <b-form-datepicker v-model="guia.grttraslado" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es"></b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="4">
                    <b-form-group label="Observación">
                        <b-form-input v-model="guia.grtobservacion" :disabled="yescolta"/>
                    </b-form-group>
                </b-col>
            </b-row>
            </b-tabs>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-between">
                    <b-button variant="secondary" size="sm" @click="showModalReemplazo = false" :disabled="showLoading">
                        <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Cancelar</span>
                    </b-button>
                    <b-button variant="success" size="sm" @click="Reasignar()" v-if="!boton" :disabled="showLoading">
                        <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar GRT</span>
                    </b-button>
                </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>


        <!---------------------------------- modal Alimentacion -------------------------------->
        <b-modal
          id="modal-alimentacion" v-model="showModalAlimentacion"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
            <!---------------------------------- formulario -------------------------------->
                    <template #title>
                        <feather-icon icon="MapPinIcon" />
                        <span>Datos del Servicio</span>
                    </template>
                    <template #title>
                        <feather-icon icon="TruckIcon" />
                        <span>Datos del Convoy</span>
                    </template>
                    <b-row>
                        <b-col md="8" xl="8">
                            <b-form-group label="Operador">
                                <v-select label="trabajadorPer" v-model="yoperadores" :options="personas" style="flex:1;" multiple/>
                            </b-form-group>
                        </b-col>
                        <b-col md="4" xl="4">
                            <br>
                            <b-button variant="success" size="sm" @click="AlimentacionLibres()"><feather-icon icon="SendIcon"/><br>Cargar</b-button>
                        </b-col>
                        <b-col v-if="Object.keys(alimentaciones).length > 0">
                            <hr>
                            <table class="table table-hover table-bordered text-center table-responsive">
                                <tr>
                                    <th colspan="2"></th>
                                    <td colspan="2" v-for="(ucabecera,indice) in alimentaciones.cabecera" :key="indice">
                                        <b-badge variant="light-primary" v-if="ucabecera.i">{{ucabecera.n}}<br><h4 class="text-bold">{{ucabecera.d}}</h4></b-badge>
                                        <b-badge variant="light-warning" v-else>{{ucabecera.n}}<br><h4>{{ucabecera.d}}</h4></b-badge>
                                    </td>
                                    <td>
                                        <h4 class="text-primary">{{extraAlimentacion}}</h4>
                                        Seleccionados
                                    </td>
                                </tr>
                                <tr colspan="2" v-for="(ucuerpo,indice,nro) in alimentaciones.cuerpo" :key="indice">
                                    <td colspan="2">{{ ucuerpo.p }}</td>
                                    <td colspan="2" v-for="(udia,indice) in ucuerpo.f">
                                        <b-badge variant="light-primary" v-if="udia.a == 'A'">
                                            {{udia.a}}<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                        <b-badge variant="light-warning" v-else-if="udia.a != null">
                                            {{udia.a}}<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                        <b-badge variant="light-secondary" v-else>
                                            -<br>
                                            <b-button variant="flat-warning" v-if="udia.m == '0'" size="sm" @click="udia.m = null;extraAlimentacion--;"><feather-icon icon="CheckCircleIcon"/></b-button>
                                            <b-button variant="flat-secondary" v-else-if="udia.m == -1" size="sm" class="btn-icon"><feather-icon icon="AlertOctagonIcon"/></b-button>
                                            <b-badge variant="success" v-else-if="udia.m != null && udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-badge variant="danger" v-else-if="udia.m != null && !udia.p"><feather-icon icon="CheckIcon"/></b-badge>
                                            <b-button variant="flat-dark" v-else size="sm" class="btn-icon" @click="udia.m = '0';extraAlimentacion++;"><feather-icon icon="PlusIcon"/></b-button>
                                        </b-badge>
                                    </td>
                                    <td v-if="nro == 0" :rowspan="Object.keys(alimentaciones.cuerpo).length">
                                        <b-button variant="outline-primary" size="sm" @click="AlimentacionesLibres(35)">
                                            Solicitar<br>
                                            Alimentación <br>
                                            Ruta Sur
                                            <h4 class="text-bold">S/.35.00</h4>
                                        </b-button>
                                        <b-button variant="outline-warning" size="sm" @click="AlimentacionesLibres(40)">
                                            Solicitar<br>
                                            Alimentación <br>
                                            Ruta Centro
                                            <h4 class="text-bold">S/.40.00</h4>
                                        </b-button>
                                    </td>
                                </tr>
                            </table>
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
  BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BImg, BCard, BCardText, BLink, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, BTabs, BTab, BFormSpinbutton, BFormDatepicker, BFormTimepicker, BPopover,VBTooltip
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
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
        BPopover,
        AppCollapse,
        AppCollapseItem,
    },
    directives: {
        Ripple,
        'b-tooltip': VBTooltip,
    },
    data() {
        return {

        input1: '',
        input1state: null,
        input2: '',
        input2state: null,
        options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
        input1Return: '',
        input2Return: '',
        popoverShow: false,

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
            showModalOS: false,
            showModalReemplazo: false,
            showModalGuia: false,
            showModalGuiaEvento: false,
            showModalAlimentacion: false,
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
            alimentaciones: {},
            card: {
                'PROGRAMADO': 'dark',
                'POR SALIR': 'warning',
                'RUTA': 'primary',
                'TERMINADO': 'secondary',
            },
            userData: JSON.parse(localStorage.getItem('userData')),
            /*filtro: 'TODO',*/
            /**************************** formulario ****************************/
            plantilla: {
                idConvoy: "",
                codigoCon: "",
                Ruta_idRuta: 0,
                cargaCon: "",
                tvehiculoCon: "",
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
                Cuenta_idDato: 0,
                Grupo_idDato: 0,
            },
            convoy: {
                idConvoy: "",
                codigoCon: "",
                Ruta_idRuta: 0,
                cargaCon: "",
                tvehiculoCon: "",
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
                Cuenta_idDato: 0,
                Grupo_idDato: 0,
            },
            servicio: {

            },
            guia: {

            },
            monto: {
                servicio: [],
                concepto: '',
                total: '',
                detalle: '',
                disposicion: 'DEPOSITO',
                fecha: '',
            },
            servicios: [],
            tramos: [],
            montos: [],
            grupos: [],
            eventos: [],

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
            yoperadores: [],

            //recorridos
            recorridos_actuales: [],
            ynro: 0,

            vacio: '',
            extraAlimentacion: 0,
            recorridos: [],

            ytramos: [],
            urecorrido: {
                "tramo": {
                    "ytramo": {},
                    "yhospedaje": "",
                    "ycochera": "",
                    "yviatico": "",
                    "ypeaje": "",
                    "ycpeaje": "",
                    },
            },
            finalizar: false,
            adicional: false,

            reemplazo: {},
            yreemplazop: {},
            yreemplazov: {},
            yreemplazoa: {},
            yconceptos: {},

            filtroEstado: "TODO",
            filtroGrupo: "0",
        }
    },
    methods : {



        onClose() {
      this.popoverShow = false

    },
    onOk() {
      if (!this.input1) {
        this.input1state = false
      }
      if (!this.input2) {
        this.input2state = false
      }
      if (this.input1 && this.input2) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input1state = null
      this.input2state = null
      this.input1Return = ''
      this.input2Return = ''
    },
    onShown(prm_servicio) {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      //this.focusRef(this.$refs.input1)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus()
        })
      })
    },



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
            this.convoys = [];
            this.showLoading = true;
            this.$http.get('/LiberAPP/Convoy')
            .then(res => {
               this.convoys = res.data;
               this.showLoading = false;
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
                        this.AnularConvoy();
                    }
                })
        },
        AnularM(prm_monto)
        {
            this.$bvModal
                .msgBoxConfirm('¿Estás Seguro de Anular el Gasto de Viaje?', {
                  title: 'Anular Gasto',
                  size: 'sm',
                  okVariant: 'danger',
                  okTitle: 'Si, Anular',
                  cancelTitle: 'No',
                  cancelVariant: 'outline-secondary',
                  hideHeaderClose: false,
                  centered: true,
                })
                .then(value => {
                    if(value == true)
                    {
                        this.AnularMonto(prm_monto);
                    }
                })
        },
        AnularS(prm_servicio)
        {
            /*this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;*/

            this.$bvModal
                .msgBoxConfirm('¿Estás Seguro de Anular el Servicio?', {
                  title: 'Anular Servicio',
                  size: 'sm',
                  okVariant: 'danger',
                  okTitle: 'Si, Anular',
                  cancelTitle: 'No',
                  cancelVariant: 'outline-secondary',
                  hideHeaderClose: false,
                  centered: true,
                })
                .then(value => {
                    if(value == true)
                    {
                        this.AnularServicio(prm_servicio);
                    }
                })
        },
        AnularG()
        {
            /*this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;*/

            this.$bvModal
                .msgBoxConfirm('¿Desea Anular la Guía?', {
                  title: 'Anular Guia Nro 86',
                  size: 'sm',
                  okVariant: 'danger',
                  okTitle: 'Si, Anular',
                  cancelTitle: 'No',
                  cancelVariant: 'outline-secondary',
                  hideHeaderClose: false,
                  centered: true,
                })
                .then(value => {
                    if(value == true)
                    {
                        //this.AnularServicio(prm_servicio);
                    }
                })
        },
        Inicio(prm_convoy)
        {
            this.headerTextVariant = 'primary'
            this.headerTitleVariant = 'INICIAR RUTA';
            this.ynro = 0;
            //this.boton = true;
            this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;

            var encontrado = this.rutas.filter(function (truta)
            {
                return (truta.idRuta == this.convoy.Ruta_idRuta);
            },this);

            var uruta = encontrado[0];

            var roundtrip = uruta.diasRut.split('-');
            var recorridos = uruta.recorridosRut.split('-');
            var precorridos = uruta.precorridosRut.split('-');
            var peajes = uruta.peajesRut.split('-');
            var vrecorridos = uruta.vrecorridosRut.split('-');
            var viaticos = uruta.viaticosRut.split('-');
            var detalles = uruta.detallesRut.split('-');
            var totales = uruta.totalesRut.split('-');
            var aplicables = uruta.aplicablesRut.split('-');

            var obj_recorridos = [];
            var posiciones = [];

            for (var i = 0; i < recorridos.length; i++)
            {
                var encontrado2 = this.recorridos.filter(function (trecorrido)
                {
                    return (trecorrido.idDato == recorridos[i]);
                },this);

                var urecorrido = encontrado2[0];
                
                //posiciones["r"+urecorrido.idDato] = this.ynro;//para saber en que posicion se pondra los peajes y gastos de viaje
                obj_recorridos[this.ynro] = {
                        Recorrido_idDato: urecorrido.idDato,
                        nroRec: this.ynro,
                        nombreRec: urecorrido.valorDat,
                        roundtripRec: roundtrip[i],
                        npeajes: precorridos[i],
                        peajes: [],
                        ngastos: vrecorridos[i],
                        gastos: [],
                        /*ejecutado: 0,
                        cambio: 0,*/
                    };

                this.ynro++;
            }

            var acumulador = 0;

            for (var i = 0; i < precorridos.length; i++)
            {
                var cantidad = parseInt(precorridos[i]);
                for(var j = 0; j < cantidad; j++)
                {
                    var k = acumulador + j;
                    var encontrado2 = this.tramos.filter(function (ttramo)
                    {
                        return (ttramo.idTramo == peajes[k]);
                    },this);

                    var upeaje = encontrado2[0];

                    var obj_peaje = {
                            id: upeaje.idTramo,
                            punto: upeaje.puntoTra,
                            peaje: upeaje.peajeTra,
                            cpeaje: upeaje.camionetaTra,
                            /*ejecutado: 0,
                            cambio: 0,*/
                        };

                    obj_recorridos[i].peajes.push(obj_peaje);
                }
                acumulador += cantidad;
            }

            acumulador = 0;

            for (var i = 0; i < vrecorridos.length; i++)
            {
                var cantidad = parseInt(vrecorridos[i]);
                for(var j = 0; j < cantidad; j++)
                {
                    var k = acumulador + j;
                    var encontrado2 = this.yconceptos.filter(function (tviatico)
                    {
                        return (tviatico.idDato == viaticos[k]);
                    },this);

                    var uviatico = encontrado2[0];

                    var obj_viatico = {
                            id: uviatico.idDato,
                            gasto: uviatico.valorDat,
                            detalle: detalles[k],
                            total: totales[k],
                            aplicable: aplicables[k],
                            /*ejecutado: 0,
                            cambio: 0,*/
                        };

                    obj_recorridos[i].gastos.push(obj_viatico);
                }
                acumulador += cantidad;
            }
            this.recorridos_actuales = obj_recorridos;
            for (var i = 0; i < this.recorridos_actuales.length; i++)
            {
                this.recorridos_actuales[i]
            }
        },
        Recorrido(prm_convoy,prm_finalizar,prm_adicional)
        {
            this.finalizar = prm_finalizar;
            this.adicional = prm_adicional;
            this.headerTextVariant = 'primary';
            this.headerTitleVariant = 'Gestionar Gastos de Viaje';
            this.ynro = 0;
            //this.boton = true;
            this.convoy = prm_convoy;
            //this.servicios = prm_convoy.servicios;

            this.$http.get('/LiberAPP/Servicio/ListarConvoy/'+this.convoy.idConvoy)
            .then(res => {
                this.servicios = res.data;

                /******************************************************************************************/
                var actual = false;
                var cambiar = true;
                var obj_recorridos = [];

                for (var i = 0; i < prm_convoy.recorridos.length; i++)
                {
                    var obj_recorrido = prm_convoy.recorridos[i];
                    //Buscando el recorrido en la lista 
                    var encontrado2 = this.recorridos.filter(function (trecorrido)
                    {
                        return (trecorrido.idDato == obj_recorrido.Recorrido_idDato);
                    },this);

                    var urecorrido = encontrado2[0];

                    //verificar que recorrido se mostrará
                    if(cambiar && obj_recorrido.estadoRec == 'PROGRAMADO')
                        actual = true;
                        
                    obj_recorridos[i] = {
                        idRecorrido: obj_recorrido.idRecorrido,
                        nroRec: this.ynro,
                        finicioRec: obj_recorrido.finicioRec.replace(" 00:00:00",""),
                        fterminoRec: obj_recorrido.fterminoRec.replace(" 00:00:00",""),
                        nombreRec: urecorrido.valorDat,
                        roundtripRec: obj_recorrido.roundtripRec,
                        idealRec: obj_recorrido.idealRec,
                        idealRec: obj_recorrido.idealRec,
                        estadoRec: obj_recorrido.estadoRec,

                        peajesRec: obj_recorrido.peajesRec,
                        cpeajesRec: obj_recorrido.cpeajesRec,
                        tramosRec: obj_recorrido.tramosRec,
                        viaticosRec: obj_recorrido.viaticosRec,
                        detallesRec: obj_recorrido.detallesRec,
                        totalesRec: obj_recorrido.totalesRec,
                        aplicablesRec: obj_recorrido.aplicablesRec,

                        tpeaje: 0,
                        tcpeaje: 0,
                        togasto: 0,
                        tsgasto: 0,

                        /***/
                        actual: actual,
                        peajes: [],
                        gastos: [],
                    };
                    
                    if(actual)
                    {
                        cambiar = false;
                        actual = false;
                    }

                    this.ynro++;

                    var arr_peajes = [];
                    var arr_cpeajes = [];
                    var arr_tramos = [];    
                    if(obj_recorrido.tramosRec != null && obj_recorrido.tramosRec != "")
                    {
                        arr_peajes = obj_recorrido.peajesRec.split('-');
                        arr_cpeajes = obj_recorrido.cpeajesRec.split('-');
                        arr_tramos = obj_recorrido.tramosRec.split('-');
                    }
                    
                    var arr_viaticos = [];
                    var arr_detalles = [];
                    var arr_totales = [];
                    var arr_aplicables = [];
                    if(obj_recorrido.viaticosRec != null && obj_recorrido.viaticosRec != "")
                    {
                        arr_viaticos = obj_recorrido.viaticosRec.split('-');
                        arr_detalles = obj_recorrido.detallesRec.split('-');
                        arr_totales = obj_recorrido.totalesRec.split('-');
                        arr_aplicables = obj_recorrido.aplicablesRec.split('-');
                    }

                    for (var j = 0; j < arr_tramos.length; j++)
                    {
                        var idTramo = arr_tramos[j];

                        var encontrado3 = this.tramos.filter(function (ttramo)
                        {
                            return (ttramo.idTramo == idTramo);
                        },this);

                        var upeaje = encontrado3[0];

                        var obj_peaje = {
                                id: idTramo,
                                punto: upeaje.puntoTra,
                                peaje: arr_peajes[j],
                                cpeaje: arr_cpeajes[j],
                            };
                        obj_recorridos[i].peajes.push(obj_peaje);
                        obj_recorridos[i].tpeaje += parseFloat(arr_peajes[j]);
                        obj_recorridos[i].tcpeaje += parseFloat(arr_cpeajes[j]);
                    }
                    
                    //agregando los viaticos al recorrido
                    for (var j = 0; j < arr_viaticos.length; j++)
                    {
                        var idViatico = arr_viaticos[j];

                        var encontrado3 = this.yconceptos.filter(function (tviatico)
                        {
                            return (tviatico.idDato == idViatico);
                        },this);

                        var uviatico = encontrado3[0];

                        var obj_gasto = {
                                id: idViatico,
                                gasto: uviatico.valorDat,
                                detalle: arr_detalles[j],
                                total: arr_totales[j],
                                aplicable: arr_aplicables[j],
                            };
                        obj_recorridos[i].gastos.push(obj_gasto);
                        if(arr_aplicables[j] == "OPERADOR")
                            obj_recorridos[i].togasto += parseFloat(arr_totales[j]);
                        else if(arr_aplicables[j] == "SUPERVISOR")
                            obj_recorridos[i].tsgasto += parseFloat(arr_totales[j]);
                        else
                        {
                            obj_recorridos[i].togasto += parseFloat(arr_totales[j]);
                            obj_recorridos[i].tsgasto += parseFloat(arr_totales[j]);
                        }
                    }

                    //agregando la alimentación para su visualización
                    var total_alimentacion = obj_recorridos[i].roundtripRec * this.convoy.alimentacionRut;
                    var obj_gasto = {
                                //id: idViatico,
                                gasto: "ALIMENTACIÓN",
                                detalle: "ALIMENTACIÓN " + obj_recorridos[i].roundtripRec + " DÍAS",
                                total: total_alimentacion,
                                aplicable: "TODOS",
                            };
                    obj_recorridos[i].gastos.push(obj_gasto);

                    obj_recorridos[i].togasto += parseFloat(total_alimentacion);
                    obj_recorridos[i].tsgasto += parseFloat(total_alimentacion);

                }
                this.recorridos_actuales = obj_recorridos;
                /********************************************************************************************************/
            })
            .catch(error => {
                this.Toast(true,'danger','Servicios','Error al cargar los registros: '+error);
                this.showLoading = false;
            });


            var montos = [];

            this.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/'+this.convoy.idConvoy)
            .then(res => {
                this.montos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

            //var montos = [];

            this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/'+this.convoy.idConvoy)
            .then(res => {
                this.alimentaciones = res.data;
                //this.montos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        
        },
        Omitir(prm_recorrido)
        {
            /*this.convoy = prm_convoy;
            this.servicios = prm_convoy.servicios;*/

            this.$bvModal
                .msgBoxConfirm('¿Estás Seguro de Omitir los Gastos de Viaje y Asistencia?', {
                  title: 'Omitir Gastos',
                  size: 'sm',
                  okVariant: 'warning',
                  okTitle: 'Si, Omitir',
                  cancelTitle: 'No',
                  cancelVariant: 'outline-secondary',
                  hideHeaderClose: false,
                  centered: true,
                })
                .then(value => {
                    if(value == true)
                    {
                        this.OmitirRecorrido(prm_recorrido);
                    }
                })
        },
        OmitirRecorrido(prm_recorrido)
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);
            var jsonRecorridos = JSON.stringify(this.recorridos_actuales);
            var jsonRecorrido = JSON.stringify(this.prm_recorrido);

            this.$http.post('/LiberAPP/Convoy/Omitir',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                recorridos: jsonRecorridos,
                recorrido: jsonRecorrido,
            })
            .then(res => {
                this.Toast(true,'primary','Anular Viáticos y Asistencia','Procesado Correctamente');
                this.showLoading = false;
                this.Convoy();
                this.showModalRecorrido = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });

        },
        
        Asignar(prm_asignacion) ////////////////////////////////////////REVISAR
        {
            switch (prm_asignacion)
            {
                case "ruta":
                    this.convoy.cargaCon = this.zruta.cargaRut;
                    this.convoy.origenCon = this.zruta.origenRut;
                    this.convoy.pasoCon = this.zruta.pasoRut;
                    this.convoy.destinoCon = this.zruta.destinoRut;
                    this.convoy.tvehiculoCon = this.zruta.vehiculoRut;
                    this.convoy.tipoCon = this.zruta.tipoRut;
                    this.convoy.Ruta_idRuta = this.zruta.idRuta;
                    this.convoy.Cliente_idExterno = this.zruta.Externo_idExterno;
                    this.convoy.cliente = this.zruta.nombreExt;
                    this.convoy.roundtripCon = this.zruta.roundtripRut;
                    this.convoy.Cuenta_idDato = this.zruta.Cuenta_idDato;
                    this.convoy.Grupo_idDato = this.zruta.Grupo_idDato;

                    this.convoy.Remitente_idExterno = this.zruta.Remitente_idExterno;
                    this.convoy.Destinatario_idExterno = this.zruta.Destinatario_idExterno;
                    this.convoy.remitenteExt = this.zruta.remitenteExt;
                    this.convoy.destinatarioExt = this.zruta.destinatarioExt;

                    this.convoy.partidaCon = this.zruta.partidaRut;
                    this.convoy.llegadaCon = this.zruta.llegadaRut;
                    this.convoy.Partida_idDato = this.zruta.Partida_idDato;
                    this.convoy.Llegada_idDato = this.zruta.Llegada_idDato;

                    this.convoy.serieCon = this.zruta.serieRut;

                    this.convoy.unidadCon = this.zruta.unidadRut;
                    this.convoy.unidadSunatCon = this.zruta.unidadSunatRut;

                    this.convoy.ubigeopSunatCon = this.zruta.ubigeopSunatRut;
                    this.convoy.ubigeolSunatCon = this.zruta.ubigeolSunatRut;
                    
                    this.convoy.ubigeopCon = this.zruta.ubigeopRut;
                    this.convoy.ubigeolCon = this.zruta.ubigeolRut;

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
            if(this.yoperador == null || this.yoperador == {} || this.yoperador.idPersona == null)
            {
                this.Toast(true,'danger','Agregar Servicio','Seleccione un Operador');
                return;
            }
            if(this.yvehiculo == null || this.yvehiculo == {} || this.yvehiculo.idVehiculo == null)
            {
                this.Toast(true,'warning','Agregar Servicio','Seleccione un Vehiculo');
                return;
            }
            if(this.yescolta == false && (this.yacople == null || this.yacople == {} || this.yacople.idVehiculo == null))
            {
                this.Toast(true,'warning','Agregar Servicio','Seleccione un Acople');
                return;
            }
            if(this.yescolta == false && (this.ycarga == null || this.ycarga == ""))
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
                trabajadorPer: this.yoperador.trabajadorPer,
                placaVeh: this.yvehiculo.placaVeh,
                acopleVeh: this.yacople.placaVeh,
                cargaSer: this.ycarga,
                estadoSer: "PROGRAMADO",
            };

            var encontrado = this.servicios.filter(function (tservicio)
            {
                return ((tservicio.Persona_idPersona == uservicio.Persona_idPersona || tservicio.Vehiculo_idVehiculo == uservicio.Vehiculo_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Vehiculo_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Vehiculo_idVehiculo) && tservicio.estadoSer != 'ANULADO');
            },this);//tambien verifica si el supervisor no de ingrese dos veces

            if(encontrado.length == 0)
            {
                if(this.yescolta)
                    this.servicios.unshift(uservicio);
                else
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

            if(this.servicios.length == 0)
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar al Menos una Unidad para Guardar');
                this.showLoading = false;
                return;
            }
            if(this.zruta == null || this.zruta == {} || this.zruta.idRuta == null)
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar una Ruta');
                this.showLoading = false;
                return;
            }
            /*if(this.convoy.Remitente_idExterno == null || this.convoy.Remitente_idExterno == "")
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar un Remitente');
                this.showLoading = false;
                return;
            }
            if(this.convoy.Destinatario_idExterno == null || this.convoy.Destinatario_idExterno == "")
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar un Destinatario');
                this.showLoading = false;
                return;
            }*/
            if(this.convoy.Partida_idDato == null || this.convoy.Partida_idDato == "")
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar un Punto de Partida');
                this.showLoading = false;
                return;
            }
            if(this.convoy.Llegada_idDato == null || this.convoy.Llegada_idDato == "")
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar un Punto de Llegada');
                this.showLoading = false;
                return;
            }

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
        Actualizar()
        {
            this.showLoading = true;

            if(this.servicios.length == 0)
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar al Menos una Unidad para Guardar');
                this.showLoading = false;
                return;
            }
            
            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);

            this.$http.post('/LiberAPP/Convoy/AgregarServicio',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
            })
            .then(res => {
                if(res.data == 1)
                {
                    this.Toast(true,'success','Actualizar Convoy','Guardado Correctamente');
                    this.showModalOS = false;
                    this.showLoading = false;
                    //respuesta
                    this.Convoy();    
                }
                else
                {
                    this.Toast(true,'danger','Actualizar Convoy',res.data);
                    this.showLoading = false;
                }
                
            })
            .catch(error => {
                this.Toast(true,'danger','Actualizar Convoy','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        Iniciar()
        {
            this.showLoading = true;

            if(this.convoy.fechai == null || this.convoy.fechai == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Inicio');
                this.showLoading = false;
                return;
            }
            if(this.convoy.horai == null || this.convoy.horai == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Hora de Inicio');
                this.showLoading = false;
                return;
            }
            /*if(this.convoy.finicioCon == null || this.convoy.finicioCon == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Inicio');
                this.showLoading = false;
                return;
            }*/

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);
            var jsonRecorridos = JSON.stringify(this.recorridos_actuales);

            this.$http.post('/LiberAPP/Convoy/Iniciar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                recorridos: jsonRecorridos,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                this.showModalRecorrido = false;
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        AnularConvoy()
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);

            this.$http.post('/LiberAPP/Convoy/Anular',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Anulado Correctamente');
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        AnularServicio(prm_servicio)
        {
            this.showLoading = true;

            var jsonServicio = JSON.stringify(prm_servicio);

            this.$http.post('/LiberAPP/Servicio/Anular',
            {
                servicio: jsonServicio,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Servicio','Anulado Correctamente');
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Servicio','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        AnularMonto(prm_monto)
        {
            this.showLoading = true;

            var jsonMonto = JSON.stringify(prm_monto);

            this.$http.post('/LiberAPP/Monto/Anular',
            {
                monto: jsonMonto,
            })
            .then(res => {
                var afectados = res.data;
                if(afectados > 0)
                {
                    this.Toast(true,'primary','Anular Gasto','Anulado Correctamente');
                    
                    this.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/'+this.convoy.idConvoy)
                    .then(res => {
                        this.montos = res.data;
                        this.showLoading = false;
                    })
                    .catch(error => {
                        this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                        this.showLoading = false;
                    });

                    this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/'+this.convoy.idConvoy)
                    .then(res => {
                        this.alimentaciones = res.data;
                    })
                    .catch(error => {
                        this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                        this.showLoading = false;
                    });
                }
                else
                {
                    this.Toast(true,'danger','Anular Gasto','No se pudo Anular el Gasto');
                    this.showLoading = false;
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Servicio','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
            
        },
        Procesar()
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);
            var jsonRecorridos = JSON.stringify(this.recorridos_actuales);

            this.$http.post('/LiberAPP/Convoy/Procesar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                recorridos: jsonRecorridos,
                usuario: this.userData.id,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                this.showLoading = false;
                this.Convoy();
                this.showModalRecorrido = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        Terminar()
        {
            this.showLoading = true;

            /*sif(this.convoy.fechat == null || this.convoy.fechat == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Termino');
                this.showLoading = false;
                return;
            }
            if(this.convoy.horat == null || this.convoy.horat == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Hora de Termino');
                this.showLoading = false;
                return;
            }*/
            /*if(this.convoy.finicioCon == null || this.convoy.finicioCon == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Inicio');
                this.showLoading = false;
                return;
            }*/

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);
            var jsonRecorridos = JSON.stringify(this.recorridos_actuales);

            this.$http.post('/LiberAPP/Convoy/Terminar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                //recorridos: jsonRecorridos,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                /*this.showModalCargar = false;
                this.showModalEntregar = false;
                this.showModalRetornar = false;
                this.showModalFinalizar = false;*/
                this.showModalRecorrido = false;
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        Duplicar()
        {
            this.showLoading = true;

            if(this.convoy.fechat == null || this.convoy.fechat == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Termino');
                this.showLoading = false;
                return;
            }
            if(this.convoy.horat == null || this.convoy.horat == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Hora de Termino');
                this.showLoading = false;
                return;
            }
            /*if(this.convoy.finicioCon == null || this.convoy.finicioCon == "")
            {
                this.Toast(true,'warning','Iniciar Recorrido','Ingrese la Fecha de Inicio');
                this.showLoading = false;
                return;
            }*/

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicios = JSON.stringify(this.servicios);
            var jsonRecorridos = JSON.stringify(this.recorridos_actuales);

            this.$http.post('/LiberAPP/Convoy/Duplicar',
            {
                convoy: jsonConvoy,
                servicios: jsonServicios,
                //recorridos: jsonRecorridos,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Duplicado Correctamente');
                /*this.showModalCargar = false;
                this.showModalEntregar = false;
                this.showModalRetornar = false;
                this.showModalFinalizar = false;*/
                this.showModalRecorrido = false;
                this.showLoading = false;
                this.Convoy();
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        Evento(prm_convoy,prm_servicio)
        {
            this.showModalGuiaEvento = true;
            this.convoy = prm_convoy;
            this.servicio = prm_servicio;

            return;
        },
        GenerarG(prm_convoy,prm_servicio)
        {
            this.showModalGuia = true;
            this.convoy = prm_convoy;
            this.servicio = prm_servicio;
            this.guia = {
                "grrserie": "",
                "grrnro": "",
                "grttraslado": "",
                "grtobservacion":"",
            };

            return;
        },
        Aplazar()
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            
            this.$http.post('/LiberAPP/Convoy/Aplazar',
            {
                convoy: jsonConvoy,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                this.convoy.fterminoCon = res.data;
                this.showLoading = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/'+this.convoy.idConvoy)
            .then(res => {
                this.alimentaciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        },
        Alimentaciones(prm_nonto)
        {
            this.showLoading = true;

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonAlimentaciones = JSON.stringify(this.alimentaciones);
            
            this.$http.post('/LiberAPP/Monto/GuardarControl/'+this.userData.id+'/ALIMENTACION',
            {
                convoy: jsonConvoy,
                alimentaciones: jsonAlimentaciones,
                monto: prm_nonto,
            })
            .then(res => {
                this.Toast(true,'primary','Procesar Convoy','Procesado Correctamente');
                this.convoy.fterminoCon = res.data;
                this.showLoading = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/'+this.convoy.idConvoy)
            .then(res => {
                this.montos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/'+this.convoy.idConvoy)
            .then(res => {
                this.alimentaciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
            this.extraAlimentacion = 0;
        },
        GestionarAlimentacionLibre()
        {
            this.yoperadores = [];
            this.alimentaciones = [];

            this.headerTitleVariant = "GESTIONAR ALIMENTACIÓN";
        },
        AlimentacionLibres()
        {
            var arr_ids = [];

            this.yoperadores.forEach(function(uoperador)
            {
                arr_ids.push(uoperador.idPersona);
            });

            var ids = arr_ids.join(",");

            this.showLoading = true;
            this.$http.get('/LiberAPP/Monto/ListarControlLibre/ALIMENTACION/'+ids)
            .then(res => {
                this.alimentaciones = res.data;
                this.showLoading = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
            this.extraAlimentacion = 0;
        },

        AlimentacionesLibres(prm_monto)
        {
            this.showLoading = true;

            var jsonAlimentaciones = JSON.stringify(this.alimentaciones);
            
            this.$http.post('/LiberAPP/Monto/GuardarControlLibre/'+this.userData.id+'/ALIMENTACION EN BASE',
            {
                //convoy: jsonConvoy,
                alimentaciones: jsonAlimentaciones,
                monto: prm_monto,
            })
            .then(res => {
                this.Toast(true,'primary','Alimentación en Base','Guardado Correctamente');
                //this.convoy.fterminoCon = res.data;
                this.AlimentacionLibres();
                this.showLoading = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Alimentación en Base','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },

        Reemplazar(prm_servicio,prm_convoy)
        {
            this.convoy = prm_convoy;
            this.reemplazo = prm_servicio;
            this.showModalReemplazo = true;

            var encontrado = this.personas.filter(function (tpersona)
            {
                return (tpersona.idPersona == prm_servicio.Persona_idPersona);
            },this);

            if(encontrado.length > 0)
            {
                this.yreemplazop = encontrado[0];
                this.reemplazo.idReemplazop = this.yreemplazop.idPersona;
            }
            else
                this.yreemplazop = {};

            var encontrado = this.vehiculos.filter(function (tvehiculo)
            {
                return (tvehiculo.idVehiculo == prm_servicio.Vehiculo_idVehiculo);
            },this);

            if(encontrado.length > 0)
            {
                this.yreemplazov = encontrado[0];
                this.reemplazo.idReemplazov = this.yreemplazov.idVehiculo;
            }
            else
                this.yreemplazov = {};

            var encontrado = this.vehiculos.filter(function (tvehiculo)
            {
                return (tvehiculo.idVehiculo == prm_servicio.Acople_idVehiculo);
            },this);

            if(encontrado.length > 0)
            {
                this.yreemplazoa = encontrado[0];
                this.reemplazo.idReemplazoa = this.yreemplazoa.idVehiculo;
            }
            else
                this.yreemplazoa = {};

        },
        Reasignar()
        {
            this.showLoading = true;

            if(this.reemplazo.idReemplazop == null || this.reemplazo.idReemplazop == "")
            {
                this.Toast(true,'warning','Reasignar','Ingrese el Personal de Reemplazo');
                this.showLoading = false;
                return;
            }
            if(this.reemplazo.idReemplazov == null || this.reemplazo.idReemplazov == "")
            {
                this.Toast(true,'warning','Reasignar','Ingrese el Vehiculo de Reemplazo');
                this.showLoading = false;
                return;
            }
            if(this.reemplazo.escoltaSer == '0')
            {
                if(this.reemplazo.idReemplazoa == null || this.reemplazo.idReemplazoa == "")
                {
                    this.Toast(true,'warning','Reasignar','Ingrese el Acople de Reemplazo');
                    this.showLoading = false;
                    return;
                }    
            }
            if(this.reemplazo.fcambioSer == null || this.reemplazo.fcambioSer == "")
            {
                this.Toast(true,'warning','Reasignar','Ingrese una Fecha Válida');
                this.showLoading = false;
                return;
            }
            if(this.reemplazo.hcambioSer == null || this.reemplazo.hcambioSer == "" || this.reemplazo.hcambioSer.length < 5)
            {
                this.Toast(true,'warning','Reasignar','Ingrese una Hora Válida');
                this.showLoading = false;
                return;
            }

            var jsonServicio = JSON.stringify(this.reemplazo);

            this.$http.post('/LiberAPP/Servicio/Reemplazar',
            {
                servicio: jsonServicio,
                usuario: this.userData.id,
            })
            .then(res => {
                if(res.data == 1)
                {
                    this.Toast(true,'primary','Reasignar','Procesado Correctamente');
                    this.showLoading = false;
                    this.Convoy();
                    this.showModalReemplazo = false;    
                }
                else
                {
                    this.Toast(true,'danger','Reasignar',res.data);
                    this.showLoading = false;
                }
            })
            .catch(error => {
                this.Toast(true,'danger','Procesar Convoy','Error al procesar el registro: '+error);
                this.showLoading = false;
            });
        },
        GuardarMonto()
        {
            this.showLoading = true;

            //if(this.monto.servicio == null || this.monto.servicio == {} || this.monto.servicio.trabajadorPer == null)
            if(this.monto.servicio == null || this.monto.servicio == [] || this.monto.servicio.length == 0)
            {
                this.Toast(true,'warning','Guardar Monto','Debe Ingresar el Trabajador');
                this.showLoading = false;
                return;
            }
            if(this.monto.concepto == null || this.monto.concepto == {} || this.monto.concepto.idDato == null)
            {
                this.Toast(true,'warning','Guardar Monto','Debe Ingresar el Concepto');
                this.showLoading = false;
                return;
            }
            if(this.monto.evento == null || this.monto.evento == {} || this.monto.evento.idEvento == null)
            {
                this.Toast(true,'warning','Guardar Monto','Debe Ingresar el Evento/Causa');
                this.showLoading = false;
                return;
            }
            if(this.monto.total == "" || this.monto.total <= 0)
            {
                this.Toast(true,'warning','Guardar Monto','Debe Ingresar un Monto Valido');
                this.showLoading = false;
                return;
            }
            /*if(this.monto.fecha == null || this.monto.fecha == "")
            {
                this.Toast(true,'warning','Guardar Convoy','Debe Ingresar una Fecha Valida');
                this.showLoading = false;
                return;
            }*/

            var jsonMonto = JSON.stringify(this.monto);

            this.$http.post('/LiberAPP/Monto/GuardarAdicional/'+this.userData.id,
            {
                monto: jsonMonto,
            })
            .then(res => {
                this.Toast(true,'success','Agregar Convoy','Guardado Correctamente');
                this.showModalProgramar = false;
                this.showLoading = false;
                //respuesta
                //this.convoy.montos.push(res.data);
                this.montos[this.montos.length-1] = this.montos[this.montos.length-1].concat(res.data);
                //this.Convoy();

                this.monto = {
                    servicio: [],
                    concepto: '',
                    evento: [],
                    total: '',
                    detalle: '',
                    disposicion: 'DEPOSITO',
                    fecha: '',
                };
            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Convoy','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
        },
        GenerarGRT()
        {
            this.showLoading = true;

            if(this.guia.grrserie == null || this.guia.grrserie == "")
            {
                this.Toast(true,'warning','Guia Remisión','Ingrese la Serie de la Guía Remisión Remitente');
                this.showLoading = false;
                return;
            }
            if(this.guia.grrnro == null || this.guia.grrnro == "")
            {
                this.Toast(true,'warning','Guia Remisión','Ingrese Nro de Guía Remisión Remitente');
                this.showLoading = false;
                return;
            }
            if(this.guia.pesoSer == null || this.guia.pesoSer == "")
            {
                this.Toast(true,'warning','Guia Remisión','Ingrese el Peso de la Carga');
                this.showLoading = false;
                return;
            }
            if(this.servicio.cargaSer == null || this.servicio.cargaSer == "")
            {
                this.Toast(true,'warning','Guia Remisión','Ingrese la Cantidad Cargada en la Unidad Establecida');
                this.showLoading = false;
                return;
            }

            var jsonConvoy = JSON.stringify(this.convoy);
            var jsonServicio = JSON.stringify(this.servicio);
            var jsonGuia = JSON.stringify(this.guia);

            this.$http.post('/LiberAPP/Guia/GenerarGRE',
            {
                convoy: jsonConvoy,
                servicio: jsonServicio,
                guia: jsonGuia,
            })
            .then(res => {
                this.showLoading = false;

                if(res.data.status == "GENERADA")
                    this.Toast(true,'danger','Guia Remisión','Guia NO enviada a la SUNAT');
                else if(res.data.status == "ENVIADA")
                    this.Toast(true,'warning','Guia Remisión','Esperando Confirmación SUNAT');
                else if(res.data.status == "DESAPROBADA")
                    this.Toast(true,'danger','Guia Remisión','Guia NO aprobada por SUNAT');
                else if(res.data.status == "EMITIDA")
                    this.Toast(true,'success','Guia Remisión','Guia emitida correctamente');

                window.open(res.data.enlace, "_blank");

                this.Convoy();
                this.showModalGuia = false;
            })
            .catch(error => {
                this.Toast(true,'danger','Guia Remisión','Error al procesar el registro: '+error);
                this.showLoading = false;
            });

        },
        Prueba()
        {
            this.showLoading = true;
            var jsonMonto = "";

            this.$http.post('/LiberAPP/Guia/Prueba/',
            {
                monto: jsonMonto,
            })
            .then(res => {
                this.showLoading = false;

                //respuesta
                
                console.log(res.data);

            })
            .catch(error => {
                this.Toast(true,'danger','Agregar Convoy','Error al guardar el registro: '+error);
                this.showLoading = false;
            });
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

        /*this.$http.get('/LiberAPP/Externo/Select')
            .then(res => {
                this.externos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/

        /*this.$http.get('/LiberAPP/Dato/Select/DIRECCION/TRANSPORTE')
            .then(res => {
                this.direcciones = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Dirección','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/

        this.$http.get('/LiberAPP/Tramo/SelectViatico')
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
        this.$http.get('/LiberAPP/Evento/Select')
            .then(res => {
                this.eventos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Evento','Error al cargar los registros: '+error);
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
        this.$http.get('/LiberAPP/Dato/Select/VIATICO/PERSONAL')
            .then(res => {
                this.yconceptos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Concepto','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        this.$http.get('/LiberAPP/Dato/Select/GRUPO/TRANSPORTE')
            .then(res => {
                this.grupos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
        /*this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE')
            .then(res => {
                this.cuentas = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/
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
th
{
    background-color: rgb(75,75,75);
    color: white;
    border-color: rgb(100,100,100);

}
.popover
{
    max-width: 500px !important;
}
.escolta
{
    background-color: rgb(238,237,253);
    border-top: 1px solid rgb(115,103,240);
    border-bottom: 1px solid rgb(115,103,240);
}

</style>