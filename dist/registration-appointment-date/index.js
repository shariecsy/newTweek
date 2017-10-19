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
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			doctorList: [{
				imgUrl: '../images/hospitalLogo.jpg',
				name: '陈泽伟',
				title: '儿内科主治',
				isExpired: true,
				clickHandler: function clickHandler() {}

			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				name: '唐树生',
				title: '儿内科主治',
				remainingSum: '32',
				isExpired: false,
				clickHandler: function () {
					window.location = "../registration-appointment-time/index.html";
				}.bind(this)

			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				name: '唐树生',
				title: '儿内科主治',
				remainingSum: '32',
				isExpired: false,
				clickHandler: function clickHandler() {}

			}],
			isExpired: false, //是否已经超过挂号的截止时间
			showMore: false, //展示更多的日期
			noticeShow: true //展示挂号提示
		};
	},
	_showMoreDate: function _showMoreDate() {
		this.setState({
			showMore: !this.state.showMore
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
					null,
					React.createElement(
						'div',
						{ className: 'date-container' },
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
								)
							),
							React.createElement(
								'ul',
								{ className: this.state.showMore ? "date-list clearfix" : "none" },
								React.createElement(
									'li',
									null,
									'20'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'showMore', onClick: this._showMoreDate },
							React.createElement(
								'span',
								null,
								this.state.showMore ? "展开" : "收起"
							),
							React.createElement('i', { className: this.state.showMore ? "icon am-icon-angle-down am-icon-md" : "icon am-icon-angle-up am-icon-md" })
						)
					),
					React.createElement(
						'div',
						{ className: this.state.noticeShow ? "app-notice" : "none" },
						React.createElement('i', { className: 'am-icon-info-circle' }),
						'\u8D85\u8FC717:15\u4E4B\u540E\u4E0D\u53EF\u518D\u6302\u5F53\u5929\u7684\u53F7\u3002'
					),
					React.createElement(
						'div',
						{ className: 'choose-doctor' },
						React.createElement(
							'div',
							{ className: this.state.isExpired ? '' : "none" },
							React.createElement(
								'p',
								null,
								React.createElement('i', { className: 'am-icon-plus-square am-icon-lg' })
							),
							React.createElement(
								'p',
								null,
								'\u5DF2\u8D85\u8FC7\u5F53\u73ED\u6302\u53F7\u7684\u622A\u6B62\u65F6\u95F4'
							)
						),
						React.createElement(
							'div',
							{ className: 'item-list' },
							React.createElement(
								'ul',
								{ className: 'am-list' },
								this.state.doctorList.map(function (obj, index) {
									var rightCls = "item-list-right am-icon-angle-right";
									return React.createElement(
										'li',
										{ className: 'am-g', key: index, onClick: obj.clickHandler },
										React.createElement('img', { className: 'item-list-left', src: obj.imgUrl }),
										React.createElement(
											'div',
											{ className: 'item-list-content doctor-list-content' },
											React.createElement(
												'p',
												null,
												obj.name
											),
											React.createElement(
												'p',
												null,
												React.createElement(
													'span',
													null,
													obj.title
												)
											),
											React.createElement(
												'p',
												null,
												React.createElement(
													'span',
													{ className: obj.isExpired ? "full" : "none" },
													'\u6EE1\u8BCA'
												),
												React.createElement(
													'span',
													{ className: obj.isExpired ? "none" : "notFull" },
													'\u5269\u4F59\u53F7\u6E90\uFF1A',
													obj.remainingSum
												)
											)
										),
										React.createElement('span', { className: obj.isExpired ? "none" : rightCls })
									);
								})
							)
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });