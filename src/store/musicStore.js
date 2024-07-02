import { create } from "zustand";
import { getMusicCover } from "../api/getMusicCover";

export const useMusicStore = create((set, get) => ({
  songs: [],
  filteredSongs: [],
  currentMusic: null,
  isError: false,
  isLoading: true,
  playSong: false,

  fetchMusic: async() => {
    try {
      const data = await fetch('https://cms.samespace.com/items/songs');
      const res = await data.json();
      const musicData=res.data;
      const musicBanners = await Promise.allSettled(musicData.map((music) => getMusicCover(music.cover)));
      const updatedMusicData = musicData.map((song, index) => ({
        ...song,
        index: index,
        banner: musicBanners[index].value,
      }))
      set({
        songs: updatedMusicData,
        isLoading: false,
      });
    } catch (error) {
      set({isError: true});
    }
  },
  setCurrentSong: (song) => {
    set({ currentMusic: song, playSong: true });
  },
  setFilterSongs: (filterValue, filterCondition) => set((state) => ({
    filteredSongs: state?.songs?.filter(song => filterCondition(song[filterValue]))
  })),
  playPauseSong: (action) => set((state) => ({
    playSong: state?.currentMusic && action
  })),
  changeSong: (action) => {
    const state=get();
    if(state?.songs && state?.currentMusic) {
      const newIndex=state.currentMusic.index+action;
      set({ 
        currentMusic: state.songs[newIndex < 0 ? state.songs.length-1 : newIndex%state.songs.length],
        currSongIndex: newIndex,
        playSong: true,
      });
    }
  },
}));
