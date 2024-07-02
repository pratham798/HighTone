import React from 'react'
import ChangeIcon from '../../../assets/changeSong.svg';

const NextSong = ({currentMusic, skipSong}) => {
  return (
    <span className='hover:bg-slate-300 hover:bg-opacity-10 rounded-3xl w-10 h-10 overflow-hidden cursor-pointer 
    active:translate-y-1' onClick={() => currentMusic && skipSong(1)}>
      <img className='h-5 w-5 m-[0.6rem]' src={ChangeIcon} alt='back'/>
    </span>
  )
}

export default NextSong;
