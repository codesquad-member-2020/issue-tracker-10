import { URL } from "@constants/url";
import user_image from "@assets/images/user-sample-image.jpg";

const INIT_CREATE_ISSUES = "createIssue/INIT_CREATE_ISSUES";

const UPDATE_CHECKED_LABELS = "createIssue/UPDATE_CHECKED_LABELS";
const UPDATE_CHECKED_ASSIGNEES = "createIssue/UPDATE_CHECKED_ASSIGNEES";
const UPDATE_CHECKED_MILESTONES = "createIssue/UPDATE_CHECKED_MILESTONES";

export const getInitCreateIssues = () => async (dispatch) => {
  const response = await fetch(URL.ISSUE_PICKER_INFO_API);
  const json = await response.json();
  dispatch(initCreateIssues(json.data));
};

export const postNewIssues = (newIssuesObj) => async (dispatch) => {
  console.log(newIssuesObj);
  try {
    const response = fetch("http://52.79.207.15:8080/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIssuesObj),
    });
  } catch {
    console.error("fetch error");
  }
};

export const createIssues = (postData) => async (dispatch) => {
  const response = await fetch();
  const json = await response.json();
};

export const changeLabelBCheck = (labelId, pickerType) => {
  if (pickerType === "labels") return { type: UPDATE_CHECKED_LABELS, payload: { labelId, pickerType } };
  if (pickerType === "assignees") return { type: UPDATE_CHECKED_ASSIGNEES, payload: { labelId, pickerType } };
};
const filteringLabelBCheck = (labelId, state, pickerType) => {
  if (pickerType === "labels") return state.map((el) => (el.label_id === labelId ? { ...el, bchecked: !el.bchecked } : el));
  if (pickerType === "assignees") return state.map((el) => (el.user_id === labelId ? { ...el, bchecked: !el.bchecked } : el));
};
const initCreateIssues = (data) => ({ type: INIT_CREATE_ISSUES, payload: data });

const initialState = {
  pickerData: null,
  labels: [],
  users: [],
  milestone: [],
};

const createIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CREATE_ISSUES:
      return { ...action.payload };
    case UPDATE_CHECKED_LABELS:
      return { ...state, labels: filteringLabelBCheck(action.payload.labelId, state.labels, action.payload.pickerType) };
    case UPDATE_CHECKED_ASSIGNEES:
      return { ...state, users: filteringLabelBCheck(action.payload.labelId, state.users, action.payload.pickerType) };
    case UPDATE_CHECKED_MILESTONES:
      return { ...state, milestones: filteringLabelBCheck(action.payload, state.milestones) };
    default:
      return state;
  }
};

export default createIssueReducer;
