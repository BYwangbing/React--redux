/**
 * @Description:
 * @author BY
 * @date 2019/12/5-8:34
 */
import {createStore} from 'redux'
import {counter} from './reducers'

// 生成一个store对象
const store = createStore(counter);

export default store
