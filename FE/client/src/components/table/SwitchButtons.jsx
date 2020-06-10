import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdLabelOutline } from "react-icons/md";
import { GoMilestone } from "react-icons/go";

const SwitchButtons = ({ type }) => {
  return (
    <SwitchButtonsWrap>
      <Link to="/labels">
        <LabelButton {...{ type }}>
          <MdLabelOutline className="icon" />
          <div>Labels</div>
          {type === "issues" && <span className="count">5</span>}
        </LabelButton>
      </Link>
      <Link to="/milestones">
        <MileStoneButton {...{ type }}>
          <GoMilestone className="icon" />
          <div>Milestones</div>
          {type === "issues" && <span className="count">5</span>}
        </MileStoneButton>
      </Link>
    </SwitchButtonsWrap>
  );
};

const SwitchButtonsWrap = styled.div`
  display: flex;
  color: #586069;
  button {
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 6px 14px;
    outline: none;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
  .icon {
    margin-right: 2px;
  }
  a {
    text-decoration: none;
  }
  .count {
    line-height: 16px;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-left: 2px;
    font-size: 12px;
  }
`;

const LabelButton = styled.button`
  border: 1px solid;
  color: ${(props) => (props.type === "labels" ? "#fff" : "#000")};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-color: ${(props) => (props.type === "labels" ? "#0366d6" : "#e1e4e8")};
  background-color: ${(props) => (props.type === "labels" ? "#0366d6" : "#fff")};
`;

const MileStoneButton = styled.button`
  border: 1px solid;
  color: ${(props) => (props.type === "milestones" ? "#fff" : "#000")};
  background-color: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-color: ${(props) => (props.type === "milestones" ? "#0366d6" : "#e1e4e8")};
  background-color: ${(props) => (props.type === "milestones" ? "#0366d6" : "#fff")};
`;

export default SwitchButtons;
