import React from "react";
import "../styles/Video.scss";

const Video = () => {
  return (
    <div className="video">
      <h2>Ultimate Drive</h2>
      <iframe
        title="Dailymotion Video Player"
        width="95%"
        height="100%"
        src="https://www.dailymotion.com/embed/video/x84vbes?autoplay=1&loop=1&queue-enable=false"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
