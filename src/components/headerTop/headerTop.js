import React from 'react'
import './headerTop.styl'
import '../../common/stylus/mixins.styl'
import {withRouter} from 'react-router-dom'
class HeaderTop extends React.Component{

    render(){
        return(
            <div className="headerTop">
                <div className="header">
                    <div className="left" onClick={()=>{this.props.history.replace('/home')}} >
                    <i className=" iconfont icon-home"></i>
                </div>
                <a href="javascript:;" className="text">网易严选</a>
                <div className="right">
                    <i className="iconfont iconfont icon-artboard9-copy"></i>
                    <i className="iconfont icon-cart" ></i>
            </div>
    </div>
            </div>
        )
    }

}
export default withRouter(HeaderTop)