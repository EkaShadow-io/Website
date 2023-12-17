
"use client"
import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";
import Logo from "./Logo";
import NavItem from "./navItems";
import navbarlogo from "../../../../assets/navbarlogo.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Our Vision", href: "/ourvision" },
  { text: "Our Mission", href: "/ourmission" },
  { text: "Community", href: "/community" },
  { text: "Launch", href: "/Launch" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a className="logo-box">
            <Image
              className="navbar-logo"
              src={navbarlogo}
              width="0"
              height="0" />
            <h1 className="logo">EkaShadow</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;