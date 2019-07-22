import * as React from 'react';
import { Table } from 'antd';
import { withRouter } from 'react-router';

class SearchTable extends React.Component<any,any>{
    render(){
        return (
            <div>
                Search Table
                <Table bordered/>
            </div>
        )
    }
}

export default withRouter(SearchTable);