import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import githubLogo from "@assets/images/github-logo.png";

import HeaderMenuList from "./HeaderMenuList";

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">
        <img src={githubLogo} alt="github-logo" />
      </Link>
      <HeaderMenuList />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  height: 52px;
  background-color: #24292e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-right: 26px;
  padding-left: 26px;
  font-size: 14px;
  font-weight: 600;
  img {
    cursor: pointer;
    width: 32px;
    height: 32px;
    :hover {
      opacity: 0.7;
    }
  }
`;

export default Header;
