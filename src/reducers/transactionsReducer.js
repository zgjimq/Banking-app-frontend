import { GET_TRANSACTIONS, CREATE_TRANSACTION } from "../actions/types";
const initialState={
    transactions:[],
    transaction:{},
}

export default function transactionReducer(state=initialState,action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return{
              ...state,
                transactions:action.payload,
            }
        case CREATE_TRANSACTION:
            return{
              ...state,
                transaction:action.payload,
            }
        default:
            return state;
    }
}