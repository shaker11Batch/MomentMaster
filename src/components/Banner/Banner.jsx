import React from 'react';
import banner from '../../assets/banner.jpg'
const Banner = () => {


    return (
        <div
            className="hero md:min-h-[400px] rounded-xl shadow-orange-50 "
            style={{
                backgroundImage:
                    `url(${banner})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Learners</h1>
                    <p className="mb-5">
                        An all-in-one platform to create, manage, and join campus events. Simplifies organizing, boosts student engagement, tracks participation, and fosters a vibrant college community through seamless digital interaction.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Banner;