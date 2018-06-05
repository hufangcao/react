import React from 'react'
import '../../common/stylus/mixins.styl'
import './homeSection.styl'
import {reqSupplier,reqNewItem, reqPopularItem,} from "../../api";
export default class HomeSection extends React.Component{
    state={
        SupplierList:[],
        newItemList:[],
        popularItemList:[],
    }
    async componentDidMount(){
        const  SupplierResult = await reqSupplier()
        const newItemResult = await reqNewItem()
        const PopularItemResult = await reqPopularItem()
        this.setState({
            SupplierList:SupplierResult.data,
            newItemList:newItemResult.data,
            popularItemList:PopularItemResult.data
        })
       console.log(this.state.popularItemList)
    }
    render(){
        return(
            <div>
                <div className="m-indexFllor">
                    <div className="m-header">
                        <span className="m-header-text">品牌制造供应商</span>
                        <i className="m-header-icon iconfont icon-arrow-right1"> </i>
                    </div>
                    <div className="m-goods">
                        <ul className="m-list">
                            {this.state.SupplierList.splice(0,4).map((Supplier,index)=>(
                                <li className="m-item" key={index} >
                                    <a href="javascript :;">
                                        <div className="m-item-text">
                                            <h4>  {Supplier.name}   </h4>
                                            <div>  {Supplier.floorPrice}   元起</div>
                                        </div>
                                        <span className="newIcon" > 上新</span>
                                        <img  src={Supplier.picUrl} alt="pic"/>
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className="m-newItems">
                    <header className="hd">
                        <a href="javascript;">
                            <span className="new-text">新品首发</span>
                            <div className="findAll">
                                <span className="findAll-text">查看全部</span>
                                <i className="findAll-Icon iconfont icon-arrow-right1"></i>
                            </div>
                        </a>
                    </header>
                    <div className="m-goodGrid">
                        <ul className="m-goodGrid-list">
                            {this.state.newItemList.map((newItem,index)=>(
                                <li className="m-goodGrid-item" key={index}>
                                    <a href="javascript ;">
                                        <div className="m-goodGrid-item-img">
                                            <img src={newItem.listPicUrl} alt="pic"/>
                                        </div>
                                        <span  className="icontext" >   {newItem.name}   </span>
                                        <div className="m-goodGrid-shopInfo">
                                            <span>   {newItem.name}   </span>
                                        </div>
                                        <p>   {newItem.simpleDesc}   </p>
                                        <div className="price">￥   {newItem.retailPrice}   </div>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
                <div className="m-newItems m-newItem2">
                    <header className="hd bg-color ">
                        <a href="javascript;">
                            <span className="new-text ">人气推荐 · 好物精选</span>
                            <div className="findAll">
                                <span className="findAll-text">查看全部</span>
                                <i className="findAll-Icon iconfont icon-arrow-right1"></i>
                            </div>
                        </a>
                    </header>
                    <div className="m-goodGrid m-goodGrid2">
                        <ul className="m-goodGrid-list">
                            {this.state.popularItemList.map((popularItem,index)=>(
                            <li className="m-goodGrid-item" key={index}>
                                <a href="javascript ;">
                                    <div className="m-goodGrid-item-img">
                                        <img src={popularItem.listPicUrl} alt="pic"/>
                                    </div>
                                    <span  className="icontext" >   {popularItem.name}   </span>
                                    <div className="m-goodGrid-shopInfo">
                                        <span>   {popularItem.name}   </span>
                                    </div>
                                    <p>   {popularItem.simpleDesc}   </p>
                                    <div className="price">￥   {popularItem.retailPrice}   </div>
                                </a>
                            </li>
                            ))
                            }
                        </ul>
            </div>
    </div>

                <div className="m-indexFlash-wrap">
                    <a href="javascript:;">
                        <div className="m-indexFlash">
                            <div className="item-left">
                                <div className="title">严选限时购</div>
                                <div className="m-countdown ">
                                    <span className="hours"> hour </span>
                                    <span className="colon">:</span>
                                    <span className="mins"> minute </span>
                                    <span className="colon">:</span>
                                    <span className="secs">  second </span>
                                </div>
                                <div className="next-title">
                                    <span > 下一场 18：00 开始</span>
                                </div>
                            </div>
                            <div className="item-right">
                                <div className="m-lazyload ">
                                    <img src="http://yanxuan.nosdn.127.net/28dc5d97295fdd001cbeb2123f4adca6.png?imageView&quality=85&thumbnail=330x330" alt="pic" />
                                </div>
                                <div className="price">
                                    <span className="rmb1">￥109</span>
                                    <span className="rmb2">￥149</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

}