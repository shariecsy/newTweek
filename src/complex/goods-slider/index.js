var GoodsSlider = React.createClass({
	getDefaultProps:function(){
		return{
			scrollbarHide: true,
			slidesPerView: 'auto',
			grabCursor: true,
			id:'goods-slider'
		}
	},
	componentDidMount: function() {
		var id = this.props.id;
		var mySwiper = new Swiper('#'+id, {
			slidesPerView: this.props.slidesPerView,
			grabCursor: this.props.grabCursor
		})
	},
	render:function(){
		return (
			<div className="swiper-container" id={this.props.id}>
	                    <div className="swiper-wrapper">             
	                        {this.props.children}
	                    </div>
	        </div>
		)
	}
});

GoodsSlider.Item = React.createClass({
	render:function(){
		return (
			<div className="swiper-slide">
				{this.props.children}
			</div>
		)
	}
})

module.exports = GoodsSlider;
