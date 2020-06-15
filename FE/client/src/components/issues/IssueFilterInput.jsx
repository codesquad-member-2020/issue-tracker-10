import React from "react";
import styled from "styled-components";
import { NomalButton, NomalInput } from "@style/CustomStyle";
import { AiOutlineSearch } from "react-icons/ai";

const IssueFilterInput = () => {
  return (
    <IssueFilterInputWrap>
      <NomalButton type="button">
        Filter
        <span className="dropdown-caret"></span>
      </NomalButton>
      <div className="filter-input-wrap">
        <AiOutlineSearch className="search-icon" />
        <NomalInput type="text" placeholder="Search all issues" />
      </div>
    </IssueFilterInputWrap>
  );
};

const IssueFilterInputWrap = styled.div`
  display: flex;
  width: 600px;
  .dropdown-caret {
    margin-left: 5px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-top-style: solid;
    border-top-width: 4px;
    border-right: 4px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 4px solid transparent;
  }
  .filter-input-wrap {
    position: relative;
    width: 100%;
    .search-icon {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      color: #bdc3c7;
      font-size: 22px;
      z-index: 10;
    }
    input {
      text-indent: 25px;
    }
  }
`;

export default IssueFilterInput;
