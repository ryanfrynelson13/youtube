type YoutubeVideoStats = {
    kind: string
    etag: string
    id: string
    snippet: {
        categoryId: string
        publishedAt: string,
        channelId: string,
        defaultAudioLanguage: string
        localized:{
            title: string,
            description: string
        }
        tags: string[]
        title: string,
        description: string,
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string,
        thumbnails: {
            default: ThumbnailType,
            medium: ThumbnailType,
            high: ThumbnailType,
            maxres: ThumbnailType,
            standard: ThumbnailType
        }
    }
    statistics: StatisticsType
    contentDetails: ContentDetailsType
}

type ThumbnailType= {
    url: string
    width: number,
    height: number
}

type StatisticsType = {
    viewCount: string
    likeCount: string
    favoriteCount: string
}

type ContentDetailsType = {
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    regionRestriction:{
        blocked: string[]
    }
    contentRating: any
    projection: string
}

export default YoutubeVideoStats