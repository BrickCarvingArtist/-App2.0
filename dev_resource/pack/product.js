import React from "react";
import ReactDOM from "react-dom";
import {PageData, QueryString} from "../pack/util";
import {Menu} from "../component/menu";
class Part1 extends React.Component{
	render(){
		let data = this.props.data,
			other = "";
		data.other = "满20000元即可获得20元红包!";
		if(data.other){
			other = (
				<p>
					<i></i>
					<span>
						{data.other}
					</span>
				</p>
			);
		}
		return (
			<div className="part1">
				<p>
					<strong>
						{(data.primeRate * 100).toFixed(1)}
					</strong>
					<em>％</em>
					<span>预计年化收益</span>
					<b>起息日:T+1</b>
				</p>
				<ul>
					<li>
						<p>
							{`${data.days}天`}
						</p>
						<p>项目期限</p>
					</li>
					<li>
						<p>
							{`${data.unitPrice * data.minUnitCount}元`}
						</p>
						<p>起投金额</p>
					</li>
					<li>
						<p>
							{`${data.lumpSum}元`}
						</p>
						<p>项目总额</p>
					</li>
				</ul>
				{other}
			</div>
		);
	}
}
class DetailDetail extends React.Component{
	constructor(){
		super();
		this.checkMarkup = data => {
			return {
				__html : data
			};
		}
	}
	render(){
		let lists = [],
			data = this.props.data;
		for(let i in data){
			if(data[i]){
				lists.push(
					<div className="detail">
						<h1>
							{i}
						</h1>
						<pre>
							<p dangerouslySetInnerHTML={this.checkMarkup(data[i])}></p>
						</pre>
					</div>
				);
			}
		}
		return (
			<body>
				{lists}
			</body>
		);
	}
}
class Bidder extends React.Component{
	render(){
		let lists = [],
			title = [],
			data = this.props.data;
		this.props.setting.forEach(list => {
			title.push(
				<li>
					{list}
				</li>
			);
		});
		data.forEach(list => {
			lists.push(
				<ul>
					<li>
						{list.name}
					</li>
					<li>
						{list.money}
					</li>
					<li>
						{list.buyTime}
					</li>
				</ul>
			);
		});
		return (
			<body>
				<ul>
					{title}
				</ul>
				{lists}
			</body>
		);
	}
}
Bidder.defaultProps = {
	setting : ["购买人", "购买金额", "购买时间"]
};
class List extends React.Component{
	componentDidMount(){
		let id = this.props.id,
			index = this.props.index,
			data = this.props.data,
			body = document.body;
		if(index){
			ReactDOM.findDOMNode(this).onclick = () =>{
				if(Object.keys(data).length){
					ReactDOM.render(
						<DetailDetail data={data} />,
						body
					);
					// if(!QueryString("detail")){
					// 	window.history.pushState({}, data.name, "&detail=" + index);
					// }
				}else{
					$.ajax({
						url : `/api/getbidder/${id}`,
						success : data => {
							ReactDOM.render(
								<Bidder data={data.data} />,
								body
							);
						}
					});
				}
			};
		}
	}
	render(){
		let props = this.props;
		return (
			<p>
				<span>
					{props.name}
				</span>
				<em>
					{props.value}
				</em>
			</p>
		);
	}
}
class Part2 extends React.Component{
	constructor(){
		super();
		this.adaptor = (detail, data) => {
			let _data = {};
			for(let i = 0, detailLen = detail.length; i < detailLen; i++){
				_data[detail[i].name] = data[detail[i].value];
			}
			return _data;
		}
	}
	render(){
		let lists = [],
			setting = this.props.setting,
			data = this.props.data;
		setting.forEach((list, index) => {
			lists.push(
				<List id={data.id} index={index} name={list.name} value={list.value} data={this.adaptor(list.detail, data)} />
			);
		});
		return (
			<div className="part2">
				{lists}
			</div>
		);
	}
}
Part2.defaultProps = {
	setting : [
		{
			name : "还款方式",
			value : "自动还款",
			detail : []
		},
		{
			name : "产品描述",
			value : "利率高",
			detail : [
				{
					name : "资金用途",
					value : "fundUse"
				},
				{
					name : "抵押物说明",
					value : "collateral"
				},
				{
					name : "还款来源",
					value : "source"
				}
			]
		},
		{
			name : "资金保障",
			value : "风险低",
			detail : [
				{
					name : "担保方式",
					value : "guarantee"
				},
				{
					name : "担保方介绍",
					value : "guaranteeIntroduce"
				},
				{
					name : "资金安全",
					value : "fundSafe"
				}
			]
		},
		{
			name : "申购情况",
			value : "已申购订单",
			detail : []
		}
	]
};
class Part3 extends React.Component{
	constructor(){
		super();
		this.state = {
			interest : "0.00"
		};
		this.matchNum = (dom, lumpSum) => {
			let data = this.props.data,
				value = dom.value = Math.floor(dom.value);
			dom.value = value = value >= 0 ? value > lumpSum ? value = lumpSum : value : 0;
			this.setState({
				interest : (value * data.primeRate / 365 * data.days).toFixed(2)
			});
		}
	}
	componentDidMount(){
		let data = this.props.data,
			minus = this.refs.minus,
			plus = this.refs.plus,
			num = this.refs.num;
		num.onkeyup = () => {
			this.matchNum(num, data.lumpSum);
		};
		minus.onclick = () => {
			num.value = parseInt(num.value) - 500;
			num.onkeyup();
		};
		plus.onclick = () => {
			num.value = parseInt(num.value) + 500;
			num.onkeyup();
		};
	}
	render(){
		let data = this.props.data;
		return (
			<div className="part3">
				<div>
					<p>
						{`${data.balance}元`}
					</p>
					<p>可投金额</p>
				</div>
				<div>
					<p>
						{`${this.state.interest}元`}
					</p>
					<p>预期收益</p>
				</div>
				<form method="post" action="/api/postbill">
					<span ref="minus">－</span>
					<input name="invest" ref="num" className="num" type="text" defaultValue="0" />
					<span ref="plus">＋</span>
					<p className="term">
						{`募集时间:${data.beginTime.split(" ")[0]}至${data.stopBuyTime.split(" ")[0]}`}
					</p>
					<input className="longBtn btnBuy" type="submit" value="立即购买" />
				</form>
			</div>
		);
	}
}
class ProductDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data : props.data
		};
	}
	render(){
		let product = this.state.data.product,
			detail = this.state.data.details;
		return (
			<body>
				<Part1 data={product} />
				<Part2 data={detail} />
				<Part3 data={product} />
			</body>
		);
	}
}
class Product extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			index : this.props.index,
			data : this.props.data
		};
	}
	componentDidMount(){
		ReactDOM.findDOMNode(this).onclick = () => {
			let data = this.state.data;
			document.title = data.name;
			if(!QueryString("index")){
				window.history.pushState({}, data.name, `?index=${this.state.index}`);
			}
			$.ajax({
				url : `/api/getproduct/${data.id}`,
				success : data => {
					ReactDOM.render(
						<ProductDetail data={data.data} />,
						document.body
					);
				}
			});
		};
	}
	render(){
		let data = this.state.data;
		return (
			<section>
				<h1>
					<strong>
						{data.name}
					</strong>
					<em>
						{`项目规模:${data.lumpSum}元`}
					</em>
				</h1>
				<div className="main">
					<div className="column1">
						<p>年化率</p>
						<p>
							<strong>
								{(data.primeRate * 100).toFixed(1)}
							</strong>
							<em>％</em>
						</p>
					</div>
					<div className="column2">
						<p>期限</p>
						<p>
							<strong>
								{data.days}
							</strong>
							<em>天</em>
						</p>
					</div>
					<a>立即购买</a>
				</div>
			</section>
		);
	}
}
class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data : props.data.data
		};
	}
	componentDidMount(){
		if(QueryString("index")){
			ReactDOM.findDOMNode(this.refs[`product${QueryString("index")}`]).click();
		}
	}
	render(){
		let lists = [],
			data = this.state.data;
		data.forEach((list, index) => {
			lists.push(
				<Product index={index + 1} data={list} ref={`product${index + 1}`} />
			);
		});
		return (
			<body>
				{lists}
				<Menu type={1} option={
					[
						{
							href : "/",
							text : "首页"
						},
						{
							href : "/product",
							text : "理财产品"
						},
						{
							href : "/me",
							text : "我的账户"
						},
						{
							href : "/more",
							text : "更多"
						}
					]
				} currentIndex={1} />
			</body>
		);
	}
}
const init = () => {
	PageData.setData("/api/getproduct", data => {
		React.render(
			<Page data={data} />,
			document.body
		);
	}).render(init);
};
export {
	Page as main,
	init as init
};