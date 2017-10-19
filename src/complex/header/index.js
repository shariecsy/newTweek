var Header = React.createClass({
	render: function() {
		return (
			<header data-am-widget="header" className="am-header am-header-app am-header-fixed">
          		 {this.props.children}
        		</header>
        	)
	}
});

Header.LeftItem = React.createClass({
	render:function(){
		return (
			<div className="am-header-left am-header-nav">
                {this.props.children}
            </div>
		)
	}
});

Header.CenterItem = React.createClass({
	render:function(){
		return  (
			<div className="am-header-nav-center">
                {this.props.children}
            </div>
        )
	}
});

Header.RightItem = React.createClass({
	render:function(){
		return (
			<div className="am-header-right am-header-nav">
                {this.props.children}
            </div>
          )
	}
});

module.exports = Header;