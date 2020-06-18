import React from "react";
import styled from "styled-components";

import SwitchButtons from "@components/table/SwitchButtons";

const MilestoneEditorHeader = ({ milestone }) => {
  return (
    <>
      {milestone ? (
        <SwitchButtons type="milestones" />
      ) : (
        <TextWrap>
          <h1 className="page-title">New Milestone</h1>
          <p className="page-description">
            Create a new milestone to help organize your issues and pull requests. Learn more about
            <a href="https://guides.github.com/features/issues/" target="_blank">
              milestones and issues.
            </a>
          </p>
        </TextWrap>
      )}
    </>
  );
};

const TextWrap = styled.div`
  .page-title {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 8px;
  }
  .page-description {
    font-size: 13px;
    > a {
      margin-left: 4px;
      color: #0366d6;
      text-decoration: none;
    }
  }
`;

export default MilestoneEditorHeader;
