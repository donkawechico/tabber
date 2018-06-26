import React, {Component} from 'react'
import {Form, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap'

class SavedTabsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {savedStates: []};
    }

    saveState() {
        this.newState({savedStates: [...this.state.savedStates, this.props]})
    }

    render() {
        return <div>
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append"><Button>Save</Button></InputGroupAddon>
            </InputGroup>
            <ListGroup flush></ListGroup>
        </div>
    }
}

export default SavedTabsBox