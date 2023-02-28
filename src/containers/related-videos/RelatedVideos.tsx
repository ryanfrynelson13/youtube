import VideoPreview from '../../components/video-preview/VideoPreview'
import useSearch from '../../hooks/useSearch'
import classes from './related-videos.module.css'

type RelatedVideosProps = {
  videoId: string
  onVideo: (vidId: string) => void
}

const RelatedVideos = ({videoId, onVideo}:RelatedVideosProps) => {

  const {isLoading, err, searchData} = useSearch(videoId, 'related')

  const relatedVidsMap = searchData.map(data => {
    return <VideoPreview key={data.id.videoId} videoId={data.id.videoId} onVideo={onVideo} mini={true}/>
  })

  if(isLoading)return(
    <div className={classes.related}>
        ...Loading
    </div>
  )
  return (
    <div className={classes.related}>
        {relatedVidsMap}
    </div>
  )
}

export default RelatedVideos