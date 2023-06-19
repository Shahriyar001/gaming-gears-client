import React from 'react';

const Newsletter = () => {
    return (
        <div className="hero h-60" style={{ backgroundImage: 'url("https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/block-bg-1920x209.jpg")' }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero w-full text-neutral-content">
                <div className="grid lg:grid-cols-4 gap-3 text-white">
                    <h1 className="mb-5 text-4xl font-bold">NewsLetter:</h1>
                    <input type="text" placeholder="Your name" className="input input-bordered bg-opacity-40 text-white input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Your email" className="input input-bordered bg-opacity-40 input-primary w-full max-w-xs" />
                    <button className='btn btn-outline text-white'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;