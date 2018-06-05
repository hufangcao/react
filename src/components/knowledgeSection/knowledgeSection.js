import React from 'react'
import '../../common/stylus/mixins.styl'
import './knowledgeSection.styl'
import {
    reqTenfifteen,
    reqZhenOne,
    reqZhenThree,
    reqZhenTwo,
    reqFindMore
} from '../../api'
export default class KnowledgeSection extends React.Component{
    state={
        tenfifteen:[],
        zhenOne:{},
        zhenTwo:{},
        zhenThree:{},
        findMore:[],
    }
    async componentDidMount(){
        const tenfifteenResult = await reqTenfifteen()
        const zhenOneResult = await reqZhenOne()
        const zhenTwoResult = await reqZhenTwo()
        const zhenThreeResult = await reqZhenThree()
        const findMoreResult =await reqFindMore()
        this.setState({
            tenfifteen:tenfifteenResult.data,
            zhenOne:zhenOneResult.data,
            zhenTwo:zhenTwoResult.data,
            zhenThree:zhenThreeResult.data,
            findMore:findMoreResult.data
        })
        console.log(this.state.findMore)

    }
    render(){


        return(
            <div>
                <div className="m-exploreTenFifteen">
                    <div  className="inner">
                        <a href="javascript:;" className="innerItem" >
                            <div  className="line-title">
                                <span>--</span>
                                <p>今日话题</p>
                                <span>--</span>
                            </div>
                            <div  className="line-text-one"> tenfif.desc </div>
                            <div  className="line-text-two"> tenfif.title </div>
                            <div  className="line-pic"  >
                                <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" />
                                <span> tenfif.participantNum 人参与话题</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="m-exploreRcmds">
                    <div className="m-container">
                        <div className="m-header">为你推荐</div>
                        <a href="javascript:;" className="m-bottom">
                            <img src={this.state.zhenOne.picUrl} alt="pic"/>
                            <div className="m-exploreTag"> {this.state.zhenOne.nickname} </div>
                            <div className="topicInfo">
                                <div className="line1">
                                    <span className="title">{this.state.zhenOne.title} </span>
                                </div>
                                <div className="line2"> {this.state.zhenOne.subTitle} </div>
                            </div>
                        </a>
                        <a href="javascript:;" className="m-minorPosItem">
                            <div className="item-left">
                                <div className="title-one"> {this.state.zhenTwo.title}</div>
                                <div className="title-two"> {this.state.zhenTwo.subTitle} </div>
                            </div>
                            <div className="item-right">
                                <div className="m-exploreTag"> {this.state.zhenTwo.nickname}</div>
                                <img src={this.state.zhenTwo.picUrl} alt="pic"/>
                            </div>
                        </a>
                        <a href="javascript:;" className="m-minorPosItem">
                            <div className="item-left">
                                <div className="title-one"> {this.state.zhenThree.title} </div>
                                <div className="title-two"> {this.state.zhenThree.subTitle} </div>
                            </div>
                            <div className="item-right">
                                <div className="m-exploreTag"> {this.state.zhenThree.nickname} </div>
                                <img src="//yanxuan.nosdn.127.net/d3a12080def42d9dea14c1728396a0bc.jpg?imageView&quality=75" alt="pic"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="m-exploreLook">
                    <div className="module-title">严选LOOK</div>
                    <a href="javascript:;" className="module-pic">
                        <img src="http://yanxuan.nosdn.127.net/93555375e875d8347dd6886c144b6379.jpg?imageView&quality=75" alt="pic"/>
                            <div className="author-container">
                                <img src="http://yanxuan.nosdn.127.net/2c970bc69e1a056fc1a8c7298c4607e1.jpg?imageView&quality=75&thumbnail=48y48" alt=""/>
                                    <span>米****糊</span>
                            </div>
                            <span></span>
                    </a>
                </div>
                <div className="m-exploreMore">
                    <div className="line-title">
                        <span className="line"></span>
                        <p>更多精彩</p>
                        <span className="line"></span>
                    </div>
                    {
                     this.state.findMore.map((item,index)=>{
                         if(item.picList){
                             return(
                                 <div className="content three" key={index}>
                                     <div className="left">
                                         <img src={item.picList[0]} alt=""/>
                                     </div>
                                     <div className="right">
                                         <img src={item.picList[1]} alt=""/>
                                         <img src={item.picList[2]} alt=""/>
                                     </div>

                                 </div>
                             )
                         }else {
                             return(
                                 <div className="content one" key={index}>
                                     <div className="onlyOne">
                                         <img src={item.itemPicUrl} alt=""/>
                                     </div>
                                     <span>{item.title}</span>
                                 </div>
                             )
                            }
                        }
                     )

                    }


            </div>
            </div>

        )
    }

}