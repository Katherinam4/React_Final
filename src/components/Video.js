import React from "react";
import "../styles/Video.scss";

const Video = () => {
  return (
    <div className="video">
      <h2>Ultimate Drive</h2>
      <iframe
        title="Dailymotion Video Player"
        width="95%"
        height="1000"
        src="https://www.dailymotion.com/embed/video/x84vbes?loop=1&autoplay=1"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
