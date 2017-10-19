var IncompleteInfo = React.createClass({
	render:function(){
		return (
			<div className="incomplete-info">
				<section className="incomplete-tips">
					<i className="icon-incomplete"></i>
					<p>你还没有完善个人信息哦</p>
				</section>
				<section className="button">
					<a className="btn-save" href="../toCompleteInfo/index.html">点击完善</a>
				</section>
			</div>

		)
	}
});

module.exports = IncompleteInfo;