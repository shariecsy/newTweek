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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			passwordShow: false,
			layerShow: false,
			msg: '',
			layerShowTimer: null,
			layerLoading: false
		};
	},
	_passwordShow: function _passwordShow() {
		this.setState({
			passwordShow: !this.state.passwordShow
		});
	},
	_reset: function _reset() {
		var pwd = CryptoUtils.getSha512(this.refs.pwd.value);
		var mobileNo = LocalStorageUtil.get(STORAGE_CONSTANTS.REGIST_MOBILE_NO_KEY);
		if (mobileNo == '') {
			this._layerShow('请输入密码！');
			return;
		}
		// this._layerShow('提交数据中...', null, 30 * 1000);
		this.setState({
			layerLoading: true //打开loading
		});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/resetPwd',
			data: {
				mobileNo: mobileNo,
				pwd: pwd
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false //关闭 loading
					});
					this._layerShow('密码重置成功！', function () {
						//						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_ID_KEY, mobileNo);
						window.location.href = '../index.html';
					});
				} else {
					this.setState({
						layerLoading: false //关闭 loading
					});
					this._layerShow(res.result.msg);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭 loading
				});
				console.log(res);
				this._layerShow('网络异常');
			}.bind(this)
		});
	},
	_layerShow: function _layerShow(text, fn, time) {
		var me = this;
		clearTimeout(this.state.layerShowTimer);
		this.setState({
			layerShow: true,
			msg: text
		});
		this.state.layerShowTimer = setTimeout(function () {
			me.setState({
				layerShow: false,
				msg: ''
			});
			fn && fn();
		}, time || 2000);
	},
	_layerHide: function _layerHide() {
		clearTimeout(this.state.layerShowTimer);
		this.setState({
			layerShow: false,
			msg: ''
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
						'\u4FEE\u6539\u5BC6\u7801'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ className: 'register-box' },
					React.createElement(
						'div',
						{ className: 'item' },
						React.createElement(
							'span',
							{ className: 'label' },
							'\u5BC6\u7801'
						),
						React.createElement('input', { ref: 'pwd', type: this.state.passwordShow ? "text" : "password", placeholder: '\u8BF7\u8F93\u5165\u5BC6\u78016-16\u4F4D' }),
						React.createElement(
							'a',
							{ href: 'javascript:;', onClick: this._passwordShow },
							React.createElement('i', { className: this.state.passwordShow ? "icon am-icon-eye middle active" : "icon am-icon-eye middle" })
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'a',
						{ href: 'javascript:;', className: 'btn btn-confirm', onClick: this._reset },
						'\u4FEE\u6539'
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