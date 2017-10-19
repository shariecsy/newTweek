var Container = React.createClass({
	render:function(){
		return (
			<div className="main-body">
				{this.props.children}
			</div>
		)
	}
});

module.exports = Container;