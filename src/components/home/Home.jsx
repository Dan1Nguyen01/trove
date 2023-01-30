import React from 'react'
import SearchingBar from '../searchingbar/SearchingBar';
import songData from '../../hardCode';
import SongCard from '../songcards/SongCard'
import './home.css'

const Home = () => {
  const songElements = songData.map((song)=>{
    return <SongCard 
    key = {song.id}
    song = {song}
    />
  })
  

  
  return (
    <div className='trove__home'>
     
      <h1>Hardcore</h1>
      <div className='trove__music-slide' style={{textAlign:'center', marginBottom:'80px' }} >
     {songElements}
     </div>
    

    <h1>Hardcore</h1>
    <div className='trove__music-slide' style={{textAlign:'center', marginBottom:'80px' }} >
     {songElements}
    
    </div> 

    <h1>Hardcore</h1>
    <div className='trove__music-slide' style={{textAlign:'center', marginBottom:'80px' }} >
     {songElements}
    
    </div> 
    </div>
    
  )
}

export default Home