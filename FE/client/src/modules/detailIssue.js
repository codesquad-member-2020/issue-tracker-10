const initialState = {
  id: 1,
  title: "목록 보기 구현",
  description: "# 회고를 주기적으로 진행하기",
  is_open: true,
  created_datetime: "2014-04-01T16:30:00-08:00",
  labels: [
    {
      title: "bug",
      color: "#fff",
      backgroundColor: "rgb(203,92,208)",
      description: "testing label",
      bCheck: true,
    },
    {
      title: "bug",
      color: "#fff",
      backgroundColor: "rgb(254,40,119)",
      description: "testing label",
      bCheck: true,
    },
    {
      title: "bug",
      color: "#fff",
      backgroundColor: "rgb(86,185,42)",
      description: "testing label",
      bCheck: false,
    },
    {
      title: "bug",
      color: "#fff",
      backgroundColor: "rgb(118,148,231)",
      description: "testing label",
      bCheck: false,
    },
  ],
  milestones: {
    id: 1,
    title: "스프린트2",
  },
  writer: {
    id: "sejungkim",
    url: "imageURL",
  },
  assignee: [
    {
      id: "seungdeng17",
      url: "imageURL",
    },
    {
      id: "choichoigang",
      url: "imageURL",
    },
    {
      id: "cocojen",
      url: "imageURL",
    },
    {
      id: "bohyeon-n",
      url: "imageURL",
    },
  ],
  commentList: [
    {
      writer: "choichoigang",
      user_image: "url",
      created_datetime: "2014-04-01T16:30:00-08:00",
      description: "버그가 있어요",
    },
    {
      writer: "cocojen",
      description: "수고하셨습니다.",
    },
    {
      writer: "bohyeon",
      description: "해당 issue에 대해서 wiki에 올렸습니다 !",
    },
  ],
};

const detailIssueReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default detailIssueReducer;
