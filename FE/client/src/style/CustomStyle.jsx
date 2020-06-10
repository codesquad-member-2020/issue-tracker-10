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
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-top: none;
`;

export const LabelSetWrap = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: -8px;
  display: flex;

  input {
    width: 100%;
    padding: 6px 8px;
    font-size: 14px;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
    background-color: #fafbfc;
    min-height: 32px;
  }
`;

export const Title = styled.div`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const LabelName = styled.div`
  width: 25%;
  margin: 15px 0;
  padding-right: 16px;
`;

export const Description = styled.div`
  width: 33.3333%;
  margin: 15px 0;
  padding-right: 16px;
`;

export const ColorPiker = styled.div`
  width: 20%;
  margin: 15px 0;
  padding-right: 16px;
`;

export const ColorSelectTab = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  input {
    width: 75%;
  }
`;

export const RandomColorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: bold;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background-color: ${(props) => `${props.backgroundColor}`};
  color: ${(props) => `${props.color}`};
`;

export const LabelSetButtons = styled.div`
  width: 21.66667%;
  margin-left: 32px;
  margin: 15px 0;
  height: 32px;

  button {
    height: 32px;
    border-radius: 3px;
    padding: 7px 12px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(27, 31, 35, 0.2);
    outline: none;

    :hover {
      text-decoration: none;
      background-repeat: repeat-x;
      opacity: 0.7;
    }
  }
`;
export const SetButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
`;

export const CancelButton = styled.button`
  color: #000;
  background-color: #e6ebf1;
  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
  margin-right: 2px;
`;

export const SaveButton = styled.button`
  color: #fff;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
`;

export const TableHeaderButton = styled.button`
  height: 32px;
  border-radius: 3px;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(27, 31, 35, 0.2);
  outline: none;
  color: #fff;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);

  :hover {
    text-decoration: none;
    background-repeat: repeat-x;
    opacity: 0.7;
  }
`;
