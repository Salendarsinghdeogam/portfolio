import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrollNav ? "scroll-header" : ""}`}>
      <nav className='nav container'>
        <a href="index.html" className="nav__logo">Salendar Singh</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { id: "#home", label: "Home", icon: "uil-estate" },
              { id: "#about", label: "About", icon: "uil-user" },
              { id: "#skills", label: "Skills", icon: "uil-file-alt" },
              { id: "#services", label: "Services", icon: "uil-briefcase-alt" },
              // { id: "#portfolio", label: "Project", icon: "uil-scenery" },
              { id: "#contact", label: "Contact", icon: "uil-message" },
            ].map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`nav__link ${activeNav === item.id ? "active-link" : ""}`}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
