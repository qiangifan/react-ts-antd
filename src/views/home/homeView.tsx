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
                    {
                        divList.map((item,index)=>{
                           return (<div key={index}>{`${item}   ${index}`}</div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(HomeView);
