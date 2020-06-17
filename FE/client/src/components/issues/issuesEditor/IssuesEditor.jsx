import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import GithubPicker from "./githubPicker/GithubPicker";
import ColorPickerItem from "./githubPicker/ColorPickerItem";

const IssuesEditor = ({ children }) => {
  const { labelPickerList, milestonePickerList, assigneerPickerList } = useSelector((state) => state.optionPickers);

  return (
    <IssuesEditorWrap>
      <IssuesEditorInner>
        {children}
        <PickerWrap>
          <GithubPicker pickerName="labels" pickerType="labelPickerList" listItems={labelPickerList} ListItemComponent={ColorPickerItem} />
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
