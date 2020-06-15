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
          <SubmitButton>{SUBMIT_NEW_ISSUE}</SubmitButton>
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

const SubmitButton = styled(SaveButton)`
  width: auto;
  height: 32px;
  border-radius: 3px;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(27, 31, 35, 0.2);
  outline: none;
`;

export default CreateIssues;
