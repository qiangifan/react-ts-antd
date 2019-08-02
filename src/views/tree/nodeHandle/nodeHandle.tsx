import * as React from 'react';
import { Tree, Icon, Button } from 'antd';

class NodeHandle extends React.Component {
    state = {
        request: [
            { title: "request", key: "0", isLeaf: false }
        ],
        response: []
    }

    appendTreeNode = (node: any) => {

    }
    removeTreeNode = () => {

    }
    titleReactNode = (item: any) => {
        if (item.isLeaf) {
            return (<span>{item.title} <Icon type="minus" /></span>);
        } else {
            return (<span>{item.title}  <Icon type="plus" />  <Icon type="minus" /></span>)
        }
    }

    renderTreeNodes = (data: any) => data.map((item: any) => {
        if (item.children) {
            return (
                <Tree.TreeNode title={this.titleReactNode(item)} key={item.key} dataRef={item}>
                    {this.renderTreeNodes(item.children)}
                </Tree.TreeNode>
            );
        }
        return <Tree.TreeNode title={this.titleReactNode(item)} key={item.key} isLeaf={item.isLeaf} dataRef={item} />;
    })

    render() {
        return (
            <div>
                <Tree>{this.renderTreeNodes(this.state.request)}</Tree>
            </div>
        )
    }
}

export default NodeHandle;