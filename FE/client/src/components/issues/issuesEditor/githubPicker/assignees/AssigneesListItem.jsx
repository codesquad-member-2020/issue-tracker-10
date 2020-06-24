import React from "react";
import styled from "styled-components";

const AssigneesListItem = (props) => {
  const { name, url } = props;

  return (
    <AssigneesListItemWrap>
      <img src={url} />
      <span>{name}</span>
    </AssigneesListItemWrap>
  );
};

const AssigneesListItemWrap = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0.15em 4px;
  margin-top: 3px;
  font-weight: 550;
  line-height: 15px;
  border-radius: 2px;
  margin-bottom: 3px;
  color: #000;
  img {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    margin-right: 4px;
  }
`;

export default AssigneesListItem;
