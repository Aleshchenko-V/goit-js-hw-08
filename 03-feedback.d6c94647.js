!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function v(t,e,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(o);function S(e){var n=r,o=i;return r=i=void 0,l=e,u=t.apply(o,n)}function h(t){return l=t,f=setTimeout(j,e),s?S(t):u}function O(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=a}function j(){var t=p();if(O(t))return T(t);f=setTimeout(j,function(t){var n=e-(t-c);return d?m(n,a-(t-l)):n}(t))}function T(t){return f=void 0,v&&r?S(t):(r=i=void 0,u)}function w(){var t=p(),n=O(t);if(r=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(d)return f=setTimeout(j,e),S(c)}return void 0===f&&(f=setTimeout(j,e)),u}return e=b(e)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(b(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=a.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:r,maxWait:e,trailing:i})};const S={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},h="feedback-form-state",O={};!function(){try{const t=JSON.parse(localStorage.getItem(h)),{email:e,message:n}=t;console.log(e,n),S.input.value=e||"",S.textarea.value=n||""}catch(t){console.log(t.name)}}(),S.form.addEventListener("input",t(e)((function(t){O[t.target.name]=t.target.value;try{const t=localStorage.getItem(h),e=JSON.parse(t),n=JSON.stringify({...e,...O});localStorage.setItem(h,n)}catch{const t=JSON.stringify(O);localStorage.setItem(h,t)}}),500)),S.form.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem(h),t.currentTarget.reset(),console.log(O)}))}();
//# sourceMappingURL=03-feedback.d6c94647.js.map