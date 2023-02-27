import React from 'react';

import Container from './styles';
import logoStarWars from '../../assets/lg.png';

function Header() {
  return (
    <Container>
      <img src={ logoStarWars } alt="" className="logo" />
    </Container>
  );
}

export default Header;
