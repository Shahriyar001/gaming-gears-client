import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ProCard = ({ card }) => {
    const { img, name, description } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl lg:flex-row-reverse">
            <motion.figure
                whileHover={{ scale: 1.1 }}
            >
                <img src={img} className="w-full" alt="Movie" />
            </motion.figure>

            <div className="card-body w-1/2">
                <h2 className="card-title">{name}</h2>
                <p>{description} <Link className='text-secondary'>Read more</Link></p>

            </div>
        </div>
    );
};

export default ProCard;