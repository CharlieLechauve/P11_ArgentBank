import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <main className="Signin">
        <section className="Signin__form">
          <i className="fa fa-user-circle Signin__icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="Signin__wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="Signin__wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="Signin__remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="Signin__btn">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
