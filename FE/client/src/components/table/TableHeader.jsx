import React from "react";
import styled from "styled-components";

const TableHeader = ({ leftSideComponent, rightSideComponent }) => {
  return (
    <TableHeaderWrap>
      <TabelHeaderInner>
        {leftSideComponent}
        {rightSideComponent}
      </TabelHeaderInner>
    </TableHeaderWrap>
  );
};

const TableHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabelHeaderInner = styled.div`
  width: 980px;
  display: flex;
  justify-content: space-between;
`;

export default TableHeader;
