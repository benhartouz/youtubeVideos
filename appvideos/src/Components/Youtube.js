import React, { Component } from "react";

class Youtube extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {}
    render() {
        let img = this.props.youtube.snippet.thumbnails.default.url;
        let title = this.props.youtube.snippet.title;
        let desc = this.props.youtube.snippet.description;
        let publishDate = this.props.youtube.snippet.publishedAt;
        let id = this.props.youtube.id.videoId;
        let urlVideo = `https://www.youtube.com/watch?v=${id}`;
        return (
            <a href={urlVideo} id="videoElement">
                <div className="picture">
                    <img src={img} />
                </div>
                <div className="body">
                    <h3>{title}</h3>
                    <p className="description">{desc}</p>
                    <p className="publish">{publishDate}</p>
                </div>
            </a>
        );
    }
}
export default Youtube;
