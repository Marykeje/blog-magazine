import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7929 4.5957V4.59675C15.776 4.62583 12.2955 10.6297 7.95067 17.96C3.59532 25.3081 0 31.1911 0 31.1911L12.3315 31.137L12.3323 31.1369L12.3297 31.1464C18.3172 31.0304 23.7182 27.0939 25.3119 21.1458C25.8102 19.2864 25.8853 17.4147 25.5964 15.626C24.8043 10.3587 20.9149 6.07496 15.7929 4.5957Z"
            fill="black"
          />
          <path
            d="M22.6078 0.80957V0.810614C22.591 0.839693 19.1104 6.84355 14.7656 14.1739C10.4103 21.522 6.81494 27.4049 6.81494 27.4049L19.1464 27.3509L19.1472 27.3507L19.1446 27.3603C25.1321 27.2443 30.5331 23.3078 32.1269 17.3597C32.6251 15.5003 32.7003 13.6286 32.4113 11.8398C31.6192 6.5726 27.7299 2.28883 22.6078 0.80957Z"
            fill="#10F2C5"
          />
        </svg>
        <p>Ddsgnr</p>
      </div>
      <nav className="header__nav-list">
        <ul className="header__nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="">Trending</Link>
          </li>
        </ul>
        <div className="btns">
          <button className="btns btns--log-btn">
            <Link to="">Log in</Link>
          </button>
          <button className="btns btns--started-btn">Get started</button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
