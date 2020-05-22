import React from "react"

const Navbar = () => {
  return (
    <>
      <header>
        <a href="https://www.uequations.com">
          <h4 className="logo">UNIVERSAL EQUATIONS</h4>
        </a>
        <nav>
          <ul>
            <li><a href="https://www.uequations.com">HOME</a></li>
            <li><a href="https://www.uequations.com/about-us">ABOUT</a></li>
            <li><a href="https://sales.uequations.com/contact-us-general-inquiry/">CONTACT</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
