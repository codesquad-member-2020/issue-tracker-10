const INIT_ISSUES_LIST = "issues/INIT_ISSUES_LIST";

export const getInitIssuesFetch = () => async dispatch => {
    const response = await fetch('http://localhost:3000/api/issueList');
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
                issuesList: action.payload,
            }
        default:
            return state;
    }
};

export default issueReducer;
