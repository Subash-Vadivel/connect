import axios from './Api/axiosPrivate'
import React, { useContext,  useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [account,setAccount]=useState();
    const login=(data)=>{
      setAccount(data);
    }
    const logout=async()=>{
      setAccount(null);
    }
  return (
    <>  
          <userStatus.Provider value={{login,logout,account}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};