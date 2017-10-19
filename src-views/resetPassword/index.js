var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Root = React.createClass({
	getInitialState:function(){
		return {
			passwordShow:false,
			layerShow: false,
			msg: '',
			layerShowTimer: null,
			layerLoading:false
		}
	},
	_passwordShow:function(){
		this.setState({
			passwordShow:!this.state.passwordShow
		});
	},
	_reset:function(){
		var pwd = CryptoUtils.getSha512(this.refs.pwd.value);
		var mobileNo = LocalStorageUtil.get(STORAGE_CONSTANTS.REGIST_MOBILE_NO_KEY);
		if(mobileNo==''){
			this._layerShow('请输入密码！');
			return;
		}
		// this._layerShow('提交数据中...', null, 30 * 1000);
		this.setState({
			layerLoading:true  //打开loading
		})
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/resetPwd',
			data: {
				mobileNo: mobileNo,
				pwd: pwd
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false  //关闭 loading
					})
					this._layerShow('密码重置成功！',function(){
//						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_ID_KEY, mobileNo);
						window.location.href = '../index.html';
					});
					
				} else {
					this.setState({
						layerLoading:false  //关闭 loading
					})
					this._layerShow(res.result.msg);
					
				}
			}.bind(this),
			error: function(res) {
				this.setState({
					layerLoading:false  //关闭 loading
				})
				console.log(res);
				this._layerShow('网络异常');
			}.bind(this)
		});
	},
	_layerShow: function(text, fn, time) {
		var me = this;
		clearTimeout(this.state.layerShowTimer);
		this.setState({
			layerShow: true,
			msg: text
		})
		this.state.layerShowTimer = setTimeout(function() {
			me.setState({
				layerShow: false,
				msg: ''
			});
			fn && fn();
		}, time || 2000)
	},
	_layerHide: function() {
		clearTimeout(this.state.layerShowTimer);
		this.setState({
			layerShow: false,
			msg: ''
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
						<h1 className="am-header-title">修改密码</h1>
					</Header.CenterItem>
				</Header>
				<Container>
					<div className="register-box">
						<div className="item">
							<span className="label">密码</span>
							<input ref="pwd" type={this.state.passwordShow?"text":"password"} placeholder="请输入密码6-16位"/>
							<a href="javascript:;" onClick={this._passwordShow}>
								<i className={this.state.passwordShow? "icon am-icon-eye middle active":"icon am-icon-eye middle"}></i>
							</a>
						</div>
					</div>
					<div className="btn-box">
						<a href="javascript:;" className="btn btn-confirm" onClick={this._reset}>修改</a>
					</div>
				</Container>

				<Layer show={this.state.layerShow} layerCls="alert-layer" ref="alertLayer">
						<Layer.Text>
							<p><i className="am-icon-info-circle am-icon-lg"></i></p>
							<p>{this.state.msg}</p>
						</Layer.Text>
					</Layer>
					<Layer.Background show={this.state.layerShow}/>
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