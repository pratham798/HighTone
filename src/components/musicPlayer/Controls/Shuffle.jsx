import React from 'react';
import OptionIcon from '../../../assets/options.svg';

const Shuffle = ({currentMusic, skipSong, songs}) => {
  return (
    <span className='bg-slate-300 bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer 
    active:translate-y-1' onClick={() => currentMusic && skipSong(Math.floor(Math.random() * songs.length))}>
      <img className='h-5 w-5 m-[0.6rem]' src={OptionIcon} alt='voice'/>
    </span>
  )
}

export default Shuffle;
