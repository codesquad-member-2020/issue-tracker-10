import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TableHeaderButton } from "@style/CustomStyle";

import Table from "@component/table/Table";
import TableHeader from "@component/table/TableHeader";
import SwitchButtons from "@component/table/SwitchButtons";
import MilestonesTopMenu from "./MilestonesTopMenu";
import MilestonesItem from "./MilestonesItem";

import { useSelector } from "react-redux";

const MILESTONES_TEXT = "New Milestones";

const Milestones = () => {
  const { milestonesList } = useSelector(({ milestones }) => milestones);

  const rightSideComponent = (
    <Link to="/milestones/create">
      <TableHeaderButton>{MILESTONES_TEXT}</TableHeaderButton>
    </Link>
  );
  const leftSideComponent = <SwitchButtons type="milestones" />;

  let openMilestonesCount = 0;
  const _milestonesList = milestonesList.map((milestones) => {
    if (!milestones.bOpen) return;
    openMilestonesCount++;
    return <MilestonesItem key={milestones.id} {...{ milestones }} />;
  });
  const closedMilestonesCount = _milestonesList.length - openMilestonesCount;

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      <MilestonesWrap>
        <Table renderTableTopMenu={<MilestonesTopMenu open={openMilestonesCount} closed={closedMilestonesCount} />} renderTableList={_milestonesList} />
      </MilestonesWrap>
    </>
  );
};

const MilestonesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
`;

export default Milestones;
