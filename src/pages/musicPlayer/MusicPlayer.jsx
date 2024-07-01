import React, { useEffect } from 'react'
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";
import Playlist from './components/playlist';
import HeaderNav from '../../components/headerNav';

const MusicPlayer = () => {
  const { songs, currMusic, isError, isLoading, fetchMusic } = useMusicStore((state)=>({
    songs: state.songs,
    currMusic: state.currMusic,
    isError: state.isError,
    isLoading: state.isLoading,
    fetchMusic: state.fetchMusic,
  }), shallow);

  useEffect(() => {
    fetchMusic();
  },[fetchMusic]);

  return (
    <section className='flex flex-row max-lg:flex-col'>
      <HeaderNav/>
      <section className='flex flex-row gap-10 max-lg:flex-col lg:gap-8'>
        <Playlist songs={songs} isLoading={isLoading} isError={isError}/>
        <>Curr Song</>
      </section>
    </section>
  )
}

export default MusicPlayer;
