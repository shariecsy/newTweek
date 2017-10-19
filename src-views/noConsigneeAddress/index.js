
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
    componentDidMount: function () {
    },
	_createAddress: function( ){
		window.location='../createNewAddress/index.html';
	},
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">选择收货地址</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
					<NoRecord text="你还没有收货地址~"/>
					<div className="button"><a className="btn-save" onClick={this._createAddress}>添加收货地址</a></div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));