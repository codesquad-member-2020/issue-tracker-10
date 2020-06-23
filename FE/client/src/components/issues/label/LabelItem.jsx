import React, { useState } from "react";
import { TableItem, LabelBox } from "@style/CustomStyle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteLabel, editLabel } from "@modules/labels";
import LabelEditor from "./LabelEditor";

const DELETE_CONFIRM_MESSAGE = '"Are you sure? Deleting a label will remove it from all issues and pull requests."';

const LabelItem = (props) => {
  const dispatch = useDispatch();
  const [editIsOpen, setEditIsOpen] = useState(false);

  const [format, setFormat] = useState({ ...props });
  const [snapshot, setSnapShot] = useState({ ...props });

  const { label_id, textColor, backGroundColor, description, MutedLink, labelName } = format;

  const onClickEdit = () => setEditIsOpen(!editIsOpen);
  const onClickDelete = () => window.confirm(DELETE_CONFIRM_MESSAGE) && dispatch(deleteLabel(label_id));
  const EditLabel = (formatState) => dispatch(editLabel(formatState));
  const returnToFormat = (snapshotState) => setFormat({ ...snapshotState });

  return (
    <TableItemLabel>
      <Info>
        <LabelTab>
          <LabelBox textColor={textColor} backgroundColor={backGroundColor}>
            {labelName}
          </LabelBox>
        </LabelTab>
        <DescriptionTab>{!editIsOpen && description}</DescriptionTab>
        <MutedLinkTab>{!editIsOpen && MutedLink}</MutedLinkTab>
        <ButtonTab>
          <Button onClick={onClickEdit}> {!editIsOpen && "Edit"}</Button>
          <Button onClick={onClickDelete}>Delete</Button>
        </ButtonTab>
      </Info>
      {editIsOpen && (
        <LabelEditor
          type="Edit"
          format={format}
          setFormat={setFormat}
          snapshot={snapshot}
          setSnapShot={setSnapShot}
          onCloseEditor={onClickEdit}
          returnToFormat={returnToFormat}
          updateEditor={EditLabel}
        />
      )}
    </TableItemLabel>
  );
};

const TableItemLabel = styled(TableItem)`
  flex-direction: column;
`;

const LabelTab = styled.div`
  width: 25%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DescriptionTab = styled.div`
  width: 33.3333%;
`;

const MutedLinkTab = styled.div`
  width: 25%;
`;

const ButtonTab = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 16.66667%;
`;

const Button = styled.button`
  display: inline-block;
  outline: none;
  font-size: 12px;
  margin-left: 16px !important;
  color: #586069;
  cursor: pointer;

  :hover {
    color: #0366d6;
    text-decoration: underline;
  }
`;

export default LabelItem;
