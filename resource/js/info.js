!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(7),a=(r.main,r.init);a()},function(t,e){t.exports=React},function(t,e){var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(t,e){var n;switch(t){case"complexNav":n={supList:[]},e.forEach(function(t,e){1===t.level?(t.subList=[],n.supList.push(t)):n.supList[t.type-1].subList.push(t)})}return n},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[this.name]=JSON.stringify(t),localStorage[this.name+"_v"]=this.version,this.callback(t)}.bind(this)})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"}};t.exports=n},,,,,function(t,e,n){var r=n(1),a=n(2),i=r.createClass({displayName:"InfoDetail",getInitialState:function(){return{title:this.props.title,time:this.props.time,source:this.props.source,detail:this.props.detail}},checkMarkup:function(){return{__html:this.state.detail}},render:function(){return r.createElement("section",{className:"detail"},r.createElement("h1",null,this.state.title),r.createElement("h2",null,"来源:"+this.state.source),r.createElement("div",{className:"detail",dangerouslySetInnerHTML:this.checkMarkup()}),r.createElement("span",null,this.state.time))}}),s=r.createClass({displayName:"Info",getInitialState:function(){return{index:this.props.index,id:this.props.id,status:this.props.status,title:this.props.title,introduce:this.props.introduce,source:this.props.source,time:this.props.time}},componentDidMount:function(){this.getDOMNode().onclick=function(){$.ajax({url:"/api/getinfo/"+this.state.id,success:function(t){document.title=this.state.title,document.body.style.backgroundColor="white",a.QueryString("index")||window.history.pushState({},this.state.title,"?index="+this.state.index),r.render(r.createElement(i,{title:this.state.title,time:this.state.time,source:this.state.source,detail:t.data.details}),document.body)}.bind(this)})}.bind(this)},render:function(){return r.createElement("section",{className:this.state.status?"unread":""},r.createElement("h1",null,this.state.title),r.createElement("p",null,this.state.introduce),r.createElement("span",null,this.state.time))}}),c=r.createClass({displayName:"Page",getInitialState:function(){return{data:this.props.data}},componentDidMount:function(){a.QueryString("index")&&this.refs["info"+a.QueryString("index")].getDOMNode().click()},render:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(r.createElement(s,{index:n+1,id:e.id,status:e.status,title:e.title,introduce:e.introduce,source:e.source,time:e.time,ref:"info"+(n+1)}))}),r.createElement("body",null,t)}}),o=function(){a.setRem(),document.body.style.opacity=1,window.onpopstate=function(t){o()},$.ajax({url:"/api/getinfo",success:function(t){document.title="消息中心",document.body.style.backgroundColor="rgb(244, 244, 244)",r.render(r.createElement(c,{data:t.data}),document.body)}})};t.exports={main:c,init:o}}]);