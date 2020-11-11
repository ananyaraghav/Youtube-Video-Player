import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetails = ({ video }) => {
    if(!video) return <div>Loading...</div>
    console.log(video)
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%', marginLeft: "10px"}}>
                <iframe frameBorder='0' height="500px" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding:'15px', marginBottom:"10px", marginLeft: "10px"}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>

    )
}
export default VideoDetails
  

