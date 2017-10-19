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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var NoRecord = __webpack_require__(3);
var MsgList = React.createClass({
	displayName: "MsgList",

	getInitialState: function getInitialState() {
		return {
			listData: []
		};
	},
	setListData: function setListData(data) {
		this.setState({
			listData: data
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "tab-list-wrap" },
			React.createElement(
				"div",
				{ className: "am-list-news-bd" },
				this.state.listData.length == 0 ? React.createElement(NoRecord, { text: "\u5F53\u524D\u6682\u65E0\u6D88\u606F~" }) : React.createElement(
					"ul",
					{ className: "am-list" },
					this.state.listData.map(function (obj, index) {
						return React.createElement(
							"li",
							{ className: "am-g am-list-item-desced", key: index, onClick: obj.clickHandler },
							React.createElement(
								"div",
								{ className: "am-cf" },
								React.createElement(
									"span",
									{ className: "tab-list-left am-fl" },
									obj.title
								),
								React.createElement(
									"span",
									{ className: "am-list-item-text am-fr" },
									obj.btime
								)
							),
							React.createElement(
								"div",
								{ className: "tab-list-content" },
								obj.content
							),
							React.createElement(
								"div",
								{ className: "am-list-item-text" },
								obj.subtitle
							),
							React.createElement(
								"div",
								{ className: "msg-list-block-right" },
								React.createElement("i", { className: "msg-list-right iconfont icon-arrow-right" })
							)
						);
					})
				)
			)
		);
	}
});

module.exports = MsgList;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

var IconList = React.createClass({
	displayName: "IconList",

	getDefaultProps: function getDefaultProps() {
		return {
			listData: []
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "icon-list" },
			React.createElement(
				"ul",
				{ className: "am-list" },
				this.props.listData.map(function (obj, index) {
					var leftCls = "icon-list-left " + obj.leftCls;
					var rightCls = "icon-list-right iconfont icon-arrow-right";
					return React.createElement(
						"li",
						{ className: "am-g", key: index, onClick: obj.clickHandler },
						React.createElement("span", { className: leftCls }),
						React.createElement(
							"span",
							{ className: "icon-list-content" },
							obj.title
						),
						React.createElement("span", { className: rightCls })
					);
				})
			)
		);
	}
});

module.exports = IconList;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

var UserInfo = React.createClass({
	displayName: "UserInfo",

	getInitialState: function getInitialState() {
		var iconSrc = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_IMG_KEY);
		console.log(iconSrc);
		var accountNo = MobileNoUtil.crypt(LocalStorageUtil.get(STORAGE_CONSTANTS.USER_NAME_KEY));
		return {
			iconSrc: iconSrc || '../images/camera.png',
			accountNo: accountNo
		};
	},
	_imgOnClick: function _imgOnClick() {},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "user-info-block" },
			React.createElement("img", { className: "user-info-block-left am-circle", width: "60px", height: "60px", src: this.state.iconSrc, onClick: this._imgOnClick }),
			React.createElement(
				"span",
				{ className: "user-info-block-center" },
				"\u8D26\u53F7: ",
				this.state.accountNo
			),
			React.createElement("i", { className: "user-info-block-right iconfont icon-arrow-right", onClick: this.props.clickHandler })
		);
	}
});

module.exports = UserInfo;

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var Dock = __webpack_require__(7);
var Footer = React.createClass({
	displayName: 'Footer',

	getInitialState: function getInitialState() {
		return {
			selectIndex: this.props.selectIndex
		};
	},
	_handleClick: function _handleClick(key, url) {
		if (key == this.props.selectIndex) {
			return;
		} else {
			window.location = url;
		}
	},
	render: function render() {
		return React.createElement(
			Dock,
			null,
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '0', "../index/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 0 ? "am-active" : "" },
					React.createElement('span', { className: 'iconfont icon-home' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u9996\u9875'
					)
				)
			),
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '3', "../goodsList/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 3 ? "am-active" : "" },
					React.createElement('span', { className: 'iconfont icon-shop3' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u5546\u5E97'
					)
				)
			),
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '1', "../msg/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 1 ? "am-active" : "" },
					React.createElement('span', { className: 'iconfont icon-message' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u6D88\u606F'
					)
				)
			),
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '2', "../user/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 2 ? "am-active" : "" },
					React.createElement('span', { className: 'iconfont icon-user1' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u6211\u7684'
					)
				)
			)
		);
	}
});

