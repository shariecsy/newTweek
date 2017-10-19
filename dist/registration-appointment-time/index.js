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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			listData: [{
				time: "08:00-08:30",
				price: "9元",
				isFull: false,
				handleClick: function handleClick() {
					window.location = "../registration-confirm/index.html";
				}
			}, {
				time: "08:00-08:30",
				price: "9元",
				isFull: true,
				handleClick: function handleClick() {}
			}, {
				time: "08:00-08:30",
				price: "9元",
				isFull: true,
				handleClick: function handleClick() {}
			}, {
				time: "08:00-08:30",
				price: "9元",
				isFull: false,
				handleClick: function handleClick() {
					window.location = "../registration-confirm/index.html";
				}
			}, {
				time: "08:00-08:30",
				price: "9元",
				isFull: true,
				handleClick: function handleClick() {}
			}],
			showMore: false,
			showMoreDate: false,
			favourite: false,
			layerShow: false,
			msg: ''
		};
	},
	_showMoreBrief: function _showMoreBrief() {
		this.setState({
			showMore: !this.state.showMore
		});
	},
	_showMoreDate: function _showMoreDate() {
		this.setState({
			showMoreDate: !this.state.showMoreDate
		});
	},
	_favourite: function _favourite() {
		this.setState({
			favourite: !this.state.favourite
		});
		if (this.state.favourite) {
			this._layerShow('取消收藏');
		} else {
			this._layerShow('已收藏');
		}
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
					{ className: 'doctor-info' },
					React.createElement(
						'div',
						{ className: this.state.showMore ? "" : "fold" },
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								{ className: 'box-left' },
								React.createElement('img', { src: '../images/hospitalLogo.jpg', alt: '' })
							),
							React.createElement(
								'li',
								{ className: 'box-right' },
								React.createElement(
									'div',
									{ className: 'brief-title' },
									React.createElement(
										'span',
										{ className: 'name' },
										'\u949F\u5BCC'
									),
									React.createElement(
										'span',
										{ className: 'title' },
										'\u95E8\u8BCA\u80BE\u4E13\u79D1\u4E3B\u4EFB'
									),
									React.createElement(
										'span',
										{ className: this.state.favourite ? "favourite cancel" : "favourite confirm", onClick: this._favourite },
										React.createElement('i', { className: 'icon am-icon-star' }),
										this.state.favourite ? "取消收藏" : "收藏"
									)
								),
								React.createElement(
									'div',
									{ className: 'brief' },
									'\u7B80\u4ECB\uFF1A\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74\u4ECE\u4E8B\u5C0F\u513F\u5185\u79D1\u4E34\u5E8A\u533B\u7597\u5DE5\u4F5C\u591A\u5E74'
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'showMore', onClick: this._showMoreBrief },
						this.state.showMore ? "收起" : "展开"
					)
				),
				React.createElement(
					'div',
					{ className: 'doctor-date' },
					React.createElement(
						'div',
						{ className: 'date-container' },
						React.createElement(
							'div',
							{ className: 'showMore', onClick: this._showMoreDate },
							React.createElement(
								'ul',
								{ className: 'clearfix' },
								React.createElement(
									'li',
									{ className: 'fl' },
									React.createElement(
										'span',
										null,
										'2017-06-14'
									)
								),
								React.createElement(
									'li',
									{ className: 'fr' },
									React.createElement(
										'span',
										null,
										'\u5176\u4ED6\u65E5\u671F'
									),
									React.createElement('i', { className: this.state.showMoreDate ? "icon am-icon-angle-down am-icon-md" : "icon am-icon-angle-up am-icon-md" })
								)
							)
						),
						React.createElement(
							'div',
							{ className: this.state.showMoreDate ? "" : "none" },
							React.createElement(
								'div',
								{ className: 'date-box' },
								React.createElement(
									'ul',
									{ className: 'day-list clearfix' },
									React.createElement(
										'li',
										null,
										'\u4E8C'
									),
									React.createElement(
										'li',
										null,
										'\u4E09'
									),
									React.createElement(
										'li',
										null,
										'\u56DB'
									),
									React.createElement(
										'li',
										null,
										'\u4E94'
									),
									React.createElement(
										'li',
										null,
										'\u516D'
									),
									React.createElement(
										'li',
										null,
										'\u65E5'
									),
									React.createElement(
										'li',
										null,
										'\u4E00'
									)
								),
								React.createElement(
									'ul',
									{ className: 'date-list clearfix' },
									React.createElement(
										'li',
										{ className: 'active' },
										'\u4ECA'
									),
									React.createElement(
										'li',
										{ className: 'grey' },
										'14'
									),
									React.createElement(
										'li',
										{ className: 'grey' },
										'15'
									),
									React.createElement(
										'li',
										{ className: 'grey' },
										'16'
									),
									React.createElement(
										'li',
										null,
										'17'
									),
									React.createElement(
										'li',
										null,
										'18'
									),
									React.createElement(
										'li',
										null,
										'19'
									),
									React.createElement(
										'li',
										null,
										'20'
									)
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'doctor-time' },
						React.createElement(
							'ul',
							{ className: 'am-list' },
							this.state.listData.map(function (obj, index) {
								var rightCls = "item-list-right am-icon-angle-right";
								return React.createElement(
									'li',
									{ className: 'am-g', key: index, onClick: obj.handleClick },
									React.createElement(
										'span',
										{ className: obj.isFull ? "" : "blue" },
										obj.time
									),
									React.createElement(
										'span',
										{ className: obj.isFull ? "price" : "price orange" },
										obj.price
									),
									React.createElement(
										'span',
										{ className: obj.isFull ? "status" : "status blue" },
										obj.isFull ? "满号" : "可挂号"
									),
									React.createElement('span', { className: obj.isFull ? "none" : rightCls })
								);
							})
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
			React.createElement(Layer.Background, { show: this.state.layerShow })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });