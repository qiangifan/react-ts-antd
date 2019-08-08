import * as React from 'react';
import {Form, Button} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import FormItem from './itemComps'

interface IFormTempProps extends FormComponentProps{
    onSuccess:()=>void;
}

class VideoFormTemp extends React.Component < IFormTempProps > {

    private submitForm(){
        const {validateFields} = this.props.form;

        validateFields((errors: any, values: any)=>{
            console.log(errors,values);
            if(!errors){
                this.props.onSuccess();
            }
        })
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <Form.Item label="标题">
                    {getFieldDecorator("title", {
                        initialValue: "1",
                        getValueFromEvent: value => value,
                        rules: [
                            {
                                required: true,
                                max: 5
                            }
                        ]
                    })(
                        <FormItem.TitleItem></FormItem.TitleItem>
                    )}
                </Form.Item>
                <Form.Item label="封面">
                    {getFieldDecorator("cover", {
                        initialValue: `https://content.hebeixinzhe.com//bigtoe/bigtoe-user/user/headImg/dcd09080-7d54-46f4-85ec-dff9c085c14d`,
                        getValueFromEvent: value => value,
                        rules: [
                            {
                                required: true
                            }
                        ]
                    })(<FormItem.CoverItem/>)}
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.submitForm.bind(this)}>提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(VideoFormTemp);