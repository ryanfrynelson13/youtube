import { useEffect, useState } from "react"
import axios from "axios"
import YoutubeVideoData from "../types/youtube-video-data.type"

const URL = 'https://www.googleapis.com/youtube/v3/search'

const useSearch = (searchVal: string, typeOfSearch: string) => {
    const [searchData, setSearchData] = useState<YoutubeVideoData[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [err, setErr] = useState<unknown|null>(null)

    useEffect(() => {

     const getSearchData = async () => {
        setLoading(true)
        const baseParams = {
            key: import.meta.env.VITE_API_KEY,
            part: 'snippet',
            type: 'video',
            maxResults: 20          
        }

        const params = typeOfSearch === 'search' ?
            {
                ...baseParams,
                q: searchVal || '',
            }: typeOfSearch === 'related' ?
            {
                ...baseParams,
                maxResults: 10,
                relatedToVideoId: searchVal
            } :
            {
                ...baseParams,
                channelId: searchVal
            }

        try {
            const newData = await axios.get(URL, {
                params
            })
            setSearchData(newData.data.items)
            setLoading(false)
        } catch (error) {
            setErr(error)
            setLoading(false)
        }
        
    }
    getSearchData()
    }, [searchVal])


    return {isLoading, err, searchData}

}

export default useSearch