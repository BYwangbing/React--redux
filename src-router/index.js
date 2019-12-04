/**
 * @Description:
 * @author BY
 * @date 2019/12/3-10:56
 */
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/app'

import './index.css'

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>

  <BrowserRouter>
    <App />
  </BrowserRouter>

</div>, document.getElementById('root'));
