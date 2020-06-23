import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { MdSettings } from "react-icons/md";

import PickerModal from "@components/issues/PickerModal";

const GithubPicker = ({ pickerName, pickerType, pickerList, onClickModalItem, ListItemComponent, ModalItemComponent }) => {
  const toggleContainer = useRef();
  const [bOpen, setbOpen] = useState(false);
  const [chosenList, setChoseList] = useState([]);

  const setChosenList = () => {
    const filterChosenList = pickerList.filter((el) => el.bCheck === true);
    setChoseList(filterChosenList);
  };

  const modalList = pickerList.map((el) => <ModalItemComponent {...el} onClickModalItem={onClickModalItem} />);

  const onClickPicker = () => setbOpen(!bOpen);
  const onClickOutside = (event) => {
    if (bOpen && !toggleContainer.current.contains(event.target)) {
      setbOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  });

  useEffect(() => {
    setChosenList();
  }, [pickerList]);

  return (
    <GithubPickerWrap ref={toggleContainer}>
      <PickerHeader onClick={onClickPicker}>
        <div>{pickerName}</div>
        <MdSettings />
      </PickerHeader>
      {bOpen && <PickerModal title={pickerName} pickerType={pickerType} modalItemList={modalList} />}
      {chosenList.map((el) => {
        return <ListItemComponent {...el} />;
      })}
    </GithubPickerWrap>
  );
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
