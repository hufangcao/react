import React from 'react'
import './home.styl'
import '../../common/stylus/mixins.styl'
import HeaderTop2 from '../headerTop2/headerTop2'
import HomeSection from '../homeSection/homeSection'
import HomeSection_two from '../homeSection_two/homeSection_two'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import {
    reqCarousel,
    reqSupplier,
    reqNewItem,
    reqPopularItem,
    reqTopicList,
    reqCateList,
    reqFlashSaleIndexVO,
    reqPolicyDescList,
    reqHeadCateList,
} from '../../api'

import 'swiper/dist/css/swiper.min.css'
export default class Home extends React.Component{
    state = {
        carouselList:[],
        headCateList:[],
        PolicyDescList:[],
            targetIndex:0

    }
    async componentDidMount(){
        const carouseResult = await reqCarousel()
        const headResult = await reqHeadCateList()

        const PolicyDescResult = await reqPolicyDescList()
        this.setState({
            carouselList:carouseResult.data,
            headCateList:headResult.data,
            PolicyDescList:PolicyDescResult.data

        })
        new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
        let scroll = new BScroll('.content', {
            scrollX: true,
            click: true
        })
        let scroll2 = new BScroll('.m-goodGrid', {
            scrollX: true,
            click: true
        })
        let scroll3 = new BScroll('.m-goodGrid2', {
            scrollX: true,
            click: true
        })
        let scroll4 = new BScroll('.m-special-slide', {
            scrollX: true,
            click: true
        })
        let scroll5 = new BScroll('.wrap-home', {
            scrollY: true,
            click: true
        })
    }

    change=(targetIndex)=>{
        this.setState({
            targetIndex:targetIndex
        })
    }
render(){


    return(
    <div>
        <HeaderTop2/>
        <div className="wrap-home">
            <div className="home">
                <div className="content">
                    <ul className="navWrap" >
                        {
                            this.state.headCateList.map((headcate,index)=>(
                                <li className="item " key={index} ref={index} onClick={(val)=> this.change(index)}>
                                    <span  className={`${index===this.state.targetIndex? 'on':null}`} >{headcate.name}</span>
                                </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        { this.state.carouselList.map((carousel,index) =>(
                        <div className="swiper-slide" key={index}>
                        <a href="javascript">
                            <img src={carousel.picUrl} alt="pic"/>
                        </a>
                        </div>
                        ))
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <ul className="ensure">
                    {
                        this.state.PolicyDescList.map((PolicyDesc,index) =>(
                            <li className="item" key={index}>
                                <i className="textIcon"><img  src={PolicyDesc.icon} alt="pic"/></i>
                                <span className="ensureText">{PolicyDesc.desc}</span>
                            </li>
                        ))
                    }

                </ul>
                <HomeSection/>
                <HomeSection_two/>
            </div>
        </div>
    </div>
    )
}

}
