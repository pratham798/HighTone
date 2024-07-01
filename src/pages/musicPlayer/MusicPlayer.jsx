import React, { useEffect } from 'react'
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";
import Playlist from './components/playlist';
import HeaderNav from '../../components/headerNav';

const MusicPlayer = () => {
  const { songs, currMusic, isError, isLoading, fetchMusic, currBackground } = useMusicStore((state)=>({
    songs: state.songs,
    currentMusic: state.currMusic,
    isError: state.isError,
    isLoading: state.isLoading,
    fetchMusic: state.fetchMusic,
    currBackground: state.currBackground,
  }), shallow);

  useEffect(() => {
    fetchMusic();
  },[fetchMusic]);

  const gradientStyle = {
    background: `linear-gradient(125deg, ${currBackground} -100%, black 110%)`,
  };

  return (
    <section style={gradientStyle} className='flex flex-row max-lg:flex-col'>
      <HeaderNav/>
      <section className='flex flex-row gap-10 max-lg:flex-col lg:gap-8'>
        <Playlist songs={songs} isLoading={isLoading} isError={isError}/>
        <>Curr Song</>
      </section>
    </section>
  )
}

export default MusicPlayer;
