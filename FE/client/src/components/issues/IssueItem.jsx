import React, { useState, useEffect } from "react";
import { TableItem, LabelBox } from "@style/CustomStyle";
import { GoIssueOpened, GoIssueClosed, GoMilestone } from "react-icons/go";
import { BsChatSquare } from "react-icons/bs";
import styled from "styled-components";
import moment from "moment";

const IssueItem = ({ bCheckedAll, issue }) => {
  const [bChecked, setbChecked] = useState(false);
  const { id, title, isOpen, createDate, labels, milestone, writer, assignees, numberOfComments } = issue;
  const issueIcon = isOpen ? <GoIssueOpened className="icon open" /> : <GoIssueClosed className="icon closed" />;
  const labelsList = labels.map((label) => (
    <LabelBox key={label.label_id} textColor={label.textColor} backgroundColor={label.backGroundColor}>
      {label.labelName}
    </LabelBox>
  ));
  const issueStateText = isOpen ? "opened" : "closed";
  const issueTimeago = moment(createDate).fromNow();
  const assigneeImages = assignees.map((userData) => <img key={userData.user_id} src={userData.url} alt="assignee-image" />);
  const handleChange = () => setbChecked(!bChecked);

  useEffect(() => {
    setbChecked(bCheckedAll);
  }, [bCheckedAll]);

  return (
    <TableItem>
      <IssueItemWrap>
        <input type="checkbox" checked={bChecked} onChange={handleChange} />
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
              <span>by {"temp writer"}</span>
              <span className="issue-info-milestone">
                {milestone.title && <GoMilestone className="icon" />} {milestone.title}
              </span>
            </div>
          </div>
          <IssueItemOtherInfoWrap>
            <div className="assignee-images">{assigneeImages}</div>
            <div className="comments-wrap">
              <BsChatSquare />
              <span className="comments-number">{numberOfComments}</span>
            </div>
          </IssueItemOtherInfoWrap>
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
`;

const IssueItemOtherInfoWrap = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .comments-wrap {
    display: flex;
    align-items: center;
    color: #586069;
    cursor: pointer;
    :hover {
      color: #0366d6;
    }
    .comments-number {
      margin-left: 5px;
      font-size: 12px;
    }
  }
`;

export default IssueItem;
