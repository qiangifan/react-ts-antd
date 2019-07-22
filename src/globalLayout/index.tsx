import React from 'react';
import {Layout} from 'antd'
import SiderLayout from './SiderLayout';
import HeaderLayout from './HeaderLayout';

import "./index.less"
import {withRouter, Route} from 'react-router';

class GlobalLayout extends React.Component < any,
any > {

    render() {
        console.log(this.props)
        return (
            <Layout className="home">
                <HeaderLayout/>
                <Layout>
                    <SiderLayout/>
                    <Layout.Content className="content-view">
                        <Route >
                            {this
                                .props
                                .routes
                                .map((item : any, index : number) => {
                                    return (
                                        <Route
                                            key={index}
                                            strict={true}
                                            sensitive={true}
                                            exact={item.exact}
                                            path={item.path}
                                            component={item.component}></Route>
                                    )
                                })}
                        </Route>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(GlobalLayout);