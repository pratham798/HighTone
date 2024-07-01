import React, { useState, useEffect } from 'react'
import Song from '../song';

const Playlist = ({songs}) => {
  const [topSongs, setTopSongs] = useState(true);
  const updateSongList = (action) => setTopSongs(action);
  useEffect(() => {
    topSongs && songs.filter((song) => song.top_track===true)
  }, [songs, topSongs])

  return (
    <section className='flex flex-col gap-8 pt-8 max-lg: p-7'>
      <header className='flex flex-row gap-10 text-slate-100 font-extrabold text-2xl'>
        <span className='cursor-pointer opacity-35 hover:opacity-100' onClick={()=>updateSongList(true)}>
            For You
        </span>
        <span className='cursor-pointer opacity-35 hover:opacity-100' onClick={()=>updateSongList(false)}>
          Top Tracks
        </span>
      </header>
      <section> Search </section>
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
          );
        })}
      </section>
    </section>
  )
}

export default Playlist;
