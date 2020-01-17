import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Login.scss"
import {login} from '../../api/apis'
import { Flex, InputItem, Button, WingBlank, WhiteSpace,Toast } from "antd-mobile"
export default class Login extends Component {
  state = {
    user: '',
    pwd: '',
    olduser:'',//上一次的用户
    oldpwd:'',//上一次输入的密码

  }
  render() {
    let { user, pwd } = this.state
    return (
      <div>
        <div className="loginImg">  
          <Flex justify="center">
          <img style={{ width: 120 }} src={require("../../assets/imgs/timg.jpg")} alt="" />
        </Flex>
        </div>
      
        < WhiteSpace />
        <WingBlank>
          <InputItem
            clear
            placeholder="请输入用户名"
            value={user}
            onChange={(val) => { this.setState({ user: val }) }}
          >
            <div style={{ backgroundImage: `url(${require("../../assets/imgs/user.png")})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          <InputItem
            placeholder="请输入密码"
            type="password"
            clear
            value={pwd}
            onChange={(val) => { this.setState({ pwd: val }) }}
          >
            <div style={{ backgroundImage: `url(${require("../../assets/imgs/pwd.png")})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          < WhiteSpace/>
          <Button type="primary" onClick={this.clickBtn}>登录</Button>
          < WhiteSpace />
          <Flex justify="between">
            <Link to="/reg">手机快速注册</Link>
            <Link to="/forgetpwd">忘记密码？</Link>
          </Flex>
        </WingBlank>
      </div>
    )
  }
  clickBtn= async () =>{
    let user = this.state.user
    let pwd =this.state.pwd
    if(this.state.olduser ===user && this.state.oldpwd === pwd) return  
    this.setState({
      olduser:user,
      oldpwd:pwd
    })
   let res = await login(user,pwd)
   if(res.data==='ok'){
    // console.log('登陆成功')
    window.location.href="#/"
   }else{
    Toast.fail('用户名或密码错误', 2);
   }
  }
  componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
        return;
    }
}
}
