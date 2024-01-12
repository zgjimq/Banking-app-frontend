import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
        <nav className="navbar  navbar-expand-sm navbar-light bg-warning mb-4">
        <div className="container">
             <Link className="navbar-brand" to="/">Banking App</Link>
        </div>
    </nav>
    );
}
export default Header;