
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {

		}
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">医保专区</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="news-detail">
					   <h2>常见儿童禁用或慎用药物一览表</h2>
					   <div className="news-author">
						   <ul className="clearfix">
							   <li>
								   <img src="../images/hospitalLogo.jpg" alt=""/>
							   </li>
							   <li className="text">
								   <p>医程通</p>
								   <p className="date">2016-12-06</p>
							   </li>
						   </ul>
					   </div>
					   <div className="news-article">
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
						   <p>常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表常见儿童禁用或慎用药物一览表</p>
					   </div>
				   </div>

				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));