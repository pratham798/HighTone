import React, { useEffect, useState } from 'react';
import { useMusicStore } from '../../../../store/musicStore';
import { shallow } from "zustand/shallow";

const SearchSong = ({songs}) => {
  const [searchSong, setSearchSong] = useState('');
  const { setFilterSongs } = useMusicStore((state)=>({setFilterSongs: state.setFilterSongs}), shallow);
  const handleChange = (e) => setSearchSong(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterSongs('name', name=>name.toLowerCase().startsWith(searchSong))
    }, 200);
    return () => clearTimeout(timer);
  }, [searchSong, setFilterSongs]);
  

  return (
    <form className='my-auto ml-2 w-full' onSubmit={(e)=> e.preventDefault()}>
      <input
        value={searchSong}
        type='text' 
        placeholder='Search Song, Artist'
        className='bg-transparent outline-none w-full text-slate-300'
        onChange={(e) => handleChange(e)}
      />
    </form>
  )
}

export default SearchSong;
