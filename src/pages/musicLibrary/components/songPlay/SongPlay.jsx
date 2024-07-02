import React from 'react'
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";

const SongPlay = () => {
  const { currentSongBanner, currentMusic} = useMusicStore((state)=>({
    currentMusic: state.currentMusic,
    currentSongBanner: state.currSongBanner,
  }), shallow);

  return (
    <section className='flex flex-col gap-6 p-6'>
      <header className='flex flex-col gap-2'>
        <span className='text-slate-50 font-extrabold text-4xl'>
          {currentMusic?.name ? currentMusic.name: 'Start Playing Music'}
        </span>
        <span className='text-slate-400 text-sm'>{currentMusic?.artist}</span>
      </header>
      <section className='bg-slate-300 bg-opacity-10 min-w-80 max-w-96 h-96 overflow-hidden rounded-lg'>
        {currentMusic && (<img className = 'w-full h-full' src={currentSongBanner} alt='banner'/>)}
      </section>
    </section>
  )
}

export default SongPlay;
