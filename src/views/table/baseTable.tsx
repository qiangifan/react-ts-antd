import * as React from 'react';
import { Table } from 'antd';

class BaseTable extends React.Component<any,any>{
    render(){
        return (
            <div>
                base table
                <Table bordered/>
            </div>
        )
    }
}

export default BaseTable;