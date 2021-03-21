import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: #009879;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TopRow = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
`;

export const ColHeader = styled.th`
  padding: 12px 15px;
`;

export const Row = styled.tr`
  border-bottom: thin solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
  &:active-row {
    font-weight: bold;
    color: #009879;
  }
`;

export const Cell = styled.td`
  padding: 12px 15px;
`;
