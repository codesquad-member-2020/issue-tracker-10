import { combineReducers } from "redux";
import labels from "./labels";
import milestones from "./milestones";
import issues from "./issues";
import detailIssue from "./detailIssue";

const rootReducers = combineReducers({
  labels,
  milestones,
  issues,
  detailIssue,
});

export default rootReducers;
