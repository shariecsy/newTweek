
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
    componentDidMount: function () {
    },
    render: function () {
		var id = GetQueryString.getQueryString('id');
		// var id = 2;
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">支付成功</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
					<div className="place-result">
						<span className="am-icon-check-circle result-icon result-icon-success"></span>
						<p className="result-text">支付成功</p>
					</div>
					<div className="place-btn">
						<a href={"../checkOrderDetail/index.html?id="+id} className="show-order-btn fl">查看订单</a>
						<a href="../index/index.html" className="back-to-index-btn fr">返回首页</a>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));