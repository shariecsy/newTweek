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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	componentDidMount: function componentDidMount() {},
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
						'\u6D88\u606F'
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
					'h3',
					{ className: 'bind-card-title' },
					'\u7ED1\u5361\u6210\u529F'
				),
				React.createElement(
					'div',
					{ className: 'bind-card-content' },
					React.createElement(
						'div',
						{ className: 'item' },
						React.createElement(
							'p',
							null,
							'\u606D\u559C\uFF0C\u60A8\u5DF2\u6210\u529F\u7ED1\u5B9A\u5C31\u8BCA\u5361\uFF0C\u73B0\u5728\u53EF\u4EE5\u5728\u7EBF\u6302\u53F7\u4E86\u3002'
						)
					),
					React.createElement(
						'div',
						{ className: 'item' },
						React.createElement(
							'p',
							null,
							React.createElement(
								'span',
								{ className: 'name' },
								'\u533B\u9662'
							),
							React.createElement(
								'span',
								{ className: 'value' },
								'\u5E7F\u5DDE\u5E02\u5987\u5973\u513F\u7AE5\u533B\u7597\u4E2D\u5FC3\uFF08\u73E0\u6C5F\u65B0\u57CE\uFF09'
							)
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'span',
								{ className: 'name' },
								'\u59D3\u540D'
							),
							React.createElement(
								'span',
								{ className: 'value' },
								'*\u8BFA\u6CD3'
							)
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'span',
								{ className: 'name' },
								'\u5C31\u8BCA\u5361\u53F7'
							),
							React.createElement(
								'span',
								{ className: 'value' },
								'4401000013812477'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'item time' },
						React.createElement(
							'p',
							null,
							React.createElement(
								'span',
								{ className: 'name' },
								'\u6D88\u606F\u65F6\u95F4'
							),
							React.createElement(
								'span',
								{ className: 'value' },
								'2016-12-17 11:25:02'
							)
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'app-notice' },
				React.createElement('i', { className: 'am-icon-info-circle' }),
				'\u6CE8\u610F\uFF1A\u6BCF\u4E2A\u8D26\u53F7\u540C\u4E2A\u533B\u9662\u6700\u591A\u53EF\u4EE5\u7ED1\u5B9A3\u5F20\u5C31\u8BCA\u5361\u3002'
			),
			React.createElement(
				'div',
				{ className: 'btn-box' },
				React.createElement(
					'a',
					{ href: 'javascript:;', className: 'btn btn-confirm' },
					'\u77E5\u9053\u4E86'
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });