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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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

/***/ 3:
/***/ (function(module, exports) {

var NoRecord = React.createClass({
	displayName: "NoRecord",

	render: function render() {
		return React.createElement(
			"section",
			{ className: "page-tips" },
			React.createElement("i", { className: "tips-icon tips-icon-res" }),
			React.createElement(
				"div",
				{ className: "tips-word" },
				React.createElement(
					"p",
					{ className: "p1" },
					this.props.text
				)
			)
		);
	}
});

module.exports = NoRecord;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var NoRecord = __webpack_require__(3);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			locationList: [{
				point: "广东省中医院慈善医院",
				section: "门诊二楼计价收费处左侧",
				imgUrl: "../images/hospitalLogo.jpg"
			}, {
				point: "广东省中医院慈善医院",
				section: "门诊二楼计价收费处左侧",
				imgUrl: "../images/hospitalLogo.jpg"
			}, {
				point: "广东省中医院慈善医院",
				section: "门诊二楼计价收费处左侧",
				imgUrl: "../images/hospitalLogo.jpg"
			}]
		};
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
						'\u533B\u4FDD\u4E13\u533A'
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
					{ className: 'direction-box' },
					React.createElement(
						'div',
						{ className: 'direction-main' },
						React.createElement(
							'div',
							{ className: 'title' },
							React.createElement(
								'h2',
								null,
								'\u5E7F\u4E1C\u7701\u4E2D\u533B\u9662\u7EBF\u4E0B\u793E\u4FDD\u5361\u7ED1\u5B9A\u6307\u5F15'
							),
							React.createElement(
								'p',
								null,
								'\u5730\u5740\uFF1A\u5E7F\u5DDE\u5E02\u5929\u6CB3\u91D1\u7A57\u8DEF9\u53F7'
							)
						),
						React.createElement(
							'div',
							{ className: 'notice' },
							'\u4E3A\u786E\u4FDD\u4E2A\u4EBA\u8D26\u6237\u8D44\u91D1\u5B89\u5168\uFF0C\u9700\u8981\u60A8\u524D\u5F80\u533B\u9662\u529E\u7406\u7ED1\u5B9A\u793E\u4FDD\u5361\u3002'
						),
						React.createElement(
							'div',
							{ className: 'location' },
							this.state.locationList.map(function (obj, index) {
								return React.createElement(
									'div',
									{ className: 'location-item', key: index },
									React.createElement(
										'h3',
										null,
										React.createElement('i', { className: 'am-icon-map-marker am-icon-md' }),
										obj.point,
										'\uFF1A'
									),
									React.createElement(
										'p',
										null,
										'\u7ED1\u5361\u4F4D\u7F6E\uFF1A',
										obj.section
									),
									React.createElement(
										'div',
										null,
										React.createElement('img', { src: obj.imgUrl, alt: '' })
									)
								);
							})
						)
					),
					React.createElement(
						'div',
						{ className: 'bottom-notice' },
						React.createElement(
							'h3',
							null,
							React.createElement('i', { className: 'am-icon-info-circle' }),
							'\u7ED1\u5361\u987B\u77E5\uFF1A'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
						),
						React.createElement(
							'p',
							null,
							'1.\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u8BC1'
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