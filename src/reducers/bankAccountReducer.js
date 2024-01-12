import { CREATE_BANK_ACCOUNT, DELETE_BANK_ACCOUNT, GET_BANK_ACCOUNTS, GET_BANK_ACCOUNT } from "../actions/types";

const initialState = {
    bankAccounts:[],
    bankAccount: {},
};

export default function bankAccountReducer(state = initialState, action){
    switch (action.type) {
        case GET_BANK_ACCOUNTS:
            return{
                ...state,
                
                bankAccounts:action.payload,
            };
            case GET_BANK_ACCOUNT:
                return {
                  ...state,
                    bankAccount:action.payload,
                }

        case CREATE_BANK_ACCOUNT :
            return {
                ...state,
                bankAccount:action.payload,
            }   
            
            case DELETE_BANK_ACCOUNT :
                return {
                  ...state,
                    bankAccounts:state.bankAccounts.filter(account=>account._id!==action.payload),
                }

        default:
          return state;
    }
}