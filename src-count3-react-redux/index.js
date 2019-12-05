/**
 * @Description:
 * @author BY
 * @date 2019/12/4-9:17
 */
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import App from './containters/app'

// 定义渲染根组件标签的函数
ReactDom.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root'));

