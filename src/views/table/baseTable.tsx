import * as React from 'react';
import {Table, Popover} from 'antd';
import {connect} from 'react-redux';

class BaseTable extends React.Component < any,
any > {

    componentDidMount() {
        console.log(this.props)
    }

    private columns : any = [
        {
            title: "序号",
            key: "idx"
        }, {
            title: "姓名",
            dataIndex: "name"
        }, {
            title: "城市",
            render: (text : any) => {
                let cityList = text
                    .city
                    .join("、")
                return (
                    <Popover content={cityList} style={{width:`120px`}} overlayClassName="custom-tip">
                        <div className="table-td-item">{cityList}</div>
                    </Popover>
                )
            }
        }
    ];

    private dataSource:any = [
        {name:"张三",key:1,city:["全国"]},
        {name:"张三",key:2,city:["河北省","河南省"]},
        {name:"张三",key:3,city:["河北省","广西壮族自治区","临汾","临淄","威海","济南"]}
    ];

    render() {
        return (
            <div className="base-table-module">
                base table
                <Table bordered columns={this.columns} dataSource={this.dataSource}/>
            </div>
        )
    }
}

export default connect()(BaseTable);