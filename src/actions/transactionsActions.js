import { GET_TRANSACTIONS, CREATE_TRANSACTION,GET_ERRORS } from "./types";
import axios from "axios";

export const getTransactions = (id) => async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8095/api/transactions/all/${id}`);
        dispatch({
            type:GET_TRANSACTIONS,
            payload:response.data,
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        })
    }
}

export const createTransaction = (bankAccount_accountNumber,transaction) => async(dispatch)=>{
    try {
        const response = await axios.post(`http://localhost:8095/api/transactions/${bankAccount_accountNumber}`,transaction);
        window.location.href=`/transaction/${bankAccount_accountNumber}`
        dispatch({
            type:CREATE_TRANSACTION,
            payload:response.data,
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        })
    }
}