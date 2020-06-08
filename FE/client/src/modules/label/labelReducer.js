import { ADD_LABEL, DELETE_LABEL } from "./labelAction";

const initialState = {
  labels: ["test"],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return { ...state };
    case DELETE_LABEL:
      return { ...state };
    default:
      return state;
  }
};

export default labelReducer;
