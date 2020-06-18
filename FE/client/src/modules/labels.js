const ADD_LABEL = "labels/ADD_LABEL";
const DELETE_LABEL = "labels/DELETE_LABEL";
const EDIT_LABEL = "labels/EDIT_LABEL";

export const addLabel = (labelItems) => ({ type: ADD_LABEL, payload: labelItems });
export const deleteLabel = (labelId) => ({ type: DELETE_LABEL, payload: labelId });
export const editLabel = (labelItems) => ({ type: EDIT_LABEL, payload: labelItems });

const initialState = {
  labels: [
    { id: 1, textColor: "#fff", backgroundColor: "rgb(203,92,208)", description: "testing label", labelName: "duplicate" },
    { id: 2, textColor: "#fff", backgroundColor: "rgb(254,40,119)", description: "testing label", labelName: "FE" },
    { id: 3, textColor: "#fff", backgroundColor: "rgb(86,185,42)", description: "testing label", labelName: "good first issue" },
    { id: 4, textColor: "#fff", backgroundColor: "rgb(118,148,231)", description: "testing label", labelName: "help wanted" },
    { id: 5, textColor: "#000", backgroundColor: "rgb(128,177,104)", description: "testing label", labelName: "question" },
  ],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return { ...state, labels: [...state.labels, { ...action.payload, id: Math.floor(Math.random() * 50) }] };
    case DELETE_LABEL:
      return { ...state, labels: state.labels.filter((label) => action.payload !== label.id) };
    case EDIT_LABEL:
      return { ...state, labels: state.labels.map((label) => (label.id === action.payload.id ? (label = action.payload) : label)) };
    default:
      return state;
  }
};

export default labelReducer;
