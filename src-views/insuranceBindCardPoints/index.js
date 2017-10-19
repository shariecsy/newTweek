
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {
			hospitalList:[
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'广州市妇女儿童医疗中心（珠江新城）',
					address:"天河区 金穗路9号",
					insurance:true,
					clickHandler:function(){
						window.location='../insuranceBindCardDirection/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'广州市儿童医院（人民中路）',
					address:"越秀区 人民中路318号",
					insurance:false,
					clickHandler:function(){
						window.location='../insuranceBindCardDirection/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'广东省中医院',
					address:"越秀区 大德路",
					insurance:true,
					clickHandler:function(){
						window.location='../insuranceBindCardDirection/index.html';
					}
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
				   <div className="insuranceCard-points">
					   <div className="warm-tip">
						   温馨提示：温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨馨提示温馨提示。
					   </div>
					   <div className="item-list">
						   <ul className="am-list">
							   {
								   this.state.hospitalList.map(function(obj,index){
									   return (
										   <li className="am-g" key={index} onClick={obj.clickHandler}>
											   <img className="item-list-left" src={obj.imgUrl}></img>
											   <div className="item-list-content">
												   <p>{obj.title}</p>
												   <span>{obj.address}</span>
											   </div>
										   </li>
									   )
								   })
							   }
						   </ul>
					   </div>
				   </div>

				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));