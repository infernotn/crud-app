import React ,{createContext, useReducer} from "react";
import AppReducer from './context/AppReducer'


//initial State
const initialState={
    users:[
        {id:1,name:'user 1'},
        {id:2,name:'user 2'},
        {id:3,name:'user 3'}
    ]
};

//create Contest
export const GlobalContext=createContext(initialState);
