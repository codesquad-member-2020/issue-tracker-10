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
            <input name="title" type="text" placeholder="Title" ref={register} />
            {errors.title && <ErrorLog>{ISSUES_TITLE_ERROR_MESSAGE}</ErrorLog>}
            <MarkdownEditorContainer />
          </div>
          <CreateIssueWrap>
            <SubmitButton onClick={handleSubmit(onSubmit)} blockButton={!watch("title")}>
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

export default CreateIssues;
