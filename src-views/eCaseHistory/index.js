var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record/');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
    getInitialState:function(){
      return {
          listData:  [],
          currentNo:0,
          layerLoading:false,
          layerShow:false
      }
    },
    componentDidMount: function () {
        this._getMedicalRecordList();
    },
    _jumpToCaseHistory:function(id){
        window.location= "../eCaseHistoryDetail/index.html?id="+id;
    },
    _getMedicalRecordList: function(){
        var user_id = LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY);
        // 检验用户是否登录
        if(!user_id){
            alert('请登录');
            return false;
        }
        // var user_id = 1;
        this.setState({layerLoading:true});
        var resultArray;
        this.state.currentNo++;
        UAjax.ajax({
            method: 'post',
            url: API_SERVICE_URL + '/v1.0/records/getRecordList',
            data: {
                userId:user_id,
                currentNo:this.state.currentNo
            },
            async: true,
            cache: false,
            success: function(res) {
                resultArray=res.result;
                if(res.code == 0) {
                    this.setState({
                        layerLoading:false //关闭loading
                    })
                    if(this.state.listData.length>0){
                        console.log('sadfasdf')
                        for(var i = 0;i<resultArray.length;i++){
                            this.state.listData.push(resultArray[i]);
                        }
                    }else{
                        this.setState({
                            listData: res.result
                        });
                    }
                } else {
                    this.setState({
                        layerLoading:false  //关闭loading
                    })
                    this._layerShow(res.msg.sqlMessage);
                }
            }.bind(this),
            error: function(res) {
                this.setState({
                    layerLoading:false  //关闭loading
                })
                this._layerShow('服务器异常:'+res);
            }.bind(this)
        });
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
        var _this = this;
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">电子病历</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
				<Container>
                    <div className="tab-list-wrap">
                        <div className="am-list-news-bd">
                            {
                                this.state.listData.length==0?<NoRecord text="当前暂无消息~"/>:(<ul className="am-list">
                                    {
                                        this.state.listData.map(function(obj,index){
                                            return (
                                                <li className="am-g am-list-item-desced" key={index} onClick={_this._jumpToCaseHistory.bind(_this,obj.id)}>
                                                    <div className="am-cf">
                                                        <span className="tab-list-left am-fl">{obj.hospital}</span>
                                                        <span className="am-list-item-text am-fr">{obj.collect_time}</span>
                                                    </div>
                                                    <div className="tab-list-content">{obj.department}</div>
                                                    <div className="am-list-item-text">诊断结果：{obj.result}</div>
                                                    <div className="msg-list-block-right"><i className="msg-list-right iconfont icon-arrow-right"></i></div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>)
                            }
                        </div>
                    </div>
                    <a style={{display:this.state.listData.length==0?'none':'block'}} href="javascript:;" className="add-more" onClick={this._getMedicalRecordList}>点击加载更多</a>
				</Container>
                {/*其他提示弹窗 start*/}
                <Layer show={this.state.layerShow} layerCls="alert-layer" ref="alertLayer">
                    <Layer.Text>
                        <p><i className="am-icon-info-circle am-icon-lg"></i></p>
                        <p>{this.state.msg}</p>
                    </Layer.Text>
                </Layer>
                <Layer.Background show={this.state.layerShow}/>
                {/*其他提示弹窗 end*/}
                {/*Loading弹窗 start*/}
                <Layer show={this.state.layerLoading} layerCls="alert-loading">
                    <Layer.Text>
                        <img src="../images/loading.gif" alt="loading"/>
                    </Layer.Text>
                </Layer>
                <Layer.Background show={this.state.layerLoading}/>
                {/*Loading弹窗 end*/}
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));