import React, { Component } from 'react'
import { InputItem, Button, WingBlank, WhiteSpace, Checkbox ,Toast} from "antd-mobile"
import { Link } from 'react-router-dom'
import './Reg.scss'
import { valitecode, reg } from '../../api/apis'

export default class Reg extends Component {
  state = {
    phone: '',
    pwd: '',
    verification: '',
    checkboxtf:false,
    open: "获取验证码"
  }
  render() {
    let { phone, pwd, verification, open,checkboxtf } = this.state
    const AgreeItem = Checkbox.AgreeItem;
    return (
      <div className="regPage">
        <WingBlank>
          <InputItem
            placeholder="请输入手机"
            value={phone}
            onChange={(val) => { this.setState({ phone: val }) }}
          />
          <InputItem
            placeholder="请输入密码"
            type="password"
            value={pwd}
            onChange={(val) => { this.setState({ pwd: val }) }}
          />
          <div className="authcode">
            <input type="text"   value={verification} onChange={(e) =>{this.setState({verification:e.target.value})}} placeholder="请输入验证码" /><div onClick={this.getverification}>{open}</div>
          </div>
          < WhiteSpace />
          <AgreeItem data-seed="logId" onChange={e =>this.setState({checkboxtf:e.target.checked})}>
            我已同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户服务协议》及《隐私权政策》</a>
          </AgreeItem>
          < WhiteSpace />
          < WhiteSpace />
          <Button type="primary" onClick={this.reguser.bind(this,phone, pwd, verification, open,checkboxtf)}>注册</Button>
          < WhiteSpace />
          <Link to="/login">已有帐号</Link>
        </WingBlank>
      </div>
    )
  }
  getverification = async () => {
    let res = await valitecode()
    this.setState({
      open: res.data
    })
  }
  reguser(phoneval,pwdval,verificationval,openval,checkboxtfval){
    if(phoneval && pwdval && verificationval==openval && checkboxtfval){
      reg(phoneval,pwdval)
      window.location.href="#/login"
    }else{
      Toast.fail('请核对信息是否正确', 2);
      return
    }
  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}
