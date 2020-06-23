const INIT_LABELS_LIST = "labels/INIT_LABELS_LIST";

const ADD_LABEL = "labels/ADD_LABEL";
const DELETE_LABEL = "labels/DELETE_LABEL";
const EDIT_LABEL = "labels/EDIT_LABEL";

export const getInitLabels = () => async (dispatch) => {
  const response = await fetch("http://52.79.207.15:8080/labels");
  const json = await response.json();
  console.log(json);
  dispatch(initLabelList(json));
};

const initLabelList = (data) => ({ type: INIT_LABELS_LIST, payload: data });

export const postNewLabel = (labelItems) => async (dispatch) => {
  try {
    const response = await fetch("http://52.79.207.15:8080/labels/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(labelItems),
    });
    const json = await response.json();

    console.log(json);

    dispatch(addNewLabel(labelItems));
  } catch {
    console.error("failed fetch");
  }
};

const addNewLabel = (data) => ({ type: ADD_LABEL, payload: data });

export const deleteLabel = (labelId) => {
  console.log(labelId);
  return { type: DELETE_LABEL, payload: labelId };
};
export const editLabel = (labelItems) => ({ type: EDIT_LABEL, payload: labelItems });

const initialState = {
  labels: [],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LABELS_LIST:
      return { labels: action.payload };
    case ADD_LABEL:
      return { labels: [...action.payload] };
    case DELETE_LABEL:
      return { ...state, labels: state.labels.filter((label) => action.payload !== label.label_id) };
    case EDIT_LABEL:
      return { ...state, labels: state.labels.map((label) => (label.id === action.payload.id ? (label = action.payload) : label)) };
    default:
      return state;
  }
};

export default labelReducer;
