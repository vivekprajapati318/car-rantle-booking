import { useContext, useReducer } from "react";
import React, {createContext} from 'react'
const CartState=createContext();
const Displaycartcontex=createContext();
const reducer=(state,action)=>{

}
export const Cartprovider=({children})=>{
   const{state,dispatch}=useReducer(reducer,[])
    return(
        <CartState.Provider value={dispatch}>     
        <Displaycartcontex.Provider value={state}>
            {children}
            </Displaycartcontex.Provider></CartState.Provider>
       

    )
}
export const Usecart=()=>useContext(CartState);

export const Usedispatchcart=()=>useContext(Displaycartcontex);

