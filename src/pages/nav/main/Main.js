import React, { Component } from 'react'
import "./Main.scss"
import {gethouselist,IP} from '../../../api/apis'
import { Carousel, WingBlank } from "antd-mobile"
export default class Main extends Component {
  state = {
    data:['banner1', 'banner2', 'banner3'],
    imgHeight: 176,
    iconImg1: [{ id: 1, ur: "menu_1", text: "新房" }, { id: 2, ur: "menu_2", text: "二手房" }, { id: 3, ur: "menu_3", text: "租房" }, { id: 4, ur: "menu_4", text: "商铺写字楼" },],
    iconImg2: [{ id: 1, ur: "menu_5", text: "卖房" }, { id: 2, ur: "menu_6", text: "海外房产" }, { id: 3, ur: "menu_7", text: "小区房价" }, { id: 4, ur: "menu_1", text: "问答" }],
    iconImg3: [{ id: 1, ur: "m2_1", text: "我要贷款" }, { id: 2, ur: "m2_2", text: "房贷计算" }, { id: 3, ur: "m2_3", text: "知识" }, { id: 4, ur: "m2_4", text: "扫一扫" }],
    houseList:[],
    mycity:"定位中"
  }
  render() {
    // console.log(houseList +"111")
    let { iconImg1, iconImg2, iconImg3, houseList ,mycity} = this.state
    return (
      <div className="mainPage">
        <div className="mainTop">
          <div className="address" onClick={this.clickTitle.bind(this,'#/citylist')}>{mycity}▼</div>
           <div className="am-search" onClick={this.clickTitle.bind(this,'#/search')}>
             <img style={{width:20,height:20}} src={require("../../../assets/imgs/search.png")} alt=""/>
             <label style={{color:"#b2b2b2"}}>请输入楼盘名，商铺地址</label>
           </div>
          <div className="topIcon" onClick={this.clickTitle.bind(this,'#/map')}><img style={{ width: 30 }} src={require("../../../assets/imgs/location.png")} alt="" />  </div>
        </div>
        <div className="mainBanner">
          <Carousel
            autoplay={true}
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                // href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={require(`../../../assets/imgs/${val}.jpg`)}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <div className="iconText">
          <div className="iconText_top">
            {iconImg1.map(obj => <div key={obj.id}><img style={{ width: 60, height: 60 }} src={require(`../../../assets/imgs/${obj.ur}.png`)} alt="" /> <span>{obj.text}</span></div>)}
          </div>
          <div className="iconText_bottom">
            {iconImg2.map(obj => <div key={obj.id}><img style={{ width: 60, height: 60 }} src={require(`../../../assets/imgs/${obj.ur}.png`)} alt="" /> <span>{obj.text}</span></div>)}
          </div>
        </div>
        <div className="RealEstateEncyclopedia">
          <div className="RealEstateEncyclopedia_top">
            <WingBlank><h3>房产全百科</h3><span>专业的买房攻略</span></WingBlank>
          </div>
          <div className="RealEstateEncyclopedia_bottom">
            {iconImg3.map(obj => <div key={obj.id}><img style={{ width: 45, height: 45 }} src={require(`../../../assets/imgs/${obj.ur}.png`)} alt="" /> <span>{obj.text}</span></div>)}
          </div>
        </div>
        <div className="like">
          <WingBlank><span className="top">猜你喜欢</span></WingBlank>
          <div className="houseInformations">
            {houseList.map(obj => <div key={obj.id} className="houseInformation">
              <div className="houseInformation_left"><img style={{width:91.25,height:91.25}} src={IP + `${obj.imgs}`} alt="" /></div>
              <div className="houseInformation_cen">
                <h3>{obj.range}</h3>
                <p><span >{obj.area}</span><span>{obj.name}</span></p>
                <p><span>{obj.type}</span><span>{obj.point}平</span></p>
              </div>
              <h4 className="houseInformation_right" style={{color:"red"}}>{obj.price}/平</h4>
            </div>)}
          </div>
        </div>
      </div>
    )
  }
  clickTitle(hrf){
   window.location.href = hrf
  }
   componentDidMount() {
     let _this = this;
    setTimeout(() => {
 
    }, 100);
    gethouselist().then(data=>{
      this.setState({
        houseList: data.data
      })
    }
    );
//获取用户所在城市信息

  //实例化城市查询类
  var citysearch = new window.AMap.CitySearch();
  //自动获取用户IP，返回当前城市
  citysearch.getLocalCity(function(status, result) {
      if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
              var cityinfo = result.city;
              var citybounds = result.bounds;
              _this.setState({
                mycity:cityinfo
              })
              // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
              //地图显示当前城市
              // map.setBounds(citybounds);
          }
      } else {
          console.log('定位失败')
      }
  });

  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}
