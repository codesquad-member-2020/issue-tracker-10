import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitIssues } from "@modules/issues";

const Issue = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitIssues());
  }, [dispatch]);

  return <div></div>;
};

export default Issue;
