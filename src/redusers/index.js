import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title : 'La Bouche', duration :  '4:03' },
        { title : 'Losing My Religion', duration :  '2:38' },
        { title : 'Bump \'n Grind', duration :  '2:28' },
        { title : 'Nuthin But a G', duration :  '1:45' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
   songs : songReducer,
   selectedSong : selectedSongReducer 
});