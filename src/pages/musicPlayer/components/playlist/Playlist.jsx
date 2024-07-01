import React from 'react';
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";
import SearchIcon from '../../../../assets/search.svg';
import Song from '../song';
import SearchSong from '../searchSong';

const Playlist = ({songs, isLoading}) => {
  const { setFilterSongs } = useMusicStore((state)=>({setFilterSongs: state.setFilterSongs}), shallow);
  const filterSongList = (action) => setFilterSongs('top_track', top_track => top_track === action);

  return (
    <section className='flex flex-col gap-8 pt-8 max-lg: p-7'>
      <header className='flex flex-row gap-10 text-slate-100 font-extrabold text-2xl'>
        <span className='cursor-pointer opacity-35 hover:opacity-100' onClick={()=>filterSongList(null)}>
            For You
        </span>
        <span className='cursor-pointer opacity-35 hover:opacity-100' onClick={()=>filterSongList(true)}>
          Top Tracks
        </span>
      </header>
      <section className='flex flex-row gap-5 bg-white bg-opacity-10 cursor-pointer p-2 rounded-md w-[27rem] 
        max-lg:w-full font-medium'>
        <SearchSong songs={songs} />
        <img className='size-8 inline-block ml-auto mr-2' src={SearchIcon} alt='cover'/>
      </section>
      <section className='flex flex-col gap-4'>
        {songs?.map((song) => {
          return(
            <Song 
              key={song.id}
              id={song.id}
              name={song.name}
              url={song.url}
              accent={song.accent}
              cover={song.cover}
              artist={song.artist}
            />
        )})}
      </section>
    </section>
  )
}

export default Playlist;
