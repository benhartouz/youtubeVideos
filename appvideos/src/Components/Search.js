import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import Results from "../Components/Results";

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
        return (
            <div
                style={{
                    float: "left"
                }}
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
                    <button>Ajout</button>
                    <button>Delete</button>
                </div>
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Search;
