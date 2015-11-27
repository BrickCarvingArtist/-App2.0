!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){"use strict";var r=n(15);r.init()},1:function(t,e){t.exports=React},2:function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"mobile":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{5}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},3:function(t,e){t.exports=ReactDOM},15:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var i=n(1),c=r(i),l=n(3),p=r(l),f=n(2),d=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.state={score:0},t}return u(e,t),s(e,[{key:"componentDidMount",value:function(){$.ajax({type:"post",url:"/api/sign",success:function(t){$.ajax({url:"/api/getscore",success:function(t){console.log(t)}})}})}},{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("div",{className:"sign"},c["default"].createElement("b",null,this.state.score)))}}]),e}(c["default"].Component),h=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={vip:t.vip,name:t.name,score:t.score},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this;f.QueryString("sign")||$.ajax({url:"/api/getscore",success:function(t){console.log(t)}}),this.refs.btnSign.onclick=function(){f.QueryString("sign")||window.history.pushState({},t.state.title,"?sign=1"),p["default"].render(c["default"].createElement(d,null),document.body)}}},{key:"render",value:function(){var t=this.state;return c["default"].createElement("div",{className:"part1"},c["default"].createElement("p",null,""+t.vip+t.name),c["default"].createElement("p",null,c["default"].createElement("span",null,"我的积分:"),c["default"].createElement("b",null,t.score)),c["default"].createElement("i",{className:"btnSign",ref:"btnSign"}))}}]),e}(c["default"].Component);h.defaultProps={vip:"普通会员",name:"＊＊＊",score:0};var g=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){return c["default"].createElement("ul",null,c["default"].createElement("li",null,this.props.time),c["default"].createElement("li",null,this.props.value),c["default"].createElement("li",null,this.props.datail))}}]),e}(c["default"].Component),m=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.state={data:[]},t}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this;f.QueryString("sign")||$.ajax({url:"/api/getscoredetail",success:function(e){t.setState({data:e.data||[]})}})}},{key:"render",value:function(){var t=[],e=this.state.data;return e.length?e.forEach(function(e){t.push(c["default"].createElement(g,{time:e.time,value:e.value,detail:e.detail}))}):t=c["default"].createElement("i",{className:"default"}),c["default"].createElement("div",{className:"record"},c["default"].createElement("h1",null,"积分纪录"),c["default"].createElement("ul",null,c["default"].createElement("li",null,"发生时间"),c["default"].createElement("li",null,"变更值"),c["default"].createElement("li",null,"变更详情")),t)}}]),e}(c["default"].Component),y=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"componentDidMount",value:function(){f.QueryString("sign")&&this.refs.part1.refs.btnSign.click()}},{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement(h,{ref:"part1"}),c["default"].createElement("a",{className:"entrance",href:"/activity/score"}),c["default"].createElement(m,null))}}]),e}(c["default"].Component),b=function v(){f.PageData.setData(null,function(){p["default"].render(c["default"].createElement(y,null),document.body)}).render(v)};e.init=b}});