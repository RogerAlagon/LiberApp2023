(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1279:function(e,t,n){"use strict";n(620)},1280:function(e,t,n){(t=n(16)(!1)).push([e.i,"[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}",""]),e.exports=t},1681:function(e,t,n){"use strict";n.r(t);n(56),n(111),n(116);var a=n(2e3),r=n(320),o=n(2011),s=n(316),i=n(2001),c=n(398),d=n(2003),l=n(489),u=n(2002),p={components:{BRow:a.a,BCol:r.a,BCard:o.a,BCardBody:s.a,BCardText:i.a,BForm:c.a,BInputGroup:d.a,BInputGroupPrepend:l.a,BFormInput:u.a},data:function(){return{knowledgeBaseSearchQuery:"",kb:[]}},computed:{filteredKB:function(){var e=this.knowledgeBaseSearchQuery.toLowerCase();return this.kb.filter((function(t){return t.title.toLowerCase().includes(e)||t.desc.toLowerCase().includes(e)}))}},created:function(){var e=this;this.$http.get("/kb/data/knowledge_base").then((function(t){e.kb=t.data}))}},b=(n(1279),n(0)),g=Object(b.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{attrs:{id:"knowledge-base-search"}},[a("b-card",{staticClass:"knowledge-base-bg text-center",style:{backgroundImage:"url("+n(34)+")"},attrs:{"no-body":""}},[a("b-card-body",{staticClass:"card-body"},[a("h2",{staticClass:"text-primary"},[e._v("\n          Dedicated Source Used on Website\n        ")]),e._v(" "),a("b-card-text",{staticClass:"mb-2"},[a("span",[e._v("Popular searches: ")]),e._v(" "),a("span",{staticClass:"font-weight-bolder"},[e._v("Sales automation, Email marketing")])]),e._v(" "),a("b-form",{staticClass:"kb-search-input"},[a("b-input-group",{staticClass:"input-group-merge"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e._v(" "),a("b-form-input",{attrs:{id:"searchbar",placeholder:"Ask a question...."},model:{value:e.knowledgeBaseSearchQuery,callback:function(t){e.knowledgeBaseSearchQuery=t},expression:"knowledgeBaseSearchQuery"}})],1)],1)],1)],1)],1),e._v(" "),a("section",{attrs:{id:"knowledge-base-content"}},[a("b-row",{staticClass:"kb-search-content-info match-height"},[e._l(e.filteredKB,(function(t){return a("b-col",{key:t.id,staticClass:"kb-search-content",attrs:{md:"4",sm:"6"}},[a("b-card",{staticClass:"text-center cursor-pointer",attrs:{"img-src":t.img,"img-alt":t.img.slice(5),"img-top":""},on:{click:function(n){return e.$router.push({name:"pages-knowledge-base-category",params:{category:t.category}})}}},[a("h4",[e._v(e._s(t.title))]),e._v(" "),a("b-card-text",{staticClass:"mt-1"},[e._v("\n            "+e._s(t.desc)+"\n          ")])],1)],1)})),e._v(" "),a("b-col",{directives:[{name:"show",rawName:"v-show",value:!e.filteredKB.length,expression:"!filteredKB.length"}],staticClass:"text-center",attrs:{cols:"12"}},[a("h4",{staticClass:"mt-4"},[e._v("\n          Search result not found!!\n        ")])])],2)],1)])}),[],!1,null,null,null);t.default=g.exports},620:function(e,t,n){var a=n(1280);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(17)(a,r);a.locals&&(e.exports=a.locals)}}]);