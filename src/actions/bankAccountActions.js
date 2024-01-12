import {GET_BANK_ACCOUNTS,CREATE_BANK_ACCOUNT,GET_ERRORS,GET_BANK_ACCOUNT,DELETE_BANK_ACCOUNT } from "./types";
import axios from "axios";

export const createBankAccount = (bankAccount) =>async (dispatch)=>{
    try{    
        await axios.post("http://localhost:8095/api/bankAccount/createOrUpdate",bankAccount);
        window.location.href="/"
        dispatch({
            type:CREATE_BANK_ACCOUNT,
            payload: bankAccount,
        });

    }
    catch(error){
        dispatch(
            {
                type:GET_ERRORS,
                payload: error.response.data,
            }
        );
    }
};

export const getBankAccounts = () => async(dispatch)=>{
    try {
        const response= await axios.get("http://localhost:8095/api/bankAccount/getAll");
        dispatch({
            type:GET_BANK_ACCOUNTS,
            payload:response.data,
        })
        
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        })
    }
};

export const getBankAccount = (id) => async(dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8095/api/bankAccount/getBankById/${id}`);
        dispatch({
            type:GET_BANK_ACCOUNT,
            payload:response.data,
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        })
    }
};

export const deleteBankAccount = (id) => async(dispatch)=>{
    if(window.confirm("Do you want to delete")){
        await axios.delete(`http://localhost:8095/api/bankAccount/delete/${id}`)
        window.location.href="/"
        dispatch({
            type:DELETE_BANK_ACCOUNT,
            payload:id,
        });
    }
};
