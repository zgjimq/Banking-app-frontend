import "bootstrap/dist/css/bootstrap.min.css"
//import BankAccount from './components/bankAccounts';
import Header from "./components/template/Header";
import AddBankAccount from "./components/bankAccount/AddBankAccount ";
//import CreateButtonBank from "./components/bankAccount/CreateButtonBank";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import BankAccounts from "./components/bankAccounts";
import Transactions from "./components/transactions";
import TransactionForm from "./components/transactionForm";
function App() {
  return(
    <Provider store={store}>
    <Router>
      <div>
        <Header/>
        
        <Routes>
            <Route
             exact path="/"
             element={<BankAccounts/>}>
            </Route>
            <Route exact path="/createBankForm" 
            element={<AddBankAccount/>}>
            </Route>
            <Route exact path="/createTransactionForm/:bankAccount_accountNumber" element={<TransactionForm/>}></Route>
            <Route exact path="/transaction/:bankAccount_accountNumber" element={<Transactions/>}>
            </Route>
        </Routes>
      </div>
    </Router>
    </Provider>
  );
    
  
}

export default App;
