/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
    componentDidMount: function () {
        var data = [{
            id: 0,
            title: '绑卡成功',
            btime: '2017-01-01 12:01:01',
            content: '广州市XX医院',
            subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
        }, {
            id: 0,
            title: '绑卡成功',
            btime: '2017-01-01 12:01:01',
            content: '广州市XX医院',
            subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
        }];
        // this.refs.msglist.setListData(data);
    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">修改密码</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="change-login-pwd">
						<p className="reg-list">
							<span>原密码</span>
							<input type="password" name="oldPassword" className="registered-input" placeholder="请输入原密码"/>
						</p>
						<p className="reg-list">
							<span>设置新密码</span>
							<input type="password" name="newPassword" className="registered-input" placeholder="请输入6-16位新密码"/>
						</p>
						<p className="reg-list">
							<span>确认新密码</span>
							<input type="password" name="confirmNewPassword" className="registered-input" placeholder="请重新输入6-16位确认新密码"/>
						</p>
					</div>
					<div className="bottom-btn">
						<button className="am-btn am-btn-block am-round am-btn-primary">保存</button>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));