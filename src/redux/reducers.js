import {combineReducers} from 'redux'
import {RECEIVE_CATEGORYL1LIST,RECEIVE_INDEX} from './action-types'
const initCategoryL1 =[]
const initGetIndex = 3
function categoryL1List(state=initCategoryL1,action) {
    switch (action.type){
        case RECEIVE_CATEGORYL1LIST:
            const categoryL1List = action.data
                return categoryL1List
        default:
            return state

    }
}
function getIndex(state=initGetIndex,action) {
    switch (action.type) {
        case RECEIVE_INDEX:
            const getIndex = action.data
            return getIndex
        default:
            return state
    }
}
export default combineReducers({
    categoryL1List,
    getIndex
})