var Dock = require('../dock/index.js');
var Footer = React.createClass({
	getInitialState:function(){
		return {
			selectIndex:this.props.selectIndex
		}
	},
	_handleClick:function(key,url){
		if(key==this.props.selectIndex){
			return;
		}else{
			window.location = url;
		}
	},
	render:function(){
		return (
			<Dock>
					<Dock.Item clickHandler={this._handleClick.bind(this,'0',"../index/index.html")}>
						<a href="javascript:void(0)" className={this.state.selectIndex == 0?"am-active":""}>
                            <span className="iconfont icon-home"></span>
                            <span className="am-navbar-label">首页</span>
                        </a>
					</Dock.Item>
					<Dock.Item clickHandler={this._handleClick.bind(this,'3',"../goodsList/index.html")}>
						<a href="javascript:void(0)" className={this.state.selectIndex == 3?"am-active":""}>
                            <span className="iconfont icon-shop3"></span>
                            <span className="am-navbar-label">商店</span>
                        </a>
					</Dock.Item>
					<Dock.Item clickHandler={this._handleClick.bind(this,'1',"../msg/index.html")}>
						<a href="javascript:void(0)" className={this.state.selectIndex == 1?"am-active":""}>
                            <span className="iconfont icon-message"></span>
                            <span className="am-navbar-label">消息</span>
                        </a>
					</Dock.Item>
					<Dock.Item clickHandler={this._handleClick.bind(this,'2',"../user/index.html")}>
						<a href="javascript:void(0)" className={this.state.selectIndex == 2?"am-active":""}>
                            <span className="iconfont icon-user1"></span>
                            <span className="am-navbar-label">我的</span>
                        </a>
					</Dock.Item>
				</Dock>
		)
	}
})

module.exports = Footer;