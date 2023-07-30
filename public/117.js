(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapse.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapse.vue");
/* harmony import */ var _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/components/app-collapse/AppCollapseItem.vue */ "./resources/js/src/@core/components/app-collapse/AppCollapseItem.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_22__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_9__["default"],
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_18__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BPagination"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BDropdownItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_16___default.a
  }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormCheckbox", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BCardBody", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCardBody"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BInputGroup", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroup"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BInputGroupPrepend", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupPrepend"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BTabs", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTabs"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BTab", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTab"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormSpinbutton", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormSpinbutton"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormDatepicker", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormDatepicker"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BFormTimepicker", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTimepicker"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppTimeline", _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_12__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppTimelineItem", _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_13__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "flatPickr", vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_20___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "Cleave", vue_cleave_component__WEBPACK_IMPORTED_MODULE_21___default.a), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "BPopover", bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BPopover"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppCollapse", _core_components_app_collapse_AppCollapse_vue__WEBPACK_IMPORTED_MODULE_14__["default"]), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_components, "AppCollapseItem", _core_components_app_collapse_AppCollapseItem_vue__WEBPACK_IMPORTED_MODULE_15__["default"]), _components),
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__["default"],
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBTooltip"]
  },
  data: function data() {
    return {
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      options: [{
        text: '- Choose 1 -',
        value: ''
      }, 'Red', 'Green', 'Blue'],
      input1Return: '',
      input2Return: '',
      popoverShow: false,

      /**************************** elementos de ux ****************************/
      dir: false,
      pageLength: 5,
      searchTerm: '',
      tabIndex: 1,

      /**************************** tabla ****************************/
      tcolumnas: [{
        label: '',
        field: 'acciones'
      }, {
        label: 'ID',
        field: 'idConvoy'
      }, {
        label: 'Código',
        field: 'codigoCon'
      }, {
        label: 'Cliente',
        field: 'nombreCli'
      }, {
        label: 'Carga',
        field: 'cargaCon'
      }, {
        label: 'Origen',
        field: 'origenCon'
      }, {
        label: 'Destino',
        field: 'destinoCon'
      }, {
        label: 'Convoy',
        field: 'convoy'
      }],

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
        'TERMINADO': 'secondary'
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
        Grupo_idDato: 0
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
        Grupo_idDato: 0
      },
      servicio: {},
      guia: {},
      monto: {
        servicio: [],
        concepto: '',
        total: '',
        detalle: '',
        disposicion: 'DEPOSITO',
        fecha: ''
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
          "ycpeaje": ""
        }
      },
      finalizar: false,
      adicional: false,
      reemplazo: {},
      yreemplazop: {},
      yreemplazov: {},
      yreemplazoa: {},
      yconceptos: {},
      filtroEstado: "TODO",
      filtroGrupo: "0"
    };
  },
  methods: {
    onClose: function onClose() {
      this.popoverShow = false;
    },
    onOk: function onOk() {
      if (!this.input1) {
        this.input1state = false;
      }

      if (!this.input2) {
        this.input2state = false;
      }

      if (this.input1 && this.input2) {
        this.onClose(); // Return our popover form results

        this.input1Return = this.input1;
        this.input2Return = this.input2;
      }
    },
    onShow: function onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = '';
      this.input2 = '';
      this.input1state = null;
      this.input2state = null;
      this.input1Return = '';
      this.input2Return = '';
    },
    onShown: function onShown(prm_servicio) {// Called just after the popover has been shown
      // Transfer focus to the first input
      //this.focusRef(this.$refs.input1)
    },
    onHidden: function onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button);
    },
    focusRef: function focusRef(ref) {
      var _this = this;

      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(function () {
        _this.$nextTick(function () {
          (ref.$el || ref).focus();
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
    Convoy: function Convoy() {
      var _this2 = this;

      this.convoys = [];
      this.showLoading = true;
      this.$http.get('/LiberAPP/Convoy').then(function (res) {
        _this2.convoys = res.data;
        _this2.showLoading = false;
      })["catch"](function (error) {
        _this2.Toast(true, 'danger', 'Convoy', 'Error al cargar los registros: ' + error);

        _this2.showLoading = false;
      });
    },
    Nuevo: function Nuevo() {
      this.headerTextVariant = 'success';
      this.boton = false;
      this.headerTitleVariant = "NUEVO CONVOY"; //Seteando los valores para el modal

      this.convoy = Object.assign({}, this.plantilla);
      this.zruta = {};
      this.zremitente = {};
      this.zdestinatario = {};
      this.zpartida = {};
      this.zllegada = {};
      this.servicios = [];
    },
    Anular: function Anular(prm_convoy) {
      var _this3 = this;

      this.convoy = prm_convoy;
      this.servicios = prm_convoy.servicios;
      this.$bvModal.msgBoxConfirm('¿Estás Seguro de Anular el Convoy?', {
        title: 'Anular Convoy',
        size: 'sm',
        okVariant: 'danger',
        okTitle: 'Si, Eliminar',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value == true) {
          _this3.AnularConvoy();
        }
      });
    },
    AnularM: function AnularM(prm_monto) {
      var _this4 = this;

      this.$bvModal.msgBoxConfirm('¿Estás Seguro de Anular el Gasto de Viaje?', {
        title: 'Anular Gasto',
        size: 'sm',
        okVariant: 'danger',
        okTitle: 'Si, Anular',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value == true) {
          _this4.AnularMonto(prm_monto);
        }
      });
    },
    AnularS: function AnularS(prm_servicio) {
      var _this5 = this;

      /*this.convoy = prm_convoy;
      this.servicios = prm_convoy.servicios;*/
      this.$bvModal.msgBoxConfirm('¿Estás Seguro de Anular el Servicio?', {
        title: 'Anular Servicio',
        size: 'sm',
        okVariant: 'danger',
        okTitle: 'Si, Anular',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value == true) {
          _this5.AnularServicio(prm_servicio);
        }
      });
    },
    AnularG: function AnularG() {
      /*this.convoy = prm_convoy;
      this.servicios = prm_convoy.servicios;*/
      this.$bvModal.msgBoxConfirm('¿Desea Anular la Guía?', {
        title: 'Anular Guia Nro 86',
        size: 'sm',
        okVariant: 'danger',
        okTitle: 'Si, Anular',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value == true) {//this.AnularServicio(prm_servicio);
        }
      });
    },
    Inicio: function Inicio(prm_convoy) {
      this.headerTextVariant = 'primary';
      this.headerTitleVariant = 'INICIAR RUTA';
      this.ynro = 0; //this.boton = true;

      this.convoy = prm_convoy;
      this.servicios = prm_convoy.servicios;
      var encontrado = this.rutas.filter(function (truta) {
        return truta.idRuta == this.convoy.Ruta_idRuta;
      }, this);
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

      for (var i = 0; i < recorridos.length; i++) {
        var encontrado2 = this.recorridos.filter(function (trecorrido) {
          return trecorrido.idDato == recorridos[i];
        }, this);
        var urecorrido = encontrado2[0]; //posiciones["r"+urecorrido.idDato] = this.ynro;//para saber en que posicion se pondra los peajes y gastos de viaje

        obj_recorridos[this.ynro] = {
          Recorrido_idDato: urecorrido.idDato,
          nroRec: this.ynro,
          nombreRec: urecorrido.valorDat,
          roundtripRec: roundtrip[i],
          npeajes: precorridos[i],
          peajes: [],
          ngastos: vrecorridos[i],
          gastos: []
          /*ejecutado: 0,
          cambio: 0,*/

        };
        this.ynro++;
      }

      var acumulador = 0;

      for (var i = 0; i < precorridos.length; i++) {
        var cantidad = parseInt(precorridos[i]);

        for (var j = 0; j < cantidad; j++) {
          var k = acumulador + j;
          var encontrado2 = this.tramos.filter(function (ttramo) {
            return ttramo.idTramo == peajes[k];
          }, this);
          var upeaje = encontrado2[0];
          var obj_peaje = {
            id: upeaje.idTramo,
            punto: upeaje.puntoTra,
            peaje: upeaje.peajeTra,
            cpeaje: upeaje.camionetaTra
            /*ejecutado: 0,
            cambio: 0,*/

          };
          obj_recorridos[i].peajes.push(obj_peaje);
        }

        acumulador += cantidad;
      }

      acumulador = 0;

      for (var i = 0; i < vrecorridos.length; i++) {
        var cantidad = parseInt(vrecorridos[i]);

        for (var j = 0; j < cantidad; j++) {
          var k = acumulador + j;
          var encontrado2 = this.yconceptos.filter(function (tviatico) {
            return tviatico.idDato == viaticos[k];
          }, this);
          var uviatico = encontrado2[0];
          var obj_viatico = {
            id: uviatico.idDato,
            gasto: uviatico.valorDat,
            detalle: detalles[k],
            total: totales[k],
            aplicable: aplicables[k]
            /*ejecutado: 0,
            cambio: 0,*/

          };
          obj_recorridos[i].gastos.push(obj_viatico);
        }

        acumulador += cantidad;
      }

      this.recorridos_actuales = obj_recorridos;

      for (var i = 0; i < this.recorridos_actuales.length; i++) {
        this.recorridos_actuales[i];
      }
    },
    Recorrido: function Recorrido(prm_convoy, prm_finalizar, prm_adicional) {
      var _this6 = this;

      this.finalizar = prm_finalizar;
      this.adicional = prm_adicional;
      this.headerTextVariant = 'primary';
      this.headerTitleVariant = 'Gestionar Gastos de Viaje';
      this.ynro = 0; //this.boton = true;

      this.convoy = prm_convoy; //this.servicios = prm_convoy.servicios;

      this.$http.get('/LiberAPP/Servicio/ListarConvoy/' + this.convoy.idConvoy).then(function (res) {
        _this6.servicios = res.data;
        /******************************************************************************************/

        var actual = false;
        var cambiar = true;
        var obj_recorridos = [];

        for (var i = 0; i < prm_convoy.recorridos.length; i++) {
          var _obj_recorridos$i;

          var obj_recorrido = prm_convoy.recorridos[i]; //Buscando el recorrido en la lista 

          var encontrado2 = _this6.recorridos.filter(function (trecorrido) {
            return trecorrido.idDato == obj_recorrido.Recorrido_idDato;
          }, _this6);

          var urecorrido = encontrado2[0]; //verificar que recorrido se mostrará

          if (cambiar && obj_recorrido.estadoRec == 'PROGRAMADO') actual = true;
          obj_recorridos[i] = (_obj_recorridos$i = {
            idRecorrido: obj_recorrido.idRecorrido,
            nroRec: _this6.ynro,
            finicioRec: obj_recorrido.finicioRec.replace(" 00:00:00", ""),
            fterminoRec: obj_recorrido.fterminoRec.replace(" 00:00:00", ""),
            nombreRec: urecorrido.valorDat,
            roundtripRec: obj_recorrido.roundtripRec,
            idealRec: obj_recorrido.idealRec
          }, Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "idealRec", obj_recorrido.idealRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "estadoRec", obj_recorrido.estadoRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "peajesRec", obj_recorrido.peajesRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "cpeajesRec", obj_recorrido.cpeajesRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "tramosRec", obj_recorrido.tramosRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "viaticosRec", obj_recorrido.viaticosRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "detallesRec", obj_recorrido.detallesRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "totalesRec", obj_recorrido.totalesRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "aplicablesRec", obj_recorrido.aplicablesRec), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "tpeaje", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "tcpeaje", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "togasto", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "tsgasto", 0), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "actual", actual), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "peajes", []), Object(_Applications_XAMPP_xamppfiles_htdocs_produccion_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_obj_recorridos$i, "gastos", []), _obj_recorridos$i);

          if (actual) {
            cambiar = false;
            actual = false;
          }

          _this6.ynro++;
          var arr_peajes = [];
          var arr_cpeajes = [];
          var arr_tramos = [];

          if (obj_recorrido.tramosRec != null && obj_recorrido.tramosRec != "") {
            arr_peajes = obj_recorrido.peajesRec.split('-');
            arr_cpeajes = obj_recorrido.cpeajesRec.split('-');
            arr_tramos = obj_recorrido.tramosRec.split('-');
          }

          var arr_viaticos = [];
          var arr_detalles = [];
          var arr_totales = [];
          var arr_aplicables = [];

          if (obj_recorrido.viaticosRec != null && obj_recorrido.viaticosRec != "") {
            arr_viaticos = obj_recorrido.viaticosRec.split('-');
            arr_detalles = obj_recorrido.detallesRec.split('-');
            arr_totales = obj_recorrido.totalesRec.split('-');
            arr_aplicables = obj_recorrido.aplicablesRec.split('-');
          }

          for (var j = 0; j < arr_tramos.length; j++) {
            var idTramo = arr_tramos[j];

            var encontrado3 = _this6.tramos.filter(function (ttramo) {
              return ttramo.idTramo == idTramo;
            }, _this6);

            var upeaje = encontrado3[0];
            var obj_peaje = {
              id: idTramo,
              punto: upeaje.puntoTra,
              peaje: arr_peajes[j],
              cpeaje: arr_cpeajes[j]
            };
            obj_recorridos[i].peajes.push(obj_peaje);
            obj_recorridos[i].tpeaje += parseFloat(arr_peajes[j]);
            obj_recorridos[i].tcpeaje += parseFloat(arr_cpeajes[j]);
          } //agregando los viaticos al recorrido


          for (var j = 0; j < arr_viaticos.length; j++) {
            var idViatico = arr_viaticos[j];

            var encontrado3 = _this6.yconceptos.filter(function (tviatico) {
              return tviatico.idDato == idViatico;
            }, _this6);

            var uviatico = encontrado3[0];
            var obj_gasto = {
              id: idViatico,
              gasto: uviatico.valorDat,
              detalle: arr_detalles[j],
              total: arr_totales[j],
              aplicable: arr_aplicables[j]
            };
            obj_recorridos[i].gastos.push(obj_gasto);
            if (arr_aplicables[j] == "OPERADOR") obj_recorridos[i].togasto += parseFloat(arr_totales[j]);else if (arr_aplicables[j] == "SUPERVISOR") obj_recorridos[i].tsgasto += parseFloat(arr_totales[j]);else {
              obj_recorridos[i].togasto += parseFloat(arr_totales[j]);
              obj_recorridos[i].tsgasto += parseFloat(arr_totales[j]);
            }
          } //agregando la alimentación para su visualización


          var total_alimentacion = obj_recorridos[i].roundtripRec * _this6.convoy.alimentacionRut;
          var obj_gasto = {
            //id: idViatico,
            gasto: "ALIMENTACIÓN",
            detalle: "ALIMENTACIÓN " + obj_recorridos[i].roundtripRec + " DÍAS",
            total: total_alimentacion,
            aplicable: "TODOS"
          };
          obj_recorridos[i].gastos.push(obj_gasto);
          obj_recorridos[i].togasto += parseFloat(total_alimentacion);
          obj_recorridos[i].tsgasto += parseFloat(total_alimentacion);
        }

        _this6.recorridos_actuales = obj_recorridos;
        /********************************************************************************************************/
      })["catch"](function (error) {
        _this6.Toast(true, 'danger', 'Servicios', 'Error al cargar los registros: ' + error);

        _this6.showLoading = false;
      });
      var montos = [];
      this.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/' + this.convoy.idConvoy).then(function (res) {
        _this6.montos = res.data;
      })["catch"](function (error) {
        _this6.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this6.showLoading = false;
      }); //var montos = [];

      this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/' + this.convoy.idConvoy).then(function (res) {
        _this6.alimentaciones = res.data; //this.montos = res.data;
      })["catch"](function (error) {
        _this6.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this6.showLoading = false;
      });
    },
    Omitir: function Omitir(prm_recorrido) {
      var _this7 = this;

      /*this.convoy = prm_convoy;
      this.servicios = prm_convoy.servicios;*/
      this.$bvModal.msgBoxConfirm('¿Estás Seguro de Omitir los Gastos de Viaje y Asistencia?', {
        title: 'Omitir Gastos',
        size: 'sm',
        okVariant: 'warning',
        okTitle: 'Si, Omitir',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value == true) {
          _this7.OmitirRecorrido(prm_recorrido);
        }
      });
    },
    OmitirRecorrido: function OmitirRecorrido(prm_recorrido) {
      var _this8 = this;

      this.showLoading = true;
      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicios = JSON.stringify(this.servicios);
      var jsonRecorridos = JSON.stringify(this.recorridos_actuales);
      var jsonRecorrido = JSON.stringify(this.prm_recorrido);
      this.$http.post('/LiberAPP/Convoy/Omitir', {
        convoy: jsonConvoy,
        servicios: jsonServicios,
        recorridos: jsonRecorridos,
        recorrido: jsonRecorrido
      }).then(function (res) {
        _this8.Toast(true, 'primary', 'Anular Viáticos y Asistencia', 'Procesado Correctamente');

        _this8.showLoading = false;

        _this8.Convoy();

        _this8.showModalRecorrido = false;
      })["catch"](function (error) {
        _this8.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this8.showLoading = false;
      });
    },
    Asignar: function Asignar(prm_asignacion) ////////////////////////////////////////REVISAR
    {
      switch (prm_asignacion) {
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
          if (isNaN(dias)) dias = 0;
          fllegada.setDate(fllegada.getDate() + dias);
          this.convoy.fterminoCon = fllegada;
          break;

        default:
          // statements_def
          break;
      }
    },
    AgregarServicio: function AgregarServicio() {
      if (this.yoperador == null || this.yoperador == {} || this.yoperador.idPersona == null) {
        this.Toast(true, 'danger', 'Agregar Servicio', 'Seleccione un Operador');
        return;
      }

      if (this.yvehiculo == null || this.yvehiculo == {} || this.yvehiculo.idVehiculo == null) {
        this.Toast(true, 'warning', 'Agregar Servicio', 'Seleccione un Vehiculo');
        return;
      }

      if (this.yescolta == false && (this.yacople == null || this.yacople == {} || this.yacople.idVehiculo == null)) {
        this.Toast(true, 'warning', 'Agregar Servicio', 'Seleccione un Acople');
        return;
      }

      if (this.yescolta == false && (this.ycarga == null || this.ycarga == "")) {
        this.Toast(true, 'warning', 'Agregar Servicio', 'Seleccione la Cantidad Cargada');
        return;
      }

      if (this.yvehiculo == this.yacople) {
        this.Toast(true, 'warning', 'Agregar Servicio', 'Vehiculo y Acople Similares');
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
        estadoSer: "PROGRAMADO"
      };
      var encontrado = this.servicios.filter(function (tservicio) {
        return (tservicio.Persona_idPersona == uservicio.Persona_idPersona || tservicio.Vehiculo_idVehiculo == uservicio.Vehiculo_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Vehiculo_idVehiculo == uservicio.Acople_idVehiculo || tservicio.Acople_idVehiculo == uservicio.Vehiculo_idVehiculo) && tservicio.estadoSer != 'ANULADO';
      }, this); //tambien verifica si el supervisor no de ingrese dos veces

      if (encontrado.length == 0) {
        if (this.yescolta) this.servicios.unshift(uservicio);else this.servicios.push(uservicio);
        this.yoperador = {};
        this.yvehiculo = {};
        this.yacople = {};
        this.yescolta = false;
        this.ycarga = "";
      } else {
        this.Toast(true, 'warning', 'Agregar Convoy', 'Los Parámetros Ingresados ya Existen');
      }
    },
    EliminarServicio: function EliminarServicio(prm_indice) {
      if (this.servicios[prm_indice].idServicio == 0) this.servicios.splice(prm_indice, 1);else this.servicios[prm_indice].estadoSer = "ANULADO";
    },
    Guardar: function Guardar() {
      var _this9 = this;

      this.showLoading = true;

      if (this.servicios.length == 0) {
        this.Toast(true, 'warning', 'Guardar Convoy', 'Debe Ingresar al Menos una Unidad para Guardar');
        this.showLoading = false;
        return;
      }

      if (this.zruta == null || this.zruta == {} || this.zruta.idRuta == null) {
        this.Toast(true, 'warning', 'Guardar Convoy', 'Debe Ingresar una Ruta');
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


      if (this.convoy.Partida_idDato == null || this.convoy.Partida_idDato == "") {
        this.Toast(true, 'warning', 'Guardar Convoy', 'Debe Ingresar un Punto de Partida');
        this.showLoading = false;
        return;
      }

      if (this.convoy.Llegada_idDato == null || this.convoy.Llegada_idDato == "") {
        this.Toast(true, 'warning', 'Guardar Convoy', 'Debe Ingresar un Punto de Llegada');
        this.showLoading = false;
        return;
      }

      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicios = JSON.stringify(this.servicios);
      this.$http.post('/LiberAPP/Convoy/Guardar', {
        convoy: jsonConvoy,
        servicios: jsonServicios
      }).then(function (res) {
        _this9.Toast(true, 'success', 'Agregar Convoy', 'Guardado Correctamente');

        _this9.showModalProgramar = false;
        _this9.showLoading = false; //respuesta

        _this9.Convoy();
      })["catch"](function (error) {
        _this9.Toast(true, 'danger', 'Agregar Convoy', 'Error al guardar el registro: ' + error);

        _this9.showLoading = false;
      });
    },
    Actualizar: function Actualizar() {
      var _this10 = this;

      this.showLoading = true;

      if (this.servicios.length == 0) {
        this.Toast(true, 'warning', 'Guardar Convoy', 'Debe Ingresar al Menos una Unidad para Guardar');
        this.showLoading = false;
        return;
      }

      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicios = JSON.stringify(this.servicios);
      this.$http.post('/LiberAPP/Convoy/AgregarServicio', {
        convoy: jsonConvoy,
        servicios: jsonServicios
      }).then(function (res) {
        if (res.data == 1) {
          _this10.Toast(true, 'success', 'Actualizar Convoy', 'Guardado Correctamente');

          _this10.showModalOS = false;
          _this10.showLoading = false; //respuesta

          _this10.Convoy();
        } else {
          _this10.Toast(true, 'danger', 'Actualizar Convoy', res.data);

          _this10.showLoading = false;
        }
      })["catch"](function (error) {
        _this10.Toast(true, 'danger', 'Actualizar Convoy', 'Error al guardar el registro: ' + error);

        _this10.showLoading = false;
      });
    },
    Iniciar: function Iniciar() {
      var _this11 = this;

      this.showLoading = true;

      if (this.convoy.fechai == null || this.convoy.fechai == "") {
        this.Toast(true, 'warning', 'Iniciar Recorrido', 'Ingrese la Fecha de Inicio');
        this.showLoading = false;
        return;
      }

      if (this.convoy.horai == null || this.convoy.horai == "") {
        this.Toast(true, 'warning', 'Iniciar Recorrido', 'Ingrese la Hora de Inicio');
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
      this.$http.post('/LiberAPP/Convoy/Iniciar', {
        convoy: jsonConvoy,
        servicios: jsonServicios,
        recorridos: jsonRecorridos
      }).then(function (res) {
        _this11.Toast(true, 'primary', 'Procesar Convoy', 'Procesado Correctamente');

        _this11.showModalRecorrido = false;
        _this11.showLoading = false;

        _this11.Convoy();
      })["catch"](function (error) {
        _this11.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this11.showLoading = false;
      });
    },
    AnularConvoy: function AnularConvoy() {
      var _this12 = this;

      this.showLoading = true;
      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicios = JSON.stringify(this.servicios);
      this.$http.post('/LiberAPP/Convoy/Anular', {
        convoy: jsonConvoy,
        servicios: jsonServicios
      }).then(function (res) {
        _this12.Toast(true, 'primary', 'Procesar Convoy', 'Anulado Correctamente');

        _this12.showLoading = false;

        _this12.Convoy();
      })["catch"](function (error) {
        _this12.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this12.showLoading = false;
      });
    },
    AnularServicio: function AnularServicio(prm_servicio) {
      var _this13 = this;

      this.showLoading = true;
      var jsonServicio = JSON.stringify(prm_servicio);
      this.$http.post('/LiberAPP/Servicio/Anular', {
        servicio: jsonServicio
      }).then(function (res) {
        _this13.Toast(true, 'primary', 'Procesar Servicio', 'Anulado Correctamente');

        _this13.showLoading = false;

        _this13.Convoy();
      })["catch"](function (error) {
        _this13.Toast(true, 'danger', 'Procesar Servicio', 'Error al procesar el registro: ' + error);

        _this13.showLoading = false;
      });
    },
    AnularMonto: function AnularMonto(prm_monto) {
      var _this14 = this;

      this.showLoading = true;
      var jsonMonto = JSON.stringify(prm_monto);
      this.$http.post('/LiberAPP/Monto/Anular', {
        monto: jsonMonto
      }).then(function (res) {
        var afectados = res.data;

        if (afectados > 0) {
          _this14.Toast(true, 'primary', 'Anular Gasto', 'Anulado Correctamente');

          _this14.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/' + _this14.convoy.idConvoy).then(function (res) {
            _this14.montos = res.data;
            _this14.showLoading = false;
          })["catch"](function (error) {
            _this14.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

            _this14.showLoading = false;
          });

          _this14.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/' + _this14.convoy.idConvoy).then(function (res) {
            _this14.alimentaciones = res.data;
          })["catch"](function (error) {
            _this14.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

            _this14.showLoading = false;
          });
        } else {
          _this14.Toast(true, 'danger', 'Anular Gasto', 'No se pudo Anular el Gasto');

          _this14.showLoading = false;
        }
      })["catch"](function (error) {
        _this14.Toast(true, 'danger', 'Procesar Servicio', 'Error al procesar el registro: ' + error);

        _this14.showLoading = false;
      });
    },
    Procesar: function Procesar() {
      var _this15 = this;

      this.showLoading = true;
      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicios = JSON.stringify(this.servicios);
      var jsonRecorridos = JSON.stringify(this.recorridos_actuales);
      this.$http.post('/LiberAPP/Convoy/Procesar', {
        convoy: jsonConvoy,
        servicios: jsonServicios,
        recorridos: jsonRecorridos,
        usuario: this.userData.id
      }).then(function (res) {
        _this15.Toast(true, 'primary', 'Procesar Convoy', 'Procesado Correctamente');

        _this15.showLoading = false;

        _this15.Convoy();

        _this15.showModalRecorrido = false;
      })["catch"](function (error) {
        _this15.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this15.showLoading = false;
      });
    },
    Terminar: function Terminar() {
      var _this16 = this;

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
      this.$http.post('/LiberAPP/Convoy/Terminar', {
        convoy: jsonConvoy,
        servicios: jsonServicios //recorridos: jsonRecorridos,

      }).then(function (res) {
        _this16.Toast(true, 'primary', 'Procesar Convoy', 'Procesado Correctamente');
        /*this.showModalCargar = false;
        this.showModalEntregar = false;
        this.showModalRetornar = false;
        this.showModalFinalizar = false;*/


        _this16.showModalRecorrido = false;
        _this16.showLoading = false;

        _this16.Convoy();
      })["catch"](function (error) {
        _this16.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this16.showLoading = false;
      });
    },
    Duplicar: function Duplicar() {
      var _this17 = this;

      this.showLoading = true;

      if (this.convoy.fechat == null || this.convoy.fechat == "") {
        this.Toast(true, 'warning', 'Iniciar Recorrido', 'Ingrese la Fecha de Termino');
        this.showLoading = false;
        return;
      }

      if (this.convoy.horat == null || this.convoy.horat == "") {
        this.Toast(true, 'warning', 'Iniciar Recorrido', 'Ingrese la Hora de Termino');
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
      this.$http.post('/LiberAPP/Convoy/Duplicar', {
        convoy: jsonConvoy,
        servicios: jsonServicios //recorridos: jsonRecorridos,

      }).then(function (res) {
        _this17.Toast(true, 'primary', 'Procesar Convoy', 'Duplicado Correctamente');
        /*this.showModalCargar = false;
        this.showModalEntregar = false;
        this.showModalRetornar = false;
        this.showModalFinalizar = false;*/


        _this17.showModalRecorrido = false;
        _this17.showLoading = false;

        _this17.Convoy();
      })["catch"](function (error) {
        _this17.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this17.showLoading = false;
      });
    },
    Evento: function Evento(prm_convoy, prm_servicio) {
      this.showModalGuiaEvento = true;
      this.convoy = prm_convoy;
      this.servicio = prm_servicio;
      return;
    },
    GenerarG: function GenerarG(prm_convoy, prm_servicio) {
      this.showModalGuia = true;
      this.convoy = prm_convoy;
      this.servicio = prm_servicio;
      this.guia = {
        "grrserie": "",
        "grrnro": "",
        "grttraslado": "",
        "grtobservacion": ""
      };
      return;
    },
    Aplazar: function Aplazar() {
      var _this18 = this;

      this.showLoading = true;
      var jsonConvoy = JSON.stringify(this.convoy);
      this.$http.post('/LiberAPP/Convoy/Aplazar', {
        convoy: jsonConvoy
      }).then(function (res) {
        _this18.Toast(true, 'primary', 'Procesar Convoy', 'Procesado Correctamente');

        _this18.convoy.fterminoCon = res.data;
        _this18.showLoading = false;
      })["catch"](function (error) {
        _this18.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this18.showLoading = false;
      });
      this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/' + this.convoy.idConvoy).then(function (res) {
        _this18.alimentaciones = res.data;
      })["catch"](function (error) {
        _this18.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this18.showLoading = false;
      });
    },
    Alimentaciones: function Alimentaciones(prm_nonto) {
      var _this19 = this;

      this.showLoading = true;
      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonAlimentaciones = JSON.stringify(this.alimentaciones);
      this.$http.post('/LiberAPP/Monto/GuardarControl/' + this.userData.id + '/ALIMENTACION', {
        convoy: jsonConvoy,
        alimentaciones: jsonAlimentaciones,
        monto: prm_nonto
      }).then(function (res) {
        _this19.Toast(true, 'primary', 'Procesar Convoy', 'Procesado Correctamente');

        _this19.convoy.fterminoCon = res.data;
        _this19.showLoading = false;
      })["catch"](function (error) {
        _this19.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this19.showLoading = false;
      });
      this.$http.get('/LiberAPP/Monto/ListarHistorialConvoy/' + this.convoy.idConvoy).then(function (res) {
        _this19.montos = res.data;
      })["catch"](function (error) {
        _this19.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this19.showLoading = false;
      });
      this.$http.get('/LiberAPP/Monto/ListarControlConvoy/ALIMENTACION/' + this.convoy.idConvoy).then(function (res) {
        _this19.alimentaciones = res.data;
      })["catch"](function (error) {
        _this19.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this19.showLoading = false;
      });
      this.extraAlimentacion = 0;
    },
    GestionarAlimentacionLibre: function GestionarAlimentacionLibre() {
      this.yoperadores = [];
      this.alimentaciones = [];
      this.headerTitleVariant = "GESTIONAR ALIMENTACIÓN";
    },
    AlimentacionLibres: function AlimentacionLibres() {
      var _this20 = this;

      var arr_ids = [];
      this.yoperadores.forEach(function (uoperador) {
        arr_ids.push(uoperador.idPersona);
      });
      var ids = arr_ids.join(",");
      this.showLoading = true;
      this.$http.get('/LiberAPP/Monto/ListarControlLibre/ALIMENTACION/' + ids).then(function (res) {
        _this20.alimentaciones = res.data;
        _this20.showLoading = false;
      })["catch"](function (error) {
        _this20.Toast(true, 'danger', 'Externo', 'Error al cargar los registros: ' + error);

        _this20.showLoading = false;
      });
      this.extraAlimentacion = 0;
    },
    AlimentacionesLibres: function AlimentacionesLibres(prm_monto) {
      var _this21 = this;

      this.showLoading = true;
      var jsonAlimentaciones = JSON.stringify(this.alimentaciones);
      this.$http.post('/LiberAPP/Monto/GuardarControlLibre/' + this.userData.id + '/ALIMENTACION EN BASE', {
        //convoy: jsonConvoy,
        alimentaciones: jsonAlimentaciones,
        monto: prm_monto
      }).then(function (res) {
        _this21.Toast(true, 'primary', 'Alimentación en Base', 'Guardado Correctamente'); //this.convoy.fterminoCon = res.data;


        _this21.AlimentacionLibres();

        _this21.showLoading = false;
      })["catch"](function (error) {
        _this21.Toast(true, 'danger', 'Alimentación en Base', 'Error al procesar el registro: ' + error);

        _this21.showLoading = false;
      });
    },
    Reemplazar: function Reemplazar(prm_servicio, prm_convoy) {
      this.convoy = prm_convoy;
      this.reemplazo = prm_servicio;
      this.showModalReemplazo = true;
      var encontrado = this.personas.filter(function (tpersona) {
        return tpersona.idPersona == prm_servicio.Persona_idPersona;
      }, this);

      if (encontrado.length > 0) {
        this.yreemplazop = encontrado[0];
        this.reemplazo.idReemplazop = this.yreemplazop.idPersona;
      } else this.yreemplazop = {};

      var encontrado = this.vehiculos.filter(function (tvehiculo) {
        return tvehiculo.idVehiculo == prm_servicio.Vehiculo_idVehiculo;
      }, this);

      if (encontrado.length > 0) {
        this.yreemplazov = encontrado[0];
        this.reemplazo.idReemplazov = this.yreemplazov.idVehiculo;
      } else this.yreemplazov = {};

      var encontrado = this.vehiculos.filter(function (tvehiculo) {
        return tvehiculo.idVehiculo == prm_servicio.Acople_idVehiculo;
      }, this);

      if (encontrado.length > 0) {
        this.yreemplazoa = encontrado[0];
        this.reemplazo.idReemplazoa = this.yreemplazoa.idVehiculo;
      } else this.yreemplazoa = {};
    },
    Reasignar: function Reasignar() {
      var _this22 = this;

      this.showLoading = true;

      if (this.reemplazo.idReemplazop == null || this.reemplazo.idReemplazop == "") {
        this.Toast(true, 'warning', 'Reasignar', 'Ingrese el Personal de Reemplazo');
        this.showLoading = false;
        return;
      }

      if (this.reemplazo.idReemplazov == null || this.reemplazo.idReemplazov == "") {
        this.Toast(true, 'warning', 'Reasignar', 'Ingrese el Vehiculo de Reemplazo');
        this.showLoading = false;
        return;
      }

      if (this.reemplazo.escoltaSer == '0') {
        if (this.reemplazo.idReemplazoa == null || this.reemplazo.idReemplazoa == "") {
          this.Toast(true, 'warning', 'Reasignar', 'Ingrese el Acople de Reemplazo');
          this.showLoading = false;
          return;
        }
      }

      if (this.reemplazo.fcambioSer == null || this.reemplazo.fcambioSer == "") {
        this.Toast(true, 'warning', 'Reasignar', 'Ingrese una Fecha Válida');
        this.showLoading = false;
        return;
      }

      if (this.reemplazo.hcambioSer == null || this.reemplazo.hcambioSer == "" || this.reemplazo.hcambioSer.length < 5) {
        this.Toast(true, 'warning', 'Reasignar', 'Ingrese una Hora Válida');
        this.showLoading = false;
        return;
      }

      var jsonServicio = JSON.stringify(this.reemplazo);
      this.$http.post('/LiberAPP/Servicio/Reemplazar', {
        servicio: jsonServicio,
        usuario: this.userData.id
      }).then(function (res) {
        if (res.data == 1) {
          _this22.Toast(true, 'primary', 'Reasignar', 'Procesado Correctamente');

          _this22.showLoading = false;

          _this22.Convoy();

          _this22.showModalReemplazo = false;
        } else {
          _this22.Toast(true, 'danger', 'Reasignar', res.data);

          _this22.showLoading = false;
        }
      })["catch"](function (error) {
        _this22.Toast(true, 'danger', 'Procesar Convoy', 'Error al procesar el registro: ' + error);

        _this22.showLoading = false;
      });
    },
    GuardarMonto: function GuardarMonto() {
      var _this23 = this;

      this.showLoading = true; //if(this.monto.servicio == null || this.monto.servicio == {} || this.monto.servicio.trabajadorPer == null)

      if (this.monto.servicio == null || this.monto.servicio == [] || this.monto.servicio.length == 0) {
        this.Toast(true, 'warning', 'Guardar Monto', 'Debe Ingresar el Trabajador');
        this.showLoading = false;
        return;
      }

      if (this.monto.concepto == null || this.monto.concepto == {} || this.monto.concepto.idDato == null) {
        this.Toast(true, 'warning', 'Guardar Monto', 'Debe Ingresar el Concepto');
        this.showLoading = false;
        return;
      }

      if (this.monto.evento == null || this.monto.evento == {} || this.monto.evento.idEvento == null) {
        this.Toast(true, 'warning', 'Guardar Monto', 'Debe Ingresar el Evento/Causa');
        this.showLoading = false;
        return;
      }

      if (this.monto.total == "" || this.monto.total <= 0) {
        this.Toast(true, 'warning', 'Guardar Monto', 'Debe Ingresar un Monto Valido');
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
      this.$http.post('/LiberAPP/Monto/GuardarAdicional/' + this.userData.id, {
        monto: jsonMonto
      }).then(function (res) {
        _this23.Toast(true, 'success', 'Agregar Convoy', 'Guardado Correctamente');

        _this23.showModalProgramar = false;
        _this23.showLoading = false; //respuesta
        //this.convoy.montos.push(res.data);

        _this23.montos[_this23.montos.length - 1] = _this23.montos[_this23.montos.length - 1].concat(res.data); //this.Convoy();

        _this23.monto = {
          servicio: [],
          concepto: '',
          evento: [],
          total: '',
          detalle: '',
          disposicion: 'DEPOSITO',
          fecha: ''
        };
      })["catch"](function (error) {
        _this23.Toast(true, 'danger', 'Agregar Convoy', 'Error al guardar el registro: ' + error);

        _this23.showLoading = false;
      });
    },
    GenerarGRT: function GenerarGRT() {
      var _this24 = this;

      this.showLoading = true;

      if (this.guia.grrserie == null || this.guia.grrserie == "") {
        this.Toast(true, 'warning', 'Guia Remisión', 'Ingrese la Serie de la Guía Remisión Remitente');
        this.showLoading = false;
        return;
      }

      if (this.guia.grrnro == null || this.guia.grrnro == "") {
        this.Toast(true, 'warning', 'Guia Remisión', 'Ingrese Nro de Guía Remisión Remitente');
        this.showLoading = false;
        return;
      }

      if (this.guia.pesoSer == null || this.guia.pesoSer == "") {
        this.Toast(true, 'warning', 'Guia Remisión', 'Ingrese el Peso de la Carga');
        this.showLoading = false;
        return;
      }

      if (this.servicio.cargaSer == null || this.servicio.cargaSer == "") {
        this.Toast(true, 'warning', 'Guia Remisión', 'Ingrese la Cantidad Cargada en la Unidad Establecida');
        this.showLoading = false;
        return;
      }

      var jsonConvoy = JSON.stringify(this.convoy);
      var jsonServicio = JSON.stringify(this.servicio);
      var jsonGuia = JSON.stringify(this.guia);
      this.$http.post('/LiberAPP/Guia/GenerarGRE', {
        convoy: jsonConvoy,
        servicio: jsonServicio,
        guia: jsonGuia
      }).then(function (res) {
        _this24.showLoading = false;
        if (res.data.status == "GENERADA") _this24.Toast(true, 'danger', 'Guia Remisión', 'Guia NO enviada a la SUNAT');else if (res.data.status == "ENVIADA") _this24.Toast(true, 'warning', 'Guia Remisión', 'Esperando Confirmación SUNAT');else if (res.data.status == "DESAPROBADA") _this24.Toast(true, 'danger', 'Guia Remisión', 'Guia NO aprobada por SUNAT');else if (res.data.status == "EMITIDA") _this24.Toast(true, 'success', 'Guia Remisión', 'Guia emitida correctamente');
        window.open(res.data.enlace, "_blank");

        _this24.Convoy();

        _this24.showModalGuia = false;
      })["catch"](function (error) {
        _this24.Toast(true, 'danger', 'Guia Remisión', 'Error al procesar el registro: ' + error);

        _this24.showLoading = false;
      });
    },
    Prueba: function Prueba() {
      var _this25 = this;

      this.showLoading = true;
      var jsonMonto = "";
      this.$http.post('/LiberAPP/Guia/Prueba/', {
        monto: jsonMonto
      }).then(function (res) {
        _this25.showLoading = false; //respuesta

        console.log(res.data);
      })["catch"](function (error) {
        _this25.Toast(true, 'danger', 'Agregar Convoy', 'Error al guardar el registro: ' + error);

        _this25.showLoading = false;
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
      if (_store_index__WEBPACK_IMPORTED_MODULE_19__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this26 = this;

    this.$http.get('/LiberAPP/Convoy').then(function (res) {
      _this26.convoys = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Convoy', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Vehiculo/Select').then(function (res) {
      _this26.vehiculos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Vehiculo', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Persona/Select').then(function (res) {
      _this26.personas = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Persona', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
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

    this.$http.get('/LiberAPP/Tramo/SelectViatico').then(function (res) {
      _this26.tramos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Tramo', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Ruta/Select').then(function (res) {
      _this26.rutas = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Ruta', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Evento/Select').then(function (res) {
      _this26.eventos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Evento', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/RECORRIDO/TRANSPORTE').then(function (res) {
      _this26.recorridos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Carga', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/VIATICO/PERSONAL').then(function (res) {
      _this26.yconceptos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Concepto', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    this.$http.get('/LiberAPP/Dato/Select/GRUPO/TRANSPORTE').then(function (res) {
      _this26.grupos = res.data;
    })["catch"](function (error) {
      _this26.Toast(true, 'danger', 'Cuentas', 'Error al cargar los registros: ' + error);

      _this26.showLoading = false;
    });
    /*this.$http.get('/LiberAPP/Dato/Select/CUENTA/TRANSPORTE')
        .then(res => {
            this.cuentas = res.data;
        })
        .catch(error => {
            this.Toast(true,'danger','Cuentas','Error al cargar los registros: '+error);
            this.showLoading = false;
        });*/
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".ecommerce-application .app-ecommerce-details .product-img {\n  width: 600px;\n}\n.ecommerce-application .app-ecommerce-details .ratings-list-item svg,\n.ecommerce-application .app-ecommerce-details .ratings-list-item i {\n  font-size: 1.286rem;\n  height: 1.286rem;\n  width: 1.286rem;\n}\n.ecommerce-application .app-ecommerce-details .filled-star {\n  fill: #ff9f43;\n  stroke: #ff9f43;\n  color: #ff9f43;\n}\n.ecommerce-application .app-ecommerce-details .unfilled-star {\n  stroke: #babfc7;\n  color: #babfc7;\n}\n.ecommerce-application .app-ecommerce-details .item-price {\n  color: #7367f0;\n}\n.ecommerce-application .app-ecommerce-details .item-company {\n  display: inline-flex;\n  font-weight: 400;\n  font-size: 0.875rem;\n}\n.ecommerce-application .app-ecommerce-details .item-company .company-name {\n  font-weight: 600;\n}\n[dir=ltr] .ecommerce-application .app-ecommerce-details .item-company .company-name {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .ecommerce-application .app-ecommerce-details .item-company .company-name {\n  margin-right: 0.25rem;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-features {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li {\n  display: flex;\n  align-items: center;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-features li {\n  margin-bottom: 1rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li svg,\n.ecommerce-application .app-ecommerce-details .product-features li i {\n  height: 1.4rem;\n  width: 1.4rem;\n  font-size: 1.4rem;\n}\n[dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li svg, [dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li i {\n  margin-right: 0.75rem;\n}\n[dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li svg, [dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li i {\n  margin-left: 0.75rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li span {\n  font-weight: 600;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-color-options {\n  margin-top: 1.5rem;\n  margin-bottom: 1.2rem;\n}\n.ecommerce-application .app-ecommerce-details .btn-wishlist .text-danger {\n  color: #ea5455;\n  fill: #ea5455;\n}\n.ecommerce-application .app-ecommerce-details .btn-share .btn-icon ~ .dropdown-menu {\n  min-width: 3rem;\n}\n[dir] .ecommerce-application .app-ecommerce-details .item-features {\n  background-color: #f8f8f8;\n  padding-top: 5.357rem;\n  padding-bottom: 5.357rem;\n}\n.ecommerce-application .app-ecommerce-details .item-features i,\n.ecommerce-application .app-ecommerce-details .item-features svg {\n  font-size: 2.5rem;\n  height: 2.5rem;\n  width: 2.5rem;\n  color: #7367f0;\n}\n[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide {\n  text-align: center;\n  background-color: #f8f8f8;\n  padding: 1.5rem 3rem;\n  border-radius: 0.428rem;\n}\n.ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide .img-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n}\n.ecommerce-application .swiper-button-prev,\n.ecommerce-application .swiper-button-next,\n.ecommerce-application .swiper-container-rtl .swiper-button-prev,\n.ecommerce-application .swiper-container-rtl .swiper-button-next {\n  width: 35px;\n  font-size: 2rem;\n}\n[dir] .ecommerce-application .swiper-button-prev, [dir] .ecommerce-application .swiper-button-next, [dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev, [dir] .ecommerce-application .swiper-container-rtl .swiper-button-next {\n  background-image: none;\n}\n.ecommerce-application .swiper-button-prev:focus,\n.ecommerce-application .swiper-button-next:focus,\n.ecommerce-application .swiper-container-rtl .swiper-button-prev:focus,\n.ecommerce-application .swiper-container-rtl .swiper-button-next:focus {\n  outline: none;\n}\n[dir=ltr] .ecommerce-application .swiper-button-prev {\n  left: 0;\n}\n[dir=rtl] .ecommerce-application .swiper-button-prev {\n  right: 0;\n}\n.ecommerce-application .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .ecommerce-application .swiper-button-next {\n  right: 0;\n}\n[dir=rtl] .ecommerce-application .swiper-button-next {\n  left: 0;\n}\n.ecommerce-application .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .swiper-container-rtl .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .swiper-container-rtl .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .product-color-options .color-option {\n  position: relative;\n}\n[dir] .ecommerce-application .product-color-options .color-option {\n  border: 1px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 3px;\n}\n.ecommerce-application .product-color-options .color-option .filloption {\n  height: 18px;\n  width: 18px;\n}\n[dir] .ecommerce-application .product-color-options .color-option .filloption {\n  border-radius: 50%;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-primary {\n  border-color: #7367f0;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-primary .filloption {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-success {\n  border-color: #28c76f;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-success .filloption {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-danger {\n  border-color: #ea5455;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-danger .filloption {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-warning {\n  border-color: #ff9f43;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-warning .filloption {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-info {\n  border-color: #00cfe8;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-info .filloption {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-primary .filloption {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-success .filloption {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-danger .filloption {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-warning .filloption {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-info .filloption {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4);\n}\n@media (max-width: 767.98px) {\n[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide {\n    padding: 1rem;\n}\n}\n@media (max-width: 767.98px) {\n.ecommerce-application .app-ecommerce-details .ratings-list-item svg,\n.ecommerce-application .app-ecommerce-details .ratings-list-item i {\n    font-size: 1rem;\n    height: 1rem;\n    width: 1rem;\n}\n}\n.vgt-table tbody td, .vgt-table tbody th, .vgt-table thead th {\n  font-weight: bold;\n  font-size: 10pt;\n}\n[dir] .vgt-table tbody td, [dir] .vgt-table tbody th, [dir] .vgt-table thead th {\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #4b4b4b;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #4b4b4b;\n}\n.vgt-wrap .vgt-table thead th {\n  color: #9196a0;\n}\n[dir] .vgt-wrap .vgt-table thead th {\n  background-color: #283046;\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #4b4b4b;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #4b4b4b;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #4b4b4b;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #4b4b4b;\n  border-top: 2px solid #4b4b4b;\n  background-color: #656565;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #7d7d7d;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #4b4b4b;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #4b4b4b;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #4b4b4b;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #4b4b4b;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #4b4b4b;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #FFFFFF;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #FFFFFF !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #FFFFFF;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #FFFFFF;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #FFFFFF;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .checkout-form-wizard[data-v-4fc1e137]  .wizard-tab-content {\n  box-shadow: none !important;\n  background: transparent !important;\n  padding: 0;\n}\n[dir] .input-group-text[data-v-4fc1e137] {\n  border-color: gray;\n}\n[dir] .form-control[data-v-4fc1e137] {\n  border-color: gray;\n}\n[dir] .convoy[data-v-4fc1e137]:hover {\n  box-shadow: 0px 0px 17px 5px #757575 !important;\n}\nth[data-v-4fc1e137] {\n  color: white;\n}\n[dir] th[data-v-4fc1e137] {\n  background-color: #4b4b4b;\n  border-color: #646464;\n}\n.popover[data-v-4fc1e137] {\n  max-width: 500px !important;\n}\n[dir] .escolta[data-v-4fc1e137] {\n  background-color: #eeedfd;\n  border-top: 1px solid #7367f0;\n  border-bottom: 1px solid #7367f0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            {
              staticClass: "align-middle text-bold",
              attrs: { md: "8", xl: "8" }
            },
            [
              _vm._v("\n            Seleccione Cuenta:\n            "),
              _c(
                "b-button-group",
                { attrs: { size: "sm" } },
                [
                  _c(
                    "b-button",
                    {
                      class: [_vm.filtroGrupo == "0" ? "btn-primary" : ""],
                      attrs: { variant: "outline-primary" },
                      on: {
                        click: function($event) {
                          _vm.filtroGrupo = "0"
                        }
                      }
                    },
                    [_vm._v("\n                  Todos\n                ")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.grupos, function(ugrupo, indice) {
                    return _c(
                      "b-button",
                      {
                        key: indice,
                        class: [
                          _vm.filtroGrupo == ugrupo.idDato ? "btn-primary" : ""
                        ],
                        attrs: { variant: "outline-primary" },
                        on: {
                          click: function($event) {
                            _vm.filtroGrupo = ugrupo.idDato
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(ugrupo.valorDat) +
                            "\n                "
                        )
                      ]
                    )
                  })
                ],
                2
              ),
              _c("br"),
              _c("br"),
              _vm._v("\n            Filtro Estado:\n            "),
              _c(
                "b-button-group",
                { attrs: { size: "sm" } },
                [
                  _c(
                    "b-button",
                    {
                      class: [_vm.filtroEstado == "TODO" ? "btn-primary" : ""],
                      attrs: { variant: "outline-primary" },
                      on: {
                        click: function($event) {
                          _vm.filtroEstado = "TODO"
                        }
                      }
                    },
                    [_vm._v("\n                  Todos\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      class: [
                        _vm.filtroEstado == "PROGRAMADO" ? "btn-dark" : ""
                      ],
                      attrs: { variant: "outline-secondary" },
                      on: {
                        click: function($event) {
                          _vm.filtroEstado = "PROGRAMADO"
                        }
                      }
                    },
                    [_vm._v("\n                  Programado\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      class: [
                        _vm.filtroEstado == "POR SALIR" ? "btn-warning" : ""
                      ],
                      attrs: { variant: "outline-secondary" },
                      on: {
                        click: function($event) {
                          _vm.filtroEstado = "POR SALIR"
                        }
                      }
                    },
                    [_vm._v("\n                  Por Salir\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      class: [_vm.filtroEstado == "RUTA" ? "btn-info" : ""],
                      attrs: { variant: "outline-secondary" },
                      on: {
                        click: function($event) {
                          _vm.filtroEstado = "RUTA"
                        }
                      }
                    },
                    [_vm._v("\n                  Ruta\n                ")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            {
              staticClass: "align-middle text-right",
              attrs: { md: "4", xl: "4" }
            },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.modal-alimentacion",
                      modifiers: { "modal-alimentacion": true }
                    }
                  ],
                  staticClass: "mb-2",
                  attrs: { variant: "primary" },
                  on: { click: _vm.GestionarAlimentacionLibre }
                },
                [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "PlusIcon" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Alimentación en Base")
                  ])
                ],
                1
              ),
              _vm._v(" "),
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
                  staticClass: "mb-2",
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
                    _vm._v("Nuevo Convoy")
                  ])
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
      _c("br"),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.convoys, function(uconvoy, indice) {
          return _c(
            "b-col",
            {
              key: uconvoy.idConvoy,
              staticClass: "align-middle text-center",
              attrs: { md: "12", xl: "12" }
            },
            [
              (_vm.filtroEstado == "TODO" ||
                _vm.filtroEstado == uconvoy.estadoCon) &&
              (_vm.filtroGrupo == "0" ||
                _vm.filtroGrupo == uconvoy.Grupo_idDato)
                ? _c(
                    "b-card",
                    {
                      staticClass: "card convoy",
                      attrs: {
                        "border-variant": _vm.card[uconvoy.estadoCon],
                        "bg-variant": "transparent"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "card-title" },
                        [
                          _c("h6", { staticClass: "text-primary mt-2" }, [
                            _vm._v(
                              "Nro. " +
                                _vm._s(uconvoy.idConvoy) +
                                ": TRANSPORTE DE " +
                                _vm._s(uconvoy.cargaCon)
                            )
                          ]),
                          _vm._v(" "),
                          uconvoy.estadoCon == "PROGRAMADO"
                            ? _c("b-badge", { attrs: { variant: "dark" } }, [
                                _vm._v("PROGRAMADO")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          uconvoy.estadoCon == "POR SALIR"
                            ? _c("b-badge", { attrs: { variant: "warning" } }, [
                                _vm._v("POR SALIR")
                              ])
                            : uconvoy.estadoCon == "RUTA"
                            ? _c("b-badge", { attrs: { variant: "info" } }, [
                                _vm._v("EN RUTA")
                              ])
                            : uconvoy.estadoCon == "TERMINADO"
                            ? _c(
                                "b-badge",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("TERMINADO")]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-left",
                                  attrs: { md: "4", xl: "4" }
                                },
                                [
                                  _c("hr", {
                                    staticClass: "invoice-spacing primary"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    { staticClass: "text-primary" },
                                    [
                                      _c("feather-icon", {
                                        attrs: { icon: "TruckIcon" }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Información del Servicio")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("hr", {
                                    staticClass: "invoice-spacing primary"
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Cliente: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.clienteExt))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Ruta ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.tipoCon) + ": ")]
                                  ),
                                  _c("span", { staticClass: "text-primary" }, [
                                    _vm._v(
                                      _vm._s(uconvoy.origenCon) +
                                        " - " +
                                        _vm._s(uconvoy.pasoCon) +
                                        " - " +
                                        _vm._s(uconvoy.destinoCon)
                                    )
                                  ]),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Roundtrip: ")]),
                                  _c("span", { staticClass: "text-primary" }, [
                                    _vm._v(_vm._s(uconvoy.roundtripCon))
                                  ]),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Tipo Acople: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.tvehiculoCon))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Tipo de Carga: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.cargaCon))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Unidad de Carga: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [
                                      _vm._v(
                                        _vm._s(uconvoy.unidadCon) +
                                          " - " +
                                          _vm._s(uconvoy.unidadSunatCon)
                                      )
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Fecha de Inicio: ")]),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        " text-success font-weight-bolder"
                                    },
                                    [_vm._v(_vm._s(uconvoy.finicioCon))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Fecha de Termino: ")]),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        " text-warning font-weight-bolder"
                                    },
                                    [_vm._v(_vm._s(uconvoy.fterminoCon))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("hr", {
                                    staticClass: "invoice-spacing primary"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    { staticClass: "text-primary" },
                                    [
                                      _c("feather-icon", {
                                        attrs: { icon: "TruckIcon" }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Información de la Guía")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("hr", {
                                    staticClass: "invoice-spacing primary"
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Serie: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.serieCon))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Remitente: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.remitenteExt))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Partida: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(uconvoy.ubigeopCon) +
                                          " - " +
                                          _vm._s(uconvoy.partidaCon)
                                      )
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Destinatario: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v(_vm._s(uconvoy.destinatarioExt))]
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "text-primary",
                                    attrs: { icon: "ChevronRightIcon" }
                                  }),
                                  _c("span", [_vm._v("Llegada: ")]),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(uconvoy.ubigeolCon) +
                                          " - " +
                                          _vm._s(uconvoy.llegadaCon)
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass:
                                    "border-left-primary border-left-3",
                                  attrs: { md: "8", xl: "8" }
                                },
                                [
                                  _c("dl", { staticClass: "row" }, [
                                    _c(
                                      "dd",
                                      {
                                        staticClass:
                                          "col-sm-1 text-center font-weight-bolder"
                                      },
                                      [_vm._v("O.S.")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "dd",
                                      {
                                        staticClass:
                                          "col-sm-1 text-center font-weight-bolder"
                                      },
                                      [_vm._v("G.R.")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "dt",
                                      {
                                        staticClass:
                                          "col-sm-3 text-center font-weight-bolder"
                                      },
                                      [_vm._v("UNIDAD")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "dd",
                                      {
                                        staticClass:
                                          "col-sm-5 text-center font-weight-bolder"
                                      },
                                      [_vm._v("OPERADOR")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "dd",
                                      {
                                        staticClass:
                                          "col-sm-2 text-center font-weight-bolder"
                                      },
                                      [_vm._v("ACCIÓN")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(uconvoy.servicios, function(
                                    uservicio,
                                    indice2
                                  ) {
                                    return _c(
                                      "dl",
                                      {
                                        key: uservicio.idServicio,
                                        staticClass: "row",
                                        class: [
                                          { escolta: uservicio.escoltaSer == 1 }
                                        ]
                                      },
                                      [
                                        _c(
                                          "dd",
                                          {
                                            staticClass: "col-sm-1 text-center"
                                          },
                                          [
                                            _vm._v(
                                              " " + _vm._s(uservicio.idServicio)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        uservicio.guia != null
                                          ? _c(
                                              "dd",
                                              {
                                                staticClass:
                                                  "col-sm-1 text-center"
                                              },
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-danger",
                                                      href:
                                                        uservicio.guia
                                                          .enlaceGui,
                                                      target: "_blank"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        uservicio.guia.serieGui
                                                      ) +
                                                        "-" +
                                                        _vm._s(
                                                          uservicio.guia.nroGui
                                                        )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "dd",
                                              {
                                                staticClass:
                                                  "col-sm-1 text-center"
                                              },
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-danger"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.GenerarG(
                                                          uconvoy,
                                                          uservicio
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("?")]
                                                )
                                              ],
                                              1
                                            ),
                                        _vm._v(" "),
                                        uconvoy.estadoCon == "RUTA" ||
                                        uconvoy.estadoCon == "POR SALIR"
                                          ? _c(
                                              "dt",
                                              {
                                                staticClass:
                                                  "col-sm-3 text-center",
                                                staticStyle: {
                                                  "white-space": "nowrap"
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "text-dark" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(uservicio.placaVeh)
                                                    )
                                                  ]
                                                ),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-secondary"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        uservicio.acopleVeh
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _c(
                                              "dt",
                                              {
                                                staticClass:
                                                  "col-sm-3 text-center",
                                                staticStyle: {
                                                  "white-space": "nowrap"
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "text-dark" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(uservicio.placaVeh)
                                                    )
                                                  ]
                                                ),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-secondary"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        uservicio.acopleVeh
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                        _vm._v(" "),
                                        uconvoy.estadoCon == "RUTA" ||
                                        uconvoy.estadoCon == "POR SALIR"
                                          ? _c(
                                              "dd",
                                              {
                                                staticClass:
                                                  "col-sm-5 text-center"
                                              },
                                              [
                                                uservicio.escoltaSer == 1
                                                  ? _c(
                                                      "b-badge",
                                                      {
                                                        attrs: {
                                                          variant: "primary"
                                                        }
                                                      },
                                                      [_vm._v(" Sup. ")]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      uservicio.trabajadorPer
                                                    ) +
                                                    "\n                                "
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "dd",
                                              {
                                                staticClass:
                                                  "col-sm-5 text-center"
                                              },
                                              [
                                                uservicio.escoltaSer == 1
                                                  ? _c(
                                                      "b-badge",
                                                      {
                                                        attrs: {
                                                          variant: "primary"
                                                        }
                                                      },
                                                      [_vm._v("Sup.")]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      uservicio.trabajadorPer
                                                    )
                                                )
                                              ],
                                              1
                                            ),
                                        _vm._v(" "),
                                        _c(
                                          "dd",
                                          {
                                            staticClass: "col-sm-2 text-center"
                                          },
                                          [
                                            _c(
                                              "b-dropdown",
                                              {
                                                staticClass:
                                                  "dropdown-icon-wrapper",
                                                attrs: {
                                                  id: "dropdown-grouped",
                                                  variant: "info",
                                                  size: "sm",
                                                  text: "Small"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "button-content",
                                                      fn: function() {
                                                        return [
                                                          _c("feather-icon", {
                                                            staticClass:
                                                              "align-middle",
                                                            attrs: {
                                                              icon: "MenuIcon",
                                                              size: "16"
                                                            }
                                                          })
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
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    attrs: {
                                                      variant: "primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.Reemplazar(
                                                          uservicio,
                                                          uconvoy
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "RefreshCcwIcon",
                                                        size: "18"
                                                      }
                                                    }),
                                                    _vm._v(
                                                      " Cambio de Recursos\n                                        "
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    attrs: {
                                                      variant: "danger"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.AnularS(
                                                          uservicio
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "SlashIcon",
                                                        size: "18"
                                                      }
                                                    }),
                                                    _vm._v(
                                                      " Anular Servicio\n                                        "
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    attrs: { variant: "info" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.Evento(
                                                          uconvoy,
                                                          uservicio
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "FileTextIcon",
                                                        size: "18"
                                                      }
                                                    }),
                                                    _vm._v(
                                                      " Guia por Evento\n                                        "
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "b-dropdown-item",
                                                  {
                                                    attrs: {
                                                      variant: "warning"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.AnularG(
                                                          uservicio
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "SlashIcon",
                                                        size: "18"
                                                      }
                                                    }),
                                                    _vm._v(
                                                      " Anular Guía\n                                        "
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
                                      ]
                                    )
                                  })
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
                      _c(
                        "div",
                        { staticClass: "card-footer" },
                        [
                          uconvoy.estadoCon == "PROGRAMADO"
                            ? _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.modal-recorrido",
                                      modifiers: { "modal-recorrido": true }
                                    }
                                  ],
                                  attrs: {
                                    variant: "outline-primary",
                                    size: "sm",
                                    disabled: _vm.showLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.Inicio(uconvoy)
                                    }
                                  }
                                },
                                [
                                  !_vm.showLoading
                                    ? _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "SendIcon" }
                                      })
                                    : _c("b-spinner", { attrs: { small: "" } }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "align-middle" }, [
                                    _vm._v("Iniciar Ruta")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          uconvoy.estadoCon == "PROGRAMADO"
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-danger",
                                    size: "sm",
                                    disabled: _vm.showLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.Anular(uconvoy)
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
                                    _vm._v("Anular")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          uconvoy.estadoCon != "PROGRAMADO"
                            ? _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.modal-carga",
                                      modifiers: { "modal-carga": true }
                                    }
                                  ],
                                  attrs: {
                                    variant: "outline-danger",
                                    size: "sm",
                                    disabled: _vm.showLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.Prueba()
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
                                    _vm._v("Guías de Remisión")
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
                                  rawName: "v-b-modal.modal-os",
                                  modifiers: { "modal-os": true }
                                }
                              ],
                              attrs: {
                                variant: "outline-warning",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: {
                                click: function($event) {
                                  return _vm.Recorrido(uconvoy, false, false)
                                }
                              }
                            },
                            [
                              !_vm.showLoading
                                ? _c("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: { icon: "PlusIcon" }
                                  })
                                : _c("b-spinner", { attrs: { small: "" } }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v("Adicionar O.S.")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          uconvoy.estadoCon != "PROGRAMADO"
                            ? _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.modal-recorrido",
                                      modifiers: { "modal-recorrido": true }
                                    }
                                  ],
                                  attrs: {
                                    variant: "outline-primary",
                                    size: "sm",
                                    disabled: _vm.showLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.Recorrido(
                                        uconvoy,
                                        false,
                                        false
                                      )
                                    }
                                  }
                                },
                                [
                                  !_vm.showLoading
                                    ? _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "UserCheckIcon" }
                                      })
                                    : _c("b-spinner", { attrs: { small: "" } }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "align-middle" }, [
                                    _vm._v("Asistencia y Gastos de Viaje")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          uconvoy.estadoCon != "PROGRAMADO"
                            ? _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-modal",
                                      rawName: "v-b-modal.modal-recorrido",
                                      modifiers: { "modal-recorrido": true }
                                    }
                                  ],
                                  attrs: {
                                    variant: "outline-success",
                                    size: "sm",
                                    disabled: _vm.showLoading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.Recorrido(uconvoy, true, false)
                                    }
                                  }
                                },
                                [
                                  !_vm.showLoading
                                    ? _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "TargetIcon" }
                                      })
                                    : _c("b-spinner", { attrs: { small: "" } }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "align-middle" }, [
                                    _vm._v("Terminar Servicio")
                                  ])
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        }),
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
                              _vm.showModalProgramar = false
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
            value: _vm.showModalProgramar,
            callback: function($$v) {
              _vm.showModalProgramar = $$v
            },
            expression: "showModalProgramar"
          }
        },
        [
          _c("div", { staticClass: "card convoy" }, [
            _c("div", { staticClass: "card-title text-center" }, [
              _c("h5", { staticClass: "text-primary mt-2" }, [
                _vm._v("TRANSPORTE DE " + _vm._s(_vm.convoy.cargaCon))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { md: "5", xl: "5" } },
                      [
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información del Servicio")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Cliente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.cliente))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Ruta ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tipoCon) + ": ")
                        ]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.origenCon) +
                              " - " +
                              _vm._s(_vm.convoy.pasoCon) +
                              " - " +
                              _vm._s(_vm.convoy.destinoCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Roundtrip: ")]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(_vm._s(_vm.convoy.roundtripCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo Acople: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tvehiculoCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.cargaCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Unidad de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.unidadCon) +
                              " - " +
                              _vm._s(_vm.convoy.unidadSunatCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información de la Guía")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Serie: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.serieCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Remitente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.remitenteExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Partida: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeopCon) +
                              " - " +
                              _vm._s(_vm.convoy.partidaCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Destinatario: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.destinatarioExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Llegada: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeolCon) +
                              " - " +
                              _vm._s(_vm.convoy.llegadaCon)
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "border-left-primary border-left-3",
                        attrs: { md: "7", xl: "7" }
                      },
                      [
                        _c("dl", { staticClass: "row" }, [
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-1 text-center font-weight-bolder"
                            },
                            [_vm._v("O.S.")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dt",
                            {
                              staticClass:
                                "col-sm-3 text-center font-weight-bolder"
                            },
                            [_vm._v("UNIDAD")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-5 text-center font-weight-bolder"
                            },
                            [_vm._v("OPERADOR")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-2 text-center font-weight-bolder"
                            },
                            [
                              _vm._v(
                                "CARGA (" +
                                  _vm._s(_vm.convoy.unidadSunatCon) +
                                  ")"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            { staticClass: "col-sm-1" },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-icon btn-sm",
                                  attrs: { variant: "flat-danger" }
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
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.servicios, function(uservicio, indice) {
                          return uservicio.estadoSer != "ANULADO"
                            ? _c(
                                "dl",
                                {
                                  key: indice,
                                  staticClass: "row",
                                  class: [
                                    { escolta: uservicio.escoltaSer == 1 }
                                  ]
                                },
                                [
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-1 text-center" },
                                    [
                                      _vm._v(
                                        " " + _vm._s(uservicio.idServicio) + " "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dt",
                                    {
                                      staticClass: "col-sm-3 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _c("span", { staticClass: "text-dark" }, [
                                        _vm._v(_vm._s(uservicio.placaVeh))
                                      ]),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-secondary" },
                                        [_vm._v(_vm._s(uservicio.acopleVeh))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-5 text-center" },
                                    [
                                      uservicio.escoltaSer == 1
                                        ? _c(
                                            "b-badge",
                                            { attrs: { variant: "primary" } },
                                            [_vm._v(" Sup. ")]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        " " +
                                          _vm._s(uservicio.trabajadorPer) +
                                          " "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    {
                                      staticClass: "col-sm-2 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(uservicio.cargaSer) +
                                          " " +
                                          _vm._s(_vm.convoy.unidadSunatCon)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-1 text-center" },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn-icon btn-sm",
                                          attrs: { variant: "flat-danger" },
                                          on: {
                                            click: function($event) {
                                              return _vm.EliminarServicio(
                                                indice
                                              )
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
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
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
            "b-tabs",
            {
              attrs: { "content-class": "mt-2", justified: "" },
              model: {
                value: _vm.tabIndex,
                callback: function($$v) {
                  _vm.tabIndex = $$v
                },
                expression: "tabIndex"
              }
            },
            [
              _c(
                "b-tab",
                {
                  attrs: { active: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function() {
                        return [
                          _c("feather-icon", { attrs: { icon: "MapPinIcon" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Datos del Servicio")])
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
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
                            {
                              attrs: {
                                label: "Ruta Comercial",
                                description:
                                  "Formato: Ruta 'Cliente' | Carga - Unidad | 'Origen' - 'Paso' - 'Destino'"
                              }
                            },
                            [
                              _c("v-select", {
                                staticStyle: { flex: "1" },
                                attrs: {
                                  label: "nombreRut",
                                  options: _vm.rutas
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.Asignar("ruta")
                                  }
                                },
                                model: {
                                  value: _vm.zruta,
                                  callback: function($$v) {
                                    _vm.zruta = $$v
                                  },
                                  expression: "zruta"
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function() {
                        return [
                          _c("feather-icon", { attrs: { icon: "TruckIcon" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Datos del Convoy")])
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "align-middle text-center",
                          attrs: { md: "2", xl: "2" }
                        },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Supervisor - Operador" } },
                            [
                              _vm.yescolta
                                ? _c(
                                    "b-button",
                                    {
                                      staticStyle: { "margin-top": "2px" },
                                      attrs: { variant: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.yescolta = false
                                        }
                                      }
                                    },
                                    [
                                      _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "UserCheckIcon" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "align-middle" },
                                        [_vm._v("Escolta")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.yescolta
                                ? _c(
                                    "b-button",
                                    {
                                      staticStyle: { "margin-top": "2px" },
                                      attrs: { variant: "secondary" },
                                      on: {
                                        click: function($event) {
                                          _vm.yescolta = true
                                        }
                                      }
                                    },
                                    [
                                      _c("feather-icon", {
                                        staticClass: "mr-50",
                                        attrs: { icon: "UsersIcon" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "align-middle" },
                                        [_vm._v("Operador")]
                                      )
                                    ],
                                    1
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
                        { attrs: { md: "10", xl: "10" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Operador" } },
                            [
                              _c("v-select", {
                                staticStyle: { flex: "1" },
                                attrs: {
                                  label: "trabajadorPer",
                                  options: _vm.personas
                                },
                                model: {
                                  value: _vm.yoperador,
                                  callback: function($$v) {
                                    _vm.yoperador = $$v
                                  },
                                  expression: "yoperador"
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
                            { attrs: { label: "Vehiculo" } },
                            [
                              _c("v-select", {
                                staticStyle: { flex: "1" },
                                attrs: {
                                  label: "placaVeh",
                                  options: _vm.vehiculos
                                },
                                model: {
                                  value: _vm.yvehiculo,
                                  callback: function($$v) {
                                    _vm.yvehiculo = $$v
                                  },
                                  expression: "yvehiculo"
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
                            { attrs: { label: "Acople" } },
                            [
                              _c("v-select", {
                                staticStyle: { flex: "1" },
                                attrs: {
                                  label: "placaVeh",
                                  options: _vm.vehiculos,
                                  disabled: _vm.yescolta
                                },
                                model: {
                                  value: _vm.yacople,
                                  callback: function($$v) {
                                    _vm.yacople = $$v
                                  },
                                  expression: "yacople"
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
                            [
                              _c("label", [
                                _vm._v("Cantidad Cargada: "),
                                _c(
                                  "span",
                                  { staticClass: "text-primary text-bold" },
                                  [_vm._v(_vm._s(_vm.convoy.unidadSunatCon))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("cleave", {
                                staticClass: "form-control",
                                attrs: {
                                  raw: false,
                                  options: {
                                    numeral: true,
                                    numeralThousandsGroupStyle: "none"
                                  },
                                  disabled: _vm.yescolta
                                },
                                on: {
                                  focus: function($event) {
                                    return $event.target.select()
                                  }
                                },
                                model: {
                                  value: _vm.ycarga,
                                  callback: function($$v) {
                                    _vm.ycarga = $$v
                                  },
                                  expression: "ycarga"
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
                        {
                          staticClass: "align-middle text-center",
                          attrs: { md: "6", xl: "1" }
                        },
                        [
                          _c(
                            "b-button",
                            {
                              staticStyle: { "margin-top": "25px" },
                              attrs: { variant: "outline-success" },
                              on: { click: _vm.AgregarServicio }
                            },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "CheckCircleIcon" }
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
            id: "modal-os",
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
                              _vm.showModalOS = false
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
                              on: {
                                click: function($event) {
                                  return _vm.Actualizar()
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
            value: _vm.showModalOS,
            callback: function($$v) {
              _vm.showModalOS = $$v
            },
            expression: "showModalOS"
          }
        },
        [
          _c("div", { staticClass: "card convoy" }, [
            _c("div", { staticClass: "card-title text-center" }, [
              _c("h5", { staticClass: "text-primary mt-2" }, [
                _vm._v("TRANSPORTE DE " + _vm._s(_vm.convoy.cargaCon))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { md: "5", xl: "5" } },
                      [
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información del Servicio")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Cliente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.clienteExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Ruta ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tipoCon) + ": ")
                        ]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.origenCon) +
                              " - " +
                              _vm._s(_vm.convoy.pasoCon) +
                              " - " +
                              _vm._s(_vm.convoy.destinoCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Roundtrip: ")]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(_vm._s(_vm.convoy.roundtripCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo Acople: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tvehiculoCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.cargaCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Unidad de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.unidadCon) +
                              " - " +
                              _vm._s(_vm.convoy.unidadSunatCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _vm.convoy.finicioCon != null
                          ? [
                              _c("feather-icon", {
                                staticClass: "text-primary",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _c("span", [_vm._v("Fecha de Inicio: ")]),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " text-success font-weight-bolder"
                                },
                                [_vm._v(_vm._s(_vm.convoy.finicioCon))]
                              ),
                              _c("br")
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.convoy.fterminoCon != null
                          ? [
                              _c("feather-icon", {
                                staticClass: "text-primary",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _c("span", [_vm._v("Fecha de Termino: ")]),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " text-warning font-weight-bolder"
                                },
                                [_vm._v(_vm._s(_vm.convoy.fterminoCon))]
                              ),
                              _c("br")
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información de la Guía")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Serie: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.serieCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Remitente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.remitenteExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Partida: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeopCon) +
                              " - " +
                              _vm._s(_vm.convoy.partidaCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Destinatario: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.destinatarioExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Llegada: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeolCon) +
                              " - " +
                              _vm._s(_vm.convoy.llegadaCon)
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "border-left-primary border-left-3",
                        attrs: { md: "7", xl: "7" }
                      },
                      [
                        _c("dl", { staticClass: "row" }, [
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-1 text-center font-weight-bolder"
                            },
                            [_vm._v("O.S.")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-1 text-center font-weight-bolder"
                            },
                            [_vm._v("G.R.")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dt",
                            {
                              staticClass:
                                "col-sm-3 text-center font-weight-bolder"
                            },
                            [_vm._v("UNIDAD")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-5 text-center font-weight-bolder"
                            },
                            [_vm._v("OPERADOR")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-2 text-center font-weight-bolder"
                            },
                            [_vm._v("CARGA")]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.servicios, function(uservicio, indice) {
                          return uservicio.estadoSer != "ANULADO"
                            ? _c(
                                "dl",
                                {
                                  key: indice,
                                  staticClass: "row",
                                  class: [
                                    { escolta: uservicio.escoltaSer == 1 }
                                  ]
                                },
                                [
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-1 text-center" },
                                    [
                                      _vm._v(
                                        " " + _vm._s(uservicio.idServicio) + " "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  uservicio.Guia_idGuia != null
                                    ? _c(
                                        "dd",
                                        { staticClass: "col-sm-1 text-center" },
                                        [
                                          _vm._v(
                                            " " +
                                              _vm._s(uservicio.Guia_idGuia) +
                                              " "
                                          )
                                        ]
                                      )
                                    : _c(
                                        "dd",
                                        { staticClass: "col-sm-1 text-center" },
                                        [_vm._v(" ?")]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "dt",
                                    {
                                      staticClass: "col-sm-3 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _c("span", { staticClass: "text-dark" }, [
                                        _vm._v(_vm._s(uservicio.placaVeh))
                                      ]),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-secondary" },
                                        [_vm._v(_vm._s(uservicio.acopleVeh))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-5 text-center" },
                                    [
                                      uservicio.escoltaSer == 1
                                        ? _c(
                                            "b-badge",
                                            { attrs: { variant: "primary" } },
                                            [_vm._v("Sup.")]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        " " +
                                          _vm._s(uservicio.trabajadorPer) +
                                          " "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    {
                                      staticClass: "col-sm-2 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _vm._v(
                                        " " + _vm._s(uservicio.cargaSer) + " "
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
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
            "b-tabs",
            {
              attrs: { "content-class": "mt-2", justified: "" },
              model: {
                value: _vm.tabIndex,
                callback: function($$v) {
                  _vm.tabIndex = $$v
                },
                expression: "tabIndex"
              }
            },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "align-middle text-center",
                      attrs: { md: "2", xl: "2" }
                    },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Supervisor" } },
                        [
                          _vm.yescolta
                            ? _c(
                                "b-button",
                                {
                                  staticStyle: { "margin-top": "2px" },
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function($event) {
                                      _vm.yescolta = false
                                    }
                                  }
                                },
                                [_vm._v("Escolta")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.yescolta
                            ? _c(
                                "b-button",
                                {
                                  staticStyle: { "margin-top": "2px" },
                                  attrs: { variant: "secondary" },
                                  on: {
                                    click: function($event) {
                                      _vm.yescolta = true
                                    }
                                  }
                                },
                                [_vm._v("Operador")]
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
                    { attrs: { md: "10", xl: "10" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Operador" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "trabajadorPer",
                              options: _vm.personas
                            },
                            model: {
                              value: _vm.yoperador,
                              callback: function($$v) {
                                _vm.yoperador = $$v
                              },
                              expression: "yoperador"
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
                        { attrs: { label: "Vehiculo" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "placaVeh",
                              options: _vm.vehiculos
                            },
                            model: {
                              value: _vm.yvehiculo,
                              callback: function($$v) {
                                _vm.yvehiculo = $$v
                              },
                              expression: "yvehiculo"
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
                        { attrs: { label: "Acople" } },
                        [
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "placaVeh",
                              options: _vm.vehiculos,
                              disabled: _vm.yescolta
                            },
                            model: {
                              value: _vm.yacople,
                              callback: function($$v) {
                                _vm.yacople = $$v
                              },
                              expression: "yacople"
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
                        { attrs: { label: "Carga" } },
                        [
                          _c("b-form-input", {
                            attrs: { disabled: _vm.yescolta },
                            model: {
                              value: _vm.ycarga,
                              callback: function($$v) {
                                _vm.ycarga = $$v
                              },
                              expression: "ycarga"
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
                    {
                      staticClass: "align-middle text-center",
                      attrs: { md: "6", xl: "1" }
                    },
                    [
                      _c(
                        "b-button",
                        {
                          staticStyle: { "margin-top": "25px" },
                          attrs: { variant: "outline-success" },
                          on: { click: _vm.AgregarServicio }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "CheckCircleIcon" }
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
            id: "modal-recorrido",
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
                              _vm.showModalRecorrido = false
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
                      _vm.convoy.estadoCon == "PROGRAMADO"
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: {
                                click: function($event) {
                                  return _vm.Iniciar()
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
                                _vm._v("Guardar")
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.finalizar && _vm.convoy.estadoCon != "PROGRAMADO"
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                size: "sm",
                                disabled: _vm.showLoading
                              },
                              on: {
                                click: function($event) {
                                  return _vm.Terminar()
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
                                _vm._v("Terminar")
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
            value: _vm.showModalRecorrido,
            callback: function($$v) {
              _vm.showModalRecorrido = $$v
            },
            expression: "showModalRecorrido"
          }
        },
        [
          _c("div", { staticClass: "card convoy" }, [
            _c("div", { staticClass: "card-title text-center" }, [
              _c("h5", { staticClass: "text-primary mt-2" }, [
                _vm._v("TRANSPORTE DE " + _vm._s(_vm.convoy.cargaCon))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { md: "5", xl: "5" } },
                      [
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información del Servicio")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Cliente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.clienteExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Ruta ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tipoCon) + ": ")
                        ]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.origenCon) +
                              " - " +
                              _vm._s(_vm.convoy.pasoCon) +
                              " - " +
                              _vm._s(_vm.convoy.destinoCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Roundtrip: ")]),
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(_vm._s(_vm.convoy.roundtripCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo Acople: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.tvehiculoCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Tipo de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.cargaCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Unidad de Carga: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            _vm._s(_vm.convoy.unidadCon) +
                              " - " +
                              _vm._s(_vm.convoy.unidadSunatCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _vm.convoy.finicioCon != null
                          ? [
                              _c("feather-icon", {
                                staticClass: "text-primary",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _c("span", [_vm._v("Fecha de Inicio: ")]),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " text-success font-weight-bolder"
                                },
                                [_vm._v(_vm._s(_vm.convoy.finicioCon))]
                              ),
                              _c("br")
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.convoy.fterminoCon != null
                          ? [
                              _c("feather-icon", {
                                staticClass: "text-primary",
                                attrs: { icon: "ChevronRightIcon" }
                              }),
                              _c("span", [_vm._v("Fecha de Termino: ")]),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    " text-warning font-weight-bolder"
                                },
                                [_vm._v(_vm._s(_vm.convoy.fterminoCon))]
                              ),
                              _c("br")
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "text-primary" },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TruckIcon" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Información de la Guía")])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "invoice-spacing primary" }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Serie: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.serieCon))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Remitente: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.remitenteExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Partida: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeopCon) +
                              " - " +
                              _vm._s(_vm.convoy.partidaCon)
                          )
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Destinatario: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(_vm._s(_vm.convoy.destinatarioExt))
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Llegada: ")]),
                        _c("span", { staticClass: "font-weight-bolder" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.convoy.ubigeolCon) +
                              " - " +
                              _vm._s(_vm.convoy.llegadaCon)
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "border-left-primary border-left-3",
                        attrs: { md: "7", xl: "7" }
                      },
                      [
                        _c("dl", { staticClass: "row" }, [
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-1 text-center font-weight-bolder"
                            },
                            [_vm._v("O.S.")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-1 text-center font-weight-bolder"
                            },
                            [_vm._v("G.R.")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dt",
                            {
                              staticClass:
                                "col-sm-3 text-center font-weight-bolder"
                            },
                            [_vm._v("UNIDAD")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-5 text-center font-weight-bolder"
                            },
                            [_vm._v("OPERADOR")]
                          ),
                          _vm._v(" "),
                          _c(
                            "dd",
                            {
                              staticClass:
                                "col-sm-2 text-center font-weight-bolder"
                            },
                            [_vm._v("CARGA")]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.servicios, function(uservicio, indice) {
                          return uservicio.estadoSer != "ANULADO"
                            ? _c(
                                "dl",
                                {
                                  key: indice,
                                  staticClass: "row",
                                  class: [
                                    { escolta: uservicio.escoltaSer == 1 }
                                  ]
                                },
                                [
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-1 text-center" },
                                    [
                                      _vm._v(
                                        " " + _vm._s(uservicio.idServicio) + " "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  uservicio.Guia_idGuia != null
                                    ? _c(
                                        "dd",
                                        { staticClass: "col-sm-1 text-center" },
                                        [
                                          _vm._v(
                                            " " +
                                              _vm._s(uservicio.Guia_idGuia) +
                                              " "
                                          )
                                        ]
                                      )
                                    : _c(
                                        "dd",
                                        { staticClass: "col-sm-1 text-center" },
                                        [_vm._v(" ?")]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "dt",
                                    {
                                      staticClass: "col-sm-3 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _c("span", { staticClass: "text-dark" }, [
                                        _vm._v(_vm._s(uservicio.placaVeh))
                                      ]),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-secondary" },
                                        [_vm._v(_vm._s(uservicio.acopleVeh))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    { staticClass: "col-sm-5 text-center" },
                                    [
                                      uservicio.escoltaSer == 1
                                        ? _c(
                                            "b-badge",
                                            { attrs: { variant: "primary" } },
                                            [_vm._v("Sup.")]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        " " +
                                          _vm._s(uservicio.trabajadorPer) +
                                          " "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "dd",
                                    {
                                      staticClass: "col-sm-2 text-center",
                                      staticStyle: { "white-space": "nowrap" }
                                    },
                                    [
                                      _vm._v(
                                        " " + _vm._s(uservicio.cargaSer) + " "
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
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
                          _vm.convoy.estadoCon == "PROGRAMADO"
                            ? [
                                _c("p", [
                                  _vm._v("Ingrese la Información de Inicio")
                                ]),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "* El nro de Guía se genera automáticamente."
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex flex-sm-row flex-column align-items-start"
                                  },
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { md: "3", xl: "3" } },
                                      [
                                        _c("h6", [_vm._v("Fecha de Inicio")]),
                                        _vm._v(" "),
                                        _c("b-form-datepicker", {
                                          staticClass: "form-control",
                                          attrs: {
                                            "date-format-options": {
                                              year: "numeric",
                                              month: "numeric",
                                              day: "numeric"
                                            },
                                            locale: "es"
                                          },
                                          on: {
                                            input: function($event) {
                                              _vm.convoy.finicioCon =
                                                _vm.convoy.fechai +
                                                " " +
                                                _vm.convoy.horai
                                            }
                                          },
                                          model: {
                                            value: _vm.convoy.fechai,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.convoy,
                                                "fechai",
                                                $$v
                                              )
                                            },
                                            expression: "convoy.fechai"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { md: "3", xl: "3" } },
                                      [
                                        _c("h6", [_vm._v("Hora de Inicio")]),
                                        _vm._v(" "),
                                        _c("cleave", {
                                          staticClass: "form-control",
                                          attrs: {
                                            raw: false,
                                            options: {
                                              time: true,
                                              timePattern: ["h", "m"]
                                            },
                                            placeholder: "hh:mm"
                                          },
                                          on: {
                                            input: function($event) {
                                              _vm.convoy.finicioCon =
                                                _vm.convoy.fechai +
                                                " " +
                                                _vm.convoy.horai
                                            }
                                          },
                                          model: {
                                            value: _vm.convoy.horai,
                                            callback: function($$v) {
                                              _vm.$set(_vm.convoy, "horai", $$v)
                                            },
                                            expression: "convoy.horai"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            : [
                                _c("h5", { staticClass: "text-bold" }, [
                                  _vm._v(_vm._s(_vm.convoy.finicioCon))
                                ])
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.recorridos_actuales, function(
                        urecorrido,
                        pos
                      ) {
                        return _vm.convoy.estadoCon != "PROGRAMADO"
                          ? _c(
                              "app-timeline-item",
                              {
                                key: pos,
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
                                    urecorrido.estadoRec == "OMITIDO"
                                      ? _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "text-primary text-bold"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                RECORRIDO " +
                                                _vm._s(pos + 1) +
                                                " DE " +
                                                _vm._s(
                                                  _vm.recorridos_actuales.length
                                                ) +
                                                ": " +
                                                _vm._s(urecorrido.nombreRec) +
                                                "\n                                "
                                            ),
                                            _c(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant: "light-danger"
                                                }
                                              },
                                              [
                                                _c("feather-icon", {
                                                  staticClass: "mr-25",
                                                  attrs: { icon: "SlashIcon" }
                                                }),
                                                _c("span", [_vm._v("OMITIDO")])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : urecorrido.estadoRec == "PROGRAMADO"
                                      ? _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "text-primary text-bold"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                RECORRIDO " +
                                                _vm._s(pos + 1) +
                                                " DE " +
                                                _vm._s(
                                                  _vm.recorridos_actuales.length
                                                ) +
                                                ": " +
                                                _vm._s(urecorrido.nombreRec) +
                                                " \n                                "
                                            ),
                                            _c(
                                              "b-badge",
                                              {
                                                attrs: { variant: "light-dark" }
                                              },
                                              [
                                                _c("feather-icon", {
                                                  staticClass: "mr-25",
                                                  attrs: { icon: "ClockIcon" }
                                                }),
                                                _c("span", [
                                                  _vm._v("PROGRAMADO")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : urecorrido.estadoRec == "EJECUTADO"
                                      ? _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "text-primary text-bold"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                RECORRIDO " +
                                                _vm._s(pos + 1) +
                                                " DE " +
                                                _vm._s(
                                                  _vm.recorridos_actuales.length
                                                ) +
                                                ": " +
                                                _vm._s(urecorrido.nombreRec) +
                                                "\n                                "
                                            ),
                                            _c(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant: "light-success"
                                                }
                                              },
                                              [
                                                _c("feather-icon", {
                                                  staticClass: "mr-25",
                                                  attrs: { icon: "CheckIcon" }
                                                }),
                                                _c("span", [
                                                  _vm._v("EJECUTADO")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    urecorrido.actual && !_vm.finalizar
                                      ? _c(
                                          "b-row",
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { md: "12", xl: "5" } },
                                              [
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                                  },
                                                  [
                                                    _c("tr", [
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            colspan: "4"
                                                          }
                                                        },
                                                        [_vm._v("PEAJES")]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [_vm._v("NRO")]),
                                                      _c("th", [
                                                        _vm._v("PEAJES")
                                                      ]),
                                                      _c("th", [
                                                        _vm._v("PEAJE X EJE")
                                                      ]),
                                                      _c("th", [
                                                        _vm._v("PEAJE LIVIANA")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      urecorrido.peajes,
                                                      function(upeaje, indice) {
                                                        return _c(
                                                          "tr",
                                                          { key: indice },
                                                          [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  indice + 1
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  upeaje.punto
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  upeaje.peaje
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  upeaje.cpeaje
                                                                )
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                staticClass:
                                                  "border-left-primary border-left-3",
                                                attrs: { md: "12", xl: "7" }
                                              },
                                              [
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                                  },
                                                  [
                                                    _c("tr", [
                                                      _c(
                                                        "th",
                                                        {
                                                          attrs: {
                                                            colspan: "6"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "GASTOS DE VIAJE"
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("th", [_vm._v("NRO")]),
                                                      _c("th", [
                                                        _vm._v("TIPO")
                                                      ]),
                                                      _c("th", [
                                                        _vm._v("DETALLE")
                                                      ]),
                                                      _c("th", [
                                                        _vm._v("TOTAL")
                                                      ]),
                                                      _c("th", [
                                                        _vm._v("APLICABLE A")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      urecorrido.gastos,
                                                      function(ugasto, indice) {
                                                        return _c(
                                                          "tr",
                                                          { key: indice },
                                                          [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  indice + 1
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  ugasto.gasto
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  ugasto.detalle
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  ugasto.total
                                                                )
                                                              )
                                                            ]),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  ugasto.aplicable
                                                                )
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    urecorrido.actual && !_vm.finalizar
                                      ? _c(
                                          "table",
                                          {
                                            staticClass:
                                              "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                          },
                                          [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                {
                                                  staticStyle: {
                                                    padding: "7pt",
                                                    "font-size": "14pt"
                                                  },
                                                  attrs: { colspan: "10" }
                                                },
                                                [_vm._v("GASTOS POR OPERADOR")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v("Operador")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v("Unidad")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v("Peaje")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v("Otros Gastos")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v("Total")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(_vm.servicios, function(
                                              uservicio,
                                              indice
                                            ) {
                                              return uservicio.estadoSer !=
                                                "ANULADO"
                                                ? _c(
                                                    "tr",
                                                    { key: indice },
                                                    [
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            colspan: "2"
                                                          }
                                                        },
                                                        [
                                                          uservicio.escoltaSer ==
                                                          1
                                                            ? _c(
                                                                "b-badge",
                                                                {
                                                                  attrs: {
                                                                    variant:
                                                                      "primary"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    " Sup. "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                uservicio.trabajadorPer
                                                              )
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            colspan: "2"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              uservicio.placaVeh
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      uservicio.escoltaSer == 1
                                                        ? _c(
                                                            "td",
                                                            {
                                                              attrs: {
                                                                colspan: "2"
                                                              }
                                                            },
                                                            [
                                                              urecorrido.tcpeaje >
                                                              0
                                                                ? [
                                                                    _vm._v(
                                                                      "S/ " +
                                                                        _vm._s(
                                                                          urecorrido.tcpeaje
                                                                        )
                                                                    )
                                                                  ]
                                                                : [
                                                                    _vm._v(
                                                                      " - "
                                                                    )
                                                                  ]
                                                            ],
                                                            2
                                                          )
                                                        : _c(
                                                            "td",
                                                            {
                                                              attrs: {
                                                                colspan: "2"
                                                              }
                                                            },
                                                            [
                                                              urecorrido.tpeaje *
                                                                (Number(
                                                                  uservicio.vejeVeh
                                                                ) +
                                                                  Number(
                                                                    uservicio.aejeVeh
                                                                  )) >
                                                              0
                                                                ? [
                                                                    _vm._v(
                                                                      "S/ " +
                                                                        _vm._s(
                                                                          (
                                                                            urecorrido.tpeaje *
                                                                            (Number(
                                                                              uservicio.vejeVeh
                                                                            ) +
                                                                              Number(
                                                                                uservicio.aejeVeh
                                                                              ))
                                                                          ).toFixed(
                                                                            2
                                                                          )
                                                                        ) +
                                                                        " "
                                                                    )
                                                                  ]
                                                                : [
                                                                    _vm._v(
                                                                      " - "
                                                                    )
                                                                  ]
                                                            ],
                                                            2
                                                          ),
                                                      _vm._v(" "),
                                                      uservicio.escoltaSer == 1
                                                        ? [
                                                            urecorrido.tsgasto >
                                                            0
                                                              ? _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      colspan:
                                                                        "2"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "S/ " +
                                                                        _vm._s(
                                                                          urecorrido.tsgasto
                                                                        ) +
                                                                        " "
                                                                    )
                                                                  ]
                                                                )
                                                              : _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      colspan:
                                                                        "2"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " - "
                                                                    )
                                                                  ]
                                                                )
                                                          ]
                                                        : [
                                                            urecorrido.togasto >
                                                            0
                                                              ? _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      colspan:
                                                                        "2"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "S/ " +
                                                                        _vm._s(
                                                                          urecorrido.togasto
                                                                        ) +
                                                                        " "
                                                                    )
                                                                  ]
                                                                )
                                                              : _c(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      colspan:
                                                                        "2"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " - "
                                                                    )
                                                                  ]
                                                                )
                                                          ],
                                                      _vm._v(" "),
                                                      uservicio.escoltaSer == 1
                                                        ? [
                                                            _c(
                                                              "td",
                                                              {
                                                                attrs: {
                                                                  colspan: "2"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "S/ " +
                                                                    _vm._s(
                                                                      (
                                                                        urecorrido.tcpeaje +
                                                                        urecorrido.tsgasto
                                                                      ).toFixed(
                                                                        2
                                                                      )
                                                                    ) +
                                                                    " "
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        : [
                                                            _c(
                                                              "td",
                                                              {
                                                                attrs: {
                                                                  colspan: "2"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "S/ " +
                                                                    _vm._s(
                                                                      (
                                                                        urecorrido.tpeaje *
                                                                          (Number(
                                                                            uservicio.vejeVeh
                                                                          ) +
                                                                            Number(
                                                                              uservicio.aejeVeh
                                                                            )) +
                                                                        urecorrido.togasto
                                                                      ).toFixed(
                                                                        2
                                                                      )
                                                                    ) +
                                                                    " "
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                    ],
                                                    2
                                                  )
                                                : _vm._e()
                                            }),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { attrs: { colspan: "12" } },
                                                [
                                                  _c(
                                                    "b-button",
                                                    {
                                                      attrs: {
                                                        variant: "primary",
                                                        size: "sm"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.Procesar()
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("feather-icon", {
                                                        staticClass: "mr-50",
                                                        attrs: {
                                                          icon:
                                                            "CheckCircleIcon"
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
                                                            "Generar Gastos y Asistencia"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  !_vm.finalizar
                                                    ? _c(
                                                        "b-button",
                                                        {
                                                          attrs: {
                                                            variant: "warning",
                                                            size: "sm"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.Omitir(
                                                                urecorrido
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("feather-icon", {
                                                            staticClass:
                                                              "mr-50",
                                                            attrs: {
                                                              icon:
                                                                "AlertTriangleIcon"
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
                                                                "Omitir Gastos y Asistencia"
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            ])
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("hr")
                              ]
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm.convoy.estadoCon != "PROGRAMADO"
                        ? _c(
                            "app-timeline-item",
                            {
                              key: _vm.urecorrido.idRecorrido,
                              attrs: {
                                variant: "danger",
                                icon: "UserCheckIcon"
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
                                  _c("h6", { staticClass: "text-danger" }, [
                                    _vm._v("ASISTENCIA Y ALIMENTACIÓN")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "small",
                                  { staticClass: "text-muted text-bold" },
                                  [
                                    _vm._v(
                                      "* Asistencia Basada en Gastos de Viaje."
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-hover table-bordered text-center table-responsive"
                                },
                                [
                                  _c(
                                    "tr",
                                    [
                                      _c("th", { attrs: { colspan: "2" } }, [
                                        _vm._v("ROUNDTRIP")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.alimentaciones.cabecera,
                                        function(ucabecera, indice) {
                                          return _c(
                                            "td",
                                            {
                                              key: indice,
                                              attrs: { colspan: "2" }
                                            },
                                            [
                                              ucabecera.i
                                                ? _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant: "light-primary"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(ucabecera.n)
                                                      ),
                                                      _c("br"),
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass:
                                                            "text-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(ucabecera.d)
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant: "light-warning"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(ucabecera.n)
                                                      ),
                                                      _c("br"),
                                                      _c("h4", [
                                                        _vm._v(
                                                          _vm._s(ucabecera.d)
                                                        )
                                                      ])
                                                    ]
                                                  )
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                variant: "success",
                                                size: "sm"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.Aplazar()
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: { icon: "PlusIcon" }
                                              }),
                                              _c("br"),
                                              _vm._v(
                                                "\n                                        Extender\n                                    "
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.servicios, function(
                                    uservicio,
                                    indice
                                  ) {
                                    return uservicio.estadoSer != "ANULADO"
                                      ? _c(
                                          "tr",
                                          { key: indice },
                                          [
                                            _c(
                                              "td",
                                              { attrs: { colspan: "2" } },
                                              [
                                                uservicio.escoltaSer == 1
                                                  ? _c(
                                                      "b-badge",
                                                      {
                                                        attrs: {
                                                          variant: "primary"
                                                        }
                                                      },
                                                      [_vm._v(" Sup. ")]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      uservicio.trabajadorPer
                                                    )
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _vm.alimentaciones != null &&
                                            _vm.alimentaciones["cuerpo"] !=
                                              undefined &&
                                            _vm.alimentaciones["cuerpo"][
                                              "p" +
                                                uservicio["Persona_idPersona"]
                                            ] != undefined &&
                                            _vm.alimentaciones["cuerpo"][
                                              "p" +
                                                uservicio["Persona_idPersona"]
                                            ] != null &&
                                            _vm.alimentaciones["cuerpo"][
                                              "p" +
                                                uservicio["Persona_idPersona"]
                                            ] != {}
                                              ? _vm._l(
                                                  _vm.alimentaciones["cuerpo"][
                                                    "p" +
                                                      uservicio[
                                                        "Persona_idPersona"
                                                      ]
                                                  ]["f"],
                                                  function(udia, indice) {
                                                    return _c(
                                                      "td",
                                                      {
                                                        key: indice,
                                                        attrs: { colspan: "2" }
                                                      },
                                                      [
                                                        udia.a == "A"
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
                                                                  "\n                                        " +
                                                                    _vm._s(
                                                                      udia.a
                                                                    )
                                                                ),
                                                                _c("br"),
                                                                _vm._v(" "),
                                                                udia.m == "0"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-warning",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m = null
                                                                            _vm.extraAlimentacion--
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "CheckCircleIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m == -1
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        staticClass:
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-secondary",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "AlertOctagonIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m !=
                                                                      null &&
                                                                    udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "success"
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
                                                                  : udia.m !=
                                                                      null &&
                                                                    !udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "danger"
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
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-dark",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m =
                                                                              "0"
                                                                            _vm.extraAlimentacion++
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "PlusIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                              ],
                                                              1
                                                            )
                                                          : udia.a != null
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
                                                                  "\n                                        " +
                                                                    _vm._s(
                                                                      udia.a
                                                                    )
                                                                ),
                                                                _c("br"),
                                                                _vm._v(" "),
                                                                udia.m == "0"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-warning",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m = null
                                                                            _vm.extraAlimentacion--
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "CheckCircleIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m == -1
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        staticClass:
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-secondary",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "AlertOctagonIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m !=
                                                                      null &&
                                                                    udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "success"
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
                                                                  : udia.m !=
                                                                      null &&
                                                                    !udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "danger"
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
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-dark",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m =
                                                                              "0"
                                                                            _vm.extraAlimentacion++
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "PlusIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                              ],
                                                              1
                                                            )
                                                          : _c(
                                                              "b-badge",
                                                              {
                                                                attrs: {
                                                                  variant:
                                                                    "light-secondary"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                        -"
                                                                ),
                                                                _c("br"),
                                                                _vm._v(" "),
                                                                udia.m == "0"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-warning",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m = null
                                                                            _vm.extraAlimentacion--
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "CheckCircleIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m == -1
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        staticClass:
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-secondary",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "AlertOctagonIcon"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : udia.m !=
                                                                      null &&
                                                                    udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "success"
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
                                                                  : udia.m !=
                                                                      null &&
                                                                    !udia.p
                                                                  ? _c(
                                                                      "b-badge",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "danger"
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
                                                                          "btn-icon",
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-dark",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            udia.m =
                                                                              "0"
                                                                            _vm.extraAlimentacion++
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "feather-icon",
                                                                          {
                                                                            attrs: {
                                                                              icon:
                                                                                "PlusIcon"
                                                                            }
                                                                          }
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
                                                  }
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            indice == 0
                                              ? _c(
                                                  "td",
                                                  {
                                                    attrs: {
                                                      rowspan:
                                                        _vm.servicios.length
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-button",
                                                      {
                                                        attrs: {
                                                          variant:
                                                            "outline-primary",
                                                          size: "sm"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.Alimentaciones(
                                                              35
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("h4", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.extraAlimentacion
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        Solicitar"
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                                        Alimentación\n                                        Ruta Sur\n                                        "
                                                        ),
                                                        _c(
                                                          "h4",
                                                          {
                                                            staticClass:
                                                              "text-bold"
                                                          },
                                                          [_vm._v("S/.35.00")]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-button",
                                                      {
                                                        attrs: {
                                                          variant:
                                                            "outline-warning",
                                                          size: "sm"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.Alimentaciones(
                                                              40
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("h4", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.extraAlimentacion
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        Solicitar"
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          "\n                                        Alimentación\n                                        Ruta Centro\n                                        "
                                                        ),
                                                        _c(
                                                          "h4",
                                                          {
                                                            staticClass:
                                                              "text-bold"
                                                          },
                                                          [_vm._v("S/.40.00")]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.convoy.estadoCon != "PROGRAMADO"
                        ? _c(
                            "app-timeline-item",
                            {
                              key: _vm.urecorrido.idRecorrido,
                              attrs: { variant: "info", icon: "InfoIcon" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                                },
                                [
                                  _c("h6", { staticClass: "text-info" }, [
                                    _vm._v("GASTOS DE VIAJE AUTOMÁTICOS")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c(
                                    "small",
                                    { staticClass: "text-muted text-bold" },
                                    [_vm._v("* Gastos PRE - Aprobados.")]
                                  ),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _vm._l(_vm.montos, function(umonto, nro) {
                                    return [
                                      umonto.length > 0 &&
                                      umonto[0].adicionalMon != 1
                                        ? _c(
                                            "app-collapse",
                                            [
                                              _c(
                                                "app-collapse-item",
                                                {
                                                  attrs: {
                                                    title:
                                                      "GRUPO DE GASTOS NRO " +
                                                      (nro + 1) +
                                                      ": DEPÓSITO " +
                                                      umonto[0].faplicacionMon
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    {
                                                      staticClass:
                                                        "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center table-responsive"
                                                    },
                                                    [
                                                      _c("tr", [
                                                        _c("th", [
                                                          _vm._v("ID")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Trabajador")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Concepto")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Monto")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Detalle")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Tipo")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Estado")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("th", [
                                                          _vm._v("Acción")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm._l(umonto, function(
                                                        fila
                                                      ) {
                                                        return [
                                                          _c("tr", [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  fila.idMonto
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  fila.trabajadorPer
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  fila.concepto
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                "S/ " +
                                                                  _vm._s(
                                                                    fila.totalMon
                                                                  )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  fila.detalleMon
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  fila.disposicionMon
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                fila.estadoMon ==
                                                                "APROBADO"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            value:
                                                                              fila.fsolicitudMon,
                                                                            expression:
                                                                              "fila.fsolicitudMon",
                                                                            modifiers: {
                                                                              hover: true
                                                                            }
                                                                          },
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover.v-dark",
                                                                            modifiers: {
                                                                              hover: true,
                                                                              "v-dark": true
                                                                            }
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-success",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " " +
                                                                            _vm._s(
                                                                              fila.estadoMon
                                                                            )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : fila.estadoMon ==
                                                                    "ANULADO"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            value:
                                                                              fila.fsolicitudMon,
                                                                            expression:
                                                                              "fila.fsolicitudMon",
                                                                            modifiers: {
                                                                              hover: true
                                                                            }
                                                                          },
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover.v-dark",
                                                                            modifiers: {
                                                                              hover: true,
                                                                              "v-dark": true
                                                                            }
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-danger",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " " +
                                                                            _vm._s(
                                                                              fila.estadoMon
                                                                            )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : fila.estadoMon ==
                                                                    "DEPOSITO"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            value:
                                                                              fila.fsolicitudMon,
                                                                            expression:
                                                                              "fila.fsolicitudMon",
                                                                            modifiers: {
                                                                              hover: true
                                                                            }
                                                                          },
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover.v-dark",
                                                                            modifiers: {
                                                                              hover: true,
                                                                              "v-dark": true
                                                                            }
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-info",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " " +
                                                                            _vm._s(
                                                                              fila.estadoMon
                                                                            )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : fila.estadoMon ==
                                                                    "RENDIDO"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            value:
                                                                              fila.fsolicitudMon,
                                                                            expression:
                                                                              "fila.fsolicitudMon",
                                                                            modifiers: {
                                                                              hover: true
                                                                            }
                                                                          },
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover.v-dark",
                                                                            modifiers: {
                                                                              hover: true,
                                                                              "v-dark": true
                                                                            }
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-info",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " " +
                                                                            _vm._s(
                                                                              fila.estadoMon
                                                                            )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _c(
                                                                      "b-button",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover",
                                                                            value:
                                                                              fila.fsolicitudMon,
                                                                            expression:
                                                                              "fila.fsolicitudMon",
                                                                            modifiers: {
                                                                              hover: true
                                                                            }
                                                                          },
                                                                          {
                                                                            name:
                                                                              "b-tooltip",
                                                                            rawName:
                                                                              "v-b-tooltip.hover.v-dark",
                                                                            modifiers: {
                                                                              hover: true,
                                                                              "v-dark": true
                                                                            }
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          variant:
                                                                            "flat-dark",
                                                                          size:
                                                                            "sm"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " " +
                                                                            _vm._s(
                                                                              fila.estadoMon
                                                                            )
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
                                                                fila.estadoMon ==
                                                                "APROBADO"
                                                                  ? _c(
                                                                      "b-button",
                                                                      {
                                                                        attrs: {
                                                                          variant:
                                                                            "danger",
                                                                          size:
                                                                            "sm"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.AnularM(
                                                                              fila
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          " ANULAR"
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _vm._e()
                                                              ],
                                                              1
                                                            )
                                                          ])
                                                        ]
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
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("hr")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.convoy.estadoCon != "PROGRAMADO"
                        ? _c(
                            "app-timeline-item",
                            {
                              key: _vm.urecorrido.idRecorrido,
                              attrs: { variant: "warning", icon: "InfoIcon" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
                                },
                                [
                                  _c("h6", { staticClass: "text-warning" }, [
                                    _vm._v("GASTOS DE VIAJE ADICIONALES")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "small",
                                  { staticClass: "text-muted text-bold" },
                                  [
                                    _vm._v(
                                      "* Los Gastos Adicionales deben ser Aprobados para su Deposito."
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                  },
                                  [
                                    _c("tr", [
                                      _c("th", { attrs: { width: "5%" } }, [
                                        _vm._v("ID")
                                      ]),
                                      _c("th", { attrs: { width: "20%" } }, [
                                        _vm._v("Trabajador")
                                      ]),
                                      _c("th", { attrs: { width: "15%" } }, [
                                        _vm._v("Concepto")
                                      ]),
                                      _c("th", { attrs: { width: "15%" } }, [
                                        _vm._v("Evento/Causa")
                                      ]),
                                      _c("th", { attrs: { width: "5%" } }, [
                                        _vm._v("Monto")
                                      ]),
                                      _c("th", { attrs: { width: "24%" } }, [
                                        _vm._v("Detalle")
                                      ]),
                                      _c("th", { attrs: { width: "8%" } }, [
                                        _vm._v("Tipo")
                                      ]),
                                      _c("th", { attrs: { width: "8%" } }, [
                                        _vm._v("Estado")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(
                                      _vm.montos[_vm.montos.length - 1],
                                      function(umonto, indice) {
                                        return _c(
                                          "tr",
                                          { key: umonto.idMonto },
                                          [
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.idMonto) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.trabajadorPer) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.concepto) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.nombreEve) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " S/ " +
                                                  _vm._s(umonto.totalMon) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.detalleMon) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    umonto.disposicionMon
                                                  ) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(umonto.estadoMon) +
                                                  " "
                                              )
                                            ])
                                          ]
                                        )
                                      }
                                    )
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table b-table table-hover table-bordered table-sm b-table-no-border-collapse text-center"
                                  },
                                  [
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { colspan: "2" } },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              transform: "scale(0.8)",
                                              flex: "1",
                                              width: "100%"
                                            },
                                            attrs: {
                                              label: "trabajadorPer",
                                              options: _vm.servicios,
                                              multiple: ""
                                            },
                                            model: {
                                              value: _vm.monto.servicio,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "servicio",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.servicio"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              transform: "scale(0.8)",
                                              flex: "1"
                                            },
                                            attrs: {
                                              label: "valorDat",
                                              options: _vm.yconceptos
                                            },
                                            model: {
                                              value: _vm.monto.concepto,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "concepto",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.concepto"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              transform: "scale(0.8)",
                                              flex: "1"
                                            },
                                            attrs: {
                                              label: "nombreEve",
                                              options: _vm.eventos
                                            },
                                            model: {
                                              value: _vm.monto.evento,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "evento",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.evento"
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
                                            staticClass: "form-control",
                                            staticStyle: {
                                              transform: "scale(0.8)"
                                            },
                                            attrs: {
                                              raw: false,
                                              options: {
                                                numeral: true,
                                                numeralThousandsGroupStyle:
                                                  "none"
                                              }
                                            },
                                            model: {
                                              value: _vm.monto.total,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "total",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.total"
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
                                              value: _vm.monto.detalle,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "detalle",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.detalle"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("b-form-select", {
                                            attrs: {
                                              options: [
                                                /*{value: 'CAJA CHICA', text: 'CAJA CHICA'},*/ {
                                                  value: "DEPOSITO",
                                                  text: "DEPOSITO"
                                                }
                                              ],
                                              size: "sm"
                                            },
                                            model: {
                                              value: _vm.monto.disposicion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.monto,
                                                  "disposicion",
                                                  $$v
                                                )
                                              },
                                              expression: "monto.disposicion"
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
                                              staticClass:
                                                "btn-icon rounded-circle btn-sm",
                                              attrs: {
                                                variant: "flat-success"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.GuardarMonto()
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                attrs: {
                                                  icon: "CheckCircleIcon"
                                                }
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
                              ]),
                              _vm._v(" "),
                              _c("hr")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.convoy.estadoCon != "PROGRAMADO" && _vm.finalizar
                        ? _c(
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
                              _c("p", [
                                _vm._v(
                                  "La fecha de Termino está Definida en el Apartado Asistencia y Alimentación."
                                )
                              ])
                            ]
                          )
                        : _vm._e()
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
          _c("b-overlay", { attrs: { show: _vm.showLoading, "no-wrap": "" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-reemplazo",
            "header-bg-variant": _vm.headerBgVariant,
            "header-text-variant": _vm.headerTextVariant,
            title: "REASIGNAR RECURSOS",
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
                              _vm.showModalReemplazo = false
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
                              on: {
                                click: function($event) {
                                  return _vm.Reasignar()
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
                                _vm._v("Reasignar")
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
            value: _vm.showModalReemplazo,
            callback: function($$v) {
              _vm.showModalReemplazo = $$v
            },
            expression: "showModalReemplazo"
          }
        },
        [
          _c(
            "b-tabs",
            {
              attrs: { "content-class": "mt-2", justified: "" },
              model: {
                value: _vm.tabIndex,
                callback: function($$v) {
                  _vm.tabIndex = $$v
                },
                expression: "tabIndex"
              }
            },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "align-middle text-center",
                      attrs: { md: "12", xl: "12" }
                    },
                    [
                      _c(
                        "table",
                        { staticClass: "table table-bordered table-condensed" },
                        [
                          _c("tr", [
                            _c(
                              "td",
                              { attrs: { colspan: "2" } },
                              [
                                _vm.reemplazo.escoltaSer == "1"
                                  ? _c(
                                      "b-button",
                                      {
                                        staticStyle: { "margin-top": "2px" },
                                        attrs: { variant: "primary" }
                                      },
                                      [_vm._v("Escolta")]
                                    )
                                  : _c(
                                      "b-button",
                                      {
                                        staticStyle: { "margin-top": "2px" },
                                        attrs: { variant: "secondary" }
                                      },
                                      [_vm._v("Operador")]
                                    )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("ANTERIOR")]),
                            _c("th", [_vm._v("NUEVO")])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "2" } }, [
                              _c("span", { staticClass: "text-primary" }, [
                                _vm._v("Fecha - Hora Cambio")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              [
                                _c("b-form-datepicker", {
                                  staticClass: "form-control",
                                  attrs: {
                                    "date-format-options": {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "numeric"
                                    },
                                    locale: "es",
                                    min: _vm.convoy.finicioCon,
                                    max: _vm.convoy.fterminoCon
                                  },
                                  model: {
                                    value: _vm.reemplazo.fcambioSer,
                                    callback: function($$v) {
                                      _vm.$set(_vm.reemplazo, "fcambioSer", $$v)
                                    },
                                    expression: "reemplazo.fcambioSer"
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
                                  staticClass: "form-control",
                                  attrs: {
                                    raw: false,
                                    options: {
                                      time: true,
                                      timePattern: ["h", "m"]
                                    },
                                    placeholder: "hh:mm"
                                  },
                                  model: {
                                    value: _vm.reemplazo.hcambioSer,
                                    callback: function($$v) {
                                      _vm.$set(_vm.reemplazo, "hcambioSer", $$v)
                                    },
                                    expression: "reemplazo.hcambioSer"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "2" } }, [
                              _c("span", { staticClass: "text-primary" }, [
                                _vm._v("Operador")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _vm._v(_vm._s(_vm.reemplazo.trabajadorPer))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("v-select", {
                                  staticStyle: { flex: "1" },
                                  attrs: {
                                    label: "trabajadorPer",
                                    options: _vm.personas
                                  },
                                  on: {
                                    input: function($event) {
                                      _vm.reemplazo.idReemplazop =
                                        _vm.yreemplazop.idPersona
                                    }
                                  },
                                  model: {
                                    value: _vm.yreemplazop,
                                    callback: function($$v) {
                                      _vm.yreemplazop = $$v
                                    },
                                    expression: "yreemplazop"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "2" } }, [
                              _c("span", { staticClass: "text-primary" }, [
                                _vm._v("Vehículo")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.reemplazo.placaVeh))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c("v-select", {
                                  staticStyle: { flex: "1" },
                                  attrs: {
                                    label: "placaVeh",
                                    options: _vm.vehiculos
                                  },
                                  on: {
                                    input: function($event) {
                                      _vm.reemplazo.idReemplazov =
                                        _vm.yreemplazov.idVehiculo
                                    }
                                  },
                                  model: {
                                    value: _vm.yreemplazov,
                                    callback: function($$v) {
                                      _vm.yreemplazov = $$v
                                    },
                                    expression: "yreemplazov"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.reemplazo.escoltaSer == "0"
                            ? [
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "2" } }, [
                                    _c(
                                      "span",
                                      { staticClass: "text-primary" },
                                      [_vm._v("Acople")]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.reemplazo.acopleVeh))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c("v-select", {
                                        staticStyle: { flex: "1" },
                                        attrs: {
                                          label: "placaVeh",
                                          options: _vm.vehiculos
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.reemplazo.idReemplazoa =
                                              _vm.yreemplazoa.idVehiculo
                                          }
                                        },
                                        model: {
                                          value: _vm.yreemplazoa,
                                          callback: function($$v) {
                                            _vm.yreemplazoa = $$v
                                          },
                                          expression: "yreemplazoa"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ]
                            : _vm._e()
                        ],
                        2
                      )
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
            id: "modal-guia",
            "header-bg-variant": _vm.headerBgVariant,
            "header-text-variant": _vm.headerTextVariant,
            title: "GUÍA DE REMISIÓN TRANSPORTISTA",
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
                              _vm.showModalReemplazo = false
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
                              on: {
                                click: function($event) {
                                  return _vm.GenerarGRT()
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
                                _vm._v("Generar GRT")
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
            value: _vm.showModalGuia,
            callback: function($$v) {
              _vm.showModalGuia = $$v
            },
            expression: "showModalGuia"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "6" } },
                [
                  _c("hr", { staticClass: "invoice-spacing primary" }),
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
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Cliente: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.clienteExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Ruta ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.tipoCon) + ": ")
                  ]),
                  _c("span", { staticClass: "text-primary" }, [
                    _vm._v(
                      _vm._s(_vm.convoy.origenCon) +
                        " - " +
                        _vm._s(_vm.convoy.pasoCon) +
                        " - " +
                        _vm._s(_vm.convoy.destinoCon)
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Roundtrip: ")]),
                  _c("span", { staticClass: "text-primary" }, [
                    _vm._v(_vm._s(_vm.convoy.roundtripCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Tipo Acople: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.tvehiculoCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Tipo de Carga: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.cargaCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Unidad de Carga: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(
                      _vm._s(_vm.convoy.unidadCon) +
                        " - " +
                        _vm._s(_vm.convoy.unidadSunatCon)
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _vm.convoy.finicioCon != null
                    ? [
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Fecha de Inicio: ")]),
                        _c(
                          "span",
                          { staticClass: " text-success font-weight-bolder" },
                          [_vm._v(_vm._s(_vm.convoy.finicioCon))]
                        ),
                        _c("br")
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.convoy.fterminoCon != null
                    ? [
                        _c("feather-icon", {
                          staticClass: "text-primary",
                          attrs: { icon: "ChevronRightIcon" }
                        }),
                        _c("span", [_vm._v("Fecha de Termino: ")]),
                        _c(
                          "span",
                          { staticClass: " text-warning font-weight-bolder" },
                          [_vm._v(_vm._s(_vm.convoy.fterminoCon))]
                        ),
                        _c("br")
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br")
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "border-left-primary border-left-3",
                  attrs: { md: "6", xl: "6" }
                },
                [
                  _c("hr", { staticClass: "invoice-spacing primary" }),
                  _vm._v(" "),
                  _c(
                    "h5",
                    { staticClass: "text-primary" },
                    [
                      _c("feather-icon", { attrs: { icon: "TruckIcon" } }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Información de la Guía")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "invoice-spacing primary" }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Serie: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.serieCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Remitente: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.remitenteExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Partida: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(
                      " " +
                        _vm._s(_vm.convoy.ubigeopCon) +
                        " - " +
                        _vm._s(_vm.convoy.partidaCon)
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Destinatario: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.destinatarioExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Llegada: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(
                      " " +
                        _vm._s(_vm.convoy.ubigeolCon) +
                        " - " +
                        _vm._s(_vm.convoy.llegadaCon)
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "invoice-spacing warning" }),
          _vm._v(" "),
          _c(
            "h5",
            { staticClass: "text-warning" },
            [
              _c("feather-icon", { attrs: { icon: "ArrowRightIcon" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Detalle Guía Remisión Remitente")])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "invoice-spacing warning" }),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Serie GRR" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: _vm.yescolta },
                        model: {
                          value: _vm.guia.grrserie,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grrserie", $$v)
                          },
                          expression: "guia.grrserie"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nro GRR" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: _vm.yescolta },
                        model: {
                          value: _vm.guia.grrnro,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grrnro", $$v)
                          },
                          expression: "guia.grrnro"
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
          _c("hr", { staticClass: "invoice-spacing primary" }),
          _vm._v(" "),
          _c(
            "h5",
            { staticClass: "text-primary" },
            [
              _c("feather-icon", { attrs: { icon: "ArrowRightIcon" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Detalle Guía Remisión Transportista")])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "invoice-spacing-primary" }),
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
                    { attrs: { label: "Operador" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.trabajadorPer,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "trabajadorPer", $$v)
                          },
                          expression: "servicio.trabajadorPer"
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
                { attrs: { md: "3", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Placa" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.placaVeh,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "placaVeh", $$v)
                          },
                          expression: "servicio.placaVeh"
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
                { attrs: { md: "3", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Acople" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.acopleVeh,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "acopleVeh", $$v)
                          },
                          expression: "servicio.acopleVeh"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "F. Inicio Traslado" } },
                    [
                      _c("b-form-datepicker", {
                        staticClass: "form-control",
                        attrs: {
                          "date-format-options": {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric"
                          },
                          locale: "es"
                        },
                        model: {
                          value: _vm.guia.grttraslado,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grttraslado", $$v)
                          },
                          expression: "guia.grttraslado"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [
                        _vm._v("Peso de Carga: "),
                        _c("span", { staticClass: "text-primary text-bold" }, [
                          _vm._v("KG.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        model: {
                          value: _vm.guia.pesoSer,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "pesoSer", $$v)
                          },
                          expression: "guia.pesoSer"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    [
                      _c("label", [
                        _vm._v("Cantidad Cargada: "),
                        _c("span", { staticClass: "text-primary text-bold" }, [
                          _vm._v(_vm._s(_vm.convoy.unidadSunatCon))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-form-input", {
                        model: {
                          value: _vm.servicio.cargaSer,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "cargaSer", $$v)
                          },
                          expression: "servicio.cargaSer"
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
                    { attrs: { label: "Operador Reten" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "trabajadorPer",
                          options: _vm.personas
                        },
                        model: {
                          value: _vm.guia.reten,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "reten", $$v)
                          },
                          expression: "guia.reten"
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
                    { attrs: { label: "Observación" } },
                    [
                      _c("b-form-input", {
                        model: {
                          value: _vm.guia.grtobservacion,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grtobservacion", $$v)
                          },
                          expression: "guia.grtobservacion"
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
            id: "modal-guiaevento",
            "header-bg-variant": _vm.headerBgVariant,
            "header-text-variant": _vm.headerTextVariant,
            title: "GUÍA DE REMISIÓN TRANSPORTISTA",
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
                              _vm.showModalReemplazo = false
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
                              on: {
                                click: function($event) {
                                  return _vm.Reasignar()
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
                                _vm._v("Generar GRT")
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
            value: _vm.showModalGuiaEvento,
            callback: function($$v) {
              _vm.showModalGuiaEvento = $$v
            },
            expression: "showModalGuiaEvento"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12", xl: "12" } },
                [
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Cliente: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.clienteExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Ruta ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.tipoCon) + ": ")
                  ]),
                  _c("span", { staticClass: "text-primary" }, [
                    _vm._v(
                      _vm._s(_vm.convoy.origenCon) +
                        " - " +
                        _vm._s(_vm.convoy.pasoCon) +
                        " - " +
                        _vm._s(_vm.convoy.destinoCon)
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Remitente: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.remitenteExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Punto de Partida: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(" " + _vm._s(_vm.convoy.partidaCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Destinatario: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.destinatarioExt))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v(" Punto de Llegada: ")]),
                  _c("span", { staticClass: "font-weight-bolder" }, [
                    _vm._v(_vm._s(_vm.convoy.llegadaCon))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Fecha de Inicio: ")]),
                  _c(
                    "span",
                    { staticClass: " text-success font-weight-bolder" },
                    [_vm._v(_vm._s(_vm.convoy.finicioCon))]
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "text-primary",
                    attrs: { icon: "ChevronRightIcon" }
                  }),
                  _c("span", [_vm._v("Fecha de Termino: ")]),
                  _c(
                    "span",
                    { staticClass: " text-warning font-weight-bolder" },
                    [_vm._v(_vm._s(_vm.convoy.fterminoCon))]
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c("br")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "h5",
            { staticClass: "text-warning" },
            [
              _c("feather-icon", { attrs: { icon: "ArrowRightIcon" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Detalle Documento de Referencia")])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "invoice-spacing warning" }),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Serie" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: _vm.yescolta },
                        model: {
                          value: _vm.guia.grrserie,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grrserie", $$v)
                          },
                          expression: "guia.grrserie"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Nro" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: _vm.yescolta },
                        model: {
                          value: _vm.guia.grrnro,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grrnro", $$v)
                          },
                          expression: "guia.grrnro"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Fecha Emisión" } },
                    [
                      _c("b-form-datepicker", {
                        staticClass: "form-control",
                        attrs: {
                          "date-format-options": {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric"
                          },
                          locale: "es"
                        },
                        model: {
                          value: _vm.guia.grremision,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grremision", $$v)
                          },
                          expression: "guia.grremision"
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
              _c("feather-icon", { attrs: { icon: "ArrowRightIcon" } }),
              _vm._v(" "),
              _c("span", [_vm._v("Detalle Guía Remisión Transportista")])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "invoice-spacing-primary" }),
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
                    { attrs: { label: "Operador" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.trabajadorPer,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "trabajadorPer", $$v)
                          },
                          expression: "servicio.trabajadorPer"
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
                { attrs: { md: "3", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Placa" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.placaVeh,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "placaVeh", $$v)
                          },
                          expression: "servicio.placaVeh"
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
                { attrs: { md: "3", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Acople" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.servicio.acopleVeh,
                          callback: function($$v) {
                            _vm.$set(_vm.servicio, "acopleVeh", $$v)
                          },
                          expression: "servicio.acopleVeh"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Serie" } },
                    [
                      _c("b-form-input", {
                        model: {
                          value: _vm.guia.grtserie,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grtserie", $$v)
                          },
                          expression: "guia.grtserie"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Unidad de Carga" } },
                    [
                      _c("b-form-input", {
                        model: {
                          value: _vm.guia.grtunidad,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grtunidad", $$v)
                          },
                          expression: "guia.grtunidad"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Cantidad Cargada" } },
                    [
                      _c("b-form-input", {
                        model: {
                          value: _vm.guia.grtcantidad,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grtcantidad", $$v)
                          },
                          expression: "guia.grtcantidad"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "F. Inicio Traslado" } },
                    [
                      _c("b-form-datepicker", {
                        staticClass: "form-control",
                        attrs: {
                          "date-format-options": {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric"
                          },
                          locale: "es"
                        },
                        model: {
                          value: _vm.guia.grttraslado,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grttraslado", $$v)
                          },
                          expression: "guia.grttraslado"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Observación" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: _vm.yescolta },
                        model: {
                          value: _vm.guia.grtobservacion,
                          callback: function($$v) {
                            _vm.$set(_vm.guia, "grtobservacion", $$v)
                          },
                          expression: "guia.grtobservacion"
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
            id: "modal-alimentacion",
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
              key: "title",
              fn: function() {
                return [
                  _c("feather-icon", { attrs: { icon: "TruckIcon" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Datos del Convoy")])
                ]
              },
              proxy: true
            },
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
                              _vm.showModalProgramar = false
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
            value: _vm.showModalAlimentacion,
            callback: function($$v) {
              _vm.showModalAlimentacion = $$v
            },
            expression: "showModalAlimentacion"
          }
        },
        [
          _vm._v(" "),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "8", xl: "8" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Operador" } },
                    [
                      _c("v-select", {
                        staticStyle: { flex: "1" },
                        attrs: {
                          label: "trabajadorPer",
                          options: _vm.personas,
                          multiple: ""
                        },
                        model: {
                          value: _vm.yoperadores,
                          callback: function($$v) {
                            _vm.yoperadores = $$v
                          },
                          expression: "yoperadores"
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
                { attrs: { md: "4", xl: "4" } },
                [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "success", size: "sm" },
                      on: {
                        click: function($event) {
                          return _vm.AlimentacionLibres()
                        }
                      }
                    },
                    [
                      _c("feather-icon", { attrs: { icon: "SendIcon" } }),
                      _c("br"),
                      _vm._v("Cargar")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              Object.keys(_vm.alimentaciones).length > 0
                ? _c("b-col", [
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-bordered text-center table-responsive"
                      },
                      [
                        _c(
                          "tr",
                          [
                            _c("th", { attrs: { colspan: "2" } }),
                            _vm._v(" "),
                            _vm._l(_vm.alimentaciones.cabecera, function(
                              ucabecera,
                              indice
                            ) {
                              return _c(
                                "td",
                                { key: indice, attrs: { colspan: "2" } },
                                [
                                  ucabecera.i
                                    ? _c(
                                        "b-badge",
                                        { attrs: { variant: "light-primary" } },
                                        [
                                          _vm._v(_vm._s(ucabecera.n)),
                                          _c("br"),
                                          _c(
                                            "h4",
                                            { staticClass: "text-bold" },
                                            [_vm._v(_vm._s(ucabecera.d))]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "b-badge",
                                        { attrs: { variant: "light-warning" } },
                                        [
                                          _vm._v(_vm._s(ucabecera.n)),
                                          _c("br"),
                                          _c("h4", [
                                            _vm._v(_vm._s(ucabecera.d))
                                          ])
                                        ]
                                      )
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _c("td", [
                              _c("h4", { staticClass: "text-primary" }, [
                                _vm._v(_vm._s(_vm.extraAlimentacion))
                              ]),
                              _vm._v(
                                "\n                                    Seleccionados\n                                "
                              )
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.alimentaciones.cuerpo, function(
                          ucuerpo,
                          indice,
                          nro
                        ) {
                          return _c(
                            "tr",
                            { key: indice, attrs: { colspan: "2" } },
                            [
                              _c("td", { attrs: { colspan: "2" } }, [
                                _vm._v(_vm._s(ucuerpo.p))
                              ]),
                              _vm._v(" "),
                              _vm._l(ucuerpo.f, function(udia, indice) {
                                return _c(
                                  "td",
                                  { attrs: { colspan: "2" } },
                                  [
                                    udia.a == "A"
                                      ? _c(
                                          "b-badge",
                                          {
                                            attrs: { variant: "light-primary" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(udia.a)
                                            ),
                                            _c("br"),
                                            _vm._v(" "),
                                            udia.m == "0"
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "flat-warning",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = null
                                                        _vm.extraAlimentacion--
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "CheckCircleIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m == -1
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-secondary",
                                                      size: "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "AlertOctagonIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m != null && udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "success"
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
                                              : udia.m != null && !udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: { variant: "danger" }
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
                                              : _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-dark",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = "0"
                                                        _vm.extraAlimentacion++
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "PlusIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                          ],
                                          1
                                        )
                                      : udia.a != null
                                      ? _c(
                                          "b-badge",
                                          {
                                            attrs: { variant: "light-warning" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(udia.a)
                                            ),
                                            _c("br"),
                                            _vm._v(" "),
                                            udia.m == "0"
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "flat-warning",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = null
                                                        _vm.extraAlimentacion--
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "CheckCircleIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m == -1
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-secondary",
                                                      size: "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "AlertOctagonIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m != null && udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "success"
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
                                              : udia.m != null && !udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: { variant: "danger" }
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
                                              : _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-dark",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = "0"
                                                        _vm.extraAlimentacion++
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "PlusIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                          ],
                                          1
                                        )
                                      : _c(
                                          "b-badge",
                                          {
                                            attrs: {
                                              variant: "light-secondary"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        -"
                                            ),
                                            _c("br"),
                                            _vm._v(" "),
                                            udia.m == "0"
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "flat-warning",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = null
                                                        _vm.extraAlimentacion--
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "CheckCircleIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m == -1
                                              ? _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-secondary",
                                                      size: "sm"
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "AlertOctagonIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : udia.m != null && udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "success"
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
                                              : udia.m != null && !udia.p
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: { variant: "danger" }
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
                                              : _c(
                                                  "b-button",
                                                  {
                                                    staticClass: "btn-icon",
                                                    attrs: {
                                                      variant: "flat-dark",
                                                      size: "sm"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        udia.m = "0"
                                                        _vm.extraAlimentacion++
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "PlusIcon"
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
                              }),
                              _vm._v(" "),
                              nro == 0
                                ? _c(
                                    "td",
                                    {
                                      attrs: {
                                        rowspan: Object.keys(
                                          _vm.alimentaciones.cuerpo
                                        ).length
                                      }
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "outline-primary",
                                            size: "sm"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.AlimentacionesLibres(
                                                35
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Solicitar"
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Alimentación "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Ruta Sur\n                                        "
                                          ),
                                          _c(
                                            "h4",
                                            { staticClass: "text-bold" },
                                            [_vm._v("S/.35.00")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "outline-warning",
                                            size: "sm"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.AlimentacionesLibres(
                                                40
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Solicitar"
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Alimentación "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Ruta Centro\n                                        "
                                          ),
                                          _c(
                                            "h4",
                                            { staticClass: "text-bold" },
                                            [_vm._v("S/.40.00")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            2
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e()
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

/***/ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Transaccion/Convoy.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Convoy.vue?vue&type=template&id=4fc1e137&scoped=true& */ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true&");
/* harmony import */ var _Convoy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Convoy.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Convoy.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& */ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Convoy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fc1e137",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Transporte/Transaccion/Convoy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=style&index=1&id=4fc1e137&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_style_index_1_id_4fc1e137_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Convoy.vue?vue&type=template&id=4fc1e137&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Transaccion/Convoy.vue?vue&type=template&id=4fc1e137&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Convoy_vue_vue_type_template_id_4fc1e137_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);