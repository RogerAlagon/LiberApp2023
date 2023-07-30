(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[222],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _Gestion_Reporte_Vencimiento_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Gestion/Reporte/Vencimiento.vue */ "./resources/js/src/views/Gestion/Reporte/Vencimiento.vue");

//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    'vencimiento-documento': _Gestion_Reporte_Vencimiento_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      entidad: 0,
      area: 0,
      nentidad: '',
      narea: '',
      entidades: [],
      areas: [] //HACER LA QUERY DONDE SE BUSCA EL NOMBRE DEL IMPLEMENTO EN EL QUE SE HARA LA CONSULTA

    };
  },
  created: function created() {
    var _this = this;

    //entidades 
    this.$http.get('/LiberAPP/Dato/Select/ENTIDAD/GENERAL').then(function (res) {
      _this.entidades = res.data.filter(function (entidad) {
        return entidad.valorDat == 'VEHICULO';
      });
    })["catch"](function (error) {
      _this.Toast(true, 'danger', 'Entidades', 'Error al cargar los registros: ' + error);
    }); //Areas 

    this.$http.get('/LiberAPP/Area/Select').then(function (res) {
      _this.areas = res.data.filter(function (area) {
        return area.nombreAre == 'OPERACIONES';
      });
    })["catch"](function (error) {
      _this.Toast(true, 'danger', 'Areas', 'Error al cargar los registros: ' + error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee& ***!
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
    "b-row",
    [
      _c(
        "b-col",
        [
          _vm.entidades[0] !== undefined && _vm.areas[0] !== undefined
            ? _c("vencimiento-documento", {
                attrs: {
                  vista_entidad: _vm.entidades[0].idDato.valueOf(),
                  vista_area: _vm.areas[0].idArea.valueOf(),
                  vista_nentidad: _vm.entidades[0].valorDat,
                  vista_narea: _vm.areas[0].nombreAre,
                  vista_implemento: "Vencimiento"
                }
              })
            : _vm._e()
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

/***/ "./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentoTransporte.vue?vue&type=template&id=64c4c4ee& */ "./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee&");
/* harmony import */ var _DocumentoTransporte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentoTransporte.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentoTransporte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentoTransporte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentoTransporte.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentoTransporte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentoTransporte.vue?vue&type=template&id=64c4c4ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Transporte/Reporte/DocumentoTransporte.vue?vue&type=template&id=64c4c4ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentoTransporte_vue_vue_type_template_id_64c4c4ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);