import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MilestoneItemButtons = ({ id }) => {
  return (
    <MilestoneItemButtonsWrap>
      <Link to={`/milestone/edit/${id}`} className="edit-btn">
        Edit
      </Link>
      <button className="close-btn">Close</button>
      <button className="delete-btn">Delete</button>
    </MilestoneItemButtonsWrap>
  );
};

const MilestoneItemButtonsWrap = styled.div`
  a {
    text-decoration: none;
  }
  .edit-btn,
  .close-btn {
    color: #00a8ff;
  }
  .delete-btn {
    color: #e84118;
  }
  & > * {
    margin-right: 20px;
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    letter-spacing: -0.03rem;
    cursor: pointer;
  }
`;

export default MilestoneItemButtons;
