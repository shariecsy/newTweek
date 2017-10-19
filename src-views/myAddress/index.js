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
						{/*无数据*/}
						<section className="page-tips">
							<i className="tips-icon tips-icon-addfamily"></i>
							<div className="tips-word">
								<p className="p1">暂无地址</p>
							</div>
						</section>

						<div className="bottom-btn">
							<button className="am-btn am-round am-btn-block am-btn-primary">添加地址</button>
						</div>

						<section className="list address">
							<div className="address-list">
								<a>
									<div className="address-tit">
										<h4>*伟军（135****5893）</h4>
										<p>广东省广州市越秀区起义路1号缤缤广场工程部</p>
									</div>
								</a>
								<div className="address-con">
									<a className="address-fl"><i className="iconfont icon-duigou"></i>默认地址</a>
									<a className="add-del"><i className="iconfont icon-shanchu"></i></a>
									<a className="add-modify"><i className="iconfont icon-xiugai"></i></a>
								</div>
							</div>
							<div className="address-list">
								<a>
									<div className="address-tit">
										<h4>*伟军（135****5893）</h4>
										<p>广东省广州市越秀区起义路1号缤缤广场工程部</p>
									</div>
								</a>
								<div className="address-con">
									<a className="address-fl"><i className="iconfont"></i>默认地址</a>
									<a className="add-del"><i className="iconfont icon-shanchu"></i></a>
									<a className="add-modify"><i className="iconfont icon-xiugai"></i></a>
								</div>
							</div>

							<div className="bottom-btn">
								<button className="am-btn am-round am-btn-block am-btn-primary">添加地址</button>
							</div>
						</section>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));