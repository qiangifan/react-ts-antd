import * as React from 'react';
import {Button, Modal} from 'antd';
import VideoFormTemp from './component/videoFormTemp'

export default class ItemGroup extends React.Component < any,
any > {

    state = {
        visible: false
    }

    private openVideoFormTemp() {
        this.setState({
            visible: true
        })
    }

    private readonly readonlyProps:Readonly<any> = {
        onSuccess:()=>{
            this.setState({
                visible: false
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Button onClick={this.openVideoFormTemp.bind(this)}>视频表单</Button>
                </div>
                <Modal footer={null} visible={this.state.visible}>
                    <VideoFormTemp {...this.readonlyProps}/>
                </Modal>
            </React.Fragment>
        )
    }
}