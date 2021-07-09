import React from 'react';
import {Link} from "react-router-dom"
import './nav.scss';

export default function nav() {
  const TEMPLATE = (
    <nav className='nav'>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
    </nav>
  )
  return TEMPLATE;
}