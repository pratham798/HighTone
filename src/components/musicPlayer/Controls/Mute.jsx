import React from 'react';
import MuteIcon from '../../../assets/mute.svg';
import SpeakerIcon from '../../../assets/speaker.svg';

const Mute = ({currentMusic, muteSong, muted}) => {
  return (
    <span className='bg-slate-300 bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer 
    active:translate-y-1' onClick={() => currentMusic && muteSong()}>
      <img className='h-5 w-5 m-[0.6rem]' src={muted ? MuteIcon : SpeakerIcon} alt='voice'/>
    </span>
  )
}

export default Mute;