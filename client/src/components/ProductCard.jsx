import React from 'react'

const ProductCard = (props) => {
  
  return (
      
    <div className="vendor-card" onClick={props.onClick}>
        <img className = 'thumbnail-img' src={props.image} alt="profile picture"/> 
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
      </div>
    </div>
    
  )
}

export default ProductCard