(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216db0"],{c3f0:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-tempalte"},[r("b-container",{staticStyle:{"margin-top":"30px"},attrs:{"w-50":""}},[r("form",[r("h3",[t._v("Sign Up")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Full Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.name,expression:"usuario.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text"},domProps:{value:t.usuario.name},on:{input:function(e){e.target.composing||t.$set(t.usuario,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.email,expression:"usuario.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email"},domProps:{value:t.usuario.email},on:{input:function(e){e.target.composing||t.$set(t.usuario,"email",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.password,expression:"usuario.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password"},domProps:{value:t.usuario.password},on:{input:function(e){e.target.composing||t.$set(t.usuario,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"},on:{click:function(e){return t.register()}}},[t._v(" Sign Up ")]),r("p",{staticClass:"forgot-password text-right"},[t._v(" Already registered "),r("router-link",{attrs:{to:{name:"login"}}},[t._v("sign in?")])],1)])])],1)},s=[],o=r("1da1"),n=r("5530"),i=(r("96cf"),r("2f62")),u={data:function(){return{usuario:{name:"",email:"",password:""}}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])("usuarios",["registerUser"])),{},{register:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Entro a registrar"),e.next=3,t.registerUser(t.usuario);case 3:t.$router.push({name:"login"});case 4:case"end":return e.stop()}}),e)})))()}})},l=u,c=r("2877"),m=Object(c["a"])(l,a,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d216db0.bf3056f3.js.map