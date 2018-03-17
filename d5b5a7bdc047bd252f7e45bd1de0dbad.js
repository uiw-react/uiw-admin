require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({101:[function(require,module,exports) {
!function(){"use strict";var e={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var f=arguments[o];if(f){var i=typeof f;if("string"===i||"number"===i)r.push(f);else if(Array.isArray(f))r.push(n.apply(null,f));else if("object"===i)for(var t in f)e.call(f,t)&&f[t]&&r.push(t)}}return r.join(" ")}"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return n}):window.classNames=n}();
},{}],100:[function(require,module,exports) {
module.exports = {
  "ellipsis": "_ellipsis_1q4an_1",
  "lines": "_lines_1q4an_7",
  "shadow": "_shadow_1q4an_10",
  "lineClamp": "_lineClamp_1q4an_17"
};
},{}],74:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=require("react"),r=h(n),i=require("classNames"),o=h(i),a=require("prop-types"),l=h(a),s=require("uiw"),u=require("./index.less"),f=h(u);function h(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function v(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var b=""!==document.body.style.webkitLineClamp,y=function(e){var t=e.text,n=e.length,i=e.tooltip,o=v(e,["text","length","tooltip"]);if("string"!=typeof t)throw new Error("Ellipsis 组件内容必须是字符串类型!");if(t.length<=n||n<0)return r.default.createElement("span",o,t);var a=void 0;return a=n-"...".length<=0?"":t.slice(0,n-"...".length),i?r.default.createElement(s.Tooltip,{content:t},a,"..."):r.default.createElement("span",o,a,"...")},g=function(i){function a(e){d(this,a);var t=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={text:"",targetCount:0},t}return m(a,n.Component),t(a,[{key:"componentDidMount",value:function(){this.node&&this.computeLine()}},{key:"componentWillReceiveProps",value:function(e){this.props.lines!==e.lines&&this.computeLine()}},{key:"computeLine",value:function(){var e=this.props.lines;if(e&&!b){var t=this.shadowChildren.innerText,n=e*parseInt(getComputedStyle(this.root).lineHeight,10);this.content.style.height=n+"px";var r=this.shadowChildren.offsetHeight,i=this.shadow.firstChild;if(r<=n)return void this.setState({text:t,targetCount:t.length});var o=t.length,a=Math.floor(o/2),l=this.bisection(n,a,0,o,t,i);this.setState({text:t,targetCount:l})}}},{key:"bisection",value:function(e,t,n,r,i,o){o.innerHTML=i.substring(0,t)+"...";var a=o.offsetHeight;return a<=e?(o.innerHTML=i.substring(0,t+1)+"...",(a=o.offsetHeight)>e?t:(n=t,t=Math.floor((r-n)/2)+n,this.bisection(e,t,n,r,i,o))):t-1<0?t:(o.innerHTML=i.substring(0,t-1)+"...",(a=o.offsetHeight)<=e?t-1:(r=t,t=Math.floor((r-n)/2)+n,this.bisection(e,t,n,r,i,o)))}},{key:"handleRoot",value:function(e){this.root=e}},{key:"handleContent",value:function(e){this.content=e}},{key:"handleNode",value:function(e){this.node=e}},{key:"handleShadow",value:function(e){this.shadow=e}},{key:"handleShadowChildren",value:function(e){this.shadowChildren=e}},{key:"render",value:function(){var t,n=this.state,i=n.text,a=n.targetCount,l=this.props,u=l.children,h=l.lines,d=l.length,p=l.className,m=l.tooltip,g=v(l,["children","lines","length","className","tooltip"]),w=(0,o.default)(f.default.ellipsis,p,(c(t={},f.default.lines,h&&!b),c(t,f.default.linesClamp,h&&b),t));if(!h&&!d)return r.default.createElement("span",e({className:w},g),u);if(!h)return r.default.createElement(y,e({className:w,length:d,text:u||"",tooltip:m},g));var E="uiw-pro-ellipsis-"+(new Date).getTime()+Math.floor(100*Math.random());if(b){var C="#"+E+"{-webkit-line-clamp:"+h+";}";return r.default.createElement("div",e({id:E,className:w},g),r.default.createElement("style",null,C),m?r.default.createElement(s.Tooltip,{content:i},u):u)}var O=r.default.createElement("span",{ref:this.handleNode.bind(this)},a>0&&i.substring(0,a),a>0&&a<i.length&&"...");return r.default.createElement("div",e({},g,{ref:this.handleRoot.bind(this),className:w}),r.default.createElement("div",{ref:this.handleContent.bind(this)},m?r.default.createElement(s.Tooltip,{content:i},O):O,r.default.createElement("div",{className:f.default.shadow,ref:this.handleShadowChildren.bind(this)},u),r.default.createElement("div",{className:f.default.shadow,ref:this.handleShadow.bind(this)},r.default.createElement("span",null,i))))}}]),a}();exports.default=g,g.propTypes={tooltip:l.default.bool,length:l.default.number,lines:l.default.number},g.defaultProps={};
},{"react":11,"classNames":101,"prop-types":80,"uiw":69,"./index.less":100}],73:[function(require,module,exports) {
module.exports = {
  "cardItem": "_cardItem_6k8w2_1"
};
},{}],33:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("react-router-dom"),r=require("react"),n=d(r),l=require("uiw"),o=require("../../../layouts/PageHeaderLayout"),a=d(o),u=require("../../../components/Ellipsis"),i=d(u),c=require("./index.less"),f=d(c);function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(t){function o(){return s(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return m(o,r.Component),e(o,[{key:"render",value:function(){return n.default.createElement(a.default,{title:"Ellipsis文本自动省略号",content:"文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。"},n.default.createElement(l.Card,{className:f.default.cardItem,title:"通过设置 length 属性指定文本最长长度，如果超过这个长度会自动截取。",noHover:!0},n.default.createElement("div",null,"原始文本：曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 如果非要在这份爱上加上一个期限，我希望是"),n.default.createElement(i.default,{length:100},"曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 如果非要在这份爱上加上一个期限，我希望是")),n.default.createElement(l.Card,{className:f.default.cardItem,title:"通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。",noHover:!0},n.default.createElement("div",null,"原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气"),n.default.createElement(i.default,{length:10,tooltip:!0},"亮金大气亮金大气亮金大气亮金大气亮金大气")),n.default.createElement(l.Card,{className:f.default.cardItem,title:"通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。",noHover:!0},n.default.createElement("div",null,"原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气"),n.default.createElement("div",{style:{width:200}},n.default.createElement(i.default,{lines:3},"亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气"))))}}]),o}();exports.default=y;
},{"react-router-dom":15,"react":11,"uiw":69,"../../../layouts/PageHeaderLayout":62,"../../../components/Ellipsis":74,"./index.less":73}]},{},[33])