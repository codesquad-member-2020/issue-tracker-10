import React from "react";

import styled from "styled-components";
import { LabelSetWrap, Title, LabelName, Description, ColorPiker, RandomColorButton, ColorSelectTab, LabelSetButtons, SetButtons, CancelButton, SaveButton } from "@style/CustomStyle";
import { BsArrowRepeat } from "react-icons/bs";

import debounce from "lodash.debounce";
import _ from "@util";

const Edit = ({ format, setFormat, snapshot, setSnapShot, onCloseEdit }) => {
  const { id, textColor, backgroundColor, description, labelName } = format;

  const debounceLabelName = debounce((value) => updateLabelName(value), 500);

  const onClickRandomColor = () => _.pipe(_.createRandomRGBColor, _.isDarkColor, updateLabelColors)();
  const onChangeLabelName = (e) => _.pipe(setLabelName, debounceLabelName)(e.target.value);
  const onClickCancel = () => onCloseEdit();

  const updateLabelColors = (labelColors) => {
    const { r, g, b, textColor } = labelColors;
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";

    setFormat({ ...format, textColor: textColor, backgroundColor: bgColor });
  };

  const setLabelName = (value) => (value !== "" ? value : snapshot.labelName);
  const updateLabelName = (value) => setFormat({ ...format, labelName: setLabelName(value) });

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
          <RandomColorButton backgroundColor={backgroundColor} color={textColor} onClick={() => debounce(onClickRandomColor, 200)()}>
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
