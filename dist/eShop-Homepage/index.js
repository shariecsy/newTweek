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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

/***/ 11:
/***/ (function(module, exports) {

var ButtonGroup = React.createClass({
	displayName: "ButtonGroup",

	getDefaultProps: function getDefaultProps() {
		return {
			avgcls: 'am-avg-sm-4'
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "icon-btn-nav-block" },
			React.createElement(
				"ul",
				{ className: this.props.avgcls },
				this.props.children
			)
		);
	}
});

ButtonGroup.Button = React.createClass({
	displayName: "Button",

	render: function render() {
		var _clsname = "icon-btn " + this.props.icon;
		return React.createElement(
			"li",
			{ className: "box", onClick: this.props.clickHandler },
			React.createElement(
				"div",
				null,
				React.createElement("span", { className: _clsname }),
				React.createElement(
					"span",
					{ className: "icon-btn-title" },
					this.props.title
				)
			)
		);
	}
});

ButtonGroup.Thumbnail = React.createClass({
	displayName: "Thumbnail",

	render: function render() {
		var _clsname = this.props.icon;
		return React.createElement(
			"li",
			{ className: "box pads", onClick: this.props.clickHandler },
			React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: _clsname },
					this.props.children
				),
				React.createElement(
					"div",
					{ className: "icon-btn-title-left" },
					this.props.title
				),
				React.createElement(
					"div",
					{ className: "icon-btn-title-left-subtitle" },
					this.props.subtitle
				)
			)
		);
	}
});

module.exports = ButtonGroup;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/**
 *
 * 无缝滚动
 *
 * @param [config] 配置信息。包含：a: dataType：数据类型：1：文本；2：图片；3：文字+图片; b: direction:滚动方向：up, down, left, right; c:speed:滚动速度：1-100：数字越大，滚动越快；负数：同0；d:scrollType:滚动类型：1：无缝滚动；2：间歇滚动;e:stopTime:间歇滚动停顿时间
 *
 * @param [dataSource]  数据源：数组格式
 *
 * @constructs
 * @author huangdebin
 * SeamlessScroll
 *
 * 示例:
 *
 *     @example
 *     <SeamlessScroll id="seamlessScrollId" config={CONFIG} dataSource={DATASOURCE} />
 */
