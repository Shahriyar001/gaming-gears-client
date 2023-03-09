import React from 'react';
import img from "../../../assets/images/banner2.jpeg";
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <section>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <motion.div className='w-1/2'
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                    >
                        <motion.h1 animate={{ fontSize: 50 }} className="text-5xl font-bold">
                            Joystick Junction
                        </motion.h1>
                        <p className="py-6 text-xl">This site is spacially for those who want to get out of the busy life    for a while as well as those who want to get back into busy life. In this platform you can find Some of used Gaming Gears. That you can easyle purches those products. </p>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)"
                            }}
                            className="btn btn-primary text-white">
                            More Info
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;