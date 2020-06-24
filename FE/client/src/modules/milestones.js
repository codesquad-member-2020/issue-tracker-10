import { URL } from '@constants/url';

const INIT_MILESTONES_LIST = "milestones/INIT_MILESTONES_LIST";

export const getInitMilestones = () => async dispatch => {
    const response = await fetch(URL.MILESTONE_LIST_API);
    const json = await response.json();
    dispatch(initMilestonesList(json));
};

export const postMilestone = (data) => async dispatch => {
    const response = await fetch(URL.MILESTONE_CREATE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export const putEditMilestone = (milestoneId, data) => async dispatch => {
    const response = await fetch(URL.MILESTONE_EDIT_API(milestoneId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export const deleteEditMilestone = (milestoneId) => async dispatch => {
    const response = await fetch(URL.MILESTONE_DELETE_API(milestoneId), {
        method: 'DELETE',
    });
}

const initMilestonesList = data => ({ type: INIT_MILESTONES_LIST, payload: data });

const initialState = {
    bLoading: true,
    milestonesList: [],
};

const milestonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_MILESTONES_LIST:
            return {
                ...state,
                bLoading: false,
                milestonesList: action.payload.data,
            }
        default:
            return state;
    }
};

export default milestonesReducer;