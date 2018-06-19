import React, {Component} from 'react'
import TabString from "./TabString";

class TabView extends Component {
    render() {
        let strings = [];
        for (var i = 0; i < 4; i++) {
            strings.push(<TabString key={i} stringNum={i} notes={this.props.notes}/>);
        }
        return <div>{strings}</div>
    }
}

export default TabView