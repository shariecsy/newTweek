/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/20
 * 说明：Toast组件
 * 1. 自动消失弹窗组件
 * 2. 轻量级反馈/提示，可以用来显示不会打断用户操作的内容
 */

var Toast = (function () {
    var msgArea = document.createElement('div');

    var ToastItem = React.createClass({
        getDefaultProps: function () {
            return {
                content: null,
                duration: 3000,
                mask: true,
                onClose: null
            };
        },
        getInitialState: function () {
            return {
                content: this.props.content,
                duration: this.props.duration,
                mask: this.props.mask,
                onClose: this.props.onClose
            };
        },
        _toDisappear: function () {
            var _this = this;
            if (this._disappear) {
                clearTimeout(this._disappear);
            }
            this._disappear = setTimeout(function () {
                document.body.removeChild(msgArea);
                _this.props.onClose && _this.props.onClose();
            }, _this.props.duration);
        },
        componentDidMount: function () {
            this._toDisappear();
        },
        componentDidUpdate: function () {
            this._toDisappear();
        },
        render: function () {
            var _class = this.props.className ? 'ucs-toast ' + this.props.className : 'ucs-toast';
            _class = !this.props.mask ? _class + ' ucs-toast-nomask' : _class;
            document.body.appendChild(msgArea);
            return (
                <div className={_class}>
                    <div className="ucs-toast-content">
                        {this.props.type !== 'info'
                            ? <i className={'iconfont icon-' + this.props.type}></i> : ''
                        }
                        <p>{this.props.content}</p>
                    </div>
                </div>
            );
        }
    });
    return {
        success: function (obj) {
            ReactDOM.render(<ToastItem type="success" className="toast-success" content={obj.content} duration={obj.duration} mask={obj.mask} onClose={obj.onClose}/>, msgArea);
        },
        fail: function (obj) {
            ReactDOM.render(<ToastItem type="fail" className="toast-fail" content={obj.content} duration={obj.duration} mask={obj.mask} onClose={obj.onClose}/>, msgArea);
        },
        info: function (obj) {
            ReactDOM.render(<ToastItem type="info" className="toast-info" content={obj.content} duration={obj.duration} mask={obj.mask} onClose={obj.onClose}/>, msgArea);
        },
        warning: function (obj) {
            ReactDOM.render(<ToastItem type="warning" className="toast-warning" content={obj.content} duration={obj.duration} mask={obj.mask} onClose={obj.onClose}/>, msgArea);
        }
    };
})();
module.exports = Toast;
