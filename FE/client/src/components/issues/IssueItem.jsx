import React from "react";
import { TableItem, LabelBox } from "@style/CustomStyle";
import { GoIssueOpened, GoIssueClosed, GoMilestone } from "react-icons/go";
import styled from "styled-components";
import moment from "moment";

import userSampleImage from "@assets/images/user-sample-image.jpg";

const IssueItem = ({ issue }) => {
  const { id, title, bOpen, createDate, labels, milestones, writer, assignee } = issue;
  const issueIcon = bOpen ? <GoIssueOpened className="icon open" /> : <GoIssueClosed className="icon closed" />;
  const labelsList = labels.map((label) => (
    <LabelBox key={label.title} textColor={label.color} backgroundColor={label.backgroundColor}>
      {label.title}
    </LabelBox>
  ));
  const issueStateText = bOpen ? "opened" : "closed";
  const issueTimeago = moment(createDate).fromNow();
  const assigneeImages = assignee.map((userData) => <img key={userData.id} src={userSampleImage} alt="assignee-image" />);

  return (
    <TableItem>
      <IssueItemWrap>
        <input type="checkbox" />
        {issueIcon}
        <IssueItemDetailWrap>
          <div>
            <div className="issue-title">
              {title}
              {labelsList}
            </div>
            <div className="issue-info">
              <span>#{id}</span>
              <span>{issueStateText}</span>
              <span>{issueTimeago}</span>
              <span>by {writer.id}</span>
              <span className="issue-info-milestone">
                {milestones.title && <GoMilestone className="icon" />} {milestones.title}
              </span>
            </div>
          </div>
          <div className="assignee-images">{assigneeImages}</div>
        </IssueItemDetailWrap>
      </IssueItemWrap>
    </TableItem>
  );
};

const IssueItemWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    width: 15px;
    height: 15px;
    margin: 0;
  }
  .icon {
    margin: 0 15px;
    font-size: 24px;
    &.open {
      color: #28a745;
    }
    &.closed {
      color: #cb2431;
    }
  }
`;

const IssueItemDetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .issue-title {
    cursor: pointer;
    color: #24292e;
    font-size: 16px;
    font-weight: 600;
    ${LabelBox} {
      padding: 1px 6px;
      margin-left: 5px;
    }
  }
  .issue-info {
    color: #586069;
    font-size: 12px;
    .issue-info-milestone {
      cursor: pointer;
      .icon {
        position: relative;
        top: 2px;
        color: #586069;
        font-size: 14px;
        margin: 0;
      }
    }
    & > * {
      margin-right: 5px;
    }
  }
  .assignee-images {
    display: flex;
    align-items: center;
    img {
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin-right: 2px;
      border-radius: 3px;
      :last-child {
        margin: 0;
      }
    }
  }
`;

export default IssueItem;
