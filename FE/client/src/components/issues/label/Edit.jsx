import React, { useCallback } from "react";

import { LabelSetWrap, Title, LabelName, Description, ColorPiker, RandomColorButton, ColorSelectTab, LabelSetButtons, SetButtons, CancelButton, SaveButton, ColorError } from "@style/CustomStyle";
import { BsArrowRepeat } from "react-icons/bs";

import debounce from "lodash.debounce";
import _ from "@util";

const Edit = ({ format, setFormat, snapshot, setSnapShot, onCloseEdit }) => {
  const { id, textColor, backgroundColor, description, labelName } = format;

  // debounce
  const debounceLabelName = debounce((value) => updateLabelName(value), 500);

  // pipeline
  const onClickCancel = () => _.pipe(returnToFormatState, onCloseEdit)(snapshot);
  const onChangeLabelName = (e) => _.pipe(setLabelName, debounceLabelName)(e.target.value);
  const onClickRandomColor = () => _.pipe(_.createRandomRGBColor, _.isDarkColor, updateLabelColors)();

  // randomColorPiker Button
  const updateLabelColors = (labelColors) => {
    const { r, g, b, textColor } = labelColors;
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";
    setFormat({ ...format, textColor: textColor, backgroundColor: bgColor });
  };

  // LabelName input
  const setLabelName = (value) => (value !== "" ? value : snapshot.labelName);
  const updateLabelName = (value) => setFormat({ ...format, labelName: setLabelName(value) });

  // Color Select input

  // Cancel Button
  const returnToFormatState = (snapshotState) => setFormat({ ...snapshotState });

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
          <input type="text" className="colorInput" placeholder={backgroundColor} maxLength={7} />
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
