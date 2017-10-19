/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var Container = React.createClass({
	displayName: "Container",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "main-body" },
			this.props.children
		);
	}
});

module.exports = Container;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

var Header = React.createClass({
	displayName: "Header",

	render: function render() {
		return React.createElement(
			"header",
			{ "data-am-widget": "header", className: "am-header am-header-app am-header-fixed" },
			this.props.children
		);
	}
});

Header.LeftItem = React.createClass({
	displayName: "LeftItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-left am-header-nav" },
			this.props.children
		);
	}
});

Header.CenterItem = React.createClass({
	displayName: "CenterItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-nav-center" },
			this.props.children
		);
	}
});

Header.RightItem = React.createClass({
	displayName: "RightItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-right am-header-nav" },
			this.props.children
		);
	}
});

module.exports = Header;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/17
 * 说明：
 */
var NumberBox = React.createClass({
    displayName: 'NumberBox',

    getDefaultProps: function getDefaultProps() {
        return {
            min: 1,
            max: 100,
            step: 1,
            defaultValue: 1,
            onDecrease: null,
            onIncrease: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            val: this.props.defaultValue
        };
    },
    _onDecrease: function _onDecrease() {
        var _val = this.state.val - this.props.step;
        if (_val < this.props.min) {
            _val = this.props.min;
        }
        this.setState({
            val: _val
        });
        this.props.onDecrease && this.props.onDecrease();
    },
    _onIncrease: function _onIncrease() {
        var _val = this.state.val + this.props.step;
        if (_val > this.props.max) {
            _val = this.props.max;
        }
        this.setState({
            val: _val
        });
        this.props.onIncrease && this.props.onIncrease();
    },
    render: function render() {
        var _class = this.props.className ? 'input-number ' + this.props.className : 'input-number';
        return React.createElement(
            'div',
            { className: _class },
            React.createElement(
                'button',
                { className: 'decrease', onClick: this._onDecrease },
                '-'
            ),
            React.createElement('input', { ref: 'numInput', type: 'number', min: this.props.min, max: this.props.max, value: this.state.val }),
            React.createElement(
                'button',
                { className: 'increase', onClick: this._onIncrease },
                '+'
            )
        );
    }
});
module.exports = NumberBox;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

var Layer = React.createClass({
	displayName: "Layer",

	render: function render() {
		var layerCls = this.props.layerCls || '';
		return React.createElement(
			"div",
			{ className: this.props.show ? "block" : "none" },
			React.createElement(
				"div",
				{ className: "layer-container " + layerCls },
				React.createElement(
					"div",
					{ className: "layer-body" },
					this.props.children
				)
			)
		);
	}
});

Layer.Title = React.createClass({
	displayName: "Title",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-title" },
			this.props.children
		);
	}
});
Layer.Text = React.createClass({
	displayName: "Text",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-text" },
			this.props.children
		);
	}
});
Layer.Button = React.createClass({
	displayName: "Button",


	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-button" },
			React.createElement(
				"a",
				{ href: "javascript:;", className: "layer-btn confirm", onClick: this.props.confirm },
				"\u786E\u8BA4"
			),
			React.createElement(
				"a",
				{ href: "javascript:;", className: "layer-btn cancel", onClick: this.props.cancel },
				"\u53D6\u6D88"
			)
		);
	}
});
Layer.Background = React.createClass({
	displayName: "Background",

	render: function render() {
		return React.createElement("div", { className: this.props.show ? "layer-background block" : "layer-background" });
	}
});

module.exports = Layer;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var NumberBox = __webpack_require__(12);
var Toast = __webpack_require__(9);

