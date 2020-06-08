import styled from "styled-components";

export const TableWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 980px;
`;

export const TableTopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f6f8fa;
  margin: -1px -1px 0;
  padding: 16px;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size: 14px;
`;

export const TableItem = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-top: none;
`;
