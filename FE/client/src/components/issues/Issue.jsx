import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitIssuesFetch } from "@modules/issues";

const Issue = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitIssuesFetch());
  }, [dispatch]);

  return <div></div>;
};

export default Issue;
