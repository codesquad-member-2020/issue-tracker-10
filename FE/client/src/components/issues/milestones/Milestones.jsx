import React from "react";
import styled from "styled-components";
import Table from "@component/table/Table";

import MilestonesTopMenu from "./MilestonesTopMenu";
import MilestonesItem from "./MilestonesItem";

import { useSelector } from "react-redux";

const Milestones = () => {
  const { milestonesList } = useSelector(({ milestones }) => milestones);

  let openMilestonesCount = 0;
  const milestones = milestonesList.map((milestone) => {
    if (!milestone.bOpen) return;
    openMilestonesCount++;
    return <MilestonesItem key={milestone.id} {...{ milestone }} />;
  });

  return (
    <MilestonesWrap>
      <Table renderTableTopMenu={<MilestonesTopMenu open={openMilestonesCount} closed={milestones.length - openMilestonesCount} />} renderTableList={milestones} />
    </MilestonesWrap>
  );
};

const MilestonesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
`;

export default Milestones;
