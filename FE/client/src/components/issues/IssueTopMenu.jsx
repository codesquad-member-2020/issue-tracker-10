import React from "react";
import styled from "styled-components";
import { DropdownCaret } from "@style/CustomStyle";

const IssueTopMenu = () => {
  return (
    <IssueTopMenuWrap>
      <input type="checkbox" />
      <ul className="filter-list">
        <li>
          Author
          <DropdownCaret />
        </li>
        <li>
          Labels
          <DropdownCaret />
        </li>
        <li>
          Milestones
          <DropdownCaret />
        </li>
        <li>
          Assignee
          <DropdownCaret />
        </li>
      </ul>
    </IssueTopMenuWrap>
  );
};

const IssueTopMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  input {
    width: 15px;
    height: 15px;
    margin: 0;
  }
  .filter-list {
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    color: #586069;
    li {
      cursor: pointer;
    }
  }
`;

export default IssueTopMenu;
