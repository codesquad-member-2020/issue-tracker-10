import { ADD_LABEL, DELETE_LABEL } from "./labelAction";

const initialState = {
  labels: [
    { textColor: "#fff", backgroundColor: "#1E90FF", description: "testing label", labelName: "duplicate" },
    { textColor: "#fff", backgroundColor: "#80E12A", description: "testing label", labelName: "FE" },
    { textColor: "#fff", backgroundColor: "#52E4DC", description: "testing label", labelName: "good first issue" },
    { textColor: "#fff", backgroundColor: "#FFACB7", description: "testing label", labelName: "help wanted" },
    { textColor: "#fff", backgroundColor: "#FFB400", description: "testing label", labelName: "question" },
  ],
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
