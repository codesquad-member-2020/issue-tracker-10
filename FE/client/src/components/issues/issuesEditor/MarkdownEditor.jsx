import React, { useState, memo } from "react";
import ReactMarkdown from "react-markdown";
import { useFormContext } from "react-hook-form";

import styled from "styled-components";
import { MarkdownDefaultStyle } from "@style/CustomStyle";

import { MARKDOWN_INFO_MESSGAE, MARKDOWN_WIKI_URL } from "./issyesEditorConstant";

const MarkdownEditor = memo(
  (props) => {
    const [writeMode, setWriteMode] = useState(true);
    const [previewMode, setPreviewMode] = useState(false);
    const [descriptionValue, setDescriptionValue] = useState("");

    const { register } = props;

    const onClickWrite = () => {
      setWriteMode(true);
      setPreviewMode(false);
    };

    const onClickPreview = () => {
      setWriteMode(false);
      setPreviewMode(true);
    };

    const onChangeDescription = (e) => setDescriptionValue(e.target.value);

    return (
      <MarkdownEditorWrap>
        <MarkdownButtons>
          <WriteButton onClick={onClickWrite} activation={writeMode}>
            Write
          </WriteButton>
          <PreviewButton onClick={onClickPreview} activation={previewMode}>
            Preview
          </PreviewButton>
        </MarkdownButtons>
        <MarkdownArea>
          {writeMode && (
            <>
              <textarea name="description" cols="30" rows="10" value={descriptionValue} onChange={onChangeDescription} ref={register} />
              <MarkdownMessage href={MARKDOWN_WIKI_URL} target="_blank">
                {MARKDOWN_INFO_MESSGAE}
              </MarkdownMessage>
            </>
          )}
          {previewMode && (
            <MarkdownDefaultStyle>
              <ReactMarkdown source={descriptionValue} />
            </MarkdownDefaultStyle>
          )}
        </MarkdownArea>
      </MarkdownEditorWrap>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.formState.dirtyFields.has("description") === nextProps.formState.dirtyFields.has("description");
  },
);

const MarkdownEditorContainer = () => {
  const methods = useFormContext();
  return <MarkdownEditor {...methods} />;
};

const MarkdownArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarkdownMessage = styled.a`
  padding: 7px 10px;
  margin: 0;
  font-size: 13px;
  line-height: 16px;
  color: #586069;
  background-color: #fafbfc;
  border: 1px solid #c3c8cf;
  border-top: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;

  :hover {
    color: #0366d6;
  }
`;

const MarkdownEditorWrap = styled.div`
  button {
    outline: none;
    display: inline-block;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #586069;
    text-decoration: none;
    background-color: initial;
    cursor: pointer;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  }
`;

const MarkdownButtons = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e1e4e8;
  z-index: 1;
`;

const WriteButton = styled.button`
  border: 1px solid transparent;
  border-color: ${(props) => props.activation && "#d1d5da"};
  background-color: #fff;
`;

const PreviewButton = styled.button`
  border: 1px solid transparent;
  border-color: ${(props) => props.activation && "#d1d5da"};
  background-color: #fff;
`;

export default MarkdownEditorContainer;
