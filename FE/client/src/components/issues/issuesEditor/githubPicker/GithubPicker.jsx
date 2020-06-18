import React, { useState } from "react";

import styled from "styled-components";
import { MdSettings } from "react-icons/md";

import ColorPickerItem from "./ColorPickerItem";
import PikerModal from "@components/issues/PickerModal";

import { useSelector } from "react-redux";

const GithubPicker = ({ pickerName }) => {
  const { labels } = useSelector((state) => state.labels);
  const [anchorPickerList, setAnchorPickerList] = useState(false);
  const [chosenItems, setChosenItems] = useState([]);

  const test_list = labels.map((el) => <ColorPickerItem backgroundColor={el.backgroundColor} labelName={el.labelName} description={el.description} />);

  const onClickPickerHeader = () => setAnchorPickerList(!anchorPickerList);

  return (
    <GithubPickerWrap>
      <PickerHeader onClick={onClickPickerHeader}>
        <div>{pickerName}</div>
        <MdSettings />
      </PickerHeader>
      {anchorPickerList && <PikerModal title="Apply this to pull request" pickerModalList={test_list} />}
      <PickerItem>bug</PickerItem>
    </GithubPickerWrap>
  );
};

const GithubPickerWrap = styled.div`
  margin-top: 20px;
  width: 221px;
  /* or 100% */
  font-size: 13px;
  font-weight: bold;
  color: #586069;
  position: relative;
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
