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
        this.setupTest = this.setupTest.bind(this);
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

    setupTest() {
        this.setState({
            "lastNote": {"string": 3, "fret": 14},
            "strings": ["G", "D", "A", "E"],
            "notes": [{"key": "0", "string": 1, "fret": 6}, {"key": "1", "string": 1, "fret": 6}, {
                "key": "2",
                "string": 2,
                "fret": 7
            }, {"key": "3", "string": 2, "fret": 7}, {"key": "4", "string": 3, "fret": 6}, {
                "key": "5",
                "string": 3,
                "fret": 6
            }, {"key": "6", "string": 3, "fret": 14}, {"key": "7", "string": 3, "fret": 14}, {
                "key": "8",
                "string": 3,
                "fret": 14
            }, {"key": "9", "string": 3, "fret": 14}, {"key": "10", "string": 3, "fret": 14}],
            "savedTabs": [{
                "name": "Test 1",
                "lastModified": "2018-07-02T14:16:42.739Z",
                "notes": [{"key": "0", "string": 1, "fret": 6}, {
                    "key": "1",
                    "string": 1,
                    "fret": 6
                }, {"key": "2", "string": 2, "fret": 7}, {"key": "3", "string": 2, "fret": 7}, {
                    "key": "4",
                    "string": 3,
                    "fret": 6
                }, {"key": "5", "string": 3, "fret": 6}]
            }, {
                "name": "Test 2",
                "lastModified": "2018-07-02T14:16:51.178Z",
                "notes": [{"key": "0", "string": 1, "fret": 6}, {
                    "key": "1",
                    "string": 1,
                    "fret": 6
                }, {"key": "2", "string": 2, "fret": 7}, {"key": "3", "string": 2, "fret": 7}, {
                    "key": "4",
                    "string": 3,
                    "fret": 6
                }, {"key": "5", "string": 3, "fret": 6}, {"key": "6", "string": 3, "fret": 14}, {
                    "key": "7",
                    "string": 3,
                    "fret": 14
                }, {"key": "8", "string": 3, "fret": 14}, {"key": "9", "string": 3, "fret": 14}, {
                    "key": "10",
                    "string": 3,
                    "fret": 14
                }]
            }]
        });
    }

    render() {
        const lastNote = this.state.lastNote;
        return (
            <div>
                <Fretboard handleInput={this.handleInput} strings={this.state.strings}/>
                <TabView notes={this.state.notes}/>
                <SavedTabsBox currentTab={this.state.notes} savedTabs={this.state.savedTabs}
                              handleSave={this.handleSave} handleLoad={this.handleLoad}/>
                <button onClick={this.setupTest}>Setup Test</button>
                <button onClick={() => console.log(JSON.stringify(this.state))}>Print State</button>
            </div>
        );
    }
}

export default App;
