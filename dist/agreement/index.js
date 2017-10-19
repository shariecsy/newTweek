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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {};
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
						'\u6CE8\u518C\u534F\u8BAE'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ className: 'agreement' },
					React.createElement(
						'h3',
						null,
						'\u670D\u52A1\u534F\u8BAE'
					),
					React.createElement(
						'p',
						null,
						'\u91CD\u8981\u63D0\u793A\uFF1A\u672C\u670D\u52A1\u534F\u8BAE\u4E3A\u7528\u6237\u63A5\u53D7\u5E73\u53F0APP\u670D\u52A1\u4E4B\u76EE\u7684\u7B7E\u7F72\uFF0C\u5728\u7B7E\u7F72\u672C\u670D\u52A1\u534F\u8BAE\u524D\uFF0C\u7528\u6237\u5DF2\u7ECF\u5B8C\u5168\u7406\u89E3\u3001\u77E5\u6089\u3001\u63A5\u53D7\u548C\u9075\u5B88\u672C\u670D\u52A1\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\u3002'
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\u4E00\u3001\u7528\u6237'
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'strong',
								null,
								'\uFF08\u4E00\uFF09\u7528\u6237\u8D44\u683C'
							),
							React.createElement('br', null),
							'\u7528\u6237\u5FC5\u987B\u662F\u4E2D\u56FD\u6CD5\u5F8B\u89C4\u5B9A\u7684\u5177\u5907\u5B8C\u5168\u6C11\u4E8B\u6743\u5229\u80FD\u529B\u548C\u884C\u4E3A\u80FD\u529B\u7684\u81EA\u7136\u4EBA\uFF0C\u6216\u8005\u662F\u5177\u6709\u5408\u6CD5\u7ECF\u8425\u8D44\u683C\u7684\u5B9E\u4F53\u7EC4\u7EC7\u3002',
							React.createElement('br', null),
							'\u65E0\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\u4EBA\u3001\u9650\u5236\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\u4EBA\u4EE5\u53CA\u65E0\u7ECF\u8425\u6216\u7279\u5B9A\u7ECF\u8425\u8D44\u683C\u7684\u7EC4\u7EC7\u4E0D\u5F53\u6CE8\u518C\u4E3A\u5E73\u53F0APP\u7528\u6237\u6216\u8D85\u8FC7\u5176\u6C11\u4E8B\u6743\u5229\u6216\u884C\u4E3A\u80FD\u529B\u8303\u56F4\u4ECE\u4E8B\u4EA4\u6613\u6216\u63A5\u53D7\u670D\u52A1\u7684\uFF0C\u5176\u4E0E\u5E73\u53F0APP\u4E4B\u95F4\u7684\u670D\u52A1\u534F\u8BAE\u81EA\u59CB\u65E0\u6548\uFF0C\u5E73\u53F0APP\u4E00\u7ECF\u53D1\u73B0\uFF0C\u6709\u6743\u7ACB\u5373\u6CE8\u9500\u8BE5\u7528\u6237\uFF0C\u5E76\u8FFD\u7A76\u5176\u4F7F\u7528\u5E73\u53F0APP\u63D0\u4F9B\u7684\u201C\u670D\u52A1\u201D\u7684\u4E00\u5207\u6CD5\u5F8B\u8D23\u4EFB\u3002'
						)
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\uFF08\u4E8C\uFF09\u7528\u6237\u6CE8\u518C'
						),
						React.createElement(
							'p',
							null,
							'\u201C\u7528\u6237\u6CE8\u518C\u201D\u662F\u6307\u7528\u6237\u767B\u9646\u5E73\u53F0APP\uFF0C\u5E76\u6309\u8981\u6C42\u586B\u5199\u76F8\u5173\u4FE1\u606F\u5E76\u786E\u8BA4\u540C\u610F\u5C65\u884C\u76F8\u5173\u7528\u6237\u534F\u8BAE\u7684\u8FC7\u7A0B\u3002',
							React.createElement('br', null),
							'\u82E5\u60A8\u6CE8\u518C\u6210\u4E3A\u5E73\u53F0APP\u7684\u4F1A\u5458\uFF0C\u60A8\u5FC5\u987B\u63A5\u53D7\u5982\u4E0B\u7684\u7EA6\u5B9A\uFF1A',
							React.createElement('br', null),
							'1. \u7533\u8BF7\u4F1A\u5458\u65F6\uFF0C\u60A8\u5E94\u5F53\u63D0\u4F9B\u771F\u5B9E\u3001\u51C6\u786E\u3001\u5373\u65F6\u3001\u5B8C\u6574\u53CA\u6709\u6548\u7684\u6CE8\u518C\u4FE1\u606F\uFF0C\u4FDD\u8BC1\u5E73\u53F0APP\u53EF\u4EE5\u901A\u8FC7\u4E0A\u8FF0\u8054\u7CFB\u65B9\u5F0F\u4E0E\u60A8\u8FDB\u884C\u8054\u7CFB\uFF0C\u4FDD\u8BC1\u4E0D\u4EE5\u4ED6\u4EBA\u8D44\u6599\u5728\u5E73\u53F0APP\u8FDB\u884C\u6CE8\u518C\u6216\u8BA4\u8BC1\uFF1B',
							React.createElement('br', null),
							'2. \u7EF4\u62A4\u5E76\u53CA\u65F6\u66F4\u65B0\u6CE8\u518C\u4FE1\u606F\u4EE5\u4FDD\u6301\u5176\u771F\u5B9E\u3001\u51C6\u786E\u3001\u5373\u65F6\u3001\u5B8C\u6574\u53CA\u6709\u6548\u3002\u82E5\u60A8\u63D0\u4F9B\u7684\u4FE1\u606F\u4E0D\u771F\u5B9E\u3001\u4E0D\u51C6\u786E\u3001\u4E0D\u5373\u65F6\u3001\u4E0D\u5B8C\u6574\uFF0C\u5E73\u53F0APP\u6709\u6743\u6682\u505C\u6216\u7EC8\u6B62\u5BF9\u60A8\u7684\u4F1A\u5458\u670D\u52A1\u3002',
							React.createElement('br', null),
							'3. \u5E73\u53F0APP\u7684\u6240\u6709\u6743\u548C\u8FD0\u4F5C\u6743\u5F52\u5E7F\u4E1C\u9633\u5149\u5EB7\u4F17\u533B\u7597\u6295\u8D44\u6709\u9650\u516C\u53F8\u6240\u6709\uFF0C\u5E73\u53F0APP\u6240\u63D0\u4F9B\u7684\u670D\u52A1\u5C06\u5B8C\u5168\u6309\u7167\u5176\u53D1\u5E03\u7684\u7AE0\u7A0B\u3001\u670D\u52A1\u6761\u6B3E\u548C\u64CD\u4F5C\u89C4\u5219\u4E25\u683C\u6267\u884C\u3002\u7528\u6237\u5FC5\u987B\u5B8C\u5168\u540C\u610F\u6240\u6709\u670D\u52A1\u6761\u6B3E\u5E76\u5B8C\u6210\u6CE8\u518C\u7A0B\u5E8F\uFF0C\u624D\u80FD\u6210\u4E3A\u5E73\u53F0APP\u7684\u6B63\u5F0F\u7528\u6237\u3002',
							React.createElement('br', null),
							'\u5728\u6CE8\u518C\u8FC7\u7A0B\u4E2D\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u4E00\u4E2A\u672A\u6CE8\u518C\u8FC7\u7684\u624B\u673A\u53F7\u7801\u4F5C\u4E3A\u7528\u6237\u540D\uFF0C\u540C\u65F6\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u5E76\u987B\u5BF9\u5176\u4FDD\u5BC6\u6027\u548C\u4F7F\u7528\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u6240\u6709\u6D3B\u52A8\u8D1F\u8D23\uFF0C\u60A8\u5E76\u4E14\u540C\u610F\uFF1A',
							React.createElement('br', null),
							'1.\u5BF9\u975E\u6388\u6743\u4F7F\u7528\u60A8\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4EE5\u53CA\u5176\u4ED6\u7834\u574F\u5B89\u5168\u6027\u7684\u884C\u4E3A\u7ACB\u5373\u5411\u5E73\u53F0APP\u62A5\u544A\uFF1B',
							React.createElement('br', null),
							'2.\u786E\u4FDD\u6BCF\u6B21\u4F7F\u7528\u5E73\u53F0APP\u540E\u6B63\u786E\u5730\u79BB\u5F00\u8BE5\u5E94\u7528\u3002\u5E73\u53F0APP\u5BF9\u60A8\u56E0\u6CA1\u6709\u9075\u5B88\u6B64\u534F\u8BAE\u800C\u9020\u6210\u7684\u635F\u5931\u4E0D\u8D1F\u4EFB\u4F55\u6CD5\u5F8B\u8D23\u4EFB\u3002'
						)
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\uFF08\u4E09\uFF09\u7528\u6237\u6743\u5229'
						),
						React.createElement(
							'p',
							null,
							'\u7528\u6237\u62E5\u6709\u5728\u5E73\u53F0APP\u4E0A\u4F7F\u7528\u81EA\u884C\u6CE8\u518C\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u6743\u5229\uFF0C\u4F46\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u64C5\u81EA\u8F6C\u8BA9\u6216\u6388\u6743\u4ED6\u4EBA\u4F7F\u7528\u81EA\u5DF1\u7684\u5E73\u53F0APP\u7528\u6237\u540D\u3002',
							React.createElement('br', null),
							'\u7528\u6237\u5982\u53D1\u73B0\u5176\u4ED6\u7528\u6237\u6709\u8FDD\u6CD5\u6216\u8FDD\u53CD\u672C\u670D\u52A1\u534F\u8BAE\u7684\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5411\u5E73\u53F0APP\u8FDB\u884C\u53CD\u6620\u548C\u8981\u6C42\u5904\u7406\u3002'
						)
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\uFF08\u56DB\uFF09\u7528\u6237\u4E49\u52A1'
						),
						React.createElement(
							'p',
							null,
							'\u7528\u6237\u5355\u72EC\u627F\u62C5\u53D1\u5E03\u5185\u5BB9\u7684\u8D23\u4EFB\u3002\u7528\u6237\u5BF9\u670D\u52A1\u7684\u4F7F\u7528\u662F\u6839\u636E\u6240\u6709\u9002\u7528\u4E8E\u5E73\u53F0APP\u7684\u56FD\u5BB6\u6CD5\u5F8B\u3001\u5730\u65B9\u6CD5\u5F8B\u548C\u56FD\u9645\u6CD5\u5F8B\u6807\u51C6\u7684\u3002\u7528\u6237\u5FC5\u987B\u9075\u5FAA\uFF1A',
							React.createElement('br', null),
							'1\u3001\u4ECE\u4E2D\u56FD\u5883\u5185\u5411\u5916\u4F20\u8F93\u6280\u672F\u6027\u8D44\u6599\u65F6\u5FC5\u987B\u7B26\u5408\u4E2D\u56FD\u6709\u5173\u6CD5\u89C4\uFF1B',
							React.createElement('br', null),
							'2\u3001\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u4E0D\u4F5C\u975E\u6CD5\u7528\u9014\uFF1B',
							React.createElement('br', null),
							'3\u3001\u4E0D\u5E72\u6270\u6216\u6DF7\u4E71\u7F51\u7EDC\u670D\u52A1\uFF0C\u4E0D\u5229\u7528\u5E73\u53F0APP\u7684\u53D1\u5E03\u529F\u80FD\u6EE5\u53D1\u91CD\u590D\u4FE1\u606F\uFF1B',
							React.createElement('br', null),
							'4\u3001\u4E0D\u653B\u51FB\u5E73\u53F0APP\u7684\u6570\u636E\u3001\u7F51\u7EDC\u6216\u670D\u52A1\uFF0C\u4E0D\u76D7\u7528\u4ED6\u4EBA\u5728\u5E73\u53F0APP\u4E0A\u7684\u7528\u6237\u540D\u548C/\u6216\u5BC6\u7801\u3002',
							React.createElement('br', null),
							'5\u3001\u7528\u6237\u5E94\u5F53\u4FDD\u8BC1\u5728\u63A5\u53D7\u5E73\u53F0APP\u670D\u52A1\u7684\u8FC7\u7A0B\u4E2D\u9075\u5B88\u8BDA\u5B9E\u4FE1\u7528\u7684\u539F\u5219\uFF0C\u82E5\u6709\u7F51\u4E0A\u4EA4\u6613\u53D1\u751F\u7684\uFF0C\u4E0D\u5728\u4EA4\u6613\u8FC7\u7A0B\u4E2D\u91C7\u53D6\u4E0D\u6B63\u5F53\u7ADE\u4E89\u884C\u4E3A\uFF0C\u4E0D\u6270\u4E71\u7F51\u4E0A\u4EA4\u6613\u7684\u6B63\u5E38\u79E9\u5E8F\uFF0C\u4E0D\u4ECE\u4E8B\u4E0E\u7F51\u4E0A\u4EA4\u6613\u65E0\u5173\u7684\u884C\u4E3A\uFF1B\u7528\u6237\u4E0D\u5192\u7528\u5176\u4ED6\u7528\u6237\u7684\u540D\u4E49\u6216\u5176\u4ED6\u4F01\u4E1A\u7B49\u4E3B\u4F53\u7684\u540D\u4E49\u53D1\u5E03\u5546\u4E1A\u4FE1\u606F\uFF0C\u8FDB\u884C\u5546\u4E1A\u6D3B\u52A8\uFF1B',
							React.createElement('br', null),
							'6\u3001\u9075\u5B88\u6240\u6709\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u7684\u7F51\u7EDC\u534F\u8BAE\u3001\u89C4\u5B9A\u3001\u7A0B\u5E8F\u548C\u60EF\u4F8B\u3002\u7528\u6237\u987B\u627F\u8BFA\u4E0D\u4F20\u8F93\u4EFB\u4F55\u975E\u6CD5\u7684\u3001\u9A9A\u6270\u6027\u7684\u3001\u4E2D\u4F24\u4ED6\u4EBA\u7684\u3001\u8FB1\u9A82\u6027\u7684\u3001\u6050\u5413\u6027\u7684\u3001\u4F24\u5BB3\u6027\u7684\u3001\u5EB8\u4FD7\u7684\uFF0C\u6DEB\u79FD\u7B49\u4FE1\u606F\u8D44\u6599\u3002\u53E6\u5916\uFF0C\u7528\u6237\u4E5F\u4E0D\u80FD\u4F20\u8F93\u4EFB\u4F55\u6559\u5506\u4ED6\u4EBA\u6784\u6210\u72AF\u7F6A\u884C\u4E3A\u7684\u8D44\u6599\uFF1B\u4E0D\u80FD\u4F20\u8F93\u52A9\u957F\u56FD\u5185\u4E0D\u5229\u6761\u4EF6\u548C\u6D89\u53CA\u56FD\u5BB6\u5B89\u5168\u7684\u8D44\u6599\uFF1B\u4E0D\u80FD\u4F20\u8F93\u4EFB\u4F55\u4E0D\u7B26\u5408\u5F53\u5730\u6CD5\u89C4\u3001\u56FD\u5BB6\u6CD5\u5F8B\u548C\u56FD\u9645\u6CD5\u5F8B\u7684\u8D44\u6599\u3002',
							React.createElement('br', null),
							'\u82E5\u7528\u6237\u7684\u884C\u4E3A\u4E0D\u7B26\u5408\u4EE5\u4E0A\u63D0\u5230\u7684\u670D\u52A1\u6761\u6B3E\uFF0C\u5E73\u53F0APP\u5C06\u505A\u51FA\u72EC\u7ACB\u5224\u65AD\u7ACB\u5373\u505C\u6B62\u7528\u6237\u670D\u52A1\u5E10\u53F7\u7684\u670D\u52A1\u3002 \u7528\u6237\u9700\u5BF9\u81EA\u5DF1\u5728\u5E73\u53F0APP\u4E0A\u7684\u884C\u4E3A\u627F\u62C5\u6CD5\u5F8B\u8D23\u4EFB\u3002\u7528\u6237\u82E5\u5728\u5E73\u53F0APP\u4E0A\u6563\u5E03\u548C\u4F20\u64AD\u53CD\u52A8\u3001\u8272\u60C5\u6216\u5176\u4ED6\u8FDD\u53CD\u56FD\u5BB6\u6CD5\u5F8B\u7684\u4FE1\u606F\uFF0C\u5E73\u53F0APP\u7684\u7CFB\u7EDF\u8BB0\u5F55\u6709\u53EF\u80FD\u4F5C\u4E3A\u7528\u6237\u8FDD\u53CD\u6CD5\u5F8B\u7684\u8BC1\u636E\u3002'
						)
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\u4E8C\u3001\u5E73\u53F0APP'
						),
						React.createElement(
							'p',
							null,
							React.createElement(
								'strong',
								null,
								'\uFF08\u4E00\uFF09\u5E73\u53F0APP\u7684\u6743\u5229'
							)
						),
						React.createElement(
							'p',
							null,
							'\u5E73\u53F0APP\u6709\u6743\u5BF9\u7528\u6237\u7684\u6CE8\u518C\u6570\u636E\u3001\u4EA4\u6613\u884C\u4E3A\u548C\u63A5\u53D7\u670D\u52A1\u7684\u884C\u4E3A\u8FDB\u884C\u8BB0\u5F55\u4E0E\u67E5\u9605\uFF0C\u53D1\u73B0\u6CE8\u518C\u6570\u636E\u3001\u4EA4\u6613\u884C\u4E3A\u548C\u63A5\u53D7\u670D\u52A1\u7684\u884C\u4E3A\u4E2D\u5B58\u5728\u4EFB\u4F55\u95EE\u9898\u6216\u6000\u7591\uFF0C\u5747\u6709\u6743\u5411\u7528\u6237\u53D1\u51FA\u8BE2\u95EE\u53CA\u8981\u6C42\u6539\u6B63\u7684\u901A\u77E5\u6216\u8005\u76F4\u63A5\u4F5C\u51FA\u5220\u9664\u7B49\u5904\u7406\u3002\u5E7F\u4E1C\u9633\u5149\u5EB7\u4F17\u533B\u7597\u6295\u8D44\u6709\u9650\u516C\u53F8\u5728\u5FC5\u8981\u65F6\u6709\u6743\u4FEE\u6539\u670D\u52A1\u6761\u6B3E\uFF0C\u5C4A\u65F6\u5C06\u5728\u5E73\u53F0APP\u754C\u9762\u63D0\u793A\u4FEE\u6539\u5185\u5BB9\uFF0C\u5982\u679C\u7528\u6237\u4E0D\u540C\u610F\u6240\u4F5C\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u4E3B\u52A8\u53D6\u6D88\u83B7\u5F97\u7684\u7F51\u7EDC\u670D\u52A1\u3002\u5982\u679C\u7528\u6237\u7EE7\u7EED\u4EAB\u6709\u5E73\u53F0APP\u7684\u670D\u52A1\uFF0C\u5219\u88AB\u89C6\u4E3A\u63A5\u53D7\u670D\u52A1\u6761\u6B3E\u53D8\u52A8\u3002',
							React.createElement('br', null),
							'\u5E7F\u4E1C\u9633\u5149\u5EB7\u4F17\u533B\u7597\u6295\u8D44\u6709\u9650\u516C\u53F8\u4FDD\u7559\u968F\u65F6\u4FEE\u6539\u6216\u4E2D\u65AD\u4E00\u9879\u6216\u591A\u9879\u7F51\u7EDC\u670D\u52A1\u800C\u65E0\u9700\u77E5\u7167\u7528\u6237\u7684\u6743\u5229\uFF0C\u4E0D\u987B\u5BF9\u7528\u6237\u6216\u7B2C\u4E09\u65B9\u8D1F\u8D23\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6709\u6743\u5728\u4E00\u5B9A\u7684\u60C5\u5F62\u4E0B\u4EE5\u7F51\u7EDC\u53D1\u5E03\u5F62\u5F0F\u516C\u5E03\u7528\u6237\u5728\u4F7F\u7528\u5E73\u53F0APP\u63D0\u4F9B\u7684\u670D\u52A1\u8FC7\u7A0B\u4E2D\u7684\u8FDD\u6CD5\u884C\u4E3A\uFF0C\u8BE5\u7B49\u60C5\u5F62\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u56FD\u5BB6\u751F\u6548\u6CD5\u5F8B\u6587\u4E66\u6216\u884C\u653F\u5904\u7F5A\u51B3\u5B9A\u786E\u8BA4\u7528\u6237\u5B58\u5728\u8FDD\u6CD5\u884C\u4E3A\uFF0C\u6216\u8005\u5E73\u53F0APP\u6709\u8DB3\u591F\u4E8B\u5B9E\u4F9D\u636E\u53EF\u4EE5\u8BA4\u5B9A\u7528\u6237\u5B58\u5728\u8FDD\u6CD5\u6216\u8FDD\u53CD\u670D\u52A1\u534F\u8BAE\u884C\u4E3A\u7684\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6709\u6743\u5728\u4E0D\u901A\u77E5\u7528\u6237\u7684\u524D\u63D0\u4E0B\u5BF9\u7528\u6237\u5728\u5E73\u53F0APP\u53D1\u5E03\u7684\u4E0B\u5217\u5404\u7C7B\u4FE1\u606F\u8FDB\u884C\u5220\u9664\u6216\u91C7\u53D6\u5176\u5B83\u9650\u5236\u6027\u63AA\u65BD\uFF1A\u5E73\u53F0APP\u6709\u7406\u7531\u76F8\u4FE1\u4EE5\u89C4\u907F\u8D39\u7528\u4E3A\u76EE\u7684\u7684\u4FE1\u606F\uFF1B \u5E73\u53F0APP\u6709\u7406\u7531\u76F8\u4FE1\u4EE5\u7092\u4F5C\u4FE1\u7528\u4E3A\u76EE\u7684\u7684\u4FE1\u606F\uFF1B\u5E73\u53F0APP\u6709\u7406\u7531\u76F8\u4FE1\u5B58\u5728\u6B3A\u8BC8\u7B49\u6076\u610F\u6216\u865A\u5047\u5185\u5BB9\u7684\u4FE1\u606F\uFF1B\u5E73\u53F0APP\u6709\u7406\u7531\u76F8\u4FE1\u8BE5\u4FE1\u606F\u8FDD\u53CD\u516C\u5171\u5229\u76CA\u6216\u53EF\u80FD\u4E25\u91CD\u635F\u5BB3\u5E73\u53F0APP\u548C\u5176\u5B83\u7528\u6237\u5408\u6CD5\u5229\u76CA\u7684\u4FE1\u606F\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6709\u6743\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u7684\u8054\u7CFB\u65B9\u5F0F\u5411\u56E0\u5728\u5E73\u53F0APP\u4E0A\u8FDB\u884C\u4EA4\u6613\u6216\u63A5\u53D7\u670D\u52A1\u800C\u4EA7\u751F\u7EA0\u7EB7\u7684\u53CC\u65B9\u4E86\u89E3\u60C5\u51B5\uFF0C\u5E76\u5C06\u6240\u4E86\u89E3\u7684\u60C5\u51B5\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u4E92\u76F8\u901A\u77E5\u5BF9\u65B9\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6709\u6743(\u5168\u90E8\u6216\u90E8\u5206\u5730) \u4F7F\u7528\u3001\u590D\u5236\u3001\u4FEE\u8BA2\u3001\u6539\u5199\u3001\u53D1\u5E03\u3001\u7FFB\u8BD1\u3001\u5206\u53D1\u3001\u6267\u884C\u548C\u5C55\u793A\u7528\u6237\u516C\u793A\u4E8E\u5E73\u53F0APP\u4E0A\u7684\u5404\u7C7B\u4FE1\u606F\u6216\u5236\u4F5C\u5176\u6D3E\u751F\u7269\uFF0C\u4EE5\u73B0\u5728\u5DF2\u77E5\u6216\u65E5\u540E\u5F00\u53D1\u7684\u4EFB\u4F55\u5F62\u5F0F\u3001\u5A92\u4F53\u6216\u6280\u672F\uFF0C\u5C06\u4E0A\u8FF0\u4FE1\u606F\u53CA\u5176\u6D3E\u751F\u7269\u7EB3\u5165\u5E73\u53F0APP\u7684\u5176\u5B83\u4EA7\u7269\u5185\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6216\u5176\u5408\u4F5C\u4F19\u4F34\u6709\u6743\u5728\u7528\u6237\u7684\u624B\u673A\u4E0A\u8BBE\u5B9A\u6216\u53D6\u7528cookies\uFF0C\u5E73\u53F0APP\u6216\u5176\u5408\u4F5C\u4F19\u4F34\u4F7F\u7528cookies\u53EF\u4E3A\u7528\u6237\u63D0\u4F9B\u4E2A\u6027\u5316\u670D\u52A1\u3002'
						),
						React.createElement('p', null)
					),
					React.createElement(
						'section',
						null,
						React.createElement(
							'strong',
							null,
							'\uFF08\u4E8C\uFF09\u5E73\u53F0APP\u7684\u4E49\u52A1'
						),
						React.createElement(
							'p',
							null,
							'\u5E73\u53F0APP\u8FD0\u7528\u81EA\u5DF1\u7684\u5E94\u7528\u5E73\u53F0\u901A\u8FC7\u56FD\u9645\u4E92\u8054\u7F51\u4E3A\u7528\u6237\u63D0\u4F9B\u7F51\u7EDC\u670D\u52A1\uFF0C\u5E76\u627F\u62C5\u672C\u534F\u8BAE\u548C\u670D\u52A1\u6761\u6B3E\u89C4\u5B9A\u7684\u5BF9\u7528\u6237\u8D23\u4EFB\u548C\u4E49\u52A1\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6709\u4E49\u52A1\u5BF9\u7528\u6237\u5728\u6CE8\u518C\u4F7F\u7528\u5E73\u53F0APP\u4E2D\u6240\u9047\u5230\u7684\u4E0E\u6CE8\u518C\u6216\u670D\u52A1\u6709\u5173\u7684\u95EE\u9898\u53CA\u53CD\u6620\u7684\u60C5\u51B5\u4F5C\u51FA\u76F8\u5E94\u7684\u56DE\u590D\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u53D1\u7ED9\u7528\u6237\u7684\u901A\u544A\u4E00\u822C\u5E94\u901A\u8FC7\u91CD\u8981\u9875\u9762\u7684\u516C\u544A\u6216\u6D88\u606F\u4F20\u9001\u3002',
							React.createElement('br', null),
							'\u5E73\u53F0APP\u6CA1\u6709\u4E49\u52A1\u5BF9\u6240\u6709\u7528\u6237\u7684\u6CE8\u518C\u6570\u636E\u3001\u6240\u6709\u7684\u4EA4\u6613\u884C\u4E3A\u3001\u63A5\u53D7\u670D\u52A1\u7684\u60C5\u51B5\u4EE5\u53CA\u5176\u5B83\u4E8B\u9879\u8FDB\u884C\u4E8B\u5148\u5BA1\u67E5 \u3002'
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