!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="uXl7")}({EBst:function(e){!function(){"use strict";function t(){}function n(e,n){var o,r,i,a,u=U;for(a=arguments.length;a-- >2;)B.push(arguments[a]);for(n&&null!=n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((r=B.pop())&&void 0!==r.pop)for(a=r.length;a--;)B.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?u[u.length-1]+=r:u===U?u=[r]:u.push(r),o=i;var p=new t;return p.nodeName=e,p.children=u,p.attributes=null==n?void 0:n,p.key=null==n?void 0:n.key,void 0!==b.vnode&&b.vnode(p),p}function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e,t){return n(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==w.push(e)&&(b.debounceRendering||S)(a)}function a(){var e,t=w;for(w=[];e=t.pop();)e.__d&&P(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&p(e,t.nodeName):n||e._componentConstructor===t.nodeName}function p(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function l(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===G.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,a):e.removeEventListener(t,f,a),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)h(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var u=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function h(e,t,n){try{e[t]=n}catch(e){}}function f(e){return this.__l[e.type](b.event&&b.event(e)||e)}function E(){for(var e;e=k.pop();)b.afterMount&&b.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,o,r,i){K++||(L=null!=r&&void 0!==r.ownerSVGElement,Y=null!=e&&!("__preactattr_"in e));var a=A(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--K||(Y=!1,i||E()),a}function A(e,t,n,o,r){var i=e,a=L;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return C(e,t,n,o);if(L="svg"===u||"foreignObject"!==u&&L,u+="",(!e||!p(e,u))&&(i=s(u,L),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0)}var c=i.firstChild,l=i.__preactattr_,d=t.children;if(null==l){l=i.__preactattr_={};for(var h=i.attributes,f=h.length;f--;)l[h[f].name]=h[f].value}return!Y&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&v(i,d,n,o,Y||null!=l.dangerouslySetInnerHTML),O(i,t.attributes,l),L=a,i}function v(e,t,n,o,r){var i,a,p,c,s,d=e.childNodes,h=[],f={},E=0,_=0,v=d.length,T=0,O=t?t.length:0;if(0!==v)for(var m=0;m<v;m++){var N=d[m],y=N.__preactattr_,M=O&&y?N._component?N._component.__k:y.key:null;null!=M?(E++,f[M]=N):(y||(void 0!==N.splitText?!r||N.nodeValue.trim():r))&&(h[T++]=N)}if(0!==O)for(var m=0;m<O;m++){c=t[m],s=null;var M=c.key;if(null!=M)E&&void 0!==f[M]&&(s=f[M],f[M]=void 0,E--);else if(!s&&_<T)for(i=_;i<T;i++)if(void 0!==h[i]&&u(a=h[i],c,r)){s=a,h[i]=void 0,i===T-1&&T--,i===_&&_++;break}s=A(s,c,n,o),p=d[m],s&&s!==e&&s!==p&&(null==p?e.appendChild(s):s===p.nextSibling?l(p):e.insertBefore(s,p))}if(E)for(var m in f)void 0!==f[m]&&D(f[m],!1);for(;_<=T;)void 0!==(s=h[T--])&&D(s,!1)}function D(e,t){var n=e._component;n?I(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||l(e),T(e))}function T(e){for(e=e.lastChild;e;){var t=e.previousSibling;D(e,!0),e=t}}function O(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||d(e,o,n[o],n[o]=void 0,L);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||d(e,o,n[o],n[o]=t[o],L)}function m(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function N(e,t,n){var o,r=H[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),R.call(o,t,n)):(o=new R(t,n),o.constructor=e,o.render=y),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.__b=r[i].__b,r.splice(i,1);break}return o}function y(e,t,n){return this.constructor(e,n)}function M(e,t,n,o,r){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===b.syncComponentUpdates&&e.base?i(e):P(e,1,r)),e.__r&&e.__r(e))}function P(e,t,n,r){if(!e.__x){var i,a,u,p=e.props,s=e.state,l=e.context,d=e.__p||p,h=e.__s||s,f=e.__c||l,A=e.base,v=e.__b,T=A||v,O=e._component,m=!1;if(A&&(e.props=d,e.state=h,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,s,l)?m=!0:e.componentWillUpdate&&e.componentWillUpdate(p,s,l),e.props=p,e.state=s,e.context=l),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!m){i=e.render(p,s,l),e.getChildContext&&(l=o(o({},l),e.getChildContext()));var y,C,R=i&&i.nodeName;if("function"==typeof R){var g=c(i);a=O,a&&a.constructor===R&&g.key==a.__k?M(a,g,1,l,!1):(y=a,e._component=a=N(R,g,l),a.__b=a.__b||v,a.__u=e,M(a,g,0,l,!1),P(a,1,n,!0)),C=a.base}else u=T,y=O,y&&(u=e._component=null),(T||1===t)&&(u&&(u._component=null),C=_(u,i,l,n||!A,T&&T.parentNode,!0));if(T&&C!==T&&a!==O){var B=T.parentNode;B&&C!==B&&(B.replaceChild(C,T),y||(T._component=null,D(T,!1)))}if(y&&I(y),e.base=C,C&&!r){for(var U=e,S=e;S=S.__u;)(U=S).base=C;C._component=U,C._componentConstructor=U.constructor}}if(!A||n?k.unshift(e):m||(e.componentDidUpdate&&e.componentDidUpdate(d,h,f),b.afterUpdate&&b.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);K||r||E()}}function C(e,t,n,o){for(var r=e&&e._component,i=r,a=e,u=r&&e._componentConstructor===t.nodeName,p=u,s=c(t);r&&!p&&(r=r.__u);)p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(M(r,s,3,n,o),e=r.base):(i&&!u&&(I(i),e=a=null),r=N(t.nodeName,s,n),e&&!r.__b&&(r.__b=e,a=null),M(r,s,1,n,o),e=r.base,a&&e!==a&&(a._component=null,D(a,!1))),e}function I(e){b.beforeUnmount&&b.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?I(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,l(t),m(e),T(t)),e.__r&&e.__r(null)}function R(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function g(e,t,n){return _(n,e,{},!1,t,!1)}var b={},B=[],U=[],S="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,G=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,w=[],k=[],K=0,L=!1,Y=!1,H={};o(R.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),P(this,2)},render:function(){}});var x={h:n,createElement:n,cloneElement:r,Component:R,render:g,rerender:a,options:b};e.exports=x}()},FWi5:function(){},JkW7:function(e,t,n){"use strict";function o(e){var t=d({},h);return t.KEY_CODE=e,t}function r(e,t,n){var o=d({},f);return o.JOYSTICK=d({},f.JOYSTICK),e||0===e?o.BUTTON_ID=e:void 0!==t&&void 0!==n&&(o.JOYSTICK.AXIS_ID=t,o.JOYSTICK.IS_POSITIVE=n),o}function i(e,t,n,o){var r=d({},E);r.ELEMENT=e,r.TYPE=t,r.DIRECTION=n,r.EVENT_HANDLER=o;var i=r.ELEMENT.getBoundingClientRect();r.BOUNDING_RECT=i;var a=function(e){r.EVENT_HANDLER&&r.EVENT_HANDLER(e)};return r.ELEMENT.addEventListener("touchstart",a),r.ELEMENT.addEventListener("touchmove",a),r.ELEMENT.addEventListener("touchend",a),r.ELEMENT.addEventListener("mousedown",a),r.ELEMENT.addEventListener("mouseup",a),r}function a(){return d({},_)}function u(e,t){return e.axes[t]||0}function p(e,t){return!!e.buttons[t]&&e.buttons[t].pressed}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("EBst"),d=(n("FWi5"),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),h={ACTIVE:!1,KEY_CODE:void 0},f={ACTIVE:!1,BUTTON_ID:void 0,JOYSTICK:{AXIS_ID:void 0,IS_POSITIVE:void 0}},E={ACTIVE:!1,ELEMENT:void 0,TYPE:void 0,DIRECTION:void 0,EVENT_HANDLER:void 0,BOUNDING_RECT:void 0},_={UP:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},RIGHT:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},DOWN:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},LEFT:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},A:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},B:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},SELECT:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]},START:{KEYBOARD:[],GAMEPAD:[],TOUCHPAD:[]}},A={BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,W:87,A:65,S:83,D:68,Q:81,E:69,X:88,Z:90,SEMI_COLON:186,SINGLE_QUOTE:222,BACK_SLASH:220,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105},v=a();v.UP.KEYBOARD.push(o(A.ARROW_UP)),v.UP.KEYBOARD.push(o(A.W)),v.UP.KEYBOARD.push(o(A.NUMPAD_8)),v.UP.GAMEPAD.push(r(12)),v.UP.GAMEPAD.push(r(!1,1,!1)),v.UP.GAMEPAD.push(r(!1,3,!1)),v.RIGHT.KEYBOARD.push(o(A.ARROW_RIGHT)),v.RIGHT.KEYBOARD.push(o(A.D)),v.RIGHT.KEYBOARD.push(o(A.NUMPAD_6)),v.RIGHT.GAMEPAD.push(r(15)),v.RIGHT.GAMEPAD.push(r(!1,0,!0)),v.RIGHT.GAMEPAD.push(r(!1,2,!0)),v.DOWN.KEYBOARD.push(o(A.ARROW_DOWN)),v.DOWN.KEYBOARD.push(o(A.S)),v.DOWN.KEYBOARD.push(o(A.NUMPAD_5)),v.DOWN.KEYBOARD.push(o(A.NUMPAD_2)),v.DOWN.GAMEPAD.push(r(13)),v.DOWN.GAMEPAD.push(r(!1,1,!0)),v.DOWN.GAMEPAD.push(r(!1,3,!0)),v.LEFT.KEYBOARD.push(o(A.ARROW_LEFT)),v.LEFT.KEYBOARD.push(o(A.A)),v.LEFT.KEYBOARD.push(o(A.NUMPAD_4)),v.LEFT.GAMEPAD.push(r(14)),v.LEFT.GAMEPAD.push(r(!1,0,!1)),v.LEFT.GAMEPAD.push(r(!1,2,!1)),v.A.KEYBOARD.push(o(A.X)),v.A.KEYBOARD.push(o(A.SEMI_COLON)),v.A.KEYBOARD.push(o(A.NUMPAD_7)),v.A.GAMEPAD.push(r(0)),v.A.GAMEPAD.push(r(1)),v.B.KEYBOARD.push(o(A.Z)),v.B.KEYBOARD.push(o(A.ESCAPE)),v.B.KEYBOARD.push(o(A.SINGLE_QUOTE)),v.B.KEYBOARD.push(o(A.BACKSPACE)),v.B.KEYBOARD.push(o(A.NUMPAD_9)),v.B.GAMEPAD.push(r(2)),v.B.GAMEPAD.push(r(3)),v.START.KEYBOARD.push(o(A.RETURN)),v.START.KEYBOARD.push(o(A.SPACE)),v.START.KEYBOARD.push(o(A.NUMPAD_3)),v.START.GAMEPAD.push(r(9)),v.SELECT.KEYBOARD.push(o(A.SHIFT)),v.SELECT.KEYBOARD.push(o(A.TAB)),v.SELECT.KEYBOARD.push(o(A.BACK_SLASH)),v.SELECT.KEYBOARD.push(o(A.NUMPAD_1)),v.SELECT.GAMEPAD.push(r(8));var D=v,T=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),O=function(){function e(){this.gamepadAnalogStickDeadZone=.25,this.keyMapKeys=Object.keys(a()),this.keyMap=D}return T(e,[{key:"initialize",value:function(e){var t=this;window.addEventListener("keyup",function(e){t.updateKeyboard(e)}),window.addEventListener("keydown",function(e){t.updateKeyboard(e)}),window.addEventListener("resize",function(){t.updateTouchpadRect()}),e&&(this.keyMap=e)}},{key:"addTouchInput",value:function(e,t,n,o){var r=this,a=void 0;a=i(t,n,o,function(t){r.updateTouchpad(e,a,t)}),this.keyMap[e].TOUCHPAD.push(a)}},{key:"getState",value:function(){var e=this;this.updateGamepad();var t={};return this.keyMapKeys.forEach(function(n){return e.keyMap[n].KEYBOARD.some(function(e){return e.ACTIVE})?void(t[n]=!0):e.keyMap[n].GAMEPAD.some(function(e){return e.ACTIVE})?void(t[n]=!0):e.keyMap[n].TOUCHPAD.some(function(e){return e.ACTIVE})?void(t[n]=!0):void(t[n]=!1)}),t}},{key:"updateKeyboard",value:function(e){var t=this,n=!1;"keydown"===e.type&&(n=!0),this.keyMapKeys.forEach(function(o){t.keyMap[o].KEYBOARD.forEach(function(r,i){r.KEY_CODE===e.keyCode&&(t.keyMap[o].KEYBOARD[i].ACTIVE=n)})})}},{key:"updateGamepad",value:function(){for(var e=this,t=navigator.getGamepads?navigator.getGamepads():[],n=0;n<t.length;n++){(function(n){var o=t[n];if(!o)return"continue";e.keyMapKeys.forEach(function(t){e.keyMap[t].GAMEPAD.forEach(function(n,r){(e.keyMap[t].GAMEPAD[r].BUTTON_ID||0===e.keyMap[t].GAMEPAD[r].BUTTON_ID)&&(e.keyMap[t].GAMEPAD[r].ACTIVE=p(o,e.keyMap[t].GAMEPAD[r].BUTTON_ID)),void 0!==e.keyMap[t].GAMEPAD[r].JOYSTICK.AXIS_ID&&void 0!==e.keyMap[t].GAMEPAD[r].JOYSTICK.IS_POSITIVE&&(e.keyMap[t].GAMEPAD[r].ACTIVE=e.keyMap[t].GAMEPAD[r].JOYSTICK.IS_POSITIVE?u(o,e.keyMap[t].GAMEPAD[r].JOYSTICK.AXIS_ID)>+e.gamepadAnalogStickDeadZone:u(o,e.keyMap[t].GAMEPAD[r].JOYSTICK.AXIS_ID)<-e.gamepadAnalogStickDeadZone)})})})(n)}}},{key:"updateTouchpadRect",value:function(){var e=this;this.keyMapKeys.forEach(function(t){e.keyMap[t].TOUCHPAD.forEach(function(n,o){var r=e.keyMap[t].TOUCHPAD[o].ELEMENT.getBoundingClientRect();e.keyMap[t].TOUCHPAD[o].BOUNDING_RECT=r})})}},{key:"resetTouchDpad",value:function(){var e=this;["UP","RIGHT","DOWN","LEFT"].forEach(function(t){e.keyMap[t].TOUCHPAD.forEach(function(e){e.ACTIVE=!1})})}},{key:"updateTouchpad",value:function(e,t,n){if(n&&(!n.type.includes("touch")||n.touches))if(n.preventDefault(),"touchstart"===n.type||"touchmove"===n.type||"mousedown"===n.type){if("DPAD"===t.TYPE){var o=void 0;n.type.includes("touch")?o=n.touches[0]:n.type.includes("mouse")&&(o=n);var r=(t.BOUNDING_RECT.right-t.BOUNDING_RECT.left)/2,i=(t.BOUNDING_RECT.bottom-t.BOUNDING_RECT.top)/2,a=o.clientX-t.BOUNDING_RECT.left,u=o.clientY-t.BOUNDING_RECT.top;if(a>r+t.BOUNDING_RECT.width/2+50)return;var p=t.BOUNDING_RECT.width/8,c=Math.abs(r-a)+p>Math.abs(i-u);if(c){var s=t.BOUNDING_RECT.width/20;if(Math.abs(t.BOUNDING_RECT.width/2-a)>s){var l=a<t.BOUNDING_RECT.width/2;t.ACTIVE=!(!l||"LEFT"!==t.DIRECTION)||!l&&"RIGHT"===t.DIRECTION}}else{var d=u<t.BOUNDING_RECT.height/2;t.ACTIVE=!(!d||"UP"!==t.DIRECTION)||!d&&"DOWN"===t.DIRECTION}}"BUTTON"===t.TYPE&&(t.ACTIVE=!0)}else"DPAD"===t.TYPE&&this.resetTouchDpad(),"BUTTON"===t.TYPE&&(t.ACTIVE=!1)}}]),e}(),m=new O;n.d(t,"default",function(){return g});var N=Object(l.h)("h1",null,"Responsive Gamepad State:"),y=Object(l.h)("pre",{id:"gamepadState"}),M=Object(l.h)("svg",{id:"gamepadDpad",fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(l.h)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(l.h)("path",{d:"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"})),P=Object(l.h)("svg",{id:"gamepadStart",fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(l.h)("path",{d:"M19 13H5v-2h14v2z"}),Object(l.h)("path",{d:"M0 0h24v24H0z",fill:"none"})),C=Object(l.h)("svg",{id:"gamepadSelect",fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(l.h)("path",{d:"M19 13H5v-2h14v2z"}),Object(l.h)("path",{d:"M0 0h24v24H0z",fill:"none"})),I=Object(l.h)("svg",{id:"gamepadA",fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(l.h)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),Object(l.h)("path",{d:"M0 0h24v24H0z",fill:"none"})),R=Object(l.h)("svg",{id:"gamepadB",fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},Object(l.h)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),Object(l.h)("path",{d:"M0 0h24v24H0z",fill:"none"})),g=function(e){function t(){return c(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentDidMount=function(){var e=this;m.initialize(D);var t=document.getElementById("gamepadDpad"),n=document.getElementById("gamepadStart"),o=document.getElementById("gamepadSelect"),r=document.getElementById("gamepadA"),i=document.getElementById("gamepadB");m.addTouchInput("UP",t,"DPAD","UP"),m.addTouchInput("RIGHT",t,"DPAD","RIGHT"),m.addTouchInput("DOWN",t,"DPAD","DOWN"),m.addTouchInput("LEFT",t,"DPAD","LEFT"),m.addTouchInput("A",r,"BUTTON"),m.addTouchInput("B",i,"BUTTON"),m.addTouchInput("START",n,"BUTTON"),m.addTouchInput("SELECT",o,"BUTTON"),requestAnimationFrame(function(){e.displayGamepadState()})},t.prototype.displayGamepadState=function(){var e=this;document.getElementById("gamepadState").innerHTML=JSON.stringify(m.getState(),null,4),requestAnimationFrame(function(){e.displayGamepadState()})},t.prototype.render=function(){return Object(l.h)("div",null,N,y,Object(l.h)("div",{class:"gamepad"},M,P,C,I,R))},t}(l.Component)},uXl7:function(e,t,n){"use strict";var o=n("EBst");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};a()}}});
//# sourceMappingURL=bundle.a9b12.js.map