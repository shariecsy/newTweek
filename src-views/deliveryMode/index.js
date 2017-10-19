/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Footer = require('../../src/complex/footer');

var Root = React.createClass({
    componentDidMount: function () {
        var _this = this;
        /*this.setState({
            layerLoading:true  //打开loading
        });*/
        /*
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/goods_detail.json',
            success: function(res) {
                if(res.code == 0) {
                    _this.setState({
                        goods:res.data,
                        layerLoading:false  //关闭loading
                    })
                } else {
                    res.result;
                    _this.setState({
                        layerLoading:false  //关闭loading
                    })
                }
            },
            error: function(res) {
                console.log(res);
                _this.setState({
                    // layerLoading:false  //关闭loading
                })
            }
        });*/
    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">支付和配送方式</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="wrap-block">
						<div className="inner">
							<p>配送方式</p>
							<div className="mode-box">
								<button className="btn btn-mode btn-checked">快递配送</button>
								<button className="btn btn-mode">上门自提</button>
							</div>
						</div>
					</div>
					<div className="wrap-block">
						<div className="inner">
							<p>支付方式</p>
							<div className="payways-box">
								<div className="check-box">
									<input type="checkbox" id="pay1"/>
									<label htmlFor="pay1">在线支付</label>
								</div>
								<div className="check-box">
									<input type="checkbox" id="pay2"/>
									<label htmlFor="pay2">货到付款</label>
								</div>
							</div>
						</div>
					</div>
					<div className="wrap-block">
						<div className="inner">
							<p>配送时间</p>
							<div className="delivery-box">
								<div className="check-box">
									<input type="checkbox" id="delivery1"/>
									<label htmlFor="delivery1">不限</label>
								</div>
								<div className="check-box">
									<input type="checkbox" id="delivery2"/>
									<label htmlFor="delivery2">工作日（周一至周五）</label>
								</div>
								<div className="check-box">
									<input type="checkbox" id="delivery3"/>
									<label htmlFor="delivery3">非工作日（周六至周日）</label>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom-btn">
						<button className="am-btn am-btn-primary am-round am-btn-block">保 存</button>
					</div>
				</Container>

                {/*Loading弹窗 start*/}
                {/*<Layer show={this.state.layerLoading} layerCls="alert-loading">
                    <Layer.Text>
                        <img src="../images/loading.gif" alt="loading"/>
                    </Layer.Text>
                </Layer>*/}
                {/*Loading弹窗 end*/}
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));