import React from "react";
import styled from "styled-components";
import Table from "@component/table/Table";

import LabelTopMenu from "./LabelTopMenu";
import LabelItem from "./LabelItem";

const Label = () => {
  const _test_items = [<LabelItem />, <LabelItem />, <LabelItem />, <LabelItem />, <LabelItem />, <LabelItem />];

  return (
    <LabelWrap>
      <Table renderTableTopMenu={<LabelTopMenu />} renderTableList={_test_items} />
    </LabelWrap>
  );
};

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
`;

export default Label;
