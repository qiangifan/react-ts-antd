import React from 'react';
import {Layout} from 'antd'
import SiderLayout from './SiderLayout';
import HeaderLayout from './HeaderLayout';
import RouterNav from '../../routers/index';

import "./index.less"
import {withRouter, Route} from 'react-router';

class GlobalLayout extends React.Component < any,
any > {

    render() {
        console.log(this.props);

        return (
            <Layout className="home">
                <HeaderLayout/>
                <Layout>
                    <SiderLayout/>
                    <Layout.Content className="content">
                        {this
                            .props
                            .routes
                            .map((item : any,index:number) => {
                                return (
                                    <Route key={index} path={item.path}>
                                        <item.component />
                                    </Route>
                                )
                            })}
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(GlobalLayout);