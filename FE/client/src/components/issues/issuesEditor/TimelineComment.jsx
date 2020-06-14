import React from "react";
import styled from "styled-components";

const TimelineComment = ({ children, userImage }) => {
  return (
    <TimelineCommentBox>
      <img src={userImage} alt="user-image" />
      <div className="arrow_box">{children}</div>
    </TimelineCommentBox>
  );
};

const TimelineCommentBox = styled.div`
  width: 75%;
  padding: 0 16px 0 16px;
  img {
    float: left;
    margin-left: -56px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }
  .arrow_box {
    position: relative;
    border: 1px solid #d1d5da;
    border-radius: 3px;
  }
  .arrow_box:after,
  .arrow_box:before {
    position: absolute;
    top: 11px;
    right: 100%;
    left: -16px;
    display: block;
    width: 0;
    height: 0;
    pointer-events: none;
    content: " ";
    border-color: transparent;
    border-style: solid solid outset;
  }

  .arrow_box:after {
    margin-top: 1px;
    margin-left: 2px;
    border-width: 7px;
    border-right-color: #fff;
  }
  .arrow_box:before {
    border-width: 8px;
    border-right-color: #d1d5da;
  }
`;

export default TimelineComment;
