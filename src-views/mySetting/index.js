/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');

var Root = React.createClass({
	componentDidMount: function() {

	},
	_toLogin: function() {
		LocalStorageUtil.remove(STORAGE_CONSTANTS.USER_NAME_KEY);
		window.location = '../login/index.html';
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
                        <a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">设置</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-setting">
                        <ul className="am-list am-list-static">
                            <li>
                                <a href="../myFeedback/index.html">
                                    意见反馈
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="../changeLoginPwd/index.html">
                                    修改登录密码
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="../setPayPwd/index.html">
                                    设置支付密码
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="../addInviteCode/index.html">
                                    添加邀请码
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="am-list am-list-static">
                            <li>当前版本<i className="fl-r">v1.0</i></li>
                        </ul>
                        <div className="bottom-btn">
                            <button type="button" className="am-btn am-btn-primary am-round am-btn-block" onClick={this._toLogin}>退出登录</button>
                        </div>
					</div>
				</Container>

            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));