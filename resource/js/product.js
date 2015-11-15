!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(8),a=(r.main,r.init);a()},function(e,t){e.exports=React},function(e,t){var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"tel":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{6}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(e,t){var n;switch(e){case"complexNav":n={supList:[]},t.forEach(function(e,t){1===e.level?(e.subList=[],n.supList.push(e)):n.supList[e.type-1].subList.push(e)})}return n},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[this.name]=JSON.stringify(e),localStorage[this.name+"_v"]=this.version,this.callback(e)}.bind(this)})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"}};e.exports=n},function(e,t,n){var r=n(1),a=r.createClass({displayName:"Case",getInitialState:function(){return{index:this.props.index,href:this.props.href,backgroundImage:this.props.backgroundImage}},render:function(){return r.createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}),i=r.createClass({displayName:"Banner",getInitialState:function(){return{index:0,data:this.props.data}},render:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(r.createElement(a,{index:n,href:t.href,backgroundImage:t.imgSrc}))}),e.push(r.createElement(a,{index:0,href:t[0].href,backgroundImage:t[0].imgSrc})),r.createElement("header",null,r.createElement("div",{className:"container"},e))}});e.exports=i},function(e,t,n){var r=n(1),a=r.createClass({displayName:"List1",getInitialState:function(){var e=this.props.option;return{currentIndex:e.currentIndex,index:e.index,href:e.href,text:e.text}},render:function(){var e=this.state;return r.createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},r.createElement("i",null),r.createElement("span",null,e.text))}}),i=r.createClass({displayName:"List2",getInitialState:function(){var e=this.props.option;return{href:e.href,text:e.text}},render:function(){var e=this.state;return r.createElement("a",{href:e.href},r.createElement("i",null),r.createElement("span",null,e.text))}}),s=(r.createClass({displayName:"List3",getInitialState:function(){return{}},render:function(){return r.createElement("a",null)}}),r.createClass({displayName:"MenuBar",getClassType:function(e){var t;switch(this.state.type){case 1:t="footer";break;case 2:t="menu_3col_anchor";break;case 3:t="menu_3col"}return t},getListType:function(e,t){var n;switch(this.state.type){case 1:n=r.createElement(a,{option:{currentIndex:this.state.currentIndex,index:t,href:e.href,text:e.text}});break;case 2:n=r.createElement(i,{option:{href:e.href,text:e.text}});break;case 3:}return n},getInitialState:function(){return{currentIndex:this.props.currentIndex,type:this.props.type,option:this.props.option}},render:function(){var e=[],t=this.state.option;return t.forEach(function(t,n){e.push(this.getListType(t,n))}.bind(this)),r.createElement("menu",{className:this.getClassType()},e)}}));e.exports=s},function(e,t,n){e.exports={Banner:n(3),Menu:n(4)}},,,function(e,t,n){var r=n(1),a=n(2),i=n(5),s=i.Menu,c=r.createClass({displayName:"Product",getInitialState:function(){return{index:this.props.index,data:this.props.data}},handleClick:function(){var e=(document.body,this.state.data);a.QueryString("index")||window.history.pushState({},e.name,"?index="+this.state.index),window.addEventListener("popstate",function(e){init()},0),document.title=e.name},render:function(){var e=this.state.data;return r.createElement("section",{onClick:this.handleClick},r.createElement("h1",null,r.createElement("strong",null,e.name),r.createElement("em",null,"项目规模:"+e.lumpSum+"元")),r.createElement("div",{className:"main"},r.createElement("div",{className:"column1"},r.createElement("span",null,"年化率"),r.createElement("p",null,r.createElement("strong",null,e.primeRate),r.createElement("em",null,"％"))),r.createElement("div",{className:"column2"},r.createElement("span",null,"期限"),r.createElement("p",null,r.createElement("strong",null,e.days),r.createElement("em",null,"天"))),r.createElement("a",{href:e.id},"立即购买")))}}),o=r.createClass({displayName:"Page",getInitialState:function(){return{data:this.props.data.data}},componentDidMount:function(){a.QueryString("index")&&this.refs["info"+a.QueryString("index")].getDOMNode().click()},render:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(r.createElement(c,{index:n,data:t}))}),r.createElement("body",null,e,r.createElement(s,{type:1,option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/account",text:"我的账户"},{href:"/more",text:"更多"}],currentIndex:1}))}});e.exports={main:o,init:function(){a.setRem(),document.body.style.opacity=1,$.ajax({url:"/api/getproduct",success:function(e){r.render(r.createElement(o,{data:e}),document.body)}})}}}]);