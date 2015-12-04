!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var a=n(24);a.init()},1:function(e,t){e.exports=React},2:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},3:function(e,t){e.exports=ReactDOM},4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Warning=void 0;var i=n(1),c=a(i),s=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message},n}return l(t,e),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"render",value:function(){return c["default"].createElement("p",{className:"message"},this.state.message)}}]),t}(c["default"].Component);s.defaultProps={message:""},t.Warning=s},11:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;var i=n(1),c=a(i),s=n(3),f=a(s),d=n(4),p=n(2);t.Input=function(e){function t(){r(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.state={matched:0},e.handleCheck=function(){return f["default"].render(c["default"].createElement(d.Warning,{message:e.state.matched?"":e.props.placeholder+"输入错误"}),document.querySelector(".warning")),e.state.matched},e}return l(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=f["default"].findDOMNode(this);t.onchange=t.onblur=function(t){e.setState({matched:p.isMatch(e.props.className.split(" ")[1],t.target.value)})}}},{key:"componentDidUpdate",value:function(){this.handleCheck()}},{key:"render",value:function(){return c["default"].createElement("input",{name:this.props.name,type:this.props.type,className:this.props.className,placeholder:this.props.placeholder,maxLength:this.props.maxLength})}}]),t}(c["default"].Component)},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var i=n(1),c=a(i),s=n(3),f=a(s),d=n(2),p=n(11),m=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.refs,t=f["default"].findDOMNode(e.btnCaptcha),n=f["default"].findDOMNode(e.ckb);t.onclick=function(){$.ajax({type:"post",url:"/api/paycode?mobile="+domMobile.value,data:{},success:function(e){f["default"].render(c["default"].createElement(Warning,{message:e.message}),document.querySelector(".warning"))}})},f["default"].findDOMNode(e.btnSubmit).onclick=function(){n.checked&&$.ajax({type:"post",url:"/api/pay",data:{},success:function(e){f["default"].render(c["default"].createElement(Warning,{message:e.message}),document.querySelector(".warning")),200===e.code&&!function(){var e=setTimeout(function(){clearTimeout(e),window.location.href="/me"},1e3)}()}})}}},{key:"render",value:function(){var e=[],t=this.props.setting;return t.forEach(function(t){e.push(c["default"].createElement(p.Input,{ref:t.ref,name:t.name,type:t.type,className:t.className,placeholder:t.placeholder,maxLength:t.maxLength}))}),c["default"].createElement("form",null,e,c["default"].createElement("input",{ref:"btnCaptcha",className:"shortBtn",type:"button",value:"获取"}),c["default"].createElement("input",{ref:"ckb",className:"ckb",id:"ckb",type:"checkbox",checked:"checked"}),c["default"].createElement("label",{htmlFor:"ckb"},c["default"].createElement("span",null,"我同意"),c["default"].createElement("b",{ref:"btnProtocol"},"《喜蓝互联网金融平台用户协议》")),c["default"].createElement("input",{ref:"btnSubmit",className:"longBtn",type:"button",value:"确认"}))}}]),t}(c["default"].Component);m.defaultProps={setting:[{ref:"captcha",name:"captcha",type:"text",className:"shortInput captcha",placeholder:"验证码",maxLength:"11"}]};var h=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement(m,null))}}]),t}(c["default"].Component),v=function y(){d.PageData.setData(null,function(){c["default"].render(c["default"].createElement(h,null),document.body)}).render(y)};t.init=v}});