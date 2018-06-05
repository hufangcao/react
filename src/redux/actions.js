import {RECEIVE_CATEGORYL1LIST,RECEIVE_INDEX} from './action-types'
import {reqCategoryL1List} from "../api";

const receiveNav = ({categoryL1List})=>({type:RECEIVE_CATEGORYL1LIST,data:categoryL1List})
export const getIndex = (index)=>({type:RECEIVE_INDEX,data:index})
 export  function getCategorylList() {
    return async (dispatch)=>{
        const result = await reqCategoryL1List()
        if(result.code===0){
            const categoryL1List = result.data
            dispatch(receiveNav({categoryL1List}))
        }
    }
}
