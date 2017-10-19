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
						<a className="am-icon-angle-left header-left-icon" href="javascript:window.history.back()"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">添加邀请码</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<p className="reg-list">
						<input type="text" className="registered-input" placeholder="请输入邀请码"/>
					</p>
					<div className="bottom-btn">
						<button className="am-btn am-btn-block am-round am-btn-primary">保存</button>
					</div>
					<div className="bottom-btn">
						<button className="am-btn am-btn-block am-round am-btn-default">暂不添加</button>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));