var SeamlessScroll = React.createClass({
    displayName: 'SeamlessScroll',

    getDefaultProps: function getDefaultProps() {
        return {
            config: {
                dataType: '1',
                direction: 'up',
                speed: '5', //滚动速度
                scrollType: '2', //1：无缝滚动，2：间歇滚动:只有向上滚动的场景
                stopTime: '1500' //间歇滚动停顿时间
            }
        };
    },
    getInitialState: function getInitialState() {
        return null;
    },
    //获取一个特定元素(elem)的样式属性(name)
    getStyle: function getStyle(elem, name) {
        //如果该属性存在于 style[]中，则它最近被设置过(且就是当前的)
        if (elem.style[name]) return elem.style[name];
        //否则，尝试 IE 的方式
        else if (elem.currentStyle) return elem.currentStyle[name];
            //或者 W3C 的方法，如果存在的话
            else if (document.defaultView && document.defaultView.getComputedStyle) {
                    //它使用传统的"text-Align"风格的规则书写方式，而不是"textAlign"
                    name = name.replace(/([A-Z])/g, "-$1");
                    name = name.toLowerCase();
                    //获取 style 对象并取得属性的值(如果存在的话)
                    var s = document.defaultView.getComputedStyle(elem, "");
                    return s && s.getPropertyValue(name);
                    //否则，就是在使用其它的浏览器
                } else return null;
    },
    getElementOffsetLeft: function getElementOffsetLeft(ele) {
        var actualLeft = ele.offsetLeft;
        var current = ele.offsetParent;
        while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        if (document.compatMode == "BackCompat") {
            var elementScrollLeft = document.body.scrollLeft;
        } else {
            var elementScrollLeft = document.documentElement.scrollLeft;
        }
        return actualLeft - elementScrollLeft;
    },
    myAddEvent: function myAddEvent(element, type, fn) {
        if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else {
            element['on' + type] = fn;
        }
    },
    componentDidMount: function componentDidMount() {
        //getElementsByClassName 兼容ie7
        if (!document.getElementsByClassName) {
            document.getElementsByClassName = function (className, element) {
                var children = (element || document).getElementsByTagName('*');
                var elements = new Array();
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    var classNames = child.className.split(' ');
                    for (var j = 0; j < classNames.length; j++) {
                        if (classNames[j] == className) {
                            elements.push(child);
                            break;
                        }
                    }
                }
                return elements;
            };
        }

        var reactThis = this;
        var _wrap = this.refs.ucsSeamlessScroll;
        var _wrapIn = this.refs.ucsSeamlessScrollIn;
        var _block1 = this.refs.seamlessScrollList1;
        var _block2 = this.refs.seamlessScrollList2;
        var _ul = _block1.getElementsByTagName('ul')[0];
        var _speed = this.props.config.speed;
        var _stopTime = this.props.config.stopTime;
        var _direction = this.props.config.direction;
        var _scrollType = this.props.config.scrollType;
        if (_direction == 'up' || _direction == 'down') {
            if (_block1.offsetHeight < _wrap.offsetHeight) {
                return;
            } else {
                _block2.innerHTML = _block1.innerHTML;
            }
        }
        if (_direction == 'left' || _direction == 'right') {
            //设置ul的宽度
            var _ulWidth = 0;
            for (var i = 0, len = _ul.children.length; i < len; i++) {
                var w = parseFloat(_ul.children[i].offsetWidth) + parseFloat(this.getStyle(_ul.children[i], 'marginLeft')) + parseFloat(this.getStyle(_ul.children[i], 'marginRight'));
                _ulWidth += w;
            }
            if (_ulWidth < _wrap.offsetWidth) {
                return;
            } else {
                _block2.innerHTML = _block1.innerHTML;
                _block2.getElementsByTagName('ul')[0].style.width = _ul.style.width = _ulWidth + 'px';
                _wrapIn.style.width = _ulWidth * 2 + 'px';
            }
        }
        //无缝滚动
        if (_scrollType == '1') {
            //滚动函数
            var _marquee = function _marquee() {
                if (_direction == 'up') {
                    if (_block2.offsetTop - _wrapIn.scrollTop <= 0) {
                        _wrapIn.scrollTop -= _block2.offsetHeight;
                    } else {
                        _wrapIn.scrollTop++;
                    }
                } else if (_direction == 'down') {
                    if (_block1.offsetTop >= _wrapIn.scrollTop) {
                        _wrapIn.scrollTop = _block1.offsetHeight;
                    } else {
                        _wrapIn.scrollTop--;
                    }
                } else if (_direction == 'left') {
                    if (_block2.offsetWidth <= _wrap.scrollLeft) {
                        _wrap.scrollLeft -= _block1.offsetWidth;
                    } else {
                        _wrap.scrollLeft++;
                    }
                } else if (_direction == 'right') {

                    //由于offsetLeft在ie和其他浏览器获取的值不同，用getElementMargin函数兼容
                    var _block1OffsetLeft = reactThis.getElementOffsetLeft(_block1);
                    if (_block1OffsetLeft > _wrap.scrollLeft) {
                        _wrap.scrollLeft = _block2.offsetWidth;
                    } else {
                        _wrap.scrollLeft--;
                    }
                }
            };

            //启动定时器
            var timer = setInterval(_marquee, _speed);
        }

        //间歇滚动
        if (_scrollType == '2') {
            var startScroll = function startScroll() {
                timer2_1 = setInterval(function () {
                    scrollUp();
                }, _speed);
                _wrapIn.scrollTop++;
            };

            var scrollUp = function scrollUp() {
                var unitHeight = parseInt(_ul.children[0].offsetHeight) + parseInt(reactThis.getStyle(_ul.children[0], 'paddingTop')) + parseInt(reactThis.getStyle(_ul.children[0], 'paddingBottom')) + parseInt(reactThis.getStyle(_ul.children[0], 'marginTop')) + parseInt(reactThis.getStyle(_ul.children[0], 'marginBottom'));
                if (_wrapIn.scrollTop % unitHeight == 0) {
                    clearInterval(timer2_1);
                    setTimeout(startScroll, _stopTime);
                } else {
                    if (_direction == 'up') {
                        //根据实际应用场景，目前只预留向上滚动的情况
                        _wrapIn.scrollTop++;
                        if (_wrapIn.scrollTop >= _wrapIn.scrollHeight / 2) {
                            _wrapIn.scrollTop = 0;
                        }
                    }
                }
            };

            var timer2 = setTimeout(startScroll, _stopTime);
            var timer2_1;
        }
        //滚动 鼠标事件监听
        this.myAddEvent(_wrapIn, 'mouseenter', handleMouseIn);
        this.myAddEvent(_wrapIn, 'mouseleave', handleMouseOut);
        //鼠标悬浮
        function handleMouseIn() {
            if (_scrollType == '1') {
                clearInterval(timer);
            }
            if (_scrollType == '2') {}
        }
        //鼠标离开
        function handleMouseOut() {
            if (_scrollType == '1') {
                timer = setInterval(marquee, _speed);
            }
            if (_scrollType == '2') {}
        }
    },
    render: function render() {
        var _config = this.props.config;
        var _direction = _config.direction;
        if (_direction == 'up' || _direction == "down") {
            var _wrapClassName = 'ucs-seamless-scroll ucs-seamless-scroll-vertical';
        }
        if (_direction == 'left' || _direction == 'right') {
            var _wrapClassName = 'ucs-seamless-scroll ucs-seamless-scroll-horizontal';
        }
        return React.createElement(
            'div',
            { id: this.props.id, className: _wrapClassName, ref: 'ucsSeamlessScroll' },
            React.createElement(
                'div',
                { className: 'ucs-seamless-scroll-in', ref: 'ucsSeamlessScrollIn' },
                React.createElement(
                    'div',
                    { className: 'ucs-seamless-scroll-list1', ref: 'seamlessScrollList1' },
                    React.createElement(
                        'ul',
                        null,
                        this.props.dataSource.map(function (item, index) {
                            return React.createElement(SeamlessScrollItem, { config: _config, item: item, index: index, key: index });
                        })
                    )
                ),
                React.createElement('div', { className: 'ucs-seamless-scroll-list2', ref: 'seamlessScrollList2' })
            )
        );
    }
});
var SeamlessScrollItem = React.createClass({
    displayName: 'SeamlessScrollItem',

    render: function render() {
        var _anchor = this.props.item.anchor;
        var _title = this.props.item.title;
        var _image = this.props.item.image;
        var _index = this.props.index;
        var _dataType = this.props.config.dataType;
        if (_dataType == 1) {
            if (_anchor.trim() !== '') {
                return React.createElement(
                    'li',
                    { className: 'type-text', key: _index },
                    React.createElement(
                        'a',
                        { href: _anchor },
                        React.createElement('span', { dangerouslySetInnerHTML: { __html: _title } })
                    )
                );
            } else {
                return React.createElement(
                    'li',
                    { className: 'type-text', key: _index },
                    React.createElement('span', { dangerouslySetInnerHTML: { __html: _title } })
                );
            }
        } else if (_dataType == 2) {
            if (_anchor.trim() !== '') {
                return React.createElement(
                    'li',
                    { className: 'type-image', key: _index },
                    React.createElement(
                        'a',
                        { href: _anchor },
                        React.createElement('img', { src: _image })
                    )
                );
            } else {
                return React.createElement(
                    'li',
                    { className: 'type-image', key: _index },
                    React.createElement('img', { src: _image })
                );
            }
        } else if (_dataType == 3) {
            if (_anchor.trim() !== '') {
                return React.createElement(
                    'li',
                    { className: 'type-text-image', key: _index },
                    React.createElement(
                        'a',
                        { href: _anchor },
                        React.createElement('img', { src: _image }),
                        React.createElement('span', { dangerouslySetInnerHTML: { __html: _title } })
                    )
                );
            } else {
                return React.createElement(
                    'li',
                    { className: 'type-text-image', key: _index },
                    React.createElement('img', { src: _image }),
                    React.createElement('span', { dangerouslySetInnerHTML: { __html: _title } })
                );
            }
        } else {
            console.log('请检查参数dataType是否正确！参考值：1：文本；2：图片；3：图文');
        }
    }
});
module.exports = SeamlessScroll;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

