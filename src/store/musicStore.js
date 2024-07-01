import { create } from "zustand";

export const useMusicStore = create((set) => ({
  songs: [],
  filteredSongs: [],
  currentMusic: {},
  isError: false,
  isLoading: true,
  currBackground: '#000000',
  currSongBanner: null,

  fetchMusic: async() => {
    try {
      const res = await fetch('https://cms.samespace.com/items/songs');
      const musicData = await res.json();
      set({songs: musicData.data});
    } catch (error) {
      set({isError: true});
    }
  },
  setCurrentSong: (song) => {
    set({ currentMusic: song, currBackground: song.accent });
  },
  setCurrentSongBanner: (songBanner) => {
    set({currSongBanner: songBanner});
  },
  setFilterSongs: (filterValue, filterCondition) => set((state) => ({
    filteredSongs: state.songs.filter(song => filterCondition(song[filterValue]))
  })),
}));
