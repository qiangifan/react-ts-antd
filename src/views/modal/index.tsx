import * as React from 'react';
import {Modal, Button} from 'antd';

const easyStyle = {
    display:'flex',
    "justify-content": "space-around"
}

const deleteBaseOpt = {
    title: `是否永久删除?`,
    okText: `确认`,
    cancelText: `取消`
}

export class CommonModal extends React.Component {
    // 基础函数弹窗
    private showTipOfBase = () => {
        Modal.confirm({
            ...deleteBaseOpt
        });
    }

    // 函数弹窗按钮带图标
    private showTipOfBtnIcon() {
        Modal.confirm({
            ...deleteBaseOpt,
            okButtonProps: {
                icon: "check-circle"
            },
            cancelButtonProps: {
                icon: "close-circle"
            }
        })
    }

    render() {
        return (
            <div>
                <div style={easyStyle}>
                    <Button onClick={this.showTipOfBase}>基础函数弹窗</Button>
                    <Button onClick={this.showTipOfBtnIcon}>按钮带图标</Button>
                </div>
            </div>
        )
    }
}

export default CommonModal;