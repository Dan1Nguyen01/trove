import React from 'react'
import './slideshow.css'

const SlideShow = ({imgs}) => {
  const [index, setIndex] = React.useState(0);
  
  React.useEffect (()=>{
    setIndex(0)
  },[])

  const next = ()=>{
    if(index === imgs.length-1){
      setIndex(0);
    }else{
      setIndex((prevIndex)=> prevIndex+1)
    }
  }

  const prev = () =>{
      if(index=== 0){
        setIndex(imgs.length-1)
     }else{
      setIndex(index-1)
     }
  }
  return (
    <div className='slideshow__div'>
      <div className='slideshow_img'>
      <img className='slideshow__maining' src={imgs[index]}/>
      <button onClick={prev}>&#60;</button>
        <button onClick={next}>&#62;</button>
      </div>
     
      <div className='actions'>
        
      </div>
    </div>
  )
}

export default SlideShow