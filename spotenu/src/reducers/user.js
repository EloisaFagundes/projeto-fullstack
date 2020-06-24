export const initialState = {
  allBands: [],
};

const usersBand = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BANDS":
      return {
        ...state,
        allBands: action.payload.bands,
      };

    default:
      return state;
  }
};

export default usersBand;
