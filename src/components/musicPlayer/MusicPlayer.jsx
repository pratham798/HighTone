import React, { useEffect, useRef } from 'react';
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";

import PlayIcon from '../../assets/play.svg';
import PauseIcon from '../../assets/pause.svg';
import ChangeIcon from '../../assets/changeSong.svg';
import SpeakerIcon from '../../assets/speaker.svg';
import OptionIcon from '../../assets/options.svg';


const MusicPlayer = () => {
  const { songs, currentMusic, playSong, changeSong, playPauseSong } = useMusicStore((state)=>({
    songs: state.songs,
    currentMusic: state.currentMusic,
    playSong: state.playSong,
    changeSong: state.changeSong,
    playPauseSong: state.playPauseSong,
  }), shallow);
  const audioElem = useRef();

  useEffect(() => {
    if(playSong) audioElem.current.play();
    else audioElem.current.pause();
  },[playSong, currentMusic])

  useEffect(() => {
    audioElem.current.currentTime=0;
  },[currentMusic])

  const playPause = () => {
    playPauseSong(!playSong)
    playSong ? audioElem.current.pause() : audioElem.current.play();
  }

  const skipSong = (action) => changeSong(action);

  return (
    <section>
      <audio src={currentMusic?.url} ref={audioElem}/>
      <section className='flex flex-row gap-6 justify-between px-2 items-center'>
        <span className='bg-slate-300 bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer' 
          onClick={() => currentMusic && skipSong(Math.floor(Math.random() * songs.length))}>
          <img className='h-5 w-5 m-[0.6rem]' src={OptionIcon} alt='voice'/>
        </span>
        <section className='flex flex-row gap-3 items-center'>
          <span className='hover:bg-slate-300 hover:bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer' 
            onClick={() => currentMusic && skipSong(-1)}>
            <img className='h-5 w-5 m-[0.6rem] rotate-180' src={ChangeIcon} alt='back'/>
          </span>
          <span className='rounded-3xl w-14 h-14 overflow-hidden cursor-pointer' onClick={() => currentMusic && playPause()}>
            <img className='h-full w-full' src={playSong ? PauseIcon: PlayIcon} alt='play-pause'/>
          </span>
          <span className='hover:bg-slate-300 hover:bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer' 
            onClick={() => currentMusic && skipSong(1)}>
            <img className='h-5 w-5 m-[0.6rem]' src={ChangeIcon} alt='next'/>
          </span>
        </section>
        <span className='bg-slate-300 bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer'>
          <img className='h-5 w-5 m-[0.6rem]' src={SpeakerIcon} alt='voice'/>
        </span>
      </section>
    </section>
  )
}

export default MusicPlayer;
