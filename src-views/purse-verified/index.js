
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function(){
		return {
			layerLoading:false
		}
	},
	_btnClsChange:function(){
		this.refs.verifyBtn.className='csn-btn active';
	},
	_clearBtnShow:function(e){
		var children=e.target.parentNode.children;
		if(e.target.value){
			children[2].className="clear am-icon-close block";//显示删除按钮
		}
	},
	_clearInputText:function(e){
		var children=e.target.parentNode.children;
		if(children[1].value){
			children[1].value='';
			children[2].className="clear am-icon-close";//隐藏删除按钮
		}
	},
	_clearBtnHide:function(e){
		var children=e.target.parentNode.children;
		children[2].className="clear am-icon-close";//隐藏删除按钮
	},
    componentDidMount:function(){

    },
    _checkVerified:function() {
        var _this = this;
		this.setState({
			layerLoading:true  //打开loading
		})
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/purse_verified.json',
            // data:{
            // 	name:_this.refs.name.value,
            // 	id_num:_this.refs.idNum.value
            // },
            success: function (res) {
                if (res.code == 0) {
                    alert("验证通过！");
                    // window.location = "../index/index.html";
					_this.setState({
						// layerLoading:false  //关闭loading
					});
                } else {
					_this.setState({
						// layerLoading:false  //关闭loading
					});
                    res.result;
					
                }
            },
            error: function (res) {
				_this.setState({
					// layerLoading:false  //关闭loading
				});
                console.log(res);
            }
        });
    },
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">验证身份信息</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="bindCard-box">
					   <section className="csn-m-scroll">
						   <ul className="csn-box csn-list">
							   <li>
								   <label>姓名</label>
								   <input type="text" className="input-txt" placeholder="请输入持卡人姓名" ref="name" onChange={this._clearBtnShow} onBlur={this._clearBtnHide} onFocus={this._clearBtnShow}/>
								   <i className="clear am-icon-close" onClick={this._clearInputText}></i>
							   </li>
							   <li>
								   <label>身份证号</label>
								   <input type="text" className="input-txt border-0" placeholder="请输入持卡人身份证号" ref="idNum" onChange={this._clearBtnShow} onBlur={this._clearBtnHide} onFocus={this._clearBtnShow}/>
								   <i className="clear am-icon-close" onClick={this._clearInputText}></i>
							   </li>
						   </ul>
						   <a href="javascript:void(0);" className="csn-btn disabled" ref="verifyBtn" onClick={this._checkVerified}>验证身份</a>
						   <footer className="csn-footer">
							   <div>本服务由信账宝提供支持</div>
						   </footer>
					   </section>
				   </div>
				</Container>
				{/*Loading弹窗 start*/}
				<Layer show={this.state.layerLoading} layerCls="alert-loading">
					<Layer.Text>
						<img src="../images/loading.gif" alt="loading"/>
					</Layer.Text>
				</Layer>
				{/*Loading弹窗 end*/}
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));