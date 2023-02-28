import { useEffect, useState } from "react"
import axios from "axios"

const URL = 'https://www.googleapis.com/youtube/v3/channels'

const useLogo = (channelId: string | undefined) => {
    const [logo, setLogo] = useState<string|null>(null)

    useEffect(() => {
        const getLogo = async () => {
            try {   
                
                if(channelId){
                    const response = await axios.get(URL, {
                        params: {
                            part: 'snippet',
                            id: channelId,
                            key: import.meta.env.VITE_API_KEY
                        }
                    })               
                    setLogo(response.data.items[0].snippet.thumbnails.high.url)
                }
            } catch (error) {
                console.log(error)                
            }
        }
        getLogo()
    },[channelId])

    return logo
}

export default useLogo