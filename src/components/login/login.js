import React from 'react'
import './login.styl'
import HeaderTop from '../headerTop/headerTop'

export default class Login extends React.Component {
  state={
      addclass:false,
      phone:'',
      phone2:'',
      code:'',
      pwd:'',
      isShowPwd:false,
      captcha:''
  }
  renderPwd(){
      if(this.state.isShowPwd){
          return(
              <input type="text" placeholder="密码" value={this.state.pwd} onChange={this.getPwdVal}/>
          )
      }else{
          return(
              <input type="password" placeholder="密码"   value={this.state.pwd} onChange={this.getPwdVal}/>
          )}
  }
    getPhoneVal=(e)=>{
        this.setState({
            phone:e.target.value
        })
        console.log(this.state.phone)
    }
    getPhoneVal2=(e)=>{
        this.setState({
            phone2:e.target.value
        })
        console.log(this.state.phone2)

    }
    getCode=(e)=>{
        this.setState({
        code:e.target.value
        })
        console.log(this.state.code)
    }
    getPwdVal=(e)=>{
      this.setState({
          pwd:e.target.value
      })
        console.log(this.state.pwd)
    }
    getcaptcha=(e)=>{
      this.setState({
          captcha:e.target.value
      })

    }
    addClass=()=>{
      this.setState({
          addclass:true
      })
    }
    showPwd=()=>{

      this.setState({
          isShowPwd:!this.state.isShowPwd
      })

    }
    addClass2=()=> {
        this.setState({
            addclass: false
        })
    }
    submit=()=>{
      if(this.state.addclass){
          if(!/^1\d{10}$/.test(this.state.phone2)){
              alert("请填入电话号码")
          }else if(!/^\d{6}$/.test(this.state.code)){
              alert("请输入正确格式")
          }else {
              this.props.history.replace('/home')
          }
      }else {
          if(!this.state.phone){
              alert("请填入用户名")
          }else if(!this.state.pwd){
              alert("请填写密码")
          }else if(!this.state. captcha){
              alert("请填写验证码")
          }else {
              this.props.history.replace('/home')
          }
      }

    }
    render() {
        return (
            <div>
                <div className="loginContainer">
                    <div className="loginInner">
                        <div className="login_header">
                            <h2 className="login_logo">网易严选</h2>
                            <div className="login_header_title">
                                <a href="javascript:;" className={`${this.state.addclass?'on':'off'}`} onClick={this.addClass} >短信登录</a>
                                <a href="javascript:;" className={`${!this.state.addclass?'on':'off'}`} onClick={this.addClass2}>密码登录</a>
                            </div>
                        </div>
                        <div className="login_content">
                            <form onSubmit={this.submit}>
                                <div className={`${this.state.addclass?'on':'off'}`} >
                                    <section className="login_message">
                                        <input type="tel" maxlength="11" placeholder="手机号" value={this.state.phone2} onChange={this.getPhoneVal2}/>
                                        <button disabled className="get_verification" >获取验证码</button>
                                    </section>
                                    <section className="login_verification">
                                        <input type="tel" maxlength="8" placeholder="验证码" value={this.state.code} onChange={this.getCode}/>
                                    </section>
                                    <section className="login_hint">
                                        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                                        <a href="javascript:;">《用户服务协议》</a>
                                    </section>
                                </div>
                                <div className={`${!this.state.addclass?'on':'off'}`}>
                                    <section>
                                        <section className="login_message">
                                            <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" value={this.state.phone} onChange={this.getPhoneVal}/>
                                        </section>
                                        <section className="login_verification">
                                            {
                                                this.renderPwd()
                                            }
                                            {this.state.showPwd}
                                                <div className={`switch_button ${this.state.isShowPwd?"on":null}`} onClick={this.showPwd }  >
                                                    <div className="switch_circle"></div>
                                                    <span className="switch_text"> showPwd?'abc':'...' </span>
                                                </div>
                                        </section>
                                        <section className="login_message">
                                            <input type="text" maxlength="11" placeholder="验证码" value={this.state.captcha} onChange={this.getcaptcha}/>
                                            <img className="get_verification" src="./img/captcha.svg" alt="captcha"/>
                                        </section>
                                    </section>
                                </div>
                                <button className="login_submit" >登录</button>
                            </form>
                            <a href="javascript:;" className="about_us">关于我们</a>
                        </div>
                        <span href="javascript:" className="go_back" >
                    <i className="iconfont icon-jiantou2"></i>
                    </span>
                    </div>
                </div>
            </div>
    )
    }
    }