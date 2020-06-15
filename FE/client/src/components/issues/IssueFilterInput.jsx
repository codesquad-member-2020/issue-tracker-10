import React from "react";
import styled from "styled-components";
import { NomalButton, NomalInput, DropdownCaret } from "@style/CustomStyle";
import { AiOutlineSearch } from "react-icons/ai";

const IssueFilterInput = () => {
  return (
    <IssueFilterInputWrap>
      <NomalButton type="button">
        Filter
        <DropdownCaret />
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
