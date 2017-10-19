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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);
var Footer = __webpack_require__(6);

var Root = React.createClass({
	displayName: 'Root',

	componentDidMount: function componentDidMount() {
		var _this = this;
		/*this.setState({
      layerLoading:true  //打开loading
  });*/
		/*
  UAjax.ajax({
      // method: 'post',
      // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
      // async: true,
      // cache: false,
      // contentType: 'application/x-www-form-urlencoded',
        method: 'get',
      url: '../libs/json/goods_detail.json',
      success: function(res) {
          if(res.code == 0) {
              _this.setState({
                  goods:res.data,
                  layerLoading:false  //关闭loading
              })
          } else {
              res.result;
              _this.setState({
                  layerLoading:false  //关闭loading
              })
          }
      },
      error: function(res) {
          console.log(res);
          _this.setState({
              // layerLoading:false  //关闭loading
          })
      }
  });*/
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
						'\u652F\u4ED8\u548C\u914D\u9001\u65B9\u5F0F'
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
					{ className: 'wrap-block' },
					React.createElement(
						'div',
						{ className: 'inner' },
						React.createElement(
							'p',
							null,
							'\u914D\u9001\u65B9\u5F0F'
						),
						React.createElement(
							'div',
							{ className: 'mode-box' },
							React.createElement(
								'button',
								{ className: 'btn btn-mode btn-checked' },
								'\u5FEB\u9012\u914D\u9001'
							),
							React.createElement(
								'button',
								{ className: 'btn btn-mode' },
								'\u4E0A\u95E8\u81EA\u63D0'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'wrap-block' },
					React.createElement(
						'div',
						{ className: 'inner' },
						React.createElement(
							'p',
							null,
							'\u652F\u4ED8\u65B9\u5F0F'
						),
						React.createElement(
							'div',
							{ className: 'payways-box' },
							React.createElement(
								'div',
								{ className: 'check-box' },
								React.createElement('input', { type: 'checkbox', id: 'pay1' }),
								React.createElement(
									'label',
									{ htmlFor: 'pay1' },
									'\u5728\u7EBF\u652F\u4ED8'
								)
							),
							React.createElement(
								'div',
								{ className: 'check-box' },
								React.createElement('input', { type: 'checkbox', id: 'pay2' }),
								React.createElement(
									'label',
									{ htmlFor: 'pay2' },
									'\u8D27\u5230\u4ED8\u6B3E'
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'wrap-block' },
					React.createElement(
						'div',
						{ className: 'inner' },
						React.createElement(
							'p',
							null,
							'\u914D\u9001\u65F6\u95F4'
						),
						React.createElement(
							'div',
							{ className: 'delivery-box' },
							React.createElement(
								'div',
								{ className: 'check-box' },
								React.createElement('input', { type: 'checkbox', id: 'delivery1' }),
								React.createElement(
									'label',
									{ htmlFor: 'delivery1' },
									'\u4E0D\u9650'
								)
							),
							React.createElement(
								'div',
								{ className: 'check-box' },
								React.createElement('input', { type: 'checkbox', id: 'delivery2' }),
								React.createElement(
									'label',
									{ htmlFor: 'delivery2' },
									'\u5DE5\u4F5C\u65E5\uFF08\u5468\u4E00\u81F3\u5468\u4E94\uFF09'
								)
							),
							React.createElement(
								'div',
								{ className: 'check-box' },
								React.createElement('input', { type: 'checkbox', id: 'delivery3' }),
								React.createElement(
									'label',
									{ htmlFor: 'delivery3' },
									'\u975E\u5DE5\u4F5C\u65E5\uFF08\u5468\u516D\u81F3\u5468\u65E5\uFF09'
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'bottom-btn' },
					React.createElement(
						'button',
						{ className: 'am-btn am-btn-primary am-round am-btn-block' },
						'\u4FDD \u5B58'
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

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

/***/ })

/******/ });