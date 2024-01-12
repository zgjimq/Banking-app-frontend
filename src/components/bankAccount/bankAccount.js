import React from "react";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";

function BankAccount(props){
   // ketu i merr te dhenat psh const bankAccount = props 
   const {bankAccount}=props;
    return (
      
        <div className="container">
        <div className="card card-body bg-light mb-3 card border-warning">
          <div className="card-header bg-warning">
            <h3 className=" border-dark">Bank Account</h3>
          </div>
          <div className=" card-body mb-3">
            <div className="row">
              <div className="col-lg-9">
              <h5 className=" border-dark fw-light text-decoration-underline">ID : {bankAccount.accountNumber}</h5>
                <h3 className=" border-dark fw-semibold text-decoration-underline">Name : {bankAccount.accountOwnersName}</h3>
                <h3 className=" border-dark fw-light">Balance : {bankAccount.balance}</h3>
                <h3 className=" border-dark fw-light">Telephone :{bankAccount.accountOwnersPhoneNr}</h3>

              </div>
              <div className="col-md-3">
                <ul className="list-group">
                  <Link
                    to="/AccountSummary"
                    className="list-group-item list-group-item-action"
                  >
                    <i className="fa fa-list pr-1"></i> Account Summary
                  </Link>
                  <Link
                    to="/paybills"
                    className="list-group-item list-group-item-action"
                  >
                    <i className="fa fa-money pr-1"></i> Pay Bills
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    <i className="fa fa-exchange pr-1"></i> Internal Transfer
                  </Link>
                  <Link
                   to={`transaction/${bankAccount.accountNumber}`}
                    className="list-group-item list-group-item-action"
                  >
                    <i className="fa fa-exchange pr-1"></i> Transaction
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
   
}

export default BankAccount;