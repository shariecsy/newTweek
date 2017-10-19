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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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

/***/ 25:
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
						'\u6211\u7684\u5BB6\u4EBA'
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
					{ className: 'my-message add-medical-card' },
					React.createElement(
						'div',
						{ className: 'toptit' },
						React.createElement(
							'a',
							{ className: 'toptit-link middle location' },
							React.createElement('i', { className: 'am-icon-map-marker am-icon-sm' }),
							React.createElement(
								'span',
								{ className: 'positionName' },
								'\u5E7F\u5DDE\u5E02'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'info-row' },
						React.createElement(
							'i',
							{ className: 'portrait' },
							React.createElement('img', { src: 'https://yct.968309.com/pic/file/hospitalLogoPath/6bc95ad6ce7545f58c572a5c12db95b8.png', className: 'ele-rounded' })
						),
						React.createElement(
							'h4',
							{ className: 'h4-name' },
							'\u5E7F\u5DDE\u5E02\u5987\u5973\u513F\u7AE5\u533B\u7597\u4E2D\u5FC3(\u73E0\u6C5F\u65B0\u57CE)'
						),
						React.createElement(
							'p',
							{ className: 'p1' },
							'\u4E09\u7532'
						),
						React.createElement(
							'p',
							{ className: 'p2' },
							'\u5929\u6CB3\u533A\u91D1\u7A57\u8DEF9\u53F7'
						),
						React.createElement(
							'p',
							{ className: 'p-but middle' },
							React.createElement(
								'a',
								{ className: 'but-label am-btn am-round' },
								'\u5173\u8054\u5C31\u8BCA\u5361'
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