
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {
			newsList:[
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
					}
				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					title:'常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
					content:"收藏了！",
					date:"2016-12-06",
					clickHandler:function(){
						window.location='../insuranceNews-detail/index.html';
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
				   <div className="news-list">
					   <div className="item-list">
						   <ul className="am-list">
							   {
								   this.state.newsList.map(function(obj,index){
									   return (
										   <li className="am-g" key={index} onClick={obj.clickHandler}>
											   <img className="item-list-left" src={obj.imgUrl}></img>
											   <div className="item-list-content">
												   <p>{obj.title}</p>
												   <span>{obj.content}</span>
											   </div>
											   <span className="news-date">{obj.date}</span>
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