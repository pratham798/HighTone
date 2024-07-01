import React from 'react';
import Logo from './../../assets/logo.svg';
import userLogo from './../../assets/userLogo.svg';

const HeaderNav = () => {
  return (
    <nav className='flex flex-row lg:flex-col justify-between max-lg:items-center p-6 lg:h-screen 
    bg-transparent min-w-52 lg:max-w-72 flex-1 lg:sticky top-0'>
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
