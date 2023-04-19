import { Link } from "react-router-dom";

const NavView = () => {
  return (
    <header>
      <h4>Digital Organizer</h4>
      <nav>
        <li>
          <Link to={"/"}>Entries</Link>
          <Link to={"/about"}>About</Link>
        </li>
      </nav>
    </header>
  );
};

export default NavView;
