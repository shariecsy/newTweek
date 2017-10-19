var IconList = React.createClass({
	getDefaultProps:function(){
		return {
			listData:[]
		};
	},
	render:function(){
		return (
			<div className="icon-list">
			  <ul className="am-list">
			  		{
			  			this.props.listData.map(function(obj,index){
			  				var leftCls = "icon-list-left "+obj.leftCls;
			  				var rightCls = "icon-list-right iconfont icon-arrow-right";
			  				return (
			  					  <li className="am-g" key={index} onClick={obj.clickHandler}>
							          <span className={leftCls}></span>
							          <span className="icon-list-content">{obj.title}</span>
							          <span className={rightCls}></span>
							      </li>
			  				)
			  			})
			  		}
			  </ul>
		   </div>
		)
	}
})

module.exports = IconList;