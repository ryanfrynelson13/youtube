import { useCallback, useState } from 'react'
import './App.css'
import Header from './containers/header/Header'
import VideoGrid from './containers/video-grid/VideoGrid'
import VideoPlayerPage from './containers/video-player-page/VideoPlayerPage'

function App() {

  const [searchVal, setSearchVal] = useState<[string,string]>(['', 'search'])
  const [currentVidId, SetCurrentVidId] = useState('')
  const [displayPlayer, setDisplayPlayer] = useState(false)

  const getNewSearch = useCallback((search: [string, string]) => {
    setSearchVal(search)
    setDisplayPlayer(false)
  }, [searchVal, displayPlayer])

  const getNewVideoId = useCallback((vidId: string) => {
    SetCurrentVidId(vidId)
    setDisplayPlayer(true)
  }, [currentVidId, displayPlayer])
  
  return (
    <>
      <Header onSearch={getNewSearch}/>
      {
        !displayPlayer ? 
        <VideoGrid searchVal={searchVal}  onVideo={getNewVideoId}/>:
        <VideoPlayerPage videoId={currentVidId} onVideo={getNewVideoId} onSearch={getNewSearch}/>
      }
    </>
  )
}

export default App
