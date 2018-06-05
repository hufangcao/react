import React from 'react'
import '../../common/stylus/mixins.styl'
import HeaderTop from '../headerTop/headerTop.js'
import './personal.styl'
export default class Personal extends React.Component{

    render(){
        return(
            <div>
                <HeaderTop/>
                <div className="loginTypesWrap">
                    <div className="cont">
                        <div className="logoWrap">
                            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                        </div>
                        <div className="btnWrap">
                            <div className="btn1" onClick={()=>this.props.history.push('/login')}>
                            <i className="iconfont icon-phone"></i>
                            <span>手机号码登录</span>
                        </div>
                        <div className="btn2">
                            <i className="iconfont icon-mail" ></i>
                            <span>邮箱帐号登录</span>
                        </div>
                        <div className="btn" >
                            <span>手机号快捷注册</span>
                            <i className="iconfont icon-arrow-right1"></i>
                        </div>
                    </div>
                </div>
                <div className="thirdWrap">
                    <div className="itemWrap">
                  <span className="talk">
                    <i className="iconfont icon-wei-xin"></i>
                    <span>微信</span>
                  </span>
                                    <span className="talk">
                    <i className="iconfont icon-QQ"></i>
                    <span>QQ</span>
                  </span>
                        <span className="talk">
                    <i className="iconfont icon-weibo"></i>
                    <span>微博</span>
                  </span>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}