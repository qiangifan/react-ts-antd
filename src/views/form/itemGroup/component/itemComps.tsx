import * as React from 'react';
import {
    Select,
    Input,
    Upload,
    Modal,
    Icon,
    Button,
    InputNumber
} from 'antd';
import {getBase64} from '../../../../lib';

import './component.less'

// 分类下拉组件
export class ClassItem extends React.Component < {
    calssType?: string
},
any > {
    render() {
        return (
            <Select></Select>
        )
    }
}

// 标题组件
export class TitleItem extends React.Component < any,
any > {

    state = {
        title: this.props.value || ""
    }

    private onchangeItem(event : any) {
        this.setState({
            price: event.target.value
        }, this.props.onChange(event.target.value))
    }

    render() {
        return (<Input value={this.state.title} onChange={this.onchangeItem}/>)
    }
}

// 封面图组件
export class CoverItem extends React.Component < any,
any > {

    state = {
        imgUrl: this.props.value || ""
    }

    // 图片预览
    private previewImg(event : React.MouseEvent, imgUrl : string) {
        event.stopPropagation();
        Modal.confirm({className: "modal-img-preview", centered: true, maskClosable: true, content: (<img src={`${imgUrl}`}/>)})
    }

    // 删除封面图
    private removeCover(event : React.MouseEvent) {
        event.stopPropagation();
        this.setState({
            imgUrl: ""
        }, this.props.onChange(""))
    }

    // 图片转换base64展示,并将图片文件向上传递
    private async onchangeItem({file} : any) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            imgUrl: file.preview.url
        }, this.props.onChange(file))
    }

    render() {
        let {accept} = this.props;
        let {imgUrl} = this.state;
        return (
            <Upload
                showUploadList={false}
                customRequest={() => false}
                listType="picture-card"
                accept={accept
                ? accept
                : "image/*"}
                onChange={this.onchangeItem}>
                {imgUrl
                    ? (
                        <React.Fragment>
                            <img className="cover-img" src={imgUrl} alt=""/>
                            <Icon type="eye" onClick={(event) => this.previewImg(event, imgUrl)}/>
                            &nbsp;&nbsp;
                            <Icon
                                type="delete"
                                onClick={this
                                .removeCover
                                .bind(this)}/>
                        </React.Fragment>
                    )
                    : (
                        <div>
                            <Button type="primary">上传图片</Button>
                            支持jpg、png、jpeg、bmp格式
                        </div>
                    )}
            </Upload>
        )
    }
}

// 金额
export class PriceItem extends React.Component < any,
any > {
    state = {
        price: this.props.value || 0
    }

    // 变更内容，将改变值向上传递
    private onchangeItem(value : number | undefined) {
        this.setState({
            price: value
        }, this.props.onChange(value))
    }

    render() {
        return (<InputNumber
            min={0}
            maxLength={5}
            value={this.state.price}
            onChange={this
            .onchangeItem
            .bind(this)}/>)
    }
}

export default {
    ClassItem,
    TitleItem,
    CoverItem,
    PriceItem
}
