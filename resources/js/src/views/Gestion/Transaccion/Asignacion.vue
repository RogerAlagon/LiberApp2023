<template>
    <div>
        <b-card v-if="vista_entidad == 0">
            <b-row>
                <b-col md="6" xl="4">
                    <b-form-group label="Entidad">
                        <v-select label="valorDat" v-model="entidad" :options="entidades" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Area">
                        <v-select label="nombreAre" v-model="area" :options="areas" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3" class="text-center">
                    <div class="demo-inline-spacing">
                        <b-button variant="success" @click="Cargar()" :disabled="showLoading">
                            <feather-icon icon="ArrowDownIcon" class="mr-50" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">Cargar</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>
        <b-card>
            <b-row>
                <b-col md="12" xl="12">
                    <h3>PLANTILLAS {{narea}}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12">
                    <div class="demo-inline-spacing" >
                        <b-button variant="outline-secondary" @click="Listar(uplantilla.idPlantilla,uplantilla.nombrePla); clicked = uplantilla.idPlantilla" :disabled="showLoading" size="sm" v-for="(uplantilla, indice) in plantillas" :key="indice" pill v-bind:class="{ 'btn-outline-info': (clicked == uplantilla.idPlantilla) }">
                            <feather-icon icon="ArrowRightIcon" v-if="!showLoading"/>
                            <b-spinner small v-else/>
                            <span class="align-middle">{{uplantilla.nombrePla}}</span>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>

        <b-card>
            <b-row>
                <b-col md="6" xl="6">
                    <h3> {{vista_implemento}} - {{narea}} - PLANTILLA {{nplantilla}}</h3>
                <!---------------------------------- nuevo -------------------------------->
                <!---<b-button v-b-modal.modal-grupo variant="primary" @click="Nuevo" v-if="Object.keys(this.grupos).length > 0">-->
                    <!--<b-button v-b-modal.modal-grupo variant="primary" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">Nuevo Grupo</span>
                    </b-button>
                    <b-button v-b-modal.modal-implemento variant="success" @click="Nuevo">
                        <feather-icon icon="PlusIcon" class="mr-50"/>
                        <span class="align-middle">Nuevo Implemento</span>
                    </b-button>
                </b-col>-->
                <!---------------------------------- búsqueda -------------------------------->
                <!--<b-col md="6" xl="6">
                    <div class="custom-search d-flex justify-content-end">
                        <b-form class="faq-search-input">
                            <b-input-group class="input-group-merge">
                                <b-input-group-prepend is-text> <feather-icon icon="SearchIcon" /> </b-input-group-prepend>
                                <b-form-input id="searchbar" v-model="faqSearchQuery" placeholder="Buscar Implemento" />
                            </b-input-group>
                        </b-form>
                    </div>-->
                </b-col>
                <b-col md="6" xl="6" class="text-right">
                     <b-button variant="success" size="sm" @click="Situacion('ENTREGADO')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-renovar v-if="vista_implemento == 'GENERICO' || vista_implemento == 'EPP'">
                        <feather-icon icon="FileTextIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Entrega ({{ seleccionados.length }})</span>
                     </b-button>
                     <b-button variant="info" size="sm" @click="Situacion('PLANIFICADO')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-planificar v-if="vista_implemento == 'GENERICO' || vista_implemento == 'PREVENTIVO'">
                        <feather-icon icon="ToolIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Preventivo ({{ seleccionados.length }})</span>
                     </b-button>
                     <b-button variant="primary" size="sm" @click="Situacion('CAMPANA')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-campaña v-if="vista_implemento == 'GENERICO' || vista_implemento == 'PREVENTIVO'">
                        <feather-icon icon="ToolIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Campaña ({{ seleccionados.length }})</span>
                     </b-button>
                     <b-button variant="primary" size="sm" @click="Situacion('TRAMITADO')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-tramitar v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
                        <feather-icon icon="MessageCircleIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Orden de Servicio ({{ seleccionados.length }})</span>
                     </b-button>
                     <b-button variant="primary" size="sm" @click="Situacion('PLANIFICADO')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-renovar v-if="vista_implemento == 'GENERICO'">
                        <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Actividad ({{ seleccionados.length }})</span>
                     </b-button>
                    <b-button variant="warning" size="sm" @click="Situacion('APLAZADO')" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-aplazar>
                        <feather-icon icon="CalendarIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Aplazar ({{ seleccionados.length }})</span>
                    </b-button>
                    <b-button variant="primary" size="sm" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-pdf v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
                        <feather-icon icon="LayersIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Generar Pdf ({{ seleccionados.length }})</span>
                    </b-button>
                    <b-button variant="success" size="sm" :disabled="showLoading || seleccionados.length == 0"  v-b-modal.modal-masivo v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
                        <feather-icon icon="FileIcon" class="mr-50" v-if="!showLoading"/>
                        <b-spinner small v-else/>
                        <span class="align-middle">Carga Masiva ({{ seleccionados.length }})</span>
                    </b-button>
                    <br><br>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="12" class="text-center">
                    <b-tabs content-class="col-12 col-md-12 col-lg-12" nav-wrapper-class="faq-navigation col-md-12 col-lg-12 col-12" nav-class="nav-left">
                        <b-tab v-for="(ugrupo, indice) in registros" :key="indice">
                          <!-- title -->
                            <template #title>
                                <feather-icon icon="FolderIcon" size="18" class="mr-1" />
                                <span class="font-weight-bold text-left">{{ ugrupo.gru }}</span>
                            </template>
                            <div v-if="ugrupo">
                                <div class="otabla">
                                    <br>
                                    <table class="table table-condensed table-bordered">
                                        <thead>
                                          <tr>
                                            <th rowspan="2">Nro</th>
                                            <th rowspan="2">Vehículo</th>
                                            <th rowspan="2" v-for="utitulo in titulos">{{ utitulo.nom }}</th>
                                            <!--<th rowspan="2">Vehículo</th>-->
                                          </tr>
                                        </thead>
                                        <tbody @contextmenu.prevent>
                                            <tr v-for="(uregistro,indexv,nrov) in ugrupo.ent">
                                                <th>{{ indexv+1 }}</th>
                                                <th>{{ uregistro.nom }}</th>
                                                <td v-for="(uasignacion,indexk) in uregistro.asi" class="oact" :class="{ 'osombreado': uasignacion.sel }"
                                                    @click="edicion.includes(uasignacion.estado) ? Editar(uasignacion,uregistro.nom) : Renovar(uasignacion,uregistro.nom,uregistro.id,indexk)"
                                                    @click.right="renovacion.includes(uasignacion.estado) ? uasignacion.sel = uasignacion.sel : uasignacion.sel = !uasignacion.sel; Seleccionar(uasignacion,uregistro.nom,uregistro.id,uregistro.idExterno,indexk);">
                                                    <!--
                                                    @click="edicion.includes(uasignacion.estado) ? Editar(uasignacion,uregistro.nom) : Renovar(uasignacion,uregistro.nom,uregistro.id,indexk)"
                                                    -->

                                                    <!--@click.right="renovacion.includes(uasignacion.estado) ? uasignacion.sel = uasignacion.sel : uasignacion.sel = !uasignacion.sel; Seleccionar(uasignacion,uregistro.nom,uregistro.id,indexk);">-->
                                                    <div class="d-flex justify-content-center align-items-center">
                                                        <b-avatar rounded variant="light-primary"size="40" class="mr-50" v-if="uasignacion.escaneoAsi == 1">
                                                            <feather-icon icon="FileIcon" size="18"/>
                                                        </b-avatar>
                                                        <div class="user-page-info">
                                                            <b-badge v-if="uasignacion.estado == 'VIGENTE'" variant="light-success">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'PERMANENTE'" variant="light-info">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'POR VENCER'" variant="light-warning">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'VENCIDO'" variant="light-danger">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'URGENTE'" variant="light-dark">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'APLAZADO'" variant="light-primary">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else-if="uasignacion.estado == 'EN TRAMITE'" variant="light-primary">{{uasignacion.estado}}</b-badge>
                                                            <b-badge v-else variant="light-dark">{{uasignacion.estado}}</b-badge>
                                                            <br>
                                                            <span v-if="uasignacion.retraso && uasignacion.retraso != '-'" class="text-dark text-bold">
                                                                {{uasignacion.retraso}} <template v-if="uasignacion.tip == 'K'">km.</template><template v-else-if="uasignacion.tip == 'F'">días</template><template v-else></template><template v-if="uasignacion.retraso >= 0"> val.</template><template v-else> atra.</template><template v-else></template>
                                                            </span>
                                                            <span v-else class="text-dark text-bold"></span>
                                                            <br>
                                                            <small class="text-muted" v-if="uasignacion.valor != null">Ven: {{ uasignacion.valor }}</small>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-col>
            </b-row>        
      </b-card>

      <b-modal
          id="modal-renovar" v-model="showModalRenovar"
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
               <b-col md="4" xl="3">
                  <b-form-group label="Condición">
                    <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'PLANIFICADO'" variant="info" size="sm">PLANIFICAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                  </b-form-group>
               </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Area">
                        <b-form-input v-model="situacion.area" disabled/>
                    </b-form-group>                
                </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Implemento</th>
                     <th>Servicio/Material</th>
                     <th>Cantidad</th>
                     <th>Stock</th>
                     <th>Tiempo de Vida</th>
                     <th>Vencimiento</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.material}}</td>
                     <td>{{useleccionado.cantidad}}</td>
                     <td>{{useleccionado.stock}}</td>
                     <td>
                        {{useleccionado.renovacion}}
                        <template v-if="useleccionado.validacion == 'KILOMETRAJE'"> km.</template>
                        <template v-else-if="useleccionado.validacion == 'FECHA'"> meses</template>
                     </td>
                     <td>
                        <cleave v-model="useleccionado.vencimiento" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none'}" v-if="useleccionado.validacion == 'KILOMETRAJE'"/>
                        <cleave class="form-control" v-model="useleccionado.fvencimiento" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" v-else-if="useleccionado.validacion == 'FECHA'" />
                        <cleave class="form-control" v-model="useleccionado.fvencimiento" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" v-else/>
                     </td>
                  </tr>
               </table>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalRenovar = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <!--<b-button variant="success" size="sm" @click="Entregar()" :disabled="showLoading || !entregar">-->
                    <b-button variant="success" size="sm" @click="Entregar()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Generar Acta de Entrega</span>
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>

        <b-modal
          id="modal-planificar" v-model="showModalPlanificar"
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
               <b-col md="4" xl="3">
                  <b-form-group label="Condición">
                    <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'PLANIFICADO' || situacion.condicion == 'CAMPANA'" variant="info" size="sm">PLANIFICAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                  </b-form-group>
               </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Area">
                        <b-form-input v-model="situacion.area" disabled/>
                    </b-form-group>                
                </b-col>
                <b-col md="4" xl="3">
                  <!---<b-form-group label="Tipo de Mantenimiento">
                    <b-button v-if="situacion.mantenimientoOrd == 'PREVENTIVO'" variant="success" size="sm" @click="situacion.mantenimientoOrd='CAMPAÑA', situacion.condicion='CAMPANA'">{{ situacion.mantenimientoOrd }}</b-button>
                    <b-button v-if="situacion.mantenimientoOrd == 'CAMPAÑA'" variant="warning" size="sm" @click="situacion.mantenimientoOrd='PREVENTIVO', situacion.condicion='PLANIFICADO'">{{ situacion.mantenimientoOrd }}</b-button>
                  </b-form-group>-->  
                  <b-form-group label="Tipo de Mantenimiento">
                    <b-form-input v-model="situacion.mantenimientoOrd" disabled/>
                  </b-form-group>                
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Fecha Planeación">
                        <cleave class="form-control" v-model="situacion.fingreso" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Mantenimiento</th>
                     <th>Servicio</th>
                     <th>Insumos</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.material}}</td>
                     <td>{{useleccionado.insumos}}</td>
                  </tr>
               </table>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalPlanificar = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="Planificar()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Generar Mantenimiento</span>
                  <!--<span class="align-middle">Generar Preventivo</span>-->
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!-- Modal Campaña-->
        <b-modal
          id="modal-campaña" v-model="showModalCampana"
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
              <b-col md="4" xl="3">
                <b-form-group label="Condición">
                  <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                  <b-button v-else-if="situacion.condicion == 'CAMPANA'" variant="info" size="sm">PLANIFICAR</b-button>
                  <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                  <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                </b-form-group>
              </b-col>
              <b-col md="4" xl="3">
                <b-form-group label="Area">
                  <b-form-input v-model="situacion.area" disabled/>
                </b-form-group>                
              </b-col>
              <b-col md="4" xl="3">
                <b-form-group label="Tipo de Mantenimiento">
                  <b-form-input v-model="situacion.mantenimientoOrd" disabled/>
                </b-form-group>                
              </b-col>
              <b-col md="4" xl="3">
                <b-form-group label="Fecha Planeación">
                  <cleave class="form-control" v-model="situacion.fingreso" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                </b-form-group>
              </b-col>
              <!--<b-col md="4" xl="3">
                <b-form-group label="Tipo de Campaña">
                  <b-form-input class="form-control" v-model="situacion.observacion" />
                </b-form-group>
              </b-col>-->
            </b-row>
            <b-row>
              <b-col md="12" xl="12">
                <table class="table table-condensed table-bordered">
                    <tr><th style="width: 50px;">Nro</th><th style="min-width: 300px;">Componente</th><th style="width: 450px;">Tipo de Campaña</th><th style="width: 50px;">Acciones</th></tr>
                    <tr>
                      <td>#</td>
                      <td>
                        <v-select label="com" v-model="ycomponente" :options="componentes" style="flex: 1;" />
                      </td>
                      <td></td>
                      <td>
                        <b-button variant="success" class="btn-icon rounded-circle btn-sm" @click="AgregarTrabajos()">
                            <feather-icon icon="CheckIcon"/>
                        </b-button>
                      </td>
                    </tr>
                    <tr v-for="(ufalla,indice) in arr_trabajos">
                      <td>{{indice+1}}</td>
                      <td>{{ufalla.componentes}}</td>
                      <td>{{ufalla.falla}}</td>
                      <td>
                        <b-button variant="danger" class="btn-icon rounded-circle" @click="EliminarTrabajo(indice)">
                          <feather-icon icon="TrashIcon"/>
                        </b-button>
                      </td>
                    </tr>
                </table>
            </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Mantenimiento</th>
                     <th>Servicio</th>
                     <th>Insumos</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.material}}</td>
                     <td>{{useleccionado.insumos}}</td>
                  </tr>
               </table>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalCampana = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="PlanificarCampana()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Generar Campaña</span>
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <!-- 
                  <b-modal
          id="modal-planificar" v-model="showModalPlanificar"
          :header-bg-variant="headerBgVariant" :header-text-variant="headerTextVariant" :title="headerTitleVariant"
          :footer-bg-variant="footerBgVariant" :footer-text-variant="footerTextVariant"
          centered no-close-on-backdrop
          title-tag="div"
          cancel-title="Cancelar" ok-title="Guardar"
          size="xl"
          cancel-variant="secondary" ok-variant="success"
        >
        <b-row>
               <b-col md="4" xl="3">
                  <b-form-group label="Condición">
                    <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'PLANIFICADO'" variant="info" size="sm">PLANIFICAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                  </b-form-group>
               </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Area">
                        <b-form-input v-model="situacion.area" disabled/>
                    </b-form-group>                
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Fecha de Ingreso a Taller">
                        <cleave class="form-control" v-model="situacion.fingreso" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Hora de Ingreso a Taller">
                        <cleave v-model="situacion.hingreso" class="form-control" :raw="false" :options="{ time:true, timePattern:['h','m','s']}" placeholder="hh:mm:ss"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" xl="3">
                  <b-form-group label="Cuenta:">
                    <v-select label="valorDat" v-model="situacion.Cuenta_idDato" :options="cuentas" style="flex: 1;" :reduce="cuenta => cuenta.idDato"/>
                  </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                  <b-form-group label="Taller">
                    <v-select label="valorDat" v-model="situacion.Taller_idDato" :options="talleres" style="flex: 1;" :reduce="taller => taller.idDato"/>
                  </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Tipo de Mantenimiento">
                        <b-form-input v-model="situacion.mantenimientoOrd" disabled/>
                    </b-form-group>                
                </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Mantenimiento</th>
                     <th>Servicio</th>
                     <th>Insumos</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.material}}</td>
                     <td>{{useleccionado.insumos}}</td>
                  </tr>
               </table>
            </b-row>
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalPlanificar = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="Planificar()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Generar Orden de Trabajo</span>
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        -->
        
        <b-modal
          id="modal-tramitar" v-model="showModalTramitar"
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
               <b-col md="4" xl="3">
                  <b-form-group label="Condición">
                    <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'PLANIFICADO'" variant="info" size="sm">PLANIFICAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                    <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                  </b-form-group>
               </b-col>
               <b-col md="4" xl="3">
                    <b-form-group label="Tipo">
                        <b-button v-if="situacion.tipoOrd == 'SERVICIO'" variant="info" size="sm" @click="situacion.tipoOrd = 'COMPRA'">SERVICIO</b-button>
                        <b-button v-else-if="situacion.tipoOrd == 'COMPRA'" variant="primary" size="sm" @click="situacion.tipoOrd = 'SERVICIO'">COMPRA</b-button>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Area">
                        <b-form-input v-model="situacion.area" disabled/>
                    </b-form-group>                
                </b-col>
                <!--<b-col md="4" xl="3" v-if="situacion.condicion == 'APLAZADO'">
                    <b-form-group label="Siguiente Fecha de Revisión">
                        <cleave class="form-control" v-model="situacion.fpagoOrd" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>-->
                <b-col md="8" xl="4">
                    <b-form-group label="Fecha de Revisión">
                        <cleave class="form-control" v-model="situacion.faplazamiento" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12" xl="6">
                    <b-form-group label="Proveedor">
                        <v-select label="nombreExt" v-model="yexterno" :options="externos" @input="situacion.Externo_idExterno = yexterno.idExterno" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" xl="2">
                    <b-form-group label="Moneda">
                        <v-select label="valorDat" v-model="ymoneda" :options="monedas" @input="situacion.Moneda_idDato = ymoneda.idDato" style="flex: 1;"/>
                    </b-form-group>
                </b-col>
                <b-col md="8" xl="4">
                    <b-form-group label="Fecha de Emisión">
                        <cleave class="form-control" v-model="situacion.femisionOrd" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4">
                    <b-form-group label="Forma de Pago">
                        <b-button v-if="situacion.pagoOrd == 'CREDITO'" variant="primary" @click="situacion.pagoOrd = 'CONTADO'" size="sm">CREDITO</b-button>
                        <b-button v-else-if="situacion.pagoOrd == 'CONTADO'" variant="info" @click="situacion.pagoOrd = 'CREDITO'" size="sm">CONTADO</b-button>
                    </b-form-group>
                </b-col>
                
                <b-col md="6" xl="4" v-if="situacion.pagoOrd == 'CREDITO'">
                    <b-form-group label="Fecha de Pago">
                        <cleave class="form-control" v-model="situacion.fpagoOrd" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="4" v-if="situacion.pagoOrd == 'CREDITO'">
                    <b-form-group label="Adelanto">
                        <cleave class="form-control" v-model="situacion.adelantoOrd" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Implemento</th>
                     <th>Material</th>
                     <th>Unidad</th>
                     <th>Cantidad</th>
                     <th>Precio</th>
                     <th>Total</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.material}}</td>
                     <td>{{useleccionado.unidad}}</td>
                     <td>{{useleccionado.cantidad}}</td>
                     <td><b-form-input v-model="useleccionado.precio"/></td>
                     <td>{{useleccionado.total}}</td>
                  </tr>
               </table>
            </b-row>
            <b-row>
                <b-col md="6" xl="3">
                    <b-form-group label="Subtotal">
                     <cleave v-model="situacion.subtotalOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="2">
                    <b-form-group label="% IGV">
                        <cleave v-model="situacion.impuestoOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" />
                    </b-form-group>
                    <!-- @input="situacion.igvOrd = situacion.subtotalOrd * situacion.impuestoOrd/100; situacion.totalOrd = situacion.subtotalOrd + situacion.igvOrd"-->
                </b-col>
                <b-col md="6" xl="2">
                    <b-form-group label="IGV">
                        <cleave v-model="situacion.igvOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" disabled/>
                    </b-form-group>
                </b-col>
                <b-col md="6" xl="3">
                  <b-form-group label="Total">
                     <cleave v-model="situacion.totalOrd" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" disabled/>
                  </b-form-group>
                </b-col>
                <b-col md="6" xl="2">
                    <br>
                    <b-button variant="secondary" @click="CalcularTotal">
                        <span class="align-middle">Calcular</span>
                    </b-button>
                </b-col>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalTramitar = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="Tramitar()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Generar Orden de Servicio</span>
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>
        <b-modal
            id="modal-aplazar" v-model="showModalAplazar"
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
                <b-col md="4" xl="3">
                    <b-form-group label="Condición">
                        <b-button v-if="situacion.condicion == 'ENTREGADO'" variant="success" size="sm">ENTREGAR</b-button>
                        <b-button v-else-if="situacion.condicion == 'PLANIFICADO'" variant="info" size="sm">PLANIFICAR</b-button>
                        <b-button v-else-if="situacion.condicion == 'TRAMITADO'" variant="primary" size="sm">TRAMITAR</b-button>
                        <b-button v-else-if="situacion.condicion == 'APLAZADO'" variant="warning" size="sm">APLAZAR</b-button>
                    </b-form-group>
                </b-col>
                <!--<b-col md="4" xl="3">
                    <b-form-group label="Tipo">
                        <b-button v-if="situacion.tipoOrd == 'SERVICIO'" variant="info" size="sm" @click="situacion.tipoOrd = 'COMPRA'">SERVICIO</b-button>
                        <b-button v-else-if="situacion.tipoOrd == 'COMPRA'" variant="primary" size="sm" @click="situacion.tipoOrd = 'SERVICIO'">COMPRA</b-button>
                    </b-form-group>
                </b-col>-->
                <b-col md="4" xl="3">
                    <b-form-group label="Area">
                        <b-form-input v-model="situacion.area" disabled/>
                    </b-form-group>                
                </b-col>
                <b-col md="4" xl="3">
                    <b-form-group label="Fecha de Aplazamiento">
                        <cleave class="form-control" v-model="situacion.faplazamiento" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
               <table class="table table-condensed table-bordered table-hover">
                  <tr>
                     <th>Nro.</th>
                     <th>Asignado a</th>
                     <th>Aplazado</th>
                  </tr>
                  <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
                     <td>{{indice+1}}</td>
                     <td>{{useleccionado.nombreEnt}}</td>
                     <td>{{useleccionado.implemento}}</td>
                     <td>{{useleccionado.observacion}}</td>
                  </tr>
               </table>
            </b-row>
            <!---------------------------------- modal acciones -------------------------------->
            <template #modal-footer>
              <div class="w-100 d-flex justify-content-between">
                <b-button variant="secondary" size="sm" @click="showModalAplazar = false" :disabled="showLoading">
                  <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Cancelar</span>
                </b-button>
                <b-button variant="success" size="sm" @click="Aplazar()" :disabled="showLoading">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Aplazar</span>
                </b-button>
              </div>
            </template>
            <b-overlay :show="showLoading" no-wrap/>
        </b-modal>

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
               <b-form-group label="ID">
                  <b-form-input v-model="asignacion.idAsignacion" readonly/>
               </b-form-group>
            </b-col>
         </b-row>
         <b-row>
            <b-col md="6" xl="6">
               <b-form-group label="Asignado a">
                  <b-form-input v-model="asignacion.entidad" readonly/>
               </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group>
                    <label>{{ vista_implemento }}</label>
                    <b-form-input v-model="asignacion.implemento" readonly/>
                </b-form-group>
            </b-col>
         </b-row>
         <b-row>
            <b-col md="6" xl="6" v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
               <b-form-group label="Codigo">
                 <b-form-input v-model="asignacion.nroAsi" class="form-control"/>
               </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
                <b-form-group label="Vencimiento">
                    <cleave class="form-control" v-if="asignacion.validar == 'FECHA'" v-model="asignacion.fvencimientoAsi" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
                    <cleave class="form-control" v-else-if="asignacion.validar == 'KILOMETRAJE'" v-model="asignacion.vencimientoAsi" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }"/>
               </b-form-group>
            </b-col>
            <b-col md="6" xl="6" v-if="vista_implemento == 'GENERICO' || vista_implemento == 'EPP'">
               <b-form-group label="Medida">
                  <v-select label="valorDat" v-model="medida" :options="medidas" @input="asignacion.Medida_idDato = medida.idDato" style="flex: 1;"/>
               </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
               <b-form-group label="Costo">
                 <cleave v-model="asignacion.montoAsi" class="form-control" :raw="false" :options="{numeral: true, numeralThousandsGroupStyle: 'none', numeralDecimalScale: 4 }" />
               </b-form-group>
            </b-col>
            <b-col md="6" xl="6" v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
                <b-form-group label="Archivo">
                    <div class="d-flex justify-content-center align-items-center">
                        <a :href="'/LiberAPP/Archivo/Pdf/'+asignacion.idAsignacion" target="_blank">
                            <b-avatar rounded variant="light-primary"size="40" class="mr-50" v-if="asignacion.escaneoAsi == 1">
                                <feather-icon icon="FileIcon" size="18"/>
                            </b-avatar>
                        </a>
                        <div class="user-page-info">
                            <b-form-file accept=".pdf" type="file"
                                v-model="archivo"
                                :state="Boolean(archivo)"
                                placeholder="Seleccione un archivo..."
                                drop-placeholder="Arrastre un archivo aquí..."
                                @change="select_file">
                            </b-form-file>
                        </div>
                    </div>
                </b-form-group>
            </b-col>
            <b-col md="6" xl="6">
               <b-form-group label="Estado">
                  <b-button variant="success" size="sm" @click="asignacion.estadoAsi = 'ANULADO'" v-if="asignacion.estadoAsi == 'VIGENTE'" style="margin-top: 2px;">Vigente</b-button>
                  <b-button variant="danger" size="sm" @click="asignacion.estadoAsi = 'VIGENTE'" v-else-if="asignacion.estadoAsi == 'ANULADO'" style="margin-top: 2px;">Anulado</b-button>
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
               <b-button variant="primary" size="sm" @click="Actualizar" :disabled="showLoading" v-if="accion == 1">
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Actualizar</span>
               </b-button>
               <b-button variant="success" size="sm" @click="Reemplazar" :disabled="showLoading" v-else>
                  <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
                  <b-spinner small v-else/>
                  <span class="align-middle">Renovar</span>
               </b-button>
            </div>
         </template>
         <b-overlay :show="showLoading" no-wrap/>
      </b-modal>

      <b-modal 
        id="modal-pdf" v-model="showModalPdf"
        :header-bg-variant="headerBgVariantPdf" :header-text-variant="headerTextVariantPdf" :title="headerTitleVariantPdf"
        :footer-bg-variant="footerBgVariantPdf" :footer-text-variant="footerTextVariantPdf"
        centered no-close-on-backdrop
        title-tag="div"
        cancel-title="Cancelar" ok-title="Guardar"
        size="xl"
        cancel-variant="secondary" ok-variant="success">
        <b-row>
          <table class="table table-condensed table-bordered table-hover">
            <tr>
              <th>Nro.</th>
              <th>Asignado a</th>
              <th>Implemento</th>
            </tr>
            <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
              <td>{{indice+1}}</td>
              <td>{{useleccionado.nombreEnt}}</td>
              <td>{{useleccionado.implemento}}</td>
            </tr>
          </table>
        </b-row>
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
          <div class="w-100 d-flex justify-content-between">
            <b-button variant="secondary" size="sm" @click="showModalPdf = false" :disabled="showLoading">
              <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
              <b-spinner small v-else/>
              <span class="align-middle">Cancelar</span>
            </b-button>
            <b-button variant="success" size="sm" @click="GenerarPdf" :disabled="showLoading">
              <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
              <b-spinner small v-else/>
              <span class="align-middle">Generar PDF</span>
            </b-button>
          </div>
        </template>
        <b-overlay :show="showLoading" no-wrap/>
    </b-modal>

    <!-------------------------------------------- modal Carga Masiva ---------------------------------------------->
    <b-modal
        id="modal-masivo" v-model="showModalMasivo"
        :header-bg-variant="headerBgVariantMasivo" :header-text-variant="headerTextVariantMasivo" :title="headerTitleVariantMasivo"
        :footer-bg-variant="footerBgVariantMasivo" :footer-text-variant="footerTextVariantMasivo"
        centered no-close-on-backdrop
        title-tag="div"
        cancel-title="Cancelar" ok-title="Guardar"
        size="xl"
        cancel-variant="secondary" ok-variant="success">
        <b-row>
          <b-col md="6" xl="4" v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
               <b-form-group label="Codigo">
                 <b-form-input v-model="masivo.nroAsi" class="form-control"/>
               </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Vencimiento">
                    <cleave class="form-control" v-model="masivo.fvencimientoAsi" :raw="false" placeholder="yyyy-mm-dd" :options="{ date: true, delimiter: '-', datePattern:['Y','m','d'] }" />
               </b-form-group>
          </b-col>
          <b-col md="6" xl="4" v-if="vista_implemento == 'GENERICO' || vista_implemento == 'DOCUMENTO'">
                <b-form-group label="Archivo">
                    <b-form-file accept=".pdf" type="file"
                        v-model="archivo"
                        :state="Boolean(archivo)"
                        placeholder="Seleccione un archivo..."
                        drop-placeholder="Arrastre un archivo aquí..."
                        @change="select_file">
                    </b-form-file>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
          <table class="table table-condensed table-bordered table-hover">
            <tr>
              <th>Nro.</th>
              <th>Asignado a</th>
              <th>Implemento</th>
            </tr>
            <tr v-for="(useleccionado, indice) in seleccionados" :key="indice">
              <td>{{indice+1}}</td>
              <td>{{useleccionado.nombreEnt}}</td>
              <td>{{useleccionado.implemento}}</td>
            </tr>
          </table>
        </b-row>
        <!---------------------------------- modal acciones -------------------------------->
        <template #modal-footer>
          <div class="w-100 d-flex justify-content-between">
            <b-button variant="secondary" size="sm" @click="showModalMasivo = false" :disabled="showLoading">
              <feather-icon icon="XIcon" class="mr-50" v-if="!showLoading"/>
              <b-spinner small v-else/>
              <span class="align-middle">Cancelar</span>
            </b-button>
            <b-button variant="success" size="sm" @click="CargaMasiva" :disabled="showLoading">
              <feather-icon icon="CheckIcon" class="mr-50" v-if="!showLoading"/>
              <b-spinner small v-else/>
              <span class="align-middle">Subir Masivamente</span>
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
      BRow, BCol, BFormGroup, BToast, BFormInput, BFormCheckbox, BForm, BButton, BButtonGroup, BAvatar, BBadge, BPagination, BFormSelect, BAlert, BDropdown, BDropdownItem, BCard, BImg, BCardText, BOverlay, BSpinner, BCardBody, BInputGroup, BInputGroupPrepend, VBToggle, BCollapse, BTabs, BTab,
    } from 'bootstrap-vue'
    import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
    import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
    import vSelect from 'vue-select'
    import Ripple from 'vue-ripple-directive'
    import { VueGoodTable } from 'vue-good-table'
    import store from '@/store/index'
    import Cleave from 'vue-cleave-component'
    import 'cleave.js/dist/addons/cleave-phone.us'
    import flatPickr from 'vue-flatpickr-component'
    import { BFormFile } from 'bootstrap-vue'
    import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
    import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
    import axios from 'axios'

    export default {
        props: { 
            vista_entidad: { 
                type: Number,
                default: 0, 
                required: false,
            },
            vista_area: { 
                type: Number,
                default: 0, 
                required: false,
            },
            vista_nentidad: { 
                type: String,
                default: "", 
                required: false,
            },
            vista_narea: { 
                type: String,
                default: "", 
                required: false,
            },
            vista_implemento: {
                type: String,
                default: "GENERICO", 
                required: false,
            },
      },
        components: {
        AppCollapse,
        AppCollapseItem,
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
        BCard,
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
        Cleave,
        AppTimeline,
        AppTimelineItem,
        flatPickr,
        BTabs,
        BTab,
        BFormFile,
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
                  { label:'ID', field:'idAsignacion'},
                  { label:'Entidad', field:'Entidad_idEntidad'},
                  { label:'Titulo', field:'titulo'},
                  { label:'F.Vencimiento', field:'fvencimientoAsi'},
                  { label:'Monto', field:'montoAsi'},
                  { label:'Observacion', field:'observacionAsi'},
                  { label:'Situacion', field:'situacionAsi'},
                  { label:'F.Situacion', field:'fsituacionAsi'},
                  { label:'E.Situacion', field:'estadoAsi'},
                ],
                /**************************** modal ****************************/
                headerBgVariant: 'dark',
                headerTextVariant: 'success',
                headerTitleVariant: 'EDITAR IMPLEMENTO',
                bodyBgVariant: 'light',
                bodyTextVariant: 'success',
                footerBgVariant: 'dark',
                footerTextVariant: 'dark',
                showModal: false,
                showModalRenovar: false,
                showModalPlanificar: false,
                showModalCampana: false,
                showModalTramitar: false,
                showModalAplazar: false,
                showModalPdf: false,
                showLoading: false,

                /************************** modal pdf ***************************/
                headerBgVariantPdf: 'dark',
                headerTextVariantPdf: 'success',
                headerTitleVariantPdf: 'Generar Pdf',
                bodyBgVariantPdf: 'light',
                bodyTextVariantPdf: 'success',
                footerBgVariantPdf: 'dark',
                footerTextVariantPdf: 'dark',
                showModalPdf: false,

                /************************** modal masivo ***************************/
                headerBgVariantMasivo: 'dark',
                headerTextVariantMasivo: 'success',
                headerTitleVariantMasivo: 'Pdf Masivo',
                bodyBgVariantMasivo: 'light',
                bodyTextVariantMasivo: 'success',
                footerBgVariantMasivo: 'dark',
                footerTextVariantMasivo: 'dark',
                showModalMasivo: false,
                /**************************** entorno ****************************/
                tab: "Editar",
                area:"",
                entidad:"",
                entidades: [], 
                entidad_entidad:[],
                monedas: [],
                areas: [],
                asignaciones: [],
                plantillas: [],
                medidas: [],
                externos: [],
                materiales: [],
                seleccionados: [],
                medida: {},
                situacion: {
                  condicion: '',
                  femisionOrd: '',
                  estadoOrd: 'SOLICITADO',
                  Externo_idExterno: 0,
                  totalOrd: 0,
                  tipoOrd: "SERVICIO",
                  seleccionados: []
               },
               situacion: { 
                    idAsignacion: 0, 
                    fvencimientoAsi:"", 
                    estadoAsi:"",
                    Entidad_idEntidad: 0,
                    titulo:"",
                    situacionAsi:"", 
                    fsituacionAsi:"",
                    Cuenta_idDato:"", 
                    Taller_idDato: "",
                    mantenimientoOrd:"",
                },
                asignacion: {},
                asignacionRenovar: {
                    idAsignacion: 0, 
                    fvencimientoAsi:"", 
                    estadoAsi:"",
                    Entidad_idEntidad: 0,
                    titulo:"",
                    situacionAsi:"", 
                    fsituacionAsi:"",
                },
                ordenc: {
                  femisionOrd:"", 
                  Externo_idExterno:"", 
                  totalOrd:0, 
                  tipoOrd:""
                },
                ordend: {
                  idOrdend:"", 
                  Ordenc_idOrdenc:"", 
                  Material_idMaterial:"", 
                  cantidadOrd:"", 
                  precioOrd:"", 
                  observacionOrd:""
                },
                
                edicion: ["PERMANENTE","POR VENCER","VENCIDO","VIGENTE"],
                /*renovacion: ["EN TRAMITE","PENDIENTE","APLAZADO","PLANIFICADO","TRAMITADO"],*/
                renovacion: ["EN TRAMITE","PLANIFICADO","TRAMITADO"],

                accion: 0,
                tipoOrd: [ 
                  { value: 'COMPRA', text:'COMPRA'},
                  { value: 'SERVICIO', text:'SERVICIO'},
                ],
                vigencia: [
                    { value:'VIGENTE', text:'VIGENTE'},
                    { value:'CADUCO', text:'CADUCO'},
                    { value:'ANULADO', text:'ANULADO'},
                ],
                situacionAsi: [
                    { value:'NINGUNA', text:'NINGUNA'},
                    { value:'TRAMITADO', text:'TRAMITADO'},
                    { value:'OBSERVADO', text:'OBSERVADO'},
                    { value:'APLAZADO', text:'APLAZADO'},
                ],
                narea: "",
                idArea: 0,
                nentidad: "",
                idEntidad: 0,
                plantilla: 0,
                nplantilla: "",
                /**************************** formulario ****************************/
                titulos:[], 
                ycomponente: "", 
                zdetalle: "",
                componentes: [],
                registros:[],
                seleccionados: [],
                arr_trabajos:[],
                activoEditar: false,
                activoModificar: false,
                yexterno: {},
                ymoneda: {},
                entregar: true,


                archivo: null, 
                file2: null,
                clicked: 0,
                cuentas:[],
                talleres:[],
                masivo: { 
                  nroAsi: "", 
                  fvencimientoAsi: "",
                }

            }
        }, 
        /*watch: {
            faqSearchQuery: {
                immediate: true,
                handler()
                {
                    this.fetchData();
                },
            },
        },*/
        methods: {

            select_file( event )
            {
                this.archivo = event.target.files[0];
            },

            guardar_pdf( id )
            { 
                var data = new FormData(); 
                data.append('pdf', this.archivo);
                data.append('id', id);
                data.append('_method','POST');
                axios.post('/LiberAPP/Archivo/Guardar', data).then( response => {
                 
                  var jsonAsignacion = JSON.stringify( response.data );
                  this.$http.post('/LiberAPP/Asignacion/ActualizarEscaneo',
                  {
                    asignacion: jsonAsignacion,
                  }).then( res => { 
                  }).catch( error => {
                    this.Toast(true,'danger','Actualizar','Error al guardar el registro: '+error);
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
            Cargar()
            {
                
                this.showLoading = true;

                this.narea = this.area.nombreAre;
                this.idArea = this.area.idArea;
                this.nentidad = this.entidad.valorDat;
                this.idEntidad = this.entidad.idDato;

                /*this.idEntidad = 287; 
                this.idArea = 4;*/

                this.$http.get('/LiberAPP/Plantilla/ListarSelect/'+ this.idEntidad+'/'+this.idArea).then(res => {
                    this.showLoading = false;
                    this.plantillas = res.data;
                }).catch(error => {
                    this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
            },
            Listar(prm_plantilla,prm_nplantilla)
            {
                //this.entidad.idDato = 287; 
                //this.area.idArea = 4;
                this.showLoading = true;
                this.$http.get('/LiberAPP/Asignacion/ListarPlantilla/'+ this.idEntidad+'/'+this.idArea+'/'+prm_plantilla).then(res => {
                    this.showLoading = false;
                    this.titulos = res.data.titulos; 
                    this.registros = res.data.registros;
                    this.seleccionados = [];
                    this.plantilla = prm_plantilla;
                    this.nplantilla = prm_nplantilla;
                }).catch(error => {
                    this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
            },
            Seleccionar(prm_asignacion,prm_nentidad,prm_ientidad,prm_iexterno,prm_idimplemento)
            {
                var llave = prm_idimplemento;
                var idImplemento = prm_idimplemento.replace('i', '');

                if(Array.isArray(prm_asignacion))
                {
                    prm_asignacion = Object.assign({}, prm_asignacion);
                }

                if(prm_asignacion.sel)
                {
                    prm_asignacion.idEntidad = prm_ientidad;
                    prm_asignacion.idExterno = prm_iexterno;
                    prm_asignacion.nombreEnt = prm_nentidad;
                    prm_asignacion.Implemento_idImplemento = idImplemento;
                    prm_asignacion.implemento = this.titulos[llave]["nom"];
                    prm_asignacion.Implemento_idImplemento = idImplemento;
                    if(!prm_asignacion.idAsignacion)
                        prm_asignacion.idAsignacion = 0;
                    this.seleccionados.push(prm_asignacion);
                }
                else
                {
                    for (var i = 0; i < this.seleccionados.length; i++)
                    {
                        if(this.seleccionados[i].idAsignacion == 0)//si el registro es nuevo
                        {
                            if(this.seleccionados[i].Implemento_idImplemento == idImplemento && this.seleccionados[i].idEntidad == prm_ientidad)
                            {
                                this.seleccionados.splice(i,1);
                                break;
                            }
                        }
                        else if(this.seleccionados[i].idAsignacion == prm_asignacion.idAsignacion)//si el registro existe 
                        {
                            this.seleccionados.splice(i,1);
                            break;
                        }
                    }
                }
            },
            Editar(prm_asignacion,prm_entidad)
            {
                this.headerTextVariant = "primary";
                this.headerTitleVariant = 'EDITAR '+ this.vista_implemento;

                this.showModal = true;
                this.asignacion = prm_asignacion;
                this.asignacion.entidad = prm_entidad;
                this.asignacion.implemento = this.titulos["i"+prm_asignacion.Implemento_idImplemento]["nom"];
                this.asignacion.validar = this.titulos["i"+prm_asignacion.Implemento_idImplemento]["val"];

                var encontrado = this.medidas.filter(function (tmedida)
                {
                    return (tmedida.idDato == prm_asignacion.Medida_idDato);
                },this);

                var umedida = encontrado[0];
                this.medida = umedida;

                this.accion = 1;
            },
            Renovar(prm_asignacion,prm_entidad,prm_identidad,prm_idimplemento)
            {
                var llave = prm_idimplemento;
                var idImplemento = prm_idimplemento.replace('i', '');

                this.headerTextVariant = "success";
                this.headerTitleVariant = 'RENOVAR '+ this.vista_implemento;

                this.showModal = true;
                this.asignacion = Object.assign({}, prm_asignacion);
                this.asignacion.entidad = prm_entidad;
                this.asignacion.Entidad_idEntidad = prm_identidad;
                this.asignacion.implemento = this.titulos[llave]["nom"];
                this.asignacion.Implemento_idImplemento = idImplemento;
                this.asignacion.estadoAsi = "VIGENTE";
                this.asignacion.nroAsi = "";
                this.asignacion.fvencimientoAsi = "";
                this.asignacion.montoAsi = "";
                this.asignacion.validar = this.titulos[llave]["val"];
                
                this.asignacion.tipoAsi = "";
                this.asignacion.escaneoAsi = "";
                this.asignacion.situacionAsi = "NINGUNA";
                this.asignacion.Medida_idDato = null;
                
                if(prm_asignacion == {} || prm_asignacion == [] || prm_asignacion == null)
                {
                    $obj_asignacion.nroAsi = "";
                    $obj_asignacion.fvencimientoAsi = "";
                    $obj_asignacion.tipoAsi = "";
                    $obj_asignacion.escaneoAsi = "";
                    //$obj_asignacion.Entidad_idEntidad = $asignacion->Entidad_idEntidad;
                    $obj_asignacion.montoAsi = 0;
                    $obj_asignacion.situacionAsi = "NINGUNA";
                    $obj_asignacion.Medida_idDato = null;
                }

                var encontrado = this.medidas.filter(function (tmedida)
                {
                    return (tmedida.idDato == prm_asignacion.Medida_idDato);
                },this);

                var umedida = encontrado[0];
                this.medida = umedida;

                this.accion = 0;
            },
            /*Modificar( prm_seleccionados)
            {
              this.activoModificar = true
              this.activoEditar = false
              console.log('prm_modificar:: ', prm_seleccionados)
            },*/
            /*Seleccion( prm_asignacion, titulo)
            {
              prm_asignacion.seleccionado = true;
              prm_asignacion.titulo = titulo;
              for ( var i = 0; i < this.seleccionados.length; i++) 
              {
                if(this.seleccionados[i].idAsignacion == prm_asignacion.idAsignacion)
                {
                  this.seleccionados[i].seleccionado = false;
                  this.seleccionados.splice(i,1);
                  break;
                }
              }

              if(prm_asignacion.seleccionado)
                this.seleccionados.push(prm_asignacion)
            },*/
            Situacion(prm_situacion)
            {
               var seleccionados = [];
               var total = 0;
               var disponibles = [];//stock de materiales disponibles
               var necesarios = [];//cantidad de materiales necesarios

                const fecha = new Date()
                var day = fecha.getDate()
                var month = ("0" + ( fecha.getMonth() + 1 )).slice(-2)
                var year = fecha.getFullYear()
                var ffin = year+'-'+month+'-'+day
                var contP = 0;//Contar preventivos

               for(var j = 0; j < this.seleccionados.length; j++)
               {    
                    if ( this.seleccionados[j]["implemento"] == "L1" || this.seleccionados[j]["implemento"] == "M1" || this.seleccionados[j]["implemento"] == "M2" || 
                         this.seleccionados[j]["implemento"] == "M3" || this.seleccionados[j]["implemento"] == "M4") 
                    {
                      contP++;
                    }

                    var seleccion = this.seleccionados[j];

                    seleccion.implemento = this.titulos["i"+seleccion.Implemento_idImplemento]["nom"];
                    seleccion.material = this.titulos["i"+seleccion.Implemento_idImplemento]["mat"];
                    seleccion.idMaterial = this.titulos["i"+seleccion.Implemento_idImplemento]["imat"];
                    seleccion.stock = this.titulos["i"+seleccion.Implemento_idImplemento]["sto"];
                    seleccion.unidad = this.titulos["i"+seleccion.Implemento_idImplemento]["uni"];
                    seleccion.cantidad = this.titulos["i"+seleccion.Implemento_idImplemento]["can"];
                    seleccion.precio = this.titulos["i"+seleccion.Implemento_idImplemento]["cos"];
                    seleccion.total = (parseFloat(seleccion.cantidad) * parseFloat(seleccion.precio)).toFixed(2);
                    seleccion.observacion = "";// para la acta de entrega de equipos y para la orden de servicios
                    seleccion.renovacion = this.titulos["i"+seleccion.Implemento_idImplemento]["ren"];// valor del tiempo, kilometraje u horometraje de renovacion del implementos(parja el acta de enntrega)
                    seleccion.validacion = this.titulos["i"+seleccion.Implemento_idImplemento]["val"];;// tipo kilometraje o horometraje o fecha (para el acta de entrega)
                    seleccion.vencimiento = "";
                    seleccion.fvencimiento = ffin;
                    //seleccion.fvencimiento = "";
                  
                    //FALTA HACER EL CALCULO DE LA FECHA DE VENCIMIENTO O EL VENCIMIENTO PROXIMO QUE TENDRÁ LA UNIDAD
                    seleccionados.push(seleccion);

                    total += parseInt(seleccion.total);

                    disponibles["m"+seleccion.idMaterial] = parseFloat(seleccion.stock);

                    if(necesarios["m"+seleccion.idMaterial])
                        necesarios["m"+seleccion.idMaterial] += parseFloat(seleccion.cantidad);
                    else
                        necesarios["m"+seleccion.idMaterial] = parseFloat(seleccion.cantidad);

                    /*var k = acumulador + j;
                    var ztramos = this.tramos.filter(function (utramo) { return utramo.idTramo == apeajes[k]; });
                    var ztramo = (ztramos.length > 0) ? ztramos[0] : null;
                    var utramo = {
                            "id": ztramo.idTramo,
                            "punto": ztramo.puntoTra,
                            "peaje": ztramo.peajeTra,
                            "camioneta": ztramo.camionetaTra,
                        };
                    recorridos[i].tramos.push(utramo);*/
                }

                //VERIFICAR SI EL STOCK SE VA A DAR CONFORME AL QUE SE TIENE AL ALMACÉN
                let claves = Object.keys(disponibles);
                var entregar = true;

                for(var j = 0; j < claves.length; j++)
                {
                    var clave = claves[j];
                    if(disponibles[clave] < necesarios[clave])
                        entregar = false;
                }
                this.entregar = entregar; // para habilitar el boton de generar acta de entrega

                var subtotal = total/1.18;
                var igv = subtotal*0.18;

                subtotal = subtotal.toFixed(2);
                igv = igv.toFixed(2);

                this.situacion = {
                    condicion: prm_situacion,
                    femisionOrd: "",
                    //fcreacionOrd = "",
                    //faprobacionOrd = "",
                    estadoOrd: "SOLICITADO",
                    Externo_idExterno: 0,
                    totalOrd: total,
                    //Usuario_idUsuario = ,
                    tipoOrd: "SERVICIO",
                    seleccionados: seleccionados,
                    //observacionOrd
                    subtotalOrd: subtotal,
                    impuestoOrd: 18,
                    igvOrd: igv,
                    adelantoOrd: 0,
                    pagoOrd: "CONTADO",
                    fpagoOrd: "",//LA FECHA DE PAGO SERA LA FECHA DE REVISIÓN
                    //detraccionOrd
                    Moneda_idDato: 0,
                    Area_idArea: this.idArea,
                    area: this.narea,
                    faplazamiento: "",
                    mantenimientoOrd: "PREVENTIVO",

                    /*Entidad_idEntidad
                    implemento
                    nroAsi
                    fvencimientoAsi
                    Medida_idDato
                    montoAsi
                    estadoAsi*/

                    //Inversion_idDato: 

                    //crear igv porcentaje

                    //crear area
               };

               this.yexterno = {};
               this.ymoneda = {};

               switch(prm_situacion)
               {
                  case "ENTREGADO":
                      this.headerTitleVariant = 'RENOVAR IMPLEMENTOS';
                      break;
                  case "PLANIFICADO":
                      this.headerTitleVariant = 'GENERAR ORDEN DE TRABAJO';
                      this.situacion.Taller_idDato = 300;
                      break;
                  case "CAMPANA":
                      this.headerTitleVariant = 'GENERAR ORDEN DE TRABAJO';
                      this.situacion.Taller_idDato = 300;
                      this.situacion.mantenimientoOrd = 'CAMPAÑA';
                      break;
                  case "TRAMITADO":
                      this.headerTitleVariant = 'GENERAR ORDEN DE SERVICIO';
                      break;
                  case "APLAZADO":
                      this.headerTitleVariant = 'POSTERGAR';
                      break;
                  default:
                      this.headerTitleVariant = '';
                      break;
               }


            /*this.showModal = true;
              this.asignacion = prm_asignacion;
              this.asignacion.entidad = prm_entidad;
              this.asignacion.implemento = this.titulos["i"+prm_asignacion.Implemento_idImplemento];

               var encontrado = this.medidas.filter(function (tmedida)
               {
                   return (tmedida.idDato == prm_asignacion.Medida_idDato);
               },this);

               var umedida = encontrado[0];
               this.medida = umedida;*/

               /*this.showModal = true;
               this.asignacion = prm_asignacion;
               this.asignacion.entidad = prm_entidad;
               this.asignacion.implemento = this.titulos["i"+prm_asignacion.Implemento_idImplemento];

               var encontrado = this.medidas.filter(function (tmedida)
               {
                   return (tmedida.idDato == prm_asignacion.Medida_idDato);
               },this);

               var umedida = encontrado[0];
               this.medida = umedida;*/

            },
            CalcularTotal()
            {
                var total = 0;
                var subtotal = 0;
                var igv = 0;

                for (var i = 0; i < this.situacion.seleccionados.length; i++)
                {
                    var useleccionado = this.situacion.seleccionados[i];
                    var utotal = useleccionado.precio * useleccionado.cantidad;
                    
                    this.situacion.seleccionados[i].total = utotal;
                    total += utotal;
                }

                subtotal = total * 100 /(parseFloat(this.situacion.impuestoOrd) + 100);
                igv = total - subtotal;

                this.situacion.subtotalOrd = subtotal.toFixed(2);
                this.situacion.totalOrd = total.toFixed(2);
                this.situacion.igvOrd = igv.toFixed(2);
            },
            /*Guardar()
            {

              if (this.ordenc.Externo_idExterno == null || this.ordenc.Externo_idExterno == "" )
              {
                this.Toast(true,'warning','Proveedor Implemento','Seleccione Proveedor Implemento'); 
                return; 
              }
              if (this.ordenc.femisionOrd == null || this.ordenc.femisionOrd == "") 
              {
                this.Toast(true,'warning','Fecha Emisión','Ingrese fecha Emisión'); 
                return;
              }
              if (this.ordenc.totalOrd == null || this.ordenc.totalOrd == 0)
              {
                this.Toast(true,'warning','Total','Ingrese Total'); 
                return;
              }
              if ( this.ordenc.tipoOrd == null || this.ordenc.tipoOrd == "")
              {
                this.Toast(true,'warning','Tipo Orden','Seleccione Tipo Orden'); 
                return;
              }
              if(this.ordend.cantidadOrd == null || this.ordend.cantidadOrd == "") 
              {
                this.Toast(true,'warning','Cantidad','Ingrese Cantidad'); 
                return;
              }
              if (this.ordend.precioOrd == null || this.ordend.precioOrd == "")
              {
                this.Toast(true,'warning','Precio','Ingrese Precio'); 
                return;
              }
              if(this.ordend.Material_idMaterial == null || this.ordend.Material_idMaterial == "")
              {
                this.Toast(true,'warning','Material','Seleccione un Material'); 
                return;
              }

              var jsonSelecionados = JSON.stringify(this.seleccionados)
              var jsonOrdenc = JSON.stringify(this.ordenc)
              var jsonOrdend = JSON.stringify(this.ordend)

              this.$http.post('/LiberAPP/Ordenc/Guardar', 
              {
                seleccionados: jsonSelecionados, 
                ordenc: jsonOrdenc, 
                ordend: jsonOrdend,
              }).then( res => {
                this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                this.showModal = false;
                this.showLoading = false;
                this.Listar();
                this.seleccionados = [];
                this.ordenc = []; 
                this.ordend = [];
              }).catch( error => {
                this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                this.showLoading = false;
              })
            },*/
            Actualizar()
            {
               this.showLoading = true;
               var jsonAsignacion = JSON.stringify(this.asignacion)
               /*console.log(this.asignacion);
               console.log(jsonAsignacion);
               return;*/
               this.$http.post('/LiberAPP/Asignacion/Actualizar',
               {
                 asignacion: jsonAsignacion,
               }).then( res => { 
                 this.Toast(true,'success','Actualizar','Guardado Correctamente');
                 this.showModal = false;
                 this.showLoading = false;

                 this.Listar(this.plantilla,this.nplantilla);

                 if(this.archivo != null)
                    this.guardar_pdf(this.asignacion.idAsignacion);

                 //this.Listar(); /////quedapendiente solo actualizar el archivo o el que se ha hecho la modificacion
               }).catch( error => {
                 this.Toast(true,'danger','Actualizar','Error al guardar el registro: '+error);
                 this.showLoading = false;
               })
            },
            Reemplazar()
            {
                //console.log(this.asignacion);

                this.showLoading = true;
                var jsonAsignacion = JSON.stringify(this.asignacion)

                /*console.log(jsonAsignacion);
                return;*/
                this.$http.post('/LiberAPP/Asignacion/Reemplazar',
                {
                    asignacion: jsonAsignacion,
                }).then( res => { 
                    this.Toast(true,'success','Renovar Asignación','Guardado Correctamente');
                    this.showModal = false;
                    this.showLoading = false;
                    
                    this.Listar(this.plantilla,this.nplantilla);

                    //console.log(res.data);
                    if(this.archivo != null)
                        this.guardar_pdf(res.data);
                    //this.Listar(); /////quedapendiente solo actualizar el archivo o el que se ha hecho la modificacion
                }).catch( error => {
                    this.Toast(true,'danger','Reemplazar','Error al guardar el registro: '+error);
                    this.showLoading = false;
               })
            },
            /*GenerarOrden()
            {

            },*/
            Entregar()//Acta de Entrega de Equipos
            {
                this.showLoading = true;
                //enviar el id del que hizo la entrega y guardar la hora en la que se hizo la entrega

                /*if (this.situacion.femisionOrd == null || this.situacion.femisionOrd == "")
                {
                    this.Toast(true,'warning','Orden de Compra/Servicio','Ingrese Fecha de Emisión');
                    return;
                }*/
                /*if (this.ordenc.tipoOrd == null || this.ordenc.tipoOrd == "")
                {
                    this.Toast(true,'warning','Tipo Orden','Seleccione Tipo Orden'); 
                    return;
                }*/


                
                var correcto = true;
                
                for (var i = 0; i < this.situacion.seleccionados.length; i++)
                {
                    var useleccionado = this.situacion.seleccionados[i];
                    
                    if(useleccionado.fvencimiento.length != 10)
                        correcto = false;
                }

                if(!correcto)
                {
                    this.Toast(true,'warning','Acta de Entrega','Ingrese las Fechas de Vencimiento'); 
                    this.showLoading = false;
                    return;
                }

                var jsonSituacion = JSON.stringify(this.situacion);

                this.$http.post('/LiberAPP/Asignacion/Situacion/ENTREGAR',
                {
                    situacion: jsonSituacion,
                }).then( res => {
                    this.Toast(true,'success','Renovar','Guardado Correctamente');
                    this.showModalRenovar = false;
                    this.showLoading = false;
                    this.seleccionados = [];
                    /*this.ordenc = []; 
                    this.ordend = [];*/
                    this.Listar(this.plantilla,this.nplantilla);

                    //console.log(res.data);
                    window.open('/LiberAPP/Asignacion/PdfActaEntrega/'+res.data, '_blank');

                }).catch( error => {
                    this.Toast(true,'success','Generar Acta Entrega','No se Pudo Generar los Registros');
                    this.showLoading = false;
                })
            },
            Planificar()//Orden de Trabajo
            {
                var jsonSituacion = JSON.stringify(this.situacion);
                this.$http.post('/LiberAPP/Asignacion/Situacion/PLANIFICAR', 
                {
                    situacion: jsonSituacion,
                }).then( res => {
                  /*for ( var i = 0; i < res.data.length; i++) 
                  {
                    window.open('/LiberAPP/Ordent/Pdf/'+res.data[i], '_blank');
                  }*/
                  this.Toast(true,'success','Generar Orden','Guardado Correctamente');
                  this.showModalPlanificar = false;
                  this.showLoading = false;
                  this.seleccionados = [];
                  this.Listar(this.plantilla,this.nplantilla);
                }).catch( error => {
                    this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                    this.showLoading = false;
                })
            },
            PlanificarCampana()
            {
              this.situacion.trabajos = this.arr_trabajos;
              this.situacion.observacion = this.seleccionados[0].implemento;
              var jsonSituacion = JSON.stringify(this.situacion);
                this.$http.post('/LiberAPP/Asignacion/Situacion/PLANIFICAR', 
                {
                    situacion: jsonSituacion,
                }).then( res => {
                  this.Toast(true,'success','Generar Orden','Guardado Correctamente');
                  this.showModalCampana = false;
                  this.showLoading = false;
                  this.seleccionados = [];
                  this.arr_trabajos = [];
                  this.Listar(this.plantilla,this.nplantilla);
                }).catch( error => {
                    this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                    this.showLoading = false;
                })
              //console.log('Planificar Campana ::', this.situacion);
            },
            AgregarTrabajos() 
            {
              if ( this.ycomponente == null || this.ycomponente == "" )
              {
                this.Toast(true,'warning','Trabajos','Seleccione un Componente');
                return;
              }
              console.log('seleccionados:: ', this.seleccionados[0].implemento);
              var utrabajo = { 
                id: this.ycomponente.id, 
                componentes: this.ycomponente.com,
                falla: this.seleccionados[0].implemento, 
                //falla: this.situacion.observacion, 
              }
              this.arr_trabajos.push(utrabajo);
              this.ycomponente = "";
            },
            EliminarTrabajo( prm_indice )
            {
              this.arr_trabajos.splice( prm_indice, 1);
            },
            Tramitar()//Orden de Servicio
            {
                if (this.situacion.Externo_idExterno == null || this.situacion.Externo_idExterno == "" )
                {
                    this.Toast(true,'warning','Orden de Compra/Servicio','Seleccione Proveedor');
                    return; 
                }
                if (this.situacion.Moneda_idDato == null || this.situacion.Moneda_idDato == 0)
                {
                    this.Toast(true,'warning','Orden de Compra/Servicio','Ingrese Moneda');
                    return;
                }
                if (this.situacion.femisionOrd == null || this.situacion.femisionOrd == "")
                {
                    this.Toast(true,'warning','Orden de Compra/Servicio','Ingrese Fecha de Emisión');
                    return;
                }
                if (this.situacion.faplazamiento == null || this.situacion.faplazamiento == "")
                {
                    this.Toast(true,'warning','Orden de Compra/Servicio','Ingrese Fecha de Revisión');
                    return;
                }

                var jsonSituacion = JSON.stringify(this.situacion);

                this.$http.post('/LiberAPP/Asignacion/Situacion/TRAMITAR', 
                {
                    situacion: jsonSituacion,
                }).then( res => {
                    this.Toast(true,'success','Generar Orden','Guardado Correctamente');
                    this.showModalTramitar = false;
                    this.showLoading = false;
                    this.seleccionados = [];
                    /*this.ordenc = []; 
                    this.ordend = [];*/
                    this.Listar(this.plantilla,this.nplantilla);
                    window.open('/LiberAPP/Ordenc/Pdf/'+ res.data, '_blank');

                }).catch( error => {
                    this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                    this.showLoading = false;
                })
            },
            Aplazar()//Actualización Masiva
            {
                /*if (this.situacion.faplazamiento == null || this.situacion.faplazamiento == "")
                {
                    this.Toast(true,'warning','Aplazar','Ingrese Fecha de Aplazamiento');
                    return;
                }*/

                var jsonSituacion = JSON.stringify(this.situacion);

                this.$http.post('/LiberAPP/Asignacion/Situacion/APLAZAR',
                {
                    situacion: jsonSituacion,
                }).then( res => {
                    /*console.log("fea");
                    console.log(res.data);*/
                    this.Toast(true,'success','Aplazar','Guardado Correctamente');
                    this.showModalAplazar = false;
                    this.showLoading = false;
                    this.seleccionados = [];
                    this.Listar(this.plantilla,this.nplantilla);
                }).catch( error => {
                    this.Toast(true,'success','Actualizar Orden','Guardado Correctamente');
                    this.showLoading = false;
                })
            },
            GenerarPdf()
            {
                var implemenentos = [];
                var hash = {};
                var hash2 = {}; 
                var seleccionadosCopia = this.seleccionados.slice(); 
                var detalle = "";
                seleccionadosCopia = seleccionadosCopia.filter( function( current ) { 
                  var exists = !hash[current.Entidad_idEntidad]; 
                  hash[current.Entidad_idEntidad] = true;
                  return exists;
                })     

                for ( let i = 0; i < seleccionadosCopia.length; i++ ) 
                {
                  implemenentos = [];
                  for ( let j = 0; j < this.seleccionados.length; j++ )
                  {
                    if ( seleccionadosCopia[i].Entidad_idEntidad == this.seleccionados[j].Entidad_idEntidad) 
                    {
                      implemenentos.push( this.seleccionados[j].Implemento_idImplemento)

                    }
                  }

                  var jsonImplementos = JSON.stringify( implemenentos );
                  detalle = JSON.stringify( this.seleccionados );
                  const ventana = window.open('/LiberAPP/Archivo/Pdf/'+ seleccionadosCopia[i].Entidad_idEntidad + '/' + this.seleccionados[i].idAsignacion + '/' + jsonImplementos, '_blank');
                    //const ventana = window.open('/LiberAPP/Archivo/Pdf/'+ seleccionadosCopia[i].Entidad_idEntidad + '/' + this.seleccionados[i].idAsignacion, '_blank');
                    /*setTimeout( function() { 
                      ventana.close();
                    }, 10000);*/
                }
                
                this.showLoading = true;
                var jsonSeleccionados = JSON.stringify(this.seleccionados)
                this.$http.post('/LiberAPP/Archivo/Fusionar',{ asignacion: jsonSeleccionados, }).then( res => {
                  for ( let i = 0; i < res.data.length; i++) 
                  {
                    window.open('http://liberapp.grupolibertad.pe/LiberAPP/Archivo/Pdf/'+ res.data[i], '_blank');
                    /*this.$http.get('/LiberAPP/Archivo/Pdf/1454').then(res => { 
                    
                    }).catch( error => { 
                      this.Toast(true,'danger','Medidas','Error al cargar los registros: '+error);
                    });*/

                    //window.open('http://192.168.0.106/full-version/public/archivos/operaciones/'+ res.data[i] +'.pdf', '_blank');
                    //window.open(res.data[i], '_blank');
                  }
                    this.showLoading = false;
                    this.showModalPdf = false;
                  }).catch( error => { 
                    this.Toast(true,'danger','Generar Pdf','Error al generar Pdf ' + error);
                    this.showLoading = false;
                  })
            }, 
            CargaMasiva() 
            {
              if ( this.masivo.nroAsi == "" || this.masivo.nroAsi == null ) 
              {
                this.Toast(true,'warning','Código','Ingrese Código ');
                this.showLoading = false;
                return;
              }

              if ( this.masivo.fvencimientoAsi == "" || this.masivo.fvencimientoAsi == null ) 
              {
                this.Toast(true,'warning','Vencimiento','Ingrese Vencimiento');
                this.showLoading = false;
                return;
              }

              if ( this.archivo == "" || this.archivo == null ) 
              {
                this.Toast(true,'warning','Archivo','Seleccione un Archivo');
                this.showLoading = false;
                return;
              }

              this.showLoading = true;
              var jsonSeleccionados = JSON.stringify( this.seleccionados ); 
              var jsonMasivo = JSON.stringify( this.masivo );
              this.$http.post('/LiberAPP/Asignacion/CargaMasivo',{ asignacion: jsonSeleccionados, masivo: jsonMasivo }).then( res => {
                for ( let i = 0; i < res.data.length; i++) 
                {
                    if(this.archivo != null)
                        this.guardar_pdf(res.data[i]);
                }
                
                this.masivo = { 
                  nroAsi: "", 
                  fvencimientoAsi: "",
                };
                this.archivo = null;
                this.showLoading = false;
                this.showModalMasivo = false;
                this.Listar(this.plantilla,this.nplantilla);
              }).catch( error => { 
                  this.Toast(true,'danger','Carga Masiva','Error al cargar masivamente' + error);
                  this.showLoading = false;
              })
            }
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

            //this.situacion.area = this.vista_area;
            this.entidad =  {
                idDato: this.vista_entidad, 
                valorDat: this.vista_nentidad,
            }; 
            this.area = { 
              idArea: this.vista_area,
              nombreAre: this.vista_narea,
            };
            
            //vista_implemento
            if(this.vista_implemento == "GENERICO")//Si es Generico se Listan las Entidades y las Areas para Seleccionar
            {
                this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(res => {
                    this.entidades = res.data;
                }).catch(error => {
                    this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
                this.$http.get('/LiberAPP/Area/Select').then(res => {
                    this.areas = res.data;
                }).catch(error => {
                    this.Toast(true,'danger','Area','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
            } else {
                this.showLoading = true;
                this.narea = this.area.nombreAre;
                this.idArea = this.area.idArea;
                this.nentidad = this.entidad.valorDat;
                this.idEntidad = this.entidad.idDato;

                this.$http.get('/LiberAPP/Plantilla/ListarSelect/'+ this.idEntidad+'/'+this.idArea).then(res => {
                    this.showLoading = false;
                    this.plantillas = res.data;
                }).catch(error => {
                    this.Toast(true,'danger','Asignación','Error al cargar los registros: '+error);
                    this.showLoading = false;
                });
            }

            this.$http.get('/LiberAPP/Externo/Select')
            .then(res => {
                this.externos = res.data;
            })
            .catch(error => {
                this.Toast(true,'danger','Externo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });
            /*this.$http.get('/LiberAPP/Entidad/Listar').then(res => {
                this.entidad_entidad = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Entidad_Entidad','Error al cargar los registros: '+error);
                this.showLoading = false;
            });*/
            this.$http.get('/LiberAPP/Dato/Select/MEDIDA/LOGISTICA').then(res => { 
              this.medidas = res.data;
            }).catch( error => { 
              this.Toast(true,'danger','Medidas','Error al cargar los registros: '+error);
              this.showLoading = false;
            });
            this.$http.get('/LiberAPP/Dato/Select/MONEDA/LOGISTICA').then(res => { 
              this.monedas = res.data;
            }).catch( error => { 
              this.Toast(true,'danger','Medidas','Error al cargar los registros: '+error);
              this.showLoading = false;
            });
            this.$http.get('/LiberAPP/Material/Listar').then(res => {
              this.materiales = res.data;
            }).catch( error => { 
              this.Toast(true,'danger','Material','Error al cargar los registros: '+error);
              this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA PESADA').then(res => {
             //this.pcomponentes = res.data.componentes;
              //this.pidReporte = res.data.reporte;
              //this.pversionRep = res.data.version;
              this.componentes = res.data.componentes;
              //this.idReporte = res.data.reporte;
              //this.versionRep = res.data.version;
            }).catch(error => {
              this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
              this.showLoading = false;
            });

          /*this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA LIVIANA').then(res => {
            this.lcomponentes = res.data.componentes;
            this.lidReporte = res.data.reporte;
            this.lversionRep = res.data.version;
          }).catch(error => {
            this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
            this.showLoading = false;
          });*/

            this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(res => {
                this.cuentas = res.data;
            }).catch(error => {
                this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
                this.showLoading = false;
            });

            this.$http.get('/LiberAPP/Dato/Select/TALLER/MANTENIMIENTO').then(res => {
              this.talleres = res.data;
            }).catch(error => {
              this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
              this.showLoading = false;
        });
        }
    }
</script>
<style lang="scss" >
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    @import '~@core/scss/vue/libs/vue-select.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss'; // Selector de fecha 
</style>

<style scoped>
    .leyenda
    {
        text-align: center;
        width: 100%;
    }

    .otabla
    {
        height: 70vh;
        overflow: scroll;
        position: relative;
    }
    .otabla .table
    {
        position: relative;
    }
    /*fila fija*/
    thead th /*fijar filas thead*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
        z-index: 1;
    }
    thead tr:nth-child(1) th/*posicionar primera fila */
    {
      top: 0;
    }
    thead tr:nth-child(2) th/*posicionar segunda fila*/
    {
      top: 22pt;
    }
    /*columna fija*/
    thead tr:nth-child(1) th:first-child/*posicionar primera columna thead*/
    {
        left: 0;
        z-index: 1;
    }
    thead tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna thead*/
    {
        left: 25pt;
        z-index: 1;
    }
    /*thead tr:nth-child(1) th:last-child/*posicionar ultima columna thead*/
    /*{
        z-index: 1;
    }*/
    tfoot th/*fijar filas tfoot*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background-color: rgb(75,75,75) !important;
        color: white !important;
    }
    tfoot tr:nth-child(1) th:first-child/*posicionar primera columna tfoot*/
    {
        left: 0;
        z-index: 1;
    }
    tfoot tr:nth-child(1) th:nth-child(2)/*posicionar segunda columna tfoot*/
    {
        left: 25pt;
        z-index: 1;
    }

    tbody th/*fijar columnas*/
    {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        background-color: rgb(75,75,75) !important;
        color: white !important;
        z-index: 1;
    }
    tbody tr th:nth-child(1)/*posicionar primera columna*/
    {
      left: 0;
    }
    tbody tr th:nth-child(2)/*posicionar segunda columna*/
    {
      left: 25pt;
    }

    /*.table tr td:nth-child(2), .table tr td:nth-last-child(7)*/
    .table tbody th
    {
        /*min-width: 120pt !important;*/
        font-weight: bold;
        white-space: nowrap;
    }
    .table th, .table td
    {
        padding-left: 0.8rem !important;
        padding-right: 0.8rem !important;
        text-align: center !important;
    } 
    /*animacion para cada dia*/
    .oact
    {
        cursor: pointer;
    }
    .oact:hover
    {
        box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,1);
    }
    .oina
    {
        background-color: rgb(200, 199, 204);
        color: rgb(142, 142, 147);
    }
    .omini
    {
        font-size: 7pt;
        font-weight: bold;
    }
    .osombreado
    {
        background-color: rgba(128,128,128,1);
        color: white !important;
    }
    .ohora
    {
        margin-top: 2pt;
        display:  block;
    }


.asistencia
{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    border-radius: 15%;
    font-weight: bold !important;
    font-size: 0.8rem !important;
}

.btn-defaultz {
  background-color: #ffffff;
  border-color: #c8c7cc;
  color: #8e8e93;
}
.btn-defaultz:hover {
  background-color: #ffffff;
  border-color: #bbbac0;
  color: #8e8e93 !important;
}
.btn-defaultz:active, .btn-defaultz.active, .btn-defaultz.active:focus, .btn-defaultz:active:focus, .btn-defaultz:active:hover {
  background-color: #f8f8f8;
  border-color: #d5d4d8;
  color: #5b5b60 !important;
}
.btn-defaultz:focus {
  background-color: #ffffff;
  border-color: #bbbac0;
  color: #5b5b60 !important;
}
.btn-defaultz.disabled:hover, .btn-defaultz.disabled:focus, .btn-defaultz.disabled:active, .btn-defaultz.disabled.active, .btn-defaultz[disabled], .btn-defaultz[disabled]:hover, .btn-defaultz[disabled]:focus, .btn-defaultz[disabled]:active, .btn-defaultz[disabled].active, fieldset[disabled] .btn-defaultz:hover, fieldset[disabled] .btn-defaultz:focus, fieldset[disabled] .btn-defaultz:active, fieldset[disabled] .btn-defaultz.active {
  background-color: #ffffff;
  border-color: #e2e2e4;
  color: #cfcfd1;
}

/*********************************************/
.btn-primaryz {
  background-color: #007AFF;
  border-color: #007AFF;
  color: #ffffff;
}
.btn-primaryz:hover {
  background-color: #3395ff !important;
  border-color: #3395ff;
  color: #ffffff;
}
.btn-primaryz:active, .btn-primaryz.active, .btn-primaryz.active:focus, .btn-primaryz:active:focus, .btn-primaryz:active:hover, .btn-primaryz.dropdown-toggle:active:hover {
  background-color: #006ee6 !important;
  border-color: #006ee6;
}
.btn-primaryz:focus {
  background-color: #4da2ff;
  border-color: #4da2ff;
}
.btn-primaryz.disabled:hover, .btn-primaryz.disabled:focus, .btn-primaryz.disabled:active, .btn-primaryz.disabled.active, .btn-primaryz[disabled], .btn-primaryz[disabled]:hover, .btn-primaryz[disabled]:focus, .btn-primaryz[disabled]:active, .btn-primaryz[disabled].active, fieldset[disabled] .btn-primaryz:hover, fieldset[disabled] .btn-primaryz:focus, fieldset[disabled] .btn-primaryz:active, fieldset[disabled] .btn-primaryz.active {
  background-color: #66afff;
  border-color: #66afff;
  color: #ffffff;
}
.btn-primaryz.btn-o {
  border: 1px solid #007AFF;
  color: #007AFF;
}
.btn-primaryz.btn-o:hover {
  /*color: #3395ff;
  border-color: #3395ff;*/
  background: none !important;
}
.btn-primaryz.btn-o:active, .btn-primaryz.btn-o.active, .btn-primaryz.btn-o.active:focus, .btn-primaryz.btn-o:active:focus, .btn-primaryz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #0055b3 !important;
  color: #0055b3 !important;
}
.btn-primaryz.btn-o:focus {
  background-color: #66afff;
  border-color: #66afff;
  color: #3395ff;
}
.btn-primaryz.btn-o.disabled:hover, .btn-primaryz.btn-o.disabled:focus, .btn-primaryz.btn-o.disabled:active, .btn-primaryz.btn-o.disabled.active, .btn-primaryz.btn-o[disabled], .btn-primaryz.btn-o[disabled]:hover, .btn-primaryz.btn-o[disabled]:focus, .btn-primaryz.btn-o[disabled]:active, .btn-primaryz.btn-o[disabled].active, fieldset[disabled] .btn-primaryz.btn-o:hover, fieldset[disabled] .btn-primaryz.btn-o:focus, fieldset[disabled] .btn-primaryz.btn-o:active, fieldset[disabled] .btn-primaryz.btn-o.active {
  border-color: #66afff;
  color: #66afff;
}

/*********************************************/
.btn-successz {
  background-color: #5cb85c;
  border-color: #5cb85c;
  color: #ffffff;
}
.btn-successz:hover {
  background-color: #80c780 !important;
  border-color: #80c780;
  color: #ffffff;
}
.btn-successz:active, .btn-successz.active, .btn-successz.active:focus, .btn-successz:active:focus, .btn-successz:active:hover, .btn-successz.dropdown-toggle:active:hover {
  background-color: #4cae4c !important;
  border-color: #4cae4c;
}
.btn-successz:focus {
  background-color: #91cf91;
  border-color: #91cf91;
}
.btn-successz.disabled:hover, .btn-successz.disabled:focus, .btn-successz.disabled:active, .btn-successz.disabled.active, .btn-successz[disabled], .btn-successz[disabled]:hover, .btn-successz[disabled]:focus, .btn-successz[disabled]:active, .btn-successz[disabled].active, fieldset[disabled] .btn-successz:hover, fieldset[disabled] .btn-successz:focus, fieldset[disabled] .btn-successz:active, fieldset[disabled] .btn-successz.active {
  background-color: #a3d7a3;
  border-color: #a3d7a3;
  color: #ffffff;
}
.btn-successz.btn-o {
  border: 1px solid #5cb85c;
  color: #5cb85c;
}
.btn-successz.btn-o:hover {
  /*color: #80c780;
  border-color: #80c780;*/
  background: none !important;
}
.btn-successz.btn-o:active, .btn-successz.btn-o.active, .btn-successz.btn-o.active:focus, .btn-successz.btn-o:active:focus, .btn-successz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #3d8b3d !important;
  color: #3d8b3d !important;
}
.btn-successz.btn-o:focus {
  background-color: #a3d7a3;
  border-color: #a3d7a3;
  color: #80c780;
}
.btn-successz.btn-o.disabled:hover, .btn-successz.btn-o.disabled:focus, .btn-successz.btn-o.disabled:active, .btn-successz.btn-o.disabled.active, .btn-successz.btn-o[disabled], .btn-successz.btn-o[disabled]:hover, .btn-successz.btn-o[disabled]:focus, .btn-successz.btn-o[disabled]:active, .btn-successz.btn-o[disabled].active, fieldset[disabled] .btn-successz.btn-o:hover, fieldset[disabled] .btn-successz.btn-o:focus, fieldset[disabled] .btn-successz.btn-o:active, fieldset[disabled] .btn-successz.btn-o.active {
  border-color: #a3d7a3;
  color: #a3d7a3;
}

/*********************************************/
.btn-infoz {
  background-color: #46b8da;
  border-color: #46b8da;
  color: #ffffff;
}
.btn-infoz:hover {
  background-color: #71c8e2 !important;
  border-color: #71c8e2;
  color: #ffffff;
}
.btn-infoz:active, .btn-infoz.active, .btn-infoz.active:focus, .btn-infoz:active:focus, .btn-infoz:active:hover, .btn-infoz.dropdown-toggle:active:hover {
  background-color: #31b0d6 !important;
  border-color: #31b0d6;
}
.btn-infoz:focus {
  background-color: #86d0e7;
  border-color: #86d0e7;
}
.btn-infoz.disabled:hover, .btn-infoz.disabled:focus, .btn-infoz.disabled:active, .btn-infoz.disabled.active, .btn-infoz[disabled], .btn-infoz[disabled]:hover, .btn-infoz[disabled]:focus, .btn-infoz[disabled]:active, .btn-infoz[disabled].active, fieldset[disabled] .btn-infoz:hover, fieldset[disabled] .btn-infoz:focus, fieldset[disabled] .btn-infoz:active, fieldset[disabled] .btn-infoz.active {
  background-color: #9bd9eb;
  border-color: #9bd9eb;
  color: #ffffff;
}
.btn-infoz.btn-o {
  border: 1px solid #46b8da;
  color: #46b8da;
}
.btn-infoz.btn-o:hover {
  /*color: #71c8e2;
  border-color: #71c8e2;*/
  background: none !important;
}
.btn-infoz.btn-o:active, .btn-infoz.btn-o.active, .btn-infoz.btn-o.active:focus, .btn-infoz.btn-o:active:focus, .btn-infoz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #2390b0 !important;
  color: #2390b0 !important;
}
.btn-infoz.btn-o:focus {
  background-color: #9bd9eb;
  border-color: #9bd9eb;
  color: #71c8e2;
}
.btn-infoz.btn-o.disabled:hover, .btn-infoz.btn-o.disabled:focus, .btn-infoz.btn-o.disabled:active, .btn-infoz.btn-o.disabled.active, .btn-infoz.btn-o[disabled], .btn-infoz.btn-o[disabled]:hover, .btn-infoz.btn-o[disabled]:focus, .btn-infoz.btn-o[disabled]:active, .btn-infoz.btn-o[disabled].active, fieldset[disabled] .btn-infoz.btn-o:hover, fieldset[disabled] .btn-infoz.btn-o:focus, fieldset[disabled] .btn-infoz.btn-o:active, fieldset[disabled] .btn-infoz.btn-o.active {
  border-color: #9bd9eb;
  color: #9bd9eb;
}

/*********************************************/
.btn-warningz {
  background-color: #eea236;
  border-color: #eea236;
  color: #ffffff;
}
.btn-warningz:hover {
  background-color: #f2b865 !important;
  border-color: #f2b865;
  color: #ffffff;
}
.btn-warningz:active, .btn-warningz.active, .btn-warningz.active:focus, .btn-warningz:active:focus, .btn-warningz:active:hover, .btn-warningz.dropdown-toggle:active:hover {
  background-color: #ec971e !important;
  border-color: #ec971e;
}
.btn-warningz:focus {
  background-color: #f4c37d;
  border-color: #f4c37d;
}
.btn-warningz.disabled:hover, .btn-warningz.disabled:focus, .btn-warningz.disabled:active, .btn-warningz.disabled.active, .btn-warningz[disabled], .btn-warningz[disabled]:hover, .btn-warningz[disabled]:focus, .btn-warningz[disabled]:active, .btn-warningz[disabled].active, fieldset[disabled] .btn-warningz:hover, fieldset[disabled] .btn-warningz:focus, fieldset[disabled] .btn-warningz:active, fieldset[disabled] .btn-warningz.active {
  background-color: #f6ce94;
  border-color: #f6ce94;
  color: #ffffff;
}
.btn-warningz.btn-o {
  border: 1px solid #eea236;
  color: #eea236;
}
.btn-warningz.btn-o:hover {
  /*color: #f2b865;
  border-color: #f2b865;*/
  background: none !important;
}
.btn-warningz.btn-o:active, .btn-warningz.btn-o.active, .btn-warningz.btn-o.active:focus, .btn-warningz.btn-o:active:focus, .btn-warningz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c77c11 !important;
  color: #c77c11 !important;
}
.btn-warningz.btn-o:focus {
  background-color: #f6ce94;
  border-color: #f6ce94;
  color: #f2b865;
}
.btn-warningz.btn-o.disabled:hover, .btn-warningz.btn-o.disabled:focus, .btn-warningz.btn-o.disabled:active, .btn-warningz.btn-o.disabled.active, .btn-warningz.btn-o[disabled], .btn-warningz.btn-o[disabled]:hover, .btn-warningz.btn-o[disabled]:focus, .btn-warningz.btn-o[disabled]:active, .btn-warningz.btn-o[disabled].active, fieldset[disabled] .btn-warningz.btn-o:hover, fieldset[disabled] .btn-warningz.btn-o:focus, fieldset[disabled] .btn-warningz.btn-o:active, fieldset[disabled] .btn-warningz.btn-o.active {
  border-color: #f6ce94;
  color: #f6ce94;
}

/*********************************************/
.btn-dangerz {
  background-color: #d43f3a;
  border-color: #d43f3a;
  color: #ffffff;
}
.btn-dangerz:hover {
  background-color: #dd6864 !important;
  border-color: #dd6864;
  color: #ffffff;
}
.btn-dangerz:active, .btn-dangerz.active, .btn-dangerz.active:focus, .btn-dangerz:active:focus, .btn-dangerz:active:hover, .btn-dangerz.dropdown-toggle:active:hover {
  background-color: #c9312c !important;
  border-color: #c9312c;
}
.btn-dangerz:focus {
  background-color: #e27c79;
  border-color: #e27c79;
}
.btn-dangerz.disabled:hover, .btn-dangerz.disabled:focus, .btn-dangerz.disabled:active, .btn-dangerz.disabled.active, .btn-dangerz[disabled], .btn-dangerz[disabled]:hover, .btn-dangerz[disabled]:focus, .btn-dangerz[disabled]:active, .btn-dangerz[disabled].active, fieldset[disabled] .btn-dangerz:hover, fieldset[disabled] .btn-dangerz:focus, fieldset[disabled] .btn-dangerz:active, fieldset[disabled] .btn-dangerz.active {
  background-color: #e6918e;
  border-color: #e6918e;
  color: #ffffff;
}
.btn-dangerz.btn-o {
  border: 1px solid #d43f3a;
  color: #d43f3a;
}
.btn-dangerz.btn-o:hover {
  /*color: #dd6864;
  border-color: #dd6864;*/
  background: none !important;
}
.btn-dangerz.btn-o:active, .btn-dangerz.btn-o.active, .btn-dangerz.btn-o.active:focus, .btn-dangerz.btn-o:active:focus, .btn-dangerz.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #9f2723 !important;
  color: #9f2723 !important;
}
.btn-dangerz.btn-o:focus {
  background-color: #e6918e;
  border-color: #e6918e;
  color: #dd6864;
}
.btn-dangerz.btn-o.disabled:hover, .btn-dangerz.btn-o.disabled:focus, .btn-dangerz.btn-o.disabled:active, .btn-dangerz.btn-o.disabled.active, .btn-dangerz.btn-o[disabled], .btn-dangerz.btn-o[disabled]:hover, .btn-dangerz.btn-o[disabled]:focus, .btn-dangerz.btn-o[disabled]:active, .btn-dangerz.btn-o[disabled].active, fieldset[disabled] .btn-dangerz.btn-o:hover, fieldset[disabled] .btn-dangerz.btn-o:focus, fieldset[disabled] .btn-dangerz.btn-o:active, fieldset[disabled] .btn-dangerz.btn-o.active {
  border-color: #e6918e;
  color: #e6918e;
}

/*********************************************/
.btn-azure {
  background-color: #0095C8;
  border-color: #0095C8;
  color: #ffffff;
}
.btn-azure:hover {
  background-color: #00bbfb !important;
  border-color: #00bbfb;
  color: #ffffff;
}
.btn-azure:active, .btn-azure.active, .btn-azure.active:focus, .btn-azure:active:focus, .btn-azure:active:hover, .btn-azure.dropdown-toggle:active:hover {
  background-color: #0082af !important;
  border-color: #0082af;
}
.btn-azure:focus {
  background-color: #16c3ff;
  border-color: #16c3ff;
  color: #ffffff;
}
.btn-azure.disabled:hover, .btn-azure.disabled:focus, .btn-azure.disabled:active, .btn-azure.disabled.active, .btn-azure[disabled], .btn-azure[disabled]:hover, .btn-azure[disabled]:focus, .btn-azure[disabled]:active, .btn-azure[disabled].active, fieldset[disabled] .btn-azure:hover, fieldset[disabled] .btn-azure:focus, fieldset[disabled] .btn-azure:active, fieldset[disabled] .btn-azure.active {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #ffffff;
}
.btn-azure.btn-o {
  border: 1px solid #0095C8;
  color: #0095C8;
}
.btn-azure.btn-o:hover {
  color: #00bbfb;
  border-color: #00bbfb;
  background: none !important;
}
.btn-azure.btn-o:active, .btn-azure.btn-o.active, .btn-azure.btn-o.active:focus, .btn-azure.btn-o:active:focus, .btn-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #005c7c !important;
  color: #005c7c !important;
}
.btn-azure.btn-o:focus {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #00bbfb;
}
.btn-azure.btn-o.disabled:hover, .btn-azure.btn-o.disabled:focus, .btn-azure.btn-o.disabled:active, .btn-azure.btn-o.disabled.active, .btn-azure.btn-o[disabled], .btn-azure.btn-o[disabled]:hover, .btn-azure.btn-o[disabled]:focus, .btn-azure.btn-o[disabled]:active, .btn-azure.btn-o[disabled].active, fieldset[disabled] .btn-azure.btn-o:hover, fieldset[disabled] .btn-azure.btn-o:focus, fieldset[disabled] .btn-azure.btn-o:active, fieldset[disabled] .btn-azure.btn-o.active {
  border-color: #2fcaff;
  color: #2fcaff;
}

/*********************************************/
.btn-light-azure {
  background-color: #00a8e2;
  border-color: #00a8e2;
  color: #ffffff;
}
.btn-light-azure:hover {
  background-color: #16c3ff !important;
  border-color: #16c3ff;
  color: #ffffff;
}
.btn-light-azure:active, .btn-light-azure.active, .btn-light-azure.active:focus, .btn-light-azure:active:focus, .btn-light-azure:active:hover, .btn-light-azure.dropdown-toggle:active:hover {
  background-color: #0095c8 !important;
  border-color: #0095c8;
}
.btn-light-azure:focus {
  background-color: #2fcaff;
  border-color: #2fcaff;
  color: #ffffff;
}
.btn-light-azure.disabled:hover, .btn-light-azure.disabled:focus, .btn-light-azure.disabled:active, .btn-light-azure.disabled.active, .btn-light-azure[disabled], .btn-light-azure[disabled]:hover, .btn-light-azure[disabled]:focus, .btn-light-azure[disabled]:active, .btn-light-azure[disabled].active, fieldset[disabled] .btn-light-azure:hover, fieldset[disabled] .btn-light-azure:focus, fieldset[disabled] .btn-light-azure:active, fieldset[disabled] .btn-light-azure.active {
  background-color: #49d0ff;
  border-color: #49d0ff;
  color: #ffffff;
}
.btn-light-azure.btn-o {
  border: 1px solid #00a8e2;
  color: #00a8e2;
}
.btn-light-azure.btn-o:hover {
  color: #16c3ff;
  border-color: #16c3ff;
  background: none !important;
}
.btn-light-azure.btn-o:active, .btn-light-azure.btn-o.active, .btn-light-azure.btn-o.active:focus, .btn-light-azure.btn-o:active:focus, .btn-light-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #006f95 !important;
  color: #006f95 !important;
}
.btn-light-azure.btn-o:focus {
  background-color: #49d0ff;
  border-color: #49d0ff;
  color: #16c3ff;
}
.btn-light-azure.btn-o.disabled:hover, .btn-light-azure.btn-o.disabled:focus, .btn-light-azure.btn-o.disabled:active, .btn-light-azure.btn-o.disabled.active, .btn-light-azure.btn-o[disabled], .btn-light-azure.btn-o[disabled]:hover, .btn-light-azure.btn-o[disabled]:focus, .btn-light-azure.btn-o[disabled]:active, .btn-light-azure.btn-o[disabled].active, fieldset[disabled] .btn-light-azure.btn-o:hover, fieldset[disabled] .btn-light-azure.btn-o:focus, fieldset[disabled] .btn-light-azure.btn-o:active, fieldset[disabled] .btn-light-azure.btn-o.active {
  border-color: #49d0ff;
  color: #49d0ff;
}

/*********************************************/
.btn-dark-azure {
  background-color: #006f95;
  border-color: #006f95;
  color: #ffffff;
}
.btn-dark-azure:hover {
  background-color: #0095c8 !important;
  border-color: #0095c8;
  color: #ffffff;
}
.btn-dark-azure:active, .btn-dark-azure.active, .btn-dark-azure.active:focus, .btn-dark-azure:active:focus, .btn-dark-azure:active:hover, .btn-dark-azure.dropdown-toggle:active:hover {
  background-color: #005c7c !important;
  border-color: #005c7c;
}
.btn-dark-azure:focus {
  background-color: #00a8e2;
  border-color: #00a8e2;
  color: #ffffff;
}
.btn-dark-azure.disabled:hover, .btn-dark-azure.disabled:focus, .btn-dark-azure.disabled:active, .btn-dark-azure.disabled.active, .btn-dark-azure[disabled], .btn-dark-azure[disabled]:hover, .btn-dark-azure[disabled]:focus, .btn-dark-azure[disabled]:active, .btn-dark-azure[disabled].active, fieldset[disabled] .btn-dark-azure:hover, fieldset[disabled] .btn-dark-azure:focus, fieldset[disabled] .btn-dark-azure:active, fieldset[disabled] .btn-dark-azure.active {
  background-color: #00bbfb;
  border-color: #00bbfb;
  color: #ffffff;
}
.btn-dark-azure.btn-o {
  border: 1px solid #006f95;
  color: #006f95;
}
.btn-dark-azure.btn-o:hover {
  color: #0095c8;
  border-color: #0095c8;
  background: none !important;
}
.btn-dark-azure.btn-o:active, .btn-dark-azure.btn-o.active, .btn-dark-azure.btn-o.active:focus, .btn-dark-azure.btn-o:active:focus, .btn-dark-azure.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #003649 !important;
  color: #003649 !important;
}
.btn-dark-azure.btn-o:focus {
  background-color: #00bbfb;
  border-color: #00bbfb;
  color: #0095c8;
}
.btn-dark-azure.btn-o.disabled:hover, .btn-dark-azure.btn-o.disabled:focus, .btn-dark-azure.btn-o.disabled:active, .btn-dark-azure.btn-o.disabled.active, .btn-dark-azure.btn-o[disabled], .btn-dark-azure.btn-o[disabled]:hover, .btn-dark-azure.btn-o[disabled]:focus, .btn-dark-azure.btn-o[disabled]:active, .btn-dark-azure.btn-o[disabled].active, fieldset[disabled] .btn-dark-azure.btn-o:hover, fieldset[disabled] .btn-dark-azure.btn-o:focus, fieldset[disabled] .btn-dark-azure.btn-o:active, fieldset[disabled] .btn-dark-azure.btn-o.active {
  border-color: #00bbfb;
  color: #00bbfb;
}

/*********************************************/
.btn-blue {
  background-color: #5F8295;
  border-color: #5F8295;
  color: #ffffff;
}
.btn-blue:hover {
  background-color: #7c9bab !important;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-blue:active, .btn-blue.active, .btn-blue.active:focus, .btn-blue:active:focus, .btn-blue:active:hover, .btn-blue.dropdown-toggle:active:hover {
  background-color: #557485 !important;
  border-color: #557485;
}
.btn-blue:focus {
  background-color: #8ba6b5;
  border-color: #8ba6b5;
  color: #ffffff;
}
.btn-blue.disabled:hover, .btn-blue.disabled:focus, .btn-blue.disabled:active, .btn-blue.disabled.active, .btn-blue[disabled], .btn-blue[disabled]:hover, .btn-blue[disabled]:focus, .btn-blue[disabled]:active, .btn-blue[disabled].active, fieldset[disabled] .btn-blue:hover, fieldset[disabled] .btn-blue:focus, fieldset[disabled] .btn-blue:active, fieldset[disabled] .btn-blue.active {
  background-color: #9bb2bf;
  border-color: #9bb2bf;
  color: #ffffff;
}
.btn-blue.btn-o {
  border: 1px solid #5F8295;
  color: #5F8295;
}
.btn-blue.btn-o:hover {
  color: #7c9bab;
  border-color: #7c9bab;
  background: none !important;
}
.btn-blue.btn-o:active, .btn-blue.btn-o.active, .btn-blue.btn-o.active:focus, .btn-blue.btn-o:active:focus, .btn-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #415966 !important;
  color: #415966 !important;
}
.btn-blue.btn-o:focus {
  background-color: #9bb2bf;
  border-color: #9bb2bf;
  color: #7c9bab;
}
.btn-blue.btn-o.disabled:hover, .btn-blue.btn-o.disabled:focus, .btn-blue.btn-o.disabled:active, .btn-blue.btn-o.disabled.active, .btn-blue.btn-o[disabled], .btn-blue.btn-o[disabled]:hover, .btn-blue.btn-o[disabled]:focus, .btn-blue.btn-o[disabled]:active, .btn-blue.btn-o[disabled].active, fieldset[disabled] .btn-blue.btn-o:hover, fieldset[disabled] .btn-blue.btn-o:focus, fieldset[disabled] .btn-blue.btn-o:active, fieldset[disabled] .btn-blue.btn-o.active {
  border-color: #9bb2bf;
  color: #9bb2bf;
}

/*********************************************/
.btn-light-blue {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-light-blue:hover {
  background-color: #9bb2bf !important;
  border-color: #9bb2bf;
  color: #ffffff;
}
.btn-light-blue:active, .btn-light-blue.active, .btn-light-blue.active:focus, .btn-light-blue:active:focus, .btn-light-blue:active:hover, .btn-light-blue.dropdown-toggle:active:hover {
  background-color: #6c8fa1 !important;
  border-color: #6c8fa1;
}
.btn-light-blue:focus {
  background-color: #aabec9;
  border-color: #aabec9;
  color: #ffffff;
}
.btn-light-blue.disabled:hover, .btn-light-blue.disabled:focus, .btn-light-blue.disabled:active, .btn-light-blue.disabled.active, .btn-light-blue[disabled], .btn-light-blue[disabled]:hover, .btn-light-blue[disabled]:focus, .btn-light-blue[disabled]:active, .btn-light-blue[disabled].active, fieldset[disabled] .btn-light-blue:hover, fieldset[disabled] .btn-light-blue:focus, fieldset[disabled] .btn-light-blue:active, fieldset[disabled] .btn-light-blue.active {
  background-color: #bacad3;
  border-color: #bacad3;
  color: #ffffff;
}
.btn-light-blue.btn-o {
  border: 1px solid #7c9bab;
  color: #7c9bab;
}
.btn-light-blue.btn-o:hover {
  color: #9bb2bf;
  border-color: #9bb2bf;
  background: none !important;
}
.btn-light-blue.btn-o:active, .btn-light-blue.btn-o.active, .btn-light-blue.btn-o.active:focus, .btn-light-blue.btn-o:active:focus, .btn-light-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #557485 !important;
  color: #557485 !important;
}
.btn-light-blue.btn-o:focus {
  background-color: #bacad3;
  border-color: #bacad3;
  color: #9bb2bf;
}
.btn-light-blue.btn-o.disabled:hover, .btn-light-blue.btn-o.disabled:focus, .btn-light-blue.btn-o.disabled:active, .btn-light-blue.btn-o.disabled.active, .btn-light-blue.btn-o[disabled], .btn-light-blue.btn-o[disabled]:hover, .btn-light-blue.btn-o[disabled]:focus, .btn-light-blue.btn-o[disabled]:active, .btn-light-blue.btn-o[disabled].active, fieldset[disabled] .btn-light-blue.btn-o:hover, fieldset[disabled] .btn-light-blue.btn-o:focus, fieldset[disabled] .btn-light-blue.btn-o:active, fieldset[disabled] .btn-light-blue.btn-o.active {
  border-color: #bacad3;
  color: #bacad3;
}

/*********************************************/
.btn-dark-blue {
  background-color: #4b6776;
  border-color: #4b6776;
  color: #ffffff;
}
.btn-dark-blue:hover {
  background-color: #5f8295 !important;
  border-color: #5f8295;
  color: #ffffff;
}
.btn-dark-blue:active, .btn-dark-blue.active, .btn-dark-blue.active:focus, .btn-dark-blue:active:focus, .btn-dark-blue:active:hover, .btn-dark-blue.dropdown-toggle:active:hover {
  background-color: #415966 !important;
  border-color: #415966;
}
.btn-dark-blue:focus {
  background-color: #6c8fa1;
  border-color: #6c8fa1;
  color: #ffffff;
}
.btn-dark-blue.disabled:hover, .btn-dark-blue.disabled:focus, .btn-dark-blue.disabled:active, .btn-dark-blue.disabled.active, .btn-dark-blue[disabled], .btn-dark-blue[disabled]:hover, .btn-dark-blue[disabled]:focus, .btn-dark-blue[disabled]:active, .btn-dark-blue[disabled].active, fieldset[disabled] .btn-dark-blue:hover, fieldset[disabled] .btn-dark-blue:focus, fieldset[disabled] .btn-dark-blue:active, fieldset[disabled] .btn-dark-blue.active {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #ffffff;
}
.btn-dark-blue.btn-o {
  border: 1px solid #4b6776;
  color: #4b6776;
}
.btn-dark-blue.btn-o:hover {
  color: #5f8295;
  border-color: #5f8295;
  background: none !important;
}
.btn-dark-blue.btn-o:active, .btn-dark-blue.btn-o.active, .btn-dark-blue.btn-o.active:focus, .btn-dark-blue.btn-o:active:focus, .btn-dark-blue.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #2d3e47 !important;
  color: #2d3e47 !important;
}
.btn-dark-blue.btn-o:focus {
  background-color: #7c9bab;
  border-color: #7c9bab;
  color: #5f8295;
}
.btn-dark-blue.btn-o.disabled:hover, .btn-dark-blue.btn-o.disabled:focus, .btn-dark-blue.btn-o.disabled:active, .btn-dark-blue.btn-o.disabled.active, .btn-dark-blue.btn-o[disabled], .btn-dark-blue.btn-o[disabled]:hover, .btn-dark-blue.btn-o[disabled]:focus, .btn-dark-blue.btn-o[disabled]:active, .btn-dark-blue.btn-o[disabled].active, fieldset[disabled] .btn-dark-blue.btn-o:hover, fieldset[disabled] .btn-dark-blue.btn-o:focus, fieldset[disabled] .btn-dark-blue.btn-o:active, fieldset[disabled] .btn-dark-blue.btn-o.active {
  border-color: #7c9bab;
  color: #7c9bab;
}

/*********************************************/
.btn-green {
  background-color: #1FBBA6;
  border-color: #1FBBA6;
  color: #ffffff;
}
.btn-green:hover {
  background-color: #30ddc6 !important;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-green:active, .btn-green.active, .btn-green.active:focus, .btn-green:active:focus, .btn-green:active:hover, .btn-green.dropdown-toggle:active:hover {
  background-color: #1ba593 !important;
  border-color: #1ba593;
}
.btn-green:focus {
  background-color: #46e0cc;
  border-color: #46e0cc;
  color: #ffffff;
}
.btn-green.disabled:hover, .btn-green.disabled:focus, .btn-green.disabled:active, .btn-green.disabled.active, .btn-green[disabled], .btn-green[disabled]:hover, .btn-green[disabled]:focus, .btn-green[disabled]:active, .btn-green[disabled].active, fieldset[disabled] .btn-green:hover, fieldset[disabled] .btn-green:focus, fieldset[disabled] .btn-green:active, fieldset[disabled] .btn-green.active {
  background-color: #5ce4d2;
  border-color: #5ce4d2;
  color: #ffffff;
}
.btn-green.btn-o {
  border: 1px solid #1FBBA6;
  color: #1FBBA6;
}
.btn-green.btn-o:hover {
  color: #30ddc6;
  border-color: #30ddc6;
  background: none !important;
}
.btn-green.btn-o:active, .btn-green.btn-o.active, .btn-green.btn-o.active:focus, .btn-green.btn-o:active:focus, .btn-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #14796c !important;
  color: #14796c !important;
}
.btn-green.btn-o:focus {
  background-color: #5ce4d2;
  border-color: #5ce4d2;
  color: #30ddc6;
}
.btn-green.btn-o.disabled:hover, .btn-green.btn-o.disabled:focus, .btn-green.btn-o.disabled:active, .btn-green.btn-o.disabled.active, .btn-green.btn-o[disabled], .btn-green.btn-o[disabled]:hover, .btn-green.btn-o[disabled]:focus, .btn-green.btn-o[disabled]:active, .btn-green.btn-o[disabled].active, fieldset[disabled] .btn-green.btn-o:hover, fieldset[disabled] .btn-green.btn-o:focus, fieldset[disabled] .btn-green.btn-o:active, fieldset[disabled] .btn-green.btn-o.active {
  border-color: #5ce4d2;
  color: #5ce4d2;
}

/*********************************************/
.btn-light-green {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-light-green:hover {
  background-color: #5ce4d2 !important;
  border-color: #5ce4d2;
  color: #ffffff;
}
.btn-light-green:active, .btn-light-green.active, .btn-light-green.active:focus, .btn-light-green:active:focus, .btn-light-green:active:hover, .btn-light-green.dropdown-toggle:active:hover {
  background-color: #23d1b9 !important;
  border-color: #23d1b9;
}
.btn-light-green:focus {
  background-color: #72e8d8;
  border-color: #72e8d8;
  color: #ffffff;
}
.btn-light-green.disabled:hover, .btn-light-green.disabled:focus, .btn-light-green.disabled:active, .btn-light-green.disabled.active, .btn-light-green[disabled], .btn-light-green[disabled]:hover, .btn-light-green[disabled]:focus, .btn-light-green[disabled]:active, .btn-light-green[disabled].active, fieldset[disabled] .btn-light-green:hover, fieldset[disabled] .btn-light-green:focus, fieldset[disabled] .btn-light-green:active, fieldset[disabled] .btn-light-green.active {
  background-color: #88ebde;
  border-color: #88ebde;
  color: #ffffff;
}
.btn-light-green.btn-o {
  border: 1px solid #30ddc6;
  color: #30ddc6;
}
.btn-light-green.btn-o:hover {
  color: #5ce4d2;
  border-color: #5ce4d2;
  background: none !important;
}
.btn-light-green.btn-o:active, .btn-light-green.btn-o.active, .btn-light-green.btn-o.active:focus, .btn-light-green.btn-o:active:focus, .btn-light-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #1ba593 !important;
  color: #1ba593 !important;
}
.btn-light-green.btn-o:focus {
  background-color: #88ebde;
  border-color: #88ebde;
  color: #5ce4d2;
}
.btn-light-green.btn-o.disabled:hover, .btn-light-green.btn-o.disabled:focus, .btn-light-green.btn-o.disabled:active, .btn-light-green.btn-o.disabled.active, .btn-light-green.btn-o[disabled], .btn-light-green.btn-o[disabled]:hover, .btn-light-green.btn-o[disabled]:focus, .btn-light-green.btn-o[disabled]:active, .btn-light-green.btn-o[disabled].active, fieldset[disabled] .btn-light-green.btn-o:hover, fieldset[disabled] .btn-light-green.btn-o:focus, fieldset[disabled] .btn-light-green.btn-o:active, fieldset[disabled] .btn-light-green.btn-o.active {
  border-color: #88ebde;
  color: #88ebde;
}

/*********************************************/
.btn-dark-green {
  background-color: #188f7f;
  border-color: #188f7f;
  color: #ffffff;
}
.btn-dark-green:hover {
  background-color: #1fbba6 !important;
  border-color: #1fbba6;
  color: #ffffff;
}
.btn-dark-green:active, .btn-dark-green.active, .btn-dark-green.active:focus, .btn-dark-green:active:focus, .btn-dark-green:active:hover, .btn-dark-green.dropdown-toggle:active:hover {
  background-color: #14796c !important;
  border-color: #14796c;
}
.btn-dark-green:focus {
  background-color: #23d1b9;
  border-color: #23d1b9;
  color: #ffffff;
}
.btn-dark-green.disabled:hover, .btn-dark-green.disabled:focus, .btn-dark-green.disabled:active, .btn-dark-green.disabled.active, .btn-dark-green[disabled], .btn-dark-green[disabled]:hover, .btn-dark-green[disabled]:focus, .btn-dark-green[disabled]:active, .btn-dark-green[disabled].active, fieldset[disabled] .btn-dark-green:hover, fieldset[disabled] .btn-dark-green:focus, fieldset[disabled] .btn-dark-green:active, fieldset[disabled] .btn-dark-green.active {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #ffffff;
}
.btn-dark-green.btn-o {
  border: 1px solid #188f7f;
  color: #188f7f;
}
.btn-dark-green.btn-o:hover {
  color: #1fbba6;
  border-color: #1fbba6;
  background: none !important;
}
.btn-dark-green.btn-o:active, .btn-dark-green.btn-o.active, .btn-dark-green.btn-o.active:focus, .btn-dark-green.btn-o:active:focus, .btn-dark-green.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #0d4e45 !important;
  color: #0d4e45 !important;
}
.btn-dark-green.btn-o:focus {
  background-color: #30ddc6;
  border-color: #30ddc6;
  color: #1fbba6;
}
.btn-dark-green.btn-o.disabled:hover, .btn-dark-green.btn-o.disabled:focus, .btn-dark-green.btn-o.disabled:active, .btn-dark-green.btn-o.disabled.active, .btn-dark-green.btn-o[disabled], .btn-dark-green.btn-o[disabled]:hover, .btn-dark-green.btn-o[disabled]:focus, .btn-dark-green.btn-o[disabled]:active, .btn-dark-green.btn-o[disabled].active, fieldset[disabled] .btn-dark-green.btn-o:hover, fieldset[disabled] .btn-dark-green.btn-o:focus, fieldset[disabled] .btn-dark-green.btn-o:active, fieldset[disabled] .btn-dark-green.btn-o.active {
  border-color: #30ddc6;
  color: #30ddc6;
}

/*********************************************/
.btn-orange {
  background-color: #FF6600;
  border-color: #FF6600;
  color: #ffffff;
}
.btn-orange:hover {
  background-color: #ff8533 !important;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-orange:active, .btn-orange.active, .btn-orange.active:focus, .btn-orange:active:focus, .btn-orange:active:hover, .btn-orange.dropdown-toggle:active:hover {
  background-color: #e65c00 !important;
  border-color: #e65c00;
}
.btn-orange:focus {
  background-color: #ff944d;
  border-color: #ff944d;
  color: #ffffff;
}
.btn-orange.disabled:hover, .btn-orange.disabled:focus, .btn-orange.disabled:active, .btn-orange.disabled.active, .btn-orange[disabled], .btn-orange[disabled]:hover, .btn-orange[disabled]:focus, .btn-orange[disabled]:active, .btn-orange[disabled].active, fieldset[disabled] .btn-orange:hover, fieldset[disabled] .btn-orange:focus, fieldset[disabled] .btn-orange:active, fieldset[disabled] .btn-orange.active {
  background-color: #ffa366;
  border-color: #ffa366;
  color: #ffffff;
}
.btn-orange.btn-o {
  border: 1px solid #FF6600;
  color: #FF6600;
}
.btn-orange.btn-o:hover {
  color: #ff8533;
  border-color: #ff8533;
  background: none !important;
}
.btn-orange.btn-o:active, .btn-orange.btn-o.active, .btn-orange.btn-o.active:focus, .btn-orange.btn-o:active:focus, .btn-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #b34700 !important;
  color: #b34700 !important;
}
.btn-orange.btn-o:focus {
  background-color: #ffa366;
  border-color: #ffa366;
  color: #ff8533;
}
.btn-orange.btn-o.disabled:hover, .btn-orange.btn-o.disabled:focus, .btn-orange.btn-o.disabled:active, .btn-orange.btn-o.disabled.active, .btn-orange.btn-o[disabled], .btn-orange.btn-o[disabled]:hover, .btn-orange.btn-o[disabled]:focus, .btn-orange.btn-o[disabled]:active, .btn-orange.btn-o[disabled].active, fieldset[disabled] .btn-orange.btn-o:hover, fieldset[disabled] .btn-orange.btn-o:focus, fieldset[disabled] .btn-orange.btn-o:active, fieldset[disabled] .btn-orange.btn-o.active {
  border-color: #ffa366;
  color: #ffa366;
}

/*********************************************/
.btn-light-orange {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-light-orange:hover {
  background-color: #ffa366 !important;
  border-color: #ffa366;
  color: #ffffff;
}
.btn-light-orange:active, .btn-light-orange.active, .btn-light-orange.active:focus, .btn-light-orange:active:focus, .btn-light-orange:active:hover, .btn-light-orange.dropdown-toggle:active:hover {
  background-color: #ff751a !important;
  border-color: #ff751a;
}
.btn-light-orange:focus {
  background-color: #ffb380;
  border-color: #ffb380;
  color: #ffffff;
}
.btn-light-orange.disabled:hover, .btn-light-orange.disabled:focus, .btn-light-orange.disabled:active, .btn-light-orange.disabled.active, .btn-light-orange[disabled], .btn-light-orange[disabled]:hover, .btn-light-orange[disabled]:focus, .btn-light-orange[disabled]:active, .btn-light-orange[disabled].active, fieldset[disabled] .btn-light-orange:hover, fieldset[disabled] .btn-light-orange:focus, fieldset[disabled] .btn-light-orange:active, fieldset[disabled] .btn-light-orange.active {
  background-color: #ffc299;
  border-color: #ffc299;
  color: #ffffff;
}
.btn-light-orange.btn-o {
  border: 1px solid #ff8533;
  color: #ff8533;
}
.btn-light-orange.btn-o:hover {
  color: #ffa366;
  border-color: #ffa366;
  background: none !important;
}
.btn-light-orange.btn-o:active, .btn-light-orange.btn-o.active, .btn-light-orange.btn-o.active:focus, .btn-light-orange.btn-o:active:focus, .btn-light-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #e65c00 !important;
  color: #e65c00 !important;
}
.btn-light-orange.btn-o:focus {
  background-color: #ffc299;
  border-color: #ffc299;
  color: #ffa366;
}
.btn-light-orange.btn-o.disabled:hover, .btn-light-orange.btn-o.disabled:focus, .btn-light-orange.btn-o.disabled:active, .btn-light-orange.btn-o.disabled.active, .btn-light-orange.btn-o[disabled], .btn-light-orange.btn-o[disabled]:hover, .btn-light-orange.btn-o[disabled]:focus, .btn-light-orange.btn-o[disabled]:active, .btn-light-orange.btn-o[disabled].active, fieldset[disabled] .btn-light-orange.btn-o:hover, fieldset[disabled] .btn-light-orange.btn-o:focus, fieldset[disabled] .btn-light-orange.btn-o:active, fieldset[disabled] .btn-light-orange.btn-o.active {
  border-color: #ffc299;
  color: #ffc299;
}

/*********************************************/
.btn-dark-orange {
  background-color: #cc5200;
  border-color: #cc5200;
  color: #ffffff;
}
.btn-dark-orange:hover {
  background-color: #ff6600 !important;
  border-color: #ff6600;
  color: #ffffff;
}
.btn-dark-orange:active, .btn-dark-orange.active, .btn-dark-orange.active:focus, .btn-dark-orange:active:focus, .btn-dark-orange:active:hover, .btn-dark-orange.dropdown-toggle:active:hover {
  background-color: #b34700 !important;
  border-color: #b34700;
}
.btn-dark-orange:focus {
  background-color: #ff751a;
  border-color: #ff751a;
  color: #ffffff;
}
.btn-dark-orange.disabled:hover, .btn-dark-orange.disabled:focus, .btn-dark-orange.disabled:active, .btn-dark-orange.disabled.active, .btn-dark-orange[disabled], .btn-dark-orange[disabled]:hover, .btn-dark-orange[disabled]:focus, .btn-dark-orange[disabled]:active, .btn-dark-orange[disabled].active, fieldset[disabled] .btn-dark-orange:hover, fieldset[disabled] .btn-dark-orange:focus, fieldset[disabled] .btn-dark-orange:active, fieldset[disabled] .btn-dark-orange.active {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ffffff;
}
.btn-dark-orange.btn-o {
  border: 1px solid #cc5200;
  color: #cc5200;
}
.btn-dark-orange.btn-o:hover {
  color: #ff6600;
  border-color: #ff6600;
  background: none !important;
}
.btn-dark-orange.btn-o:active, .btn-dark-orange.btn-o.active, .btn-dark-orange.btn-o.active:focus, .btn-dark-orange.btn-o:active:focus, .btn-dark-orange.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #803300 !important;
  color: #803300 !important;
}
.btn-dark-orange.btn-o:focus {
  background-color: #ff8533;
  border-color: #ff8533;
  color: #ff6600;
}
.btn-dark-orange.btn-o.disabled:hover, .btn-dark-orange.btn-o.disabled:focus, .btn-dark-orange.btn-o.disabled:active, .btn-dark-orange.btn-o.disabled.active, .btn-dark-orange.btn-o[disabled], .btn-dark-orange.btn-o[disabled]:hover, .btn-dark-orange.btn-o[disabled]:focus, .btn-dark-orange.btn-o[disabled]:active, .btn-dark-orange.btn-o[disabled].active, fieldset[disabled] .btn-dark-orange.btn-o:hover, fieldset[disabled] .btn-dark-orange.btn-o:focus, fieldset[disabled] .btn-dark-orange.btn-o:active, fieldset[disabled] .btn-dark-orange.btn-o.active {
  border-color: #ff8533;
  color: #ff8533;
}

/*********************************************/
.btn-red {
  background-color: #C82E29;
  border-color: #C82E29;
  color: #ffffff;
}
.btn-red:hover {
  background-color: #da4f4a !important;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-red:active, .btn-red.active, .btn-red.active:focus, .btn-red:active:focus, .btn-red:active:hover, .btn-red.dropdown-toggle:active:hover {
  background-color: #b32925 !important;
  border-color: #b32925;
}
.btn-red:focus {
  background-color: #de635f;
  border-color: #de635f;
  color: #ffffff;
}
.btn-red.disabled:hover, .btn-red.disabled:focus, .btn-red.disabled:active, .btn-red.disabled.active, .btn-red[disabled], .btn-red[disabled]:hover, .btn-red[disabled]:focus, .btn-red[disabled]:active, .btn-red[disabled].active, fieldset[disabled] .btn-red:hover, fieldset[disabled] .btn-red:focus, fieldset[disabled] .btn-red:active, fieldset[disabled] .btn-red.active {
  background-color: #e37874;
  border-color: #e37874;
  color: #ffffff;
}
.btn-red.btn-o {
  border: 1px solid #C82E29;
  color: #C82E29;
}
.btn-red.btn-o:hover {
  color: #da4f4a;
  border-color: #da4f4a;
  background: none !important;
}
.btn-red.btn-o:active, .btn-red.btn-o.active, .btn-red.btn-o.active:focus, .btn-red.btn-o:active:focus, .btn-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #891f1c !important;
  color: #891f1c !important;
}
.btn-red.btn-o:focus {
  background-color: #e37874;
  border-color: #e37874;
  color: #da4f4a;
}
.btn-red.btn-o.disabled:hover, .btn-red.btn-o.disabled:focus, .btn-red.btn-o.disabled:active, .btn-red.btn-o.disabled.active, .btn-red.btn-o[disabled], .btn-red.btn-o[disabled]:hover, .btn-red.btn-o[disabled]:focus, .btn-red.btn-o[disabled]:active, .btn-red.btn-o[disabled].active, fieldset[disabled] .btn-red.btn-o:hover, fieldset[disabled] .btn-red.btn-o:focus, fieldset[disabled] .btn-red.btn-o:active, fieldset[disabled] .btn-red.btn-o.active {
  border-color: #e37874;
  color: #e37874;
}

/*********************************************/
.btn-light-red {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-light-red:hover {
  background-color: #e37874 !important;
  border-color: #e37874;
  color: #ffffff;
}
.btn-light-red:active, .btn-light-red.active, .btn-light-red.active:focus, .btn-light-red:active:focus, .btn-light-red:active:hover, .btn-light-red.dropdown-toggle:active:hover {
  background-color: #d63a35 !important;
  border-color: #d63a35;
}
.btn-light-red:focus {
  background-color: #e78d8a;
  border-color: #e78d8a;
  color: #ffffff;
}
.btn-light-red.disabled:hover, .btn-light-red.disabled:focus, .btn-light-red.disabled:active, .btn-light-red.disabled.active, .btn-light-red[disabled], .btn-light-red[disabled]:hover, .btn-light-red[disabled]:focus, .btn-light-red[disabled]:active, .btn-light-red[disabled].active, fieldset[disabled] .btn-light-red:hover, fieldset[disabled] .btn-light-red:focus, fieldset[disabled] .btn-light-red:active, fieldset[disabled] .btn-light-red.active {
  background-color: #eba19f;
  border-color: #eba19f;
  color: #ffffff;
}
.btn-light-red.btn-o {
  border: 1px solid #da4f4a;
  color: #da4f4a;
}
.btn-light-red.btn-o:hover {
  color: #e37874;
  border-color: #e37874;
  background: none !important;
}
.btn-light-red.btn-o:active, .btn-light-red.btn-o.active, .btn-light-red.btn-o.active:focus, .btn-light-red.btn-o:active:focus, .btn-light-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #b32925 !important;
  color: #b32925 !important;
}
.btn-light-red.btn-o:focus {
  background-color: #eba19f;
  border-color: #eba19f;
  color: #e37874;
}
.btn-light-red.btn-o.disabled:hover, .btn-light-red.btn-o.disabled:focus, .btn-light-red.btn-o.disabled:active, .btn-light-red.btn-o.disabled.active, .btn-light-red.btn-o[disabled], .btn-light-red.btn-o[disabled]:hover, .btn-light-red.btn-o[disabled]:focus, .btn-light-red.btn-o[disabled]:active, .btn-light-red.btn-o[disabled].active, fieldset[disabled] .btn-light-red.btn-o:hover, fieldset[disabled] .btn-light-red.btn-o:focus, fieldset[disabled] .btn-light-red.btn-o:active, fieldset[disabled] .btn-light-red.btn-o.active {
  border-color: #eba19f;
  color: #eba19f;
}

/*********************************************/
.btn-dark-red {
  background-color: #9e2420;
  border-color: #9e2420;
  color: #ffffff;
}
.btn-dark-red:hover {
  background-color: #c82e29 !important;
  border-color: #c82e29;
  color: #ffffff;
}
.btn-dark-red:active, .btn-dark-red.active, .btn-dark-red.active:focus, .btn-dark-red:active:focus, .btn-dark-red:active:hover, .btn-dark-red.dropdown-toggle:active:hover {
  background-color: #891f1c !important;
  border-color: #891f1c;
}
.btn-dark-red:focus {
  background-color: #d63a35;
  border-color: #d63a35;
  color: #ffffff;
}
.btn-dark-red.disabled:hover, .btn-dark-red.disabled:focus, .btn-dark-red.disabled:active, .btn-dark-red.disabled.active, .btn-dark-red[disabled], .btn-dark-red[disabled]:hover, .btn-dark-red[disabled]:focus, .btn-dark-red[disabled]:active, .btn-dark-red[disabled].active, fieldset[disabled] .btn-dark-red:hover, fieldset[disabled] .btn-dark-red:focus, fieldset[disabled] .btn-dark-red:active, fieldset[disabled] .btn-dark-red.active {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #ffffff;
}
.btn-dark-red.btn-o {
  border: 1px solid #9e2420;
  color: #9e2420;
}
.btn-dark-red.btn-o:hover {
  color: #c82e29;
  border-color: #c82e29;
  background: none !important;
}
.btn-dark-red.btn-o:active, .btn-dark-red.btn-o.active, .btn-dark-red.btn-o.active:focus, .btn-dark-red.btn-o:active:focus, .btn-dark-red.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #5e1613 !important;
  color: #5e1613 !important;
}
.btn-dark-red.btn-o:focus {
  background-color: #da4f4a;
  border-color: #da4f4a;
  color: #c82e29;
}
.btn-dark-red.btn-o.disabled:hover, .btn-dark-red.btn-o.disabled:focus, .btn-dark-red.btn-o.disabled:active, .btn-dark-red.btn-o.disabled.active, .btn-dark-red.btn-o[disabled], .btn-dark-red.btn-o[disabled]:hover, .btn-dark-red.btn-o[disabled]:focus, .btn-dark-red.btn-o[disabled]:active, .btn-dark-red.btn-o[disabled].active, fieldset[disabled] .btn-dark-red.btn-o:hover, fieldset[disabled] .btn-dark-red.btn-o:focus, fieldset[disabled] .btn-dark-red.btn-o:active, fieldset[disabled] .btn-dark-red.btn-o.active {
  border-color: #da4f4a;
  color: #da4f4a;
}

