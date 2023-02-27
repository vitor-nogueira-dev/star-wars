import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    img {
      width: 800px;
    }
  }
`;
export default Container;
