import React, {Component} from 'react';

class Fret extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.handleInput(this.props.stringNum, this.props.fretNum);
    }

    render() {
        return (
            <button onClick={this.onClick} className="fretButton">
                {this.props.fretNum}
            </button>
        );
    }
}

export default Fret;