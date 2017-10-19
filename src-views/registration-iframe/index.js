var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState: function () {
		return {

		}
	},
	componentDidMount: function () {
		setTimeout(function () {
			this.refs.iframe.height = window.innerHeight - 49;
		}.bind(this), 0);
	},
	render: function () {
		return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">挂号</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
					<iframe ref="iframe" src="https://www.zhyygh.cn/web/dept_list.jsp" marginHeight="0" marginWidth="0" frameBorder="0" width="100%" height="100%" id="iframepage" name="iframepage" />
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root />, document.getElementById('merry'));