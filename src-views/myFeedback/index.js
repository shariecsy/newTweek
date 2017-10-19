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
						<h1 className="am-header-title">设置</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-setting">
                        <ul className="am-list am-list-static feedback-list">
                            <li>
                                <a href="../myFeedbackDetail">
                                    <i className="am-icon-stethoscope am-icon-sm icon-left"></i>
                                    就诊反馈
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="../myFeedbackList">
                                    <i className="am-icon-list-alt am-icon-sm icon-left"></i>
                                    消息列表
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
					</div>
				</Container>

            </div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));