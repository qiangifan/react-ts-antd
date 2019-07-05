import HomeView from '../src/views/home/homeView'
export const routers = [
    {
        path: "/",
        redirect: '/home',
        exact: true
    },
    {
        path:"/home",
        component:HomeView
    }
]