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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	radioChecked: function radioChecked(index) {
		var radioEle = document.getElementsByClassName('radio');
		for (var i = 0; i < radioEle.length; i++) {
			radioEle[i].className = "radio inline am-icon-circle-o";
		}
		radioEle[index].className = "radio inline am-icon-check-circle";
		if (index == 0) {
			this.refs.male.value = 1;
		} else if (index == 1) {
			this.refs.male.value = 2;
		}
	},
	saveFamily: function saveFamily() {
		var _this = this;
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'get',
			url: '../libs/json/add_family.json',
			/*data:{
            	relation:_this.refs.relation.value,
   	name:_this.refs.name.value,
                cardType:_this.refs.cardType.value,
                cardNum:_this.refs.cardNum.value,
                birth:_this.refs.birth.value,
                male:_this.refs.male.value,
                phone:_this.refs.phone.value
   },*/
			success: function success(res) {
				if (res.code == 0) {
					_this.setState({
						goodsList: res.data
						// layerLoading:false  //关闭loading
					});
				} else {
					res.result;
					_this.setState({
						// layerLoading:false  //关闭loading
					});
				}
			},
			error: function error(res) {
				console.log(res);
				_this.setState({
					// layerLoading:false  //关闭loading
				});
			}
		});
	},
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
						'\u6DFB\u52A0\u5BB6\u4EBA'
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
					{ className: 'my-message add-family' },
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
								{ ref: 'relation' },
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
							React.createElement('input', { type: 'text', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D', ref: 'name' })
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
								{ name: 'cardType', ref: 'cardType' },
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
							React.createElement('input', { type: 'text', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7', ref: 'cardNum' })
						),
						React.createElement(
							'p',
							{ className: 'info-list-p' },
							React.createElement(
								'span',
								{ className: 'middle' },
								'\u51FA\u751F\u65E5\u671F'
							),
							React.createElement('input', { type: 'text', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u51FA\u751F\u65E5\u671F', ref: 'birth' })
						),
						React.createElement(
							'p',
							{ className: 'info-list-p' },
							React.createElement(
								'span',
								{ className: 'middle' },
								'\u6027\u522B'
							),
							React.createElement('input', { type: 'hidden', value: '', ref: 'male' }),
							React.createElement(
								'label',
								{ className: 'radio inline am-icon-circle-o', onClick: this.radioChecked.bind(this, 0) },
								React.createElement('input', { type: 'radio', name: 'sex', value: '1' }),
								'\u7537'
							),
							React.createElement(
								'label',
								{ className: 'radio inline am-icon-circle-o', onClick: this.radioChecked.bind(this, 1) },
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
							React.createElement('input', { type: 'text', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8BA4\u771F\u586B\u5199\u624B\u673A\u53F7', ref: 'phone' })
						)
					),
					React.createElement(
						'p',
						{ className: 'tips' },
						React.createElement('i', { className: 'am-icon-exclamation-circle am-icon-fw' }),
						'\u6E29\u99A8\u63D0\u793A\uFF1A\u8BF7\u586B\u5199\u771F\u5B9E\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u7B2C\u4E00\u65F6\u95F4\u6536\u5230\u5C31\u8BCA\u4FE1\u606F\u3002\u5982\u679C\u5B50\u5973\u8FD8\u6CA1\u6709\u8EAB\u4EFD\u8BC1\u5728\u5173\u7CFB\u9009\u9879\u8BF7\u9009\u62E9\u513F\u7AE5\uFF0C\u9009\u62E9\u513F\u7AE5\u540E\u5B8C\u5584\u76D1\u62A4\u4EBA\u4FE1\u606F\u5373\u53EF\u3002'
					),
					React.createElement(
						'div',
						{ className: 'bottom-btn' },
						React.createElement(
							'button',
							{ className: 'am-btn am-btn-block am-btn-primary am-round', onClick: this.saveFamily },
							'\u4FDD\u5B58'
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