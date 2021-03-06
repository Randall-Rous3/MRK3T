import React from 'react'

const ProductCard = (props) => {

    return (
        <div>
            <div className="card" onClick={props.onClick}>
                <img className='thumbnail-img' src={props.image} alt="product-image" />
                <div className="info-wrapper flex-row space">
                    <h3>{props.name}</h3>
                    <p>${props.price}/unit</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard