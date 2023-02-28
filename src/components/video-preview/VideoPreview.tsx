import useVideo from "../../hooks/useVideo"
import YoutubeVideoData from "../../types/youtube-video-data.type"
import classes from './video-preview.module.css'


type VideoPreviewProps = {
    videoId: string
    onVideo: (vidId: string) => void
    mini: boolean 
}

const VideoPreview = ({videoId, onVideo, mini}:VideoPreviewProps) => {

  const {isLoading, err, videoData} = useVideo(videoId)
  
  if(isLoading)return (
    <></>
  )
  if(videoData)
  return (
    <li className={mini? classes['mini-preview'] : classes.preview} onClick={() => onVideo(videoData.id)} key={videoData.id}>
        <img src={videoData.snippet.thumbnails.maxres?.url ?? videoData.snippet.thumbnails.high.url} alt="" />
        <div>
          <p>{videoData.snippet.title}</p>
          <p className={classes.channel}>{videoData.snippet.channelTitle}</p>
          <p>{videoData.statistics.viewCount} vues</p>
          <span></span>
        </div>
    </li>
  )

  return (
    <>
    </>
  )
}


VideoPreview.defaultProps = {
  mini: false
}

export default VideoPreview