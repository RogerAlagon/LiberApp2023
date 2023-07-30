(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_28__);





var _components;











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    vista_entidad: {
      type: Number,
      "default": 0,
      required: false
    },
    vista_area: {
      type: Number,
      "default": 0,
      required: false
    },
    vista_nentidad: {
      type: String,
      "default": "",
      required: false
    },
    vista_narea: {
      type: String,
      "default": "",
      required: false
    },
    vista_implemento: {
      type: String,
      "default": "GENERICO",
      required: false
    }
  },
  components: (_components = {
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BToast"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_14__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BImg"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BSpinner"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BButton"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BButtonGroup"],
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_22__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BPagination"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BCard"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BCardText"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_20___default.a
  }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BFormCheckbox"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BCardBody", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BCardBody"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "FormWizard", vue_form_wizard__WEBPACK_IMPORTED_MODULE_15__["FormWizard"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "TabContent", vue_form_wizard__WEBPACK_IMPORTED_MODULE_15__["TabContent"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BInputGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BInputGroup"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BInputGroupPrepend", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BInputGroupPrepend"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "Cleave", vue_cleave_component__WEBPACK_IMPORTED_MODULE_24___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "AppTimeline", _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_18__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "AppTimelineItem", _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_19__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BCollapse", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BCollapse"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BTabs", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BTabs"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "BTab", bootstrap_vue__WEBPACK_IMPORTED_MODULE_17__["BTab"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "AppCollapseItem", _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_27__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_components, "AppCollapse", _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_26__["default"]), _components),
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  data: function data() {
    return {
      /**************************** elementos de ux ****************************/
      dir: false,
      pageLength: 20,
      searchTerm: '',
      tabIndex: 1,

      /**************************** tabla ****************************/
      tcolumnas: [{
        label: '',
        field: 'acciones'
      }, {
        label: 'ID',
        field: 'idRuta'
      }, {
        label: 'Cliente',
        field: 'nombreExt'
      }, {
        label: 'Tipo Veh.',
        field: 'vehiculoRut'
      }, {
        label: 'Carga',
        field: 'cargaRut'
      }, {
        label: 'Origen',
        field: 'origenRut'
      }, {
        label: 'Destino',
        field: 'destinoRut'
      }],

      /**************************** modal ****************************/
      headerBgVariant: 'dark',
      headerTextVariant: 'success',
      headerTitleVariant: 'NUEVO GRUPO',
      bodyBgVariant: 'light',
      bodyTextVariant: 'success',
      footerBgVariant: 'dark',
      footerTextVariant: 'dark',
      showModal: false,
      showLoading: false,
      boton: false,
      headerBgVariantI: 'dark',
      headerTextVariantI: 'success',
      headerTitleVariantI: 'NUEVO IMPLEMENTO',
      bodyBgVariantI: 'light',
      bodyTextVariantI: 'success',
      footerBgVariantI: 'dark',
      footerTextVariantI: 'dark',
      showModalI: false,

      /**************************** entorno ****************************/
      validacionImplemento: [{
        value: 'NINGUNO',
        text: 'NINGUNO'
      }, {
        value: 'KILOMETRAJE',
        text: 'KILOMETRAJE'
      }, {
        value: 'FECHA',
        text: 'FECHA'
      }, {
        value: 'CHECK',
        text: 'CHECK'
      }, {
        value: 'HOROMETRAJE',
        text: 'HOROMETRAJE'
      }],
      tipoImplemento: [{
        value: 'ACTIVO',
        text: 'ACTIVO'
      }, {
        value: 'CONSUMIBLE',
        text: 'CONSUMIBLE'
      }, {
        value: 'DOCUMENTO',
        text: 'DOCUMENTO'
      }, {
        value: 'ACTIVIDAD',
        text: 'ACTIVIDAD'
      }, {
        value: 'CHECK',
        text: 'CHECK'
      }],
      vigenciaImplemento: [{
        value: '0',
        text: 'NO'
      }, {
        value: '1',
        text: 'SI'
      }],
      renovacionImplemento: [{
        value: '0',
        text: 'NO'
      }, {
        value: '1',
        text: 'SI'
      }],
      propiedadImplemento: [{
        value: 'INSTRANSFERIBLE',
        text: 'INSTRANSFERIBLE'
      }, {
        value: 'TRANSFERIBLE',
        text: 'TRANSFERIBLE'
      }],
      zentidades: [],
      material: [],
      zareas: [],
      zimplementos: ['ACTIVO', 'CONSUMIBLE', 'DOCUMENTO', 'ACTIVIDAD', 'CHECK'],
      yentidad: {},
      yarea: {},
      yimplemento: {},
      entidad: {},
      area: {},
      grupos2: [],
      grupos: [],
      resultado: [],
      rutas: [],
      tvehiculos: [],
      cargas: [],
      ubicaciones: [],
      externos: [],
      tramos: [],
      recorridos: [],
      plantilla: {
        idPlantilla: 0,
        Area_idArea: 0,
        nombrePla: "",
        Cuenta_idDato: 0,
        Entidad_idDato: 0,
        multiplicadorPla: 0
      },

      /*plantilla: {
          idRuta: "",
          nombreRut: "",
          vehiculoRut: "",
          cargaRut: "",
          origenRut: "",
          destinoRut: "",
          roundtripRut: 0,
          alimentacionRut: "",
          tramosRut: "",
          hospedajesRut: "",
          cocherasRut: "",
          viaticosRut: "",
      },*/

      /**************************** formulario ****************************/
      grupo: {
        idGrupo: 0,
        nombreGru: "",
        Entidad_idDato: 0,
        Area_idArea: 0
      },
      ruta: {
        idRuta: "",
        nombreRut: "",
        vehiculoRut: "",
        cargaRut: "",
        origenRut: "",
        destinoRut: "",
        roundtripRut: 0,
        alimentacionRut: "",
        tramosRut: "",
        hospedajesRut: "",
        cocherasRut: "",
        viaticosRut: ""
      },
      implemento: {
        idImplemento: 0,
        nombreImp: "",
        vigenciaImp: "",
        renovableImp: "",
        graveImp: "",
        medioImp: "",
        leveImp: "",
        Entidad_idDato: 0,
        costoImp: 0,
        cantidadImp: 0,
        Grupo_idGrupo: 0,
        tipoImp: "",
        propiedadImp: "",
        Proveedor_idExterno: 0,
        validacionImp: "",
        Medida_idDato: 0,
        alertaImp: "",
        Material_idMaterial: 0,
        renovacionImp: ""
      },
      //costos: [],
      recorridos_actuales: [],
      //minitabla

      /*ytramo: {},
      yhospedaje: "",
      ycochera: "",
      yviatico: "",*/
      ynro: 0,
      faqData: {},
      faqSearchQuery: '',
      informacion: {
        faqData: {
          // payment
          payment: {
            icon: 'CreditCardIcon',
            title: 'Payment',
            subtitle: 'Which license do I need?',
            qandA: [{
              question: 'Does my subscription automatically renew?',
              ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
            }, {
              question: 'Can I store the item on an intranet so everyone has access?',
              ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
            }, {
              question: 'What does non-exclusive mean?',
              ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
            }, {
              question: 'Is the Regular License the same thing as an editorial license?',
              ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
            }, {
              question: 'Which license do I need for an end product that is only accessible to paying users?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }, {
              question: 'Which license do I need to use an item in a commercial?',
              ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.'
            }, {
              question: 'Can I re-distribute an item? What about under an Extended License?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
            }]
          },
          // delivery
          delivery: {
            icon: 'ShoppingBagIcon',
            title: 'Delivery',
            subtitle: 'Which license do I need?',
            qandA: [{
              question: 'Where has my order reached?',
              ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
            }, {
              question: 'The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?',
              ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
            }, {
              question: 'What if my shipment is marked as lost?',
              ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
            }, {
              question: 'My shipment status shows that it’s out for delivery. By when will I receive it?',
              ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
            }, {
              question: 'What do I need to do to get the shipment delivered within a specific timeframe?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }]
          },
          // cancellation and return
          cancellationReturn: {
            icon: 'RefreshCwIcon',
            title: 'Cancellation & Return',
            subtitle: 'Which license do I need?',
            qandA: [{
              question: 'Can my security guard or neighbour receive my shipment if I am not available?',
              ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
            }, {
              question: 'How can I get the contact number of my delivery agent?',
              ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
            }, {
              question: 'How can I cancel my shipment?',
              ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
            }, {
              question: 'I have received a defective/damaged product. What do I do?',
              ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
            }, {
              question: 'How do I change my delivery address?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }, {
              question: 'What documents do I need to carry for self-collection of my shipment?',
              ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.'
            }, {
              question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
            }]
          },
          // my orders
          myOrders: {
            icon: 'PackageIcon',
            title: 'My Orders',
            subtitle: 'Which license do I need?',
            qandA: [{
              question: 'Can I avail of an open delivery?',
              ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
            }, {
              question: 'I haven’t received the refund of my returned shipment. What do I do?',
              ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
            }, {
              question: 'How can I ship my order to an international location?',
              ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
            }, {
              question: 'I missed the delivery of my order today. What should I do?',
              ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
            }, {
              question: 'The delivery of my order is delayed. What should I do?',
              ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }]
          },
          // product and services
          productServices: {
            icon: 'SettingsIcon',
            title: 'Product & Services',
            subtitle: 'Which license do I need?',
            qandA: [{
              question: 'How can I register a complaint against the courier executive who came to deliver my order?',
              ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
            }, {
              question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
              ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
            }, {
              question: 'How can I get a proof of delivery for my shipment?',
              ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
            }, {
              question: 'How can I avail your services?',
              ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
            }]
          }
        }
      }
    };
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler: function handler() {
        this.fetchData();
      }
    }
  },
  methods: {
    fetchData: function fetchData() {
      /*this.$http.get('/faq/data', { params: { q: this.faqSearchQuery } }).then(res => {
      this.faqData = res.data
      })*/

      /*const { q = '' } = { q: this.faqSearchQuery };
      const queryLowered = q.toLowerCase();
        const filteredData = {}
        Object.entries(this.informacion.faqData).forEach(entry => {
          const [categoryName, categoryObj] = entry
          // eslint-disable-next-line arrow-body-style
          const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
              return qAndAObj.question.toLowerCase().includes(queryLowered)
          })
          if (filteredQAndAOfCategory.length)
          {
              filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
          }
      })
        this.faqData = filteredData;*/
      //return [200, filteredData];
      var _q = {
        q: this.faqSearchQuery
      },
          _q$q = _q.q,
          q = _q$q === void 0 ? '' : _q$q;
      var queryLowered = q.toLowerCase();
      var filteredData = {};
      Object.entries(this.grupos).forEach(function (entry) {
        var _entry = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(entry, 2),
            categoryName = _entry[0],
            categoryObj = _entry[1]; // eslint-disable-next-line arrow-body-style


        var filteredQAndAOfCategory = categoryObj.implementos.filter(function (qAndAObj) {
          return qAndAObj.nombreImp.toLowerCase().includes(queryLowered);
        });

        if (filteredQAndAOfCategory.length) {
          filteredData[categoryName] = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, categoryObj), {}, {
            implementos: filteredQAndAOfCategory
          });
        }
      });
      this.resultado = filteredData;
    },
    Toast: function Toast() {
      var prm_append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var prm_titulo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var prm_mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var toaster = 'b-toaster-bottom-full';
      this.$bvToast.toast(prm_mensaje, {
        title: prm_titulo,
        toaster: toaster,
        variant: variant,
        solid: false,
        appendToast: prm_append
      });
    },
    Listar: function Listar() {
      var _this = this;

      if (this.yentidad == null || this.yentidad == {}) {
        this.Toast(true, 'warning', 'Listar', 'Debe Ingresar un Tipo de Entidad');
        return;
      }

      if (this.yarea == null || this.yarea == {}) {
        this.Toast(true, 'warning', 'Listar', 'Debe Ingresar un Area');
        return;
      }
      /*var entidad = this.yentidad;
      var area = this.yarea;
        entidad.idDato = 287;
      area.idArea = 4;*/
      //this.$http.get('/LiberAPP/Implemento/Listar/'+entidad.idDato+'/'+area.idArea)
      //this.$http.get('/LiberAPP/Implemento/Listar/'+this.yentidad.idDato+'/'+this.yarea.idArea)


      this.$http.get('/LiberAPP/Implemento/Listar/' + this.yentidad.idDato + '/' + this.yarea.idArea).then(function (res) {
        _this.grupos = res.data;
        _this.resultado = res.data;
      })["catch"](function (error) {
        _this.Toast(true, 'danger', 'Implemento', 'Error al cargar los registros: ' + error);

        _this.showLoading = false;
      });
    },
    NuevoRecorrido: function NuevoRecorrido(prm_posicion) {
      var urecorrido = {
        "nroRec": this.ynro,
        "idRecorrido": 0,
        "nombreRec": "NUEVO RECORRIDO",
        "roundtripRec": "",
        "yrecorrido": [],
        "tramos": [],
        "tramo": {
          "ytramo": {},
          "yhospedaje": "",
          "ycochera": "",
          "yviatico": ""
        }
      };
      this.ynro++;
      prm_posicion++;
      this.recorridos_actuales.splice(prm_posicion, 0, urecorrido);
    },
    EliminarRecorrido: function EliminarRecorrido(prm_posicion) {
      this.recorridos_actuales.splice(prm_posicion, 1);
    },
    //AgregarTramo(prm_recorrido,prm_nro)
    AgregarTramo: function AgregarTramo(prm_tramo, prm_posicion) {
      if (prm_tramo.ytramo == null || prm_tramo.ytramo == {} || Object.keys(prm_tramo.ytramo).length === 0) {
        this.Toast(true, 'danger', 'Agregar Tramo', 'Seleccione un Tramo');
        return;
      }

      if (prm_tramo.yhospedaje == null || prm_tramo.yhospedaje == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Costo de Hospedaje');
        return;
      }

      if (prm_tramo.ycochera == null || prm_tramo.ycochera == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Costo de Cochera del Operador');
        return;
      }

      if (prm_tramo.yecochera == null || prm_tramo.yecochera == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Costo de Cochera del Escoltas');
        return;
      }

      if (prm_tramo.yviatico == null || prm_tramo.yviatico == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Costo de Viático');
        return;
      }

      if (prm_tramo.yviatico == null || prm_tramo.yviatico == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Costo de Viático');
        return;
      }

      if (prm_tramo.ydviatico == null || prm_tramo.ydviatico == "") {
        this.Toast(true, 'warning', 'Agregar Tramo', 'Ingrese el Detalle del Gasto Adicional');
        return;
      }

      var utramo = {
        id: prm_tramo.ytramo.idTramo,
        inicio: prm_tramo.ytramo.inicioTra,
        termino: prm_tramo.ytramo.terminoTra,
        hospedaje: prm_tramo.yhospedaje,
        cochera: prm_tramo.ycochera,
        ecochera: prm_tramo.yecochera,
        viatico: prm_tramo.yviatico,
        dviatico: prm_tramo.ydviatico,
        peaje: prm_tramo.ytramo.peajeTra,
        camioneta: prm_tramo.ytramo.camionetaTra
      }; //AGREGANDO EL TRAMO A LA LISTA

      this.recorridos_actuales[prm_posicion].tramos.push(utramo);
      this.recorridos_actuales[prm_posicion].tramo = {
        "ytramo": {},
        "yhospedaje": "",
        "ycochera": "",
        "yecochera": "",
        "yviatico": "",
        "ydviatico": ""
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
    EliminarTramo: function EliminarTramo(prm_pos, prm_indice) {
      //if(this.costos[prm_indice].corte == "1")
      //this.cortes[1].disabled = false;//se inhabilita el corte porque ya se ingreso uno
      //if(this.costos[prm_indice].corte == "2")
      //this.cortes[2].disabled = false;//se inhabilita el corte porque ya se ingreso uno
      this.recorridos_actuales[prm_pos].tramos.splice(prm_indice, 1);
    },
    Roundtrip: function Roundtrip() {
      var roundtrip = 0;
      /*this.recorridos_actuales.forEach(function(urecorrido)
      {
          roundtrip += urecorrido.roundtripRec;
      });*/

      var _iterator = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this.recorridos_actuales),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var urecorrido = _step.value;
          roundtrip += Number(urecorrido.roundtripRec);
        } //this.ruta.roundtripRut = 0;

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.ruta.roundtripRut = roundtrip;
    },
    Nuevo: function Nuevo(prm_entidad, prm_grupo) {
      this.grupo.Entidad_idDato = this.yentidad.idDato;
      this.grupo.Area_idArea = this.yarea.idArea;
      this.implemento.Entidad_idDato = prm_entidad.idDato;
      this.implemento.Grupo_idGrupo = prm_grupo.idgrupo;
      this.headerTextVariant = 'success';
      this.boton = false;
      this.headerTitleVariant = "NUEVA GRUPO";

      if (this.vista_entidad !== 0) {
        this.grupo.Entidad_idDato = this.vista_entidad;
        this.grupo.Area_idArea = this.vista_area;
      } //Seteando los valores para el modal


      this.ruta = Object.assign({}, this.plantilla);
      this.recorridos_actuales = [];
      this.ynro = 0;
      this.implemento = {
        idImplemento: 0,
        nombreImp: "",
        vigenciaImp: "",
        renovableImp: "",
        graveImp: "",
        medioImp: "",
        leveImp: "",
        Entidad_idDato: this.implemento.Entidad_idDato,
        costoImp: 0,
        cantidadImp: 0,
        Grupo_idGrupo: this.implemento.Grupo_idGrupo,
        tipoImp: "",
        propiedadImp: "",
        Proveedor_idExterno: 0,
        validacionImp: "",
        Medida_idDato: 0,
        alertaImp: ""
      };
    },
    EditarImplemento: function EditarImplemento(prm_grupo) {
      this.headerTextVariant = 'primary';
      this.headerTitleVariant = 'EDITAR IMPLEMENTO';
      this.implemento = prm_grupo;
      this.boton = true;
    },
    Editar: function Editar(prm_ruta) {
      this.headerTextVariant = 'primary';
      this.headerTitleVariant = "EDITAR RUTA";
      this.boton = true; //Seteando los valores para el modal

      this.ruta = Object.assign({}, prm_ruta);
      delete this.ruta.vgt_id;
      delete this.ruta.originalIndex; //Agregando los parámetros de viáticos adicionales

      var ahospedajes = prm_ruta.hospedajesRut.split('-');
      var acocheras = prm_ruta.cocherasRut.split("-");
      var aecocheras = prm_ruta.ecocherasRut.split("-");
      var aviaticos = prm_ruta.viaticosRut.split("-");
      var adviaticos = prm_ruta.dviaticosRut.split("-");
      var atramos = prm_ruta.tramosRut.split("-");
      var arecorridos = prm_ruta.recorridosRut.split("-");
      var aroundtrips = prm_ruta.diasRut.split("-");
      var aasignaciones = prm_ruta.asignacionesRut.split("-");
      var recorridos = [];
      var apartado = 0;
      var cantidad = 0;

      for (var i = 0; i < atramos.length; i++) {
        if (cantidad == 0) {
          var zrecorridos = this.recorridos.filter(function (urecorrido) {
            return urecorrido.idDato == arecorridos[i];
          });
          var zrecorrido = zrecorridos.length > 0 ? zrecorridos[0] : null;
          var urecorrido = {
            "nroRec": apartado,
            "idRecorrido": arecorridos[i],
            "nombreRec": zrecorrido.valorDat,
            "roundtripRec": aroundtrips[apartado],
            "yrecorrido": zrecorrido,
            "tramos": [],
            "tramo": {
              "ytramo": {},
              "yhospedaje": "",
              "ycochera": "",
              "yecochera": "",
              "yviatico": "",
              "ydviatico": ""
            }
          };
          cantidad = aasignaciones[apartado];
          recorridos.push(urecorrido);
          apartado++;
        }

        var ztramos = this.tramos.filter(function (utramo) {
          return utramo.idTramo == atramos[i];
        });
        var ztramo = ztramos.length > 0 ? ztramos[0] : null;
        var utramo = {
          "inicio": ztramo.inicioTra,
          "termino": ztramo.terminoTra,
          "id": ztramo.idTramo,
          "hospedaje": ahospedajes[i],
          "cochera": acocheras[i],
          "ecochera": aecocheras[i],
          "viatico": aviaticos[i],
          "dviatico": adviaticos[i],
          "peaje": ztramo.peajeTra,
          "camioneta": ztramo.camionetaTra
        };
        recorridos[apartado - 1].tramos.push(utramo);
        cantidad--;
        /**/
        ////////////////////////////

        /*if(inicial != aasignaciones[])
        //Encontrar un objeto en un array por una de sus propiedades
        var ztramos = this.tramos.filter(function (utramo) { return utramo.idTramo == atramos[i]; });
        var ztramo = (ztramos.length > 0) ? ztramos[0] : null;
          var ucosto = {
            id: atramos[i],
            recorrido: arecorridos[i],
            inicio: ztramo.inicioTra,
            termino: ztramo.terminoTra,
            hospedaje: ahospedajes[i],
            cochera: acocheras[i],
            viatico: aviaticos[i],
        };
        this.costos.push(ucosto);*/
      }

      this.recorridos_actuales = recorridos;
      this.ynro = apartado;
    },

    /*Recorrido()
    {
        if(this.recorrido_actual == this.recorrido_siguiente)
            this.recorrido_actual = this.recorrido_actual-1;
        else
            this.recorrido_actual++;
        if(this.recorrido_actual > this.recorrido_detalle.length)
            this.recorrido_actual--;
    },*/
    Guardar: function Guardar() {
      var _this2 = this;

      this.showLoading = true;
      var jsonGrupo = JSON.stringify(this.grupo);
      this.$http.post('/LiberAPP/grupo/Guardar', {
        grupo: jsonGrupo
      }).then(function (res) {
        _this2.Toast(true, 'success', 'Agregar Grupo', 'Guardado Correctamente');

        _this2.showModal = false;
        _this2.showLoading = false;

        _this2.Listar();

        _this2.GrupoImplemento();
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Agregar Grupo', 'Error al guardar el registro: ' + error);

        _this2.showLoading = false;
      }); //buscando el nombre del externo

      /*var zidexterno = this.ruta.Externo_idExterno;
      var zexternos = this.externos.filter(function (uexterno) { return uexterno.idExterno == zidexterno; });
      var zexterno = (zexternos.length > 0) ? zexternos[0] : null;
      this.ruta.nombreExt = zexterno.nombreExt;
      //this.ruta.roundtripRut = parseInt(this.ruta.roundtripcRut) + parseInt(this.ruta.roundtripeRut) + parseInt(this.ruta.roundtriprRut);
        var jsonRuta = JSON.stringify(this.ruta);
      //var jsonTramo = JSON.stringify(this.costos);
      var jsonRecorrido = JSON.stringify(this.recorridos_actuales);
        this.$http.post('/LiberAPP/Ruta/Guardar',
      {
          ruta: jsonRuta,
          //tramo: jsonTramo,
          recorrido: jsonRecorrido
      })
      .then(res => {
          this.Toast(true,'success','Agregar Ruta','Guardado Correctamente');
          this.showModal = false;
          this.showLoading = false;
          this.Rutas();
      })
      .catch(error => {
          this.Toast(true,'danger','Agregar Ruta','Error al guardar el registro: '+error);
          this.showLoading = false;
      });*/
    },
    Actualizar: function Actualizar() {
      var _this3 = this;

      this.showLoading = true; //buscando el nombre del externo

      var zidexterno = this.ruta.Externo_idExterno;
      var zexternos = this.externos.filter(function (uexterno) {
        return uexterno.idExterno == zidexterno;
      });
      var zexterno = zexternos.length > 0 ? zexternos[0] : null;
      this.ruta.nombreExt = zexterno.nombreExt;
      var jsonRuta = JSON.stringify(this.ruta); //var jsonTramo = JSON.stringify(this.costos);

      var jsonRecorrido = JSON.stringify(this.recorridos_actuales); //this.ruta.roundtripRut = parseInt(this.ruta.roundtripcRut) + parseInt(this.ruta.roundtripeRut) + parseInt(this.ruta.roundtriprRut);

      this.$http.post('/LiberAPP/Ruta/Actualizar', {
        ruta: jsonRuta,
        //tramo: jsonTramo
        recorrido: jsonRecorrido
      }).then(function (res) {
        _this3.Toast(true, 'primary', 'Actualizar Ruta', 'Actualizado Correctamente');

        _this3.showModal = false;
        _this3.showLoading = false;

        _this3.Rutas();
      })["catch"](function (error) {
        _this3.Toast(true, 'danger', 'Actualizar Ruta', 'Error al actualizar el registro: ' + error);

        _this3.showLoading = false;
      });
    },
    GuardarImplemento: function GuardarImplemento() {
      var _this4 = this;

      this.shiowloading = true;
      var jsonImplemento = JSON.stringify(this.implemento);
      this.$http.post('/LiberAPP/Implemento/Guardar', {
        implemento: jsonImplemento
      }).then(function (res) {
        _this4.Toast(true, 'success', 'Agregar Grupo', 'Guardado Correctamente');

        _this4.showModalI = false;
        _this4.showLoading = false;

        _this4.Listar(); //this.implemento = [];


        _this4.implemento = {
          idImplemento: 0,
          nombreImp: "",
          vigenciaImp: "",
          renovableImp: "",
          graveImp: "",
          medioImp: "",
          leveImp: "",
          Entidad_idDato: _this4.implemento.Entidad_idDato,
          costoImp: 0,
          cantidadImp: 0,
          Grupo_idGrupo: _this4.implemento.Grupo_idGrupo,
          tipoImp: "",
          propiedadImp: "",
          Proveedor_idExterno: 0,
          validacionImp: "",
          Medida_idDato: 0,
          alertaImp: ""
        };
      })["catch"](function (error) {
        _this4.Toast(true, 'danger', 'Agregar Grupo', 'Error al guardar el registro: ' + error);

        _this4.showLoading = false;
      });
    },
    ActualizarImplemento: function ActualizarImplemento() {
      var _this5 = this;

      var jsonImplemento = JSON.stringify(this.implemento);
      this.$http.post('/LiberAPP/Implemento/Actualizar', {
        implemento: jsonImplemento
      }).then(function (res) {
        _this5.Toast(true, 'primary', 'Actualizar Implemento', 'Actualizado Correctamente');

        _this5.showModalI = false;
        _this5.showLoading = false;

        _this5.Listar();
      })["catch"](function (error) {
        _this5.Toast(true, 'danger', 'Actualizar Implemento', 'Error al actualizar registro: ' + error);

        _this5.showLoading = false;
      });
    },
    Grupo: function Grupo() {
      var _this6 = this;

      this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(function (res) {
        _this6.zentidades = res.data;
      })["catch"](function (error) {
        _this6.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

        _this6.showLoading = false;
      });
    },
    GrupoImplemento: function GrupoImplemento() {
      var _this7 = this;

      this.$http.get('/LiberAPP/grupo/Listar').then(function (res) {
        _this7.grupos2 = res.data;
      })["catch"](function (error) {
        _this7.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this7.showLoading = false;
      });
    }
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
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_23__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this8 = this;

    this.entidad = {
      idDato: this.vista_entidad,
      valorDat: this.vista_nentidad
    };
    this.area = {
      idArea: this.vista_area,
      nombreAre: this.vista_narea
    };

    if (this.vista_implemento == "GENERICO") //Si es Generico se Listan las Entidades y las Areas para Seleccionar
      {
        this.$http.get('/LiberAPP/Implemento/Listar/' + this.entidad + '/' + this.area).then(function (res) {
          _this8.grupos = res.data;
          _this8.resultado = res.data;
        })["catch"](function (error) {
          _this8.Toast(true, 'danger', 'Implemento', 'Error al cargar los registros: ' + error);
        });
      } else {
      this.narea = this.area.nombreAre;
      this.idArea = this.area.idArea;
      this.nentidad = this.entidad.valorDat;
      this.idEntidad = this.entidad.idDato;
      this.yentidad.idDato = this.entidad.idDato;
      this.yarea.idArea = this.area.idArea;
      this.$http.get('/LiberAPP/Implemento/Listar/' + this.vista_entidad + '/' + this.vista_area).then(function (res) {
        _this8.grupos = res.data;
        _this8.resultado = res.data;
      })["catch"](function (error) {
        _this8.Toast(true, 'danger', 'Implemento', 'Error al cargar los registros: ' + error);
      });
    }
    /*if ( this.vista_entidad )
    {
        this.$http.get('/LiberAPP/Implemento/Listar/'+this.vista_entidad+'/'+this.vista_area).then(res => {
            this.grupos = res.data;
            this.resultado = res.data;    
        }).catch(error => {
            this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    }
    // Solo si existe la variable 
    if ( this.entidad )
    {
        this.$http.get('/LiberAPP/Implemento/Listar/'+this.entidad+'/'+this.area).then(res => {
            this.grupos = res.data;
            this.resultado = res.data;    
        }).catch(error => {
            this.Toast(true,'danger','Implemento','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
    }*/

    /*this.$http.get('/LiberAPP/Ruta')
        .then(res => {
           this.rutas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Ruta','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
      this.$http.get('/LiberAPP/Tramo/SelectViatico')
        .then(res => {
            this.tramos = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Tramo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
      this.$http.get('/LiberAPP/Dato/Select/TVEHICULO/TRANSPORTE')
        .then(res => {
            this.tvehiculos = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Tipo de Vehiculo','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
      this.$http.get('/LiberAPP/Dato/Select/CARGA/TRANSPORTE')
        .then(res => {
            this.cargas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Carga','Error al cargar los registros: '+error);
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
      this.$http.get('/LiberAPP/Dato/Select/UBICACION/TRANSPORTE')
        .then(res => {
            this.ubicaciones = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Ubicacion','Error al cargar los registros: '+error);
            this.showLoading = false;
        });
            */


    this.$http.get('/LiberAPP/grupo/Listar').then(function (res) {
      _this8.grupos2 = res.data;
    })["catch"](function (error) {
      _this8.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

      _this8.showLoading = false;
    });
    this.$http.get('/LiberAPP/Externo/Select').then(function (res) {
      _this8.externos = res.data;
    })["catch"](function (error) {
      _this8.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

      _this8.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(function (res) {
      _this8.zentidades = res.data;
    })["catch"](function (error) {
      _this8.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

      _this8.showLoading = false;
    });
    this.$http.get('/LiberAPP/Area/Select').then(function (res) {
      _this8.zareas = res.data;
    })["catch"](function (error) {
      _this8.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

      _this8.showLoading = false;
    });
    this.$http.get('/LiberAPP/Material/Listar').then(function (res) {
      _this8.material = res.data;
    })["catch"](function (error) {
      _this8.Toast(true, 'danger', 'Material', 'Error al cargar los registros: ' + error);

      _this8.showLoading = false;
    });
    /*zentidades
    zareas
    zimplementos*/
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vgt-table tbody td, .vgt-table tbody th, .vgt-table thead th {\n  font-weight: bold;\n  font-size: 10pt;\n}[dir] .vgt-table tbody td, [dir] .vgt-table tbody th, [dir] .vgt-table thead th {\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #4b4b4b;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #4b4b4b;\n}\n.vgt-wrap .vgt-table thead th {\n  color: #9196a0;\n}\n[dir] .vgt-wrap .vgt-table thead th {\n  background-color: #283046;\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #4b4b4b;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #4b4b4b;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #4b4b4b;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #4b4b4b;\n  border-top: 2px solid #4b4b4b;\n  background-color: #656565;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #7d7d7d;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #4b4b4b;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #4b4b4b;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #4b4b4b;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #4b4b4b;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #4b4b4b;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tabs[data-v-2df0da5c]\n{\n    /*border:  1px solid rgb(123,123,123);\n    background-color: rgba(123,123,123,0.1);\n    border-radius: 5pt;\n    box-shadow: 0px 0px 17px 5px #757575 !important;*/\n}\n[dir] .tabs[data-v-2df0da5c]\n{\n    margin-top: 10pt;\n    padding-top: 10pt;\n    padding-bottom: 10pt;\n}\n.tab-pane[data-v-2df0da5c]\n{\n    /*box-shadow: 0px 0px 10px 3px #757575 !important;*/\n}\n[dir] .tab-pane[data-v-2df0da5c]\n{\n    padding: 10pt;\n    border:  1px solid rgb(123,123,123);\n    background-color: rgba(40,199,111,0.1);\n    border-radius: 5pt;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.vista_entidad == 0
        ? _c(
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6", xl: "3" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Tipo Entidad:" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              options: _vm.zentidades
                            },
                            model: {
                              value: _vm.yentidad,
                              callback: function($$v) {
                                _vm.yentidad = $$v
                              },
                              expression: "yentidad"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6", xl: "3" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Area:" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "nombreAre", options: _vm.zareas },
                            model: {
                              value: _vm.yarea,
                              callback: function($$v) {
                                _vm.yarea = $$v
                              },
                              expression: "yarea"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-center", attrs: { md: "6", xl: "3" } },
                    [
                      _c(
                        "div",
                        { staticClass: "demo-inline-spacing" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                disabled: _vm.showLoading
                              },
                              on: {
                                click: function($event) {
                                  return _vm.Listar()
                                }
                              }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "ArrowDownIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Listar")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "6" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-grupo",
                          modifiers: { "modal-grupo": true }
                        }
                      ],
                      attrs: { variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.Nuevo(_vm.yentidad, _vm.yarea)
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        attrs: { icon: "PlusIcon" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle" }, [
                        _vm._v("Nuevo Grupo")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                _c(
                  "div",
                  { staticClass: "custom-search d-flex justify-content-end" },
                  [
                    _c(
                      "b-form",
                      { staticClass: "faq-search-input" },
                      [
                        _c(
                          "b-input-group",
                          { staticClass: "input-group-merge" },
                          [
                            _c(
                              "b-input-group-prepend",
                              { attrs: { "is-text": "" } },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "SearchIcon" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-form-input", {
                              attrs: {
                                id: "searchbar",
                                placeholder: "Buscar Implemento"
                              },
                              model: {
                                value: _vm.faqSearchQuery,
                                callback: function($$v) {
                                  _vm.faqSearchQuery = $$v
                                },
                                expression: "faqSearchQuery"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "text-center", attrs: { md: "12", xl: "12" } },
                [
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        vertical: "",
                        "content-class": "col-12 col-md-8 col-lg-9",
                        pills: "",
                        "nav-wrapper-class":
                          "faq-navigation col-md-4 col-lg-3 col-12",
                        "nav-class": "nav-left"
                      }
                    },
                    _vm._l(_vm.resultado, function(ugrupo, indice) {
                      return _c(
                        "b-tab",
                        {
                          key: indice,
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "title",
                                fn: function() {
                                  return [
                                    _c("feather-icon", {
                                      staticClass: "mr-1",
                                      attrs: { icon: "FolderIcon", size: "18" }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "font-weight-bold text-left"
                                      },
                                      [_vm._v(_vm._s(ugrupo.nombreGru))]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          ugrupo
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex align-items-center"
                                    },
                                    [
                                      _c(
                                        "b-avatar",
                                        {
                                          staticClass: "mr-1",
                                          attrs: {
                                            rounded: "",
                                            size: "42",
                                            variant: "light-primary"
                                          }
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "FolderIcon",
                                              size: "20"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "h4",
                                          { staticClass: "mb-0 text-primary" },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(ugrupo.nombreGru) +
                                                " "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(ugrupo.idGrupo))
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: { "margin-left": "70%" }
                                        },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              directives: [
                                                {
                                                  name: "b-modal",
                                                  rawName:
                                                    "v-b-modal.modal-implemento",
                                                  modifiers: {
                                                    "modal-implemento": true
                                                  }
                                                }
                                              ],
                                              staticClass:
                                                "mr-1 btn-icon rounded-circle",
                                              attrs: { variant: "success" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.Nuevo(
                                                    _vm.yentidad,
                                                    ugrupo
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: {
                                                  icon: "PlusIcon",
                                                  size: "20"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "app-collapse",
                                    {
                                      staticClass: "mt-2",
                                      attrs: {
                                        id: "faq-payment-qna",
                                        accordion: "",
                                        type: "margin"
                                      }
                                    },
                                    _vm._l(ugrupo.implementos, function(
                                      uimplemento,
                                      index
                                    ) {
                                      return _c(
                                        "app-collapse-item",
                                        {
                                          key: index,
                                          attrs: {
                                            title: uimplemento.nombreImp,
                                            bcolor: "success",
                                            tcolor: "'success'"
                                          }
                                        },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              directives: [
                                                {
                                                  name: "b-modal",
                                                  rawName:
                                                    "v-b-modal.modal-implemento",
                                                  modifiers: {
                                                    "modal-implemento": true
                                                  }
                                                }
                                              ],
                                              staticClass:
                                                "mr-1 btn-icon rounded-circle",
                                              attrs: { variant: "secondary" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.EditarImplemento(
                                                    uimplemento
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: {
                                                  icon: "Edit2Icon",
                                                  size: "20"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(
                                            "\r\n                                    " +
                                              _vm._s(uimplemento.nombreImp) +
                                              "\r\n                                "
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-grupo",
            "header-bg-variant": _vm.headerBgVariant,
            "header-text-variant": _vm.headerTextVariant,
            title: _vm.headerTitleVariant,
            "footer-bg-variant": _vm.footerBgVariant,
            "footer-text-variant": _vm.footerTextVariant,
            centered: "",
            "no-close-on-backdrop": "",
            "title-tag": "div",
            "cancel-title": "Cancelar",
            "ok-title": "Guardar",
            size: "lg",
            "cancel-variant": "secondary",
            "ok-variant": "success"
          },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "w-100 d-flex justify-content-between" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "secondary",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              _vm.showModal = false
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "XIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v("Cancelar")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.boton
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "success",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: { click: _vm.Guardar }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "CheckIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Guardar")
                              ])
                            ],
                            1
                          )
                        : _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: { click: _vm.Actualizar }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "CheckIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Actualizar")
                              ])
                            ],
                            1
                          )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.showModal,
            callback: function($$v) {
              _vm.showModal = $$v
            },
            expression: "showModal"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "3", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "ID" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.grupo.idGrupo,
                          callback: function($$v) {
                            _vm.$set(_vm.grupo, "idGrupo", $$v)
                          },
                          expression: "grupo.idGrupo"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12", xl: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nombre Grupo" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.grupo.nombreGru,
                          callback: function($$v) {
                            _vm.$set(_vm.grupo, "nombreGru", $$v)
                          },
                          expression: "grupo.nombreGru"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Entidad" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "valorDat",
                          reduce: function(entidades) {
                            return entidades.idDato
                          },
                          options: _vm.zentidades,
                          disabled: ""
                        },
                        model: {
                          value: _vm.grupo.Entidad_idDato,
                          callback: function($$v) {
                            _vm.$set(_vm.grupo, "Entidad_idDato", $$v)
                          },
                          expression: "grupo.Entidad_idDato"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "nombreAre",
                          reduce: function(areas) {
                            return areas.idArea
                          },
                          options: _vm.zareas,
                          disabled: ""
                        },
                        model: {
                          value: _vm.grupo.Area_idArea,
                          callback: function($$v) {
                            _vm.$set(_vm.grupo, "Area_idArea", $$v)
                          },
                          expression: "grupo.Area_idArea"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._v(" "),
          _c("b-overlay", { attrs: { show: _vm.showLoading, "no-wrap": "" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-implemento",
            "header-bg-variant": _vm.headerBgVariantI,
            "header-text-variant": _vm.headerTextVariantI,
            title: _vm.headerTitleVariantI,
            "footer-bg-variant": _vm.footerBgVariantI,
            "footer-text-variant": _vm.footerTextVariantI,
            centered: "",
            "no-close-on-backdrop": "",
            "title-tag": "div",
            "cancel-title": "Cancelar",
            "ok-title": "Guardar",
            size: "xl",
            "cancel-variant": "secondary",
            "ok-variant": "success"
          },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "w-100 d-flex justify-content-between" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "secondary",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              _vm.showModal = false
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "XIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v("Cancelar")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.boton
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "success",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: { click: _vm.GuardarImplemento }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "CheckIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Guardar")
                              ])
                            ],
                            1
                          )
                        : _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: { click: _vm.ActualizarImplemento }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "CheckIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Actualizar")
                              ])
                            ],
                            1
                          )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.showModalI,
            callback: function($$v) {
              _vm.showModalI = $$v
            },
            expression: "showModalI"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "3", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "ID" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.grupo.idGrupo,
                          callback: function($$v) {
                            _vm.$set(_vm.grupo, "idGrupo", $$v)
                          },
                          expression: "grupo.idGrupo"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nombre del Implemento" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.implemento.nombreImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "nombreImp", $$v)
                          },
                          expression: "implemento.nombreImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Vigencia Implemento ( Meses )" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.vigenciaImplemento },
                        model: {
                          value: _vm.implemento.vigenciaImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "vigenciaImp", $$v)
                          },
                          expression: "implemento.vigenciaImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "¿ Es Renovable ?" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.renovacionImplemento },
                        model: {
                          value: _vm.implemento.renovableImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "renovableImp", $$v)
                          },
                          expression: "implemento.renovableImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Entidad" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "valorDat",
                          reduce: function(entidades) {
                            return entidades.idDato
                          },
                          options: _vm.zentidades,
                          disabled: true
                        },
                        model: {
                          value: _vm.implemento.Entidad_idDato,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "Entidad_idDato", $$v)
                          },
                          expression: "implemento.Entidad_idDato"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Grupo" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "nombreGru",
                          reduce: function(grupos) {
                            return grupos.idGrupo
                          },
                          options: _vm.grupos2,
                          disabled: true
                        },
                        model: {
                          value: _vm.implemento.Grupo_idGrupo,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "Grupo_idGrupo", $$v)
                          },
                          expression: "implemento.Grupo_idGrupo"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Costo" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.implemento.costoImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "costoImp", $$v)
                          },
                          expression: "implemento.costoImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Cantidad" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.implemento.cantidadImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "cantidadImp", $$v)
                          },
                          expression: "implemento.cantidadImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Tipo Implemento" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.tipoImplemento },
                        model: {
                          value: _vm.implemento.tipoImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "tipoImp", $$v)
                          },
                          expression: "implemento.tipoImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Material" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "nombreMat",
                          reduce: function(material) {
                            return material.idMaterial
                          },
                          options: _vm.material
                        },
                        model: {
                          value: _vm.implemento.Material_idMaterial,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "Material_idMaterial", $$v)
                          },
                          expression: "implemento.Material_idMaterial"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "¿ Es Transferible / instransferible ?" }
                    },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.propiedadImplemento },
                        model: {
                          value: _vm.implemento.propiedadImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "propiedadImp", $$v)
                          },
                          expression: "implemento.propiedadImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Proveedor" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "nombreExt",
                          reduce: function(externo) {
                            return externo.idExterno
                          },
                          options: _vm.externos
                        },
                        model: {
                          value: _vm.implemento.Proveedor_idExterno,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "Proveedor_idExterno", $$v)
                          },
                          expression: "implemento.Proveedor_idExterno"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Validar Por" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.validacionImplemento },
                        model: {
                          value: _vm.implemento.validacionImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "validacionImp", $$v)
                          },
                          expression: "implemento.validacionImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Alerta Implemento (días)" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.implemento.alertaImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "alertaImp", $$v)
                          },
                          expression: "implemento.alertaImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "12", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Renovacion Implemento (Meses)" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.implemento.renovacionImp,
                          callback: function($$v) {
                            _vm.$set(_vm.implemento, "renovacionImp", $$v)
                          },
                          expression: "implemento.renovacionImp"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._v(" "),
          _c("b-overlay", { attrs: { show: _vm.showLoading, "no-wrap": "" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Implemento.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Implemento.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Implemento.vue?vue&type=template&id=2df0da5c&scoped=true& */ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true&");
/* harmony import */ var _Implemento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Implemento.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Implemento.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& */ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Implemento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2df0da5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestion/Maestro/Implemento.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=style&index=1&id=2df0da5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_style_index_1_id_2df0da5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Implemento.vue?vue&type=template&id=2df0da5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Implemento.vue?vue&type=template&id=2df0da5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Implemento_vue_vue_type_template_id_2df0da5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);