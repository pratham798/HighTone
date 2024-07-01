import React, { useEffect } from 'react'
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";
import Playlist from './components/playlist';
import HeaderNav from '../../components/headerNav';
import SongPlay from './components/songPlay';

const MusicPlayer = () => {
  const { songs, currentMusic, isError, isLoading, fetchMusic, currBackground, filteredSongs } = useMusicStore((state)=>({
    songs: state.songs,
    currentMusic: state.currentMusic,
    isError: state.isError,
    isLoading: state.isLoading,
    fetchMusic: state.fetchMusic,
    currBackground: state.currBackground,
    filteredSongs: state.filteredSongs,
  }), shallow);

  useEffect(() => {
    fetchMusic();
  },[fetchMusic]);

  const gradientStyle = {
    background: `linear-gradient(125deg, ${currBackground} -100%, black 110%)`,
  };

  return (
    <section style={gradientStyle} className='flex flex-row max-lg:flex-col w-full relative'>
      <HeaderNav/>
      <section className='flex flex-row gap-10 max-lg:flex-col lg:gap-8 w-full flex-1 relative'>
        <Playlist songs={filteredSongs.length ? filteredSongs : songs} isLoading={isLoading} isError={isError}/>
        <section className='flex flex-col items-center lg:mt-20 flex-1 lg:sticky h-max lg:top-[10%]'>
          <SongPlay/>
        </section>
      </section>
    </section>
  )
}

export default MusicPlayer;
