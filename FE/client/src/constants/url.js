const DOMAIN_ROOT = process.env.REACT_APP_DOMAIN_ROOT;

export const URL = {
    MILESTONE_LIST_API: DOMAIN_ROOT + process.env.REACT_APP_MILESTONE_LIST_API,
    MILESTONE_CREATE_API: DOMAIN_ROOT + process.env.REACT_APP_MILESTONE_CREATE_API,
    MILESTONE_EDIT_API: (milestoneId) => DOMAIN_ROOT + process.env.REACT_APP_MILESTONE_EDIT_API.replace('{milestoneId}', milestoneId),
    MILESTONE_DELETE_API: (milestoneId) => DOMAIN_ROOT + process.env.REACT_APP_MILESTONE_DELETE_API.replace('{milestoneId}', milestoneId),

    LABEL_LIST_API: DOMAIN_ROOT + process.env.REACT_APP_LABEL_LIST_API,
    LABEL_CREATE_API: DOMAIN_ROOT + process.env.REACT_APP_LABEL_CREATE_API,
    LABEL_EDIT_API: (labelId) => DOMAIN_ROOT + process.env.REACT_APP_LABEL_EDIT_API.replace('{labelId}', labelId),

    ISSUE_LIST_API: DOMAIN_ROOT + process.env.REACT_APP_ISSUE_LIST_API,
    ISSUE_PICKER_INFO_API: DOMAIN_ROOT + process.env.REACT_APP_ISSUE_PICKER_INFO_API,
    ISSUE_API: (issueId) => DOMAIN_ROOT + process.env.REACT_APP_ISSUE_API.replace('{issueId}', issueId),
}