import GlobalLayout from '../src/globalLayout/index';
import HomeView from '../src/views/home/homeView'
import LoginView from '../src/views/login/loginView'
export const routers = [
    {
        path: "/",
        redirect: '/home'
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