import GlobalLayout from '../globalLayout/index';
import HomeView from '../views/home/homeView';
import LoginView from '../views/login/loginView';
// 表格
import BaseTable from '../views/table/baseTable';
import SearchTable from '../views/table/searchTable';
// 表单
import BatchAddForm from '../views/from/batchAdd/batchAdd'

// 弹窗
import CommonModal from '../views/modal/index';

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
        path: '/from',
        component: GlobalLayout,
        meta: {
            title: "表格"
        },
        routes: [
            {
                path: '/from/batchadd',
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
    },{
        path: '/login',
        component: LoginView
    }
]