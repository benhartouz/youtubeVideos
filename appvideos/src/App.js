import React, { Component } from "react";
import Results from "./Components/Results";
import Search from "./Components/Search";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numChildren: []
        };
    }
    addNewSearch = () => {};

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };
    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<Search key={i} number={i} />);
        }
        return (
            <div>
                <a
                    onClick={() => {
                        this.onAddChild();
                    }}
                >
                    ajout
                </a>
                {children}
            </div>
        );
    }
}

export default App;
