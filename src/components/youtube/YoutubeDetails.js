import React from "react";
import "./YoutubeDetails.css";
const YoutubeDetails = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter search keyword to laod...</h1>
        <br></br>
        <p style={{ fontSize: "25px" }}>
          Use the api to search for videos matching
        </p>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="row">
      <div className="col">
        
          <div className="">
            <iframe
              src={videoSrc}
              title="Video player"
            />
          </div>
          <div className="row">
            <div className="col">
              <h4 className="">{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>

  );
};
export default YoutubeDetails;
