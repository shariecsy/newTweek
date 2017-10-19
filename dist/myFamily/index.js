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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			layerLoading: false,
			layerShow: false,
			msg: '',
			personal: {},
			family: []
		};
	},
	componentDidMount: function componentDidMount() {
		var _this = this;
		_this.setState({
			layerLoading: true //打开loading
		});
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'get',
			url: '../libs/json/my_family.json',
			success: function success(res) {
				if (res.code == 0) {
					_this.setState({
						layerLoading: false //关闭loading
					});
					_this.setState({
						personal: res.data.personal,
						family: res.data.family,
						layerLoading: false //关闭loading
					});
				} else {
					res.result;
					_this.setState({
						layerLoading: false //关闭loading
					});
				}
			},
			error: function error(res) {
				console.log(res);
				_this._layerShow('网络异常');
				_this.setState({
					layerLoading: false //关闭loading
				});
			}
		});
	},
	_toAddFamily: function _toAddFamily() {
		window.location = "../addFamily/index.html";
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
		var _personal = this.state.personal;
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
						'\u6211\u7684\u5BB6\u4EBA'
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
					{ className: 'my-message my-family' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement(
								'a',
								{ href: '../toCompleteInfo/' },
								React.createElement(
									'div',
									{ className: 'portrait' },
									React.createElement('img', { src: _personal.img_url ? _personal.img_url : "https://yct.968309.com/mobileapp/images/avatar.png" })
								),
								React.createElement(
									'div',
									{ className: 'text-box' },
									React.createElement(
										'p',
										{ className: 'title' },
										_personal.name ? _personal.name : "信息未完善",
										React.createElement(
											'i',
											null,
											'(\u672C\u4EBA)'
										)
									),
									React.createElement(
										'p',
										{ className: 'gender' },
										React.createElement('i', { className: _personal.male == "男" ? "am-icon-mars am-icon-fw" : "am-icon-venus am-icon-fw" }),
										' ',
										_personal.birth ? _personal.birth : "未知"
									)
								)
							)
						),
						this.state.family.length > 0 ? this.state.family.map(function (v, i) {
							return React.createElement(
								'li',
								null,
								React.createElement(
									'a',
									{ href: 'javascript://' },
									React.createElement(
										'div',
										{ className: 'portrait' },
										React.createElement('img', { src: v.img_url ? v.img_url : "https://yct.968309.com/mobileapp/images/avatar.png" })
									),
									React.createElement(
										'div',
										{ className: 'text-box' },
										React.createElement(
											'p',
											{ className: 'title' },
											v.name,
											React.createElement(
												'i',
												null,
												'(',
												v.relation,
												')'
											)
										),
										React.createElement(
											'p',
											{ className: 'gender' },
											React.createElement('i', { className: v.male == "男" ? "am-icon-mars am-icon-fw" : "am-icon-venus am-icon-fw" }),
											' ',
											v.birth
										)
									)
								)
							);
						}) : ""
					),
					React.createElement(
						'p',
						{ className: 'tips' },
						React.createElement('i', { className: 'am-icon-exclamation-circle am-icon-fw' }),
						'\u6E29\u99A8\u63D0\u793A\uFF1A\u6DFB\u52A0\u5BB6\u4EBA\u8BB0\u5F55\u540C\u65F6\u4E0D\u80FD\u8D85\u8FC75\u4F4D\u3002'
					),
					React.createElement(
						'div',
						{ className: 'bottom-btn' },
						React.createElement(
							'button',
							{ className: 'am-btn am-btn-primary am-round am-btn-block', onClick: this._toAddFamily },
							'\u6DFB\u52A0\u5BB6\u4EBA'
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
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });