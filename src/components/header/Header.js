import React from 'react';
import { Link } from "gatsby";
import './Header.css';

export default (props) => {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </nav>
    { props.children }
    </div>
  )
}