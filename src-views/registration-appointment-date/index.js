
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Root = React.createClass({
	getInitialState:function(){
		return {
			doctorList:[
				{
					imgUrl:'../images/hospitalLogo.jpg',
					name:'陈泽伟',
					title:'儿内科主治',
					isExpired:true,
					clickHandler:function(){}

				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					name:'唐树生',
					title:'儿内科主治',
					remainingSum:'32',
					isExpired:false,
					clickHandler:function(){
						window.location="../registration-appointment-time/index.html"
					}.bind(this)

				},
				{
					imgUrl:'../images/hospitalLogo.jpg',
					name:'唐树生',
					title:'儿内科主治',
					remainingSum:'32',
					isExpired:false,
					clickHandler:function(){}

				}
			],
			isExpired:false, //是否已经超过挂号的截止时间
			showMore:false, //展示更多的日期
			noticeShow:true //展示挂号提示
		}
	},
	_showMoreDate:function(){
		this.setState({
			showMore:!this.state.showMore
		})
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
					<div>
						<div className="date-container">
							<div className="date-box">
								<ul className="day-list clearfix">
									<li>二</li>
									<li>三</li>
									<li>四</li>
									<li>五</li>
									<li>六</li>
									<li>日</li>
									<li>一</li>
								</ul>
								<ul className="date-list clearfix">
									<li className="active">今</li>
									<li className="grey">14</li>
									<li className="grey">15</li>
									<li className="grey">16</li>
									<li>17</li>
									<li>18</li>
									<li>19</li>
								</ul>
								<ul className={this.state.showMore? "date-list clearfix":"none"} >
									<li>20</li>
								</ul>
							</div>
							<div className="showMore" onClick={this._showMoreDate}>
								<span>{this.state.showMore?"展开":"收起"}</span>
								<i className={this.state.showMore?"icon am-icon-angle-down am-icon-md":"icon am-icon-angle-up am-icon-md"}></i>
							</div>
						</div>
						<div className={this.state.noticeShow?"app-notice":"none"}><i className="am-icon-info-circle"></i>超过17:15之后不可再挂当天的号。</div>
						<div className="choose-doctor">
							<div className={this.state.isExpired?'':"none"}>
								<p><i className="am-icon-plus-square am-icon-lg"></i></p>
								<p>已超过当班挂号的截止时间</p>
							</div>
							<div className="item-list">
								<ul className="am-list">
									{
										this.state.doctorList.map(function(obj,index){
											var rightCls = "item-list-right am-icon-angle-right";
											return (
												<li className="am-g" key={index} onClick={obj.clickHandler}>
													<img className="item-list-left" src={obj.imgUrl}></img>
													<div className="item-list-content doctor-list-content">
														<p>{obj.name}</p>
														<p><span>{obj.title}</span></p>
														<p>
															<span className={obj.isExpired? "full":"none"}>满诊</span>
															<span className={obj.isExpired? "none":"notFull"}>剩余号源：{obj.remainingSum}</span>
														</p>
													</div>
													<span className={obj.isExpired? "none":rightCls}></span>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));