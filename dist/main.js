!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function l(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var u=l(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:d,updater:g(p,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function m(e,t,n){var a=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,h=0;function g(e,t){var n,a,o;if(t.singleton){var i=h++;n=f||(f=c(t)),a=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),a=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=l(n[a]);r[o].references--}for(var i=s(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(r=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var r,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var a=n(0),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});e.exports=r},function(e,t,n){var a=n(0),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});e.exports=r},function(e,t,n){(t=n(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]),t.push([e.i,'*{box-sizing:border-box}body{background:linear-gradient(81deg, #417090 30%, #3fb9e0 66%, #32a3d7 100%);display:grid;grid-template-areas:"menu header header header" "menu main main main" "footer footer footer footer";grid-template-columns:minmax(auto, 300px);grid-template-rows:75px 100% 50px;margin:0;min-height:100vh;overflow:hidden;padding:0;width:100vw}header{grid-area:header}.left-menu{grid-area:menu;max-width:300px;min-width:230px}main{background-color:#f0f0f0;grid-area:main}footer{background-color:#333;grid-area:footer;height:100px}',""]),e.exports=t},function(e,t,n){var a=n(0),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});e.exports=r},function(e,t,n){(t=n(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]),t.push([e.i,'.logo{display:flex;font-family:"Caveat",cursive;font-size:2.5em;height:75px;justify-content:center}.logo h2{background-clip:text;background-image:linear-gradient(263deg, #c0e6ff 37%, #49d3ff 74%, #a1e2ff 100%);color:transparent;margin:0;padding:0}.menu{display:flex;flex-direction:column;font-family:"Caveat",cursive;font-size:2em;padding:0}.menu .menu-item{display:flex;list-style-type:none}.menu .menu-item .menu-link{color:#fff;padding:10px;padding-left:40px;text-decoration:none;text-transform:capitalize;width:100%}.new-list-btn{display:flex;justify-content:center}.new-list-btn span>:last-child{margin-left:10px}.selected{background-color:#00000048}',""]),e.exports=t},function(e,t,n){(t=n(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]),t.push([e.i,'body{overflow:hidden}.task-popup{background-color:rgba(90,77,136,.588);height:100%;left:0;position:absolute;top:0;width:100%}.task-popup>div{display:flex;height:100%;justify-content:center}form{align-self:center;background-color:#96b7ff;border-radius:5px;display:flex;flex-direction:column;width:450px}form>h2{text-align:center}form>button{align-self:center;margin:10px;padding:0;width:105px}form>div{display:flex}form>div>input{width:50%}input,textarea,label{border-radius:5px;margin:10px}input{font-size:large;height:50px;padding-left:15px}textarea{font-size:x-large;height:150px;padding:15px;resize:none}.description{height:80px}label{margin-bottom:0;text-transform:capitalize}.btn-container{display:flex;justify-content:center}.btn-container>button{margin:10px;padding:5px}.btn-container span>:first-child{margin-left:5px}.error-msg{color:#e70000;flex-wrap:wrap;margin:10px;text-transform:capitalize}.error-msg span{margin-right:5px}.error-msg>::before{content:"-";padding:5px;width:10px}',""]),e.exports=t},function(e,t,n){var a=n(0),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(a(o,i),o.locals?o.locals:{});e.exports=r},function(e,t,n){(t=n(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]),t.push([e.i,'main{font-family:"Courgette",cursive;position:relative}.task-container{border-color:#858383;border-radius:5px;border-style:solid;border-width:1px;display:flex;flex-direction:column;margin:10px}.task-container>:first-child{margin:25px}.row{background-color:#fff;border-color:#858383;border-radius:5px;border-style:solid;border-width:1px;display:flex;justify-content:space-evenly;margin:10px 25px}.row>div{display:flex;flex-direction:column;justify-content:center;position:relative}.row>:last-child{display:flex;flex-direction:row}.row>:last-child>:last-child{fill:#a72828}.row button{background-color:transparent;border:0;cursor:pointer;margin:10px;padding:5px}.title-desc{font-size:smaller;width:50%}.title-desc>span{margin:5px}.title-desc>:first-child{font-size:medium;font-weight:bolder;margin-bottom:0;text-transform:capitalize}.fa-info path{fill:#2883a7}.fa-minus path{fill:#a72828}.present{background-color:#aeffc9;color:#0f8300}.past{background-color:#ffb4b4;color:#834545}.future{background-color:#b9d8ff;color:#963aff}.group-title{display:flex;justify-content:space-between}.group-title button{background-color:transparent;border:0;cursor:pointer}.close{height:75px;overflow:hidden}.open{height:auto}.create-task{margin:10px}.create-task>:last-child{margin-left:5px}',""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(3),n(5),n(2);function a(){const e=document.getElementById("mainContainer"),t=document.getElementsByClassName("task-popup");e.removeChild(t[0])}const o=e=>{const t=document.createElement("div");t.className="task-popup";const n=document.createElement("div"),o=document.createElement("form"),i=document.createElement("div");i.className="date-time",o.id="new-task",o.className="popup-frm",o.onsubmit=()=>{let t=document.getElementsByTagName("main");t=t[0].id;let n=[];""!==localStorage.getItem(t)&&(n=JSON.parse(localStorage.getItem(t)));const a={title:null,description:null,date:null,time:null,priority:null,note:null,status:null,id:null};let o=!0;const i=document.getElementById("new-task"),r=i.querySelectorAll("input, textarea, date, time");let l=document.getElementById("error-msg");return null===l?(l=document.createElement("div"),l.className="error-msg",l.id="error-msg"):l.innerHTML="",r.forEach(e=>{const{value:t,name:n}=e;if(""===t){const e=document.createElement("span");e.innerText=n+" can't be empty",l.appendChild(e),o=!1}else if(a[n]=t,"date"===n){const e=t.split("-");a[n]=`${e[1]}/${e[2]}/${e[0]}`}else if("time"===n){const e=t.split(":");"00"===e[0]?a[n]=`12:${e[1]}:00 AM`:"12"===e[0]?a[n]=`12:${e[1]}:00 PM`:e[0]<12?a[n]=`${e[0]}:${e[1]}:00 AM`:e[0]>12&&(a[n]=`${e[0]-12}:${e[1]}:00 PM`)}}),void 0===e.id?a.id=n.length:a.id=e.id,!0===o&&(a.id===e.id?n.forEach((e,t)=>{e.id===a.id&&(n[t]=a)}):n.push(a),localStorage.setItem(t,JSON.stringify(n))),i.insertBefore(l,i.childNodes[1]),o};const r=document.createElement("h2");void 0!==e.title?r.innerText="Edit Task":r.innerText="Create Task",o.appendChild(r);const l={title:null,description:null,date:null,time:null,priority:null,note:null,status:null,id:null};Object.keys(l).forEach(t=>{const n=document.createElement("label");n.htmlFor=t,n.innerHTML=t;let a=null;if("note"===t)a=document.createElement("textarea"),a.name=t,void 0!==e[t]&&(a.value=e[t]),a.setAttribute("row","5");else if("description"===t)a=document.createElement("textarea"),a.name=t,a.className=t,void 0!==e[t]&&(a.value=e[t]),a.setAttribute("row","2");else if("status"!==t&&"id"!==t)if(a=document.createElement("input"),a.name=t,"date"===t){const n=document.createElement("input");if(n.setAttribute("type","date"),n.name=t,i.appendChild(n),void 0!==e[t]){let a=e[t].split("/");a=`${a[2]}-${a[0]}-${a[1]}`,n.value=a}a=null}else if("time"===t){const o=document.createElement("input");if(o.setAttribute("type","time"),o.name=t,i.appendChild(o),void 0!==e[t]){const n=e[t].split(/[\s:]+/);let a=null;"AM"===n[3]?(a=`${n[0]}:${n[1]}`,o.value=a):(a=`${parseInt(n[0],10)+12}:${n[1]}`,o.value=a)}a=i,n.innerHTML="date & time"}else void 0!==e[t]&&("title"===t&&(a.disabled=!0),a.value=e[t]),a.setAttribute("type","text");null!==a&&(o.appendChild(n),o.appendChild(a))});const s=document.createElement("div");s.className="btn-container";const c=document.createElement("button"),d=document.createElement("span");void 0!==e.title?d.innerText="save":d.innerText="submit";const u=document.createElement("span");u.innerHTML='<i class="far fa-save"></i>',c.appendChild(d),c.appendChild(u),s.appendChild(c);const p=document.createElement("button");p.onclick=a,p.setAttribute("type","button");const m=document.createElement("span");m.innerText="cancel";const f=document.createElement("span");f.innerHTML='<i class="fas fa-ban"></i>',p.appendChild(m),p.appendChild(f),s.appendChild(p),o.appendChild(s),n.appendChild(o),t.appendChild(n),document.getElementById("mainContainer").appendChild(t)};n(8);const i=localStorage,r=document.createElement("div");function l(e,t){return e=`${e.date} ${e.time}`,t=`${t.date} ${t.time}`,(e=new Date(e))>(t=new Date(t))?-1:e<t?1:0}function s(){const{parentNode:e}=this.parentNode;let t=e.className;t=t.split(" ");let n="";t.forEach(e=>{"close"===e?(n+="open",this.innerHTML='<i class="fas fa-chevron-down"></i>'):"open"===e?(n+="close",this.innerHTML='<i class="fas fa-chevron-up"></i>'):n+=e+" "}),e.className=n}function c(){const e=document.getElementsByTagName("main")[0].id,t=JSON.parse(localStorage.getItem(e)),n=[],{innerText:a}=this.parentNode.parentNode.childNodes[1];let o=0;t.forEach(e=>{e.id!==Number(a)&&(e.id=o,n.push(e),o+=1)}),localStorage.setItem(e,JSON.stringify(n)),location.reload()}function d(){const e=document.getElementsByTagName("main")[0].id,t=JSON.parse(localStorage.getItem(e)),{innerText:n}=this.parentNode.parentNode.childNodes[1];t.forEach(e=>{e.id===Number(n)&&o(e)})}r.id="mainContainer";const u=e=>{localStorage.setItem("lastConnection",e),document.body.getElementsByTagName("main")[0].id=e;const{today:t}=(()=>{let e=new Date;const t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=`${n}/${t}/${a}`,{today:e}})();Object.keys(i).forEach(n=>{if(n===e&&(r.innerHTML="",0!==i[n].length)){const e=JSON.parse(i[n]).sort(l).reduce((e,t)=>{const{date:n}=t;return e[n]||(e[n]=[]),e[n].push(t),e},{});Object.keys(e).forEach(n=>{const a=e[n],o=document.createElement("div"),i=document.createElement("div");i.className="group-title";const l=document.createElement("span"),u=document.createElement("button");u.innerHTML='<i class="fas fa-chevron-down"></i>',u.onclick=s,i.appendChild(l),i.appendChild(u),o.appendChild(i),Object.keys(a).forEach(e=>{l.innerText=a[e].date,o.appendChild((e=>{const t=document.createElement("div");t.className="row";const n=document.createElement("label");n.innerText=e.id,n.style.display="none";const a=document.createElement("div"),o=document.createElement("span");o.innerText="status",a.appendChild(o);const i=document.createElement("div");i.className="title-desc";const r=document.createElement("span");r.innerText=e.title;const l=document.createElement("span");l.innerText=e.description,i.appendChild(r),i.appendChild(l);const s=document.createElement("div"),u=document.createElement("span");u.innerText=e.time,s.appendChild(u);const p=document.createElement("div"),m=document.createElement("button");m.innerHTML='<i class="fas fa-info"></i>',m.onclick=d;const f=document.createElement("button");return f.innerHTML='<i class="fas fa-minus"></i>',f.onclick=c,p.appendChild(m),p.appendChild(f),t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(s),t.appendChild(p),t})(a[e]))}),l.innerText===t?(l.innerText="Today",o.className="task-container present open"):l.innerText<t?o.className="task-container past close":o.className="task-container future close",r.insertBefore(o,r.childNodes[0])})}});const n=(()=>{const e=document.createElement("button");e.className="create-task",e.innerHTML="";const t=document.createElement("span");t.innerText="New Task";const n=document.createElement("span");return n.innerHTML='<i class="fas fa-plus"></i>',e.appendChild(t),e.appendChild(n),e.onclick=o,e})();r.appendChild(n)};var p=()=>{const e=document.createElement("div");const t=document.createElement("div");e.className="task-popup";const n=document.createElement("form");n.id="new-list",n.className="popup-frm";const a=document.createElement("h2");a.innerText="New List Creator";const o=document.createElement("label");o.innerText="Name";const i=document.createElement("input"),r=document.createElement("div");r.className="btn-container";const l=document.createElement("button");l.name="submit";const s=document.createElement("span");s.innerText="create";const c=document.createElement("span");c.innerHTML='<i class="far fa-save"></i>',l.appendChild(s),l.appendChild(c);const d=document.createElement("button");d.onclick=function(){document.body.removeChild(e)},d.setAttribute("type","button");const u=document.createElement("span");u.innerText="cancel";const p=document.createElement("span");p.innerHTML='<i class="fas fa-ban"></i>';const m=document.createElement("div");m.className="error-msg",d.appendChild(u),d.appendChild(p),r.appendChild(l),r.appendChild(d),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(r),n.onsubmit=function(){let e=!0;const t=document.createElement("span");return m.innerHTML="",""===i.value&&(t.innerText="Name Can't Be Empty",m.appendChild(t),n.insertBefore(m,n.childNodes[1]),e=!1),!0===e&&(localStorage.setItem(i.value,""),localStorage.setItem("lastConnection",i.value)),location.reload(),e},t.appendChild(n),e.appendChild(t),document.body.appendChild(e)};const m=document.createElement("div");(()=>{const e=document.createElement("div");e.className="logo";const t=document.createElement("h2");t.innerText="ToDoList",e.appendChild(t),m.appendChild(e);const n=document.createElement("ul");n.className="menu",Object.keys(localStorage).forEach(e=>{if("lastConnection"!==e){const t=document.createElement("li");t.className="menu-item";const a=document.createElement("a");a.className="menu-link",localStorage.getItem("lastConnection")===e&&(a.className+=" selected"),a.innerText=e,a.href="#",a.onclick=()=>{u(e),(()=>{const e=document.getElementsByClassName("menu-link");Object.keys(e).forEach(t=>{e[t].className="menu-link",e[t].innerText.toLowerCase()===localStorage.getItem("lastConnection").toLowerCase()&&(e[t].className+=" selected")})})()},t.appendChild(a),n.appendChild(t)}}),m.appendChild(n);const a=document.createElement("div");a.className="new-list-btn";const o=document.createElement("button");o.innerHTML="";const i=document.createElement("span");i.innerText="New List";const r=document.createElement("span");r.innerHTML='<i class="fas fa-plus"></i>',o.appendChild(i),o.appendChild(r),o.onclick=p,a.appendChild(o),m.appendChild(a)})();var f=m;const h=[];var g=()=>{const e={Task1:()=>{const e={title:null,description:null,date:null,time:null,priority:null,note:null,status:null,id:null};Object.keys(e).forEach(t=>{switch(t){case"title":e[t]="First Task";break;case"description":e[t]="This is the first Description";break;case"date":e[t]="04/21/2020";break;case"time":e[t]="01:20:00 PM";break;case"priority":case"status":e[t]="1";break;case"id":e[t]="0";break;default:e[t]="This is the first Note"}}),h.push(e)},Task2:()=>{const e={title:null,description:null,date:null,time:null,priority:null,note:null,status:null,id:null};Object.keys(e).forEach(t=>{switch(t){case"title":e[t]="Second Task";break;case"description":e[t]="This is the first Description";break;case"date":e[t]="03/05/2020";break;case"time":e[t]="02:20:00 AM";break;case"priority":case"status":case"id":e[t]="1";break;default:e[t]="This is the first Note"}}),h.push(e),localStorage.setItem("default",JSON.stringify(e))},Task3:()=>{const e={title:null,description:null,date:null,time:null,priority:null,note:null,status:null,id:null};Object.keys(e).forEach(t=>{switch(t){case"title":e[t]="Third Task";break;case"description":e[t]="This is the first Description";break;case"date":e[t]="10/10/2020";break;case"time":e[t]="01:20:00 AM";break;case"priority":case"status":e[t]="1";break;case"id":e[t]="2";break;default:e[t]="This is the first Note"}}),h.push(e)}};Object.values(e).map(e=>("function"==typeof e&&e.call(),null)),localStorage.setItem("default",JSON.stringify(h))};let b=null;localStorage.getItem("lastConnection")||localStorage.setItem("lastConnection","default");window.onload=()=>{b=(()=>{const e=[],t=document.createElement("header");e.push(t);const n=document.createElement("div");n.className="left-menu",e.push(n);const a=document.createElement("main");e.push(a);const o=document.createElement("footer");return e.push(o),e.forEach(e=>{document.body.appendChild(e)}),{header:t,leftMenu:n,main:a,footer:o}})();const e=JSON.parse(localStorage.getItem("default"));b.main.id="default",null===e&&g(),u(localStorage.getItem("lastConnection")),b.leftMenu.appendChild(f),b.main.appendChild(r)}}]);