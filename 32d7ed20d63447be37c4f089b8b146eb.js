require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({94:[function(require,module,exports) {
module.exports = {
  "wapper": "_wapper_13jec_1",
  "sider": "_sider_13jec_4",
  "logo": "_logo_13jec_38",
  "header": "_header_13jec_63",
  "headerLeft": "_headerLeft_13jec_70",
  "headerRight": "_headerRight_13jec_84",
  "item": "_item_13jec_87",
  "breadcrumb": "_breadcrumb_13jec_105",
  "content": "_content_13jec_117"
};
},{}],20:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),t=require("react-router-dom"),a=require("react"),n=f(a),r=require("prop-types"),l=f(r),u=require("../routes/Exception/404"),c=f(u),o=require("uiw"),i=require("./BasicLayout.less"),d=f(i);function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(r){function l(e){m(this,l);var t=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.menus=e.navData.reduce(function(e,t){return e.concat(t.children)},[]),t.state={},t}return p(l,a.Component),e(l,[{key:"getChildContext",value:function(){return{location:this.props.location,breadcrumbNameMap:this.getBreadcrumbNameMap(),renderBreadcrumb:this.renderBreadcrumb()}}},{key:"getBreadcrumbNameMap",value:function(){var e=this.props,t=e.navData,a=(0,e.getRouteData)("BasicLayout"),n=t.reduce(function(e,t){return e.concat(t.children)},[]),r=this.getMenuData(n,""),l={};return a.concat(r).forEach(function(e){l[e.path]=e.name}),l}},{key:"getMenuData",value:function(e,t){var a=this,n=[];return e.forEach(function(e){e.children&&(n.push({path:t+"/"+e.path,name:e.name}),n=n.concat(a.getMenuData(e.children,t+"/"+e.path)))}),n}},{key:"getNavMenuItems",value:function(e){var a=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?e.map(function(e,l){if(!e.name)return null;var u=void 0;if(u=0===e.path.indexOf("http")?e.path:(r+"/"+(e.path||"")).replace(/\/+/g,"/"),e.children&&e.children.length&&e.children.some(function(e){return e.name}))return n.default.createElement(o.Menu.SubMenu,{index:u,title:e.icon?n.default.createElement("span",null," ",n.default.createElement(o.Icon,{type:e.icon})," ",n.default.createElement("span",null,e.name)," "):e.name,key:u},a.getNavMenuItems(e.children,u));var c=e.icon&&n.default.createElement(o.Icon,{type:e.icon});return n.default.createElement(o.Menu.Item,{key:u,index:u},/^https?:\/\//.test(u)?n.default.createElement("a",{href:u,target:e.target}," ",c,n.default.createElement("span",null,e.name)," "):n.default.createElement(t.Link,{to:u,target:e.target,replace:u===a.props.location.pathname},c,n.default.createElement("span",null,e.name)))}):[]}},{key:"onClose",value:function(){}},{key:"onSelect",value:function(){}},{key:"renderBreadcrumb",value:function(){var e=this.props,a=e.location.pathname,r=e.getRouteData,l=this.getBreadcrumbNameMap(),u=r("BasicLayout"),c=a.split("/").filter(function(e){return e}),i=c.map(function(e,r){var i="/"+c.slice(0,r+1).join("/"),d=u.filter(function(e){return e.path===i});return n.default.createElement(o.Breadcrumb.Item,{key:i},i===a||0===d.length?n.default.createElement("span",null,l[i]):n.default.createElement(t.Link,{to:i},l[i]))});return n.default.createElement(o.Breadcrumb,{className:d.default.breadcrumb},n.default.createElement(o.Breadcrumb.Item,null,i.length<1?n.default.createElement("span",null,"首页"):n.default.createElement(t.Link,{to:"/"},"首页")),i)}},{key:"render",value:function(){var e=this.props.getRouteData;return n.default.createElement("div",{className:d.default.wapper},n.default.createElement("div",{className:d.default.sider},n.default.createElement("div",{className:d.default.logo},n.default.createElement(t.Link,{to:"/"},n.default.createElement("svg",{viewBox:"0 0 256 256"},n.default.createElement("path",{d:"M84.4999999,25 L133,60.1408731 L114.474648,117 L54.5253515,117 L36,60.1408731 L84.4999999,25 Z M84.4999999,231 L36,195.859127 L54.5253515,139 L114.474648,139 L133,195.859127 L84.4999999,231 Z M220,158.475503 L163.141427,177 L128,128.499472 L163.139977,80 L219.999104,98.5262065 L220,158.475503 Z"})),n.default.createElement("h1",null,"UIW React"))),n.default.createElement(o.Menu,{onClose:this.onClose.bind(this),onSelect:this.onSelect.bind(this)},this.getNavMenuItems(this.menus))),n.default.createElement("div",{className:d.default.content},n.default.createElement("div",{className:d.default.header},n.default.createElement("div",{className:d.default.headerLeft},n.default.createElement("a",{target:"_blank",href:"https://github.com/uiw-react/uiw-admin"},n.default.createElement(o.Icon,{type:"github"}))),n.default.createElement("div",{className:d.default.headerRight},n.default.createElement("div",{className:d.default.item},n.default.createElement(o.Icon,{type:"lock"})),n.default.createElement("div",{className:d.default.item},n.default.createElement(o.Badge,{dot:!0,count:4},n.default.createElement(o.Icon,{type:"bell"}))))),n.default.createElement(t.Switch,null,e("BasicLayout").map(function(e,a){return n.default.createElement(t.Route,{exact:e.exact,key:e.path,path:e.path,component:e.component})}),n.default.createElement(t.Route,{component:c.default}))))}}]),l}();exports.default=h,h.childContextTypes={location:l.default.object,breadcrumbNameMap:l.default.object,renderBreadcrumb:l.default.node};
},{"react-router-dom":15,"react":11,"prop-types":80,"../routes/Exception/404":26,"uiw":69,"./BasicLayout.less":94}]},{},[20])