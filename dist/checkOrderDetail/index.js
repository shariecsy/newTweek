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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			invoiceContent: false,
			switchOn: false,
			address: { name: '收货人', telNo: '联系电话', address: '收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址' },
			goods: [],
			sum: 0,
			amount: 0,
			layerLoading: false,
			layerShow: false
		};
	},
	_switchClick: function _switchClick() {
		this.setState({ switchOn: !this.state.switchOn });
		this.setState({ invoiceContent: !this.state.invoiceContent });
	},
	componentDidMount: function componentDidMount() {
		localStorage.setItem('buyIds', '["id_2"]');
		localStorage.setItem('user_id', '17');
		localStorage.setItem('goodsDetail', '{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg"}');
		localStorage.setItem('goodsCart', '{"id_2":{"id":2,"code":"000236","name":"牛黄解毒片18s","standard":"18片/盒","factory":"佛山德众","unit":"盒","price":"3.3","provider":null,"type":"0","src":"/images/otc/000236-1.jpg","goodsNum":2,"totalPrice":"6.60"}}');
		// console.log(localStorage.getItem('buyIds'))
		// console.log(JSON.parse(localStorage.getItem('buyIds')))
		// console.log(localStorage.getItem('user_id'))
		// console.log(JSON.parse(localStorage.getItem('user_id')))
		// console.log(localStorage.getItem('goodsDetail'))
		// console.log(JSON.parse(localStorage.getItem('goodsCart')))
		this._getOrderDetail();
		this._getOrderAmount();
	},
	_getOrderDetail: function _getOrderDetail() {
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
				userId: localStorage.getItem('user_id')
			},
			success: function success(res) {
				if (res.code == 0) {
					if (res.result.length > 0) {
						_this.setState({
							address: res.result[0]
						});
						console.log(_this.state.address);
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
				_this.setState({
					// layerLoading:false  //关闭loading
				});
			}
		});
	},
	_getOrderAmount: function _getOrderAmount() {
		// var id = GetQueryString.getQueryString('id');
		var id = 5;
		this.setState({ layerLoading: true });
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/order/getAmount',
			data: { id: id },
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false, //关闭loading
						amount: res.result.amount
					});
				} else {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭loading
				});
				this._layerShow('服务器异常:' + res);
			}.bind(this)
		});
	},
	_layerShow: function _layerShow(text, fn) {
		var me = this;
		this.setState({
			layerShow: true,
			msg: text
		});
		setTimeout(function () {
			me.setState({
				layerShow: false,
				msg: ''
			});
			fn && fn();
		}, 2000);
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
						'\u8BA2\u5355\u8BE6\u60C5'
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
					{ className: 'order-details-footer' },
					React.createElement(
						'p',
						{ className: 'footer-title clearfix' },
						React.createElement(
							'span',
							{ className: 'footer-title-left' },
							'\u8BA2\u5355\u72B6\u6001\uFF1A'
						),
						React.createElement(
							'span',
							{ className: 'footer-title-right' },
							'\u4E70\u5BB6\u5DF2\u4ED8\u6B3E'
						)
					),
					React.createElement(
						'div',
						{ className: 'footer-cont' },
						React.createElement(
							'p',
							{ className: 'footer-cont-size clearfix' },
							React.createElement(
								'span',
								{ className: 'footer-cont-left' },
								'\u8BA2\u5355\u7F16\u53F7\uFF1A'
							),
							React.createElement(
								'span',
								{ className: 'footer-cont-right' },
								'123131312312312312'
							)
						),
						React.createElement(
							'p',
							{ className: 'footer-cont-size clearfix' },
							React.createElement(
								'span',
								{ className: 'footer-cont-left' },
								'\u521B\u5EFA\u65F6\u95F4\uFF1A'
							),
							React.createElement(
								'span',
								{ className: 'footer-cont-right' },
								'2000-01-23 00:00:00'
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
					{ className: 'payment-container' },
					React.createElement(
						'div',
						{ className: 'order-details-person' },
						React.createElement(
							'div',
							{ className: 'person-content clearfix' },
							React.createElement('i', { className: 'am-icon-map-marker am-icon-sm' }),
							React.createElement(
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
									this.state.address.address
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'order-details-footer' },
					React.createElement(
						'p',
						{ className: 'footer-title clearfix' },
						React.createElement(
							'span',
							{ className: 'footer-title-left' },
							'\u8BA2\u5355\u603B\u4EF7'
						),
						React.createElement(
							'span',
							{ className: 'footer-title-right' },
							this.state.amount
						)
					),
					React.createElement(
						'div',
						{ className: 'footer-cont' },
						React.createElement(
							'p',
							{ className: 'footer-cont-size clearfix' },
							React.createElement(
								'span',
								{ className: 'footer-cont-left' },
								'\u5546\u54C1\u603B\u4EF7'
							),
							React.createElement(
								'span',
								{ className: 'footer-cont-right' },
								'\uFFE530.00'
							)
						),
						React.createElement(
							'p',
							{ className: 'footer-cont-size clearfix' },
							React.createElement(
								'span',
								{ className: 'footer-cont-left' },
								'\u8FD0\u8D39'
							),
							React.createElement(
								'span',
								{ className: 'footer-cont-right' },
								'\uFFE510.00'
							)
						),
						React.createElement(
							'p',
							{ className: 'footer-cont-size clearfix' },
							React.createElement(
								'span',
								{ className: 'footer-cont-left' },
								'\u79EF\u5206\u62B5\u6263'
							),
							React.createElement(
								'span',
								{ className: 'footer-cont-right' },
								'-\uFFE50.00'
							)
						)
					)
				)
			),
			React.createElement(
				Layer,
				{ show: this.state.layerShow, layerCls: 'alert-layer', ref: 'alertLayer' },
				React.createElement(
					Layer.Text,
					null,
					React.createElement(
						'p',
						null,
						React.createElement('i', { className: 'am-icon-info-circle am-icon-lg' })
					),
					React.createElement(
						'p',
						null,
						this.state.msg
					)
				)
			),
			React.createElement(Layer.Background, { show: this.state.layerShow }),
			React.createElement(
				Layer,
				{ show: this.state.layerLoading, layerCls: 'alert-loading' },
				React.createElement(
					Layer.Text,
					null,
					React.createElement('img', { src: '../images/loading.gif', alt: 'loading' })
				)
			),
			React.createElement(Layer.Background, { show: this.state.layerLoading })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });