import React from "react";
import styled from "styled-components";

const IssueTopMenu = () => {
  return (
    <IssueTopMenuWrap>
      <div>Issue Top Menu Layout</div>
    </IssueTopMenuWrap>
  );
};

const IssueTopMenuWrap = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f8fa;
  margin: -1px -1px 0;
  padding: 16px;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 14px;
  letter-spacing: -0.02rem;
  & > * {
    margin-right: 20px;
  }
`;

export default IssueTopMenu;
