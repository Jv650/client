import { Link } from "react-router-dom";
//bootsrap
//import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          <ul>
            <ul className="header--signedin">
              <li>Welcome, </li>
              <li>
                <Link to="/signout">Sign Out</Link>
              </li>
            </ul>
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
