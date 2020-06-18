const initialState = {
    milestonesList: [
        {
            id: 1,
            title: '스프린트1',
            dueDate: '2020-06-26',
            description: '이번 배포를 위한 스프린트1',
            bOpen: true,
            linkIssues: [
                {
                    bOpen: true,
                },
                {
                    bOpen: true,
                },
                {
                    bOpen: false,
                },
            ],
        },
        {
            id: 2,
            title: '스프린트2',
            dueDate: '2020-07-26',
            description: '이번 배포를 위한 스프린트2',
            bOpen: true,
            linkIssues: [
                {
                    bOpen: true,
                },
                {
                    bOpen: true,
                },
                {
                    bOpen: true,
                },
            ],
        },
    ],
};

const milestonesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default milestonesReducer;