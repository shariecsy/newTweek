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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			show: false,
			btnText: "获取验证码",
			codeBtnClass: "am-btn am-btn-primary am-round am-btn-xs",
			codeSendMsg: false,
			totalTime: 60,
			cbStyle: 'am-icon-circle-o',
			checked: false,
			layerShow: false,
			msg: '',
			layerShowTimer: null,
			getCodeTimer: null,
			layerLoading: false
		};
	},
	_getCode: function _getCode() {
		var mobileNo = this.refs.mobileNo.value;
		if (!MobileNoUtil.validate(mobileNo)) {
			this._layerShow('手机号码不正确！', null, 1000);
			return;
		}
		// this._layerShow('提交数据中...', null, 2 * 1000);
		this.setState({
			layerLoading: true //打开loading
		});
		this.refs.getCode_btn.disabled = true;
		this._countDownBtn();
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/getCode',
			data: {
				mobileNo: mobileNo
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					var msg = res.result.msg;
					this.setState({
						codeSendMsg: true,
						layerLoading: false //关闭loading
					});
					this._layerShow(msg);
				} else {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._clearGetCodeBtn();
					var msg = res.result.msg;
					this._layerShow(msg);
					this.refs.getCode_btn.disabled = false;
				}
			}.bind(this),
			error: function (res) {
				console.log(res);
				this.refs.getCode_btn.disabled = false;
				this.setState({
					layerShow: true,
					layerLoading: false //关闭loading
				});
				this._layerShow('网络异常');
			}.bind(this)
		});
	},
	_countDownBtn: function _countDownBtn() {
		this.state.getCodeTimer = setInterval(function () {
			this.state.totalTime--;
			this.setState({
				btnText: this.state.totalTime + "s"
			});
			if (this.state.totalTime < 1) {
				this._clearGetCodeBtn();
			}
		}.bind(this), 1000);
	},
	_clearGetCodeBtn: function _clearGetCodeBtn() {
		clearInterval(this.state.getCodeTimer);
		this.refs.getCode_btn.disabled = false;
		this.setState({
			codeBtnClass: "am-btn am-btn-primary am-round am-btn-xs",
			btnText: "获取验证码",
			totalTime: 60
		});
	},
	_toSetPassword: function _toSetPassword() {
		var mobileNo = this.refs.mobileNo.value;
		var code = this.refs.code.value;
		this._layerShow('提交数据中...', null, 30 * 1000);
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/checkCode',
			data: {
				mobileNo: mobileNo,
				code: code
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this._clearGetCodeBtn();
					this._layerShow(res.result.msg, function () {
						LocalStorageUtil.set(STORAGE_CONSTANTS.REGIST_MOBILE_NO_KEY, mobileNo);
						window.location = '../register-password/index.html';
					});
				} else {
					this._layerShow(res.result.msg);
				}
			}.bind(this),
			error: function error(res) {
				this._layerHide();
				console.log(res);
			}
		});
	},
	_check: function _check() {
		if (this.state.checked) {
			this.state.checked = false;
			this.setState({
				cbStyle: 'am-icon-circle-o'
			});
		} else {
			this.state.checked = true;
			this.setState({
				cbStyle: 'am-icon-check-circle-o'
			});
		}
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
						'\u6CE8\u518C\u8D26\u53F7'
					)
				)
			),
			React.createElement(
				'div',
				{ ref: 'main' },
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
								'\u624B\u673A\u53F7\u7801'
							),
							React.createElement('input', { type: 'tel', ref: 'mobileNo', placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7\u7801', maxLength: '11' }),
							React.createElement(
								'button',
								{ type: 'button', ref: 'getCode_btn', className: this.state.codeBtnClass, onClick: this._getCode, id: 'codeBtn' },
								this.state.btnText
							)
						),
						React.createElement(
							'div',
							{ className: 'item' },
							React.createElement(
								'span',
								{ className: 'label' },
								'\u9A8C\u8BC1\u7801'
							),
							React.createElement('input', { type: 'text', ref: 'code', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' })
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'app-notice' },
					React.createElement('i', { className: this.state.cbStyle, onClick: this._check }),
					React.createElement(
						'span',
						null,
						'\u6CE8\u518C\u5373\u4EE3\u8868\u60A8\u5DF2\u9605\u8BFB'
					),
					React.createElement(
						'a',
						{ href: '../agreement/index.html' },
						'\u300A\u5E73\u53F0\u534F\u8BAE\u300B'
					)
				),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'button',
						{ className: 'btn btn-confirm', ref: 'btn_next', disabled: !this.state.checked, onClick: this._toSetPassword },
						'\u4E0B\u4E00\u6B65'
					)
				),
				this.state.codeSendMsg ? React.createElement(
					'div',
					{ className: 'app-notice' },
					'\u77ED\u4FE1\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u7559\u610F\u300260\u79D2\u5185\u6536\u4E0D\u5230\u53EF\u518D\u6B21\u70B9\u51FB\u53D1\u9001'
				) : "",
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
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });