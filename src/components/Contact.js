import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { useRef } from 'react';

import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vtrwoub', 'template_2lwdh9k', form.current, 'H2EVvs7ohjODdrOau')
      .then((result) => {
        console.log(result.text);
        console.log('Mensaje enviado exitosamente!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row '>
          {/* text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase font-medium text-accent mb-2 tracking-wide'>Contactame</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos <br />
                juntos!!!
              </h2>
            </div>

          </div>
          {/* form */}
          <form ref={form} onSubmit={sendEmail}>
            <div className='flex-1 flex flex-col border'>
              <input name="user_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all' type="text"
                placeholder='Tu nombre' />
              <input name="user_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all' type="text"
                placeholder='Tu email' />
              <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white 
            focus:border-accent transition-all resize-none mb-12' placeholder='Escribe un mensaje'></textarea>
              <button type="submit" value="Send" className=' btn btn-lg'>Enviar</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
};

export default Contact;
