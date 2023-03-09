import React from 'react';
import { motion } from 'framer-motion';

const InCard = ({ card }) => {
    const { name, description, bgClass } = card;
    return (
        <motion.figure
            whileHover={{ scale: 1.1 }}
        >
            <div className={`card shadow-xl text-white ${bgClass}`}>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </motion.figure>
    );
};

export default InCard;