import React from 'react'
import ImageCard from './ImageCard'

import './ImageList.css'

const ImageList = (props) => {

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })

  return(
    <div className="image-list">{images}</div>
  )
}

export default ImageList



// using map()
// 
// const numbers = [0,1,2,3,4,5,6,7]
// numbers.map((num) => {
//   return num * 10
// })

