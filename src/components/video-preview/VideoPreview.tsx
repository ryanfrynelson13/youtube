import axios from "axios"
import { useEffect, useState } from "react"
import YoutubeVideoData from "../../types/youtube-video-data.type"
import YoutubeVideoStats from "../../types/youtube-video-stats.type"
import classes from './video-preview.module.css'

const URL = 'https://www.googleapis.com/youtube/v3/videos'


// const YTDurationToSeconds = (duration: string) => {
//   var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

//   match = match.slice(1).map(function(x) {
//     if (x != null) {
//         return x.replace(/\D/, '');
//     }
//   });

//   var hours = (parseInt(match[0]) || 0);
//   var minutes = (parseInt(match[1]) || 0);
//   var seconds = (parseInt(match[2]) || 0);

//   return hours * 3600 + minutes * 60 + seconds;
// }


type VideoPreviewProps = {
    videoData: YoutubeVideoData
    onVideo: (vidId: string) => void
}

const VideoPreview = ({videoData, onVideo}:VideoPreviewProps) => {

  const [stats, setStats] = useState<YoutubeVideoStats>()
  useEffect(() => {
    axios.get(URL, {
      params:{
        part: 'snippet,statistics,contentDetails',
        key: import.meta.env.VITE_API_KEY,
        id: videoData.id.videoId,
      }
    })
    .then(res => {
      console.log(res.data.items[0])      
      setStats(res.data.items[0])
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <li className={classes.preview} onClick={() => onVideo(videoData.id.videoId)} key={videoData.id.videoId}>
        <img src={stats?.snippet.thumbnails.maxres.url ?? videoData.snippet.thumbnails.high.url} alt="" />
        <p>{videoData.snippet.title}</p>
        <p className={classes.channel}>{videoData.snippet.channelTitle}</p>
        <p>{stats?.statistics.viewCount} vues</p>
        <span></span>
    </li>
  )
}

export default VideoPreview