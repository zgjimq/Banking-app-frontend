import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBankAccounts } from "../actions/bankAccountActions";
import { useEffect } from "react";
import CreateButtonBank from "./bankAccount/CreateButtonBank";
import BankAccount from "./bankAccount/bankAccount";
function BankAccounts(){
    const dispatch=useDispatch();
    
    const bankAccountList=useSelector((state) => 
    state.bankAccountReducerContent.bankAccounts);

    useEffect(() => {
        dispatch(getBankAccounts());
    }, [dispatch]);
   /* */
    return (
        <div className="container">
            <CreateButtonBank/>
            <hr></hr>
         {   bankAccountList.map((bankAccount)=>(
                <BankAccount key={bankAccount.id} bankAccount={bankAccount}/>
                ))
          }

        </div>
    );
}
export default BankAccounts;