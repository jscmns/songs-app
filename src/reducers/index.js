import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: 'Angel of Death', duration: '4:51' },
    { title: 'Smells Like Teen Spirit', duration: '5:01' },
    { title: '...Baby One More Time', duration: '3:31' },
    { title: 'Check Yo Self', duration: '3:42' },
    
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  };

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});