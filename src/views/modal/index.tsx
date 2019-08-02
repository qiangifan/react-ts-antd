import * as React from 'react';
import {connect} from 'react-redux'
import {Modal, Button} from 'antd';

const easyStyle = {
    display: 'flex',
    "justifyContent": "space-around"
}

const deleteBaseOpt = {
    title: `是否永久删除?`,
    okText: `确认`,
    cancelText: `取消`,
    centered: true
}

export class CommonModal extends React.Component<any,any> {
    state = {
        name: "111"
    }
    // 基础函数弹窗
    private showTipOfBase = () => {
        Modal.confirm({
            ...deleteBaseOpt
        });
    }
    // 无提示图标
    private showTipOfNotIcon = () => {
        Modal.confirm({
            ...deleteBaseOpt,
            icon: null
        });
    }
    // 函数弹窗按钮带图标
    private showTipOfBtnIcon = () => {
        Modal.confirm({
            ...deleteBaseOpt,
            okButtonProps: {
                icon: "check-circle",
                type: "ghost"
            },
            cancelButtonProps: {
                icon: "close-circle",
                type: "ghost"
            }
        })
    }
    // 图片预览
    private previewImg = () => {
        let random = Math.random() * 10;
        let imgUrl = "";
        if (random <= 5) {
            imgUrl = require('../../asset/img/1.jpg')
        } else {
            imgUrl = require('../../asset/img/2.jpg')
        }
        Modal.confirm({className: "modal-img-preview", centered: true, maskClosable: true, content: (<img src={`${imgUrl}`}/>)})
    }

    private output = () => {
        let {todo} = this.props;
        todo();
        Modal.info({content: `${"store"}`})
    }
    render() {
        return (
            <div>
                <div>
                    函数弹窗
                </div>
                <div style={easyStyle}>
                    <Button onClick={this.showTipOfBase}>基础弹窗</Button>
                    <Button onClick={this.showTipOfNotIcon}>无提示图标</Button>
                    <Button onClick={this.showTipOfBtnIcon}>按钮带图标</Button>
                    <Button onClick={this.previewImg}>图片预览</Button>
                    <Button onClick={this.output}>输出state</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any)=>{
    return {
        todo:()=>{
            console.log(state);
            return 1;
        }
    }
}

export default connect(mapStateToProps)(CommonModal);