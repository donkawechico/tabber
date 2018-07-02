import React, {Component} from 'react'
import {Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap'

class SavedTabsBox extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.state = {
            saveName: "",
            tabToLoad: 0
        };
    }

    onSave() {
        this.props.handleSave(this.state.saveName);
    }

    onLoad(a) {
        console.log(a);
        this.props.handleLoad(this.state.tabToLoad);
    }

    render() {
        var savedTabsListItems = [];
        for (var i = 0; i < this.props.savedTabs.length; i++)  {
            savedTabsListItems.push(<ListGroupItem tag="a" href="#" onClick={this.onLoad} tabId={i} key={i.toString()}>{this.props.savedTabs[i].name}</ListGroupItem>);
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