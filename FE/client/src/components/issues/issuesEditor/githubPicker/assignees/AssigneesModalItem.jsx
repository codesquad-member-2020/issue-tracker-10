import React from "react";

import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const AssigneesModalItem = (props) => {
  const { user_id, name, url, bchecked, onClickModalItem } = props;

  return (
    <AssigneesModalItemWrap key={user_id} onClick={() => onClickModalItem(user_id)}>
      <PickerItemCheck>{bchecked && <FiCheck />}</PickerItemCheck>
      <img src={url} />
      <span>{name}</span>
    </AssigneesModalItemWrap>
  );
};

const AssigneesModalItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  color: #586069;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    margin-right: 4px;
  }
`;

const PickerItemCheck = styled.div`
  width: 17px;
  height: 17px;
  margin-left: -2px;
  margin-right: 5px;
  margin-top: 3px;
`;

export default AssigneesModalItem;
