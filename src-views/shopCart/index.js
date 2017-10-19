/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Slider = require('../../src/complex/slider');
var NumberBox = require('../../src/libs/NumberBox');
var Modal = require('../../src/libs/Modal');
var Toast = require('../../src/libs/Toast');

var Root = React.createClass({
    getInitialState:function(){
        return {
            goods:[],
            goodsCount:{},
            sum:0,
            layerLoading:false,
            activeTab: 0,
            deleteModel: false
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
    _sumFunc: function () {
        var _goodscount = this.state.goodsCount;
        var sum = 0;
        for(var key in _goodscount){
            if(_goodscount[key].checked){
                sum = sum + Number(_goodscount[key].totalPrice);
            }else{
                continue;
            }
        }
        this.setState({
            sum: sum.toFixed(2)
        });
    },
    _onIncrease: function (id) {
        var _current = this.state.goodsCount['id_'+id];
        _current.goodsNum++;
        _current.totalPrice = (_current.goodsNum * _current.price).toFixed(2);
        this._sumFunc();
        // this.forceUpdate();
    },
    _onDecrease: function (id) {
        var _current = this.state.goodsCount['id_'+id];
        _current.goodsNum--;
        if(_current.goodsNum < 1){
            _current.goodsNum = 1;
        }
        _current.totalPrice = (_current.goodsNum * _current.price).toFixed(2);
        this._sumFunc();
        // this.forceUpdate();
    },
    _checkChange: function (id, e) {
        var _sum = 0,
            stateSum = Number(this.state.sum),
            totalPrice = Number(this.state.goodsCount['id_'+id].totalPrice);
        this.state.goodsCount['id_'+id].checked = e.target.checked;
        if(e.target.checked){
            _sum = stateSum + totalPrice;
        }else{
            _sum = stateSum - totalPrice;
        }
        this.setState({
            sum: _sum.toFixed(2)
        });
    },
    _checkAllChange: function (e) {
        var proItem = document.getElementsByClassName('product-item');
        for(var i = 0; i < proItem.length; i++){
            proItem[i].querySelector('input[type=checkbox]').checked = e.target.checked;
            this.state.goodsCount['id_'+proItem[i].getAttribute('data-id')].checked = e.target.checked;
        }
        if(e.target.checked){
            this._sumFunc();
        }else{
            this.setState({
                sum:0
            })
        }
    },
    _closeAccount: function () {
        var _goodsCount = this.state.goodsCount, arr = [];
        if(!localStorage.getItem('goodsCart')){
            Toast.info({
                content:'购物车没有商品！',
                duration:1500
            });
            return;
        }
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        for(var key in _goodsCount){
            if(_goodsCount[key].checked){
                _goods[key].goodsNum = _goodsCount[key].goodsNum;
                _goods[key].totalPrice = _goodsCount[key].totalPrice;
                localStorage.setItem('goodsCart',JSON.stringify(_goods));
                arr.push(key);
            }
        }
        if(arr.length > 0){
            localStorage.setItem('buyIds',JSON.stringify(arr));
            window.location.href = API_SERVICE_URL + '/getOrderInfo/index.html';
        }else{
            Toast.info({
                content:'您还未选择商品！',
                duration:1500
            });
            return false;
        }
    },
    _editCart: function (e) {
        this.setState({
            deleteModel: true
        });
    },
    _editCancle: function () {
        this.setState({
            deleteModel: false
        });
    },
    _cancelOne: function (id) {
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        var newGoods = {}, newBuyIds = [];
        for(var key in _goods){
            if(key == 'id_'+id){
                continue;
            }else{
                newGoods[key] = _goods[key];
                newBuyIds.push(key);
            }
        }
        localStorage.setItem('goodsCart',JSON.stringify(newGoods));
        localStorage.setItem('buyIds',JSON.stringify(newBuyIds));
        this._getGoods();
    },
    _clearCart: function () {
        Modal.confirm({
            content:'确认删除？',
            confirmBack: function () {
                this.setState({
                    goods:[],
                    sum:0
                });
                localStorage.setItem('goodsCart','');
                localStorage.setItem('buyIds','');
            }.bind(this)
        });
    },
    _getGoods: function () {
        var _this = this;
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        var _summation = 0, newGoods = [];
        for(var key in _goods){
            newGoods.push(_goods[key]);
            _this.state.goodsCount[key] = {
                checked:true,
                goodsNum:_goods[key].goodsNum,
                price:_goods[key].price,
                totalPrice:_goods[key].totalPrice
            };
            _summation = _summation + Number(_goods[key].totalPrice);
        }
        this.setState({
            goods: newGoods,
            sum: _summation.toFixed(2)
        });
    },
    componentDidMount: function () {
        if(!localStorage.getItem('goodsCart')){
            return;
        }
        this._getGoods();
    },
    render: function () {
        var _goods = this.state.goods;
        var _price = _goods.price ? (_goods.price).toFixed(2) : '';
        var _oldprice = _goods.old_price ? (_goods.old_price).toFixed(2) : '';
        var _saveprice = (_oldprice - _price).toFixed(2);

        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">购物车</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
                    <div className="product-wrap">
                        <div>
                            {this.state.deleteModel ?
                                <div className="shop">
                                    <a href="javascript:void (0)" className="edit" onClick={this._editCancle}>取消</a>
                                    <a href="javascript:void (0)" className="edit" onClick={this._clearCart}>清空购物车</a>
                                </div> :
                                <div className="shop">
                                    <a href="javascript:void (0)" className="edit" onClick={this._editCart}>编辑</a>
                                </div>
                            }
                            {this.state.goods.length > 0 ?
                                this.state.goods.map(function (v, i) {
                                    return (
                                        <div className="product-item" key={i} data-id={v.id}>
                                            {this.state.deleteModel ?
                                                <div className="delete-box">
                                                    <a href="javascript://" className="am-icon-minus-circle" onClick={this._cancelOne.bind(this,v.id)}></a>
                                                </div> :
                                                <div className="check-box">
                                                    <input type="checkbox" id={"shop1_item"+i} defaultChecked={this.state.goodsCount['id_'+v.id].checked} onClick={this._checkChange.bind(this, v.id)} />
                                                    <label htmlFor={"shop1_item"+i}></label>
                                                </div>
                                            }
                                            <p className="img-box">
                                                <img src={v.src} alt=""/>
                                            </p>
                                            <div className="product-name">
                                                <a className="title">{v.name}</a>
                                                <p className="price">￥{this.state.goodsCount['id_'+v.id].totalPrice}</p>
                                                <NumberBox className="f-right" defaultValue={v.goodsNum}  onIncrease={this._onIncrease.bind(this,v.id)} onDecrease={this._onDecrease.bind(this,v.id)}/>
                                            </div>
                                        </div>
                                    )
                                }.bind(this)) :
                                <div className="no-goods">
                                    购物车空了， <a href="../goodsList">马上去选购</a>
                                </div>
                            }
                        </div>
                    </div>
				</Container>

                {/*购物车*/}
                <div className="calculator-nav">
                    <div className={this.state.deleteModel ? "check-box unvisible" : 'check-box'}>
                        <input type="checkbox" ref="checkedAll" id="checkedAll" defaultChecked="checked" onChange={this._checkAllChange.bind(this)}/>
                        <label htmlFor="checkedAll">全选</label>
                    </div>
                    <a href="javascript://" onClick={this._closeAccount} className="settle">去结算</a>
                    <div className="calculate">
                        <p>合计：<span>￥</span><span className="money" ref="sum">{this.state.sum}</span></p>
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