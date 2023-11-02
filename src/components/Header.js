import React from 'react';

import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo*/}
        <a href="#">
          <img src={Logo} alt="" />
          {/* {button} */}
        </a>
        <button className='btn btn-sm'>Trabaja conmigo </button>
      </div>
    </div>
  </header>;
};

export default Header;
