import * as React from 'react';
import {Form, Input} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import {Button} from 'antd/lib/radio';

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
        }, () => {
           
        })

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

class EditModalForm extends React.Component < FormComponentProps,
any > {
    state = {
        keyValueList: [
            {
                enname: "11",
                znname: "22"
            }
        ]
    }

    private onchange = (fieldName:string,value : any) => {
        console.log(fieldName,value)
        this.props.form.setFields({
            [fieldName]: {
              value: value
            }
          });
    }

    private submitForm = () => {
        console.log(this.props.form.getFieldsValue())
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {keyValueList} = this.state;
        return (
            <Form>
                {keyValueList.map((item : any, index : number) => {
                    return (
                        <Form.Item key={index}>
                            {getFieldDecorator(`item-${index}`, {initialValue: item})(<CustomItem id={`item-${index}`} onChange={this.onchange}/>)}
                        </Form.Item>
                    )
                })}
                <Form.Item>
                    <Button onClick={this.submitForm}>提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(EditModalForm);