import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';

const Footer = (props) => {
  const [theme] = useContext(ThemeContext);
  return (
    <footer className={theme}>
      <p>All rights reserved</p>
    </footer>
  );
}

export default Footer;
