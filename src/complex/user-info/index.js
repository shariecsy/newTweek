var UserInfo = React.createClass({
	getInitialState:function(){
		var iconSrc = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_IMG_KEY);
		console.log(iconSrc);
		var accountNo = MobileNoUtil.crypt(LocalStorageUtil.get(STORAGE_CONSTANTS.USER_NAME_KEY));
		 return {
		 		iconSrc:iconSrc||'../images/camera.png',
		 		accountNo:accountNo
		 }
	},
	_imgOnClick:function(){
		
	},
	render: function() {
		return(
			<div className="user-info-block">
				<img className="user-info-block-left am-circle" width="60px" height="60px" src={this.state.iconSrc} onClick={this._imgOnClick}/>
				<span className="user-info-block-center">账号: {this.state.accountNo}</span>						
				<i className="user-info-block-right iconfont icon-arrow-right" onClick={this.props.clickHandler}></i>
            	</div>
		)
	}
})

module.exports = UserInfo;