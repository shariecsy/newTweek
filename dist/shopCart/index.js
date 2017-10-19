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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
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

/***/ 19:
/***/ (function(module, exports) {

/**
 * Created by maxuezhu on 2017/8/4.
 * 说明：提示对话框组件
 */
var Modal = function () {
    var div = document.createElement('div');
    var ConfirmItem = React.createClass({
        displayName: 'ConfirmItem',

        getDefaultProps: function getDefaultProps() {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                cancelText: '取消',
                confirmBack: null,
                cancelBack: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                className: 'ucs-modal'
            };
        },
        _confirmBack: function _confirmBack() {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        _cancelBack: function _cancelBack() {
            document.body.removeChild(div);
            this.props.cancelBack ? this.props.cancelBack() : null;
        },
        render: function render() {
            document.body.appendChild(div);
            return React.createElement(
                'div',
                { className: this.state.className, ref: 'modal' },
                React.createElement('div', { className: 'ucs-modal-mask' }),
                React.createElement(
                    'div',
                    { className: 'ucs-modal-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'ucs-modal-con' },
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-title' },
                            this.props.title
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-content' },
                            this.props.content
                        ),
                        React.createElement(
                            'button',
                            { ref: 'confirm', className: 'ucs-btn-confirm', onClick: this._confirmBack },
                            this.props.confirmText
                        ),
                        React.createElement(
                            'button',
                            { ref: 'cancel', className: 'ucs-btn-cancel', onClick: this._cancelBack },
                            this.props.cancelText
                        )
                    )
                )
            );
        }
    });
    var AlertItem = React.createClass({
        displayName: 'AlertItem',

        getDefaultProps: function getDefaultProps() {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                confirmBack: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                className: this.props.className ? this.props.className : 'ucs-modal'
            };
        },
        _confirmBack: function _confirmBack() {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        render: function render() {
            document.body.appendChild(div);
            return React.createElement(
                'div',
                { className: this.state.className },
                React.createElement('div', { className: 'ucs-modal-mask' }),
                React.createElement(
                    'div',
                    { className: 'ucs-modal-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'ucs-modal-con' },
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-title' },
                            this.props.title
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-content' },
                            this.props.content
                        ),
                        React.createElement(
                            'button',
                            { ref: 'confirm', onClick: this._confirmBack },
                            this.props.confirmText
                        )
                    )
                )
            );
        }
    });
    return {
        alert: function alert(v) {
            ReactDOM.render(React.createElement(AlertItem, v), div);
        },
        confirm: function confirm(v) {
            ReactDOM.render(React.createElement(ConfirmItem, v), div);
        }
    };
}();

module.exports = Modal;

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

