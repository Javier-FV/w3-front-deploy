(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8072463e","chunk-3e202164","chunk-2a33fa3e","chunk-2d22c495","chunk-2d0e2352"],{7452:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"lista"}},[e("b-list-group",[e("b-row",[e("b-col",[t._v("Nombre:")]),e("b-col",[t._v("Creación")]),e("b-col",[t._v("Status")]),e("b-col",[t._v("Acción")])],1),t._l(t.lista,(function(o){return e("b-list-group-item",{key:o.userId},[e("b-row",[e("b-col",[t._v(" "+t._s(o.name.slice(0,10))+" ")]),e("b-col",[t._v(" "+t._s(o.signupDate.toString().slice(0,10))+" ")]),e("b-col",[t._v(" "+t._s(o.active)+" ")]),e("b-col",[e("b-form-checkbox",{attrs:{id:"Aprobado-"+o.userId,value:o.userId},model:{value:t.selectedAprobados,callback:function(o){t.selectedAprobados=o},expression:"selectedAprobados"}},[t._v(" Aprobado ")])],1)],1)],1)}))],2),e("p",[e("admin-modal-aprobados",{on:{aprobarUsuariosModal:t._aprobarUsuarios}})],1)],1)},s=[],i=e("f31c"),n={data:function(){return{selectedAprobados:[]}},mounted:function(){},props:{lista:{type:Array,required:!0,default:[{name:"hello"},{name:"Ben"}]}},computed:{},methods:{_aprobarUsuarios:function(){this.$emit("aprobarUsuarios",this.selectedAprobados)}},components:{AdminModalAprobados:i["default"]}},r=n,l=e("2877"),d=Object(l["a"])(r,a,s,!1,null,null,null);o["default"]=d.exports},"7e5c":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"modal"}},[e("b-button",{attrs:{id:"show-btn",variant:"dark"},on:{click:function(o){return t.$bvModal.show("bv-modal-delete")}}},[t._v("Eliminar")]),e("b-modal",{attrs:{id:"bv-modal-delete","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Advertencia: Los usuarios seleccionados seran eliminados")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("Esta seguro de continuar?")])]),e("b-button",{staticClass:"mt-3 eliminar",attrs:{block:""},on:{click:function(o){return t.$bvModal.hide("bv-modal-delete")}}},[t._v("Cerrar")]),e("b-button",{staticClass:"mt-3 eliminar",attrs:{block:""},on:{click:function(o){return t.aprobarModal()}}},[t._v("Continuar")])],1)],1)},s=[],i={name:"AdminModalEliminados",methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")},aprobarModal:function(){this.$bvModal.hide("bv-modal-delete"),console.log("ENTRO MODAL ELIMINADO"),this.$emit("eliminarUsuarios")}},computed:{}},n=i,r=e("2877"),l=Object(r["a"])(n,a,s,!1,null,null,null);o["default"]=l.exports},"8a61":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"lista"}},[e("b-list-group",[e("b-row",[e("b-col",[t._v("Nombre:")]),e("b-col",[t._v("Creación:")]),e("b-col",[t._v("Status")]),e("b-col",[t._v("Acción")])],1),t._l(t.users,(function(o){return e("b-list-group-item",{key:o.userId},[e("b-row",[e("b-col",[t._v(" "+t._s(o.name.slice(0,10))+" ")]),e("b-col",[t._v(" "+t._s(o.createdAt)+" ")]),e("b-col",[t._v(" "+t._s(o.active)+" ")]),e("b-col",[e("b-form-checkbox",{attrs:{id:"Eliminado-"+o.userId,value:o.userId},model:{value:t.selectedEliminados,callback:function(o){t.selectedEliminados=o},expression:"selectedEliminados"}},[t._v(" Eliminar ")])],1)],1)],1)}))],2),e("p",[e("admin-modal-eliminados",{on:{eliminarUsuarios:t.eliminarUsuariosList}})],1)],1)},s=[],i=e("7e5c"),n={name:"AdminListaEliminados",data:function(){return{selectedEliminados:[]}},props:{users:{type:Array}},mounted:function(){},computed:{},methods:{eliminarUsuariosList:function(){console.log("Entro a eliminar de Adminlista"),this.$emit("eliminarUsuariosParent",this.selectedEliminados)}},components:{AdminModalEliminados:i["default"]}},r=n,l=e("2877"),d=Object(l["a"])(r,a,s,!1,null,null,null);o["default"]=d.exports},aeb4:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"admin"}},[e("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase text-danger","active-tab-class":"font-weight-bold text-success","content-class":"mt-3"}},[t.usuariosSinActivar.length>0?e("div",[e("b-tab",{attrs:{title:"Aprobación de usuarios",active:""}},[e("p",[e("admin-lista-aprobados",{attrs:{lista:t.usuariosSinActivar},on:{aprobarUsuarios:t.aprobarUsuarios}})],1)])],1):t._e(),t.usuarios.length?e("div",[e("b-tab",{attrs:{title:"Eliminación de usuarios"}},[e("p",[e("admin-lista-eliminados",{attrs:{users:t.usuarios},on:{eliminarUsuariosParent:t.eliminarUsuariosFinal}})],1)])],1):t._e()])],1)},s=[],i=e("5530"),n=(e("4de4"),e("7452")),r=e("8a61"),l=e("2f62"),d={name:"AdminManagement",data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(l["d"])("usuarios",["usuarios"])),{},{usuariosSinActivar:function(){return this.usuarios.filter((function(t){return!1===t.active}))}}),mounted:function(){console.log("ENTRO"),this.fetchUsuarios()},components:{AdminListaAprobados:n["default"],AdminListaEliminados:r["default"]},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])("usuarios",["fetchUsuarios","updateUsersbyIds","deleteUsersbyIds"])),{},{aprobarUsuarios:function(t){console.log("ENTRO A APROBAR"),this.updateUsersbyIds(t)},eliminarUsuariosFinal:function(t){console.log("ENTRO A ELIMINAR"),this.deleteUsersbyIds(t)}})},c=d,u=e("2877"),b=Object(u["a"])(c,a,s,!1,null,null,null);o["default"]=b.exports},f31c:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"modal"}},[e("b-button",{attrs:{id:"show-btn",variant:"dark"},on:{click:function(o){return t.$bvModal.show("bv-modal-aprove")}}},[t._v("Aprobar")]),e("b-modal",{attrs:{id:"bv-modal-aprove","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Advertencia: Los usuarios seleccionados seran aprobados")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("Esta seguro de continuar?")])]),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(o){return t.$bvModal.hide("bv-modal-aprove")}}},[t._v("Cerrar")]),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(o){return t.aprobarModal()}}},[t._v("Continuar")])],1)],1)},s=[],i={name:"AdminModalAprobados",methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")},aprobarModal:function(){this.$bvModal.hide("bv-modal-aprove"),this.$emit("aprobarUsuariosModal")}}},n=i,r=e("2877"),l=Object(r["a"])(n,a,s,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=chunk-8072463e.91d5b40e.js.map