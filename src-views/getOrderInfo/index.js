
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Toast = require('../../src/libs/Toast');

var Root = React.createClass({
	getInitialState:function(){
		return {
			invoiceContent: false,
			switchOn: false,
			address:{},
			goods:[],
			sum:0
		}
	},
	_switchClick: function(){
		this.setState({switchOn:!this.state.switchOn});
		this.setState({invoiceContent:!this.state.invoiceContent});
	},
    submitOrder: function () {
		var _this = this;
		if(this.state.address == 'noAddress'){
            Toast.info({
            	content: '请先选择收货地址',
				duration:1500
			});
			return false;
		}else{
            UAjax.ajax({
                // method: 'post',
                // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
                // async: true,
                // cache: false,
                // contentType: 'application/x-www-form-urlencoded',

                method: 'post',
                url: API_SERVICE_URL + '/v1.0/order/add',
                data:{
                    userId:localStorage.getItem('user_id'),
                    orderList: JSON.stringify(_this.state.goods),
            		amount:_this.state.sum
                },
                success: function(res) {
                    LocalStorageUtil.set(STORAGE_CONSTANTS.ORDER_ID_KEY, res.result.id);
                },
                error: function(res) {
                    console.log(res);
                    _this.setState({
                        // layerLoading:false  //关闭loading
                    })
                }
            });
		}
		window.location.href = '../payment/index.html';
    },
	componentDidMount: function () {
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
                userId:Number(LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY))
			},
            success: function(res) {
                if(res.code == 0) {
            		if(res.result.length > 0){
						_this.setState({
							address: res.result[0]
						});
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
                console.log(res);
                _this.setState({
                    // layerLoading:false  //关闭loading
                })
            }
        });
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
						<h1 className="am-header-title">确认订单</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="payment-container">
					   <div className="order-details-person">
						   <a href="../chooseConsigneeAddress/index.html">
							   <div className="person-content clearfix">
								   <i className="am-icon-map-marker am-icon-sm"></i>
									{this.state.address == 'noAddress' ?
										<div className="addr-text">请补充收货地址</div> :
										<div className="addr-text">
											<p className="addr_size">{this.state.address.name} &nbsp;&nbsp;{this.state.address.telNo}</p>
											<p className="addr_size2">
                                                {this.state.address.isDefault ?
													<span>[默认]</span> : ''
                                                }
												{this.state.address.address}
											</p>
										</div>
									}
								   <i className="iconfont icon-arrow-right"></i>
							   </div>
						   </a>
					   </div>
					   <div className="order-details-payment">
						   <div className="payment-wrap1 display-box">
							   <p className="payment-wrap1-left box-flex">支付配送</p>
							   <div className="payment-wrap1-right box-flex">
								   <p className="payment-wrap1-size1">快递配送</p>
								   <p className="payment-wrap1-size1">在线支付</p>
								   <p className="payment-wrap1-size1">不限定时间</p>
							   </div>
						   </div>
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

				   {/*<div className="order-details-invoice clearfix">
					   <div className="invoice-title">
						   <p className="invoice-left">是否需要发票</p>
						   <div className="invoice-right">
							   <label className={this.state.switchOn? "radio inline checked" : "radio inline" } ref="radioEle"><input type="radio" onClick={this._switchClick}/></label>
						   </div>
					   </div>
					   <div className="invoice-content" style={{display: this.state.invoiceContent? "block" : "none"}}>
						   <p className="invoice-type">发票类型：普通发票</p>
						   <p className="invoice-input"><input type="text" value="" placeholder="请输入发票抬头" maxLength="20"/></p>
					   </div>
				   </div>*/}

				   <div className="order-details-remarks display-box">
					   <p className="remarks-left box-flex">订单备注：</p>
					   <p className="remarks-right box-flex"><input type="text" value="" placeholder="限50字内" maxLength="50"/></p>
				   </div>
				   <div className="order-details-footer">
					   {/*<p className="footer-title clearfix">
						   <span className="footer-title-left">商品金额</span>
						   <span className="footer-title-right">
                        ￥4.50
                    </span>
					   </p>
					   <div className="footer-cont">
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">运费</span><span className="footer-cont-right">￥15.00</span>
						   </p>
						   <p className="footer-cont-size clearfix">
							   <span className="footer-cont-left">积分抵扣</span><span className="footer-cont-right">-￥0.00</span>
						   </p>
					   </div>*/}
				   </div>
				   <div className="padding-blank"></div>
				   <div className="order-details-nav display-box">
					   <div className="order-nav-left box-flex">总计：<span>¥{this.state.sum.toFixed(2)}</span></div>
					   <div className="order-nav-right box-flex" onClick={this.submitOrder}>提交订单</div>
				   </div>
			   </Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));