import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 20px;
  padding: 10px;
  color: white;
  overflow: auto;
  flex-wrap: wrap;

  margin: auto;

  width: 90vw;

  table {
    width: 100%;
    table-layout: fixed;
    min-width: 1200px;
    border-collapse: collapse;
    overflow-x: auto;
  }

  thead,
  th {
    position: sticky;
    top: 0;
    background-color: #2e3035;
    color: #8493a5;
    border-right: 1px solid #201b2c;

    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff;
  }

  th,
  td {
    border-bottom: 1px solid #dddddd;
    padding: 10px 10px;
    word-break: break-all;
    text-align: center;

    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* or 150% */

    color: #aeaeae;
  }

  tr:hover td {
    color: #fae60a;
    cursor: pointer;
    background: #2e3035;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    /* width: 89vw; */
    th,
    td {
      width: 100%;
      text-align: left;
    }
  }
`;

export default Container;
