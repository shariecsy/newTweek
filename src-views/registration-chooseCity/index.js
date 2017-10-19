
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {
			cityList:[
				{
					key:1,
					city:"广州市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
					}
				},
				{
					key:2,
					city:"佛山市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
					}
				},
				{
					key:3,
					city:"清远市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
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
						<h1 className="am-header-title">挂号</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
						<div className="choose-city">
							<div className="search-box">
								<form action="#" ref="searchForm" onSubmit={this._searchSubmit} onChange={this._backHome}>
									<div className="am-input-group">
										<span className="am-input-group-label"><i className="iconfont icon-search"></i></span>
										<input type="search" className="am-form-field" placeholder="搜索药品" name="content"/>
									</div>
								</form>
							</div>
							<div className="city-list">
								{
									this.state.cityList.map(function(obj,index){
										return (
											<a href="#" key={obj.key} onClick={obj.handleClick}>
												{obj.city}
											</a>
										)
									})
								}
							</div>
						</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));