var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            goods: {},
            layerLoading: false,
            activeTab: 0,
            goodsNum: 1,
            totalPrice: 0
        };
    },
    radioChecked: function radioChecked(index) {
        var radioEle = document.getElementsByClassName('radio');
        for (var i = 0; i < radioEle.length; i++) {
            radioEle[i].className = "radio inline am-icon-circle-o";
        }
        radioEle[index].className = "radio inline am-icon-check-circle";
    },
    _handleClick: function _handleClick(index) {
        this.setState({
            activeTab: index
        });
    },
    _onIncrease: function _onIncrease() {
        this.state.goodsNum++;
        var totalPrice = (this.state.goodsNum * this.state.goods.price).toFixed(2);
        var goodsCart = localStorage.getItem('goodsCart');
        if (goodsCart) {
            goodsCart = JSON.parse(goodsCart);
        } else {
            goodsCart = {};
            goodsCart['id_' + this.state.goods.id] = this.state.goods;
        }
        goodsCart['id_' + this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_' + this.state.goods.id].totalPrice = totalPrice;
        localStorage.setItem('goodsCart', JSON.stringify(goodsCart));
        this.setState({
            totalPrice: totalPrice
        });
    },
    _onDecrease: function _onDecrease() {
        this.state.goodsNum--;
        if (this.state.goodsNum < 1) {
            this.state.goodsNum = 1;
        }
        var totalPrice = (this.state.goodsNum * this.state.goods.price).toFixed(2);
        var goodsCart = localStorage.getItem('goodsCart');
        if (goodsCart) {
            goodsCart = JSON.parse(goodsCart);
        } else {
            goodsCart = {};
            goodsCart['id_' + this.state.goods.id] = this.state.goods;
        }
        goodsCart['id_' + this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_' + this.state.goods.id].totalPrice = totalPrice;
        localStorage.setItem('goodsCart', JSON.stringify(goodsCart));
        this.setState({
            totalPrice: totalPrice
        });
    },
    _joinIn: function _joinIn() {
        var _currentGoods = JSON.parse(localStorage.getItem('goodsDetail'));
        _currentGoods.goodsNum = this.state.goodsNum;
        _currentGoods.totalPrice = this.state.totalPrice;
        var _goodsCart = localStorage.getItem('goodsCart');
        if (_goodsCart) {
            _goodsCart = JSON.parse(_goodsCart);
        } else {
            _goodsCart = new Object();
        }
        _goodsCart['id_' + _currentGoods.id] = _currentGoods;
        _goodsCart = JSON.stringify(_goodsCart);
        localStorage.setItem('goodsCart', _goodsCart);
        Toast.info({
            'content': '成功加入购物车',
            'duration': 1500
        });
    },
    _buyNow: function _buyNow() {
        var newBuyIds = [];
        newBuyIds.push('id_' + this.state.goods.id);
        localStorage.setItem('buyIds', JSON.stringify(newBuyIds));
        var goodsCart = localStorage.getItem('goodsCart');
        if (goodsCart) {
            goodsCart = JSON.parse(goodsCart);
        } else {
            goodsCart = {};
        }
        goodsCart['id_' + this.state.goods.id] = this.state.goods;
        goodsCart['id_' + this.state.goods.id].goodsNum = this.state.goodsNum;
        goodsCart['id_' + this.state.goods.id].totalPrice = this.state.totalPrice;
        localStorage.setItem('goodsCart', JSON.stringify(goodsCart));
        window.location.href = '../getOrderInfo/index.html';
    },
    componentDidMount: function componentDidMount() {
        this._getGoodsDetail();
    },
    _getGoodsDetail: function _getGoodsDetail() {
        var _this = this;
        this.setState({
            layerLoading: true //打开loading
        });

        var _detail = JSON.parse(localStorage.getItem('goodsDetail'));
        if (_detail) {
            _this.setState({
                goods: _detail,
                totalPrice: Number(_detail.price).toFixed(2),
                layerLoading: false //关闭loading
            });
        }
    },
    _QuantityInCarChange: function _QuantityInCarChange() {
        // localStorage.setItem('goodsCart','{"id_1":{"id":1,"code":"000235","name":"京制牛黄解毒片0.6g*8s/支","standard":"8片/瓶","factory":"北京同仁堂","unit":"支","price":"2","provider":null,"type":"0","src":"/images/otc/000235-1.jpg","goodsNum":1,"totalPrice":"2.00"},"id_2":{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg","goodsNum":1,"totalPrice":"3.30"},"id_9":{"id":9,"code":"000275","name":"复方黄芩片330mg*60片","standard":"60片/瓶","factory":"肇庆星湖","unit":"瓶","price":"9","provider":null,"type":"0","src":"/images/otc/000275-2.jpg","goodsNum":9,"totalPrice":"9.00"}}');
        // localStorage.setItem('goodsCart','{}');
        // localStorage.removeItem('goodsCart');


    },
    render: function render() {

        var _goods = this.state.goods;
        var _price = _goods.price ? Number(_goods.price).toFixed(2) : 0.00;
        var _goodsCarList = JSON.parse(localStorage.getItem('goodsCart'));
        var _goodsNumber;
        var showNumberTip;
        if (_goodsCarList) {
            _goodsNumber = Object.getOwnPropertyNames(_goodsCarList).length;
            if (_goodsNumber == 0) {
                showNumberTip = false;
            } else {
                showNumberTip = true;
            }
        } else {
            showNumberTip = false;
        }
        return React.createElement(
            'div',
            null,
            React.createElement(
                Header,
                null,
                React.createElement(
                    Header.LeftItem,
                    null,
                    React.createElement(
                        'a',
                        { href: 'javascript:window.history.back()' },
                        React.createElement('i', { className: 'main-header-icon header-left-icon iconfont icon-arrow-left' })
                    )
                ),
                React.createElement(
                    Header.CenterItem,
                    null,
                    React.createElement(
                        'h1',
                        { className: 'am-header-title' },
                        '\u7F51\u4E0A\u836F\u5E97'
                    )
                ),
                React.createElement(
                    Header.RightItem,
                    null,
                    React.createElement(
                        'a',
                        { href: '../index/index.html' },
                        React.createElement('i', { className: 'main-header-icon header-right-icon iconfont icon-home' })
                    )
                )
            ),
            React.createElement(
                Container,
                null,
                React.createElement(
                    'div',
                    { className: 'goods-detail' },
                    React.createElement(
                        'div',
                        { className: 'img-box' },
                        React.createElement('img', { src: _goods.src, alt: '' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'goods-msg' },
                        React.createElement(
                            'h3',
                            null,
                            _goods.name
                        ),
                        React.createElement(
                            'p',
                            { className: 'factory' },
                            _goods.factory
                        ),
                        React.createElement(
                            'div',
                            { className: 'clearfix price-box' },
                            React.createElement(
                                'p',
                                { className: 'price' },
                                React.createElement(
                                    'span',
                                    null,
                                    '\uFFE5'
                                ),
                                _price
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'count' },
                        React.createElement(
                            'div',
                            { className: 'inner-count' },
                            React.createElement(
                                'h3',
                                null,
                                '\u6570\u91CF\uFF1A'
                            ),
                            React.createElement(
                                'div',
                                { className: 'f-left count-total' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u5408\u8BA1\uFF1A',
                                    React.createElement(
                                        'span',
                                        null,
                                        '\uFFE5'
                                    ),
                                    React.createElement(
                                        'span',
                                        { ref: 'total', className: 'total-money' },
                                        this.state.totalPrice
                                    )
                                )
                            ),
                            React.createElement(NumberBox, { className: 'f-right', defaultValue: this.state.goodsNum, onIncrease: this._onIncrease, onDecrease: this._onDecrease })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'goods-detail' },
                React.createElement(
                    'div',
                    { className: 'buy-nav' },
                    React.createElement(
                        'a',
                        { href: '../im/client.html', className: 'telphone' },
                        React.createElement('i', { className: 'icon iconfont icon-phone' }),
                        React.createElement('br', null),
                        '\u5728\u7EBF\u5BA2\u670D'
                    ),
                    React.createElement(
                        'a',
                        { href: '../shopCart/index.html', className: 'shop-cart' },
                        React.createElement('i', { className: 'icon iconfont icon-gouwuche' }),
                        React.createElement('br', null),
                        '\u8D2D\u7269\u8F66',
                        React.createElement(
                            'i',
                            { className: 'tip', style: { display: showNumberTip ? 'block' : 'none' } },
                            _goodsNumber
                        )
                    ),
                    React.createElement(
                        'a',
                        { href: 'javascript:void (0)', className: 'join-in-cart', onClick: this._joinIn },
                        '\u52A0\u5165\u8D2D\u7269\u8F66'
                    ),
                    React.createElement(
                        'a',
                        { href: 'javascript:void (0)', className: 'buy-now', onClick: this._buyNow },
                        '\u7ACB\u5373\u8D2D\u4E70'
                    )
                )
            ),
            React.createElement(
                Layer,
                { show: this.state.layerLoading, layerCls: 'alert-loading' },
                React.createElement(
                    Layer.Text,
                    null,
                    React.createElement('img', { src: '../images/loading.gif', alt: 'loading' })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/20
 * 说明：Toast组件
 * 1. 自动消失弹窗组件
 * 2. 轻量级反馈/提示，可以用来显示不会打断用户操作的内容
 */

var Toast = function () {
    var msgArea = document.createElement('div');

    var ToastItem = React.createClass({
        displayName: 'ToastItem',

        getDefaultProps: function getDefaultProps() {
            return {
                content: null,
                duration: 3000,
                mask: true,
                onClose: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                content: this.props.content,
                duration: this.props.duration,
                mask: this.props.mask,
                onClose: this.props.onClose
            };
        },
        _toDisappear: function _toDisappear() {
            var _this = this;
            if (this._disappear) {
                clearTimeout(this._disappear);
            }
            this._disappear = setTimeout(function () {
                document.body.removeChild(msgArea);
                _this.props.onClose && _this.props.onClose();
            }, _this.props.duration);
        },
        componentDidMount: function componentDidMount() {
            this._toDisappear();
        },
        componentDidUpdate: function componentDidUpdate() {
            this._toDisappear();
        },
        render: function render() {
            var _class = this.props.className ? 'ucs-toast ' + this.props.className : 'ucs-toast';
            _class = !this.props.mask ? _class + ' ucs-toast-nomask' : _class;
            document.body.appendChild(msgArea);
            return React.createElement(
                'div',
                { className: _class },
                React.createElement(
                    'div',
                    { className: 'ucs-toast-content' },
                    this.props.type !== 'info' ? React.createElement('i', { className: 'iconfont icon-' + this.props.type }) : '',
                    React.createElement(
                        'p',
                        null,
                        this.props.content
                    )
                )
            );
        }
    });
    return {
        success: function success(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'success', className: 'toast-success', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        fail: function fail(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'fail', className: 'toast-fail', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        info: function info(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'info', className: 'toast-info', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        warning: function warning(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'warning', className: 'toast-warning', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        }
    };
}();
module.exports = Toast;

/***/ })

/******/ });