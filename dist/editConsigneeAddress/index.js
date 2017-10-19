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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			noticeLayer: false,
			layerLoading: false,
			layerShow: false,
			name: '',
			tel_no: '',
			address: ''

		};
	},
	componentDidMount: function componentDidMount() {
		this._getAddressDetail();
		// this._editAddressItem();
	},
	_showLayer: function _showLayer() {
		this.setState({
			noticeLayer: true
		});
	},
	_closeLayer: function _closeLayer() {
		this.setState({
			noticeLayer: false
		});
	},
	_chooseAdress: function _chooseAdress() {
		this._deleteAddressItem();
		this._closeLayer();
	},
	_setDefaultAddress: function _setDefaultAddress() {
		var _isDefault = !this.state.isDefault;
		this.setState({
			isDefault: _isDefault
		});
		/*var radioEle=this.refs.radioEle;
  if(radioEle.className.indexOf('checked')>-1){
  	radioEle.className="radio inline";
  }else{
  	radioEle.className="radio inline checked";
  }*/
	},
	_layerShow: function _layerShow(text, fn) {
		var me = this;
		this.setState({
			layerShow: true,
			msg: text
		});
		setTimeout(function () {
			me.setState({
				layerShow: false,
				msg: ''
			});
			fn && fn();
		}, 2000);
	},
	_getAddressList: function _getAddressList() {
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		// 检验用户是否登录
		if (!user_id) {
			alert('请登录');
			return false;
		}
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/fetch',
			// url: 'http://localhost:8080/v1.0/address/fetch',
			data: {
				userId: user_id
				// userId:2
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false //关闭loading
					});
					if (res.result.length == 0) {
						window.location = '../noConsigneeAddress/index.html';
					} else {
						window.location = '../chooseConsigneeAddress/index.html';
					}
				} else {
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭loading
				});
				this._layerShow('服务器异常:' + res);
			}.bind(this)
		});
	},

	_getAddressDetail: function _getAddressDetail() {
		var addressId = GetQueryString.getQueryString('addressId');
		this.setState({ layerLoading: true });
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/fetchById',
			// url: 'http://localhost:8080/v1.0/address/fetchById',
			data: { addressId: addressId },
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false, //关闭loading
						addressItem: res.result[0],
						name: res.result[0].name,
						tel_no: res.result[0].tel_no,
						address: res.result[0].address,
						isDefault: res.result[0].is_default
					});
				} else {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭loading
				});
				this._layerShow('服务器异常:' + res);
			}.bind(this)
		});
	},
	_deleteAddressItem: function _deleteAddressItem() {
		this.setState({
			layerLoading: true
		});
		var addressId = GetQueryString.getQueryString('addressId');
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/delete',
			// url: 'http://localhost:8080/v1.0/address/delete',
			data: { id: addressId },
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false, //关闭loading
						noticeLayer: false
					});
					this._layerShow('删除成功！', this._getAddressList);
				} else {
					this.setState({
						layerLoading: false, //关闭loading
						noticeLayer: false
					});
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false, //关闭loading
					noticeLayer: false
				});
				this._layerShow('服务器异常:' + res);
			}.bind(this)
		});
	},
	_editAddressItem: function _editAddressItem() {
		this.setState({
			layerLoading: true
		});
		var addressId = GetQueryString.getQueryString('addressId');
		var name = this.refs['receiver'].value;
		var telNo = this.refs['telNo'].value;
		var addr_detail = this.refs['addr_detail'].value;
		// var isDefault = this.refs['radioEle'].querySelector('input[type=radio]').checked ? 1 : 0;
		var isDefault = this.state.isDefault;
		console.log(isDefault);
		var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
		// 检验用户是否登录
		if (!user_id) {
			alert('请登录');
			return false;
		}
		this.setState({
			layerLoading: true //打开loading
		});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/address/update',
			// url: 'http://localhost:8080/v1.0/address/update',
			data: {
				id: addressId,
				userId: user_id,
				address: addr_detail,
				name: name,
				telNo: telNo,
				isDefault: isDefault
			},
			async: true,
			cache: false,
			success: function (res) {
				if (res.code == 0) {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow('修改成功！');
					window.location.href = '../chooseConsigneeAddress/index.html';
				} else {
					this.setState({
						layerLoading: false //关闭loading
					});
					this._layerShow(res.msg.sqlMessage);
				}
			}.bind(this),
			error: function (res) {
				this.setState({
					layerLoading: false //关闭loading
				});
				this._layerShow('服务器异常:' + res);
			}.bind(this)
		});
	},
	_onChangeName: function _onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	},
	_onChangetel_no: function _onChangetel_no(e) {
		this.setState({
			tel_no: e.target.value
		});
	},
	_onChangeAddress: function _onChangeAddress(e) {
		this.setState({
			address: e.target.value
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
						'\u7F16\u8F91\u6536\u8D27\u5730\u5740'
					)
				),
				React.createElement(
					Header.RightItem,
					null,
					React.createElement(
						'a',
						{ href: 'javascript:;', onClick: this._showLayer },
						'\u5220\u9664'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ className: 'edit-address-wrap' },
					React.createElement(
						'div',
						{ className: 'edit-wrap display-box' },
						React.createElement(
							'p',
							{ className: 'edit-size box-flex' },
							'\u6536\u8D27\u4EBA\uFF1A'
						),
						React.createElement(
							'p',
							{ className: 'edit-input box-flex' },
							React.createElement('input', { type: 'text', value: this.state.name, ref: 'receiver', onChange: this._onChangeName })
						)
					),
					React.createElement(
						'div',
						{ className: 'edit-wrap display-box' },
						React.createElement(
							'p',
							{ className: 'edit-size box-flex' },
							'\u624B\u673A\u53F7\u7801\uFF1A'
						),
						React.createElement(
							'p',
							{ className: 'edit-input box-flex' },
							React.createElement('input', { type: 'text', value: this.state.tel_no, ref: 'telNo', onChange: this._onChangetel_no })
						)
					),
					React.createElement(
						'div',
						{ className: 'edit-wrap edit-detailed-address display-box' },
						React.createElement(
							'p',
							{ className: 'edit-size box-flex' },
							'\u8BE6\u7EC6\u5730\u5740\uFF1A'
						),
						React.createElement(
							'p',
							{ className: 'edit-input edit-textarea box-flex' },
							React.createElement('textarea', { name: '', id: '', value: this.state.address, ref: 'addr_detail', onChange: this._onChangeAddress })
						)
					),
					React.createElement(
						'div',
						{ className: 'setDefault-address' },
						React.createElement(
							'div',
							{ className: 'setDefault-wrap clearfix' },
							React.createElement(
								'p',
								{ className: 'setDefault-left' },
								'\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u5730\u5740'
							),
							React.createElement(
								'div',
								{ className: 'setDefault-right' },
								React.createElement(
									'label',
									{ className: this.state.isDefault ? "radio inline checked" : "radio inline", ref: 'radioEle' },
									React.createElement('input', { type: 'radio', onClick: this._setDefaultAddress })
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'button' },
					React.createElement(
						'a',
						{ href: 'javascript:;', className: 'btn-save', onClick: this._editAddressItem },
						'\u4FDD\u5B58'
					)
				)
			),
			React.createElement(
				Layer,
				{ show: this.state.noticeLayer, layerCls: 'confirm-layer' },
				React.createElement(
					Layer.Title,
					null,
					'\u63D0\u793A'
				),
				React.createElement(
					Layer.Text,
					null,
					'\u662F\u5426\u786E\u5B9A\u5220\u9664\u8BE5\u5730\u5740\uFF1F'
				),
				React.createElement(Layer.Button, { cancel: this._closeLayer, confirm: this._chooseAdress })
			),
			React.createElement(Layer.Background, { show: this.state.noticeLayer }),
			React.createElement(
				Layer,
				{ show: this.state.layerShow, layerCls: 'alert-layer', ref: 'alertLayer' },
				React.createElement(
					Layer.Text,
					null,
					React.createElement(
						'p',
						null,
						React.createElement('i', { className: 'am-icon-info-circle am-icon-lg' })
					),
					React.createElement(
						'p',
						null,
						this.state.msg
					)
				)
			),
			React.createElement(Layer.Background, { show: this.state.layerShow }),
			React.createElement(
				Layer,
				{ show: this.state.layerLoading, layerCls: 'alert-loading' },
				React.createElement(
					Layer.Text,
					null,
					React.createElement('img', { src: '../images/loading.gif', alt: 'loading' })
				)
			),
			React.createElement(Layer.Background, { show: this.state.layerLoading })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });