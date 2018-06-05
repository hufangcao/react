import React from 'react'
import '../../common/stylus/mixins.styl'
import {connect} from  'react-redux'
 class ListRight extends React.Component{
state={
    currentItem:{},
    currentIndex:0,
    subCateList:[]
}
//当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用this.setState()来更新你的组件状态，
// 旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用
componentWillReceiveProps(newprops){
    const {categoryL1List,getIndex}=newprops
    this.setState({
        categoryL1List:newprops.categoryL1List
    })
    this.setState({
        currentIndex:newprops.getIndex
    })
    const currentItem = categoryL1List.find((item,index)=>getIndex==index)
    this.setState({
        currentItem:currentItem,
        subCateList:currentItem.subCateList
    })

}

    render(){
        const {currentItem,subCateList} = this.state
        console.log(currentItem,subCateList)
       /*const {getIndex} = this.props*/
        return(
            <div className="m-subCateList">
                <div className="banner">
                    <img src={currentItem.bannerUrl} alt=""/>

                </div>
                <div className="cateList">
                    <div className="hd">
                        <span> </span>
                   {  <div> {currentItem.name}</div>}
                        <span> </span>
                    </div>
                    <ul className="list">
                   {subCateList.map((subCateItem,index)=>(
                            <li className="cateItem" key={index}>
                                <img src={subCateItem.wapBannerUrl} alt="pic"/>
                                <div> {subCateItem.name} </div>
                            </li>
                        ))}

                </ul>
            </div>

    </div>
        )
    }

}
export default connect(
    state=>({categoryL1List:state.categoryL1List,getIndex:state.getIndex})
)(ListRight)