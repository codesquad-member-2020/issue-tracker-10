import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { MdSettings } from "react-icons/md";

import PickerModal from "@components/issues/PickerModal";

const GithubPicker = ({ pickerName, pickerType, listItems, ListItemComponent, ModalItemComponent }) => {
  const [anchorPickerList, setAnchorPickerList] = useState(false);
  const [chosenItems, setChosenItems] = useState([]);

  const onClickPickerHeader = () => setAnchorPickerList(!anchorPickerList);

  const pickerModalListItems = listItems.map((el) => <ModalItemComponent {...el} />);

  useEffect(() => {
    setChosenItems(test_issues_detail_state.labels.map((el) => <ListItemComponent {...el} />));
  }, []);

  return (
    <GithubPickerWrap>
      <PickerHeader onClick={onClickPickerHeader}>
        <div>{pickerName}</div>
        <MdSettings />
      </PickerHeader>
      {anchorPickerList && <PickerModal title="labels" pickerType={pickerType} pickerModalList={pickerModalListItems} />}
      {chosenItems}
    </GithubPickerWrap>
  );
};

// 상세 페이지를 요청했을 때 해당하는 issues에 대한 데이터 (label or milestone or assignees ) // props로 전달받는 로직으로 수정 예정
const test_issues_detail_state = {
  labels: [
    {
      id: 1,
      bCheck: true,
      textColor: "#fff",
      backgroundColor: "rgb(203,92,208)",
      description: "testing label",
      labelName: "duplicate",
    },
    {
      id: 2,
      bCheck: true,
      textColor: "#fff",
      backgroundColor: "rgb(254,40,119)",
      description: "testing label",
      labelName: "FE",
    },
  ],
};

const GithubPickerWrap = styled.div`
  width: 221px;
  font-size: 13px;
  font-weight: bold;
  color: #586069;
  position: relative;
  margin-bottom: 20px;
`;

const PickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  :hover {
    color: #0366d6;
  }
`;

const PickerItem = styled.div`
  height: 20px;
  padding: 0.15em 4px;
  margin-top: 3px;
  font-weight: 600;
  line-height: 15px;
  border-radius: 2px;
  margin-bottom: 3px;
  background-color: green;
  color: #fff;
  background-color: ${(props) => `${props.backgroundColor}`};
  color: ${(props) => `${props.color}`};
`;

const PickerListModal = styled.div`
  position: absolute;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
  border-radius: 3px;
  width: 300px;
  z-index: 1;
  font-size: 13;
  color: #586069;
  background-color: #f6f8fa;
`;

export default GithubPicker;
