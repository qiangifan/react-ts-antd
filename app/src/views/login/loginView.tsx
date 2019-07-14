import * as React from 'react'
import {Input, Button, Form} from 'antd';

const LoginForm = Form.create()((props : any) => {
    console.log(props)
    return (
        <React.Fragment>
            <div>
                用户名:<Input/>
            </div>
            <div>
                密码:<Input/>
            </div>
            <div>
                <Button onClick={props.login}>登录</Button>
            </div>
        </React.Fragment>
    )
});

export default class LoginView extends React.Component < any,
any > {
    private login = () => {}

    render() {
        return (
            <div>
                <LoginForm {...this.login}/>
            </div>
        )
    }
}