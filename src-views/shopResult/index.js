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
						<h1 className="am-header-title">支付成功</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
                    <div className="ucs-result">
                        <div>
                            <i className="iconfont am-icon-check-circle"></i>
                        </div>
                        <div className="ucs-result-title">支付成功</div>
                        <div className="ucs-result-message">支付成功，可前往 <a href="">我的订单查看</a></div>
                    </div>
				</Container>

                <Footer/>

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