import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import _ from "@util";

const Login = () => {
  // 개발 단계 테스트용 임시 로그인 cookie
  const tempSetCookie = () => _.setCookie("token", "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJib2h5ZW9uIn0.O8r-57BdLFt36x9ECcYOBgK9lR0OlApJoa7Um728e1JoFCUxBrg5GzUMJlVGNnLKJBuHT5D8ZslKaMcProVHrA", 14);

  return (
    <LoginButtonWrap>
      <LoginButton onClick={tempSetCookie}>
        <Link to="/issues">
          Sign in with GitHub
          <AiFillGithub className="github-logo" />
        </Link>
        <a href="http://52.79.207.15:8080/github-login">
          Sign in with GitHub
          <AiFillGithub className="github-logo" />
        </a>
      </LoginButton>
    </LoginButtonWrap>
  );
};

const LoginButtonWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled.div`
  cursor: pointer;
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  background-color: #a0a0a0;
  .github-logo {
    margin-left: 10px;
    font-size: 30px;
    vertical-align: middle;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  :hover {
    opacity: 0.7;
  }
`;

export default Login;
