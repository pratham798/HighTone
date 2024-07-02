import React, { useEffect, useRef, useState } from 'react';
import { useMusicStore } from '../../store/musicStore';
import { shallow } from "zustand/shallow";
import OperateSong from './Controls/OperateSong';
import Mute from './Controls/Mute';
import Shuffle from './Controls/Shuffle';
import NextSong from './Controls/NextSong';
import PrevSong from './Controls/PrevSong';


const MusicPlayer = () => {
  const { songs, currentMusic, playSong, changeSong, playPauseSong, muted, muteUnmuteSong } = useMusicStore((state)=>({
    songs: state.songs,
    currentMusic: state.currentMusic,
    playSong: state.playSong,
    changeSong: state.changeSong,
    playPauseSong: state.playPauseSong,
    muted: state.muted,
    muteUnmuteSong: state.muteUnmuteSong,
  }), shallow);
  const audioElem = useRef();
  const [progress, setProgress] = useState(0);

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
  const muteSong = () => {
    audioElem.current.muted = !muted;
    muteUnmuteSong(!muted);
  }
  const skipSong = (action) => changeSong(action);
  const updateTime = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setProgress(ct / duration * 100);
  }

  return (
    <section>
      <audio src={currentMusic?.url} ref={audioElem} onTimeUpdate={currentMusic && updateTime}/>
      <section className='bg-slate-300 w-full h-[0.3rem] bg-opacity-10 mb-2'>
        <div className='bg-slate-50 h-1 transition-all' style={{width: `${progress+"%"}`}} />
      </section>
      <section className='flex flex-row gap-6 justify-between px-2 items-center'>
        <Shuffle currentMusic={currentMusic} skipSong={skipSong} songs={songs}/>
        <section className='flex flex-row gap-3 items-center'>
          <PrevSong currentMusic={currentMusic} skipSong={skipSong} />
          <OperateSong currentMusic={currentMusic} playPause={playPause} playSong={playSong} />
          <NextSong currentMusic={currentMusic} skipSong={skipSong} />
        </section>
        <Mute currentMusic={currentMusic} muteSong={muteSong} muted={muted}/>
      </section>
    </section>
  )
}

export default MusicPlayer;
