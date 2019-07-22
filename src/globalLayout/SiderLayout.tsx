import React from 'react';
import {Layout, Menu} from 'antd'
import {NavLink, withRouter} from 'react-router-dom';

const menuList = [
    {
        path: "/home",
        title: "首页"
    }, {
        path: "/table/basetable",
        title: "基础表格"
    }, {
        path: '/table/searchtable',
        title: "查询表格"
    }
];

class SiderLayout extends React.Component < any,
any > {
    render() {
        const {pathname} = this.props.location;
        const selectedKeys = [pathname];
        return (
            <Layout.Sider className="sider-view">
                <Menu selectedKeys={selectedKeys}>
                    {menuList.map(item => {
                        return (
                            <Menu.Item key={`${item.path}`}>
                                <NavLink to={`${item.path}`}>{item.title}</NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Layout.Sider>
        )
    }
}

export default withRouter(SiderLayout);