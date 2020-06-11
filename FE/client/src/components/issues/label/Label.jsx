import React, { useState } from "react";
import styled from "styled-components";
import { TableHeaderButton, LabelBox } from "@style/CustomStyle";

import Table from "@components/table/Table";
import LabelTopMenu from "./LabelTopMenu";
import LabelItem from "./LabelItem";
import LabelEditor from "./LabelEditor";
import TableHeader from "@components/table/TableHeader";
import SwitchButtons from "@components/table/SwitchButtons";

import { useSelector } from "react-redux";

import { CREATE_LABEL_INFO } from "./labelConstanst";

const LABEL_TEXT = "New Label";

const Label = () => {
  const { labels } = useSelector((state) => state.labels);
  const [createIsOpen, setCreateIsOpen] = useState(false);

  const [format, setFormat] = useState({ ...CREATE_LABEL_INFO });
  const [snapshot, setSnapShot] = useState({ ...CREATE_LABEL_INFO });

  const _test_items = labels.map((labelOption, idx) => {
    return <LabelItem key={idx} {...labelOption} />;
  });

  const onClickEdit = () => setCreateIsOpen(!createIsOpen);
  const returnToFormat = (snapshotState) => setFormat({ ...snapshotState });

  const rightSideComponent = <TableHeaderButton onClick={onClickEdit}>{LABEL_TEXT}</TableHeaderButton>;
  const leftSideComponent = <SwitchButtons type="labels" />;

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      {createIsOpen && (
        <CreateLabelWrap>
          <CreateLabelInner>
            <LabelBox backgroundColor={format.backgroundColor} textColor={format.textColor}>
              {format.labelName}
            </LabelBox>
            <LabelEditor type="Create" format={format} setFormat={setFormat} snapshot={snapshot} setSnapShot={setSnapShot} onCloseEditor={onClickEdit} returnToFormat={returnToFormat} />
          </CreateLabelInner>
        </CreateLabelWrap>
      )}
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

const CreateLabelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CreateLabelInner = styled.div`
  width: 980px;
  border: 1px solid #e1e4e8;
  background-color: #f6f8fa;
  margin-bottom: 16px;
  padding: 16px;
  font-size: 12px;
  .edit_buttons {
    margin-top: 29px;
  }
`;

export default Label;
