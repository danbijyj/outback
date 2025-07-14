import { Link } from 'react-router-dom';
import { NavStyle } from './style';

const Nav = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/photo">Menu</Link>
        </li>
        <li>
          <Link to="/board">Board</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
