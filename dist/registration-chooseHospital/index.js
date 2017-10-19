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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			hospitalList: [
				//				{
				//					imgUrl:'../images/hospitalLogo.jpg',
				//					title:'广州市妇女儿童医疗中心（珠江新城）',
				//					address:"天河区 金穗路9号",
				//					insurance:true,
				//					clickHandler:function(){
				//						window.location='../registration-chooseType/index.html';
				//					}
				//				},
				//				{
				//					imgUrl:'../images/hospitalLogo.jpg',
				//					title:'广州市儿童医院（人民中路）',
				//					address:"越秀区 人民中路318号",
				//					insurance:false,
				//					clickHandler:function(){}
				//				},
				//				{
				//					imgUrl:'../images/hospitalLogo.jpg',
				//					title:'广东省中医院',
				//					address:"越秀区 大德路",
				//					insurance:true,
				//					clickHandler:function(){}
				//				}
			]
		};
	},
	_chooseCity: function _chooseCity() {
		window.location = '../registration-chooseCity/index.html';
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
					{ className: 'chooseHospital' },
					React.createElement(
						'div',
						{ className: 'choose-hospital-top', onClick: this._chooseCity },
						React.createElement(
							'a',
							{ href: '#' },
							React.createElement('i', { className: 'iconfont icon-map' }),
							React.createElement(
								'span',
								null,
								'\u5E7F\u5DDE\u5E02'
							),
							React.createElement('i', { className: 'iconfont icon-arrow-right' })
						)
					),
					React.createElement(
						'div',
						{ className: 'item-list' },
						React.createElement(
							'h3',
							null,
							'\u5168\u90E8\u533B\u9662'
						),
						React.createElement(
							'ul',
							{ className: 'am-list' },
							this.state.hospitalList.map(function (obj, index) {
								var rightCls = "item-list-right iconfont icon-arrow-right";
								return React.createElement(
									'li',
									{ className: 'am-g', key: index, onClick: obj.clickHandler },
									React.createElement('img', { className: 'item-list-left', src: obj.imgUrl }),
									React.createElement(
										'div',
										{ className: 'item-list-content' },
										React.createElement(
											'p',
											null,
											obj.title
										),
										React.createElement(
											'span',
											null,
											obj.address
										)
									),
									React.createElement(
										'span',
										{ className: obj.insurance ? "item-list-insurance" : "item-list-insurance none" },
										'\u533B\u4FDD'
									),
									React.createElement('span', { className: rightCls })
								);
							})
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