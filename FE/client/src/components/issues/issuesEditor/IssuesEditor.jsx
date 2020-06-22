import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import GithubPicker from "./githubPicker/GithubPicker";

import ColorModalItem from "./githubPicker/colorPicker/ColorModalItem";
import ColorListItem from "./githubPicker/colorPicker/ColorListItem";

const IssuesEditor = ({ children }) => {
  const { labels } = useSelector(({ detailIssue }) => detailIssue);

  return (
    <IssuesEditorWrap>
      <IssuesEditorInner>
        {children}
        <PickerWrap>
          <GithubPicker pickerName="labels" pickerList={labels} ListItemComponent={ColorListItem} ModalItemComponent={ColorModalItem} />
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
