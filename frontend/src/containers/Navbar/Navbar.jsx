import React from "react";
import LogoArgentBank from "/img/argentBankLogo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img
          src={LogoArgentBank}
          className="Navbar__img"
          alt="Cet élément représente le Logo de l'application web Argent Bank"
        />
      </Link>
      <div className="Navbar__right">
        <i className="fa-solid fa-circle-user Navbar__icon"></i>
        <Link to={"/signin"} className="Navbar__paragraphe">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
