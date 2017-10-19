
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	componentDidMount:function(){
	
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">消息</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				  <h3 className="bind-card-title">绑卡成功</h3>
				   <div className="bind-card-content">
					   <div className="item">
						   <p>恭喜，您已成功绑定就诊卡，现在可以在线挂号了。</p>
					 </div>
					   <div className="item">
						   <p><span className="name">医院</span><span className="value">广州市妇女儿童医疗中心（珠江新城）</span></p>
						   <p><span className="name">姓名</span><span className="value">*诺泓</span></p>
						   <p><span className="name">就诊卡号</span><span className="value">4401000013812477</span></p>
					   </div>
					   <div className="item time">
						   <p><span className="name">消息时间</span><span className="value">2016-12-17 11:25:02</span></p>
					   </div>
					
				   </div>
				</Container>
				<div className="app-notice">
					<i className="am-icon-info-circle"></i>注意：每个账号同个医院最多可以绑定3张就诊卡。
				</div>
				<div className="btn-box">
					<a href="javascript:;" className="btn btn-confirm">知道了</a>
				</div>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));