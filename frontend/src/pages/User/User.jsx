import React from "react";

import Navbar from "../../containers/Navbar/Navbar";
import Account from "../../containers/Account/Account";
import Transaction from "../../components/Transactions/Transactions"
import Footer from "../../containers/Footer/Footer";

function User () {
  return (
    <>
      <Navbar />
    
      <main className='bg-dark'>
      <Account />  
      <Transaction title = 'Argent Bank Checking (x8349)' amount ='$2,082.79' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Savings (x6712)' amount ='$10,928.42' description ='Available Balance'/> 
      <Transaction title = 'Argent Bank Credit Card (x8349)' amount ='$184.30' description ='Current Balance'/> 
      </main>

      <Footer />
    </>
  )
};

export default User;
