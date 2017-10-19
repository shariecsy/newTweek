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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
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

/***/ 51:
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
			msg: ''
		};
	},
	componentDidMount: function componentDidMount() {},
	_loginHandler: function _loginHandler() {
		var username = this.refs.username.value;
		var opwd = this.refs.pwd.value;
		if (username == '' || opwd == '') {
			this._layerShow("请输入用户密和密码！");
			return;
		}
		var pwd = CryptoUtils.getSha512(opwd);
		this.setState({
			layerLoading: true //打开loading
		});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/login',
			data: {
				username: username,
				pwd: pwd
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow('登录成功！', function () {
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_ID_KEY, res.result.userId);
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_NAME_KEY, res.result.mobileNo);
						LocalStorageUtil.set(STORAGE_CONSTANTS.USER_IMG_KEY, res.result.userImg);
						window.location.href = '../index/index.html';
					});
				} else {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow(res.result.msg);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭loading
				});
				this._layerShow('服务器异常:' + res);
				console.log(res);
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
		return React.createElement(
			'div',
			null,
			React.createElement(
				Container,
				null,
				React.createElement(
					'section',
					{ className: 'login' },
					React.createElement(
						'div',
						{ className: 'logo' },
						React.createElement('img', { src: '../images/LOGO.png', alt: '\u533B\u94FE\u76DFApp' })
					),
					React.createElement(
						'div',
						{ className: 'login-enter' },
						React.createElement(
							'p',
							null,
							React.createElement('i', { className: 'am-icon-user am-icon-sm' }),
							React.createElement(
								'span',
								null,
								React.createElement('input', { type: 'text', ref: 'username', className: 'login-input', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u6216\u8D26\u53F7\u540D' })
							)
						),
						React.createElement(
							'p',
							null,
							React.createElement('i', { className: 'am-icon-lock am-icon-sm' }),
							React.createElement('input', { type: 'password', ref: 'pwd', className: 'login-input', placeholder: '\u8BF7\u8F93\u51656-16\u4F4D\u5BC6\u7801' })
						),
						React.createElement(
							'p',
							{ className: 'p-button' },
							React.createElement(
								'button',
								{ className: 'am-btn am-btn-block am-round', onClick: this._loginHandler },
								'\u767B\u5F55'
							)
						),
						React.createElement(
							'p',
							{ className: 'p-link' },
							React.createElement(
								'a',
								{ href: '../register/index.html', className: 'fl' },
								'\u6CE8\u518C\u8D26\u53F7'
							),
							React.createElement(
								'a',
								{ href: '../forgetPassword/index.html', className: 'fr' },
								'\u5FD8\u8BB0\u5BC6\u7801\uFF1F'
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
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });