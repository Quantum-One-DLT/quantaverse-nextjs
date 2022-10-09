import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      SEC CIK 0001912440  <a href="https://quantumone.network">Quantum One DAO</a>
    </p>
  </footer>
);

export default Footer;
