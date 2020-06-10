import React from "react";
import styled from "styled-components";
import { LabelSetWrap, Title, LabelName, Description, ColorPiker, RandomColorButton, ColorSelectTab, LabelSetButtons, SetButtons, CancelButton, SaveButton } from "@style/CustomStyle";
import _ from "@util";
import { BsArrowRepeat } from "react-icons/bs";

const Edit = ({ format, setFormat, snapshot, setSnapShot, onCloseEdit }) => {
  const { id, textColor, backgroundColor, description, labelName } = format;

  const onChangeLabelName = (e) => (e.target.value ? setFormat({ ...format, labelName: e.target.value }) : setFormat({ ...format, labelName: snapshot.labelName }));
  const onClickRandomColor = () => _.pipe(_.createRandomRGBColor, _.isDarkColor, updateLabelColors)();
  const onClickCancel = () => onCloseEdit();

  const updateLabelColors = (labelColors) => {
    const { r, g, b, textColor } = labelColors;
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";

    setFormat({ ...format, textColor: textColor, backgroundColor: bgColor });
  };

  return (
    <LabelSetWrap>
      <LabelName>
        <Title>Label name</Title>
        <input type="text" placeholder="Label name" onChange={onChangeLabelName} defaultValue={labelName} />
      </LabelName>
      <Description>
        <Title>Description</Title>
        <input type="text" placeholder="Description (optional)" defaultValue={description} />
      </Description>
      <ColorPiker>
        <Title>Color</Title>
        <ColorSelectTab>
          <RandomColorButton backgroundColor={backgroundColor} color={textColor} onClick={onClickRandomColor}>
            <BsArrowRepeat />
          </RandomColorButton>
          <input type="text" placeholder={backgroundColor} />
        </ColorSelectTab>
      </ColorPiker>
      <LabelSetButtons>
        <SetButtons>
          <CancelButton onClick={onClickCancel}>Cancel</CancelButton>
          <SaveButton>Save changes</SaveButton>
        </SetButtons>
      </LabelSetButtons>
    </LabelSetWrap>
  );
};

export default Edit;
