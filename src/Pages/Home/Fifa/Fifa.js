import React from 'react';

const Fifa = () => {
    return (
        <div className="hero min-h-screen text-white " style={{ backgroundImage: 'url("https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-bg.jpg")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-image.jpg" alt="Fifa" className=" rounded-lg shadow-2xl " />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">FIFA SOCCER 18 <br /><span className='text-yellow-400'>IS RELEASED!</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Fifa;
