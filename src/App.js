import React, {Component} from 'react';
import './App.css';
import Fretboard from "./components/Fretboard";
import TabView from "./components/TabView";
import SavedTabsBox from "./components/SavedTabsBox";

class App extends Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = {lastNote: {}, strings: ["E", "A", "D", "G"].reverse(), notes: [], savedTabs: []};
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

    handleSave(saveName) {
        this.setState({
            savedTabs: [...this.state.savedTabs, {
                name: saveName,
                lastModified: new Date(),
                notes: this.state.notes
            }]
        });
    }

    handleLoad(tabId) {
        this.setState({
            notes: this.state.savedTabs[tabId].notes
        });
    }

    render() {
        const lastNote = this.state.lastNote;
        return (
            <div>
                <Fretboard handleInput={this.handleInput} strings={this.state.strings}/>
                <TabView notes={this.state.notes}/>
                <SavedTabsBox currentTab={this.state.notes} savedTabs={this.state.savedTabs} handleSave={this.handleSave} handleLoad={this.handleLoad}/>
            </div>
        );
    }
}

export default App;
