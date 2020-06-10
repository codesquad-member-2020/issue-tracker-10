import { combineReducers } from "redux";
import label from "./label/labelReducer";
import milestones from "./milestones";

const rootReducers = combineReducers({
    label,
    milestones,
});

export default rootReducers;
