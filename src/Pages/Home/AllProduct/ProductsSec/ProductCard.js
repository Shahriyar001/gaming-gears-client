import React from 'react';
import { motion } from "framer-motion";

const ProductCard = ({ product, setSingpro }) => {
    const { img, details, title, price } = product;
    return (
        <div className="card card-compact pt-2  bg-base-100 shadow-xl">
            <motion.figure
                whileHover={{ scale: 1.1 }}
            >
                <img src={img} alt="Shoes" />
            </motion.figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p className='text-xl'>$ {price}</p>
                <div className="card-actions justify-end">
                    <motion.label
                        whileHover={{
                            scale: 1.1,
                            // textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                        onClick={() => setSingpro(product)} htmlFor="booking-modal" className="btn btn-primary text-white">Details & Book
                    </motion.label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;