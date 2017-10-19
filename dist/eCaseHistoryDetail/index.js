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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 36:
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
			data: {},
			layerLoading: false,
			layerShow: false
		};
	},
	componentDidMount: function componentDidMount() {
		this._getMedicalRecords();
	},
	_getMedicalRecords: function _getMedicalRecords() {
		var id = GetQueryString.getQueryString('id');
		// var id=2;
		this.setState({ layerLoading: true });
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/records/getDetail',
			// url: 'http://localhost:8080/v1.0/records/getDetail',
			data: { id: id },
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false, //关闭loading
						data: res.result[0]
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
						'\u7535\u5B50\u75C5\u5386'
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
					{ ref: 'e_detail', className: 'my-message e-case-history-detail' },
					React.createElement(
						'h4',
						null,
						this.state.data.hospital
					),
					React.createElement(
						'div',
						{ className: 'basic-info' },
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								null,
								React.createElement(
									'label',
									null,
									'\u79D1\u5BA4\uFF1A'
								),
								this.state.data.department
							),
							React.createElement(
								'li',
								null,
								React.createElement(
									'label',
									null,
									'\u4E3B\u6CBB\u533B\u751F\uFF1A'
								),
								this.state.data.doctor
							)
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'label',
								null,
								'\u533B\u5E08\u8BCA\u65AD\uFF1A'
							),
							this.state.data.result
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'label',
								null,
								'\u5C31\u8BCA\u65F6\u95F4\uFF1A'
							),
							this.state.data.visit_time
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'label',
								null,
								'\u75C5\u5386\u91C7\u96C6\u65E5\u671F\uFF1A'
							),
							this.state.data.collect_time
						)
					),
					React.createElement(
						'div',
						{ className: 'case-description' },
						React.createElement(
							'p',
							null,
							React.createElement(
								'label',
								null,
								'\u75C5\u60C5\u63CF\u8FF0\uFF1A'
							),
							this.state.data.symptom
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'label',
								null,
								'\u670D\u836F\u8BB0\u5F55\uFF1A'
							),
							this.state.data.dosing_hisotry
						)
					),
					React.createElement(
						'div',
						{ className: 'attachment' },
						React.createElement(
							'div',
							{ className: 'attachment-item' },
							React.createElement(
								'ul',
								{ className: 'clearfix' },
								React.createElement(
									'li',
									{ className: 'attachment-label' },
									React.createElement(
										'label',
										null,
										'\u5F71\u50CF\uFF1A'
									)
								),
								React.createElement(
									'li',
									{ className: 'attachment-img' },
									React.createElement('img', { src: this.state.data.CT_url, alt: '' })
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'attachment' },
						React.createElement(
							'div',
							{ className: 'attachment-item' },
							React.createElement(
								'ul',
								{ className: 'clearfix' },
								React.createElement(
									'li',
									{ className: 'attachment-label' },
									React.createElement(
										'label',
										null,
										'\u5316\u9A8C\u5355\uFF1A'
									)
								),
								React.createElement(
									'li',
									{ className: 'attachment-img' },
									React.createElement('img', { src: this.state.data.report_url, alt: '' })
								)
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