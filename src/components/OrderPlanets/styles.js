import styled from 'styled-components';

const ContainerSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    background-color: green;
  }
`;

const ContainerRadios = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  width: 147px;
  height: 67px;

  label {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .radio-button {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    outline: none;
    transition: border-color 0.2s ease-in-out;
    margin: 5px;

    :hover {
      border: 2px solid #fae60a;
    }

    :checked {
      border-color: #ffffff;
      background-color: #fae60a;
    }
  }
`;

export { ContainerRadios, ContainerSort };
