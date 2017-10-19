var NoRecord=require('../no-record/');
var MsgList = React.createClass({
	getInitialState: function() {
		return {
			listData: []
		}
	},
	setListData: function(data) {
		this.setState({
			listData: data
		});
	},
	render: function() {
		return(
			<div className="tab-list-wrap">	
					<div className="am-list-news-bd">
							 {
							 	this.state.listData.length==0?<NoRecord text="当前暂无消息~"/>:(<ul className="am-list"> 
							  		{
							  			this.state.listData.map(function(obj,index){
							  			return (
							  				<li className="am-g am-list-item-desced" key={index} onClick={obj.clickHandler}>
									      	  <div className="am-cf">
											  	<span className="tab-list-left am-fl">{obj.title}</span>
											  	<span className="am-list-item-text am-fr">{obj.btime}</span>
											  </div>
									          <div className="tab-list-content">{obj.content}</div>						
									          <div className="am-list-item-text">{obj.subtitle}</div>
									          <div className="msg-list-block-right"><i className="msg-list-right iconfont icon-arrow-right"></i></div>
									      </li>
							  			)
							  		})
							  	  }
							  </ul>)
							 }
				  </div>
			</div>
		)
	}
})

module.exports = MsgList;