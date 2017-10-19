
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			goods:[],
			sum:0,
			orderList:[],
			layerLoading:false,
			layerShow:false,
			currentNo:0
		}
	},
	componentDidMount: function () {
		this._getOrderList();
	},
	_getOrderList: function(){
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		var resultArray;
		this.state.currentNo++;
		this.setState({layerLoading:true});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/order/fetchListPaging',
			data: {
				userId:user_id,
				currentNo:this.state.currentNo
			},
			async: true,
			cache: false,
			success: function(res) {
				resultArray=res.result;
				if(res.code == 0) {
					if(this.state.orderList.length>0){
						for(var i = 0;i<resultArray.length;i++){
							this.state.orderList.push(resultArray[i]);
						}
					}else{
						this.setState({
							orderList: res.result
						});
					}
					this.setState({
						layerLoading:false,  //关闭loading
					})
					console.log(this.state.orderList)
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
	_tabClick:function(index){
		var tabPanes = document.getElementsByClassName('tab-pane');
		var tabs=document.getElementsByClassName('order-tabs')[0].getElementsByTagName('li');

		for(var i =0;i<tabPanes.length;i++){
			tabPanes[i].className='tab-pane';
			tabs[i].className='';
		}
		tabPanes[index].className="tab-pane block";
		tabs[index].className='active';

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
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">订单列表</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="order">
					   <div className="order-tabs">
						   <ul className="clearfix">
							   <li className="active" onClick={this._tabClick.bind(this,0)}>全部</li>
							   <li onClick={this._tabClick.bind(this,1)}>待付款</li>
							   <li onClick={this._tabClick.bind(this,2)}>待发货</li>
							   <li onClick={this._tabClick.bind(this,3)}>待收货</li>
							   <li onClick={this._tabClick.bind(this,4)}>已完成</li>
						   </ul>
					   </div>
					   <div className="tab-content">
						   <div className="tab-pane block">
							   <div style={{display:'none'}}>
								   <NoRecord text="您还没有相关订单1"/>
								   <div className="btn-box"><a href="###" className="btn btn-confirm">去逛逛</a></div>
							   </div>
							   {
								   this.state.orderList.map(function(item,index) {
									   var orderState;
									   switch(item.orderState){
										   case 1:
											   orderState='买家已付款';
											   break;
										   case 0:
											   orderState="等待买家付款";
											   break;
										   case -1:
											   orderState="支付失败";
											   break;
									   }
									   return (
										   <div className="order-item" key={index}>
											   <div className="order-details-content">

												   <div className="details-content-wrap">
													   <div className="footer-title clearfix">
														   <span className="footer-title-left">订单状态：</span>
														   <span className="footer-title-right">{orderState}</span>
													   </div>
													   <div className="details-content-prod">
														   <div className="prod-wrap display-box">
															   <p className="prod-pic box-flex">

																   <img src={item.src}/>

															   </p>
															   <div className="prod-cont box-flex">
																   <p className="prod-name">{item.medicinal_info}</p>
																   <p className="prod-price">
																<span className="sale-price">
																	价格：<i>
																		¥{item.medicinal_amount}
																	</i>
																</span>
																	   <span
																		   className="price-num">x {item.medicinal_num}</span>
																   </p>
															   </div>
														   </div>
													   </div>
												   </div>
												   <div className="order-details-footer">
													   <p className="footer-title clearfix">
														   <span className="footer-title-left">订单总价</span>
															   <span className="footer-title-right">
															   {item.orderAmount}
															   </span>
													   </p>
													   <p className="footer-title clearfix">
														   <span className="footer-title-left">订单时间：</span>
														   <span className="fr">{item.orderTime}</span>
													   </p>
												   </div>
											   </div>
										   </div>
									   )
								   })
							   }
						   </div>
						   <div className="tab-pane">
							   <NoRecord text="您还没有相关订单2"/>
							   <div className="btn-box"><a href="###" className="btn btn-confirm">去逛逛</a></div>
						   </div>
						   <div className="tab-pane">
							   <NoRecord text="您还没有相关订单3"/>
							   <div className="btn-box"><a href="###" className="btn btn-confirm">去逛逛</a></div>
						   </div>
						   <div className="tab-pane">
							   <NoRecord text="您还没有相关订单4"/>
							   <div className="btn-box"><a href="###" className="btn btn-confirm">去逛逛</a></div>
						   </div>
						   <div className="tab-pane">
							   <NoRecord text="您还没有相关订单5"/>
							   <div className="btn-box"><a href="###" className="btn btn-confirm">去逛逛</a></div>
						   </div>
						   <a href="javascript:;" className="add-more" onClick={this._getOrderList}>点击加载更多</a>
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