/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
    getInitialState:function(){
        return {
            goodsList:[],
            layerLoading:false,
            pages: 0
        }
    },
    radioChecked:function(index){
        var radioEle=document.getElementsByClassName('radio');
        for(var i =0;i<radioEle.length;i++){
            radioEle[i].className="radio inline am-icon-circle-o";
        }
        radioEle[index].className="radio inline am-icon-check-circle";

    },
    _getGoods:function (pages) {
        var _this = this;
        _this.state.pages++;
        var page = _this.state.pages;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'post',
            // url:'http://localhost:8080/v1.0/goods/fetchListPaging',
            url: API_SERVICE_URL + '/v1.0/goods/fetchListPaging',
            data: {
                  currentNo:page,
                  pageSize:10
//              page:page
            },
            success: function(res) {
                if(res.code == 0) {
                    _this.setState({
                        goodsList: _this.state.goodsList.concat(res.result),
                        layerLoading:false  //关闭loading
                    })
                } else {
                    _this.setState({
                        layerLoading:false  //关闭loading
                    });
                    alert('没有更多数据');
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
    componentDidMount: function () {
        var _this = this;
        this.setState({
            layerLoading:true  //打开loading
        });
        _this._getGoods(this.state.pages);
    },
    _toDetail: function (v) {
        localStorage.setItem('goodsDetail',JSON.stringify(v));
        // window.location.href = API_SERVICE_URL + '/goodsDetail/index.html';
        window.location.href = '../goodsDetail/index.html';
    },
    render: function () {
        return (
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
					<div className="goods-list">
                        <div className="search-box">
                            <a href="../search/index.html">
                                <div className="am-input-group">
                                    <span className="am-input-group-label"><i className="iconfont icon-search"></i></span>
                                    <input type="search" className="am-form-field" placeholder="搜索医生、医院、科室、药品"/>
                                </div>
                            </a>
                        </div>

                        <div className="goods-container" ref="container">
                            {
                                this.state.goodsList.map(function(v,i){
                                    return (
                                        <a href="javascript://" onClick={this._toDetail.bind(this,v)} className="goods-list-item" key={i}>
                                            <div className="goods-list-item-img">
                                                <img src={v.src}/>
                                            </div>
                                            <div className="goods-list-item-des">
                                                <p>{v.name}</p>
                                                <p className="factory">{v.factory}</p>
                                                <p className="goods-list-item-price">
                                                    <span>¥</span>{v.price}<span className="imark">{v.standard}/{v.unit}</span>
                                                </p>
                                            </div>
                                        </a>
                                    )
                                }.bind(this))
                            }                        
                        </div>
                        <a href="javascript://" className="add-more" onClick={this._getGoods.bind(this, this.state.pages)}>点击加载更多</a>
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