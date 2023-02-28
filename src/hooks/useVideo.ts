import { useEffect, useState } from "react"
import axios from "axios"
import YoutubeVideoStats from "../types/youtube-video-stats.type"

const URL = 'https://www.googleapis.com/youtube/v3/videos'

const useVideo = (videoId: string) => {
    const [videoData, setVideoData] = useState<YoutubeVideoStats|null>(null)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [err, setErr] = useState<unknown|null>(null)

    useEffect(() => {

     const getVideoData = async () => {
        setLoading(true)
        try {
            const newData = await axios.get(URL, {
                params: {
                    part: 'snippet,statistics,contentDetails',
                    key: import.meta.env.VITE_API_KEY,
                    id: videoId,
                }
            })
            setVideoData(newData.data.items[0])
            setLoading(false)
        } catch (error) {
            setErr(error)
            setLoading(false)
        }
        
    }
    getVideoData()
    }, [videoId])


    return {isLoading, err, videoData}
}

export default useVideo