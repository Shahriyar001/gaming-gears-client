import React from 'react';

const Advertise = () => {
    return (
        <div className="hero min-h-screen my-8" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0Xag5WMnvaaOU7sbq9__kvVxz54BQVmcqw&usqp=CAU")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">Explore Our New Cyber Cafe.</h1>
                    <p className="mb-5 text-white">We offer high-speed internet access and a range of computer hardware and software to meet all your needs. Whether you're looking to browse the web, check email, play games, or get some work done, our cyber cafe has everything you need.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;