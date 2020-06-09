import React from "react";
import styled from "styled-components";
import { LabelSetWrap, Title, LabelName, Description, ColorPiker, RandomColorButton, ColorSelectTab, LabelSetButtons, SetButtons, CancelButton, SaveButton } from "@style/CustomStyle";
import _ from "@util";
import { BsArrowRepeat } from "react-icons/bs";

const Edit = ({ format, setFormat, snapshot, setSnapShot }) => {
  const { id, textColor, backgroundColor, description, labelName } = format;

  const onChangeLabelName = (e) => {
    if (!e.target.value) {
      setFormat({ ...format, labelName: snapshot.labelName });
    } else {
      setFormat({ ...format, labelName: e.target.value });
    }
  };

  const onClickRandomColor = () => {
    _.pipe(_.createRandomHexColor, updateBackgroundColor, _.changeHexToRgb, _.isDarkColorText)();
  };

  const updateBackgroundColor = (hexColor) => {
    setFormat({ ...format, backgroundColor: hexColor });
    return hexColor;
  };

  const updateLabelColors = (colors) => {
    if (colors.isDark) {
      setFormat({ ...format, textColor: "#000", backgroundColor: colors.hex });
    } else {
      setFormat({ ...format, textColor: "#fff", backgroundColor: colors.hex });
    }
    return;
  };

  return (
    <LabelSetWrap>
      <LabelName>
        <Title>Label name</Title>
        <input type="text" placeholder="Label name" onChange={onChangeLabelName} />
      </LabelName>
      <Description>
        <Title>Description</Title>
        <input type="text" placeholder="Description (optional)" />
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
          <CancelButton>Cancel</CancelButton>
          <SaveButton>Save changes</SaveButton>
        </SetButtons>
      </LabelSetButtons>
    </LabelSetWrap>
  );
};

export default Edit;
