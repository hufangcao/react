import {createStore,applyMiddleware} from 'redux'//引入redux的创建store 与中间件

import thunk from 'redux-thunk'// 中间件
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))