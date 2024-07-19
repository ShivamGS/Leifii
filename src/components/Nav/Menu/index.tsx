import { Link } from "react-router-dom";
import { TransitionLink } from "../../Links/TransitionLink/index.tsx";
import "./Menu.css";
import classnames from "classnames";
import { useEffect, useState } from "react";
import React from "react";

interface Props {
  isMenuOpened: boolean;
  handleMenuOpen: () => void;
}

export const Menu = ({ isMenuOpened, handleMenuOpen }: Props) => {
  // const links =
  //   "Linkedin",
  //   "Behance",
  //   "Dribble",
  //   "Instagram",
  //   "Youtube",
  //   "Twitter",
  //   "Github",
  // ;
  const links2 = ["About", "Services", "Careers", "Contact", "Influencer"];

  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    checkTouchScreen();
    window.addEventListener("resize", checkTouchScreen);
  }, [isTouchScreen]);

  function checkTouchScreen() {
    if (window.matchMedia("(pointer: coarse)").matches) {
      console.log("Is touch screen");
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }

  return (
    <div
      className={`${"navbar-menu"} ${isMenuOpened ? "menu-open" : ""} ${
        isTouchScreen ? "full-width" : ""
      }`}
    >
      <div className={"navbar-menu__overlay"} onClick={handleMenuOpen}></div>
      <div className={"navbar-menu__content"}>
        <div className={"navbar-menu__content-wrapper"}>
          <div className={"navbar-menu__links"}>
            {/* <div className={"navbar-menu__links-left"}>
              <p className={"navbar-menu__title"}>Socials</p>
              <div className={"navbar-menu__links-list"}>
                {links.map((link) => (
                  <TransitionLink link={link} size="sm" />
                ))}
              </div>
            </div> */}
            <div className={"navbar-menu__links-right"}>
              <p className={"navbar-menu__title"}>Menu</p>
              <div className={"navbar-menu__links-list"}>
                {links2.map((link) => (
                  <TransitionLink link={link} size="lg" key={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"navbar-menu__contact"}>
          <p className={"navbar-menu__title"}>Get in touch</p>
          <a href="/">leifidesignconsultancy@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
