import React from "react";
import { useState } from "react";
import { createTransaction } from "../actions/transactionsActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
function TransactionForm(){
const dispatch=useDispatch();
    const {bankAccount_accountNumber}=useParams();
    const errors=useSelector((state) =>state.errorReducerContent)
    const [formData, setFormData]=useState({
        transactionType:"",
        amount:"",
    });

    const onChange=(event)=>{
        setFormData({
         ...formData,
            [event.target.name]:event.target.value
        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        const newTransa={
            transactionType:formData.transactionType,
            amount:formData.amount
        }
        dispatch(createTransaction(bankAccount_accountNumber,newTransa));
    }

    return (
            <div className="register">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
        
                    <h1 className="text-center">Create Transaction</h1>
                    <hr></hr>
            
            <form onSubmit={onSubmit}> 
                <input className={`form-control form-control-lg mb-3 ${errors.amount ? "is-invalid" :""}`}
                placeholder="Amout"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={onChange}
                />   
                {

                 errors.amount && (
                    <p className="invalid-feedback">
                       {errors.amount}
                 </p>
                )
                }
                
                <input className={`form-control form-control-lg mb-3 ${errors.transactionType ? "is-invalid" :""}`}
                placeholder="Transaction Type"
                type="number"
                name="transactionType"
                value={formData.transactionType}
                onChange={onChange}
                />   
              
                {

                errors.transactionType && (
                <p className="invalid-feedback">
                    {errors.transactionType}
                </p>
                )
                }
                <input className="btn btn-primary mt-4" type="submit"></input>
            </form>
        </div>
        </div>

       </div>
       </div>

    );

    
}
export default TransactionForm;