
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			switchOn:false,
			layerLoading:false,
			layerShow:false
		}
	},
	componentDidMount:function(){
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
	_setDefaultAddress: function(){
		this.setState({switchOn:!this.state.switchOn});
	},
	_saveNewAddress: function () {
		var name = this.refs['receiver'].value;
		var telNo = this.refs['telNo'].value;
		var addr_detail = this.refs['addr_detail'].value;
		var isDefault = this.refs['radioEle'].querySelector('input[type=radio]').checked ? 1 : 0;
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		// 检验用户是否登录
		if(!user_id){
			alert('请登录');
			return false;
		}
		this.setState({
			layerLoading:true  //打开loading
		});
		console.log(isDefault);
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/add',
			// url: 'http://localhost:8080/v1.0/address/add',
			data: {
				// userId:1,
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
					})
					this._layerShow('添加成功！',function(){
						window.location='../chooseConsigneeAddress/index.html';
					});
				} else {
					this.setState({
						layerLoading:false,  //关闭loading
						layerShow:true
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
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">新增收货地址</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
					<div className="edit-address-wrap">
						<div className="edit-wrap display-box">
							<p className="edit-size box-flex">收货人：</p>
							<p className="edit-input box-flex">
								<input type="text" placeholder="请输入收货人姓名" ref="receiver"/>
							</p>
						</div>
						<div className="edit-wrap display-box">
							<p className="edit-size box-flex">手机号码：</p>
							<p className="edit-input box-flex">
								<input type="text" placeholder="请输入11位手机号码" ref="telNo"/>
							</p>
						</div>
						<div className="edit-wrap edit-detailed-address display-box">
							<p className="edit-size box-flex">详细地址：</p>
							<p className="edit-input edit-textarea box-flex">
								<textarea name="" id="" placeholder="请输入街道及编号、楼宇名及房间号" ref="addr_detail"></textarea>
							</p>
						</div>
					</div>
				   <div className="setDefault-address">
					   <div className="setDefault-wrap clearfix">
						   <p className="setDefault-left">设置为默认地址</p>
						   <div className="setDefault-right">
							   <label className={this.state.switchOn? "radio inline checked" : "radio inline" } ref="radioEle"><input type="radio"  onClick={this._setDefaultAddress}/></label>
						   </div>
					   </div>
				   </div>
				   <div className="button"><a href='javascript:;' className="btn-save" onClick={this._saveNewAddress}>保存</a></div>
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
			   </Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));