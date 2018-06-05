import React from 'react'
import './headerTop2.styl'
import '../../common/stylus/mixins.styl'

export default class Home extends React.Component{

    render(){
        return(
            <div className="head-wrap">
                <div className="bottom">
                    <a href="javascript:;" className="text">网易严选</a>
                    <div className="input">
                        <i  className=" guide_item iconfont icon-artboard9-copy"> </i>
                        <span className="inputText">搜索商品, 共9882款好物</span>
                    </div>
                </div>
            </div>
        )
    }

}
