var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			btnText: "获取验证码",
			codeBtnClass: "am-btn am-btn-primary am-round am-btn-xs",
			codeSendMsg: false,
			totalTime: 60,
			cbStyle: 'am-icon-circle-o',
			checked: false,
			layerShow: false,
			msg: '',
			layerShowTimer: null,
			getCodeTimer:null,
			layerLoading:false
		}
	},
	_getCode: function() {
		var mobileNo = this.refs.mobileNo.value;
		if(!MobileNoUtil.validate(mobileNo)) {
			this._layerShow('手机号码不正确！', null, 1000);
			return;
		}
		// this._layerShow('提交数据中...', null, 2 * 1000);
		this.setState({
			layerLoading:true  //打开loading
		})
		this.refs.getCode_btn.disabled = true;
		this._countDownBtn();
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/getCode',
			data: {
				mobileNo: mobileNo
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					var msg = res.result.msg;
					this.setState({
						codeSendMsg: true,
						layerLoading:false  //关闭loading
					});
					this._layerShow(msg);
				} else {
					this.setState({
						layerLoading:false  //关闭loading
					})
					this._clearGetCodeBtn();
					var msg = res.result.msg;
					this._layerShow(msg);
					this.refs.getCode_btn.disabled = false;
				}
			}.bind(this),
			error: function(res) {
				console.log(res);
				this.refs.getCode_btn.disabled = false;
				this.setState({
					layerShow: true,
					layerLoading:false  //关闭loading
				});
				this._layerShow('网络异常');
			}.bind(this)
		});
	},
	_countDownBtn:function(){
		this.state.getCodeTimer  = setInterval(function() {
			this.state.totalTime--;
			this.setState({
				btnText: this.state.totalTime + "s"
			});
			if(this.state.totalTime < 1) {
				this._clearGetCodeBtn();
			}
		}.bind(this), 1000);
	},
	_clearGetCodeBtn: function() {
		clearInterval(this.state.getCodeTimer);
		this.refs.getCode_btn.disabled = false;
		this.setState({
			codeBtnClass: "am-btn am-btn-primary am-round am-btn-xs",
			btnText: "获取验证码",
			totalTime:60
		});
	},
	_toSetPassword: function() {
		var mobileNo = this.refs.mobileNo.value;
		var code = this.refs.code.value;
		this._layerShow('提交数据中...', null, 30 * 1000);
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/checkCode',
			data: {
				mobileNo: mobileNo,
				code: code
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this._clearGetCodeBtn();
					this._layerShow(res.result.msg,function(){
						LocalStorageUtil.set(STORAGE_CONSTANTS.REGIST_MOBILE_NO_KEY, mobileNo);
						window.location = '../register-password/index.html';
					});
				} else {
					this._layerShow(res.result.msg);
				}
			}.bind(this),
			error: function(res) {
				this._layerHide();
				console.log(res);
			}
		});
	},
	_check: function() {
		if(this.state.checked) {
			this.state.checked = false;
			this.setState({
				cbStyle: 'am-icon-circle-o'
			})
		} else {
			this.state.checked = true;
			this.setState({
				cbStyle: 'am-icon-check-circle-o'
			});
		}
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
						<h1 className="am-header-title">注册账号</h1>
					</Header.CenterItem>
				</Header>
				<div ref="main">
					<Container>
						<div className="register-box">
							<div className="item">
								<span className="label">手机号码</span>
								<input type="tel" ref="mobileNo" placeholder="请输入您的手机号码" maxLength="11"/>
								<button type="button" ref="getCode_btn" className={this.state.codeBtnClass} onClick={this._getCode} id="codeBtn">{this.state.btnText}</button>
							</div>
							<div className="item">
								<span className="label">验证码</span>
								<input type="text" ref="code" placeholder="请输入验证码"/>
							</div>
						</div>
					</Container>
					<div className="app-notice">
						<i className={this.state.cbStyle} onClick={this._check}></i><span>注册即代表您已阅读</span><a href="../agreement/index.html">《平台协议》</a>
					</div>
					<div className="btn-box">
						<button className="btn btn-confirm" ref="btn_next" disabled={!this.state.checked} onClick={this._toSetPassword}>下一步</button>
					</div>
					{this.state.codeSendMsg?<div className="app-notice">短信验证码已发送成功，请留意。60秒内收不到可再次点击发送</div>:""}	
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
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));