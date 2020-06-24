import React, { useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";

import IssuesEditor from "../IssuesEditor";
import userSampleImage from "@assets/images/user-sample-image.jpg";
import TimelineComment from "../TimelineComment";
import MarkdownEditorContainer from "../MarkdownEditor";
import GithubPicker from "../githubPicker/GithubPicker";

import ColorListItem from "../githubPicker/colorPicker/ColorListItem";
import ColorModalItem from "../githubPicker/colorPicker/ColorModalItem";
import AssigneesListItem from "../githubPicker/assignees/AssigneesListItem";
import AssigneesModalItem from "../githubPicker/assignees/AssigneesModalItem";

import styled from "styled-components";
import { SaveButton } from "@style/CustomStyle";
import { SUBMIT_NEW_ISSUE, ISSUES_TITLE_ERROR_MESSAGE } from "../issyesEditorConstant";

import { changeLabelBCheck, getInitCreateIssues, postNewIssues } from "@modules/createIssue";

const CreateIssues = () => {
  const method = useForm();
  const { errors, register, watch, handleSubmit } = method;

  const { labels, users } = useSelector(({ createIssue }) => createIssue);
  const dispatch = useDispatch();

  const onClickLabelsItem = (labelId, pickerType = "labels") => dispatch(changeLabelBCheck(labelId, pickerType));
  const onClickAssigneesItem = (labelId, pickerType = "assignees") => dispatch(changeLabelBCheck(labelId, pickerType));

  const onSubmit = (data) => {
    const checkedLabels = filteringPickerList(labels, "label_id");
    const checkdUsers = filteringPickerList(users, "user_id");
    const currentDate = moment().format();
    const postIssuesData = { ...data, authorId: 1, milestoneId: 1, openedDate: currentDate, labelIds: checkedLabels, assigneeIds: checkdUsers };
    dispatch(postNewIssues(postIssuesData));
  };

  const filteringPickerList = (pickerList, id) =>
    pickerList.length
      ? pickerList.reduce((acc, curr) => {
          if (curr.bchecked) acc.push(Number(curr[id]));
          return acc;
        }, [])
      : [];

  useEffect(() => {
    dispatch(getInitCreateIssues());
  }, []);

  return (
    <>
      <IssuesEditor>
        <FormContext {...method}>
          <TimelineComment userImage={userSampleImage}>
            <div className="input-area">
              <TitleInput name="title" type="text" placeholder="Title" ref={register({ required: true, maxLength: 256 })} />
              {errors.title && <ErrorLog>{ISSUES_TITLE_ERROR_MESSAGE}</ErrorLog>}
              <MarkdownEditorContainer />
            </div>
            <CreateIssueWrap>
              <SubmitButton onClick={handleSubmit(onSubmit)} blockButton={!watch("title")} disabled={!watch("title")}>
                {SUBMIT_NEW_ISSUE}
              </SubmitButton>
            </CreateIssueWrap>
          </TimelineComment>
        </FormContext>
        <PickerWrap>
          <GithubPicker pickerName="assignees" pickerList={users} ListItemComponent={AssigneesListItem} ModalItemComponent={AssigneesModalItem} onClickModalItem={onClickAssigneesItem} />
          <GithubPicker pickerName="labels" pickerList={labels} ListItemComponent={ColorListItem} ModalItemComponent={ColorModalItem} onClickModalItem={onClickLabelsItem} />
        </PickerWrap>
      </IssuesEditor>
    </>
  );
};

const PickerWrap = styled.div`
  width: 240px;
  margin-left: 10px;
`;

const ErrorLog = styled.div`
  width: 99%;
  font-size: 14px;
  padding: 16px 8px;
  margin: 8px;
  color: #86181d;
  background-color: #ffdce0;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 3px;
`;

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

const TitleInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  font-size: 16px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  background-color: #fafbfc;
  min-height: 32px;
  :focus {
    background-color: #fff;
    border-color: #2188ff;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }
`;

export default CreateIssues;
