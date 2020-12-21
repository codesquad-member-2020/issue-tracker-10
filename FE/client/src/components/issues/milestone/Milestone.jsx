import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TableHeaderButton } from "@style/CustomStyle";
import { getInitMilestones } from "@modules/milestones";

import Table from "@components/table/Table";
import TableHeader from "@components/table/TableHeader";
import SwitchButtons from "@components/table/SwitchButtons";
import MilestoneTopMenu from "./MilestoneTopMenu";
import MilestoneItem from "./MilestoneItem";
import InfoMessage from "@components/infoMessage/InfoMessage";

import { MILESTONE_TEXT, MILESTONE_TITLE, MILESTONE_CONTENT } from "./milestoneConstant";

const Milestone = () => {
  const dispatch = useDispatch();
  const { bLoading, milestonesList } = useSelector(({ milestones }) => milestones);

  const rightSideComponent = (
    <Link to="/milestone/create">
      <TableHeaderButton>{MILESTONE_TEXT}</TableHeaderButton>
    </Link>
  );
  const leftSideComponent = <SwitchButtons type="milestones" />;

  let openMilestonesCount = 0;
  const _milestonesList = milestonesList.map((milestones) => {
    if (!milestones.opened) return;
    openMilestonesCount++;
    return <MilestoneItem key={milestones.milestone_id} {...{ milestones }} />;
  });
  const closedMilestonesCount = _milestonesList.length - openMilestonesCount;

  useEffect(() => {
    dispatch(getInitMilestones());
  }, [dispatch]);

  if (bLoading) return <div>Loading...</div>;

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      <MilestoneWrap>
        <Table
          renderTableTopMenu={<MilestoneTopMenu open={openMilestonesCount} closed={closedMilestonesCount} />}
          renderTableList={_milestonesList.length ? _milestonesList : <InfoMessage title={MILESTONE_TITLE} content={MILESTONE_CONTENT} />}
        />
      </MilestoneWrap>
    </>
  );
};

const MilestoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

export default Milestone;
