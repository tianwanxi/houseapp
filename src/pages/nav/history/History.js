import React, { Component } from 'react'

export default class History extends Component {
  render() {
    return (
      <div>
        足迹
      </div>
    )
  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}
