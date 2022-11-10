import React from "react";

import { useForm } from "react-hook-form";
import List from "./List";
import { useNavigate } from "react-router-dom";
import {default as api} from '../store/apiSlice';

import { Context } from "../store/Context";
import { useContext } from "react";



export default function Form() {
    const {user,dispatch} = useContext(Context);
    const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();
  //RTK QUERY
  const [addTransaction] = api.useAddTransactionMutation();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
   
  };

  const onSubmit = async (data) => {
    if(!data) return {};
    await addTransaction(data).unwrap();
    resetField('name');
    resetField('amount')
}

return (
<div className="form max-w-sm mx-auto w-96">
    
    <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
   
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
            <div className="input-group">
                <input type="text" {...register('name')} placeholder='Salary, House Rent, SIP' className='form-input' />
            </div>
            <select className='form-input' {...register('type')}>
                <option value="Investment">Investment</option>
                <option value="Expense">Expense</option>
                <option value="savings">Savings</option>
            </select>
            
            <div className="input-group">
                <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
            </div>
            <div className="submit-btn">
                <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
            </div>
        </div>    
    </form>

    <List></List>
    <button className="logoutButton" onClick={handleLogout}>Logout</button>
   
</div>
)
}