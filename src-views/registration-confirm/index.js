
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Root = React.createClass({
	getInitialState:function(){
		return {
			showLayer:false,
			toComplete:function(){
				window.location="../toCompleteInfo/index.html"
			}

		}
	},
	_addFamily:function(){
		window.location="../toCompleteInfo-family";
	},
	_selectPayment:function(index){
		var paymentEle=document.getElementsByClassName('am-icon-check');
		for(var i =0;i<paymentEle.length;i++){

			paymentEle[i].className="list-right am-icon-check none";

		}
		paymentEle[index].className="list-right am-icon-check";
	},
	_showLayer:function(){
		this.setState({
			showLayer:true
		})
	},
	_closeLayer:function(){
		this.setState({
			showLayer:false
		})

	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">挂号</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
					<div className="regist-confirm">
						<div className="info">
							<ul>
								<li className="clearfix">
									<span className="fl">姓名</span>
									<span className="fr right-item">谭梅</span>
								</li>
								<li className="clearfix">
									<span className="fl">科室</span>
									<span className="fr right-item">儿童肾内/遗尿专科（儿）</span>
								</li>
								<li className="clearfix">
									<span className="fl">就诊时间</span>
									<span className="fr right-item">2017-06-17 08:30-09:00</span>
								</li>
								<li className="clearfix">
									<span className="fl">挂号费</span>
									<span className="fr price">4元</span>
								</li>
							</ul>
						</div>
						<div className="choose-patient">
							<ul>
								<li className="title">
									选择就诊人
								</li>
								<li className="my-info">
									<p className="notice">（本人信息没完善）（本人信息没完善）（本人信息没完善）</p>
									<p className="cardNo">卡号：</p>
									<span className="list-right bind-card" onClick={this._showLayer}>关联就诊卡</span>
								</li>
								<li className="add-patient" onClick={this._addFamily}>
									添加家人
									<span className="list-right right-arrow am-icon-angle-right"></span>
								</li>
							</ul>
						</div>
						<div className="description">
							<ul>
								<li className="title">
									病情描述
								</li>
								<li>
									<textarea placeholder="请输入病情描述">

									</textarea>
								</li>
							</ul>
						</div>
						<div className="payment">
							<ul>
								<li className="title">
									选择支付方式
								</li>
								<li onClick={this._selectPayment.bind(this,0)}>
									<img src="../images/hospitalLogo.jpg" alt=""/>
									<span className="method">银联支付</span>
									<span className="list-right am-icon-check"></span>
								</li>
								<li onClick={this._selectPayment.bind(this,1)}>
									<img src="../images/hospitalLogo.jpg" alt=""/>
									<span className="method">医保支付</span>
									<span className="list-right am-icon-check none"></span>
								</li>
							</ul>
						</div>
						<div className="btn-box"><a href="###" className="btn btn-confirm">确认挂号</a></div>
					</div>
				</Container>
				<Layer show={this.state.showLayer} layerCls="confirm-layer">
					<Layer.Title>
						温馨提示
					</Layer.Title>
					<Layer.Text>
					   请先完善个人信息。
					</Layer.Text>
					<Layer.Button confirm={this.state.toComplete.bind(this)} cancel={this._closeLayer}/>
				</Layer>
				<Layer.Background show={this.state.showLayer}/>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));