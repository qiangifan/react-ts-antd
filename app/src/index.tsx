import * as React from 'react'
import * as ReactDom from 'react-dom'
import GlobalLayout from './globalLayout/index';
import RouterNav from '../routers/index';

import 'antd/dist/antd.css'


ReactDom.render(<RouterNav/>,document.querySelector("#root"));
