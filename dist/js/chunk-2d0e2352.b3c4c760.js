(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2352"],{"7e5c":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"modal"}},[e("b-button",{attrs:{id:"show-btn",variant:"dark"},on:{click:function(o){return t.$bvModal.show("bv-modal-delete")}}},[t._v("Eliminar")]),e("b-modal",{attrs:{id:"bv-modal-delete","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Advertencia: Los usuarios seleccionados seran eliminados")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("h3",[t._v("Esta seguro de continuar?")])]),e("b-button",{staticClass:"mt-3 eliminar",attrs:{block:""},on:{click:function(o){return t.$bvModal.hide("bv-modal-delete")}}},[t._v("Cerrar")]),e("b-button",{staticClass:"mt-3 eliminar",attrs:{block:""},on:{click:function(o){return t.aprobarModal()}}},[t._v("Continuar")])],1)],1)},a=[],i={name:"AdminModalEliminados",methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")},aprobarModal:function(){this.$bvModal.hide("bv-modal-delete"),console.log("ENTRO MODAL ELIMINADO"),this.$emit("eliminarUsuarios")}},computed:{}},l=i,s=e("2877"),d=Object(s["a"])(l,n,a,!1,null,null,null);o["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e2352.b3c4c760.js.map