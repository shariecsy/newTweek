/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Footer = require('../../src/complex/footer');
var Container = require('../../src/complex/container');
var MsgList = require('../../src/complex/msg-list');

var Root = React.createClass({
	componentDidMount: function() {
//		UAjax.ajax({
//			method: 'get',
//			url: window.API_SERVICE_URL + '/v1.0/msgs/fetchMsgList?mobileNo=13800000000',
//			data: '',
//			async: true,
//			success: function(res) {
//				console.log(res);
//				if(res.code==0){
//					this.refs.msglist.setListData(res.result);
//				}
//			}.bind(this),
//			error: function(res) {
//				console.log(res);
//			}
//		});
		var data = [{
					id:0,
					title:'绑卡成功',
					btime:'2017-01-01 12:01:01',
					content:'广州市XX医院',
					subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号',
					clickHandler:function(){
						window.location="../bindCardSuccess/index.html";
					}.bind(this)
			},{
					id:0,
					title:'绑卡成功',
					btime:'2017-01-01 12:01:01',
					content:'广州市XX医院',
					subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号',
					clickHandler:function(){
						window.location="../bindCardSuccess/index.html";
					}.bind(this)
			}];
		this.refs.msglist.setListData(data);
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<h1 className="am-header-title">消息中心</h1>
					</Header.CenterItem>
				</Header>
			   <Container>
			   		<div className="pads">
				   	<MsgList ref="msglist" />
	            	   </div>
				</Container>
				<Footer selectIndex="1"/>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));