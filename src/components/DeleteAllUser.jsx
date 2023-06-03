import React from "react";
import "../styles/button.css"
import "../styles/div.css"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../store/slice/UserSlice'

export const DeleteAllUser = () => {

  const dispatch=useDispatch();

  const clearAll=()=>{
    dispatch(deleteUser());
  }
  return <div className="container-fluid" >        
  <button className="button-86 con" role="button" onClick={clearAll}>DELETE ALL</button>

  </div>
};


