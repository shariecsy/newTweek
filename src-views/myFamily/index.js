/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Root = React.createClass({
	getInitialState:function(){
		return{
			layerLoading:false,
			layerShow:false,
			msg:'',
            personal:{},
			family:[]
		}
	},
    componentDidMount: function () {
        var _this = this;
		_this.setState({
			layerLoading:true  //打开loading
		})
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/my_family.json',
            success: function(res) {
                if(res.code == 0) {
					_this.setState({
						layerLoading:false  //关闭loading
					});
                    _this.setState({
                    	personal:res.data.personal,
                        family:res.data.family,
						layerLoading:false  //关闭loading
					});
                } else {
                    res.result;
					_this.setState({
						layerLoading:false,  //关闭loading
					})
                }
            },
            error: function(res) {
                console.log(res);
				_this._layerShow('网络异常');
				_this.setState({
					layerLoading:false  //关闭loading
				});
            }
        });
    },
	_toAddFamily:function(){
		window.location="../addFamily/index.html"
	},
	_layerShow:function(text,fn){
		var me = this;
		this.setState({
			layerShow:true,
			msg:text
		})
		setTimeout(function(){
			me.setState({
				layerShow:false,
				msg:''
			});
			fn&&fn();
		},2000)
	},
    render: function () {
		var _personal = this.state.personal;
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">我的家人</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-family">
						<ul>
							<li>
								<a href="../toCompleteInfo/">
									<div className="portrait"><img src={_personal.img_url?_personal.img_url:"https://yct.968309.com/mobileapp/images/avatar.png"}/></div>
									<div className="text-box">
										<p className="title">{_personal.name ? _personal.name : "信息未完善"}<i>(本人)</i></p>
										<p className="gender">
											<i className={_personal.male == "男" ? "am-icon-mars am-icon-fw" : "am-icon-venus am-icon-fw"}></i> {_personal.birth ? _personal.birth : "未知"}
										</p>
									</div>
								</a>
							</li>
							{this.state.family.length > 0 ?
                                this.state.family.map(function (v,i) {
                                    return(
										<li>
											<a href="javascript://">
												<div className="portrait"><img src={v.img_url?v.img_url:"https://yct.968309.com/mobileapp/images/avatar.png"}/></div>
												<div className="text-box">
													<p className="title">{v.name}<i>({v.relation})</i></p>
													<p className="gender">
														<i className={v.male == "男" ? "am-icon-mars am-icon-fw" : "am-icon-venus am-icon-fw"}></i> {v.birth}
													</p>
												</div>
											</a>
										</li>
                                    )
                                }) : ""
							}
						</ul>
						<p className="tips">
							<i className="am-icon-exclamation-circle am-icon-fw"></i>
							温馨提示：添加家人记录同时不能超过5位。
						</p>
						<div className="bottom-btn">
							<button className="am-btn am-btn-primary am-round am-btn-block" onClick={this._toAddFamily}>添加家人</button>
						</div>
					</div>
					
				</Container>
				{/*提示弹窗 start*/}
				<Layer show={this.state.layerShow} layerCls="alert-layer" ref="alertLayer">
					<Layer.Text>
						<p><i className="am-icon-info-circle am-icon-lg"></i></p>
						<p>{this.state.msg}</p>
					</Layer.Text>
				</Layer>
				<Layer.Background show={this.state.layerShow}/>
				{/*提示弹窗 end*/}
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