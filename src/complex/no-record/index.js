var NoRecord = React.createClass({
	render:function(){
		return (
			<section className="page-tips">
				<i className="tips-icon tips-icon-res"></i>
				<div className="tips-word"><p className="p1">{this.props.text}</p></div>
			</section>
		)
	}
});

module.exports = NoRecord;