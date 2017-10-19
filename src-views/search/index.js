/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var searchBoxes=document.getElementsByClassName('searchBox');

var Root = React.createClass({
	getInitialState:function(){
		return {
			layerLoading:false,
			layerShow:false,
			msg:'',
            noResult: true,
            goodsList:[]
		}
	},
	componentDidMount:function(){
		// for(var i =0;i<searchBoxes.length;i++){
		// 	searchBoxes[i].style.display="none";
		// }
		// searchBoxes[searchBoxes.length-1].style.display="block";
	},
    _searchSubmit: function () {
		var _this = this;
		var content = this.refs.searchForm.content.value;
		// for(var i =0;i<searchBoxes.length;i++){
		// 	searchBoxes[i].style.display="none";
		// }
		this.setState({
			layerLoading:true  //打开loading
		});

		UAjax.ajax({
			// method: 'post',
			// url: API_SERVICE_URL + '/v1.0/search/search/search',
			// async: true,
			// cache: false,
			// contentType: 'application/x-www-form-urlencoded',

			method: 'post',
			async: true,
			url:  API_SERVICE_URL + '/v1.0/goods/fetchList',
            data: {
                name: content
            },
			success: function(res) {
				if(res.code == 0 && res.result.length > 0) {
                    _this.setState({
                        noResult: false,
                        goodsList:res.result,
                        layerLoading:false  //关闭loading
                    });
				} else {
					_this.setState({
                        noResult: true,
						layerLoading:false  //关闭loading
					});
					// for(var i =0;i<searchBoxes.length;i++){
					// 	searchBoxes[i].style.display="none";
					// }
					// searchBoxes[0].style.display="block";
				}
			},
			error: function(res) {
				console.log(res);
				_this.setState({
					// layerLoading:false  //关闭loading
				});
				_this._layerShow(res.result.msg);
			}
		});
		return false;
    },
	_backHome:function(){
		var content=this.refs.searchForm.content.value;
        /*if(!content){
			this.setState({
				noResult: true
			})
		}*/
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
	_toDetail: function (v) {
        localStorage.setItem('goodsDetail',JSON.stringify(v));
        // window.location.href = API_SERVICE_URL + '/goodsDetail/index.html';
        window.location.href = '../goodsDetail/index.html';
    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">网上药店</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="search-box">
						<form target="_self" action="javascript:void(0);" ref="searchForm" onSubmit={this._searchSubmit} onChange={this._backHome}>
							<div className="am-input-group">
								<span className="am-input-group-label"><i className="iconfont icon-search"></i></span>
								<input type="search" className="am-form-field" autoFocus="autofocus" autoComplete="autocomplete" placeholder="搜索药品" name="content"/>
							</div>
						</form>
					</div>
					<div className={this.state.noResult ? "search-result" : "search-result hide"}>
						<div className="hasno">暂无搜索结果</div>
					</div>

					{/*搜索记录 start*/}
					<div ref="searchHistory" className={this.state.noResult ? "goods-container hide" : 'goods-container'}>
						{
							this.state.goodsList.map(function(v,i){
								return (
									<a href="javascript://" onClick={this._toDetail.bind(this,v)} className="goods-list-item" key={i}>
										<div className="goods-list-item-img">
											<img src={v.src}/>
										</div>
										<div className="goods-list-item-des">
											<p>{v.name}</p>
											<p className="factory">{v.factory}</p>
											<p className="goods-list-item-price">
												<span>¥</span>{v.price}<span className="imark">{v.standard}/{v.unit}</span>
											</p>
										</div>
									</a>
								)
							}.bind(this))
						}
					</div>
					{/*搜索记录 end*/}
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