var GoodsSlider = React.createClass({
	displayName: 'GoodsSlider',

	getDefaultProps: function getDefaultProps() {
		return {
			scrollbarHide: true,
			slidesPerView: 'auto',
			grabCursor: true,
			id: 'goods-slider'
		};
	},
	componentDidMount: function componentDidMount() {
		var id = this.props.id;
		var mySwiper = new Swiper('#' + id, {
			slidesPerView: this.props.slidesPerView,
			grabCursor: this.props.grabCursor
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-container', id: this.props.id },
			React.createElement(
				'div',
				{ className: 'swiper-wrapper' },
				this.props.children
			)
		);
	}
});

GoodsSlider.Item = React.createClass({
	displayName: 'Item',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-slide' },
			this.props.children
		);
	}
});

module.exports = GoodsSlider;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Slider = __webpack_require__(8);
var GoodsSlider = __webpack_require__(14);
var ButtonGroup = __webpack_require__(11);
var SeamlessScroll = __webpack_require__(13);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			switchOn: false,
			layerLoading: false,
			layerShow: false
		};
	},
	componentDidMount: function componentDidMount() {},
	_redirect: function _redirect(url) {
		window.location.href = url;
	},
	render: function render() {
		var CONFIG = {
			dataType: '1',
			direction: 'up',
			speed: '50', //滚动速度
			scrollType: '1', //1：无缝滚动，2：间歇滚动
			stopTime: '0' //间歇滚动停顿时间

		};
		var DATASOURCE = [{
			anchor: '',
			title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
		}, {
			anchor: '',
			title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
		}, {
			anchor: '',
			title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
		}, {
			anchor: '',
			title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
		}, {
			anchor: '',
			title: '<i class="heading"></i><span class="data">头条头条头条头条头条头条头条头条</span>'
		}];
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
					{ className: 'search-box' },
					React.createElement(
						'form',
						{ action: '#' },
						React.createElement(
							'div',
							{ className: 'am-input-group' },
							React.createElement(
								'span',
								{ className: 'am-input-group-label' },
								React.createElement('i', { className: 'iconfont icon-search' })
							),
							React.createElement('input', { type: 'search', className: 'am-form-field', placeholder: '\u641C\u7D22\u836F\u54C1', name: 'content' })
						)
					)
				),
				React.createElement(
					Slider,
					{ isShowButton: false },
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-1.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-2.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-3.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-4.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-5.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-6.jpg', width: '100%' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: '../images/banner-7.jpg', width: '100%' })
					)
				),
				React.createElement(
					ButtonGroup,
					null,
					React.createElement(ButtonGroup.Button, { icon: 'iconfont icon-all1 main-page-icon-gh', title: '\u5168\u90E8\u5206\u7C7B', clickHandler: this._redirect.bind(this, "###") }),
					React.createElement(ButtonGroup.Button, { icon: 'iconfont icon-coupon main-page-icon-pdhz', title: '\u5DF2\u9886\u4F18\u60E0', clickHandler: this._redirect.bind(this, "###") }),
					React.createElement(ButtonGroup.Button, { icon: 'iconfont icon-jiaofei main-page-icon-mzjf', title: '\u6211\u7684\u8BA2\u5355', clickHandler: this._redirect.bind(this, "###") })
				),
				React.createElement(
					'div',
					{ className: 'scroll-bar clearfix' },
					React.createElement(
						'div',
						{ className: 'scroll-logo' },
						React.createElement('img', { src: '../images/health.jpg', alt: '' })
					),
					React.createElement(
						'div',
						{ className: 'scroll-content' },
						React.createElement(SeamlessScroll, { id: 'seamlessScrollId', config: CONFIG, dataSource: DATASOURCE })
					)
				),
				React.createElement(
					'div',
					{ className: 'goods-category' },
					React.createElement(
						'div',
						{ className: 'category-head head-1' },
						'\u5BB6\u5EAD\u5E38\u5907'
					),
					React.createElement(
						'div',
						{ className: 'goods-slider' },
						React.createElement(
							GoodsSlider,
							{ id: 'goods-slider-1' },
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp.png' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'goods-category' },
					React.createElement(
						'div',
						{ className: 'category-head head-2' },
						'\u4EA7\u540E\u4FEE\u590D'
					),
					React.createElement(
						'div',
						{ className: 'goods-slider' },
						React.createElement(
							GoodsSlider,
							{ id: 'goods-slider-2' },
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp2.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp2.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp2.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp2.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp2.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'goods-category' },
					React.createElement(
						'div',
						{ className: 'category-head head-3' },
						'\u8425\u517B\u4FDD\u5065'
					),
					React.createElement(
						'div',
						{ className: 'goods-slider', id: 'goods-slider-3' },
						React.createElement(
							GoodsSlider,
							null,
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp3.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'goods-category' },
					React.createElement(
						'div',
						{ className: 'category-head head-4' },
						'\u533B\u7597\u5668\u68B0'
					),
					React.createElement(
						'div',
						{ className: 'goods-slider' },
						React.createElement(
							GoodsSlider,
							{ id: 'goods-slider-4' },
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							),
							React.createElement(
								GoodsSlider.Item,
								null,
								React.createElement(
									'div',
									{ className: 'goods-img' },
									React.createElement('img', { src: '../images/goods/yp4.jpg' })
								),
								React.createElement(
									'div',
									{ className: 'goods-info' },
									React.createElement(
										'div',
										{ className: 'goods-name' },
										'\u4EAC\u5236\u725B\u9EC4\u89E3\u6BD2\u72470.6g*8s/\u652F'
									),
									React.createElement(
										'div',
										{ className: 'goods-price' },
										'8.3'
									)
								)
							)
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

var Slider = React.createClass({
	displayName: 'Slider',

	getDefaultProps: function getDefaultProps() {
		return {
			isShowButton: true,
			isShowPagination: true,
			autoplay: 5000,
			isLoop: true,
			direction: 'horizontal'
		};
	},
	componentDidMount: function componentDidMount() {
		var mySwiper = new Swiper('#banner-slider', {
			// Optional parameters
			direction: this.props.direction,
			loop: this.props.isLoop,

			// If we need pagination
			pagination: '.swiper-pagination',

			// Navigation arrows
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',

			autoplay: this.props.autoplay
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-container', id: 'banner-slider' },
			React.createElement(
				'div',
				{ className: 'swiper-wrapper' },
				this.props.children
			),
			this.props.isShowPagination === true ? React.createElement('div', { className: 'swiper-pagination' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-prev' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-next' }) : React.createElement('div', null)
		);
	}
});

Slider.Item = React.createClass({
	displayName: 'Item',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-slide' },
			this.props.children
		);
	}
});

module.exports = Slider;

/***/ })

/******/ });