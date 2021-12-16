import React from 'react'
import YoutubeItem from "./YoutubeItem"
export const YoutubeList = ({videos,handleVideoSelect}) => {
    const renderVideos=videos.map((video)=>{
        return <YoutubeItem key={video.id.VideoId} video={video} handleVideoSelect={handleVideoSelect}/>
    })
    return (
        <div className="">{renderVideos}
        
        </div>
    )
}
