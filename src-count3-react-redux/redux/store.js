/**
 * @Description:
 * @author BY
 * @date 2019/12/5-8:34
 */
import {createStore} from 'redux'
import {counter} from './reducers'

// // 根据counter函数创建store对象
const store = createStore(counter);

export default store
