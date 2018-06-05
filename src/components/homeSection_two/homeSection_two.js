import React from 'react'
import '../../common/stylus/mixins.styl'
import {reqTopicList,reqCateList,} from "../../api";
import './homeSection_two.styl'
export default class HomeSection_two extends React.Component{
    state={
        topicList:[],
        cateList:[],
    }
    async componentDidMount(){
        const topicResult = await reqTopicList()
        const cateResult = await reqCateList()
        this.setState({
            topicList:topicResult.data,
            cateList: cateResult.data
        })
        console.log("....."+this.state.cateList)
    }
    render(){
        return(
            <div>
                <div className="m-sale">
                    <a href="javascript:;">
                        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="pic"/>
                    </a>
                </div>
                <div className="m-special">
                    <header className="hd-special ">
                        <a href="javascript:;">
                            <span className="special-text ">专题选择</span>
                            <i className="findAll-Icon"></i>
                        </a>
                    </header>
                    <div className="m-special-slide">
                        <ul className="m-special-list">

                                {this.state.topicList.map((topItem,index)=>(
                                    <li className="m-special-item" key={index}>
                                        <a href="javascript:;">
                                            <div className="special-item-img">
                                                <img  src={topItem.itemPicUrl} alt="pic"/>
                                            </div>
                                        </a>
                                        <div className="m-special-wrap">
                                            <div className="m-special-shopInfo">
                                                <span>  {topItem.title} </span>
                                            </div>
                                            <p className="text-one">   {topItem.subtitle} </p>
                                            <div className="special-price">￥  {topItem.priceInfo} 元起</div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>

            </div>
                {
                    this.state.cateList.map((cateItem,index)=>(
                        <div className="m-titleGoodGrid"key={index}>
                            <h3> {cateItem.name} 好物</h3>
                            <div className="m-goodGrid" >
                                <ul className="m-goodGrid-list">
                                    {
                                        cateItem.itemList.slice(0,7).map((item,index)=>(
                                            <li className="m-goodGrid-item"  key={index} >
                                                <a href="javascript:;">
                                                    <div className="wrap">
                                                        <img  src={item.listPicUrl} alt="pic"/>
                                                        <span className="m-goodGrid-text"> {item.simpleDesc}  </span>
                                                    </div>
                                                    <div className="m-text-bottom">
                                                        <span> {item.name} </span>
                                                    </div>
                                                    <div className="m-price">
                                                        ￥ {item.retailPrice}
                                                    </div>
                                                </a>
                                            </li>
                                        ))
                                    }
                                    <li className="m-goodGrid-lastItem">
                                        <a href="javascript:;">
                                            <p>更多家具好物</p>
                                            <div className="toolsIcon">
                                                <i className="  iconfont icon-right"> </i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }

}