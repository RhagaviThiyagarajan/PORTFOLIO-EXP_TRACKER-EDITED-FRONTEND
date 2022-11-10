import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories : [],
    transaction: []
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers : {
        getTransactions: (state) => {
                // get code
        }
    }
})

export const { getTransactions } = expenseSlice.actions; 


//reducer is a central store
//we make req to the server and we can access anywhere from the server


//RTK-used to easily fetch data from the server.
//advance data fetching tool
//simplifyying-loading data
//RTK will automatically update react component 




export const Reducer=(state,action)=>{

    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false,
            };

            case "LOGIN_SUCCESS":
                return{
                    user:action.payload,
                    isFetching:false,
                    error:false,
                };

                case "LOGIN_FAILURE":
                    return{
                        user:null,
                        isFetching:false,
                        error:true,
                    }
                    case "LOGOUT":
                        return {
                          user: null,
                          isFetching: false,
                          error: false,
                        };
                      default:
                        return state;
                    }
                  };
               
                  export default expenseSlice.reducer;