module.exports = Footer;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

var Dock = React.createClass({
	displayName: "Dock",

	_handleClick: function _handleClick(action) {
		console.log(action);
	},
	render: function render() {
		var length = this.props.children.length;
		var avgCls = 'am-navbar-nav am-cf am-avg-sm-' + length;
		return React.createElement(
			"div",
			{ "data-am-widget": "navbar", className: "am-navbar am-cf am-navbar-app " },
			React.createElement(
				"ul",
				{ className: avgCls },
				this.props.children
			)
		);
	}
});

Dock.Item = React.createClass({
	displayName: "Item",

	render: function render() {
		return React.createElement(
			"li",
			{ onClick: this.props.clickHandler },
			this.props.children
		);
	}
});

module.exports = Dock;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by william on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Footer = __webpack_require__(6);
var Container = __webpack_require__(0);
var MsgList = __webpack_require__(10);
var UserInfo = __webpack_require__(18);
var IconList = __webpack_require__(15);

var Root = React.createClass({
	displayName: 'Root',

	getDefaultProps: function getDefaultProps() {
		return {
			iconList: [{
				leftCls: 'iconfont icon-family',
				title: '家人管理',
				clickHandler: function clickHandler() {
					window.location = "../myFamily/index.html";
				}
			}, {
				leftCls: 'iconfont icon-card',
				title: '我的就诊卡',
				clickHandler: function clickHandler() {
					window.location = "../myMedicalCard/index.html";
				}
			}, {
				leftCls: 'iconfont icon-Hospitalized',
				title: '我的住院号',
				clickHandler: function clickHandler() {
					window.location = "../myHospitalizationNum/index.html";
				}
			}],
			iconList1: [{
				leftCls: 'iconfont icon-register',
				title: '挂号记录',
				clickHandler: function clickHandler() {
					window.location = "../myRegistered/index.html";
				}
			}, {
				leftCls: 'iconfont icon-bill',
				title: '缴费记录',
				clickHandler: function clickHandler() {
					window.location = "../myPayment/index.html";
				}
			}, {
				leftCls: 'iconfont icon-order',
				title: '我的订单',
				clickHandler: function clickHandler() {
					window.location = '../myOrder/index.html';
				}
			}, {
				leftCls: 'iconfont icon-insuranceno',
				title: '医保专区',
				clickHandler: function clickHandler() {
					window.location = '../myInsurance/index.html';
				}
			}],
			iconList2: [{
				leftCls: 'iconfont icon-qianbao',
				title: '我的钱包',
				clickHandler: function clickHandler() {
					window.location = '../purse/index.html';
				}
			}, {
				leftCls: 'iconfont icon-doctor',
				title: '收藏医生',
				clickHandler: function clickHandler() {
					window.location = '../collectDoctor/index.html';
				}
			}, {
				leftCls: 'iconfont icon-service',
				title: '更多服务',
				clickHandler: function clickHandler() {
					window.location = '../moreService/index.html';
				}
			}],
			iconList3: [{
				leftCls: 'iconfont icon-setting',
				title: '设置',
				clickHandler: function clickHandler() {
					window.location = '../mySetting/index.html';
				}
			}]
		};
	},
	componentDidMount: function componentDidMount() {},
	_toCompleteInfo: function _toCompleteInfo() {
		window.location = "../toCompleteInfo/index.html";
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				Header,
				null,
				React.createElement(
					Header.CenterItem,
					null,
					React.createElement(
						'h1',
						{ className: 'am-header-title' },
						'\u6211\u7684'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(UserInfo, { clickHandler: this._toCompleteInfo }),
				React.createElement(IconList, { listData: this.props.iconList }),
				React.createElement(IconList, { listData: this.props.iconList1 }),
				React.createElement(IconList, { listData: this.props.iconList2 }),
				React.createElement(IconList, { listData: this.props.iconList3 })
			),
			React.createElement(Footer, { selectIndex: '2' })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });