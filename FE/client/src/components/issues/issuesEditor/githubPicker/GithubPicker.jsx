import React, { useState } from "react";

import styled from "styled-components";
import { MdSettings } from "react-icons/md";

import ColorPickerItem from "./ColorPickerItem";
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
      {anchorPickerList && (
        <PickerListModal>
          <PickerListHeader>Apply this to pull request</PickerListHeader>
          <PickerListInputBase>
            <input type="text" />
          </PickerListInputBase>
          {test_list}
        </PickerListModal>
      )}
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

const PickerListHeader = styled.div`
  border-bottom: 1px solid #e1e4e8;
  /* border-top-right-radius
  border-top-left-radius */
  padding: 8px 10px;
  font-weight: 600;
`;

const PickerListInputBase = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dfe2e5;
  input {
    width: 100%;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #ced4da;
    font-size: 14px;
    :focus {
      background-color: #fff;
      border-color: #2188ff;
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
    }
  }
`;

const PickerListItem = styled.div`
  display: flex;
  padding: 8px;
  background-color: #fff;
`;

const PickerItemLabel = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => `${props.backgroundColor}`};
  margin-right: 8px;
  border-radius: 3px;
  margin-top: 4px;
`;

const PickerItemInfo = styled.div``;

export default GithubPicker;
