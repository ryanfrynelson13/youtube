import useVideo from "../../hooks/useVideo";
import classes from "./video-player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import useLogo from "../../hooks/useLogo";

type VideoPlayerProps = {
  onSearch: (search: [string, string]) => void
  videoId: string
}

const VideoPlayer = ({ videoId, onSearch }: VideoPlayerProps) => {
  const { isLoading, err, videoData } = useVideo(videoId);
  const logo = useLogo(videoData?.snippet.channelId)

  if (isLoading)
    return (<div className={classes.player}>
      <p>...Loading</p>
    </div>
    );

  if (videoData && !err)
  return (
    <div className={classes.player}>
      <div className={classes.container}>
        <div className={classes["aspect-ratio"]}>
          <iframe
            title="Ma vidéo YouTube"
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + videoId}
            allowFullScreen
          ></iframe>
        </div>
        <div className={classes.info}>
          <div>
            <p className={classes.title}>{videoData.snippet.title}</p>
            <p className={classes.views}>{videoData.statistics.viewCount} vues</p>
          </div>
          <div>
            <div onClick={() => onSearch([videoData.snippet.channelId, 'channel'])}>
              <img className={classes.logo} src={logo? logo: ''} alt="" />
              <p  className={classes.channel}>{videoData.snippet.channelTitle}</p>
            </div>
            <p className={classes.likes}><FontAwesomeIcon icon={faThumbsUp}/> {videoData.statistics.likeCount}</p>
          </div>
        </div>
        <div className={classes.desc}>
            <p>{videoData.snippet.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.player}>
      <p>Erreur</p>
    </div>
  );
};

export default VideoPlayer;
