import * as React from 'react';
import {Button, Modal} from 'antd';
import EditModalFrom from './component/customForm/customForm'

export default class BatchAdd extends React.Component < any,
any > {
    state = {
        visible: false
    }

    render() {
        return (
            <div>
                <Button
                    type="danger"
                    onClick={() => {
                    this.setState({visible: true})
                }}>新增</Button>
                <Modal
                    visible={this.state.visible}
                    footer={null}
                    onCancel={() => {
                    this.setState({visible: false})
                }}>
                    <EditModalFrom/>
                </Modal>
            </div>
        )
    }
}