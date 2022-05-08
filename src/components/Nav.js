import React, { useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  
    return () => {
      // window.removeEventListener("scroll");
    }
  }, [])
  
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img className='nav-logo' alt='Netflix' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'></img>
      <img className='nav-avatar' alt='Pasquadev' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
    </div>
  ); 
}

export default Nav;