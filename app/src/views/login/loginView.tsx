import * as React from 'react'
import {Input, Button, Form} from 'antd';
import {login} from '../../servers/api';
import {FormComponentProps} from 'antd/lib/form';

interface IFormProps extends FormComponentProps {
    account : string,
    password : string,
    submitLogin : (value : any) => void
}
const LoginForm = Form.create()((props : IFormProps) => {
    const {getFieldDecorator} = props.form;
    const submit = ()=>{
        props.submitLogin(props.form.getFieldsValue())
    }
    return (
        <React.Fragment>
            <div>
                用户名:{getFieldDecorator("account", {initialValue: props.account})(<Input/>)}
            </div>
            <div>
                密码:{getFieldDecorator("password", {initialValue: props.password})(<Input.Password/>)}
            </div>
            <div>
                <Button onClick={submit}>登录</Button>
            </div>
        </React.Fragment>
    )
});

export default class LoginView extends React.Component < any,
any > {
    private login = (params : any) => {
        login(params).then((res : any) => {
            console.log(res)
        })
    }

    private readonly formProps : Readonly < any > = {
        account: "",
        password: "",
        submitLogin: this.login
    }

    render() {
        return (
            <div>
                <LoginForm {...this.formProps}/>
            </div>
        )
    }
}