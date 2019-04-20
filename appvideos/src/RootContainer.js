import React, { Component } from "react";
import Search from "./Components/Search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numChildren: [],
            colmuns: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("props.removeColumn:", props.removeColumn);
        return {
            numChildren: props.count,
            colmuns: props.colmuns
        };
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };
    render() {
        console.log(this.props.count);
        console.log(this.props.colmuns);
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            console.log(this.props.colmuns.indexOf(i));
            if (this.props.colmuns.indexOf(i) > 0) {
                continue;
            }
            children.push(<Search key={i} number={i} />);
        }
        return <div>{children}</div>;
    }
}

export default connect(
    state => {
        return {
            count: state.searchColumn,
            colmuns: state.removeColumn
        };
    },
    null
)(RootContainer);
