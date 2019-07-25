import * as React from 'react';
import {Form, Button} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import CustomItem from './customItem';

class CustomForm extends React.Component < FormComponentProps,
any > {
    state = {
        keyValueList: [
            {
                enname: "11",
                znname: "22"
            }
        ]
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
                            {getFieldDecorator(`item-${index}`, {
                                initialValue: item,
                                getValueFromEvent: value => value
                            })(<CustomItem onChang/>)}
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

export default Form.create()(CustomForm);