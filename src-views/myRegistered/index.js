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
						<h1 className="am-header-title">我的诊疗卡</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

                {/*
				 var html="";
				 if(n.regStatus == 0){
				 html += "<a className='item lock' ";
				 }else if(n.regStatus == 1 ){
				 html += "<a className='item ok'";
				 }else if(n.regStatus == 3 ){
				 html += "<a className='item timeOut'";
				 }else if(n.regStatus == 2 || n.regStatus == 7){
				 html += "<a className='item cancel'";
				 }else if(n.regStatus == 5 || n.regStatus == 6 || n.regStatus == 8 || n.regStatus == 9 ){
				 html += "<a className='item fail'";
				 }else{
				 html += "<a className='item fail'";
				 }

				 html += " onclick='showOrderInfo(\"" + n.orderNo + "\")'>";
				 html += "<h3>" + n.hospitalName + "</h3>"
				 html += "    <p className='p-k-m-z'><span>挂号:" + n.deptName  + "-" + n.doctorName + "</span></p>"

				 if((n.realRegFee + n.realTreatFee) > 0){
				 html += "<p className='p-k-m-z'>" + parseFloat((n.realRegFee + n.realTreatFee) / 100).toFixed(2)   + "元</div>"
				 }else{
				 html += "<p className='p-k-m-z'></div>";
				 }

				 html += "<p className='p-k-m-z p-k-order-time'>下单时间：" + n.registerDate + "</p>"
				 html += "<i className='icon icon-goto middle'></i>";
				 html += "<b className='zt middle color-2eacff'>"

				 if(n.regStatus == 0 && n.payStatus == 1){
				 html += "预约中(待缴费)";
				 }else if(n.regStatus == 1){
				 	if(n.payStatus == 1 ){
				 		html += "预约成功(未缴费)";
				 	}else if(n.payStatus == 2){
				 		html += "预约成功(已缴费)";
				 	}
				 }else if(n.regStatus == 3){
				 	html += "取消预约(缴费超时)";
				 }else if(n.regStatus == 2){
				 	if(n.payStatus == 3){
				 		html += "取消预约(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "取消预约(处理中)";
				 	}else{
				 		html += "取消预约(未缴费)";
				 	}
				 }else if(n.regStatus == 4){
				 	if(n.payStatus == 3){
				 		html += "停诊(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "停诊(处理中)";
				 	}else{
				 		html += "停诊(未缴费)";
				 	}
				 }else if (n.regStatus == 5 ){
				 	html += "网络异常(处理中)";
				 }else if(n.regStatus == 6 ){
				 	html += "网络异常(处理中)";
				 }else if(n.regStatus == 7 || n.regStatus == 10 || n.regStatus == 101){
				 	html += "网络异常(处理中)";
				 }else if(n.regStatus == 8){
				 	if(n.payStatus == 3){
				 		html += "网络异常(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "网络异常(处理中)";
				 	}else{
				 		html += "网络异常(未缴费)";
				 	}
				 }else if(n.regStatus == 9){
				 	html += "预约成功(已缴费)";
				 }else if(n.regStatus == 11){
				 	html += "网络异常(已退费)";
				 }else if(n.regStatus == 12){
				 	if(n.payStatus == 3){
				 		html += "预约失败(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "预约失败(处理中)";
				 	}else{
						html += "预约失败(未缴费)";
					}
				 }else if(n.regStatus == 13){
				 	if(n.payStatus == 3){
				 		html += "网络异常(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "网络异常(处理中)";
				 	}else{
				 		html += "网络异常(未缴费)";
				 	}
				 }else if(n.regStatus == 14){
				 	if(n.payStatus == 3){
				 		html += "网络异常(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "网络异常(处理中)";
				 	}else{
				 		html += "网络异常(未缴费)";
				 	}
				 }else if(n.regStatus == 15){
				 	if(n.payStatus == 3){
				 		html += "网络异常(已退费)";
				 	}else if(n.payStatus == 2  || n.payStatus == 5){
				 		html += "网络异常(处理中)";
				 	}else{
				 		html += "网络异常(未缴费)";
				 	}
				 }else if(n.regStatus == 22 && n.payStatus == 3 ){
				 	html += "预约取消中(已退费)";
				 }else if(n.regStatus == 20){
				 	html += "窗口退费(已退费)";
				 }else if(n.regStatus == 21){
				 	html += "窗口异常(退费中)";
				 }else if(n.regStatus == 23){
				 	html += "后台取消(已退费)";
				 }else if(n.regStatus == 24){
				 	html += "后台取消(退费失败)";
				 }
				 html += "</b>";
				 html += "</a>";
				 */}
				<Container>
					<div className="my-message my-registered">

						<a className='item lock'>{/*lock ok timeout cancel fail*/}
							<h3>n.hospitalName</h3>
							<p className='p-k-m-z'><span>挂号:n.deptName-n.doctorName</span></p>
							<p className='p-k-m-z'>123元</p>
							<p className='p-k-m-z p-k-order-time'>下单时间：2016-02-01</p>
							<i className='iconfont icon-arrow-right middle'></i>
							<b className='zt middle color-2eacff'>预约成功(未缴费)</b>
						</a>
						<a className='item lock'>{/*lock ok timeout cancel fail*/}
							<h3>n.hospitalName</h3>
							<p className='p-k-m-z'><span>挂号:n.deptName-n.doctorName</span></p>
							<p className='p-k-m-z'>123元</p>
							<p className='p-k-m-z p-k-order-time'>下单时间：2016-02-01</p>
							<i className='iconfont icon-arrow-right middle'></i>
							<b className='zt middle color-2eacff'>预约成功(未缴费)</b>
						</a>

					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));