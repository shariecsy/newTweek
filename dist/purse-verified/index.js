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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			layerLoading: false
		};
	},
	_btnClsChange: function _btnClsChange() {
		this.refs.verifyBtn.className = 'csn-btn active';
	},
	_clearBtnShow: function _clearBtnShow(e) {
		var children = e.target.parentNode.children;
		if (e.target.value) {
			children[2].className = "clear am-icon-close block"; //显示删除按钮
		}
	},
	_clearInputText: function _clearInputText(e) {
		var children = e.target.parentNode.children;
		if (children[1].value) {
			children[1].value = '';
			children[2].className = "clear am-icon-close"; //隐藏删除按钮
		}
	},
	_clearBtnHide: function _clearBtnHide(e) {
		var children = e.target.parentNode.children;
		children[2].className = "clear am-icon-close"; //隐藏删除按钮
	},
	componentDidMount: function componentDidMount() {},
	_checkVerified: function _checkVerified() {
		var _this = this;
		this.setState({
			layerLoading: true //打开loading
		});
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'get',
			url: '../libs/json/purse_verified.json',
			// data:{
			// 	name:_this.refs.name.value,
			// 	id_num:_this.refs.idNum.value
			// },
			success: function success(res) {
				if (res.code == 0) {
					alert("验证通过！");
					// window.location = "../index/index.html";
					_this.setState({
						// layerLoading:false  //关闭loading
					});
				} else {
					_this.setState({
						// layerLoading:false  //关闭loading
					});
					res.result;
				}
			},
			error: function error(res) {
				_this.setState({
					// layerLoading:false  //关闭loading
				});
				console.log(res);
			}
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
						'\u9A8C\u8BC1\u8EAB\u4EFD\u4FE1\u606F'
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
					{ className: 'bindCard-box' },
					React.createElement(
						'section',
						{ className: 'csn-m-scroll' },
						React.createElement(
							'ul',
							{ className: 'csn-box csn-list' },
							React.createElement(
								'li',
								null,
								React.createElement(
									'label',
									null,
									'\u59D3\u540D'
								),
								React.createElement('input', { type: 'text', className: 'input-txt', placeholder: '\u8BF7\u8F93\u5165\u6301\u5361\u4EBA\u59D3\u540D', ref: 'name', onChange: this._clearBtnShow, onBlur: this._clearBtnHide, onFocus: this._clearBtnShow }),
								React.createElement('i', { className: 'clear am-icon-close', onClick: this._clearInputText })
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									'label',
									null,
									'\u8EAB\u4EFD\u8BC1\u53F7'
								),
								React.createElement('input', { type: 'text', className: 'input-txt border-0', placeholder: '\u8BF7\u8F93\u5165\u6301\u5361\u4EBA\u8EAB\u4EFD\u8BC1\u53F7', ref: 'idNum', onChange: this._clearBtnShow, onBlur: this._clearBtnHide, onFocus: this._clearBtnShow }),
								React.createElement('i', { className: 'clear am-icon-close', onClick: this._clearInputText })
							)
						),
						React.createElement(
							'a',
							{ href: 'javascript:void(0);', className: 'csn-btn disabled', ref: 'verifyBtn', onClick: this._checkVerified },
							'\u9A8C\u8BC1\u8EAB\u4EFD'
						),
						React.createElement(
							'footer',
							{ className: 'csn-footer' },
							React.createElement(
								'div',
								null,
								'\u672C\u670D\u52A1\u7531\u4FE1\u8D26\u5B9D\u63D0\u4F9B\u652F\u6301'
							)
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

/***/ })

/******/ });