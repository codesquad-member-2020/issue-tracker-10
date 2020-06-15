import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInitIssues } from "@modules/issues";
import styled from "styled-components";
import { TableHeaderButton } from "@style/CustomStyle";

import Table from "@components/table/Table";
import TableHeader from "@components/table/TableHeader";
import SwitchButtons from "@components/table/SwitchButtons";
import IssueFilterInput from "./IssueFilterInput";
import IssueTopMenu from "./IssueTopMenu";
import IssueItem from "./IssueItem";

import { ISSUE_TEXT } from "./issueConstant";

const Issue = () => {
  const dispatch = useDispatch();
  const { bLoading, issuesList } = useSelector(({ issues }) => issues);

  useEffect(() => {
    dispatch(getInitIssues());
  }, [dispatch]);

  const leftSideComponent = <IssueFilterInput />;
  const rightSideComponent = (
    <>
      <SwitchButtons type="issues" />
      <Link to="/issues/create">
        <TableHeaderButton>{ISSUE_TEXT}</TableHeaderButton>
      </Link>
    </>
  );

  if (bLoading) return <div>Loading...</div>;

  const _issuesList = issuesList.map((issue) => <IssueItem key={issue.id} {...{ issue }} />);

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      <IssueWrap>
        <Table renderTableTopMenu={<IssueTopMenu />} renderTableList={_issuesList} />
      </IssueWrap>
    </>
  );
};

const IssueWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

export default Issue;
