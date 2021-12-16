import React, { useState } from "react";
import { YoutubeSearchBar } from "../youtubeSearch/YoutubeSearchBar";
import youtube from "../utility/YoutubeApi";
import { useStateValue } from "../../StateProvider";

import axios from "axios";
import { initialState } from "../../reducer";
import YoutubeDetails from "./YoutubeDetails";
import { YoutubeList } from "./YoutubeList";
export const Youtube = () => {
  const [{ videos }, dispatch] = useStateValue();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handlesubmit = async (termFromSearchbar) => {
      try {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchbar
      }
    });
    dispatch({
      type: "YOUTUBELOADVIDEO",
      videos: [...initialState.videos, ...response?.data.items]
    });
    console.log("data from youtube api", videos);
}catch(err){
    alert("please connect to internet")
}
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="container">
      <div className="">
        <YoutubeSearchBar handleFormSubmit={handlesubmit} />
      </div>
      <div className=" mt-10 ">
        <div className="row">
          <div className="col-8">
            <YoutubeDetails video={selectedVideo} />
          </div>
          <div className="col-4">
            <YoutubeList
              handleVideoSelect={handleVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
