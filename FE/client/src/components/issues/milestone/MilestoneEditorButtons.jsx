import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LabelSetButtons, SetButtons, CancelButton, SaveButton } from "@style/CustomStyle";

const MilestoneEditorButtons = ({ milestone, handleSubmit, onSubmit }) => {
  return (
    <MilestoneEditorButtonsWrap>
      {milestone ? (
        <LabelSetButtons className="button-wrap">
          <SetButtons>
            <CancelButton className="button">
              <Link to="/milestones">Cancel</Link>
            </CancelButton>
            <CancelButton className="button">Close milestone</CancelButton>
            <SaveButton className="button" type="submit">
              Save changes
            </SaveButton>
          </SetButtons>
        </LabelSetButtons>
      ) : (
        <LabelSetButtons className="button-wrap">
          <SetButtons>
            <SaveButton className="button">Create milestone</SaveButton>
          </SetButtons>
        </LabelSetButtons>
      )}
    </MilestoneEditorButtonsWrap>
  );
};

const MilestoneEditorButtonsWrap = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  .button-wrap {
    width: 100%;
    margin-top: 0;
  }
  .button {
    cursor: pointer;
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

export default MilestoneEditorButtons;
