import React from "react";
import styled from "styled-components";
import GithubPiker_ from "./GithubPicker_";

import GithubPicker from "./githubPicker/GithubPicker";

const IssuesEditor = ({ children }) => {
  return (
    <IssuesEditorWrap>
      <IssuesEditorInner>
        {children}
        <PickerWrap>
          <GithubPiker_ />
          <GithubPicker pickerName="Labels" />
        </PickerWrap>
      </IssuesEditorInner>
    </IssuesEditorWrap>
  );
};

const PickerWrap = styled.div`
  width: 25%;
`;

const IssuesEditorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IssuesEditorInner = styled.div`
  display: flex;
  width: 1012px;
  height: 500px;
`;

export default IssuesEditor;
