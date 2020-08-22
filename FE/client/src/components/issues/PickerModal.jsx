import React from "react";
import styled from "styled-components";

const PickerModal = ({ title, modalItemList }) => {
  return (
    <PickerModalWrap>
      <PickerModalHeader>{title}</PickerModalHeader>
      <PickerModalInputBase>
        <input type="text" />
      </PickerModalInputBase>
      {modalItemList}
    </PickerModalWrap>
  );
};

const PickerModalWrap = styled.div`
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

const PickerModalHeader = styled.div`
  border-bottom: 1px solid #e1e4e8;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 13px;
`;

const PickerModalInputBase = styled.div`
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

export default PickerModal;
