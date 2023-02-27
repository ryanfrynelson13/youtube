import { useCallback, useState } from 'react'
import './App.css'
import Header from './containers/header/Header'
import VideoPlayer from './components/video-player/VideoPlayer'
import VideoGrid from './containers/video-grid/VideoGrid'

function App() {

  const [searchVal, setSearchVal] = useState('')
  const [currentVidId, SetCurrentVidId] = useState('')

  const getNewSearch = useCallback((search: string) => {
    setSearchVal(search)
  }, [searchVal])

  const getNewVideoId = useCallback((vidId: string) => {
    SetCurrentVidId(vidId)
  }, [currentVidId])
  
  return (
    <>
      <Header onSearch={getNewSearch}/>
      <VideoGrid searchVal={searchVal}  onVideo={getNewVideoId}/>
      {/* <VideoPlayer videoId={currentVidId}/> */}
    </>
  )
}

export default App
