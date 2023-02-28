import VideoPlayer from "../../components/video-player/VideoPlayer"
import RelatedVideos from "../related-videos/RelatedVideos"
import classes from './video-player-page.module.css'

type VideoPlayerPageProps = {
    videoId: string
    onVideo: (vidId: string) => void
    onSearch: (search: [string, string]) => void
}

const VideoPlayerPage = ({videoId, onVideo, onSearch}: VideoPlayerPageProps) => {
  return (
    <div className={classes['player-page']}>
        <VideoPlayer videoId={videoId} onSearch={onSearch}/>
        <RelatedVideos videoId={videoId} onVideo={onVideo}/>
    </div>
  )
}

export default VideoPlayerPage