import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({children}) => {
  return (
    <div>

      { ...children }
    </div>
  )
}

export default Navigation;
