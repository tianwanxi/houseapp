import React, { Component } from 'react'

export default class ForgetPassword extends Component {
  render() {
    return (
      <div>
        忘记密码
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
