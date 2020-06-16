import React from "react";
import styled from "styled-components";

const ColorPickerItem = (props) => {
  const { backgroundColor, labelName, description } = props;

  return (
    <PickerListItem>
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
