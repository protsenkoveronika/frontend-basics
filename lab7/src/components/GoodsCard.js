import React from 'react';

const GoodsCard = ({ goods }) => {
    return (
        <div className="goods-gallery">
            {goods.map((item, index) => (
                <div key={index} className="goods-card">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price} грн</p>
                </div>
            ))}
        </div>
    );
};

export default GoodsCard;