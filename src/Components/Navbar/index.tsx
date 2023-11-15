import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const handleToggle = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <>
      {hamburgerToggle && (
        <div id="nav-links-burger">
          <Link to="/" className="nav-link">
            <p>// home</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p>// about</p>
          </Link>
          <Link to="/projects" className="nav-link">
            <p>// projects</p>
          </Link>
          <Link to="/resume" className="nav-link">
            <p>// resume</p>
          </Link>
          <Link to="/contact" className="nav-link">
            <p>// contact</p>
          </Link>
        </div>
      )}

      <nav>
        <button id="nav-button" onClick={handleToggle}>
          {hamburgerToggle
            ? String.fromCharCode(215)
            : String.fromCharCode(9776)}
        </button>
        <div id="nav-links">
          <Link to="/" className="nav-link">
            <p className="nav-number">01</p>
            <p>// home</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p className="nav-number">02</p>
            <p>// about</p>
          </Link>
          <Link to="/projects" className="nav-link">
            <p className="nav-number">03</p>
            <p>// projects</p>
          </Link>
          <Link to="/resume" className="nav-link">
            <p className="nav-number">04</p>
            <p>// resume</p>
          </Link>
          <Link to="/contact" className="nav-link">
            <p className="nav-number">05</p>
            <p>// contact</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
