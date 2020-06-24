import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { putEditMilestone, postMilestone } from "@modules/milestones";

import TableHeader from "@components/table/TableHeader";
import MilestoneEditorHeader from "./MilestoneEditorHeader";
import MilestoneEditorButtons from "./MilestoneEditorButtons";

const MilestoneEditor = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [dueDate, setDueDate] = useState(null);
  const { register, handleSubmit } = useForm();
  const { milestonesList } = useSelector(({ milestones }) => milestones);
  const [milestone] = id ? milestonesList.filter((milestone) => milestone.milestone_id === +id) : [id];

  const handleDueDate = ({ target }) => setDueDate(target.value);
  const onSubmit = (data) => {
    data["dueDate"] = dueDate ? moment(dueDate).format("YYYY-MM-DD") : "";
    if (id) dispatch(putEditMilestone(id, data));
    else dispatch(postMilestone(data));
    history.push("/milestones");
  };

  useEffect(() => {
    if (milestone) setDueDate(moment(milestone.dueDate).format("YYYY-MM-DD"));
  }, [milestone]);

  const leftSideComponent = <MilestoneEditorHeader {...{ milestone }} />;

  return (
    <MilestoneEditorWrap>
      <MilestoneEditorInner>
        <TableHeader leftSideComponent={leftSideComponent} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="editor-item-wrap">
            <label className="editor-item-label" htmlFor="milestones-title">
              Title
            </label>
            <input type="text" id="milestones-title" placeholder="Title" defaultValue={milestone && milestone.title} name="title" ref={register} />
          </div>
          <div className="editor-item-wrap">
            <label className="editor-item-label" htmlFor="milestones-due-date">
              Due Date (optional)
            </label>
            <TextField id="milestones-due-date" type="date" defaultValue={milestone && moment(milestone.dueDate).format("YYYY-MM-DD")} onChange={handleDueDate} />
          </div>
          <div className="editor-item-wrap">
            <label className="editor-item-label" htmlFor="milestones-description">
              Description (optional)
            </label>
            <textarea id="milestones-description" defaultValue={milestone && milestone.description} name="description" ref={register} />
          </div>
          <MilestoneEditorButtons {...{ milestone, handleSubmit, onSubmit }} />
        </form>
      </MilestoneEditorInner>
    </MilestoneEditorWrap>
  );
};

const MilestoneEditorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
`;

const MilestoneEditorInner = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  width: 980px;
  form {
    position: relative;
    padding-top: 20px;
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid #c2c2c2;
  }
  .editor-item-label {
    letter-spacing: -0.03rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .editor-item-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  #milestones-title,
  #milestones-due-date,
  #milestones-description {
    width: 400px;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
    padding: 4px 10px;
    height: 25px;
    font-size: 15px;
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: content-box;
    :focus {
      background-color: #fff;
      border-color: #2188ff;
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
    }
  }
  #milestones-description {
    width: 550px;
    margin: 0;
    min-height: 200px;
    max-width: 980px;
  }
  .MuiInput-underline {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export default MilestoneEditor;
