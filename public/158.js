(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_19__);



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BToast"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_8__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BImg"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BSpinner"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButton"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButtonGroup"],
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_16__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BPagination"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardText"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_14___default.a
  }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "BCardBody", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardBody"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "FormWizard", vue_form_wizard__WEBPACK_IMPORTED_MODULE_9__["FormWizard"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "TabContent", vue_form_wizard__WEBPACK_IMPORTED_MODULE_9__["TabContent"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "BInputGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroup"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "BInputGroupPrepend", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupPrepend"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "Cleave", vue_cleave_component__WEBPACK_IMPORTED_MODULE_18___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "AppTimeline", _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_12__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "AppTimelineItem", _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_13__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_components, "BCollapse", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCollapse"]), _components),
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_15__["default"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBToggle"]
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
      headerTitleVariant: 'NUEVA RUTA',
      bodyBgVariant: 'light',
      bodyTextVariant: 'success',
      footerBgVariant: 'dark',
      footerTextVariant: 'dark',
      showModal: false,
      showLoading: false,
      boton: false,

      /**************************** entorno ****************************/
      rutas: [],
      tvehiculos: [],
      cargas: [],
      ubicaciones: [],
      externos: [],
      cuentas: [],
      grupos: [],
      tramos: [],
      gastos: [],
      viaticos: [],
      recorridos: [],
      plantilla: {
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
        Cuenta_idDato: "",
        Grupo_idDato: "",
        unidadSunatRut: "",
        serieRut: "",
        Remitente_idExterno: "",
        Destinatario_idExterno: "",
        partidaRut: "",
        llegadaRut: "",
        ubigeopSunatRut: "",
        ubigeolSunatRut: ""
      },

      /**************************** formulario ****************************/
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
      //costos: [],
      recorridos_actuales: [],
      //minitabla

      /*ytramo: {},
      yhospedaje: "",
      ycochera: "",
      yviatico: "",*/
      yexterno: {},
      ycuenta: {},
      ygrupo: {},
      yremitente: {},
      ydestinatario: {},
      yubigeop: {},
      yubigeol: {},
      yunidad: {},
      ynro: 0,

      /************************** datos sunat ***************************/
      unidadesSunat: [{
        codigo: "126",
        unidad: "DOCENA POR 10**6"
      }, {
        codigo: "12U",
        unidad: "DOCENA"
      }, {
        codigo: "2U",
        unidad: "PAR"
      }, {
        codigo: "2U6",
        unidad: "PAR POR 10**6"
      }, {
        codigo: "AM",
        unidad: "AMPOLLA"
      }, {
        codigo: "BAL",
        unidad: "BALDE"
      }, {
        codigo: "BID",
        unidad: "BIDONES"
      }, {
        codigo: "BLS",
        unidad: "BOLSA"
      }, {
        codigo: "BOB",
        unidad: "BOBINAS"
      }, {
        codigo: "BOT",
        unidad: "BOTELLAS"
      }, {
        codigo: "BRR",
        unidad: "BARRILES"
      }, {
        codigo: "CAJ",
        unidad: "CAJA"
      }, {
        codigo: "CIL",
        unidad: "CILINDRO"
      }, {
        codigo: "CM",
        unidad: "CENTIMETRO LINEAL"
      }, {
        codigo: "CM2",
        unidad: "CENTIMETRO CUADRADO"
      }, {
        codigo: "CM3",
        unidad: "CENTIMETRO CUBICO"
      }, {
        codigo: "CON",
        unidad: "CONOS"
      }, {
        codigo: "CRT",
        unidad: "CARTONES"
      }, {
        codigo: "FDO",
        unidad: "FARDO"
      }, {
        codigo: "FRC",
        unidad: "FRASCOS"
      }, {
        codigo: "GAL",
        unidad: "US GALON (3,7843 L)"
      }, {
        codigo: "GLE",
        unidad: "GALON INGLES (4,545956L)"
      }, {
        codigo: "GR",
        unidad: "GRAMO"
      }, {
        codigo: "GRU",
        unidad: "GRUESA"
      }, {
        codigo: "HL",
        unidad: "HECTOLITRO"
      }, {
        codigo: "HOJ",
        unidad: "HOJA"
      }, {
        codigo: "JGS",
        unidad: "JUEGO"
      }, {
        codigo: "KG",
        unidad: "KILOGRAMO"
      }, {
        codigo: "KG3",
        unidad: "KILOGRAMO POR 10**3 (TM)"
      }, {
        codigo: "KG6",
        unidad: "KILOGRAMO POR 10**6"
      }, {
        codigo: "KGA",
        unidad: "KILOGRAMO INGREDIENTE ACTIVO"
      }, {
        codigo: "KI",
        unidad: "QUILATE"
      }, {
        codigo: "KI6",
        unidad: "QUILATE 10**6"
      }, {
        codigo: "KIT",
        unidad: "KIT"
      }, {
        codigo: "KL6",
        unidad: "KILOS X 10 EXP - 6 (MG)"
      }, {
        codigo: "KL9",
        unidad: "KILOS X 10 EXP -9"
      }, {
        codigo: "KM",
        unidad: "KILOMETRO"
      }, {
        codigo: "KW3",
        unidad: "KILOVATIO HORA POR 10**3 (1000KWH)"
      }, {
        codigo: "KW6",
        unidad: "KILOVATIO HORA POR 10**6"
      }, {
        codigo: "KWH",
        unidad: "KILOVATIO HORA"
      }, {
        codigo: "L",
        unidad: "LITRO"
      }, {
        codigo: "L 6",
        unidad: "LITRO POR 10**6"
      }, {
        codigo: "LAT",
        unidad: "LATAS"
      }, {
        codigo: "LB",
        unidad: "LIBRAS"
      }, {
        codigo: "M",
        unidad: "METRO"
      }, {
        codigo: "M 6",
        unidad: "METRO POR 10**6"
      }, {
        codigo: "M2",
        unidad: "METRO CUADRADO"
      }, {
        codigo: "M26",
        unidad: "METRO CUADRADO POR 10**6"
      }, {
        codigo: "M3",
        unidad: "METRO CUBICO"
      }, {
        codigo: "M36",
        unidad: "METRO CUBICO POR 10**6"
      }, {
        codigo: "MGA",
        unidad: "MILIGRAMO ACTIVO"
      }, {
        codigo: "MGR",
        unidad: "MILIGRAMOS"
      }, {
        codigo: "ML",
        unidad: "MILILITRO"
      }, {
        codigo: "MLL",
        unidad: "MILLARES"
      }, {
        codigo: "MM",
        unidad: "MILIMETRO"
      }, {
        codigo: "MM2",
        unidad: "MILIMETRO CUADRADO"
      }, {
        codigo: "MM3",
        unidad: "MILIMETRO CUBICO"
      }, {
        codigo: "MU",
        unidad: "MUESTRAS"
      }, {
        codigo: "MWH",
        unidad: "MEGAWATT HORA"
      }, {
        codigo: "OZ",
        unidad: "ONZAS"
      }, {
        codigo: "PAI",
        unidad: "PAILAS"
      }, {
        codigo: "PAL",
        unidad: "PALETAS"
      }, {
        codigo: "PAQ",
        unidad: "PAQUETE"
      }, {
        codigo: "PL",
        unidad: "PLACAS"
      }, {
        codigo: "PLC",
        unidad: "PLANCHAS"
      }, {
        codigo: "PLG",
        unidad: "PLIEGO"
      }, {
        codigo: "PS",
        unidad: "PIES"
      }, {
        codigo: "PS2",
        unidad: "PIES CUADRADOS"
      }, {
        codigo: "PS3",
        unidad: "PIES CUBICOS"
      }, {
        codigo: "PST",
        unidad: "PIES TABLARES(MADERA)"
      }, {
        codigo: "PUL",
        unidad: "PULGADAS"
      }, {
        codigo: "PZA",
        unidad: "PIEZAS"
      }, {
        codigo: "QQ",
        unidad: "QUINTAL METRICO (100 KG)"
      }, {
        codigo: "QUT",
        unidad: "QUINTAL USA (100 LB)"
      }, {
        codigo: "RAM",
        unidad: "RAMOS"
      }, {
        codigo: "RES",
        unidad: "RESMA"
      }, {
        codigo: "ROL",
        unidad: "ROLLOS"
      }, {
        codigo: "SAC",
        unidad: "SACO"
      }, {
        codigo: "SET",
        unidad: "SET"
      }, {
        codigo: "TAM",
        unidad: "TAMBOR"
      }, {
        codigo: "TC",
        unidad: "TONELADA CORTA"
      }, {
        codigo: "TCS",
        unidad: "TONELADA CORTA SECA"
      }, {
        codigo: "TIR",
        unidad: "TIRAS"
      }, {
        codigo: "TL",
        unidad: "TONELADA LARGA"
      }, {
        codigo: "TLS",
        unidad: "TONELADA LARGA SECA"
      }, {
        codigo: "TM",
        unidad: "TONELADAS"
      }, {
        codigo: "TM3",
        unidad: "TONELADA CUBICA"
      }, {
        codigo: "TMS",
        unidad: "TONELADA METRICA SECA"
      }, {
        codigo: "TUB",
        unidad: "TUBOS"
      }, {
        codigo: "U",
        unidad: "UNIDAD"
      }, {
        codigo: "U 3",
        unidad: "UNIDAD POR 10**3"
      }, {
        codigo: "U 6",
        unidad: "UNIDAD PO 10**6"
      }, {
        codigo: "U2",
        unidad: "CIENTO DE UNIDADES"
      }, {
        codigo: "U3",
        unidad: "MILES DE UNIDADES"
      }, {
        codigo: "U6",
        unidad: "MILLON DE UNIDADES"
      }, {
        codigo: "YD",
        unidad: "YARDA"
      }, {
        codigo: "YD2",
        unidad: "YARDA CUADRADA"
      }],
      ubigeosSunat: [{
        codigo: "010101",
        zona: "AMAZONAS - CHACHAPOYAS - CHACHAPOYAS"
      }, {
        codigo: "010102",
        zona: "AMAZONAS - CHACHAPOYAS - ASUNCION"
      }, {
        codigo: "010103",
        zona: "AMAZONAS - CHACHAPOYAS - BALSAS"
      }, {
        codigo: "010104",
        zona: "AMAZONAS - CHACHAPOYAS - CHETO"
      }, {
        codigo: "010105",
        zona: "AMAZONAS - CHACHAPOYAS - CHILIQUIN"
      }, {
        codigo: "010106",
        zona: "AMAZONAS - CHACHAPOYAS - CHUQUIBAMBA"
      }, {
        codigo: "010107",
        zona: "AMAZONAS - CHACHAPOYAS - GRANADA"
      }, {
        codigo: "010108",
        zona: "AMAZONAS - CHACHAPOYAS - HUANCAS"
      }, {
        codigo: "010109",
        zona: "AMAZONAS - CHACHAPOYAS - LA JALCA"
      }, {
        codigo: "010110",
        zona: "AMAZONAS - CHACHAPOYAS - LEIMEBAMBA"
      }, {
        codigo: "010111",
        zona: "AMAZONAS - CHACHAPOYAS - LEVANTO"
      }, {
        codigo: "010112",
        zona: "AMAZONAS - CHACHAPOYAS - MAGDALENA"
      }, {
        codigo: "010113",
        zona: "AMAZONAS - CHACHAPOYAS - MARISCAL CASTILLA"
      }, {
        codigo: "010114",
        zona: "AMAZONAS - CHACHAPOYAS - MOLINOPAMPA"
      }, {
        codigo: "010115",
        zona: "AMAZONAS - CHACHAPOYAS - MONTEVIDEO"
      }, {
        codigo: "010116",
        zona: "AMAZONAS - CHACHAPOYAS - OLLEROS"
      }, {
        codigo: "010117",
        zona: "AMAZONAS - CHACHAPOYAS - QUINJALCA"
      }, {
        codigo: "010118",
        zona: "AMAZONAS - CHACHAPOYAS - SAN FRANCISCO DE DAGUAS"
      }, {
        codigo: "010119",
        zona: "AMAZONAS - CHACHAPOYAS - SAN ISIDRO DE MAINO"
      }, {
        codigo: "010120",
        zona: "AMAZONAS - CHACHAPOYAS - SOLOCO"
      }, {
        codigo: "010121",
        zona: "AMAZONAS - CHACHAPOYAS - SONCHE"
      }, {
        codigo: "010201",
        zona: "AMAZONAS - BAGUA - BAGUA"
      }, {
        codigo: "010202",
        zona: "AMAZONAS - BAGUA - ARAMANGO"
      }, {
        codigo: "010203",
        zona: "AMAZONAS - BAGUA - COPALLIN"
      }, {
        codigo: "010204",
        zona: "AMAZONAS - BAGUA - EL PARCO"
      }, {
        codigo: "010205",
        zona: "AMAZONAS - BAGUA - IMAZA"
      }, {
        codigo: "010206",
        zona: "AMAZONAS - BAGUA - LA PECA"
      }, {
        codigo: "010301",
        zona: "AMAZONAS - BONGARA - JUMBILLA"
      }, {
        codigo: "010302",
        zona: "AMAZONAS - BONGARA - CHISQUILLA"
      }, {
        codigo: "010303",
        zona: "AMAZONAS - BONGARA - CHURUJA"
      }, {
        codigo: "010304",
        zona: "AMAZONAS - BONGARA - COROSHA"
      }, {
        codigo: "010305",
        zona: "AMAZONAS - BONGARA - CUISPES"
      }, {
        codigo: "010306",
        zona: "AMAZONAS - BONGARA - FLORIDA"
      }, {
        codigo: "010307",
        zona: "AMAZONAS - BONGARA - JAZAN"
      }, {
        codigo: "010308",
        zona: "AMAZONAS - BONGARA - RECTA"
      }, {
        codigo: "010309",
        zona: "AMAZONAS - BONGARA - SAN CARLOS"
      }, {
        codigo: "010310",
        zona: "AMAZONAS - BONGARA - SHIPASBAMBA"
      }, {
        codigo: "010311",
        zona: "AMAZONAS - BONGARA - VALERA"
      }, {
        codigo: "010312",
        zona: "AMAZONAS - BONGARA - YAMBRASBAMBA"
      }, {
        codigo: "010401",
        zona: "AMAZONAS - CONDORCANQUI - NIEVA"
      }, {
        codigo: "010402",
        zona: "AMAZONAS - CONDORCANQUI - EL CENEPA"
      }, {
        codigo: "010403",
        zona: "AMAZONAS - CONDORCANQUI - RIO SANTIAGO"
      }, {
        codigo: "010501",
        zona: "AMAZONAS - LUYA - LAMUD"
      }, {
        codigo: "010502",
        zona: "AMAZONAS - LUYA - CAMPORREDONDO"
      }, {
        codigo: "010503",
        zona: "AMAZONAS - LUYA - COCABAMBA"
      }, {
        codigo: "010504",
        zona: "AMAZONAS - LUYA - COLCAMAR"
      }, {
        codigo: "010505",
        zona: "AMAZONAS - LUYA - CONILA"
      }, {
        codigo: "010506",
        zona: "AMAZONAS - LUYA - INGUILPATA"
      }, {
        codigo: "010507",
        zona: "AMAZONAS - LUYA - LONGUITA"
      }, {
        codigo: "010508",
        zona: "AMAZONAS - LUYA - LONYA CHICO"
      }, {
        codigo: "010509",
        zona: "AMAZONAS - LUYA - LUYA"
      }, {
        codigo: "010510",
        zona: "AMAZONAS - LUYA - LUYA VIEJO"
      }, {
        codigo: "010511",
        zona: "AMAZONAS - LUYA - MARIA"
      }, {
        codigo: "010512",
        zona: "AMAZONAS - LUYA - OCALLI"
      }, {
        codigo: "010513",
        zona: "AMAZONAS - LUYA - OCUMAL"
      }, {
        codigo: "010514",
        zona: "AMAZONAS - LUYA - PISUQUIA"
      }, {
        codigo: "010515",
        zona: "AMAZONAS - LUYA - PROVIDENCIA"
      }, {
        codigo: "010516",
        zona: "AMAZONAS - LUYA - SAN CRISTOBAL"
      }, {
        codigo: "010517",
        zona: "AMAZONAS - LUYA - SAN FRANCISCO DEL YESO"
      }, {
        codigo: "010518",
        zona: "AMAZONAS - LUYA - SAN JERONIMO"
      }, {
        codigo: "010519",
        zona: "AMAZONAS - LUYA - SAN JUAN DE LOPECANCHA"
      }, {
        codigo: "010520",
        zona: "AMAZONAS - LUYA - SANTA CATALINA"
      }, {
        codigo: "010521",
        zona: "AMAZONAS - LUYA - SANTO TOMAS"
      }, {
        codigo: "010522",
        zona: "AMAZONAS - LUYA - TINGO"
      }, {
        codigo: "010523",
        zona: "AMAZONAS - LUYA - TRITA"
      }, {
        codigo: "010601",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - SAN NICOLAS"
      }, {
        codigo: "010602",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - CHIRIMOTO"
      }, {
        codigo: "010603",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - COCHAMAL"
      }, {
        codigo: "010604",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - HUAMBO"
      }, {
        codigo: "010605",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - LIMABAMBA"
      }, {
        codigo: "010606",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - LONGAR"
      }, {
        codigo: "010607",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - MARISCAL BENAVIDES"
      }, {
        codigo: "010608",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - MILPUC"
      }, {
        codigo: "010609",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - OMIA"
      }, {
        codigo: "010610",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - SANTA ROSA"
      }, {
        codigo: "010611",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - TOTORA"
      }, {
        codigo: "010612",
        zona: "AMAZONAS - RODRIGUEZ DE MENDOZA - VISTA ALEGRE"
      }, {
        codigo: "010701",
        zona: "AMAZONAS - UTCUBAMBA - BAGUA GRANDE"
      }, {
        codigo: "010702",
        zona: "AMAZONAS - UTCUBAMBA - CAJARURO"
      }, {
        codigo: "010703",
        zona: "AMAZONAS - UTCUBAMBA - CUMBA"
      }, {
        codigo: "010704",
        zona: "AMAZONAS - UTCUBAMBA - EL MILAGRO"
      }, {
        codigo: "010705",
        zona: "AMAZONAS - UTCUBAMBA - JAMALCA"
      }, {
        codigo: "010706",
        zona: "AMAZONAS - UTCUBAMBA - LONYA GRANDE"
      }, {
        codigo: "010707",
        zona: "AMAZONAS - UTCUBAMBA - YAMON"
      }, {
        codigo: "020101",
        zona: "ANCASH - HUARAZ - HUARAZ"
      }, {
        codigo: "020102",
        zona: "ANCASH - HUARAZ - COCHABAMBA"
      }, {
        codigo: "020103",
        zona: "ANCASH - HUARAZ - COLCABAMBA"
      }, {
        codigo: "020104",
        zona: "ANCASH - HUARAZ - HUANCHAY"
      }, {
        codigo: "020105",
        zona: "ANCASH - HUARAZ - INDEPENDENCIA"
      }, {
        codigo: "020106",
        zona: "ANCASH - HUARAZ - JANGAS"
      }, {
        codigo: "020107",
        zona: "ANCASH - HUARAZ - LA LIBERTAD"
      }, {
        codigo: "020108",
        zona: "ANCASH - HUARAZ - OLLEROS"
      }, {
        codigo: "020109",
        zona: "ANCASH - HUARAZ - PAMPAS GRANDE"
      }, {
        codigo: "020110",
        zona: "ANCASH - HUARAZ - PARIACOTO"
      }, {
        codigo: "020111",
        zona: "ANCASH - HUARAZ - PIRA"
      }, {
        codigo: "020112",
        zona: "ANCASH - HUARAZ - TARICA"
      }, {
        codigo: "020201",
        zona: "ANCASH - AIJA - AIJA"
      }, {
        codigo: "020202",
        zona: "ANCASH - AIJA - CORIS"
      }, {
        codigo: "020203",
        zona: "ANCASH - AIJA - HUACLLAN"
      }, {
        codigo: "020204",
        zona: "ANCASH - AIJA - LA MERCED"
      }, {
        codigo: "020205",
        zona: "ANCASH - AIJA - SUCCHA"
      }, {
        codigo: "020301",
        zona: "ANCASH - ANTONIO RAYMONDI - LLAMELLIN"
      }, {
        codigo: "020302",
        zona: "ANCASH - ANTONIO RAYMONDI - ACZO"
      }, {
        codigo: "020303",
        zona: "ANCASH - ANTONIO RAYMONDI - CHACCHO"
      }, {
        codigo: "020304",
        zona: "ANCASH - ANTONIO RAYMONDI - CHINGAS"
      }, {
        codigo: "020305",
        zona: "ANCASH - ANTONIO RAYMONDI - MIRGAS"
      }, {
        codigo: "020306",
        zona: "ANCASH - ANTONIO RAYMONDI - SAN JUAN DE RONTOY"
      }, {
        codigo: "020401",
        zona: "ANCASH - ASUNCION - CHACAS"
      }, {
        codigo: "020402",
        zona: "ANCASH - ASUNCION - ACOCHACA"
      }, {
        codigo: "020501",
        zona: "ANCASH - BOLOGNESI - CHIQUIAN"
      }, {
        codigo: "020502",
        zona: "ANCASH - BOLOGNESI - ABELARDO PARDO LEZAMETA"
      }, {
        codigo: "020503",
        zona: "ANCASH - BOLOGNESI - ANTONIO RAYMONDI"
      }, {
        codigo: "020504",
        zona: "ANCASH - BOLOGNESI - AQUIA"
      }, {
        codigo: "020505",
        zona: "ANCASH - BOLOGNESI - CAJACAY"
      }, {
        codigo: "020506",
        zona: "ANCASH - BOLOGNESI - CANIS"
      }, {
        codigo: "020507",
        zona: "ANCASH - BOLOGNESI - COLQUIOC"
      }, {
        codigo: "020508",
        zona: "ANCASH - BOLOGNESI - HUALLANCA"
      }, {
        codigo: "020509",
        zona: "ANCASH - BOLOGNESI - HUASTA"
      }, {
        codigo: "020510",
        zona: "ANCASH - BOLOGNESI - HUAYLLACAYAN"
      }, {
        codigo: "020511",
        zona: "ANCASH - BOLOGNESI - LA PRIMAVERA"
      }, {
        codigo: "020512",
        zona: "ANCASH - BOLOGNESI - MANGAS"
      }, {
        codigo: "020513",
        zona: "ANCASH - BOLOGNESI - PACLLON"
      }, {
        codigo: "020514",
        zona: "ANCASH - BOLOGNESI - SAN MIGUEL DE CORPANQUI"
      }, {
        codigo: "020515",
        zona: "ANCASH - BOLOGNESI - TICLLOS"
      }, {
        codigo: "020601",
        zona: "ANCASH - CARHUAZ - CARHUAZ"
      }, {
        codigo: "020602",
        zona: "ANCASH - CARHUAZ - ACOPAMPA"
      }, {
        codigo: "020603",
        zona: "ANCASH - CARHUAZ - AMASHCA"
      }, {
        codigo: "020604",
        zona: "ANCASH - CARHUAZ - ANTA"
      }, {
        codigo: "020605",
        zona: "ANCASH - CARHUAZ - ATAQUERO"
      }, {
        codigo: "020606",
        zona: "ANCASH - CARHUAZ - MARCARA"
      }, {
        codigo: "020607",
        zona: "ANCASH - CARHUAZ - PARIAHUANCA"
      }, {
        codigo: "020608",
        zona: "ANCASH - CARHUAZ - SAN MIGUEL DE ACO"
      }, {
        codigo: "020609",
        zona: "ANCASH - CARHUAZ - SHILLA"
      }, {
        codigo: "020610",
        zona: "ANCASH - CARHUAZ - TINCO"
      }, {
        codigo: "020611",
        zona: "ANCASH - CARHUAZ - YUNGAR"
      }, {
        codigo: "020701",
        zona: "ANCASH - CARLOS FERMIN FITZCARRALD - SAN LUIS"
      }, {
        codigo: "020702",
        zona: "ANCASH - CARLOS FERMIN FITZCARRALD - SAN NICOLAS"
      }, {
        codigo: "020703",
        zona: "ANCASH - CARLOS FERMIN FITZCARRALD - YAUYA"
      }, {
        codigo: "020801",
        zona: "ANCASH - CASMA - CASMA"
      }, {
        codigo: "020802",
        zona: "ANCASH - CASMA - BUENA VISTA ALTA"
      }, {
        codigo: "020803",
        zona: "ANCASH - CASMA - COMANDANTE NOEL"
      }, {
        codigo: "020804",
        zona: "ANCASH - CASMA - YAUTAN"
      }, {
        codigo: "020901",
        zona: "ANCASH - CORONGO - CORONGO"
      }, {
        codigo: "020902",
        zona: "ANCASH - CORONGO - ACO"
      }, {
        codigo: "020903",
        zona: "ANCASH - CORONGO - BAMBAS"
      }, {
        codigo: "020904",
        zona: "ANCASH - CORONGO - CUSCA"
      }, {
        codigo: "020905",
        zona: "ANCASH - CORONGO - LA PAMPA"
      }, {
        codigo: "020906",
        zona: "ANCASH - CORONGO - YANAC"
      }, {
        codigo: "020907",
        zona: "ANCASH - CORONGO - YUPAN"
      }, {
        codigo: "021001",
        zona: "ANCASH - HUARI - HUARI"
      }, {
        codigo: "021002",
        zona: "ANCASH - HUARI - ANRA"
      }, {
        codigo: "021003",
        zona: "ANCASH - HUARI - CAJAY"
      }, {
        codigo: "021004",
        zona: "ANCASH - HUARI - CHAVIN DE HUANTAR"
      }, {
        codigo: "021005",
        zona: "ANCASH - HUARI - HUACACHI"
      }, {
        codigo: "021006",
        zona: "ANCASH - HUARI - HUACCHIS"
      }, {
        codigo: "021007",
        zona: "ANCASH - HUARI - HUACHIS"
      }, {
        codigo: "021008",
        zona: "ANCASH - HUARI - HUANTAR"
      }, {
        codigo: "021009",
        zona: "ANCASH - HUARI - MASIN"
      }, {
        codigo: "021010",
        zona: "ANCASH - HUARI - PAUCAS"
      }, {
        codigo: "021011",
        zona: "ANCASH - HUARI - PONTO"
      }, {
        codigo: "021012",
        zona: "ANCASH - HUARI - RAHUAPAMPA"
      }, {
        codigo: "021013",
        zona: "ANCASH - HUARI - RAPAYAN"
      }, {
        codigo: "021014",
        zona: "ANCASH - HUARI - SAN MARCOS"
      }, {
        codigo: "021015",
        zona: "ANCASH - HUARI - SAN PEDRO DE CHANA"
      }, {
        codigo: "021016",
        zona: "ANCASH - HUARI - UCO"
      }, {
        codigo: "021101",
        zona: "ANCASH - HUARMEY - HUARMEY"
      }, {
        codigo: "021102",
        zona: "ANCASH - HUARMEY - COCHAPETI"
      }, {
        codigo: "021103",
        zona: "ANCASH - HUARMEY - CULEBRAS"
      }, {
        codigo: "021104",
        zona: "ANCASH - HUARMEY - HUAYAN"
      }, {
        codigo: "021105",
        zona: "ANCASH - HUARMEY - MALVAS"
      }, {
        codigo: "021201",
        zona: "ANCASH - HUAYLAS - CARAZ"
      }, {
        codigo: "021202",
        zona: "ANCASH - HUAYLAS - HUALLANCA"
      }, {
        codigo: "021203",
        zona: "ANCASH - HUAYLAS - HUATA"
      }, {
        codigo: "021204",
        zona: "ANCASH - HUAYLAS - HUAYLAS"
      }, {
        codigo: "021205",
        zona: "ANCASH - HUAYLAS - MATO"
      }, {
        codigo: "021206",
        zona: "ANCASH - HUAYLAS - PAMPAROMAS"
      }, {
        codigo: "021207",
        zona: "ANCASH - HUAYLAS - PUEBLO LIBRE"
      }, {
        codigo: "021208",
        zona: "ANCASH - HUAYLAS - SANTA CRUZ"
      }, {
        codigo: "021209",
        zona: "ANCASH - HUAYLAS - SANTO TORIBIO"
      }, {
        codigo: "021210",
        zona: "ANCASH - HUAYLAS - YURACMARCA"
      }, {
        codigo: "021301",
        zona: "ANCASH - MARISCAL LUZURIAGA - PISCOBAMBA"
      }, {
        codigo: "021302",
        zona: "ANCASH - MARISCAL LUZURIAGA - CASCA"
      }, {
        codigo: "021303",
        zona: "ANCASH - MARISCAL LUZURIAGA - ELEAZAR GUZMAN BARRON"
      }, {
        codigo: "021304",
        zona: "ANCASH - MARISCAL LUZURIAGA - FIDEL OLIVAS ESCUDERO"
      }, {
        codigo: "021305",
        zona: "ANCASH - MARISCAL LUZURIAGA - LLAMA"
      }, {
        codigo: "021306",
        zona: "ANCASH - MARISCAL LUZURIAGA - LLUMPA"
      }, {
        codigo: "021307",
        zona: "ANCASH - MARISCAL LUZURIAGA - LUCMA"
      }, {
        codigo: "021308",
        zona: "ANCASH - MARISCAL LUZURIAGA - MUSGA"
      }, {
        codigo: "021401",
        zona: "ANCASH - OCROS - OCROS"
      }, {
        codigo: "021402",
        zona: "ANCASH - OCROS - ACAS"
      }, {
        codigo: "021403",
        zona: "ANCASH - OCROS - CAJAMARQUILLA"
      }, {
        codigo: "021404",
        zona: "ANCASH - OCROS - CARHUAPAMPA"
      }, {
        codigo: "021405",
        zona: "ANCASH - OCROS - COCHAS"
      }, {
        codigo: "021406",
        zona: "ANCASH - OCROS - CONGAS"
      }, {
        codigo: "021407",
        zona: "ANCASH - OCROS - LLIPA"
      }, {
        codigo: "021408",
        zona: "ANCASH - OCROS - SAN CRISTOBAL DE RAJAN"
      }, {
        codigo: "021409",
        zona: "ANCASH - OCROS - SAN PEDRO"
      }, {
        codigo: "021410",
        zona: "ANCASH - OCROS - SANTIAGO DE CHILCAS"
      }, {
        codigo: "021501",
        zona: "ANCASH - PALLASCA - CABANA"
      }, {
        codigo: "021502",
        zona: "ANCASH - PALLASCA - BOLOGNESI"
      }, {
        codigo: "021503",
        zona: "ANCASH - PALLASCA - CONCHUCOS"
      }, {
        codigo: "021504",
        zona: "ANCASH - PALLASCA - HUACASCHUQUE"
      }, {
        codigo: "021505",
        zona: "ANCASH - PALLASCA - HUANDOVAL"
      }, {
        codigo: "021506",
        zona: "ANCASH - PALLASCA - LACABAMBA"
      }, {
        codigo: "021507",
        zona: "ANCASH - PALLASCA - LLAPO"
      }, {
        codigo: "021508",
        zona: "ANCASH - PALLASCA - PALLASCA"
      }, {
        codigo: "021509",
        zona: "ANCASH - PALLASCA - PAMPAS"
      }, {
        codigo: "021510",
        zona: "ANCASH - PALLASCA - SANTA ROSA"
      }, {
        codigo: "021511",
        zona: "ANCASH - PALLASCA - TAUCA"
      }, {
        codigo: "021601",
        zona: "ANCASH - POMABAMBA - POMABAMBA"
      }, {
        codigo: "021602",
        zona: "ANCASH - POMABAMBA - HUAYLLAN"
      }, {
        codigo: "021603",
        zona: "ANCASH - POMABAMBA - PAROBAMBA"
      }, {
        codigo: "021604",
        zona: "ANCASH - POMABAMBA - QUINUABAMBA"
      }, {
        codigo: "021701",
        zona: "ANCASH - RECUAY - RECUAY"
      }, {
        codigo: "021702",
        zona: "ANCASH - RECUAY - CATAC"
      }, {
        codigo: "021703",
        zona: "ANCASH - RECUAY - COTAPARACO"
      }, {
        codigo: "021704",
        zona: "ANCASH - RECUAY - HUAYLLAPAMPA"
      }, {
        codigo: "021705",
        zona: "ANCASH - RECUAY - LLACLLIN"
      }, {
        codigo: "021706",
        zona: "ANCASH - RECUAY - MARCA"
      }, {
        codigo: "021707",
        zona: "ANCASH - RECUAY - PAMPAS CHICO"
      }, {
        codigo: "021708",
        zona: "ANCASH - RECUAY - PARARIN"
      }, {
        codigo: "021709",
        zona: "ANCASH - RECUAY - TAPACOCHA"
      }, {
        codigo: "021710",
        zona: "ANCASH - RECUAY - TICAPAMPA"
      }, {
        codigo: "021801",
        zona: "ANCASH - SANTA - CHIMBOTE"
      }, {
        codigo: "021802",
        zona: "ANCASH - SANTA - CACERES DEL PERU"
      }, {
        codigo: "021803",
        zona: "ANCASH - SANTA - COISHCO"
      }, {
        codigo: "021804",
        zona: "ANCASH - SANTA - MACATE"
      }, {
        codigo: "021805",
        zona: "ANCASH - SANTA - MORO"
      }, {
        codigo: "021806",
        zona: "ANCASH - SANTA - NEPEÑA"
      }, {
        codigo: "021807",
        zona: "ANCASH - SANTA - SAMANCO"
      }, {
        codigo: "021808",
        zona: "ANCASH - SANTA - SANTA"
      }, {
        codigo: "021809",
        zona: "ANCASH - SANTA - NUEVO CHIMBOTE"
      }, {
        codigo: "021901",
        zona: "ANCASH - SIHUAS - SIHUAS"
      }, {
        codigo: "021902",
        zona: "ANCASH - SIHUAS - ACOBAMBA"
      }, {
        codigo: "021903",
        zona: "ANCASH - SIHUAS - ALFONSO UGARTE"
      }, {
        codigo: "021904",
        zona: "ANCASH - SIHUAS - CASHAPAMPA"
      }, {
        codigo: "021905",
        zona: "ANCASH - SIHUAS - CHINGALPO"
      }, {
        codigo: "021906",
        zona: "ANCASH - SIHUAS - HUAYLLABAMBA"
      }, {
        codigo: "021907",
        zona: "ANCASH - SIHUAS - QUICHES"
      }, {
        codigo: "021908",
        zona: "ANCASH - SIHUAS - RAGASH"
      }, {
        codigo: "021909",
        zona: "ANCASH - SIHUAS - SAN JUAN"
      }, {
        codigo: "021910",
        zona: "ANCASH - SIHUAS - SICSIBAMBA"
      }, {
        codigo: "022001",
        zona: "ANCASH - YUNGAY - YUNGAY"
      }, {
        codigo: "022002",
        zona: "ANCASH - YUNGAY - CASCAPARA"
      }, {
        codigo: "022003",
        zona: "ANCASH - YUNGAY - MANCOS"
      }, {
        codigo: "022004",
        zona: "ANCASH - YUNGAY - MATACOTO"
      }, {
        codigo: "022005",
        zona: "ANCASH - YUNGAY - QUILLO"
      }, {
        codigo: "022006",
        zona: "ANCASH - YUNGAY - RANRAHIRCA"
      }, {
        codigo: "022007",
        zona: "ANCASH - YUNGAY - SHUPLUY"
      }, {
        codigo: "022008",
        zona: "ANCASH - YUNGAY - YANAMA"
      }, {
        codigo: "030101",
        zona: "APURIMAC - ABANCAY - ABANCAY"
      }, {
        codigo: "030102",
        zona: "APURIMAC - ABANCAY - CHACOCHE"
      }, {
        codigo: "030103",
        zona: "APURIMAC - ABANCAY - CIRCA"
      }, {
        codigo: "030104",
        zona: "APURIMAC - ABANCAY - CURAHUASI"
      }, {
        codigo: "030105",
        zona: "APURIMAC - ABANCAY - HUANIPACA"
      }, {
        codigo: "030106",
        zona: "APURIMAC - ABANCAY - LAMBRAMA"
      }, {
        codigo: "030107",
        zona: "APURIMAC - ABANCAY - PICHIRHUA"
      }, {
        codigo: "030108",
        zona: "APURIMAC - ABANCAY - SAN PEDRO DE CACHORA"
      }, {
        codigo: "030109",
        zona: "APURIMAC - ABANCAY - TAMBURCO"
      }, {
        codigo: "030201",
        zona: "APURIMAC - ANDAHUAYLAS - ANDAHUAYLAS"
      }, {
        codigo: "030202",
        zona: "APURIMAC - ANDAHUAYLAS - ANDARAPA"
      }, {
        codigo: "030203",
        zona: "APURIMAC - ANDAHUAYLAS - CHIARA"
      }, {
        codigo: "030204",
        zona: "APURIMAC - ANDAHUAYLAS - HUANCARAMA"
      }, {
        codigo: "030205",
        zona: "APURIMAC - ANDAHUAYLAS - HUANCARAY"
      }, {
        codigo: "030206",
        zona: "APURIMAC - ANDAHUAYLAS - HUAYANA"
      }, {
        codigo: "030207",
        zona: "APURIMAC - ANDAHUAYLAS - KISHUARA"
      }, {
        codigo: "030208",
        zona: "APURIMAC - ANDAHUAYLAS - PACOBAMBA"
      }, {
        codigo: "030209",
        zona: "APURIMAC - ANDAHUAYLAS - PACUCHA"
      }, {
        codigo: "030210",
        zona: "APURIMAC - ANDAHUAYLAS - PAMPACHIRI"
      }, {
        codigo: "030211",
        zona: "APURIMAC - ANDAHUAYLAS - POMACOCHA"
      }, {
        codigo: "030212",
        zona: "APURIMAC - ANDAHUAYLAS - SAN ANTONIO DE CACHI"
      }, {
        codigo: "030213",
        zona: "APURIMAC - ANDAHUAYLAS - SAN JERONIMO"
      }, {
        codigo: "030214",
        zona: "APURIMAC - ANDAHUAYLAS - SAN MIGUEL DE CHACCRAMPA"
      }, {
        codigo: "030215",
        zona: "APURIMAC - ANDAHUAYLAS - SANTA MARIA DE CHICMO"
      }, {
        codigo: "030216",
        zona: "APURIMAC - ANDAHUAYLAS - TALAVERA"
      }, {
        codigo: "030217",
        zona: "APURIMAC - ANDAHUAYLAS - TUMAY HUARACA"
      }, {
        codigo: "030218",
        zona: "APURIMAC - ANDAHUAYLAS - TURPO"
      }, {
        codigo: "030219",
        zona: "APURIMAC - ANDAHUAYLAS - KAQUIABAMBA"
      }, {
        codigo: "030220",
        zona: "APURIMAC - ANDAHUAYLAS - JOSE MARIA ARGUEDAS"
      }, {
        codigo: "030301",
        zona: "APURIMAC - ANTABAMBA - ANTABAMBA"
      }, {
        codigo: "030302",
        zona: "APURIMAC - ANTABAMBA - EL ORO"
      }, {
        codigo: "030303",
        zona: "APURIMAC - ANTABAMBA - HUAQUIRCA"
      }, {
        codigo: "030304",
        zona: "APURIMAC - ANTABAMBA - JUAN ESPINOZA MEDRANO"
      }, {
        codigo: "030305",
        zona: "APURIMAC - ANTABAMBA - OROPESA"
      }, {
        codigo: "030306",
        zona: "APURIMAC - ANTABAMBA - PACHACONAS"
      }, {
        codigo: "030307",
        zona: "APURIMAC - ANTABAMBA - SABAINO"
      }, {
        codigo: "030401",
        zona: "APURIMAC - AYMARAES - CHALHUANCA"
      }, {
        codigo: "030402",
        zona: "APURIMAC - AYMARAES - CAPAYA"
      }, {
        codigo: "030403",
        zona: "APURIMAC - AYMARAES - CARAYBAMBA"
      }, {
        codigo: "030404",
        zona: "APURIMAC - AYMARAES - CHAPIMARCA"
      }, {
        codigo: "030405",
        zona: "APURIMAC - AYMARAES - COLCABAMBA"
      }, {
        codigo: "030406",
        zona: "APURIMAC - AYMARAES - COTARUSE"
      }, {
        codigo: "030407",
        zona: "APURIMAC - AYMARAES - IHUAYLLO"
      }, {
        codigo: "030408",
        zona: "APURIMAC - AYMARAES - JUSTO APU SAHUARAURA"
      }, {
        codigo: "030409",
        zona: "APURIMAC - AYMARAES - LUCRE"
      }, {
        codigo: "030410",
        zona: "APURIMAC - AYMARAES - POCOHUANCA"
      }, {
        codigo: "030411",
        zona: "APURIMAC - AYMARAES - SAN JUAN DE CHACÑA"
      }, {
        codigo: "030412",
        zona: "APURIMAC - AYMARAES - SAÑAYCA"
      }, {
        codigo: "030413",
        zona: "APURIMAC - AYMARAES - SORAYA"
      }, {
        codigo: "030414",
        zona: "APURIMAC - AYMARAES - TAPAIRIHUA"
      }, {
        codigo: "030415",
        zona: "APURIMAC - AYMARAES - TINTAY"
      }, {
        codigo: "030416",
        zona: "APURIMAC - AYMARAES - TORAYA"
      }, {
        codigo: "030417",
        zona: "APURIMAC - AYMARAES - YANACA"
      }, {
        codigo: "030501",
        zona: "APURIMAC - COTABAMBAS - TAMBOBAMBA"
      }, {
        codigo: "030502",
        zona: "APURIMAC - COTABAMBAS - COTABAMBAS"
      }, {
        codigo: "030503",
        zona: "APURIMAC - COTABAMBAS - COYLLURQUI"
      }, {
        codigo: "030504",
        zona: "APURIMAC - COTABAMBAS - HAQUIRA"
      }, {
        codigo: "030505",
        zona: "APURIMAC - COTABAMBAS - MARA"
      }, {
        codigo: "030506",
        zona: "APURIMAC - COTABAMBAS - CHALLHUAHUACHO"
      }, {
        codigo: "030601",
        zona: "APURIMAC - CHINCHEROS - CHINCHEROS"
      }, {
        codigo: "030602",
        zona: "APURIMAC - CHINCHEROS - ANCO_HUALLO"
      }, {
        codigo: "030603",
        zona: "APURIMAC - CHINCHEROS - COCHARCAS"
      }, {
        codigo: "030604",
        zona: "APURIMAC - CHINCHEROS - HUACCANA"
      }, {
        codigo: "030605",
        zona: "APURIMAC - CHINCHEROS - OCOBAMBA"
      }, {
        codigo: "030606",
        zona: "APURIMAC - CHINCHEROS - ONGOY"
      }, {
        codigo: "030607",
        zona: "APURIMAC - CHINCHEROS - URANMARCA"
      }, {
        codigo: "030608",
        zona: "APURIMAC - CHINCHEROS - RANRACANCHA"
      }, {
        codigo: "030609",
        zona: "APURIMAC - CHINCHEROS - ROCCHACC"
      }, {
        codigo: "030610",
        zona: "APURIMAC - CHINCHEROS - EL PORVENIR"
      }, {
        codigo: "030611",
        zona: "APURIMAC - CHINCHEROS - LOS CHANKAS"
      }, {
        codigo: "030701",
        zona: "APURIMAC - GRAU - CHUQUIBAMBILLA"
      }, {
        codigo: "030702",
        zona: "APURIMAC - GRAU - CURPAHUASI"
      }, {
        codigo: "030703",
        zona: "APURIMAC - GRAU - GAMARRA"
      }, {
        codigo: "030704",
        zona: "APURIMAC - GRAU - HUAYLLATI"
      }, {
        codigo: "030705",
        zona: "APURIMAC - GRAU - MAMARA"
      }, {
        codigo: "030706",
        zona: "APURIMAC - GRAU - MICAELA BASTIDAS"
      }, {
        codigo: "030707",
        zona: "APURIMAC - GRAU - PATAYPAMPA"
      }, {
        codigo: "030708",
        zona: "APURIMAC - GRAU - PROGRESO"
      }, {
        codigo: "030709",
        zona: "APURIMAC - GRAU - SAN ANTONIO"
      }, {
        codigo: "030710",
        zona: "APURIMAC - GRAU - SANTA ROSA"
      }, {
        codigo: "030711",
        zona: "APURIMAC - GRAU - TURPAY"
      }, {
        codigo: "030712",
        zona: "APURIMAC - GRAU - VILCABAMBA"
      }, {
        codigo: "030713",
        zona: "APURIMAC - GRAU - VIRUNDO"
      }, {
        codigo: "030714",
        zona: "APURIMAC - GRAU - CURASCO"
      }, {
        codigo: "040101",
        zona: "AREQUIPA - AREQUIPA - AREQUIPA"
      }, {
        codigo: "040102",
        zona: "AREQUIPA - AREQUIPA - ALTO SELVA ALEGRE"
      }, {
        codigo: "040103",
        zona: "AREQUIPA - AREQUIPA - CAYMA"
      }, {
        codigo: "040104",
        zona: "AREQUIPA - AREQUIPA - CERRO COLORADO"
      }, {
        codigo: "040105",
        zona: "AREQUIPA - AREQUIPA - CHARACATO"
      }, {
        codigo: "040106",
        zona: "AREQUIPA - AREQUIPA - CHIGUATA"
      }, {
        codigo: "040107",
        zona: "AREQUIPA - AREQUIPA - JACOBO HUNTER"
      }, {
        codigo: "040108",
        zona: "AREQUIPA - AREQUIPA - LA JOYA"
      }, {
        codigo: "040109",
        zona: "AREQUIPA - AREQUIPA - MARIANO MELGAR"
      }, {
        codigo: "040110",
        zona: "AREQUIPA - AREQUIPA - MIRAFLORES"
      }, {
        codigo: "040111",
        zona: "AREQUIPA - AREQUIPA - MOLLEBAYA"
      }, {
        codigo: "040112",
        zona: "AREQUIPA - AREQUIPA - PAUCARPATA"
      }, {
        codigo: "040113",
        zona: "AREQUIPA - AREQUIPA - POCSI"
      }, {
        codigo: "040114",
        zona: "AREQUIPA - AREQUIPA - POLOBAYA"
      }, {
        codigo: "040115",
        zona: "AREQUIPA - AREQUIPA - QUEQUEÑA"
      }, {
        codigo: "040116",
        zona: "AREQUIPA - AREQUIPA - SABANDIA"
      }, {
        codigo: "040117",
        zona: "AREQUIPA - AREQUIPA - SACHACA"
      }, {
        codigo: "040118",
        zona: "AREQUIPA - AREQUIPA - SAN JUAN DE SIGUAS"
      }, {
        codigo: "040119",
        zona: "AREQUIPA - AREQUIPA - SAN JUAN DE TARUCANI"
      }, {
        codigo: "040120",
        zona: "AREQUIPA - AREQUIPA - SANTA ISABEL DE SIGUAS"
      }, {
        codigo: "040121",
        zona: "AREQUIPA - AREQUIPA - SANTA RITA DE SIGUAS"
      }, {
        codigo: "040122",
        zona: "AREQUIPA - AREQUIPA - SOCABAYA"
      }, {
        codigo: "040123",
        zona: "AREQUIPA - AREQUIPA - TIABAYA"
      }, {
        codigo: "040124",
        zona: "AREQUIPA - AREQUIPA - UCHUMAYO"
      }, {
        codigo: "040125",
        zona: "AREQUIPA - AREQUIPA - VITOR"
      }, {
        codigo: "040126",
        zona: "AREQUIPA - AREQUIPA - YANAHUARA"
      }, {
        codigo: "040127",
        zona: "AREQUIPA - AREQUIPA - YARABAMBA"
      }, {
        codigo: "040128",
        zona: "AREQUIPA - AREQUIPA - YURA"
      }, {
        codigo: "040129",
        zona: "AREQUIPA - AREQUIPA - JOSE LUIS BUSTAMANTE Y RIVERO"
      }, {
        codigo: "040201",
        zona: "AREQUIPA - CAMANA - CAMANA"
      }, {
        codigo: "040202",
        zona: "AREQUIPA - CAMANA - JOSE MARIA QUIMPER"
      }, {
        codigo: "040203",
        zona: "AREQUIPA - CAMANA - MARIANO NICOLAS VALCARCEL"
      }, {
        codigo: "040204",
        zona: "AREQUIPA - CAMANA - MARISCAL CACERES"
      }, {
        codigo: "040205",
        zona: "AREQUIPA - CAMANA - NICOLAS DE PIEROLA"
      }, {
        codigo: "040206",
        zona: "AREQUIPA - CAMANA - OCOÑA"
      }, {
        codigo: "040207",
        zona: "AREQUIPA - CAMANA - QUILCA"
      }, {
        codigo: "040208",
        zona: "AREQUIPA - CAMANA - SAMUEL PASTOR"
      }, {
        codigo: "040301",
        zona: "AREQUIPA - CARAVELI - CARAVELI"
      }, {
        codigo: "040302",
        zona: "AREQUIPA - CARAVELI - ACARI"
      }, {
        codigo: "040303",
        zona: "AREQUIPA - CARAVELI - ATICO"
      }, {
        codigo: "040304",
        zona: "AREQUIPA - CARAVELI - ATIQUIPA"
      }, {
        codigo: "040305",
        zona: "AREQUIPA - CARAVELI - BELLA UNION"
      }, {
        codigo: "040306",
        zona: "AREQUIPA - CARAVELI - CAHUACHO"
      }, {
        codigo: "040307",
        zona: "AREQUIPA - CARAVELI - CHALA"
      }, {
        codigo: "040308",
        zona: "AREQUIPA - CARAVELI - CHAPARRA"
      }, {
        codigo: "040309",
        zona: "AREQUIPA - CARAVELI - HUANUHUANU"
      }, {
        codigo: "040310",
        zona: "AREQUIPA - CARAVELI - JAQUI"
      }, {
        codigo: "040311",
        zona: "AREQUIPA - CARAVELI - LOMAS"
      }, {
        codigo: "040312",
        zona: "AREQUIPA - CARAVELI - QUICACHA"
      }, {
        codigo: "040313",
        zona: "AREQUIPA - CARAVELI - YAUCA"
      }, {
        codigo: "040401",
        zona: "AREQUIPA - CASTILLA - APLAO"
      }, {
        codigo: "040402",
        zona: "AREQUIPA - CASTILLA - ANDAGUA"
      }, {
        codigo: "040403",
        zona: "AREQUIPA - CASTILLA - AYO"
      }, {
        codigo: "040404",
        zona: "AREQUIPA - CASTILLA - CHACHAS"
      }, {
        codigo: "040405",
        zona: "AREQUIPA - CASTILLA - CHILCAYMARCA"
      }, {
        codigo: "040406",
        zona: "AREQUIPA - CASTILLA - CHOCO"
      }, {
        codigo: "040407",
        zona: "AREQUIPA - CASTILLA - HUANCARQUI"
      }, {
        codigo: "040408",
        zona: "AREQUIPA - CASTILLA - MACHAGUAY"
      }, {
        codigo: "040409",
        zona: "AREQUIPA - CASTILLA - ORCOPAMPA"
      }, {
        codigo: "040410",
        zona: "AREQUIPA - CASTILLA - PAMPACOLCA"
      }, {
        codigo: "040411",
        zona: "AREQUIPA - CASTILLA - TIPAN"
      }, {
        codigo: "040412",
        zona: "AREQUIPA - CASTILLA - UÑON"
      }, {
        codigo: "040413",
        zona: "AREQUIPA - CASTILLA - URACA"
      }, {
        codigo: "040414",
        zona: "AREQUIPA - CASTILLA - VIRACO"
      }, {
        codigo: "040501",
        zona: "AREQUIPA - CAYLLOMA - CHIVAY"
      }, {
        codigo: "040502",
        zona: "AREQUIPA - CAYLLOMA - ACHOMA"
      }, {
        codigo: "040503",
        zona: "AREQUIPA - CAYLLOMA - CABANACONDE"
      }, {
        codigo: "040504",
        zona: "AREQUIPA - CAYLLOMA - CALLALLI"
      }, {
        codigo: "040505",
        zona: "AREQUIPA - CAYLLOMA - CAYLLOMA"
      }, {
        codigo: "040506",
        zona: "AREQUIPA - CAYLLOMA - COPORAQUE"
      }, {
        codigo: "040507",
        zona: "AREQUIPA - CAYLLOMA - HUAMBO"
      }, {
        codigo: "040508",
        zona: "AREQUIPA - CAYLLOMA - HUANCA"
      }, {
        codigo: "040509",
        zona: "AREQUIPA - CAYLLOMA - ICHUPAMPA"
      }, {
        codigo: "040510",
        zona: "AREQUIPA - CAYLLOMA - LARI"
      }, {
        codigo: "040511",
        zona: "AREQUIPA - CAYLLOMA - LLUTA"
      }, {
        codigo: "040512",
        zona: "AREQUIPA - CAYLLOMA - MACA"
      }, {
        codigo: "040513",
        zona: "AREQUIPA - CAYLLOMA - MADRIGAL"
      }, {
        codigo: "040514",
        zona: "AREQUIPA - CAYLLOMA - SAN ANTONIO DE CHUCA"
      }, {
        codigo: "040515",
        zona: "AREQUIPA - CAYLLOMA - SIBAYO"
      }, {
        codigo: "040516",
        zona: "AREQUIPA - CAYLLOMA - TAPAY"
      }, {
        codigo: "040517",
        zona: "AREQUIPA - CAYLLOMA - TISCO"
      }, {
        codigo: "040518",
        zona: "AREQUIPA - CAYLLOMA - TUTI"
      }, {
        codigo: "040519",
        zona: "AREQUIPA - CAYLLOMA - YANQUE"
      }, {
        codigo: "040520",
        zona: "AREQUIPA - CAYLLOMA - MAJES"
      }, {
        codigo: "040601",
        zona: "AREQUIPA - CONDESUYOS - CHUQUIBAMBA"
      }, {
        codigo: "040602",
        zona: "AREQUIPA - CONDESUYOS - ANDARAY"
      }, {
        codigo: "040603",
        zona: "AREQUIPA - CONDESUYOS - CAYARANI"
      }, {
        codigo: "040604",
        zona: "AREQUIPA - CONDESUYOS - CHICHAS"
      }, {
        codigo: "040605",
        zona: "AREQUIPA - CONDESUYOS - IRAY"
      }, {
        codigo: "040606",
        zona: "AREQUIPA - CONDESUYOS - RIO GRANDE"
      }, {
        codigo: "040607",
        zona: "AREQUIPA - CONDESUYOS - SALAMANCA"
      }, {
        codigo: "040608",
        zona: "AREQUIPA - CONDESUYOS - YANAQUIHUA"
      }, {
        codigo: "040701",
        zona: "AREQUIPA - ISLAY - MOLLENDO"
      }, {
        codigo: "040702",
        zona: "AREQUIPA - ISLAY - COCACHACRA"
      }, {
        codigo: "040703",
        zona: "AREQUIPA - ISLAY - DEAN VALDIVIA"
      }, {
        codigo: "040704",
        zona: "AREQUIPA - ISLAY - ISLAY"
      }, {
        codigo: "040705",
        zona: "AREQUIPA - ISLAY - MEJIA"
      }, {
        codigo: "040706",
        zona: "AREQUIPA - ISLAY - PUNTA DE BOMBON"
      }, {
        codigo: "040801",
        zona: "AREQUIPA - LA UNION - COTAHUASI"
      }, {
        codigo: "040802",
        zona: "AREQUIPA - LA UNION - ALCA"
      }, {
        codigo: "040803",
        zona: "AREQUIPA - LA UNION - CHARCANA"
      }, {
        codigo: "040804",
        zona: "AREQUIPA - LA UNION - HUAYNACOTAS"
      }, {
        codigo: "040805",
        zona: "AREQUIPA - LA UNION - PAMPAMARCA"
      }, {
        codigo: "040806",
        zona: "AREQUIPA - LA UNION - PUYCA"
      }, {
        codigo: "040807",
        zona: "AREQUIPA - LA UNION - QUECHUALLA"
      }, {
        codigo: "040808",
        zona: "AREQUIPA - LA UNION - SAYLA"
      }, {
        codigo: "040809",
        zona: "AREQUIPA - LA UNION - TAURIA"
      }, {
        codigo: "040810",
        zona: "AREQUIPA - LA UNION - TOMEPAMPA"
      }, {
        codigo: "040811",
        zona: "AREQUIPA - LA UNION - TORO"
      }, {
        codigo: "050101",
        zona: "AYACUCHO - HUAMANGA - AYACUCHO"
      }, {
        codigo: "050102",
        zona: "AYACUCHO - HUAMANGA - ACOCRO"
      }, {
        codigo: "050103",
        zona: "AYACUCHO - HUAMANGA - ACOS VINCHOS"
      }, {
        codigo: "050104",
        zona: "AYACUCHO - HUAMANGA - CARMEN ALTO"
      }, {
        codigo: "050105",
        zona: "AYACUCHO - HUAMANGA - CHIARA"
      }, {
        codigo: "050106",
        zona: "AYACUCHO - HUAMANGA - OCROS"
      }, {
        codigo: "050107",
        zona: "AYACUCHO - HUAMANGA - PACAYCASA"
      }, {
        codigo: "050108",
        zona: "AYACUCHO - HUAMANGA - QUINUA"
      }, {
        codigo: "050109",
        zona: "AYACUCHO - HUAMANGA - SAN JOSE DE TICLLAS"
      }, {
        codigo: "050110",
        zona: "AYACUCHO - HUAMANGA - SAN JUAN BAUTISTA"
      }, {
        codigo: "050111",
        zona: "AYACUCHO - HUAMANGA - SANTIAGO DE PISCHA"
      }, {
        codigo: "050112",
        zona: "AYACUCHO - HUAMANGA - SOCOS"
      }, {
        codigo: "050113",
        zona: "AYACUCHO - HUAMANGA - TAMBILLO"
      }, {
        codigo: "050114",
        zona: "AYACUCHO - HUAMANGA - VINCHOS"
      }, {
        codigo: "050115",
        zona: "AYACUCHO - HUAMANGA - JESUS NAZARENO"
      }, {
        codigo: "050116",
        zona: "AYACUCHO - HUAMANGA - ANDRES AVELINO CACERES DORREGARAY"
      }, {
        codigo: "050201",
        zona: "AYACUCHO - CANGALLO - CANGALLO"
      }, {
        codigo: "050202",
        zona: "AYACUCHO - CANGALLO - CHUSCHI"
      }, {
        codigo: "050203",
        zona: "AYACUCHO - CANGALLO - LOS MOROCHUCOS"
      }, {
        codigo: "050204",
        zona: "AYACUCHO - CANGALLO - MARIA PARADO DE BELLIDO"
      }, {
        codigo: "050205",
        zona: "AYACUCHO - CANGALLO - PARAS"
      }, {
        codigo: "050206",
        zona: "AYACUCHO - CANGALLO - TOTOS"
      }, {
        codigo: "050301",
        zona: "AYACUCHO - HUANCA SANCOS - SANCOS"
      }, {
        codigo: "050302",
        zona: "AYACUCHO - HUANCA SANCOS - CARAPO"
      }, {
        codigo: "050303",
        zona: "AYACUCHO - HUANCA SANCOS - SACSAMARCA"
      }, {
        codigo: "050304",
        zona: "AYACUCHO - HUANCA SANCOS - SANTIAGO DE LUCANAMARCA"
      }, {
        codigo: "050401",
        zona: "AYACUCHO - HUANTA - HUANTA"
      }, {
        codigo: "050402",
        zona: "AYACUCHO - HUANTA - AYAHUANCO"
      }, {
        codigo: "050403",
        zona: "AYACUCHO - HUANTA - HUAMANGUILLA"
      }, {
        codigo: "050404",
        zona: "AYACUCHO - HUANTA - IGUAIN"
      }, {
        codigo: "050405",
        zona: "AYACUCHO - HUANTA - LURICOCHA"
      }, {
        codigo: "050406",
        zona: "AYACUCHO - HUANTA - SANTILLANA"
      }, {
        codigo: "050407",
        zona: "AYACUCHO - HUANTA - SIVIA"
      }, {
        codigo: "050408",
        zona: "AYACUCHO - HUANTA - LLOCHEGUA"
      }, {
        codigo: "050409",
        zona: "AYACUCHO - HUANTA - CANAYRE"
      }, {
        codigo: "050410",
        zona: "AYACUCHO - HUANTA - UCHURACCAY"
      }, {
        codigo: "050411",
        zona: "AYACUCHO - HUANTA - PUCACOLPA"
      }, {
        codigo: "050412",
        zona: "AYACUCHO - HUANTA - CHACA"
      }, {
        codigo: "050501",
        zona: "AYACUCHO - LA MAR - SAN MIGUEL"
      }, {
        codigo: "050502",
        zona: "AYACUCHO - LA MAR - ANCO"
      }, {
        codigo: "050503",
        zona: "AYACUCHO - LA MAR - AYNA"
      }, {
        codigo: "050504",
        zona: "AYACUCHO - LA MAR - CHILCAS"
      }, {
        codigo: "050505",
        zona: "AYACUCHO - LA MAR - CHUNGUI"
      }, {
        codigo: "050506",
        zona: "AYACUCHO - LA MAR - LUIS CARRANZA"
      }, {
        codigo: "050507",
        zona: "AYACUCHO - LA MAR - SANTA ROSA"
      }, {
        codigo: "050508",
        zona: "AYACUCHO - LA MAR - TAMBO"
      }, {
        codigo: "050509",
        zona: "AYACUCHO - LA MAR - SAMUGARI"
      }, {
        codigo: "050510",
        zona: "AYACUCHO - LA MAR - ANCHIHUAY"
      }, {
        codigo: "050511",
        zona: "AYACUCHO - LA MAR - ORONCCOY"
      }, {
        codigo: "050601",
        zona: "AYACUCHO - LUCANAS - PUQUIO"
      }, {
        codigo: "050602",
        zona: "AYACUCHO - LUCANAS - AUCARA"
      }, {
        codigo: "050603",
        zona: "AYACUCHO - LUCANAS - CABANA"
      }, {
        codigo: "050604",
        zona: "AYACUCHO - LUCANAS - CARMEN SALCEDO"
      }, {
        codigo: "050605",
        zona: "AYACUCHO - LUCANAS - CHAVIÑA"
      }, {
        codigo: "050606",
        zona: "AYACUCHO - LUCANAS - CHIPAO"
      }, {
        codigo: "050607",
        zona: "AYACUCHO - LUCANAS - HUAC-HUAS"
      }, {
        codigo: "050608",
        zona: "AYACUCHO - LUCANAS - LARAMATE"
      }, {
        codigo: "050609",
        zona: "AYACUCHO - LUCANAS - LEONCIO PRADO"
      }, {
        codigo: "050610",
        zona: "AYACUCHO - LUCANAS - LLAUTA"
      }, {
        codigo: "050611",
        zona: "AYACUCHO - LUCANAS - LUCANAS"
      }, {
        codigo: "050612",
        zona: "AYACUCHO - LUCANAS - OCAÑA"
      }, {
        codigo: "050613",
        zona: "AYACUCHO - LUCANAS - OTOCA"
      }, {
        codigo: "050614",
        zona: "AYACUCHO - LUCANAS - SAISA"
      }, {
        codigo: "050615",
        zona: "AYACUCHO - LUCANAS - SAN CRISTOBAL"
      }, {
        codigo: "050616",
        zona: "AYACUCHO - LUCANAS - SAN JUAN"
      }, {
        codigo: "050617",
        zona: "AYACUCHO - LUCANAS - SAN PEDRO"
      }, {
        codigo: "050618",
        zona: "AYACUCHO - LUCANAS - SAN PEDRO DE PALCO"
      }, {
        codigo: "050619",
        zona: "AYACUCHO - LUCANAS - SANCOS"
      }, {
        codigo: "050620",
        zona: "AYACUCHO - LUCANAS - SANTA ANA DE HUAYCAHUACHO"
      }, {
        codigo: "050621",
        zona: "AYACUCHO - LUCANAS - SANTA LUCIA"
      }, {
        codigo: "050701",
        zona: "AYACUCHO - PARINACOCHAS - CORACORA"
      }, {
        codigo: "050702",
        zona: "AYACUCHO - PARINACOCHAS - CHUMPI"
      }, {
        codigo: "050703",
        zona: "AYACUCHO - PARINACOCHAS - CORONEL CASTAÑEDA"
      }, {
        codigo: "050704",
        zona: "AYACUCHO - PARINACOCHAS - PACAPAUSA"
      }, {
        codigo: "050705",
        zona: "AYACUCHO - PARINACOCHAS - PULLO"
      }, {
        codigo: "050706",
        zona: "AYACUCHO - PARINACOCHAS - PUYUSCA"
      }, {
        codigo: "050707",
        zona: "AYACUCHO - PARINACOCHAS - SAN FRANCISCO DE RAVACAYCO"
      }, {
        codigo: "050708",
        zona: "AYACUCHO - PARINACOCHAS - UPAHUACHO"
      }, {
        codigo: "050801",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - PAUSA"
      }, {
        codigo: "050802",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - COLTA"
      }, {
        codigo: "050803",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - CORCULLA"
      }, {
        codigo: "050804",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - LAMPA"
      }, {
        codigo: "050805",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - MARCABAMBA"
      }, {
        codigo: "050806",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - OYOLO"
      }, {
        codigo: "050807",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - PARARCA"
      }, {
        codigo: "050808",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - SAN JAVIER DE ALPABAMBA"
      }, {
        codigo: "050809",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - SAN JOSE DE USHUA"
      }, {
        codigo: "050810",
        zona: "AYACUCHO - PAUCAR DEL SARA SARA - SARA SARA"
      }, {
        codigo: "050901",
        zona: "AYACUCHO - SUCRE - QUEROBAMBA"
      }, {
        codigo: "050902",
        zona: "AYACUCHO - SUCRE - BELEN"
      }, {
        codigo: "050903",
        zona: "AYACUCHO - SUCRE - CHALCOS"
      }, {
        codigo: "050904",
        zona: "AYACUCHO - SUCRE - CHILCAYOC"
      }, {
        codigo: "050905",
        zona: "AYACUCHO - SUCRE - HUACAÑA"
      }, {
        codigo: "050906",
        zona: "AYACUCHO - SUCRE - MORCOLLA"
      }, {
        codigo: "050907",
        zona: "AYACUCHO - SUCRE - PAICO"
      }, {
        codigo: "050908",
        zona: "AYACUCHO - SUCRE - SAN PEDRO DE LARCAY"
      }, {
        codigo: "050909",
        zona: "AYACUCHO - SUCRE - SAN SALVADOR DE QUIJE"
      }, {
        codigo: "050910",
        zona: "AYACUCHO - SUCRE - SANTIAGO DE PAUCARAY"
      }, {
        codigo: "050911",
        zona: "AYACUCHO - SUCRE - SORAS"
      }, {
        codigo: "051001",
        zona: "AYACUCHO - VICTOR FAJARDO - HUANCAPI"
      }, {
        codigo: "051002",
        zona: "AYACUCHO - VICTOR FAJARDO - ALCAMENCA"
      }, {
        codigo: "051003",
        zona: "AYACUCHO - VICTOR FAJARDO - APONGO"
      }, {
        codigo: "051004",
        zona: "AYACUCHO - VICTOR FAJARDO - ASQUIPATA"
      }, {
        codigo: "051005",
        zona: "AYACUCHO - VICTOR FAJARDO - CANARIA"
      }, {
        codigo: "051006",
        zona: "AYACUCHO - VICTOR FAJARDO - CAYARA"
      }, {
        codigo: "051007",
        zona: "AYACUCHO - VICTOR FAJARDO - COLCA"
      }, {
        codigo: "051008",
        zona: "AYACUCHO - VICTOR FAJARDO - HUAMANQUIQUIA"
      }, {
        codigo: "051009",
        zona: "AYACUCHO - VICTOR FAJARDO - HUANCARAYLLA"
      }, {
        codigo: "051010",
        zona: "AYACUCHO - VICTOR FAJARDO - HUALLA"
      }, {
        codigo: "051011",
        zona: "AYACUCHO - VICTOR FAJARDO - SARHUA"
      }, {
        codigo: "051012",
        zona: "AYACUCHO - VICTOR FAJARDO - VILCANCHOS"
      }, {
        codigo: "051101",
        zona: "AYACUCHO - VILCAS HUAMAN - VILCAS HUAMAN"
      }, {
        codigo: "051102",
        zona: "AYACUCHO - VILCAS HUAMAN - ACCOMARCA"
      }, {
        codigo: "051103",
        zona: "AYACUCHO - VILCAS HUAMAN - CARHUANCA"
      }, {
        codigo: "051104",
        zona: "AYACUCHO - VILCAS HUAMAN - CONCEPCION"
      }, {
        codigo: "051105",
        zona: "AYACUCHO - VILCAS HUAMAN - HUAMBALPA"
      }, {
        codigo: "051106",
        zona: "AYACUCHO - VILCAS HUAMAN - INDEPENDENCIA"
      }, {
        codigo: "051107",
        zona: "AYACUCHO - VILCAS HUAMAN - SAURAMA"
      }, {
        codigo: "051108",
        zona: "AYACUCHO - VILCAS HUAMAN - VISCHONGO"
      }, {
        codigo: "060101",
        zona: "CAJAMARCA - CAJAMARCA - CAJAMARCA"
      }, {
        codigo: "060102",
        zona: "CAJAMARCA - CAJAMARCA - ASUNCION"
      }, {
        codigo: "060103",
        zona: "CAJAMARCA - CAJAMARCA - CHETILLA"
      }, {
        codigo: "060104",
        zona: "CAJAMARCA - CAJAMARCA - COSPAN"
      }, {
        codigo: "060105",
        zona: "CAJAMARCA - CAJAMARCA - ENCAÑADA"
      }, {
        codigo: "060106",
        zona: "CAJAMARCA - CAJAMARCA - JESUS"
      }, {
        codigo: "060107",
        zona: "CAJAMARCA - CAJAMARCA - LLACANORA"
      }, {
        codigo: "060108",
        zona: "CAJAMARCA - CAJAMARCA - LOS BAÑOS DEL INCA"
      }, {
        codigo: "060109",
        zona: "CAJAMARCA - CAJAMARCA - MAGDALENA"
      }, {
        codigo: "060110",
        zona: "CAJAMARCA - CAJAMARCA - MATARA"
      }, {
        codigo: "060111",
        zona: "CAJAMARCA - CAJAMARCA - NAMORA"
      }, {
        codigo: "060112",
        zona: "CAJAMARCA - CAJAMARCA - SAN JUAN"
      }, {
        codigo: "060201",
        zona: "CAJAMARCA - CAJABAMBA - CAJABAMBA"
      }, {
        codigo: "060202",
        zona: "CAJAMARCA - CAJABAMBA - CACHACHI"
      }, {
        codigo: "060203",
        zona: "CAJAMARCA - CAJABAMBA - CONDEBAMBA"
      }, {
        codigo: "060204",
        zona: "CAJAMARCA - CAJABAMBA - SITACOCHA"
      }, {
        codigo: "060301",
        zona: "CAJAMARCA - CELENDIN - CELENDIN"
      }, {
        codigo: "060302",
        zona: "CAJAMARCA - CELENDIN - CHUMUCH"
      }, {
        codigo: "060303",
        zona: "CAJAMARCA - CELENDIN - CORTEGANA"
      }, {
        codigo: "060304",
        zona: "CAJAMARCA - CELENDIN - HUASMIN"
      }, {
        codigo: "060305",
        zona: "CAJAMARCA - CELENDIN - JORGE CHAVEZ"
      }, {
        codigo: "060306",
        zona: "CAJAMARCA - CELENDIN - JOSE GALVEZ"
      }, {
        codigo: "060307",
        zona: "CAJAMARCA - CELENDIN - MIGUEL IGLESIAS"
      }, {
        codigo: "060308",
        zona: "CAJAMARCA - CELENDIN - OXAMARCA"
      }, {
        codigo: "060309",
        zona: "CAJAMARCA - CELENDIN - SOROCHUCO"
      }, {
        codigo: "060310",
        zona: "CAJAMARCA - CELENDIN - SUCRE"
      }, {
        codigo: "060311",
        zona: "CAJAMARCA - CELENDIN - UTCO"
      }, {
        codigo: "060312",
        zona: "CAJAMARCA - CELENDIN - LA LIBERTAD DE PALLAN"
      }, {
        codigo: "060401",
        zona: "CAJAMARCA - CHOTA - CHOTA"
      }, {
        codigo: "060402",
        zona: "CAJAMARCA - CHOTA - ANGUIA"
      }, {
        codigo: "060403",
        zona: "CAJAMARCA - CHOTA - CHADIN"
      }, {
        codigo: "060404",
        zona: "CAJAMARCA - CHOTA - CHIGUIRIP"
      }, {
        codigo: "060405",
        zona: "CAJAMARCA - CHOTA - CHIMBAN"
      }, {
        codigo: "060406",
        zona: "CAJAMARCA - CHOTA - CHOROPAMPA"
      }, {
        codigo: "060407",
        zona: "CAJAMARCA - CHOTA - COCHABAMBA"
      }, {
        codigo: "060408",
        zona: "CAJAMARCA - CHOTA - CONCHAN"
      }, {
        codigo: "060409",
        zona: "CAJAMARCA - CHOTA - HUAMBOS"
      }, {
        codigo: "060410",
        zona: "CAJAMARCA - CHOTA - LAJAS"
      }, {
        codigo: "060411",
        zona: "CAJAMARCA - CHOTA - LLAMA"
      }, {
        codigo: "060412",
        zona: "CAJAMARCA - CHOTA - MIRACOSTA"
      }, {
        codigo: "060413",
        zona: "CAJAMARCA - CHOTA - PACCHA"
      }, {
        codigo: "060414",
        zona: "CAJAMARCA - CHOTA - PION"
      }, {
        codigo: "060415",
        zona: "CAJAMARCA - CHOTA - QUEROCOTO"
      }, {
        codigo: "060416",
        zona: "CAJAMARCA - CHOTA - SAN JUAN DE LICUPIS"
      }, {
        codigo: "060417",
        zona: "CAJAMARCA - CHOTA - TACABAMBA"
      }, {
        codigo: "060418",
        zona: "CAJAMARCA - CHOTA - TOCMOCHE"
      }, {
        codigo: "060419",
        zona: "CAJAMARCA - CHOTA - CHALAMARCA"
      }, {
        codigo: "060501",
        zona: "CAJAMARCA - CONTUMAZA - CONTUMAZA"
      }, {
        codigo: "060502",
        zona: "CAJAMARCA - CONTUMAZA - CHILETE"
      }, {
        codigo: "060503",
        zona: "CAJAMARCA - CONTUMAZA - CUPISNIQUE"
      }, {
        codigo: "060504",
        zona: "CAJAMARCA - CONTUMAZA - GUZMANGO"
      }, {
        codigo: "060505",
        zona: "CAJAMARCA - CONTUMAZA - SAN BENITO"
      }, {
        codigo: "060506",
        zona: "CAJAMARCA - CONTUMAZA - SANTA CRUZ DE TOLED"
      }, {
        codigo: "060507",
        zona: "CAJAMARCA - CONTUMAZA - TANTARICA"
      }, {
        codigo: "060508",
        zona: "CAJAMARCA - CONTUMAZA - YONAN"
      }, {
        codigo: "060601",
        zona: "CAJAMARCA - CUTERVO - CUTERVO"
      }, {
        codigo: "060602",
        zona: "CAJAMARCA - CUTERVO - CALLAYUC"
      }, {
        codigo: "060603",
        zona: "CAJAMARCA - CUTERVO - CHOROS"
      }, {
        codigo: "060604",
        zona: "CAJAMARCA - CUTERVO - CUJILLO"
      }, {
        codigo: "060605",
        zona: "CAJAMARCA - CUTERVO - LA RAMADA"
      }, {
        codigo: "060606",
        zona: "CAJAMARCA - CUTERVO - PIMPINGOS"
      }, {
        codigo: "060607",
        zona: "CAJAMARCA - CUTERVO - QUEROCOTILLO"
      }, {
        codigo: "060608",
        zona: "CAJAMARCA - CUTERVO - SAN ANDRES DE CUTERVO"
      }, {
        codigo: "060609",
        zona: "CAJAMARCA - CUTERVO - SAN JUAN DE CUTERVO"
      }, {
        codigo: "060610",
        zona: "CAJAMARCA - CUTERVO - SAN LUIS DE LUCMA"
      }, {
        codigo: "060611",
        zona: "CAJAMARCA - CUTERVO - SANTA CRUZ"
      }, {
        codigo: "060612",
        zona: "CAJAMARCA - CUTERVO - SANTO DOMINGO DE LA CAPILLA"
      }, {
        codigo: "060613",
        zona: "CAJAMARCA - CUTERVO - SANTO TOMAS"
      }, {
        codigo: "060614",
        zona: "CAJAMARCA - CUTERVO - SOCOTA"
      }, {
        codigo: "060615",
        zona: "CAJAMARCA - CUTERVO - TORIBIO CASANOVA"
      }, {
        codigo: "060701",
        zona: "CAJAMARCA - HUALGAYOC - BAMBAMARCA"
      }, {
        codigo: "060702",
        zona: "CAJAMARCA - HUALGAYOC - CHUGUR"
      }, {
        codigo: "060703",
        zona: "CAJAMARCA - HUALGAYOC - HUALGAYOC"
      }, {
        codigo: "060801",
        zona: "CAJAMARCA - JAEN - JAEN"
      }, {
        codigo: "060802",
        zona: "CAJAMARCA - JAEN - BELLAVISTA"
      }, {
        codigo: "060803",
        zona: "CAJAMARCA - JAEN - CHONTALI"
      }, {
        codigo: "060804",
        zona: "CAJAMARCA - JAEN - COLASAY"
      }, {
        codigo: "060805",
        zona: "CAJAMARCA - JAEN - HUABAL"
      }, {
        codigo: "060806",
        zona: "CAJAMARCA - JAEN - LAS PIRIAS"
      }, {
        codigo: "060807",
        zona: "CAJAMARCA - JAEN - POMAHUACA"
      }, {
        codigo: "060808",
        zona: "CAJAMARCA - JAEN - PUCARA"
      }, {
        codigo: "060809",
        zona: "CAJAMARCA - JAEN - SALLIQUE"
      }, {
        codigo: "060810",
        zona: "CAJAMARCA - JAEN - SAN FELIPE"
      }, {
        codigo: "060811",
        zona: "CAJAMARCA - JAEN - SAN JOSE DEL ALTO"
      }, {
        codigo: "060812",
        zona: "CAJAMARCA - JAEN - SANTA ROSA"
      }, {
        codigo: "060901",
        zona: "CAJAMARCA - SAN IGNACIO - SAN IGNACIO"
      }, {
        codigo: "060902",
        zona: "CAJAMARCA - SAN IGNACIO - CHIRINOS"
      }, {
        codigo: "060903",
        zona: "CAJAMARCA - SAN IGNACIO - HUARANGO"
      }, {
        codigo: "060904",
        zona: "CAJAMARCA - SAN IGNACIO - LA COIPA"
      }, {
        codigo: "060905",
        zona: "CAJAMARCA - SAN IGNACIO - NAMBALLE"
      }, {
        codigo: "060906",
        zona: "CAJAMARCA - SAN IGNACIO - SAN JOSE DE LOURDES"
      }, {
        codigo: "060907",
        zona: "CAJAMARCA - SAN IGNACIO - TABACONAS"
      }, {
        codigo: "061001",
        zona: "CAJAMARCA - SAN MARCOS - PEDRO GALVEZ"
      }, {
        codigo: "061002",
        zona: "CAJAMARCA - SAN MARCOS - CHANCAY"
      }, {
        codigo: "061003",
        zona: "CAJAMARCA - SAN MARCOS - EDUARDO VILLANUEVA"
      }, {
        codigo: "061004",
        zona: "CAJAMARCA - SAN MARCOS - GREGORIO PITA"
      }, {
        codigo: "061005",
        zona: "CAJAMARCA - SAN MARCOS - ICHOCAN"
      }, {
        codigo: "061006",
        zona: "CAJAMARCA - SAN MARCOS - JOSE MANUEL QUIROZ"
      }, {
        codigo: "061007",
        zona: "CAJAMARCA - SAN MARCOS - JOSE SABOGAL"
      }, {
        codigo: "061101",
        zona: "CAJAMARCA - SAN MIGUEL - SAN MIGUEL"
      }, {
        codigo: "061102",
        zona: "CAJAMARCA - SAN MIGUEL - BOLIVAR"
      }, {
        codigo: "061103",
        zona: "CAJAMARCA - SAN MIGUEL - CALQUIS"
      }, {
        codigo: "061104",
        zona: "CAJAMARCA - SAN MIGUEL - CATILLUC"
      }, {
        codigo: "061105",
        zona: "CAJAMARCA - SAN MIGUEL - EL PRADO"
      }, {
        codigo: "061106",
        zona: "CAJAMARCA - SAN MIGUEL - LA FLORIDA"
      }, {
        codigo: "061107",
        zona: "CAJAMARCA - SAN MIGUEL - LLAPA"
      }, {
        codigo: "061108",
        zona: "CAJAMARCA - SAN MIGUEL - NANCHOC"
      }, {
        codigo: "061109",
        zona: "CAJAMARCA - SAN MIGUEL - NIEPOS"
      }, {
        codigo: "061110",
        zona: "CAJAMARCA - SAN MIGUEL - SAN GREGORIO"
      }, {
        codigo: "061111",
        zona: "CAJAMARCA - SAN MIGUEL - SAN SILVESTRE DE COCHAN"
      }, {
        codigo: "061112",
        zona: "CAJAMARCA - SAN MIGUEL - TONGOD"
      }, {
        codigo: "061113",
        zona: "CAJAMARCA - SAN MIGUEL - UNION AGUA BLANCA"
      }, {
        codigo: "061201",
        zona: "CAJAMARCA - SAN PABLO - SAN PABLO"
      }, {
        codigo: "061202",
        zona: "CAJAMARCA - SAN PABLO - SAN BERNARDINO"
      }, {
        codigo: "061203",
        zona: "CAJAMARCA - SAN PABLO - SAN LUIS"
      }, {
        codigo: "061204",
        zona: "CAJAMARCA - SAN PABLO - TUMBADEN"
      }, {
        codigo: "061301",
        zona: "CAJAMARCA - SANTA CRUZ - SANTA CRUZ"
      }, {
        codigo: "061302",
        zona: "CAJAMARCA - SANTA CRUZ - ANDABAMBA"
      }, {
        codigo: "061303",
        zona: "CAJAMARCA - SANTA CRUZ - CATACHE"
      }, {
        codigo: "061304",
        zona: "CAJAMARCA - SANTA CRUZ - CHANCAYBAÑOS"
      }, {
        codigo: "061305",
        zona: "CAJAMARCA - SANTA CRUZ - LA ESPERANZA"
      }, {
        codigo: "061306",
        zona: "CAJAMARCA - SANTA CRUZ - NINABAMBA"
      }, {
        codigo: "061307",
        zona: "CAJAMARCA - SANTA CRUZ - PULAN"
      }, {
        codigo: "061308",
        zona: "CAJAMARCA - SANTA CRUZ - SAUCEPAMPA"
      }, {
        codigo: "061309",
        zona: "CAJAMARCA - SANTA CRUZ - SEXI"
      }, {
        codigo: "061310",
        zona: "CAJAMARCA - SANTA CRUZ - UTICYACU"
      }, {
        codigo: "061311",
        zona: "CAJAMARCA - SANTA CRUZ - YAUYUCAN"
      }, {
        codigo: "070101",
        zona: "CALLAO - CALLAO - CALLAO"
      }, {
        codigo: "070102",
        zona: "CALLAO - CALLAO - BELLAVISTA"
      }, {
        codigo: "070103",
        zona: "CALLAO - CALLAO - CARMEN DE LA LEGUA REYNOSO"
      }, {
        codigo: "070104",
        zona: "CALLAO - CALLAO - LA PERLA"
      }, {
        codigo: "070105",
        zona: "CALLAO - CALLAO - LA PUNTA"
      }, {
        codigo: "070106",
        zona: "CALLAO - CALLAO - VENTANILLA"
      }, {
        codigo: "070107",
        zona: "CALLAO - CALLAO - MI PERU"
      }, {
        codigo: "080101",
        zona: "CUSCO - CUSCO - CUSCO"
      }, {
        codigo: "080102",
        zona: "CUSCO - CUSCO - CCORCA"
      }, {
        codigo: "080103",
        zona: "CUSCO - CUSCO - POROY"
      }, {
        codigo: "080104",
        zona: "CUSCO - CUSCO - SAN JERONIMO"
      }, {
        codigo: "080105",
        zona: "CUSCO - CUSCO - SAN SEBASTIAN"
      }, {
        codigo: "080106",
        zona: "CUSCO - CUSCO - SANTIAGO"
      }, {
        codigo: "080107",
        zona: "CUSCO - CUSCO - SAYLLA"
      }, {
        codigo: "080108",
        zona: "CUSCO - CUSCO - WANCHAQ"
      }, {
        codigo: "080201",
        zona: "CUSCO - ACOMAYO - ACOMAYO"
      }, {
        codigo: "080202",
        zona: "CUSCO - ACOMAYO - ACOPIA"
      }, {
        codigo: "080203",
        zona: "CUSCO - ACOMAYO - ACOS"
      }, {
        codigo: "080204",
        zona: "CUSCO - ACOMAYO - MOSOC LLACTA"
      }, {
        codigo: "080205",
        zona: "CUSCO - ACOMAYO - POMACANCHI"
      }, {
        codigo: "080206",
        zona: "CUSCO - ACOMAYO - RONDOCAN"
      }, {
        codigo: "080207",
        zona: "CUSCO - ACOMAYO - SANGARARA"
      }, {
        codigo: "080301",
        zona: "CUSCO - ANTA - ANTA"
      }, {
        codigo: "080302",
        zona: "CUSCO - ANTA - ANCAHUASI"
      }, {
        codigo: "080303",
        zona: "CUSCO - ANTA - CACHIMAYO"
      }, {
        codigo: "080304",
        zona: "CUSCO - ANTA - CHINCHAYPUJIO"
      }, {
        codigo: "080305",
        zona: "CUSCO - ANTA - HUAROCONDO"
      }, {
        codigo: "080306",
        zona: "CUSCO - ANTA - LIMATAMBO"
      }, {
        codigo: "080307",
        zona: "CUSCO - ANTA - MOLLEPATA"
      }, {
        codigo: "080308",
        zona: "CUSCO - ANTA - PUCYURA"
      }, {
        codigo: "080309",
        zona: "CUSCO - ANTA - ZURITE"
      }, {
        codigo: "080401",
        zona: "CUSCO - CALCA - CALCA"
      }, {
        codigo: "080402",
        zona: "CUSCO - CALCA - COYA"
      }, {
        codigo: "080403",
        zona: "CUSCO - CALCA - LAMAY"
      }, {
        codigo: "080404",
        zona: "CUSCO - CALCA - LARES"
      }, {
        codigo: "080405",
        zona: "CUSCO - CALCA - PISAC"
      }, {
        codigo: "080406",
        zona: "CUSCO - CALCA - SAN SALVADOR"
      }, {
        codigo: "080407",
        zona: "CUSCO - CALCA - TARAY"
      }, {
        codigo: "080408",
        zona: "CUSCO - CALCA - YANATILE"
      }, {
        codigo: "080501",
        zona: "CUSCO - CANAS - YANAOCA"
      }, {
        codigo: "080502",
        zona: "CUSCO - CANAS - CHECCA"
      }, {
        codigo: "080503",
        zona: "CUSCO - CANAS - KUNTURKANKI"
      }, {
        codigo: "080504",
        zona: "CUSCO - CANAS - LANGUI"
      }, {
        codigo: "080505",
        zona: "CUSCO - CANAS - LAYO"
      }, {
        codigo: "080506",
        zona: "CUSCO - CANAS - PAMPAMARCA"
      }, {
        codigo: "080507",
        zona: "CUSCO - CANAS - QUEHUE"
      }, {
        codigo: "080508",
        zona: "CUSCO - CANAS - TUPAC AMARU"
      }, {
        codigo: "080601",
        zona: "CUSCO - CANCHIS - SICUANI"
      }, {
        codigo: "080602",
        zona: "CUSCO - CANCHIS - CHECACUPE"
      }, {
        codigo: "080603",
        zona: "CUSCO - CANCHIS - COMBAPATA"
      }, {
        codigo: "080604",
        zona: "CUSCO - CANCHIS - MARANGANI"
      }, {
        codigo: "080605",
        zona: "CUSCO - CANCHIS - PITUMARCA"
      }, {
        codigo: "080606",
        zona: "CUSCO - CANCHIS - SAN PABLO"
      }, {
        codigo: "080607",
        zona: "CUSCO - CANCHIS - SAN PEDRO"
      }, {
        codigo: "080608",
        zona: "CUSCO - CANCHIS - TINTA"
      }, {
        codigo: "080701",
        zona: "CUSCO - CHUMBIVILCAS - SANTO TOMAS"
      }, {
        codigo: "080702",
        zona: "CUSCO - CHUMBIVILCAS - CAPACMARCA"
      }, {
        codigo: "080703",
        zona: "CUSCO - CHUMBIVILCAS - CHAMACA"
      }, {
        codigo: "080704",
        zona: "CUSCO - CHUMBIVILCAS - COLQUEMARCA"
      }, {
        codigo: "080705",
        zona: "CUSCO - CHUMBIVILCAS - LIVITACA"
      }, {
        codigo: "080706",
        zona: "CUSCO - CHUMBIVILCAS - LLUSCO"
      }, {
        codigo: "080707",
        zona: "CUSCO - CHUMBIVILCAS - QUIÑOTA"
      }, {
        codigo: "080708",
        zona: "CUSCO - CHUMBIVILCAS - VELILLE"
      }, {
        codigo: "080801",
        zona: "CUSCO - ESPINAR - ESPINAR"
      }, {
        codigo: "080802",
        zona: "CUSCO - ESPINAR - CONDOROMA"
      }, {
        codigo: "080803",
        zona: "CUSCO - ESPINAR - COPORAQUE"
      }, {
        codigo: "080804",
        zona: "CUSCO - ESPINAR - OCORURO"
      }, {
        codigo: "080805",
        zona: "CUSCO - ESPINAR - PALLPATA"
      }, {
        codigo: "080806",
        zona: "CUSCO - ESPINAR - PICHIGUA"
      }, {
        codigo: "080807",
        zona: "CUSCO - ESPINAR - SUYCKUTAMBO"
      }, {
        codigo: "080808",
        zona: "CUSCO - ESPINAR - ALTO PICHIGUA"
      }, {
        codigo: "080901",
        zona: "CUSCO - LA CONVENCION - SANTA ANA"
      }, {
        codigo: "080902",
        zona: "CUSCO - LA CONVENCION - ECHARATE"
      }, {
        codigo: "080903",
        zona: "CUSCO - LA CONVENCION - HUAYOPATA"
      }, {
        codigo: "080904",
        zona: "CUSCO - LA CONVENCION - MARANURA"
      }, {
        codigo: "080905",
        zona: "CUSCO - LA CONVENCION - OCOBAMBA"
      }, {
        codigo: "080906",
        zona: "CUSCO - LA CONVENCION - QUELLOUNO"
      }, {
        codigo: "080907",
        zona: "CUSCO - LA CONVENCION - KIMBIRI"
      }, {
        codigo: "080908",
        zona: "CUSCO - LA CONVENCION - SANTA TERESA"
      }, {
        codigo: "080909",
        zona: "CUSCO - LA CONVENCION - VILCABAMBA"
      }, {
        codigo: "080910",
        zona: "CUSCO - LA CONVENCION - PICHARI"
      }, {
        codigo: "080911",
        zona: "CUSCO - LA CONVENCION - INKAWASI"
      }, {
        codigo: "080912",
        zona: "CUSCO - LA CONVENCION - VILLA VIRGEN"
      }, {
        codigo: "080913",
        zona: "CUSCO - LA CONVENCION - VILLA KINTIARINA"
      }, {
        codigo: "080914",
        zona: "CUSCO - LA CONVENCION - MEGANTONI"
      }, {
        codigo: "081001",
        zona: "CUSCO - PARURO - PARURO"
      }, {
        codigo: "081002",
        zona: "CUSCO - PARURO - ACCHA"
      }, {
        codigo: "081003",
        zona: "CUSCO - PARURO - CCAPI"
      }, {
        codigo: "081004",
        zona: "CUSCO - PARURO - COLCHA"
      }, {
        codigo: "081005",
        zona: "CUSCO - PARURO - HUANOQUITE"
      }, {
        codigo: "081006",
        zona: "CUSCO - PARURO - OMACHA"
      }, {
        codigo: "081007",
        zona: "CUSCO - PARURO - PACCARITAMBO"
      }, {
        codigo: "081008",
        zona: "CUSCO - PARURO - PILLPINTO"
      }, {
        codigo: "081009",
        zona: "CUSCO - PARURO - YAURISQUE"
      }, {
        codigo: "081101",
        zona: "CUSCO - PAUCARTAMBO - PAUCARTAMBO"
      }, {
        codigo: "081102",
        zona: "CUSCO - PAUCARTAMBO - CAICAY"
      }, {
        codigo: "081103",
        zona: "CUSCO - PAUCARTAMBO - CHALLABAMBA"
      }, {
        codigo: "081104",
        zona: "CUSCO - PAUCARTAMBO - COLQUEPATA"
      }, {
        codigo: "081105",
        zona: "CUSCO - PAUCARTAMBO - HUANCARANI"
      }, {
        codigo: "081106",
        zona: "CUSCO - PAUCARTAMBO - KOSÑIPATA"
      }, {
        codigo: "081201",
        zona: "CUSCO - QUISPICANCHI - URCOS"
      }, {
        codigo: "081202",
        zona: "CUSCO - QUISPICANCHI - ANDAHUAYLILLAS"
      }, {
        codigo: "081203",
        zona: "CUSCO - QUISPICANCHI - CAMANTI"
      }, {
        codigo: "081204",
        zona: "CUSCO - QUISPICANCHI - CCARHUAYO"
      }, {
        codigo: "081205",
        zona: "CUSCO - QUISPICANCHI - CCATCA"
      }, {
        codigo: "081206",
        zona: "CUSCO - QUISPICANCHI - CUSIPATA"
      }, {
        codigo: "081207",
        zona: "CUSCO - QUISPICANCHI - HUARO"
      }, {
        codigo: "081208",
        zona: "CUSCO - QUISPICANCHI - LUCRE"
      }, {
        codigo: "081209",
        zona: "CUSCO - QUISPICANCHI - MARCAPATA"
      }, {
        codigo: "081210",
        zona: "CUSCO - QUISPICANCHI - OCONGATE"
      }, {
        codigo: "081211",
        zona: "CUSCO - QUISPICANCHI - OROPESA"
      }, {
        codigo: "081212",
        zona: "CUSCO - QUISPICANCHI - QUIQUIJANA"
      }, {
        codigo: "081301",
        zona: "CUSCO - URUBAMBA - URUBAMBA"
      }, {
        codigo: "081302",
        zona: "CUSCO - URUBAMBA - CHINCHERO"
      }, {
        codigo: "081303",
        zona: "CUSCO - URUBAMBA - HUAYLLABAMBA"
      }, {
        codigo: "081304",
        zona: "CUSCO - URUBAMBA - MACHUPICCHU"
      }, {
        codigo: "081305",
        zona: "CUSCO - URUBAMBA - MARAS"
      }, {
        codigo: "081306",
        zona: "CUSCO - URUBAMBA - OLLANTAYTAMBO"
      }, {
        codigo: "081307",
        zona: "CUSCO - URUBAMBA - YUCAY"
      }, {
        codigo: "090101",
        zona: "HUANCAVELICA - HUANCAVELICA - HUANCAVELICA"
      }, {
        codigo: "090102",
        zona: "HUANCAVELICA - HUANCAVELICA - ACOBAMBILLA"
      }, {
        codigo: "090103",
        zona: "HUANCAVELICA - HUANCAVELICA - ACORIA"
      }, {
        codigo: "090104",
        zona: "HUANCAVELICA - HUANCAVELICA - CONAYCA"
      }, {
        codigo: "090105",
        zona: "HUANCAVELICA - HUANCAVELICA - CUENCA"
      }, {
        codigo: "090106",
        zona: "HUANCAVELICA - HUANCAVELICA - HUACHOCOLPA"
      }, {
        codigo: "090107",
        zona: "HUANCAVELICA - HUANCAVELICA - HUAYLLAHUARA"
      }, {
        codigo: "090108",
        zona: "HUANCAVELICA - HUANCAVELICA - IZCUCHACA"
      }, {
        codigo: "090109",
        zona: "HUANCAVELICA - HUANCAVELICA - LARIA"
      }, {
        codigo: "090110",
        zona: "HUANCAVELICA - HUANCAVELICA - MANTA"
      }, {
        codigo: "090111",
        zona: "HUANCAVELICA - HUANCAVELICA - MARISCAL CACERES"
      }, {
        codigo: "090112",
        zona: "HUANCAVELICA - HUANCAVELICA - MOYA"
      }, {
        codigo: "090113",
        zona: "HUANCAVELICA - HUANCAVELICA - NUEVO OCCORO"
      }, {
        codigo: "090114",
        zona: "HUANCAVELICA - HUANCAVELICA - PALCA"
      }, {
        codigo: "090115",
        zona: "HUANCAVELICA - HUANCAVELICA - PILCHACA"
      }, {
        codigo: "090116",
        zona: "HUANCAVELICA - HUANCAVELICA - VILCA"
      }, {
        codigo: "090117",
        zona: "HUANCAVELICA - HUANCAVELICA - YAULI"
      }, {
        codigo: "090118",
        zona: "HUANCAVELICA - HUANCAVELICA - ASCENSION"
      }, {
        codigo: "090119",
        zona: "HUANCAVELICA - HUANCAVELICA - HUANDO"
      }, {
        codigo: "090201",
        zona: "HUANCAVELICA - ACOBAMBA - ACOBAMBA"
      }, {
        codigo: "090202",
        zona: "HUANCAVELICA - ACOBAMBA - ANDABAMBA"
      }, {
        codigo: "090203",
        zona: "HUANCAVELICA - ACOBAMBA - ANTA"
      }, {
        codigo: "090204",
        zona: "HUANCAVELICA - ACOBAMBA - CAJA"
      }, {
        codigo: "090205",
        zona: "HUANCAVELICA - ACOBAMBA - MARCAS"
      }, {
        codigo: "090206",
        zona: "HUANCAVELICA - ACOBAMBA - PAUCARA"
      }, {
        codigo: "090207",
        zona: "HUANCAVELICA - ACOBAMBA - POMACOCHA"
      }, {
        codigo: "090208",
        zona: "HUANCAVELICA - ACOBAMBA - ROSARIO"
      }, {
        codigo: "090301",
        zona: "HUANCAVELICA - ANGARAES - LIRCAY"
      }, {
        codigo: "090302",
        zona: "HUANCAVELICA - ANGARAES - ANCHONGA"
      }, {
        codigo: "090303",
        zona: "HUANCAVELICA - ANGARAES - CALLANMARCA"
      }, {
        codigo: "090304",
        zona: "HUANCAVELICA - ANGARAES - CCOCHACCASA"
      }, {
        codigo: "090305",
        zona: "HUANCAVELICA - ANGARAES - CHINCHO"
      }, {
        codigo: "090306",
        zona: "HUANCAVELICA - ANGARAES - CONGALLA"
      }, {
        codigo: "090307",
        zona: "HUANCAVELICA - ANGARAES - HUANCA-HUANCA"
      }, {
        codigo: "090308",
        zona: "HUANCAVELICA - ANGARAES - HUAYLLAY GRANDE"
      }, {
        codigo: "090309",
        zona: "HUANCAVELICA - ANGARAES - JULCAMARCA"
      }, {
        codigo: "090310",
        zona: "HUANCAVELICA - ANGARAES - SAN ANTONIO DE ANTAPARCO"
      }, {
        codigo: "090311",
        zona: "HUANCAVELICA - ANGARAES - SANTO TOMAS DE PATA"
      }, {
        codigo: "090312",
        zona: "HUANCAVELICA - ANGARAES - SECCLLA"
      }, {
        codigo: "090401",
        zona: "HUANCAVELICA - CASTROVIRREYNA - CASTROVIRREYNA"
      }, {
        codigo: "090402",
        zona: "HUANCAVELICA - CASTROVIRREYNA - ARMA"
      }, {
        codigo: "090403",
        zona: "HUANCAVELICA - CASTROVIRREYNA - AURAHUA"
      }, {
        codigo: "090404",
        zona: "HUANCAVELICA - CASTROVIRREYNA - CAPILLAS"
      }, {
        codigo: "090405",
        zona: "HUANCAVELICA - CASTROVIRREYNA - CHUPAMARCA"
      }, {
        codigo: "090406",
        zona: "HUANCAVELICA - CASTROVIRREYNA - COCAS"
      }, {
        codigo: "090407",
        zona: "HUANCAVELICA - CASTROVIRREYNA - HUACHOS"
      }, {
        codigo: "090408",
        zona: "HUANCAVELICA - CASTROVIRREYNA - HUAMATAMBO"
      }, {
        codigo: "090409",
        zona: "HUANCAVELICA - CASTROVIRREYNA - MOLLEPAMPA"
      }, {
        codigo: "090410",
        zona: "HUANCAVELICA - CASTROVIRREYNA - SAN JUAN"
      }, {
        codigo: "090411",
        zona: "HUANCAVELICA - CASTROVIRREYNA - SANTA ANA"
      }, {
        codigo: "090412",
        zona: "HUANCAVELICA - CASTROVIRREYNA - TANTARA"
      }, {
        codigo: "090413",
        zona: "HUANCAVELICA - CASTROVIRREYNA - TICRAPO"
      }, {
        codigo: "090501",
        zona: "HUANCAVELICA - CHURCAMPA - CHURCAMPA"
      }, {
        codigo: "090502",
        zona: "HUANCAVELICA - CHURCAMPA - ANCO"
      }, {
        codigo: "090503",
        zona: "HUANCAVELICA - CHURCAMPA - CHINCHIHUASI"
      }, {
        codigo: "090504",
        zona: "HUANCAVELICA - CHURCAMPA - EL CARMEN"
      }, {
        codigo: "090505",
        zona: "HUANCAVELICA - CHURCAMPA - LA MERCED"
      }, {
        codigo: "090506",
        zona: "HUANCAVELICA - CHURCAMPA - LOCROJA"
      }, {
        codigo: "090507",
        zona: "HUANCAVELICA - CHURCAMPA - PAUCARBAMBA"
      }, {
        codigo: "090508",
        zona: "HUANCAVELICA - CHURCAMPA - SAN MIGUEL DE MAYOCC"
      }, {
        codigo: "090509",
        zona: "HUANCAVELICA - CHURCAMPA - SAN PEDRO DE CORIS"
      }, {
        codigo: "090510",
        zona: "HUANCAVELICA - CHURCAMPA - PACHAMARCA"
      }, {
        codigo: "090511",
        zona: "HUANCAVELICA - CHURCAMPA - COSME"
      }, {
        codigo: "090601",
        zona: "HUANCAVELICA - HUAYTARA - HUAYTARA"
      }, {
        codigo: "090602",
        zona: "HUANCAVELICA - HUAYTARA - AYAVI"
      }, {
        codigo: "090603",
        zona: "HUANCAVELICA - HUAYTARA - CORDOVA"
      }, {
        codigo: "090604",
        zona: "HUANCAVELICA - HUAYTARA - HUAYACUNDO ARMA"
      }, {
        codigo: "090605",
        zona: "HUANCAVELICA - HUAYTARA - LARAMARCA"
      }, {
        codigo: "090606",
        zona: "HUANCAVELICA - HUAYTARA - OCOYO"
      }, {
        codigo: "090607",
        zona: "HUANCAVELICA - HUAYTARA - PILPICHACA"
      }, {
        codigo: "090608",
        zona: "HUANCAVELICA - HUAYTARA - QUERCO"
      }, {
        codigo: "090609",
        zona: "HUANCAVELICA - HUAYTARA - QUITO-ARMA"
      }, {
        codigo: "090610",
        zona: "HUANCAVELICA - HUAYTARA - SAN ANTONIO DE CUSICANCHA"
      }, {
        codigo: "090611",
        zona: "HUANCAVELICA - HUAYTARA - SAN FRANCISCO DE SANGAYAICO"
      }, {
        codigo: "090612",
        zona: "HUANCAVELICA - HUAYTARA - SAN ISIDRO"
      }, {
        codigo: "090613",
        zona: "HUANCAVELICA - HUAYTARA - SANTIAGO DE CHOCORVOS"
      }, {
        codigo: "090614",
        zona: "HUANCAVELICA - HUAYTARA - SANTIAGO DE QUIRAHUARA"
      }, {
        codigo: "090615",
        zona: "HUANCAVELICA - HUAYTARA - SANTO DOMINGO DE CAPILLAS"
      }, {
        codigo: "090616",
        zona: "HUANCAVELICA - HUAYTARA - TAMBO"
      }, {
        codigo: "090701",
        zona: "HUANCAVELICA - TAYACAJA - PAMPAS"
      }, {
        codigo: "090702",
        zona: "HUANCAVELICA - TAYACAJA - ACOSTAMBO"
      }, {
        codigo: "090703",
        zona: "HUANCAVELICA - TAYACAJA - ACRAQUIA"
      }, {
        codigo: "090704",
        zona: "HUANCAVELICA - TAYACAJA - AHUAYCHA"
      }, {
        codigo: "090705",
        zona: "HUANCAVELICA - TAYACAJA - COLCABAMBA"
      }, {
        codigo: "090706",
        zona: "HUANCAVELICA - TAYACAJA - DANIEL HERNANDEZ"
      }, {
        codigo: "090707",
        zona: "HUANCAVELICA - TAYACAJA - HUACHOCOLPA"
      }, {
        codigo: "090709",
        zona: "HUANCAVELICA - TAYACAJA - HUARIBAMBA"
      }, {
        codigo: "090710",
        zona: "HUANCAVELICA - TAYACAJA - ÑAHUIMPUQUIO"
      }, {
        codigo: "090711",
        zona: "HUANCAVELICA - TAYACAJA - PAZOS"
      }, {
        codigo: "090713",
        zona: "HUANCAVELICA - TAYACAJA - QUISHUAR"
      }, {
        codigo: "090714",
        zona: "HUANCAVELICA - TAYACAJA - SALCABAMBA"
      }, {
        codigo: "090715",
        zona: "HUANCAVELICA - TAYACAJA - SALCAHUASI"
      }, {
        codigo: "090716",
        zona: "HUANCAVELICA - TAYACAJA - SAN MARCOS DE ROCCHAC"
      }, {
        codigo: "090717",
        zona: "HUANCAVELICA - TAYACAJA - SURCUBAMBA"
      }, {
        codigo: "090718",
        zona: "HUANCAVELICA - TAYACAJA - TINTAY PUNCU"
      }, {
        codigo: "090719",
        zona: "HUANCAVELICA - TAYACAJA - QUICHUAS"
      }, {
        codigo: "090720",
        zona: "HUANCAVELICA - TAYACAJA - ANDAYMARCA"
      }, {
        codigo: "090721",
        zona: "HUANCAVELICA - TAYACAJA - ROBLE"
      }, {
        codigo: "090722",
        zona: "HUANCAVELICA - TAYACAJA - PICHOS"
      }, {
        codigo: "090723",
        zona: "HUANCAVELICA - TAYACAJA - SANTIAGO DE TUCUMA"
      }, {
        codigo: "100101",
        zona: "HUANUCO - HUANUCO - HUANUCO"
      }, {
        codigo: "100102",
        zona: "HUANUCO - HUANUCO - AMARILIS"
      }, {
        codigo: "100103",
        zona: "HUANUCO - HUANUCO - CHINCHAO"
      }, {
        codigo: "100104",
        zona: "HUANUCO - HUANUCO - CHURUBAMBA"
      }, {
        codigo: "100105",
        zona: "HUANUCO - HUANUCO - MARGOS"
      }, {
        codigo: "100106",
        zona: "HUANUCO - HUANUCO - QUISQUI (KICHKI)"
      }, {
        codigo: "100107",
        zona: "HUANUCO - HUANUCO - SAN FRANCISCO DE CAYRAN"
      }, {
        codigo: "100108",
        zona: "HUANUCO - HUANUCO - SAN PEDRO DE CHAULAN"
      }, {
        codigo: "100109",
        zona: "HUANUCO - HUANUCO - SANTA MARIA DEL VALLE"
      }, {
        codigo: "100110",
        zona: "HUANUCO - HUANUCO - YARUMAYO"
      }, {
        codigo: "100111",
        zona: "HUANUCO - HUANUCO - PILLCO MARCA"
      }, {
        codigo: "100112",
        zona: "HUANUCO - HUANUCO - YACUS"
      }, {
        codigo: "100113",
        zona: "HUANUCO - HUANUCO - SAN PABLO DE PILLAO"
      }, {
        codigo: "100201",
        zona: "HUANUCO - AMBO - AMBO"
      }, {
        codigo: "100202",
        zona: "HUANUCO - AMBO - CAYNA"
      }, {
        codigo: "100203",
        zona: "HUANUCO - AMBO - COLPAS"
      }, {
        codigo: "100204",
        zona: "HUANUCO - AMBO - CONCHAMARCA"
      }, {
        codigo: "100205",
        zona: "HUANUCO - AMBO - HUACAR"
      }, {
        codigo: "100206",
        zona: "HUANUCO - AMBO - SAN FRANCISCO"
      }, {
        codigo: "100207",
        zona: "HUANUCO - AMBO - SAN RAFAEL"
      }, {
        codigo: "100208",
        zona: "HUANUCO - AMBO - TOMAY KICHWA"
      }, {
        codigo: "100301",
        zona: "HUANUCO - DOS DE MAYO - LA UNION"
      }, {
        codigo: "100307",
        zona: "HUANUCO - DOS DE MAYO - CHUQUIS"
      }, {
        codigo: "100311",
        zona: "HUANUCO - DOS DE MAYO - MARIAS"
      }, {
        codigo: "100313",
        zona: "HUANUCO - DOS DE MAYO - PACHAS"
      }, {
        codigo: "100316",
        zona: "HUANUCO - DOS DE MAYO - QUIVILLA"
      }, {
        codigo: "100317",
        zona: "HUANUCO - DOS DE MAYO - RIPAN"
      }, {
        codigo: "100321",
        zona: "HUANUCO - DOS DE MAYO - SHUNQUI"
      }, {
        codigo: "100322",
        zona: "HUANUCO - DOS DE MAYO - SILLAPATA"
      }, {
        codigo: "100323",
        zona: "HUANUCO - DOS DE MAYO - YANAS"
      }, {
        codigo: "100401",
        zona: "HUANUCO - HUACAYBAMBA - HUACAYBAMBA"
      }, {
        codigo: "100402",
        zona: "HUANUCO - HUACAYBAMBA - CANCHABAMBA"
      }, {
        codigo: "100403",
        zona: "HUANUCO - HUACAYBAMBA - COCHABAMBA"
      }, {
        codigo: "100404",
        zona: "HUANUCO - HUACAYBAMBA - PINRA"
      }, {
        codigo: "100501",
        zona: "HUANUCO - HUAMALIES - LLATA"
      }, {
        codigo: "100502",
        zona: "HUANUCO - HUAMALIES - ARANCAY"
      }, {
        codigo: "100503",
        zona: "HUANUCO - HUAMALIES - CHAVIN DE PARIARCA"
      }, {
        codigo: "100504",
        zona: "HUANUCO - HUAMALIES - JACAS GRANDE"
      }, {
        codigo: "100505",
        zona: "HUANUCO - HUAMALIES - JIRCAN"
      }, {
        codigo: "100506",
        zona: "HUANUCO - HUAMALIES - MIRAFLORES"
      }, {
        codigo: "100507",
        zona: "HUANUCO - HUAMALIES - MONZON"
      }, {
        codigo: "100508",
        zona: "HUANUCO - HUAMALIES - PUNCHAO"
      }, {
        codigo: "100509",
        zona: "HUANUCO - HUAMALIES - PUÑOS"
      }, {
        codigo: "100510",
        zona: "HUANUCO - HUAMALIES - SINGA"
      }, {
        codigo: "100511",
        zona: "HUANUCO - HUAMALIES - TANTAMAYO"
      }, {
        codigo: "100601",
        zona: "HUANUCO - LEONCIO PRADO - RUPA-RUPA"
      }, {
        codigo: "100602",
        zona: "HUANUCO - LEONCIO PRADO - DANIEL ALOMIA ROBLES"
      }, {
        codigo: "100603",
        zona: "HUANUCO - LEONCIO PRADO - HERMILIO VALDIZAN"
      }, {
        codigo: "100604",
        zona: "HUANUCO - LEONCIO PRADO - JOSE CRESPO Y CASTILLO"
      }, {
        codigo: "100605",
        zona: "HUANUCO - LEONCIO PRADO - LUYANDO"
      }, {
        codigo: "100606",
        zona: "HUANUCO - LEONCIO PRADO - MARIANO DAMASO BERAUN"
      }, {
        codigo: "100607",
        zona: "HUANUCO - LEONCIO PRADO - PUCAYACU"
      }, {
        codigo: "100608",
        zona: "HUANUCO - LEONCIO PRADO - CASTILLO GRANDE"
      }, {
        codigo: "100609",
        zona: "HUANUCO - LEONCIO PRADO - PUEBLO NUEVO"
      }, {
        codigo: "100610",
        zona: "HUANUCO - LEONCIO PRADO - SANTO DOMINGO DE ANDIA"
      }, {
        codigo: "100701",
        zona: "HUANUCO - MARAÑON - HUACRACHUCO"
      }, {
        codigo: "100702",
        zona: "HUANUCO - MARAÑON - CHOLON"
      }, {
        codigo: "100703",
        zona: "HUANUCO - MARAÑON - SAN BUENAVENTURA"
      }, {
        codigo: "100704",
        zona: "HUANUCO - MARAÑON - LA MORADA"
      }, {
        codigo: "100705",
        zona: "HUANUCO - MARAÑON - SANTA ROSA DE ALTO YANAJANCA"
      }, {
        codigo: "100801",
        zona: "HUANUCO - PACHITEA - PANAO"
      }, {
        codigo: "100802",
        zona: "HUANUCO - PACHITEA - CHAGLLA"
      }, {
        codigo: "100803",
        zona: "HUANUCO - PACHITEA - MOLINO"
      }, {
        codigo: "100804",
        zona: "HUANUCO - PACHITEA - UMARI"
      }, {
        codigo: "100901",
        zona: "HUANUCO - PUERTO INCA - PUERTO INCA"
      }, {
        codigo: "100902",
        zona: "HUANUCO - PUERTO INCA - CODO DEL POZUZO"
      }, {
        codigo: "100903",
        zona: "HUANUCO - PUERTO INCA - HONORIA"
      }, {
        codigo: "100904",
        zona: "HUANUCO - PUERTO INCA - TOURNAVISTA"
      }, {
        codigo: "100905",
        zona: "HUANUCO - PUERTO INCA - YUYAPICHIS"
      }, {
        codigo: "101001",
        zona: "HUANUCO - LAURICOCHA - JESUS"
      }, {
        codigo: "101002",
        zona: "HUANUCO - LAURICOCHA - BAÑOS"
      }, {
        codigo: "101003",
        zona: "HUANUCO - LAURICOCHA - JIVIA"
      }, {
        codigo: "101004",
        zona: "HUANUCO - LAURICOCHA - QUEROPALCA"
      }, {
        codigo: "101005",
        zona: "HUANUCO - LAURICOCHA - RONDOS"
      }, {
        codigo: "101006",
        zona: "HUANUCO - LAURICOCHA - SAN FRANCISCO DE ASIS"
      }, {
        codigo: "101007",
        zona: "HUANUCO - LAURICOCHA - SAN MIGUEL DE CAURI"
      }, {
        codigo: "101101",
        zona: "HUANUCO - YAROWILCA - CHAVINILLO"
      }, {
        codigo: "101102",
        zona: "HUANUCO - YAROWILCA - CAHUAC"
      }, {
        codigo: "101103",
        zona: "HUANUCO - YAROWILCA - CHACABAMBA"
      }, {
        codigo: "101104",
        zona: "HUANUCO - YAROWILCA - APARICIO POMARES"
      }, {
        codigo: "101105",
        zona: "HUANUCO - YAROWILCA - JACAS CHICO"
      }, {
        codigo: "101106",
        zona: "HUANUCO - YAROWILCA - OBAS"
      }, {
        codigo: "101107",
        zona: "HUANUCO - YAROWILCA - PAMPAMARCA"
      }, {
        codigo: "101108",
        zona: "HUANUCO - YAROWILCA - CHORAS"
      }, {
        codigo: "110101",
        zona: "ICA - ICA - ICA"
      }, {
        codigo: "110102",
        zona: "ICA - ICA - LA TINGUIÑA"
      }, {
        codigo: "110103",
        zona: "ICA - ICA - LOS AQUIJES"
      }, {
        codigo: "110104",
        zona: "ICA - ICA - OCUCAJE"
      }, {
        codigo: "110105",
        zona: "ICA - ICA - PACHACUTEC"
      }, {
        codigo: "110106",
        zona: "ICA - ICA - PARCONA"
      }, {
        codigo: "110107",
        zona: "ICA - ICA - PUEBLO NUEVO"
      }, {
        codigo: "110108",
        zona: "ICA - ICA - SALAS"
      }, {
        codigo: "110109",
        zona: "ICA - ICA - SAN JOSE DE LOS MOLINOS"
      }, {
        codigo: "110110",
        zona: "ICA - ICA - SAN JUAN BAUTISTA"
      }, {
        codigo: "110111",
        zona: "ICA - ICA - SANTIAGO"
      }, {
        codigo: "110112",
        zona: "ICA - ICA - SUBTANJALLA"
      }, {
        codigo: "110113",
        zona: "ICA - ICA - TATE"
      }, {
        codigo: "110114",
        zona: "ICA - ICA - YAUCA DEL ROSARIO"
      }, {
        codigo: "110201",
        zona: "ICA - CHINCHA - CHINCHA ALTA"
      }, {
        codigo: "110202",
        zona: "ICA - CHINCHA - ALTO LARAN"
      }, {
        codigo: "110203",
        zona: "ICA - CHINCHA - CHAVIN"
      }, {
        codigo: "110204",
        zona: "ICA - CHINCHA - CHINCHA BAJA"
      }, {
        codigo: "110205",
        zona: "ICA - CHINCHA - EL CARMEN"
      }, {
        codigo: "110206",
        zona: "ICA - CHINCHA - GROCIO PRADO"
      }, {
        codigo: "110207",
        zona: "ICA - CHINCHA - PUEBLO NUEVO"
      }, {
        codigo: "110208",
        zona: "ICA - CHINCHA - SAN JUAN DE YANAC"
      }, {
        codigo: "110209",
        zona: "ICA - CHINCHA - SAN PEDRO DE HUACARPANA"
      }, {
        codigo: "110210",
        zona: "ICA - CHINCHA - SUNAMPE"
      }, {
        codigo: "110211",
        zona: "ICA - CHINCHA - TAMBO DE MORA"
      }, {
        codigo: "110301",
        zona: "ICA - NASCA - NASCA"
      }, {
        codigo: "110302",
        zona: "ICA - NASCA - CHANGUILLO"
      }, {
        codigo: "110303",
        zona: "ICA - NASCA - EL INGENIO"
      }, {
        codigo: "110304",
        zona: "ICA - NASCA - MARCONA"
      }, {
        codigo: "110305",
        zona: "ICA - NASCA - VISTA ALEGRE"
      }, {
        codigo: "110401",
        zona: "ICA - PALPA - PALPA"
      }, {
        codigo: "110402",
        zona: "ICA - PALPA - LLIPATA"
      }, {
        codigo: "110403",
        zona: "ICA - PALPA - RIO GRANDE"
      }, {
        codigo: "110404",
        zona: "ICA - PALPA - SANTA CRUZ"
      }, {
        codigo: "110405",
        zona: "ICA - PALPA - TIBILLO"
      }, {
        codigo: "110501",
        zona: "ICA - PISCO - PISCO"
      }, {
        codigo: "110502",
        zona: "ICA - PISCO - HUANCANO"
      }, {
        codigo: "110503",
        zona: "ICA - PISCO - HUMAY"
      }, {
        codigo: "110504",
        zona: "ICA - PISCO - INDEPENDENCIA"
      }, {
        codigo: "110505",
        zona: "ICA - PISCO - PARACAS"
      }, {
        codigo: "110506",
        zona: "ICA - PISCO - SAN ANDRES"
      }, {
        codigo: "110507",
        zona: "ICA - PISCO - SAN CLEMENTE"
      }, {
        codigo: "110508",
        zona: "ICA - PISCO - TUPAC AMARU INCA"
      }, {
        codigo: "120101",
        zona: "JUNIN - HUANCAYO - HUANCAYO"
      }, {
        codigo: "120104",
        zona: "JUNIN - HUANCAYO - CARHUACALLANGA"
      }, {
        codigo: "120105",
        zona: "JUNIN - HUANCAYO - CHACAPAMPA"
      }, {
        codigo: "120106",
        zona: "JUNIN - HUANCAYO - CHICCHE"
      }, {
        codigo: "120107",
        zona: "JUNIN - HUANCAYO - CHILCA"
      }, {
        codigo: "120108",
        zona: "JUNIN - HUANCAYO - CHONGOS ALTO"
      }, {
        codigo: "120111",
        zona: "JUNIN - HUANCAYO - CHUPURO"
      }, {
        codigo: "120112",
        zona: "JUNIN - HUANCAYO - COLCA"
      }, {
        codigo: "120113",
        zona: "JUNIN - HUANCAYO - CULLHUAS"
      }, {
        codigo: "120114",
        zona: "JUNIN - HUANCAYO - EL TAMBO"
      }, {
        codigo: "120116",
        zona: "JUNIN - HUANCAYO - HUACRAPUQUIO"
      }, {
        codigo: "120117",
        zona: "JUNIN - HUANCAYO - HUALHUAS"
      }, {
        codigo: "120119",
        zona: "JUNIN - HUANCAYO - HUANCAN"
      }, {
        codigo: "120120",
        zona: "JUNIN - HUANCAYO - HUASICANCHA"
      }, {
        codigo: "120121",
        zona: "JUNIN - HUANCAYO - HUAYUCACHI"
      }, {
        codigo: "120122",
        zona: "JUNIN - HUANCAYO - INGENIO"
      }, {
        codigo: "120124",
        zona: "JUNIN - HUANCAYO - PARIAHUANCA"
      }, {
        codigo: "120125",
        zona: "JUNIN - HUANCAYO - PILCOMAYO"
      }, {
        codigo: "120126",
        zona: "JUNIN - HUANCAYO - PUCARA"
      }, {
        codigo: "120127",
        zona: "JUNIN - HUANCAYO - QUICHUAY"
      }, {
        codigo: "120128",
        zona: "JUNIN - HUANCAYO - QUILCAS"
      }, {
        codigo: "120129",
        zona: "JUNIN - HUANCAYO - SAN AGUSTIN"
      }, {
        codigo: "120130",
        zona: "JUNIN - HUANCAYO - SAN JERONIMO DE TUNAN"
      }, {
        codigo: "120132",
        zona: "JUNIN - HUANCAYO - SAÑO"
      }, {
        codigo: "120133",
        zona: "JUNIN - HUANCAYO - SAPALLANGA"
      }, {
        codigo: "120134",
        zona: "JUNIN - HUANCAYO - SICAYA"
      }, {
        codigo: "120135",
        zona: "JUNIN - HUANCAYO - SANTO DOMINGO DE ACOBAMBA"
      }, {
        codigo: "120136",
        zona: "JUNIN - HUANCAYO - VIQUES"
      }, {
        codigo: "120201",
        zona: "JUNIN - CONCEPCION - CONCEPCION"
      }, {
        codigo: "120202",
        zona: "JUNIN - CONCEPCION - ACO"
      }, {
        codigo: "120203",
        zona: "JUNIN - CONCEPCION - ANDAMARCA"
      }, {
        codigo: "120204",
        zona: "JUNIN - CONCEPCION - CHAMBARA"
      }, {
        codigo: "120205",
        zona: "JUNIN - CONCEPCION - COCHAS"
      }, {
        codigo: "120206",
        zona: "JUNIN - CONCEPCION - COMAS"
      }, {
        codigo: "120207",
        zona: "JUNIN - CONCEPCION - HEROINAS TOLEDO"
      }, {
        codigo: "120208",
        zona: "JUNIN - CONCEPCION - MANZANARES"
      }, {
        codigo: "120209",
        zona: "JUNIN - CONCEPCION - MARISCAL CASTILLA"
      }, {
        codigo: "120210",
        zona: "JUNIN - CONCEPCION - MATAHUASI"
      }, {
        codigo: "120211",
        zona: "JUNIN - CONCEPCION - MITO"
      }, {
        codigo: "120212",
        zona: "JUNIN - CONCEPCION - NUEVE DE JULIO"
      }, {
        codigo: "120213",
        zona: "JUNIN - CONCEPCION - ORCOTUNA"
      }, {
        codigo: "120214",
        zona: "JUNIN - CONCEPCION - SAN JOSE DE QUERO"
      }, {
        codigo: "120215",
        zona: "JUNIN - CONCEPCION - SANTA ROSA DE OCOPA"
      }, {
        codigo: "120301",
        zona: "JUNIN - CHANCHAMAYO - CHANCHAMAYO"
      }, {
        codigo: "120302",
        zona: "JUNIN - CHANCHAMAYO - PERENE"
      }, {
        codigo: "120303",
        zona: "JUNIN - CHANCHAMAYO - PICHANAQUI"
      }, {
        codigo: "120304",
        zona: "JUNIN - CHANCHAMAYO - SAN LUIS DE SHUARO"
      }, {
        codigo: "120305",
        zona: "JUNIN - CHANCHAMAYO - SAN RAMON"
      }, {
        codigo: "120306",
        zona: "JUNIN - CHANCHAMAYO - VITOC"
      }, {
        codigo: "120401",
        zona: "JUNIN - JAUJA - JAUJA"
      }, {
        codigo: "120402",
        zona: "JUNIN - JAUJA - ACOLLA"
      }, {
        codigo: "120403",
        zona: "JUNIN - JAUJA - APATA"
      }, {
        codigo: "120404",
        zona: "JUNIN - JAUJA - ATAURA"
      }, {
        codigo: "120405",
        zona: "JUNIN - JAUJA - CANCHAYLLO"
      }, {
        codigo: "120406",
        zona: "JUNIN - JAUJA - CURICACA"
      }, {
        codigo: "120407",
        zona: "JUNIN - JAUJA - EL MANTARO"
      }, {
        codigo: "120408",
        zona: "JUNIN - JAUJA - HUAMALI"
      }, {
        codigo: "120409",
        zona: "JUNIN - JAUJA - HUARIPAMPA"
      }, {
        codigo: "120410",
        zona: "JUNIN - JAUJA - HUERTAS"
      }, {
        codigo: "120411",
        zona: "JUNIN - JAUJA - JANJAILLO"
      }, {
        codigo: "120412",
        zona: "JUNIN - JAUJA - JULCAN"
      }, {
        codigo: "120413",
        zona: "JUNIN - JAUJA - LEONOR ORDOÑEZ"
      }, {
        codigo: "120414",
        zona: "JUNIN - JAUJA - LLOCLLAPAMPA"
      }, {
        codigo: "120415",
        zona: "JUNIN - JAUJA - MARCO"
      }, {
        codigo: "120416",
        zona: "JUNIN - JAUJA - MASMA"
      }, {
        codigo: "120417",
        zona: "JUNIN - JAUJA - MASMA CHICCHE"
      }, {
        codigo: "120418",
        zona: "JUNIN - JAUJA - MOLINOS"
      }, {
        codigo: "120419",
        zona: "JUNIN - JAUJA - MONOBAMBA"
      }, {
        codigo: "120420",
        zona: "JUNIN - JAUJA - MUQUI"
      }, {
        codigo: "120421",
        zona: "JUNIN - JAUJA - MUQUIYAUYO"
      }, {
        codigo: "120422",
        zona: "JUNIN - JAUJA - PACA"
      }, {
        codigo: "120423",
        zona: "JUNIN - JAUJA - PACCHA"
      }, {
        codigo: "120424",
        zona: "JUNIN - JAUJA - PANCAN"
      }, {
        codigo: "120425",
        zona: "JUNIN - JAUJA - PARCO"
      }, {
        codigo: "120426",
        zona: "JUNIN - JAUJA - POMACANCHA"
      }, {
        codigo: "120427",
        zona: "JUNIN - JAUJA - RICRAN"
      }, {
        codigo: "120428",
        zona: "JUNIN - JAUJA - SAN LORENZO"
      }, {
        codigo: "120429",
        zona: "JUNIN - JAUJA - SAN PEDRO DE CHUNAN"
      }, {
        codigo: "120430",
        zona: "JUNIN - JAUJA - SAUSA"
      }, {
        codigo: "120431",
        zona: "JUNIN - JAUJA - SINCOS"
      }, {
        codigo: "120432",
        zona: "JUNIN - JAUJA - TUNAN MARCA"
      }, {
        codigo: "120433",
        zona: "JUNIN - JAUJA - YAULI"
      }, {
        codigo: "120434",
        zona: "JUNIN - JAUJA - YAUYOS"
      }, {
        codigo: "120501",
        zona: "JUNIN - JUNIN - JUNIN"
      }, {
        codigo: "120502",
        zona: "JUNIN - JUNIN - CARHUAMAYO"
      }, {
        codigo: "120503",
        zona: "JUNIN - JUNIN - ONDORES"
      }, {
        codigo: "120504",
        zona: "JUNIN - JUNIN - ULCUMAYO"
      }, {
        codigo: "120601",
        zona: "JUNIN - SATIPO - SATIPO"
      }, {
        codigo: "120602",
        zona: "JUNIN - SATIPO - COVIRIALI"
      }, {
        codigo: "120603",
        zona: "JUNIN - SATIPO - LLAYLLA"
      }, {
        codigo: "120604",
        zona: "JUNIN - SATIPO - MAZAMARI"
      }, {
        codigo: "120605",
        zona: "JUNIN - SATIPO - PAMPA HERMOSA"
      }, {
        codigo: "120606",
        zona: "JUNIN - SATIPO - PANGOA"
      }, {
        codigo: "120607",
        zona: "JUNIN - SATIPO - RIO NEGRO"
      }, {
        codigo: "120608",
        zona: "JUNIN - SATIPO - RIO TAMBO"
      }, {
        codigo: "120609",
        zona: "JUNIN - SATIPO - VIZCATAN DEL ENE"
      }, {
        codigo: "120701",
        zona: "JUNIN - TARMA - TARMA"
      }, {
        codigo: "120702",
        zona: "JUNIN - TARMA - ACOBAMBA"
      }, {
        codigo: "120703",
        zona: "JUNIN - TARMA - HUARICOLCA"
      }, {
        codigo: "120704",
        zona: "JUNIN - TARMA - HUASAHUASI"
      }, {
        codigo: "120705",
        zona: "JUNIN - TARMA - LA UNION"
      }, {
        codigo: "120706",
        zona: "JUNIN - TARMA - PALCA"
      }, {
        codigo: "120707",
        zona: "JUNIN - TARMA - PALCAMAYO"
      }, {
        codigo: "120708",
        zona: "JUNIN - TARMA - SAN PEDRO DE CAJAS"
      }, {
        codigo: "120709",
        zona: "JUNIN - TARMA - TAPO"
      }, {
        codigo: "120801",
        zona: "JUNIN - YAULI - LA OROYA"
      }, {
        codigo: "120802",
        zona: "JUNIN - YAULI - CHACAPALPA"
      }, {
        codigo: "120803",
        zona: "JUNIN - YAULI - HUAY-HUAY"
      }, {
        codigo: "120804",
        zona: "JUNIN - YAULI - MARCAPOMACOCHA"
      }, {
        codigo: "120805",
        zona: "JUNIN - YAULI - MOROCOCHA"
      }, {
        codigo: "120806",
        zona: "JUNIN - YAULI - PACCHA"
      }, {
        codigo: "120807",
        zona: "JUNIN - YAULI - SANTA BARBARA DE CARHUACAYAN"
      }, {
        codigo: "120808",
        zona: "JUNIN - YAULI - SANTA ROSA DE SACCO"
      }, {
        codigo: "120809",
        zona: "JUNIN - YAULI - SUITUCANCHA"
      }, {
        codigo: "120810",
        zona: "JUNIN - YAULI - YAULI"
      }, {
        codigo: "120901",
        zona: "JUNIN - CHUPACA - CHUPACA"
      }, {
        codigo: "120902",
        zona: "JUNIN - CHUPACA - AHUAC"
      }, {
        codigo: "120903",
        zona: "JUNIN - CHUPACA - CHONGOS BAJO"
      }, {
        codigo: "120904",
        zona: "JUNIN - CHUPACA - HUACHAC"
      }, {
        codigo: "120905",
        zona: "JUNIN - CHUPACA - HUAMANCACA CHICO"
      }, {
        codigo: "120906",
        zona: "JUNIN - CHUPACA - SAN JUAN DE ISCOS"
      }, {
        codigo: "120907",
        zona: "JUNIN - CHUPACA - SAN JUAN DE JARPA"
      }, {
        codigo: "120908",
        zona: "JUNIN - CHUPACA - TRES DE DICIEMBRE"
      }, {
        codigo: "120909",
        zona: "JUNIN - CHUPACA - YANACANCHA"
      }, {
        codigo: "130101",
        zona: "LA LIBERTAD - TRUJILLO - TRUJILLO"
      }, {
        codigo: "130102",
        zona: "LA LIBERTAD - TRUJILLO - EL PORVENIR"
      }, {
        codigo: "130103",
        zona: "LA LIBERTAD - TRUJILLO - FLORENCIA DE MORA"
      }, {
        codigo: "130104",
        zona: "LA LIBERTAD - TRUJILLO - HUANCHACO"
      }, {
        codigo: "130105",
        zona: "LA LIBERTAD - TRUJILLO - LA ESPERANZA"
      }, {
        codigo: "130106",
        zona: "LA LIBERTAD - TRUJILLO - LAREDO"
      }, {
        codigo: "130107",
        zona: "LA LIBERTAD - TRUJILLO - MOCHE"
      }, {
        codigo: "130108",
        zona: "LA LIBERTAD - TRUJILLO - POROTO"
      }, {
        codigo: "130109",
        zona: "LA LIBERTAD - TRUJILLO - SALAVERRY"
      }, {
        codigo: "130110",
        zona: "LA LIBERTAD - TRUJILLO - SIMBAL"
      }, {
        codigo: "130111",
        zona: "LA LIBERTAD - TRUJILLO - VICTOR LARCO HERRERA"
      }, {
        codigo: "130201",
        zona: "LA LIBERTAD - ASCOPE - ASCOPE"
      }, {
        codigo: "130202",
        zona: "LA LIBERTAD - ASCOPE - CHICAMA"
      }, {
        codigo: "130203",
        zona: "LA LIBERTAD - ASCOPE - CHOCOPE"
      }, {
        codigo: "130204",
        zona: "LA LIBERTAD - ASCOPE - MAGDALENA DE CAO"
      }, {
        codigo: "130205",
        zona: "LA LIBERTAD - ASCOPE - PAIJAN"
      }, {
        codigo: "130206",
        zona: "LA LIBERTAD - ASCOPE - RAZURI"
      }, {
        codigo: "130207",
        zona: "LA LIBERTAD - ASCOPE - SANTIAGO DE CAO"
      }, {
        codigo: "130208",
        zona: "LA LIBERTAD - ASCOPE - CASA GRANDE"
      }, {
        codigo: "130301",
        zona: "LA LIBERTAD - BOLIVAR - BOLIVAR"
      }, {
        codigo: "130302",
        zona: "LA LIBERTAD - BOLIVAR - BAMBAMARCA"
      }, {
        codigo: "130303",
        zona: "LA LIBERTAD - BOLIVAR - CONDORMARCA"
      }, {
        codigo: "130304",
        zona: "LA LIBERTAD - BOLIVAR - LONGOTEA"
      }, {
        codigo: "130305",
        zona: "LA LIBERTAD - BOLIVAR - UCHUMARCA"
      }, {
        codigo: "130306",
        zona: "LA LIBERTAD - BOLIVAR - UCUNCHA"
      }, {
        codigo: "130401",
        zona: "LA LIBERTAD - CHEPEN - CHEPEN"
      }, {
        codigo: "130402",
        zona: "LA LIBERTAD - CHEPEN - PACANGA"
      }, {
        codigo: "130403",
        zona: "LA LIBERTAD - CHEPEN - PUEBLO NUEVO"
      }, {
        codigo: "130501",
        zona: "LA LIBERTAD - JULCAN - JULCAN"
      }, {
        codigo: "130502",
        zona: "LA LIBERTAD - JULCAN - CALAMARCA"
      }, {
        codigo: "130503",
        zona: "LA LIBERTAD - JULCAN - CARABAMBA"
      }, {
        codigo: "130504",
        zona: "LA LIBERTAD - JULCAN - HUASO"
      }, {
        codigo: "130601",
        zona: "LA LIBERTAD - OTUZCO - OTUZCO"
      }, {
        codigo: "130602",
        zona: "LA LIBERTAD - OTUZCO - AGALLPAMPA"
      }, {
        codigo: "130604",
        zona: "LA LIBERTAD - OTUZCO - CHARAT"
      }, {
        codigo: "130605",
        zona: "LA LIBERTAD - OTUZCO - HUARANCHAL"
      }, {
        codigo: "130606",
        zona: "LA LIBERTAD - OTUZCO - LA CUESTA"
      }, {
        codigo: "130608",
        zona: "LA LIBERTAD - OTUZCO - MACHE"
      }, {
        codigo: "130610",
        zona: "LA LIBERTAD - OTUZCO - PARANDAY"
      }, {
        codigo: "130611",
        zona: "LA LIBERTAD - OTUZCO - SALPO"
      }, {
        codigo: "130613",
        zona: "LA LIBERTAD - OTUZCO - SINSICAP"
      }, {
        codigo: "130614",
        zona: "LA LIBERTAD - OTUZCO - USQUIL"
      }, {
        codigo: "130701",
        zona: "LA LIBERTAD - PACASMAYO - SAN PEDRO DE LLOC"
      }, {
        codigo: "130702",
        zona: "LA LIBERTAD - PACASMAYO - GUADALUPE"
      }, {
        codigo: "130703",
        zona: "LA LIBERTAD - PACASMAYO - JEQUETEPEQUE"
      }, {
        codigo: "130704",
        zona: "LA LIBERTAD - PACASMAYO - PACASMAYO"
      }, {
        codigo: "130705",
        zona: "LA LIBERTAD - PACASMAYO - SAN JOSE"
      }, {
        codigo: "130801",
        zona: "LA LIBERTAD - PATAZ - TAYABAMBA"
      }, {
        codigo: "130802",
        zona: "LA LIBERTAD - PATAZ - BULDIBUYO"
      }, {
        codigo: "130803",
        zona: "LA LIBERTAD - PATAZ - CHILLIA"
      }, {
        codigo: "130804",
        zona: "LA LIBERTAD - PATAZ - HUANCASPATA"
      }, {
        codigo: "130805",
        zona: "LA LIBERTAD - PATAZ - HUAYLILLAS"
      }, {
        codigo: "130806",
        zona: "LA LIBERTAD - PATAZ - HUAYO"
      }, {
        codigo: "130807",
        zona: "LA LIBERTAD - PATAZ - ONGON"
      }, {
        codigo: "130808",
        zona: "LA LIBERTAD - PATAZ - PARCOY"
      }, {
        codigo: "130809",
        zona: "LA LIBERTAD - PATAZ - PATAZ"
      }, {
        codigo: "130810",
        zona: "LA LIBERTAD - PATAZ - PIAS"
      }, {
        codigo: "130811",
        zona: "LA LIBERTAD - PATAZ - SANTIAGO DE CHALLAS"
      }, {
        codigo: "130812",
        zona: "LA LIBERTAD - PATAZ - TAURIJA"
      }, {
        codigo: "130813",
        zona: "LA LIBERTAD - PATAZ - URPAY"
      }, {
        codigo: "130901",
        zona: "LA LIBERTAD - SANCHEZ CARRION - HUAMACHUCO"
      }, {
        codigo: "130902",
        zona: "LA LIBERTAD - SANCHEZ CARRION - CHUGAY"
      }, {
        codigo: "130903",
        zona: "LA LIBERTAD - SANCHEZ CARRION - COCHORCO"
      }, {
        codigo: "130904",
        zona: "LA LIBERTAD - SANCHEZ CARRION - CURGOS"
      }, {
        codigo: "130905",
        zona: "LA LIBERTAD - SANCHEZ CARRION - MARCABAL"
      }, {
        codigo: "130906",
        zona: "LA LIBERTAD - SANCHEZ CARRION - SANAGORAN"
      }, {
        codigo: "130907",
        zona: "LA LIBERTAD - SANCHEZ CARRION - SARIN"
      }, {
        codigo: "130908",
        zona: "LA LIBERTAD - SANCHEZ CARRION - SARTIMBAMBA"
      }, {
        codigo: "131001",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - SANTIAGO DE CHUCO"
      }, {
        codigo: "131002",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - ANGASMARCA"
      }, {
        codigo: "131003",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - CACHICADAN"
      }, {
        codigo: "131004",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - MOLLEBAMBA"
      }, {
        codigo: "131005",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - MOLLEPATA"
      }, {
        codigo: "131006",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - QUIRUVILCA"
      }, {
        codigo: "131007",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - SANTA CRUZ DE CHUCA"
      }, {
        codigo: "131008",
        zona: "LA LIBERTAD - SANTIAGO DE CHUCO - SITABAMBA"
      }, {
        codigo: "131101",
        zona: "LA LIBERTAD - GRAN CHIMU - CASCAS"
      }, {
        codigo: "131102",
        zona: "LA LIBERTAD - GRAN CHIMU - LUCMA"
      }, {
        codigo: "131103",
        zona: "LA LIBERTAD - GRAN CHIMU - MARMOT"
      }, {
        codigo: "131104",
        zona: "LA LIBERTAD - GRAN CHIMU - SAYAPULLO"
      }, {
        codigo: "131201",
        zona: "LA LIBERTAD - VIRU - VIRU"
      }, {
        codigo: "131202",
        zona: "LA LIBERTAD - VIRU - CHAO"
      }, {
        codigo: "131203",
        zona: "LA LIBERTAD - VIRU - GUADALUPITO"
      }, {
        codigo: "140101",
        zona: "LAMBAYEQUE - CHICLAYO - CHICLAYO"
      }, {
        codigo: "140102",
        zona: "LAMBAYEQUE - CHICLAYO - CHONGOYAPE"
      }, {
        codigo: "140103",
        zona: "LAMBAYEQUE - CHICLAYO - ETEN"
      }, {
        codigo: "140104",
        zona: "LAMBAYEQUE - CHICLAYO - ETEN PUERTO"
      }, {
        codigo: "140105",
        zona: "LAMBAYEQUE - CHICLAYO - JOSE LEONARDO ORTIZ"
      }, {
        codigo: "140106",
        zona: "LAMBAYEQUE - CHICLAYO - LA VICTORIA"
      }, {
        codigo: "140107",
        zona: "LAMBAYEQUE - CHICLAYO - LAGUNAS"
      }, {
        codigo: "140108",
        zona: "LAMBAYEQUE - CHICLAYO - MONSEFU"
      }, {
        codigo: "140109",
        zona: "LAMBAYEQUE - CHICLAYO - NUEVA ARICA"
      }, {
        codigo: "140110",
        zona: "LAMBAYEQUE - CHICLAYO - OYOTUN"
      }, {
        codigo: "140111",
        zona: "LAMBAYEQUE - CHICLAYO - PICSI"
      }, {
        codigo: "140112",
        zona: "LAMBAYEQUE - CHICLAYO - PIMENTEL"
      }, {
        codigo: "140113",
        zona: "LAMBAYEQUE - CHICLAYO - REQUE"
      }, {
        codigo: "140114",
        zona: "LAMBAYEQUE - CHICLAYO - SANTA ROSA"
      }, {
        codigo: "140115",
        zona: "LAMBAYEQUE - CHICLAYO - SAÑA"
      }, {
        codigo: "140116",
        zona: "LAMBAYEQUE - CHICLAYO - CAYALTI"
      }, {
        codigo: "140117",
        zona: "LAMBAYEQUE - CHICLAYO - PATAPO"
      }, {
        codigo: "140118",
        zona: "LAMBAYEQUE - CHICLAYO - POMALCA"
      }, {
        codigo: "140119",
        zona: "LAMBAYEQUE - CHICLAYO - PUCALA"
      }, {
        codigo: "140120",
        zona: "LAMBAYEQUE - CHICLAYO - TUMAN"
      }, {
        codigo: "140201",
        zona: "LAMBAYEQUE - FERREÑAFE - FERREÑAFE"
      }, {
        codigo: "140202",
        zona: "LAMBAYEQUE - FERREÑAFE - CAÑARIS"
      }, {
        codigo: "140203",
        zona: "LAMBAYEQUE - FERREÑAFE - INCAHUASI"
      }, {
        codigo: "140204",
        zona: "LAMBAYEQUE - FERREÑAFE - MANUEL ANTONIO MESONES MURO"
      }, {
        codigo: "140205",
        zona: "LAMBAYEQUE - FERREÑAFE - PITIPO"
      }, {
        codigo: "140206",
        zona: "LAMBAYEQUE - FERREÑAFE - PUEBLO NUEVO"
      }, {
        codigo: "140301",
        zona: "LAMBAYEQUE - LAMBAYEQUE - LAMBAYEQUE"
      }, {
        codigo: "140302",
        zona: "LAMBAYEQUE - LAMBAYEQUE - CHOCHOPE"
      }, {
        codigo: "140303",
        zona: "LAMBAYEQUE - LAMBAYEQUE - ILLIMO"
      }, {
        codigo: "140304",
        zona: "LAMBAYEQUE - LAMBAYEQUE - JAYANCA"
      }, {
        codigo: "140305",
        zona: "LAMBAYEQUE - LAMBAYEQUE - MOCHUMI"
      }, {
        codigo: "140306",
        zona: "LAMBAYEQUE - LAMBAYEQUE - MORROPE"
      }, {
        codigo: "140307",
        zona: "LAMBAYEQUE - LAMBAYEQUE - MOTUPE"
      }, {
        codigo: "140308",
        zona: "LAMBAYEQUE - LAMBAYEQUE - OLMOS"
      }, {
        codigo: "140309",
        zona: "LAMBAYEQUE - LAMBAYEQUE - PACORA"
      }, {
        codigo: "140310",
        zona: "LAMBAYEQUE - LAMBAYEQUE - SALAS"
      }, {
        codigo: "140311",
        zona: "LAMBAYEQUE - LAMBAYEQUE - SAN JOSE"
      }, {
        codigo: "140312",
        zona: "LAMBAYEQUE - LAMBAYEQUE - TUCUME"
      }, {
        codigo: "150101",
        zona: "LIMA - LIMA - LIMA"
      }, {
        codigo: "150102",
        zona: "LIMA - LIMA - ANCON"
      }, {
        codigo: "150103",
        zona: "LIMA - LIMA - ATE"
      }, {
        codigo: "150104",
        zona: "LIMA - LIMA - BARRANCO"
      }, {
        codigo: "150105",
        zona: "LIMA - LIMA - BREÑA"
      }, {
        codigo: "150106",
        zona: "LIMA - LIMA - CARABAYLLO"
      }, {
        codigo: "150107",
        zona: "LIMA - LIMA - CHACLACAYO"
      }, {
        codigo: "150108",
        zona: "LIMA - LIMA - CHORRILLOS"
      }, {
        codigo: "150109",
        zona: "LIMA - LIMA - CIENEGUILLA"
      }, {
        codigo: "150110",
        zona: "LIMA - LIMA - COMAS"
      }, {
        codigo: "150111",
        zona: "LIMA - LIMA - EL AGUSTINO"
      }, {
        codigo: "150112",
        zona: "LIMA - LIMA - INDEPENDENCIA"
      }, {
        codigo: "150113",
        zona: "LIMA - LIMA - JESUS MARIA"
      }, {
        codigo: "150114",
        zona: "LIMA - LIMA - LA MOLINA"
      }, {
        codigo: "150115",
        zona: "LIMA - LIMA - LA VICTORIA"
      }, {
        codigo: "150116",
        zona: "LIMA - LIMA - LINCE"
      }, {
        codigo: "150117",
        zona: "LIMA - LIMA - LOS OLIVOS"
      }, {
        codigo: "150118",
        zona: "LIMA - LIMA - LURIGANCHO"
      }, {
        codigo: "150119",
        zona: "LIMA - LIMA - LURIN"
      }, {
        codigo: "150120",
        zona: "LIMA - LIMA - MAGDALENA DEL MAR"
      }, {
        codigo: "150121",
        zona: "LIMA - LIMA - PUEBLO LIBRE"
      }, {
        codigo: "150122",
        zona: "LIMA - LIMA - MIRAFLORES"
      }, {
        codigo: "150123",
        zona: "LIMA - LIMA - PACHACAMAC"
      }, {
        codigo: "150124",
        zona: "LIMA - LIMA - PUCUSANA"
      }, {
        codigo: "150125",
        zona: "LIMA - LIMA - PUENTE PIEDRA"
      }, {
        codigo: "150126",
        zona: "LIMA - LIMA - PUNTA HERMOSA"
      }, {
        codigo: "150127",
        zona: "LIMA - LIMA - PUNTA NEGRA"
      }, {
        codigo: "150128",
        zona: "LIMA - LIMA - RIMAC"
      }, {
        codigo: "150129",
        zona: "LIMA - LIMA - SAN BARTOLO"
      }, {
        codigo: "150130",
        zona: "LIMA - LIMA - SAN BORJA"
      }, {
        codigo: "150131",
        zona: "LIMA - LIMA - SAN ISIDRO"
      }, {
        codigo: "150132",
        zona: "LIMA - LIMA - SAN JUAN DE LURIGANCHO"
      }, {
        codigo: "150133",
        zona: "LIMA - LIMA - SAN JUAN DE MIRAFLORES"
      }, {
        codigo: "150134",
        zona: "LIMA - LIMA - SAN LUIS"
      }, {
        codigo: "150135",
        zona: "LIMA - LIMA - SAN MARTIN DE PORRES"
      }, {
        codigo: "150136",
        zona: "LIMA - LIMA - SAN MIGUEL"
      }, {
        codigo: "150137",
        zona: "LIMA - LIMA - SANTA ANITA"
      }, {
        codigo: "150138",
        zona: "LIMA - LIMA - SANTA MARIA DEL MAR"
      }, {
        codigo: "150139",
        zona: "LIMA - LIMA - SANTA ROSA"
      }, {
        codigo: "150140",
        zona: "LIMA - LIMA - SANTIAGO DE SURCO"
      }, {
        codigo: "150141",
        zona: "LIMA - LIMA - SURQUILLO"
      }, {
        codigo: "150142",
        zona: "LIMA - LIMA - VILLA EL SALVADOR"
      }, {
        codigo: "150143",
        zona: "LIMA - LIMA - VILLA MARIA DEL TRIUNFO"
      }, {
        codigo: "150201",
        zona: "LIMA - BARRANCA - BARRANCA"
      }, {
        codigo: "150202",
        zona: "LIMA - BARRANCA - PARAMONGA"
      }, {
        codigo: "150203",
        zona: "LIMA - BARRANCA - PATIVILCA"
      }, {
        codigo: "150204",
        zona: "LIMA - BARRANCA - SUPE"
      }, {
        codigo: "150205",
        zona: "LIMA - BARRANCA - SUPE PUERTO"
      }, {
        codigo: "150301",
        zona: "LIMA - CAJATAMBO - CAJATAMBO"
      }, {
        codigo: "150302",
        zona: "LIMA - CAJATAMBO - COPA"
      }, {
        codigo: "150303",
        zona: "LIMA - CAJATAMBO - GORGOR"
      }, {
        codigo: "150304",
        zona: "LIMA - CAJATAMBO - HUANCAPON"
      }, {
        codigo: "150305",
        zona: "LIMA - CAJATAMBO - MANAS"
      }, {
        codigo: "150401",
        zona: "LIMA - CANTA - CANTA"
      }, {
        codigo: "150402",
        zona: "LIMA - CANTA - ARAHUAY"
      }, {
        codigo: "150403",
        zona: "LIMA - CANTA - HUAMANTANGA"
      }, {
        codigo: "150404",
        zona: "LIMA - CANTA - HUAROS"
      }, {
        codigo: "150405",
        zona: "LIMA - CANTA - LACHAQUI"
      }, {
        codigo: "150406",
        zona: "LIMA - CANTA - SAN BUENAVENTURA"
      }, {
        codigo: "150407",
        zona: "LIMA - CANTA - SANTA ROSA DE QUIVES"
      }, {
        codigo: "150501",
        zona: "LIMA - CAÑETE - SAN VICENTE DE CAÑETE"
      }, {
        codigo: "150502",
        zona: "LIMA - CAÑETE - ASIA"
      }, {
        codigo: "150503",
        zona: "LIMA - CAÑETE - CALANGO"
      }, {
        codigo: "150504",
        zona: "LIMA - CAÑETE - CERRO AZUL"
      }, {
        codigo: "150505",
        zona: "LIMA - CAÑETE - CHILCA"
      }, {
        codigo: "150506",
        zona: "LIMA - CAÑETE - COAYLLO"
      }, {
        codigo: "150507",
        zona: "LIMA - CAÑETE - IMPERIAL"
      }, {
        codigo: "150508",
        zona: "LIMA - CAÑETE - LUNAHUANA"
      }, {
        codigo: "150509",
        zona: "LIMA - CAÑETE - MALA"
      }, {
        codigo: "150510",
        zona: "LIMA - CAÑETE - NUEVO IMPERIAL"
      }, {
        codigo: "150511",
        zona: "LIMA - CAÑETE - PACARAN"
      }, {
        codigo: "150512",
        zona: "LIMA - CAÑETE - QUILMANA"
      }, {
        codigo: "150513",
        zona: "LIMA - CAÑETE - SAN ANTONIO"
      }, {
        codigo: "150514",
        zona: "LIMA - CAÑETE - SAN LUIS"
      }, {
        codigo: "150515",
        zona: "LIMA - CAÑETE - SANTA CRUZ DE FLORES"
      }, {
        codigo: "150516",
        zona: "LIMA - CAÑETE - ZUÑIGA"
      }, {
        codigo: "150601",
        zona: "LIMA - HUARAL - HUARAL"
      }, {
        codigo: "150602",
        zona: "LIMA - HUARAL - ATAVILLOS ALTO"
      }, {
        codigo: "150603",
        zona: "LIMA - HUARAL - ATAVILLOS BAJO"
      }, {
        codigo: "150604",
        zona: "LIMA - HUARAL - AUCALLAMA"
      }, {
        codigo: "150605",
        zona: "LIMA - HUARAL - CHANCAY"
      }, {
        codigo: "150606",
        zona: "LIMA - HUARAL - IHUARI"
      }, {
        codigo: "150607",
        zona: "LIMA - HUARAL - LAMPIAN"
      }, {
        codigo: "150608",
        zona: "LIMA - HUARAL - PACARAOS"
      }, {
        codigo: "150609",
        zona: "LIMA - HUARAL - SAN MIGUEL DE ACOS"
      }, {
        codigo: "150610",
        zona: "LIMA - HUARAL - SANTA CRUZ DE ANDAMARCA"
      }, {
        codigo: "150611",
        zona: "LIMA - HUARAL - SUMBILCA"
      }, {
        codigo: "150612",
        zona: "LIMA - HUARAL - VEINTISIETE DE NOVIEMBRE"
      }, {
        codigo: "150701",
        zona: "LIMA - HUAROCHIRI - MATUCANA"
      }, {
        codigo: "150702",
        zona: "LIMA - HUAROCHIRI - ANTIOQUIA"
      }, {
        codigo: "150703",
        zona: "LIMA - HUAROCHIRI - CALLAHUANCA"
      }, {
        codigo: "150704",
        zona: "LIMA - HUAROCHIRI - CARAMPOMA"
      }, {
        codigo: "150705",
        zona: "LIMA - HUAROCHIRI - CHICLA"
      }, {
        codigo: "150706",
        zona: "LIMA - HUAROCHIRI - CUENCA"
      }, {
        codigo: "150707",
        zona: "LIMA - HUAROCHIRI - HUACHUPAMPA"
      }, {
        codigo: "150708",
        zona: "LIMA - HUAROCHIRI - HUANZA"
      }, {
        codigo: "150709",
        zona: "LIMA - HUAROCHIRI - HUAROCHIRI"
      }, {
        codigo: "150710",
        zona: "LIMA - HUAROCHIRI - LAHUAYTAMBO"
      }, {
        codigo: "150711",
        zona: "LIMA - HUAROCHIRI - LANGA"
      }, {
        codigo: "150712",
        zona: "LIMA - HUAROCHIRI - SAN PEDRO DE LARAOS"
      }, {
        codigo: "150713",
        zona: "LIMA - HUAROCHIRI - MARIATANA"
      }, {
        codigo: "150714",
        zona: "LIMA - HUAROCHIRI - RICARDO PALMA"
      }, {
        codigo: "150715",
        zona: "LIMA - HUAROCHIRI - SAN ANDRES DE TUPICOCHA"
      }, {
        codigo: "150716",
        zona: "LIMA - HUAROCHIRI - SAN ANTONIO"
      }, {
        codigo: "150717",
        zona: "LIMA - HUAROCHIRI - SAN BARTOLOME"
      }, {
        codigo: "150718",
        zona: "LIMA - HUAROCHIRI - SAN DAMIAN"
      }, {
        codigo: "150719",
        zona: "LIMA - HUAROCHIRI - SAN JUAN DE IRIS"
      }, {
        codigo: "150720",
        zona: "LIMA - HUAROCHIRI - SAN JUAN DE TANTARANCHE"
      }, {
        codigo: "150721",
        zona: "LIMA - HUAROCHIRI - SAN LORENZO DE QUINTI"
      }, {
        codigo: "150722",
        zona: "LIMA - HUAROCHIRI - SAN MATEO"
      }, {
        codigo: "150723",
        zona: "LIMA - HUAROCHIRI - SAN MATEO DE OTAO"
      }, {
        codigo: "150724",
        zona: "LIMA - HUAROCHIRI - SAN PEDRO DE CASTA"
      }, {
        codigo: "150725",
        zona: "LIMA - HUAROCHIRI - SAN PEDRO DE HUANCAYRE"
      }, {
        codigo: "150726",
        zona: "LIMA - HUAROCHIRI - SANGALLAYA"
      }, {
        codigo: "150727",
        zona: "LIMA - HUAROCHIRI - SANTA CRUZ DE COCACHACRA"
      }, {
        codigo: "150728",
        zona: "LIMA - HUAROCHIRI - SANTA EULALIA"
      }, {
        codigo: "150729",
        zona: "LIMA - HUAROCHIRI - SANTIAGO DE ANCHUCAYA"
      }, {
        codigo: "150730",
        zona: "LIMA - HUAROCHIRI - SANTIAGO DE TUNA"
      }, {
        codigo: "150731",
        zona: "LIMA - HUAROCHIRI - SANTO DOMINGO DE LOS OLLEROS"
      }, {
        codigo: "150732",
        zona: "LIMA - HUAROCHIRI - SURCO"
      }, {
        codigo: "150801",
        zona: "LIMA - HUAURA - HUACHO"
      }, {
        codigo: "150802",
        zona: "LIMA - HUAURA - AMBAR"
      }, {
        codigo: "150803",
        zona: "LIMA - HUAURA - CALETA DE CARQUIN"
      }, {
        codigo: "150804",
        zona: "LIMA - HUAURA - CHECRAS"
      }, {
        codigo: "150805",
        zona: "LIMA - HUAURA - HUALMAY"
      }, {
        codigo: "150806",
        zona: "LIMA - HUAURA - HUAURA"
      }, {
        codigo: "150807",
        zona: "LIMA - HUAURA - LEONCIO PRADO"
      }, {
        codigo: "150808",
        zona: "LIMA - HUAURA - PACCHO"
      }, {
        codigo: "150809",
        zona: "LIMA - HUAURA - SANTA LEONOR"
      }, {
        codigo: "150810",
        zona: "LIMA - HUAURA - SANTA MARIA"
      }, {
        codigo: "150811",
        zona: "LIMA - HUAURA - SAYAN"
      }, {
        codigo: "150812",
        zona: "LIMA - HUAURA - VEGUETA"
      }, {
        codigo: "150901",
        zona: "LIMA - OYON - OYON"
      }, {
        codigo: "150902",
        zona: "LIMA - OYON - ANDAJES"
      }, {
        codigo: "150903",
        zona: "LIMA - OYON - CAUJUL"
      }, {
        codigo: "150904",
        zona: "LIMA - OYON - COCHAMARCA"
      }, {
        codigo: "150905",
        zona: "LIMA - OYON - NAVAN"
      }, {
        codigo: "150906",
        zona: "LIMA - OYON - PACHANGARA"
      }, {
        codigo: "151001",
        zona: "LIMA - YAUYOS - YAUYOS"
      }, {
        codigo: "151002",
        zona: "LIMA - YAUYOS - ALIS"
      }, {
        codigo: "151003",
        zona: "LIMA - YAUYOS - ALLAUCA"
      }, {
        codigo: "151004",
        zona: "LIMA - YAUYOS - AYAVIRI"
      }, {
        codigo: "151005",
        zona: "LIMA - YAUYOS - AZANGARO"
      }, {
        codigo: "151006",
        zona: "LIMA - YAUYOS - CACRA"
      }, {
        codigo: "151007",
        zona: "LIMA - YAUYOS - CARANIA"
      }, {
        codigo: "151008",
        zona: "LIMA - YAUYOS - CATAHUASI"
      }, {
        codigo: "151009",
        zona: "LIMA - YAUYOS - CHOCOS"
      }, {
        codigo: "151010",
        zona: "LIMA - YAUYOS - COCHAS"
      }, {
        codigo: "151011",
        zona: "LIMA - YAUYOS - COLONIA"
      }, {
        codigo: "151012",
        zona: "LIMA - YAUYOS - HONGOS"
      }, {
        codigo: "151013",
        zona: "LIMA - YAUYOS - HUAMPARA"
      }, {
        codigo: "151014",
        zona: "LIMA - YAUYOS - HUANCAYA"
      }, {
        codigo: "151015",
        zona: "LIMA - YAUYOS - HUANGASCAR"
      }, {
        codigo: "151016",
        zona: "LIMA - YAUYOS - HUANTAN"
      }, {
        codigo: "151017",
        zona: "LIMA - YAUYOS - HUAÑEC"
      }, {
        codigo: "151018",
        zona: "LIMA - YAUYOS - LARAOS"
      }, {
        codigo: "151019",
        zona: "LIMA - YAUYOS - LINCHA"
      }, {
        codigo: "151020",
        zona: "LIMA - YAUYOS - MADEAN"
      }, {
        codigo: "151021",
        zona: "LIMA - YAUYOS - MIRAFLORES"
      }, {
        codigo: "151022",
        zona: "LIMA - YAUYOS - OMAS"
      }, {
        codigo: "151023",
        zona: "LIMA - YAUYOS - PUTINZA"
      }, {
        codigo: "151024",
        zona: "LIMA - YAUYOS - QUINCHES"
      }, {
        codigo: "151025",
        zona: "LIMA - YAUYOS - QUINOCAY"
      }, {
        codigo: "151026",
        zona: "LIMA - YAUYOS - SAN JOAQUIN"
      }, {
        codigo: "151027",
        zona: "LIMA - YAUYOS - SAN PEDRO DE PILAS"
      }, {
        codigo: "151028",
        zona: "LIMA - YAUYOS - TANTA"
      }, {
        codigo: "151029",
        zona: "LIMA - YAUYOS - TAURIPAMPA"
      }, {
        codigo: "151030",
        zona: "LIMA - YAUYOS - TOMAS"
      }, {
        codigo: "151031",
        zona: "LIMA - YAUYOS - TUPE"
      }, {
        codigo: "151032",
        zona: "LIMA - YAUYOS - VIÑAC"
      }, {
        codigo: "151033",
        zona: "LIMA - YAUYOS - VITIS"
      }, {
        codigo: "160101",
        zona: "LORETO - MAYNAS - IQUITOS"
      }, {
        codigo: "160102",
        zona: "LORETO - MAYNAS - ALTO NANAY"
      }, {
        codigo: "160103",
        zona: "LORETO - MAYNAS - FERNANDO LORES"
      }, {
        codigo: "160104",
        zona: "LORETO - MAYNAS - INDIANA"
      }, {
        codigo: "160105",
        zona: "LORETO - MAYNAS - LAS AMAZONAS"
      }, {
        codigo: "160106",
        zona: "LORETO - MAYNAS - MAZAN"
      }, {
        codigo: "160107",
        zona: "LORETO - MAYNAS - NAPO"
      }, {
        codigo: "160108",
        zona: "LORETO - MAYNAS - PUNCHANA"
      }, {
        codigo: "160110",
        zona: "LORETO - MAYNAS - TORRES CAUSANA"
      }, {
        codigo: "160112",
        zona: "LORETO - MAYNAS - BELEN"
      }, {
        codigo: "160113",
        zona: "LORETO - MAYNAS - SAN JUAN BAUTISTA"
      }, {
        codigo: "160201",
        zona: "LORETO - ALTO AMAZONAS - YURIMAGUAS"
      }, {
        codigo: "160202",
        zona: "LORETO - ALTO AMAZONAS - BALSAPUERTO"
      }, {
        codigo: "160205",
        zona: "LORETO - ALTO AMAZONAS - JEBEROS"
      }, {
        codigo: "160206",
        zona: "LORETO - ALTO AMAZONAS - LAGUNAS"
      }, {
        codigo: "160210",
        zona: "LORETO - ALTO AMAZONAS - SANTA CRUZ"
      }, {
        codigo: "160211",
        zona: "LORETO - ALTO AMAZONAS - TENIENTE CESAR LOPEZ ROJAS"
      }, {
        codigo: "160301",
        zona: "LORETO - LORETO - NAUTA"
      }, {
        codigo: "160302",
        zona: "LORETO - LORETO - PARINARI"
      }, {
        codigo: "160303",
        zona: "LORETO - LORETO - TIGRE"
      }, {
        codigo: "160304",
        zona: "LORETO - LORETO - TROMPETEROS"
      }, {
        codigo: "160305",
        zona: "LORETO - LORETO - URARINAS"
      }, {
        codigo: "160401",
        zona: "LORETO - MARISCAL RAMON CASTILLA - RAMON CASTILLA"
      }, {
        codigo: "160402",
        zona: "LORETO - MARISCAL RAMON CASTILLA - PEBAS"
      }, {
        codigo: "160403",
        zona: "LORETO - MARISCAL RAMON CASTILLA - YAVARI"
      }, {
        codigo: "160404",
        zona: "LORETO - MARISCAL RAMON CASTILLA - SAN PABLO"
      }, {
        codigo: "160501",
        zona: "LORETO - REQUENA - REQUENA"
      }, {
        codigo: "160502",
        zona: "LORETO - REQUENA - ALTO TAPICHE"
      }, {
        codigo: "160503",
        zona: "LORETO - REQUENA - CAPELO"
      }, {
        codigo: "160504",
        zona: "LORETO - REQUENA - EMILIO SAN MARTIN"
      }, {
        codigo: "160505",
        zona: "LORETO - REQUENA - MAQUIA"
      }, {
        codigo: "160506",
        zona: "LORETO - REQUENA - PUINAHUA"
      }, {
        codigo: "160507",
        zona: "LORETO - REQUENA - SAQUENA"
      }, {
        codigo: "160508",
        zona: "LORETO - REQUENA - SOPLIN"
      }, {
        codigo: "160509",
        zona: "LORETO - REQUENA - TAPICHE"
      }, {
        codigo: "160510",
        zona: "LORETO - REQUENA - JENARO HERRERA"
      }, {
        codigo: "160511",
        zona: "LORETO - REQUENA - YAQUERANA"
      }, {
        codigo: "160601",
        zona: "LORETO - UCAYALI - CONTAMANA"
      }, {
        codigo: "160602",
        zona: "LORETO - UCAYALI - INAHUAYA"
      }, {
        codigo: "160603",
        zona: "LORETO - UCAYALI - PADRE MARQUEZ"
      }, {
        codigo: "160604",
        zona: "LORETO - UCAYALI - PAMPA HERMOSA"
      }, {
        codigo: "160605",
        zona: "LORETO - UCAYALI - SARAYACU"
      }, {
        codigo: "160606",
        zona: "LORETO - UCAYALI - VARGAS GUERRA"
      }, {
        codigo: "160701",
        zona: "LORETO - DATEM DEL MARAÑON - BARRANCA"
      }, {
        codigo: "160702",
        zona: "LORETO - DATEM DEL MARAÑON - CAHUAPANAS"
      }, {
        codigo: "160703",
        zona: "LORETO - DATEM DEL MARAÑON - MANSERICHE"
      }, {
        codigo: "160704",
        zona: "LORETO - DATEM DEL MARAÑON - MORONA"
      }, {
        codigo: "160705",
        zona: "LORETO - DATEM DEL MARAÑON - PASTAZA"
      }, {
        codigo: "160706",
        zona: "LORETO - DATEM DEL MARAÑON - ANDOAS"
      }, {
        codigo: "160801",
        zona: "LORETO - PUTUMAYO - PUTUMAYO"
      }, {
        codigo: "160802",
        zona: "LORETO - PUTUMAYO - ROSA PANDURO"
      }, {
        codigo: "160803",
        zona: "LORETO - PUTUMAYO - TENIENTE MANUEL CLAVERO"
      }, {
        codigo: "160804",
        zona: "LORETO - PUTUMAYO - YAGUAS"
      }, {
        codigo: "170101",
        zona: "MADRE DE DIOS - TAMBOPATA - TAMBOPATA"
      }, {
        codigo: "170102",
        zona: "MADRE DE DIOS - TAMBOPATA - INAMBARI"
      }, {
        codigo: "170103",
        zona: "MADRE DE DIOS - TAMBOPATA - LAS PIEDRAS"
      }, {
        codigo: "170104",
        zona: "MADRE DE DIOS - TAMBOPATA - LABERINTO"
      }, {
        codigo: "170201",
        zona: "MADRE DE DIOS - MANU - MANU"
      }, {
        codigo: "170202",
        zona: "MADRE DE DIOS - MANU - FITZCARRALD"
      }, {
        codigo: "170203",
        zona: "MADRE DE DIOS - MANU - MADRE DE DIOS"
      }, {
        codigo: "170204",
        zona: "MADRE DE DIOS - MANU - HUEPETUHE"
      }, {
        codigo: "170301",
        zona: "MADRE DE DIOS - TAHUAMANU - IÑAPARI"
      }, {
        codigo: "170302",
        zona: "MADRE DE DIOS - TAHUAMANU - IBERIA"
      }, {
        codigo: "170303",
        zona: "MADRE DE DIOS - TAHUAMANU - TAHUAMANU"
      }, {
        codigo: "180101",
        zona: "MOQUEGUA - MARISCAL NIETO - MOQUEGUA"
      }, {
        codigo: "180102",
        zona: "MOQUEGUA - MARISCAL NIETO - CARUMAS"
      }, {
        codigo: "180103",
        zona: "MOQUEGUA - MARISCAL NIETO - CUCHUMBAYA"
      }, {
        codigo: "180104",
        zona: "MOQUEGUA - MARISCAL NIETO - SAMEGUA"
      }, {
        codigo: "180105",
        zona: "MOQUEGUA - MARISCAL NIETO - SAN CRISTOBAL"
      }, {
        codigo: "180106",
        zona: "MOQUEGUA - MARISCAL NIETO - TORATA"
      }, {
        codigo: "180201",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - OMATE"
      }, {
        codigo: "180202",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - CHOJATA"
      }, {
        codigo: "180203",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - COALAQUE"
      }, {
        codigo: "180204",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - ICHUÑA"
      }, {
        codigo: "180205",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - LA CAPILLA"
      }, {
        codigo: "180206",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - LLOQUE"
      }, {
        codigo: "180207",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - MATALAQUE"
      }, {
        codigo: "180208",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - PUQUINA"
      }, {
        codigo: "180209",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - QUINISTAQUILLAS"
      }, {
        codigo: "180210",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - UBINAS"
      }, {
        codigo: "180211",
        zona: "MOQUEGUA - GENERAL SANCHEZ CERRO - YUNGA"
      }, {
        codigo: "180301",
        zona: "MOQUEGUA - ILO - ILO"
      }, {
        codigo: "180302",
        zona: "MOQUEGUA - ILO - EL ALGARROBAL"
      }, {
        codigo: "180303",
        zona: "MOQUEGUA - ILO - PACOCHA"
      }, {
        codigo: "190101",
        zona: "PASCO - PASCO - CHAUPIMARCA"
      }, {
        codigo: "190102",
        zona: "PASCO - PASCO - HUACHON"
      }, {
        codigo: "190103",
        zona: "PASCO - PASCO - HUARIACA"
      }, {
        codigo: "190104",
        zona: "PASCO - PASCO - HUAYLLAY"
      }, {
        codigo: "190105",
        zona: "PASCO - PASCO - NINACACA"
      }, {
        codigo: "190106",
        zona: "PASCO - PASCO - PALLANCHACRA"
      }, {
        codigo: "190107",
        zona: "PASCO - PASCO - PAUCARTAMBO"
      }, {
        codigo: "190108",
        zona: "PASCO - PASCO - SAN FRANCISCO DE ASIS DE YARUSYACAN"
      }, {
        codigo: "190109",
        zona: "PASCO - PASCO - SIMON BOLIVAR"
      }, {
        codigo: "190110",
        zona: "PASCO - PASCO - TICLACAYAN"
      }, {
        codigo: "190111",
        zona: "PASCO - PASCO - TINYAHUARCO"
      }, {
        codigo: "190112",
        zona: "PASCO - PASCO - VICCO"
      }, {
        codigo: "190113",
        zona: "PASCO - PASCO - YANACANCHA"
      }, {
        codigo: "190201",
        zona: "PASCO - DANIEL ALCIDES CARRION - YANAHUANCA"
      }, {
        codigo: "190202",
        zona: "PASCO - DANIEL ALCIDES CARRION - CHACAYAN"
      }, {
        codigo: "190203",
        zona: "PASCO - DANIEL ALCIDES CARRION - GOYLLARISQUIZGA"
      }, {
        codigo: "190204",
        zona: "PASCO - DANIEL ALCIDES CARRION - PAUCAR"
      }, {
        codigo: "190205",
        zona: "PASCO - DANIEL ALCIDES CARRION - SAN PEDRO DE PILLAO"
      }, {
        codigo: "190206",
        zona: "PASCO - DANIEL ALCIDES CARRION - SANTA ANA DE TUSI"
      }, {
        codigo: "190207",
        zona: "PASCO - DANIEL ALCIDES CARRION - TAPUC"
      }, {
        codigo: "190208",
        zona: "PASCO - DANIEL ALCIDES CARRION - VILCABAMBA"
      }, {
        codigo: "190301",
        zona: "PASCO - OXAPAMPA - OXAPAMPA"
      }, {
        codigo: "190302",
        zona: "PASCO - OXAPAMPA - CHONTABAMBA"
      }, {
        codigo: "190303",
        zona: "PASCO - OXAPAMPA - HUANCABAMBA"
      }, {
        codigo: "190304",
        zona: "PASCO - OXAPAMPA - PALCAZU"
      }, {
        codigo: "190305",
        zona: "PASCO - OXAPAMPA - POZUZO"
      }, {
        codigo: "190306",
        zona: "PASCO - OXAPAMPA - PUERTO BERMUDEZ"
      }, {
        codigo: "190307",
        zona: "PASCO - OXAPAMPA - VILLA RICA"
      }, {
        codigo: "190308",
        zona: "PASCO - OXAPAMPA - CONSTITUCION"
      }, {
        codigo: "200101",
        zona: "PIURA - PIURA - PIURA"
      }, {
        codigo: "200104",
        zona: "PIURA - PIURA - CASTILLA"
      }, {
        codigo: "200105",
        zona: "PIURA - PIURA - CATACAOS"
      }, {
        codigo: "200107",
        zona: "PIURA - PIURA - CURA MORI"
      }, {
        codigo: "200108",
        zona: "PIURA - PIURA - EL TALLAN"
      }, {
        codigo: "200109",
        zona: "PIURA - PIURA - LA ARENA"
      }, {
        codigo: "200110",
        zona: "PIURA - PIURA - LA UNION"
      }, {
        codigo: "200111",
        zona: "PIURA - PIURA - LAS LOMAS"
      }, {
        codigo: "200114",
        zona: "PIURA - PIURA - TAMBO GRANDE"
      }, {
        codigo: "200115",
        zona: "PIURA - PIURA - VEINTISEIS DE OCTUBRE"
      }, {
        codigo: "200201",
        zona: "PIURA - AYABACA - AYABACA"
      }, {
        codigo: "200202",
        zona: "PIURA - AYABACA - FRIAS"
      }, {
        codigo: "200203",
        zona: "PIURA - AYABACA - JILILI"
      }, {
        codigo: "200204",
        zona: "PIURA - AYABACA - LAGUNAS"
      }, {
        codigo: "200205",
        zona: "PIURA - AYABACA - MONTERO"
      }, {
        codigo: "200206",
        zona: "PIURA - AYABACA - PACAIPAMPA"
      }, {
        codigo: "200207",
        zona: "PIURA - AYABACA - PAIMAS"
      }, {
        codigo: "200208",
        zona: "PIURA - AYABACA - SAPILLICA"
      }, {
        codigo: "200209",
        zona: "PIURA - AYABACA - SICCHEZ"
      }, {
        codigo: "200210",
        zona: "PIURA - AYABACA - SUYO"
      }, {
        codigo: "200301",
        zona: "PIURA - HUANCABAMBA - HUANCABAMBA"
      }, {
        codigo: "200302",
        zona: "PIURA - HUANCABAMBA - CANCHAQUE"
      }, {
        codigo: "200303",
        zona: "PIURA - HUANCABAMBA - EL CARMEN DE LA FRONTERA"
      }, {
        codigo: "200304",
        zona: "PIURA - HUANCABAMBA - HUARMACA"
      }, {
        codigo: "200305",
        zona: "PIURA - HUANCABAMBA - LALAQUIZ"
      }, {
        codigo: "200306",
        zona: "PIURA - HUANCABAMBA - SAN MIGUEL DE EL FAIQUE"
      }, {
        codigo: "200307",
        zona: "PIURA - HUANCABAMBA - SONDOR"
      }, {
        codigo: "200308",
        zona: "PIURA - HUANCABAMBA - SONDORILLO"
      }, {
        codigo: "200401",
        zona: "PIURA - MORROPON - CHULUCANAS"
      }, {
        codigo: "200402",
        zona: "PIURA - MORROPON - BUENOS AIRES"
      }, {
        codigo: "200403",
        zona: "PIURA - MORROPON - CHALACO"
      }, {
        codigo: "200404",
        zona: "PIURA - MORROPON - LA MATANZA"
      }, {
        codigo: "200405",
        zona: "PIURA - MORROPON - MORROPON"
      }, {
        codigo: "200406",
        zona: "PIURA - MORROPON - SALITRAL"
      }, {
        codigo: "200407",
        zona: "PIURA - MORROPON - SAN JUAN DE BIGOTE"
      }, {
        codigo: "200408",
        zona: "PIURA - MORROPON - SANTA CATALINA DE MOSSA"
      }, {
        codigo: "200409",
        zona: "PIURA - MORROPON - SANTO DOMINGO"
      }, {
        codigo: "200410",
        zona: "PIURA - MORROPON - YAMANGO"
      }, {
        codigo: "200501",
        zona: "PIURA - PAITA - PAITA"
      }, {
        codigo: "200502",
        zona: "PIURA - PAITA - AMOTAPE"
      }, {
        codigo: "200503",
        zona: "PIURA - PAITA - ARENAL"
      }, {
        codigo: "200504",
        zona: "PIURA - PAITA - COLAN"
      }, {
        codigo: "200505",
        zona: "PIURA - PAITA - LA HUACA"
      }, {
        codigo: "200506",
        zona: "PIURA - PAITA - TAMARINDO"
      }, {
        codigo: "200507",
        zona: "PIURA - PAITA - VICHAYAL"
      }, {
        codigo: "200601",
        zona: "PIURA - SULLANA - SULLANA"
      }, {
        codigo: "200602",
        zona: "PIURA - SULLANA - BELLAVISTA"
      }, {
        codigo: "200603",
        zona: "PIURA - SULLANA - IGNACIO ESCUDERO"
      }, {
        codigo: "200604",
        zona: "PIURA - SULLANA - LANCONES"
      }, {
        codigo: "200605",
        zona: "PIURA - SULLANA - MARCAVELICA"
      }, {
        codigo: "200606",
        zona: "PIURA - SULLANA - MIGUEL CHECA"
      }, {
        codigo: "200607",
        zona: "PIURA - SULLANA - QUERECOTILLO"
      }, {
        codigo: "200608",
        zona: "PIURA - SULLANA - SALITRAL"
      }, {
        codigo: "200701",
        zona: "PIURA - TALARA - PARIÑAS"
      }, {
        codigo: "200702",
        zona: "PIURA - TALARA - EL ALTO"
      }, {
        codigo: "200703",
        zona: "PIURA - TALARA - LA BREA"
      }, {
        codigo: "200704",
        zona: "PIURA - TALARA - LOBITOS"
      }, {
        codigo: "200705",
        zona: "PIURA - TALARA - LOS ORGANOS"
      }, {
        codigo: "200706",
        zona: "PIURA - TALARA - MANCORA"
      }, {
        codigo: "200801",
        zona: "PIURA - SECHURA - SECHURA"
      }, {
        codigo: "200802",
        zona: "PIURA - SECHURA - BELLAVISTA DE LA UNION"
      }, {
        codigo: "200803",
        zona: "PIURA - SECHURA - BERNAL"
      }, {
        codigo: "200804",
        zona: "PIURA - SECHURA - CRISTO NOS VALGA"
      }, {
        codigo: "200805",
        zona: "PIURA - SECHURA - VICE"
      }, {
        codigo: "200806",
        zona: "PIURA - SECHURA - RINCONADA LLICUAR"
      }, {
        codigo: "210101",
        zona: "PUNO - PUNO - PUNO"
      }, {
        codigo: "210102",
        zona: "PUNO - PUNO - ACORA"
      }, {
        codigo: "210103",
        zona: "PUNO - PUNO - AMANTANI"
      }, {
        codigo: "210104",
        zona: "PUNO - PUNO - ATUNCOLLA"
      }, {
        codigo: "210105",
        zona: "PUNO - PUNO - CAPACHICA"
      }, {
        codigo: "210106",
        zona: "PUNO - PUNO - CHUCUITO"
      }, {
        codigo: "210107",
        zona: "PUNO - PUNO - COATA"
      }, {
        codigo: "210108",
        zona: "PUNO - PUNO - HUATA"
      }, {
        codigo: "210109",
        zona: "PUNO - PUNO - MAÑAZO"
      }, {
        codigo: "210110",
        zona: "PUNO - PUNO - PAUCARCOLLA"
      }, {
        codigo: "210111",
        zona: "PUNO - PUNO - PICHACANI"
      }, {
        codigo: "210112",
        zona: "PUNO - PUNO - PLATERIA"
      }, {
        codigo: "210113",
        zona: "PUNO - PUNO - SAN ANTONIO"
      }, {
        codigo: "210114",
        zona: "PUNO - PUNO - TIQUILLACA"
      }, {
        codigo: "210115",
        zona: "PUNO - PUNO - VILQUE"
      }, {
        codigo: "210201",
        zona: "PUNO - AZANGARO - AZANGARO"
      }, {
        codigo: "210202",
        zona: "PUNO - AZANGARO - ACHAYA"
      }, {
        codigo: "210203",
        zona: "PUNO - AZANGARO - ARAPA"
      }, {
        codigo: "210204",
        zona: "PUNO - AZANGARO - ASILLO"
      }, {
        codigo: "210205",
        zona: "PUNO - AZANGARO - CAMINACA"
      }, {
        codigo: "210206",
        zona: "PUNO - AZANGARO - CHUPA"
      }, {
        codigo: "210207",
        zona: "PUNO - AZANGARO - JOSE DOMINGO CHOQUEHUANCA"
      }, {
        codigo: "210208",
        zona: "PUNO - AZANGARO - MUÑANI"
      }, {
        codigo: "210209",
        zona: "PUNO - AZANGARO - POTONI"
      }, {
        codigo: "210210",
        zona: "PUNO - AZANGARO - SAMAN"
      }, {
        codigo: "210211",
        zona: "PUNO - AZANGARO - SAN ANTON"
      }, {
        codigo: "210212",
        zona: "PUNO - AZANGARO - SAN JOSE"
      }, {
        codigo: "210213",
        zona: "PUNO - AZANGARO - SAN JUAN DE SALINAS"
      }, {
        codigo: "210214",
        zona: "PUNO - AZANGARO - SANTIAGO DE PUPUJA"
      }, {
        codigo: "210215",
        zona: "PUNO - AZANGARO - TIRAPATA"
      }, {
        codigo: "210301",
        zona: "PUNO - CARABAYA - MACUSANI"
      }, {
        codigo: "210302",
        zona: "PUNO - CARABAYA - AJOYANI"
      }, {
        codigo: "210303",
        zona: "PUNO - CARABAYA - AYAPATA"
      }, {
        codigo: "210304",
        zona: "PUNO - CARABAYA - COASA"
      }, {
        codigo: "210305",
        zona: "PUNO - CARABAYA - CORANI"
      }, {
        codigo: "210306",
        zona: "PUNO - CARABAYA - CRUCERO"
      }, {
        codigo: "210307",
        zona: "PUNO - CARABAYA - ITUATA"
      }, {
        codigo: "210308",
        zona: "PUNO - CARABAYA - OLLACHEA"
      }, {
        codigo: "210309",
        zona: "PUNO - CARABAYA - SAN GABAN"
      }, {
        codigo: "210310",
        zona: "PUNO - CARABAYA - USICAYOS"
      }, {
        codigo: "210401",
        zona: "PUNO - CHUCUITO - JULI"
      }, {
        codigo: "210402",
        zona: "PUNO - CHUCUITO - DESAGUADERO"
      }, {
        codigo: "210403",
        zona: "PUNO - CHUCUITO - HUACULLANI"
      }, {
        codigo: "210404",
        zona: "PUNO - CHUCUITO - KELLUYO"
      }, {
        codigo: "210405",
        zona: "PUNO - CHUCUITO - PISACOMA"
      }, {
        codigo: "210406",
        zona: "PUNO - CHUCUITO - POMATA"
      }, {
        codigo: "210407",
        zona: "PUNO - CHUCUITO - ZEPITA"
      }, {
        codigo: "210501",
        zona: "PUNO - EL COLLAO - ILAVE"
      }, {
        codigo: "210502",
        zona: "PUNO - EL COLLAO - CAPAZO"
      }, {
        codigo: "210503",
        zona: "PUNO - EL COLLAO - PILCUYO"
      }, {
        codigo: "210504",
        zona: "PUNO - EL COLLAO - SANTA ROSA"
      }, {
        codigo: "210505",
        zona: "PUNO - EL COLLAO - CONDURIRI"
      }, {
        codigo: "210601",
        zona: "PUNO - HUANCANE - HUANCANE"
      }, {
        codigo: "210602",
        zona: "PUNO - HUANCANE - COJATA"
      }, {
        codigo: "210603",
        zona: "PUNO - HUANCANE - HUATASANI"
      }, {
        codigo: "210604",
        zona: "PUNO - HUANCANE - INCHUPALLA"
      }, {
        codigo: "210605",
        zona: "PUNO - HUANCANE - PUSI"
      }, {
        codigo: "210606",
        zona: "PUNO - HUANCANE - ROSASPATA"
      }, {
        codigo: "210607",
        zona: "PUNO - HUANCANE - TARACO"
      }, {
        codigo: "210608",
        zona: "PUNO - HUANCANE - VILQUE CHICO"
      }, {
        codigo: "210701",
        zona: "PUNO - LAMPA - LAMPA"
      }, {
        codigo: "210702",
        zona: "PUNO - LAMPA - CABANILLA"
      }, {
        codigo: "210703",
        zona: "PUNO - LAMPA - CALAPUJA"
      }, {
        codigo: "210704",
        zona: "PUNO - LAMPA - NICASIO"
      }, {
        codigo: "210705",
        zona: "PUNO - LAMPA - OCUVIRI"
      }, {
        codigo: "210706",
        zona: "PUNO - LAMPA - PALCA"
      }, {
        codigo: "210707",
        zona: "PUNO - LAMPA - PARATIA"
      }, {
        codigo: "210708",
        zona: "PUNO - LAMPA - PUCARA"
      }, {
        codigo: "210709",
        zona: "PUNO - LAMPA - SANTA LUCIA"
      }, {
        codigo: "210710",
        zona: "PUNO - LAMPA - VILAVILA"
      }, {
        codigo: "210801",
        zona: "PUNO - MELGAR - AYAVIRI"
      }, {
        codigo: "210802",
        zona: "PUNO - MELGAR - ANTAUTA"
      }, {
        codigo: "210803",
        zona: "PUNO - MELGAR - CUPI"
      }, {
        codigo: "210804",
        zona: "PUNO - MELGAR - LLALLI"
      }, {
        codigo: "210805",
        zona: "PUNO - MELGAR - MACARI"
      }, {
        codigo: "210806",
        zona: "PUNO - MELGAR - NUÑOA"
      }, {
        codigo: "210807",
        zona: "PUNO - MELGAR - ORURILLO"
      }, {
        codigo: "210808",
        zona: "PUNO - MELGAR - SANTA ROSA"
      }, {
        codigo: "210809",
        zona: "PUNO - MELGAR - UMACHIRI"
      }, {
        codigo: "210901",
        zona: "PUNO - MOHO - MOHO"
      }, {
        codigo: "210902",
        zona: "PUNO - MOHO - CONIMA"
      }, {
        codigo: "210903",
        zona: "PUNO - MOHO - HUAYRAPATA"
      }, {
        codigo: "210904",
        zona: "PUNO - MOHO - TILALI"
      }, {
        codigo: "211001",
        zona: "PUNO - SAN ANTONIO DE PUTINA - PUTINA"
      }, {
        codigo: "211002",
        zona: "PUNO - SAN ANTONIO DE PUTINA - ANANEA"
      }, {
        codigo: "211003",
        zona: "PUNO - SAN ANTONIO DE PUTINA - PEDRO VILCA APAZA"
      }, {
        codigo: "211004",
        zona: "PUNO - SAN ANTONIO DE PUTINA - QUILCAPUNCU"
      }, {
        codigo: "211005",
        zona: "PUNO - SAN ANTONIO DE PUTINA - SINA"
      }, {
        codigo: "211101",
        zona: "PUNO - SAN ROMAN - JULIACA"
      }, {
        codigo: "211102",
        zona: "PUNO - SAN ROMAN - CABANA"
      }, {
        codigo: "211103",
        zona: "PUNO - SAN ROMAN - CABANILLAS"
      }, {
        codigo: "211104",
        zona: "PUNO - SAN ROMAN - CARACOTO"
      }, {
        codigo: "211105",
        zona: "PUNO - SAN ROMAN - SAN MIGUEL"
      }, {
        codigo: "211201",
        zona: "PUNO - SANDIA - SANDIA"
      }, {
        codigo: "211202",
        zona: "PUNO - SANDIA - CUYOCUYO"
      }, {
        codigo: "211203",
        zona: "PUNO - SANDIA - LIMBANI"
      }, {
        codigo: "211204",
        zona: "PUNO - SANDIA - PATAMBUCO"
      }, {
        codigo: "211205",
        zona: "PUNO - SANDIA - PHARA"
      }, {
        codigo: "211206",
        zona: "PUNO - SANDIA - QUIACA"
      }, {
        codigo: "211207",
        zona: "PUNO - SANDIA - SAN JUAN DEL ORO"
      }, {
        codigo: "211208",
        zona: "PUNO - SANDIA - YANAHUAYA"
      }, {
        codigo: "211209",
        zona: "PUNO - SANDIA - ALTO INAMBARI"
      }, {
        codigo: "211210",
        zona: "PUNO - SANDIA - SAN PEDRO DE PUTINA PUNCO"
      }, {
        codigo: "211301",
        zona: "PUNO - YUNGUYO - YUNGUYO"
      }, {
        codigo: "211302",
        zona: "PUNO - YUNGUYO - ANAPIA"
      }, {
        codigo: "211303",
        zona: "PUNO - YUNGUYO - COPANI"
      }, {
        codigo: "211304",
        zona: "PUNO - YUNGUYO - CUTURAPI"
      }, {
        codigo: "211305",
        zona: "PUNO - YUNGUYO - OLLARAYA"
      }, {
        codigo: "211306",
        zona: "PUNO - YUNGUYO - TINICACHI"
      }, {
        codigo: "211307",
        zona: "PUNO - YUNGUYO - UNICACHI"
      }, {
        codigo: "220101",
        zona: "SAN MARTIN - MOYOBAMBA - MOYOBAMBA"
      }, {
        codigo: "220102",
        zona: "SAN MARTIN - MOYOBAMBA - CALZADA"
      }, {
        codigo: "220103",
        zona: "SAN MARTIN - MOYOBAMBA - HABANA"
      }, {
        codigo: "220104",
        zona: "SAN MARTIN - MOYOBAMBA - JEPELACIO"
      }, {
        codigo: "220105",
        zona: "SAN MARTIN - MOYOBAMBA - SORITOR"
      }, {
        codigo: "220106",
        zona: "SAN MARTIN - MOYOBAMBA - YANTALO"
      }, {
        codigo: "220201",
        zona: "SAN MARTIN - BELLAVISTA - BELLAVISTA"
      }, {
        codigo: "220202",
        zona: "SAN MARTIN - BELLAVISTA - ALTO BIAVO"
      }, {
        codigo: "220203",
        zona: "SAN MARTIN - BELLAVISTA - BAJO BIAVO"
      }, {
        codigo: "220204",
        zona: "SAN MARTIN - BELLAVISTA - HUALLAGA"
      }, {
        codigo: "220205",
        zona: "SAN MARTIN - BELLAVISTA - SAN PABLO"
      }, {
        codigo: "220206",
        zona: "SAN MARTIN - BELLAVISTA - SAN RAFAEL"
      }, {
        codigo: "220301",
        zona: "SAN MARTIN - EL DORADO - SAN JOSE DE SISA"
      }, {
        codigo: "220302",
        zona: "SAN MARTIN - EL DORADO - AGUA BLANCA"
      }, {
        codigo: "220303",
        zona: "SAN MARTIN - EL DORADO - SAN MARTIN"
      }, {
        codigo: "220304",
        zona: "SAN MARTIN - EL DORADO - SANTA ROSA"
      }, {
        codigo: "220305",
        zona: "SAN MARTIN - EL DORADO - SHATOJA"
      }, {
        codigo: "220401",
        zona: "SAN MARTIN - HUALLAGA - SAPOSOA"
      }, {
        codigo: "220402",
        zona: "SAN MARTIN - HUALLAGA - ALTO SAPOSOA"
      }, {
        codigo: "220403",
        zona: "SAN MARTIN - HUALLAGA - EL ESLABON"
      }, {
        codigo: "220404",
        zona: "SAN MARTIN - HUALLAGA - PISCOYACU"
      }, {
        codigo: "220405",
        zona: "SAN MARTIN - HUALLAGA - SACANCHE"
      }, {
        codigo: "220406",
        zona: "SAN MARTIN - HUALLAGA - TINGO DE SAPOSOA"
      }, {
        codigo: "220501",
        zona: "SAN MARTIN - LAMAS - LAMAS"
      }, {
        codigo: "220502",
        zona: "SAN MARTIN - LAMAS - ALONSO DE ALVARADO"
      }, {
        codigo: "220503",
        zona: "SAN MARTIN - LAMAS - BARRANQUITA"
      }, {
        codigo: "220504",
        zona: "SAN MARTIN - LAMAS - CAYNARACHI"
      }, {
        codigo: "220505",
        zona: "SAN MARTIN - LAMAS - CUÑUMBUQUI"
      }, {
        codigo: "220506",
        zona: "SAN MARTIN - LAMAS - PINTO RECODO"
      }, {
        codigo: "220507",
        zona: "SAN MARTIN - LAMAS - RUMISAPA"
      }, {
        codigo: "220508",
        zona: "SAN MARTIN - LAMAS - SAN ROQUE DE CUMBAZA"
      }, {
        codigo: "220509",
        zona: "SAN MARTIN - LAMAS - SHANAO"
      }, {
        codigo: "220510",
        zona: "SAN MARTIN - LAMAS - TABALOSOS"
      }, {
        codigo: "220511",
        zona: "SAN MARTIN - LAMAS - ZAPATERO"
      }, {
        codigo: "220601",
        zona: "SAN MARTIN - MARISCAL CACERES - JUANJUI"
      }, {
        codigo: "220602",
        zona: "SAN MARTIN - MARISCAL CACERES - CAMPANILLA"
      }, {
        codigo: "220603",
        zona: "SAN MARTIN - MARISCAL CACERES - HUICUNGO"
      }, {
        codigo: "220604",
        zona: "SAN MARTIN - MARISCAL CACERES - PACHIZA"
      }, {
        codigo: "220605",
        zona: "SAN MARTIN - MARISCAL CACERES - PAJARILLO"
      }, {
        codigo: "220701",
        zona: "SAN MARTIN - PICOTA - PICOTA"
      }, {
        codigo: "220702",
        zona: "SAN MARTIN - PICOTA - BUENOS AIRES"
      }, {
        codigo: "220703",
        zona: "SAN MARTIN - PICOTA - CASPISAPA"
      }, {
        codigo: "220704",
        zona: "SAN MARTIN - PICOTA - PILLUANA"
      }, {
        codigo: "220705",
        zona: "SAN MARTIN - PICOTA - PUCACACA"
      }, {
        codigo: "220706",
        zona: "SAN MARTIN - PICOTA - SAN CRISTOBAL"
      }, {
        codigo: "220707",
        zona: "SAN MARTIN - PICOTA - SAN HILARION"
      }, {
        codigo: "220708",
        zona: "SAN MARTIN - PICOTA - SHAMBOYACU"
      }, {
        codigo: "220709",
        zona: "SAN MARTIN - PICOTA - TINGO DE PONASA"
      }, {
        codigo: "220710",
        zona: "SAN MARTIN - PICOTA - TRES UNIDOS"
      }, {
        codigo: "220801",
        zona: "SAN MARTIN - RIOJA - RIOJA"
      }, {
        codigo: "220802",
        zona: "SAN MARTIN - RIOJA - AWAJUN"
      }, {
        codigo: "220803",
        zona: "SAN MARTIN - RIOJA - ELIAS SOPLIN VARGAS"
      }, {
        codigo: "220804",
        zona: "SAN MARTIN - RIOJA - NUEVA CAJAMARCA"
      }, {
        codigo: "220805",
        zona: "SAN MARTIN - RIOJA - PARDO MIGUEL"
      }, {
        codigo: "220806",
        zona: "SAN MARTIN - RIOJA - POSIC"
      }, {
        codigo: "220807",
        zona: "SAN MARTIN - RIOJA - SAN FERNANDO"
      }, {
        codigo: "220808",
        zona: "SAN MARTIN - RIOJA - YORONGOS"
      }, {
        codigo: "220809",
        zona: "SAN MARTIN - RIOJA - YURACYACU"
      }, {
        codigo: "220901",
        zona: "SAN MARTIN - SAN MARTIN - TARAPOTO"
      }, {
        codigo: "220902",
        zona: "SAN MARTIN - SAN MARTIN - ALBERTO LEVEAU"
      }, {
        codigo: "220903",
        zona: "SAN MARTIN - SAN MARTIN - CACATACHI"
      }, {
        codigo: "220904",
        zona: "SAN MARTIN - SAN MARTIN - CHAZUTA"
      }, {
        codigo: "220905",
        zona: "SAN MARTIN - SAN MARTIN - CHIPURANA"
      }, {
        codigo: "220906",
        zona: "SAN MARTIN - SAN MARTIN - EL PORVENIR"
      }, {
        codigo: "220907",
        zona: "SAN MARTIN - SAN MARTIN - HUIMBAYOC"
      }, {
        codigo: "220908",
        zona: "SAN MARTIN - SAN MARTIN - JUAN GUERRA"
      }, {
        codigo: "220909",
        zona: "SAN MARTIN - SAN MARTIN - LA BANDA DE SHILCAYO"
      }, {
        codigo: "220910",
        zona: "SAN MARTIN - SAN MARTIN - MORALES"
      }, {
        codigo: "220911",
        zona: "SAN MARTIN - SAN MARTIN - PAPAPLAYA"
      }, {
        codigo: "220912",
        zona: "SAN MARTIN - SAN MARTIN - SAN ANTONIO"
      }, {
        codigo: "220913",
        zona: "SAN MARTIN - SAN MARTIN - SAUCE"
      }, {
        codigo: "220914",
        zona: "SAN MARTIN - SAN MARTIN - SHAPAJA"
      }, {
        codigo: "221001",
        zona: "SAN MARTIN - TOCACHE - TOCACHE"
      }, {
        codigo: "221002",
        zona: "SAN MARTIN - TOCACHE - NUEVO PROGRESO"
      }, {
        codigo: "221003",
        zona: "SAN MARTIN - TOCACHE - POLVORA"
      }, {
        codigo: "221004",
        zona: "SAN MARTIN - TOCACHE - SHUNTE"
      }, {
        codigo: "221005",
        zona: "SAN MARTIN - TOCACHE - UCHIZA"
      }, {
        codigo: "230101",
        zona: "TACNA - TACNA - TACNA"
      }, {
        codigo: "230102",
        zona: "TACNA - TACNA - ALTO DE LA ALIANZA"
      }, {
        codigo: "230103",
        zona: "TACNA - TACNA - CALANA"
      }, {
        codigo: "230104",
        zona: "TACNA - TACNA - CIUDAD NUEVA"
      }, {
        codigo: "230105",
        zona: "TACNA - TACNA - INCLAN"
      }, {
        codigo: "230106",
        zona: "TACNA - TACNA - PACHIA"
      }, {
        codigo: "230107",
        zona: "TACNA - TACNA - PALCA"
      }, {
        codigo: "230108",
        zona: "TACNA - TACNA - POCOLLAY"
      }, {
        codigo: "230109",
        zona: "TACNA - TACNA - SAMA"
      }, {
        codigo: "230110",
        zona: "TACNA - TACNA - CORONEL GREGORIO ALBARRACIN LANCHIPA"
      }, {
        codigo: "230111",
        zona: "TACNA - TACNA - LA YARADA LOS PALOS"
      }, {
        codigo: "230201",
        zona: "TACNA - CANDARAVE - CANDARAVE"
      }, {
        codigo: "230202",
        zona: "TACNA - CANDARAVE - CAIRANI"
      }, {
        codigo: "230203",
        zona: "TACNA - CANDARAVE - CAMILACA"
      }, {
        codigo: "230204",
        zona: "TACNA - CANDARAVE - CURIBAYA"
      }, {
        codigo: "230205",
        zona: "TACNA - CANDARAVE - HUANUARA"
      }, {
        codigo: "230206",
        zona: "TACNA - CANDARAVE - QUILAHUANI"
      }, {
        codigo: "230301",
        zona: "TACNA - JORGE BASADRE - LOCUMBA"
      }, {
        codigo: "230302",
        zona: "TACNA - JORGE BASADRE - ILABAYA"
      }, {
        codigo: "230303",
        zona: "TACNA - JORGE BASADRE - ITE"
      }, {
        codigo: "230401",
        zona: "TACNA - TARATA - TARATA"
      }, {
        codigo: "230402",
        zona: "TACNA - TARATA - HEROES ALBARRACIN"
      }, {
        codigo: "230403",
        zona: "TACNA - TARATA - ESTIQUE"
      }, {
        codigo: "230404",
        zona: "TACNA - TARATA - ESTIQUE-PAMPA"
      }, {
        codigo: "230405",
        zona: "TACNA - TARATA - SITAJARA"
      }, {
        codigo: "230406",
        zona: "TACNA - TARATA - SUSAPAYA"
      }, {
        codigo: "230407",
        zona: "TACNA - TARATA - TARUCACHI"
      }, {
        codigo: "230408",
        zona: "TACNA - TARATA - TICACO"
      }, {
        codigo: "240101",
        zona: "TUMBES - TUMBES - TUMBES"
      }, {
        codigo: "240102",
        zona: "TUMBES - TUMBES - CORRALES"
      }, {
        codigo: "240103",
        zona: "TUMBES - TUMBES - LA CRUZ"
      }, {
        codigo: "240104",
        zona: "TUMBES - TUMBES - PAMPAS DE HOSPITAL"
      }, {
        codigo: "240105",
        zona: "TUMBES - TUMBES - SAN JACINTO"
      }, {
        codigo: "240106",
        zona: "TUMBES - TUMBES - SAN JUAN DE LA VIRGEN"
      }, {
        codigo: "240201",
        zona: "TUMBES - CONTRALMIRANTE VILLAR - ZORRITOS"
      }, {
        codigo: "240202",
        zona: "TUMBES - CONTRALMIRANTE VILLAR - CASITAS"
      }, {
        codigo: "240203",
        zona: "TUMBES - CONTRALMIRANTE VILLAR - CANOAS DE PUNTA SAL"
      }, {
        codigo: "240301",
        zona: "TUMBES - ZARUMILLA - ZARUMILLA"
      }, {
        codigo: "240302",
        zona: "TUMBES - ZARUMILLA - AGUAS VERDES"
      }, {
        codigo: "240303",
        zona: "TUMBES - ZARUMILLA - MATAPALO"
      }, {
        codigo: "240304",
        zona: "TUMBES - ZARUMILLA - PAPAYAL"
      }, {
        codigo: "250101",
        zona: "UCAYALI - CORONEL PORTILLO - CALLERIA"
      }, {
        codigo: "250102",
        zona: "UCAYALI - CORONEL PORTILLO - CAMPOVERDE"
      }, {
        codigo: "250103",
        zona: "UCAYALI - CORONEL PORTILLO - IPARIA"
      }, {
        codigo: "250104",
        zona: "UCAYALI - CORONEL PORTILLO - MASISEA"
      }, {
        codigo: "250105",
        zona: "UCAYALI - CORONEL PORTILLO - YARINACOCHA"
      }, {
        codigo: "250106",
        zona: "UCAYALI - CORONEL PORTILLO - NUEVA REQUENA"
      }, {
        codigo: "250107",
        zona: "UCAYALI - CORONEL PORTILLO - MANANTAY"
      }, {
        codigo: "250201",
        zona: "UCAYALI - ATALAYA - RAYMONDI"
      }, {
        codigo: "250202",
        zona: "UCAYALI - ATALAYA - SEPAHUA"
      }, {
        codigo: "250203",
        zona: "UCAYALI - ATALAYA - TAHUANIA"
      }, {
        codigo: "250204",
        zona: "UCAYALI - ATALAYA - YURUA"
      }, {
        codigo: "250301",
        zona: "UCAYALI - PADRE ABAD - PADRE ABAD"
      }, {
        codigo: "250302",
        zona: "UCAYALI - PADRE ABAD - IRAZOLA"
      }, {
        codigo: "250303",
        zona: "UCAYALI - PADRE ABAD - CURIMANA"
      }, {
        codigo: "250304",
        zona: "UCAYALI - PADRE ABAD - NESHUYA"
      }, {
        codigo: "250305",
        zona: "UCAYALI - PADRE ABAD - ALEXANDER VON HUMBOLDT"
      }, {
        codigo: "250401",
        zona: "UCAYALI - PURUS - PURUS"
      }]
    };
  },
  methods: {
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
    NuevoRecorrido: function NuevoRecorrido(prm_posicion) {
      var urecorrido = {
        "nroRec": this.ynro,
        "idRecorrido": 0,
        "nombreRec": "NUEVO RECORRIDO",
        "roundtripRec": "",
        "yrecorrido": [],
        "tramos": [],
        "gastos": [],
        "tramo": {
          "ytramo": {},
          "yhospedaje": "",
          "ycochera": "",
          "yviatico": ""
        },
        "gasto": {
          "ygasto": {},
          "ydetalle": "",
          "ytotal": "",
          "yaplicable": "TODOS"
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
        this.Toast(true, 'danger', 'Agregar Tramo', 'Seleccione un Peaje');
        return;
      }
      /*if(prm_tramo.yhospedaje == null || prm_tramo.yhospedaje == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Hospedaje');
          return;
      }
      if(prm_tramo.ycochera == null || prm_tramo.ycochera == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Operador');
          return;
      }
      if(prm_tramo.yecochera == null || prm_tramo.yecochera == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Escoltas');
          return;
      }
      if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
          return;
      }
      if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
          return;
      }
      if(prm_tramo.ydviatico == null || prm_tramo.ydviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Detalle del Gasto Adicional');
          return;
      }*/


      var utramo = {
        id: prm_tramo.ytramo.idTramo,
        punto: prm_tramo.ytramo.puntoTra,

        /*inicio: prm_tramo.ytramo.inicioTra,
        termino: prm_tramo.ytramo.terminoTra,
        /*hospedaje: prm_tramo.yhospedaje,
        cochera: prm_tramo.ycochera,
        ecochera: prm_tramo.yecochera,
        viatico: prm_tramo.yviatico,
        dviatico: prm_tramo.ydviatico,*/
        peaje: prm_tramo.ytramo.peajeTra,
        camioneta: prm_tramo.ytramo.camionetaTra
      }; //AGREGANDO EL TRAMO A LA LISTA

      this.recorridos_actuales[prm_posicion].tramos.push(utramo);
      this.recorridos_actuales[prm_posicion].tramo = {
        "ytramo": {}
        /*"yhospedaje": "", 
        "ycochera": "",
        "yecochera": "",
        "yviatico": "",
        "ydviatico": "",*/

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
    AgregarGasto: function AgregarGasto(prm_gasto, prm_posicion) {
      if (prm_gasto.ygasto == null || prm_gasto.ygasto == {} || Object.keys(prm_gasto.ygasto).length === 0) {
        this.Toast(true, 'danger', 'Agregar Gasto', 'Seleccione un Gasto');
        return;
      }

      if (prm_gasto.ytotal == "" || prm_gasto.ytotal <= 0) {
        this.Toast(true, 'danger', 'Agregar Gasto', 'Ingrese un Monto');
        return;
      }
      /*if(prm_tramo.yhospedaje == null || prm_tramo.yhospedaje == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Hospedaje');
          return;
      }
      if(prm_tramo.ycochera == null || prm_tramo.ycochera == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Operador');
          return;
      }
      if(prm_tramo.yecochera == null || prm_tramo.yecochera == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Cochera del Escoltas');
          return;
      }
      if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
          return;
      }
      if(prm_tramo.yviatico == null || prm_tramo.yviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Costo de Viático');
          return;
      }
      if(prm_tramo.ydviatico == null || prm_tramo.ydviatico == "")
      {
          this.Toast(true,'warning','Agregar Tramo','Ingrese el Detalle del Gasto Adicional');
          return;
      }*/


      var ugasto = {
        id: prm_gasto.ygasto.idDato,
        gasto: prm_gasto.ygasto.valorDat,
        detalle: prm_gasto.ydetalle,
        total: prm_gasto.ytotal,
        aplicable: prm_gasto.yaplicable
      }; //AGREGANDO EL TRAMO A LA LISTA

      this.recorridos_actuales[prm_posicion].gastos.push(ugasto);
      this.recorridos_actuales[prm_posicion].gasto = {
        "ygasto": {},
        "ydetalle": "",
        "ytotal": "",
        "yaplicable": "TODOS"
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
    EliminarGasto: function EliminarGasto(prm_pos, prm_indice) {
      //if(this.costos[prm_indice].corte == "1")
      //this.cortes[1].disabled = false;//se inhabilita el corte porque ya se ingreso uno
      //if(this.costos[prm_indice].corte == "2")
      //this.cortes[2].disabled = false;//se inhabilita el corte porque ya se ingreso uno
      this.recorridos_actuales[prm_pos].gastos.splice(prm_indice, 1);
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
    Nuevo: function Nuevo() {
      this.headerTextVariant = 'success';
      this.boton = false;
      this.headerTitleVariant = "NUEVA RUTA"; //Seteando los valores para el modal

      this.ruta = Object.assign({}, this.plantilla);
      this.recorridos_actuales = [];
      this.ynro = 0;
    },
    Editar: function Editar(prm_ruta) {
      this.headerTextVariant = 'primary';
      this.headerTitleVariant = "EDITAR RUTA";
      this.boton = true; //Seteando los valores para el modal

      this.ruta = Object.assign({}, prm_ruta);
      delete this.ruta.vgt_id;
      delete this.ruta.originalIndex;
      delete this.ruta.vgtSelected; //Agregando los parámetros de viáticos adicionales

      /*let ahospedajes = prm_ruta.hospedajesRut.split('-');
      let acocheras = prm_ruta.cocherasRut.split("-");
      let aecocheras = prm_ruta.ecocherasRut.split("-");
      let aviaticos = prm_ruta.viaticosRut.split("-");
      let adviaticos = prm_ruta.dviaticosRut.split("-");
      let atramos = prm_ruta.tramosRut.split("-");*/
      //let aroundtrips = prm_ruta.diasRut.split("-");
      //let aasignaciones = prm_ruta.asignacionesRut.split("-");

      var recorridos = [];
      var aroundtrips = prm_ruta.diasRut.split("-");
      var arecorridos = prm_ruta.recorridosRut.split("-");
      var precorridos = prm_ruta.precorridosRut.split("-");
      var vrecorridos = prm_ruta.vrecorridosRut.split("-");
      var apeajes = prm_ruta.peajesRut.split("-");
      var aviaticos = prm_ruta.viaticosRut.split("-");
      var adetalles = prm_ruta.detallesRut.split("-");
      var atotales = prm_ruta.totalesRut.split("-");
      var aaplicables = prm_ruta.aplicablesRut.split("-");

      for (var i = 0; i < arecorridos.length; i++) {
        var zrecorridos = this.recorridos.filter(function (urecorrido) {
          return urecorrido.idDato == arecorridos[i];
        });
        var zrecorrido = zrecorridos.length > 0 ? zrecorridos[0] : null;
        var urecorrido = {
          "nroRec": i + 1,
          "idRecorrido": arecorridos[i],
          "nombreRec": zrecorrido.valorDat,
          "roundtripRec": aroundtrips[i],
          "yrecorrido": zrecorrido,
          "tramos": [],
          "gastos": [],
          "tramo": {
            "ytramo": {},
            "yhospedaje": "",
            "ycochera": "",
            "yecochera": "",
            "yviatico": "",
            "ydviatico": ""
          },
          "gasto": {
            "ygasto": {},
            "ydetalle": "",
            "ytotal": "",
            "yaplicable": "TODOS"
          }
        };
        recorridos.push(urecorrido);
      }

      var acumulador = 0;

      for (var i = 0; i < precorridos.length; i++) {
        var cantidad = parseInt(precorridos[i]);

        for (var j = 0; j < cantidad; j++) {
          var k = acumulador + j;
          var ztramos = this.tramos.filter(function (utramo) {
            return utramo.idTramo == apeajes[k];
          });
          var ztramo = ztramos.length > 0 ? ztramos[0] : null;
          var utramo = {
            "id": ztramo.idTramo,
            "punto": ztramo.puntoTra,
            "peaje": ztramo.peajeTra,
            "camioneta": ztramo.camionetaTra
          };
          recorridos[i].tramos.push(utramo);
        }

        acumulador += cantidad;
      }

      var acumulador = 0;

      for (var i = 0; i < vrecorridos.length; i++) {
        var cantidad = parseInt(vrecorridos[i]);

        for (var j = 0; j < cantidad; j++) {
          var k = acumulador + j;
          var zviaticos = this.viaticos.filter(function (uviatico) {
            return uviatico.idDato == aviaticos[k];
          });
          var zviatico = zviaticos.length > 0 ? zviaticos[0] : null;
          var ugasto = {
            "id": zviatico.idDato,
            "gasto": zviatico.valorDat,
            "detalle": adetalles[k],
            "total": atotales[k],
            "aplicable": aaplicables[k]
          };
          recorridos[i].gastos.push(ugasto);
        }

        acumulador += cantidad;
      }

      this.recorridos_actuales = recorridos;
      /* RELLENANDO LOS V-SELECT */
      //cliente

      var encontrado = this.externos.filter(function (texterno) {
        return texterno.idExterno == this.ruta.Externo_idExterno;
      }, this);
      if (encontrado.length > 0) this.yexterno = encontrado[0];else this.yexterno = {}; //cuenta

      encontrado = this.cuentas.filter(function (tcuenta) {
        return tcuenta.idDato == this.ruta.Cuenta_idDato;
      }, this);
      if (encontrado.length > 0) this.ycuenta = encontrado[0];else this.ycuenta = {}; //grupo operativo

      encontrado = this.grupos.filter(function (tgrupo) {
        return tgrupo.idDato == this.ruta.Grupo_idDato;
      }, this);
      if (encontrado.length > 0) this.ygrupo = encontrado[0];else this.ygrupo = {}; //unidad Sunat

      encontrado = this.unidadesSunat.filter(function (tunidad) {
        return tunidad.codigo == this.ruta.unidadSunatRut;
      }, this);
      if (encontrado.length > 0) this.yunidad = encontrado[0];else this.yunidad = {}; //remitente

      encontrado = this.externos.filter(function (texterno) {
        return texterno.idExterno == this.ruta.Remitente_idExterno;
      }, this);
      if (encontrado.length > 0) this.yremitente = encontrado[0];else this.yremitente = {}; //destinatario

      encontrado = this.externos.filter(function (texterno) {
        return texterno.idExterno == this.ruta.Destinatario_idExterno;
      }, this);
      if (encontrado.length > 0) this.ydestinatario = encontrado[0];else this.ydestinatario = {}; //ubigeo partida

      encontrado = this.ubigeosSunat.filter(function (tubigeo) {
        return tubigeo.codigo == this.ruta.ubigeopSunatRut;
      }, this);
      if (encontrado.length > 0) this.yubigeop = encontrado[0];else this.yubigeop = {}; //ubigeo llegada

      encontrado = this.ubigeosSunat.filter(function (tubigeo) {
        return tubigeo.codigo == this.ruta.ubigeolSunatRut;
      }, this);
      if (encontrado.length > 0) this.yubigeol = encontrado[0];else this.yubigeol = {};
      /*if(encontrado.Grifo_idGrifo == 0)
      {
          this.ygrifo = {};
          this.abastecimientoc.Grifo_idGrifo = null;
      }
      else
      {
          this.ygrifo = encontrado[0];
      }*/
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
      var _this = this;

      this.showLoading = true;

      if (this.ruta.Externo_idExterno == null || this.ruta.Externo_idExterno == 0) {
        this.Toast(true, 'danger', 'Guardar Ruta', 'Seleccione un Cliente');
        return;
      } //buscando el nombre del externo


      var zidexterno = this.ruta.Externo_idExterno;
      var zexternos = this.externos.filter(function (uexterno) {
        return uexterno.idExterno == zidexterno;
      });
      var zexterno = zexternos.length > 0 ? zexternos[0] : null;
      this.ruta.nombreExt = zexterno.nombreExt; //this.ruta.roundtripRut = parseInt(this.ruta.roundtripcRut) + parseInt(this.ruta.roundtripeRut) + parseInt(this.ruta.roundtriprRut);

      var jsonRuta = JSON.stringify(this.ruta); //var jsonTramo = JSON.stringify(this.costos);

      var jsonRecorrido = JSON.stringify(this.recorridos_actuales);
      this.$http.post('/LiberAPP/Ruta/Guardar', {
        ruta: jsonRuta,
        //tramo: jsonTramo,
        recorrido: jsonRecorrido
      }).then(function (res) {
        _this.Toast(true, 'success', 'Agregar Ruta', 'Guardado Correctamente');

        _this.showModal = false;
        _this.showLoading = false;

        _this.Rutas();
      })["catch"](function (error) {
        _this.Toast(true, 'danger', 'Agregar Ruta', 'Error al guardar el registro: ' + error);

        _this.showLoading = false;
      });
    },
    Actualizar: function Actualizar() {
      var _this2 = this;

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
        _this2.Toast(true, 'primary', 'Actualizar Ruta', 'Actualizado Correctamente');

        _this2.showModal = false;
        _this2.showLoading = false;

        _this2.Rutas();
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Actualizar Ruta', 'Error al actualizar el registro: ' + error);

        _this2.showLoading = false;
      });
    },
    Rutas: function Rutas() {
      var _this3 = this;

      this.$http.get('/LiberAPP/Ruta').then(function (res) {
        _this3.rutas = res.data;
      })["catch"](function (error) {
        _this3.Toast(true, 'danger', 'Ruta', 'Error al cargar los registros: ' + error);

        _this3.showLoading = false;
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
      if (_store_index__WEBPACK_IMPORTED_MODULE_17__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this4 = this;

    this.$http.get('/LiberAPP/Ruta').then(function (res) {
      _this4.rutas = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Ruta', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Tramo/SelectViatico').then(function (res) {
      _this4.tramos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Tramo', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/TVEHICULO/TRANSPORTE').then(function (res) {
      _this4.tvehiculos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Tipo de Vehiculo', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/CARGA/TRANSPORTE').then(function (res) {
      _this4.cargas = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/RECORRIDO/TRANSPORTE').then(function (res) {
      _this4.recorridos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/UBICACION/TRANSPORTE').then(function (res) {
      _this4.ubicaciones = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Ubicacion', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Externo/Select').then(function (res) {
      _this4.externos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/VIATICO/PERSONAL').then(function (res) {
      _this4.viaticos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Gastos', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/GRUPO/TRANSPORTE').then(function (res) {
      _this4.grupos = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Cuentas', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(function (res) {
      _this4.cuentas = res.data;
    })["catch"](function (error) {
      _this4.Toast(true, 'danger', 'Cuentas', 'Error al cargar los registros: ' + error);

      _this4.showLoading = false;
    });
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ruta.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                          rawName: "v-b-modal.modal-formulario",
                          modifiers: { "modal-formulario": true }
                        }
                      ],
                      attrs: { variant: "success" },
                      on: { click: _vm.Nuevo }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        attrs: { icon: "PlusIcon" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle" }, [
                        _vm._v("Nueva Ruta")
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
                    _c("b-form-group", [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c("label", { staticClass: "mr-1" }, [
                            _vm._v("Buscar:")
                          ]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            staticClass: "d-inline-block",
                            attrs: {
                              placeholder: "Ingrese texto a buscar",
                              type: "text"
                            },
                            model: {
                              value: _vm.searchTerm,
                              callback: function($$v) {
                                _vm.searchTerm = $$v
                              },
                              expression: "searchTerm"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-good-table", {
            attrs: {
              columns: _vm.tcolumnas,
              rows: _vm.rutas,
              rtl: _vm.direction,
              "search-options": { enabled: true, externalQuery: _vm.searchTerm }
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function(props) {
                  return [
                    props.column.field === "acciones"
                      ? _c(
                          "span",
                          [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.modal-formulario",
                                    modifiers: { "modal-formulario": true }
                                  }
                                ],
                                staticClass: "btn-icon rounded-circle",
                                attrs: { variant: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.Editar(props.row)
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "Edit2Icon" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _c("span", [
                          _vm._v(
                            "\r\n                    " +
                              _vm._s(props.formattedRow[props.column.field]) +
                              "\r\n                "
                          )
                        ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              attrs: {
                id: "modal-formulario",
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
                              value: _vm.ruta.idRuta,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "idRuta", $$v)
                              },
                              expression: "ruta.idRuta"
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
                    { attrs: { md: "9", xl: "8" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Nombre" } },
                        [
                          _c("b-form-input", {
                            attrs: { readonly: "" },
                            model: {
                              value: _vm.ruta.nombreRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "nombreRut", $$v)
                              },
                              expression: "ruta.nombreRut"
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
                    { attrs: { md: "6", xl: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Cuenta" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "valorDat", options: _vm.cuentas },
                            on: {
                              input: function($event) {
                                _vm.ruta.Cuenta_idDato = _vm.ycuenta.idDato
                              }
                            },
                            model: {
                              value: _vm.ycuenta,
                              callback: function($$v) {
                                _vm.ycuenta = $$v
                              },
                              expression: "ycuenta"
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
                    { attrs: { md: "6", xl: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Grupo Operativo" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "valorDat", options: _vm.grupos },
                            on: {
                              input: function($event) {
                                _vm.ruta.Grupo_idDato = _vm.ygrupo.idDato
                              }
                            },
                            model: {
                              value: _vm.ygrupo,
                              callback: function($$v) {
                                _vm.ygrupo = $$v
                              },
                              expression: "ygrupo"
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
                "h5",
                { staticClass: "text-primary" },
                [
                  _c("feather-icon", { attrs: { icon: "TruckIcon" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Información del Servicio")])
                ],
                1
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "invoice-spacing primary" }),
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
                        { attrs: { label: "Cliente" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "nombreExt",
                              options: _vm.externos
                            },
                            on: {
                              input: function($event) {
                                _vm.ruta.Externo_idExterno =
                                  _vm.yexterno.idExterno
                              }
                            },
                            model: {
                              value: _vm.yexterno,
                              callback: function($$v) {
                                _vm.yexterno = $$v
                              },
                              expression: "yexterno"
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
                    { attrs: { md: "12", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Origen" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              reduce: function(ubicacion) {
                                return ubicacion.valorDat
                              },
                              options: _vm.ubicaciones
                            },
                            model: {
                              value: _vm.ruta.origenRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "origenRut", $$v)
                              },
                              expression: "ruta.origenRut"
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
                    { attrs: { md: "12", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Tramo Intermedio" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              reduce: function(ubicacion) {
                                return ubicacion.valorDat
                              },
                              options: _vm.ubicaciones
                            },
                            model: {
                              value: _vm.ruta.pasoRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "pasoRut", $$v)
                              },
                              expression: "ruta.pasoRut"
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
                    { attrs: { md: "12", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Destino" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              reduce: function(ubicacion) {
                                return ubicacion.valorDat
                              },
                              options: _vm.ubicaciones
                            },
                            model: {
                              value: _vm.ruta.destinoRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "destinoRut", $$v)
                              },
                              expression: "ruta.destinoRut"
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
                        { attrs: { label: "Tipo de Vehiculo" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              reduce: function(tvehiculo) {
                                return tvehiculo.valorDat
                              },
                              options: _vm.tvehiculos
                            },
                            model: {
                              value: _vm.ruta.vehiculoRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "vehiculoRut", $$v)
                              },
                              expression: "ruta.vehiculoRut"
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
                "h5",
                { staticClass: "text-primary" },
                [
                  _c("feather-icon", { attrs: { icon: "FileIcon" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Información de la Guia")])
                ],
                1
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "invoice-spacing primary" }),
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
                        { attrs: { label: "Tipo de Carga" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              reduce: function(carga) {
                                return carga.valorDat
                              },
                              options: _vm.cargas
                            },
                            model: {
                              value: _vm.ruta.cargaRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "cargaRut", $$v)
                              },
                              expression: "ruta.cargaRut"
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
                        { attrs: { label: "Unidad de Carga" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "unidad",
                              options: _vm.unidadesSunat
                            },
                            on: {
                              input: function($event) {
                                _vm.ruta.unidadSunatRut = _vm.yunidad.codigo
                              }
                            },
                            model: {
                              value: _vm.yunidad,
                              callback: function($$v) {
                                _vm.yunidad = $$v
                              },
                              expression: "yunidad"
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
                        { attrs: { label: "Serie" } },
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.ruta.serieRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "serieRut", $$v)
                              },
                              expression: "ruta.serieRut"
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
                        { attrs: { label: "Remitente" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "nombreExt",
                              options: _vm.externos
                            },
                            on: {
                              input: function($event) {
                                _vm.ruta.Remitente_idExterno =
                                  _vm.yremitente.idExterno
                              }
                            },
                            model: {
                              value: _vm.yremitente,
                              callback: function($$v) {
                                _vm.yremitente = $$v
                              },
                              expression: "yremitente"
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
                        { attrs: { label: "Destinatario" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "nombreExt",
                              options: _vm.externos
                            },
                            on: {
                              input: function($event) {
                                _vm.ruta.Destinatario_idExterno =
                                  _vm.ydestinatario.idExterno
                              }
                            },
                            model: {
                              value: _vm.ydestinatario,
                              callback: function($$v) {
                                _vm.ydestinatario = $$v
                              },
                              expression: "ydestinatario"
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
                        { attrs: { label: "Punto de Partida" } },
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.ruta.partidaRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "partidaRut", $$v)
                              },
                              expression: "ruta.partidaRut"
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
                        { attrs: { label: "Punto de Llegada" } },
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.ruta.llegadaRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "llegadaRut", $$v)
                              },
                              expression: "ruta.llegadaRut"
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
                        { attrs: { label: "Ubigeo de Partida" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "zona", options: _vm.ubigeosSunat },
                            on: {
                              input: function($event) {
                                _vm.ruta.ubigeopSunatRut = _vm.yubigeop.codigo
                              }
                            },
                            model: {
                              value: _vm.yubigeop,
                              callback: function($$v) {
                                _vm.yubigeop = $$v
                              },
                              expression: "yubigeop"
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
                        { attrs: { label: "Ubigeo de Llegada" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "zona", options: _vm.ubigeosSunat },
                            on: {
                              input: function($event) {
                                _vm.ruta.ubigeolSunatRut = _vm.yubigeol.codigo
                              }
                            },
                            model: {
                              value: _vm.yubigeol,
                              callback: function($$v) {
                                _vm.yubigeol = $$v
                              },
                              expression: "yubigeol"
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
                "h5",
                { staticClass: "text-primary" },
                [
                  _c("feather-icon", { attrs: { icon: "UsersIcon" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Información de Gestión")])
                ],
                1
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "invoice-spacing primary" }),
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
                        { attrs: { label: "Roundtrip Ideal" } },
                        [
                          _c("b-form-input", {
                            attrs: { readonly: "" },
                            model: {
                              value: _vm.ruta.roundtripRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "roundtripRut", $$v)
                              },
                              expression: "ruta.roundtripRut"
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
                        { attrs: { label: "Costo de Alimentación Diaria" } },
                        [
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              raw: false,
                              options: {
                                numeral: true,
                                numeralThousandsGroupStyle: "none"
                              }
                            },
                            model: {
                              value: _vm.ruta.alimentacionRut,
                              callback: function($$v) {
                                _vm.$set(_vm.ruta, "alimentacionRut", $$v)
                              },
                              expression: "ruta.alimentacionRut"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { md: "12", xl: "12" } }, [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(
                        "* La alimentación se calcula en base al Roundtrip ingresado en cada Recorrido."
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { md: "9", xl: "9" } }, [
                    _c("h4", [_vm._v("Gestión de Viáticos por Recorridos")])
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
                    { attrs: { md: "12", xl: "12" } },
                    [
                      _c(
                        "app-timeline",
                        [
                          _c(
                            "app-timeline-item",
                            { attrs: { variant: "success" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                                },
                                [
                                  _c("h6", { staticClass: "text-success" }, [
                                    _vm._v("INICIO DE RUTA")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Gestione los Recorridos dentro de la Ruta"
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-sm-row flex-column justify-content-between align-items-start"
                                },
                                [
                                  _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-bold mb-50" },
                                      [_vm._v("Nuevo Recorrido")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass:
                                              "btn-icon rounded-circle btn-sm",
                                            attrs: { variant: "info" },
                                            on: {
                                              click: function($event) {
                                                return _vm.NuevoRecorrido(-1)
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              attrs: { icon: "ArrowDownIcon" }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.recorridos_actuales, function(
                            urecorrido,
                            pos
                          ) {
                            return _c(
                              "app-timeline-item",
                              {
                                key: urecorrido.nroRec,
                                attrs: {
                                  variant: "primary",
                                  icon: "TrendingUpIcon"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                                  },
                                  [
                                    _c("h6", { staticClass: "text-primary" }, [
                                      _vm._v(_vm._s(urecorrido.nombreRec))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    { staticClass: "text-bold mb-50 d-block" },
                                    [_vm._v("Detalle Recorrido")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c("v-select", {
                                        staticClass: "input-sm",
                                        staticStyle: { flex: "1" },
                                        attrs: {
                                          label: "valorDat",
                                          options: _vm.recorridos
                                        },
                                        on: {
                                          input: function($event) {
                                            urecorrido.idRecorrido =
                                              urecorrido.yrecorrido.idDato
                                            urecorrido.nombreRec =
                                              urecorrido.yrecorrido.valorDat
                                          }
                                        },
                                        model: {
                                          value: urecorrido.yrecorrido,
                                          callback: function($$v) {
                                            _vm.$set(
                                              urecorrido,
                                              "yrecorrido",
                                              $$v
                                            )
                                          },
                                          expression: "urecorrido.yrecorrido"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex flex-sm-row flex-column justify-content-between align-items-start"
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "text-bold mb-50 d-block"
                                        },
                                        [_vm._v("RoundTrip")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c("cleave", {
                                            staticClass:
                                              "form-control form-control-sm",
                                            attrs: {
                                              raw: false,
                                              options: {
                                                numeral: true,
                                                numeralThousandsGroupStyle:
                                                  "none"
                                              },
                                              size: "sm"
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.Roundtrip()
                                              }
                                            },
                                            model: {
                                              value: urecorrido.roundtripRec,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  urecorrido,
                                                  "roundtripRec",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "urecorrido.roundtripRec"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-bold mb-50" },
                                        [_vm._v("Nuevo Recorrido")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass:
                                                "btn-icon rounded-circle btn-sm",
                                              attrs: { variant: "info" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.NuevoRecorrido(pos)
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: { icon: "ArrowDownIcon" }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mb-1 mb-sm-0" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-bold mb-50" },
                                        [_vm._v("Eliminar")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass:
                                                "btn-icon rounded-circle btn-sm",
                                              attrs: { variant: "danger" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.EliminarRecorrido(
                                                    pos
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: { icon: "XIcon" }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ]
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
                                          "table",
                                          {
                                            staticClass:
                                              "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                          },
                                          [
                                            _c(
                                              "thead",
                                              { staticClass: "thead-dark" },
                                              [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "5" } },
                                                    [_vm._v("PEAJES")]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("th", [_vm._v("NRO")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { width: "30%" } },
                                                    [_vm._v("PEAJE")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("th", [
                                                    _vm._v("PEAJE X EJE")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("th", [
                                                    _vm._v("PEAJE LIVIANA")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("th", [_vm._v("ACCIONES")])
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              [
                                                _vm._l(
                                                  urecorrido.tramos,
                                                  function(utramo, indice) {
                                                    return _c("tr", [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(indice + 1)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(utramo.punto)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(utramo.peaje)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            utramo.camioneta
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-icon rounded-circle btn-sm",
                                                              attrs: {
                                                                variant:
                                                                  "flat-danger"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.EliminarTramo(
                                                                    pos,
                                                                    indice
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "TrashIcon"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ])
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("v-select", {
                                                        staticStyle: {
                                                          flex: "1"
                                                        },
                                                        attrs: {
                                                          label: "puntoTra",
                                                          options: _vm.tramos
                                                        },
                                                        model: {
                                                          value:
                                                            urecorrido.tramo
                                                              .ytramo,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              urecorrido.tramo,
                                                              "ytramo",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "urecorrido.tramo.ytramo"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("td"),
                                                  _vm._v(" "),
                                                  _c("td"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c(
                                                        "b-button",
                                                        {
                                                          staticClass:
                                                            "btn-icon rounded-circle btn-sm",
                                                          attrs: {
                                                            variant:
                                                              "flat-success"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.AgregarTramo(
                                                                urecorrido.tramo,
                                                                pos
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("feather-icon", {
                                                            attrs: {
                                                              icon: "CheckIcon"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ])
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { md: "12", xl: "6" } },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass:
                                              "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                          },
                                          [
                                            _c(
                                              "thead",
                                              { staticClass: "thead-dark" },
                                              [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { colspan: "6" } },
                                                    [_vm._v("GASTOS DE VIAJE")]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("th", [_vm._v("NRO")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { width: "30%" } },
                                                    [_vm._v("TIPO")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("th", [_vm._v("DETALLE")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { width: "10%" } },
                                                    [_vm._v("TOTAL")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("th", [
                                                    _vm._v("APLICABLE A")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("th", [_vm._v("ACCIONES")])
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              [
                                                _vm._l(
                                                  urecorrido.gastos,
                                                  function(ugasto, indice) {
                                                    return _c("tr", [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(indice + 1)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(ugasto.gasto)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(ugasto.detalle)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(ugasto.total)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            ugasto.aplicable
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-icon rounded-circle btn-sm",
                                                              attrs: {
                                                                variant:
                                                                  "flat-danger"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.EliminarGasto(
                                                                    pos,
                                                                    indice
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon:
                                                                      "TrashIcon"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ])
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("v-select", {
                                                        staticStyle: {
                                                          flex: "1"
                                                        },
                                                        attrs: {
                                                          label: "valorDat",
                                                          options: _vm.viaticos
                                                        },
                                                        model: {
                                                          value:
                                                            urecorrido.gasto
                                                              .ygasto,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              urecorrido.gasto,
                                                              "ygasto",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "urecorrido.gasto.ygasto"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: { size: "sm" },
                                                        model: {
                                                          value:
                                                            urecorrido.gasto
                                                              .ydetalle,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              urecorrido.gasto,
                                                              "ydetalle",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "urecorrido.gasto.ydetalle"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("cleave", {
                                                        staticClass:
                                                          "form-control form-control-sm",
                                                        attrs: {
                                                          raw: false,
                                                          options: {
                                                            numeral: true,
                                                            numeralThousandsGroupStyle:
                                                              "none"
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            urecorrido.gasto
                                                              .ytotal,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              urecorrido.gasto,
                                                              "ytotal",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "urecorrido.gasto.ytotal"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      urecorrido.gasto
                                                        .yaplicable == "TODOS"
                                                        ? _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-sm",
                                                              attrs: {
                                                                variant: "info"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  urecorrido.gasto.yaplicable =
                                                                    "OPERADOR"
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                " OPER + SUP "
                                                              )
                                                            ]
                                                          )
                                                        : urecorrido.gasto
                                                            .yaplicable ==
                                                          "OPERADOR"
                                                        ? _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-sm",
                                                              attrs: {
                                                                variant:
                                                                  "success"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  urecorrido.gasto.yaplicable =
                                                                    "SUPERVISOR"
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("OPERADOR")]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      urecorrido.gasto
                                                        .yaplicable ==
                                                      "SUPERVISOR"
                                                        ? _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-sm",
                                                              attrs: {
                                                                variant:
                                                                  "warning"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  urecorrido.gasto.yaplicable =
                                                                    "TODOS"
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "SUPERVISOR"
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c(
                                                        "b-button",
                                                        {
                                                          staticClass:
                                                            "btn-icon rounded-circle btn-sm",
                                                          attrs: {
                                                            variant:
                                                              "flat-success"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.AgregarGasto(
                                                                urecorrido.gasto,
                                                                pos
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("feather-icon", {
                                                            attrs: {
                                                              icon: "CheckIcon"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ])
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("hr")
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "app-timeline-item",
                            { attrs: { variant: "danger" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                                },
                                [
                                  _c("h6", { staticClass: "text-danger" }, [
                                    _vm._v("FIN DE RUTA")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Fin de la Ruta")])
                            ]
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._v(" "),
              _c("b-overlay", {
                attrs: { show: _vm.showLoading, "no-wrap": "" }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/views/Transporte/Maestro/Ruta.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Maestro/Ruta.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ruta.vue?vue&type=template&id=5641d429& */ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429&");
/* harmony import */ var _Ruta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ruta.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ruta.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ruta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Transporte/Maestro/Ruta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ruta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ruta.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ruta.vue?vue&type=template&id=5641d429& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Maestro/Ruta.vue?vue&type=template&id=5641d429&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ruta_vue_vue_type_template_id_5641d429___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);