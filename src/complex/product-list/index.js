var ButtonGroup = require('../button-group');
var ProductList = React.createClass({
	getDefaultProps:function(){
		return {
			avgcls: 'am-avg-sm-3'
		}
	},
	render:function(){
		return (
			<div>
                <div data-am-widget="titlebar" className="am-titlebar am-titlebar-default" >
                    <h2 className="am-titlebar-title ">
                        <span className="am-titlebar-title-font">{this.props.title}</span>
                    </h2>
                    {
                    		(this.props.moreTitle != undefined)?(<nav className="am-titlebar-nav">
                        				<a onClick={this.props.moreHandler} >{this.props.moreTitle} &raquo;</a>
                    				</nav>):(<div></div>)
                    }
                    
                </div>
                <ButtonGroup avgcls={this.props.avgcls}>
                		{this.props.children}
                </ButtonGroup>
            </div>
		)
	}
})

ProductList.Item = React.createClass({
	render:function(){
		return (
			<ButtonGroup.Thumbnail title={this.props.title} subtitle={this.props.subtitle} clickHandler={this.props.clickHandler} icon={this.props.icon}>
				{this.props.children}
			</ButtonGroup.Thumbnail>
		)
	}
})

ProductList.Button = React.createClass({
	render:function(){
		return (
			<ButtonGroup.Button icon={this.props.icon} title={this.props.title} clickHandler={this.props.clickHandler}/>
		)
	}
})

module.exports = ProductList;