require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({131:[function(require,module,exports) {
module.exports = {
  "countdown": "_countdown_15nbx_1"
};
},{}],91:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("react"),r=s(t),n=require("classnames"),a=s(n),i=require("uiw"),o=require("prop-types"),u=s(o),l=require("./index.less"),c=s(l);function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){return e<10?"0"+e:e},y=36e5,m=6e4,b=function(n){function i(e){p(this,i);var t=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e)),r=Date.now(),n=t.getValidDate(e.target),a=n-r;return t.state={current:r,target:n,timeleft:a},t.interval=e.interval,t}return v(i,t.Component),e(i,[{key:"getValidDate",value:function(e){try{return"[object Date]"===Object.prototype.toString.call(e)?e.getTime():new Date(e).getTime()}catch(e){throw new Error("invalid target prop",e)}}},{key:"componentDidMount",value:function(){this.tick()}},{key:"componentWillReceiveProps",value:function(e){this.getValidDate(this.props.target)!==this.getValidDate(e.target)&&(this.clear(),this.tick())}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"tick",value:function(){var e=this;this.timer=setInterval(function(){e.count()},this.interval)}},{key:"clear",value:function(){this.timer&&clearInterval(this.timer)}},{key:"count",value:function(){var e=this.props.onEnd,t=this.state.timeleft;t>this.interval?this.setState({timeleft:t-this.interval}):(this.setState({timeleft:0},this.clear),e&&e())}},{key:"format",value:function(e){var t=d(Math.floor(e/y)),r=d(Math.floor((e-t*y)/m));return t+":"+r+":"+d(Math.floor((e-t*y-r*m)/1e3))}},{key:"render",value:function(){var e=this.props,t=e.format,n=e.className,i=this.state.timeleft,o=(0,a.default)(c.default.countdown,f({},n,n)),u=i>0?i:0;return r.default.createElement("span",{className:o},t?t(u):this.format(u))}}]),i}();exports.default=b,b.propTypes={target:u.default.oneOfType([u.default.instanceOf(Date),u.default.number,u.default.string]),interval:u.default.number},b.defaultProps={interval:1e3};
},{"react":7,"classnames":87,"uiw":85,"prop-types":84,"./index.less":131}],44:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=a(e),n=require("../../../components/CountDown"),o=a(n),r=require("../../../layouts/PageHeaderLayout"),u=a(r);function a(e){return e&&e.__esModule?e:{default:e}}var l=Date.now()+264e5;exports.default=function(){return t.default.createElement(u.default,{title:"倒计时",content:"倒计时组件。"},t.default.createElement(o.default,{onEnd:function(){console.log("onEnd")},target:l,className:"my-countdown"}))};
},{"react":7,"../../../components/CountDown":91,"../../../layouts/PageHeaderLayout":79}]},{},[44])