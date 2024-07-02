import React from 'react'
import PlayIcon from '../../../assets/play.svg';
import PauseIcon from '../../../assets/pause.svg';

const OperateSong = ({currentMusic, playSong, playPause}) => {
  return (
    <span className='rounded-3xl w-14 h-14 overflow-hidden cursor-pointer active:translate-y-1' 
      onClick={() => currentMusic && playPause()}>
      <img className='h-full w-full' src={playSong ? PauseIcon: PlayIcon} alt='play-pause'/>
    </span>
  )
}

export default OperateSong;
