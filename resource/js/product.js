!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(13);r.init()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"mobile":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{5}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Dialog=void 0;var i=n(1),c=r(i),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={html:t.html},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){this.state.html&&(document.querySelector(".shadow").style.display="block")}},{key:"componentReceiveProps",value:function(t){this.setState({html:t.html})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"dialog"},this.state.html)}}]),e}(c["default"].Component);l.defaultProps={html:""},e.Dialog=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Menu=void 0;var i=n(1),c=r(i),l=n(4),p=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.option.currentIndex,index:t.option.index,href:t.option.href,text:t.option.text},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{className:t.currentIndex===t.index?"current":"",href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),f=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,text:t.option.text},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("i",null),c["default"].createElement("span",null,t.text))}}]),e}(c["default"].Component),d=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={href:t.option.href,name:t.option.name,value:t.option.value},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state;return c["default"].createElement("a",{href:t.href},c["default"].createElement("h1",null,t.name),c["default"].createElement("h2",null,t.value))}}]),e}(c["default"].Component),h=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={currentIndex:t.currentIndex,menu:function(){var e=void 0;switch(t.type){case 1:e=t.menu1;break;case 2:e=t.menu2;break;case 3:e=t.menu3}return e}()},n.getListType=function(t,e){var r=void 0;switch(n.props.type){case 1:r=c["default"].createElement(p,{option:{currentIndex:n.state.currentIndex,index:e,href:t.href,text:t.text}});break;case 2:r=c["default"].createElement(f,{option:{href:t.href,text:t.text}});break;case 3:r=c["default"].createElement(d,{option:{href:t.href,name:t.name,value:t.value}})}return r},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){3===this.props.type&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){t.message&&ReactDOM.render(c["default"].createElement(l.Dialog,{html:c["default"].createElement("a",{className:"longBtn",href:"/signin"},"登录/注册")}),document.querySelector(".shadow"))}})}},{key:"render",value:function(){var t=this,e=[],n=this.state.menu;return n.option.forEach(function(n,r){e.push(t.getListType(n,r))}),c["default"].createElement("menu",{className:n.className},e)}}]),e}(c["default"].Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"",name:"历史收益",value:"0.00"}]}},e.Menu=h},,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var i=n(1),c=r(i),l=n(3),p=r(l),f=n(2),d=n(5),h=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){var t=this.props.data,e="";return t.other="满20000元即可获得20元红包!",t.other&&(e=c["default"].createElement("p",null,c["default"].createElement("i",null),c["default"].createElement("span",null,t.other))),c["default"].createElement("div",{className:"part1"},c["default"].createElement("p",null,c["default"].createElement("strong",null,(100*t.primeRate).toFixed(1)),c["default"].createElement("em",null,"％"),c["default"].createElement("span",null,"预计年化收益"),c["default"].createElement("b",null,"起息日:T+1")),c["default"].createElement("ul",null,c["default"].createElement("li",null,c["default"].createElement("p",null,t.days+"天"),c["default"].createElement("p",null,"项目期限")),c["default"].createElement("li",null,c["default"].createElement("p",null,t.unitPrice*t.minUnitCount+"元"),c["default"].createElement("p",null,"起投金额")),c["default"].createElement("li",null,c["default"].createElement("p",null,t.lumpSum+"元"),c["default"].createElement("p",null,"项目总额"))),e)}}]),e}(c["default"].Component),g=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.checkMarkup=function(t){return{__html:t}},t}return u(e,t),s(e,[{key:"render",value:function(){var t=[],e=this.props.data;for(var n in e)e[n]&&t.push(c["default"].createElement("div",{className:"detail"},c["default"].createElement("h1",null,n),c["default"].createElement("pre",null,c["default"].createElement("p",{dangerouslySetInnerHTML:this.checkMarkup(e[n])}))));return c["default"].createElement("body",null,t)}}]),e}(c["default"].Component),m=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"render",value:function(){var t=[],e=[],n=this.props.data;return this.props.setting.forEach(function(t){e.push(c["default"].createElement("li",null,t))}),n.forEach(function(e){t.push(c["default"].createElement("ul",null,c["default"].createElement("li",null,e.name),c["default"].createElement("li",null,e.money),c["default"].createElement("li",null,e.buyTime)))}),c["default"].createElement("body",null,c["default"].createElement("ul",null,e),t)}}]),e}(c["default"].Component);m.defaultProps={setting:["购买人","购买金额","购买时间"]};var y=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this.props.id,e=this.props.index,n=this.props.data,r=document.body;e&&(p["default"].findDOMNode(this).onclick=function(){Object.keys(n).length?p["default"].render(c["default"].createElement(g,{data:n}),r):$.ajax({url:"/api/getbidder/"+t,success:function(t){p["default"].render(c["default"].createElement(m,{data:t.data}),r)}})})}},{key:"render",value:function(){var t=this.props;return c["default"].createElement("p",null,c["default"].createElement("span",null,t.name),c["default"].createElement("em",null,t.value))}}]),e}(c["default"].Component),b=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.adaptor=function(t,e){for(var n={},r=0,o=t.length;o>r;r++)n[t[r].name]=e[t[r].value];return n},t}return u(e,t),s(e,[{key:"render",value:function(){var t=this,e=[],n=this.props.setting,r=this.props.data;return n.forEach(function(n,o){e.push(c["default"].createElement(y,{id:r.id,index:o,name:n.name,value:n.value,data:t.adaptor(n.detail,r)}))}),c["default"].createElement("div",{className:"part2"},e)}}]),e}(c["default"].Component);b.defaultProps={setting:[{name:"还款方式",value:"自动还款",detail:[]},{name:"产品描述",value:"利率高",detail:[{name:"资金用途",value:"fundUse"},{name:"抵押物说明",value:"collateral"},{name:"还款来源",value:"source"}]},{name:"资金保障",value:"风险低",detail:[{name:"担保方式",value:"guarantee"},{name:"担保方介绍",value:"guaranteeIntroduce"},{name:"资金安全",value:"fundSafe"}]},{name:"申购情况",value:"已申购订单",detail:[]}]};var v=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.state={interest:"0.00"},t.matchNum=function(e,n){var r=t.props.data,o=e.value=Math.floor(e.value);e.value=o=o>=0?o>n?o=n:o:0,t.setState({interest:(o*r.primeRate/365*r.days).toFixed(2)})},t}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.data,n=this.refs.minus,r=this.refs.plus,o=this.refs.num;o.onkeyup=function(){t.matchNum(o,e.lumpSum)},n.onclick=function(){o.value=parseInt(o.value)-500,o.onkeyup()},r.onclick=function(){o.value=parseInt(o.value)+500,o.onkeyup()}}},{key:"render",value:function(){var t=this.props.data;return c["default"].createElement("div",{className:"part3"},c["default"].createElement("div",null,c["default"].createElement("p",null,t.balance+"元"),c["default"].createElement("p",null,"可投金额")),c["default"].createElement("div",null,c["default"].createElement("p",null,this.state.interest+"元"),c["default"].createElement("p",null,"预期收益")),c["default"].createElement("form",{method:"post",action:"/api/postbill"},c["default"].createElement("span",{ref:"minus"},"－"),c["default"].createElement("input",{name:"invest",ref:"num",className:"num",type:"text",defaultValue:"0"}),c["default"].createElement("span",{ref:"plus"},"＋"),c["default"].createElement("p",{className:"term"},"募集时间:"+t.beginTime.split(" ")[0]+"至"+t.stopBuyTime.split(" ")[0]),c["default"].createElement("input",{className:"longBtn btnBuy",type:"submit",value:"立即购买"})))}}]),e}(c["default"].Component),w=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={data:t.data},n}return u(e,t),s(e,[{key:"render",value:function(){var t=this.state.data.product,e=this.state.data.details;return c["default"].createElement("body",null,c["default"].createElement(h,{data:t}),c["default"].createElement(b,{data:e}),c["default"].createElement(v,{data:t}))}}]),e}(c["default"].Component),O=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={index:n.props.index,data:n.props.data},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this;p["default"].findDOMNode(this).onclick=function(){var e=t.state.data;document.title=e.name,f.QueryString("index")||window.history.pushState({},e.name,"?index="+t.state.index),$.ajax({url:"/api/getproduct/"+e.id,success:function(t){p["default"].render(c["default"].createElement(w,{data:t.data}),document.body)}})}}},{key:"render",value:function(){var t=this.state.data;return c["default"].createElement("section",null,c["default"].createElement("h1",null,c["default"].createElement("strong",null,t.name),c["default"].createElement("em",null,"项目规模:"+t.lumpSum+"元")),c["default"].createElement("div",{className:"main"},c["default"].createElement("div",{className:"column1"},c["default"].createElement("p",null,"年化率"),c["default"].createElement("p",null,c["default"].createElement("strong",null,(100*t.primeRate).toFixed(1)),c["default"].createElement("em",null,"％"))),c["default"].createElement("div",{className:"column2"},c["default"].createElement("p",null,"期限"),c["default"].createElement("p",null,c["default"].createElement("strong",null,t.days),c["default"].createElement("em",null,"天"))),c["default"].createElement("a",null,"立即购买")))}}]),e}(c["default"].Component),E=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={data:t.data.data},n}return u(e,t),s(e,[{key:"componentDidMount",value:function(){f.QueryString("index")&&p["default"].findDOMNode(this.refs["product"+f.QueryString("index")]).click()}},{key:"render",value:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(c["default"].createElement(O,{index:n+1,data:e,ref:"product"+(n+1)}))}),c["default"].createElement("body",null,t,c["default"].createElement(d.Menu,{type:1,currentIndex:1}))}}]),e}(c["default"].Component),S=function x(){f.PageData.setData("/api/getproduct",function(t){c["default"].render(c["default"].createElement(E,{data:t}),document.body)}).render(x)};e.init=S}]);