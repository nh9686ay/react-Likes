import React, { useState } from 'react'
import LikeTotal from './LikeTotal'
const Likes = () => {
    const [totalLikes, SettotalLikes] = useState(0)
    const likeFunc =() =>{
       SettotalLikes(totalLikes +1);
    }
    const disLikeFunc =() =>{
      if(totalLikes > 0){
        SettotalLikes(totalLikes -1);
      }
      else{SettotalLikes(0)}
    }

  return (
    <div>
    <h1 class="profile">Likes</h1>
    <LikeTotal totalLikes={totalLikes}/>
    <button class="plusButton" onClick={likeFunc}>+</button>
    <button class="minusButton" onClick={disLikeFunc}>-</button>
    
    </div>
  )
}
export default Likes