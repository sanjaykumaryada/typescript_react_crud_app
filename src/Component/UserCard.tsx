import React, { useState } from 'react'
import { IUser, IUsersList } from '../model';
import "./crud.css";
import PopUp from './PopUp';
interface IUserProps{
user:IUsersList;
index:number;
handleDelete:(i:number)=>void;
handleEdit:(i:number)=>void;
}
const UserCard:React.FC<IUserProps>=({user, index, handleDelete,handleEdit})=> {
  const [popup, setPopup]=useState<boolean>(false);
  const handlePopup=()=>{
    setPopup(!popup);
  }
  return (
    <div className='usercard-div'>
           <h3>{user.user.name}</h3>
           <h3> {user.user.email}</h3>
           <h3>{user.user.address}</h3>
           <button className='btn' onClick={()=>handleEdit(index)}>Edit</button>
        <button className='btn' onClick={()=>setPopup(!popup)}>Delete</button>
        { popup ? (<PopUp popup={popup}  onConfirm={()=>handleDelete(index)} onCancel={()=>handlePopup()}/>):( null)
        
    }
    </div>
  )
}

export default UserCard