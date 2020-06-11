import React from "react";
import { TableItem } from "@style/CustomStyle";
import styled from "styled-components";
import moment from "moment";

import MilestoneItemProgress from "./MilestoneItemProgress";
import MilestoneItemButtons from "./MilestoneItemButtons";

const MilestoneItem = ({ milestones }) => {
  const { id, title, dueDate, description, linkIssues } = milestones;

  let openLinkIssuesCount = 0;
  let closedLinkIssuesCount = 0;
  linkIssues.forEach((linkIssue) => (linkIssue.bOpen ? openLinkIssuesCount++ : closedLinkIssuesCount++));
  const completeRatio = Math.floor((closedLinkIssuesCount / linkIssues.length) * 100);

  return (
    <TableItem>
      <MilestoneItemWrap>
        <div className="left-info">
          <div className="title">{title}</div>
          <div className="due-date">📅 Due by {moment(dueDate).format("LL")}</div>
          <div className="description">{description}</div>
        </div>
        <div className="right-info">
          <MilestoneItemProgress {...{ completeRatio, openLinkIssuesCount, closedLinkIssuesCount }} />
          <MilestoneItemButtons {...{ id }} />
        </div>
      </MilestoneItemWrap>
    </TableItem>
  );
};

const MilestoneItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 8px;
    }
    .due-date {
      margin-bottom: 8px;
      letter-spacing: -0.02rem;
    }
    .description {
      width: 400px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      letter-spacing: -0.02rem;
    }
  }
  .right-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default MilestoneItem;
