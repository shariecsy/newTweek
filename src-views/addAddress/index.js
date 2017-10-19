/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');

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
						<h1 className="am-header-title">地址管理</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-address">
						<ul className="decoction-info">
							<li className="decoction-info-unit">
								<input type="text" name="name" placeholder="请填写收件人姓名"/>
							</li>
							<li className="decoction-info-unit">
								<input type="text" name="mobile" placeholder="请填写手机号码"/>
							</li>
							<li className="decoction-info-unit">
								<input type="text" name="postcode" placeholder="请填写邮编"/>
							</li>
							<li className="decoction-info-unit">
								<div className="decoction-info-select">
									<select className="needsclick">
										<option value="">省(直辖市)</option>
										<option value="110000">北京市</option>
										<option value="120000">天津市</option>
										<option value="130000">河北省</option>
									</select>
									<i className="icon icon-down middle am-icon-chevron-down"></i>
								</div>
							</li>
							<li className="decoction-info-unit">
								<div className="decoction-info-select">
									<select className="needsclick">
										<option>市</option>
									</select>
									<i className="icon icon-down middle am-icon-chevron-down"></i>
								</div>
							</li>
							<li className="decoction-info-unit">
								<div className="decoction-info-select">
									<select id="area">
										<option>区</option>
									</select>
									<i className="icon icon-down middle am-icon-chevron-down"></i>
								</div>
							</li>
							<li>
								<textarea name="address" placeholder="请填写详细地址"></textarea>
							</li>
						</ul>
						<div className="bottom-btn">
							<button className="am-btn am-round am-btn-block am-btn-primary">确认地址</button>
						</div>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));