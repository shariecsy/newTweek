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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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

/***/ 3:
/***/ (function(module, exports) {

var NoRecord = React.createClass({
	displayName: "NoRecord",

	render: function render() {
		return React.createElement(
			"section",
			{ className: "page-tips" },
			React.createElement("i", { className: "tips-icon tips-icon-res" }),
			React.createElement(
				"div",
				{ className: "tips-word" },
				React.createElement(
					"p",
					{ className: "p1" },
					this.props.text
				)
			)
		);
	}
});

module.exports = NoRecord;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var NoRecord = __webpack_require__(3);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			goods: [],
			sum: 0,
			orderList: [],
			layerLoading: false,
			layerShow: false,
			currentNo: 0
		};
	},
	componentDidMount: function componentDidMount() {
		this._getOrderList();
	},
	_getOrderList: function _getOrderList() {
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		var resultArray;
		this.state.currentNo++;
		this.setState({ layerLoading: true });
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/order/fetchListPaging',
			data: {
				userId: user_id,
				currentNo: this.state.currentNo
			},
			async: true,
			cache: false,
			success: function (res) {
				resultArray = res.result;
				if (res.code == 0) {
					if (this.state.orderList.length > 0) {
						for (var i = 0; i < resultArray.length; i++) {
							this.state.orderList.push(resultArray[i]);
						}
					} else {
						this.setState({
							orderList: res.result
						});
					}
					this.setState({
						layerLoading: false //关闭loading
					});
					console.log(this.state.orderList);
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
	_tabClick: function _tabClick(index) {
		var tabPanes = document.getElementsByClassName('tab-pane');
		var tabs = document.getElementsByClassName('order-tabs')[0].getElementsByTagName('li');

		for (var i = 0; i < tabPanes.length; i++) {
			tabPanes[i].className = 'tab-pane';
			tabs[i].className = '';
		}
		tabPanes[index].className = "tab-pane block";
		tabs[index].className = 'active';
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
						'\u8BA2\u5355\u5217\u8868'
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
					{ className: 'order' },
					React.createElement(
						'div',
						{ className: 'order-tabs' },
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								{ className: 'active', onClick: this._tabClick.bind(this, 0) },
								'\u5168\u90E8'
							),
							React.createElement(
								'li',
								{ onClick: this._tabClick.bind(this, 1) },
								'\u5F85\u4ED8\u6B3E'
							),
							React.createElement(
								'li',
								{ onClick: this._tabClick.bind(this, 2) },
								'\u5F85\u53D1\u8D27'
							),
							React.createElement(
								'li',
								{ onClick: this._tabClick.bind(this, 3) },
								'\u5F85\u6536\u8D27'
							),
							React.createElement(
								'li',
								{ onClick: this._tabClick.bind(this, 4) },
								'\u5DF2\u5B8C\u6210'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'tab-content' },
						React.createElement(
							'div',
							{ className: 'tab-pane block' },
							React.createElement(
								'div',
								{ style: { display: 'none' } },
								React.createElement(NoRecord, { text: '\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u53551' }),
								React.createElement(
									'div',
									{ className: 'btn-box' },
									React.createElement(
										'a',
										{ href: '###', className: 'btn btn-confirm' },
										'\u53BB\u901B\u901B'
									)
								)
							),
							this.state.orderList.map(function (item, index) {
								var orderState;
								switch (item.orderState) {
									case 1:
										orderState = '买家已付款';
										break;
									case 0:
										orderState = "等待买家付款";
										break;
									case -1:
										orderState = "支付失败";
										break;
								}
								return React.createElement(
									'div',
									{ className: 'order-item', key: index },
									React.createElement(
										'div',
										{ className: 'order-details-content' },
										React.createElement(
											'div',
											{ className: 'details-content-wrap' },
											React.createElement(
												'div',
												{ className: 'footer-title clearfix' },
												React.createElement(
													'span',
													{ className: 'footer-title-left' },
													'\u8BA2\u5355\u72B6\u6001\uFF1A'
												),
												React.createElement(
													'span',
													{ className: 'footer-title-right' },
													orderState
												)
											),
											React.createElement(
												'div',
												{ className: 'details-content-prod' },
												React.createElement(
													'div',
													{ className: 'prod-wrap display-box' },
													React.createElement(
														'p',
														{ className: 'prod-pic box-flex' },
														React.createElement('img', { src: item.src })
													),
													React.createElement(
														'div',
														{ className: 'prod-cont box-flex' },
														React.createElement(
															'p',
															{ className: 'prod-name' },
															item.medicinal_info
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
																	item.medicinal_amount
																)
															),
															React.createElement(
																'span',
																{
																	className: 'price-num' },
																'x ',
																item.medicinal_num
															)
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
													item.orderAmount
												)
											),
											React.createElement(
												'p',
												{ className: 'footer-title clearfix' },
												React.createElement(
													'span',
													{ className: 'footer-title-left' },
													'\u8BA2\u5355\u65F6\u95F4\uFF1A'
												),
												React.createElement(
													'span',
													{ className: 'fr' },
													item.orderTime
												)
											)
										)
									)
								);
							})
						),
						React.createElement(
							'div',
							{ className: 'tab-pane' },
							React.createElement(NoRecord, { text: '\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u53552' }),
							React.createElement(
								'div',
								{ className: 'btn-box' },
								React.createElement(
									'a',
									{ href: '###', className: 'btn btn-confirm' },
									'\u53BB\u901B\u901B'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'tab-pane' },
							React.createElement(NoRecord, { text: '\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u53553' }),
							React.createElement(
								'div',
								{ className: 'btn-box' },
								React.createElement(
									'a',
									{ href: '###', className: 'btn btn-confirm' },
									'\u53BB\u901B\u901B'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'tab-pane' },
							React.createElement(NoRecord, { text: '\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u53554' }),
							React.createElement(
								'div',
								{ className: 'btn-box' },
								React.createElement(
									'a',
									{ href: '###', className: 'btn btn-confirm' },
									'\u53BB\u901B\u901B'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'tab-pane' },
							React.createElement(NoRecord, { text: '\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u53555' }),
							React.createElement(
								'div',
								{ className: 'btn-box' },
								React.createElement(
									'a',
									{ href: '###', className: 'btn btn-confirm' },
									'\u53BB\u901B\u901B'
								)
							)
						),
						React.createElement(
							'a',
							{ href: 'javascript:;', className: 'add-more', onClick: this._getOrderList },
							'\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A'
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