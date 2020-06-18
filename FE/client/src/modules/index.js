import { combineReducers } from "redux";
import labels from "./labels";
import milestones from "./milestones";
import issues from './issues';

const rootReducers = combineReducers({
  labels,
  milestones,
  issues,
});

export default rootReducers;
