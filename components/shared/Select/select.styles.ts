import styled from "styled-components";

export const SelectContent = styled.select<{
  width: number;
}>`
  width:  ${(props) => props.width}px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #D1D5DB;
  border-radius: 4px 0px 0px 4px;
  padding: 8px 12px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;