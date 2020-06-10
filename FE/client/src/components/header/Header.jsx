import React from "react";
import styled from "styled-components";
import githubLogo from "@assets/images/github-logo.png";

const Header = () => {
  return (
    <HeaderWrap>
      <img src={githubLogo} alt="github-logo" />
      <HeaderMenuList>
        <div>Issues</div>
        <div>Labels</div>
        <div>Milestones</div>
      </HeaderMenuList>
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

const HeaderMenuList = styled.div`
  display: flex;
  & > * {
    cursor: pointer;
    margin-right: 15px;
    :last-child {
      margin: 0;
    }
    :hover {
      color: hsla(0, 0%, 100%, 0.7);
    }
  }
`;

export default Header;
