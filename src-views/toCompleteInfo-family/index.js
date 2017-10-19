
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var IncompleteInfo=require('../../src/complex/incomplete-info');

var Root = React.createClass({
	getInitialState:function(){
		return {
		}
	},
	radioChecked:function(index){
		var radioEle=document.getElementsByClassName('radio');
		for(var i =0;i<radioEle.length;i++){

				radioEle[i].className="radio inline";

		}
		radioEle[index].className="radio inline checked";

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
							<input type="text" id="name" name="name" className="list-input-type" placeholder="请输入姓名"/>
				   		</p>
					   <p className="info-list-p">
						   <span className="middle">证件类型</span>
						   <select id="cardType" name="cardType">
							   <option value="1">二代身份证</option>
							   <option value="2">军官证</option>
							   <option value="3">港澳通行证</option>
							   <option value="4">护照</option>
						   </select>
						   <i className="icon icon-down middle am-icon-chevron-down"></i>
					   </p>
					   <p className="info-list-p">
						   <span className="middle">证件号</span>
						   <input type="text" id="name" name="name" className="list-input-type" placeholder="请输入证件号"/>
					   </p>
					   <p className="info-list-p">
						   <span className="middle">出生日期</span>
						   <input type="text" id="name" name="name" className="list-input-type" placeholder="请输入出生日期"/>
					   </p>
					   <p className="info-list-p">
						   <span className="middle">性别</span>
						   <label id="RadioGroup1_0" className="radio inline" onClick={this.radioChecked.bind(this,0)}><input type="radio" name="sex" value="1"/>男</label>
							   <label id="RadioGroup1_1" className="radio inline " onClick={this.radioChecked.bind(this,1)}><input type="radio" name="sex" value="2"/>女</label>
							   </p>
					   <p className="info-list-p">
						   <span className="middle">手机号码</span>
						   <input type="text" id="name" name="name" className="list-input-type" placeholder="请认真填写手机号"/>
					   </p>
				   </section>
				   <section className="info-list">
					   <p className="info-list-p">
						   <span className="middle">关系</span>
						   <select id="cardType" name="cardType">
							   <option value="1">父母</option>
							   <option value="2">配偶</option>
							   <option value="3">子女</option>
							   <option value="4">儿童</option>
							   <option value="5">其他</option>
						   </select>
						   <i className="icon icon-down middle am-icon-chevron-down"></i>
					   </p>
				   </section>
				   <div className="app-notice"><i className="am-icon-info-circle"></i>温馨提示：请填写真实的个人信息，以便第一时间收到就诊信息。</div>
				   <section className="button">
					   <a className="btn-save">保存</a>
				   </section>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));