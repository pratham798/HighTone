import React, { useState, useEffect, useCallback } from 'react';
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";
import { getMusicCover } from '../../../../api/getMusicCover';

const Song = ({id, name, url, accent, cover, artist}) => {
  const [songCover, setSongCover] = useState(null);
  const { setCurrentSong, setCurrentSongBanner, currentMusic, currSongBanner, isError, isLoading } = useMusicStore((state)=>({
    setCurrentSong: state.setCurrentSong,
    setCurrentSongBanner: state.setCurrentSongBanner,
    currentMusic: state.currentMusic,
    currSongBanner: state.currSongBanner,
    isError: state.isError,
    isLoading: state.isLoading,
  }), shallow);

  const fetchSongBanner = useCallback(async() => {
    const coverImage = await getMusicCover(cover);
    setSongCover(coverImage);
  }, [cover]);
  
  useEffect(() => {
    fetchSongBanner();
  }, [cover, fetchSongBanner]);

  const updateCurrentSong = () => {
    setCurrentSong({id,name,url,accent,cover,artist});
    setCurrentSongBanner(currSongBanner);
  }

  return (
    <section className={`flex flex-row gap-5 cursor-pointer p-3 ${id===currentMusic?.id && 'bg-white bg-opacity-10'}
    hover:bg-white hover:bg-opacity-10 rounded-md transition-all w-[27rem] max-lg:w-full -ml-3 font-medium`} 
      onClick={() => updateCurrentSong()}>
      <section className='bg-slate-300 bg-opacity-10 rounded-3xl w-12 h-12 overflow-hidden'>
        {songCover && <img className='w-full h-full flex-shrink-0' src={songCover} alt='cover'/>}
      </section>
      <section>
        <header className='text-slate-50 text-lg'>{name}</header>
        <span className='text-slate-400 text-[13px]'>{artist}</span>
      </section>
      <span className='ml-auto text-slate-400 opacity-100 my-auto'>4:12</span>
    </section>
  )
}

export default Song;
