import GlobalLayout from '../globalLayout/index';
import HomeView from '../views/home/homeView'
import LoginView from '../views/login/loginView'
export const routers = [
    {
        path: "/",
        redirect: '/login'
    }, {
        path: '/home',
        component: GlobalLayout,
        routes: [
            {
                path: '/home',
                exact: true,
                component: HomeView
            }
        ]
    }, {
        path: '/login',
        component: LoginView
    }
]