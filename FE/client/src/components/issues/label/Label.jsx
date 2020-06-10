import React from "react";
import styled from "styled-components";
import { TableHeaderButton } from "@style/CustomStyle";

import Table from "@component/table/Table";
import LabelTopMenu from "./LabelTopMenu";
import LabelItem from "./LabelItem";
import TableHeader from "@component/table/TableHeader";
import SwitchButtons from "@component/table/SwitchButtons";

import { useSelector } from "react-redux";

const LABEL_TEXT = "New Label";

const Label = () => {
  const { labels } = useSelector((state) => state.labels);
  const rightSideComponent = <TableHeaderButton>{LABEL_TEXT}</TableHeaderButton>;
  const leftSideComponent = <SwitchButtons />;

  const _test_items = labels.map((labelOption, idx) => {
    return <LabelItem key={idx} {...labelOption} />;
  });

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      <LabelWrap>
        <Table renderTableTopMenu={<LabelTopMenu />} renderTableList={_test_items} />
      </LabelWrap>
    </>
  );
};

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #fff;
  font-size: 12px;
  color: #586069;
`;

export default Label;
