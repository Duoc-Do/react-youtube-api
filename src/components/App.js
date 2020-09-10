import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyA5zAKQbFaBXKFtvoY9GtjMR_jRaECzKaY";
class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term, // term is String we need to search for
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
