import React from 'react'

const VendorCard = (props) => {
  
  return (
      
    <div className="card" onClick={props.onClick}>
        <img className = 'thumbnail-img' src={props.image} alt="profile picture"/> 
      <div className="info-wrapper">
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
    </div>
    
  )
}

export default VendorCard