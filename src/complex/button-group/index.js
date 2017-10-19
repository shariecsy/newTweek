var ButtonGroup = React.createClass({
	getDefaultProps:function(){
		return{
			avgcls:'am-avg-sm-4'
		}
	},
	render:function(){
		return (
			<div className="icon-btn-nav-block">
                    <ul className={this.props.avgcls}>
                        {this.props.children}
                    </ul>
	        </div>
		)
	}
});

ButtonGroup.Button = React.createClass({
	render:function(){
		var _clsname = "icon-btn "+this.props.icon;
		return (
			<li className="box" onClick={this.props.clickHandler}>
                <div>
                    <span className={_clsname}></span>
                    <span className="icon-btn-title">{this.props.title}</span>
                </div>
            </li>
		)
	}
});

ButtonGroup.Thumbnail = React.createClass({
	render:function(){
		var _clsname =this.props.icon;
		return (
			<li className="box pads" onClick={this.props.clickHandler}>
                <div>
                    <div className={_clsname}>{this.props.children}</div>
	                <div className="icon-btn-title-left">{this.props.title}</div>
	                <div className="icon-btn-title-left-subtitle">{this.props.subtitle}</div>
                </div>
            </li>
		)
	}
});

module.exports = ButtonGroup;
