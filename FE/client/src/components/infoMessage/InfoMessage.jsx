import React from "react";

import styled from "styled-components";
import { TableItem } from "@style/CustomStyle";
import githubCharacter from "@assets/images/github-character.jpg";

import { NO_LABEL_TITLE, NO_LABEL_CONTENT } from "@components/issues/label/labelConstant";

const InfoMessage = () => {
  return (
    <InfoMessageItem>
      <img src={githubCharacter} alt="" />
      <div className="title">{NO_LABEL_TITLE}</div>
      <div className="content">{NO_LABEL_CONTENT}</div>
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
