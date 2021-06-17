import React from 'react';
import Products from '../Products/products';
import "../Cards/cards.css";

const Cards = ({ image, name, price }) => {

    return (
        <div className="o-card">
            <div>
                <img src={image} width="190px" height="273px"/>
                <div width="260px" height="44px" className="o-div-info">
                    <h4 className="o-names">{name}</h4>
                    <h4 className="o-prices">${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cards;