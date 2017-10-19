/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Footer = require('../../src/complex/footer');
var Container = require('../../src/complex/container');
var Slider = require('../../src/complex/slider');
var ButtonGroup = require('../../src/complex/button-group');
var ProductList = require('../../src/complex/product-list');
var TabBar = require('../../src/complex/tabbar');

var Root = React.createClass({
	_redirect: function(url) {
		window.location.href = url;
	},
	_qrcodeClickHandler: function() {
		if(NativeBridge) {
			NativeBridge.call('qr_scan', '', function(data) {
				alert(data);
			});
		}
	},
	_jumpToMedicinalList:function(){
		window.location.href = '../goodsList/index.html';
	},
	_jumpToMedicinalShop: function(){
		window.location.href = '../eShop-Homepage/index.html';
	},
	getInitialState:function(){
		 return {
		 		hotItems:[]
		 }
	},
	componentDidMount:function(){
		this._getGoods();
	},
	 _getGoods:function () {
        var _this = this;
        UAjax.ajax({
            method: 'post',
            url: API_SERVICE_URL + '/v1.0/goods/fetchListPaging',
            data: {
                  currentNo:1,
                  pageSize:3
            },
            success: function(res) {
                if(res.code == 0) {
                    _this.setState({
                        hotItems: res.result
                    })
                } else {
                   
                }
            },
            error: function(res) {
                console.log(res);
            }
        });
    },
    _toDetail: function (v) {
        localStorage.setItem('goodsDetail',JSON.stringify(v));
        window.location.href = '../goodsDetail/index.html';
    },
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a href="../search/index.html">
                            <i className="am-header-icon header-left-icon iconfont icon-search"></i>
                        </a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">医链盟</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="javascript:void(0);" className="" onClick={this._qrcodeClickHandler}>
                            <i className="am-header-icon header-right-icon iconfont icon-saoyisao"></i>
                        </a>
					</Header.RightItem>
				</Header>
			  
			   <Container>
			   	   <Slider isShowButton={false}>
			   	   		<Slider.Item><img src="../images/qkl3.jpeg" width="100%"/></Slider.Item>
			   	   		<Slider.Item><img src="../images/qkl2.jpeg" width="100%"/></Slider.Item>
			   	   		<Slider.Item><img src="../images/qkl1.jpg" width="100%"/></Slider.Item>
			   	   		<Slider.Item><img src="../images/qkl6.jpg" width="100%"/></Slider.Item>
			   	   </Slider>
					
				   <ButtonGroup>
				   		<ButtonGroup.Button icon="iconfont icon-zaixianguahao main-page-icon-gh" title="挂号" clickHandler ={this._redirect.bind(this,"../registration-iframe/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-paidui main-page-icon-pdhz" title="排队侯诊" clickHandler ={this._redirect.bind(this,"../waitForTrmt/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-jiaofei main-page-icon-mzjf" title="门诊缴费" clickHandler ={this._redirect.bind(this,"../payBills/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-baogao main-page-icon-bgcx" title="报告查询" clickHandler ={this._redirect.bind(this,"../checkReport/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-zhifuyajin main-page-icon-zyyj" title="住院押金" clickHandler ={this._redirect.bind(this,"../checkDeposit/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-qingdan main-page-icon-zyqd" title="住院清单" clickHandler ={this._redirect.bind(this,"../hospitalizedDetails/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-qianbao main-page-icon-qb" title="钱包" clickHandler ={this._redirect.bind(this,"../purse/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-Medical-record main-page-icon-dzbl" title="电子病历" clickHandler ={this._redirect.bind(this,"../eCaseHistory/index.html")}/>
				   </ButtonGroup>
	            	   
	            	   <ProductList title="网上药店（支持医保在线支付）" moreTitle="查看全部" moreHandler={this._jumpToMedicinalList}>
	            	   		 { 
	            	   		 	this.state.hotItems.map(function(obj,index){
	            	   		  		return (
	            	   		  			<ProductList.Item title={obj.name} subtitle={obj.price} clickHandler={this._toDetail.bind(this,obj)} key={index} icon='img-wrap'>
									   <img style={{width:"100%"}} src={obj.src}/>
								   </ProductList.Item>
	            	   		  		)
	            	   		    }.bind(this))
	            	   		}
	            	   </ProductList>
	            	   {
//	            	   <ProductList title="健康服务" 	avgcls="am-avg-sm-4">
//	            	   		<ProductList.Button icon="iconfont icon-yibaoqia main-page-icon-ybzq" title="医保专区" />
//	            	   		<ProductList.Button icon="iconfont icon-daiban-copy main-page-icon-xxdb" title="小熊代办" />
//	            	   		<ProductList.Button icon="iconfont icon-zhibo main-page-icon-yszb" title="医生直播" />
//	            	   		<ProductList.Button icon="iconfont icon-zixun main-page-icon-zxys" title="咨询医生" />
//	            	   		<ProductList.Button icon="iconfont icon-xiaomishu jkbs" title="健康秘书" />
//	            	   </ProductList>
	            	   }
	                <TabBar/>
				</Container>
				<Footer selectIndex="0"/>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));