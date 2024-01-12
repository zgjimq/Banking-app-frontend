import { GET_ERRORS } from "../actions/types";

const intialState = {
    errors: "This is the state on error reducer",

}

export default function errorReducer(state = intialState,action){
    switch(action.type){
        case GET_ERRORS:
            return action.payload;

                

        default:
            return state;    
    }
}