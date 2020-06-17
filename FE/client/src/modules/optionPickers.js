const INIT_LABELS_PICKER_LIST = "optionPickers/INIT_LABELS_PICKER_LIST";
const INIT_MILESTONE_PICKER_LIST = "optionPickers/INIT_MILESTONE_PICKER_LIST";
const INIT_ASSIGNEER_PICKER_LIST = "optionPickers/INIT_ASSIGNEER_PICKER_LIST";

export const getInitPickerList = (pickerType) => async (dispatch) => {
  const resrponse = await fetch(`http://localhost:3000/api/${pickerType}`);
  const json = await resrponse.json();
  const pickerActionType = judgePickerActionType(pickerType);

  dispatch(initOptionPickerList(pickerActionType, json));
};

const initOptionPickerList = (actionType, data) => ({ type: actionType, payload: data });

const judgePickerActionType = (pickerType) => {
  if (pickerType === "labelPickerList") {
    return INIT_LABELS_PICKER_LIST;
  } else if (pickerType === "milestonePickerList") {
    return INIT_MILESTONE_PICKER_LIST;
  } else {
    return INIT_ASSIGNEER_PICKER_LIST;
  }
};

const initialState = {
  labelPickerList: [],
  milestonePickerList: [],
  assigneerPickerList: [],
};

const optionPickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_LABELS_PICKER_LIST:
      return { ...state, labelPickerList: action.payload.labelPickerList };
    case INIT_MILESTONE_PICKER_LIST:
      return { ...state };
    case INIT_ASSIGNEER_PICKER_LIST:
      return { ...state };
    default:
      return state;
  }
};

export default optionPickerReducer;
