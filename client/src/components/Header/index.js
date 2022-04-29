// rafce
import React from 'react'
import styled from 'styled-components';
import headerbg from './../../images/bg_header.jpg';

const Header = () => {
  return (
    <MainContainer></MainContainer>
  )
}

export default Header;

// Main container
const MainContainer = styled.header`
    background: url(${headerbg}) no-repeat center/cover;
    height: 100vh;
`;
