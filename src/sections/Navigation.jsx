import { useEffect, useState } from "react";

import { navLinks } from "../constants/index";
import { isMobileBrowser } from "../utils/isMobileBrowser";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="fixed left-0 right-0 z-50 bg-black/90 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Hridyanshu
          </a>
          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? `${import.meta.env.BASE_URL}assets/close.svg` : `${import.meta.env.BASE_URL}assets/menu.svg`}
              alt="toggle"
              className="h-6 w-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavList />
          </nav>
        </div>
      </div>

      {/* mobile nav */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavList />
        </nav>
      </div>
    </header>
  );
}

function NavList() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileBrowser());
  }, []);

  const displayLinks = isMobile
    ? navLinks.filter((link) => link.name !== "Skills")
    : navLinks;

  return (
    <ul className="nav-ul">
      {displayLinks.map((link) => (
        <NavItem key={link.id} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </ul>
  );
}

function NavItem({ children, href }) {
  return (
    <li className="nav-li">
      <a href={href} className="nav-li_a">
        {children}
      </a>
    </li>
  );
}
