import React from "react";

import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const ColorPickerItem = (props) => {
  const { backgroundColor, labelName, description, bCheck, id } = props;

  return (
    <PickerListItem key={id}>
      <PickerItemCheck>{bCheck && <FiCheck />}</PickerItemCheck>
      <PickerItemLabel backgroundColor={backgroundColor} />
      <PickerItemInfo>
        <div>{labelName}</div>
        <div>{description}</div>
      </PickerItemInfo>
    </PickerListItem>
  );
};

export default ColorPickerItem;

const PickerListItem = styled.div`
  display: flex;
  padding: 8px;
  background-color: #fff;
  :hover {
    background-color: #f5f5f5;
  }
`;

const PickerItemLabel = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => `${props.backgroundColor}`};
  margin-right: 8px;
  border-radius: 3px;
  margin-top: 4px;
`;

const PickerItemCheck = styled.div`
  width: 17px;
  height: 17px;
  margin-left: -2px;
  margin-right: 5px;
  margin-top: 3px;
`;

const PickerItemInfo = styled.div``;
