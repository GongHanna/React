import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/resevation">예매</Link>
        </li>
        <li>
          <Link to="/notice">안내사항</Link>
          </li>
        <li>
          <Link to="/user">회원정보</Link>
          </li>
      </ul>
    </nav>
  );
};

export default GlobalNav;