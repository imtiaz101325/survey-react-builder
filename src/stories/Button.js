import React from 'react';

import './Button.css'


const Button = ({ children, onClick }) => (
  <button
    className='Button'
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
