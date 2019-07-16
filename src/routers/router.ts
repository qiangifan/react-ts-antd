import GlobalLayout from '../globalLayout/index';
import HomeView from '../views/home/homeView';
import LoginView from '../views/login/loginView';
import BaseTable from '../views/table/baseTable';
import SearchTable from '../views/table/searchTable';
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
        path: '/login',
        component: LoginView
    }
]