/***/ 8:
/***/ (function(module, exports) {

var Slider = React.createClass({
	displayName: 'Slider',

	getDefaultProps: function getDefaultProps() {
		return {
			isShowButton: true,
			isShowPagination: true,
			autoplay: 5000,
			isLoop: true,
			direction: 'horizontal'
		};
	},
	componentDidMount: function componentDidMount() {
		var mySwiper = new Swiper('#banner-slider', {
			// Optional parameters
			direction: this.props.direction,
			loop: this.props.isLoop,

			// If we need pagination
			pagination: '.swiper-pagination',

			// Navigation arrows
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',

			autoplay: this.props.autoplay
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-container', id: 'banner-slider' },
			React.createElement(
				'div',
				{ className: 'swiper-wrapper' },
				this.props.children
			),
			this.props.isShowPagination === true ? React.createElement('div', { className: 'swiper-pagination' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-prev' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-next' }) : React.createElement('div', null)
		);
	}
});

Slider.Item = React.createClass({
	displayName: 'Item',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-slide' },
			this.props.children
		);
	}
});

module.exports = Slider;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Slider = __webpack_require__(8);
var NumberBox = __webpack_require__(12);
var Modal = __webpack_require__(19);
var Toast = __webpack_require__(9);

var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            goods: [],
            goodsCount: {},
            sum: 0,
            layerLoading: false,
            activeTab: 0,
            deleteModel: false
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
    _sumFunc: function _sumFunc() {
        var _goodscount = this.state.goodsCount;
        var sum = 0;
        for (var key in _goodscount) {
            if (_goodscount[key].checked) {
                sum = sum + Number(_goodscount[key].totalPrice);
            } else {
                continue;
            }
        }
        this.setState({
            sum: sum.toFixed(2)
        });
    },
    _onIncrease: function _onIncrease(id) {
        var _current = this.state.goodsCount['id_' + id];
        _current.goodsNum++;
        _current.totalPrice = (_current.goodsNum * _current.price).toFixed(2);
        this._sumFunc();
        // this.forceUpdate();
    },
    _onDecrease: function _onDecrease(id) {
        var _current = this.state.goodsCount['id_' + id];
        _current.goodsNum--;
        if (_current.goodsNum < 1) {
            _current.goodsNum = 1;
        }
        _current.totalPrice = (_current.goodsNum * _current.price).toFixed(2);
        this._sumFunc();
        // this.forceUpdate();
    },
    _checkChange: function _checkChange(id, e) {
        var _sum = 0,
            stateSum = Number(this.state.sum),
            totalPrice = Number(this.state.goodsCount['id_' + id].totalPrice);
        this.state.goodsCount['id_' + id].checked = e.target.checked;
        if (e.target.checked) {
            _sum = stateSum + totalPrice;
        } else {
            _sum = stateSum - totalPrice;
        }
        this.setState({
            sum: _sum.toFixed(2)
        });
    },
    _checkAllChange: function _checkAllChange(e) {
        var proItem = document.getElementsByClassName('product-item');
        for (var i = 0; i < proItem.length; i++) {
            proItem[i].querySelector('input[type=checkbox]').checked = e.target.checked;
            this.state.goodsCount['id_' + proItem[i].getAttribute('data-id')].checked = e.target.checked;
        }
        if (e.target.checked) {
            this._sumFunc();
        } else {
            this.setState({
                sum: 0
            });
        }
    },
    _closeAccount: function _closeAccount() {
        var _goodsCount = this.state.goodsCount,
            arr = [];
        if (!localStorage.getItem('goodsCart')) {
            Toast.info({
                content: '购物车没有商品！',
                duration: 1500
            });
            return;
        }
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        for (var key in _goodsCount) {
            if (_goodsCount[key].checked) {
                _goods[key].goodsNum = _goodsCount[key].goodsNum;
                _goods[key].totalPrice = _goodsCount[key].totalPrice;
                localStorage.setItem('goodsCart', JSON.stringify(_goods));
                arr.push(key);
            }
        }
        if (arr.length > 0) {
            localStorage.setItem('buyIds', JSON.stringify(arr));
            window.location.href = API_SERVICE_URL + '/getOrderInfo/index.html';
        } else {
            Toast.info({
                content: '您还未选择商品！',
                duration: 1500
            });
            return false;
        }
    },
    _editCart: function _editCart(e) {
        this.setState({
            deleteModel: true
        });
    },
    _editCancle: function _editCancle() {
        this.setState({
            deleteModel: false
        });
    },
    _cancelOne: function _cancelOne(id) {
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        var newGoods = {},
            newBuyIds = [];
        for (var key in _goods) {
            if (key == 'id_' + id) {
                continue;
            } else {
                newGoods[key] = _goods[key];
                newBuyIds.push(key);
            }
        }
        localStorage.setItem('goodsCart', JSON.stringify(newGoods));
        localStorage.setItem('buyIds', JSON.stringify(newBuyIds));
        this._getGoods();
    },
    _clearCart: function _clearCart() {
        Modal.confirm({
            content: '确认删除？',
            confirmBack: function () {
                this.setState({
                    goods: [],
                    sum: 0
                });
                localStorage.setItem('goodsCart', '');
                localStorage.setItem('buyIds', '');
            }.bind(this)
        });
    },
    _getGoods: function _getGoods() {
        var _this = this;
        var _goods = JSON.parse(localStorage.getItem('goodsCart'));
        var _summation = 0,
            newGoods = [];
        for (var key in _goods) {
            newGoods.push(_goods[key]);
            _this.state.goodsCount[key] = {
                checked: true,
                goodsNum: _goods[key].goodsNum,
                price: _goods[key].price,
                totalPrice: _goods[key].totalPrice
            };
            _summation = _summation + Number(_goods[key].totalPrice);
        }
        this.setState({
            goods: newGoods,
            sum: _summation.toFixed(2)
        });
    },
    componentDidMount: function componentDidMount() {
        if (!localStorage.getItem('goodsCart')) {
            return;
        }
        this._getGoods();
    },
    render: function render() {
        var _goods = this.state.goods;
        var _price = _goods.price ? _goods.price.toFixed(2) : '';
        var _oldprice = _goods.old_price ? _goods.old_price.toFixed(2) : '';
        var _saveprice = (_oldprice - _price).toFixed(2);

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
                        '\u8D2D\u7269\u8F66'
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
                    { className: 'product-wrap' },
                    React.createElement(
                        'div',
                        null,
                        this.state.deleteModel ? React.createElement(
                            'div',
                            { className: 'shop' },
                            React.createElement(
                                'a',
                                { href: 'javascript:void (0)', className: 'edit', onClick: this._editCancle },
                                '\u53D6\u6D88'
                            ),
                            React.createElement(
                                'a',
                                { href: 'javascript:void (0)', className: 'edit', onClick: this._clearCart },
                                '\u6E05\u7A7A\u8D2D\u7269\u8F66'
                            )
                        ) : React.createElement(
                            'div',
                            { className: 'shop' },
                            React.createElement(
                                'a',
                                { href: 'javascript:void (0)', className: 'edit', onClick: this._editCart },
                                '\u7F16\u8F91'
                            )
                        ),
                        this.state.goods.length > 0 ? this.state.goods.map(function (v, i) {
                            return React.createElement(
                                'div',
                                { className: 'product-item', key: i, 'data-id': v.id },
                                this.state.deleteModel ? React.createElement(
                                    'div',
                                    { className: 'delete-box' },
                                    React.createElement('a', { href: 'javascript://', className: 'am-icon-minus-circle', onClick: this._cancelOne.bind(this, v.id) })
                                ) : React.createElement(
                                    'div',
                                    { className: 'check-box' },
                                    React.createElement('input', { type: 'checkbox', id: "shop1_item" + i, defaultChecked: this.state.goodsCount['id_' + v.id].checked, onClick: this._checkChange.bind(this, v.id) }),
                                    React.createElement('label', { htmlFor: "shop1_item" + i })
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'img-box' },
                                    React.createElement('img', { src: v.src, alt: '' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'product-name' },
                                    React.createElement(
                                        'a',
                                        { className: 'title' },
                                        v.name
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'price' },
                                        '\uFFE5',
                                        this.state.goodsCount['id_' + v.id].totalPrice
                                    ),
                                    React.createElement(NumberBox, { className: 'f-right', defaultValue: v.goodsNum, onIncrease: this._onIncrease.bind(this, v.id), onDecrease: this._onDecrease.bind(this, v.id) })
                                )
                            );
                        }.bind(this)) : React.createElement(
                            'div',
                            { className: 'no-goods' },
                            '\u8D2D\u7269\u8F66\u7A7A\u4E86\uFF0C ',
                            React.createElement(
                                'a',
                                { href: '../goodsList' },
                                '\u9A6C\u4E0A\u53BB\u9009\u8D2D'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'calculator-nav' },
                React.createElement(
                    'div',
                    { className: this.state.deleteModel ? "check-box unvisible" : 'check-box' },
                    React.createElement('input', { type: 'checkbox', ref: 'checkedAll', id: 'checkedAll', defaultChecked: 'checked', onChange: this._checkAllChange.bind(this) }),
                    React.createElement(
                        'label',
                        { htmlFor: 'checkedAll' },
                        '\u5168\u9009'
                    )
                ),
                React.createElement(
                    'a',
                    { href: 'javascript://', onClick: this._closeAccount, className: 'settle' },
                    '\u53BB\u7ED3\u7B97'
                ),
                React.createElement(
                    'div',
                    { className: 'calculate' },
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
                            { className: 'money', ref: 'sum' },
                            this.state.sum
                        )
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