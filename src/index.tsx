import * as React from 'react'
import * as ReactDom from 'react-dom'
 
import RouterNav from './routers'
import 'antd/dist/antd.css'
import './globalLess/index.less'


ReactDom.render(<RouterNav/>,document.querySelector("#root"));
