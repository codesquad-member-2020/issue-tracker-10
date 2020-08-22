import { combineReducers } from "redux";
import labels from "./labels";
import milestones from "./milestones";
import issues from "./issues";
import detailIssue from "./detailIssue";
import createIssue from "./createIssue";

const rootReducers = combineReducers({
  labels,
  milestones,
  issues,
  detailIssue,
  createIssue,
});

export default rootReducers;
