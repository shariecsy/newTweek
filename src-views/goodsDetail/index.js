/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var NumberBox = require('../../src/libs/NumberBox');
var Toast = require('../../src/libs/Toast');

var Root = React.createClass({
    getInitialState:function(){
        return {
            goods:{},
            layerLoading:false,
            activeTab: 0,
            goodsNum: 1,
            totalPrice: 0
        }
    },
    radioChecked:function(index){
        var radioEle=document.getElementsByClassName('radio');
        for(var i =0;i<radioEle.length;i++){
            radioEle[i].className="radio inline am-icon-circle-o";
        }
        radioEle[index].className="radio inline am-icon-check-circle";

    },
    _handleClick: function (index) {
        this.setState({
            activeTab: index
        })
    },
    _onIncrease: function () {
        this.state.goodsNum++;
        var totalPrice = (this.state.goodsNum * this.state.goods.price).toFixed(2);
        var goodsCart = localStorage.getItem('goodsCart');
        if(goodsCart){
            goodsCart = JSON.parse(goodsCart);
        }else{
            goodsCart = {};
            goodsCart['id_'+this.state.goods.id] = this.state.goods;
        }
        goodsCart['id_'+this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_'+this.state.goods.id].totalPrice = totalPrice;
        localStorage.setItem('goodsCart',JSON.stringify(goodsCart));
        this.setState({
            totalPrice: totalPrice
        });
    },
    _onDecrease: function () {
        this.state.goodsNum--;
        if(this.state.goodsNum < 1){
            this.state.goodsNum = 1;
        }
        var totalPrice = (this.state.goodsNum * this.state.goods.price).toFixed(2);
        var goodsCart = localStorage.getItem('goodsCart');
        if(goodsCart){
            goodsCart = JSON.parse(goodsCart);
        }else{
            goodsCart = {};
            goodsCart['id_'+this.state.goods.id] = this.state.goods;
        }
        goodsCart['id_'+this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_'+this.state.goods.id].totalPrice = totalPrice;
        localStorage.setItem('goodsCart',JSON.stringify(goodsCart));
        this.setState({
            totalPrice: totalPrice
        });
    },
    _joinIn: function () {
        var _currentGoods = JSON.parse(localStorage.getItem('goodsDetail'));
        _currentGoods.goodsNum = this.state.goodsNum;
        _currentGoods.totalPrice = this.state.totalPrice;
        var _goodsCart = localStorage.getItem('goodsCart');
        if (_goodsCart) {
            _goodsCart = JSON.parse(_goodsCart);
        } else {
            _goodsCart = new Object();
        }
        _goodsCart['id_'+_currentGoods.id] = _currentGoods;
        _goodsCart = JSON.stringify(_goodsCart);
        localStorage.setItem('goodsCart',_goodsCart);
        Toast.info({
            'content':'成功加入购物车',
            'duration':1500
        });
    },
    _buyNow: function () {
        var newBuyIds = [];
        newBuyIds.push('id_' + this.state.goods.id);
        localStorage.setItem('buyIds',JSON.stringify(newBuyIds));
        var goodsCart = localStorage.getItem('goodsCart');
        if(goodsCart){
            goodsCart = JSON.parse(goodsCart);
        }else{
            goodsCart = {};
        }
        goodsCart['id_'+this.state.goods.id] = this.state.goods;
        goodsCart['id_'+this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_'+this.state.goods.id].totalPrice = this.state.totalPrice;
        localStorage.setItem('goodsCart',JSON.stringify(goodsCart));
        window.location.href = '../getOrderInfo/index.html';
    },
    componentDidMount: function () {
        this._getGoodsDetail();
    },
    _getGoodsDetail:function(){
        var _this = this;
        this.setState({
            layerLoading:true  //打开loading
        });

        var _detail = JSON.parse(localStorage.getItem('goodsDetail'));
        if(_detail) {
            _this.setState({
                goods:_detail,
                totalPrice: Number(_detail.price).toFixed(2),
                layerLoading:false  //关闭loading
            })
        }
    },
    _QuantityInCarChange:function(){
        // localStorage.setItem('goodsCart','{"id_1":{"id":1,"code":"000235","name":"京制牛黄解毒片0.6g*8s/支","standard":"8片/瓶","factory":"北京同仁堂","unit":"支","price":"2","provider":null,"type":"0","src":"/images/otc/000235-1.jpg","goodsNum":1,"totalPrice":"2.00"},"id_2":{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg","goodsNum":1,"totalPrice":"3.30"},"id_9":{"id":9,"code":"000275","name":"复方黄芩片330mg*60片","standard":"60片/瓶","factory":"肇庆星湖","unit":"瓶","price":"9","provider":null,"type":"0","src":"/images/otc/000275-2.jpg","goodsNum":9,"totalPrice":"9.00"}}');
        // localStorage.setItem('goodsCart','{}');
        // localStorage.removeItem('goodsCart');


        
    },
    render: function () {

        var _goods = this.state.goods;
        var _price = _goods.price ? Number(_goods.price).toFixed(2) : 0.00;
        var _goodsCarList = JSON.parse(localStorage.getItem('goodsCart'));
        var _goodsNumber;
        var showNumberTip;
        if(_goodsCarList){
            _goodsNumber= Object.getOwnPropertyNames(_goodsCarList).length;
            if(_goodsNumber==0){
                showNumberTip=false;
            }else{
                showNumberTip=true;
            }
        }else{
            showNumberTip=false;
        }
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
					<div className="goods-detail">
                        <div className="img-box">
                            <img src={_goods.src} alt=""/>
                        </div>
                        <div className="goods-msg">
                            <h3>{_goods.name}</h3>
                            <p className="factory">{_goods.factory}</p>
                            <div className="clearfix price-box">
                                <p className="price"><span>￥</span>{_price}</p>
                                {/*<p className="old-price">￥{_oldprice}</p>*/}
                                {/*<p className="save-price">立省{_saveprice}元</p>*/}
                            </div>
                        </div>
                        <div className="count">
                            <div className="inner-count">
                                <h3>数量：</h3>
                                <div className="f-left count-total">
                                    <p>合计：<span>￥</span><span ref="total" className="total-money">{this.state.totalPrice}</span></p>
                                    {/*<p>立省 <span ref="save">4.00</span>元</p>*/}
                                </div>
                                <NumberBox className="f-right" defaultValue={this.state.goodsNum} onIncrease={this._onIncrease} onDecrease={this._onDecrease}/>
                            </div>
                        </div>
                        {/*<div className="tabbar">
                            <ul className="tabbar-header">
                                <li className={this.state.activeTab == 0 ? 'active' : null}><a href='javascript: void (0)' onClick={this._handleClick.bind(this, 0)}>商品</a></li>
                                <li className={this.state.activeTab == 1 ? 'active' : null}><a href='javascript: void (0)' onClick={this._handleClick.bind(this, 1)}>详情</a></li>
                                <li className={this.state.activeTab == 2 ? 'active' : null}><a href='javascript: void (0)' onClick={this._handleClick.bind(this, 2)}>说明书</a></li>
                            </ul>
                            <ul className="tabbar-container" ref="tabbar_container">
                                <li className={this.state.activeTab == 0 ? 'show' : null}>商品商品商品商品商品商品</li>
                                <li className={this.state.activeTab == 1 ? 'show' : null}>
                                    <div>
                                        <img src="http://res1.360kad.com/theme/v/image/details3.0/details_img1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li className={this.state.activeTab == 2? 'show' : null}>
                                    <div>
                                        <p>这是说明</p>
                                    </div>
                                </li>
                            </ul>
                        </div>*/}
					</div>
				</Container>

                {/*购物车*/}
                <div className="goods-detail">
                    <div className="buy-nav">
                        <a href="../im/client.html" className="telphone"><i className="icon iconfont icon-phone"></i><br/>在线客服</a>
                        <a href="../shopCart/index.html" className="shop-cart">
                            <i className="icon iconfont icon-gouwuche"></i><br/>
                            购物车
                            <i className="tip" style={{display:showNumberTip?'block':'none'}}>{_goodsNumber}</i>
                        </a>
                        <a href="javascript:void (0)" className="join-in-cart" onClick={this._joinIn}>加入购物车</a>
                        <a href="javascript:void (0)" className="buy-now" onClick={this._buyNow}>立即购买</a>
                    </div>
                </div>

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