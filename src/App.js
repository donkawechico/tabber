import React, {Component} from 'react';
import './App.css';
import Fretboard from "./components/Fretboard";
import TabView from "./components/TabView";
import SavedTabsBox from "./components/SavedTabsBox";

class App extends Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {lastNote: {}, notes: []};
        this.noteId = 0;
    }

    handleInput(stringNum, fretNum) {
        this.setState({
            lastNote: {
                string: stringNum,
                fret: fretNum
            }, notes: [...this.state.notes, {
                key: (this.noteId++).toString(),
                string: stringNum,
                fret: fretNum
            }]
        });
    }

    render() {
        const lastNote = this.state.lastNote;
        return (
            <div>
                <Fretboard handleInput={this.handleInput}/>
                <TabView notes={this.state.notes}/>
                <SavedTabsBox/>
            </div>
        );
    }
}

export default App;
