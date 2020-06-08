import React from "react";
import { TableItem } from "@style/CustomStyle";
import styled from "styled-components";

const LabelItem = ({ textColor, backgroundColor, description, MutedLink, labelName }) => {
  return (
    <TableItem>
      <LabelTab>
        <Label textColor={textColor} backgroundColor={backgroundColor}>
          {labelName}
        </Label>
      </LabelTab>
      <DescriptionTab>{description && description}</DescriptionTab>
      <MutedLinkTab>{MutedLink && MutedLink}</MutedLinkTab>
      <ButtonTab></ButtonTab>
    </TableItem>
  );
};

const LabelTab = styled.div`
  width: 25%;
`;

const Label = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 3px;
  color: ${(props) => `${props.textColor}`};
  background-color: ${(props) => `${props.backgroundColor}`};
`;

const DescriptionTab = styled.div`
  font-size: 12px;
  color: #586069 !important;
  width: 33.3333%;
`;

const MutedLinkTab = styled.div`
  font-size: 12px;
  color: #586069 !important;
  width: 25%;
`;

const ButtonTab = styled.div`
  font-size: 12px;
  color: #586069 !important;
  width: 16.66667%;
`;

export default LabelItem;
