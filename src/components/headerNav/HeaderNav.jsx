import React from 'react';
import Logo from './../../assets/logo.svg';
import userLogo from './../../assets/userLogo.svg';

const HeaderNav = () => {
  return (
    <nav className='flex flex-row lg:flex-col justify-between max-lg:items-center p-6 lg:h-screen lg:w-max bg-transparent min-w-72'>
      <header className='text-slate-50 text-2xl font-bold cursor-pointer'>
        <img src={Logo} alt="logo" className='size-10 inline-block mr-2'/>
        <span className='align-middle'>Spotify</span>
      </header>
      <section className='text-slate-50 text-3xl cursor-pointer'>
        <img src={userLogo} alt="logo" className='size-8 inline-block mr-2'/>
      </section>
    </nav>
  )
}

export default HeaderNav;
