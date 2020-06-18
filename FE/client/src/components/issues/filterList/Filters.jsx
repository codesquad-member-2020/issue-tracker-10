import React from "react";
import styled from "styled-components";

const FiltersFilter = () => {
  return (
    <FiltersFilterWrap>
      <li>Open issues</li>
      <li>Your issues</li>
      <li>Everything assigned to you</li>
      <li>Everything mentioning you</li>
      <li>Closed issues</li>
    </FiltersFilterWrap>
  );
};

const FiltersFilterWrap = styled.ul`
  li {
    cursor: pointer;
    background-color: #fff;
    padding: 8px 10px;
    border-bottom: 1px solid #dfe2e5;
    font-size: 14px;
    :last-child {
      border: none;
    }
  }
`;

export default FiltersFilter;
