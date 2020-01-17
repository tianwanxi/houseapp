import React, { Component } from 'react'
import "./My.scss"
import { List } from "antd-mobile"
const Item = List.Item;
export default class My extends Component {
  state = {
    myPageTopFoot: [{ id: 0, icon: "/wallet.png", text: "钱包", num: 0 },
    { id: 1, icon: "/discounts_f.png", text: "优惠", num: 0 },
    { id: 2, icon: "/integral_f.png", text: "积分", num: 0 }],

    myList: [{ id: 0, icon: '', txt: '' },
    { id: 1, icon: 'integral', txt: '我的积分' },
    { id: 2, icon: 'subscr', txt: '我的订阅' },
    { id: 3, icon: 'linkman', txt: '微聊联系人' },
    { id: 4, icon: '', txt: '' },
    { id: 5, icon: 'calputer', txt: '房贷计算器' },
    { id: 6, icon: 'myhouse', txt: '我的房子' },
    { id: 7, icon: '', txt: '' },
    { id: 8, icon: 'record', txt: '我的看房记录' },
    { id: 9, icon: 'myanser', txt: '我的问答' },
    { id: 10, icon: '', txt: '' },
    { id: 11, icon: 'set', txt: '设置' },
  { id: 12, icon: 'feedbac', txt: '意见反馈' },]
  }

  render() {

    let { myPageTopFoot, myList } = this.state
    return (
      <div className="myPage">
        <div className="myPageTop">
          <div className="myPageTop_head">
            <div className="myPageTop_head_left">
              <img style={{ width: 70, height: 70 }} src={require("../../../assets/imgs/tx.jpg")} alt="" />
            </div>
            <div className="myPageTop_head_cen">
              <div className="loginReg">
                <div><h2 onClick={this.clickTitle.bind(this,'#/login')}>登录/</h2><h2 onClick={this.clickTitle.bind(this,'#/reg')}>注册</h2></div>
                <img style={{ width: 20, height: 20 }} src={require("../../../assets/imgs/set_f.png")} alt="" />
              </div>
              <p>可以与经纪人发起聊天</p>
            </div>
          </div>
          <div className="myPageTop_foot">
            {myPageTopFoot.map(obj => <div key={obj.id} className="myPageTop_footBox">
              <p>{obj.num}</p>
              <div><img style={{ width: 25, height: 25 }} src={require(`../../../assets/imgs${obj.icon}`)} alt="" /><label>钱包</label></div>
            </div>)}
          </div>
        </div>
        <div className="content">
          {myList.map((data) => {
            if (data.txt == "") {
              return < div key={data.id} className="cut" />
            } else {
              return (<div key={data.id} className="line"><Item
                thumb={require(`../../../assets/imgs/${data.icon}.png`)}
                arrow="horizontal"
                onClick={() => { }}
              >{data.txt}</Item></div>)
            }
          })}

        </div>
      </div>
    )
  }
  clickTitle(hrf){
    window.location.href=hrf
  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}
