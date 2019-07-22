import * as React from 'react';
import {withRouter} from 'react-router-dom'

import './homeView.less'
const divList:string[] = [
    "home page","home page","home page","home page","home page"
];

class HomeView extends React.Component < any,
any > {
    
    render() {
        return (
            <div>
                home page
                <div className="home-view">
                    1
                </div>
            </div>
        )
    }
}

export default withRouter(HomeView);
