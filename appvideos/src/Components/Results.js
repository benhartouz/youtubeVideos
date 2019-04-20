import React, { Component } from "react";
import Youtube from "./Youtube";

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.results);
        let results = this.props.results.map(element => {
            return <Youtube youtube={element} />;
        });
        return <div>{results}</div>;
    }
}

export default Results;
