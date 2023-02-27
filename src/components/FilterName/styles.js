import styled from 'styled-components';

const SearchName = styled.input`
  /* width: 671px; */
  height: 42px;

  width: 60vw;

  background: transparent;

  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;

  padding: 20px;
  margin: 20px;

  color: white;

  :hover {
    border: 1px solid #fae60a;
  }
  :focus {
    border: 1px solid #fae60a;
  }

  @media screen and (max-width: 768px) {
    width: 82vw;

    height: 42px;
  }
`;
const Table = styled.table``;

export { SearchName, Table };
