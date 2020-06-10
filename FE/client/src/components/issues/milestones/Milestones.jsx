import React from "react";
import styled from "styled-components";
import Table from "@component/table/Table";

import MilestonesTopMenu from "./MilestonesTopMenu";
import MilestonesItem from "./MilestonesItem";

import { useSelector } from "react-redux";

const Milestones = () => {
  const { milestonesList } = useSelector(({ milestones }) => milestones);

  let openMilestonesCount = 0;
  const _milestonesList = milestonesList.map((milestones) => {
    if (!milestones.bOpen) return;
    openMilestonesCount++;
    return <MilestonesItem key={milestones.id} {...{ milestones }} />;
  });

  return (
    <MilestonesWrap>
      <Table renderTableTopMenu={<MilestonesTopMenu open={openMilestonesCount} closed={_milestonesList.length - openMilestonesCount} />} renderTableList={_milestonesList} />
    </MilestonesWrap>
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
