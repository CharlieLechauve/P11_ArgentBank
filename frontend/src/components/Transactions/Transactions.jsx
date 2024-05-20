import React, { useState } from 'react';

//Can be written in another files -> Better to have them in an API like MongoDB etc...
const transactionsData = [
    {
        id: '0',
        date: '27/02/20',
        description: 'Golden Sun Bakery',
        amount: '$8.00',
        balance: '$298.00',
        category: '',
        note: '',
    },
    {
        id: '1',
        date: '27/02/20',
        description: 'Golden Sun Bakery',
        amount: '$8.00',
        balance: '$298.00',
        category: '',
        note: '',
    },
    {
        id: '2',
        date: '27/02/20',
        description: 'Golden Sun Bakery',
        amount: '$8.00',
        balance: '$298.00',
        category: '',
        note: '',
    },
    {
        id: '3',
        date: '27/02/20',
        description: 'Golden Sun Bakery',
        amount: '$8.00',
        balance: '$298.00',
        category: '',
        note: '',
    }, 
    {
        id: '4',
        date: '27/02/20',
        description: 'Golden Sun Bakery',
        amount: '$8.00',
        balance: '$298.00',
        category: '',
        note: '',
    }, 
    
]; 

//Try to create a fake API for the Categories
const categoryData = [
    {
        category: 'Food'
    },
    {
        category: 'Health'
    },
    {
        category: 'Hobbies'
    },
]


//Create panel after clicking on "View Transactions"
export default function Transaction({ title, amount, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionInfoStates, setTransactionInfoStates] = useState(
    Array(transactionsData.length).fill(false)
  );
  
  //state of the pencil button
  const [isPencilOpen, setIsPencilOpen] = useState(
    Array(transactionsData.length).fill(true)
  );
  const [isPencilOpen2, setIsPencilOpen2] = useState(
    Array(transactionsData.length).fill(true)
  );

  //Permit one arrow to turn when we click on it without influencing others
  const [chevronState, setChevronState] = useState(
    Array(transactionsData.length).fill(false)
  );

  //Create a state for the Category (modified by clicking on first pen)
  const [transactionCategories, setTransactionCategories] = useState({});
  const changeCategory = (id, e) => {
    setTransactionCategories({
        ...transactionCategories,
        [id]: e.target.value
    });
};
  const saveCategory = () => {
    localStorage.setItem('transactionCategory', transactionCategories);
  };


  //Create a state for the Note (modified by clicking on second pen)
  const [transactionNotes, setTransactionNotes] = useState({});
  const changeNote = (id, e) => {
    setTransactionNotes({
        ...transactionNotes,
        [id]: e.target.value
    });
};
  const saveNote = () => {
    localStorage.setItem('transactionNote', transactionNotes);
  };


  const OpenTransactionInfo = (index) => {
    const updatedInfoStates = [...transactionInfoStates];
    updatedInfoStates[index] = !updatedInfoStates[index];
    setTransactionInfoStates(updatedInfoStates);
  };



  return (
    <section className="account">
      <div className="account-container">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-right cta">
        <button className="transaction-button" onClick={() => setIsOpen(!isOpen)} > 
            {isOpen ? 'Close' : 'View transactions'}
        </button>
        </div>
      </div>



      {isOpen && (
        <div className="transaction-container">
          <div className="transaction-top">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
            <p>Balance</p>
          </div>

          {transactionsData.map((transaction, index) => (

            <div className="transaction-details" key={index}>
              <div className="transaction" key={index} onClick={() => {
                OpenTransactionInfo(index)
                let newChevronState = [...chevronState];
                    newChevronState[index] = !newChevronState[index];
                    setChevronState(newChevronState);
                }}>

                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <p>{transaction.amount}</p>
                <p>{transaction.balance}</p>
                
                <i //Change the arrow when clicked -between up and down-
                className={`fa-solid ${chevronState[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>

              {transactionInfoStates[index] && (
                <div className="transaction-info">
                  <div className="transaction-info-details">
                    <p>Transaction type</p>
                    <p>Category</p>
                    <p>Note</p>
                  </div>
                  <div className="transaction-info-list">
                    <div>
                      <p>Electronic</p>
                    </div>


                    <div>
                      {isPencilOpen[index] ? (
                        <p>
                          {transactionCategories[transaction.id]}
                          <i
                            className="fa-solid fa-pencil"
                            onClick={() => {
                                let newIsPencilOpen = [...isPencilOpen];
                                newIsPencilOpen[index] = !newIsPencilOpen[index];
                                setIsPencilOpen(newIsPencilOpen);
                                
                            }}
                          ></i>
                        </p>

                      ) : (
                        
                        <div>
                            <form>
                                <select onChange={(e) => changeCategory(transaction.id, e)}>

                                    <option> </option>

                                {categoryData.map((item, index) => (
                                    <option key={index} value={item.category}>
                                    {item.category}
                                    </option>
                                ))}
                                
                                </select>
                                <i
                                className="fa-solid fa-check"
                                onClick={() => {

                                    
                                    let newIsPencilOpen = [...isPencilOpen];
                                    newIsPencilOpen[index] = !newIsPencilOpen[index];
                                    setIsPencilOpen(newIsPencilOpen);
                                    saveCategory();
                                }}
                                />
                                
                            </form>
                        </div>
                      )}
                    </div>


                    <div>
                        
                      {isPencilOpen2[index] ? (
                        <p>
                          {transactionNotes[transaction.id]}
                          <i
                            className="fa-solid fa-pencil"
                            onClick={() => {
                                let newIsPencilOpen2 = [...isPencilOpen2];
                                    newIsPencilOpen2[index] = !newIsPencilOpen2[index];
                                    setIsPencilOpen2(newIsPencilOpen2)}}
                          ></i>
                        </p>
                      ) : (
                        <div>
                          <input
                            type="text"
                            className="transaction-input"
                            value={transactionNotes[transaction.id] || ''}
                            onChange={(e) => changeNote(transaction.id, e)}
                          />
                          <i
                            className="fa-solid fa-check"
                            onClick={() => {
                              
                            let newIsPencilOpen2 = [...isPencilOpen2];
                                newIsPencilOpen2[index] = !newIsPencilOpen2[index];
                                setIsPencilOpen2(newIsPencilOpen2);
                                saveNote();

                            }}
                          ></i>
                  
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
