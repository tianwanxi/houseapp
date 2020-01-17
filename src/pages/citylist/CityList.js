import React, { Component } from 'react'
import "./CityList.scss"
import { hotCity, cityData } from '../../json/CityList.json'
import { Flex, WingBlank, Grid } from "antd-mobile"
import BScroll from 'better-scroll'
const hotcitydata = hotCity.map((_val) => ({
  text: `${_val.cityName}`,
}));

const manycitydata = cityData.map((_val) => ({
  text: `${_val.firstChar}`,
}));
const city = cityData.map((_val) => ({
  firstChar: _val.firstChar,
  text: _val.list.map((val) => {
    return ({ text: val.cityName })
  })
}));
const headc = city.map(_headc=>({
  firstChar: _headc.firstChar,
}))
console.log(headc)
export default class CityList extends Component {
  state = {
    citylist: [{ id: 0, text: "国内", classNa: 'active' },
    { id: 1, text: "国际/港澳台", classNa: '' }
    ],
    open: true
  }
  render() {
    let { citylist } = this.state
    return (
      <div className="cityListPage">
        <div id="leftbox">
          <ul className="content">
            <Flex justify="between">
              <div className="back" onClick={this.clickBack.bind(this, '#/')} style={{ color: "#13227a", fontSize: 30 }}>&lt;</div>
              <div className="cityListPage_topcenter">
                {citylist.map(obj => <div className={obj.classNa} onClick={this.activeBtn.bind(this, obj.id)} key={obj.id}>{obj.text}</div>)}
              </div>
              <div></div>
            </Flex>
            <div className="searchbgc">
              <div className="search">
                <img style={{ width: 15, height: 15 }} src={require("../../assets/imgs/search.png")} alt="" />
                <label style={{ color: "#b2b2b2" }}>输入城市名或拼音查询</label>
              </div>
            </div>
            <div className="hint">无法获取您的定位</div>
            <div className="hotcity">
              <div ref="hotcitylist">
                <div className="hothbgc"><WingBlank><h3>热门城市</h3></WingBlank></div>
                <Grid data={hotcitydata} columnNum={3} />
              </div>

              <div className="hothbgc"><WingBlank><h3>更多城市</h3></WingBlank></div>
              <Grid onClick={this.citylistscroll.bind(this,manycitydata.text)}  data={manycitydata} columnNum={5} />
              {
                city.map((obj) => {
                  if (obj.text == "") {
                    return ""
                  } else {
                    return (
                      <div key={obj.firstChar} id={obj.firstChar}>
                        <div className="hothbgc"><WingBlank><h3>{obj.firstChar}</h3></WingBlank></div>
                        <Grid data={obj.text} columnNum={5} />
                      </div>
                    )
                  }
                })
              }
            </div>
          </ul>
        </div>
        {/* 右侧 */}
        <div className='right-box'  onTouchMove={this.move.bind(this)}>
          {cityData.map(obj => <div className='random-cls' key={obj.firstChar} onClick={this.citylistscrollr.bind(this, obj.firstChar)}>{obj.firstChar}</div>)}
        </div>
      </div>
    )
  }

  clickBack(hre) {
    window.location.href = hre
  }
  activeBtn(id) {
    let arry = this.state.citylist;
    for (let i = 0; i < arry.length; i++) {
      if (i == id) {
        arry[i].classNa = "active"
      } else {
        arry[i].classNa = ""
      }
    }
    this.setState({
      citylist: arry
    })
  }
  citylistscroll(el,title) {
    this.leftBox.scrollToElement('#' + title.text, 600)
  }
  citylistscrollr(title) {
    this.leftBox.scrollToElement('#' + title, 600)
  }
  move(e){
    let elt = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY) 
    if(elt.className=='random-cls'){
      this.leftBox.scrollToElement('#' + elt.innerHTML, 600)
    }
  }
  componentDidMount() {
    this.leftBox = new BScroll("#leftbox", { click: true })
  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}

