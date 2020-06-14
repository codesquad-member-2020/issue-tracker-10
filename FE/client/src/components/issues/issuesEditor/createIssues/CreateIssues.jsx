import React from "react";

import IssuesEditor from "../IssuesEditor";
import userSampleImage from "@assets/images/user-sample-image.jpg";
import TimelineComment from "../TimelineComment";
import MarkdownEditor from "../MarkdownEditor";

import styled from "styled-components";
import { SaveButton } from "@style/CustomStyle";
import { SUBMIT_NEW_ISSUE } from "../issyesEditorConstant";

const CreateIssues = () => {
  return (
    <IssuesEditor>
      <TimelineComment userImage={userSampleImage}>
        <div className="title_input">
          <input type="text" placeholder="Title" />
          <MarkdownEditor />
        </div>
        <CreateIssueWrap>
          <SaveButton>{SUBMIT_NEW_ISSUE}</SaveButton>
        </CreateIssueWrap>
      </TimelineComment>
    </IssuesEditor>
  );
};

const CreateIssueWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-right: 8px;
  margin-left: -8px;
  margin-bottom: 8px;
`;

export default CreateIssues;
