import React from "react";
import { useForm, FormContext } from "react-hook-form";

import IssuesEditor from "../IssuesEditor";
import userSampleImage from "@assets/images/user-sample-image.jpg";
import TimelineComment from "../TimelineComment";
import MarkdownEditorContainer from "../MarkdownEditor";

import styled from "styled-components";
import { SaveButton } from "@style/CustomStyle";
import { SUBMIT_NEW_ISSUE, ISSUES_TITLE_ERROR_MESSAGE } from "../issyesEditorConstant";

const CreateIssues = () => {
  const method = useForm();
  const { errors, register, watch, handleSubmit } = method;

  const onSubmit = (data) => console.log(data);

  return (
    <FormContext {...method}>
      <IssuesEditor>
        <TimelineComment userImage={userSampleImage}>
          <div className="title_input">
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
      </IssuesEditor>
    </FormContext>
  );
};

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
