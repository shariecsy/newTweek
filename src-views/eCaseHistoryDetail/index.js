/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');

var Root = React.createClass({
	getInitialState:function () {
		return{
            data: {},
			layerLoading:false,
			layerShow:false
		}
    },
    componentDidMount: function () {
		this._getMedicalRecords();
    },
	_getMedicalRecords: function() {
		var id = GetQueryString.getQueryString('id');
		// var id=2;
		this.setState({layerLoading:true});
		UAjax.ajax({
			method: 'post',
			url: API_SERVICE_URL + '/v1.0/records/getDetail',
			// url: 'http://localhost:8080/v1.0/records/getDetail',
			data: {id:id},
			async: true,
			cache: false,
			success: function(res) {
				if(res.code == 0) {
					this.setState({
						layerLoading:false,  //关闭loading
						data:res.result[0]
					})
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
					<div ref="e_detail" className="my-message e-case-history-detail">
						<h4>{this.state.data.hospital}</h4>
						<div className="basic-info">
							<ul className="clearfix">
								<li><label>科室：</label>{this.state.data.department}</li>
								<li><label>主治医生：</label>{this.state.data.doctor}</li>
							</ul>
							<p><label>医师诊断：</label>{this.state.data.result}</p>
							<p><label>就诊时间：</label>{this.state.data.visit_time}</p>
							<p><label>病历采集日期：</label>{this.state.data.collect_time}</p>
						</div>
						<div className="case-description">
							<p><label>病情描述：</label>{this.state.data.symptom}</p>
							<p><label>服药记录：</label>{this.state.data.dosing_hisotry}</p>
						</div>
						<div className="attachment">
							<div className="attachment-item">
								<ul className="clearfix">
									<li className="attachment-label">
										<label>影像：</label>
									</li>
									<li className="attachment-img">
										<img src={this.state.data.CT_url} alt=""/>
									</li>
								</ul>
							</div>
						</div>
						<div className="attachment">
							<div className="attachment-item">
								<ul className="clearfix">
									<li className="attachment-label">
										<label>化验单：</label>
									</li>
									<li className="attachment-img">
										<img src={this.state.data.report_url} alt=""/>
									</li>
								</ul>
							</div>
						</div>
					</div>
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