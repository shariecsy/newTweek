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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(2);

var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            payStyle: 'weixin'
        };
    },
    paySelect: function paySelect(v) {
        if (v == 'weixin') {
            this.setState({
                payStyle: 'weixin'
            });
        } else if (v == 'alipay') {
            this.setState({
                payStyle: 'alipay'
            });
        } else if (v == 'union') {
            this.setState({
                payStyle: 'union'
            });
        } else if (v == 'health_insurance') {
            this.setState({
                payStyle: 'health_insurance'
            });
        }
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
            url: API_SERVICE_URL + '/v1.0/order/getAmount',
            data: {
                id: LocalStorageUtil.get(STORAGE_CONSTANTS.ORDER_ID_KEY)
            },
            success: function success(res) {
                console.log(res);
                _this.setState({
                    totalPrice: res.result.amount
                });
            },
            error: function error(res) {
                console.log(res);
                _this.setState({
                    // layerLoading:false  //关闭loading
                });
            }
        });
    },
    render: function render() {
        var totalPrice = this.state.totalPrice;
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
                        '\u5728\u7EBF\u652F\u4ED8'
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
                    { className: 'payment' },
                    React.createElement(
                        'p',
                        { className: 'title' },
                        '\u652F\u4ED8\u65B9\u5F0F'
                    ),
                    React.createElement(
                        'ul',
                        { className: 'container' },
                        React.createElement(
                            'li',
                            { onClick: this.paySelect.bind(this, 'weixin') },
                            React.createElement(
                                'div',
                                { className: 'icon-wrap' },
                                this.state.payStyle == 'weixin' ? React.createElement('i', { className: 'am-icon-check' }) : ''
                            ),
                            React.createElement(
                                'p',
                                { className: 'icon-box' },
                                React.createElement('img', { src: '../libs/assets/images/weixin.jpg', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'center-wrap' },
                                React.createElement(
                                    'p',
                                    { className: 'paytitle' },
                                    '\u5FAE\u4FE1\u652F\u4ED8'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'paydec' },
                                    '\u5FAE\u4FE1\u5B89\u5168\u652F\u4ED8'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { onClick: this.paySelect.bind(this, 'alipay') },
                            React.createElement(
                                'div',
                                { className: 'icon-wrap' },
                                this.state.payStyle == 'alipay' ? React.createElement('i', { className: 'am-icon-check' }) : ''
                            ),
                            React.createElement(
                                'p',
                                { className: 'icon-box' },
                                React.createElement('img', { src: '../libs/assets/images/alipay.jpg', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'center-wrap' },
                                React.createElement(
                                    'p',
                                    { className: 'paytitle' },
                                    '\u652F\u4ED8\u5B9D\u652F\u4ED8'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'paydec' },
                                    '\u652F\u4ED8\u5B9D\u5B89\u5168\u652F\u4ED8'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { onClick: this.paySelect.bind(this, 'union') },
                            React.createElement(
                                'div',
                                { className: 'icon-wrap' },
                                this.state.payStyle == 'union' ? React.createElement('i', { className: 'am-icon-check' }) : ''
                            ),
                            React.createElement(
                                'p',
                                { className: 'icon-box' },
                                React.createElement('img', { src: '../libs/assets/images/union-pay.jpg', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'center-wrap' },
                                React.createElement(
                                    'p',
                                    { className: 'paytitle' },
                                    '\u94F6\u8054\u652F\u4ED8'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'paydec' },
                                    '\u4E2D\u56FD\u94F6\u8054\u5728\u7EBF\u652F\u4ED8'
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { onClick: this.paySelect.bind(this, 'health_insurance') },
                            React.createElement(
                                'div',
                                { className: 'icon-wrap' },
                                this.state.payStyle == 'health_insurance' ? React.createElement('i', { className: 'am-icon-check' }) : ''
                            ),
                            React.createElement(
                                'p',
                                { className: 'icon-box' },
                                React.createElement('img', { src: '../libs/assets/images/SI.jpg', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'center-wrap' },
                                React.createElement(
                                    'p',
                                    { className: 'paytitle' },
                                    '\u533B\u4FDD\u5361\u652F\u4ED8'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'paydec' },
                                    '\u533B\u4FDD\u5361\u5B89\u5168\u652F\u4ED8'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'button',
                { className: 'btn-fixed' },
                this.state.payStyle == 'weixin' ? '微信支付 ' : this.state.payStyle == 'alipay' ? '支付宝支付 ' : this.state.payStyle == 'union' ? '银联支付 ' : this.state.payStyle == 'health_insurance' ? '医保卡支付 ' : '',
                totalPrice,
                ' \u5143'
            ),
            React.createElement(
                Layer,
                { show: this.state.layerLoading, layerCls: 'alert-loading' },
                React.createElement(
                    Layer.Text,
                    null,
                    React.createElement('img', { src: '../images/loading.gif', alt: 'loading' })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });