import React from 'react';
import {Layout} from 'antd'
import SiderLayout from './SiderLayout';
import HeaderLayout from './HeaderLayout';
import RouterNav from '../../routers/index';

import "./index.less"

class GlobalLayout extends React.Component < any,
any > {

    render() {
        return (
            <Layout className="home">
                <HeaderLayout/>
                <Layout>
                    <SiderLayout/>
                    <Layout.Content className="content">
                        <RouterNav/>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default GlobalLayout;