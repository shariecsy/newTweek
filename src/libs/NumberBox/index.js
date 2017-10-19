/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/17
 * 说明：
 */
var NumberBox = React.createClass({
    getDefaultProps: function () {
        return {
            min: 1,
            max: 100,
            step: 1,
            defaultValue: 1,
            onDecrease: null,
            onIncrease: null
        }
    },
    getInitialState: function(){
        return {
            val: this.props.defaultValue
        }
    },
    _onDecrease: function () {
        var _val = this.state.val - this.props.step;
        if(_val < this.props.min){
            _val = this.props.min;
        }
        this.setState({
            val: _val
        });
        this.props.onDecrease && this.props.onDecrease();
    },
    _onIncrease: function () {
        var _val = this.state.val + this.props.step;
        if(_val > this.props.max){
            _val = this.props.max;
        }
        this.setState({
            val: _val
        });
        this.props.onIncrease && this.props.onIncrease();
    },
    render: function () {
        var _class = this.props.className ? 'input-number ' + this.props.className : 'input-number';
        return (
            <div className={_class}>
                <button className="decrease" onClick={this._onDecrease}>-</button>
                <input ref="numInput" type="number" min={this.props.min} max={this.props.max} value={this.state.val}/>
                <button className="increase" onClick={this._onIncrease}>+</button>
            </div>
        )
    }
});
module.exports = NumberBox;