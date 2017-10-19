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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			showLayer: false,
			toComplete: function toComplete() {
				window.location = "../toCompleteInfo/index.html";
			}

		};
	},
	_addFamily: function _addFamily() {
		window.location = "../toCompleteInfo-family";
	},
	_selectPayment: function _selectPayment(index) {
		var paymentEle = document.getElementsByClassName('am-icon-check');
		for (var i = 0; i < paymentEle.length; i++) {

			paymentEle[i].className = "list-right am-icon-check none";
		}
		paymentEle[index].className = "list-right am-icon-check";
	},
	_showLayer: function _showLayer() {
		this.setState({
			showLayer: true
		});
	},
	_closeLayer: function _closeLayer() {
		this.setState({
			showLayer: false
		});
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
						'\u6302\u53F7'
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
					{ className: 'regist-confirm' },
					React.createElement(
						'div',
						{ className: 'info' },
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								{ className: 'clearfix' },
								React.createElement(
									'span',
									{ className: 'fl' },
									'\u59D3\u540D'
								),
								React.createElement(
									'span',
									{ className: 'fr right-item' },
									'\u8C2D\u6885'
								)
							),
							React.createElement(
								'li',
								{ className: 'clearfix' },
								React.createElement(
									'span',
									{ className: 'fl' },
									'\u79D1\u5BA4'
								),
								React.createElement(
									'span',
									{ className: 'fr right-item' },
									'\u513F\u7AE5\u80BE\u5185/\u9057\u5C3F\u4E13\u79D1\uFF08\u513F\uFF09'
								)
							),
							React.createElement(
								'li',
								{ className: 'clearfix' },
								React.createElement(
									'span',
									{ className: 'fl' },
									'\u5C31\u8BCA\u65F6\u95F4'
								),
								React.createElement(
									'span',
									{ className: 'fr right-item' },
									'2017-06-17 08:30-09:00'
								)
							),
							React.createElement(
								'li',
								{ className: 'clearfix' },
								React.createElement(
									'span',
									{ className: 'fl' },
									'\u6302\u53F7\u8D39'
								),
								React.createElement(
									'span',
									{ className: 'fr price' },
									'4\u5143'
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'choose-patient' },
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								{ className: 'title' },
								'\u9009\u62E9\u5C31\u8BCA\u4EBA'
							),
							React.createElement(
								'li',
								{ className: 'my-info' },
								React.createElement(
									'p',
									{ className: 'notice' },
									'\uFF08\u672C\u4EBA\u4FE1\u606F\u6CA1\u5B8C\u5584\uFF09\uFF08\u672C\u4EBA\u4FE1\u606F\u6CA1\u5B8C\u5584\uFF09\uFF08\u672C\u4EBA\u4FE1\u606F\u6CA1\u5B8C\u5584\uFF09'
								),
								React.createElement(
									'p',
									{ className: 'cardNo' },
									'\u5361\u53F7\uFF1A'
								),
								React.createElement(
									'span',
									{ className: 'list-right bind-card', onClick: this._showLayer },
									'\u5173\u8054\u5C31\u8BCA\u5361'
								)
							),
							React.createElement(
								'li',
								{ className: 'add-patient', onClick: this._addFamily },
								'\u6DFB\u52A0\u5BB6\u4EBA',
								React.createElement('span', { className: 'list-right right-arrow am-icon-angle-right' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'description' },
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								{ className: 'title' },
								'\u75C5\u60C5\u63CF\u8FF0'
							),
							React.createElement(
								'li',
								null,
								React.createElement('textarea', { placeholder: '\u8BF7\u8F93\u5165\u75C5\u60C5\u63CF\u8FF0' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'payment' },
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								{ className: 'title' },
								'\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F'
							),
							React.createElement(
								'li',
								{ onClick: this._selectPayment.bind(this, 0) },
								React.createElement('img', { src: '../images/hospitalLogo.jpg', alt: '' }),
								React.createElement(
									'span',
									{ className: 'method' },
									'\u94F6\u8054\u652F\u4ED8'
								),
								React.createElement('span', { className: 'list-right am-icon-check' })
							),
							React.createElement(
								'li',
								{ onClick: this._selectPayment.bind(this, 1) },
								React.createElement('img', { src: '../images/hospitalLogo.jpg', alt: '' }),
								React.createElement(
									'span',
									{ className: 'method' },
									'\u533B\u4FDD\u652F\u4ED8'
								),
								React.createElement('span', { className: 'list-right am-icon-check none' })
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'btn-box' },
						React.createElement(
							'a',
							{ href: '###', className: 'btn btn-confirm' },
							'\u786E\u8BA4\u6302\u53F7'
						)
					)
				)
			),
			React.createElement(
				Layer,
				{ show: this.state.showLayer, layerCls: 'confirm-layer' },
				React.createElement(
					Layer.Title,
					null,
					'\u6E29\u99A8\u63D0\u793A'
				),
				React.createElement(
					Layer.Text,
					null,
					'\u8BF7\u5148\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F\u3002'
				),
				React.createElement(Layer.Button, { confirm: this.state.toComplete.bind(this), cancel: this._closeLayer })
			),
			React.createElement(Layer.Background, { show: this.state.showLayer })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });