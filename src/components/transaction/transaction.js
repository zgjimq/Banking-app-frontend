import React, { Component } from "react";

class Transaction extends Component{
    render(){
        const {transaction}=this.props;
        return(
            <div className="container">
            <div className="col-md-5 m-center">
            <div class="card">
            <div class="card-footer text-center">
              ---Transaction---
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item fw-bold">Transaction type : {transaction.transactionType}</li>
              <li class="list-group-item">Amount : {transaction.amount}</li>
            </ul>

            </div>
            <br></br>
          </div>
          </div>
        );
    }
}
export default Transaction;