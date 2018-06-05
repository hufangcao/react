import React from 'react'
import '../../common/stylus/mixins.styl'
import './shopcar.styl'
export default class ShopCat extends React.Component{

    render(){
        return(
            <div>
                <div className="header-cart">网易严选</div>
                <div className="shopCat">
                    <ul className="m-servicePolicy">
                        <li className="item">
                            <i></i>
                            <span className="text1">48小时快速退款</span>
                        </li>
                        <li className="item">
                            <i></i>
                            <span className="text1">48小时快速退款</span>
                        </li>
                        <li className="item">
                            <i></i>
                            <span className="text1">48小时快速退款</span>
                        </li>
                    </ul>
                    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""/>
                        <span>去添加点东西吧</span>
                        <div className="noCart-btn" >登陆</div>
                     </div>
            </div>
            )
        }
    }
        