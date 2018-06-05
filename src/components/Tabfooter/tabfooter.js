import React from 'react'
import '../../common/stylus/mixins.styl'
import './tabfooter.css'
import {withRouter} from 'react-router-dom'
 class Home extends React.Component{

    render(){
        return(
    <div className={`footer_guide ${this.props.location.pathname==='/personal'|| this.props.location.pathname==='/login'? 'hide' : null}`}>
        <span className={`guide_item ${this.props.location.pathname==='/home' ? 'on' : null}`} onClick={()=>this.props.history.push('/home')} >
        <span className="item_icon">
        <i className="iconfont icon-home"></i>
        </span>
        <span>首页</span>
        </span>


        <span  className={`guide_item ${this.props.location.pathname==='/knowledge' ? 'on' : null}`} onClick={()=>this.props.history.push('/knowledge')} >
        <span className="item_icon">
            <i className="iconfont icon-square-two"></i>
        </span>
        <span>识物</span>
        </span>

        <span className="guide_item"  >
        <span className={`guide_item ${this.props.location.pathname==='/list' ? 'on' : null}`} onClick={()=>this.props.history.push('/list')}>
        <i className="iconfont icon-category"></i>
        </span>
        <span>分类</span>
        </span>

        <span className="guide_item">
        <span className= {`guide_item ${this.props.location.pathname==='/ShopCar' ? 'on' : null}`} onClick={()=>this.props.history.push('/ShopCar')}>
        <i className="iconfont icon-cart"></i>
        </span>
        <span>购物车</span>
        </span>

        <span className="guide_item"  >
        <span className={`guide_item ${this.props.location.pathname==='/personal' ? 'on' : null}`} onClick={()=>this.props.history.replace('/personal')}>
        <i className="iconfont icon-kefu"></i>
        </span>
        <span>个人</span>
        </span>
    </div>
    )
    }
}
export default withRouter(Home)