/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');

var Root = React.createClass({
    componentDidMount: function () {

    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">更多服务</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
                    <div className="more-service">
                        <ul className="am-list am-list-static">
                            <li>
                                <a href="../myEvaluation/index.html">
                                    <i className="am-icon-stethoscope am-icon-sm icon-left"></i>
                                    就诊评价
                                    <i className="iconfont icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="../myAddress/index.html">
                                    <i className="am-icon-list-alt am-icon-sm icon-left"></i>
                                    地址管理
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