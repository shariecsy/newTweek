
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			invoiceContent: false,
			switchOn: false,
			address:{name:'收货人',telNo:'联系电话',address:'收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址'},
			goods:[],
			sum:0,
			amount:0,
			layerLoading:false,
			layerShow:false
		}
	},
	_switchClick: function(){
		this.setState({switchOn:!this.state.switchOn});
		this.setState({invoiceContent:!this.state.invoiceContent});
	},
	componentDidMount: function () {
		localStorage.setItem('buyIds', '["id_2"]');
		localStorage.setItem('user_id', '17');
		localStorage.setItem('goodsDetail','{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg"}');
		localStorage.setItem('goodsCart', '{"id_2":{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg","goodsNum":2,"totalPrice":"6.60"}}');
		// console.log(localStorage.getItem('buyIds'))
		// console.log(JSON.parse(localStorage.getItem('buyIds')))
		// console.log(localStorage.getItem('user_id'))
		// console.log(JSON.parse(localStorage.getItem('user_id')))
		// console.log(localStorage.getItem('goodsDetail'))
		// console.log(JSON.parse(localStorage.getItem('goodsCart')))
		this._getOrderDetail();
		this._getOrderAmount();
    },
	_getOrderDetail: function(){
		var _this = this;
		var goodsIds = JSON.parse(localStorage.getItem('buyIds'));
		var goods = JSON.parse(localStorage.getItem('goodsCart'));
		goodsIds.map(function (v, i) {
			_this.state.goods.push(goods[v]);
		});
		var addressItemString = localStorage.getItem(STORAGE_CONSTANTS.USER_CHOOSE_ADDRESS);
		if (addressItemString != undefined) {
			var addressItem = JSON.parse(addressItemString);
			_this.setState({
				address: addressItem
			});
			return;
		}
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'post',
			// url:'http://localhost:8080/v1.0/address/fetchDefault',
			url: API_SERVICE_URL + '/v1.0/address/fetchDefault',
			data:{
				userId:localStorage.getItem('user_id')
			},
			success: function(res) {
				if(res.code == 0) {
					if(res.result.length > 0){
						_this.setState({
							address: res.result[0]
						});
						console.log(_this.state.address)
					}/*else if(localStorage.getItem('address')){
					 _this.setState({
					 address: JSON.parse(localStorage.getItem('address'))
					 })
					 }*/else{
						_this.setState({
							address: 'noAddress'
						});
						// window.location.href = '../addAddress/index.html'
					}
				} else {
					_this.setState({
						layerLoading:false  //关闭loading
					});
				}
			},
			error: function(res) {
				_this.setState({
					// layerLoading:false  //关闭loading
				})
			}
		});
	},
	_getOrderAmount: function () {
		// var id = GetQueryString.getQueryString('id');
		var id = 5;
		this.setState({layerLoading:true});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/order/getAmount',
			data: {id:id},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false,  //关闭loading
						amount: res.result.amount
					})
				} else {
					this.setState({
						layerLoading:false  //关闭loading
					})
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function(res) {
				this.setState({
					layerLoading:false  //关闭loading
				})
				this._layerShow('服务器异常:'+res);
			}.bind(this)
		});
	},
	_layerShow:function(text,fn){
		var me = this;
		this.setState({
			layerShow:true,
			msg:text
		})
		setTimeout(function(){
			me.setState({
				layerShow:false,
				msg:''
			});
			fn&&fn();
		},2000)
	},
	render: function() {
		var sum = this.state.sum;
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">订单详情</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="order-details-footer">
					   <p className="footer-title clearfix">
						   <span className="footer-title-left">订单状态：</span>
						   <span className="footer-title-right">
							   买家已付款
                    </span>
					   </p>
					   <div className="footer-cont">
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">订单编号：</span><span className="footer-cont-right">123131312312312312</span>
						   </p>
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">创建时间：</span><span className="footer-cont-right">2000-01-23 00:00:00</span>
						   </p>
					   </div>
				   </div>
				   <div className="order-details-content">
					   {/*<div className="details-title clearfix">
						   <p className="details-title-size">康爱多</p>
						   <p className="details-title-price">
							   合计<span>￥4.50</span>
						   </p>
					   </div>*/}
					   <div className="details-content-wrap">
						   {
						   		this.state.goods.map(function (v, i) {
                                    this.state.sum = this.state.sum + Number(v.totalPrice);
									return (
										<div className="details-content-prod" key={i}>
											<div className="prod-wrap display-box">
												<p className="prod-pic box-flex">
													<img src={v.src}/>
												</p>
												<div className="prod-cont box-flex">
													<p className="prod-name">{v.name}</p>
													<p className="prod-price">
														<span className="sale-price">
															价格：<i>
																¥{v.price}
															</i>
														</span>
														<span className="price-num">x {v.goodsNum}</span>
													</p>
												</div>
											</div>
										</div>
									)
                                }.bind(this))
						   }
					   </div>
				   </div>
				   <div className="payment-container">
					   <div className="order-details-person">
						   <div className="person-content clearfix">
							   <i className="am-icon-map-marker am-icon-sm"></i>
							   <div className="addr-text">
								   <p className="addr_size">{this.state.address.name} &nbsp;&nbsp;{this.state.address.telNo}</p>
								   <p className="addr_size2">
									   {this.state.address.address}
								   </p>
							   </div>
						   </div>
					   </div>
				   </div>
				   <div className="order-details-footer">
					   <p className="footer-title clearfix">
						   <span className="footer-title-left">订单总价</span>
						   <span className="footer-title-right">
							   {this.state.amount}
                    </span>
					   </p>
					   <div className="footer-cont">
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">商品总价</span><span className="footer-cont-right">￥30.00</span>
						   </p>
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">运费</span><span className="footer-cont-right">￥10.00</span>
						   </p>
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">积分抵扣</span><span className="footer-cont-right">-￥0.00</span>
						   </p>
					   </div>
				   </div>
			   </Container>
				{/*其他提示弹窗 start*/}
				<Layer show={this.state.layerShow} layerCls="alert-layer" ref="alertLayer">
					<Layer.Text>
						<p><i className="am-icon-info-circle am-icon-lg"></i></p>
						<p>{this.state.msg}</p>
					</Layer.Text>
				</Layer>
				<Layer.Background show={this.state.layerShow}/>
				{/*其他提示弹窗 end*/}
				{/*Loading弹窗 start*/}
				<Layer show={this.state.layerLoading} layerCls="alert-loading">
					<Layer.Text>
						<img src="../images/loading.gif" alt="loading"/>
					</Layer.Text>
				</Layer>
				<Layer.Background show={this.state.layerLoading}/>
				{/*Loading弹窗 end*/}
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));