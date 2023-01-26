import { Link } from "react-router-dom";

const NavView = () => {
  return (
    <header>
      <p>Logo</p>
      <nav>
        <li>
          <Link to={"/"}>Main page</Link>
        </li>
      </nav>
    </header>
  );
};

export default NavView;
