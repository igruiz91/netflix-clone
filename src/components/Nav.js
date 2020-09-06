import React, { useEffect, useState } from "react";
import "./Nav.css";



function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY>100){
        setShow(true);
      }else setShow(false);
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://duckduckgo.com/i/0697e8c5.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="User Avatar"
      />
    </div>
  );
}

export default Nav;
