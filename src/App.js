import React, { useState } from "react";
import youtube from "./api/youtube";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetails , VideoList } from "./components";

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm) {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyBE7BMs2QcYGfiwwFnTju0b8lDtdGcwiCs",
          q: searchTerm,
        },
      });

      console.log(response.data.items);
        console.log(response.data.items[0]);
      setVideo(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList video={video} onVideoSelect={setSelectedVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
