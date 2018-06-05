import React from 'react'
import '../../common/stylus/mixins.styl'
import HeaderTop2 from '../headerTop2/headerTop2.js'
import Listleft from '../list-left/list-left'
import ListRight from '../list-right/list-right'
import '../list/list.styl'
import {connect} from 'react-redux'
import {getCategorylList, getIndex} from '../../redux/actions'
class List extends React.Component{
    componentDidMount(){
        this.props.getCategorylList()

    }

    render(){
        const {categoryL1List}= this.props
        console.log(categoryL1List)
        return(
            <div>
             <HeaderTop2/>
                <div className="j-categoryList">
                    <Listleft/>
                    <ListRight/>
                </div>
            </div>
        )
    }

}
export default connect(
    state=>({categoryL1List:state.categoryL1List}),
    {getCategorylList}
)(List)
