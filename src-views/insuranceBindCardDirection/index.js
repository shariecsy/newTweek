
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {
			locationList:[
				{
					point:"广东省中医院慈善医院",
					section:"门诊二楼计价收费处左侧",
					imgUrl:"../images/hospitalLogo.jpg"
				},
				{
					point:"广东省中医院慈善医院",
					section:"门诊二楼计价收费处左侧",
					imgUrl:"../images/hospitalLogo.jpg"
				},
				{
					point:"广东省中医院慈善医院",
					section:"门诊二楼计价收费处左侧",
					imgUrl:"../images/hospitalLogo.jpg"
				}
			]
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
				   <div className="direction-box">
					   <div className="direction-main">
						   <div className="title">
							   <h2>广东省中医院线下社保卡绑定指引</h2>
							   <p>地址：广州市天河金穗路9号</p>
						   </div>
						   <div className="notice">
							   为确保个人账户资金安全，需要您前往医院办理绑定社保卡。
						   </div>
						   <div className="location">
							   {
								   this.state.locationList.map(function(obj,index){
									   return (
										   <div className="location-item" key={index}>
											   <h3><i className="am-icon-map-marker am-icon-md"></i>{obj.point}：</h3>
											   <p>绑卡位置：{obj.section}</p>
											   <div>
												   <img src={obj.imgUrl} alt=""/>
											   </div>
										   </div>
									   )

								   })
							   }


						   </div>
					   </div>
					   <div className="bottom-notice">
						   <h3><i className="am-icon-info-circle"></i>绑卡须知：</h3>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
						   <p>1.需要携带身份证需要携带身份证需要携带身份证需要携带身份证需要携带身份证</p>
					   </div>
				   </div>

					
						
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));