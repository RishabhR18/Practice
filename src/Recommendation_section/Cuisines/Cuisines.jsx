import React from 'react'
import  "./Cuisines.css"

const  Cuisines = (props)  =>{
  return (
    <div>
      <div className="cuisines-container">
        <div class="cuisines-header">{props.cuisineData}</div>
      </div>
    </div>
  )
}

export default Cuisines
