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
						<h1 className="am-header-title">就诊反馈</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-feedback">
                        <h3 className="h3-tit">
                            <span>问题类型</span>
                            <div className="feedback-type fl-r">
                                <select>
                                    <option value="4">请选择</option>
                                    <option value="0">挂号</option>
                                    <option value="1">门诊缴费</option>
                                    <option value="2">住院</option>
                                    <option value="3">检查检验</option>
                                    <option value="4">其他</option>
                                </select>
                                {/*<i className="icon am-icon-angle-down middle"></i>*/}
                            </div>
                        </h3>
                        <h3 className="h3-tit clearfix">
                            <span>医院名称</span>
                            <input type="text" className="list-input-type hosp-name" placeholder="请输入医院名称" maxLength="50"/>
                        </h3>
                        <div className="feedback" style={{marginTop:0}}>
                            <textarea className="feedback-textarea" maxLength="500" placeholder="欢迎您对我们提出宝贵的意见或建议，我们将不断努力为您提供更好的体验~"></textarea>
                            <p className="color-999">0/500</p>
                        </div>
                        <section className="feedback-op-bar clearfix">

                        </section>
                        <div className="bottom-btn">
                            <button type="button" className="am-btn am-btn-primary am-round am-btn-block">提交</button>
                        </div>

                    </div>
				</Container>

            </div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));