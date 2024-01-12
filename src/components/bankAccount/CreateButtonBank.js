import React from "react";
import { Link } from "react-router-dom";
function CreateButtonBank(){
    return(
        <>
        <div className="container">
            <Link to="/createBankForm" className="btn btn-primary">
                Create Bank Form
            </Link>
            <br></br>
            <br></br>
        </div>
        </>
    );
}
export default CreateButtonBank;