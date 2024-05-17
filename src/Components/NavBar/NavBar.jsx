import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <span>Text Encryptor</span>
      </div>
      <div className="nav-menu">
        <ul>
          <Link className="navOptions" to={"/"}>
            <li>Home</li>
          </Link>
          <a className="navOptions" href="/#Algorithms">
            <li>Algorithms</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
