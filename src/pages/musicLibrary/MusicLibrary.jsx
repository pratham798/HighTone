import React, { useEffect } from 'react'
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";
import Playlist from './components/playlist';
import HeaderNav from '../../components/headerNav';
import SongPlay from './components/songPlay';

const MusicLibrary = () => {
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
    <section style={gradientStyle}>
      <section className='flex flex-row max-lg:flex-col max-w-screen-2xl mx-auto relative'>
        <HeaderNav/>
        <Playlist songs={filteredSongs.length ? filteredSongs : songs} isLoading={isLoading} isError={isError}/>
        <SongPlay/>
      </section>
    </section>
  )
}

export default MusicLibrary;
