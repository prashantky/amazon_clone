import React from 'react'

 const YoutubeItem = ({video,handleVideoSelect}) => {
     console.log("data from youtubeitem" ,video)
    return (
        <div onClick={()=>handleVideoSelect(video)} className='video-item item d-flex'>
           <img className='' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
           <div className=''>
               <div className=''>{video.snippet.title}</div>
           </div>
            
        </div>
    )
}
export default YoutubeItem