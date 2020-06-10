import React, { useState } from "react";
import { TableItem } from "@style/CustomStyle";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteLabel } from "@modules/label/labelAction";
import Edit from "./Edit";

const DELETE_CONFIRM_MESSAGE = '"Are you sure? Deleting a label will remove it from all issues and pull requests."';

const LabelItem = (props) => {
  const dispatch = useDispatch();
  const [editIsOpen, setEditIsOpen] = useState(false);

  const [format, setFormat] = useState({ ...props });
  const [snapshot, setSnapShot] = useState({ ...props });

  const { id, textColor, backgroundColor, description, MutedLink, labelName } = format;

  const onClickEdit = () => {
    setEditIsOpen(!editIsOpen);
  };

  const onClickDelete = () => {
    if (window.confirm(DELETE_CONFIRM_MESSAGE)) dispatch(deleteLabel(id));
  };

  return (
    <TableItemLabel>
      <Info>
        <LabelTab>
          <Label textColor={textColor} backgroundColor={backgroundColor}>
            {labelName}
          </Label>
        </LabelTab>
        <DescriptionTab>{!editIsOpen && description}</DescriptionTab>
        <MutedLinkTab>{!editIsOpen && MutedLink}</MutedLinkTab>
        <ButtonTab>
          <Button onClick={onClickEdit}> {!editIsOpen && "Edit"}</Button>
          <Button onClick={onClickDelete}>Delete</Button>
        </ButtonTab>
      </Info>
      {editIsOpen && <Edit format={format} setFormat={setFormat} snapshot={snapshot} setSnapShot={setSnapShot} onCloseEdit={onClickEdit} />}
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
