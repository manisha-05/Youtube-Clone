import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div style={{ height: "60%", marginLeft: "2rem" }}>
        <Paper elevation={6} style={{ height: "60%" }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </Paper>
        <Paper elevation={6} style={{ padding: "15px" }}>
          <Typography variant="h4">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2">
            {video.snippet.description}
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default VideoDetails;
