export const initialState = {
    allMuscialGenres: [],
  };
  
  const musicalGenres = (state = initialState, action) => {
    switch (action.type) {
      case "SET_GENRES":
        return {
          ...state,
          allMuscialGenres: action.payload.genres,
        };
  
      default:
        return state;
    }
  };
  
  export default musicalGenres;
  