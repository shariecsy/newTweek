
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {}
	},
	_bindCard:function(){
		window.location='../purse-verified/index.html';
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">医链盟钱包</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div ref="main" className="purse">
					   <div className="yct-wallet-msg">
						   <p><i className="icon icon-wallet-disabled"></i></p>
						   <p className="mt20">&nbsp;&nbsp;开通医链盟钱包、安全快捷、更多优惠福利！</p>
					   </div>
					   <div className="button">
						   <a className="btn-save" onClick={this._bindCard}>开通医链盟钱包</a>
						   <p className="p-agree yct-wallet-info">
							   <a className="a-agree active">
								   <i className="icon am-icon-check-circle middle"></i></a>开通即代表您已阅读并同意
							   <a href="#">《医链盟钱包协议》</a>
						   </p>
					   </div>
					   <p className="yct-wallet-tips">
						   <a className="color-2eacff">医链盟钱包说明</a>
					   </p>
				   </div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));