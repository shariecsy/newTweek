var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			noticeLayer:false,
			layerLoading:false,
			layerShow:false,
			name:'',
			tel_no:'',
			address:''

		}
	},
	componentDidMount:function(){
		this._getAddressDetail();
		// this._editAddressItem();
	},
	_showLayer: function(){
		this.setState({
			noticeLayer: true
		});
	},
	_closeLayer:function(){
		this.setState({
			noticeLayer:false
		})
	},
	_chooseAdress: function (){
		this._deleteAddressItem();
		this._closeLayer();
	},
	_setDefaultAddress: function(){
		var _isDefault = !this.state.isDefault;
		this.setState({
			isDefault:_isDefault
		});
		/*var radioEle=this.refs.radioEle;
		if(radioEle.className.indexOf('checked')>-1){
			radioEle.className="radio inline";
		}else{
			radioEle.className="radio inline checked";
		}*/
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
					})
					if(res.result.length == 0){
						window.location='../noConsigneeAddress/index.html';
					}else{
						window.location='../chooseConsigneeAddress/index.html';
					}
				} else {
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

	_getAddressDetail:function(){
		var addressId = GetQueryString.getQueryString('addressId');
		this.setState({layerLoading:true});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/fetchById',
			// url: 'http://localhost:8080/v1.0/address/fetchById',
			data: {addressId:addressId},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false,  //关闭loading
						addressItem:res.result[0],
						name:res.result[0].name,
						tel_no:res.result[0].tel_no,
						address:res.result[0].address,
						isDefault:res.result[0].is_default
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
	_deleteAddressItem:function(){
		this.setState({
			layerLoading:true
		});
		var addressId = GetQueryString.getQueryString('addressId');
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/delete',
			// url: 'http://localhost:8080/v1.0/address/delete',
			data: {id:addressId},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false,  //关闭loading
						noticeLayer:false
					})
					this._layerShow('删除成功！',this._getAddressList);
				} else {
					this.setState({
						layerLoading:false,  //关闭loading
						noticeLayer:false
					})
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function(res) {
				this.setState({
					layerLoading:false,  //关闭loading
					noticeLayer:false
				})
				this._layerShow('服务器异常:'+res);
			}.bind(this)
		});

	},
	_editAddressItem:function(){
		this.setState({
			layerLoading:true
		});
		var addressId = GetQueryString.getQueryString('addressId');
		var name = this.refs['receiver'].value;
		var telNo = this.refs['telNo'].value;
		var addr_detail = this.refs['addr_detail'].value;
		// var isDefault = this.refs['radioEle'].querySelector('input[type=radio]').checked ? 1 : 0;
		var isDefault = this.state.isDefault;
		console.log(isDefault)
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		// 检验用户是否登录
		if(!user_id){
			alert('请登录');
			return false;
		}
		this.setState({
			layerLoading:true  //打开loading
		});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/update',
			// url: 'http://localhost:8080/v1.0/address/update',
			data: {
				id:addressId,
				userId:user_id,
				address:addr_detail,
				name:name,
				telNo:telNo,
				isDefault: isDefault
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false  //关闭loading
					});
					this._layerShow('修改成功！');
					window.location.href = '../chooseConsigneeAddress/index.html';
				} else {
					this.setState({
						layerLoading:false,  //关闭loading
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
	_onChangeName:function(e){
		this.setState({
			name:e.target.value
		})
	},
	_onChangetel_no:function(e){
		this.setState({
			tel_no:e.target.value
		})
	},
	_onChangeAddress:function(e){
		this.setState({
			address:e.target.value
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
						<h1 className="am-header-title">编辑收货地址</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="javascript:;" onClick={this._showLayer}>删除</a>
					</Header.RightItem>
				</Header>
			   <Container>
					<div className="edit-address-wrap">
						<div className="edit-wrap display-box">
							<p className="edit-size box-flex">收货人：</p>
							<p className="edit-input box-flex">
								<input type="text" value={this.state.name} ref="receiver" onChange={this._onChangeName}/>
							</p>
						</div>
						<div className="edit-wrap display-box">
							<p className="edit-size box-flex">手机号码：</p>
							<p className="edit-input box-flex">
								<input type="text" value={this.state.tel_no} ref="telNo" onChange={this._onChangetel_no}/>
							</p>
						</div>
						<div className="edit-wrap edit-detailed-address display-box">
							<p className="edit-size box-flex">详细地址：</p>
							<p className="edit-input edit-textarea box-flex">
								<textarea name="" id="" value={this.state.address} ref="addr_detail" onChange={this._onChangeAddress}></textarea>
							</p>
						</div>
						<div className="setDefault-address">
							<div className="setDefault-wrap clearfix">
								<p className="setDefault-left">设置为默认地址</p>
								<div className="setDefault-right">
									<label className={this.state.isDefault? "radio inline checked" : "radio inline" } ref="radioEle">
										<input type="radio"  onClick={this._setDefaultAddress}/>
									</label>
								</div>
							</div>
						</div>
					</div>
				   <div className="button"><a href="javascript:;" className="btn-save" onClick={this._editAddressItem}>保存</a></div>
			   </Container>
				{/*删除地址提示弹窗 start*/}
				<Layer show={this.state.noticeLayer} layerCls="confirm-layer">
					<Layer.Title>
						提示
					</Layer.Title>
					<Layer.Text>
						是否确定删除该地址？
					</Layer.Text>
					<Layer.Button cancel={this._closeLayer} confirm={this._chooseAdress}/>
				</Layer>
				<Layer.Background show={this.state.noticeLayer}/>
				{/*删除地址提示弹窗 end*/}
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