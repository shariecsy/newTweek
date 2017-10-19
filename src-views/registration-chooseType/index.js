
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {
		
		}
	},
	_chooseDepartmentList:function(){
		window.location="../registration-chooseDepartment/index.html";
	},
	render: function() {
		return(
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
					<div className="choose-type">
						<div className="rgstr-type-top">
							<ul className="clearfix">
								<li onClick={this._chooseDepartmentList}>
									<p><i className="am-icon-plus-square am-icon-md"></i></p>
									<p>当天挂号</p>
								</li>
								<li onClick={this._chooseDepartmentList}>
									<p><i className="am-icon-medkit am-icon-md"></i></p>
									<p>预约挂号</p>
								</li>
							</ul>
						</div>
						<div className="rgstr-type-notice">
							<p>挂号须知</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
							<p>1.每日00:00截止预约或取消次日订单；</p>
						</div>
						<div className="app-notice">
							<i className="am-icon-check-square"></i>同意以上挂号须知内容
						</div>
					</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));