import React from 'react';
import newsletter from '../../assets/newsletter.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';

const NewsLatter = () => {
  return (
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
viewport={{once:false, amount:0.7}}

    className='flex flex-col md:flex-row gap-16 my-12'>
      <div className='flex-1'>
        <img className='w-[350px] md:w-full mx-auto rounded-2xl' src={newsletter} alt="" />
      </div>
      <div className='flex-1 px-6'>
        <h3 className="text-4xl font-bold mb-4">Newsletter</h3>
        <p>Sign up to jordan Turner's newsletter and be the first to know about the latest news, special offers, and event.</p>

        <div className='mt-4'>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input type="text" className="input" placeholder="Enter your name" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your G-Mail</legend>
            <input type="text" className="input" placeholder="G-Mail" />
          </fieldset>
          <button className='btn my-2 bg-amber-300'>Subscribe</button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLatter;