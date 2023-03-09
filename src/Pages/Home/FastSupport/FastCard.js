import React from 'react';

const FastCard = ({ card }) => {
    const { name, img } = card;
    return (
        <div className="card  bg-white shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-black">
                <p className='text-center text-2xl'>{name}</p>

            </div>
        </div>
    );
};

export default FastCard;