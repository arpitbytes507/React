import React ,{useState,useContext} from 'react';
import UserContext from "../Context/UserContext";

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', background: '#333', color: '#fff', textAlign: 'center' }}>
      <p>&copy; 2025 My Website</p>
      <div>
        <a href="https://facebook.com" style={{ color: '#fff', marginRight: '1rem' }}>Facebook</a>
        <a href="https://twitter.com" style={{ color: '#fff', marginRight: '1rem' }}>Twitter</a>
        <a href="https://instagram.com" style={{ color: '#fff' }}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
