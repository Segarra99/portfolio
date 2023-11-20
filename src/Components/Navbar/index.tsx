import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./index.css";

// require icon
const icon = require("../../assets/images/codeIcon.png");

function Navbar() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const handleToggle = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (
      burgerMenuRef.current &&
      !burgerMenuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setHamburgerToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        id="nav-links-burger"
        ref={burgerMenuRef}
        className={hamburgerToggle ? "slide-in" : "slide-out"}
      >
        <NavLink to="/" className="nav-link" onClick={handleToggle} >
          <p>// home</p>
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={handleToggle}>
          <p>// about</p>
        </NavLink>
        <NavLink to="/projects" className="nav-link" onClick={handleToggle}>
          <p>// projects</p>
        </NavLink>
        <NavLink to="/resume" className="nav-link" onClick={handleToggle}>
          <p>// resume</p>
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={handleToggle}>
          <p>// contact</p>
        </NavLink>
      </div>

      <nav>
        <button
          id="nav-button"
          onClick={handleToggle}
          className="button-icon"
          ref={buttonRef}
        >
          <img src={icon} alt="icon" />
        </button>
        <div id="nav-links">
          <NavLink to="/" className="nav-link">
            <p className="nav-number">01</p>
            <p>// home</p>
          </NavLink>
          <NavLink to="/about" className="nav-link">
            <p className="nav-number">02</p>
            <p>// about</p>
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            <p className="nav-number">03</p>
            <p>// projects</p>
          </NavLink>
          <NavLink to="/resume" className="nav-link">
            <p className="nav-number">04</p>
            <p>// resume</p>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <p className="nav-number">05</p>
            <p>// contact</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
