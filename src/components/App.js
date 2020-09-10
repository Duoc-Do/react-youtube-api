import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
const KEY = "AIzaSyA5zAKQbFaBXKFtvoY9GtjMR_jRaECzKaY";
class App extends Component {
  state = { videos: [] };
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
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
