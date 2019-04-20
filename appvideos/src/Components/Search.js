import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import Results from "../Components/Results";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addColumn, removeColumn } from "../Redux/Actions/search";
import ReactDOM from "react-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: []
        };
    }

    fetchYoutubeContent = async () => {
        YTSearch(
            {
                key: "AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU",
                term: this.state.term
            },
            data => {
                try {
                    if (data && data.data && data.data.error.message) {
                        console.log(data);
                        throw "error";
                    }
                    this.setState({
                        results: data
                    });
                    this.setState({ videos: data, selectedVideo: data[0] });
                    console.log(this.state.videos);
                } catch (err) {}
            }
        );
    };
    componentDidMount() {
        this.fetchYoutubeContent();
    }

    render() {
        console.log("this.props.number:", this.props.number);
        return (
            <div
                style={{
                    float: "left",
                    width: "400px",
                    overflow: "hidden",
                    marginRight: "10px"
                }}
                id={`search_${this.props.number}`}
            >
                <div>
                    <input
                        placeholder="Search video"
                        onChange={input => {
                            this.setState({
                                term: input.target.value
                            });
                        }}
                    />
                    <button
                        onClick={() => {
                            this.fetchYoutubeContent();
                        }}
                    >
                        Search
                    </button>
                    <button
                        onClick={() => {
                            this.props.addColumn(this.props.count + 1);
                        }}
                    >
                        Ajout
                    </button>
                    <button
                        onClick={() => {
                            this.props.removedColumn.push(this.props.number);
                            this.props.removeColumn(this.props.removedColumn);
                        }}
                    >
                        Delete
                    </button>
                </div>
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            count: state.searchColumn,
            removedColumn: state.removeColumn
        };
    },
    dispatch => {
        return {
            addColumn: bindActionCreators(addColumn, dispatch),
            removeColumn: bindActionCreators(removeColumn, dispatch)
        };
    }
)(Search);
