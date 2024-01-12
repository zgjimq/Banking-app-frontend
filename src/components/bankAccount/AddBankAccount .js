import React from "react";
//import { Link } from "react-router-dom";
import { createBankAccount } from "../../actions/bankAccountActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
function AddBankAccount() {
 /* constructor(props){
    super(props);
    this.state = {
      ownerName: '',
      ownerPhone: '',
      accountNumber: '',
      balance: '',
    };
  }*/
  const dispatch = useDispatch();
  
  const [bankAccounts, setbankAccounts] = useState({
    ownerName: "",
    ownerPhone: "",
    accountNumber: "",
    balance: "",
  }); 

  const onChange = (e) => {
    setbankAccounts({
    ...bankAccounts,
      [e.target.name]: e.target.value,
    });
  };
 const onSubmit = (e) => {
    e.preventDefault();
    const newBankAccount={
      accountOwnersName:bankAccounts.ownerName,
      accountOwnersPhoneNr:bankAccounts.ownerPhone,
      
      balance:bankAccounts.balance,
    };
    dispatch(createBankAccount(newBankAccount));
  }
    
      return (
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create Bank Account Form
                </h5>
                
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg mb-3"
                      placeholder="Owner Name"
                      name="ownerName"
                      value={bankAccounts.ownerName}  
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg mb-3"
                      placeholder="Owner Phone Number"
                      name="ownerPhone"
                      value={bankAccounts.ownerPhone}
                      onChange={onChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg mb-3"
                      placeholder="Balance"
                      name="balance"
                      value={bankAccounts.balance}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    
}
export default AddBankAccount;