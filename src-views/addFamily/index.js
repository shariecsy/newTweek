/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
    radioChecked:function(index){
        var radioEle=document.getElementsByClassName('radio');
        for(var i =0;i<radioEle.length;i++){
            radioEle[i].className="radio inline am-icon-circle-o";
        }
        radioEle[index].className="radio inline am-icon-check-circle";
		if(index == 0){
			this.refs.male.value = 1;
		}else if(index == 1){
            this.refs.male.value = 2;
		}
    },
    saveFamily:function () {
        var _this = this;
        UAjax.ajax({
            // method: 'post',
            // url: API_SERVICE_URL + '/v1.0/goods/goodslist/goodslist',
            // async: true,
            // cache: false,
            // contentType: 'application/x-www-form-urlencoded',

            method: 'get',
            url: '../libs/json/add_family.json',
			/*data:{
            	relation:_this.refs.relation.value,
				name:_this.refs.name.value,
                cardType:_this.refs.cardType.value,
                cardNum:_this.refs.cardNum.value,
                birth:_this.refs.birth.value,
                male:_this.refs.male.value,
                phone:_this.refs.phone.value
			},*/
            success: function(res) {
                if(res.code == 0) {
                    _this.setState({
                        goodsList:res.data,
                        // layerLoading:false  //关闭loading
                    })
                } else {
                    res.result;
                    _this.setState({
                        // layerLoading:false  //关闭loading
                    })
                }
            },
            error: function(res) {
                console.log(res);
                _this.setState({
                    // layerLoading:false  //关闭loading
                })
            }
        });
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a href="javascript:window.history.back()"><i className="main-header-icon header-left-icon iconfont icon-arrow-left"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">添加家人</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html"><i className="main-header-icon header-right-icon iconfont icon-home"></i></a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message add-family">
						<section className="info-list">
							<p className="info-list-p">
								<span className="middle">关系</span>
								<select ref="relation">
									<option value="1">父母</option>
									<option value="2">配偶</option>
									<option value="3">子女</option>
									<option value="4">儿童</option>
									<option value="5">其他</option>
								</select>
								<i className="icon icon-down middle am-icon-chevron-down"></i>
							</p>
						</section>
						<section className="info-list">
							<p className="info-list-p">
								<span className="middle">姓名</span>
								<input type="text" name="name" className="list-input-type" placeholder="请输入姓名" ref="name"/>
							</p>
							<p className="info-list-p">
								<span className="middle">证件类型</span>
								<select name="cardType" ref="cardType">
									<option value="1">二代身份证</option>
									<option value="2">军官证</option>
									<option value="3">港澳通行证</option>
									<option value="4">护照</option>
								</select>
								<i className="icon icon-down middle am-icon-chevron-down"></i>
							</p>
							<p className="info-list-p">
								<span className="middle">证件号</span>
								<input type="text" name="name" className="list-input-type" placeholder="请输入证件号" ref="cardNum"/>
							</p>
							<p className="info-list-p">
								<span className="middle">出生日期</span>
								<input type="text" name="name" className="list-input-type" placeholder="请输入出生日期" ref="birth"/>
							</p>
							<p className="info-list-p">
								<span className="middle">性别</span>
								<input type="hidden" value="" ref="male"/>
								<label className="radio inline am-icon-circle-o" onClick={this.radioChecked.bind(this,0)}><input type="radio" name="sex" value="1"/>男</label>
								<label className="radio inline am-icon-circle-o" onClick={this.radioChecked.bind(this,1)}><input type="radio" name="sex" value="2"/>女</label>
							</p>
							<p className="info-list-p">
								<span className="middle">手机号码</span>
								<input type="text" name="name" className="list-input-type" placeholder="请认真填写手机号" ref="phone"/>
							</p>
						</section>
						<p className="tips">
							<i className="am-icon-exclamation-circle am-icon-fw"></i>
							温馨提示：请填写真实个人信息，以便第一时间收到就诊信息。如果子女还没有身份证在关系选项请选择儿童，选择儿童后完善监护人信息即可。
						</p>
						<div className="bottom-btn">
							<button className="am-btn am-btn-block am-btn-primary am-round" onClick={this.saveFamily}>保存</button>
						</div>
					</div>
					
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));