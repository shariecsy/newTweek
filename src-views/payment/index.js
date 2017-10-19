/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
    getInitialState:function(){
        return {
            payStyle:'weixin',
        }
    },
    paySelect: function (v) {
        if(v == 'weixin'){
            this.setState({
                payStyle:'weixin'
            })
        }else if(v == 'alipay'){
            this.setState({
                payStyle:'alipay'
            })
        }else if(v == 'union'){
            this.setState({
                payStyle:'union'
            })
        }else if(v == 'health_insurance'){
            this.setState({
                payStyle:'health_insurance'
            })
        }
    },
    componentDidMount: function () {
        var _this = this;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'post',
            url: API_SERVICE_URL + '/v1.0/order/getAmount',
            data:{
                id:LocalStorageUtil.get(STORAGE_CONSTANTS.ORDER_ID_KEY)
            },
            success: function(res) {
                console.log(res);
                _this.setState({
                    totalPrice:res.result.amount
                })
            },
            error: function(res) {
                console.log(res);
                _this.setState({
                    // layerLoading:false  //关闭loading
                })
            }
        });
    },
    render: function () {
        var totalPrice = this.state.totalPrice;
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">在线支付</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
                    <div className="payment">
                        <p className="title">支付方式</p>
                        <ul className="container">
                            <li onClick={this.paySelect.bind(this, 'weixin')}>
                                <div className="icon-wrap">
                                    {this.state.payStyle == 'weixin' ?
                                        <i className="am-icon-check"></i> : ''
                                    }
                                </div>
                                <p className="icon-box"><img src="../libs/assets/images/weixin.jpg" alt=""/></p>
                                <div className="center-wrap">
                                    <p className="paytitle">微信支付</p>
                                    <p className="paydec">微信安全支付</p>
                                </div>
                            </li>
                            <li onClick={this.paySelect.bind(this, 'alipay')}>
                                <div className="icon-wrap">
                                    {this.state.payStyle == 'alipay' ?
                                        <i className="am-icon-check"></i> : ''
                                    }
                                </div>
                                <p className="icon-box"><img src="../libs/assets/images/alipay.jpg" alt=""/></p>
                                <div className="center-wrap">
                                    <p className="paytitle">支付宝支付</p>
                                    <p className="paydec">支付宝安全支付</p>
                                </div>
                            </li>
                            <li onClick={this.paySelect.bind(this, 'union')}>
                                <div className="icon-wrap">
                                    {this.state.payStyle == 'union' ?
                                        <i className="am-icon-check"></i> : ''
                                    }
                                </div>
                                <p className="icon-box"><img src="../libs/assets/images/union-pay.jpg" alt=""/></p>
                                <div className="center-wrap">
                                    <p className="paytitle">银联支付</p>
                                    <p className="paydec">中国银联在线支付</p>
                                </div>
                            </li>
                            <li onClick={this.paySelect.bind(this, 'health_insurance')}>
                                <div className="icon-wrap">
                                    {this.state.payStyle == 'health_insurance' ?
                                        <i className="am-icon-check"></i> : ''
                                    }
                                </div>
                                <p className="icon-box"><img src="../libs/assets/images/SI.jpg" alt=""/></p>
                                <div className="center-wrap">
                                    <p className="paytitle">医保卡支付</p>
                                    <p className="paydec">医保卡安全支付</p>
                                </div>
                            </li>
                        </ul>
                    </div>
				</Container>
                <button className="btn-fixed">
                    {this.state.payStyle == 'weixin' ? '微信支付 ' :
                     this.state.payStyle == 'alipay' ? '支付宝支付 ' :
                     this.state.payStyle == 'union' ? '银联支付 ' :
                     this.state.payStyle == 'health_insurance' ? '医保卡支付 ' : ''
                    }
                    {totalPrice} 元
                </button>
                {/*Loading弹窗 start*/}
                <Layer show={this.state.layerLoading} layerCls="alert-loading">
                    <Layer.Text>
                        <img src="../images/loading.gif" alt="loading"/>
                    </Layer.Text>
                </Layer>
                {/*Loading弹窗 end*/}
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));