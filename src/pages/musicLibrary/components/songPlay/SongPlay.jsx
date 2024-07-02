import React from 'react'
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";
import MusicPlayer from '../../../../components/musicPlayer/MusicPlayer';

const SongPlay = () => {
  const { currentMusic} = useMusicStore((state)=>({
    currentMusic: state.currentMusic,
  }), shallow);

  return (
    <section className='flex flex-col gap-6 p-6 lg:m-20 lg:sticky h-max lg:top-[10%] flex-shrink-0'>
      <header className='flex flex-col gap-2'>
        <span className='text-slate-50 font-extrabold text-4xl'>
          {currentMusic?.name ? currentMusic.name: 'Start Playing Music'}
        </span>
        <span className='text-slate-400 text-sm'>{currentMusic?.artist}</span>
      </header>
      <section className='bg-slate-300 bg-opacity-10 sm:size-96 max-sm:size-[19rem] overflow-hidden rounded-lg max-lg:m-auto max-s'>
        {currentMusic && (<img className = 'h-full w-full' src={currentMusic.banner} alt='banner'/>)}
      </section>
      <MusicPlayer />
    </section>
  )
}

export default SongPlay;
