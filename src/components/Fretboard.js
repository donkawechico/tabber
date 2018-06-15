import React, { Component } from 'react';
import Fret from "./Fret";

class Fretboard extends Component {
    render() {
        var frets = [];
        for (var i = 0; i < 10; i++) {
            frets.push(<Fret key={i} />);
        }
        return <div>{frets}</div>;
    }
}

export default Fretboard;
