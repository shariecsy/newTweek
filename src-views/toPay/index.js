/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
    getInitialState:function(){
        return {
            toPay:{},
            layerLoading:false
        }
    },
    radioChecked:function(index){
        var radioEle=document.getElementsByClassName('radio');
        for(var i =0;i<radioEle.length;i++){
            radioEle[i].className="radio inline am-icon-circle-o";
        }
        radioEle[index].className="radio inline am-icon-check-circle";

    },
    _toPay:function () {
        var _this = this;
        this.setState({
            layerLoading:true  //打开loading
        })
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/to_pay.json',
            // data:{
            //     id:""
            // },
            success: function(res) {
                if(res.code == 0) {
                    _this.setState({
                        layerLoading:false  //关闭loading
                    });
                    alert("缴费成功");
                    // window.location = "../myPayment/index.html"
                } else {
                    _this.setState({
                        layerLoading:false  //关闭loading
                    });
                    res.result;
                }
            },
            error: function(res) {
                _this.setState({
                    layerLoading:false  //关闭loading
                });
                console.log(res);
            }
        });
    },
    componentDidMount: function () {
        var _this = this;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/to_pay.json',
            success: function(res) {
                console.log(123)
                if(res.code == 0) {
                    _this.setState({
                        toPay:res.data
                    })
                } else {
                    res.result;
                }
            },
            error: function(res) {
                console.log(res);
            }
        });
    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">缴费</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="to-pay">
                        <h4>{this.state.toPay.type}</h4>
                        <ul>
                            <li>
                                <span className="title">科室</span>
                                <span className="item">{this.state.toPay.branchName}({this.state.toPay.deptName})</span>
                            </li>
                            <li>
                                <span className="title">时间</span>
                                <span className="item">{this.state.toPay.time}</span>
                            </li>
                            <li>
                                <span className="title">费用</span>
                                <span className="item money">￥{this.state.toPay.money}</span>
                            </li>
                        </ul>
                        <div className="bottom-btn">
                            <button className="am-btn am-btn-block am-btn-primary am-round" onClick={this._toPay}>缴费</button>
                        </div>
                    </div>
				</Container>
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