const VideoPlayer = ({videoId}: {videoId: string}) => {
  return (
    <div>
        <iframe
            title="Ma vidéo YouTube"
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + videoId}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoPlayer