import React from 'react';
import {Layout, Menu} from 'antd'
import {NavLink, withRouter} from 'react-router-dom';
import { routers } from '../routers/router';

class SiderLayout extends React.Component < any,
any > {
    render() {
        const {pathname} = this.props.location;
        const selectedKeys = [pathname];
        return (
            <Layout.Sider className="sider">
                <Menu selectedKeys={selectedKeys}>
                    <Menu.Item key={`/home`}>
                        <NavLink to={`/home`}>首页</NavLink>
                    </Menu.Item>
                    <Menu.Item key={`/table/basetable`}>
                        <NavLink to={`/table/basetable`}>基础表格</NavLink>
                    </Menu.Item>
                    <Menu.Item key={`/table/searchtable`}>
                        <NavLink to={`/table/searchtable`}>带探索的表格</NavLink>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }
}

export default withRouter(SiderLayout);