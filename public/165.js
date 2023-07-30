(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BToast"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupPrepend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_3__["VueGoodTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      /**************************** elementos de ux ****************************/
      dir: false,
      pageLength: 10,
      searchTerm: '',
      tabIndex: 1,

      /**************************** tabla ****************************/
      tcolumnas: [{
        label: 'CLIENTE',
        field: 'cliente'
      }, {
        label: 'FECHA SALIDA',
        field: 'finicioCon'
      }, {
        label: 'PUNTO PARTIDA',
        field: 'partida'
      }, {
        label: 'NOMBRE DEL OPERADOR',
        field: 'trabajadorPer'
      }, {
        label: 'TRACTO',
        field: 'placaVeh'
      }, {
        label: 'CARRETA',
        field: 'carreta'
      }, {
        label: 'DESCRIPCION CARGA',
        field: 'cargaCon'
      }, {
        label: 'ORIGEN',
        field: 'origenCon'
      }, {
        label: 'DESTINO',
        field: 'destinoCon'
      }, {
        label: 'FECHA TERMINO',
        field: 'fterminoCon'
      }, {
        label: 'ROUND TRIP',
        field: 'roundtripCon'
      }],

      /**************************** modal ****************************/
      showLoading: false,
      boton: false,

      /**************************** entorno ****************************/
      servicios: [],
      clientes: [],
      fechaInicio: "",
      fechaFin: "",
      estado: "",
      idExterno: "",
      estados: [{
        value: 'ANULADO',
        text: 'ANULADO'
      }, {
        value: 'PROGRAMADO',
        text: 'PROGRAMADO'
      }, {
        value: 'RUTA',
        text: 'RUTA'
      }, {
        value: 'TERMINADO',
        text: 'TERMINADO'
      }, {
        value: 'VALORIZADO',
        text: 'VALORIZADO'
      }, {
        value: 'FACTURADO',
        text: 'FACTURADO'
      }, {
        value: 'PAGADO',
        text: 'PAGADO'
      }, {
        value: 'REEMPLAZADO',
        text: 'REEMPLAZADO'
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
    Listar: function Listar() {
      var _this = this;

      this.showLoading = true;
      this.$http.get('/LiberAPP/Servicio/Listar/' + this.idExterno + '/' + this.fechaInicio + '/' + this.fechaFin + '/' + this.estado).then(function (res) {
        _this.servicios = res.data;
        _this.showLoading = false;
      })["catch"](function (error) {
        _this.Toast(true, 'danger', 'Servicios', 'Error al cargar los registros: ' + error);

        _this.showLoading = false;
      });
    }
  },
  computed: {
    direction: function direction() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_5__["default"].state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      } // eslint-disable-next-line vue/no-side-effects-in-computed-properties


      this.dir = false;
      return this.dir;
    }
  },
  created: function created() {
    var _this2 = this;

    this.$http.get('/LiberAPP/Externo/Select').then(function (res) {
      _this2.clientes = res.data;

      _this2.clientes.unshift({
        idExterno: '0',
        nombreExt: 'TODOS'
      });
    })["catch"](function (error) {
      _this2.Toast(true, 'danger', 'Servicios', 'Error al cargar los registros: ' + error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".vgt-table tbody td, .vgt-table tbody th, .vgt-table thead th {\n  font-weight: bold;\n  font-size: 10pt;\n}\n[dir] .vgt-table tbody td, [dir] .vgt-table tbody th, [dir] .vgt-table thead th {\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:before {\n  border-top-color: #4b4b4b;\n}\n[dir] .vgt-wrap .vgt-table th.sortable:after {\n  border-bottom-color: #4b4b4b;\n}\n.vgt-wrap .vgt-table thead th {\n  color: #9196a0;\n}\n[dir] .vgt-wrap .vgt-table thead th {\n  background-color: #283046;\n  text-align: center;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  left: 2rem;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable::before {\n  right: 2rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:last-child:not(.next-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=ltr] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1.428rem;\n  border-bottom-right-radius: 1.428rem;\n}\n[dir=rtl] .vgt-wrap.rtl .pagination .page-item:first-child:not(.prev-item) .page-link {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 1.428rem;\n  border-bottom-left-radius: 1.428rem;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table {\n  background-color: #283046;\n  border-color: #3b4253;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th, [dir] body.dark-layout .vgt-wrap .vgt-table td, [dir] body.dark-layout .vgt-wrap .vgt-table tr {\n  border-color: #3b4253;\n  background-color: #283046;\n}\nbody.dark-layout .vgt-wrap .vgt-table th span,\nbody.dark-layout .vgt-wrap .vgt-table td span,\nbody.dark-layout .vgt-wrap .vgt-table tr span {\n  color: #b4b7bd;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input,\nbody.dark-layout .vgt-wrap .vgt-table td input,\nbody.dark-layout .vgt-wrap .vgt-table tr input {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th input, [dir] body.dark-layout .vgt-wrap .vgt-table td input, [dir] body.dark-layout .vgt-wrap .vgt-table tr input {\n  background-color: #283046;\n  border-color: #404656;\n}\nbody.dark-layout .vgt-wrap .vgt-table th input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table td input::placeholder,\nbody.dark-layout .vgt-wrap .vgt-table tr input::placeholder {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table th.sortable::before {\n  border-top-color: #b4b7bd;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-desc::before {\n  border-top-color: #7367f0;\n}\n[dir] body.dark-layout .vgt-wrap .vgt-table thead th.sorting-asc::after {\n  border-bottom-color: #7367f0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item {\n  margin-right: 0.3571rem;\n  margin-left: 0;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2):not(.active) .page-link {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2):not(.active) .page-link {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-child(2) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.prev-item ~ .page-item:nth-last-child(2) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item {\n  margin-right: 0;\n  margin-left: 0.3571rem;\n}\nhtml[dir=rtl] .b-pagination .page-item.next-item .page-link svg {\n  transform: rotate(360deg);\n}\nhtml[dir=rtl] .b-pagination .page-item.active .page-link {\n  border-top-right-radius: 5rem !important;\n  border-bottom-right-radius: 5rem !important;\n}\n[dir] .vgt-table.striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(51, 68, 109, 0.03);\n}\n\n/* Utility styles\n************************************************/\n[dir=ltr] .vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-right-align {\n  text-align: left;\n}\n[dir=ltr] .vgt-left-align {\n  text-align: left;\n}\n[dir=rtl] .vgt-left-align {\n  text-align: right;\n}\n[dir] .vgt-center-align {\n  text-align: center;\n}\n[dir=ltr] .vgt-pull-left {\n  float: left !important;\n}\n[dir=rtl] .vgt-pull-left {\n  float: right !important;\n}\n[dir=ltr] .vgt-pull-right {\n  float: right !important;\n}\n[dir=rtl] .vgt-pull-right {\n  float: left !important;\n}\n.vgt-clearfix::after {\n  display: block;\n  content: \"\";\n}\n[dir] .vgt-clearfix::after {\n  clear: both;\n}\n.vgt-responsive {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n}\n.vgt-text-disabled {\n  color: #909399;\n}\n.sr-only {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.vgt-wrap {\n  position: relative;\n}\n.vgt-fixed-header {\n  position: absolute;\n  z-index: 10;\n  overflow-x: auto;\n}\ntable.vgt-table {\n  font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 100%;\n  table-layout: auto;\n}\n[dir] table.vgt-table {\n  background-color: #FFFFFF;\n  border: 1px solid #4b4b4b;\n}\ntable.vgt-table td {\n  vertical-align: top;\n  color: #6e6b7b;\n}\n[dir] table.vgt-table td {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n  border-bottom: 1px solid #4b4b4b;\n}\n[dir] table.vgt-table tr.clickable {\n  cursor: pointer;\n}\n[dir] table.vgt-table tr.clickable:hover {\n  background-color: #F1F5FD;\n}\n.vgt-table th {\n  vertical-align: middle;\n  position: relative;\n}\n[dir=ltr] .vgt-table th {\n  padding: 0.75em 1.5em 0.75em 0.75em;\n}\n[dir=rtl] .vgt-table th {\n  padding: 0.75em 0.75em 0.75em 1.5em;\n}\n.vgt-table th.sortable button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n[dir] .vgt-table th.sortable button {\n  background: transparent;\n  border: none;\n}\n[dir=ltr] .vgt-table th.sortable button {\n  left: 0;\n}\n[dir=rtl] .vgt-table th.sortable button {\n  right: 0;\n}\n.vgt-table th.sortable button:focus {\n  outline: none;\n}\n.vgt-table th.sortable button:after {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:after {\n  margin-top: -7px;\n  border-bottom: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:after {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:after {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.sortable button:before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n}\n[dir] .vgt-table th.sortable button:before {\n  margin-bottom: -7px;\n  border-top: 5px solid #606266;\n}\n[dir=ltr] .vgt-table th.sortable button:before {\n  right: 6px;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n[dir=rtl] .vgt-table th.sortable button:before {\n  left: 6px;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.vgt-table th.line-numbers, .vgt-table th.vgt-checkbox-col {\n  color: #6e6b7b;\n  word-wrap: break-word;\n  width: 25px;\n}\n[dir] .vgt-table th.line-numbers, [dir] .vgt-table th.vgt-checkbox-col {\n  padding: 0 0.75em 0 0.75em;\n  text-align: center;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table th.line-numbers, [dir=ltr] .vgt-table th.vgt-checkbox-col {\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-table th.line-numbers, [dir=rtl] .vgt-table th.vgt-checkbox-col {\n  border-left: 1px solid #4b4b4b;\n}\n[dir] .vgt-table th.filter-th {\n  padding: 0.75em 0.75em 0.75em 0.75em;\n}\n[dir] .vgt-table th.vgt-row-header {\n  border-bottom: 2px solid #4b4b4b;\n  border-top: 2px solid #4b4b4b;\n  background-color: #656565;\n}\n.vgt-table th.vgt-row-header .triangle {\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n[dir] .vgt-table th.vgt-row-header .triangle {\n  border-radius: 15%;\n  margin: 0px 8px;\n}\n.vgt-table th.vgt-row-header .triangle:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n  transition: 0.3s ease transform;\n}\n[dir] .vgt-table th.vgt-row-header .triangle:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle:after {\n  left: 50%;\n  border-left: 6px solid #6e6b7b;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle:after {\n  right: 50%;\n  border-right: 6px solid #6e6b7b;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vgt-table th.vgt-row-header .triangle.expand:after {\n  transform: rotate(-90deg);\n}\n.vgt-table thead th {\n  color: #6e6b7b;\n  vertical-align: bottom;\n}\n[dir] .vgt-table thead th {\n  border-bottom: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n[dir=ltr] .vgt-table thead th {\n  padding-right: 1.5em;\n}\n[dir=rtl] .vgt-table thead th {\n  padding-left: 1.5em;\n}\n.vgt-table thead th.vgt-checkbox-col {\n  vertical-align: middle;\n}\n[dir] .vgt-table thead th.sorting-asc button:after {\n  border-bottom: 5px solid #409eff;\n}\n[dir] .vgt-table thead th.sorting-desc button:before {\n  border-top: 5px solid #409eff;\n}\n.vgt-input, .vgt-select {\n  width: 100%;\n  height: 32px;\n  line-height: 1;\n  display: block;\n  font-size: 14px;\n  font-weight: normal;\n  color: #6e6b7b;\n  box-sizing: border-box;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n[dir] .vgt-input, [dir] .vgt-select {\n  padding: 6px 12px;\n  border-radius: 4px;\n  background-image: none;\n  background-color: #fff;\n  border: 1px solid #7d7d7d;\n}\n.vgt-input::placeholder, .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #6e6b7b;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-input:focus, .vgt-select:focus {\n  outline: none;\n}\n[dir] .vgt-input:focus, [dir] .vgt-select:focus {\n  border-color: #409eff;\n}\n.vgt-loading {\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n}\n[dir] .vgt-loading {\n  margin-top: 117px;\n}\n.vgt-loading__content {\n  color: #409eff;\n}\n[dir] .vgt-loading__content {\n  background-color: #c0dfff;\n  padding: 7px 30px;\n  border-radius: 3px;\n}\n.vgt-inner-wrap.is-loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n[dir] .vgt-table.bordered td, [dir] .vgt-table.bordered th {\n  border: 1px solid #4b4b4b;\n}\n[dir] .vgt-table.bordered th.vgt-row-header {\n  border-bottom: 3px solid #4b4b4b;\n}\n[dir=ltr] .vgt-wrap.rtl {\n  direction: rtl;\n}\n[dir=rtl] .vgt-wrap.rtl {\n  direction: ltr;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table thead th, [dir=ltr] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-left: 1.5em;\n  padding-right: 0.75em;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table thead th, [dir=rtl] .vgt-wrap.rtl .vgt-table.condensed thead th {\n  padding-right: 1.5em;\n  padding-left: 0.75em;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-right: 5px;\n  margin-left: 0px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sorting-asc:after {\n  margin-left: 5px;\n  margin-right: 0px;\n}\n[dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=ltr] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  right: inherit;\n  left: 6px;\n}\n[dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:after, [dir=rtl] .vgt-wrap.rtl .vgt-table th.sortable:before {\n  left: inherit;\n  right: 6px;\n}\n[dir] .vgt-table.condensed td, [dir] .vgt-table.condensed th.vgt-row-header {\n  padding: 0.4em 0.4em 0.4em 0.4em;\n}\n\n/*responsive compactMode*/\n@media (max-width: 576px) {\n.vgt-compact * {\n    box-sizing: border-box;\n}\n.vgt-compact tbody,\n.vgt-compact tr,\n.vgt-compact td {\n    display: block;\n    width: 100%;\n}\n.vgt-compact thead {\n    display: none;\n}\n[dir] .vgt-compact tr {\n    margin-bottom: 15px;\n}\n.vgt-compact td {\n    position: relative;\n}\n[dir=ltr] .vgt-compact td {\n    text-align: right;\n}\n[dir=rtl] .vgt-compact td {\n    text-align: left;\n}\n.vgt-compact td:before {\n    content: attr(data-label);\n    position: relative;\n    width: 40%;\n    font-weight: bold;\n}\n[dir=ltr] .vgt-compact td:before {\n    float: left;\n    left: 0;\n    padding-left: 10px;\n    text-align: left;\n}\n[dir=rtl] .vgt-compact td:before {\n    float: right;\n    right: 0;\n    padding-right: 10px;\n    text-align: right;\n}\n.vgt-compact th.line-numbers {\n    width: 100% !important;\n    display: block;\n}\n[dir] .vgt-compact th.line-numbers {\n    padding: 0.3em 1em !important;\n}\n}\n.vgt-global-search {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n}\n[dir] .vgt-global-search {\n  padding: 5px 0px;\n  border: 1px solid #4b4b4b;\n  border-bottom: 0px;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-global-search form {\n  display: flex;\n}\n[dir] .vgt-global-search form label {\n  margin-top: 3px;\n}\n.vgt-global-search__input {\n  position: relative;\n  flex-grow: 1;\n}\n[dir=ltr] .vgt-global-search__input {\n  padding-left: 40px;\n}\n[dir=rtl] .vgt-global-search__input {\n  padding-right: 40px;\n}\n.vgt-global-search__input .input__icon {\n  position: absolute;\n  max-width: 32px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon {\n  left: 0px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon {\n  right: 0px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass {\n  display: block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-top: 3px;\n  border: 2px solid #494949;\n  border-radius: 50%;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-left: 8px;\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass {\n  margin-right: 8px;\n}\n.vgt-global-search__input .input__icon .magnifying-glass:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -5px;\n  width: 8px;\n  height: 4px;\n}\n[dir] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #494949;\n  border-radius: 2px;\n}\n[dir=ltr] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  right: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n[dir=rtl] .vgt-global-search__input .input__icon .magnifying-glass:before {\n  left: -7px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n[dir=ltr] .vgt-global-search__actions {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-global-search__actions {\n  margin-right: 10px;\n}\n.vgt-selection-info-row {\n  font-size: 13px;\n  color: #d3aa3b;\n  font-weight: bold;\n}\n[dir] .vgt-selection-info-row {\n  background: #fdf9e8;\n  padding: 5px 16px;\n  border-top: 1px solid #4b4b4b;\n}\n[dir=ltr] .vgt-selection-info-row {\n  border-left: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n}\n[dir=rtl] .vgt-selection-info-row {\n  border-right: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n}\n.vgt-selection-info-row a {\n  font-weight: bold;\n  display: inline-block;\n}\n[dir=ltr] .vgt-selection-info-row a {\n  margin-left: 10px;\n}\n[dir=rtl] .vgt-selection-info-row a {\n  margin-right: 10px;\n}\n[dir] .vgt-wrap__actions-footer {\n  border: 1px solid #4b4b4b;\n}\n.vgt-wrap__footer {\n  color: #6e6b7b;\n  font-size: 1.1rem;\n}\n[dir] .vgt-wrap__footer {\n  padding: 1em;\n  border: 1px solid #4b4b4b;\n  background: linear-gradient(transparent, transparent);\n}\n.vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap__footer .footer__row-count__label, .vgt-wrap__footer .footer__row-count__select {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__row-count__label {\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__row-count__select {\n  font-size: 1.1rem;\n  width: auto;\n  height: auto;\n  color: #6e6b7b;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select {\n  background-color: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count__select {\n  margin-left: 8px;\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count__select {\n  margin-right: 8px;\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n.vgt-wrap__footer .footer__row-count__select:focus {\n  outline: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #6e6b7b;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap__footer .footer__navigation {\n  font-size: 1.1rem;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-right: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation > button:first-of-type {\n  margin-left: 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-btn, .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n  vertical-align: middle;\n  color: #909399;\n}\n.vgt-wrap__footer .footer__navigation__page-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-decoration: none;\n  color: #6e6b7b;\n  font-weight: bold;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn {\n  background: transparent;\n  border: none;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn:hover {\n  cursor: pointer;\n}\n.vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  opacity: 0.5;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled, [dir] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {\n  cursor: not-allowed;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #6e6b7b;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #6e6b7b;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #6e6b7b;\n}\n.vgt-wrap__footer .footer__navigation__page-btn span {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.1rem;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron {\n  border-radius: 15%;\n  margin: 0;\n}\n.vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 50%;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  margin-top: -6px;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  left: 50%;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron:after {\n  right: 50%;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-right: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {\n  border-left: 6px solid #409eff;\n  margin-right: -3px;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-left: 6px solid #409eff;\n  margin-left: -3px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {\n  border-right: 6px solid #409eff;\n  margin-right: -3px;\n}\n.vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {\n  display: inline-block;\n}\n[dir] .vgt-wrap__footer .footer__navigation__info, [dir] .vgt-wrap__footer .footer__navigation__page-info {\n  margin: 0px 16px;\n}\n.vgt-wrap__footer .footer__navigation__page-info span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  font-weight: bold;\n}\n[dir] .vgt-wrap__footer .footer__navigation__page-info__current-entry {\n  text-align: center;\n  margin: 0px 10px;\n}\n@media only screen and (max-width: 750px) {\n  /* on small screens hide the info */\n.vgt-wrap__footer .footer__navigation__info {\n    display: none;\n}\n[dir=ltr] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-left: 16px;\n}\n[dir=rtl] .vgt-wrap__footer .footer__navigation__page-btn {\n    margin-right: 16px;\n}\n}\n[dir] .vgt-table.nocturnal {\n  border: 1px solid #435169;\n  background-color: #324057;\n}\n[dir] .vgt-table.nocturnal tr.clickable:hover {\n  background-color: #445168;\n}\n.vgt-table.nocturnal td {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal td {\n  border-bottom: 1px solid #435169;\n}\n.vgt-table.nocturnal th.line-numbers, .vgt-table.nocturnal th.vgt-checkbox-col {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal th.line-numbers, [dir] .vgt-table.nocturnal th.vgt-checkbox-col {\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir=ltr] .vgt-table.nocturnal th.line-numbers, [dir=ltr] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.nocturnal th.line-numbers, [dir=rtl] .vgt-table.nocturnal th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.nocturnal thead th {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-table.nocturnal thead th.sortable:before {\n  border-top-color: #3e5170;\n}\n[dir] .vgt-table.nocturnal thead th.sortable:after {\n  border-bottom-color: #3e5170;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n.vgt-table.nocturnal thead th.sortable.sorting-desc {\n  color: white;\n}\n[dir] .vgt-table.nocturnal thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.nocturnal.bordered td, [dir] .vgt-table.nocturnal.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input, .vgt-table.nocturnal .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-table.nocturnal .vgt-input, [dir] .vgt-table.nocturnal .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-table.nocturnal .vgt-input::placeholder, .vgt-table.nocturnal .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__label {\n  color: #8290A7;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  color: #C7CED8;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  background: #232d3f;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 10px;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #C7CED8;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #C7CED8;\n}\n[dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #C7CED8;\n}\n[dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #C7CED8;\n}\n.vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.nocturnal .vgt-wrap__footer .footer__navigation__page-info {\n  color: #8290A7;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#2C394F, #2C394F);\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  color: #C7CED8;\n}\n[dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select {\n  background-color: #232d3f;\n  border: 1px solid #435169;\n}\n.vgt-wrap.nocturnal .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.nocturnal .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #C7CED8;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-table.black-rhino {\n  border: 1px solid #435169;\n  background-color: #dfe5ee;\n}\n[dir] .vgt-table.black-rhino tr.clickable:hover {\n  background-color: #fff;\n}\n.vgt-table.black-rhino td {\n  color: #49515e;\n}\n[dir] .vgt-table.black-rhino td {\n  border-bottom: 1px solid #bbc5d6;\n}\n.vgt-table.black-rhino th.line-numbers, .vgt-table.black-rhino th.vgt-checkbox-col {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino th.line-numbers, [dir] .vgt-table.black-rhino th.vgt-checkbox-col {\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino th.line-numbers, [dir=ltr] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-right: 1px solid #435169;\n}\n[dir=rtl] .vgt-table.black-rhino th.line-numbers, [dir=rtl] .vgt-table.black-rhino th.vgt-checkbox-col {\n  border-left: 1px solid #435169;\n}\n.vgt-table.black-rhino thead th {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino thead th {\n  border-bottom: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir=ltr] .vgt-table.black-rhino thead th {\n  text-shadow: 1px 1px #3e5170;\n}\n[dir=rtl] .vgt-table.black-rhino thead th {\n  text-shadow: -1px 1px #3e5170;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:before {\n  border-top-color: #607498;\n}\n[dir] .vgt-table.black-rhino thead th.sortable:after {\n  border-bottom-color: #607498;\n}\n.vgt-table.black-rhino thead th.sortable.sorting-asc {\n  color: white;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-asc:after {\n  border-bottom-color: #409eff;\n}\n[dir] .vgt-table.black-rhino thead th.sortable.sorting-desc:before {\n  border-top-color: #409eff;\n}\n[dir] .vgt-table.black-rhino.bordered td {\n  border: 1px solid #bbc5d6;\n}\n[dir] .vgt-table.black-rhino.bordered th {\n  border: 1px solid #435169;\n}\n.vgt-table.black-rhino .vgt-input, .vgt-table.black-rhino .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-table.black-rhino .vgt-input, [dir] .vgt-table.black-rhino .vgt-select {\n  background-color: #34445f;\n  border: 1px solid transparent;\n}\n.vgt-table.black-rhino .vgt-input::placeholder, .vgt-table.black-rhino .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  color: #49515e;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  background: #34445f;\n  border: none;\n  border-radius: 3px;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 15px;\n  padding-left: 5px;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 15px;\n  padding-right: 5px;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #409eff;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -1px;\n  border-top: 6px solid #49515e;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  right: 6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__row-count::after {\n  left: 6px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #dae2f0;\n}\n[dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #dae2f0;\n}\n[dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #dae2f0;\n}\n.vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.black-rhino .vgt-wrap__footer .footer__navigation__page-info {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search {\n  border: 1px solid #435169;\n  background: linear-gradient(#4c5c79, #4e5d7c);\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #3f4c63;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #3f4c63;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  color: #dae2f0;\n}\n[dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select {\n  background-color: #44516c;\n  border: 1px solid transparent;\n}\n.vgt-wrap.black-rhino .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.black-rhino .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #dae2f0;\n  opacity: 0.3;\n  /* Firefox */\n}\n[dir] .vgt-inner-wrap {\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.1), 0 1px 2px 0 rgba(50, 50, 93, 0.06);\n}\n.vgt-table.polar-bear {\n  border-spacing: 0;\n  border-collapse: separate;\n  font-size: 1rem;\n}\n[dir] .vgt-table.polar-bear {\n  background-color: #FFFFFF;\n  border: 1px solid #e3e8ee;\n  border-bottom: none;\n  border-radius: 0.25rem;\n}\n.vgt-table.polar-bear td {\n  color: #525f7f;\n}\n[dir] .vgt-table.polar-bear td {\n  padding: 1em 0.75em 1em 0.75em;\n  border-bottom: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: right;\n}\n[dir=rtl] .vgt-table.polar-bear td.vgt-right-align {\n  text-align: left;\n}\n.vgt-table.polar-bear th.line-numbers, .vgt-table.polar-bear th.vgt-checkbox-col {\n  color: #394567;\n}\n[dir] .vgt-table.polar-bear th.line-numbers, [dir] .vgt-table.polar-bear th.vgt-checkbox-col {\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-table.polar-bear th.line-numbers, [dir=ltr] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-right: 1px solid #e3e8ee;\n}\n[dir=rtl] .vgt-table.polar-bear th.line-numbers, [dir=rtl] .vgt-table.polar-bear th.vgt-checkbox-col {\n  border-left: 1px solid #e3e8ee;\n}\n.vgt-table.polar-bear thead th {\n  color: #667b94;\n  font-weight: 600;\n}\n[dir] .vgt-table.polar-bear thead th {\n  border-bottom: 1px solid #e3e8ee;\n  background: #f7fafc;\n}\n.vgt-table.polar-bear thead th.sorting-asc, .vgt-table.polar-bear thead th.sorting-desc {\n  color: #5e72e4;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-desc:before {\n  border-top: 5px solid #7485e8;\n}\n[dir] .vgt-table.polar-bear thead th.sorting-asc:after {\n  border-bottom: 5px solid #7485e8;\n}\n.vgt-table.polar-bear thead th .vgt-input, .vgt-table.polar-bear thead th .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input, [dir] .vgt-table.polar-bear thead th .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-table.polar-bear thead th .vgt-input:focus, .vgt-table.polar-bear thead th .vgt-select:focus {\n  outline: 0;\n}\n[dir] .vgt-table.polar-bear thead th .vgt-input:focus, [dir] .vgt-table.polar-bear thead th .vgt-select:focus {\n  border-color: #cae0fe;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:first-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=ltr] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-right-radius: 0.25rem;\n}\n[dir=rtl] .vgt-table.polar-bear thead tr:first-child th:last-child {\n  border-top-left-radius: 0.25rem;\n}\n[dir] .vgt-table.polar-bear.bordered td {\n  border: 1px solid #e3e8ee;\n  background: #FFFFFF;\n}\n[dir] .vgt-table.polar-bear.bordered th {\n  border: 1px solid #e3e8ee;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  border-top: 0px;\n  background: linear-gradient(#f7fafc, #f7fafc);\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  position: relative;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-right: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count {\n  padding-left: 3px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__label {\n  color: #98a5b9;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  color: #525f7f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  text-align: center;\n  background: #FFFFFF;\n  border: none;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-right: 30px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select {\n  padding-left: 30px;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select::-ms-expand {\n  display: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count__select:focus {\n  border-color: #5e72e4;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 0px;\n  width: 0px;\n  top: 50%;\n  pointer-events: none;\n}\n[dir] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  margin-top: -3px;\n  border-top: 6px solid #525f7f;\n  border-bottom: none;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  right: 15px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__row-count::after {\n  left: 15px;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn {\n  color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-right-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after {\n  border-left-color: #394567;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=ltr] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-left-color: #394567;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after, [dir=rtl] .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after {\n  border-right-color: #394567;\n}\n.vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__info, .vgt-wrap.polar-bear .vgt-wrap__footer .footer__navigation__page-info {\n  color: #394567;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search {\n  border: 1px solid #e3e8ee;\n  border-bottom: 0px;\n  background: #f7fafc;\n}\n[dir=ltr] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n[dir=rtl] .vgt-wrap.polar-bear .vgt-global-search {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass {\n  border: 2px solid #dde3ea;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .input__icon .magnifying-glass:before {\n  background: #dde3ea;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  height: 2.75em;\n}\n[dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-input, [dir] .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #E4EBF3;\n}\n.vgt-wrap.polar-bear .vgt-global-search__input .vgt-input::placeholder, .vgt-wrap.polar-bear .vgt-global-search__input .vgt-select::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #394567;\n  opacity: 0.3;\n  /* Firefox */\n}\n.flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #FFFFFF;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #FFFFFF;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #FFFFFF;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vgt-responsive {\n  height: 70vh;\n  overflow: scroll;\n  position: relative;\n}\n.vgt-responsive #vgt-table {\n  position: relative;\n}\n.vgt-responsive #vgt-table thead th {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  color: white !important;\n}\n[dir] .vgt-responsive #vgt-table thead th {\n  background-color: #4b4b4b !important;\n}\n.vgt-responsive #vgt-table thead tr:nth-child(1) th {\n  top: 0 !important;\n}\n\n/*.vgt-responsive #vgt-table thead tr:nth-child(1) th\n{\n  top: 0 !important;\n}*/\n.vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child {\n  z-index: 2;\n}\n[dir=ltr] .vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child {\n  left: 0;\n}\n[dir=rtl] .vgt-responsive #vgt-table thead tr:nth-child(1) th:first-child {\n  right: 0;\n}\n.vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2) {\n  z-index: 2;\n}\n[dir=ltr] .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2) {\n  left: 30pt;\n}\n[dir=rtl] .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(2) {\n  right: 30pt;\n}\n.vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3) {\n  z-index: 2;\n}\n[dir=ltr] .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3) {\n  left: 70pt;\n}\n[dir=rtl] .vgt-responsive #vgt-table thead tr:nth-child(1) th:nth-child(3) {\n  right: 70pt;\n}\n.vgt-responsive #vgt-table tbody th {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  color: white !important;\n}\n[dir] .vgt-responsive #vgt-table tbody th {\n  background-color: #4b4b4b !important;\n}\n[dir=ltr] .vgt-responsive #vgt-table tbody th {\n  left: 0;\n}\n[dir=rtl] .vgt-responsive #vgt-table tbody th {\n  right: 0;\n}\n.vgt-responsive #vgt-table tbody tr td:nth-child(1) {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  color: white !important;\n}\n[dir] .vgt-responsive #vgt-table tbody tr td:nth-child(1) {\n  background-color: #4b4b4b !important;\n}\n[dir=ltr] .vgt-responsive #vgt-table tbody tr td:nth-child(1) {\n  left: 0;\n  left: 0;\n}\n[dir=rtl] .vgt-responsive #vgt-table tbody tr td:nth-child(1) {\n  right: 0;\n  right: 0;\n}\n.vgt-responsive #vgt-table tbody tr td:nth-child(2) {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  color: white !important;\n}\n[dir] .vgt-responsive #vgt-table tbody tr td:nth-child(2) {\n  background-color: #4b4b4b !important;\n}\n[dir=ltr] .vgt-responsive #vgt-table tbody tr td:nth-child(2) {\n  left: 30pt;\n  left: 35pt;\n}\n[dir=rtl] .vgt-responsive #vgt-table tbody tr td:nth-child(2) {\n  right: 30pt;\n  right: 35pt;\n}\n.vgt-responsive #vgt-table tbody tr td:nth-child(3) {\n  position: -webkit-sticky;\n  /* for Safari */\n  position: sticky;\n  color: white !important;\n}\n[dir] .vgt-responsive #vgt-table tbody tr td:nth-child(3) {\n  background-color: #4b4b4b !important;\n}\n[dir=ltr] .vgt-responsive #vgt-table tbody tr td:nth-child(3) {\n  left: 70pt;\n  left: 70pt;\n}\n[dir=rtl] .vgt-responsive #vgt-table tbody tr td:nth-child(3) {\n  right: 70pt;\n  right: 70pt;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Cliente" } },
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
                                attrs: { icon: "FastForwardIcon" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            staticStyle: { flex: "1" },
                            attrs: {
                              label: "nombreExt",
                              reduce: function(clientes) {
                                return clientes.idExterno
                              },
                              options: _vm.clientes
                            },
                            model: {
                              value: _vm.idExterno,
                              callback: function($$v) {
                                _vm.idExterno = $$v
                              },
                              expression: "idExterno"
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Desde" } },
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
                                attrs: { icon: "FastForwardIcon" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("flat-pickr", {
                            staticClass: "form-control",
                            model: {
                              value: _vm.fechaInicio,
                              callback: function($$v) {
                                _vm.fechaInicio = $$v
                              },
                              expression: "fechaInicio"
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Hasta" } },
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
                                attrs: { icon: "FastForwardIcon" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("flat-pickr", {
                            staticClass: "form-control",
                            attrs: { config: { minDate: _vm.fechaInicio } },
                            model: {
                              value: _vm.fechaFin,
                              callback: function($$v) {
                                _vm.fechaFin = $$v
                              },
                              expression: "fechaFin"
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Estado Servicio" } },
                    [
                      _c("b-form-select", {
                        attrs: { options: _vm.estados },
                        model: {
                          value: _vm.estado,
                          callback: function($$v) {
                            _vm.estado = $$v
                          },
                          expression: "estado"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { md: "6", xl: "3" } }, [
                _c(
                  "div",
                  { staticClass: "demo-inline-spacing" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          block: "",
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
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("vue-good-table", {
            attrs: {
              columns: _vm.tcolumnas,
              rows: _vm.servicios,
              rtl: _vm.direction,
              "search-options": { enabled: true, externalQuery: _vm.searchTerm }
            }
          })
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

/***/ "./resources/js/src/views/Transporte/Reporte/Servicio.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/Servicio.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicio.vue?vue&type=template&id=1f883f66& */ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66&");
/* harmony import */ var _Servicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicio.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Servicio.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Servicio.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Servicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Transporte/Reporte/Servicio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicio.vue?vue&type=template&id=1f883f66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/Servicio.vue?vue&type=template&id=1f883f66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_1f883f66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);