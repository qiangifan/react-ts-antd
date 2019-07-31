import GlobalLayout from '../globalLayout/index';
import HomeView from '../views/home/homeView';
import LoginView from '../views/login/loginView';
// 表格
import BaseTable from '../views/table/baseTable';
import SearchTable from '../views/table/searchTable';
// 表单
import BatchAddForm from '../views/form/batchAdd/batchAdd'

// 弹窗
import CommonModal from '../views/modal/index';
// 树型
import NodeHandle from '../views/tree/nodeHandle/nodeHandle';

export const routers = [
    {
        path: "/",
        exact: true,
        meta: {
            hidden: true
        },
        redirect: '/home'
    }, {
        path: '/home',
        component: GlobalLayout,
        meta: {
            title: "首页"
        },
        routes: [
            {
                path: '/home',
                exact: true,
                component: HomeView
            }
        ]
    }, {
        path: '/table',
        component: GlobalLayout,
        meta: {
            title: "表格"
        },
        routes: [
            {
                path: '/table/basetable',
                meta: {
                    title: "基础表格"
                },
                component: BaseTable
            }, {
                path: '/table/searchtable',
                meta: {
                    title: "查询表格"
                },
                component: SearchTable
            }
        ]
    }, {
        path: '/form',
        component: GlobalLayout,
        meta: {
            title: "表格"
        },
        routes: [
            {
                path: '/form/batchadd',
                meta: {
                    title: "批量新增" 
                },
                component: BatchAddForm
            } 
        ]
    }, {
        path: '/modal',
        component: GlobalLayout,
        meta: {
            title: "弹窗"
        },
        routes: [
            {
                path: '/modal/common',
                meta: {
                    title: "常用弹窗" 
                },
                component: CommonModal
            } 
        ]
    },
    {
        path: '/tree',
        component: GlobalLayout,
        meta: {
            title: "树型"
        },
        routes: [
            {
                path: '/tree/nodehandle',
                meta: {
                    title: "节点操作" 
                },
                component: NodeHandle
            } 
        ]
    }
    ,{
        path: '/login',
        component: LoginView
    }
    
]