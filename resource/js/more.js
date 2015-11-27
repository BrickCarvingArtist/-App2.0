!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(12);r.init()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"mobile":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{5}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Dialog=void 0;var i=n(1),c=r(i),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={html:t.html},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){this.state.html&&(document.querySelector(".shadow").style.display="block")}},{key:"componentReceiveProps",value:function(t){this.setState({html:t.html})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"dialog"},this.state.html)}}]),e}(c["default"].Component);l.defaultProps={html:""},e.Dialog=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Menu=void 0;var i=n(1),c=r(i),l=n(4),p=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.option.currentIndex,index:t.option.index,href:t.option.href,text:t.option.text},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{className:t.currentIndex===t.index?"current":"",href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),f=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,text:t.option.text},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),d=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,name:t.option.name,value:t.option.value},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("h1",null,t.name),c["default"].createElement("h2",null,t.value))}}]),e}(c["default"].Component),h=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.currentIndex,menu:function(){var e=void 0;switch(t.type){case 1:e=t.menu1;break;case 2:e=t.menu2;break;case 3:e=t.menu3}return e}()},n.getListType=function(t,e){var r=void 0;switch(n.props.type){case 1:r=c["default"].createElement(p,{option:{currentIndex:n.state.currentIndex,index:e,href:t.href,text:t.text}});break;case 2:r=c["default"].createElement(f,{option:{href:t.href,text:t.text}});break;case 3:r=c["default"].createElement(d,{option:{href:t.href,name:t.name,value:t.value}})}return r},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){3===this.props.type&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){t.message&&ReactDOM.render(c["default"].createElement(l.Dialog,{html:c["default"].createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}),document.querySelector(".shadow"))}})}},{key:"render",value:function(){var t=this,e=[],n=this.state.menu;return n.option.forEach(function(n,r){e.push(t.getListType(n,r))}),c["default"].createElement("menu",{className:n.className},e)}}]),e}(c["default"].Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"",name:"历史收益",value:"0.00"}]}},e.Menu=h},,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var i=n(1),c=r(i),l=n(3),p=r(l),f=n(2),d=n(5),h=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("header",null),c["default"].createElement("div",{className:"description"},c["default"].createElement("h1",null,"公司简介"),c["default"].createElement("pre",null,c["default"].createElement("p",null,this.props.description)),c["default"].createElement("img",{src:this.props.imgSrc})))}}]),e}(c["default"].Component);h.defaultProps={description:"	喜蓝理财互联网金融平台由杭州喜马拉雅电子商务有限公司负责运营。喜马拉雅作为启蓝控股集团旗下的子公司之一，于2014年初正式成立，其经营团队由投资理财、线上交易及风险控制等业界一流的专业人士组成。\n	公司经营的理财平台于2015年4月先后被评为“中国互联网金融服务年度最具竞争力品牌”和“中国互联网金融服务年度最具发展潜力平台”。后于2015年6月，公司被评为“2015最具投资价值互联网金融公司”。公司董事长家族世代经商，2011年入驻上海世博会并获评“最浙江家庭”。喜蓝理财秉持并延续家族诚信经营的商业理念，全力为客户打造安全、稳定、高效的理财体验。",imgSrc:"/images/about.png"};var g=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.checkMarkup=function(t){return{__html:t}},t}return u(e,t),s(e,[{key:"componentDidMount",value:function(){p["default"].findDOMNode(this).onclick=function(){this.status?($(this).removeClass("current"),this.status=0):($("section").removeClass("current"),$(this).addClass("current"),this.status=1)}}},{key:"render",value:function(){return c["default"].createElement("section",null,c["default"].createElement("h1",null,this.props.data.q),c["default"].createElement("pre",null,c["default"].createElement("p",{dangerouslySetInnerHTML:this.checkMarkup(this.props.data.a)})))}}]),e}(c["default"].Component),m=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){var t=[],e=this.props.data;return e.forEach(function(e,n){t.push(c["default"].createElement(g,{data:e,ref:"q"+(n+1)}))}),c["default"].createElement("body",null,t)}}]),e}(c["default"].Component),y=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.data.name,n=this.props.data.value,r=document.body;p["default"].findDOMNode(this).onclick=function(){"string"==typeof n?$.ajax({url:n,success:function(n){document.title=e,f.QueryString("index")||window.history.pushState({},document.title,"?index="+t.props.index),c["default"].render(c["default"].createElement(m,{data:n.data}),r)}}):(c["default"].render(c["default"].createElement(n,null),r),document.title=e,f.QueryString("index")||window.history.pushState({},document.title,"?index="+t.props.index))}}},{key:"render",value:function(){return c["default"].createElement("h1",null,this.props.data.name)}}]),e}(c["default"].Component),b=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement("form",{method:"post",action:"/api/getsuggestion"},c["default"].createElement("textarea",{name:"suggestion",placeholder:"我们很高兴能收到您反馈的意见！"}),c["default"].createElement("input",{className:"longBtn",type:"submit",value:"确定"})))}}]),e}(c["default"].Component),v=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){var t=[],e=this.props.setting;return e.forEach(function(e){t.push(c["default"].createElement("h1",{className:"withIcon"},c["default"].createElement("i",null),c["default"].createElement("a",{href:e.value},e.name)))}),c["default"].createElement("body",null,c["default"].createElement("header",null),c["default"].createElement("div",{className:"tel"},c["default"].createElement("h2",null,"400-052-5522"),c["default"].createElement("p",null,"客服热线 (09:00-21:00)"),c["default"].createElement("a",{className:"longBtn",href:"tel:4000525522"},"拨打客服热线")),t)}}]),e}(c["default"].Component);v.defaultProps={setting:[{name:"微信订阅号:xmlyjr",value:""},{name:"微信订阅号:hi-lend",value:""},{name:"@喜蓝理财",value:""},{name:"4000525522",value:"mqqwpa://im/chat?chat_type=wpa&uin=4000525522"}]};var w=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"componentDidMount",value:function(){f.QueryString("index")&&p["default"].findDOMNode(this.refs["more"+f.QueryString("index")]).click()}},{key:"render",value:function(){var t=[],e=this.props.setting;return e.forEach(function(e,n){t.push(c["default"].createElement(y,{data:e,index:n+1,ref:"more"+(n+1)}))}),c["default"].createElement("body",null,t,c["default"].createElement(d.Menu,{type:1,currentIndex:3}))}}]),e}(c["default"].Component);w.defaultProps={setting:[{name:"关于喜蓝理财",value:h},{name:"常见问题",value:"/api/gethelp"},{name:"意见反馈",value:b},{name:"联系客服",value:v}]};var O=function E(){f.PageData.setData(null,function(){document.title="更多",document.body.style.backgroundColor="rgb(244, 244, 244)",p["default"].render(c["default"].createElement(w,null),document.body)}).render(E)};e.init=O}]);