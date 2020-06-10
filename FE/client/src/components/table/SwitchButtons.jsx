import React from "react";
import styled from "styled-components";
import { MdLabelOutline } from "react-icons/md";
import { GoMilestone } from "react-icons/go";

const SwitchButtons = ({ type }) => {
  return (
    <SwitchButtonsWrap>
      <LabelButton>
        <MdLabelOutline className="icon" type={type} />
        <div>Labels</div>
        {type === "issues" && <span className="count">5</span>}
      </LabelButton>
      <MileStoneButton>
        <GoMilestone className="icon" type={type} />
        <div>MileStones</div>
        {type === "issues" && <span className="count">5</span>}
      </MileStoneButton>
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
  border: 1px solid #0366d6;
  background-color: #0366d6;
  color: #fff;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const MileStoneButton = styled.button`
  border: 1px solid #e1e4e8;
  background-color: none;
  border-color: #e1e4e8;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export default SwitchButtons;
