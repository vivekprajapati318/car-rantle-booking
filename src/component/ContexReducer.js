import { useReducer } from "react";
import React, { Children, createContext,createContext} from 'react'
const CartState=createContext();
const displaycartcontex=createContext();
const reducer=(state,action)=>{

}
export const Cartprovider=({Children})=>{
   const{state,dispatch}=useReducer(reducer,[])
    return(
        <CartState.Provider value={dispatch}>     <displaycartcontex.Provider value={state}>
            {Children}
            </displaycartcontex.Provider></CartState.Provider>
       

    )
}
