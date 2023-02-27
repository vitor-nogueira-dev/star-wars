import styled from 'styled-components';

const Forms = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 1180px;

  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  padding: 10px;
  margin: 10px;

  input[type="number"] {
    width: 91px;
    height: 42px;
    border: none;
    border-radius: 10px;
    border: 1px solid #ffffff;
    padding: 15px;
    background: transparent;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
    :hover {
      border: 1px solid #fae60a;
    }
    :focus {
      border: 1px solid #fae60a;
    }
  }

  select {
    width: 150px;
    height: 40px;
    border: none;
    background-color: transparent;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    /* border-radius: 5px; */
    border-bottom: 1px solid #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    :hover {
      background-color: transparent;
      border-bottom: 1px solid #fae60a;
    }
    :focus {
      outline: none;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid #fae60a;
    }
  }

  @media screen and (max-width: 834px) {
    width: 1180px;

    display: flex;
    justify-content: center;
    margin-left: 5px;

    select {
      margin: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 85vw;

    display: flex;
    justify-content: center;
    margin-left: 5px;

    select {
      margin: 3px;
    }
  }
`;
const Button = styled.button`
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  text-transform: uppercase;
  background: transparent;
  box-sizing: border-box;

  /* background-color: red; */

  width: 91px;
  height: 85px;

  border-radius: 5px;
  color: #fae60a;
  border: none;
  outline: none;
  border: 1px solid #fae60a;

  margin: 10px;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.1s all ease-in;
    box-shadow: #fae60a 0px 1px 3px, #fae60a 0px 0px 0px 2px;
  }

  @media screen and (max-width: 768px) {
    width: 85px;
    height: 65px;
  }
`;

const ContainerFilters = styled.div`
  border: 0.5px solid white;
  border-radius: 5px;
  width: 800px;

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

  display: flex;
  align-items: center;

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
    }
  }
`;

export { Forms, Button, ContainerFilters };
