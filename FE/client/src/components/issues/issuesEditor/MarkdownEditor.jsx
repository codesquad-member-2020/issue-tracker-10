import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import styled from "styled-components";
import { MarkdownDefaultStyle } from "@style/CustomStyle";

const MarkdownEditor = () => {
  const [writeMode, setWriteMode] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);
  const [testValue, setTestValue] = useState("");

  const onClickWrite = () => {
    setWriteMode(true);
    setPreviewMode(false);
  };

  const onClickPreview = () => {
    setWriteMode(false);
    setPreviewMode(true);
  };

  const test_onChange = (e) => setTestValue(e.target.value);

  return (
    <MarkdownEditorWrap>
      <div className="test">
        <MarkdownButtons>
          <WriteButton onClick={onClickWrite} activation={writeMode}>
            Write
          </WriteButton>
          <PreviewButton onClick={onClickPreview} activation={previewMode}>
            Preview
          </PreviewButton>
        </MarkdownButtons>
      </div>
      {writeMode && <textarea name="" cols="30" rows="10" value={testValue} onChange={test_onChange} />}
      {previewMode && (
        <MarkdownDefaultStyle>
          <ReactMarkdown source={testValue} />
        </MarkdownDefaultStyle>
      )}
    </MarkdownEditorWrap>
  );
};

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

export default MarkdownEditor;
