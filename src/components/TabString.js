import React, {Component} from 'react';

class TabString extends Component {
    render() {
        let result = "";
        this.props.notes.forEach((note, index) => {
            if (this.props.stringNum == note.string) {
                result += note.fret;
                if (note.fret < 10) {result += "-"};
            } else {
                result += "--";
            }
        });
        return <div className="tabview">{result}</div>;
    }
}

export default TabString;