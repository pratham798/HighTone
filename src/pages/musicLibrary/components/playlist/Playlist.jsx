import React, { useState } from 'react';
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";
import SearchIcon from '../../../../assets/search.svg';
import Song from '../song';
import SearchSong from '../searchSong';
import LoadingState from './LoadingState';

const Playlist = ({songs, isLoading}) => {
  const { setFilterSongs } = useMusicStore((state)=>({setFilterSongs: state.setFilterSongs}), shallow);
  const [category, setCategory] = useState(null);
  const filterSongList = (action) => {
    setFilterSongs('top_track', top_track => top_track === action);
    setCategory(action);
  }

  return (
    <section className='flex flex-col gap-8 pt-8 max-lg:p-7 max-lg:order-2 min-w-80 flex-1'>
      <header className='flex flex-row gap-10 text-slate-100 font-extrabold text-2xl'>
        <span className={`cursor-pointer hover:opacity-100 ${category === null ? 'opacity-100': 'opacity-35'}`} 
          onClick={()=>filterSongList(null)}> For You </span>
        <span className={`cursor-pointer hover:opacity-100 ${category === true ? 'opacity-100': 'opacity-35'}`} 
          onClick={()=>filterSongList(true)}> Top Tracks </span>
      </header>
      <section className='flex flex-row gap-5 bg-white bg-opacity-10 cursor-pointer p-2 rounded-md font-medium'>
        <SearchSong songs={songs} />
        <img className='size-8 inline-block ml-auto mr-2' src={SearchIcon} alt='cover'/>
      </section>
      <section className='flex flex-col gap-4'>
        {isLoading && (Array.from({ length: 7 }, (_, index) => <LoadingState key={index} />))}
        {songs?.map((song) => <Song key={song.id} song={song}/>)}
      </section>
    </section>
  )
}

export default Playlist;
