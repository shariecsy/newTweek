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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	componentDidMount: function componentDidMount() {
		var data = [{
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}, {
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}];
		// this.refs.msglist.setListData(data);
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
						'\u8BBE\u7F6E\u652F\u4ED8\u5BC6\u7801'
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
					'section',
					{ className: 'set-pay-pwd' },
					React.createElement(
						'p',
						{ className: 'reg-list' },
						React.createElement(
							'span',
							null,
							'\u624B\u673A\u53F7\u7801'
						),
						React.createElement('input', { type: 'text', name: 'encryptedMobile', className: 'registered-input', readOnly: 'readonly', value: '\u624B\u673A\u53F7\u7801\u65E0\u6CD5\u83B7\u53D6\uFF0C\u8BF7\u5B8C\u5584\u4E2A\u4EBA\u8D44\u6599' }),
						React.createElement('input', { type: 'hidden', name: 'phonenumber', className: 'registered-input', readOnly: 'readonly' })
					),
					React.createElement(
						'p',
						{ className: 'reg-list get-reg-list' },
						React.createElement(
							'span',
							null,
							'\u9A8C\u8BC1\u7801'
						),
						React.createElement('input', { type: 'tel', name: 'phonecode', className: 'registered-input', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' }),
						React.createElement(
							'button',
							{ className: 'link-click' },
							'\u53D1\u9001\u9A8C\u8BC1\u7801'
						)
					),
					React.createElement(
						'p',
						{ className: 'reg-list' },
						React.createElement(
							'span',
							null,
							'\u652F\u4ED8\u5BC6\u7801'
						),
						React.createElement('input', { type: 'tel', name: 'payPassword', className: 'registered-input text-security', maxLength: '6', placeholder: '\u8BF7\u8BBE\u7F6E\u652F\u4ED8\u5BC6\u7801' })
					),
					React.createElement(
						'p',
						{ className: 'reg-list' },
						React.createElement(
							'span',
							null,
							'\u786E\u8BA4\u652F\u4ED8\u5BC6\u7801'
						),
						React.createElement('input', { type: 'tel', name: 'payConfirmPassword', className: 'registered-input text-security', maxLength: '6', placeholder: '\u8BF7\u786E\u8BA4\u652F\u4ED8\u5BC6\u7801' })
					)
				),
				React.createElement(
					'section',
					{ className: 'tips middle mt10' },
					React.createElement('i', { className: 'icon icon-tips' }),
					'\u6E29\u99A8\u63D0\u793A\uFF1A\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57\u652F\u4ED8\u5BC6\u7801\u3002'
				),
				React.createElement(
					'div',
					{ className: 'bottom-btn' },
					React.createElement(
						'button',
						{ className: 'am-btn am-btn-block am-round am-btn-primary' },
						'\u4FDD\u5B58'
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });