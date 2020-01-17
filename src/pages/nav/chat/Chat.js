import React, { Component } from 'react'
import {Button} from 'antd-mobile'
import "./Chat.scss"
export default class Chat extends Component {
  render() {
    return (
      <div className="chatPage">
        <div className="content">
          <div className="avImg"><img src={require("../../../assets/imgs/tx.jpg")} alt=""/></div>
          <div>置业顾问：<span style={{fontSize:18,fontWeight:800,color:'#13227a'}}>宋莉</span></div>
          <div>专业服务诚信做人诚心做事</div>
          <Button type="primary" inline size="large" style={{ marginRight: '4px' }}>我要聊天</Button>
        </div>
      </div>
    )
  }
}
