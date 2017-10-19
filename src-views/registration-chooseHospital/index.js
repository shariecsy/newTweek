
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {
			hospitalList:[
//				{
//					imgUrl:'../images/hospitalLogo.jpg',
//					title:'广州市妇女儿童医疗中心（珠江新城）',
//					address:"天河区 金穗路9号",
//					insurance:true,
//					clickHandler:function(){
//						window.location='../registration-chooseType/index.html';
//					}
//				},
//				{
//					imgUrl:'../images/hospitalLogo.jpg',
//					title:'广州市儿童医院（人民中路）',
//					address:"越秀区 人民中路318号",
//					insurance:false,
//					clickHandler:function(){}
//				},
//				{
//					imgUrl:'../images/hospitalLogo.jpg',
//					title:'广东省中医院',
//					address:"越秀区 大德路",
//					insurance:true,
//					clickHandler:function(){}
//				}
			]
		}
	},
	_chooseCity:function(){
		window.location='../registration-chooseCity/index.html';
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
					<div className="chooseHospital">
						<div className="choose-hospital-top" onClick={this._chooseCity}>
							<a href="#">
								<i className="iconfont icon-map"></i>
								<span>广州市</span>
								<i className="iconfont icon-arrow-right"></i>
							</a>
						</div>
						<div className="item-list">
							<h3>全部医院</h3>
							<ul className="am-list">
								{
									this.state.hospitalList.map(function(obj,index){
										var rightCls = "item-list-right iconfont icon-arrow-right";
										return (
											<li className="am-g" key={index} onClick={obj.clickHandler}>
												<img className="item-list-left" src={obj.imgUrl}></img>
												<div className="item-list-content">
													<p>{obj.title}</p>
													<span>{obj.address}</span>
												</div>
												<span className={obj.insurance?"item-list-insurance":"item-list-insurance none"}>医保</span>
												<span className={rightCls}></span>
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