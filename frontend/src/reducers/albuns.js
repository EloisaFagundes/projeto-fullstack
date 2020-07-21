const initialState = {
  bandAllAlbuns: [],
};

const albuns = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_BAND_ALBUNS":
      return {
        ...state,
        bandAllAlbuns: action.payload.albuns,
      };
    default:
      return state;
  }
};

export default albuns;
