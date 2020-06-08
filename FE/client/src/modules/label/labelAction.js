const ADD_LABEL = "label/ADD_LABEL";
const DELETE_LABEL = "label/DELETE_LABEL";

const addLabel = (labelItems) => ({ type: ADD_LABEL, payload: labelItems });

const deleteLabel = (labelId) => ({ type: DELETE_LABEL, payload: labelId });

export { ADD_LABEL, DELETE_LABEL, addLabel, deleteLabel };
