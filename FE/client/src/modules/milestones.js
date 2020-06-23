import { URL } from '@constants/url';

const INIT_MILESTONES_LIST = "milestones/INIT_MILESTONES_LIST";

export const getInitMilestones = () => async dispatch => {
    const response = await fetch(URL.MILESTONE_LIST_API);
    const json = await response.json();
    dispatch(initMilestonesList(json));
};

const initMilestonesList = data => ({ type: INIT_MILESTONES_LIST, payload: data })

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
                milestonesList: action.payload,
            }
        default:
            return state;
    }
};

export default milestonesReducer;