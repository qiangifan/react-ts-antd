import * as React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

class BaseTable extends React.Component<any,any>{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return (
            <div>
                base table
                <Table bordered/>
            </div>
        )
    }
}

export default connect()(BaseTable);