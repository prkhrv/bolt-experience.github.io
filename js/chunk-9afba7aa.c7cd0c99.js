(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9afba7aa"],{"0f6d":function(t,e,n){},"17cc":function(t,e,n){"use strict";var o=n("0f6d"),a=n.n(o);a.a},5596:function(t,e,n){var o,a,s;(function(n,r){a=[],o=r,s="function"===typeof o?o.apply(e,a):o,void 0===s||(t.exports=s)})(0,function(){"use strict";var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n=function(){var n,o;if("undefined"===typeof window)return{init:function(){}};function a(t,e){var n=this;t.style.opacity&&t.style.opacity>.05?t.style.opacity=t.style.opacity-.05:t.style.opacity&&t.style.opacity<=.1?t.parentNode&&(t.parentNode.removeChild(t),e&&e()):t.style.opacity=.9,setTimeout(function(){return a.apply(n,[t,e])},1e3/30)}var s={error:"error",warn:"warn",success:"success",info:"info"},r={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+s.error,warn:"-"+s.warn,success:"-"+s.success,info:"-"+s.info};function i(e,n,o){for(var a in n=n||{},o=o||"",e)if(e.hasOwnProperty(a)){var s=e[a];s&&"object"===("undefined"===typeof s?"undefined":t(s))&&!(s instanceof Date||s instanceof RegExp)?i(s,n,o+a+" "):n[o]&&"object"===t(n[o])?n[o][a]=s:(n[o]={},n[o][a]=s)}return n}function l(t){var e=i(t),n=JSON.stringify(e,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1),n}function c(t){var e=document.head||document.getElementsByTagName("head")[0],n=u("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}var d={types:s,animation:a,timeout:3e3,icons:{},appendTarget:document.body,node:u(),style:(o={},e(o,"."+r.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(o,"."+r.notification,(n={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(n,"&."+r.error,{"background-color":"#D5122B"}),e(n,"&."+r.warn,{"background-color":"#F5AA1E"}),e(n,"&."+r.success,{"background-color":"#7AC13E"}),e(n,"&."+r.info,{"background-color":"#4196E1"}),e(n,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),n)),e(o,"."+r.title,{"font-weight":"500"}),e(o,"."+r.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),o)};function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(t)}function p(t,e,n){var o=u(n.icons[e].nodeType),a=n.icons[e].attrs;for(var s in a)a.hasOwnProperty(s)&&o.setAttribute(s,a[s]);t.appendChild(o)}function m(t,e,n){var o=u();o.className=n,o.appendChild(document.createTextNode(e)),t.appendChild(o)}var f={config:d,showMessage:function(t,e,n,o,a,s){var i={};Object.assign(i,this.config),Object.assign(i,s);var l=u();return l.className=r.notification+" "+r[n],l.onclick=function(){i.animation(l,null)},e&&m(l,e,r.title),i.icons[n]&&p(l,n,i),t&&m(l,t,r.message),i.node.insertBefore(l,i.node.firstChild),setTimeout(function(){return i.animation(l,a)},o||i.timeout),a&&a(),this},init:function(t){var e=this,n={};Object.assign(n,d),Object.assign(n,t),this.config=n;var o=l(n.style);return c(o),n.node.id=""+r.container,n.node.className=""+r.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(t){f[n.types[t]]=function(e,o,a,s,r){return this.showMessage(e,o,n.types[t],a,s,r),this}.bind(e)}),this},setIcon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n["class"]=n["class"]?n["class"]+" "+r.icon:r.icon,this.config.icons[t]={nodeType:e,attrs:n}}};return f}();return n})},"7f7f":function(t,e,n){var o=n("86cc").f,a=Function.prototype,s=/^\s*function ([^ (]*)/,r="name";r in a||n("9e1e")&&o(a,r,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},b399:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated slideInLeft",staticStyle:{"animation-duration":"100ms"}},[n("b-card",{attrs:{id:"studentform"}},[n("b-tabs",[n("b-tab",{attrs:{id:"studenttab",active:"",title:t.$ml.get("student")}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.editStudent(e)}}},[n("b-row",{staticClass:"float-right"},[n("div",{attrs:{id:"edit-icon-container"}},[n("span",{attrs:{id:"edit-icon"},on:{click:t.onEditClick}},[n("i",{staticClass:"icon-pencil"})]),t.show_updload_icon?n("span",{attrs:{id:"edit-icon-cu"},on:{click:t.onPicSubmit}},[n("i",{staticClass:"cui-cloud-upload"})]):t._e(),n("img",{staticClass:"avatar1",attrs:{src:t.profile_pic}})])]),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("username"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("username")},model:{value:t.student.user_name,callback:function(e){t.$set(t.student,"user_name",e)},expression:"student.user_name"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("password"))}}),n("b-form-input",{attrs:{type:"password",placeholder:t.$ml.get("password")},model:{value:t.student.password,callback:function(e){t.$set(t.student,"password",e)},expression:"student.password"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("programme"))}}),n("b-form-select",{attrs:{options:t.programmes,"value-field":"_id","text-field":"name","disabled-field":"disabled",placeholder:t.$ml.get("programme")},model:{value:t.student.programme,callback:function(e){t.$set(t.student,"programme",e)},expression:"student.programme"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("academicterm"))}}),n("b-form-select",{attrs:{options:t.academic_terms,"value-field":"_id","text-field":"name","disabled-field":"disabled",placeholder:t.$ml.get("academicterm")},model:{value:t.student.academic_term,callback:function(e){t.$set(t.student,"academic_term",e)},expression:"student.academic_term"}})],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("name"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("name")},model:{value:t.student.personal_details.name,callback:function(e){t.$set(t.student.personal_details,"name",e)},expression:"student.personal_details.name"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("email"))}}),n("b-input-group",{attrs:{prepend:"@"}},[n("b-form-input",{attrs:{type:"email",placeholder:t.$ml.get("email")},model:{value:t.student.personal_details.email,callback:function(e){t.$set(t.student.personal_details,"email",e)},expression:"student.personal_details.email"}})],1)],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("phone"))}}),n("b-form-input",{attrs:{type:"number",state:t.validatePhone,placeholder:t.$ml.get("phone")},model:{value:t.student.personal_details.phone,callback:function(e){t.$set(t.student.personal_details,"phone",e)},expression:"student.personal_details.phone"}}),n("b-form-invalid-feedback",{attrs:{state:t.validatePhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1),n("b-row",[n("b-col",[n("b-row",[n("label",{domProps:{textContent:t._s(t.$ml.get("fathersname"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("fathersname")},model:{value:t.student.personal_details.father_details.fname,callback:function(e){t.$set(t.student.personal_details.father_details,"fname",e)},expression:"student.personal_details.father_details.fname"}})],1),n("b-row",[n("label",{domProps:{textContent:t._s(t.$ml.get("fathercontact"))}}),n("b-form-input",{attrs:{type:"number",state:t.validateFatherPhone,placeholder:t.$ml.get("fathercontact")},model:{value:t.student.personal_details.father_details.contact,callback:function(e){t.$set(t.student.personal_details.father_details,"contact",e)},expression:"student.personal_details.father_details.contact"}}),n("b-form-invalid-feedback",{attrs:{state:t.validateFatherPhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1),n("b-col",[n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("mothersname"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("mothersname")},model:{value:t.student.personal_details.mother_details.mname,callback:function(e){t.$set(t.student.personal_details.mother_details,"mname",e)},expression:"student.personal_details.mother_details.mname"}})],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("mothercontact"))}}),n("b-form-input",{attrs:{type:"number",state:t.validateMotherPhone,placeholder:t.$ml.get("mothercontact")},model:{value:t.student.personal_details.mother_details.contact,callback:function(e){t.$set(t.student.personal_details.mother_details,"contact",e)},expression:"student.personal_details.mother_details.contact"}}),n("b-form-invalid-feedback",{attrs:{state:t.validateMotherPhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1)],1),n("b-col",[t.edit_pic?n("label",{domProps:{textContent:t._s(t.$ml.get("profilepic"))}}):t._e(),t.edit_pic?n("b-form-file",{attrs:{id:"studentprofilepic",placeholder:t.$ml.get("profilepic")},on:{input:t.onChange},model:{value:t.student.personal_details.profile_pic,callback:function(e){t.$set(t.student.personal_details,"profile_pic",e)},expression:"student.personal_details.profile_pic"}}):t._e()],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("currentaddress"))}}),n("b-form-textarea",{attrs:{placeholder:t.$ml.get("currentaddress")},model:{value:t.student.personal_details.current_address,callback:function(e){t.$set(t.student.personal_details,"current_address",e)},expression:"student.personal_details.current_address"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("corresaddress"))}}),n("b-form-textarea",{attrs:{placeholder:t.$ml.get("corresaddress")},model:{value:t.student.personal_details.corresspondence_address,callback:function(e){t.$set(t.student.personal_details,"corresspondence_address",e)},expression:"student.personal_details.corresspondence_address"}}),n("b-form-checkbox",{attrs:{switch:"",size:"sm",value:"true","unchecked-value":"false"},on:{change:t.copyAddr},model:{value:t.copyAddress,callback:function(e){t.copyAddress=e},expression:"copyAddress"}},[t._v("Same as Current Address")])],1)],1),n("br"),n("div",{staticClass:"footer"},[n("b-button",{attrs:{pill:"",variant:"primary",type:"submit"},domProps:{textContent:t._s(t.$ml.get("submit"))}})],1)],1)],1)],1)],1)],1)},a=[],s=(n("28a5"),n("96cf"),n("3b8d")),r=(n("7f7f"),n("e19c")),i=n("bc3a"),l=n.n(i),c=n("a026"),d=n("e440"),u=n.n(d),p=n("5596"),m=n.n(p),f=l.a.create({withCredentials:!0}),h={success:"success",error:"error",info:"info",warn:"warn"},b={success:_,error:_,info:_,warn:_};function _(t){var e=t.title,n=t.message,o=t.type,a=t.timeout,s=t.cb;return m.a[o](n,e,a,s)}m.a.init({types:h}),c["default"].use(u.a,b);var g={name:"StudentDetails",components:{},data:function(){return{student:{personal_details:{phone:"",mother_contact:"",father_contact:""}},edit_pic:!1,copyAddress:!1,profile_pic:"",show_updload_icon:!1,programmes:[{name:"No Programmes",_id:"0",disabled:!0}],academic_terms:[{name:"No Academic-Terms",_id:"0",disabled:!0}]}},methods:{editStudent:function(t){var e=this;f.put("".concat(r["a"],"stud/student/update/one/").concat(this.$route.params.studId),this.student).then(function(t){e.$router.push({name:"Student List"})})},copyAddr:function(t){"true"==t&&(this.student.personal_details.corresspondence_address=this.student.personal_details.current_address)},onEditClick:function(){this.edit_pic=!0},onChange:function(){this.student.personal_details.profile_pic.name&&(this.show_updload_icon=!0)},onPicSubmit:function(){var t=new FormData;t.append("profile_pic",this.student.personal_details.profile_pic),this.student.personal_details.profile_pic.name&&f.put("".concat(r["a"],"/stud/student/update/profile/pic/").concat(this.$route.params.studId),t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){alert("res data")}).catch(function(t){alert("error")})}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r["b"].split("/api"),t.next=3,f.get("".concat(r["a"],"stud/student/view/one/").concat(this.$route.params.studId)).then(function(t){n.student=t.data});case 3:this.profile_pic="".concat(e[0],"/").concat(this.student.personal_details.profile_pic);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{validatePhone:function(){return 10==this.student.personal_details.phone.length&&this.student.personal_details.phone>0},validateMotherPhone:function(){return 10==this.student.personal_details.mother_details.contact.length&&this.student.personal_details.mother_details.contact>0},validateFatherPhone:function(){return 10==this.student.personal_details.father_details.contact.length&&this.student.personal_details.father_details.contact>0}}},y=g,v=(n("17cc"),n("2877")),x=Object(v["a"])(y,o,a,!1,null,"3b960726",null);e["default"]=x.exports},e440:function(t,e,n){var o,a,s;(function(n,r){a=[],o=r,s="function"===typeof o?o.apply(e,a):o,void 0===s||(t.exports=s)})(0,function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e="VueNotifications",n="vue-notifications",o="notifications",a={error:"error",warn:"warn",info:"info",success:"success"},s=1,r={alreadyInstalled:e+": plugin already installed",methodNameConflict:e+": names conflict - "};function i(t){var e=t.version.match(/(\d+)/g);return+e[0]}function l(t){var e=t.type,n=t.message,o=t.title,s="Title: "+o+", Message: "+n+", Type: "+e;e===a.error?console.error(s):e===a.warn?console.warn(s):console.log(s)}function c(t,e){var n={};return Object.keys(e).forEach(function(o){n[o]="cb"===o?e[o].bind(t):"function"===typeof e[o]?e[o].call(t):e[o]}),n}function d(t,e){var n=c(e,t),o=_.pluginOptions[n.type],a=o?_.pluginOptions[n.type]:l;if(a(n,e),t.cb)return t.cb()}function u(t,e){Object.keys(e).forEach(function(n){t[e[n]]=function(t){return t.type=e[n],d(t)}})}function p(t,e,n,o){n.methods||(n.methods={}),n.methods[e]||(n.methods[e]=m(t,e,n,o))}function m(t,e,n,o){return function(a){var s=Object.assign({},_.config,n[_.propertyName][e],a);return d(s,o,t)}}function f(t,e,o){e&&(Object.keys(e).forEach(function(e){return p(t,e,t.$options,o)}),t.$emit(n+"-initiated"))}function h(t,e){if(e){var o=t.$options.methods;Object.keys(e).forEach(function(t){o[t]&&(o[t]=void 0,delete o[t])}),t.$emit(n+"-unlinked")}}function b(e,n){var o,a=i(e)===s?"init":"beforeCreate";return o={},t(o,a,function(){var t=this.$options[_.propertyName];f(this,t,n)}),t(o,"beforeDestroy",function(){var t=this.$options[_.propertyName];h(this,t)}),o}var _={types:a,propertyName:o,config:{type:a.info,timeout:3e3},pluginOptions:{},installed:!1,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.installed)throw console.error(r.alreadyInstalled);var n=b(t,e);t.mixin(n),this.setPluginOptions(e),u(this,this.types),this.installed=!0},setPluginOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pluginOptions=t}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(_),_})}}]);
//# sourceMappingURL=chunk-9afba7aa.c7cd0c99.js.map