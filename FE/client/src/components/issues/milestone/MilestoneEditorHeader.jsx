import React from "react";

import SwitchButtons from "@component/table/SwitchButtons";

const MilestoneEditorHeader = ({ milestone }) => {
  return (
    <>
      {milestone ? (
        <SwitchButtons type="milestones" />
      ) : (
        <div>
          <h1 className="page-title">New Milestone</h1>
          <p className="page-description">
            Create a new milestone to help organize your issues and pull requests. Learn more about
            <a href="https://guides.github.com/features/issues/" target="_blank">
              milestones and issues.
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default MilestoneEditorHeader;
