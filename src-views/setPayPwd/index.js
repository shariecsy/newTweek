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
						<h1 className="am-header-title">设置支付密码</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<section className="set-pay-pwd">
						<p className="reg-list">
							<span>手机号码</span>
							<input type="text" name="encryptedMobile" className="registered-input" readOnly="readonly" value="手机号码无法获取，请完善个人资料"/>
								<input type="hidden" name="phonenumber" className="registered-input" readOnly="readonly"/>
						</p>
						<p className="reg-list get-reg-list">
							<span>验证码</span>
							<input type="tel" name="phonecode" className="registered-input" placeholder="请输入验证码"/>
								<button className="link-click">发送验证码</button>
						</p>
						<p className="reg-list">
							<span>支付密码</span>
							<input type="tel" name="payPassword" className="registered-input text-security" maxLength="6" placeholder="请设置支付密码"/>
						</p>
						<p className="reg-list">
							<span>确认支付密码</span>
							<input type="tel" name="payConfirmPassword" className="registered-input text-security" maxLength="6" placeholder="请确认支付密码"/>
						</p>
					</section>
					<section className="tips middle mt10">
						<i className="icon icon-tips"></i>
						温馨提示：请输入6位数字支付密码。
					</section>
					<div className="bottom-btn">
						<button className="am-btn am-btn-block am-round am-btn-primary">保存</button>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));