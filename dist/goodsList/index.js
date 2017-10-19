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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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

/***/ 43:
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
            goodsList: [],
            layerLoading: false,
            pages: 0
        };
    },
    radioChecked: function radioChecked(index) {
        var radioEle = document.getElementsByClassName('radio');
        for (var i = 0; i < radioEle.length; i++) {
            radioEle[i].className = "radio inline am-icon-circle-o";
        }
        radioEle[index].className = "radio inline am-icon-check-circle";
    },
    _getGoods: function _getGoods(pages) {
        var _this = this;
        _this.state.pages++;
        var page = _this.state.pages;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'post',
            // url:'http://localhost:8080/v1.0/goods/fetchListPaging',
            url: API_SERVICE_URL + '/v1.0/goods/fetchListPaging',
            data: {
                currentNo: page,
                pageSize: 10
                //              page:page
            },
            success: function success(res) {
                if (res.code == 0) {
                    _this.setState({
                        goodsList: _this.state.goodsList.concat(res.result),
                        layerLoading: false //关闭loading
                    });
                } else {
                    _this.setState({
                        layerLoading: false //关闭loading
                    });
                    alert('没有更多数据');
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
    componentDidMount: function componentDidMount() {
        var _this = this;
        this.setState({
            layerLoading: true //打开loading
        });
        _this._getGoods(this.state.pages);
    },
    _toDetail: function _toDetail(v) {
        localStorage.setItem('goodsDetail', JSON.stringify(v));
        // window.location.href = API_SERVICE_URL + '/goodsDetail/index.html';
        window.location.href = '../goodsDetail/index.html';
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
                        '\u7F51\u4E0A\u836F\u5E97'
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
                    { className: 'goods-list' },
                    React.createElement(
                        'div',
                        { className: 'search-box' },
                        React.createElement(
                            'a',
                            { href: '../search/index.html' },
                            React.createElement(
                                'div',
                                { className: 'am-input-group' },
                                React.createElement(
                                    'span',
                                    { className: 'am-input-group-label' },
                                    React.createElement('i', { className: 'iconfont icon-search' })
                                ),
                                React.createElement('input', { type: 'search', className: 'am-form-field', placeholder: '\u641C\u7D22\u533B\u751F\u3001\u533B\u9662\u3001\u79D1\u5BA4\u3001\u836F\u54C1' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'goods-container', ref: 'container' },
                        this.state.goodsList.map(function (v, i) {
                            return React.createElement(
                                'a',
                                { href: 'javascript://', onClick: this._toDetail.bind(this, v), className: 'goods-list-item', key: i },
                                React.createElement(
                                    'div',
                                    { className: 'goods-list-item-img' },
                                    React.createElement('img', { src: v.src })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'goods-list-item-des' },
                                    React.createElement(
                                        'p',
                                        null,
                                        v.name
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'factory' },
                                        v.factory
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'goods-list-item-price' },
                                        React.createElement(
                                            'span',
                                            null,
                                            '\xA5'
                                        ),
                                        v.price,
                                        React.createElement(
                                            'span',
                                            { className: 'imark' },
                                            v.standard,
                                            '/',
                                            v.unit
                                        )
                                    )
                                )
                            );
                        }.bind(this))
                    ),
                    React.createElement(
                        'a',
                        { href: 'javascript://', className: 'add-more', onClick: this._getGoods.bind(this, this.state.pages) },
                        '\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A'
                    )
                )
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