function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(t,e,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function S(t){return c=t,f=setTimeout(O,e),l?b(t):a}function h(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function O(){var t=g();if(h(t))return j(t);f=setTimeout(O,function(t){var n=e-(t-u);return s?m(n,i-(t-c)):n}(t))}function j(t){return f=void 0,p&&o?b(t):(o=r=void 0,a)}function w(){var t=g(),n=h(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,e),b(u)}return void 0===f&&(f=setTimeout(O,e)),a}return e=y(e)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:j(g())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(t,e,{leading:o,maxWait:e,trailing:r})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};let S={};!function(){try{const t=JSON.parse(localStorage.getItem("feedback-form-state")),{email:e,message:n}=t;b.input.value=e||"",b.textarea.value=n||"",S={...S,...t}}catch(t){console.log("localStorage is empty now!")}}(),b.form.addEventListener("input",t(e)((function(t){S[t.target.name]=t.target.value;try{const t=localStorage.getItem("feedback-form-state"),e=JSON.parse(t),n=JSON.stringify({...e,...S});localStorage.setItem("feedback-form-state",n)}catch{const t=JSON.stringify(S);localStorage.setItem("feedback-form-state",t)}}),500)),b.form.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),t.currentTarget.reset(),console.log(S)}));
//# sourceMappingURL=03-feedback.767d3f12.js.map
