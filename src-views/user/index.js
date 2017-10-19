/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Footer = require('../../src/complex/footer');
var Container = require('../../src/complex/container');
var MsgList = require('../../src/complex/msg-list');
var UserInfo = require('../../src/complex/user-info');
var IconList = require('../../src/complex/icon-list');

var Root = React.createClass({
	getDefaultProps:function(){
		return {
			iconList:[
				{
					leftCls:'iconfont icon-family',
					title:'家人管理',
					clickHandler:function(){
						window.location="../myFamily/index.html";
					}
				},
				{
					leftCls:'iconfont icon-card',
					title:'我的就诊卡',
					clickHandler:function(){
						window.location="../myMedicalCard/index.html";
					}
				},
				{
					leftCls:'iconfont icon-Hospitalized',
					title:'我的住院号',
					clickHandler:function(){
						window.location="../myHospitalizationNum/index.html";
					}
				}
			],
			iconList1:[
				{
					leftCls:'iconfont icon-register',
					title:'挂号记录',
					clickHandler:function(){
						window.location="../myRegistered/index.html";
					}
				},
				{
					leftCls:'iconfont icon-bill',
					title:'缴费记录',
					clickHandler:function(){
						window.location="../myPayment/index.html";
					}
				},
				{
					leftCls:'iconfont icon-order',
					title:'我的订单',
					clickHandler:function(){
						window.location='../myOrder/index.html';
					}
				},
				{
					leftCls:'iconfont icon-insuranceno',
					title:'医保专区',
					clickHandler:function(){
						window.location='../myInsurance/index.html';
					}
				}
			],
			iconList2:[
				{
					leftCls:'iconfont icon-qianbao',
					title:'我的钱包',
					clickHandler:function(){
						window.location='../purse/index.html';
					}
				},
				{
					leftCls:'iconfont icon-doctor',
					title:'收藏医生',
					clickHandler:function(){
						window.location='../collectDoctor/index.html';
					}
				},
				{
					leftCls:'iconfont icon-service',
					title:'更多服务',
					clickHandler:function(){
						window.location='../moreService/index.html';
					}
				}
			],
			iconList3:[
				{
					leftCls:'iconfont icon-setting',
					title:'设置',
					clickHandler:function(){
						window.location='../mySetting/index.html';
					}
				}
			]
		}
	},
	componentDidMount:function(){
		
	},
	_toCompleteInfo:function(){
		window.location="../toCompleteInfo/index.html";
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<h1 className="am-header-title">我的</h1>
					</Header.CenterItem>
				</Header>
			  
			   <Container>
			   		<UserInfo clickHandler={this._toCompleteInfo}/>
			   		<IconList listData={this.props.iconList}/>
			   		<IconList listData={this.props.iconList1}/>
			   		<IconList listData={this.props.iconList2}/>
			   		<IconList listData={this.props.iconList3}/>
				</Container>
				<Footer selectIndex="2"/>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));