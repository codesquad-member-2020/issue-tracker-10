import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TableHeaderButton, LabelBox } from "@style/CustomStyle";

import Table from "@components/table/Table";
import LabelTopMenu from "./LabelTopMenu";
import LabelItem from "./LabelItem";
import LabelEditor from "./LabelEditor";
import TableHeader from "@components/table/TableHeader";
import SwitchButtons from "@components/table/SwitchButtons";
import InfoMessage from "@components/infoMessage/InfoMessage";

import { useSelector, useDispatch } from "react-redux";
import { postNewLabel, getInitLabels } from "@modules/labels";

import { CREATE_LABEL_INFO, NO_LABEL_TITLE, NO_LABEL_CONTENT, LABEL_TEXT } from "./labelConstant";

const Label = () => {
  const dispatch = useDispatch();

  const { labels } = useSelector((state) => state.labels);
  const [createIsOpen, setCreateIsOpen] = useState(false);

  const [format, setFormat] = useState({ ...CREATE_LABEL_INFO });
  const [snapshot, setSnapShot] = useState({ ...CREATE_LABEL_INFO });

  const _test_items = labels.map((labelOption) => <LabelItem key={labelOption.label_id} {...labelOption} />);

  const onClickEdit = () => {
    setFormat(CREATE_LABEL_INFO);
    setCreateIsOpen(!createIsOpen);
  };
  const returnToFormat = (snapshotState) => setFormat({ ...snapshotState });
  const createLabel = () => dispatch(postNewLabel(format));

  useEffect(() => {
    dispatch(getInitLabels());
  }, [dispatch]);

  const rightSideComponent = <TableHeaderButton onClick={onClickEdit}>{LABEL_TEXT}</TableHeaderButton>;
  const leftSideComponent = <SwitchButtons type="labels" />;

  return (
    <>
      <TableHeader leftSideComponent={leftSideComponent} rightSideComponent={rightSideComponent} />
      {createIsOpen && (
        <CreateLabelWrap>
          <CreateLabelInner>
            <LabelBox backgroundColor={format.backGroundColor} textColor={format.textColor}>
              {format.labelName}
            </LabelBox>
            <LabelEditor
              type="Create"
              format={format}
              setFormat={setFormat}
              snapshot={snapshot}
              setSnapShot={setSnapShot}
              onCloseEditor={onClickEdit}
              returnToFormat={returnToFormat}
              updateEditor={createLabel}
            />
          </CreateLabelInner>
        </CreateLabelWrap>
      )}
      <LabelWrap>
        <Table renderTableTopMenu={<LabelTopMenu />} renderTableList={_test_items.length ? _test_items : <InfoMessage title={NO_LABEL_TITLE} content={NO_LABEL_CONTENT} />} />
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
