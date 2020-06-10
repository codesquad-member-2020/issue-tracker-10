import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMenuList = () => {
  return (
    <HeaderMenuListWrap>
      <Link to="/">Issues</Link>
      <Link to="/labels">Labels</Link>
      <Link to="/milestones">Milestones</Link>
    </HeaderMenuListWrap>
  );
};

const HeaderMenuListWrap = styled.div`
  display: flex;
  & > * {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-right: 25px;
    :last-child {
      margin: 0;
    }
    :hover {
      color: hsla(0, 0%, 100%, 0.7);
    }
  }
`;

export default HeaderMenuList;
