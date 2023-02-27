type YoutubeVideoData = {
    kind: string
    etag: string
    id: {
        kind:string,
        videoId: string
    }
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string,
        thumbnails: {
            default: ThumbnailType,
            medium: ThumbnailType,
            high: ThumbnailType
        }
    }
}

type ThumbnailType= {
    url: string
    width: number,
    height: number
}

export default YoutubeVideoData