import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ video, onVideoSelect }) => {
  const listOfVideos = video.map(video => (
    <VideoItem  onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={8}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
