/**
 * @Description:
 * @author BY
 * @date 2019/12/5-8:34
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {counter} from './reducers'

// // 根据counter函数创建store对象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store
