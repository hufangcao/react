import React from 'react'
import '../../common/stylus/mixins.styl'
import HeaderTop from '../headerTop/headerTop.js'
import './knowledge.styl'
import KnowledgeSection from '../knowledgeSection/knowledgeSection'
import Swiper from "swiper";
import BScroll from 'better-scroll'
import {
    reqBanner,
    reqColumn,
    reqRecommendOne,
    reqRecommendThree,
    reqRecommendTwo,

} from '../../api'
export default class Knowledge extends React.Component{
    state={
        banner:[],
        column:[],
        recommendOne:{},
        recommendTwo:{},
        recommendThree:{},
    }

    async componentDidMount(){

        const BannerResult = await reqBanner()
        const columnResult = await reqColumn()
        const  recommendOneResult = await reqRecommendOne()
        const recommendTwoResult = await reqRecommendTwo()
        const recommendThreeResult = await reqRecommendThree()

       setTimeout(()=>{
           this.setState({
               banner:BannerResult.data,
               column:columnResult.data,
               recommendOne:recommendOneResult.data,
               recommendTwo:recommendTwoResult.data,
               recommendThree:recommendThreeResult.data
           })
       },1000)




        let scroll = new BScroll('.m-exploreChannels',{
            scrollX: true,
            click: true
        })
        let scrol2 = new BScroll('.m-exploreTenFifteen',{
            scrollX: true,
            click: true
        })
        let scrol3 = new BScroll('.m-knowledge-scroll',{
            scrollY: true,
            click: true
        })
    }
    componentDidUpdate(){
        if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
        }
        this.swiper=new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    componentWillUnmount() {
        if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
        }
    }
    render(){
        return(
            <div>
                <HeaderTop/>
                <div className="m-knowledge-scroll">
                    <div className="m-knowledge-wrap">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.state.banner.map((bannerItem,index)=>(
                                    <div className="swiper-slide" key={index} >
                                        <a href="javascript:;" >
                                            <img src={bannerItem.picUrl}alt="pic"/>
                                            <div className="img-text">
                                                <div className="one-text">
                                                    <span className="line">—</span>
                                                    <p> {bannerItem.subTitle} </p>
                                                    <span className="line">—</span>
                                                </div>
                                                <p className="two-text"> {bannerItem.title} </p>
                                                <p className="three-text"> {bannerItem.desc} </p>
                                            </div>
                                        </a>
                                    </div>
                                ))}

                            </div>
                        <div className="swiper-pagination"> </div>

                    </div>
                        <div className= "m-exploreChannels">
                            <ul className= "m-exploreChannels-list">
                                {this.state.column.map((item,index)=>(
                                    <li className= "m-exploreChannels-item" key={index}>
                                        <a href="javascript:;">
                                            <div className= "m-pic">
                                                <img src ={item.picUrl} alt="pic"/>
                                            </div>
                                            <span className= "m-text"> {item.articleCount }</span>
                                            <span className= "m-titel"> {item.title} </span>
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className= "m-exploreRcmds">
                            <div className= "m-container">
                                <div className= "m-header">为你推荐</div>
                                <a href="javascript:;" className= "m-bottom">
                                    <img src ={this.state.recommendOne.picUrl} alt="pic"/>
                                    <div className= "m-exploreTag"> {this.state.recommendOne.typeName} </div>
                                    <div className= "topicInfo">
                                        <div className= "line1">
                                            <span className= "title"> {this.state.recommendOne.title} </span>
                                            <span className= "price"> {this.state.recommendOne.priceInfo}元起</span>
                                        </div>
                                        <div className= "line2">{this.state.recommendOne.subTitle}  </div>
                                    </div>
                                </a>
                                <a href="javascript:;" className= "m-minorPosItem">
                                    <div className= "item-left">
                                        <div className= "author">
                                            <img src ={this.state.recommendTwo.avatar} alt="pic"/>
                                            <span > {this.state.recommendTwo.nickname} </span>
                                        </div>
                                        <div className= "title-one"> {this.state.recommendTwo.title} </div>
                                        <div className= "title-two"> {this.state.recommendTwo.subTitle} </div>
                                    </div>
                                    <div className= "item-right">
                                        <img src ={this.state.recommendTwo.picUrl} alt="pic"/>
                                        <div className= "m-exploreTag"> {this.state.recommendTwo.typeName} </div>
                                    </div>
                                </a>
                                <a href="javascript:;" className= "m-minorPosItem">
                                    <div className= "item-left">
                                        <div className= "author">
                                            <img src ={this.state.recommendThree.avatar} alt="pic"/>
                                            <span > {this.state.recommendThree.nickname} </span>
                                        </div>
                                        <div className= "title-one"> {this.state.recommendThree.title} </div>
                                        <div className= "title-two"> {this.state.recommendThree.subTitle} </div>
                                    </div>
                                    <div className= "item-right">
                                        <img src ={this.state.recommendThree.picUrl} alt="pic"/>
                                        <div className= "m-exploreTag"> {this.state.recommendThree.typeName} </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <KnowledgeSection/>
                    </div>
                </div>

            </div>
        )
    }

}