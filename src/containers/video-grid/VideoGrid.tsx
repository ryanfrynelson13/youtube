import { useState, useEffect } from "react"
import axios from 'axios'
import YoutubeVideoData from "../../types/youtube-video-data.type"
import classes from './video-grid.module.css'
import VideoPreview from "../../components/video-preview/VideoPreview"
import useSearch from "../../hooks/useSearch"

const URL = 'https://www.googleapis.com/youtube/v3/search'

type SearchListProps = {
    searchVal:[string,string]
    onVideo: (vidId: string) => void
}

const VideoGrid = ({searchVal, onVideo}:SearchListProps) => {

    const {isLoading,err ,searchData} = useSearch(...searchVal)

    const thumbnailMap = searchData?.map(videoData => {
        return (
            <VideoPreview key={videoData.id.videoId} videoId={videoData.id.videoId} onVideo={onVideo}/>            
        )
    })

    if(isLoading)return(
        <div className={classes.container}>
        ...Loading
    </div>
    )

    return (
        <div className={classes.container}>
            <ul  className={classes['video-grid']}>
                {thumbnailMap}
            </ul>
        </div>
    )
}

export default VideoGrid