import styled from 'styled-components';

const ContainerFilters = styled.div`
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  width: 800px;
  min-height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;
  padding: 5px;

  font-family: "Epilogue";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  margin: 10px;

  div {
    border: 0.5px solid white;

    border-radius: 5px;
    padding: 5px;
  }

  button {
    cursor: pointer;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    text-transform: uppercase;
    background: transparent;
    box-sizing: border-box;

    width: 30px;
    height: 30px;

    border-radius: 5px;
    color: #fae60a;
    border: none;
    outline: none;
    border: 1px solid #fae60a;

    margin: 5px;

    :hover {
      background-color: rgba(0, 0, 0, 0.5);
      transition: 0.1s all ease-in;
      box-shadow: #fae60a 0px 1px 2px, #fae60a 0px 0px 0px 1px;
    }
  }
`;

export default ContainerFilters;
