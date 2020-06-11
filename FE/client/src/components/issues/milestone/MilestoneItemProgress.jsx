import React from "react";
import styled from "styled-components";

const MilestoneItemProgress = ({ completeRatio, openLinkIssuesCount, closedLinkIssuesCount }) => {
  return (
    <MilestoneItemProgressWrap>
      <ProgressBarBackround className="progress-bar">
        <ProgressBar {...{ completeRatio }} />
      </ProgressBarBackround>
      <div className="progress-text">
        <span>
          <b>{completeRatio}%</b> complete
        </span>
        <span>
          <b>{openLinkIssuesCount}</b> open
        </span>
        <span>
          <b>{closedLinkIssuesCount}</b> closed
        </span>
      </div>
    </MilestoneItemProgressWrap>
  );
};

const MilestoneItemProgressWrap = styled.div`
  .progress-bar {
    margin-bottom: 10px;
  }
  .progress-text {
    margin-bottom: 10px;
    letter-spacing: -0.03rem;
    b {
      font-weight: 600;
    }
    & > * {
      margin-right: 20px;
    }
  }
`;

const ProgressBarBackround = styled.div`
  width: 400px;
  height: 13px;
  border-radius: 5px;
  background-color: #ecf0f1;
  position: relative;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.completeRatio}%;
  height: 100%;
  border-radius: 5px;
  background-color: #2ecc71;
  position: absolute;
  top: 0;
  left: 0;
`;

export default MilestoneItemProgress;
