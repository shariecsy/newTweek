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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
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

/***/ 5:
/***/ (function(module, exports) {

var IncompleteInfo = React.createClass({
	displayName: "IncompleteInfo",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "incomplete-info" },
			React.createElement(
				"section",
				{ className: "incomplete-tips" },
				React.createElement("i", { className: "icon-incomplete" }),
				React.createElement(
					"p",
					null,
					"\u4F60\u8FD8\u6CA1\u6709\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F\u54E6"
				)
			),
			React.createElement(
				"section",
				{ className: "button" },
				React.createElement(
					"a",
					{ className: "btn-save", href: "../toCompleteInfo/index.html" },
					"\u70B9\u51FB\u5B8C\u5584"
				)
			)
		);
	}
});

module.exports = IncompleteInfo;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var IncompleteInfo = __webpack_require__(5);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {};
	},
	radioChecked: function radioChecked(index) {
		var radioEle = document.getElementsByClassName('radio');
		for (var i = 0; i < radioEle.length; i++) {

			radioEle[i].className = "radio inline";
		}
		radioEle[index].className = "radio inline checked";
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
						'\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F'
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
					{ className: 'info-list' },
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u59D3\u540D'
						),
						React.createElement('input', { type: 'text', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D' })
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u8BC1\u4EF6\u7C7B\u578B'
						),
						React.createElement(
							'select',
							{ id: 'cardType', name: 'cardType' },
							React.createElement(
								'option',
								{ value: '1' },
								'\u4E8C\u4EE3\u8EAB\u4EFD\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '2' },
								'\u519B\u5B98\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '3' },
								'\u6E2F\u6FB3\u901A\u884C\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '4' },
								'\u62A4\u7167'
							)
						),
						React.createElement('i', { className: 'icon icon-down middle am-icon-chevron-down' })
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u8BC1\u4EF6\u53F7'
						),
						React.createElement('input', { type: 'text', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7' })
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u51FA\u751F\u65E5\u671F'
						),
						React.createElement('input', { type: 'text', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u51FA\u751F\u65E5\u671F' })
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u6027\u522B'
						),
						React.createElement(
							'label',
							{ id: 'RadioGroup1_0', className: 'radio inline', onClick: this.radioChecked.bind(this, 0) },
							React.createElement('input', { type: 'radio', name: 'sex', value: '1' }),
							'\u7537'
						),
						React.createElement(
							'label',
							{ id: 'RadioGroup1_1', className: 'radio inline ', onClick: this.radioChecked.bind(this, 1) },
							React.createElement('input', { type: 'radio', name: 'sex', value: '2' }),
							'\u5973'
						)
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u624B\u673A\u53F7\u7801'
						),
						React.createElement('input', { type: 'text', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8BA4\u771F\u586B\u5199\u624B\u673A\u53F7' })
					)
				),
				React.createElement(
					'section',
					{ className: 'info-list' },
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u5173\u7CFB'
						),
						React.createElement(
							'select',
							{ id: 'cardType', name: 'cardType' },
							React.createElement(
								'option',
								{ value: '1' },
								'\u7236\u6BCD'
							),
							React.createElement(
								'option',
								{ value: '2' },
								'\u914D\u5076'
							),
							React.createElement(
								'option',
								{ value: '3' },
								'\u5B50\u5973'
							),
							React.createElement(
								'option',
								{ value: '4' },
								'\u513F\u7AE5'
							),
							React.createElement(
								'option',
								{ value: '5' },
								'\u5176\u4ED6'
							)
						),
						React.createElement('i', { className: 'icon icon-down middle am-icon-chevron-down' })
					)
				),
				React.createElement(
					'div',
					{ className: 'app-notice' },
					React.createElement('i', { className: 'am-icon-info-circle' }),
					'\u6E29\u99A8\u63D0\u793A\uFF1A\u8BF7\u586B\u5199\u771F\u5B9E\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u7B2C\u4E00\u65F6\u95F4\u6536\u5230\u5C31\u8BCA\u4FE1\u606F\u3002'
				),
				React.createElement(
					'section',
					{ className: 'button' },
					React.createElement(
						'a',
						{ className: 'btn-save' },
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