/*********************************************/
.btn-purple {
  background-color: #804C75;
  border-color: #804C75;
  color: #ffffff;
}
.btn-purple:hover {
  background-color: #a05f92 !important;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-purple:active, .btn-purple.active, .btn-purple.active:focus, .btn-purple:active:focus, .btn-purple:active:hover, .btn-purple.dropdown-toggle:active:hover {
  background-color: #704366 !important;
  border-color: #704366;
}
.btn-purple:focus {
  background-color: #aa6f9d;
  border-color: #aa6f9d;
  color: #ffffff;
}
.btn-purple.disabled:hover, .btn-purple.disabled:focus, .btn-purple.disabled:active, .btn-purple.disabled.active, .btn-purple[disabled], .btn-purple[disabled]:hover, .btn-purple[disabled]:focus, .btn-purple[disabled]:active, .btn-purple[disabled].active, fieldset[disabled] .btn-purple:hover, fieldset[disabled] .btn-purple:focus, fieldset[disabled] .btn-purple:active, fieldset[disabled] .btn-purple.active {
  background-color: #b37fa8;
  border-color: #b37fa8;
  color: #ffffff;
}
.btn-purple.btn-o {
  border: 1px solid #804C75;
  color: #804C75;
}
.btn-purple.btn-o:hover {
  color: #a05f92;
  border-color: #a05f92;
  background: none !important;
}
.btn-purple.btn-o:active, .btn-purple.btn-o.active, .btn-purple.btn-o.active:focus, .btn-purple.btn-o:active:focus, .btn-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #503049 !important;
  color: #503049 !important;
}
.btn-purple.btn-o:focus {
  background-color: #b37fa8;
  border-color: #b37fa8;
  color: #a05f92;
}
.btn-purple.btn-o.disabled:hover, .btn-purple.btn-o.disabled:focus, .btn-purple.btn-o.disabled:active, .btn-purple.btn-o.disabled.active, .btn-purple.btn-o[disabled], .btn-purple.btn-o[disabled]:hover, .btn-purple.btn-o[disabled]:focus, .btn-purple.btn-o[disabled]:active, .btn-purple.btn-o[disabled].active, fieldset[disabled] .btn-purple.btn-o:hover, fieldset[disabled] .btn-purple.btn-o:focus, fieldset[disabled] .btn-purple.btn-o:active, fieldset[disabled] .btn-purple.btn-o.active {
  border-color: #b37fa8;
  color: #b37fa8;
}

/*********************************************/
.btn-light-purple {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-light-purple:hover {
  background-color: #b37fa8 !important;
  border-color: #b37fa8;
  color: #ffffff;
}
.btn-light-purple:active, .btn-light-purple.active, .btn-light-purple.active:focus, .btn-light-purple:active:focus, .btn-light-purple:active:hover, .btn-light-purple.dropdown-toggle:active:hover {
  background-color: #905684 !important;
  border-color: #905684;
}
.btn-light-purple:focus {
  background-color: #bd8fb3;
  border-color: #bd8fb3;
  color: #ffffff;
}
.btn-light-purple.disabled:hover, .btn-light-purple.disabled:focus, .btn-light-purple.disabled:active, .btn-light-purple.disabled.active, .btn-light-purple[disabled], .btn-light-purple[disabled]:hover, .btn-light-purple[disabled]:focus, .btn-light-purple[disabled]:active, .btn-light-purple[disabled].active, fieldset[disabled] .btn-light-purple:hover, fieldset[disabled] .btn-light-purple:focus, fieldset[disabled] .btn-light-purple:active, fieldset[disabled] .btn-light-purple.active {
  background-color: #c69fbe;
  border-color: #c69fbe;
  color: #ffffff;
}
.btn-light-purple.btn-o {
  border: 1px solid #a05f92;
  color: #a05f92;
}
.btn-light-purple.btn-o:hover {
  color: #b37fa8;
  border-color: #b37fa8;
  background: none !important;
}
.btn-light-purple.btn-o:active, .btn-light-purple.btn-o.active, .btn-light-purple.btn-o.active:focus, .btn-light-purple.btn-o:active:focus, .btn-light-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #704366 !important;
  color: #704366 !important;
}
.btn-light-purple.btn-o:focus {
  background-color: #c69fbe;
  border-color: #c69fbe;
  color: #b37fa8;
}
.btn-light-purple.btn-o.disabled:hover, .btn-light-purple.btn-o.disabled:focus, .btn-light-purple.btn-o.disabled:active, .btn-light-purple.btn-o.disabled.active, .btn-light-purple.btn-o[disabled], .btn-light-purple.btn-o[disabled]:hover, .btn-light-purple.btn-o[disabled]:focus, .btn-light-purple.btn-o[disabled]:active, .btn-light-purple.btn-o[disabled].active, fieldset[disabled] .btn-light-purple.btn-o:hover, fieldset[disabled] .btn-light-purple.btn-o:focus, fieldset[disabled] .btn-light-purple.btn-o:active, fieldset[disabled] .btn-light-purple.btn-o.active {
  border-color: #c69fbe;
  color: #c69fbe;
}

/*********************************************/
.btn-dark-purple {
  background-color: #603958;
  border-color: #603958;
  color: #ffffff;
}
.btn-dark-purple:hover {
  background-color: #804c75 !important;
  border-color: #804c75;
  color: #ffffff;
}
.btn-dark-purple:active, .btn-dark-purple.active, .btn-dark-purple.active:focus, .btn-dark-purple:active:focus, .btn-dark-purple:active:hover, .btn-dark-purple.dropdown-toggle:active:hover {
  background-color: #503049 !important;
  border-color: #503049;
}
.btn-dark-purple:focus {
  background-color: #905684;
  border-color: #905684;
  color: #ffffff;
}
.btn-dark-purple.disabled:hover, .btn-dark-purple.disabled:focus, .btn-dark-purple.disabled:active, .btn-dark-purple.disabled.active, .btn-dark-purple[disabled], .btn-dark-purple[disabled]:hover, .btn-dark-purple[disabled]:focus, .btn-dark-purple[disabled]:active, .btn-dark-purple[disabled].active, fieldset[disabled] .btn-dark-purple:hover, fieldset[disabled] .btn-dark-purple:focus, fieldset[disabled] .btn-dark-purple:active, fieldset[disabled] .btn-dark-purple.active {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #ffffff;
}
.btn-dark-purple.btn-o {
  border: 1px solid #603958;
  color: #603958;
}
.btn-dark-purple.btn-o:hover {
  color: #804c75;
  border-color: #804c75;
  background: none !important;
}
.btn-dark-purple.btn-o:active, .btn-dark-purple.btn-o.active, .btn-dark-purple.btn-o.active:focus, .btn-dark-purple.btn-o:active:focus, .btn-dark-purple.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #301c2c !important;
  color: #301c2c !important;
}
.btn-dark-purple.btn-o:focus {
  background-color: #a05f92;
  border-color: #a05f92;
  color: #804c75;
}
.btn-dark-purple.btn-o.disabled:hover, .btn-dark-purple.btn-o.disabled:focus, .btn-dark-purple.btn-o.disabled:active, .btn-dark-purple.btn-o.disabled.active, .btn-dark-purple.btn-o[disabled], .btn-dark-purple.btn-o[disabled]:hover, .btn-dark-purple.btn-o[disabled]:focus, .btn-dark-purple.btn-o[disabled]:active, .btn-dark-purple.btn-o[disabled].active, fieldset[disabled] .btn-dark-purple.btn-o:hover, fieldset[disabled] .btn-dark-purple.btn-o:focus, fieldset[disabled] .btn-dark-purple.btn-o:active, fieldset[disabled] .btn-dark-purple.btn-o.active {
  border-color: #a05f92;
  color: #a05f92;
}

/*********************************************/
.btn-beige {
  background-color: #D2BD8E;
  border-color: #D2BD8E;
  color: #ffffff;
}
.btn-beige:hover {
  background-color: #e1d2b2 !important;
  border-color: #e1d2b2;
  color: #ffffff;
}
.btn-beige:active, .btn-beige.active, .btn-beige.active:focus, .btn-beige:active:focus, .btn-beige:active:hover, .btn-beige.dropdown-toggle:active:hover {
  background-color: #cbb27c !important;
  border-color: #cbb27c;
}
.btn-beige:focus {
  background-color: #e8ddc5;
  border-color: #e8ddc5;
  color: #ffffff;
}
.btn-beige.disabled:hover, .btn-beige.disabled:focus, .btn-beige.disabled:active, .btn-beige.disabled.active, .btn-beige[disabled], .btn-beige[disabled]:hover, .btn-beige[disabled]:focus, .btn-beige[disabled]:active, .btn-beige[disabled].active, fieldset[disabled] .btn-beige:hover, fieldset[disabled] .btn-beige:focus, fieldset[disabled] .btn-beige:active, fieldset[disabled] .btn-beige.active {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #ffffff;
}
.btn-beige.btn-o {
  border: 1px solid #D2BD8E;
  color: #D2BD8E;
}
.btn-beige.btn-o:hover {
  color: #e1d2b2;
  border-color: #e1d2b2;
  background: none !important;
}
.btn-beige.btn-o:active, .btn-beige.btn-o.active, .btn-beige.btn-o.active:focus, .btn-beige.btn-o:active:focus, .btn-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #bc9d57 !important;
  color: #bc9d57 !important;
}
.btn-beige.btn-o:focus {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #e1d2b2;
}
.btn-beige.btn-o.disabled:hover, .btn-beige.btn-o.disabled:focus, .btn-beige.btn-o.disabled:active, .btn-beige.btn-o.disabled.active, .btn-beige.btn-o[disabled], .btn-beige.btn-o[disabled]:hover, .btn-beige.btn-o[disabled]:focus, .btn-beige.btn-o[disabled]:active, .btn-beige.btn-o[disabled].active, fieldset[disabled] .btn-beige.btn-o:hover, fieldset[disabled] .btn-beige.btn-o:focus, fieldset[disabled] .btn-beige.btn-o:active, fieldset[disabled] .btn-beige.btn-o.active {
  border-color: #efe8d7;
  color: #efe8d7;
}

/*********************************************/
.btn-light-beige {
  background-color: #d9c8a0;
  border-color: #d9c8a0;
  color: #ffffff;
}
.btn-light-beige:hover {
  background-color: #e8ddc5 !important;
  border-color: #e8ddc5;
  color: #ffffff;
}
.btn-light-beige:active, .btn-light-beige.active, .btn-light-beige.active:focus, .btn-light-beige:active:focus, .btn-light-beige:active:hover, .btn-light-beige.dropdown-toggle:active:hover {
  background-color: #d2bd8e !important;
  border-color: #d2bd8e;
}
.btn-light-beige:focus {
  background-color: #efe8d7;
  border-color: #efe8d7;
  color: #ffffff;
}
.btn-light-beige.disabled:hover, .btn-light-beige.disabled:focus, .btn-light-beige.disabled:active, .btn-light-beige.disabled.active, .btn-light-beige[disabled], .btn-light-beige[disabled]:hover, .btn-light-beige[disabled]:focus, .btn-light-beige[disabled]:active, .btn-light-beige[disabled].active, fieldset[disabled] .btn-light-beige:hover, fieldset[disabled] .btn-light-beige:focus, fieldset[disabled] .btn-light-beige:active, fieldset[disabled] .btn-light-beige.active {
  background-color: #f6f2e9;
  border-color: #f6f2e9;
  color: #ffffff;
}
.btn-light-beige.btn-o {
  border: 1px solid #d9c8a0;
  color: #d9c8a0;
}
.btn-light-beige.btn-o:hover {
  color: #e8ddc5;
  border-color: #e8ddc5;
  background: none !important;
}
.btn-light-beige.btn-o:active, .btn-light-beige.btn-o.active, .btn-light-beige.btn-o.active:focus, .btn-light-beige.btn-o:active:focus, .btn-light-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c3a86a !important;
  color: #c3a86a !important;
}
.btn-light-beige.btn-o:focus {
  background-color: #f6f2e9;
  border-color: #f6f2e9;
  color: #e8ddc5;
}
.btn-light-beige.btn-o.disabled:hover, .btn-light-beige.btn-o.disabled:focus, .btn-light-beige.btn-o.disabled:active, .btn-light-beige.btn-o.disabled.active, .btn-light-beige.btn-o[disabled], .btn-light-beige.btn-o[disabled]:hover, .btn-light-beige.btn-o[disabled]:focus, .btn-light-beige.btn-o[disabled]:active, .btn-light-beige.btn-o[disabled].active, fieldset[disabled] .btn-light-beige.btn-o:hover, fieldset[disabled] .btn-light-beige.btn-o:focus, fieldset[disabled] .btn-light-beige.btn-o:active, fieldset[disabled] .btn-light-beige.btn-o.active {
  border-color: #f6f2e9;
  color: #f6f2e9;
}

/*********************************************/
.btn-dark-beige {
  background-color: #c3a86a;
  border-color: #c3a86a;
  color: #ffffff;
}
.btn-dark-beige:hover {
  background-color: #d2bd8e !important;
  border-color: #d2bd8e;
  color: #ffffff;
}
.btn-dark-beige:active, .btn-dark-beige.active, .btn-dark-beige.active:focus, .btn-dark-beige:active:focus, .btn-dark-beige:active:hover, .btn-dark-beige.dropdown-toggle:active:hover {
  background-color: #bc9d57 !important;
  border-color: #bc9d57;
}
.btn-dark-beige:focus {
  background-color: #d9c8a0;
  border-color: #d9c8a0;
  color: #ffffff;
}
.btn-dark-beige.disabled:hover, .btn-dark-beige.disabled:focus, .btn-dark-beige.disabled:active, .btn-dark-beige.disabled.active, .btn-dark-beige[disabled], .btn-dark-beige[disabled]:hover, .btn-dark-beige[disabled]:focus, .btn-dark-beige[disabled]:active, .btn-dark-beige[disabled].active, fieldset[disabled] .btn-dark-beige:hover, fieldset[disabled] .btn-dark-beige:focus, fieldset[disabled] .btn-dark-beige:active, fieldset[disabled] .btn-dark-beige.active {
  background-color: #e1d2b2;
  border-color: #e1d2b2;
  color: #ffffff;
}
.btn-dark-beige.btn-o {
  border: 1px solid #c3a86a;
  color: #c3a86a;
}
.btn-dark-beige.btn-o:hover {
  color: #d2bd8e;
  border-color: #d2bd8e;
  background: none !important;
}
.btn-dark-beige.btn-o:active, .btn-dark-beige.btn-o.active, .btn-dark-beige.btn-o.active:focus, .btn-dark-beige.btn-o:active:focus, .btn-dark-beige.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #a18340 !important;
  color: #a18340 !important;
}
.btn-dark-beige.btn-o:focus {
  background-color: #e1d2b2;
  border-color: #e1d2b2;
  color: #d2bd8e;
}
.btn-dark-beige.btn-o.disabled:hover, .btn-dark-beige.btn-o.disabled:focus, .btn-dark-beige.btn-o.disabled:active, .btn-dark-beige.btn-o.disabled.active, .btn-dark-beige.btn-o[disabled], .btn-dark-beige.btn-o[disabled]:hover, .btn-dark-beige.btn-o[disabled]:focus, .btn-dark-beige.btn-o[disabled]:active, .btn-dark-beige.btn-o[disabled].active, fieldset[disabled] .btn-dark-beige.btn-o:hover, fieldset[disabled] .btn-dark-beige.btn-o:focus, fieldset[disabled] .btn-dark-beige.btn-o:active, fieldset[disabled] .btn-dark-beige.btn-o.active {
  border-color: #e1d2b2;
  color: #e1d2b2;
}

/*********************************************/
.btn-yellow {
  background-color: #FFB848;
  border-color: #FFB848;
  color: #ffffff;
}
.btn-yellow:hover {
  background-color: #ffcc7b !important;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-yellow:active, .btn-yellow.active, .btn-yellow.active:focus, .btn-yellow:active:focus, .btn-yellow:active:hover, .btn-yellow.dropdown-toggle:active:hover {
  background-color: #ffae2e !important;
  border-color: #ffae2e;
}
.btn-yellow:focus {
  background-color: #ffd694;
  border-color: #ffd694;
  color: #ffffff;
}
.btn-yellow.disabled:hover, .btn-yellow.disabled:focus, .btn-yellow.disabled:active, .btn-yellow.disabled.active, .btn-yellow[disabled], .btn-yellow[disabled]:hover, .btn-yellow[disabled]:focus, .btn-yellow[disabled]:active, .btn-yellow[disabled].active, fieldset[disabled] .btn-yellow:hover, fieldset[disabled] .btn-yellow:focus, fieldset[disabled] .btn-yellow:active, fieldset[disabled] .btn-yellow.active {
  background-color: #ffe0ae;
  border-color: #ffe0ae;
  color: #ffffff;
}
.btn-yellow.btn-o {
  border: 1px solid #FFB848;
  color: #FFB848;
}
.btn-yellow.btn-o:hover {
  color: #ffcc7b;
  border-color: #ffcc7b;
  background: none !important;
}
.btn-yellow.btn-o:active, .btn-yellow.btn-o.active, .btn-yellow.btn-o.active:focus, .btn-yellow.btn-o:active:focus, .btn-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #fa9900 !important;
  color: #fa9900 !important;
}
.btn-yellow.btn-o:focus {
  background-color: #ffe0ae;
  border-color: #ffe0ae;
  color: #ffcc7b;
}
.btn-yellow.btn-o.disabled:hover, .btn-yellow.btn-o.disabled:focus, .btn-yellow.btn-o.disabled:active, .btn-yellow.btn-o.disabled.active, .btn-yellow.btn-o[disabled], .btn-yellow.btn-o[disabled]:hover, .btn-yellow.btn-o[disabled]:focus, .btn-yellow.btn-o[disabled]:active, .btn-yellow.btn-o[disabled].active, fieldset[disabled] .btn-yellow.btn-o:hover, fieldset[disabled] .btn-yellow.btn-o:focus, fieldset[disabled] .btn-yellow.btn-o:active, fieldset[disabled] .btn-yellow.btn-o.active {
  border-color: #ffe0ae;
  color: #ffe0ae;
}

/*********************************************/
.btn-light-yellow {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-light-yellow:hover {
  background-color: #ffe0ae !important;
  border-color: #ffe0ae;
  color: #ffffff;
}
.btn-light-yellow:active, .btn-light-yellow.active, .btn-light-yellow.active:focus, .btn-light-yellow:active:focus, .btn-light-yellow:active:hover, .btn-light-yellow.dropdown-toggle:active:hover {
  background-color: #ffc261 !important;
  border-color: #ffc261;
}
.btn-light-yellow:focus {
  background-color: #ffe9c7;
  border-color: #ffe9c7;
  color: #ffffff;
}
.btn-light-yellow.disabled:hover, .btn-light-yellow.disabled:focus, .btn-light-yellow.disabled:active, .btn-light-yellow.disabled.active, .btn-light-yellow[disabled], .btn-light-yellow[disabled]:hover, .btn-light-yellow[disabled]:focus, .btn-light-yellow[disabled]:active, .btn-light-yellow[disabled].active, fieldset[disabled] .btn-light-yellow:hover, fieldset[disabled] .btn-light-yellow:focus, fieldset[disabled] .btn-light-yellow:active, fieldset[disabled] .btn-light-yellow.active {
  background-color: #fff3e1;
  border-color: #fff3e1;
  color: #ffffff;
}
.btn-light-yellow.btn-o {
  border: 1px solid #ffcc7b;
  color: #ffcc7b;
}
.btn-light-yellow.btn-o:hover {
  color: #ffe0ae;
  border-color: #ffe0ae;
  background: none !important;
}
.btn-light-yellow.btn-o:active, .btn-light-yellow.btn-o.active, .btn-light-yellow.btn-o.active:focus, .btn-light-yellow.btn-o:active:focus, .btn-light-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #ffae2e !important;
  color: #ffae2e !important;
}
.btn-light-yellow.btn-o:focus {
  background-color: #fff3e1;
  border-color: #fff3e1;
  color: #ffe0ae;
}
.btn-light-yellow.btn-o.disabled:hover, .btn-light-yellow.btn-o.disabled:focus, .btn-light-yellow.btn-o.disabled:active, .btn-light-yellow.btn-o.disabled.active, .btn-light-yellow.btn-o[disabled], .btn-light-yellow.btn-o[disabled]:hover, .btn-light-yellow.btn-o[disabled]:focus, .btn-light-yellow.btn-o[disabled]:active, .btn-light-yellow.btn-o[disabled].active, fieldset[disabled] .btn-light-yellow.btn-o:hover, fieldset[disabled] .btn-light-yellow.btn-o:focus, fieldset[disabled] .btn-light-yellow.btn-o:active, fieldset[disabled] .btn-light-yellow.btn-o.active {
  border-color: #fff3e1;
  color: #fff3e1;
}

/*********************************************/
.btn-dark-yellow {
  background-color: #ffa415;
  border-color: #ffa415;
  color: #ffffff;
}
.btn-dark-yellow:hover {
  background-color: #ffb848 !important;
  border-color: #ffb848;
  color: #ffffff;
}
.btn-dark-yellow:active, .btn-dark-yellow.active, .btn-dark-yellow.active:focus, .btn-dark-yellow:active:focus, .btn-dark-yellow:active:hover, .btn-dark-yellow.dropdown-toggle:active:hover {
  background-color: #fa9900 !important;
  border-color: #fa9900;
}
.btn-dark-yellow:focus {
  background-color: #ffc261;
  border-color: #ffc261;
  color: #ffffff;
}
.btn-dark-yellow.disabled:hover, .btn-dark-yellow.disabled:focus, .btn-dark-yellow.disabled:active, .btn-dark-yellow.disabled.active, .btn-dark-yellow[disabled], .btn-dark-yellow[disabled]:hover, .btn-dark-yellow[disabled]:focus, .btn-dark-yellow[disabled]:active, .btn-dark-yellow[disabled].active, fieldset[disabled] .btn-dark-yellow:hover, fieldset[disabled] .btn-dark-yellow:focus, fieldset[disabled] .btn-dark-yellow:active, fieldset[disabled] .btn-dark-yellow.active {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffffff;
}
.btn-dark-yellow.btn-o {
  border: 1px solid #ffa415;
  color: #ffa415;
}
.btn-dark-yellow.btn-o:hover {
  color: #ffb848;
  border-color: #ffb848;
  background: none !important;
}
.btn-dark-yellow.btn-o:active, .btn-dark-yellow.btn-o.active, .btn-dark-yellow.btn-o.active:focus, .btn-dark-yellow.btn-o:active:focus, .btn-dark-yellow.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #c77a00 !important;
  color: #c77a00 !important;
}
.btn-dark-yellow.btn-o:focus {
  background-color: #ffcc7b;
  border-color: #ffcc7b;
  color: #ffb848;
}
.btn-dark-yellow.btn-o.disabled:hover, .btn-dark-yellow.btn-o.disabled:focus, .btn-dark-yellow.btn-o.disabled:active, .btn-dark-yellow.btn-o.disabled.active, .btn-dark-yellow.btn-o[disabled], .btn-dark-yellow.btn-o[disabled]:hover, .btn-dark-yellow.btn-o[disabled]:focus, .btn-dark-yellow.btn-o[disabled]:active, .btn-dark-yellow.btn-o[disabled].active, fieldset[disabled] .btn-dark-yellow.btn-o:hover, fieldset[disabled] .btn-dark-yellow.btn-o:focus, fieldset[disabled] .btn-dark-yellow.btn-o:active, fieldset[disabled] .btn-dark-yellow.btn-o.active {
  border-color: #ffcc7b;
  color: #ffcc7b;
}

/*********************************************/
.btn-grey {
  background-color: #c8c7cc;
  border-color: #c8c7cc;
  color: #ffffff;
}
.btn-grey:hover {
  background-color: #e2e2e4 !important;
  border-color: #e2e2e4;
  color: #ffffff;
}
.btn-grey:active, .btn-grey.active, .btn-grey.active:focus, .btn-grey:active:focus, .btn-grey:active:hover, .btn-grey.dropdown-toggle:active:hover {
  background-color: #bbbac0 !important;
  border-color: #bbbac0;
}
.btn-grey:focus {
  background-color: #efeff0;
  border-color: #efeff0;
  color: #ffffff;
}
.btn-grey.disabled:hover, .btn-grey.disabled:focus, .btn-grey.disabled:active, .btn-grey.disabled.active, .btn-grey[disabled], .btn-grey[disabled]:hover, .btn-grey[disabled]:focus, .btn-grey[disabled]:active, .btn-grey[disabled].active, fieldset[disabled] .btn-grey:hover, fieldset[disabled] .btn-grey:focus, fieldset[disabled] .btn-grey:active, fieldset[disabled] .btn-grey.active {
  background-color: #fcfcfd;
  border-color: #fcfcfd;
  color: #ffffff;
}
.btn-grey.btn-o {
  border: 1px solid #c8c7cc;
  color: #c8c7cc;
}
.btn-grey.btn-o:hover {
  color: #e2e2e4;
  border-color: #e2e2e4;
  background: none !important;
}
.btn-grey.btn-o:active, .btn-grey.btn-o.active, .btn-grey.btn-o.active:focus, .btn-grey.btn-o:active:focus, .btn-grey.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #a19fa8 !important;
  color: #a19fa8 !important;
}
.btn-grey.btn-o:focus {
  background-color: #fcfcfd;
  border-color: #fcfcfd;
  color: #e2e2e4;
}
.btn-grey.btn-o.disabled:hover, .btn-grey.btn-o.disabled:focus, .btn-grey.btn-o.disabled:active, .btn-grey.btn-o.disabled.active, .btn-grey.btn-o[disabled], .btn-grey.btn-o[disabled]:hover, .btn-grey.btn-o[disabled]:focus, .btn-grey.btn-o[disabled]:active, .btn-grey.btn-o[disabled].active, fieldset[disabled] .btn-grey.btn-o:hover, fieldset[disabled] .btn-grey.btn-o:focus, fieldset[disabled] .btn-grey.btn-o:active, fieldset[disabled] .btn-grey.btn-o.active {
  border-color: #fcfcfd;
  color: #fcfcfd;
}

/*********************************************/
.btn-light-grey {
  background-color: #f7f7f8;
  border-color: #f7f7f8;
  color: #8e8e93;
}
.btn-light-grey:hover {
  background-color: white !important;
  border-color: white;
  color: #8e8e93;
}
.btn-light-grey:active, .btn-light-grey.active, .btn-light-grey.active:focus, .btn-light-grey:active:focus, .btn-light-grey:active:hover, .btn-light-grey.dropdown-toggle:active:hover {
  background-color: #eaeaec !important;
  border-color: #eaeaec;
}
.btn-light-grey:focus {
  background-color: white;
  border-color: white;
  color: #8e8e93;
}
.btn-light-grey.disabled:hover, .btn-light-grey.disabled:focus, .btn-light-grey.disabled:active, .btn-light-grey.disabled.active, .btn-light-grey[disabled], .btn-light-grey[disabled]:hover, .btn-light-grey[disabled]:focus, .btn-light-grey[disabled]:active, .btn-light-grey[disabled].active, fieldset[disabled] .btn-light-grey:hover, fieldset[disabled] .btn-light-grey:focus, fieldset[disabled] .btn-light-grey:active, fieldset[disabled] .btn-light-grey.active {
  background-color: white;
  border-color: white;
  color: #c2c2c5;
}
.btn-light-grey.btn-o {
  border: 1px solid #f7f7f8;
  color: #f7f7f8;
}
.btn-light-grey.btn-o:hover {
  color: #a8a8ac;
  border-color: white;
  background: none !important;
}
.btn-light-grey.btn-o:active, .btn-light-grey.btn-o.active, .btn-light-grey.btn-o.active:focus, .btn-light-grey.btn-o:active:focus, .btn-light-grey.btn-o:active:hover {
  background-color: #eaeaec !important;
  border-color: #d0cfd3 !important;
  color: #68686d !important;
}
.btn-light-grey.btn-o:focus {
  background-color: white;
  border-color: white;
  color: white;
}
.btn-light-grey.btn-o.disabled:hover, .btn-light-grey.btn-o.disabled:focus, .btn-light-grey.btn-o.disabled:active, .btn-light-grey.btn-o.disabled.active, .btn-light-grey.btn-o[disabled], .btn-light-grey.btn-o[disabled]:hover, .btn-light-grey.btn-o[disabled]:focus, .btn-light-grey.btn-o[disabled]:active, .btn-light-grey.btn-o[disabled].active, fieldset[disabled] .btn-light-grey.btn-o:hover, fieldset[disabled] .btn-light-grey.btn-o:focus, fieldset[disabled] .btn-light-grey.btn-o:active, fieldset[disabled] .btn-light-grey.btn-o.active {
  border-color: white;
  color: #c2c2c5;
}

/*********************************************/
.btn-dark-grey {
  background-color: #aeacb4;
  border-color: #aeacb4;
  color: #ffffff;
}
.btn-dark-grey:hover {
  background-color: #c8c7cc !important;
  border-color: #c8c7cc;
  color: #ffffff;
}
.btn-dark-grey:active, .btn-dark-grey.active, .btn-dark-grey.active:focus, .btn-dark-grey:active:focus, .btn-dark-grey:active:hover, .btn-dark-grey.dropdown-toggle:active:hover {
  background-color: #a19fa8 !important;
  border-color: #a19fa8;
}
.btn-dark-grey:focus {
  background-color: #d5d4d8;
  border-color: #d5d4d8;
  color: #ffffff;
}
.btn-dark-grey.disabled:hover, .btn-dark-grey.disabled:focus, .btn-dark-grey.disabled:active, .btn-dark-grey.disabled.active, .btn-dark-grey[disabled], .btn-dark-grey[disabled]:hover, .btn-dark-grey[disabled]:focus, .btn-dark-grey[disabled]:active, .btn-dark-grey[disabled].active, fieldset[disabled] .btn-dark-grey:hover, fieldset[disabled] .btn-dark-grey:focus, fieldset[disabled] .btn-dark-grey:active, fieldset[disabled] .btn-dark-grey.active {
  background-color: #e2e2e4;
  border-color: #e2e2e4;
  color: #ffffff;
}
.btn-dark-grey.btn-o {
  border: 1px solid #aeacb4;
  color: #aeacb4;
}
.btn-dark-grey.btn-o:hover {
  color: #c8c7cc;
  border-color: #c8c7cc;
  background: none !important;
}
.btn-dark-grey.btn-o:active, .btn-dark-grey.btn-o.active, .btn-dark-grey.btn-o.active:focus, .btn-dark-grey.btn-o:active:focus, .btn-dark-grey.btn-o:active:hover {
  background-color: #a19fa8 !important;
  border-color: #86848f !important;
  color: #86848f !important;
}
.btn-dark-grey.btn-o:focus {
  background-color: #e2e2e4;
  border-color: #e2e2e4;
  color: #c8c7cc;
}
.btn-dark-grey.btn-o.disabled:hover, .btn-dark-grey.btn-o.disabled:focus, .btn-dark-grey.btn-o.disabled:active, .btn-dark-grey.btn-o.disabled.active, .btn-dark-grey.btn-o[disabled], .btn-dark-grey.btn-o[disabled]:hover, .btn-dark-grey.btn-o[disabled]:focus, .btn-dark-grey.btn-o[disabled]:active, .btn-dark-grey.btn-o[disabled].active, fieldset[disabled] .btn-dark-grey.btn-o:hover, fieldset[disabled] .btn-dark-grey.btn-o:focus, fieldset[disabled] .btn-dark-grey.btn-o:active, fieldset[disabled] .btn-dark-grey.btn-o.active {
  border-color: #e2e2e4;
  color: #e2e2e4;
}
/*********************************************/
.btn-transparent-white {
  background: none;
  border-color: rgba(255, 255, 255, 0.6);
  border-width: 1px;
  color: #ffffff !important;
}
.btn-transparent-white:hover, .btn-transparent-white:focus, .btn-transparent-white:active, .btn-transparent-white.active {
  background-color: rgba(44, 47, 59, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}
.btn-transparent-white.disabled:hover, .btn-transparent-white.disabled:focus, .btn-transparent-white.disabled:active, .btn-transparent-white.disabled.active, .btn-transparent-white[disabled]:hover, .btn-transparent-white[disabled]:focus, .btn-transparent-white[disabled]:active, .btn-transparent-white[disabled].active, fieldset[disabled] .btn-transparent-white:hover, fieldset[disabled] .btn-transparent-white:focus, fieldset[disabled] .btn-transparent-white:active, fieldset[disabled] .btn-transparent-white.active {
  background: none;
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/*********************************************/
.btn-transparent-grey {
  background: none;
  border-color: rgba(200, 199, 204, 0.3);
  border-width: 1px;
  color: #c8c7cc !important;
}
.btn-transparent-grey:hover, .btn-transparent-grey:focus, .btn-transparent-grey:active, .btn-transparent-grey.active {
  background-color: rgba(200, 199, 204, 0.1);
  border-color: rgba(200, 199, 204, 0.6);
  box-shadow: none !important;
}
.btn-transparent-grey.disabled:hover, .btn-transparent-grey.disabled:focus, .btn-transparent-grey.disabled:active, .btn-transparent-grey.disabled.active, .btn-transparent-grey[disabled]:hover, .btn-transparent-grey[disabled]:focus, .btn-transparent-grey[disabled]:active, .btn-transparent-grey[disabled].active, fieldset[disabled] .btn-transparent-grey:hover, fieldset[disabled] .btn-transparent-grey:focus, fieldset[disabled] .btn-transparent-grey:active, fieldset[disabled] .btn-transparent-grey.active {
  background: none;
  border-color: rgba(200, 199, 204, 0.3);
  color: #c8c7cc;
}

/*********************************************/
.btn-transparent-red {
  background: none;
  border-color: rgba(200, 46, 41, 0.6);
  border-width: 2px;
  color: #C82E29 !important;
}
.btn-transparent-red:hover, .btn-transparent-red:focus, .btn-transparent-red:active, .btn-transparent-red.active {
  background-color: rgba(200, 46, 41, 0.1);
  border-color: rgba(200, 46, 41, 0.8);
}
.btn-transparent-red.disabled:hover, .btn-transparent-red.disabled:focus, .btn-transparent-red.disabled:active, .btn-transparent-red.disabled.active, .btn-transparent-red[disabled]:hover, .btn-transparent-red[disabled]:focus, .btn-transparent-red[disabled]:active, .btn-transparent-red[disabled].active, fieldset[disabled] .btn-transparent-red:hover, fieldset[disabled] .btn-transparent-red:focus, fieldset[disabled] .btn-transparent-red:active, fieldset[disabled] .btn-transparent-red.active {
  background: none;
  border-color: rgba(200, 46, 41, 0.3);
  color: #C82E29;
}
</style>