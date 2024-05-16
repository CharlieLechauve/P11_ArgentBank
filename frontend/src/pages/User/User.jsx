import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import { loadProfile } from "../../redux/api";

const User = () => {

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  useEffect(() => {
    if (token) {
      loadProfile(dispatch, token);
    }
  }, [dispatch, token, user.userName]);

  
  return (
    <div>
      <Navbar />
      <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          {user && user.userName}
          </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
      <Footer />
    </div>
  );
};

export default User;
