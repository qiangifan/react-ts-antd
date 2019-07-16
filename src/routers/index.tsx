import React from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom'
import GlobalLayout from '../globalLayout'
import {routers} from './router'

interface RouteEntity {
    path : string,
    exact?: boolean,
    redirect?: string,
    routes?: any[],
    component?: any
}

class RouterNav extends React.Component < any,
any > {
    render() {
        return (
            <HashRouter>
                {routers.map((item : RouteEntity, index) => {
                    return (
                        <Route
                            key={index}
                            strict={true}
                            sensitive={true}
                            exact={item.exact}
                            path={item.path}
                            render={(props : any) => {
                            return item.redirect
                                ? (<Redirect exact to={item.redirect}/>)
                                : <item.component {...props} routes={item.routes}/>
                        }}/>
                    )
                })
}
            </HashRouter>
        )
    }
}

export default RouterNav;