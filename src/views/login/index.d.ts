import {FormComponentProps} from 'antd/lib/form';
declare interface IFormProps extends FormComponentProps {
    account : string,
    password : string,
    submitLogin : (value : any) => void
}