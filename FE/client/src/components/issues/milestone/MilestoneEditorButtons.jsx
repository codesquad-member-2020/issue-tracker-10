import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LabelSetButtons, SetButtons, CancelButton, SaveButton } from "@style/CustomStyle";

const MilestoneEditorButtons = ({ milestone }) => {
  return (
    <MilestoneEditorButtonsWrap>
      {milestone ? (
        <LabelSetButtons className="button-wrap">
          <SetButtons>
            <CancelButton className="button">
              <Link to="/milestones">Cancel</Link>
            </CancelButton>
            <SaveButton className="button">Save changes</SaveButton>
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
  display: flex;
  justify-content: flex-end;
  .button-wrap {
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
