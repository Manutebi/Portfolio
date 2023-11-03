import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return (
    <section className='section' id='work' >
      <div className='container mx-auto'>
        <div>
          <div className=' flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
            {/* {text} */}
            <div>
              <h2 className='h2 leading-tight text-cyan-300 font-semibold '>Mis ultimos <br />
                proyectos
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                autem architecto debitis? Nostrum molestiae modi officiis placeat earum qui cum.
              </p>
              <button className='btn btn-sm '>Ver todos</button>
            </div>
            {/* {imgage} */}
            <div className='around relative overflow-hidden border-2'>
              {/* {overlay} */}
              <div></div>
              <img src={Img1} alt="" />

            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
