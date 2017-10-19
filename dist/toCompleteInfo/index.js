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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
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

/***/ 20:
/***/ (function(module, exports) {

/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/20
 * 说明：Toast组件
 * 1. 自动消失弹窗组件
 * 2. 轻量级反馈/提示，可以用来显示不会打断用户操作的内容
 */

var Toast = function () {
    var msgArea = document.createElement('div');

    var ToastItem = React.createClass({
        displayName: 'ToastItem',

        getDefaultProps: function getDefaultProps() {
            return {
                content: null,
                duration: 3000,
                mask: true,
                onClose: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                content: this.props.content,
                duration: this.props.duration,
                mask: this.props.mask,
                onClose: this.props.onClose
            };
        },
        _toDisappear: function _toDisappear() {
            var _this = this;
            if (this._disappear) {
                clearTimeout(this._disappear);
            }
            this._disappear = setTimeout(function () {
                document.body.removeChild(msgArea);
                _this.props.onClose && _this.props.onClose();
            }, _this.props.duration);
        },
        componentDidMount: function componentDidMount() {
            this._toDisappear();
        },
        componentDidUpdate: function componentDidUpdate() {
            this._toDisappear();
        },
        render: function render() {
            var _class = this.props.className ? 'ucs-toast ' + this.props.className : 'ucs-toast';
            _class = !this.props.mask ? _class + ' ucs-toast-nomask' : _class;
            document.body.appendChild(msgArea);
            return React.createElement(
                'div',
                { className: _class },
                React.createElement(
                    'div',
                    { className: 'ucs-toast-content' },
                    this.props.type !== 'info' ? React.createElement('i', { className: 'iconfont icon-' + this.props.type }) : '',
                    React.createElement(
                        'p',
                        null,
                        this.props.content
                    )
                )
            );
        }
    });
    return {
        success: function success(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'success', className: 'toast-success', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        fail: function fail(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'fail', className: 'toast-fail', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        info: function info(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'info', className: 'toast-info', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        warning: function warning(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'warning', className: 'toast-warning', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        }
    };
}();
module.exports = Toast;

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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var IncompleteInfo = __webpack_require__(5);
var Toast = __webpack_require__(20);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			sex: 1,
			userInfo: {},
			cert_no: '',
			cert_type: 0,
			birthdate: ''
		};
	},
	radioChecked: function radioChecked(index) {
		var _this = this;
		for (var i = 0; i < 2; i++) {
			_this.refs['RadioGroup1_' + i].className = "radio inline";
		}
		_this.refs['RadioGroup1_' + index].className = "radio inline checked";
		this.state.sex = index;
	},
	saveHandle: function saveHandle() {
		var _this = this;
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/completeInfo',
			data: {
				userId: LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY),
				userName: _this.refs.name.value,
				certType: _this.refs.certType.value,
				certNo: _this.refs.certNo.value,
				birthdate: _this.refs.birthdate.value,
				sex: _this.state.sex
			},
			success: function success(res) {
				if (res.code === 0) {
					Toast.info({
						content: '保存成功！'
					});
				}
			},
			error: function error(res) {
				console.log(res);
			}
		});
	},
	//获取出生日期
	getBirthdatByIdNo: function getBirthdatByIdNo(iIdNo) {
		var tmpStr = "";
		var strReturn = "";
		if (iIdNo.length == 15) {
			tmpStr = iIdNo.substring(6, 12);
			tmpStr = "19" + tmpStr;
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6);
			return tmpStr;
		} else {
			tmpStr = iIdNo.substring(6, 14);
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6);
			return tmpStr;
		}
	},
	certNoChange: function certNoChange(e) {
		this.setState({
			cert_no: e.target.value
		});
	},
	certNoBlue: function certNoBlue(e) {
		if (this.state.cert_type == 0) {
			this.setState({
				birthdate: this.getBirthdatByIdNo(e.target.value)
			});
		}
	},
	certTypeChange: function certTypeChange(e) {
		this.setState({
			cert_type: e.target.value
			// birthdate:this.getBirthdatByIdNo(e.target.value)
		});
	},
	birthChange: function birthChange(e) {
		this.setState({
			birthdate: e.target.value
		});
	},
	componentDidMount: function componentDidMount() {
		var _this = this;
		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'post',
			url: API_SERVICE_URL + '/v1.0/users/fetch',
			data: {
				username: LocalStorageUtil.get(STORAGE_CONSTANTS.USER_NAME_KEY)
			},
			success: function success(res) {
				_this.setState({
					userInfo: res.result[0],
					cert_no: res.result[0].cert_no,
					cert_type: res.result[0].cert_type,
					birthdate: res.result[0].birthdate
				}, function () {
					if (_this.state.userInfo.sex) {
						_this.radioChecked(_this.state.userInfo.sex);
					}
				});
			},
			error: function error(res) {
				console.log(res);
			}
		});
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
						this.state.userInfo.user_name !== "''" ? React.createElement('input', { type: 'text', ref: 'name', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D', value: this.state.userInfo.user_name }) : React.createElement('input', { type: 'text', ref: 'name', id: 'name', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D' })
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
							{ ref: 'certType', id: 'cardType', name: 'cardType', onChange: this.certTypeChange, value: this.state.cert_type },
							React.createElement(
								'option',
								{ value: '0' },
								'\u4E8C\u4EE3\u8EAB\u4EFD\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '1' },
								'\u519B\u5B98\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '2' },
								'\u6E2F\u6FB3\u901A\u884C\u8BC1'
							),
							React.createElement(
								'option',
								{ value: '3' },
								'\u62A4\u7167'
							),
							React.createElement(
								'option',
								{ value: '4' },
								'\u56DE\u4E61\u8BC1'
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
						React.createElement('input', { type: 'text', ref: 'certNo', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7', onChange: this.certNoChange, onBlur: this.certNoBlue, value: this.state.cert_no })
					),
					React.createElement(
						'p',
						{ className: 'info-list-p' },
						React.createElement(
							'span',
							{ className: 'middle' },
							'\u51FA\u751F\u65E5\u671F'
						),
						this.state.cert_type == 0 ? React.createElement('input', { type: 'text', ref: 'birthdate', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u51FA\u751F\u65E5\u671F(1970-01-01)', value: this.state.birthdate }) : React.createElement('input', { type: 'text', ref: 'birthdate', name: 'name', className: 'list-input-type', placeholder: '\u8BF7\u8F93\u5165\u51FA\u751F\u65E5\u671F(1970-01-01)', onChange: this.birthChange, value: this.state.birthdate })
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
							{ ref: 'RadioGroup1_1', className: 'radio inline', onClick: this.radioChecked.bind(this, 1) },
							React.createElement('input', { type: 'radio', name: 'sex', value: '1' }),
							'\u7537'
						),
						React.createElement(
							'label',
							{ ref: 'RadioGroup1_0', className: 'radio inline ', onClick: this.radioChecked.bind(this, 0) },
							React.createElement('input', { type: 'radio', name: 'sex', value: '0' }),
							'\u5973'
						)
					)
				),
				React.createElement(
					'section',
					{ className: 'button' },
					React.createElement(
						'a',
						{ className: 'btn-save', onClick: this.saveHandle },
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