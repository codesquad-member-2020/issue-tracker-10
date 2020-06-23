import user_image from "@assets/images/user-sample-image.jpg";

const INIT_CREATE_ISSUES = "createIssue/INIT_CREATE_ISSUES";

const UPDATE_CHECKED_LABELS = "createIssue/UPDATE_CHECKED_LABELS";
const UPDATE_CHECKED_ASSIGNEES = "createIssue/UPDATE_CHECKED_ASSIGNEES";
const UPDATE_CHECKED_MILESTONES = "createIssue/UPDATE_CHECKED_MILESTONES";

export const getInitCreateIssues = () => async (dispatch) => {
  const response = await fetch();
  const json = await response.json();
  dispatch(initCreateIssues(json));
};

export const createIssues = (postData) => async (dispatch) => {
  const response = await fetch();
  const json = await response.json();
};

export const changeLabelBCheck = (labelId, pickerType) => {
  if (pickerType === "labels") return { type: UPDATE_CHECKED_LABELS, payload: labelId };
  if (pickerType === "assignees") return { type: UPDATE_CHECKED_ASSIGNEES, payload: labelId };
  if (pickerType === "milestones") return { type: UPDATE_CHECKED_MILESTONES, payload: labelId };
};

const initCreateIssues = (data) => ({ type: INIT_CREATE_ISSUES, payload: data });

const initialState = {
  assignees: [
    { id: 1, bCheck: false, username: "choichoigang", user_image: user_image },
    { id: 2, bCheck: false, username: "taek", user_image: user_image },
    { id: 3, bCheck: false, username: "엘리", user_image: user_image },
    { id: 4, bCheck: false, username: "XP", user_image: user_image },
  ],
  labels: [
    { id: 1, bCheck: false, textColor: "#fff", backgroundColor: "rgb(203,92,208)", description: "testing label", labelName: "duplicate" },
    { id: 2, bCheck: false, textColor: "#fff", backgroundColor: "rgb(254,40,119)", description: "testing label", labelName: "FE" },
    { id: 3, bCheck: false, textColor: "#fff", backgroundColor: "rgb(86,185,42)", description: "testing label", labelName: "good first issue" },
    { id: 4, bCheck: false, textColor: "#fff", backgroundColor: "rgb(118,148,231)", description: "testing label", labelName: "help wanted" },
    { id: 5, bCheck: false, textColor: "#000", backgroundColor: "rgb(128,177,104)", description: "testing label", labelName: "question" },
  ],
};

const filteringLabelBCheck = (labelId, state) => state.map((el) => (el.id === labelId ? { ...el, bCheck: !el.bCheck } : el));

const createIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKED_LABELS:
      return { ...state, labels: filteringLabelBCheck(action.payload, state.labels) };
    case UPDATE_CHECKED_ASSIGNEES:
      return { ...state, assignees: filteringLabelBCheck(action.payload, state.assignees) };
    case UPDATE_CHECKED_MILESTONES:
      return { ...state, milestones: filteringLabelBCheck(action.payload, state.milestones) };

    default:
      return state;
  }
};

export default createIssueReducer;
