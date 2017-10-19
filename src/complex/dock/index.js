var Dock = React.createClass({
	_handleClick:function(action){
		console.log(action)
	},
	render:function(){
		var length = this.props.children.length;
		var avgCls = 'am-navbar-nav am-cf am-avg-sm-'+length;
		return (
			<div data-am-widget="navbar" className="am-navbar am-cf am-navbar-app ">
                  <ul className= {avgCls}>
                      {this.props.children}
                  </ul>
              </div>
		)
	}
});

Dock.Item = React.createClass({
	render:function(){
		return (
			<li onClick={this.props.clickHandler}>
				{this.props.children}
			</li>
		)
	}
});

module.exports = Dock;