
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var IncompleteInfo=require('../../src/complex/incomplete-info');
var Toast=require('../../src/libs/toast');

var Root = React.createClass({
	getInitialState:function(){
		return {
			sex: 1,
			userInfo:{},
			cert_no:'',
			cert_type:0,
			birthdate:''
		}
	},
	radioChecked:function(index){
		var _this = this;
		for(var i = 0;i < 2;i++){
            _this.refs['RadioGroup1_'+i].className = "radio inline";
		}
        _this.refs['RadioGroup1_'+index].className="radio inline checked";
		this.state.sex = index;
	},
    saveHandle: function () {
        var _this = this;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'post',
            url: API_SERVICE_URL + '/v1.0/users/completeInfo',
            data:{
                userId:LocalStorageUtil.get(STORAGE_CONSTANTS.USER_ID_KEY),
                userName:_this.refs.name.value,
                certType:_this.refs.certType.value,
                certNo:_this.refs.certNo.value,
                birthdate:_this.refs.birthdate.value,
				sex:_this.state.sex
            },
            success: function(res) {
                if(res.code === 0){
					Toast.info({
						content: '保存成功！'
					});
				}
            },
            error: function(res) {
                console.log(res);
            }
        });
	},
	//获取出生日期
	getBirthdatByIdNo: function(iIdNo) {
		var tmpStr = "";
		var strReturn = "";
		if (iIdNo.length == 15) {
			tmpStr = iIdNo.substring(6, 12);
			tmpStr = "19" + tmpStr;
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
			return tmpStr;
		}else {
			tmpStr = iIdNo.substring(6, 14);
			tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
			return tmpStr;
		}
	},
	certNoChange:function(e){
		this.setState({
			cert_no:e.target.value
		});
	},
	certNoBlue:function(e){
		if(this.state.cert_type == 0){
			this.setState({
				birthdate:this.getBirthdatByIdNo(e.target.value)
			})
		}
	},
	certTypeChange:function(e){
		this.setState({
			cert_type:e.target.value,
			// birthdate:this.getBirthdatByIdNo(e.target.value)
		});
	},
	birthChange:function(e){
		this.setState({
			birthdate:e.target.value
		});
	},
	componentDidMount: function(){
		var _this = this;
		UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'post',
            url: API_SERVICE_URL + '/v1.0/users/fetch',
            data:{
                username:LocalStorageUtil.get(STORAGE_CONSTANTS.USER_NAME_KEY)
            },
            success: function(res) {
				_this.setState({
					userInfo: res.result[0],
					cert_no: res.result[0].cert_no,
					cert_type: res.result[0].cert_type,
					birthdate: res.result[0].birthdate
				},function (){
					if(_this.state.userInfo.sex){
					_this.radioChecked(_this.state.userInfo.sex);
					}
				});
            },
            error: function(res) {
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
						<h1 className="am-header-title">完善个人信息</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <section className="info-list">
				   		<p className="info-list-p">
							<span className="middle">姓名</span>
							{this.state.userInfo.user_name !== "''" ?
								<input type="text" ref="name" id="name" name="name" className="list-input-type" placeholder="请输入姓名" value={this.state.userInfo.user_name}/> :
								<input type="text" ref="name" id="name" name="name" className="list-input-type" placeholder="请输入姓名"/>
                            }
				   		</p>
					   <p className="info-list-p">
						   <span className="middle">证件类型</span>
						   <select ref="certType" id="cardType" name="cardType" onChange={this.certTypeChange} value={this.state.cert_type}>
							   <option value="0">二代身份证</option>
							   <option value="1">军官证</option>
							   <option value="2">港澳通行证</option>
							   <option value="3">护照</option>
							   <option value="4">回乡证</option>
						   </select>
						   <i className="icon icon-down middle am-icon-chevron-down"></i>
					   </p>
					   <p className="info-list-p">
						   <span className="middle">证件号</span>
						   <input type="text" ref="certNo" name="name" className="list-input-type" placeholder="请输入证件号" onChange={this.certNoChange} onBlur={this.certNoBlue} value={this.state.cert_no}/>
					   </p>
					   <p className="info-list-p">
						   <span className="middle">出生日期</span>
						   {this.state.cert_type == 0 ?
								<input type="text" ref="birthdate" name="name" className="list-input-type" placeholder="请输入出生日期(1970-01-01)" value={this.state.birthdate}/> :
								<input type="text" ref="birthdate" name="name" className="list-input-type" placeholder="请输入出生日期(1970-01-01)" onChange={this.birthChange} value={this.state.birthdate}/>
						   }
					   </p>
					   <p className="info-list-p">
						   <span className="middle">性别</span>
						   <label ref="RadioGroup1_1" className="radio inline" onClick={this.radioChecked.bind(this,1)}>
							   <input type="radio" name="sex" value="1"/>男
						   </label>
						   <label ref="RadioGroup1_0" className="radio inline " onClick={this.radioChecked.bind(this,0)}>
							   <input type="radio" name="sex" value="0"/>女
						   </label>
					   </p>
				   </section>
				   <section className="button">
					   <a className="btn-save" onClick={this.saveHandle}>保存</a>
				   </section>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));