import React, {Component} from 'react'
import {Input, InputGroup, InputGroupAddon, Button, ListGroup} from 'reactstrap'
import SavedTabsEntry from "./SavedTabsEntry";

class SavedTabsBox extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.state = {
            saveName: ""
        };
    }

    onSave() {
        this.props.handleSave(this.state.saveName);
    }

    render() {
        var savedTabsListItems = [];
        for (var i = 0; i < this.props.savedTabs.length; i++) {
            savedTabsListItems.push(<SavedTabsEntry key={i.toString()} tabId={i} tabName={this.props.savedTabs[i].name} handleLoad={this.props.handleLoad}/>);
        }
        return <div>
            <InputGroup>
                <Input onChange={(e) => {this.setState({saveName: e.target.value})}}/>
                <InputGroupAddon addonType="append"><Button color="primary" onClick={this.onSave}>Save</Button></InputGroupAddon>
            </InputGroup>
            <ListGroup flush>{savedTabsListItems}</ListGroup>
        </div>
    }
}

export default SavedTabsBox