import React from "react";

import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const AssigneesModalItem = (props) => {
  const { id, username, user_image, bCheck, onClickModalItem } = props;
  return (
    <AssigneesModalItemWrap key={id} onClick={() => onClickModalItem(id)}>
      <PickerItemCheck>{bCheck && <FiCheck />}</PickerItemCheck>
      <img src={user_image} />
      <span>{username}</span>
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
