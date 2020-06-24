import { URL } from "@constants/url";

const INIT_LABELS_LIST = "labels/INIT_LABELS_LIST";

const ADD_LABEL = "labels/ADD_LABEL";
const DELETE_LABEL = "labels/DELETE_LABEL";
const EDIT_LABEL = "labels/EDIT_LABEL";

export const getInitLabels = () => async (dispatch) => {
  const response = await fetch(URL.LABEL_LIST_API);
  const json = await response.json();
  dispatch(initLabelList(json));
};

export const postNewLabel = (labelObj) => async (dispatch) => {
  try {
    const response = await fetch(URL.LABEL_CREATE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(labelObj),
    });
    const json = await response.json();
    dispatch(addNewLabel(json.data));
  } catch {
    console.error("Fail fetch");
  }
};

export const putEditLabel = (labelObj) => async (dispatch) => {
  try {
    const response = await fetch(URL.LABEL_EDIT_API(labelObj.label_id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(labelObj),
    });
    const json = response.json();
    dispatch(editLabel(labelObj));
  } catch {
    console.error("Fail fetch");
  }
};

export const deleteLabel = (labelId) => async (dispatch) => {
  try {
    const response = await fetch(URL.LABEL_EDIT_API(labelId), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dispatch),
    });
    dispatch(removeLabel(labelId));
  } catch {
    console.error("Fail fetch");
  }
};

const addNewLabel = (data) => ({ type: ADD_LABEL, payload: data });
const initLabelList = (data) => ({ type: INIT_LABELS_LIST, payload: data });
const removeLabel = (labelId) => ({ type: DELETE_LABEL, payload: labelId });
const editLabel = (labelItems) => ({ type: EDIT_LABEL, payload: labelItems });

const initialState = {
  labels: [],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LABELS_LIST:
      return { labels: action.payload };
    case ADD_LABEL:
      return { labels: [...state.labels, action.payload] };
    case DELETE_LABEL:
      return { ...state, labels: state.labels.filter((label) => action.payload !== label.label_id) };
    case EDIT_LABEL:
      return { ...state, labels: state.labels.map((label) => (label.label_id === action.payload.label_id ? (label = action.payload) : label)) };
    default:
      return state;
  }
};

export default labelReducer;
