import React, { Component } from 'react'
import "./map.scss"
export default class Map extends Component {
  render() {
    return (
      <div className="mapPage">
        <div className="mapPageTop"><div className="bacbtn" onClick={()=>{window.location.href="#/"}}>&lt;</div><div>我的位置</div><div></div></div>
        <div id="container">
        </div>
      </div>
    )
  }
  componentDidMount() {
    let _this = this
    var map = new window.AMap.Map("container", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 13
    });
    var citysearch = new window.AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        if (result && result.city && result.bounds) {
          // var cityinfo = result.city;
          var citybounds = result.bounds;
          // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
          //地图显示当前城市
          map.setBounds(citybounds);
        }
      } else {
        document.getElementById('info').innerHTML = result.info;
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
