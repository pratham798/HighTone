import MusicPlayer from "./musicPlayer";
import { useMusic } from "../store/musicStore";
import { shallow } from "zustand/shallow";

const App = () => {

  const {
    songs,
    currSong,
    isError,
    isLoading
  } = useMusic();

  return (
    <div className="bg-black">
      <MusicPlayer />
    </div>
  );
}

export default App;
