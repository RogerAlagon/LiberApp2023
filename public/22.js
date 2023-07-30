(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_24__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppCollapse: _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_22__["default"],
    AppCollapseItem: _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_23__["default"],
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BToast"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_9__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BImg"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BSpinner"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BButton"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BButtonGroup"],
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_17__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BPagination"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BCard"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BCardText"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_15___default.a
  }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormCheckbox"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BCardBody", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BCardBody"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "FormWizard", vue_form_wizard__WEBPACK_IMPORTED_MODULE_10__["FormWizard"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "TabContent", vue_form_wizard__WEBPACK_IMPORTED_MODULE_10__["TabContent"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BInputGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BInputGroup"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BInputGroupPrepend", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BInputGroupPrepend"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "Cleave", vue_cleave_component__WEBPACK_IMPORTED_MODULE_19___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppTimeline", _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_13__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppTimelineItem", _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_14__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "flatPickr", vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_21___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BTabs", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BTabs"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BTab", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BTab"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormFile", bootstrap_vue__WEBPACK_IMPORTED_MODULE_12__["BFormFile"]), _components),
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      /**************************** elementos de ux ****************************/
      dir: false,
      pageLength: 25,
      searchTerm: '',
      tabIndex: 1,

      /**************************** tabla ****************************/
      tcolumnas: [{
        label: 'ID',
        field: 'idAsignacion'
      }, {
        label: 'Entidad',
        field: 'Entidad_idEntidad'
      }, {
        label: 'Titulo',
        field: 'titulo'
      }, {
        label: 'F.Vencimiento',
        field: 'fvencimientoAsi'
      }, {
        label: 'Monto',
        field: 'montoAsi'
      }, {
        label: 'Observacion',
        field: 'observacionAsi'
      }, {
        label: 'Situacion',
        field: 'situacionAsi'
      }, {
        label: 'F.Situacion',
        field: 'fsituacionAsi'
      }, {
        label: 'E.Situacion',
        field: 'estadoAsi'
      }],

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
      footerTextVariantPdf: 'dark'
    }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "showModalPdf", false), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "headerBgVariantMasivo", 'dark'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "headerTextVariantMasivo", 'success'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "headerTitleVariantMasivo", 'Pdf Masivo'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "bodyBgVariantMasivo", 'light'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "bodyTextVariantMasivo", 'success'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "footerBgVariantMasivo", 'dark'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "footerTextVariantMasivo", 'dark'), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "showModalMasivo", false), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "tab", "Editar"), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "area", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "entidad", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "entidades", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "entidad_entidad", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "monedas", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "areas", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "asignaciones", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "plantillas", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "medidas", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "externos", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "materiales", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "seleccionados", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "medida", {}), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "situacion", {
      condicion: '',
      femisionOrd: '',
      estadoOrd: 'SOLICITADO',
      Externo_idExterno: 0,
      totalOrd: 0,
      tipoOrd: "SERVICIO",
      seleccionados: []
    }), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "situacion", {
      idAsignacion: 0,
      fvencimientoAsi: "",
      estadoAsi: "",
      Entidad_idEntidad: 0,
      titulo: "",
      situacionAsi: "",
      fsituacionAsi: "",
      Cuenta_idDato: "",
      Taller_idDato: "",
      mantenimientoOrd: ""
    }), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "asignacion", {}), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "asignacionRenovar", {
      idAsignacion: 0,
      fvencimientoAsi: "",
      estadoAsi: "",
      Entidad_idEntidad: 0,
      titulo: "",
      situacionAsi: "",
      fsituacionAsi: ""
    }), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "ordenc", {
      femisionOrd: "",
      Externo_idExterno: "",
      totalOrd: 0,
      tipoOrd: ""
    }), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "ordend", {
      idOrdend: "",
      Ordenc_idOrdenc: "",
      Material_idMaterial: "",
      cantidadOrd: "",
      precioOrd: "",
      observacionOrd: ""
    }), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "edicion", ["PERMANENTE", "POR VENCER", "VENCIDO", "VIGENTE"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "renovacion", ["EN TRAMITE", "PLANIFICADO", "TRAMITADO"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "accion", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "tipoOrd", [{
      value: 'COMPRA',
      text: 'COMPRA'
    }, {
      value: 'SERVICIO',
      text: 'SERVICIO'
    }]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "vigencia", [{
      value: 'VIGENTE',
      text: 'VIGENTE'
    }, {
      value: 'CADUCO',
      text: 'CADUCO'
    }, {
      value: 'ANULADO',
      text: 'ANULADO'
    }]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "situacionAsi", [{
      value: 'NINGUNA',
      text: 'NINGUNA'
    }, {
      value: 'TRAMITADO',
      text: 'TRAMITADO'
    }, {
      value: 'OBSERVADO',
      text: 'OBSERVADO'
    }, {
      value: 'APLAZADO',
      text: 'APLAZADO'
    }]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "narea", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "idArea", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "nentidad", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "idEntidad", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "plantilla", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "nplantilla", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "titulos", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "ycomponente", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "zdetalle", ""), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "componentes", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "registros", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "seleccionados", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "arr_trabajos", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "activoEditar", false), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "activoModificar", false), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "yexterno", {}), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "ymoneda", {}), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "entregar", true), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "archivo", null), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "file2", null), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "clicked", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "cuentas", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "talleres", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "masivo", {
      nroAsi: "",
      fvencimientoAsi: ""
    }), _ref;
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
    select_file: function select_file(event) {
      this.archivo = event.target.files[0];
    },
    guardar_pdf: function guardar_pdf(id) {
      var _this = this;

      var data = new FormData();
      data.append('pdf', this.archivo);
      data.append('id', id);
      data.append('_method', 'POST');
      axios__WEBPACK_IMPORTED_MODULE_24___default.a.post('/LiberAPP/Archivo/Guardar', data).then(function (response) {
        var jsonAsignacion = JSON.stringify(response.data);

        _this.$http.post('/LiberAPP/Asignacion/ActualizarEscaneo', {
          asignacion: jsonAsignacion
        }).then(function (res) {})["catch"](function (error) {
          _this.Toast(true, 'danger', 'Actualizar', 'Error al guardar el registro: ' + error);
        });
      });
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
    Cargar: function Cargar() {
      var _this2 = this;

      this.showLoading = true;
      this.narea = this.area.nombreAre;
      this.idArea = this.area.idArea;
      this.nentidad = this.entidad.valorDat;
      this.idEntidad = this.entidad.idDato;
      /*this.idEntidad = 287; 
      this.idArea = 4;*/

      this.$http.get('/LiberAPP/Plantilla/ListarSelect/' + this.idEntidad + '/' + this.idArea).then(function (res) {
        _this2.showLoading = false;
        _this2.plantillas = res.data;
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Asignación', 'Error al cargar los registros: ' + error);

        _this2.showLoading = false;
      });
    },
    Listar: function Listar(prm_plantilla, prm_nplantilla) {
      var _this3 = this;

      //this.entidad.idDato = 287; 
      //this.area.idArea = 4;
      this.showLoading = true;
      this.$http.get('/LiberAPP/Asignacion/ListarPlantilla/' + this.idEntidad + '/' + this.idArea + '/' + prm_plantilla).then(function (res) {
        _this3.showLoading = false;
        _this3.titulos = res.data.titulos;
        _this3.registros = res.data.registros;
        _this3.seleccionados = [];
        _this3.plantilla = prm_plantilla;
        _this3.nplantilla = prm_nplantilla;
      })["catch"](function (error) {
        _this3.Toast(true, 'danger', 'Asignación', 'Error al cargar los registros: ' + error);

        _this3.showLoading = false;
      });
    },
    Seleccionar: function Seleccionar(prm_asignacion, prm_nentidad, prm_ientidad, prm_iexterno, prm_idimplemento) {
      var llave = prm_idimplemento;
      var idImplemento = prm_idimplemento.replace('i', '');

      if (Array.isArray(prm_asignacion)) {
        prm_asignacion = Object.assign({}, prm_asignacion);
      }

      if (prm_asignacion.sel) {
        prm_asignacion.idEntidad = prm_ientidad;
        prm_asignacion.idExterno = prm_iexterno;
        prm_asignacion.nombreEnt = prm_nentidad;
        prm_asignacion.Implemento_idImplemento = idImplemento;
        prm_asignacion.implemento = this.titulos[llave]["nom"];
        prm_asignacion.Implemento_idImplemento = idImplemento;
        if (!prm_asignacion.idAsignacion) prm_asignacion.idAsignacion = 0;
        this.seleccionados.push(prm_asignacion);
      } else {
        for (var i = 0; i < this.seleccionados.length; i++) {
          if (this.seleccionados[i].idAsignacion == 0) //si el registro es nuevo
            {
              if (this.seleccionados[i].Implemento_idImplemento == idImplemento && this.seleccionados[i].idEntidad == prm_ientidad) {
                this.seleccionados.splice(i, 1);
                break;
              }
            } else if (this.seleccionados[i].idAsignacion == prm_asignacion.idAsignacion) //si el registro existe 
            {
              this.seleccionados.splice(i, 1);
              break;
            }
        }
      }
    },
    Editar: function Editar(prm_asignacion, prm_entidad) {
      this.headerTextVariant = "primary";
      this.headerTitleVariant = 'EDITAR ' + this.vista_implemento;
      this.showModal = true;
      this.asignacion = prm_asignacion;
      this.asignacion.entidad = prm_entidad;
      this.asignacion.implemento = this.titulos["i" + prm_asignacion.Implemento_idImplemento]["nom"];
      this.asignacion.validar = this.titulos["i" + prm_asignacion.Implemento_idImplemento]["val"];
      var encontrado = this.medidas.filter(function (tmedida) {
        return tmedida.idDato == prm_asignacion.Medida_idDato;
      }, this);
      var umedida = encontrado[0];
      this.medida = umedida;
      this.accion = 1;
    },
    Renovar: function Renovar(prm_asignacion, prm_entidad, prm_identidad, prm_idimplemento) {
      var llave = prm_idimplemento;
      var idImplemento = prm_idimplemento.replace('i', '');
      this.headerTextVariant = "success";
      this.headerTitleVariant = 'RENOVAR ' + this.vista_implemento;
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

      if (prm_asignacion == {} || prm_asignacion == [] || prm_asignacion == null) {
        $obj_asignacion.nroAsi = "";
        $obj_asignacion.fvencimientoAsi = "";
        $obj_asignacion.tipoAsi = "";
        $obj_asignacion.escaneoAsi = ""; //$obj_asignacion.Entidad_idEntidad = $asignacion->Entidad_idEntidad;

        $obj_asignacion.montoAsi = 0;
        $obj_asignacion.situacionAsi = "NINGUNA";
        $obj_asignacion.Medida_idDato = null;
      }

      var encontrado = this.medidas.filter(function (tmedida) {
        return tmedida.idDato == prm_asignacion.Medida_idDato;
      }, this);
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
    Situacion: function Situacion(prm_situacion) {
      var seleccionados = [];
      var total = 0;
      var disponibles = []; //stock de materiales disponibles

      var necesarios = []; //cantidad de materiales necesarios

      var fecha = new Date();
      var day = fecha.getDate();
      var month = ("0" + (fecha.getMonth() + 1)).slice(-2);
      var year = fecha.getFullYear();
      var ffin = year + '-' + month + '-' + day;
      var contP = 0; //Contar preventivos

      for (var j = 0; j < this.seleccionados.length; j++) {
        if (this.seleccionados[j]["implemento"] == "L1" || this.seleccionados[j]["implemento"] == "M1" || this.seleccionados[j]["implemento"] == "M2" || this.seleccionados[j]["implemento"] == "M3" || this.seleccionados[j]["implemento"] == "M4") {
          contP++;
        }

        var seleccion = this.seleccionados[j];
        seleccion.implemento = this.titulos["i" + seleccion.Implemento_idImplemento]["nom"];
        seleccion.material = this.titulos["i" + seleccion.Implemento_idImplemento]["mat"];
        seleccion.idMaterial = this.titulos["i" + seleccion.Implemento_idImplemento]["imat"];
        seleccion.stock = this.titulos["i" + seleccion.Implemento_idImplemento]["sto"];
        seleccion.unidad = this.titulos["i" + seleccion.Implemento_idImplemento]["uni"];
        seleccion.cantidad = this.titulos["i" + seleccion.Implemento_idImplemento]["can"];
        seleccion.precio = this.titulos["i" + seleccion.Implemento_idImplemento]["cos"];
        seleccion.total = (parseFloat(seleccion.cantidad) * parseFloat(seleccion.precio)).toFixed(2);
        seleccion.observacion = ""; // para la acta de entrega de equipos y para la orden de servicios

        seleccion.renovacion = this.titulos["i" + seleccion.Implemento_idImplemento]["ren"]; // valor del tiempo, kilometraje u horometraje de renovacion del implementos(parja el acta de enntrega)

        seleccion.validacion = this.titulos["i" + seleccion.Implemento_idImplemento]["val"];
        ; // tipo kilometraje o horometraje o fecha (para el acta de entrega)

        seleccion.vencimiento = "";
        seleccion.fvencimiento = ffin; //seleccion.fvencimiento = "";
        //FALTA HACER EL CALCULO DE LA FECHA DE VENCIMIENTO O EL VENCIMIENTO PROXIMO QUE TENDRÁ LA UNIDAD

        seleccionados.push(seleccion);
        total += parseInt(seleccion.total);
        disponibles["m" + seleccion.idMaterial] = parseFloat(seleccion.stock);
        if (necesarios["m" + seleccion.idMaterial]) necesarios["m" + seleccion.idMaterial] += parseFloat(seleccion.cantidad);else necesarios["m" + seleccion.idMaterial] = parseFloat(seleccion.cantidad);
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
      } //VERIFICAR SI EL STOCK SE VA A DAR CONFORME AL QUE SE TIENE AL ALMACÉN


      var claves = Object.keys(disponibles);
      var entregar = true;

      for (var j = 0; j < claves.length; j++) {
        var clave = claves[j];
        if (disponibles[clave] < necesarios[clave]) entregar = false;
      }

      this.entregar = entregar; // para habilitar el boton de generar acta de entrega

      var subtotal = total / 1.18;
      var igv = subtotal * 0.18;
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
        fpagoOrd: "",
        //LA FECHA DE PAGO SERA LA FECHA DE REVISIÓN
        //detraccionOrd
        Moneda_idDato: 0,
        Area_idArea: this.idArea,
        area: this.narea,
        faplazamiento: "",
        mantenimientoOrd: "PREVENTIVO"
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

      switch (prm_situacion) {
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
    CalcularTotal: function CalcularTotal() {
      var total = 0;
      var subtotal = 0;
      var igv = 0;

      for (var i = 0; i < this.situacion.seleccionados.length; i++) {
        var useleccionado = this.situacion.seleccionados[i];
        var utotal = useleccionado.precio * useleccionado.cantidad;
        this.situacion.seleccionados[i].total = utotal;
        total += utotal;
      }

      subtotal = total * 100 / (parseFloat(this.situacion.impuestoOrd) + 100);
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
    Actualizar: function Actualizar() {
      var _this4 = this;

      this.showLoading = true;
      var jsonAsignacion = JSON.stringify(this.asignacion);
      /*console.log(this.asignacion);
      console.log(jsonAsignacion);
      return;*/

      this.$http.post('/LiberAPP/Asignacion/Actualizar', {
        asignacion: jsonAsignacion
      }).then(function (res) {
        _this4.Toast(true, 'success', 'Actualizar', 'Guardado Correctamente');

        _this4.showModal = false;
        _this4.showLoading = false;

        _this4.Listar(_this4.plantilla, _this4.nplantilla);

        if (_this4.archivo != null) _this4.guardar_pdf(_this4.asignacion.idAsignacion); //this.Listar(); /////quedapendiente solo actualizar el archivo o el que se ha hecho la modificacion
      })["catch"](function (error) {
        _this4.Toast(true, 'danger', 'Actualizar', 'Error al guardar el registro: ' + error);

        _this4.showLoading = false;
      });
    },
    Reemplazar: function Reemplazar() {
      var _this5 = this;

      //console.log(this.asignacion);
      this.showLoading = true;
      var jsonAsignacion = JSON.stringify(this.asignacion);
      /*console.log(jsonAsignacion);
      return;*/

      this.$http.post('/LiberAPP/Asignacion/Reemplazar', {
        asignacion: jsonAsignacion
      }).then(function (res) {
        _this5.Toast(true, 'success', 'Renovar Asignación', 'Guardado Correctamente');

        _this5.showModal = false;
        _this5.showLoading = false;

        _this5.Listar(_this5.plantilla, _this5.nplantilla); //console.log(res.data);


        if (_this5.archivo != null) _this5.guardar_pdf(res.data); //this.Listar(); /////quedapendiente solo actualizar el archivo o el que se ha hecho la modificacion
      })["catch"](function (error) {
        _this5.Toast(true, 'danger', 'Reemplazar', 'Error al guardar el registro: ' + error);

        _this5.showLoading = false;
      });
    },

    /*GenerarOrden()
    {
     },*/
    Entregar: function Entregar() //Acta de Entrega de Equipos
    {
      var _this6 = this;

      this.showLoading = true; //enviar el id del que hizo la entrega y guardar la hora en la que se hizo la entrega

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

      for (var i = 0; i < this.situacion.seleccionados.length; i++) {
        var useleccionado = this.situacion.seleccionados[i];
        if (useleccionado.fvencimiento.length != 10) correcto = false;
      }

      if (!correcto) {
        this.Toast(true, 'warning', 'Acta de Entrega', 'Ingrese las Fechas de Vencimiento');
        this.showLoading = false;
        return;
      }

      var jsonSituacion = JSON.stringify(this.situacion);
      this.$http.post('/LiberAPP/Asignacion/Situacion/ENTREGAR', {
        situacion: jsonSituacion
      }).then(function (res) {
        _this6.Toast(true, 'success', 'Renovar', 'Guardado Correctamente');

        _this6.showModalRenovar = false;
        _this6.showLoading = false;
        _this6.seleccionados = [];
        /*this.ordenc = []; 
        this.ordend = [];*/

        _this6.Listar(_this6.plantilla, _this6.nplantilla); //console.log(res.data);


        window.open('/LiberAPP/Asignacion/PdfActaEntrega/' + res.data, '_blank');
      })["catch"](function (error) {
        _this6.Toast(true, 'success', 'Generar Acta Entrega', 'No se Pudo Generar los Registros');

        _this6.showLoading = false;
      });
    },
    Planificar: function Planificar() //Orden de Trabajo
    {
      var _this7 = this;

      var jsonSituacion = JSON.stringify(this.situacion);
      this.$http.post('/LiberAPP/Asignacion/Situacion/PLANIFICAR', {
        situacion: jsonSituacion
      }).then(function (res) {
        /*for ( var i = 0; i < res.data.length; i++) 
        {
          window.open('/LiberAPP/Ordent/Pdf/'+res.data[i], '_blank');
        }*/
        _this7.Toast(true, 'success', 'Generar Orden', 'Guardado Correctamente');

        _this7.showModalPlanificar = false;
        _this7.showLoading = false;
        _this7.seleccionados = [];

        _this7.Listar(_this7.plantilla, _this7.nplantilla);
      })["catch"](function (error) {
        _this7.Toast(true, 'success', 'Actualizar Orden', 'Guardado Correctamente');

        _this7.showLoading = false;
      });
    },
    PlanificarCampana: function PlanificarCampana() {
      var _this8 = this;

      this.situacion.trabajos = this.arr_trabajos;
      this.situacion.observacion = this.seleccionados[0].implemento;
      var jsonSituacion = JSON.stringify(this.situacion);
      this.$http.post('/LiberAPP/Asignacion/Situacion/PLANIFICAR', {
        situacion: jsonSituacion
      }).then(function (res) {
        _this8.Toast(true, 'success', 'Generar Orden', 'Guardado Correctamente');

        _this8.showModalCampana = false;
        _this8.showLoading = false;
        _this8.seleccionados = [];
        _this8.arr_trabajos = [];

        _this8.Listar(_this8.plantilla, _this8.nplantilla);
      })["catch"](function (error) {
        _this8.Toast(true, 'success', 'Actualizar Orden', 'Guardado Correctamente');

        _this8.showLoading = false;
      }); //console.log('Planificar Campana ::', this.situacion);
    },
    AgregarTrabajos: function AgregarTrabajos() {
      if (this.ycomponente == null || this.ycomponente == "") {
        this.Toast(true, 'warning', 'Trabajos', 'Seleccione un Componente');
        return;
      }

      console.log('seleccionados:: ', this.seleccionados[0].implemento);
      var utrabajo = {
        id: this.ycomponente.id,
        componentes: this.ycomponente.com,
        falla: this.seleccionados[0].implemento //falla: this.situacion.observacion, 

      };
      this.arr_trabajos.push(utrabajo);
      this.ycomponente = "";
    },
    EliminarTrabajo: function EliminarTrabajo(prm_indice) {
      this.arr_trabajos.splice(prm_indice, 1);
    },
    Tramitar: function Tramitar() //Orden de Servicio
    {
      var _this9 = this;

      if (this.situacion.Externo_idExterno == null || this.situacion.Externo_idExterno == "") {
        this.Toast(true, 'warning', 'Orden de Compra/Servicio', 'Seleccione Proveedor');
        return;
      }

      if (this.situacion.Moneda_idDato == null || this.situacion.Moneda_idDato == 0) {
        this.Toast(true, 'warning', 'Orden de Compra/Servicio', 'Ingrese Moneda');
        return;
      }

      if (this.situacion.femisionOrd == null || this.situacion.femisionOrd == "") {
        this.Toast(true, 'warning', 'Orden de Compra/Servicio', 'Ingrese Fecha de Emisión');
        return;
      }

      if (this.situacion.faplazamiento == null || this.situacion.faplazamiento == "") {
        this.Toast(true, 'warning', 'Orden de Compra/Servicio', 'Ingrese Fecha de Revisión');
        return;
      }

      var jsonSituacion = JSON.stringify(this.situacion);
      this.$http.post('/LiberAPP/Asignacion/Situacion/TRAMITAR', {
        situacion: jsonSituacion
      }).then(function (res) {
        _this9.Toast(true, 'success', 'Generar Orden', 'Guardado Correctamente');

        _this9.showModalTramitar = false;
        _this9.showLoading = false;
        _this9.seleccionados = [];
        /*this.ordenc = []; 
        this.ordend = [];*/

        _this9.Listar(_this9.plantilla, _this9.nplantilla);

        window.open('/LiberAPP/Ordenc/Pdf/' + res.data, '_blank');
      })["catch"](function (error) {
        _this9.Toast(true, 'success', 'Actualizar Orden', 'Guardado Correctamente');

        _this9.showLoading = false;
      });
    },
    Aplazar: function Aplazar() //Actualización Masiva
    {
      var _this10 = this;

      /*if (this.situacion.faplazamiento == null || this.situacion.faplazamiento == "")
      {
          this.Toast(true,'warning','Aplazar','Ingrese Fecha de Aplazamiento');
          return;
      }*/
      var jsonSituacion = JSON.stringify(this.situacion);
      this.$http.post('/LiberAPP/Asignacion/Situacion/APLAZAR', {
        situacion: jsonSituacion
      }).then(function (res) {
        /*console.log("fea");
        console.log(res.data);*/
        _this10.Toast(true, 'success', 'Aplazar', 'Guardado Correctamente');

        _this10.showModalAplazar = false;
        _this10.showLoading = false;
        _this10.seleccionados = [];

        _this10.Listar(_this10.plantilla, _this10.nplantilla);
      })["catch"](function (error) {
        _this10.Toast(true, 'success', 'Actualizar Orden', 'Guardado Correctamente');

        _this10.showLoading = false;
      });
    },
    GenerarPdf: function GenerarPdf() {
      var _this11 = this;

      var implemenentos = [];
      var hash = {};
      var hash2 = {};
      var seleccionadosCopia = this.seleccionados.slice();
      var detalle = "";
      seleccionadosCopia = seleccionadosCopia.filter(function (current) {
        var exists = !hash[current.Entidad_idEntidad];
        hash[current.Entidad_idEntidad] = true;
        return exists;
      });

      for (var i = 0; i < seleccionadosCopia.length; i++) {
        implemenentos = [];

        for (var j = 0; j < this.seleccionados.length; j++) {
          if (seleccionadosCopia[i].Entidad_idEntidad == this.seleccionados[j].Entidad_idEntidad) {
            implemenentos.push(this.seleccionados[j].Implemento_idImplemento);
          }
        }

        var jsonImplementos = JSON.stringify(implemenentos);
        detalle = JSON.stringify(this.seleccionados);
        var ventana = window.open('/LiberAPP/Archivo/Pdf/' + seleccionadosCopia[i].Entidad_idEntidad + '/' + this.seleccionados[i].idAsignacion + '/' + jsonImplementos, '_blank'); //const ventana = window.open('/LiberAPP/Archivo/Pdf/'+ seleccionadosCopia[i].Entidad_idEntidad + '/' + this.seleccionados[i].idAsignacion, '_blank');

        /*setTimeout( function() { 
          ventana.close();
        }, 10000);*/
      }

      this.showLoading = true;
      var jsonSeleccionados = JSON.stringify(this.seleccionados);
      this.$http.post('/LiberAPP/Archivo/Fusionar', {
        asignacion: jsonSeleccionados
      }).then(function (res) {
        for (var _i = 0; _i < res.data.length; _i++) {
          window.open('http://liberapp.grupolibertad.pe/LiberAPP/Archivo/Pdf/' + res.data[_i], '_blank');
          /*this.$http.get('/LiberAPP/Archivo/Pdf/1454').then(res => { 
          
          }).catch( error => { 
            this.Toast(true,'danger','Medidas','Error al cargar los registros: '+error);
          });*/
          //window.open('http://192.168.0.106/full-version/public/archivos/operaciones/'+ res.data[i] +'.pdf', '_blank');
          //window.open(res.data[i], '_blank');
        }

        _this11.showLoading = false;
        _this11.showModalPdf = false;
      })["catch"](function (error) {
        _this11.Toast(true, 'danger', 'Generar Pdf', 'Error al generar Pdf ' + error);

        _this11.showLoading = false;
      });
    },
    CargaMasiva: function CargaMasiva() {
      var _this12 = this;

      if (this.masivo.nroAsi == "" || this.masivo.nroAsi == null) {
        this.Toast(true, 'warning', 'Código', 'Ingrese Código ');
        this.showLoading = false;
        return;
      }

      if (this.masivo.fvencimientoAsi == "" || this.masivo.fvencimientoAsi == null) {
        this.Toast(true, 'warning', 'Vencimiento', 'Ingrese Vencimiento');
        this.showLoading = false;
        return;
      }

      if (this.archivo == "" || this.archivo == null) {
        this.Toast(true, 'warning', 'Archivo', 'Seleccione un Archivo');
        this.showLoading = false;
        return;
      }

      this.showLoading = true;
      var jsonSeleccionados = JSON.stringify(this.seleccionados);
      var jsonMasivo = JSON.stringify(this.masivo);
      this.$http.post('/LiberAPP/Asignacion/CargaMasivo', {
        asignacion: jsonSeleccionados,
        masivo: jsonMasivo
      }).then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          if (_this12.archivo != null) _this12.guardar_pdf(res.data[i]);
        }

        _this12.masivo = {
          nroAsi: "",
          fvencimientoAsi: ""
        };
        _this12.archivo = null;
        _this12.showLoading = false;
        _this12.showModalMasivo = false;

        _this12.Listar(_this12.plantilla, _this12.nplantilla);
      })["catch"](function (error) {
        _this12.Toast(true, 'danger', 'Carga Masiva', 'Error al cargar masivamente' + error);

        _this12.showLoading = false;
      });
    }
  },
  computed: {
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_18__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this13 = this;

    //this.situacion.area = this.vista_area;
    this.entidad = {
      idDato: this.vista_entidad,
      valorDat: this.vista_nentidad
    };
    this.area = {
      idArea: this.vista_area,
      nombreAre: this.vista_narea
    }; //vista_implemento

    if (this.vista_implemento == "GENERICO") //Si es Generico se Listan las Entidades y las Areas para Seleccionar
      {
        this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(function (res) {
          _this13.entidades = res.data;
        })["catch"](function (error) {
          _this13.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

          _this13.showLoading = false;
        });
        this.$http.get('/LiberAPP/Area/Select').then(function (res) {
          _this13.areas = res.data;
        })["catch"](function (error) {
          _this13.Toast(true, 'danger', 'Area', 'Error al cargar los registros: ' + error);

          _this13.showLoading = false;
        });
      } else {
      this.showLoading = true;
      this.narea = this.area.nombreAre;
      this.idArea = this.area.idArea;
      this.nentidad = this.entidad.valorDat;
      this.idEntidad = this.entidad.idDato;
      this.$http.get('/LiberAPP/Plantilla/ListarSelect/' + this.idEntidad + '/' + this.idArea).then(function (res) {
        _this13.showLoading = false;
        _this13.plantillas = res.data;
      })["catch"](function (error) {
        _this13.Toast(true, 'danger', 'Asignación', 'Error al cargar los registros: ' + error);

        _this13.showLoading = false;
      });
    }

    this.$http.get('/LiberAPP/Externo/Select').then(function (res) {
      _this13.externos = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    /*this.$http.get('/LiberAPP/Entidad/Listar').then(res => {
        this.entidad_entidad = res.data;
    }).catch(error => {
        this.Toast(true,'danger','Entidad_Entidad','Error al cargar los registros: '+error);
        this.showLoading = false;
    });*/

    this.$http.get('/LiberAPP/Dato/Select/MEDIDA/LOGISTICA').then(function (res) {
      _this13.medidas = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Medidas', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/MONEDA/LOGISTICA').then(function (res) {
      _this13.monedas = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Medidas', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    this.$http.get('/LiberAPP/Material/Listar').then(function (res) {
      _this13.materiales = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Material', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA PESADA').then(function (res) {
      //this.pcomponentes = res.data.componentes;
      //this.pidReporte = res.data.reporte;
      //this.pversionRep = res.data.version;
      _this13.componentes = res.data.componentes; //this.idReporte = res.data.reporte;
      //this.versionRep = res.data.version;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Cargando Personas', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    /*this.$http.get('/LiberAPP/Reporte/ListarUnidad/REPORTE DE FALLAS DE FLOTA LIVIANA').then(res => {
      this.lcomponentes = res.data.componentes;
      this.lidReporte = res.data.reporte;
      this.lversionRep = res.data.version;
    }).catch(error => {
      this.Toast(true,'danger','Cargando Personas','Error al cargar los registros: '+error);
      this.showLoading = false;
    });*/

    this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE').then(function (res) {
      _this13.cuentas = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Tipo de Vehiculo', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/TALLER/MANTENIMIENTO').then(function (res) {
      _this13.talleres = res.data;
    })["catch"](function (error) {
      _this13.Toast(true, 'danger', 'Tipo de Vehiculo', 'Error al cargar los registros: ' + error);

      _this13.showLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".vgt-table tbody td, .vgt-table tbody th, .vgt-table thead th {\n  font-weight: bold;\n  font-size: 10pt;\n}\n[dir] .vgt-table tbody td, [dir] .vgt-table tbody th, [dir] .vgt-table thead th {\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #4b4b4b;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #4b4b4b;\n}\n.vgt-wrap .vgt-table thead th {\n  color: #9196a0;\n}\n[dir] .vgt-wrap .vgt-table thead th {\n  background-color: #283046;\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #4b4b4b;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #4b4b4b;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #4b4b4b;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #4b4b4b;\n  border-top: 2px solid #4b4b4b;\n  background-color: #656565;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #7d7d7d;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #4b4b4b;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #4b4b4b;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #4b4b4b;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #4b4b4b;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #4b4b4b;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #FFFFFF;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #FFFFFF !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #FFFFFF;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #FFFFFF;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #FFFFFF;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.leyenda[data-v-d642a1d0]\n    {\n        width: 100%;\n}\n[dir] .leyenda[data-v-d642a1d0]\n    {\n        text-align: center;\n}\n.otabla[data-v-d642a1d0]\n    {\n        height: 70vh;\n        overflow: scroll;\n        position: relative;\n}\n.otabla .table[data-v-d642a1d0]\n    {\n        position: relative;\n}\n    /*fila fija*/\nthead th[data-v-d642a1d0] /*fijar filas thead*/\n    {\n        position: -webkit-sticky; /* for Safari */\n        position: sticky;\n        color: white !important;\n        z-index: 1;\n}\n[dir] thead th[data-v-d642a1d0] /*fijar filas thead*/\n    {\n        background-color: rgb(75,75,75) !important;\n}\nthead tr:nth-child(1) th[data-v-d642a1d0]/*posicionar primera fila */\n    {\n      top: 0;\n}\nthead tr:nth-child(2) th[data-v-d642a1d0]/*posicionar segunda fila*/\n    {\n      top: 22pt;\n}\n    /*columna fija*/\nthead tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna thead*/\n    {\n        z-index: 1;\n}\n[dir=ltr] thead tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna thead*/\n    {\n        left: 0;\n}\n[dir=rtl] thead tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna thead*/\n    {\n        right: 0;\n}\nthead tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna thead*/\n    {\n        z-index: 1;\n}\n[dir=ltr] thead tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna thead*/\n    {\n        left: 25pt;\n}\n[dir=rtl] thead tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna thead*/\n    {\n        right: 25pt;\n}\n    /*thead tr:nth-child(1) th:last-child/*posicionar ultima columna thead*/\n    /*{\n        z-index: 1;\n    }*/\ntfoot th[data-v-d642a1d0]/*fijar filas tfoot*/\n    {\n        position: -webkit-sticky; /* for Safari */\n        position: sticky;\n        color: white !important;\n}\n[dir] tfoot th[data-v-d642a1d0]/*fijar filas tfoot*/\n    {\n        background-color: rgb(75,75,75) !important;\n}\ntfoot tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna tfoot*/\n    {\n        z-index: 1;\n}\n[dir=ltr] tfoot tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna tfoot*/\n    {\n        left: 0;\n}\n[dir=rtl] tfoot tr:nth-child(1) th[data-v-d642a1d0]:first-child/*posicionar primera columna tfoot*/\n    {\n        right: 0;\n}\ntfoot tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna tfoot*/\n    {\n        z-index: 1;\n}\n[dir=ltr] tfoot tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna tfoot*/\n    {\n        left: 25pt;\n}\n[dir=rtl] tfoot tr:nth-child(1) th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna tfoot*/\n    {\n        right: 25pt;\n}\ntbody th[data-v-d642a1d0]/*fijar columnas*/\n    {\n        position: -webkit-sticky; /* for Safari */\n        position: sticky;\n        color: white !important;\n        z-index: 1;\n}\n[dir] tbody th[data-v-d642a1d0]/*fijar columnas*/\n    {\n        background-color: rgb(75,75,75) !important;\n}\n[dir=ltr] tbody th[data-v-d642a1d0]/*fijar columnas*/\n    {\n        left: 0;\n}\n[dir=rtl] tbody th[data-v-d642a1d0]/*fijar columnas*/\n    {\n        right: 0;\n}\n[dir=ltr] tbody tr th[data-v-d642a1d0]:nth-child(1)/*posicionar primera columna*/\n    {\n        left: 0;\n}\n[dir=rtl] tbody tr th[data-v-d642a1d0]:nth-child(1)/*posicionar primera columna*/\n    {\n      right: 0;\n}\n[dir=ltr] tbody tr th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna*/\n    {\n        left: 25pt;\n}\n[dir=rtl] tbody tr th[data-v-d642a1d0]:nth-child(2)/*posicionar segunda columna*/\n    {\n      right: 25pt;\n}\n\n    /*.table tr td:nth-child(2), .table tr td:nth-last-child(7)*/\n.table tbody th[data-v-d642a1d0]\n    {\n        /*min-width: 120pt !important;*/\n        font-weight: bold;\n        white-space: nowrap;\n}\n[dir] .table th[data-v-d642a1d0], [dir] .table td[data-v-d642a1d0]\n    {\n        text-align: center !important;\n}\n[dir=ltr] .table th[data-v-d642a1d0], [dir=ltr] .table td[data-v-d642a1d0]\n    {\n        padding-left: 0.8rem !important;\n        padding-right: 0.8rem !important;\n}\n[dir=rtl] .table th[data-v-d642a1d0], [dir=rtl] .table td[data-v-d642a1d0]\n    {\n        padding-right: 0.8rem !important;\n        padding-left: 0.8rem !important;\n} \n    /*animacion para cada dia*/\n[dir] .oact[data-v-d642a1d0]\n    {\n        cursor: pointer;\n}\n[dir] .oact[data-v-d642a1d0]:hover\n    {\n        box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,1);\n}\n.oina[data-v-d642a1d0]\n    {\n        color: rgb(142, 142, 147);\n}\n[dir] .oina[data-v-d642a1d0]\n    {\n        background-color: rgb(200, 199, 204);\n}\n.omini[data-v-d642a1d0]\n    {\n        font-size: 7pt;\n        font-weight: bold;\n}\n.osombreado[data-v-d642a1d0]\n    {\n        color: white !important;\n}\n[dir] .osombreado[data-v-d642a1d0]\n    {\n        background-color: rgba(128,128,128,1);\n}\n.ohora[data-v-d642a1d0]\n    {\n        display:  block;\n}\n[dir] .ohora[data-v-d642a1d0]\n    {\n        margin-top: 2pt;\n}\n.asistencia[data-v-d642a1d0]\n{\n    font-weight: bold !important;\n    font-size: 0.8rem !important;\n}\n[dir] .asistencia[data-v-d642a1d0]\n{\n    padding-top: 0.15rem;\n    padding-bottom: 0.15rem;\n    border-radius: 15%;\n}\n[dir=ltr] .asistencia[data-v-d642a1d0]\n{\n        padding-left: 0.5rem;\n        padding-right: 0.5rem;\n}\n[dir=rtl] .asistencia[data-v-d642a1d0]\n{\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n}\n.btn-defaultz[data-v-d642a1d0] {\n  color: #8e8e93;\n}\n[dir] .btn-defaultz[data-v-d642a1d0] {\n  background-color: #ffffff;\n  border-color: #c8c7cc;\n}\n.btn-defaultz[data-v-d642a1d0]:hover {\n  color: #8e8e93 !important;\n}\n[dir] .btn-defaultz[data-v-d642a1d0]:hover {\n  background-color: #ffffff;\n  border-color: #bbbac0;\n}\n.btn-defaultz[data-v-d642a1d0]:active, .btn-defaultz.active[data-v-d642a1d0], .btn-defaultz.active[data-v-d642a1d0]:focus, .btn-defaultz[data-v-d642a1d0]:active:focus, .btn-defaultz[data-v-d642a1d0]:active:hover {\n  color: #5b5b60 !important;\n}\n[dir] .btn-defaultz[data-v-d642a1d0]:active, [dir] .btn-defaultz.active[data-v-d642a1d0], [dir] .btn-defaultz.active[data-v-d642a1d0]:focus, [dir] .btn-defaultz[data-v-d642a1d0]:active:focus, [dir] .btn-defaultz[data-v-d642a1d0]:active:hover {\n  background-color: #f8f8f8;\n  border-color: #d5d4d8;\n}\n.btn-defaultz[data-v-d642a1d0]:focus {\n  color: #5b5b60 !important;\n}\n[dir] .btn-defaultz[data-v-d642a1d0]:focus {\n  background-color: #ffffff;\n  border-color: #bbbac0;\n}\n.btn-defaultz.disabled[data-v-d642a1d0]:hover, .btn-defaultz.disabled[data-v-d642a1d0]:focus, .btn-defaultz.disabled[data-v-d642a1d0]:active, .btn-defaultz.disabled.active[data-v-d642a1d0], .btn-defaultz[disabled][data-v-d642a1d0], .btn-defaultz[disabled][data-v-d642a1d0]:hover, .btn-defaultz[disabled][data-v-d642a1d0]:focus, .btn-defaultz[disabled][data-v-d642a1d0]:active, .btn-defaultz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:active, fieldset[disabled] .btn-defaultz.active[data-v-d642a1d0] {\n  color: #cfcfd1;\n}\n[dir] .btn-defaultz.disabled[data-v-d642a1d0]:hover, [dir] .btn-defaultz.disabled[data-v-d642a1d0]:focus, [dir] .btn-defaultz.disabled[data-v-d642a1d0]:active, [dir] .btn-defaultz.disabled.active[data-v-d642a1d0], [dir] .btn-defaultz[disabled][data-v-d642a1d0], [dir] .btn-defaultz[disabled][data-v-d642a1d0]:hover, [dir] .btn-defaultz[disabled][data-v-d642a1d0]:focus, [dir] .btn-defaultz[disabled][data-v-d642a1d0]:active, [dir] .btn-defaultz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-defaultz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-defaultz.active[data-v-d642a1d0] {\n  background-color: #ffffff;\n  border-color: #e2e2e4;\n}\n\n/*********************************************/\n.btn-primaryz[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-primaryz[data-v-d642a1d0] {\n  background-color: #007AFF;\n  border-color: #007AFF;\n}\n.btn-primaryz[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-primaryz[data-v-d642a1d0]:hover {\n  background-color: #3395ff !important;\n  border-color: #3395ff;\n}\n[dir] .btn-primaryz[data-v-d642a1d0]:active, [dir] .btn-primaryz.active[data-v-d642a1d0], [dir] .btn-primaryz.active[data-v-d642a1d0]:focus, [dir] .btn-primaryz[data-v-d642a1d0]:active:focus, [dir] .btn-primaryz[data-v-d642a1d0]:active:hover, [dir] .btn-primaryz.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #006ee6 !important;\n  border-color: #006ee6;\n}\n[dir] .btn-primaryz[data-v-d642a1d0]:focus {\n  background-color: #4da2ff;\n  border-color: #4da2ff;\n}\n.btn-primaryz.disabled[data-v-d642a1d0]:hover, .btn-primaryz.disabled[data-v-d642a1d0]:focus, .btn-primaryz.disabled[data-v-d642a1d0]:active, .btn-primaryz.disabled.active[data-v-d642a1d0], .btn-primaryz[disabled][data-v-d642a1d0], .btn-primaryz[disabled][data-v-d642a1d0]:hover, .btn-primaryz[disabled][data-v-d642a1d0]:focus, .btn-primaryz[disabled][data-v-d642a1d0]:active, .btn-primaryz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:active, fieldset[disabled] .btn-primaryz.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-primaryz.disabled[data-v-d642a1d0]:hover, [dir] .btn-primaryz.disabled[data-v-d642a1d0]:focus, [dir] .btn-primaryz.disabled[data-v-d642a1d0]:active, [dir] .btn-primaryz.disabled.active[data-v-d642a1d0], [dir] .btn-primaryz[disabled][data-v-d642a1d0], [dir] .btn-primaryz[disabled][data-v-d642a1d0]:hover, [dir] .btn-primaryz[disabled][data-v-d642a1d0]:focus, [dir] .btn-primaryz[disabled][data-v-d642a1d0]:active, [dir] .btn-primaryz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-primaryz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-primaryz.active[data-v-d642a1d0] {\n  background-color: #66afff;\n  border-color: #66afff;\n}\n.btn-primaryz.btn-o[data-v-d642a1d0] {\n  color: #007AFF;\n}\n[dir] .btn-primaryz.btn-o[data-v-d642a1d0] {\n  border: 1px solid #007AFF;\n}\n.btn-primaryz.btn-o[data-v-d642a1d0]:hover {\n  /*color: #3395ff;\n  border-color: #3395ff;*/\n}\n[dir] .btn-primaryz.btn-o[data-v-d642a1d0]:hover {\n  background: none !important;\n}\n.btn-primaryz.btn-o[data-v-d642a1d0]:active, .btn-primaryz.btn-o.active[data-v-d642a1d0], .btn-primaryz.btn-o.active[data-v-d642a1d0]:focus, .btn-primaryz.btn-o[data-v-d642a1d0]:active:focus, .btn-primaryz.btn-o[data-v-d642a1d0]:active:hover {\n  color: #0055b3 !important;\n}\n[dir] .btn-primaryz.btn-o[data-v-d642a1d0]:active, [dir] .btn-primaryz.btn-o.active[data-v-d642a1d0], [dir] .btn-primaryz.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-primaryz.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-primaryz.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #0055b3 !important;\n}\n.btn-primaryz.btn-o[data-v-d642a1d0]:focus {\n  color: #3395ff;\n}\n[dir] .btn-primaryz.btn-o[data-v-d642a1d0]:focus {\n  background-color: #66afff;\n  border-color: #66afff;\n}\n.btn-primaryz.btn-o.disabled[data-v-d642a1d0]:hover, .btn-primaryz.btn-o.disabled[data-v-d642a1d0]:focus, .btn-primaryz.btn-o.disabled[data-v-d642a1d0]:active, .btn-primaryz.btn-o.disabled.active[data-v-d642a1d0], .btn-primaryz.btn-o[disabled][data-v-d642a1d0], .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:hover, .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:focus, .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:active, .btn-primaryz.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-primaryz.btn-o.active[data-v-d642a1d0] {\n  color: #66afff;\n}\n[dir] .btn-primaryz.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-primaryz.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-primaryz.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-primaryz.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-primaryz.btn-o[disabled][data-v-d642a1d0], [dir] .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-primaryz.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-primaryz.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-primaryz.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-primaryz.btn-o.active[data-v-d642a1d0] {\n  border-color: #66afff;\n}\n\n/*********************************************/\n.btn-successz[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-successz[data-v-d642a1d0] {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n.btn-successz[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-successz[data-v-d642a1d0]:hover {\n  background-color: #80c780 !important;\n  border-color: #80c780;\n}\n[dir] .btn-successz[data-v-d642a1d0]:active, [dir] .btn-successz.active[data-v-d642a1d0], [dir] .btn-successz.active[data-v-d642a1d0]:focus, [dir] .btn-successz[data-v-d642a1d0]:active:focus, [dir] .btn-successz[data-v-d642a1d0]:active:hover, [dir] .btn-successz.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #4cae4c !important;\n  border-color: #4cae4c;\n}\n[dir] .btn-successz[data-v-d642a1d0]:focus {\n  background-color: #91cf91;\n  border-color: #91cf91;\n}\n.btn-successz.disabled[data-v-d642a1d0]:hover, .btn-successz.disabled[data-v-d642a1d0]:focus, .btn-successz.disabled[data-v-d642a1d0]:active, .btn-successz.disabled.active[data-v-d642a1d0], .btn-successz[disabled][data-v-d642a1d0], .btn-successz[disabled][data-v-d642a1d0]:hover, .btn-successz[disabled][data-v-d642a1d0]:focus, .btn-successz[disabled][data-v-d642a1d0]:active, .btn-successz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-successz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-successz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-successz[data-v-d642a1d0]:active, fieldset[disabled] .btn-successz.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-successz.disabled[data-v-d642a1d0]:hover, [dir] .btn-successz.disabled[data-v-d642a1d0]:focus, [dir] .btn-successz.disabled[data-v-d642a1d0]:active, [dir] .btn-successz.disabled.active[data-v-d642a1d0], [dir] .btn-successz[disabled][data-v-d642a1d0], [dir] .btn-successz[disabled][data-v-d642a1d0]:hover, [dir] .btn-successz[disabled][data-v-d642a1d0]:focus, [dir] .btn-successz[disabled][data-v-d642a1d0]:active, [dir] .btn-successz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-successz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-successz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-successz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-successz.active[data-v-d642a1d0] {\n  background-color: #a3d7a3;\n  border-color: #a3d7a3;\n}\n.btn-successz.btn-o[data-v-d642a1d0] {\n  color: #5cb85c;\n}\n[dir] .btn-successz.btn-o[data-v-d642a1d0] {\n  border: 1px solid #5cb85c;\n}\n.btn-successz.btn-o[data-v-d642a1d0]:hover {\n  /*color: #80c780;\n  border-color: #80c780;*/\n}\n[dir] .btn-successz.btn-o[data-v-d642a1d0]:hover {\n  background: none !important;\n}\n.btn-successz.btn-o[data-v-d642a1d0]:active, .btn-successz.btn-o.active[data-v-d642a1d0], .btn-successz.btn-o.active[data-v-d642a1d0]:focus, .btn-successz.btn-o[data-v-d642a1d0]:active:focus, .btn-successz.btn-o[data-v-d642a1d0]:active:hover {\n  color: #3d8b3d !important;\n}\n[dir] .btn-successz.btn-o[data-v-d642a1d0]:active, [dir] .btn-successz.btn-o.active[data-v-d642a1d0], [dir] .btn-successz.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-successz.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-successz.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #3d8b3d !important;\n}\n.btn-successz.btn-o[data-v-d642a1d0]:focus {\n  color: #80c780;\n}\n[dir] .btn-successz.btn-o[data-v-d642a1d0]:focus {\n  background-color: #a3d7a3;\n  border-color: #a3d7a3;\n}\n.btn-successz.btn-o.disabled[data-v-d642a1d0]:hover, .btn-successz.btn-o.disabled[data-v-d642a1d0]:focus, .btn-successz.btn-o.disabled[data-v-d642a1d0]:active, .btn-successz.btn-o.disabled.active[data-v-d642a1d0], .btn-successz.btn-o[disabled][data-v-d642a1d0], .btn-successz.btn-o[disabled][data-v-d642a1d0]:hover, .btn-successz.btn-o[disabled][data-v-d642a1d0]:focus, .btn-successz.btn-o[disabled][data-v-d642a1d0]:active, .btn-successz.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-successz.btn-o.active[data-v-d642a1d0] {\n  color: #a3d7a3;\n}\n[dir] .btn-successz.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-successz.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-successz.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-successz.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-successz.btn-o[disabled][data-v-d642a1d0], [dir] .btn-successz.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-successz.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-successz.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-successz.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-successz.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-successz.btn-o.active[data-v-d642a1d0] {\n  border-color: #a3d7a3;\n}\n\n/*********************************************/\n.btn-infoz[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-infoz[data-v-d642a1d0] {\n  background-color: #46b8da;\n  border-color: #46b8da;\n}\n.btn-infoz[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-infoz[data-v-d642a1d0]:hover {\n  background-color: #71c8e2 !important;\n  border-color: #71c8e2;\n}\n[dir] .btn-infoz[data-v-d642a1d0]:active, [dir] .btn-infoz.active[data-v-d642a1d0], [dir] .btn-infoz.active[data-v-d642a1d0]:focus, [dir] .btn-infoz[data-v-d642a1d0]:active:focus, [dir] .btn-infoz[data-v-d642a1d0]:active:hover, [dir] .btn-infoz.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #31b0d6 !important;\n  border-color: #31b0d6;\n}\n[dir] .btn-infoz[data-v-d642a1d0]:focus {\n  background-color: #86d0e7;\n  border-color: #86d0e7;\n}\n.btn-infoz.disabled[data-v-d642a1d0]:hover, .btn-infoz.disabled[data-v-d642a1d0]:focus, .btn-infoz.disabled[data-v-d642a1d0]:active, .btn-infoz.disabled.active[data-v-d642a1d0], .btn-infoz[disabled][data-v-d642a1d0], .btn-infoz[disabled][data-v-d642a1d0]:hover, .btn-infoz[disabled][data-v-d642a1d0]:focus, .btn-infoz[disabled][data-v-d642a1d0]:active, .btn-infoz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-infoz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-infoz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-infoz[data-v-d642a1d0]:active, fieldset[disabled] .btn-infoz.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-infoz.disabled[data-v-d642a1d0]:hover, [dir] .btn-infoz.disabled[data-v-d642a1d0]:focus, [dir] .btn-infoz.disabled[data-v-d642a1d0]:active, [dir] .btn-infoz.disabled.active[data-v-d642a1d0], [dir] .btn-infoz[disabled][data-v-d642a1d0], [dir] .btn-infoz[disabled][data-v-d642a1d0]:hover, [dir] .btn-infoz[disabled][data-v-d642a1d0]:focus, [dir] .btn-infoz[disabled][data-v-d642a1d0]:active, [dir] .btn-infoz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-infoz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-infoz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-infoz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-infoz.active[data-v-d642a1d0] {\n  background-color: #9bd9eb;\n  border-color: #9bd9eb;\n}\n.btn-infoz.btn-o[data-v-d642a1d0] {\n  color: #46b8da;\n}\n[dir] .btn-infoz.btn-o[data-v-d642a1d0] {\n  border: 1px solid #46b8da;\n}\n.btn-infoz.btn-o[data-v-d642a1d0]:hover {\n  /*color: #71c8e2;\n  border-color: #71c8e2;*/\n}\n[dir] .btn-infoz.btn-o[data-v-d642a1d0]:hover {\n  background: none !important;\n}\n.btn-infoz.btn-o[data-v-d642a1d0]:active, .btn-infoz.btn-o.active[data-v-d642a1d0], .btn-infoz.btn-o.active[data-v-d642a1d0]:focus, .btn-infoz.btn-o[data-v-d642a1d0]:active:focus, .btn-infoz.btn-o[data-v-d642a1d0]:active:hover {\n  color: #2390b0 !important;\n}\n[dir] .btn-infoz.btn-o[data-v-d642a1d0]:active, [dir] .btn-infoz.btn-o.active[data-v-d642a1d0], [dir] .btn-infoz.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-infoz.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-infoz.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #2390b0 !important;\n}\n.btn-infoz.btn-o[data-v-d642a1d0]:focus {\n  color: #71c8e2;\n}\n[dir] .btn-infoz.btn-o[data-v-d642a1d0]:focus {\n  background-color: #9bd9eb;\n  border-color: #9bd9eb;\n}\n.btn-infoz.btn-o.disabled[data-v-d642a1d0]:hover, .btn-infoz.btn-o.disabled[data-v-d642a1d0]:focus, .btn-infoz.btn-o.disabled[data-v-d642a1d0]:active, .btn-infoz.btn-o.disabled.active[data-v-d642a1d0], .btn-infoz.btn-o[disabled][data-v-d642a1d0], .btn-infoz.btn-o[disabled][data-v-d642a1d0]:hover, .btn-infoz.btn-o[disabled][data-v-d642a1d0]:focus, .btn-infoz.btn-o[disabled][data-v-d642a1d0]:active, .btn-infoz.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-infoz.btn-o.active[data-v-d642a1d0] {\n  color: #9bd9eb;\n}\n[dir] .btn-infoz.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-infoz.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-infoz.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-infoz.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-infoz.btn-o[disabled][data-v-d642a1d0], [dir] .btn-infoz.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-infoz.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-infoz.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-infoz.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-infoz.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-infoz.btn-o.active[data-v-d642a1d0] {\n  border-color: #9bd9eb;\n}\n\n/*********************************************/\n.btn-warningz[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-warningz[data-v-d642a1d0] {\n  background-color: #eea236;\n  border-color: #eea236;\n}\n.btn-warningz[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-warningz[data-v-d642a1d0]:hover {\n  background-color: #f2b865 !important;\n  border-color: #f2b865;\n}\n[dir] .btn-warningz[data-v-d642a1d0]:active, [dir] .btn-warningz.active[data-v-d642a1d0], [dir] .btn-warningz.active[data-v-d642a1d0]:focus, [dir] .btn-warningz[data-v-d642a1d0]:active:focus, [dir] .btn-warningz[data-v-d642a1d0]:active:hover, [dir] .btn-warningz.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #ec971e !important;\n  border-color: #ec971e;\n}\n[dir] .btn-warningz[data-v-d642a1d0]:focus {\n  background-color: #f4c37d;\n  border-color: #f4c37d;\n}\n.btn-warningz.disabled[data-v-d642a1d0]:hover, .btn-warningz.disabled[data-v-d642a1d0]:focus, .btn-warningz.disabled[data-v-d642a1d0]:active, .btn-warningz.disabled.active[data-v-d642a1d0], .btn-warningz[disabled][data-v-d642a1d0], .btn-warningz[disabled][data-v-d642a1d0]:hover, .btn-warningz[disabled][data-v-d642a1d0]:focus, .btn-warningz[disabled][data-v-d642a1d0]:active, .btn-warningz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-warningz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-warningz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-warningz[data-v-d642a1d0]:active, fieldset[disabled] .btn-warningz.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-warningz.disabled[data-v-d642a1d0]:hover, [dir] .btn-warningz.disabled[data-v-d642a1d0]:focus, [dir] .btn-warningz.disabled[data-v-d642a1d0]:active, [dir] .btn-warningz.disabled.active[data-v-d642a1d0], [dir] .btn-warningz[disabled][data-v-d642a1d0], [dir] .btn-warningz[disabled][data-v-d642a1d0]:hover, [dir] .btn-warningz[disabled][data-v-d642a1d0]:focus, [dir] .btn-warningz[disabled][data-v-d642a1d0]:active, [dir] .btn-warningz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-warningz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-warningz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-warningz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-warningz.active[data-v-d642a1d0] {\n  background-color: #f6ce94;\n  border-color: #f6ce94;\n}\n.btn-warningz.btn-o[data-v-d642a1d0] {\n  color: #eea236;\n}\n[dir] .btn-warningz.btn-o[data-v-d642a1d0] {\n  border: 1px solid #eea236;\n}\n.btn-warningz.btn-o[data-v-d642a1d0]:hover {\n  /*color: #f2b865;\n  border-color: #f2b865;*/\n}\n[dir] .btn-warningz.btn-o[data-v-d642a1d0]:hover {\n  background: none !important;\n}\n.btn-warningz.btn-o[data-v-d642a1d0]:active, .btn-warningz.btn-o.active[data-v-d642a1d0], .btn-warningz.btn-o.active[data-v-d642a1d0]:focus, .btn-warningz.btn-o[data-v-d642a1d0]:active:focus, .btn-warningz.btn-o[data-v-d642a1d0]:active:hover {\n  color: #c77c11 !important;\n}\n[dir] .btn-warningz.btn-o[data-v-d642a1d0]:active, [dir] .btn-warningz.btn-o.active[data-v-d642a1d0], [dir] .btn-warningz.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-warningz.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-warningz.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #c77c11 !important;\n}\n.btn-warningz.btn-o[data-v-d642a1d0]:focus {\n  color: #f2b865;\n}\n[dir] .btn-warningz.btn-o[data-v-d642a1d0]:focus {\n  background-color: #f6ce94;\n  border-color: #f6ce94;\n}\n.btn-warningz.btn-o.disabled[data-v-d642a1d0]:hover, .btn-warningz.btn-o.disabled[data-v-d642a1d0]:focus, .btn-warningz.btn-o.disabled[data-v-d642a1d0]:active, .btn-warningz.btn-o.disabled.active[data-v-d642a1d0], .btn-warningz.btn-o[disabled][data-v-d642a1d0], .btn-warningz.btn-o[disabled][data-v-d642a1d0]:hover, .btn-warningz.btn-o[disabled][data-v-d642a1d0]:focus, .btn-warningz.btn-o[disabled][data-v-d642a1d0]:active, .btn-warningz.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-warningz.btn-o.active[data-v-d642a1d0] {\n  color: #f6ce94;\n}\n[dir] .btn-warningz.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-warningz.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-warningz.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-warningz.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-warningz.btn-o[disabled][data-v-d642a1d0], [dir] .btn-warningz.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-warningz.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-warningz.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-warningz.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-warningz.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-warningz.btn-o.active[data-v-d642a1d0] {\n  border-color: #f6ce94;\n}\n\n/*********************************************/\n.btn-dangerz[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dangerz[data-v-d642a1d0] {\n  background-color: #d43f3a;\n  border-color: #d43f3a;\n}\n.btn-dangerz[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dangerz[data-v-d642a1d0]:hover {\n  background-color: #dd6864 !important;\n  border-color: #dd6864;\n}\n[dir] .btn-dangerz[data-v-d642a1d0]:active, [dir] .btn-dangerz.active[data-v-d642a1d0], [dir] .btn-dangerz.active[data-v-d642a1d0]:focus, [dir] .btn-dangerz[data-v-d642a1d0]:active:focus, [dir] .btn-dangerz[data-v-d642a1d0]:active:hover, [dir] .btn-dangerz.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #c9312c !important;\n  border-color: #c9312c;\n}\n[dir] .btn-dangerz[data-v-d642a1d0]:focus {\n  background-color: #e27c79;\n  border-color: #e27c79;\n}\n.btn-dangerz.disabled[data-v-d642a1d0]:hover, .btn-dangerz.disabled[data-v-d642a1d0]:focus, .btn-dangerz.disabled[data-v-d642a1d0]:active, .btn-dangerz.disabled.active[data-v-d642a1d0], .btn-dangerz[disabled][data-v-d642a1d0], .btn-dangerz[disabled][data-v-d642a1d0]:hover, .btn-dangerz[disabled][data-v-d642a1d0]:focus, .btn-dangerz[disabled][data-v-d642a1d0]:active, .btn-dangerz[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:active, fieldset[disabled] .btn-dangerz.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dangerz.disabled[data-v-d642a1d0]:hover, [dir] .btn-dangerz.disabled[data-v-d642a1d0]:focus, [dir] .btn-dangerz.disabled[data-v-d642a1d0]:active, [dir] .btn-dangerz.disabled.active[data-v-d642a1d0], [dir] .btn-dangerz[disabled][data-v-d642a1d0], [dir] .btn-dangerz[disabled][data-v-d642a1d0]:hover, [dir] .btn-dangerz[disabled][data-v-d642a1d0]:focus, [dir] .btn-dangerz[disabled][data-v-d642a1d0]:active, [dir] .btn-dangerz[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dangerz[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dangerz.active[data-v-d642a1d0] {\n  background-color: #e6918e;\n  border-color: #e6918e;\n}\n.btn-dangerz.btn-o[data-v-d642a1d0] {\n  color: #d43f3a;\n}\n[dir] .btn-dangerz.btn-o[data-v-d642a1d0] {\n  border: 1px solid #d43f3a;\n}\n.btn-dangerz.btn-o[data-v-d642a1d0]:hover {\n  /*color: #dd6864;\n  border-color: #dd6864;*/\n}\n[dir] .btn-dangerz.btn-o[data-v-d642a1d0]:hover {\n  background: none !important;\n}\n.btn-dangerz.btn-o[data-v-d642a1d0]:active, .btn-dangerz.btn-o.active[data-v-d642a1d0], .btn-dangerz.btn-o.active[data-v-d642a1d0]:focus, .btn-dangerz.btn-o[data-v-d642a1d0]:active:focus, .btn-dangerz.btn-o[data-v-d642a1d0]:active:hover {\n  color: #9f2723 !important;\n}\n[dir] .btn-dangerz.btn-o[data-v-d642a1d0]:active, [dir] .btn-dangerz.btn-o.active[data-v-d642a1d0], [dir] .btn-dangerz.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dangerz.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dangerz.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #9f2723 !important;\n}\n.btn-dangerz.btn-o[data-v-d642a1d0]:focus {\n  color: #dd6864;\n}\n[dir] .btn-dangerz.btn-o[data-v-d642a1d0]:focus {\n  background-color: #e6918e;\n  border-color: #e6918e;\n}\n.btn-dangerz.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dangerz.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dangerz.btn-o.disabled[data-v-d642a1d0]:active, .btn-dangerz.btn-o.disabled.active[data-v-d642a1d0], .btn-dangerz.btn-o[disabled][data-v-d642a1d0], .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:active, .btn-dangerz.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dangerz.btn-o.active[data-v-d642a1d0] {\n  color: #e6918e;\n}\n[dir] .btn-dangerz.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dangerz.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dangerz.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dangerz.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dangerz.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dangerz.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dangerz.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dangerz.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dangerz.btn-o.active[data-v-d642a1d0] {\n  border-color: #e6918e;\n}\n\n/*********************************************/\n.btn-azure[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-azure[data-v-d642a1d0] {\n  background-color: #0095C8;\n  border-color: #0095C8;\n}\n.btn-azure[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-azure[data-v-d642a1d0]:hover {\n  background-color: #00bbfb !important;\n  border-color: #00bbfb;\n}\n[dir] .btn-azure[data-v-d642a1d0]:active, [dir] .btn-azure.active[data-v-d642a1d0], [dir] .btn-azure.active[data-v-d642a1d0]:focus, [dir] .btn-azure[data-v-d642a1d0]:active:focus, [dir] .btn-azure[data-v-d642a1d0]:active:hover, [dir] .btn-azure.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #0082af !important;\n  border-color: #0082af;\n}\n.btn-azure[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-azure[data-v-d642a1d0]:focus {\n  background-color: #16c3ff;\n  border-color: #16c3ff;\n}\n.btn-azure.disabled[data-v-d642a1d0]:hover, .btn-azure.disabled[data-v-d642a1d0]:focus, .btn-azure.disabled[data-v-d642a1d0]:active, .btn-azure.disabled.active[data-v-d642a1d0], .btn-azure[disabled][data-v-d642a1d0], .btn-azure[disabled][data-v-d642a1d0]:hover, .btn-azure[disabled][data-v-d642a1d0]:focus, .btn-azure[disabled][data-v-d642a1d0]:active, .btn-azure[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-azure[data-v-d642a1d0]:hover, fieldset[disabled] .btn-azure[data-v-d642a1d0]:focus, fieldset[disabled] .btn-azure[data-v-d642a1d0]:active, fieldset[disabled] .btn-azure.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-azure.disabled[data-v-d642a1d0]:hover, [dir] .btn-azure.disabled[data-v-d642a1d0]:focus, [dir] .btn-azure.disabled[data-v-d642a1d0]:active, [dir] .btn-azure.disabled.active[data-v-d642a1d0], [dir] .btn-azure[disabled][data-v-d642a1d0], [dir] .btn-azure[disabled][data-v-d642a1d0]:hover, [dir] .btn-azure[disabled][data-v-d642a1d0]:focus, [dir] .btn-azure[disabled][data-v-d642a1d0]:active, [dir] .btn-azure[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-azure[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-azure[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-azure[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-azure.active[data-v-d642a1d0] {\n  background-color: #2fcaff;\n  border-color: #2fcaff;\n}\n.btn-azure.btn-o[data-v-d642a1d0] {\n  color: #0095C8;\n}\n[dir] .btn-azure.btn-o[data-v-d642a1d0] {\n  border: 1px solid #0095C8;\n}\n.btn-azure.btn-o[data-v-d642a1d0]:hover {\n  color: #00bbfb;\n}\n[dir] .btn-azure.btn-o[data-v-d642a1d0]:hover {\n  border-color: #00bbfb;\n  background: none !important;\n}\n.btn-azure.btn-o[data-v-d642a1d0]:active, .btn-azure.btn-o.active[data-v-d642a1d0], .btn-azure.btn-o.active[data-v-d642a1d0]:focus, .btn-azure.btn-o[data-v-d642a1d0]:active:focus, .btn-azure.btn-o[data-v-d642a1d0]:active:hover {\n  color: #005c7c !important;\n}\n[dir] .btn-azure.btn-o[data-v-d642a1d0]:active, [dir] .btn-azure.btn-o.active[data-v-d642a1d0], [dir] .btn-azure.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-azure.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-azure.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #005c7c !important;\n}\n.btn-azure.btn-o[data-v-d642a1d0]:focus {\n  color: #00bbfb;\n}\n[dir] .btn-azure.btn-o[data-v-d642a1d0]:focus {\n  background-color: #2fcaff;\n  border-color: #2fcaff;\n}\n.btn-azure.btn-o.disabled[data-v-d642a1d0]:hover, .btn-azure.btn-o.disabled[data-v-d642a1d0]:focus, .btn-azure.btn-o.disabled[data-v-d642a1d0]:active, .btn-azure.btn-o.disabled.active[data-v-d642a1d0], .btn-azure.btn-o[disabled][data-v-d642a1d0], .btn-azure.btn-o[disabled][data-v-d642a1d0]:hover, .btn-azure.btn-o[disabled][data-v-d642a1d0]:focus, .btn-azure.btn-o[disabled][data-v-d642a1d0]:active, .btn-azure.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-azure.btn-o.active[data-v-d642a1d0] {\n  color: #2fcaff;\n}\n[dir] .btn-azure.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-azure.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-azure.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-azure.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-azure.btn-o[disabled][data-v-d642a1d0], [dir] .btn-azure.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-azure.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-azure.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-azure.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-azure.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-azure.btn-o.active[data-v-d642a1d0] {\n  border-color: #2fcaff;\n}\n\n/*********************************************/\n.btn-light-azure[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-azure[data-v-d642a1d0] {\n  background-color: #00a8e2;\n  border-color: #00a8e2;\n}\n.btn-light-azure[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-azure[data-v-d642a1d0]:hover {\n  background-color: #16c3ff !important;\n  border-color: #16c3ff;\n}\n[dir] .btn-light-azure[data-v-d642a1d0]:active, [dir] .btn-light-azure.active[data-v-d642a1d0], [dir] .btn-light-azure.active[data-v-d642a1d0]:focus, [dir] .btn-light-azure[data-v-d642a1d0]:active:focus, [dir] .btn-light-azure[data-v-d642a1d0]:active:hover, [dir] .btn-light-azure.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #0095c8 !important;\n  border-color: #0095c8;\n}\n.btn-light-azure[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-azure[data-v-d642a1d0]:focus {\n  background-color: #2fcaff;\n  border-color: #2fcaff;\n}\n.btn-light-azure.disabled[data-v-d642a1d0]:hover, .btn-light-azure.disabled[data-v-d642a1d0]:focus, .btn-light-azure.disabled[data-v-d642a1d0]:active, .btn-light-azure.disabled.active[data-v-d642a1d0], .btn-light-azure[disabled][data-v-d642a1d0], .btn-light-azure[disabled][data-v-d642a1d0]:hover, .btn-light-azure[disabled][data-v-d642a1d0]:focus, .btn-light-azure[disabled][data-v-d642a1d0]:active, .btn-light-azure[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-azure.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-azure.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-azure.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-azure.disabled[data-v-d642a1d0]:active, [dir] .btn-light-azure.disabled.active[data-v-d642a1d0], [dir] .btn-light-azure[disabled][data-v-d642a1d0], [dir] .btn-light-azure[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-azure[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-azure[disabled][data-v-d642a1d0]:active, [dir] .btn-light-azure[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-azure[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-azure.active[data-v-d642a1d0] {\n  background-color: #49d0ff;\n  border-color: #49d0ff;\n}\n.btn-light-azure.btn-o[data-v-d642a1d0] {\n  color: #00a8e2;\n}\n[dir] .btn-light-azure.btn-o[data-v-d642a1d0] {\n  border: 1px solid #00a8e2;\n}\n.btn-light-azure.btn-o[data-v-d642a1d0]:hover {\n  color: #16c3ff;\n}\n[dir] .btn-light-azure.btn-o[data-v-d642a1d0]:hover {\n  border-color: #16c3ff;\n  background: none !important;\n}\n.btn-light-azure.btn-o[data-v-d642a1d0]:active, .btn-light-azure.btn-o.active[data-v-d642a1d0], .btn-light-azure.btn-o.active[data-v-d642a1d0]:focus, .btn-light-azure.btn-o[data-v-d642a1d0]:active:focus, .btn-light-azure.btn-o[data-v-d642a1d0]:active:hover {\n  color: #006f95 !important;\n}\n[dir] .btn-light-azure.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-azure.btn-o.active[data-v-d642a1d0], [dir] .btn-light-azure.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-azure.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-azure.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #006f95 !important;\n}\n.btn-light-azure.btn-o[data-v-d642a1d0]:focus {\n  color: #16c3ff;\n}\n[dir] .btn-light-azure.btn-o[data-v-d642a1d0]:focus {\n  background-color: #49d0ff;\n  border-color: #49d0ff;\n}\n.btn-light-azure.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-azure.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-azure.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-azure.btn-o.disabled.active[data-v-d642a1d0], .btn-light-azure.btn-o[disabled][data-v-d642a1d0], .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-azure.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-azure.btn-o.active[data-v-d642a1d0] {\n  color: #49d0ff;\n}\n[dir] .btn-light-azure.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-azure.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-azure.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-azure.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-azure.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-azure.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-azure.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-azure.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-azure.btn-o.active[data-v-d642a1d0] {\n  border-color: #49d0ff;\n}\n\n/*********************************************/\n.btn-dark-azure[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-azure[data-v-d642a1d0] {\n  background-color: #006f95;\n  border-color: #006f95;\n}\n.btn-dark-azure[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-azure[data-v-d642a1d0]:hover {\n  background-color: #0095c8 !important;\n  border-color: #0095c8;\n}\n[dir] .btn-dark-azure[data-v-d642a1d0]:active, [dir] .btn-dark-azure.active[data-v-d642a1d0], [dir] .btn-dark-azure.active[data-v-d642a1d0]:focus, [dir] .btn-dark-azure[data-v-d642a1d0]:active:focus, [dir] .btn-dark-azure[data-v-d642a1d0]:active:hover, [dir] .btn-dark-azure.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #005c7c !important;\n  border-color: #005c7c;\n}\n.btn-dark-azure[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-azure[data-v-d642a1d0]:focus {\n  background-color: #00a8e2;\n  border-color: #00a8e2;\n}\n.btn-dark-azure.disabled[data-v-d642a1d0]:hover, .btn-dark-azure.disabled[data-v-d642a1d0]:focus, .btn-dark-azure.disabled[data-v-d642a1d0]:active, .btn-dark-azure.disabled.active[data-v-d642a1d0], .btn-dark-azure[disabled][data-v-d642a1d0], .btn-dark-azure[disabled][data-v-d642a1d0]:hover, .btn-dark-azure[disabled][data-v-d642a1d0]:focus, .btn-dark-azure[disabled][data-v-d642a1d0]:active, .btn-dark-azure[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-azure.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-azure.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-azure.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-azure.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-azure.disabled.active[data-v-d642a1d0], [dir] .btn-dark-azure[disabled][data-v-d642a1d0], [dir] .btn-dark-azure[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-azure[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-azure[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-azure[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-azure[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-azure.active[data-v-d642a1d0] {\n  background-color: #00bbfb;\n  border-color: #00bbfb;\n}\n.btn-dark-azure.btn-o[data-v-d642a1d0] {\n  color: #006f95;\n}\n[dir] .btn-dark-azure.btn-o[data-v-d642a1d0] {\n  border: 1px solid #006f95;\n}\n.btn-dark-azure.btn-o[data-v-d642a1d0]:hover {\n  color: #0095c8;\n}\n[dir] .btn-dark-azure.btn-o[data-v-d642a1d0]:hover {\n  border-color: #0095c8;\n  background: none !important;\n}\n.btn-dark-azure.btn-o[data-v-d642a1d0]:active, .btn-dark-azure.btn-o.active[data-v-d642a1d0], .btn-dark-azure.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-azure.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-azure.btn-o[data-v-d642a1d0]:active:hover {\n  color: #003649 !important;\n}\n[dir] .btn-dark-azure.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-azure.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-azure.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-azure.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-azure.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #003649 !important;\n}\n.btn-dark-azure.btn-o[data-v-d642a1d0]:focus {\n  color: #0095c8;\n}\n[dir] .btn-dark-azure.btn-o[data-v-d642a1d0]:focus {\n  background-color: #00bbfb;\n  border-color: #00bbfb;\n}\n.btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-azure.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-azure.btn-o[disabled][data-v-d642a1d0], .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-azure.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-azure.btn-o.active[data-v-d642a1d0] {\n  color: #00bbfb;\n}\n[dir] .btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-azure.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-azure.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-azure.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-azure.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-azure.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-azure.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-azure.btn-o.active[data-v-d642a1d0] {\n  border-color: #00bbfb;\n}\n\n/*********************************************/\n.btn-blue[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-blue[data-v-d642a1d0] {\n  background-color: #5F8295;\n  border-color: #5F8295;\n}\n.btn-blue[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-blue[data-v-d642a1d0]:hover {\n  background-color: #7c9bab !important;\n  border-color: #7c9bab;\n}\n[dir] .btn-blue[data-v-d642a1d0]:active, [dir] .btn-blue.active[data-v-d642a1d0], [dir] .btn-blue.active[data-v-d642a1d0]:focus, [dir] .btn-blue[data-v-d642a1d0]:active:focus, [dir] .btn-blue[data-v-d642a1d0]:active:hover, [dir] .btn-blue.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #557485 !important;\n  border-color: #557485;\n}\n.btn-blue[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-blue[data-v-d642a1d0]:focus {\n  background-color: #8ba6b5;\n  border-color: #8ba6b5;\n}\n.btn-blue.disabled[data-v-d642a1d0]:hover, .btn-blue.disabled[data-v-d642a1d0]:focus, .btn-blue.disabled[data-v-d642a1d0]:active, .btn-blue.disabled.active[data-v-d642a1d0], .btn-blue[disabled][data-v-d642a1d0], .btn-blue[disabled][data-v-d642a1d0]:hover, .btn-blue[disabled][data-v-d642a1d0]:focus, .btn-blue[disabled][data-v-d642a1d0]:active, .btn-blue[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-blue[data-v-d642a1d0]:hover, fieldset[disabled] .btn-blue[data-v-d642a1d0]:focus, fieldset[disabled] .btn-blue[data-v-d642a1d0]:active, fieldset[disabled] .btn-blue.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-blue.disabled[data-v-d642a1d0]:hover, [dir] .btn-blue.disabled[data-v-d642a1d0]:focus, [dir] .btn-blue.disabled[data-v-d642a1d0]:active, [dir] .btn-blue.disabled.active[data-v-d642a1d0], [dir] .btn-blue[disabled][data-v-d642a1d0], [dir] .btn-blue[disabled][data-v-d642a1d0]:hover, [dir] .btn-blue[disabled][data-v-d642a1d0]:focus, [dir] .btn-blue[disabled][data-v-d642a1d0]:active, [dir] .btn-blue[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-blue[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-blue[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-blue[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-blue.active[data-v-d642a1d0] {\n  background-color: #9bb2bf;\n  border-color: #9bb2bf;\n}\n.btn-blue.btn-o[data-v-d642a1d0] {\n  color: #5F8295;\n}\n[dir] .btn-blue.btn-o[data-v-d642a1d0] {\n  border: 1px solid #5F8295;\n}\n.btn-blue.btn-o[data-v-d642a1d0]:hover {\n  color: #7c9bab;\n}\n[dir] .btn-blue.btn-o[data-v-d642a1d0]:hover {\n  border-color: #7c9bab;\n  background: none !important;\n}\n.btn-blue.btn-o[data-v-d642a1d0]:active, .btn-blue.btn-o.active[data-v-d642a1d0], .btn-blue.btn-o.active[data-v-d642a1d0]:focus, .btn-blue.btn-o[data-v-d642a1d0]:active:focus, .btn-blue.btn-o[data-v-d642a1d0]:active:hover {\n  color: #415966 !important;\n}\n[dir] .btn-blue.btn-o[data-v-d642a1d0]:active, [dir] .btn-blue.btn-o.active[data-v-d642a1d0], [dir] .btn-blue.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-blue.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-blue.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #415966 !important;\n}\n.btn-blue.btn-o[data-v-d642a1d0]:focus {\n  color: #7c9bab;\n}\n[dir] .btn-blue.btn-o[data-v-d642a1d0]:focus {\n  background-color: #9bb2bf;\n  border-color: #9bb2bf;\n}\n.btn-blue.btn-o.disabled[data-v-d642a1d0]:hover, .btn-blue.btn-o.disabled[data-v-d642a1d0]:focus, .btn-blue.btn-o.disabled[data-v-d642a1d0]:active, .btn-blue.btn-o.disabled.active[data-v-d642a1d0], .btn-blue.btn-o[disabled][data-v-d642a1d0], .btn-blue.btn-o[disabled][data-v-d642a1d0]:hover, .btn-blue.btn-o[disabled][data-v-d642a1d0]:focus, .btn-blue.btn-o[disabled][data-v-d642a1d0]:active, .btn-blue.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-blue.btn-o.active[data-v-d642a1d0] {\n  color: #9bb2bf;\n}\n[dir] .btn-blue.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-blue.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-blue.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-blue.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-blue.btn-o[disabled][data-v-d642a1d0], [dir] .btn-blue.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-blue.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-blue.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-blue.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-blue.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-blue.btn-o.active[data-v-d642a1d0] {\n  border-color: #9bb2bf;\n}\n\n/*********************************************/\n.btn-light-blue[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-blue[data-v-d642a1d0] {\n  background-color: #7c9bab;\n  border-color: #7c9bab;\n}\n.btn-light-blue[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-blue[data-v-d642a1d0]:hover {\n  background-color: #9bb2bf !important;\n  border-color: #9bb2bf;\n}\n[dir] .btn-light-blue[data-v-d642a1d0]:active, [dir] .btn-light-blue.active[data-v-d642a1d0], [dir] .btn-light-blue.active[data-v-d642a1d0]:focus, [dir] .btn-light-blue[data-v-d642a1d0]:active:focus, [dir] .btn-light-blue[data-v-d642a1d0]:active:hover, [dir] .btn-light-blue.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #6c8fa1 !important;\n  border-color: #6c8fa1;\n}\n.btn-light-blue[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-blue[data-v-d642a1d0]:focus {\n  background-color: #aabec9;\n  border-color: #aabec9;\n}\n.btn-light-blue.disabled[data-v-d642a1d0]:hover, .btn-light-blue.disabled[data-v-d642a1d0]:focus, .btn-light-blue.disabled[data-v-d642a1d0]:active, .btn-light-blue.disabled.active[data-v-d642a1d0], .btn-light-blue[disabled][data-v-d642a1d0], .btn-light-blue[disabled][data-v-d642a1d0]:hover, .btn-light-blue[disabled][data-v-d642a1d0]:focus, .btn-light-blue[disabled][data-v-d642a1d0]:active, .btn-light-blue[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-blue.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-blue.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-blue.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-blue.disabled[data-v-d642a1d0]:active, [dir] .btn-light-blue.disabled.active[data-v-d642a1d0], [dir] .btn-light-blue[disabled][data-v-d642a1d0], [dir] .btn-light-blue[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-blue[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-blue[disabled][data-v-d642a1d0]:active, [dir] .btn-light-blue[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-blue[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-blue.active[data-v-d642a1d0] {\n  background-color: #bacad3;\n  border-color: #bacad3;\n}\n.btn-light-blue.btn-o[data-v-d642a1d0] {\n  color: #7c9bab;\n}\n[dir] .btn-light-blue.btn-o[data-v-d642a1d0] {\n  border: 1px solid #7c9bab;\n}\n.btn-light-blue.btn-o[data-v-d642a1d0]:hover {\n  color: #9bb2bf;\n}\n[dir] .btn-light-blue.btn-o[data-v-d642a1d0]:hover {\n  border-color: #9bb2bf;\n  background: none !important;\n}\n.btn-light-blue.btn-o[data-v-d642a1d0]:active, .btn-light-blue.btn-o.active[data-v-d642a1d0], .btn-light-blue.btn-o.active[data-v-d642a1d0]:focus, .btn-light-blue.btn-o[data-v-d642a1d0]:active:focus, .btn-light-blue.btn-o[data-v-d642a1d0]:active:hover {\n  color: #557485 !important;\n}\n[dir] .btn-light-blue.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-blue.btn-o.active[data-v-d642a1d0], [dir] .btn-light-blue.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-blue.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-blue.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #557485 !important;\n}\n.btn-light-blue.btn-o[data-v-d642a1d0]:focus {\n  color: #9bb2bf;\n}\n[dir] .btn-light-blue.btn-o[data-v-d642a1d0]:focus {\n  background-color: #bacad3;\n  border-color: #bacad3;\n}\n.btn-light-blue.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-blue.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-blue.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-blue.btn-o.disabled.active[data-v-d642a1d0], .btn-light-blue.btn-o[disabled][data-v-d642a1d0], .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-blue.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-blue.btn-o.active[data-v-d642a1d0] {\n  color: #bacad3;\n}\n[dir] .btn-light-blue.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-blue.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-blue.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-blue.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-blue.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-blue.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-blue.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-blue.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-blue.btn-o.active[data-v-d642a1d0] {\n  border-color: #bacad3;\n}\n\n/*********************************************/\n.btn-dark-blue[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-blue[data-v-d642a1d0] {\n  background-color: #4b6776;\n  border-color: #4b6776;\n}\n.btn-dark-blue[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-blue[data-v-d642a1d0]:hover {\n  background-color: #5f8295 !important;\n  border-color: #5f8295;\n}\n[dir] .btn-dark-blue[data-v-d642a1d0]:active, [dir] .btn-dark-blue.active[data-v-d642a1d0], [dir] .btn-dark-blue.active[data-v-d642a1d0]:focus, [dir] .btn-dark-blue[data-v-d642a1d0]:active:focus, [dir] .btn-dark-blue[data-v-d642a1d0]:active:hover, [dir] .btn-dark-blue.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #415966 !important;\n  border-color: #415966;\n}\n.btn-dark-blue[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-blue[data-v-d642a1d0]:focus {\n  background-color: #6c8fa1;\n  border-color: #6c8fa1;\n}\n.btn-dark-blue.disabled[data-v-d642a1d0]:hover, .btn-dark-blue.disabled[data-v-d642a1d0]:focus, .btn-dark-blue.disabled[data-v-d642a1d0]:active, .btn-dark-blue.disabled.active[data-v-d642a1d0], .btn-dark-blue[disabled][data-v-d642a1d0], .btn-dark-blue[disabled][data-v-d642a1d0]:hover, .btn-dark-blue[disabled][data-v-d642a1d0]:focus, .btn-dark-blue[disabled][data-v-d642a1d0]:active, .btn-dark-blue[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-blue.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-blue.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-blue.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-blue.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-blue.disabled.active[data-v-d642a1d0], [dir] .btn-dark-blue[disabled][data-v-d642a1d0], [dir] .btn-dark-blue[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-blue[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-blue[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-blue[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-blue[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-blue.active[data-v-d642a1d0] {\n  background-color: #7c9bab;\n  border-color: #7c9bab;\n}\n.btn-dark-blue.btn-o[data-v-d642a1d0] {\n  color: #4b6776;\n}\n[dir] .btn-dark-blue.btn-o[data-v-d642a1d0] {\n  border: 1px solid #4b6776;\n}\n.btn-dark-blue.btn-o[data-v-d642a1d0]:hover {\n  color: #5f8295;\n}\n[dir] .btn-dark-blue.btn-o[data-v-d642a1d0]:hover {\n  border-color: #5f8295;\n  background: none !important;\n}\n.btn-dark-blue.btn-o[data-v-d642a1d0]:active, .btn-dark-blue.btn-o.active[data-v-d642a1d0], .btn-dark-blue.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-blue.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-blue.btn-o[data-v-d642a1d0]:active:hover {\n  color: #2d3e47 !important;\n}\n[dir] .btn-dark-blue.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-blue.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-blue.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-blue.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-blue.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #2d3e47 !important;\n}\n.btn-dark-blue.btn-o[data-v-d642a1d0]:focus {\n  color: #5f8295;\n}\n[dir] .btn-dark-blue.btn-o[data-v-d642a1d0]:focus {\n  background-color: #7c9bab;\n  border-color: #7c9bab;\n}\n.btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-blue.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-blue.btn-o[disabled][data-v-d642a1d0], .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-blue.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-blue.btn-o.active[data-v-d642a1d0] {\n  color: #7c9bab;\n}\n[dir] .btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-blue.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-blue.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-blue.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-blue.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-blue.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-blue.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-blue.btn-o.active[data-v-d642a1d0] {\n  border-color: #7c9bab;\n}\n\n/*********************************************/\n.btn-green[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-green[data-v-d642a1d0] {\n  background-color: #1FBBA6;\n  border-color: #1FBBA6;\n}\n.btn-green[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-green[data-v-d642a1d0]:hover {\n  background-color: #30ddc6 !important;\n  border-color: #30ddc6;\n}\n[dir] .btn-green[data-v-d642a1d0]:active, [dir] .btn-green.active[data-v-d642a1d0], [dir] .btn-green.active[data-v-d642a1d0]:focus, [dir] .btn-green[data-v-d642a1d0]:active:focus, [dir] .btn-green[data-v-d642a1d0]:active:hover, [dir] .btn-green.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #1ba593 !important;\n  border-color: #1ba593;\n}\n.btn-green[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-green[data-v-d642a1d0]:focus {\n  background-color: #46e0cc;\n  border-color: #46e0cc;\n}\n.btn-green.disabled[data-v-d642a1d0]:hover, .btn-green.disabled[data-v-d642a1d0]:focus, .btn-green.disabled[data-v-d642a1d0]:active, .btn-green.disabled.active[data-v-d642a1d0], .btn-green[disabled][data-v-d642a1d0], .btn-green[disabled][data-v-d642a1d0]:hover, .btn-green[disabled][data-v-d642a1d0]:focus, .btn-green[disabled][data-v-d642a1d0]:active, .btn-green[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-green[data-v-d642a1d0]:hover, fieldset[disabled] .btn-green[data-v-d642a1d0]:focus, fieldset[disabled] .btn-green[data-v-d642a1d0]:active, fieldset[disabled] .btn-green.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-green.disabled[data-v-d642a1d0]:hover, [dir] .btn-green.disabled[data-v-d642a1d0]:focus, [dir] .btn-green.disabled[data-v-d642a1d0]:active, [dir] .btn-green.disabled.active[data-v-d642a1d0], [dir] .btn-green[disabled][data-v-d642a1d0], [dir] .btn-green[disabled][data-v-d642a1d0]:hover, [dir] .btn-green[disabled][data-v-d642a1d0]:focus, [dir] .btn-green[disabled][data-v-d642a1d0]:active, [dir] .btn-green[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-green[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-green[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-green[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-green.active[data-v-d642a1d0] {\n  background-color: #5ce4d2;\n  border-color: #5ce4d2;\n}\n.btn-green.btn-o[data-v-d642a1d0] {\n  color: #1FBBA6;\n}\n[dir] .btn-green.btn-o[data-v-d642a1d0] {\n  border: 1px solid #1FBBA6;\n}\n.btn-green.btn-o[data-v-d642a1d0]:hover {\n  color: #30ddc6;\n}\n[dir] .btn-green.btn-o[data-v-d642a1d0]:hover {\n  border-color: #30ddc6;\n  background: none !important;\n}\n.btn-green.btn-o[data-v-d642a1d0]:active, .btn-green.btn-o.active[data-v-d642a1d0], .btn-green.btn-o.active[data-v-d642a1d0]:focus, .btn-green.btn-o[data-v-d642a1d0]:active:focus, .btn-green.btn-o[data-v-d642a1d0]:active:hover {\n  color: #14796c !important;\n}\n[dir] .btn-green.btn-o[data-v-d642a1d0]:active, [dir] .btn-green.btn-o.active[data-v-d642a1d0], [dir] .btn-green.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-green.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-green.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #14796c !important;\n}\n.btn-green.btn-o[data-v-d642a1d0]:focus {\n  color: #30ddc6;\n}\n[dir] .btn-green.btn-o[data-v-d642a1d0]:focus {\n  background-color: #5ce4d2;\n  border-color: #5ce4d2;\n}\n.btn-green.btn-o.disabled[data-v-d642a1d0]:hover, .btn-green.btn-o.disabled[data-v-d642a1d0]:focus, .btn-green.btn-o.disabled[data-v-d642a1d0]:active, .btn-green.btn-o.disabled.active[data-v-d642a1d0], .btn-green.btn-o[disabled][data-v-d642a1d0], .btn-green.btn-o[disabled][data-v-d642a1d0]:hover, .btn-green.btn-o[disabled][data-v-d642a1d0]:focus, .btn-green.btn-o[disabled][data-v-d642a1d0]:active, .btn-green.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-green.btn-o.active[data-v-d642a1d0] {\n  color: #5ce4d2;\n}\n[dir] .btn-green.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-green.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-green.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-green.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-green.btn-o[disabled][data-v-d642a1d0], [dir] .btn-green.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-green.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-green.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-green.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-green.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-green.btn-o.active[data-v-d642a1d0] {\n  border-color: #5ce4d2;\n}\n\n/*********************************************/\n.btn-light-green[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-green[data-v-d642a1d0] {\n  background-color: #30ddc6;\n  border-color: #30ddc6;\n}\n.btn-light-green[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-green[data-v-d642a1d0]:hover {\n  background-color: #5ce4d2 !important;\n  border-color: #5ce4d2;\n}\n[dir] .btn-light-green[data-v-d642a1d0]:active, [dir] .btn-light-green.active[data-v-d642a1d0], [dir] .btn-light-green.active[data-v-d642a1d0]:focus, [dir] .btn-light-green[data-v-d642a1d0]:active:focus, [dir] .btn-light-green[data-v-d642a1d0]:active:hover, [dir] .btn-light-green.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #23d1b9 !important;\n  border-color: #23d1b9;\n}\n.btn-light-green[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-green[data-v-d642a1d0]:focus {\n  background-color: #72e8d8;\n  border-color: #72e8d8;\n}\n.btn-light-green.disabled[data-v-d642a1d0]:hover, .btn-light-green.disabled[data-v-d642a1d0]:focus, .btn-light-green.disabled[data-v-d642a1d0]:active, .btn-light-green.disabled.active[data-v-d642a1d0], .btn-light-green[disabled][data-v-d642a1d0], .btn-light-green[disabled][data-v-d642a1d0]:hover, .btn-light-green[disabled][data-v-d642a1d0]:focus, .btn-light-green[disabled][data-v-d642a1d0]:active, .btn-light-green[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-green[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-green[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-green[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-green.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-green.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-green.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-green.disabled[data-v-d642a1d0]:active, [dir] .btn-light-green.disabled.active[data-v-d642a1d0], [dir] .btn-light-green[disabled][data-v-d642a1d0], [dir] .btn-light-green[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-green[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-green[disabled][data-v-d642a1d0]:active, [dir] .btn-light-green[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-green[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-green[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-green[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-green.active[data-v-d642a1d0] {\n  background-color: #88ebde;\n  border-color: #88ebde;\n}\n.btn-light-green.btn-o[data-v-d642a1d0] {\n  color: #30ddc6;\n}\n[dir] .btn-light-green.btn-o[data-v-d642a1d0] {\n  border: 1px solid #30ddc6;\n}\n.btn-light-green.btn-o[data-v-d642a1d0]:hover {\n  color: #5ce4d2;\n}\n[dir] .btn-light-green.btn-o[data-v-d642a1d0]:hover {\n  border-color: #5ce4d2;\n  background: none !important;\n}\n.btn-light-green.btn-o[data-v-d642a1d0]:active, .btn-light-green.btn-o.active[data-v-d642a1d0], .btn-light-green.btn-o.active[data-v-d642a1d0]:focus, .btn-light-green.btn-o[data-v-d642a1d0]:active:focus, .btn-light-green.btn-o[data-v-d642a1d0]:active:hover {\n  color: #1ba593 !important;\n}\n[dir] .btn-light-green.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-green.btn-o.active[data-v-d642a1d0], [dir] .btn-light-green.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-green.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-green.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #1ba593 !important;\n}\n.btn-light-green.btn-o[data-v-d642a1d0]:focus {\n  color: #5ce4d2;\n}\n[dir] .btn-light-green.btn-o[data-v-d642a1d0]:focus {\n  background-color: #88ebde;\n  border-color: #88ebde;\n}\n.btn-light-green.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-green.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-green.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-green.btn-o.disabled.active[data-v-d642a1d0], .btn-light-green.btn-o[disabled][data-v-d642a1d0], .btn-light-green.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-green.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-green.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-green.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-green.btn-o.active[data-v-d642a1d0] {\n  color: #88ebde;\n}\n[dir] .btn-light-green.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-green.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-green.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-green.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-green.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-green.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-green.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-green.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-green.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-green.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-green.btn-o.active[data-v-d642a1d0] {\n  border-color: #88ebde;\n}\n\n/*********************************************/\n.btn-dark-green[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-green[data-v-d642a1d0] {\n  background-color: #188f7f;\n  border-color: #188f7f;\n}\n.btn-dark-green[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-green[data-v-d642a1d0]:hover {\n  background-color: #1fbba6 !important;\n  border-color: #1fbba6;\n}\n[dir] .btn-dark-green[data-v-d642a1d0]:active, [dir] .btn-dark-green.active[data-v-d642a1d0], [dir] .btn-dark-green.active[data-v-d642a1d0]:focus, [dir] .btn-dark-green[data-v-d642a1d0]:active:focus, [dir] .btn-dark-green[data-v-d642a1d0]:active:hover, [dir] .btn-dark-green.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #14796c !important;\n  border-color: #14796c;\n}\n.btn-dark-green[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-green[data-v-d642a1d0]:focus {\n  background-color: #23d1b9;\n  border-color: #23d1b9;\n}\n.btn-dark-green.disabled[data-v-d642a1d0]:hover, .btn-dark-green.disabled[data-v-d642a1d0]:focus, .btn-dark-green.disabled[data-v-d642a1d0]:active, .btn-dark-green.disabled.active[data-v-d642a1d0], .btn-dark-green[disabled][data-v-d642a1d0], .btn-dark-green[disabled][data-v-d642a1d0]:hover, .btn-dark-green[disabled][data-v-d642a1d0]:focus, .btn-dark-green[disabled][data-v-d642a1d0]:active, .btn-dark-green[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-green.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-green.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-green.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-green.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-green.disabled.active[data-v-d642a1d0], [dir] .btn-dark-green[disabled][data-v-d642a1d0], [dir] .btn-dark-green[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-green[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-green[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-green[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-green[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-green.active[data-v-d642a1d0] {\n  background-color: #30ddc6;\n  border-color: #30ddc6;\n}\n.btn-dark-green.btn-o[data-v-d642a1d0] {\n  color: #188f7f;\n}\n[dir] .btn-dark-green.btn-o[data-v-d642a1d0] {\n  border: 1px solid #188f7f;\n}\n.btn-dark-green.btn-o[data-v-d642a1d0]:hover {\n  color: #1fbba6;\n}\n[dir] .btn-dark-green.btn-o[data-v-d642a1d0]:hover {\n  border-color: #1fbba6;\n  background: none !important;\n}\n.btn-dark-green.btn-o[data-v-d642a1d0]:active, .btn-dark-green.btn-o.active[data-v-d642a1d0], .btn-dark-green.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-green.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-green.btn-o[data-v-d642a1d0]:active:hover {\n  color: #0d4e45 !important;\n}\n[dir] .btn-dark-green.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-green.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-green.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-green.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-green.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #0d4e45 !important;\n}\n.btn-dark-green.btn-o[data-v-d642a1d0]:focus {\n  color: #1fbba6;\n}\n[dir] .btn-dark-green.btn-o[data-v-d642a1d0]:focus {\n  background-color: #30ddc6;\n  border-color: #30ddc6;\n}\n.btn-dark-green.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-green.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-green.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-green.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-green.btn-o[disabled][data-v-d642a1d0], .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-green.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-green.btn-o.active[data-v-d642a1d0] {\n  color: #30ddc6;\n}\n[dir] .btn-dark-green.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-green.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-green.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-green.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-green.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-green.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-green.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-green.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-green.btn-o.active[data-v-d642a1d0] {\n  border-color: #30ddc6;\n}\n\n/*********************************************/\n.btn-orange[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-orange[data-v-d642a1d0] {\n  background-color: #FF6600;\n  border-color: #FF6600;\n}\n.btn-orange[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-orange[data-v-d642a1d0]:hover {\n  background-color: #ff8533 !important;\n  border-color: #ff8533;\n}\n[dir] .btn-orange[data-v-d642a1d0]:active, [dir] .btn-orange.active[data-v-d642a1d0], [dir] .btn-orange.active[data-v-d642a1d0]:focus, [dir] .btn-orange[data-v-d642a1d0]:active:focus, [dir] .btn-orange[data-v-d642a1d0]:active:hover, [dir] .btn-orange.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #e65c00 !important;\n  border-color: #e65c00;\n}\n.btn-orange[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-orange[data-v-d642a1d0]:focus {\n  background-color: #ff944d;\n  border-color: #ff944d;\n}\n.btn-orange.disabled[data-v-d642a1d0]:hover, .btn-orange.disabled[data-v-d642a1d0]:focus, .btn-orange.disabled[data-v-d642a1d0]:active, .btn-orange.disabled.active[data-v-d642a1d0], .btn-orange[disabled][data-v-d642a1d0], .btn-orange[disabled][data-v-d642a1d0]:hover, .btn-orange[disabled][data-v-d642a1d0]:focus, .btn-orange[disabled][data-v-d642a1d0]:active, .btn-orange[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-orange[data-v-d642a1d0]:hover, fieldset[disabled] .btn-orange[data-v-d642a1d0]:focus, fieldset[disabled] .btn-orange[data-v-d642a1d0]:active, fieldset[disabled] .btn-orange.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-orange.disabled[data-v-d642a1d0]:hover, [dir] .btn-orange.disabled[data-v-d642a1d0]:focus, [dir] .btn-orange.disabled[data-v-d642a1d0]:active, [dir] .btn-orange.disabled.active[data-v-d642a1d0], [dir] .btn-orange[disabled][data-v-d642a1d0], [dir] .btn-orange[disabled][data-v-d642a1d0]:hover, [dir] .btn-orange[disabled][data-v-d642a1d0]:focus, [dir] .btn-orange[disabled][data-v-d642a1d0]:active, [dir] .btn-orange[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-orange[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-orange[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-orange[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-orange.active[data-v-d642a1d0] {\n  background-color: #ffa366;\n  border-color: #ffa366;\n}\n.btn-orange.btn-o[data-v-d642a1d0] {\n  color: #FF6600;\n}\n[dir] .btn-orange.btn-o[data-v-d642a1d0] {\n  border: 1px solid #FF6600;\n}\n.btn-orange.btn-o[data-v-d642a1d0]:hover {\n  color: #ff8533;\n}\n[dir] .btn-orange.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ff8533;\n  background: none !important;\n}\n.btn-orange.btn-o[data-v-d642a1d0]:active, .btn-orange.btn-o.active[data-v-d642a1d0], .btn-orange.btn-o.active[data-v-d642a1d0]:focus, .btn-orange.btn-o[data-v-d642a1d0]:active:focus, .btn-orange.btn-o[data-v-d642a1d0]:active:hover {\n  color: #b34700 !important;\n}\n[dir] .btn-orange.btn-o[data-v-d642a1d0]:active, [dir] .btn-orange.btn-o.active[data-v-d642a1d0], [dir] .btn-orange.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-orange.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-orange.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #b34700 !important;\n}\n.btn-orange.btn-o[data-v-d642a1d0]:focus {\n  color: #ff8533;\n}\n[dir] .btn-orange.btn-o[data-v-d642a1d0]:focus {\n  background-color: #ffa366;\n  border-color: #ffa366;\n}\n.btn-orange.btn-o.disabled[data-v-d642a1d0]:hover, .btn-orange.btn-o.disabled[data-v-d642a1d0]:focus, .btn-orange.btn-o.disabled[data-v-d642a1d0]:active, .btn-orange.btn-o.disabled.active[data-v-d642a1d0], .btn-orange.btn-o[disabled][data-v-d642a1d0], .btn-orange.btn-o[disabled][data-v-d642a1d0]:hover, .btn-orange.btn-o[disabled][data-v-d642a1d0]:focus, .btn-orange.btn-o[disabled][data-v-d642a1d0]:active, .btn-orange.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-orange.btn-o.active[data-v-d642a1d0] {\n  color: #ffa366;\n}\n[dir] .btn-orange.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-orange.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-orange.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-orange.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-orange.btn-o[disabled][data-v-d642a1d0], [dir] .btn-orange.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-orange.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-orange.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-orange.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-orange.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-orange.btn-o.active[data-v-d642a1d0] {\n  border-color: #ffa366;\n}\n\n/*********************************************/\n.btn-light-orange[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-orange[data-v-d642a1d0] {\n  background-color: #ff8533;\n  border-color: #ff8533;\n}\n.btn-light-orange[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-orange[data-v-d642a1d0]:hover {\n  background-color: #ffa366 !important;\n  border-color: #ffa366;\n}\n[dir] .btn-light-orange[data-v-d642a1d0]:active, [dir] .btn-light-orange.active[data-v-d642a1d0], [dir] .btn-light-orange.active[data-v-d642a1d0]:focus, [dir] .btn-light-orange[data-v-d642a1d0]:active:focus, [dir] .btn-light-orange[data-v-d642a1d0]:active:hover, [dir] .btn-light-orange.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #ff751a !important;\n  border-color: #ff751a;\n}\n.btn-light-orange[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-orange[data-v-d642a1d0]:focus {\n  background-color: #ffb380;\n  border-color: #ffb380;\n}\n.btn-light-orange.disabled[data-v-d642a1d0]:hover, .btn-light-orange.disabled[data-v-d642a1d0]:focus, .btn-light-orange.disabled[data-v-d642a1d0]:active, .btn-light-orange.disabled.active[data-v-d642a1d0], .btn-light-orange[disabled][data-v-d642a1d0], .btn-light-orange[disabled][data-v-d642a1d0]:hover, .btn-light-orange[disabled][data-v-d642a1d0]:focus, .btn-light-orange[disabled][data-v-d642a1d0]:active, .btn-light-orange[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-orange.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-orange.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-orange.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-orange.disabled[data-v-d642a1d0]:active, [dir] .btn-light-orange.disabled.active[data-v-d642a1d0], [dir] .btn-light-orange[disabled][data-v-d642a1d0], [dir] .btn-light-orange[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-orange[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-orange[disabled][data-v-d642a1d0]:active, [dir] .btn-light-orange[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-orange[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-orange.active[data-v-d642a1d0] {\n  background-color: #ffc299;\n  border-color: #ffc299;\n}\n.btn-light-orange.btn-o[data-v-d642a1d0] {\n  color: #ff8533;\n}\n[dir] .btn-light-orange.btn-o[data-v-d642a1d0] {\n  border: 1px solid #ff8533;\n}\n.btn-light-orange.btn-o[data-v-d642a1d0]:hover {\n  color: #ffa366;\n}\n[dir] .btn-light-orange.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ffa366;\n  background: none !important;\n}\n.btn-light-orange.btn-o[data-v-d642a1d0]:active, .btn-light-orange.btn-o.active[data-v-d642a1d0], .btn-light-orange.btn-o.active[data-v-d642a1d0]:focus, .btn-light-orange.btn-o[data-v-d642a1d0]:active:focus, .btn-light-orange.btn-o[data-v-d642a1d0]:active:hover {\n  color: #e65c00 !important;\n}\n[dir] .btn-light-orange.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-orange.btn-o.active[data-v-d642a1d0], [dir] .btn-light-orange.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-orange.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-orange.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #e65c00 !important;\n}\n.btn-light-orange.btn-o[data-v-d642a1d0]:focus {\n  color: #ffa366;\n}\n[dir] .btn-light-orange.btn-o[data-v-d642a1d0]:focus {\n  background-color: #ffc299;\n  border-color: #ffc299;\n}\n.btn-light-orange.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-orange.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-orange.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-orange.btn-o.disabled.active[data-v-d642a1d0], .btn-light-orange.btn-o[disabled][data-v-d642a1d0], .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-orange.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-orange.btn-o.active[data-v-d642a1d0] {\n  color: #ffc299;\n}\n[dir] .btn-light-orange.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-orange.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-orange.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-orange.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-orange.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-orange.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-orange.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-orange.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-orange.btn-o.active[data-v-d642a1d0] {\n  border-color: #ffc299;\n}\n\n/*********************************************/\n.btn-dark-orange[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-orange[data-v-d642a1d0] {\n  background-color: #cc5200;\n  border-color: #cc5200;\n}\n.btn-dark-orange[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-orange[data-v-d642a1d0]:hover {\n  background-color: #ff6600 !important;\n  border-color: #ff6600;\n}\n[dir] .btn-dark-orange[data-v-d642a1d0]:active, [dir] .btn-dark-orange.active[data-v-d642a1d0], [dir] .btn-dark-orange.active[data-v-d642a1d0]:focus, [dir] .btn-dark-orange[data-v-d642a1d0]:active:focus, [dir] .btn-dark-orange[data-v-d642a1d0]:active:hover, [dir] .btn-dark-orange.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #b34700 !important;\n  border-color: #b34700;\n}\n.btn-dark-orange[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-orange[data-v-d642a1d0]:focus {\n  background-color: #ff751a;\n  border-color: #ff751a;\n}\n.btn-dark-orange.disabled[data-v-d642a1d0]:hover, .btn-dark-orange.disabled[data-v-d642a1d0]:focus, .btn-dark-orange.disabled[data-v-d642a1d0]:active, .btn-dark-orange.disabled.active[data-v-d642a1d0], .btn-dark-orange[disabled][data-v-d642a1d0], .btn-dark-orange[disabled][data-v-d642a1d0]:hover, .btn-dark-orange[disabled][data-v-d642a1d0]:focus, .btn-dark-orange[disabled][data-v-d642a1d0]:active, .btn-dark-orange[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-orange.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-orange.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-orange.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-orange.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-orange.disabled.active[data-v-d642a1d0], [dir] .btn-dark-orange[disabled][data-v-d642a1d0], [dir] .btn-dark-orange[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-orange[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-orange[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-orange[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-orange[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-orange.active[data-v-d642a1d0] {\n  background-color: #ff8533;\n  border-color: #ff8533;\n}\n.btn-dark-orange.btn-o[data-v-d642a1d0] {\n  color: #cc5200;\n}\n[dir] .btn-dark-orange.btn-o[data-v-d642a1d0] {\n  border: 1px solid #cc5200;\n}\n.btn-dark-orange.btn-o[data-v-d642a1d0]:hover {\n  color: #ff6600;\n}\n[dir] .btn-dark-orange.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ff6600;\n  background: none !important;\n}\n.btn-dark-orange.btn-o[data-v-d642a1d0]:active, .btn-dark-orange.btn-o.active[data-v-d642a1d0], .btn-dark-orange.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-orange.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-orange.btn-o[data-v-d642a1d0]:active:hover {\n  color: #803300 !important;\n}\n[dir] .btn-dark-orange.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-orange.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-orange.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-orange.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-orange.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #803300 !important;\n}\n.btn-dark-orange.btn-o[data-v-d642a1d0]:focus {\n  color: #ff6600;\n}\n[dir] .btn-dark-orange.btn-o[data-v-d642a1d0]:focus {\n  background-color: #ff8533;\n  border-color: #ff8533;\n}\n.btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-orange.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-orange.btn-o[disabled][data-v-d642a1d0], .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-orange.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-orange.btn-o.active[data-v-d642a1d0] {\n  color: #ff8533;\n}\n[dir] .btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-orange.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-orange.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-orange.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-orange.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-orange.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-orange.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-orange.btn-o.active[data-v-d642a1d0] {\n  border-color: #ff8533;\n}\n\n/*********************************************/\n.btn-red[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-red[data-v-d642a1d0] {\n  background-color: #C82E29;\n  border-color: #C82E29;\n}\n.btn-red[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-red[data-v-d642a1d0]:hover {\n  background-color: #da4f4a !important;\n  border-color: #da4f4a;\n}\n[dir] .btn-red[data-v-d642a1d0]:active, [dir] .btn-red.active[data-v-d642a1d0], [dir] .btn-red.active[data-v-d642a1d0]:focus, [dir] .btn-red[data-v-d642a1d0]:active:focus, [dir] .btn-red[data-v-d642a1d0]:active:hover, [dir] .btn-red.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #b32925 !important;\n  border-color: #b32925;\n}\n.btn-red[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-red[data-v-d642a1d0]:focus {\n  background-color: #de635f;\n  border-color: #de635f;\n}\n.btn-red.disabled[data-v-d642a1d0]:hover, .btn-red.disabled[data-v-d642a1d0]:focus, .btn-red.disabled[data-v-d642a1d0]:active, .btn-red.disabled.active[data-v-d642a1d0], .btn-red[disabled][data-v-d642a1d0], .btn-red[disabled][data-v-d642a1d0]:hover, .btn-red[disabled][data-v-d642a1d0]:focus, .btn-red[disabled][data-v-d642a1d0]:active, .btn-red[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-red[data-v-d642a1d0]:hover, fieldset[disabled] .btn-red[data-v-d642a1d0]:focus, fieldset[disabled] .btn-red[data-v-d642a1d0]:active, fieldset[disabled] .btn-red.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-red.disabled[data-v-d642a1d0]:hover, [dir] .btn-red.disabled[data-v-d642a1d0]:focus, [dir] .btn-red.disabled[data-v-d642a1d0]:active, [dir] .btn-red.disabled.active[data-v-d642a1d0], [dir] .btn-red[disabled][data-v-d642a1d0], [dir] .btn-red[disabled][data-v-d642a1d0]:hover, [dir] .btn-red[disabled][data-v-d642a1d0]:focus, [dir] .btn-red[disabled][data-v-d642a1d0]:active, [dir] .btn-red[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-red[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-red[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-red[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-red.active[data-v-d642a1d0] {\n  background-color: #e37874;\n  border-color: #e37874;\n}\n.btn-red.btn-o[data-v-d642a1d0] {\n  color: #C82E29;\n}\n[dir] .btn-red.btn-o[data-v-d642a1d0] {\n  border: 1px solid #C82E29;\n}\n.btn-red.btn-o[data-v-d642a1d0]:hover {\n  color: #da4f4a;\n}\n[dir] .btn-red.btn-o[data-v-d642a1d0]:hover {\n  border-color: #da4f4a;\n  background: none !important;\n}\n.btn-red.btn-o[data-v-d642a1d0]:active, .btn-red.btn-o.active[data-v-d642a1d0], .btn-red.btn-o.active[data-v-d642a1d0]:focus, .btn-red.btn-o[data-v-d642a1d0]:active:focus, .btn-red.btn-o[data-v-d642a1d0]:active:hover {\n  color: #891f1c !important;\n}\n[dir] .btn-red.btn-o[data-v-d642a1d0]:active, [dir] .btn-red.btn-o.active[data-v-d642a1d0], [dir] .btn-red.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-red.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-red.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #891f1c !important;\n}\n.btn-red.btn-o[data-v-d642a1d0]:focus {\n  color: #da4f4a;\n}\n[dir] .btn-red.btn-o[data-v-d642a1d0]:focus {\n  background-color: #e37874;\n  border-color: #e37874;\n}\n.btn-red.btn-o.disabled[data-v-d642a1d0]:hover, .btn-red.btn-o.disabled[data-v-d642a1d0]:focus, .btn-red.btn-o.disabled[data-v-d642a1d0]:active, .btn-red.btn-o.disabled.active[data-v-d642a1d0], .btn-red.btn-o[disabled][data-v-d642a1d0], .btn-red.btn-o[disabled][data-v-d642a1d0]:hover, .btn-red.btn-o[disabled][data-v-d642a1d0]:focus, .btn-red.btn-o[disabled][data-v-d642a1d0]:active, .btn-red.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-red.btn-o.active[data-v-d642a1d0] {\n  color: #e37874;\n}\n[dir] .btn-red.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-red.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-red.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-red.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-red.btn-o[disabled][data-v-d642a1d0], [dir] .btn-red.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-red.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-red.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-red.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-red.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-red.btn-o.active[data-v-d642a1d0] {\n  border-color: #e37874;\n}\n\n/*********************************************/\n.btn-light-red[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-red[data-v-d642a1d0] {\n  background-color: #da4f4a;\n  border-color: #da4f4a;\n}\n.btn-light-red[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-red[data-v-d642a1d0]:hover {\n  background-color: #e37874 !important;\n  border-color: #e37874;\n}\n[dir] .btn-light-red[data-v-d642a1d0]:active, [dir] .btn-light-red.active[data-v-d642a1d0], [dir] .btn-light-red.active[data-v-d642a1d0]:focus, [dir] .btn-light-red[data-v-d642a1d0]:active:focus, [dir] .btn-light-red[data-v-d642a1d0]:active:hover, [dir] .btn-light-red.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #d63a35 !important;\n  border-color: #d63a35;\n}\n.btn-light-red[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-red[data-v-d642a1d0]:focus {\n  background-color: #e78d8a;\n  border-color: #e78d8a;\n}\n.btn-light-red.disabled[data-v-d642a1d0]:hover, .btn-light-red.disabled[data-v-d642a1d0]:focus, .btn-light-red.disabled[data-v-d642a1d0]:active, .btn-light-red.disabled.active[data-v-d642a1d0], .btn-light-red[disabled][data-v-d642a1d0], .btn-light-red[disabled][data-v-d642a1d0]:hover, .btn-light-red[disabled][data-v-d642a1d0]:focus, .btn-light-red[disabled][data-v-d642a1d0]:active, .btn-light-red[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-red[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-red[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-red[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-red.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-red.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-red.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-red.disabled[data-v-d642a1d0]:active, [dir] .btn-light-red.disabled.active[data-v-d642a1d0], [dir] .btn-light-red[disabled][data-v-d642a1d0], [dir] .btn-light-red[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-red[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-red[disabled][data-v-d642a1d0]:active, [dir] .btn-light-red[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-red[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-red[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-red[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-red.active[data-v-d642a1d0] {\n  background-color: #eba19f;\n  border-color: #eba19f;\n}\n.btn-light-red.btn-o[data-v-d642a1d0] {\n  color: #da4f4a;\n}\n[dir] .btn-light-red.btn-o[data-v-d642a1d0] {\n  border: 1px solid #da4f4a;\n}\n.btn-light-red.btn-o[data-v-d642a1d0]:hover {\n  color: #e37874;\n}\n[dir] .btn-light-red.btn-o[data-v-d642a1d0]:hover {\n  border-color: #e37874;\n  background: none !important;\n}\n.btn-light-red.btn-o[data-v-d642a1d0]:active, .btn-light-red.btn-o.active[data-v-d642a1d0], .btn-light-red.btn-o.active[data-v-d642a1d0]:focus, .btn-light-red.btn-o[data-v-d642a1d0]:active:focus, .btn-light-red.btn-o[data-v-d642a1d0]:active:hover {\n  color: #b32925 !important;\n}\n[dir] .btn-light-red.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-red.btn-o.active[data-v-d642a1d0], [dir] .btn-light-red.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-red.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-red.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #b32925 !important;\n}\n.btn-light-red.btn-o[data-v-d642a1d0]:focus {\n  color: #e37874;\n}\n[dir] .btn-light-red.btn-o[data-v-d642a1d0]:focus {\n  background-color: #eba19f;\n  border-color: #eba19f;\n}\n.btn-light-red.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-red.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-red.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-red.btn-o.disabled.active[data-v-d642a1d0], .btn-light-red.btn-o[disabled][data-v-d642a1d0], .btn-light-red.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-red.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-red.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-red.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-red.btn-o.active[data-v-d642a1d0] {\n  color: #eba19f;\n}\n[dir] .btn-light-red.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-red.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-red.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-red.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-red.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-red.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-red.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-red.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-red.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-red.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-red.btn-o.active[data-v-d642a1d0] {\n  border-color: #eba19f;\n}\n\n/*********************************************/\n.btn-dark-red[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-red[data-v-d642a1d0] {\n  background-color: #9e2420;\n  border-color: #9e2420;\n}\n.btn-dark-red[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-red[data-v-d642a1d0]:hover {\n  background-color: #c82e29 !important;\n  border-color: #c82e29;\n}\n[dir] .btn-dark-red[data-v-d642a1d0]:active, [dir] .btn-dark-red.active[data-v-d642a1d0], [dir] .btn-dark-red.active[data-v-d642a1d0]:focus, [dir] .btn-dark-red[data-v-d642a1d0]:active:focus, [dir] .btn-dark-red[data-v-d642a1d0]:active:hover, [dir] .btn-dark-red.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #891f1c !important;\n  border-color: #891f1c;\n}\n.btn-dark-red[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-red[data-v-d642a1d0]:focus {\n  background-color: #d63a35;\n  border-color: #d63a35;\n}\n.btn-dark-red.disabled[data-v-d642a1d0]:hover, .btn-dark-red.disabled[data-v-d642a1d0]:focus, .btn-dark-red.disabled[data-v-d642a1d0]:active, .btn-dark-red.disabled.active[data-v-d642a1d0], .btn-dark-red[disabled][data-v-d642a1d0], .btn-dark-red[disabled][data-v-d642a1d0]:hover, .btn-dark-red[disabled][data-v-d642a1d0]:focus, .btn-dark-red[disabled][data-v-d642a1d0]:active, .btn-dark-red[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-red.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-red.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-red.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-red.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-red.disabled.active[data-v-d642a1d0], [dir] .btn-dark-red[disabled][data-v-d642a1d0], [dir] .btn-dark-red[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-red[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-red[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-red[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-red[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-red.active[data-v-d642a1d0] {\n  background-color: #da4f4a;\n  border-color: #da4f4a;\n}\n.btn-dark-red.btn-o[data-v-d642a1d0] {\n  color: #9e2420;\n}\n[dir] .btn-dark-red.btn-o[data-v-d642a1d0] {\n  border: 1px solid #9e2420;\n}\n.btn-dark-red.btn-o[data-v-d642a1d0]:hover {\n  color: #c82e29;\n}\n[dir] .btn-dark-red.btn-o[data-v-d642a1d0]:hover {\n  border-color: #c82e29;\n  background: none !important;\n}\n.btn-dark-red.btn-o[data-v-d642a1d0]:active, .btn-dark-red.btn-o.active[data-v-d642a1d0], .btn-dark-red.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-red.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-red.btn-o[data-v-d642a1d0]:active:hover {\n  color: #5e1613 !important;\n}\n[dir] .btn-dark-red.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-red.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-red.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-red.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-red.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #5e1613 !important;\n}\n.btn-dark-red.btn-o[data-v-d642a1d0]:focus {\n  color: #c82e29;\n}\n[dir] .btn-dark-red.btn-o[data-v-d642a1d0]:focus {\n  background-color: #da4f4a;\n  border-color: #da4f4a;\n}\n.btn-dark-red.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-red.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-red.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-red.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-red.btn-o[disabled][data-v-d642a1d0], .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-red.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-red.btn-o.active[data-v-d642a1d0] {\n  color: #da4f4a;\n}\n[dir] .btn-dark-red.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-red.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-red.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-red.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-red.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-red.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-red.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-red.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-red.btn-o.active[data-v-d642a1d0] {\n  border-color: #da4f4a;\n}\n\n/*********************************************/\n.btn-purple[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-purple[data-v-d642a1d0] {\n  background-color: #804C75;\n  border-color: #804C75;\n}\n.btn-purple[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-purple[data-v-d642a1d0]:hover {\n  background-color: #a05f92 !important;\n  border-color: #a05f92;\n}\n[dir] .btn-purple[data-v-d642a1d0]:active, [dir] .btn-purple.active[data-v-d642a1d0], [dir] .btn-purple.active[data-v-d642a1d0]:focus, [dir] .btn-purple[data-v-d642a1d0]:active:focus, [dir] .btn-purple[data-v-d642a1d0]:active:hover, [dir] .btn-purple.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #704366 !important;\n  border-color: #704366;\n}\n.btn-purple[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-purple[data-v-d642a1d0]:focus {\n  background-color: #aa6f9d;\n  border-color: #aa6f9d;\n}\n.btn-purple.disabled[data-v-d642a1d0]:hover, .btn-purple.disabled[data-v-d642a1d0]:focus, .btn-purple.disabled[data-v-d642a1d0]:active, .btn-purple.disabled.active[data-v-d642a1d0], .btn-purple[disabled][data-v-d642a1d0], .btn-purple[disabled][data-v-d642a1d0]:hover, .btn-purple[disabled][data-v-d642a1d0]:focus, .btn-purple[disabled][data-v-d642a1d0]:active, .btn-purple[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-purple[data-v-d642a1d0]:hover, fieldset[disabled] .btn-purple[data-v-d642a1d0]:focus, fieldset[disabled] .btn-purple[data-v-d642a1d0]:active, fieldset[disabled] .btn-purple.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-purple.disabled[data-v-d642a1d0]:hover, [dir] .btn-purple.disabled[data-v-d642a1d0]:focus, [dir] .btn-purple.disabled[data-v-d642a1d0]:active, [dir] .btn-purple.disabled.active[data-v-d642a1d0], [dir] .btn-purple[disabled][data-v-d642a1d0], [dir] .btn-purple[disabled][data-v-d642a1d0]:hover, [dir] .btn-purple[disabled][data-v-d642a1d0]:focus, [dir] .btn-purple[disabled][data-v-d642a1d0]:active, [dir] .btn-purple[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-purple[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-purple[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-purple[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-purple.active[data-v-d642a1d0] {\n  background-color: #b37fa8;\n  border-color: #b37fa8;\n}\n.btn-purple.btn-o[data-v-d642a1d0] {\n  color: #804C75;\n}\n[dir] .btn-purple.btn-o[data-v-d642a1d0] {\n  border: 1px solid #804C75;\n}\n.btn-purple.btn-o[data-v-d642a1d0]:hover {\n  color: #a05f92;\n}\n[dir] .btn-purple.btn-o[data-v-d642a1d0]:hover {\n  border-color: #a05f92;\n  background: none !important;\n}\n.btn-purple.btn-o[data-v-d642a1d0]:active, .btn-purple.btn-o.active[data-v-d642a1d0], .btn-purple.btn-o.active[data-v-d642a1d0]:focus, .btn-purple.btn-o[data-v-d642a1d0]:active:focus, .btn-purple.btn-o[data-v-d642a1d0]:active:hover {\n  color: #503049 !important;\n}\n[dir] .btn-purple.btn-o[data-v-d642a1d0]:active, [dir] .btn-purple.btn-o.active[data-v-d642a1d0], [dir] .btn-purple.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-purple.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-purple.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #503049 !important;\n}\n.btn-purple.btn-o[data-v-d642a1d0]:focus {\n  color: #a05f92;\n}\n[dir] .btn-purple.btn-o[data-v-d642a1d0]:focus {\n  background-color: #b37fa8;\n  border-color: #b37fa8;\n}\n.btn-purple.btn-o.disabled[data-v-d642a1d0]:hover, .btn-purple.btn-o.disabled[data-v-d642a1d0]:focus, .btn-purple.btn-o.disabled[data-v-d642a1d0]:active, .btn-purple.btn-o.disabled.active[data-v-d642a1d0], .btn-purple.btn-o[disabled][data-v-d642a1d0], .btn-purple.btn-o[disabled][data-v-d642a1d0]:hover, .btn-purple.btn-o[disabled][data-v-d642a1d0]:focus, .btn-purple.btn-o[disabled][data-v-d642a1d0]:active, .btn-purple.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-purple.btn-o.active[data-v-d642a1d0] {\n  color: #b37fa8;\n}\n[dir] .btn-purple.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-purple.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-purple.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-purple.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-purple.btn-o[disabled][data-v-d642a1d0], [dir] .btn-purple.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-purple.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-purple.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-purple.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-purple.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-purple.btn-o.active[data-v-d642a1d0] {\n  border-color: #b37fa8;\n}\n\n/*********************************************/\n.btn-light-purple[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-purple[data-v-d642a1d0] {\n  background-color: #a05f92;\n  border-color: #a05f92;\n}\n.btn-light-purple[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-purple[data-v-d642a1d0]:hover {\n  background-color: #b37fa8 !important;\n  border-color: #b37fa8;\n}\n[dir] .btn-light-purple[data-v-d642a1d0]:active, [dir] .btn-light-purple.active[data-v-d642a1d0], [dir] .btn-light-purple.active[data-v-d642a1d0]:focus, [dir] .btn-light-purple[data-v-d642a1d0]:active:focus, [dir] .btn-light-purple[data-v-d642a1d0]:active:hover, [dir] .btn-light-purple.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #905684 !important;\n  border-color: #905684;\n}\n.btn-light-purple[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-purple[data-v-d642a1d0]:focus {\n  background-color: #bd8fb3;\n  border-color: #bd8fb3;\n}\n.btn-light-purple.disabled[data-v-d642a1d0]:hover, .btn-light-purple.disabled[data-v-d642a1d0]:focus, .btn-light-purple.disabled[data-v-d642a1d0]:active, .btn-light-purple.disabled.active[data-v-d642a1d0], .btn-light-purple[disabled][data-v-d642a1d0], .btn-light-purple[disabled][data-v-d642a1d0]:hover, .btn-light-purple[disabled][data-v-d642a1d0]:focus, .btn-light-purple[disabled][data-v-d642a1d0]:active, .btn-light-purple[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-purple.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-purple.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-purple.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-purple.disabled[data-v-d642a1d0]:active, [dir] .btn-light-purple.disabled.active[data-v-d642a1d0], [dir] .btn-light-purple[disabled][data-v-d642a1d0], [dir] .btn-light-purple[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-purple[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-purple[disabled][data-v-d642a1d0]:active, [dir] .btn-light-purple[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-purple[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-purple.active[data-v-d642a1d0] {\n  background-color: #c69fbe;\n  border-color: #c69fbe;\n}\n.btn-light-purple.btn-o[data-v-d642a1d0] {\n  color: #a05f92;\n}\n[dir] .btn-light-purple.btn-o[data-v-d642a1d0] {\n  border: 1px solid #a05f92;\n}\n.btn-light-purple.btn-o[data-v-d642a1d0]:hover {\n  color: #b37fa8;\n}\n[dir] .btn-light-purple.btn-o[data-v-d642a1d0]:hover {\n  border-color: #b37fa8;\n  background: none !important;\n}\n.btn-light-purple.btn-o[data-v-d642a1d0]:active, .btn-light-purple.btn-o.active[data-v-d642a1d0], .btn-light-purple.btn-o.active[data-v-d642a1d0]:focus, .btn-light-purple.btn-o[data-v-d642a1d0]:active:focus, .btn-light-purple.btn-o[data-v-d642a1d0]:active:hover {\n  color: #704366 !important;\n}\n[dir] .btn-light-purple.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-purple.btn-o.active[data-v-d642a1d0], [dir] .btn-light-purple.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-purple.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-purple.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #704366 !important;\n}\n.btn-light-purple.btn-o[data-v-d642a1d0]:focus {\n  color: #b37fa8;\n}\n[dir] .btn-light-purple.btn-o[data-v-d642a1d0]:focus {\n  background-color: #c69fbe;\n  border-color: #c69fbe;\n}\n.btn-light-purple.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-purple.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-purple.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-purple.btn-o.disabled.active[data-v-d642a1d0], .btn-light-purple.btn-o[disabled][data-v-d642a1d0], .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-purple.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-purple.btn-o.active[data-v-d642a1d0] {\n  color: #c69fbe;\n}\n[dir] .btn-light-purple.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-purple.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-purple.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-purple.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-purple.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-purple.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-purple.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-purple.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-purple.btn-o.active[data-v-d642a1d0] {\n  border-color: #c69fbe;\n}\n\n/*********************************************/\n.btn-dark-purple[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-purple[data-v-d642a1d0] {\n  background-color: #603958;\n  border-color: #603958;\n}\n.btn-dark-purple[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-purple[data-v-d642a1d0]:hover {\n  background-color: #804c75 !important;\n  border-color: #804c75;\n}\n[dir] .btn-dark-purple[data-v-d642a1d0]:active, [dir] .btn-dark-purple.active[data-v-d642a1d0], [dir] .btn-dark-purple.active[data-v-d642a1d0]:focus, [dir] .btn-dark-purple[data-v-d642a1d0]:active:focus, [dir] .btn-dark-purple[data-v-d642a1d0]:active:hover, [dir] .btn-dark-purple.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #503049 !important;\n  border-color: #503049;\n}\n.btn-dark-purple[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-purple[data-v-d642a1d0]:focus {\n  background-color: #905684;\n  border-color: #905684;\n}\n.btn-dark-purple.disabled[data-v-d642a1d0]:hover, .btn-dark-purple.disabled[data-v-d642a1d0]:focus, .btn-dark-purple.disabled[data-v-d642a1d0]:active, .btn-dark-purple.disabled.active[data-v-d642a1d0], .btn-dark-purple[disabled][data-v-d642a1d0], .btn-dark-purple[disabled][data-v-d642a1d0]:hover, .btn-dark-purple[disabled][data-v-d642a1d0]:focus, .btn-dark-purple[disabled][data-v-d642a1d0]:active, .btn-dark-purple[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-purple.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-purple.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-purple.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-purple.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-purple.disabled.active[data-v-d642a1d0], [dir] .btn-dark-purple[disabled][data-v-d642a1d0], [dir] .btn-dark-purple[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-purple[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-purple[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-purple[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-purple[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-purple.active[data-v-d642a1d0] {\n  background-color: #a05f92;\n  border-color: #a05f92;\n}\n.btn-dark-purple.btn-o[data-v-d642a1d0] {\n  color: #603958;\n}\n[dir] .btn-dark-purple.btn-o[data-v-d642a1d0] {\n  border: 1px solid #603958;\n}\n.btn-dark-purple.btn-o[data-v-d642a1d0]:hover {\n  color: #804c75;\n}\n[dir] .btn-dark-purple.btn-o[data-v-d642a1d0]:hover {\n  border-color: #804c75;\n  background: none !important;\n}\n.btn-dark-purple.btn-o[data-v-d642a1d0]:active, .btn-dark-purple.btn-o.active[data-v-d642a1d0], .btn-dark-purple.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-purple.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-purple.btn-o[data-v-d642a1d0]:active:hover {\n  color: #301c2c !important;\n}\n[dir] .btn-dark-purple.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-purple.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-purple.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-purple.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-purple.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #301c2c !important;\n}\n.btn-dark-purple.btn-o[data-v-d642a1d0]:focus {\n  color: #804c75;\n}\n[dir] .btn-dark-purple.btn-o[data-v-d642a1d0]:focus {\n  background-color: #a05f92;\n  border-color: #a05f92;\n}\n.btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-purple.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-purple.btn-o[disabled][data-v-d642a1d0], .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-purple.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-purple.btn-o.active[data-v-d642a1d0] {\n  color: #a05f92;\n}\n[dir] .btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-purple.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-purple.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-purple.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-purple.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-purple.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-purple.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-purple.btn-o.active[data-v-d642a1d0] {\n  border-color: #a05f92;\n}\n\n/*********************************************/\n.btn-beige[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-beige[data-v-d642a1d0] {\n  background-color: #D2BD8E;\n  border-color: #D2BD8E;\n}\n.btn-beige[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-beige[data-v-d642a1d0]:hover {\n  background-color: #e1d2b2 !important;\n  border-color: #e1d2b2;\n}\n[dir] .btn-beige[data-v-d642a1d0]:active, [dir] .btn-beige.active[data-v-d642a1d0], [dir] .btn-beige.active[data-v-d642a1d0]:focus, [dir] .btn-beige[data-v-d642a1d0]:active:focus, [dir] .btn-beige[data-v-d642a1d0]:active:hover, [dir] .btn-beige.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #cbb27c !important;\n  border-color: #cbb27c;\n}\n.btn-beige[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-beige[data-v-d642a1d0]:focus {\n  background-color: #e8ddc5;\n  border-color: #e8ddc5;\n}\n.btn-beige.disabled[data-v-d642a1d0]:hover, .btn-beige.disabled[data-v-d642a1d0]:focus, .btn-beige.disabled[data-v-d642a1d0]:active, .btn-beige.disabled.active[data-v-d642a1d0], .btn-beige[disabled][data-v-d642a1d0], .btn-beige[disabled][data-v-d642a1d0]:hover, .btn-beige[disabled][data-v-d642a1d0]:focus, .btn-beige[disabled][data-v-d642a1d0]:active, .btn-beige[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-beige[data-v-d642a1d0]:hover, fieldset[disabled] .btn-beige[data-v-d642a1d0]:focus, fieldset[disabled] .btn-beige[data-v-d642a1d0]:active, fieldset[disabled] .btn-beige.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-beige.disabled[data-v-d642a1d0]:hover, [dir] .btn-beige.disabled[data-v-d642a1d0]:focus, [dir] .btn-beige.disabled[data-v-d642a1d0]:active, [dir] .btn-beige.disabled.active[data-v-d642a1d0], [dir] .btn-beige[disabled][data-v-d642a1d0], [dir] .btn-beige[disabled][data-v-d642a1d0]:hover, [dir] .btn-beige[disabled][data-v-d642a1d0]:focus, [dir] .btn-beige[disabled][data-v-d642a1d0]:active, [dir] .btn-beige[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-beige[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-beige[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-beige[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-beige.active[data-v-d642a1d0] {\n  background-color: #efe8d7;\n  border-color: #efe8d7;\n}\n.btn-beige.btn-o[data-v-d642a1d0] {\n  color: #D2BD8E;\n}\n[dir] .btn-beige.btn-o[data-v-d642a1d0] {\n  border: 1px solid #D2BD8E;\n}\n.btn-beige.btn-o[data-v-d642a1d0]:hover {\n  color: #e1d2b2;\n}\n[dir] .btn-beige.btn-o[data-v-d642a1d0]:hover {\n  border-color: #e1d2b2;\n  background: none !important;\n}\n.btn-beige.btn-o[data-v-d642a1d0]:active, .btn-beige.btn-o.active[data-v-d642a1d0], .btn-beige.btn-o.active[data-v-d642a1d0]:focus, .btn-beige.btn-o[data-v-d642a1d0]:active:focus, .btn-beige.btn-o[data-v-d642a1d0]:active:hover {\n  color: #bc9d57 !important;\n}\n[dir] .btn-beige.btn-o[data-v-d642a1d0]:active, [dir] .btn-beige.btn-o.active[data-v-d642a1d0], [dir] .btn-beige.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-beige.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-beige.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #bc9d57 !important;\n}\n.btn-beige.btn-o[data-v-d642a1d0]:focus {\n  color: #e1d2b2;\n}\n[dir] .btn-beige.btn-o[data-v-d642a1d0]:focus {\n  background-color: #efe8d7;\n  border-color: #efe8d7;\n}\n.btn-beige.btn-o.disabled[data-v-d642a1d0]:hover, .btn-beige.btn-o.disabled[data-v-d642a1d0]:focus, .btn-beige.btn-o.disabled[data-v-d642a1d0]:active, .btn-beige.btn-o.disabled.active[data-v-d642a1d0], .btn-beige.btn-o[disabled][data-v-d642a1d0], .btn-beige.btn-o[disabled][data-v-d642a1d0]:hover, .btn-beige.btn-o[disabled][data-v-d642a1d0]:focus, .btn-beige.btn-o[disabled][data-v-d642a1d0]:active, .btn-beige.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-beige.btn-o.active[data-v-d642a1d0] {\n  color: #efe8d7;\n}\n[dir] .btn-beige.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-beige.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-beige.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-beige.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-beige.btn-o[disabled][data-v-d642a1d0], [dir] .btn-beige.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-beige.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-beige.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-beige.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-beige.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-beige.btn-o.active[data-v-d642a1d0] {\n  border-color: #efe8d7;\n}\n\n/*********************************************/\n.btn-light-beige[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-beige[data-v-d642a1d0] {\n  background-color: #d9c8a0;\n  border-color: #d9c8a0;\n}\n.btn-light-beige[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-beige[data-v-d642a1d0]:hover {\n  background-color: #e8ddc5 !important;\n  border-color: #e8ddc5;\n}\n[dir] .btn-light-beige[data-v-d642a1d0]:active, [dir] .btn-light-beige.active[data-v-d642a1d0], [dir] .btn-light-beige.active[data-v-d642a1d0]:focus, [dir] .btn-light-beige[data-v-d642a1d0]:active:focus, [dir] .btn-light-beige[data-v-d642a1d0]:active:hover, [dir] .btn-light-beige.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #d2bd8e !important;\n  border-color: #d2bd8e;\n}\n.btn-light-beige[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-beige[data-v-d642a1d0]:focus {\n  background-color: #efe8d7;\n  border-color: #efe8d7;\n}\n.btn-light-beige.disabled[data-v-d642a1d0]:hover, .btn-light-beige.disabled[data-v-d642a1d0]:focus, .btn-light-beige.disabled[data-v-d642a1d0]:active, .btn-light-beige.disabled.active[data-v-d642a1d0], .btn-light-beige[disabled][data-v-d642a1d0], .btn-light-beige[disabled][data-v-d642a1d0]:hover, .btn-light-beige[disabled][data-v-d642a1d0]:focus, .btn-light-beige[disabled][data-v-d642a1d0]:active, .btn-light-beige[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-beige.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-beige.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-beige.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-beige.disabled[data-v-d642a1d0]:active, [dir] .btn-light-beige.disabled.active[data-v-d642a1d0], [dir] .btn-light-beige[disabled][data-v-d642a1d0], [dir] .btn-light-beige[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-beige[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-beige[disabled][data-v-d642a1d0]:active, [dir] .btn-light-beige[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-beige[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-beige.active[data-v-d642a1d0] {\n  background-color: #f6f2e9;\n  border-color: #f6f2e9;\n}\n.btn-light-beige.btn-o[data-v-d642a1d0] {\n  color: #d9c8a0;\n}\n[dir] .btn-light-beige.btn-o[data-v-d642a1d0] {\n  border: 1px solid #d9c8a0;\n}\n.btn-light-beige.btn-o[data-v-d642a1d0]:hover {\n  color: #e8ddc5;\n}\n[dir] .btn-light-beige.btn-o[data-v-d642a1d0]:hover {\n  border-color: #e8ddc5;\n  background: none !important;\n}\n.btn-light-beige.btn-o[data-v-d642a1d0]:active, .btn-light-beige.btn-o.active[data-v-d642a1d0], .btn-light-beige.btn-o.active[data-v-d642a1d0]:focus, .btn-light-beige.btn-o[data-v-d642a1d0]:active:focus, .btn-light-beige.btn-o[data-v-d642a1d0]:active:hover {\n  color: #c3a86a !important;\n}\n[dir] .btn-light-beige.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-beige.btn-o.active[data-v-d642a1d0], [dir] .btn-light-beige.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-beige.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-beige.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #c3a86a !important;\n}\n.btn-light-beige.btn-o[data-v-d642a1d0]:focus {\n  color: #e8ddc5;\n}\n[dir] .btn-light-beige.btn-o[data-v-d642a1d0]:focus {\n  background-color: #f6f2e9;\n  border-color: #f6f2e9;\n}\n.btn-light-beige.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-beige.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-beige.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-beige.btn-o.disabled.active[data-v-d642a1d0], .btn-light-beige.btn-o[disabled][data-v-d642a1d0], .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-beige.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-beige.btn-o.active[data-v-d642a1d0] {\n  color: #f6f2e9;\n}\n[dir] .btn-light-beige.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-beige.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-beige.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-beige.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-beige.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-beige.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-beige.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-beige.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-beige.btn-o.active[data-v-d642a1d0] {\n  border-color: #f6f2e9;\n}\n\n/*********************************************/\n.btn-dark-beige[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-beige[data-v-d642a1d0] {\n  background-color: #c3a86a;\n  border-color: #c3a86a;\n}\n.btn-dark-beige[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-beige[data-v-d642a1d0]:hover {\n  background-color: #d2bd8e !important;\n  border-color: #d2bd8e;\n}\n[dir] .btn-dark-beige[data-v-d642a1d0]:active, [dir] .btn-dark-beige.active[data-v-d642a1d0], [dir] .btn-dark-beige.active[data-v-d642a1d0]:focus, [dir] .btn-dark-beige[data-v-d642a1d0]:active:focus, [dir] .btn-dark-beige[data-v-d642a1d0]:active:hover, [dir] .btn-dark-beige.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #bc9d57 !important;\n  border-color: #bc9d57;\n}\n.btn-dark-beige[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-beige[data-v-d642a1d0]:focus {\n  background-color: #d9c8a0;\n  border-color: #d9c8a0;\n}\n.btn-dark-beige.disabled[data-v-d642a1d0]:hover, .btn-dark-beige.disabled[data-v-d642a1d0]:focus, .btn-dark-beige.disabled[data-v-d642a1d0]:active, .btn-dark-beige.disabled.active[data-v-d642a1d0], .btn-dark-beige[disabled][data-v-d642a1d0], .btn-dark-beige[disabled][data-v-d642a1d0]:hover, .btn-dark-beige[disabled][data-v-d642a1d0]:focus, .btn-dark-beige[disabled][data-v-d642a1d0]:active, .btn-dark-beige[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-beige.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-beige.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-beige.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-beige.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-beige.disabled.active[data-v-d642a1d0], [dir] .btn-dark-beige[disabled][data-v-d642a1d0], [dir] .btn-dark-beige[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-beige[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-beige[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-beige[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-beige[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-beige.active[data-v-d642a1d0] {\n  background-color: #e1d2b2;\n  border-color: #e1d2b2;\n}\n.btn-dark-beige.btn-o[data-v-d642a1d0] {\n  color: #c3a86a;\n}\n[dir] .btn-dark-beige.btn-o[data-v-d642a1d0] {\n  border: 1px solid #c3a86a;\n}\n.btn-dark-beige.btn-o[data-v-d642a1d0]:hover {\n  color: #d2bd8e;\n}\n[dir] .btn-dark-beige.btn-o[data-v-d642a1d0]:hover {\n  border-color: #d2bd8e;\n  background: none !important;\n}\n.btn-dark-beige.btn-o[data-v-d642a1d0]:active, .btn-dark-beige.btn-o.active[data-v-d642a1d0], .btn-dark-beige.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-beige.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-beige.btn-o[data-v-d642a1d0]:active:hover {\n  color: #a18340 !important;\n}\n[dir] .btn-dark-beige.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-beige.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-beige.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-beige.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-beige.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #a18340 !important;\n}\n.btn-dark-beige.btn-o[data-v-d642a1d0]:focus {\n  color: #d2bd8e;\n}\n[dir] .btn-dark-beige.btn-o[data-v-d642a1d0]:focus {\n  background-color: #e1d2b2;\n  border-color: #e1d2b2;\n}\n.btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-beige.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-beige.btn-o[disabled][data-v-d642a1d0], .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-beige.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-beige.btn-o.active[data-v-d642a1d0] {\n  color: #e1d2b2;\n}\n[dir] .btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-beige.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-beige.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-beige.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-beige.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-beige.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-beige.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-beige.btn-o.active[data-v-d642a1d0] {\n  border-color: #e1d2b2;\n}\n\n/*********************************************/\n.btn-yellow[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-yellow[data-v-d642a1d0] {\n  background-color: #FFB848;\n  border-color: #FFB848;\n}\n.btn-yellow[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-yellow[data-v-d642a1d0]:hover {\n  background-color: #ffcc7b !important;\n  border-color: #ffcc7b;\n}\n[dir] .btn-yellow[data-v-d642a1d0]:active, [dir] .btn-yellow.active[data-v-d642a1d0], [dir] .btn-yellow.active[data-v-d642a1d0]:focus, [dir] .btn-yellow[data-v-d642a1d0]:active:focus, [dir] .btn-yellow[data-v-d642a1d0]:active:hover, [dir] .btn-yellow.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #ffae2e !important;\n  border-color: #ffae2e;\n}\n.btn-yellow[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-yellow[data-v-d642a1d0]:focus {\n  background-color: #ffd694;\n  border-color: #ffd694;\n}\n.btn-yellow.disabled[data-v-d642a1d0]:hover, .btn-yellow.disabled[data-v-d642a1d0]:focus, .btn-yellow.disabled[data-v-d642a1d0]:active, .btn-yellow.disabled.active[data-v-d642a1d0], .btn-yellow[disabled][data-v-d642a1d0], .btn-yellow[disabled][data-v-d642a1d0]:hover, .btn-yellow[disabled][data-v-d642a1d0]:focus, .btn-yellow[disabled][data-v-d642a1d0]:active, .btn-yellow[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-yellow[data-v-d642a1d0]:hover, fieldset[disabled] .btn-yellow[data-v-d642a1d0]:focus, fieldset[disabled] .btn-yellow[data-v-d642a1d0]:active, fieldset[disabled] .btn-yellow.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-yellow.disabled[data-v-d642a1d0]:hover, [dir] .btn-yellow.disabled[data-v-d642a1d0]:focus, [dir] .btn-yellow.disabled[data-v-d642a1d0]:active, [dir] .btn-yellow.disabled.active[data-v-d642a1d0], [dir] .btn-yellow[disabled][data-v-d642a1d0], [dir] .btn-yellow[disabled][data-v-d642a1d0]:hover, [dir] .btn-yellow[disabled][data-v-d642a1d0]:focus, [dir] .btn-yellow[disabled][data-v-d642a1d0]:active, [dir] .btn-yellow[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-yellow[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-yellow[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-yellow[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-yellow.active[data-v-d642a1d0] {\n  background-color: #ffe0ae;\n  border-color: #ffe0ae;\n}\n.btn-yellow.btn-o[data-v-d642a1d0] {\n  color: #FFB848;\n}\n[dir] .btn-yellow.btn-o[data-v-d642a1d0] {\n  border: 1px solid #FFB848;\n}\n.btn-yellow.btn-o[data-v-d642a1d0]:hover {\n  color: #ffcc7b;\n}\n[dir] .btn-yellow.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ffcc7b;\n  background: none !important;\n}\n.btn-yellow.btn-o[data-v-d642a1d0]:active, .btn-yellow.btn-o.active[data-v-d642a1d0], .btn-yellow.btn-o.active[data-v-d642a1d0]:focus, .btn-yellow.btn-o[data-v-d642a1d0]:active:focus, .btn-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  color: #fa9900 !important;\n}\n[dir] .btn-yellow.btn-o[data-v-d642a1d0]:active, [dir] .btn-yellow.btn-o.active[data-v-d642a1d0], [dir] .btn-yellow.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-yellow.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #fa9900 !important;\n}\n.btn-yellow.btn-o[data-v-d642a1d0]:focus {\n  color: #ffcc7b;\n}\n[dir] .btn-yellow.btn-o[data-v-d642a1d0]:focus {\n  background-color: #ffe0ae;\n  border-color: #ffe0ae;\n}\n.btn-yellow.btn-o.disabled[data-v-d642a1d0]:hover, .btn-yellow.btn-o.disabled[data-v-d642a1d0]:focus, .btn-yellow.btn-o.disabled[data-v-d642a1d0]:active, .btn-yellow.btn-o.disabled.active[data-v-d642a1d0], .btn-yellow.btn-o[disabled][data-v-d642a1d0], .btn-yellow.btn-o[disabled][data-v-d642a1d0]:hover, .btn-yellow.btn-o[disabled][data-v-d642a1d0]:focus, .btn-yellow.btn-o[disabled][data-v-d642a1d0]:active, .btn-yellow.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-yellow.btn-o.active[data-v-d642a1d0] {\n  color: #ffe0ae;\n}\n[dir] .btn-yellow.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-yellow.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-yellow.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-yellow.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-yellow.btn-o[disabled][data-v-d642a1d0], [dir] .btn-yellow.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-yellow.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-yellow.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-yellow.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-yellow.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-yellow.btn-o.active[data-v-d642a1d0] {\n  border-color: #ffe0ae;\n}\n\n/*********************************************/\n.btn-light-yellow[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-yellow[data-v-d642a1d0] {\n  background-color: #ffcc7b;\n  border-color: #ffcc7b;\n}\n.btn-light-yellow[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-light-yellow[data-v-d642a1d0]:hover {\n  background-color: #ffe0ae !important;\n  border-color: #ffe0ae;\n}\n[dir] .btn-light-yellow[data-v-d642a1d0]:active, [dir] .btn-light-yellow.active[data-v-d642a1d0], [dir] .btn-light-yellow.active[data-v-d642a1d0]:focus, [dir] .btn-light-yellow[data-v-d642a1d0]:active:focus, [dir] .btn-light-yellow[data-v-d642a1d0]:active:hover, [dir] .btn-light-yellow.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #ffc261 !important;\n  border-color: #ffc261;\n}\n.btn-light-yellow[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-light-yellow[data-v-d642a1d0]:focus {\n  background-color: #ffe9c7;\n  border-color: #ffe9c7;\n}\n.btn-light-yellow.disabled[data-v-d642a1d0]:hover, .btn-light-yellow.disabled[data-v-d642a1d0]:focus, .btn-light-yellow.disabled[data-v-d642a1d0]:active, .btn-light-yellow.disabled.active[data-v-d642a1d0], .btn-light-yellow[disabled][data-v-d642a1d0], .btn-light-yellow[disabled][data-v-d642a1d0]:hover, .btn-light-yellow[disabled][data-v-d642a1d0]:focus, .btn-light-yellow[disabled][data-v-d642a1d0]:active, .btn-light-yellow[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-yellow.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-light-yellow.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-yellow.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-yellow.disabled[data-v-d642a1d0]:active, [dir] .btn-light-yellow.disabled.active[data-v-d642a1d0], [dir] .btn-light-yellow[disabled][data-v-d642a1d0], [dir] .btn-light-yellow[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-yellow[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-yellow[disabled][data-v-d642a1d0]:active, [dir] .btn-light-yellow[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-yellow[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-yellow.active[data-v-d642a1d0] {\n  background-color: #fff3e1;\n  border-color: #fff3e1;\n}\n.btn-light-yellow.btn-o[data-v-d642a1d0] {\n  color: #ffcc7b;\n}\n[dir] .btn-light-yellow.btn-o[data-v-d642a1d0] {\n  border: 1px solid #ffcc7b;\n}\n.btn-light-yellow.btn-o[data-v-d642a1d0]:hover {\n  color: #ffe0ae;\n}\n[dir] .btn-light-yellow.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ffe0ae;\n  background: none !important;\n}\n.btn-light-yellow.btn-o[data-v-d642a1d0]:active, .btn-light-yellow.btn-o.active[data-v-d642a1d0], .btn-light-yellow.btn-o.active[data-v-d642a1d0]:focus, .btn-light-yellow.btn-o[data-v-d642a1d0]:active:focus, .btn-light-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  color: #ffae2e !important;\n}\n[dir] .btn-light-yellow.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-yellow.btn-o.active[data-v-d642a1d0], [dir] .btn-light-yellow.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-yellow.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #ffae2e !important;\n}\n.btn-light-yellow.btn-o[data-v-d642a1d0]:focus {\n  color: #ffe0ae;\n}\n[dir] .btn-light-yellow.btn-o[data-v-d642a1d0]:focus {\n  background-color: #fff3e1;\n  border-color: #fff3e1;\n}\n.btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-yellow.btn-o.disabled.active[data-v-d642a1d0], .btn-light-yellow.btn-o[disabled][data-v-d642a1d0], .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-yellow.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-yellow.btn-o.active[data-v-d642a1d0] {\n  color: #fff3e1;\n}\n[dir] .btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-yellow.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-yellow.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-yellow.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-yellow.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-yellow.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-yellow.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-yellow.btn-o.active[data-v-d642a1d0] {\n  border-color: #fff3e1;\n}\n\n/*********************************************/\n.btn-dark-yellow[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-yellow[data-v-d642a1d0] {\n  background-color: #ffa415;\n  border-color: #ffa415;\n}\n.btn-dark-yellow[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-yellow[data-v-d642a1d0]:hover {\n  background-color: #ffb848 !important;\n  border-color: #ffb848;\n}\n[dir] .btn-dark-yellow[data-v-d642a1d0]:active, [dir] .btn-dark-yellow.active[data-v-d642a1d0], [dir] .btn-dark-yellow.active[data-v-d642a1d0]:focus, [dir] .btn-dark-yellow[data-v-d642a1d0]:active:focus, [dir] .btn-dark-yellow[data-v-d642a1d0]:active:hover, [dir] .btn-dark-yellow.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #fa9900 !important;\n  border-color: #fa9900;\n}\n.btn-dark-yellow[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-yellow[data-v-d642a1d0]:focus {\n  background-color: #ffc261;\n  border-color: #ffc261;\n}\n.btn-dark-yellow.disabled[data-v-d642a1d0]:hover, .btn-dark-yellow.disabled[data-v-d642a1d0]:focus, .btn-dark-yellow.disabled[data-v-d642a1d0]:active, .btn-dark-yellow.disabled.active[data-v-d642a1d0], .btn-dark-yellow[disabled][data-v-d642a1d0], .btn-dark-yellow[disabled][data-v-d642a1d0]:hover, .btn-dark-yellow[disabled][data-v-d642a1d0]:focus, .btn-dark-yellow[disabled][data-v-d642a1d0]:active, .btn-dark-yellow[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-yellow.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-yellow.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-yellow.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-yellow.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-yellow.disabled.active[data-v-d642a1d0], [dir] .btn-dark-yellow[disabled][data-v-d642a1d0], [dir] .btn-dark-yellow[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-yellow[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-yellow[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-yellow[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-yellow[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-yellow.active[data-v-d642a1d0] {\n  background-color: #ffcc7b;\n  border-color: #ffcc7b;\n}\n.btn-dark-yellow.btn-o[data-v-d642a1d0] {\n  color: #ffa415;\n}\n[dir] .btn-dark-yellow.btn-o[data-v-d642a1d0] {\n  border: 1px solid #ffa415;\n}\n.btn-dark-yellow.btn-o[data-v-d642a1d0]:hover {\n  color: #ffb848;\n}\n[dir] .btn-dark-yellow.btn-o[data-v-d642a1d0]:hover {\n  border-color: #ffb848;\n  background: none !important;\n}\n.btn-dark-yellow.btn-o[data-v-d642a1d0]:active, .btn-dark-yellow.btn-o.active[data-v-d642a1d0], .btn-dark-yellow.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-yellow.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  color: #c77a00 !important;\n}\n[dir] .btn-dark-yellow.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-yellow.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-yellow.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-yellow.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-yellow.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #c77a00 !important;\n}\n.btn-dark-yellow.btn-o[data-v-d642a1d0]:focus {\n  color: #ffb848;\n}\n[dir] .btn-dark-yellow.btn-o[data-v-d642a1d0]:focus {\n  background-color: #ffcc7b;\n  border-color: #ffcc7b;\n}\n.btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-yellow.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0], .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-yellow.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-yellow.btn-o.active[data-v-d642a1d0] {\n  color: #ffcc7b;\n}\n[dir] .btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-yellow.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-yellow.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-yellow.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-yellow.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-yellow.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-yellow.btn-o.active[data-v-d642a1d0] {\n  border-color: #ffcc7b;\n}\n\n/*********************************************/\n.btn-grey[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-grey[data-v-d642a1d0] {\n  background-color: #c8c7cc;\n  border-color: #c8c7cc;\n}\n.btn-grey[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-grey[data-v-d642a1d0]:hover {\n  background-color: #e2e2e4 !important;\n  border-color: #e2e2e4;\n}\n[dir] .btn-grey[data-v-d642a1d0]:active, [dir] .btn-grey.active[data-v-d642a1d0], [dir] .btn-grey.active[data-v-d642a1d0]:focus, [dir] .btn-grey[data-v-d642a1d0]:active:focus, [dir] .btn-grey[data-v-d642a1d0]:active:hover, [dir] .btn-grey.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #bbbac0 !important;\n  border-color: #bbbac0;\n}\n.btn-grey[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-grey[data-v-d642a1d0]:focus {\n  background-color: #efeff0;\n  border-color: #efeff0;\n}\n.btn-grey.disabled[data-v-d642a1d0]:hover, .btn-grey.disabled[data-v-d642a1d0]:focus, .btn-grey.disabled[data-v-d642a1d0]:active, .btn-grey.disabled.active[data-v-d642a1d0], .btn-grey[disabled][data-v-d642a1d0], .btn-grey[disabled][data-v-d642a1d0]:hover, .btn-grey[disabled][data-v-d642a1d0]:focus, .btn-grey[disabled][data-v-d642a1d0]:active, .btn-grey[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-grey[data-v-d642a1d0]:hover, fieldset[disabled] .btn-grey[data-v-d642a1d0]:focus, fieldset[disabled] .btn-grey[data-v-d642a1d0]:active, fieldset[disabled] .btn-grey.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-grey.disabled[data-v-d642a1d0]:hover, [dir] .btn-grey.disabled[data-v-d642a1d0]:focus, [dir] .btn-grey.disabled[data-v-d642a1d0]:active, [dir] .btn-grey.disabled.active[data-v-d642a1d0], [dir] .btn-grey[disabled][data-v-d642a1d0], [dir] .btn-grey[disabled][data-v-d642a1d0]:hover, [dir] .btn-grey[disabled][data-v-d642a1d0]:focus, [dir] .btn-grey[disabled][data-v-d642a1d0]:active, [dir] .btn-grey[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-grey[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-grey[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-grey[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-grey.active[data-v-d642a1d0] {\n  background-color: #fcfcfd;\n  border-color: #fcfcfd;\n}\n.btn-grey.btn-o[data-v-d642a1d0] {\n  color: #c8c7cc;\n}\n[dir] .btn-grey.btn-o[data-v-d642a1d0] {\n  border: 1px solid #c8c7cc;\n}\n.btn-grey.btn-o[data-v-d642a1d0]:hover {\n  color: #e2e2e4;\n}\n[dir] .btn-grey.btn-o[data-v-d642a1d0]:hover {\n  border-color: #e2e2e4;\n  background: none !important;\n}\n.btn-grey.btn-o[data-v-d642a1d0]:active, .btn-grey.btn-o.active[data-v-d642a1d0], .btn-grey.btn-o.active[data-v-d642a1d0]:focus, .btn-grey.btn-o[data-v-d642a1d0]:active:focus, .btn-grey.btn-o[data-v-d642a1d0]:active:hover {\n  color: #a19fa8 !important;\n}\n[dir] .btn-grey.btn-o[data-v-d642a1d0]:active, [dir] .btn-grey.btn-o.active[data-v-d642a1d0], [dir] .btn-grey.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-grey.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-grey.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #a19fa8 !important;\n}\n.btn-grey.btn-o[data-v-d642a1d0]:focus {\n  color: #e2e2e4;\n}\n[dir] .btn-grey.btn-o[data-v-d642a1d0]:focus {\n  background-color: #fcfcfd;\n  border-color: #fcfcfd;\n}\n.btn-grey.btn-o.disabled[data-v-d642a1d0]:hover, .btn-grey.btn-o.disabled[data-v-d642a1d0]:focus, .btn-grey.btn-o.disabled[data-v-d642a1d0]:active, .btn-grey.btn-o.disabled.active[data-v-d642a1d0], .btn-grey.btn-o[disabled][data-v-d642a1d0], .btn-grey.btn-o[disabled][data-v-d642a1d0]:hover, .btn-grey.btn-o[disabled][data-v-d642a1d0]:focus, .btn-grey.btn-o[disabled][data-v-d642a1d0]:active, .btn-grey.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-grey.btn-o.active[data-v-d642a1d0] {\n  color: #fcfcfd;\n}\n[dir] .btn-grey.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-grey.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-grey.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-grey.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-grey.btn-o[disabled][data-v-d642a1d0], [dir] .btn-grey.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-grey.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-grey.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-grey.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-grey.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-grey.btn-o.active[data-v-d642a1d0] {\n  border-color: #fcfcfd;\n}\n\n/*********************************************/\n.btn-light-grey[data-v-d642a1d0] {\n  color: #8e8e93;\n}\n[dir] .btn-light-grey[data-v-d642a1d0] {\n  background-color: #f7f7f8;\n  border-color: #f7f7f8;\n}\n.btn-light-grey[data-v-d642a1d0]:hover {\n  color: #8e8e93;\n}\n[dir] .btn-light-grey[data-v-d642a1d0]:hover {\n  background-color: white !important;\n  border-color: white;\n}\n[dir] .btn-light-grey[data-v-d642a1d0]:active, [dir] .btn-light-grey.active[data-v-d642a1d0], [dir] .btn-light-grey.active[data-v-d642a1d0]:focus, [dir] .btn-light-grey[data-v-d642a1d0]:active:focus, [dir] .btn-light-grey[data-v-d642a1d0]:active:hover, [dir] .btn-light-grey.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #eaeaec;\n}\n.btn-light-grey[data-v-d642a1d0]:focus {\n  color: #8e8e93;\n}\n[dir] .btn-light-grey[data-v-d642a1d0]:focus {\n  background-color: white;\n  border-color: white;\n}\n.btn-light-grey.disabled[data-v-d642a1d0]:hover, .btn-light-grey.disabled[data-v-d642a1d0]:focus, .btn-light-grey.disabled[data-v-d642a1d0]:active, .btn-light-grey.disabled.active[data-v-d642a1d0], .btn-light-grey[disabled][data-v-d642a1d0], .btn-light-grey[disabled][data-v-d642a1d0]:hover, .btn-light-grey[disabled][data-v-d642a1d0]:focus, .btn-light-grey[disabled][data-v-d642a1d0]:active, .btn-light-grey[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-grey.active[data-v-d642a1d0] {\n  color: #c2c2c5;\n}\n[dir] .btn-light-grey.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-grey.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-grey.disabled[data-v-d642a1d0]:active, [dir] .btn-light-grey.disabled.active[data-v-d642a1d0], [dir] .btn-light-grey[disabled][data-v-d642a1d0], [dir] .btn-light-grey[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-grey[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-grey[disabled][data-v-d642a1d0]:active, [dir] .btn-light-grey[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-grey[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-grey.active[data-v-d642a1d0] {\n  background-color: white;\n  border-color: white;\n}\n.btn-light-grey.btn-o[data-v-d642a1d0] {\n  color: #f7f7f8;\n}\n[dir] .btn-light-grey.btn-o[data-v-d642a1d0] {\n  border: 1px solid #f7f7f8;\n}\n.btn-light-grey.btn-o[data-v-d642a1d0]:hover {\n  color: #a8a8ac;\n}\n[dir] .btn-light-grey.btn-o[data-v-d642a1d0]:hover {\n  border-color: white;\n  background: none !important;\n}\n.btn-light-grey.btn-o[data-v-d642a1d0]:active, .btn-light-grey.btn-o.active[data-v-d642a1d0], .btn-light-grey.btn-o.active[data-v-d642a1d0]:focus, .btn-light-grey.btn-o[data-v-d642a1d0]:active:focus, .btn-light-grey.btn-o[data-v-d642a1d0]:active:hover {\n  color: #68686d !important;\n}\n[dir] .btn-light-grey.btn-o[data-v-d642a1d0]:active, [dir] .btn-light-grey.btn-o.active[data-v-d642a1d0], [dir] .btn-light-grey.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-light-grey.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-light-grey.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #eaeaec !important;\n  border-color: #d0cfd3 !important;\n}\n.btn-light-grey.btn-o[data-v-d642a1d0]:focus {\n  color: white;\n}\n[dir] .btn-light-grey.btn-o[data-v-d642a1d0]:focus {\n  background-color: white;\n  border-color: white;\n}\n.btn-light-grey.btn-o.disabled[data-v-d642a1d0]:hover, .btn-light-grey.btn-o.disabled[data-v-d642a1d0]:focus, .btn-light-grey.btn-o.disabled[data-v-d642a1d0]:active, .btn-light-grey.btn-o.disabled.active[data-v-d642a1d0], .btn-light-grey.btn-o[disabled][data-v-d642a1d0], .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:hover, .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:focus, .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:active, .btn-light-grey.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-light-grey.btn-o.active[data-v-d642a1d0] {\n  color: #c2c2c5;\n}\n[dir] .btn-light-grey.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-light-grey.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-light-grey.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-light-grey.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-light-grey.btn-o[disabled][data-v-d642a1d0], [dir] .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-light-grey.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-light-grey.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-light-grey.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-light-grey.btn-o.active[data-v-d642a1d0] {\n  border-color: white;\n}\n\n/*********************************************/\n.btn-dark-grey[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-grey[data-v-d642a1d0] {\n  background-color: #aeacb4;\n  border-color: #aeacb4;\n}\n.btn-dark-grey[data-v-d642a1d0]:hover {\n  color: #ffffff;\n}\n[dir] .btn-dark-grey[data-v-d642a1d0]:hover {\n  background-color: #c8c7cc !important;\n  border-color: #c8c7cc;\n}\n[dir] .btn-dark-grey[data-v-d642a1d0]:active, [dir] .btn-dark-grey.active[data-v-d642a1d0], [dir] .btn-dark-grey.active[data-v-d642a1d0]:focus, [dir] .btn-dark-grey[data-v-d642a1d0]:active:focus, [dir] .btn-dark-grey[data-v-d642a1d0]:active:hover, [dir] .btn-dark-grey.dropdown-toggle[data-v-d642a1d0]:active:hover {\n  background-color: #a19fa8 !important;\n  border-color: #a19fa8;\n}\n.btn-dark-grey[data-v-d642a1d0]:focus {\n  color: #ffffff;\n}\n[dir] .btn-dark-grey[data-v-d642a1d0]:focus {\n  background-color: #d5d4d8;\n  border-color: #d5d4d8;\n}\n.btn-dark-grey.disabled[data-v-d642a1d0]:hover, .btn-dark-grey.disabled[data-v-d642a1d0]:focus, .btn-dark-grey.disabled[data-v-d642a1d0]:active, .btn-dark-grey.disabled.active[data-v-d642a1d0], .btn-dark-grey[disabled][data-v-d642a1d0], .btn-dark-grey[disabled][data-v-d642a1d0]:hover, .btn-dark-grey[disabled][data-v-d642a1d0]:focus, .btn-dark-grey[disabled][data-v-d642a1d0]:active, .btn-dark-grey[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-grey.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-dark-grey.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-grey.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-grey.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-grey.disabled.active[data-v-d642a1d0], [dir] .btn-dark-grey[disabled][data-v-d642a1d0], [dir] .btn-dark-grey[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-grey[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-grey[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-grey[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-grey[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-grey.active[data-v-d642a1d0] {\n  background-color: #e2e2e4;\n  border-color: #e2e2e4;\n}\n.btn-dark-grey.btn-o[data-v-d642a1d0] {\n  color: #aeacb4;\n}\n[dir] .btn-dark-grey.btn-o[data-v-d642a1d0] {\n  border: 1px solid #aeacb4;\n}\n.btn-dark-grey.btn-o[data-v-d642a1d0]:hover {\n  color: #c8c7cc;\n}\n[dir] .btn-dark-grey.btn-o[data-v-d642a1d0]:hover {\n  border-color: #c8c7cc;\n  background: none !important;\n}\n.btn-dark-grey.btn-o[data-v-d642a1d0]:active, .btn-dark-grey.btn-o.active[data-v-d642a1d0], .btn-dark-grey.btn-o.active[data-v-d642a1d0]:focus, .btn-dark-grey.btn-o[data-v-d642a1d0]:active:focus, .btn-dark-grey.btn-o[data-v-d642a1d0]:active:hover {\n  color: #86848f !important;\n}\n[dir] .btn-dark-grey.btn-o[data-v-d642a1d0]:active, [dir] .btn-dark-grey.btn-o.active[data-v-d642a1d0], [dir] .btn-dark-grey.btn-o.active[data-v-d642a1d0]:focus, [dir] .btn-dark-grey.btn-o[data-v-d642a1d0]:active:focus, [dir] .btn-dark-grey.btn-o[data-v-d642a1d0]:active:hover {\n  background-color: #a19fa8 !important;\n  border-color: #86848f !important;\n}\n.btn-dark-grey.btn-o[data-v-d642a1d0]:focus {\n  color: #c8c7cc;\n}\n[dir] .btn-dark-grey.btn-o[data-v-d642a1d0]:focus {\n  background-color: #e2e2e4;\n  border-color: #e2e2e4;\n}\n.btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:hover, .btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:focus, .btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:active, .btn-dark-grey.btn-o.disabled.active[data-v-d642a1d0], .btn-dark-grey.btn-o[disabled][data-v-d642a1d0], .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:hover, .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:focus, .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:active, .btn-dark-grey.btn-o[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:hover, fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:focus, fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:active, fieldset[disabled] .btn-dark-grey.btn-o.active[data-v-d642a1d0] {\n  color: #e2e2e4;\n}\n[dir] .btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:hover, [dir] .btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:focus, [dir] .btn-dark-grey.btn-o.disabled[data-v-d642a1d0]:active, [dir] .btn-dark-grey.btn-o.disabled.active[data-v-d642a1d0], [dir] .btn-dark-grey.btn-o[disabled][data-v-d642a1d0], [dir] .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:hover, [dir] .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:focus, [dir] .btn-dark-grey.btn-o[disabled][data-v-d642a1d0]:active, [dir] .btn-dark-grey.btn-o[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-dark-grey.btn-o[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-dark-grey.btn-o.active[data-v-d642a1d0] {\n  border-color: #e2e2e4;\n}\n/*********************************************/\n.btn-transparent-white[data-v-d642a1d0] {\n  color: #ffffff !important;\n}\n[dir] .btn-transparent-white[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(255, 255, 255, 0.6);\n  border-width: 1px;\n}\n[dir] .btn-transparent-white[data-v-d642a1d0]:hover, [dir] .btn-transparent-white[data-v-d642a1d0]:focus, [dir] .btn-transparent-white[data-v-d642a1d0]:active, [dir] .btn-transparent-white.active[data-v-d642a1d0] {\n  background-color: rgba(44, 47, 59, 0.1);\n  border-color: rgba(255, 255, 255, 0.8);\n}\n.btn-transparent-white.disabled[data-v-d642a1d0]:hover, .btn-transparent-white.disabled[data-v-d642a1d0]:focus, .btn-transparent-white.disabled[data-v-d642a1d0]:active, .btn-transparent-white.disabled.active[data-v-d642a1d0], .btn-transparent-white[disabled][data-v-d642a1d0]:hover, .btn-transparent-white[disabled][data-v-d642a1d0]:focus, .btn-transparent-white[disabled][data-v-d642a1d0]:active, .btn-transparent-white[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:hover, fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:focus, fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:active, fieldset[disabled] .btn-transparent-white.active[data-v-d642a1d0] {\n  color: #ffffff;\n}\n[dir] .btn-transparent-white.disabled[data-v-d642a1d0]:hover, [dir] .btn-transparent-white.disabled[data-v-d642a1d0]:focus, [dir] .btn-transparent-white.disabled[data-v-d642a1d0]:active, [dir] .btn-transparent-white.disabled.active[data-v-d642a1d0], [dir] .btn-transparent-white[disabled][data-v-d642a1d0]:hover, [dir] .btn-transparent-white[disabled][data-v-d642a1d0]:focus, [dir] .btn-transparent-white[disabled][data-v-d642a1d0]:active, [dir] .btn-transparent-white[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-transparent-white[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-transparent-white.active[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n\n/*********************************************/\n.btn-transparent-grey[data-v-d642a1d0] {\n  color: #c8c7cc !important;\n}\n[dir] .btn-transparent-grey[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(200, 199, 204, 0.3);\n  border-width: 1px;\n}\n[dir] .btn-transparent-grey[data-v-d642a1d0]:hover, [dir] .btn-transparent-grey[data-v-d642a1d0]:focus, [dir] .btn-transparent-grey[data-v-d642a1d0]:active, [dir] .btn-transparent-grey.active[data-v-d642a1d0] {\n  background-color: rgba(200, 199, 204, 0.1);\n  border-color: rgba(200, 199, 204, 0.6);\n  box-shadow: none !important;\n}\n.btn-transparent-grey.disabled[data-v-d642a1d0]:hover, .btn-transparent-grey.disabled[data-v-d642a1d0]:focus, .btn-transparent-grey.disabled[data-v-d642a1d0]:active, .btn-transparent-grey.disabled.active[data-v-d642a1d0], .btn-transparent-grey[disabled][data-v-d642a1d0]:hover, .btn-transparent-grey[disabled][data-v-d642a1d0]:focus, .btn-transparent-grey[disabled][data-v-d642a1d0]:active, .btn-transparent-grey[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:hover, fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:focus, fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:active, fieldset[disabled] .btn-transparent-grey.active[data-v-d642a1d0] {\n  color: #c8c7cc;\n}\n[dir] .btn-transparent-grey.disabled[data-v-d642a1d0]:hover, [dir] .btn-transparent-grey.disabled[data-v-d642a1d0]:focus, [dir] .btn-transparent-grey.disabled[data-v-d642a1d0]:active, [dir] .btn-transparent-grey.disabled.active[data-v-d642a1d0], [dir] .btn-transparent-grey[disabled][data-v-d642a1d0]:hover, [dir] .btn-transparent-grey[disabled][data-v-d642a1d0]:focus, [dir] .btn-transparent-grey[disabled][data-v-d642a1d0]:active, [dir] .btn-transparent-grey[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-transparent-grey[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-transparent-grey.active[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(200, 199, 204, 0.3);\n}\n\n/*********************************************/\n.btn-transparent-red[data-v-d642a1d0] {\n  color: #C82E29 !important;\n}\n[dir] .btn-transparent-red[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(200, 46, 41, 0.6);\n  border-width: 2px;\n}\n[dir] .btn-transparent-red[data-v-d642a1d0]:hover, [dir] .btn-transparent-red[data-v-d642a1d0]:focus, [dir] .btn-transparent-red[data-v-d642a1d0]:active, [dir] .btn-transparent-red.active[data-v-d642a1d0] {\n  background-color: rgba(200, 46, 41, 0.1);\n  border-color: rgba(200, 46, 41, 0.8);\n}\n.btn-transparent-red.disabled[data-v-d642a1d0]:hover, .btn-transparent-red.disabled[data-v-d642a1d0]:focus, .btn-transparent-red.disabled[data-v-d642a1d0]:active, .btn-transparent-red.disabled.active[data-v-d642a1d0], .btn-transparent-red[disabled][data-v-d642a1d0]:hover, .btn-transparent-red[disabled][data-v-d642a1d0]:focus, .btn-transparent-red[disabled][data-v-d642a1d0]:active, .btn-transparent-red[disabled].active[data-v-d642a1d0], fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:hover, fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:focus, fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:active, fieldset[disabled] .btn-transparent-red.active[data-v-d642a1d0] {\n  color: #C82E29;\n}\n[dir] .btn-transparent-red.disabled[data-v-d642a1d0]:hover, [dir] .btn-transparent-red.disabled[data-v-d642a1d0]:focus, [dir] .btn-transparent-red.disabled[data-v-d642a1d0]:active, [dir] .btn-transparent-red.disabled.active[data-v-d642a1d0], [dir] .btn-transparent-red[disabled][data-v-d642a1d0]:hover, [dir] .btn-transparent-red[disabled][data-v-d642a1d0]:focus, [dir] .btn-transparent-red[disabled][data-v-d642a1d0]:active, [dir] .btn-transparent-red[disabled].active[data-v-d642a1d0], [dir] fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:hover, [dir] fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:focus, [dir] fieldset[disabled] .btn-transparent-red[data-v-d642a1d0]:active, [dir] fieldset[disabled] .btn-transparent-red.active[data-v-d642a1d0] {\n  background: none;\n  border-color: rgba(200, 46, 41, 0.3);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Entidad" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "valorDat",
                              options: _vm.entidades
                            },
                            model: {
                              value: _vm.entidad,
                              callback: function($$v) {
                                _vm.entidad = $$v
                              },
                              expression: "entidad"
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
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Area" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "nombreAre", options: _vm.areas },
                            model: {
                              value: _vm.area,
                              callback: function($$v) {
                                _vm.area = $$v
                              },
                              expression: "area"
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
                                  return _vm.Cargar()
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
                                _vm._v("Cargar")
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
              _c("b-col", { attrs: { md: "12", xl: "12" } }, [
                _c("h3", [_vm._v("PLANTILLAS " + _vm._s(_vm.narea))])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { md: "12", xl: "12" } }, [
                _c(
                  "div",
                  { staticClass: "demo-inline-spacing" },
                  _vm._l(_vm.plantillas, function(uplantilla, indice) {
                    return _c(
                      "b-button",
                      {
                        key: indice,
                        class: {
                          "btn-outline-info":
                            _vm.clicked == uplantilla.idPlantilla
                        },
                        attrs: {
                          variant: "outline-secondary",
                          disabled: _vm.showLoading,
                          size: "sm",
                          pill: ""
                        },
                        on: {
                          click: function($event) {
                            _vm.Listar(
                              uplantilla.idPlantilla,
                              uplantilla.nombrePla
                            )
                            _vm.clicked = uplantilla.idPlantilla
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
                  }),
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { md: "6", xl: "6" } }, [
                _c("h3", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.vista_implemento) +
                      " - " +
                      _vm._s(_vm.narea) +
                      " - PLANTILLA " +
                      _vm._s(_vm.nplantilla)
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "text-right", attrs: { md: "6", xl: "6" } },
                [
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "EPP"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-renovar",
                              modifiers: { "modal-renovar": true }
                            }
                          ],
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.Situacion("ENTREGADO")
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "FileTextIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Entrega (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "PREVENTIVO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-planificar",
                              modifiers: { "modal-planificar": true }
                            }
                          ],
                          attrs: {
                            variant: "info",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.Situacion("PLANIFICADO")
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "ToolIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Preventivo (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "PREVENTIVO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-campaña",
                              modifiers: { "modal-campaña": true }
                            }
                          ],
                          attrs: {
                            variant: "primary",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.Situacion("CAMPANA")
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "ToolIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Campaña (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "DOCUMENTO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-tramitar",
                              modifiers: { "modal-tramitar": true }
                            }
                          ],
                          attrs: {
                            variant: "primary",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.Situacion("TRAMITADO")
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "MessageCircleIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Orden de Servicio (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-renovar",
                              modifiers: { "modal-renovar": true }
                            }
                          ],
                          attrs: {
                            variant: "primary",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.Situacion("PLANIFICADO")
                            }
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "LayersIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Actividad (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-aplazar",
                          modifiers: { "modal-aplazar": true }
                        }
                      ],
                      attrs: {
                        variant: "warning",
                        size: "sm",
                        disabled:
                          _vm.showLoading || _vm.seleccionados.length == 0
                      },
                      on: {
                        click: function($event) {
                          return _vm.Situacion("APLAZADO")
                        }
                      }
                    },
                    [
                      !_vm.showLoading
                        ? _c("feather-icon", {
                            staticClass: "mr-50",
                            attrs: { icon: "CalendarIcon" }
                          })
                        : _c("b-spinner", { attrs: { small: "" } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle" }, [
                        _vm._v(
                          "Aplazar (" + _vm._s(_vm.seleccionados.length) + ")"
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "DOCUMENTO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-pdf",
                              modifiers: { "modal-pdf": true }
                            }
                          ],
                          attrs: {
                            variant: "primary",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "LayersIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Generar Pdf (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.vista_implemento == "GENERICO" ||
                  _vm.vista_implemento == "DOCUMENTO"
                    ? _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-masivo",
                              modifiers: { "modal-masivo": true }
                            }
                          ],
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled:
                              _vm.showLoading || _vm.seleccionados.length == 0
                          }
                        },
                        [
                          !_vm.showLoading
                            ? _c("feather-icon", {
                                staticClass: "mr-50",
                                attrs: { icon: "FileIcon" }
                              })
                            : _c("b-spinner", { attrs: { small: "" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              "Carga Masiva (" +
                                _vm._s(_vm.seleccionados.length) +
                                ")"
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _c("br")
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
                { staticClass: "text-center", attrs: { md: "12", xl: "12" } },
                [
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        "content-class": "col-12 col-md-12 col-lg-12",
                        "nav-wrapper-class":
                          "faq-navigation col-md-12 col-lg-12 col-12",
                        "nav-class": "nav-left"
                      }
                    },
                    _vm._l(_vm.registros, function(ugrupo, indice) {
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
                                      [_vm._v(_vm._s(ugrupo.gru))]
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
                            ? _c("div", [
                                _c("div", { staticClass: "otabla" }, [
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-condensed table-bordered"
                                    },
                                    [
                                      _c("thead", [
                                        _c(
                                          "tr",
                                          [
                                            _c(
                                              "th",
                                              { attrs: { rowspan: "2" } },
                                              [_vm._v("Nro")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { rowspan: "2" } },
                                              [_vm._v("Vehículo")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.titulos, function(
                                              utitulo
                                            ) {
                                              return _c(
                                                "th",
                                                { attrs: { rowspan: "2" } },
                                                [_vm._v(_vm._s(utitulo.nom))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        {
                                          on: {
                                            contextmenu: function($event) {
                                              $event.preventDefault()
                                            }
                                          }
                                        },
                                        _vm._l(ugrupo.ent, function(
                                          uregistro,
                                          indexv,
                                          nrov
                                        ) {
                                          return _c(
                                            "tr",
                                            [
                                              _c("th", [
                                                _vm._v(_vm._s(indexv + 1))
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v(_vm._s(uregistro.nom))
                                              ]),
                                              _vm._v(" "),
                                              _vm._l(uregistro.asi, function(
                                                uasignacion,
                                                indexk
                                              ) {
                                                return _c(
                                                  "td",
                                                  {
                                                    staticClass: "oact",
                                                    class: {
                                                      osombreado:
                                                        uasignacion.sel
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.edicion.includes(
                                                          uasignacion.estado
                                                        )
                                                          ? _vm.Editar(
                                                              uasignacion,
                                                              uregistro.nom
                                                            )
                                                          : _vm.Renovar(
                                                              uasignacion,
                                                              uregistro.nom,
                                                              uregistro.id,
                                                              indexk
                                                            )
                                                      },
                                                      contextmenu: function(
                                                        $event
                                                      ) {
                                                        _vm.renovacion.includes(
                                                          uasignacion.estado
                                                        )
                                                          ? (uasignacion.sel =
                                                              uasignacion.sel)
                                                          : (uasignacion.sel = !uasignacion.sel)
                                                        _vm.Seleccionar(
                                                          uasignacion,
                                                          uregistro.nom,
                                                          uregistro.id,
                                                          uregistro.idExterno,
                                                          indexk
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-content-center align-items-center"
                                                      },
                                                      [
                                                        uasignacion.escaneoAsi ==
                                                        1
                                                          ? _c(
                                                              "b-avatar",
                                                              {
                                                                staticClass:
                                                                  "mr-50",
                                                                attrs: {
                                                                  rounded: "",
                                                                  variant:
                                                                    "light-primary",
                                                                  size: "40"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "feather-icon",
                                                                  {
                                                                    attrs: {
                                                                      icon:
                                                                        "FileIcon",
                                                                      size: "18"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "user-page-info"
                                                          },
                                                          [
                                                            uasignacion.estado ==
                                                            "VIGENTE"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-success"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "PERMANENTE"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-info"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "POR VENCER"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-warning"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "VENCIDO"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-danger"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "URGENTE"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-dark"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "APLAZADO"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-primary"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : uasignacion.estado ==
                                                                "EN TRAMITE"
                                                              ? _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-primary"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _c(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "light-dark"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        uasignacion.estado
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                            _vm._v(" "),
                                                            _c("br"),
                                                            _vm._v(" "),
                                                            uasignacion.retraso &&
                                                            uasignacion.retraso !=
                                                              "-"
                                                              ? _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-dark text-bold"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                            " +
                                                                        _vm._s(
                                                                          uasignacion.retraso
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                    uasignacion.tip ==
                                                                    "K"
                                                                      ? [
                                                                          _vm._v(
                                                                            "km."
                                                                          )
                                                                        ]
                                                                      : uasignacion.tip ==
                                                                        "F"
                                                                      ? [
                                                                          _vm._v(
                                                                            "días"
                                                                          )
                                                                        ]
                                                                      : void 0,
                                                                    uasignacion.retraso >=
                                                                    0
                                                                      ? [
                                                                          _vm._v(
                                                                            " val."
                                                                          )
                                                                        ]
                                                                      : [
                                                                          _vm._v(
                                                                            " atra."
                                                                          )
                                                                        ]
                                                                  ],
                                                                  2
                                                                )
                                                              : _c("span", {
                                                                  staticClass:
                                                                    "text-dark text-bold"
                                                                }),
                                                            _vm._v(" "),
                                                            _c("br"),
                                                            _vm._v(" "),
                                                            uasignacion.valor !=
                                                            null
                                                              ? _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-muted"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Ven: " +
                                                                        _vm._s(
                                                                          uasignacion.valor
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              })
                                            ],
                                            2
                                          )
                                        }),
                                        0
                                      )
                                    ]
                                  )
                                ])
                              ])
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
            id: "modal-renovar",
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
                              _vm.showModalRenovar = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.Entregar()
                            }
                          }
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
                            _vm._v("Generar Acta de Entrega")
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
            value: _vm.showModalRenovar,
            callback: function($$v) {
              _vm.showModalRenovar = $$v
            },
            expression: "showModalRenovar"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Condición" } },
                    [
                      _vm.situacion.condicion == "ENTREGADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "success", size: "sm" } },
                            [_vm._v("ENTREGAR")]
                          )
                        : _vm.situacion.condicion == "PLANIFICADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "info", size: "sm" } },
                            [_vm._v("PLANIFICAR")]
                          )
                        : _vm.situacion.condicion == "TRAMITADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "sm" } },
                            [_vm._v("TRAMITAR")]
                          )
                        : _vm.situacion.condicion == "APLAZADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "warning", size: "sm" } },
                            [_vm._v("APLAZAR")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.area,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "area", $$v)
                          },
                          expression: "situacion.area"
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
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Implemento")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Servicio/Material")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Stock")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Tiempo de Vida")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Vencimiento")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.material))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.cantidad))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.stock))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(useleccionado.renovacion) +
                            "\n                    "
                        ),
                        useleccionado.validacion == "KILOMETRAJE"
                          ? [_vm._v(" km.")]
                          : useleccionado.validacion == "FECHA"
                          ? [_vm._v(" meses")]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        useleccionado.validacion == "KILOMETRAJE"
                          ? _c("cleave", {
                              staticClass: "form-control",
                              attrs: {
                                raw: false,
                                options: {
                                  numeral: true,
                                  numeralThousandsGroupStyle: "none"
                                }
                              },
                              model: {
                                value: useleccionado.vencimiento,
                                callback: function($$v) {
                                  _vm.$set(useleccionado, "vencimiento", $$v)
                                },
                                expression: "useleccionado.vencimiento"
                              }
                            })
                          : useleccionado.validacion == "FECHA"
                          ? _c("cleave", {
                              staticClass: "form-control",
                              attrs: {
                                raw: false,
                                placeholder: "yyyy-mm-dd",
                                options: {
                                  date: true,
                                  delimiter: "-",
                                  datePattern: ["Y", "m", "d"]
                                }
                              },
                              model: {
                                value: useleccionado.fvencimiento,
                                callback: function($$v) {
                                  _vm.$set(useleccionado, "fvencimiento", $$v)
                                },
                                expression: "useleccionado.fvencimiento"
                              }
                            })
                          : _c("cleave", {
                              staticClass: "form-control",
                              attrs: {
                                raw: false,
                                placeholder: "yyyy-mm-dd",
                                options: {
                                  date: true,
                                  delimiter: "-",
                                  datePattern: ["Y", "m", "d"]
                                }
                              },
                              model: {
                                value: useleccionado.fvencimiento,
                                callback: function($$v) {
                                  _vm.$set(useleccionado, "fvencimiento", $$v)
                                },
                                expression: "useleccionado.fvencimiento"
                              }
                            })
                      ],
                      1
                    )
                  ])
                })
              ],
              2
            )
          ]),
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
            id: "modal-planificar",
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
                              _vm.showModalPlanificar = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.Planificar()
                            }
                          }
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
                            _vm._v("Generar Mantenimiento")
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
            value: _vm.showModalPlanificar,
            callback: function($$v) {
              _vm.showModalPlanificar = $$v
            },
            expression: "showModalPlanificar"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Condición" } },
                    [
                      _vm.situacion.condicion == "ENTREGADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "success", size: "sm" } },
                            [_vm._v("ENTREGAR")]
                          )
                        : _vm.situacion.condicion == "PLANIFICADO" ||
                          _vm.situacion.condicion == "CAMPANA"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "info", size: "sm" } },
                            [_vm._v("PLANIFICAR")]
                          )
                        : _vm.situacion.condicion == "TRAMITADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "sm" } },
                            [_vm._v("TRAMITAR")]
                          )
                        : _vm.situacion.condicion == "APLAZADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "warning", size: "sm" } },
                            [_vm._v("APLAZAR")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.area,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "area", $$v)
                          },
                          expression: "situacion.area"
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
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Tipo de Mantenimiento" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.mantenimientoOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "mantenimientoOrd", $$v)
                          },
                          expression: "situacion.mantenimientoOrd"
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
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha Planeación" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.situacion.fingreso,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "fingreso", $$v)
                          },
                          expression: "situacion.fingreso"
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
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Mantenimiento")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Servicio")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Insumos")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.material))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.insumos))])
                  ])
                })
              ],
              2
            )
          ]),
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
            id: "modal-campaña",
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
                              _vm.showModalCampana = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.PlanificarCampana()
                            }
                          }
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
                            _vm._v("Generar Campaña")
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
            value: _vm.showModalCampana,
            callback: function($$v) {
              _vm.showModalCampana = $$v
            },
            expression: "showModalCampana"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Condición" } },
                    [
                      _vm.situacion.condicion == "ENTREGADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "success", size: "sm" } },
                            [_vm._v("ENTREGAR")]
                          )
                        : _vm.situacion.condicion == "CAMPANA"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "info", size: "sm" } },
                            [_vm._v("PLANIFICAR")]
                          )
                        : _vm.situacion.condicion == "TRAMITADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "sm" } },
                            [_vm._v("TRAMITAR")]
                          )
                        : _vm.situacion.condicion == "APLAZADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "warning", size: "sm" } },
                            [_vm._v("APLAZAR")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.area,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "area", $$v)
                          },
                          expression: "situacion.area"
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
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Tipo de Mantenimiento" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.mantenimientoOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "mantenimientoOrd", $$v)
                          },
                          expression: "situacion.mantenimientoOrd"
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
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha Planeación" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.situacion.fingreso,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "fingreso", $$v)
                          },
                          expression: "situacion.fingreso"
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
              _c("b-col", { attrs: { md: "12", xl: "12" } }, [
                _c(
                  "table",
                  { staticClass: "table table-condensed table-bordered" },
                  [
                    _c("tr", [
                      _c("th", { staticStyle: { width: "50px" } }, [
                        _vm._v("Nro")
                      ]),
                      _c("th", { staticStyle: { "min-width": "300px" } }, [
                        _vm._v("Componente")
                      ]),
                      _c("th", { staticStyle: { width: "450px" } }, [
                        _vm._v("Tipo de Campaña")
                      ]),
                      _c("th", { staticStyle: { width: "50px" } }, [
                        _vm._v("Acciones")
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
                            attrs: { label: "com", options: _vm.componentes },
                            model: {
                              value: _vm.ycomponente,
                              callback: function($$v) {
                                _vm.ycomponente = $$v
                              },
                              expression: "ycomponente"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td"),
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
                                  return _vm.AgregarTrabajos()
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
                    _vm._l(_vm.arr_trabajos, function(ufalla, indice) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(indice + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ufalla.componentes))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ufalla.falla))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-icon rounded-circle",
                                attrs: { variant: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.EliminarTrabajo(indice)
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
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Mantenimiento")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Servicio")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Insumos")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.material))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.insumos))])
                  ])
                })
              ],
              2
            )
          ]),
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
            id: "modal-tramitar",
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
                              _vm.showModalTramitar = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.Tramitar()
                            }
                          }
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
                            _vm._v("Generar Orden de Servicio")
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
            value: _vm.showModalTramitar,
            callback: function($$v) {
              _vm.showModalTramitar = $$v
            },
            expression: "showModalTramitar"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Condición" } },
                    [
                      _vm.situacion.condicion == "ENTREGADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "success", size: "sm" } },
                            [_vm._v("ENTREGAR")]
                          )
                        : _vm.situacion.condicion == "PLANIFICADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "info", size: "sm" } },
                            [_vm._v("PLANIFICAR")]
                          )
                        : _vm.situacion.condicion == "TRAMITADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "sm" } },
                            [_vm._v("TRAMITAR")]
                          )
                        : _vm.situacion.condicion == "APLAZADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "warning", size: "sm" } },
                            [_vm._v("APLAZAR")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Tipo" } },
                    [
                      _vm.situacion.tipoOrd == "SERVICIO"
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "info", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.situacion.tipoOrd = "COMPRA"
                                }
                              }
                            },
                            [_vm._v("SERVICIO")]
                          )
                        : _vm.situacion.tipoOrd == "COMPRA"
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "primary", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.situacion.tipoOrd = "SERVICIO"
                                }
                              }
                            },
                            [_vm._v("COMPRA")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.area,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "area", $$v)
                          },
                          expression: "situacion.area"
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
                { attrs: { md: "8", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha de Revisión" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.situacion.faplazamiento,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "faplazamiento", $$v)
                          },
                          expression: "situacion.faplazamiento"
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
                    { attrs: { label: "Proveedor" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: { label: "nombreExt", options: _vm.externos },
                        on: {
                          input: function($event) {
                            _vm.situacion.Externo_idExterno =
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
                { attrs: { md: "4", xl: "2" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Moneda" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: { label: "valorDat", options: _vm.monedas },
                        on: {
                          input: function($event) {
                            _vm.situacion.Moneda_idDato = _vm.ymoneda.idDato
                          }
                        },
                        model: {
                          value: _vm.ymoneda,
                          callback: function($$v) {
                            _vm.ymoneda = $$v
                          },
                          expression: "ymoneda"
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
                { attrs: { md: "8", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha de Emisión" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.situacion.femisionOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "femisionOrd", $$v)
                          },
                          expression: "situacion.femisionOrd"
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
                { attrs: { md: "6", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Forma de Pago" } },
                    [
                      _vm.situacion.pagoOrd == "CREDITO"
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "primary", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.situacion.pagoOrd = "CONTADO"
                                }
                              }
                            },
                            [_vm._v("CREDITO")]
                          )
                        : _vm.situacion.pagoOrd == "CONTADO"
                        ? _c(
                            "b-button",
                            {
                              attrs: { variant: "info", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.situacion.pagoOrd = "CREDITO"
                                }
                              }
                            },
                            [_vm._v("CONTADO")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.situacion.pagoOrd == "CREDITO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Fecha de Pago" } },
                        [
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              raw: false,
                              placeholder: "yyyy-mm-dd",
                              options: {
                                date: true,
                                delimiter: "-",
                                datePattern: ["Y", "m", "d"]
                              }
                            },
                            model: {
                              value: _vm.situacion.fpagoOrd,
                              callback: function($$v) {
                                _vm.$set(_vm.situacion, "fpagoOrd", $$v)
                              },
                              expression: "situacion.fpagoOrd"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.situacion.pagoOrd == "CREDITO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Adelanto" } },
                        [
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              raw: false,
                              options: {
                                numeral: true,
                                numeralThousandsGroupStyle: "none",
                                numeralDecimalScale: 4
                              }
                            },
                            model: {
                              value: _vm.situacion.adelantoOrd,
                              callback: function($$v) {
                                _vm.$set(_vm.situacion, "adelantoOrd", $$v)
                              },
                              expression: "situacion.adelantoOrd"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Implemento")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Material")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Unidad")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Precio")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Total")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.material))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.unidad))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.cantidad))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("b-form-input", {
                          model: {
                            value: useleccionado.precio,
                            callback: function($$v) {
                              _vm.$set(useleccionado, "precio", $$v)
                            },
                            expression: "useleccionado.precio"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.total))])
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Subtotal" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          options: {
                            numeral: true,
                            numeralThousandsGroupStyle: "none",
                            numeralDecimalScale: 4
                          },
                          disabled: ""
                        },
                        model: {
                          value: _vm.situacion.subtotalOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "subtotalOrd", $$v)
                          },
                          expression: "situacion.subtotalOrd"
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
                { attrs: { md: "6", xl: "2" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "% IGV" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          options: {
                            numeral: true,
                            numeralThousandsGroupStyle: "none",
                            numeralDecimalScale: 4
                          }
                        },
                        model: {
                          value: _vm.situacion.impuestoOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "impuestoOrd", $$v)
                          },
                          expression: "situacion.impuestoOrd"
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
                { attrs: { md: "6", xl: "2" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "IGV" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          options: {
                            numeral: true,
                            numeralThousandsGroupStyle: "none",
                            numeralDecimalScale: 4
                          },
                          disabled: ""
                        },
                        model: {
                          value: _vm.situacion.igvOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "igvOrd", $$v)
                          },
                          expression: "situacion.igvOrd"
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
                    { attrs: { label: "Total" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          options: {
                            numeral: true,
                            numeralThousandsGroupStyle: "none",
                            numeralDecimalScale: 4
                          },
                          disabled: ""
                        },
                        model: {
                          value: _vm.situacion.totalOrd,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "totalOrd", $$v)
                          },
                          expression: "situacion.totalOrd"
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
                { attrs: { md: "6", xl: "2" } },
                [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary" },
                      on: { click: _vm.CalcularTotal }
                    },
                    [
                      _c("span", { staticClass: "align-middle" }, [
                        _vm._v("Calcular")
                      ])
                    ]
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
            id: "modal-aplazar",
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
                              _vm.showModalAplazar = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.Aplazar()
                            }
                          }
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
                            _vm._v("Aplazar")
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
            value: _vm.showModalAplazar,
            callback: function($$v) {
              _vm.showModalAplazar = $$v
            },
            expression: "showModalAplazar"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Condición" } },
                    [
                      _vm.situacion.condicion == "ENTREGADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "success", size: "sm" } },
                            [_vm._v("ENTREGAR")]
                          )
                        : _vm.situacion.condicion == "PLANIFICADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "info", size: "sm" } },
                            [_vm._v("PLANIFICAR")]
                          )
                        : _vm.situacion.condicion == "TRAMITADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "primary", size: "sm" } },
                            [_vm._v("TRAMITAR")]
                          )
                        : _vm.situacion.condicion == "APLAZADO"
                        ? _c(
                            "b-button",
                            { attrs: { variant: "warning", size: "sm" } },
                            [_vm._v("APLAZAR")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Area" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.situacion.area,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "area", $$v)
                          },
                          expression: "situacion.area"
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
                { attrs: { md: "4", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha de Aplazamiento" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.situacion.faplazamiento,
                          callback: function($$v) {
                            _vm.$set(_vm.situacion, "faplazamiento", $$v)
                          },
                          expression: "situacion.faplazamiento"
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
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Aplazado")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.observacion))])
                  ])
                })
              ],
              2
            )
          ]),
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
                      _vm.accion == 1
                        ? _c(
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
                        : _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "success",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: { click: _vm.Reemplazar }
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
                                _vm._v("Renovar")
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
                { attrs: { md: "6", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "ID" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.asignacion.idAsignacion,
                          callback: function($$v) {
                            _vm.$set(_vm.asignacion, "idAsignacion", $$v)
                          },
                          expression: "asignacion.idAsignacion"
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
                    { attrs: { label: "Asignado a" } },
                    [
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.asignacion.entidad,
                          callback: function($$v) {
                            _vm.$set(_vm.asignacion, "entidad", $$v)
                          },
                          expression: "asignacion.entidad"
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
                    [
                      _c("label", [_vm._v(_vm._s(_vm.vista_implemento))]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        attrs: { readonly: "" },
                        model: {
                          value: _vm.asignacion.implemento,
                          callback: function($$v) {
                            _vm.$set(_vm.asignacion, "implemento", $$v)
                          },
                          expression: "asignacion.implemento"
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
              _vm.vista_implemento == "GENERICO" ||
              _vm.vista_implemento == "DOCUMENTO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Codigo" } },
                        [
                          _c("b-form-input", {
                            staticClass: "form-control",
                            model: {
                              value: _vm.asignacion.nroAsi,
                              callback: function($$v) {
                                _vm.$set(_vm.asignacion, "nroAsi", $$v)
                              },
                              expression: "asignacion.nroAsi"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Vencimiento" } },
                    [
                      _vm.asignacion.validar == "FECHA"
                        ? _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              raw: false,
                              placeholder: "yyyy-mm-dd",
                              options: {
                                date: true,
                                delimiter: "-",
                                datePattern: ["Y", "m", "d"]
                              }
                            },
                            model: {
                              value: _vm.asignacion.fvencimientoAsi,
                              callback: function($$v) {
                                _vm.$set(_vm.asignacion, "fvencimientoAsi", $$v)
                              },
                              expression: "asignacion.fvencimientoAsi"
                            }
                          })
                        : _vm.asignacion.validar == "KILOMETRAJE"
                        ? _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              raw: false,
                              options: {
                                numeral: true,
                                numeralThousandsGroupStyle: "none",
                                numeralDecimalScale: 4
                              }
                            },
                            model: {
                              value: _vm.asignacion.vencimientoAsi,
                              callback: function($$v) {
                                _vm.$set(_vm.asignacion, "vencimientoAsi", $$v)
                              },
                              expression: "asignacion.vencimientoAsi"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.vista_implemento == "GENERICO" ||
              _vm.vista_implemento == "EPP"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Medida" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: { label: "valorDat", options: _vm.medidas },
                            on: {
                              input: function($event) {
                                _vm.asignacion.Medida_idDato = _vm.medida.idDato
                              }
                            },
                            model: {
                              value: _vm.medida,
                              callback: function($$v) {
                                _vm.medida = $$v
                              },
                              expression: "medida"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Costo" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          options: {
                            numeral: true,
                            numeralThousandsGroupStyle: "none",
                            numeralDecimalScale: 4
                          }
                        },
                        model: {
                          value: _vm.asignacion.montoAsi,
                          callback: function($$v) {
                            _vm.$set(_vm.asignacion, "montoAsi", $$v)
                          },
                          expression: "asignacion.montoAsi"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.vista_implemento == "GENERICO" ||
              _vm.vista_implemento == "DOCUMENTO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "6" } },
                    [
                      _c("b-form-group", { attrs: { label: "Archivo" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-center align-items-center"
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "/LiberAPP/Archivo/Pdf/" +
                                    _vm.asignacion.idAsignacion,
                                  target: "_blank"
                                }
                              },
                              [
                                _vm.asignacion.escaneoAsi == 1
                                  ? _c(
                                      "b-avatar",
                                      {
                                        staticClass: "mr-50",
                                        attrs: {
                                          rounded: "",
                                          variant: "light-primary",
                                          size: "40"
                                        }
                                      },
                                      [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "FileIcon",
                                            size: "18"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "user-page-info" },
                              [
                                _c("b-form-file", {
                                  attrs: {
                                    accept: ".pdf",
                                    type: "file",
                                    state: Boolean(_vm.archivo),
                                    placeholder: "Seleccione un archivo...",
                                    "drop-placeholder":
                                      "Arrastre un archivo aquí..."
                                  },
                                  on: { change: _vm.select_file },
                                  model: {
                                    value: _vm.archivo,
                                    callback: function($$v) {
                                      _vm.archivo = $$v
                                    },
                                    expression: "archivo"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Estado" } },
                    [
                      _vm.asignacion.estadoAsi == "VIGENTE"
                        ? _c(
                            "b-button",
                            {
                              staticStyle: { "margin-top": "2px" },
                              attrs: { variant: "success", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.asignacion.estadoAsi = "ANULADO"
                                }
                              }
                            },
                            [_vm._v("Vigente")]
                          )
                        : _vm.asignacion.estadoAsi == "ANULADO"
                        ? _c(
                            "b-button",
                            {
                              staticStyle: { "margin-top": "2px" },
                              attrs: { variant: "danger", size: "sm" },
                              on: {
                                click: function($event) {
                                  _vm.asignacion.estadoAsi = "VIGENTE"
                                }
                              }
                            },
                            [_vm._v("Anulado")]
                          )
                        : _vm._e()
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
            id: "modal-pdf",
            "header-bg-variant": _vm.headerBgVariantPdf,
            "header-text-variant": _vm.headerTextVariantPdf,
            title: _vm.headerTitleVariantPdf,
            "footer-bg-variant": _vm.footerBgVariantPdf,
            "footer-text-variant": _vm.footerTextVariantPdf,
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
                              _vm.showModalPdf = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: { click: _vm.GenerarPdf }
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
                            _vm._v("Generar PDF")
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
            value: _vm.showModalPdf,
            callback: function($$v) {
              _vm.showModalPdf = $$v
            },
            expression: "showModalPdf"
          }
        },
        [
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Implemento")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))])
                  ])
                })
              ],
              2
            )
          ]),
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
            id: "modal-masivo",
            "header-bg-variant": _vm.headerBgVariantMasivo,
            "header-text-variant": _vm.headerTextVariantMasivo,
            title: _vm.headerTitleVariantMasivo,
            "footer-bg-variant": _vm.footerBgVariantMasivo,
            "footer-text-variant": _vm.footerTextVariantMasivo,
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
                              _vm.showModalMasivo = false
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
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            size: "sm",
                            disabled: _vm.showLoading
                          },
                          on: { click: _vm.CargaMasiva }
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
                            _vm._v("Subir Masivamente")
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
            value: _vm.showModalMasivo,
            callback: function($$v) {
              _vm.showModalMasivo = $$v
            },
            expression: "showModalMasivo"
          }
        },
        [
          _c(
            "b-row",
            [
              _vm.vista_implemento == "GENERICO" ||
              _vm.vista_implemento == "DOCUMENTO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Codigo" } },
                        [
                          _c("b-form-input", {
                            staticClass: "form-control",
                            model: {
                              value: _vm.masivo.nroAsi,
                              callback: function($$v) {
                                _vm.$set(_vm.masivo, "nroAsi", $$v)
                              },
                              expression: "masivo.nroAsi"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Vencimiento" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          raw: false,
                          placeholder: "yyyy-mm-dd",
                          options: {
                            date: true,
                            delimiter: "-",
                            datePattern: ["Y", "m", "d"]
                          }
                        },
                        model: {
                          value: _vm.masivo.fvencimientoAsi,
                          callback: function($$v) {
                            _vm.$set(_vm.masivo, "fvencimientoAsi", $$v)
                          },
                          expression: "masivo.fvencimientoAsi"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.vista_implemento == "GENERICO" ||
              _vm.vista_implemento == "DOCUMENTO"
                ? _c(
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Archivo" } },
                        [
                          _c("b-form-file", {
                            attrs: {
                              accept: ".pdf",
                              type: "file",
                              state: Boolean(_vm.archivo),
                              placeholder: "Seleccione un archivo...",
                              "drop-placeholder": "Arrastre un archivo aquí..."
                            },
                            on: { change: _vm.select_file },
                            model: {
                              value: _vm.archivo,
                              callback: function($$v) {
                                _vm.archivo = $$v
                              },
                              expression: "archivo"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("b-row", [
            _c(
              "table",
              {
                staticClass: "table table-condensed table-bordered table-hover"
              },
              [
                _c("tr", [
                  _c("th", [_vm._v("Nro.")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Asignado a")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Implemento")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.seleccionados, function(useleccionado, indice) {
                  return _c("tr", { key: indice }, [
                    _c("td", [_vm._v(_vm._s(indice + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.nombreEnt))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(useleccionado.implemento))])
                  ])
                })
              ],
              2
            )
          ]),
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

/***/ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Transaccion/Asignacion.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true& */ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true&");
/* harmony import */ var _Asignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asignacion.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asignacion.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& */ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Asignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d642a1d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestion/Transaccion/Asignacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=style&index=1&id=d642a1d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_style_index_1_id_d642a1d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestion/Transaccion/Asignacion.vue?vue&type=template&id=d642a1d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Asignacion_vue_vue_type_template_id_d642a1d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);