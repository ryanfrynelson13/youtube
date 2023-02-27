import { useState, useEffect } from "react"
import axios from 'axios'
import YoutubeVideoData from "../../types/youtube-video-data.type"
import classes from './video-grid.module.css'
import VideoPreview from "../../components/video-preview/VideoPreview"

const URL = 'https://www.googleapis.com/youtube/v3/search'

type SearchListProps = {
    searchVal:string
    onVideo: (vidId: string) => void
}

const VideoGrid = ({searchVal, onVideo}:SearchListProps) => {

    const [thumbnails, setThumbnails] = useState<YoutubeVideoData[]>([])

    useEffect(() => {
        axios.get(URL, {
            params: {
                key: import.meta.env.VITE_API_KEY,
                part: 'snippet',
                q: searchVal || '',
                maxResults: 20,
                type: 'video'
            }
        })
        .then(res => { 
            setThumbnails(res.data.items)
        })
        .catch(err => {
            console.log(err);            
        })
    },[searchVal])

    const thumbnailMap = thumbnails?.map(videoData => {
        return (
            <VideoPreview key={videoData.id.videoId} videoData={videoData} onVideo={onVideo}/>            
        )
    })

  return (
    <div className={classes.container}>
        <ul  className={classes['video-grid']}>
            {thumbnailMap}
        </ul>
    </div>
  )
}

export default VideoGrid