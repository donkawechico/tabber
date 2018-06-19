import React, { Component } from 'react';
import FretString from "./FretString";

class Fretboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var strings = [];
        var numStrings = 4;
        for (var i = 0; i < numStrings; i++) {
            strings.push(<FretString key={i} stringNum={i} handleInput={this.props.handleInput}/>);
        }
        return <div>{strings}</div>;
    }
}

export default Fretboard;
