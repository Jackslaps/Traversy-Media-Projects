import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      {/* VV This resets the state and doesnt allow the search to persist when switching pages */}
      {/* <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul> */}
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
// You can set static default props if there arent any special classNames being passed down from App.js.
// If someone passes props down through <Navbar /> in App.js, the default props will get overwritten.

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;

