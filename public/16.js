(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
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
    accordion: {
      type: Boolean,
      "default": false
    },
    hover: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'default'
    }
  },
  data: function data() {
    return {
      collapseID: ''
    };
  },
  computed: {
    collapseClasses: function collapseClasses() {
      var classes = []; // Collapse Type

      var collapseVariants = {
        "default": 'collapse-default',
        border: 'collapse-border',
        shadow: 'collapse-shadow',
        margin: 'collapse-margin'
      };
      classes.push(collapseVariants[this.type]);
      return classes;
    }
  },
  created: function created() {
    this.collapseID = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  props: {
    isVisible: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      required: true
    },
    tcolor: {
      type: String,
      required: false
    },
    bcolor: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      visible: false,
      collapseItemID: '',
      openOnHover: this.$parent.hover
    };
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion ? "accordion-".concat(this.$parent.collapseID) : null;
    }
  },
  created: function created() {
    this.collapseItemID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    this.visible = this.isVisible;
  },
  methods: {
    updateVisible: function updateVisible() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.visible = val;
      this.$emit('visible', val);
    },
    collapseOpen: function collapseOpen() {
      if (this.openOnHover) this.updateVisible(true);
    },
    collapseClose: function collapseClose() {
      if (this.openOnHover) this.updateVisible(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");




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
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BToast"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_12__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BImg"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BSpinner"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BButton"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BButtonGroup"],
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_20__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BPagination"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BCard"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BCardText"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_18___default.a
  }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BFormCheckbox"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BCardBody", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BCardBody"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "FormWizard", vue_form_wizard__WEBPACK_IMPORTED_MODULE_13__["FormWizard"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "TabContent", vue_form_wizard__WEBPACK_IMPORTED_MODULE_13__["TabContent"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BInputGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BInputGroup"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BInputGroupPrepend", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BInputGroupPrepend"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "Cleave", vue_cleave_component__WEBPACK_IMPORTED_MODULE_22___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "AppTimeline", _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_16__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "AppTimelineItem", _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_17__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BCollapse", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BCollapse"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BTabs", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BTabs"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "BTab", bootstrap_vue__WEBPACK_IMPORTED_MODULE_15__["BTab"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "AppCollapseItem", _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_25__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_components, "AppCollapse", _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_24__["default"]), _components),
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  data: function data() {
    return {
      /**************************** elementos de ux ****************************/
      dir: false,
      pageLength: 20,
      searchTerm: '',
      tabIndex: 1,

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
      //Modal materiales 
      headerBgVariantM: 'dark',
      headerTextVariantM: 'success',
      headerTitleVariantM: 'AGREGAR MATERIAL',
      bodyBgVariantM: 'light',
      bodyTextVariantM: 'success',
      footerBgVariantM: 'dark',
      footerTextVariantM: 'dark',
      showModalM: false,

      /**************************** entorno ****************************/
      yentidad: {},
      yarea: {},
      zentidades: [],
      zareas: [],
      zcuentas: [],
      arr_plantillas: [],
      grupo_implemento: [],
      resultado: [],
      faqSearchQuery: '',
      SearchHomologacion: '',

      /**************************** formulario ****************************/
      plantilla: {
        idPlantilla: 0,
        nombrePla: "",
        Area_idArea: 0,
        Cuenta_idDato: 0,
        Entidad_idDato: 0
      },
      validarPor: [{
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
      seleccionados: [],
      editar_distribucion: [],
      obj_distribucion: {
        Plantilla_idPlantilla: 0,
        Implemento_idImplemento: 0,
        validacionDis: "",
        alertaDis: ""
      },
      clicked: false,
      titulos: [],
      registros: [],
      grupo_homologacion: [],
      materiales: [],
      distribucion: {
        idDistribucion: 0,
        nombreImp: "",
        Implemento_idImplemento: 0,
        Plantilla_idPlantilla: 0,
        materialesDis: "",
        cantidadesDis: "",
        materiales: []
      },
      narea: "",
      idArea: 0,
      nentidad: "",
      idEntidad: 0,
      mostrar: true
    };
  },
  watch: {
    faqSearchQuery: {
      immediate: true,
      handler: function handler() {
        this.fetchData();
      }
    },
    SearchHomologacion: {
      immediate: true,
      handler: function handler() {
        this.fetchHomologacion();
      }
    }
  },
  methods: {
    fetchData: function fetchData() {
      var _q = {
        q: this.faqSearchQuery
      },
          _q$q = _q.q,
          q = _q$q === void 0 ? '' : _q$q;
      var queryLowered = q.toLowerCase();
      var filteredData = {};
      Object.entries(this.grupo_implemento).forEach(function (entry) {
        var _entry = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(entry, 2),
            categoryName = _entry[0],
            categoryObj = _entry[1]; // eslint-disable-next-line arrow-body-style


        var filteredQAndAOfCategory = categoryObj.implementos.filter(function (qAndAObj) {
          return qAndAObj.nombreImp.toLowerCase().includes(queryLowered);
        });

        if (filteredQAndAOfCategory.length) {
          filteredData[categoryName] = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, categoryObj), {}, {
            implementos: filteredQAndAOfCategory
          });
        }
      });
      this.resultado = filteredData;
    },
    fetchHomologacion: function fetchHomologacion() {
      var _q2 = {
        q: this.SearchHomologacion
      },
          _q2$q = _q2.q,
          q = _q2$q === void 0 ? '' : _q2$q;
      var queryLowered = q.toLowerCase();
      var filteredData = {};
      Object.entries(this.grupo_homologacion).forEach(function (entry) {
        var _entry2 = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(entry, 2),
            categoryName = _entry2[0],
            categoryObj = _entry2[1]; // eslint-disable-next-line arrow-body-style


        var filteredQAndAOfCategory = categoryObj.ent.filter(function (qAndAObj) {
          return qAndAObj.nom.toLowerCase().includes(queryLowered);
        });

        if (filteredQAndAOfCategory.length) {
          filteredData[categoryName] = Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, categoryObj), {}, {
            ent: filteredQAndAOfCategory
          });
        }
      });
      this.registros = filteredData;
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

      this.narea = this.yarea.nombreAre;
      this.idArea = this.yarea.idArea;
      this.nentidad = this.yentidad.valorDat;
      this.idEntidad = this.yentidad.idDato;
      this.$http.get('/LiberAPP/Plantilla/Listar/' + this.idEntidad + '/' + this.idArea).then(function (res) {
        //this.$http.get('/LiberAPP/Plantilla/Listar/286/3').then(res => {
        _this.arr_plantillas = res.data;
        _this.resultado = [];
        _this.grupo_implemento = [];
        _this.seleccionados = [];
        _this.plantilla.idPlantilla = 0;
        _this.nombrePla = "";
        _this.Area_idArea = 0;
        _this.Cuenta_idDato = 0;
        _this.Entidad_idDato = 0;
      })["catch"](function (error) {
        _this.Toast(true, 'danger', 'Plantilla', 'Error al cargar los registros: ' + error);

        _this.showLoading = false;
      });
    },
    ListarImplementos: function ListarImplementos(prm_plantilla) {
      var _this2 = this;

      this.showLoading = true;
      this.clicked = true;
      prm_plantilla.clicked = true;

      for (var i = 0; i < this.arr_plantillas.length; i++) {
        if (this.arr_plantillas[i].idPlantilla !== prm_plantilla.idPlantilla) {
          this.arr_plantillas[i].clicked = false;
        }
      }

      this.plantilla.idPlantilla = prm_plantilla.idPlantilla;
      this.plantilla.nombrePla = prm_plantilla.nombrePla;
      this.$http.get('/LiberAPP/Plantilla/Listar/Implemento/' + this.yentidad.idDato + '/' + this.yarea.idArea + '/' + this.plantilla.idPlantilla).then(function (res) {
        _this2.grupo_implemento = res.data;
        _this2.resultado = res.data;
        _this2.seleccionados = [];
        _this2.showLoading = false;
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Plantilla', 'Error al cargar los registros: ' + error);
      }); //Listar Entidades 

      this.$http.get('/LiberAPP/Homologacion/Listar/' + this.yentidad.idDato + '/' + this.yarea.idArea + '/' + prm_plantilla.idPlantilla).then(function (res) {
        _this2.grupo_homologacion = res.data.registros;
        _this2.registros = res.data.registros;
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Asignación', 'Error al cargar los registros: ' + error);

        _this2.showLoading = false;
      });
    },
    Seleccion: function Seleccion(prm_implemento, prm_idPlantilla) {
      var _this3 = this;

      for (var i = 0; i < this.seleccionados.length; i++) {
        if (this.seleccionados[i].idImplemento == prm_implemento.idImplemento) {
          this.seleccionados.splice(i, 1);
          break;
        }
      }

      if (prm_implemento.sel == false) {
        var jsonDistribucion = JSON.stringify(prm_implemento.idDistribucion);
        this.$http.post('/LiberAPP/Distribucion/Desactivar', {
          idDistribucion: jsonDistribucion
        }).then(function (res) {
          _this3.Toast(true, 'success', 'Eliminar Implemento', 'Eliminado Correctamente');

          _this3.ListarImplementos(prm_idPlantilla); //ListarImplementoMateriales();

        })["catch"](function (error) {
          _this3.Toast(true, 'danger', 'Eliminar Implemento', 'Error al eliminar registro: ' + error);
        });
      }

      if (prm_implemento.sel == true) {
        prm_implemento.idPlantilla = prm_idPlantilla.idPlantilla;
        var jsonDistribucion = JSON.stringify(prm_implemento); //var jsonDistribucion = JSON.stringify( this.seleccionados )

        this.$http.post('/LiberAPP/Distribucion/Guardar', {
          distribucion: jsonDistribucion
        }).then(function (res) {
          /*this.Toast(true,'success','Agregar Implemento Agregado','Guardado Correctamente');
          this.ListarImplementos(prm_idPlantilla);*/
          //ListarImplementoMateriales();
        })["catch"](function (error) {
          _this3.Toast(true, 'danger', 'Agregar Implemento', 'Error al guardar el registro: ' + error);
        });
      }

      if (prm_implemento.sel) {
        prm_implemento.idPlantilla = prm_idPlantilla.idPlantilla;
        this.seleccionados.push(prm_implemento);
      }
    },
    SeleccionHomologacion: function SeleccionHomologacion(prm_implemento, prm_plantilla) {
      var _this4 = this;

      if (prm_implemento.sel == true) {
        var uhomologacion = {
          Entidad_idEntidad: prm_implemento.id,
          Plantilla_idPlantilla: prm_plantilla.idPlantilla
        };
        var jsonHomologacion = JSON.stringify(uhomologacion);
        this.$http.post('/LiberAPP/Homologacion/Guardar', {
          homologacion: jsonHomologacion
        }).then(function (res) {
          /*this.Toast(true,'success','Agregar Homologacion','Guardado Correctamente');
          this.ListarHomologacion( prm_plantilla );*/
        })["catch"](function (error) {
          _this4.Toast(true, 'danger', 'Agregar Homologacion', 'Error al guardar el registro: ' + error);
        });
      }

      if (prm_implemento.sel == false) {
        var jsonHomologacion = JSON.stringify(prm_implemento.idHomologacion);
        this.$http.post('/LiberAPP/Homologacion/Desactivar', {
          idHomologacion: jsonHomologacion
        }).then(function (res) {
          _this4.Toast(true, 'success', 'Eliminar Homologacion', 'Eliminado Correctamente');

          _this4.ListarHomologacion(prm_plantilla);
        })["catch"](function (error) {
          _this4.Toast(true, 'danger', 'Eliminar Homologacion', 'Error al eliminar registro: ' + error);
        });
      }
    },
    Nuevo: function Nuevo(prm_entidad, prm_area) {
      this.plantilla.Entidad_idDato = prm_entidad.idDato;
      this.plantilla.Area_idArea = prm_area.idArea;
      this.headerTextVariant = 'success';
      this.boton = false;
      this.headerTitleVariant = "NUEVA PLANTILLA";
    },
    Editar: function Editar(prm_implemento) {
      for (var i = 0; i < this.editar_distribucion.length; i++) {
        if (this.editar_distribucion[i].Implemento_idImplemento == prm_implemento.Implemento_idImplemento) {
          this.editar_distribucion.splice(i, 1);
          break;
        }
      }

      if (prm_implemento) {
        this.editar_distribucion.push(prm_implemento);
      }
    },
    EditarMaterial: function EditarMaterial(prm_implemento) {
      var _this5 = this;

      this.distribucion.idDistribucion = prm_implemento.idDistribucion;
      this.distribucion.nombreImp = prm_implemento.nombreImp;
      this.distribucion.Implemento_idImplemento = prm_implemento.Implemento_idImplemento;
      this.distribucion.Plantilla_idPlantilla = prm_implemento.Plantilla_idPlantilla;

      if (prm_implemento.materialesDis !== null) {
        var j;
        var zmateriales;
        var zmaterial;
        var umateriales;

        (function () {
          var materiales = prm_implemento.materialesDis.split("-");
          var cantidades = prm_implemento.cantidadesDis.split("-");

          for (j = 0; j < materiales.length; j++) {
            zmateriales = _this5.materiales.filter(function (material) {
              return material.idMaterial == materiales[j];
            });
            zmaterial = zmateriales.length > 0 ? zmateriales[0] : null;
            umateriales = {
              "materialesDis": zmaterial.idMaterial,
              "descripcionDis": zmaterial.nombreMat,
              "cantidadesDis": cantidades[j]
            };

            _this5.distribucion.materiales.push(umateriales);
          }
        })();
      } else {
        this.distribucion.materiales = [];
      }
    },
    AgregarMateriales: function AgregarMateriales(prm_distribucion) {
      if (prm_distribucion.materialesDis.idMaterial == null || prm_distribucion.materialesDis.idMaterial == "") {
        this.Toast(true, 'danger', 'Material', 'Ingrese un Material');
        return;
      }

      if (prm_distribucion.cantidadesDis == null || prm_distribucion.cantidadesDis == "") {
        this.Toast(true, 'danger', 'Cantidad', 'Ingrese una Cantidad');
        return;
      }

      var umaterial = {
        materialesDis: prm_distribucion.materialesDis.idMaterial,
        descripcionDis: prm_distribucion.materialesDis.nombreMat,
        cantidadesDis: prm_distribucion.cantidadesDis
      };
      this.distribucion.materiales.push(umaterial);
      this.distribucion.materialesDis = "", this.distribucion.cantidadesDis = ""; //console.log("distribucion:: ", this.distribucion )
    },
    EliminarMateriales: function EliminarMateriales(prm_indice) {
      this.distribucion.materiales.splice(prm_indice, 1);
    },
    GuardarMateriales: function GuardarMateriales() {
      var _this6 = this;

      this.showLoading = true;
      var jsonMateriales = JSON.stringify(this.distribucion);
      this.$http.post('/LiberAPP/Distribucion/ActualizarMaterial', {
        materiales: jsonMateriales
      }).then(function (res) {
        _this6.Toast(true, 'primary', 'Actualizar Materiales', 'Actualizado Correctamente');

        _this6.showModalM = false;
        _this6.showLoading = false;
        _this6.distribucion.materiales = [];

        _this6.ListarImplementoMateriales();
      })["catch"](function (error) {
        _this6.Toast(true, 'danger', 'Actualizar Materiales', 'Error al actualizar el registro: ' + error);

        _this6.showLoading = false;
      });
    },
    GuardarPlantilla: function GuardarPlantilla() {
      var _this7 = this;

      this.showLoading = true;
      var jsonPlantilla = JSON.stringify(this.plantilla);
      this.$http.post('/LiberAPP/Plantilla/Guardar', {
        plantilla: jsonPlantilla
      }).then(function (res) {
        _this7.Toast(true, 'success', 'Agregar Plantilla', 'Guardado Correctamente');

        _this7.showModal = false;
        _this7.showLoading = false;

        _this7.Listar();
      })["catch"](function (error) {
        _this7.Toast(true, 'danger', 'Agregar Plantilla', 'Error al guardar el registro: ' + error);

        _this7.showLoading = false;
      });
    },
    ActualizarDistribucion: function ActualizarDistribucion() {
      var _this8 = this;

      var jsonDistribucion = JSON.stringify(this.editar_distribucion);
      this.$http.post('/LiberAPP/Distribucion/Actualizar', {
        distribucion: jsonDistribucion
      }).then(function (res) {
        _this8.Toast(true, 'success', 'Actualizar Distribucion', 'Actualizado Correctamente');
      })["catch"](function (error) {
        _this8.Toast(true, 'danger', 'Actualizar Distribucion', 'Error al Actualizar registro: ' + error);
      });
    },
    ListarHomologacion: function ListarHomologacion(prm_plantilla) {
      var _this9 = this;

      this.$http.get('/LiberAPP/Homologacion/Listar/' + this.yentidad.idDato + '/' + this.yarea.idArea + '/' + prm_plantilla.idPlantilla).then(function (res) {
        _this9.grupo_homologacion = res.data.registros;
        _this9.registros = res.data.registros;
      })["catch"](function (error) {
        _this9.Toast(true, 'danger', 'Asignación', 'Error al cargar los registros: ' + error);

        _this9.showLoading = false;
      });
    },
    ListarImplementoMateriales: function ListarImplementoMateriales() {
      var _this10 = this;

      this.$http.get('/LiberAPP/Plantilla/Listar/Implemento/' + this.yentidad.idDato + '/' + this.yarea.idArea + '/' + this.plantilla.idPlantilla).then(function (res) {
        _this10.grupo_implemento = res.data;
        _this10.resultado = res.data;
        _this10.seleccionados = [];
      })["catch"](function (error) {
        _this10.Toast(true, 'danger', 'Plantilla', 'Error al cargar los registros: ' + error);
      });
    }
  },
  computed: {
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_21__["default"].state.appConfig.isRTL) {
        this.dir = true;
        return this.dir;
      }

      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this11 = this;

    this.yentidad = {
      idDato: this.vista_entidad,
      valorDat: this.vista_nentidad
    };
    this.yarea = {
      idArea: this.vista_area,
      nombreAre: this.vista_narea
    };
    this.narea = this.yarea.nombreAre;
    this.idArea = this.yarea.idArea;
    this.nentidad = this.yentidad.valorDat;
    this.idEntidad = this.yentidad.idDato;

    if (this.vista_implemento == "GENERICO") //Si es Generico se Listan las Entidades y las Areas para Seleccionar
      {
        this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(function (res) {
          _this11.zentidades = res.data;
        })["catch"](function (error) {
          _this11.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

          _this11.showLoading = false;
        });
        this.$http.get('/LiberAPP/Area/Select').then(function (res) {
          _this11.zareas = res.data;
        })["catch"](function (error) {
          _this11.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

          _this11.showLoading = false;
        });
      } else {
      this.showLoading = true;
      this.$http.get('/LiberAPP/Plantilla/Listar/' + this.idEntidad + '/' + this.idArea).then(function (res) {
        _this11.arr_plantillas = res.data;
        _this11.resultado = [];
        _this11.grupo_implemento = [];
        _this11.seleccionados = [];
        _this11.plantilla.idPlantilla = 0;
        _this11.nombrePla = "";
        _this11.Area_idArea = 0;
        _this11.Cuenta_idDato = 0;
        _this11.Entidad_idDato = 0;
        _this11.showLoading = false;
      })["catch"](function (error) {
        _this11.Toast(true, 'danger', 'Plantilla', 'Error al cargar los registros: ' + error);

        _this11.showLoading = false;
      });
    }

    this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(function (res) {
      _this11.zcuentas = res.data;
    })["catch"](function (error) {
      _this11.Toast(true, 'danger', 'Cuentas', 'Error al cargar los registros: ' + error);
    });
    this.$http.get('/LiberAPP/Material/Listar').then(function (res) {
      _this11.materiales = res.data;
    })["catch"](function (error) {
      _this11.Toast(true, 'danger', 'Materiales', 'Error al cargar los registros: ' + error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n[dir] .tabs[data-v-7d300a7a]\n{\n    margin-top: 10pt;\n    padding-top: 10pt;\n    padding-bottom: 10pt;\n}\n[dir] .tab-pane[data-v-7d300a7a]\n{\n    padding: 10pt;\n    border:  1px solid rgb(123,123,123);\n    background-color: rgba(40,199,111,0.1);\n    border-radius: 5pt;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "collapse-icon",
      class: _vm.collapseClasses,
      attrs: { role: "tablist" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    {
      staticClass: "light-success",
      class: [
        _vm.bcolor ? "border border-" + _vm.bcolor : "",
        { open: _vm.visible }
      ],
      attrs: { "no-body": "" },
      on: { mouseenter: _vm.collapseOpen, mouseleave: _vm.collapseClose }
    },
    [
      _c(
        "b-card-header",
        {
          class: { collapsed: !_vm.visible },
          attrs: {
            "aria-expanded": _vm.visible ? "true" : "false",
            "aria-controls": _vm.collapseItemID,
            role: "tab",
            "data-toggle": "collapse"
          },
          on: {
            click: function($event) {
              return _vm.updateVisible(!_vm.visible)
            }
          }
        },
        [
          _vm._t("header", function() {
            return [
              _c(
                "span",
                { staticClass: "lead collapse-title" },
                [
                  _c("feather-icon", {
                    class: [_vm.tcolor ? "text-" + _vm.tcolor : ""],
                    attrs: { icon: "ChevronsRightIcon" }
                  }),
                  _vm._v(" " + _vm._s(_vm.title))
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          attrs: {
            id: _vm.collapseItemID,
            accordion: _vm.accordion,
            role: "tabpanel"
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [_c("b-card-body", [_vm._t("default")], 2)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                                variant: "success",
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
              _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                _c("h3", { staticClass: "text-primary text-bold" }, [
                  _vm._v("PLANTILLAS " + _vm._s(_vm.narea))
                ])
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                _c(
                  "div",
                  { staticClass: "custom-search d-flex justify-content-end" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-plantilla",
                            modifiers: { "modal-plantilla": true }
                          }
                        ],
                        attrs: { variant: "success" },
                        on: {
                          click: function($event) {
                            return _vm.Nuevo(_vm.yentidad, _vm.yarea)
                          }
                        }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "float-end mr-50",
                          attrs: { icon: "PlusIcon" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v("Nueva Plantilla")
                        ])
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
            _vm._l(_vm.arr_plantillas, function(uplantilla, indice) {
              return _c(
                "div",
                { key: indice, staticClass: "demo-inline-spacing" },
                [
                  _c(
                    "b-button",
                    {
                      class: {
                        "btn-outline-info": uplantilla.clicked,
                        "btn-outline-primary": !uplantilla.clicked
                      },
                      attrs: {
                        variant: "outline-secondary",
                        disabled: _vm.showLoading,
                        size: "sm",
                        pill: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.ListarImplementos(uplantilla)
                        }
                      }
                    },
                    [
                      !_vm.showLoading
                        ? _c("feather-icon", {
                            attrs: { icon: "ArrowRightIcon" }
                          })
                        : _c("b-spinner", { attrs: { small: "" } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle" }, [
                        _vm._v(_vm._s(uplantilla.nombrePla))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.plantilla.idPlantilla !== 0 && _vm.mostrar
        ? _c(
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "d-flex align-items-center",
                      attrs: { md: "6", xl: "6" }
                    },
                    [
                      _c(
                        "b-button-group",
                        { attrs: { size: "sm" } },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-primary" },
                              on: {
                                click: function($event) {
                                  _vm.mostrar = !_vm.mostrar
                                }
                              }
                            },
                            [_vm._v("2")]
                          )
                        ],
                        1
                      ),
                      _vm._v("  \n                "),
                      _c("h3", { staticClass: "text-success text-bold mt-1" }, [
                        _vm._v(
                          "ASIGNAR ENTIDADES - " +
                            _vm._s(_vm.plantilla.nombrePla)
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "custom-search d-flex justify-content-end"
                      },
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
                                    placeholder: "Buscar Homologacion"
                                  },
                                  model: {
                                    value: _vm.SearchHomologacion,
                                    callback: function($$v) {
                                      _vm.SearchHomologacion = $$v
                                    },
                                    expression: "SearchHomologacion"
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
                    {
                      staticClass: "text-center",
                      attrs: { md: "12", xl: "12" }
                    },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            vertical: "",
                            "content-class": "col-12 col-md-8 col-lg-9",
                            "nav-wrapper-class":
                              "faq-navigation col-md-4 col-lg-3 col-12",
                            "nav-class": "nav-left"
                          }
                        },
                        _vm._l(_vm.registros, function(uregistro, indice) {
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
                                          attrs: {
                                            icon: "FolderIcon",
                                            size: "18"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-bold text-left"
                                          },
                                          [_vm._v(_vm._s(uregistro.gru))]
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
                              uregistro
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12", xl: "12" } },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass:
                                                "table table-condensed table-bordered"
                                            },
                                            [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "10px"
                                                    }
                                                  },
                                                  [_vm._v("Seleccionar")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "150px"
                                                    }
                                                  },
                                                  [_vm._v("Descripcion")]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm._l(uregistro.ent, function(
                                                udetalle,
                                                index
                                              ) {
                                                return _c("tr", [
                                                  _c(
                                                    "td",
                                                    [
                                                      udetalle.sel == true
                                                        ? _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-icon rounded-circle",
                                                              attrs: {
                                                                variant:
                                                                  "success",
                                                                disabled:
                                                                  _vm.showLoading
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  ;(udetalle.sel = false),
                                                                    _vm.SeleccionHomologacion(
                                                                      udetalle,
                                                                      _vm.plantilla
                                                                    )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              !_vm.showLoading
                                                                ? _c(
                                                                    "feather-icon",
                                                                    {
                                                                      attrs: {
                                                                        icon:
                                                                          "CheckIcon"
                                                                      }
                                                                    }
                                                                  )
                                                                : _c(
                                                                    "b-spinner",
                                                                    {
                                                                      attrs: {
                                                                        small:
                                                                          ""
                                                                      }
                                                                    }
                                                                  )
                                                            ],
                                                            1
                                                          )
                                                        : _c(
                                                            "b-button",
                                                            {
                                                              staticClass:
                                                                "btn-icon rounded-circle",
                                                              attrs: {
                                                                variant:
                                                                  "outline-primary"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  ;(udetalle.sel = true),
                                                                    _vm.SeleccionHomologacion(
                                                                      udetalle,
                                                                      _vm.plantilla
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
                                                                      "CrosshairIcon"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(udetalle.nom))
                                                  ])
                                                ])
                                              })
                                            ],
                                            2
                                          )
                                        ]
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
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.plantilla.idPlantilla !== 0 && !_vm.mostrar
        ? _c(
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "d-flex align-items-center",
                      attrs: { md: "6", xl: "6" }
                    },
                    [
                      _c(
                        "b-button-group",
                        { attrs: { size: "sm" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-primary" },
                              on: {
                                click: function($event) {
                                  _vm.mostrar = !_vm.mostrar
                                }
                              }
                            },
                            [_vm._v("1")]
                          ),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("2")
                          ])
                        ],
                        1
                      ),
                      _vm._v("  \n                "),
                      _c("h3", { staticClass: "text-success text-bold mt-1" }, [
                        _vm._v(
                          "ASIGNAR " +
                            _vm._s(_vm.vista_implemento) +
                            " - " +
                            _vm._s(_vm.plantilla.nombrePla)
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "custom-search d-flex justify-content-end"
                      },
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "text-center",
                      attrs: { md: "12", xl: "12" }
                    },
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
                        _vm._l(_vm.resultado, function(ugrupo_imp, indice) {
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
                                          attrs: {
                                            icon: "FolderIcon",
                                            size: "18"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-weight-bold text-left"
                                          },
                                          [_vm._v(_vm._s(ugrupo_imp.nombreGru))]
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
                              ugrupo_imp
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12", xl: "12" } },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass:
                                                "table table-condensed table-bordered"
                                            },
                                            [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "10px"
                                                    }
                                                  },
                                                  [_vm._v("Sel.")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "150px"
                                                    }
                                                  },
                                                  [_vm._v("Implementos")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "200px"
                                                    }
                                                  },
                                                  [_vm._v("Validar Por")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      "min-width": "10px"
                                                    }
                                                  },
                                                  [_vm._v("Materiales")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "100px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Anticipacion de Alerta"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticStyle: {
                                                      width: "100px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Renovacion Implemento (meses)"
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm._l(
                                                ugrupo_imp.implementos,
                                                function(uimplemento, index) {
                                                  return _c("tr", [
                                                    _c(
                                                      "td",
                                                      [
                                                        uimplemento.sel == true
                                                          ? _c(
                                                              "b-button",
                                                              {
                                                                staticClass:
                                                                  "btn-icon rounded-circle",
                                                                attrs: {
                                                                  variant:
                                                                    "success"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    ;(uimplemento.sel = false),
                                                                      _vm.Seleccion(
                                                                        uimplemento,
                                                                        _vm.plantilla
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
                                                                        "CheckIcon"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _c(
                                                              "b-button",
                                                              {
                                                                staticClass:
                                                                  "btn-icon rounded-circle",
                                                                attrs: {
                                                                  variant:
                                                                    "outline-primary"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    ;(uimplemento.sel = true),
                                                                      _vm.Seleccion(
                                                                        uimplemento,
                                                                        _vm.plantilla
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
                                                                        "CrosshairIcon"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          uimplemento.nombreImp
                                                        )
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("b-form-select", {
                                                          attrs: {
                                                            options:
                                                              _vm.validarPor
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              return _vm.Editar(
                                                                uimplemento
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              uimplemento.validacionDis,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                uimplemento,
                                                                "validacionDis",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "uimplemento.validacionDis"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    uimplemento.idDistribucion !==
                                                    undefined
                                                      ? _c(
                                                          "td",
                                                          [
                                                            _c(
                                                              "b-badge",
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "b-modal",
                                                                    rawName:
                                                                      "v-b-modal.modal-material",
                                                                    modifiers: {
                                                                      "modal-material": true
                                                                    }
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  variant:
                                                                    "success"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.EditarMaterial(
                                                                      uimplemento
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Material"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _c(
                                                          "td",
                                                          [
                                                            _c(
                                                              "b-badge",
                                                              {
                                                                attrs: {
                                                                  variant:
                                                                    "danger"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Sin Material"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("b-form-input", {
                                                          staticClass:
                                                            "d-inline-block",
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              return _vm.Editar(
                                                                uimplemento
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              uimplemento.alertaDis,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                uimplemento,
                                                                "alertaDis",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "uimplemento.alertaDis"
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
                                                          staticClass:
                                                            "d-inline-block",
                                                          attrs: {
                                                            type: "text"
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              return _vm.Editar(
                                                                uimplemento
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              uimplemento.renovacionDis,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                uimplemento,
                                                                "renovacionDis",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "uimplemento.renovacionDis"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ])
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "6" } },
                                                  [
                                                    _c(
                                                      "b-button",
                                                      {
                                                        attrs: {
                                                          variant: "success",
                                                          disabled:
                                                            _vm.showLoading
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.ActualizarDistribucion()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        !_vm.showLoading
                                                          ? _c("feather-icon", {
                                                              staticClass:
                                                                "mr-50",
                                                              attrs: {
                                                                icon:
                                                                  "CheckIcon"
                                                              }
                                                            })
                                                          : _c("b-spinner", {
                                                              attrs: {
                                                                small: ""
                                                              }
                                                            }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "align-middle"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Actualizar Seleccionados"
                                                            )
                                                          ]
                                                        )
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
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-plantilla",
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
                              on: { click: _vm.GuardarPlantilla }
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
                          value: _vm.plantilla.idPlantilla,
                          callback: function($$v) {
                            _vm.$set(_vm.plantilla, "idPlantilla", $$v)
                          },
                          expression: "plantilla.idPlantilla"
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
                { attrs: { md: "12", xl: "8" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Cuenta" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "valorDat",
                          reduce: function(entidades) {
                            return entidades.idDato
                          },
                          options: _vm.zcuentas
                        },
                        model: {
                          value: _vm.plantilla.Cuenta_idDato,
                          callback: function($$v) {
                            _vm.$set(_vm.plantilla, "Cuenta_idDato", $$v)
                          },
                          expression: "plantilla.Cuenta_idDato"
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
                    { attrs: { label: "Nombre Plantilla" } },
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        model: {
                          value: _vm.plantilla.nombrePla,
                          callback: function($$v) {
                            _vm.$set(_vm.plantilla, "nombrePla", $$v)
                          },
                          expression: "plantilla.nombrePla"
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
                          value: _vm.plantilla.Entidad_idDato,
                          callback: function($$v) {
                            _vm.$set(_vm.plantilla, "Entidad_idDato", $$v)
                          },
                          expression: "plantilla.Entidad_idDato"
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
                          value: _vm.plantilla.Area_idArea,
                          callback: function($$v) {
                            _vm.$set(_vm.plantilla, "Area_idArea", $$v)
                          },
                          expression: "plantilla.Area_idArea"
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
            id: "modal-material",
            "header-bg-variant": _vm.headerBgVariantM,
            "header-text-variant": _vm.headerTextVariantM,
            title: _vm.headerTitleVariantM,
            "footer-bg-variant": _vm.footerBgVariantM,
            "footer-text-variant": _vm.footerTextVariantM,
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
                              _vm.showModalM = false
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
                              on: { click: _vm.GuardarMateriales }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "SaveIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Guardar")
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.showModalM,
            callback: function($$v) {
              _vm.showModalM = $$v
            },
            expression: "showModalM"
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
                          value: _vm.distribucion.idDistribucion,
                          callback: function($$v) {
                            _vm.$set(_vm.distribucion, "idDistribucion", $$v)
                          },
                          expression: "distribucion.idDistribucion"
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
                { attrs: { md: "3", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nombre Implemento" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.distribucion.nombreImp,
                          callback: function($$v) {
                            _vm.$set(_vm.distribucion, "nombreImp", $$v)
                          },
                          expression: "distribucion.nombreImp"
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
              _c("b-col", [
                _c(
                  "table",
                  {
                    staticClass:
                      "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                  },
                  [
                    _c("thead", { staticClass: "thead-dark" }, [
                      _c("tr", [
                        _c("th", { staticStyle: { width: "10px" } }, [
                          _vm._v("Nro")
                        ]),
                        _c("th", { staticStyle: { width: "200px" } }, [
                          _vm._v("MATERIAL")
                        ]),
                        _c("th", { staticStyle: { width: "25px" } }, [
                          _vm._v("CANTIDAD")
                        ]),
                        _c("th", { staticStyle: { width: "25px" } }, [
                          _vm._v("ACCIONES")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("#")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "nombreMat",
                              options: _vm.materiales
                            },
                            model: {
                              value: _vm.distribucion.materialesDis,
                              callback: function($$v) {
                                _vm.$set(_vm.distribucion, "materialesDis", $$v)
                              },
                              expression: "distribucion.materialesDis"
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
                            staticClass: "form-control",
                            model: {
                              value: _vm.distribucion.cantidadesDis,
                              callback: function($$v) {
                                _vm.$set(_vm.distribucion, "cantidadesDis", $$v)
                              },
                              expression: "distribucion.cantidadesDis"
                            }
                          })
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
                              staticClass: "btn-icon rounded-circle btn-sm",
                              attrs: { variant: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.AgregarMateriales(_vm.distribucion)
                                }
                              }
                            },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "CheckIcon" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.distribucion.materiales, function(
                      uintervalo,
                      indice
                    ) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(indice + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(uintervalo.descripcionDis))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(uintervalo.cantidadesDis))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-icon rounded-circle btn-sm",
                                attrs: { variant: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.EliminarMateriales(indice)
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "TrashIcon" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    })
                  ],
                  2
                )
              ])
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

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony import */ var _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapse.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapse.vue?vue&type=template&id=ddcc2570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapse.vue?vue&type=template&id=ddcc2570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapse_vue_vue_type_template_id_ddcc2570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony import */ var _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCollapseItem.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/app-collapse/AppCollapseItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppCollapseItem.vue?vue&type=template&id=47019a0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue?vue&type=template&id=47019a0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCollapseItem_vue_vue_type_template_id_47019a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Plantilla.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true& */ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true&");
/* harmony import */ var _Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& */ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d300a7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestion/Maestro/Plantilla.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=style&index=1&id=7d300a7a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_style_index_1_id_7d300a7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Maestro/Plantilla.vue?vue&type=template&id=7d300a7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plantilla_vue_vue_type_template_id_7d300a7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);