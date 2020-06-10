import { combineReducers } from "redux";
import labels from "./labels";
import milestones from "./milestones";

const rootReducers = combineReducers({
  labels,
  milestones,
});

export default rootReducers;
