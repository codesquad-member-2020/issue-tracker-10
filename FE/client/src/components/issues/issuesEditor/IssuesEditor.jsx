import React from "react";
import styled from "styled-components";
import userSampleImage from "@assets/images/user-sample-image.jpg";
import TimelineComment from "./TimelineComment";
import MarkdownEditor from "./MarkdownEditor";

const IssuesEditor = () => {
  return (
    <IssuesEditorWrap>
      <IssuesEditorInner>
        <TimelineComment userImage={userSampleImage}>
          <div className="title_input">
            <input type="text" placeholder="Title" />
            <MarkdownEditor />
          </div>
        </TimelineComment>
      </IssuesEditorInner>
    </IssuesEditorWrap>
  );
};

const IssuesEditorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IssuesEditorInner = styled.div`
  width: 1012px;
  height: 500px;
`;

export default IssuesEditor;
