var MsgList = require('../msg-list');
var TabBar = React.createClass({
	getInitialState:function(){
		return {
			tabClasses:{a:'am-active',b:'',c:''}
		}
	},
	_handleClick:function(index){
		var cls = this.state.tabClasses;
		for(var i in cls){
			if(i==index){
				cls[i] = 'am-active';
			}else{
				cls[i] = '';
			}
		}
		this.setState({tabClasses:cls});
		this.fetchList(index);
	},
	fetchList:function(index){//获取记录列表
		var data = [];
//		if(index=='a'){
//			data = [{
//					id:0,
//					title:'绑卡成功',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院',
//					subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号'
//			},{
//					id:1,
//					title:'绑卡成功',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院',
//					subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号'
//			}];
//		}else if(index=='b'){
//			data = [{
//					id:2,
//					title:'挂号成功',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院',
//					subtitle:'你可以点击此记录进行在线挂号'
//			},{
//					id:3,
//					title:'挂号成功',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院',
//					subtitle:'你可以点击此记录进行在线挂号'
//			}];
//		}else if(index=='c'){
//			data = [{
//					id:4,
//					title:'xx医生',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院xx科室',
//					subtitle:'你可以点击此记录进行在线挂号'
//			},{
//					id:5,
//					title:'xx医生',
//					btime:'2017-01-01 12:01:01',
//					content:'广州市XX医院xx科室',
//					subtitle:'你可以点击此记录进行在线挂号'
//			}];
//		}
		this.refs.msglist.setListData(data);
	},
	componentDidMount:function(){
//		var data = [{
//				id:0,
//				title:'绑卡成功',
//				btime:'2017-01-01 12:01:01',
//				content:'广州市XX医院',
//				subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号',
//				clickHandler:function(){
//					window.location="../bindCardSuccess/index.html"
//				}
//		},{
//				id:1,
//				title:'绑卡成功',
//				btime:'2017-01-01 12:01:01',
//				content:'广州市XX医院',
//				subtitle:'恭喜,您已成功绑定就诊卡,现在可以在线挂号',
//				clickHandler:function(){
//					window.location="../bindCardSuccess/index.html"
//				}
//		}];
//		this.refs.msglist.setListData(data);
	},
	render:function(){
		return (
			<div data-am-widget="tabs" className="am-tabs am-tabs-d2">
			      <ul className="am-tabs-nav am-cf">
			          <li ref="a" className={this.state.tabClasses.a}><a href="javascript:void(0)" onClick={this._handleClick.bind(this,'a')}>最新消息</a></li>
			          <li ref="b" className={this.state.tabClasses.b}><a href="javascript:void(0)" onClick={this._handleClick.bind(this,'b')}>曾挂号医院</a></li>
			          <li ref="c" className={this.state.tabClasses.c}><a href="javascript:void(0)" onClick={this._handleClick.bind(this,'c')}>曾挂号医生</a></li>
			      </ul>		      
		          <MsgList ref="msglist"/>
			  </div>
		)
	}
})

module.exports = TabBar;