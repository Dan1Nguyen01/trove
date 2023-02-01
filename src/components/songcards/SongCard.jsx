import React from 'react'
import './songcard.css'

const SongCard = (props) => {
    
  return (
   
      <>
      <a href='#song1' style={{textDecoration:'none'}}>
        <div className="trove__song">
              

                    <div className='trove__song-info'>
                    <img src={`../songImgs/${props.song.img}`} className='trove__song_img' />
                        <h6>{props.song.name}</h6>
                        <p>{props.song.artist}</p>
                        {/* <p>{props.song.genre}</p> */}
                        

                    </div>
         
            </div>   
            </a> 
            </>
  
  )
}

export default SongCard