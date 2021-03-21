import styled from "styled-components";

const green = '#009879';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: ${green};
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
  background-color: ${green};
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
    border-bottom: 2px solid ${green};
  }
  &:active-row {
    font-weight: bold;
    color: ${green};
  }
`;

export const Cell = styled.td`
  padding: 12px 15px;
`;

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${green};
    border-color: ${green} transparent ${green} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
