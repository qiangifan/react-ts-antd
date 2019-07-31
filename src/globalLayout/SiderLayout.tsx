import React from 'react';
import {Layout, Menu} from 'antd'
import {NavLink, withRouter} from 'react-router-dom';
import {menuList} from './config'

class SiderLayout extends React.Component < any,
any > {
    render() {
        const {pathname} = this.props.location;
        const defaultSelectedKeys = [pathname];
        const defaultOpenKeys = [pathname.substr(0,pathname.lastIndexOf("/"))];
        return (
            <Layout.Sider className="sider-view">
                <Menu defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys} mode="inline">
                    {menuList.map((item : any) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <Menu.SubMenu title={item.title} key={`${item.path}`}>
                                    {item
                                        .children
                                        .map((child : any) => {
                                            return (
                                                <Menu.Item key={`${child.path}`}>
                                                    <NavLink to={`${child.path}`}>{child.title}</NavLink>
                                                </Menu.Item>
                                            )
                                        })
}
                                </Menu.SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={`${item.path}`}>
                                    <NavLink to={`${item.path}`}>{item.title}</NavLink>
                                </Menu.Item>
                            )
                        }

                    })}
                </Menu>
            </Layout.Sider>
        )
    }
}

export default withRouter(SiderLayout);