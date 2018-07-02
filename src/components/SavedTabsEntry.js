import React, {Component} from 'react'
import {ListGroupItem} from "reactstrap";

class SavedTabsEntry extends Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
    }

    onLoad() {
        this.props.handleLoad(this.props.tabId);
    }

    render() {
        return <ListGroupItem tag="a" href="#" onClick={this.onLoad}>{this.props.tabName}</ListGroupItem>
    }
}

export default SavedTabsEntry