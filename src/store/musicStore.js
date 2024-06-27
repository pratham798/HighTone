import { create } from "zustand";

export const useMusic = create((set) => ({
  songs: [],
  currentMusic: {},
  isError: false,
  isLoading: true,

  fetchMusic: async() => {
    try {
      const res = await ('https://cms.samespace.com/items/songs');
      set({songs: res});
    } catch (error) {
      set({isError: true});
    }
  },
  setCurrentSong: (song) => {
    set({
      currentMusic: song
    });
  }
}))