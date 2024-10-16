import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburger = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="logo">
              <h1>Cloud Guard</h1>
            </div>
            <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="hamburger">
              <button onClick={handleHamburger}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
