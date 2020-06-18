import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import GithubPicker from "./githubPicker/GithubPicker";
// ColorPicker Items
import ColorModalItem from "./githubPicker/colorPicker/ColorModalItem";
import ColorListItem from "./githubPicker/colorPicker/ColorListItem";

const IssuesEditor = ({ children }) => {
  const { labelPickerList, milestonePickerList, assigneerPickerList } = useSelector((state) => state.optionPickers);

  return (
    <IssuesEditorWrap>
      <IssuesEditorInner>
        {children}
        <PickerWrap>
          <GithubPicker pickerName="labels" pickerType="labelPickerList" listItems={labelPickerList} ListItemComponent={ColorListItem} ModalItemComponent={ColorModalItem} />
          <GithubPicker pickerName="milestones" pickerType="milestonePickerList" listItems={milestonePickerList} ListItemComponent={ColorListItem} ModalItemComponent={ColorModalItem} />
          <GithubPicker pickerName="assigneer" pickerType="assigneerPickerList" listItems={assigneerPickerList} ListItemComponent={ColorListItem} ModalItemComponent={ColorModalItem} />
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
