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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Toast = __webpack_require__(9);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			invoiceContent: false,
			switchOn: false,
			address: {},
			goods: [],
			sum: 0
		};
	},
	_switchClick: function _switchClick() {
		this.setState({ switchOn: !this.state.switchOn });
		this.setState({ invoiceContent: !this.state.invoiceContent });
	},
	submitOrder: function submitOrder() {
		var _this = this;
		if (this.state.address == 'noAddress') {
			Toast.info({
				content: '请先选择收货地址',
				duration: 1500
			});
			return false;
		} else {
			UAjax.ajax({
				// method: 'post',
				// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
				// async: true,
				// cache: false,
				// contentType: 'application/x-www-form-urlencoded',

				method: 'post',
				url: API_SERVICE_URL + '/v1.0/order/add',
				data: {
					userId: localStorage.getItem('user_id'),
					orderList: JSON.stringify(_this.state.goods),
					amount: _this.state.sum
				},
				success: function success(res) {
					LocalStorageUtil.set(STORAGE_CONSTANTS.ORDER_ID_KEY, res.result.id);
				},
				error: function error(res) {
					console.log(res);
					_this.setState({
						// layerLoading:false  //关闭loading
					});
				}
			});
		}
		window.location.href = '../payment/index.html';
	},
	componentDidMount: function componentDidMount() {
		var _this = this;
		var goodsIds = JSON.parse(localStorage.getItem('buyIds'));
		var goods = JSON.parse(localStorage.getItem('goodsCart'));
		goodsIds.map(function (v, i) {
			_this.state.goods.push(goods[v]);
		});
		var addressItemString = localStorage.getItem(STORAGE_CONSTANTS.USER_CHOOSE_ADDRESS);
		if (addressItemString != undefined) {
			var addressItem = JSON.parse(addressItemString);
			_this.setState({
				address: addressItem
			});
			return;
		}

		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'post',
			// url:'http://localhost:8080/v1.0/address/fetchDefault',
			url: API_SERVICE_URL + '/v1.0/address/fetchDefault',
			data: {
				userId: Number(LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY))
			},
			success: function success(res) {
				if (res.code == 0) {
					if (res.result.length > 0) {
						_this.setState({
							address: res.result[0]
						});
					} /*else if(localStorage.getItem('address')){
             			_this.setState({
             				address: JSON.parse(localStorage.getItem('address'))
       })
       }*/else {
							_this.setState({
								address: 'noAddress'
							});
							// window.location.href = '../addAddress/index.html'
						}
				} else {
					_this.setState({
						layerLoading: false //关闭loading
					});
				}
			},
			error: function error(res) {
				console.log(res);
				_this.setState({
					// layerLoading:false  //关闭loading
				});
			}
		});
	},
	render: function render() {
		var sum = this.state.sum;
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
						'\u786E\u8BA4\u8BA2\u5355'
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
					{ className: 'payment-container' },
					React.createElement(
						'div',
						{ className: 'order-details-person' },
						React.createElement(
							'a',
							{ href: '../chooseConsigneeAddress/index.html' },
							React.createElement(
								'div',
								{ className: 'person-content clearfix' },
								React.createElement('i', { className: 'am-icon-map-marker am-icon-sm' }),
								this.state.address == 'noAddress' ? React.createElement(
									'div',
									{ className: 'addr-text' },
									'\u8BF7\u8865\u5145\u6536\u8D27\u5730\u5740'
								) : React.createElement(
									'div',
									{ className: 'addr-text' },
									React.createElement(
										'p',
										{ className: 'addr_size' },
										this.state.address.name,
										' \xA0\xA0',
										this.state.address.telNo
									),
									React.createElement(
										'p',
										{ className: 'addr_size2' },
										this.state.address.isDefault ? React.createElement(
											'span',
											null,
											'[\u9ED8\u8BA4]'
										) : '',
										this.state.address.address
									)
								),
								React.createElement('i', { className: 'iconfont icon-arrow-right' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'order-details-payment' },
						React.createElement(
							'div',
							{ className: 'payment-wrap1 display-box' },
							React.createElement(
								'p',
								{ className: 'payment-wrap1-left box-flex' },
								'\u652F\u4ED8\u914D\u9001'
							),
							React.createElement(
								'div',
								{ className: 'payment-wrap1-right box-flex' },
								React.createElement(
									'p',
									{ className: 'payment-wrap1-size1' },
									'\u5FEB\u9012\u914D\u9001'
								),
								React.createElement(
									'p',
									{ className: 'payment-wrap1-size1' },
									'\u5728\u7EBF\u652F\u4ED8'
								),
								React.createElement(
									'p',
									{ className: 'payment-wrap1-size1' },
									'\u4E0D\u9650\u5B9A\u65F6\u95F4'
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'order-details-content' },
					React.createElement(
						'div',
						{ className: 'details-content-wrap' },
						this.state.goods.map(function (v, i) {
							this.state.sum = this.state.sum + Number(v.totalPrice);
							return React.createElement(
								'div',
								{ className: 'details-content-prod', key: i },
								React.createElement(
									'div',
									{ className: 'prod-wrap display-box' },
									React.createElement(
										'p',
										{ className: 'prod-pic box-flex' },
										React.createElement('img', { src: v.src })
									),
									React.createElement(
										'div',
										{ className: 'prod-cont box-flex' },
										React.createElement(
											'p',
											{ className: 'prod-name' },
											v.name
										),
										React.createElement(
											'p',
											{ className: 'prod-price' },
											React.createElement(
												'span',
												{ className: 'sale-price' },
												'\u4EF7\u683C\uFF1A',
												React.createElement(
													'i',
													null,
													'\xA5',
													v.price
												)
											),
											React.createElement(
												'span',
												{ className: 'price-num' },
												'x ',
												v.goodsNum
											)
										)
									)
								)
							);
						}.bind(this))
					)
				),
				React.createElement(
					'div',
					{ className: 'order-details-remarks display-box' },
					React.createElement(
						'p',
						{ className: 'remarks-left box-flex' },
						'\u8BA2\u5355\u5907\u6CE8\uFF1A'
					),
					React.createElement(
						'p',
						{ className: 'remarks-right box-flex' },
						React.createElement('input', { type: 'text', value: '', placeholder: '\u965050\u5B57\u5185', maxLength: '50' })
					)
				),
				React.createElement('div', { className: 'order-details-footer' }),
				React.createElement('div', { className: 'padding-blank' }),
				React.createElement(
					'div',
					{ className: 'order-details-nav display-box' },
					React.createElement(
						'div',
						{ className: 'order-nav-left box-flex' },
						'\u603B\u8BA1\uFF1A',
						React.createElement(
							'span',
							null,
							'\xA5',
							this.state.sum.toFixed(2)
						)
					),
					React.createElement(
						'div',
						{ className: 'order-nav-right box-flex', onClick: this.submitOrder },
						'\u63D0\u4EA4\u8BA2\u5355'
					)
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