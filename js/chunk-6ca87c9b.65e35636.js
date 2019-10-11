(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca87c9b"],{"0386":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated slideInLeft",staticStyle:{"animation-duration":"100ms"}},[n("b-card",{attrs:{id:"studentform"}},[n("b-tabs",[n("b-tab",{attrs:{id:"studenttab",active:"",title:t.$ml.get("student")}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.createStudent(e)}}},[n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("username"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("username")},model:{value:t.student.user_name,callback:function(e){t.$set(t.student,"user_name",e)},expression:"student.user_name"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("password"))}}),n("b-form-input",{attrs:{type:"password",placeholder:t.$ml.get("password")},model:{value:t.student.password,callback:function(e){t.$set(t.student,"password",e)},expression:"student.password"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("programme"))}}),n("b-form-select",{attrs:{options:t.programmes,"value-field":"_id","text-field":"name","disabled-field":"disabled",placeholder:t.$ml.get("programme")},model:{value:t.student.programme,callback:function(e){t.$set(t.student,"programme",e)},expression:"student.programme"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("academicterm"))}}),n("b-form-select",{attrs:{options:t.academic_terms,"value-field":"_id","text-field":"name","disabled-field":"disabled",placeholder:t.$ml.get("academicterm")},model:{value:t.student.academic_term,callback:function(e){t.$set(t.student,"academic_term",e)},expression:"student.academic_term"}})],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("name"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("name")},model:{value:t.student.name,callback:function(e){t.$set(t.student,"name",e)},expression:"student.name"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("email"))}}),n("b-input-group",{attrs:{prepend:"@"}},[n("b-form-input",{attrs:{type:"email",placeholder:t.$ml.get("email")},model:{value:t.student.email,callback:function(e){t.$set(t.student,"email",e)},expression:"student.email"}})],1)],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("phone"))}}),n("b-form-input",{attrs:{type:"number",state:t.validatePhone,placeholder:t.$ml.get("phone")},model:{value:t.student.phone,callback:function(e){t.$set(t.student,"phone",e)},expression:"student.phone"}}),n("b-form-invalid-feedback",{attrs:{state:t.validatePhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1),n("b-row",[n("b-col",[n("b-row",[n("label",{domProps:{textContent:t._s(t.$ml.get("fathersname"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("fathersname")},model:{value:t.student.father_name,callback:function(e){t.$set(t.student,"father_name",e)},expression:"student.father_name"}})],1),n("b-row",[n("label",{domProps:{textContent:t._s(t.$ml.get("fathercontact"))}}),n("b-form-input",{attrs:{type:"number",state:t.validateFatherPhone,placeholder:t.$ml.get("fathercontact")},model:{value:t.student.father_contact,callback:function(e){t.$set(t.student,"father_contact",e)},expression:"student.father_contact"}}),n("b-form-invalid-feedback",{attrs:{state:t.validateFatherPhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1),n("b-col",[n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("mothersname"))}}),n("b-form-input",{attrs:{type:"text",placeholder:t.$ml.get("mothersname")},model:{value:t.student.mother_name,callback:function(e){t.$set(t.student,"mother_name",e)},expression:"student.mother_name"}})],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("mothercontact"))}}),n("b-form-input",{attrs:{type:"number",state:t.validateMotherPhone,placeholder:t.$ml.get("mothercontact")},model:{value:t.student.mother_contact,callback:function(e){t.$set(t.student,"mother_contact",e)},expression:"student.mother_contact"}}),n("b-form-invalid-feedback",{attrs:{state:t.validateMotherPhone},domProps:{textContent:t._s(t.$ml.get("errorphone"))}})],1)],1)],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("profilepic"))}}),n("b-form-file",{attrs:{placeholder:t.$ml.get("profilepic")},model:{value:t.student.profile_pic,callback:function(e){t.$set(t.student,"profile_pic",e)},expression:"student.profile_pic"}})],1)],1),n("b-row",[n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("currentaddress"))}}),n("b-form-textarea",{attrs:{placeholder:t.$ml.get("currentaddress")},model:{value:t.student.current_address,callback:function(e){t.$set(t.student,"current_address",e)},expression:"student.current_address"}})],1),n("b-col",[n("label",{domProps:{textContent:t._s(t.$ml.get("corresaddress"))}}),n("b-form-textarea",{attrs:{placeholder:t.$ml.get("corresaddress")},model:{value:t.student.correspondence_address,callback:function(e){t.$set(t.student,"correspondence_address",e)},expression:"student.correspondence_address"}}),n("b-form-checkbox",{attrs:{switch:"",size:"sm",value:"true","unchecked-value":"false"},on:{change:t.copyAddr},model:{value:t.copyAddress,callback:function(e){t.copyAddress=e},expression:"copyAddress"}},[t._v("Same as Current Address")])],1)],1),n("br"),n("div",{staticClass:"footer"},[n("b-button",{attrs:{pill:"",variant:"primary",type:"submit"},domProps:{textContent:t._s(t.$ml.get("submit"))}})],1)],1)],1)],1)],1)],1)},r=[],a=(n("7f7f"),n("e19c")),s=n("bc3a"),i=n.n(s),c=n("a026"),d=n("e440"),l=n.n(d),u=n("5596"),p=n.n(u),m=i.a.create({withCredentials:!0}),f={success:"success",error:"error",info:"info",warn:"warn"},h={success:b,error:b,info:b,warn:b};function b(t){var e=t.title,n=t.message,o=t.type,r=t.timeout,a=t.cb;return p.a[o](n,e,r,a)}p.a.init({types:f}),c["default"].use(l.a,h);var g={name:"AddStudent",components:{},data:function(){return{student:{phone:"",mother_contact:"",father_contact:""},copyAddress:!1,programmes:[{name:"No Programmes",_id:"0",disabled:!0}],academic_terms:[{name:"No Academic-Terms",_id:"0",disabled:!0}]}},methods:{createStudent:function(t){var e=this;console.log(this.student);var n=new FormData;this.student.programme&&n.append("programme",this.student.programme),this.student.academic_term&&n.append("academic_term",this.student.academic_term),n.append("user_name",this.student.user_name),n.append("password",this.student.password),n.append("name",this.student.name),n.append("email",this.student.email),n.append("phone",this.student.phone),n.append("profile_pic",this.student.profile_pic),n.append("father_name",this.student.father_name),n.append("father_contact",this.student.father_contact),n.append("mother_name",this.student.mother_name),n.append("mother_contact",this.student.mother_contact),n.append("current_address",this.student.current_address),n.append("correspondence_address",this.student.correspondence_address),m.post("".concat(a["a"],"stud/student/create"),n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){console.log(t.data),e.$router.push({name:"Student List"})})},copyAddr:function(t){"true"==t&&(this.student.correspondence_address=this.student.current_address)}},mounted:function(){},computed:{validatePhone:function(){return 10==this.student.phone.length&&this.student.phone>0},validateMotherPhone:function(){return 10==this.student.mother_contact.length&&this.student.mother_contact>0},validateFatherPhone:function(){return 10==this.student.father_contact.length&&this.student.father_contact>0}}},y=g,v=(n("9534"),n("2877")),_=Object(v["a"])(y,o,r,!1,null,"2811e2ec",null);e["default"]=_.exports},5596:function(t,e,n){var o,r,a;(function(n,s){r=[],o=s,a="function"===typeof o?o.apply(e,r):o,void 0===a||(t.exports=a)})(0,function(){"use strict";var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n=function(){var n,o;if("undefined"===typeof window)return{init:function(){}};function r(t,e){var n=this;t.style.opacity&&t.style.opacity>.05?t.style.opacity=t.style.opacity-.05:t.style.opacity&&t.style.opacity<=.1?t.parentNode&&(t.parentNode.removeChild(t),e&&e()):t.style.opacity=.9,setTimeout(function(){return r.apply(n,[t,e])},1e3/30)}var a={error:"error",warn:"warn",success:"success",info:"info"},s={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+a.error,warn:"-"+a.warn,success:"-"+a.success,info:"-"+a.info};function i(e,n,o){for(var r in n=n||{},o=o||"",e)if(e.hasOwnProperty(r)){var a=e[r];a&&"object"===("undefined"===typeof a?"undefined":t(a))&&!(a instanceof Date||a instanceof RegExp)?i(a,n,o+r+" "):n[o]&&"object"===t(n[o])?n[o][r]=a:(n[o]={},n[o][r]=a)}return n}function c(t){var e=i(t),n=JSON.stringify(e,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1),n}function d(t){var e=document.head||document.getElementsByTagName("head")[0],n=u("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}var l={types:a,animation:r,timeout:3e3,icons:{},appendTarget:document.body,node:u(),style:(o={},e(o,"."+s.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(o,"."+s.notification,(n={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(n,"&."+s.error,{"background-color":"#D5122B"}),e(n,"&."+s.warn,{"background-color":"#F5AA1E"}),e(n,"&."+s.success,{"background-color":"#7AC13E"}),e(n,"&."+s.info,{"background-color":"#4196E1"}),e(n,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),n)),e(o,"."+s.title,{"font-weight":"500"}),e(o,"."+s.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),o)};function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(t)}function p(t,e,n){var o=u(n.icons[e].nodeType),r=n.icons[e].attrs;for(var a in r)r.hasOwnProperty(a)&&o.setAttribute(a,r[a]);t.appendChild(o)}function m(t,e,n){var o=u();o.className=n,o.appendChild(document.createTextNode(e)),t.appendChild(o)}var f={config:l,showMessage:function(t,e,n,o,r,a){var i={};Object.assign(i,this.config),Object.assign(i,a);var c=u();return c.className=s.notification+" "+s[n],c.onclick=function(){i.animation(c,null)},e&&m(c,e,s.title),i.icons[n]&&p(c,n,i),t&&m(c,t,s.message),i.node.insertBefore(c,i.node.firstChild),setTimeout(function(){return i.animation(c,r)},o||i.timeout),r&&r(),this},init:function(t){var e=this,n={};Object.assign(n,l),Object.assign(n,t),this.config=n;var o=c(n.style);return d(o),n.node.id=""+s.container,n.node.className=""+s.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(t){f[n.types[t]]=function(e,o,r,a,s){return this.showMessage(e,o,n.types[t],r,a,s),this}.bind(e)}),this},setIcon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n["class"]=n["class"]?n["class"]+" "+s.icon:s.icon,this.config.icons[t]={nodeType:e,attrs:n}}};return f}();return n})},"7f7f":function(t,e,n){var o=n("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&o(r,s,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8dcd":function(t,e,n){},9534:function(t,e,n){"use strict";var o=n("8dcd"),r=n.n(o);r.a},e440:function(t,e,n){var o,r,a;(function(n,s){r=[],o=s,a="function"===typeof o?o.apply(e,r):o,void 0===a||(t.exports=a)})(0,function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e="VueNotifications",n="vue-notifications",o="notifications",r={error:"error",warn:"warn",info:"info",success:"success"},a=1,s={alreadyInstalled:e+": plugin already installed",methodNameConflict:e+": names conflict - "};function i(t){var e=t.version.match(/(\d+)/g);return+e[0]}function c(t){var e=t.type,n=t.message,o=t.title,a="Title: "+o+", Message: "+n+", Type: "+e;e===r.error?console.error(a):e===r.warn?console.warn(a):console.log(a)}function d(t,e){var n={};return Object.keys(e).forEach(function(o){n[o]="cb"===o?e[o].bind(t):"function"===typeof e[o]?e[o].call(t):e[o]}),n}function l(t,e){var n=d(e,t),o=g.pluginOptions[n.type],r=o?g.pluginOptions[n.type]:c;if(r(n,e),t.cb)return t.cb()}function u(t,e){Object.keys(e).forEach(function(n){t[e[n]]=function(t){return t.type=e[n],l(t)}})}function p(t,e,n,o){n.methods||(n.methods={}),n.methods[e]||(n.methods[e]=m(t,e,n,o))}function m(t,e,n,o){return function(r){var a=Object.assign({},g.config,n[g.propertyName][e],r);return l(a,o,t)}}function f(t,e,o){e&&(Object.keys(e).forEach(function(e){return p(t,e,t.$options,o)}),t.$emit(n+"-initiated"))}function h(t,e){if(e){var o=t.$options.methods;Object.keys(e).forEach(function(t){o[t]&&(o[t]=void 0,delete o[t])}),t.$emit(n+"-unlinked")}}function b(e,n){var o,r=i(e)===a?"init":"beforeCreate";return o={},t(o,r,function(){var t=this.$options[g.propertyName];f(this,t,n)}),t(o,"beforeDestroy",function(){var t=this.$options[g.propertyName];h(this,t)}),o}var g={types:r,propertyName:o,config:{type:r.info,timeout:3e3},pluginOptions:{},installed:!1,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.installed)throw console.error(s.alreadyInstalled);var n=b(t,e);t.mixin(n),this.setPluginOptions(e),u(this,this.types),this.installed=!0},setPluginOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pluginOptions=t}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(g),g})}}]);
//# sourceMappingURL=chunk-6ca87c9b.65e35636.js.map