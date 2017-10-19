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
						<h1 className="am-header-title">我的家人</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message add-medical-card">
						<div className="toptit">
							<a className="toptit-link middle location">
								<i className="am-icon-map-marker am-icon-sm"></i>
								<span className="positionName">广州市</span>
							</a>
						</div>
						<div className="info-row">
							<i className="portrait"><img src="https://yct.968309.com/pic/file/hospitalLogoPath/6bc95ad6ce7545f58c572a5c12db95b8.png" className="ele-rounded"/></i>
							<h4 className="h4-name">广州市妇女儿童医疗中心(珠江新城)</h4>
							<p className="p1">三甲</p>
							<p className="p2">天河区金穗路9号</p>
							<p className="p-but middle">
								<a className="but-label am-btn am-round">关联就诊卡</a>
							</p>
						</div>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));