/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
    getInitialState:function(){
        return{
            payment:[],
            layerLoading:false
        }
    },
    componentDidMount: function () {
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
            url: '../libs/json/payment.json',
            // data:{
            //  name:_this.refs.name.value,
            //  id_num:_this.refs.idNum.value
            // },
            success: function(res) {
                if(res.code == 0) {
                    console.log(res.data)
                    _this.setState({
                        payment:res.data,
                        // layerLoading:false  //关闭loading
                    })
                } else {
                    res.result;
                    _this.setState({
                        // layerLoading:false  //关闭loading
                    })
                }
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
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">我的缴费记录</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-payment">
                        <section className="apex">
                            <span className="middle">就诊人</span>
                            <select>
                                <option value="">全部</option>
                            </select>
                            <i className="icon icon-down middle"></i>
                        </section>
                        <Tabs>
                            {
                                this.state.payment.map(function(v,i){
                                    if(v.type == 0){
                                        return(
                                            <Tabs.Item tab="门诊缴费" className="tab-1">
                                                {v.list.length>0?
                                                    v.list.map(function(item,idx){
                                                        return(
                                                            <a className="item item-payment" href="../toPay/index.html">
                                                                <p>门诊缴费<span className="color-2eacff">{item.payStatusLabel}</span></p>
                                                                <p className="item-department">
                                                                    <b>{item.branchName}({item.deptName})</b>
                                                                    <span>{item.money}元<i className="icon icon-goto middle"></i></span>
                                                                </p>
                                                                <p className="p2">{item.time}</p>
                                                            </a>
                                                        )
                                                    }) : 
                                                    <section className="page-tips">
                                                        <i className="tips-icon tips-icon-pm"></i>
                                                        <div className="tips-word">
                                                            <p className="p1">暂未找到缴费记录</p>
                                                        </div>
                                                    </section>
                                                }
                                            </Tabs.Item>
                                        )
                                    }else if(v.type == 1){
                                        return(
                                            <Tabs.Item tab="住院金缴纳" className="tab-2">
                                                {v.list.length>0?
                                                    v.list.map(function(item,idx){
                                                        return(
                                                            <a className="item item-payment" href="javascript:void(0);">
                                                                <p>住院押金缴纳<span className="color-2eacff">{item.payStatusLabel}</span></p>
                                                                <p className="item-department color-989cab">
                                                                    <b>{item.hospitalName} ({item.deptName}) </b>
                                                                    <span>{item.money}元<i className="icon icon-goto middle"></i></span>
                                                                </p>
                                                                <p className="p2">{item.time}</p>
                                                            </a>
                                                        )
                                                    }) :
                                                    <section className="page-tips">
                                                        <i className="tips-icon tips-icon-pm"></i>
                                                        <div className="tips-word">
                                                            <p className="p1">暂未找到缴费记录</p>
                                                        </div>
                                                    </section>
                                                }
                                            </Tabs.Item>
                                        )
                                    }else{
                                        return(
                                            <Tabs.Item tab="出院结算" className="tab-3">
                                                {v.list.length>0?
                                                    v.list.map(function(item,idx){
                                                        return(
                                                            <a className="item item-payment" href="javascript:void(0);">
                                                                <p className="item-department">
                                                                    <b>{item.hospitalName} ({item.deptName})</b>
                                                                    <span className="color-2eacff">￥{item.money}<i className="icon icon-goto middle"></i></span>
                                                                </p>
                                                                <p className="p2">{item.time}</p>
                                                            </a>
                                                        )
                                                    }) :
                                                    <section className="page-tips">
                                                        <i className="tips-icon tips-icon-pm"></i>
                                                        <div className="tips-word">
                                                            <p className="p1">暂未找到缴费记录</p>
                                                        </div>
                                                    </section>
                                                }
                                            </Tabs.Item>
                                        )
                                    }
                                })
                            }
                        </Tabs>
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