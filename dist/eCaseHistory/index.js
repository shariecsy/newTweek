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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var NoRecord = __webpack_require__(3);
var Layer = __webpack_require__(2);

var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            listData: [],
            currentNo: 0,
            layerLoading: false,
            layerShow: false
        };
    },
    componentDidMount: function componentDidMount() {
        this._getMedicalRecordList();
    },
    _jumpToCaseHistory: function _jumpToCaseHistory(id) {
        window.location = "../eCaseHistoryDetail/index.html?id=" + id;
    },
    _getMedicalRecordList: function _getMedicalRecordList() {
        var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
        // 检验用户是否登录
        if (!user_id) {
            alert('请登录');
            return false;
        }
        // var user_id = 1;
        this.setState({ layerLoading: true });
        var resultArray;
        this.state.currentNo++;
        UAjax.ajax({
            method: 'post',
            url: API_SERVICE_URL + '/v1.0/records/getRecordList',
            data: {
                userId: user_id,
                currentNo: this.state.currentNo
            },
            async: true,
            cache: false,
            success: function (res) {
                resultArray = res.result;
                if (res.code == 0) {
                    this.setState({
                        layerLoading: false //关闭loading
                    });
                    if (this.state.listData.length > 0) {
                        console.log('sadfasdf');
                        for (var i = 0; i < resultArray.length; i++) {
                            this.state.listData.push(resultArray[i]);
                        }
                    } else {
                        this.setState({
                            listData: res.result
                        });
                    }
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
    render: function render() {
        var _this = this;
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
                        '\u7535\u5B50\u75C5\u5386'
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
                    { className: 'tab-list-wrap' },
                    React.createElement(
                        'div',
                        { className: 'am-list-news-bd' },
                        this.state.listData.length == 0 ? React.createElement(NoRecord, { text: '\u5F53\u524D\u6682\u65E0\u6D88\u606F~' }) : React.createElement(
                            'ul',
                            { className: 'am-list' },
                            this.state.listData.map(function (obj, index) {
                                return React.createElement(
                                    'li',
                                    { className: 'am-g am-list-item-desced', key: index, onClick: _this._jumpToCaseHistory.bind(_this, obj.id) },
                                    React.createElement(
                                        'div',
                                        { className: 'am-cf' },
                                        React.createElement(
                                            'span',
                                            { className: 'tab-list-left am-fl' },
                                            obj.hospital
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'am-list-item-text am-fr' },
                                            obj.collect_time
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'tab-list-content' },
                                        obj.department
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'am-list-item-text' },
                                        '\u8BCA\u65AD\u7ED3\u679C\uFF1A',
                                        obj.result
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'msg-list-block-right' },
                                        React.createElement('i', { className: 'msg-list-right iconfont icon-arrow-right' })
                                    )
                                );
                            })
                        )
                    )
                ),
                React.createElement(
                    'a',
                    { style: { display: this.state.listData.length == 0 ? 'none' : 'block' }, href: 'javascript:;', className: 'add-more', onClick: this._getMedicalRecordList },
                    '\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A'
                )
            ),
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