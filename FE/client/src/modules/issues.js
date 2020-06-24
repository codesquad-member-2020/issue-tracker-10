import { URL } from '@constants/url';

const INIT_ISSUES_LIST = "issues/INIT_ISSUES_LIST";

export const getInitIssues = () => async dispatch => {
    const response = await fetch(URL.ISSUE_LIST_API);
    const json = await response.json();
    dispatch(initIssuesList(json));
};

const initIssuesList = data => ({ type: INIT_ISSUES_LIST, payload: data })

const initialState = {
    bLoading: true,
    issuesList: [],
};

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ISSUES_LIST:
            return {
                ...state,
                bLoading: false,
                issuesList: action.payload.data,
            }
        default:
            return state;
    }
};

export default issueReducer;
