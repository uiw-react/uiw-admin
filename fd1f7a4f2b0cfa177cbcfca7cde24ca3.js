require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({46:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=n(e),r=require("../../../components/DescriptionList"),a=n(r),l=require("../../../layouts/PageHeaderLayout"),u=n(l);function n(e){return e&&e.__esModule?e:{default:e}}var c=a.default.Description;exports.default=function(){return t.default.createElement(u.default,{title:"描述列表",content:"成组展示多个只读字段，常见于详情页的信息展示。"},t.default.createElement(a.default,{title:"订单详情",column:3,layout:"vertical"},t.default.createElement(c,{term:"取货单号"},"1000000000"),t.default.createElement(c,{term:"状态"},"已取货"),t.default.createElement(c,{term:"销售单号"},"1234123421"),t.default.createElement(c,{term:"子订单"},"3214321432"),t.default.createElement(c,{term:"用户姓名"},"我爱办公"),t.default.createElement(c,{term:"联系电话"},"18100000000"),t.default.createElement(c,{term:"取货地址"},"浙江省杭州市西湖区万塘路18号")))};
},{"react":7,"../../../components/DescriptionList":93,"../../../layouts/PageHeaderLayout":79}]},{},[46])