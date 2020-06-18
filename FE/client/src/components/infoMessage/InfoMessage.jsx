import React from "react";

import styled from "styled-components";
import { TableItem } from "@style/CustomStyle";
import githubCharacter from "@assets/images/github-character.jpg";

const InfoMessage = ({ title, content }) => {
  return (
    <InfoMessageItem>
      <img src={githubCharacter} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </InfoMessageItem>
  );
};

const InfoMessageItem = styled(TableItem)`
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
    height: 300px;
  }
  div {
    margin-top: 16px;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    font-size: 16px;
  }
`;

export default InfoMessage;
