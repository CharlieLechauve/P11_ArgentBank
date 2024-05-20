import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import { loadProfile } from "../../redux/api";

import Transaction from "../../components/Transactions/Transactions"

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
      <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user && user.userName}
          </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      
      <Transaction title = 'Argent Bank Checking (x8349)' amount ='$2,082.79' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Savings (x6712)' amount ='$10,928.42' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Credit Card (x8349)' amount ='$184.30' description ='Current Balance'/> 

    </main>
      <Footer />
    </div>
  );
};

export default User;
