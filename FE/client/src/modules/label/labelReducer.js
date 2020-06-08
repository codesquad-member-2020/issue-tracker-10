import { ADD_LABEL, DELETE_LABEL } from "./labelAction";

const initialState = {
  labels: [],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return {};
    case DELETE_LABEL:
      return {};
  }
};

export default labelReducer;
