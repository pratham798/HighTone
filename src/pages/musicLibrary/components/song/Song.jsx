import React from 'react';
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";

const Song = ({song}) => {
  const { setCurrentSong, currentMusic } = useMusicStore((state)=>({
    setCurrentSong: state.setCurrentSong,
    currentMusic: state.currentMusic,
  }), shallow);

  const updateCurrentSong = () => setCurrentSong(song);

  return (
    <section className={`flex flex-row gap-5 cursor-pointer p-3 ${song.index===currentMusic?.index && 'bg-white bg-opacity-10'}
    hover:bg-white hover:bg-opacity-10 rounded-md transition-all -ml-3 font-medium`} 
      onClick={() => updateCurrentSong()}>
      <section className='bg-slate-300 bg-opacity-10 rounded-3xl w-12 h-12 overflow-hidden'>
        {song.banner && <img className='w-full h-full flex-shrink-0' src={song.banner} alt='cover'/>}
      </section>
      <section>
        <header className='text-slate-50 text-lg'>{song.name}</header>
        <span className='text-slate-400 text-[13px]'>{song.artist}</span>
      </section>
      <span className='ml-auto text-slate-400 opacity-100 my-auto'>4:12</span>
    </section>
  )
}

export default Song;
