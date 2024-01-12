import React from "react";
import { useEffect } from "react";
import Transaction from "./transaction/transaction";
import { getTransactions } from "../actions/transactionsActions";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import BankAccount from "./bankAccount/bankAccount";
function Transactions (){
    //id:
    const dispatch=useDispatch();
    const{bankAccount_accountNumber}=useParams();
    const transactionList=useSelector((state) => state.transactionReducerContent.transactions);
    useEffect(()=>{
        dispatch(getTransactions(bankAccount_accountNumber));
    },[dispatch]);  
 
    return (
        <div className="container">
           <h2>Transaction</h2>
           <hr></hr>
           <Link to={`/createTransactionForm/${bankAccount_accountNumber}`} className="btn btn-primary">Create an new transaction</Link>
           <br></br>
           <br></br>
           
        {transactionList.map((transaction) =>(
            <Transaction bankAccount_accountNumber={bankAccount_accountNumber} key={transaction.id} transaction={transaction}/>
        ))}
        </div>
    );
};
export default Transactions;