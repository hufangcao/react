import React from 'react'
import {connect} from 'react-redux'
import '../../common/stylus/mixins.styl'
import {getIndex} from '../../redux/actions'
 class Listleft extends React.Component{
  /*  componentWillMount(){
        this.props.getCategorylList()
    }*/
    getIndex=(index)=>{
        //这个getIndex 是用户点击的时候分发的action
       this.props.getIndex(index)
    }
    render(){
        //获取更新后的state 取值的时候就用props
        const {categoryL1List,targetIndex} = this.props
        console.log("***"+targetIndex)
        return(
            <div>
                <div className="m-cateNavVertWrap">
                    <ul className="j-cateNav">
                        {categoryL1List.map((category,index)=>(
                            <li className="item " key={index} ref={index} onClick={(val)=> this.getIndex(index)}>

                                <a href="javascript:;" className={`${targetIndex===index?'on':null}`}>{category.name}</a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }

}
export default connect(
    //接收获得的action的state
    state =>({categoryL1List:state.categoryL1List,targetIndex:state.getIndex}),
    //ui组件将分发一个action 因为不是用户做的操作 所以要在componentWillMount中就要Dion调用action
    {getIndex}
)(Listleft)