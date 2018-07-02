import React, {Component} from 'react';
import Fret from "./Fret";

class FretString extends Component {
    render() {
        var frets = [];
        for (var i = 0; i < 20; i++) {
            frets.push(<Fret key={i} stringNum={this.props.stringNum} fretNum={i} handleInput={this.props.handleInput}/>);
        }
        return <div className="fretString">{this.props.stringName}{frets}</div>;
    }
}

export default FretString;