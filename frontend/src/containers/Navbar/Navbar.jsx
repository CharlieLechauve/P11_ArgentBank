import React , { useEffect }from "react";
import LogoArgentBank from "/img/argentBankLogo.webp";
import { Link, NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { loadProfile } from "../../redux/api";

const Navbar = () => {

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect (() => {
    if (token) {
      dispatch (loadProfile(token))
    }

  }, [dispatch, token]);

  return (
    <header>
      <nav className="Navbar">
        <Link to="/">
          <img
            src={LogoArgentBank}
            className="Navbar__img"
            alt="Argent Bank logo"
          />
        </Link>
        <div className="Navbar__right">
          
          {token ? (

            <>
            <NavLink to='/user' className="Navbar__paragraphe">
            <i className="fa fa-user-circle Navbar__icon"></i>
            {user?.userName}
            </NavLink> 

            <NavLink to ='/' className="Navbar__paragraphe" onClick={handleLogout}>
              <i className="fa fa-sign-out Navbar__icon"></i>
              Sign Out
            </NavLink>  
            </>

          ) : (

            <div>
            <i className="fa-solid fa-circle-user Navbar__icon"></i>
            <Link to={"/signin"} className="Navbar__paragraphe">
              Sign In
            </Link>
            </div>
          )}
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;