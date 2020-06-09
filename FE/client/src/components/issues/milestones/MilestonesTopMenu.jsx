import React from "react";
import styled from "styled-components";

const MilestonesTopMenu = ({ open, closed }) => {
  return (
    <MilestonesTopMenuWrap>
      <div>
        <span>{open}</span> Open
      </div>
      <div>
        <span>{closed}</span> Closed
      </div>
    </MilestonesTopMenuWrap>
  );
};

const MilestonesTopMenuWrap = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f8fa;
  margin: -1px -1px 0;
  padding: 16px;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 14px;
  & > * {
    margin-right: 20px;
  }
`;

export default MilestonesTopMenu;
