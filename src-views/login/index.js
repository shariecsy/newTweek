/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			layerLoading:false,
			layerShow:false,
			msg:''
		}
	},
	componentDidMount: function() {

	},
	_loginHandler: function() {
		var username = this.refs.username.value;
		var opwd = this.refs.pwd.value;
		if(username == '' || opwd == ''){
			this._layerShow("请输入用户密和密码！")
			return;
		}
		var pwd = CryptoUtils.getSha512(opwd);
		this.setState({
			layerLoading:true  //打开loading
		})
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/login',
			data: {
				username: username,
				pwd: pwd
			},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false  //关闭loading
					})
					this._layerShow('登录成功！',function(){
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_ID_KEY, res.result.userId);
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_NAME_KEY, res.result.mobileNo);
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_IMG_KEY, res.result.userImg);
						window.location.href = '../index/index.html';
					});
				} else {
					this.setState({
						layerLoading:false  //关闭loading
					})
					this._layerShow(res.result.msg);
				}
			}.bind(this),
			error: function(res) {
				this.setState({
					layerLoading:false  //关闭loading
				})
				this._layerShow('服务器异常:'+res);
				console.log(res);
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
		return(
			<div>
				<Container>
					<section className="login">
						<div className="logo"><img src="../images/LOGO.png" alt="医链盟App"/></div>
						<div className="login-enter">
							<p>
								<i className="am-icon-user am-icon-sm"></i>
								<span><input type="text" ref="username" className="login-input" placeholder="请输入手机号或账号名"/></span>
							</p>
							<p>
								<i className="am-icon-lock am-icon-sm"></i>
								<input type="password" ref="pwd" className="login-input" placeholder="请输入6-16位密码"/>
							</p>
							<p className="p-button">
								<button className="am-btn am-btn-block am-round" onClick={this._loginHandler}>登录</button>
							</p>
							<p className="p-link">
								<a href="../register/index.html" className="fl">注册账号</a>
								<a href="../forgetPassword/index.html" className="fr">忘记密码？</a>
							</p>
						</div>
					</section>
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