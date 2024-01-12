import { combineReducers } from "redux";
import errorReducer from "./errorReduces";
import bankAccountReduce from "./bankAccountReducer"
import transactionReducer from "./transactionsReducer";
const rootReducer= combineReducers({
    errorReducerContent : errorReducer,
    bankAccountReducerContent : bankAccountReduce,
    transactionReducerContent : transactionReducer,
});

export default rootReducer;
