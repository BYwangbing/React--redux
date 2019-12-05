/**
 * @Description:
 * @author BY
 * @date 2019/12/4-9:17
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import store from './redux/store'

// 定义渲染根组件标签的函数
const  render = () => {
    ReactDom.render(<div>
        <App store={store}/>
    </div>, document.getElementById('root'));
};
// 初始化渲染
render();

// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render);

