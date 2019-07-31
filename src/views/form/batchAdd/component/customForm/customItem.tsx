import * as React from 'react';
import {Input} from 'antd';

class CustomItem extends React.Component < any,
any > {
    state = {
        enname: this.props.value.enname || "",
        znname: this.props.value.znname || ""
    }
    private onchangeItem = (event : any, type : string) => {
        let itemValue : any = {
            ...this.state
        };
        itemValue[type] = event.target.value;

        this.setState({
            [type]: event.target.value
        },()=>this.props.onChange(itemValue))

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>英文名称:</label>
                    <Input
                        value={this.state.enname}
                        onChange={(event) => {
                        this.onchangeItem(event, "enname")
                    }}/>
                </div>
                <div>
                    <label>中文名称:</label>
                    <Input
                        value={this.state.znname}
                        onChange={(event) => {
                        this.onchangeItem(event, "znname")
                    }}/>
                </div>
            </React.Fragment>
        )
    }
}

export default CustomItem;