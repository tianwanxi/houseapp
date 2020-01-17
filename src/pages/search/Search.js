import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        搜索
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
