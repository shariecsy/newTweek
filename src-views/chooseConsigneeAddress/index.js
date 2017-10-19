
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			layerLoading:false,
			layerShow:false,
			addressList:[]
		}
	},
	componentDidMount: function () {
		this._getAddressList();
	},
	_editAddress: function(addressId){
		window.location='../editConsigneeAddress/index.html?addressId='+ addressId;
	},
	_createAddress: function( ){
		window.location='../createNewAddress/index.html';
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
	_getAddressList: function () {
		this.setState({layerLoading:true});
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		// 检验用户是否登录
		if(!user_id){
			alert('请登录');
			return false;
		}
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/fetch',
			// url: 'http://localhost:8080/v1.0/address/fetch',
			data: {
				userId:user_id
				// userId:2
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false,  //关闭loading
						addressList: res.result
					});
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
    chooseHandler: function (item) {
        localStorage.setItem(STORAGE_CONSTANTS.USER_CHOOSE_ADDRESS, JSON.stringify(item));
        window.location = '../getOrderInfo/index.html';
    },
    _chooseAddress: function (i) {
		var address = this.state.addressList[i];
		localStorage.setItem('address',JSON.stringify(address));
		window.location.href = '../getOrderInfo/index.html';
    },
	render: function() {
		var _this = this;
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">选择收货地址</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="store-list-wrap">
					   <div className="store-address-rel">
						   {
							   this.state.addressList.map(function(item,index){
								   var isDefault = item.isDefault == 1;
								   return (
									   <div className="store-list display-box" key={index}>
										   <p className="store-list-left box-flex">
											   <i className="am-icon-check am-icon-sm" style={{display: isDefault? 'block' : 'none'}}></i>
										   </p>
										   <a href="javascript://" onClick={_this.chooseHandler.bind(_this, item)} className="store-list-center box-flex">
											   <p className="store-list-size1 clearfix">
												   <span className="store-person-name">{item.name}</span>
												   <span className="store-person-phone">{item.telNo}</span>
											   </p>
											   <p className="store-list-size2">
												   <span className="store-default" style={{display: isDefault? 'block' : 'none'}}>【默认】</span>
												   <span className="store-address">{item.address}</span>
											   </p>
										   </a>
										   <p className="store-list-right box-flex" onClick={_this._editAddress.bind(_this,item.id)}>
											   <i className="am-icon-edit am-icon-sm"></i>
										   </p>
									   </div>
								   )
							   }.bind(this))
						   }
					   </div>
				   </div>
				   <div className="button"><a className="btn-save" onClick={this._createAddress}>添加收货地址</a></div>
			   </Container>
				{/*提示弹窗 start*/}
				<Layer show={this.state.layerShow} layerCls="alert-layer" ref="alertLayer">
					<Layer.Text>
						<p><i className="am-icon-info-circle am-icon-lg"></i></p>
						<p>{this.state.msg}</p>
					</Layer.Text>
				</Layer>
				<Layer.Background show={this.state.layerShow}/>
				{/*提示弹窗 end*/}
				{/*Loading弹窗 start*/}
				<Layer show={this.state.layerLoading} layerCls="alert-loading">
					<Layer.Text>
						<img src="../images/loading.gif" alt="loading"/>
					</Layer.Text>
				</Layer>
				{/*Loading弹窗 end*/}
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));