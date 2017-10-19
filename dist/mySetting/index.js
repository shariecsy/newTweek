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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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

/***/ 4:
/***/ (function(module, exports) {

/**
 * 标签页组件
 * @author phy <yao.qianfeng@ucsmy.com>
 *
 *     @example
 *     <Tabs defaultActiveKey={0} onClick={callback}>
 *          <TabItem tab="Tab 1">Content of Tab Pane 1</TabItem>
 *          <TabItem tab="Tab 2">Content of Tab Pane 2</TabItem>
 *          <TabItem tab="Tab 3">Content of Tab Pane 3</TabItem>
 *          <TabItem tab="Tab 4">Content of Tab Pane 4</TabItem>
 *     </Tabs>
 */
var Tabs = React.createClass({
    displayName: "Tabs",

    propTypes: {
        defaultActiveKey: React.PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            disabled: false,
            defaultActiveKey: 0
        };
    },

    getInitialState: function getInitialState() {
        return {
            currentIndex: this.props.defaultActiveKey
        };
    },

    /**
     * 检查标题的索引号
     * @param index
     * @returns {*}
     */
    checkTitleIndex: function checkTitleIndex(index) {
        if (this.state.currentIndex == -1) {
            return "";
        } else {
            return index === this.state.currentIndex ? "ucs-tabs-active" : "";
        }
    },

    /**
     * 检查内容项容器的索引号
     * @param index
     * @returns {*}
     */
    checkContentIndex: function checkContentIndex(index) {
        if (this.state.currentIndex == -1) {
            return "none";
        } else {
            return index === this.state.currentIndex ? "block" : "none";
        }
    },

    /**
     * 点击事件处理函数
     * @param index
     * @param disabled
     * @private
     */
    _handleClick: function _handleClick(index, disabled) {
        if (!disabled) {
            this.setState({ currentIndex: index });
        }
    },

    render: function render() {
        var _self = this;
        return React.createElement(
            "div",
            { className: "ucs-tabs" },
            React.createElement(
                "div",
                { className: "ucs-tabs-bar" },
                React.createElement(
                    "ul",
                    null,
                    React.Children.map(this.props.children, function (element, index) {
                        var disabled = element.props.disabled ? 'disabled' : '';
                        return React.createElement(
                            "li",
                            { onClick: function onClick() {
                                    _self._handleClick(index, element.props.disabled);
                                }, className: disabled + " " + _self.checkTitleIndex(index) },
                            element.props.tab
                        );
                    })
                )
            ),
            React.createElement(
                "div",
                { className: "ucs-tabs-content" },
                React.Children.map(this.props.children, function (element, index) {
                    return React.createElement(
                        "div",
                        { className: "ucs-tabs-tabpane", style: { "display": _self.checkContentIndex(index) } },
                        element.props.children
                    );
                })
            )
        );
    }
});
Tabs.Item = React.createClass({
    displayName: "Item",

    render: function render() {
        return this.props.children;
    }
});

// Tabs.TabItem=TabItem;
module.exports = Tabs;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Tabs = __webpack_require__(4);

var Root = React.createClass({
    displayName: 'Root',

    componentDidMount: function componentDidMount() {},
    _toLogin: function _toLogin() {
        LocalStorageUtil.remove(STORAGE_CONSTANTS.USER_NAME_KEY);
        window.location = '../login/index.html';
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
                        '\u8BBE\u7F6E'
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
                    { className: 'my-message my-setting' },
                    React.createElement(
                        'ul',
                        { className: 'am-list am-list-static' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '../myFeedback/index.html' },
                                '\u610F\u89C1\u53CD\u9988',
                                React.createElement('i', { className: 'iconfont icon-arrow-right' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '../changeLoginPwd/index.html' },
                                '\u4FEE\u6539\u767B\u5F55\u5BC6\u7801',
                                React.createElement('i', { className: 'iconfont icon-arrow-right' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '../setPayPwd/index.html' },
                                '\u8BBE\u7F6E\u652F\u4ED8\u5BC6\u7801',
                                React.createElement('i', { className: 'iconfont icon-arrow-right' })
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '../addInviteCode/index.html' },
                                '\u6DFB\u52A0\u9080\u8BF7\u7801',
                                React.createElement('i', { className: 'iconfont icon-arrow-right' })
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'am-list am-list-static' },
                        React.createElement(
                            'li',
                            null,
                            '\u5F53\u524D\u7248\u672C',
                            React.createElement(
                                'i',
                                { className: 'fl-r' },
                                'v1.0'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'bottom-btn' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'am-btn am-btn-primary am-round am-btn-block', onClick: this._toLogin },
                            '\u9000\u51FA\u767B\u5F55'
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