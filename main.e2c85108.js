parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=4,c=18,d=90,l=document.querySelector("table"),u=l.querySelectorAll("thead th"),s=l.querySelector("tbody"),p=Array.from(s.querySelectorAll("tr")),m=document.createElement("form");m.classList.add("new-employee-form"),document.body.appendChild(m);var b=document.createElement("label");b.textContent="Name:",m.appendChild(b);var f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("data-qa","name"),f.setAttribute("name","name"),f.setAttribute("autocomplete","name"),f.setAttribute("required",!0),b.appendChild(f);var v=document.createElement("label");v.textContent="Position:",m.appendChild(v);var h=document.createElement("input");h.setAttribute("type","text"),h.setAttribute("data-qa","position"),h.setAttribute("required",!0),v.appendChild(h);var y=document.createElement("label");y.textContent="Office:",m.appendChild(y);var C=document.createElement("select");C.setAttribute("required",!0),y.appendChild(C);var A=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];A.forEach(function(e){var t=document.createElement("option");t.value=e,t.textContent=e,C.appendChild(t)});var E=document.createElement("label");E.textContent="Age:",m.appendChild(E);var x=document.createElement("input");x.setAttribute("type","number"),x.setAttribute("data-qa","age"),x.setAttribute("required",!0),E.appendChild(x);var S=document.createElement("label");S.textContent="Salary:",m.appendChild(S);var q=document.createElement("input");q.setAttribute("type","number"),x.setAttribute("data-qa","salary"),q.setAttribute("required",!0),S.appendChild(q);var g=document.createElement("button");function L(e,t){var n=document.createElement("div");n.setAttribute("data-qa","notification"),n.classList.add("notification"),n.textContent=e+":"+t,document.body.appendChild(n),setTimeout(function(){n.remove()},3e3)}function I(e){(p=Array.from(s.querySelectorAll("tr"))).forEach(function(e){e.classList.contains("active")&&e.classList.remove("active")}),e.classList.contains("active")||e.classList.add("active")}function w(e,t){return function(n,r){if(4===e){var a=parseInt(n.children[4].textContent.slice(1).replace(",","")),o=parseInt(r.children[4].textContent.slice(1).replace(",",""));if(a===o)return 0;var i=a>o?1:-1;return"asc"===t?i:-i}var c=n.children[e].textContent,d=r.children[e].textContent;if(c===d)return 0;var l=c>d?1:-1;return"asc"===t?l:-l}}g.setAttribute("type","submit"),g.innerText="Save to table",m.appendChild(g),m.addEventListener("submit",function(e){function t(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}e.preventDefault();var n=f.value.trim(),r=h.value.trim(),a=C.value,o=parseInt(x.value),l=parseInt(q.value.trim()),u=!0;if(n.length<i&&(u=!1,L("error","Name should contain at least ".concat(i," letters."))),(o<c||o>d)&&(u=!1,L("error","Age should be between ".concat(c," and ").concat(d,"."))),l<0&&(u=!1,L("error","Заработная плата не может быть отрицательной.")),u){var p=document.createElement("tr"),b=document.createElement("td"),v=document.createElement("td"),y=document.createElement("td"),A=document.createElement("td"),E=document.createElement("td");b.textContent=t(n),v.textContent=t(r),y.textContent=a,A.textContent=o,E.textContent="$"+parseInt(l).toLocaleString("en-US"),p.appendChild(b),p.appendChild(v),p.appendChild(y),p.appendChild(A),p.appendChild(E),s.appendChild(p),p.addEventListener("click",function(){I(p)}),L("success","New employee added to the table."),m.reset()}}),p.forEach(function(e){e.addEventListener("click",function(){I(e)})}),u.forEach(function(t){t.addEventListener("click",function(){var n;s=l.querySelector("tbody"),p=Array.from(s.querySelectorAll("tr"));var r="asc"===t.getAttribute("data-sort")?"desc":"asc",a=w(t.cellIndex,r),o=p.sort(a);(n=s).append.apply(n,e(o)),t.setAttribute("data-sort",r)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e2c85108.js.map