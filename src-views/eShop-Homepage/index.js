var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Slider = require('../../src/complex/slider');
var GoodsSlider = require('../../src/complex/goods-slider');
var ButtonGroup = require('../../src/complex/button-group');
var SeamlessScroll = require('../../src/complex/SeamlessScroll');

var Root = React.createClass({
	getInitialState:function(){
		return {
			switchOn:false,
			layerLoading:false,
			layerShow:false
		}
	},
	componentDidMount:function(){
	},
	_redirect: function(url) {
		window.location.href = url;
	},
	render: function() {
		var CONFIG = {
			dataType: '1',
			direction: 'up',
			speed:'50',        //滚动速度
			scrollType: '1',  //1：无缝滚动，2：间歇滚动
			stopTime:'0'    //间歇滚动停顿时间

		};
		var DATASOURCE = [
			{
				anchor: '',
				title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
			},
			{
				anchor: '',
				title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
			},
			{
				anchor: '',
				title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
			},
			{
				anchor: '',
				title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
			},
			{
				anchor: '',
				title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
			}
		];
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">网上药店</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
					<div className="search-box">
						<form action="#">
							<div className="am-input-group">
								<span className="am-input-group-label">
								<i className="iconfont icon-search"></i>
								</span>
								<input type="search" className="am-form-field" placeholder="搜索药品" name="content"/>
							</div>
						</form>
					</div>
					<Slider isShowButton={false}>
						<Slider.Item><img src="../images/banner-1.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-2.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-3.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-4.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-5.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-6.jpg" width="100%"/></Slider.Item>
						<Slider.Item><img src="../images/banner-7.jpg" width="100%"/></Slider.Item>
					</Slider>
					<ButtonGroup>
						<ButtonGroup.Button icon="iconfont icon-all1 main-page-icon-gh" title="全部分类" clickHandler ={this._redirect.bind(this,"###")}/>
						<ButtonGroup.Button icon="iconfont icon-coupon main-page-icon-pdhz" title="已领优惠" clickHandler ={this._redirect.bind(this,"###")}/>
						<ButtonGroup.Button icon="iconfont icon-jiaofei main-page-icon-mzjf" title="我的订单" clickHandler ={this._redirect.bind(this,"###")}/>
					</ButtonGroup>
					<div className="scroll-bar clearfix">
						<div className="scroll-logo">
							<img src="../images/health.jpg" alt=""/>
						</div>
						<div className="scroll-content">
							<SeamlessScroll id="seamlessScrollId" config={CONFIG} dataSource={DATASOURCE} />
						</div>
					</div>
					<div className="goods-category">
						<div className="category-head head-1">
								家庭常备
						</div>
						<div className="goods-slider">
							<GoodsSlider id="goods-slider-1">
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp.png"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
							</GoodsSlider>
						</div>
					</div>
					<div className="goods-category">
						<div className="category-head head-2">
							产后修复
						</div>
						<div className="goods-slider">

							<GoodsSlider id="goods-slider-2">
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp2.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp2.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp2.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
								<div className="goods-img">
									<img src="../images/goods/yp2.jpg"/>
								</div>
								<div className="goods-info">
									<div className="goods-name">
										京制牛黄解毒片0.6g*8s/支
									</div>
									<div className="goods-price">
										8.3
									</div>
								</div>
							</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp2.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>

							</GoodsSlider>
						</div>
					</div>
					<div className="goods-category">
						<div className="category-head head-3">
							营养保健
						</div>
						<div className="goods-slider" id="goods-slider-3">
							<GoodsSlider>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp3.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
							</GoodsSlider>
						</div>
					</div>
					<div className="goods-category">
						<div className="category-head head-4">
							医疗器械
						</div>
						<div className="goods-slider">
							<GoodsSlider id="goods-slider-4">
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
								<GoodsSlider.Item>
									<div className="goods-img">
										<img src="../images/goods/yp4.jpg"/>
									</div>
									<div className="goods-info">
										<div className="goods-name">
											京制牛黄解毒片0.6g*8s/支
										</div>
										<div className="goods-price">
											8.3
										</div>
									</div>
								</GoodsSlider.Item>
							</GoodsSlider>
						</div>
					</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));