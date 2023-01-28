import React from 'react'
import './songcard.css'

const SongCard = (props) => {
    
  return (
   
      
        <div className="trove__song">
              

                    <div className='trove__song-info'>
                    <img src={`../songImgs/${props.song.img}`} className='trove__song_img' />
                        <h6>{props.song.name}</h6>
                        <p>{props.song.artist}</p>
                        <h6>{props.song.genre}</h6>
                        

                    </div>
         
            </div>    
         
  
  )
}

export default SongCard