const initialState = {
    musicsFromAlbum: [],
  };
  
  const musics = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ALL_MUSICS_FROM_ALBUM":
        return {
          ...state,
          musicsFromAlbum: action.payload.musics,
        };
      default:
        return state;
    }
  };
  
  export default musics;
  