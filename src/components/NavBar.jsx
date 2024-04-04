import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/tasks"}>
        Tasks
      </Link>
    </div>
  );
}

export default NavBar;
