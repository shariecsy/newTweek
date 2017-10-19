var Layer = React.createClass({
	render: function() {
		var layerCls = this.props.layerCls || '';
		return (
			<div className={this.props.show? "block" : "none"}>
				<div className={"layer-container "+layerCls}>
					<div className="layer-body">
						{this.props.children}
					</div>
				</div>
			</div>
        	)
	}
});

Layer.Title = React.createClass({
	render:function(){
		return (
			<div className="layer-title">
                {this.props.children}
            </div>
		)
	}
});
Layer.Text = React.createClass({
	render:function(){
		return (
			<div className="layer-text">
				{this.props.children}
			</div>
		)
	}
});
Layer.Button = React.createClass({
	
	render:function(){
		return (
			<div className="layer-button">
				<a href="javascript:;" className="layer-btn confirm" onClick={this.props.confirm}>确认</a><a href="javascript:;" className="layer-btn cancel" onClick={this.props.cancel}>取消</a>
			</div>
		)
	}
});
Layer.Background = React.createClass({
	render:function(){
		return (
			<div className={this.props.show? "layer-background block" :"layer-background"}></div>
		)
	}
});

module.exports = Layer;