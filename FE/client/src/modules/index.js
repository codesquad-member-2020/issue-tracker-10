import { combineReducers } from "redux";
import labels from "./labels";
import milestones from "./milestones";
import issues from "./issues";
import optionPickers from "./optionPickers";

const rootReducers = combineReducers({
  labels,
  milestones,
  issues,
  optionPickers,
});

export default rootReducers;
