import React, { useState } from 'react'
import { IUser } from '../model';
import "./crud.css";
import PopUp from './PopUp';
interface IUserProps{
user:IUser;
index:number;
handleDelete:(i:number)=>void;
handleEdit:(i:number)=>void;
}
const UserCard:React.FC<IUserProps>=({user, index, handleDelete,handleEdit})=> {
    const [popup, setPopup]=useState<boolean>(false);
  return (
    <div className='usercard-div'>
           <h3>{user.name}</h3>
           <h3> {user.email}</h3>
           <h3>{user.address}</h3>
           <button className='btn' onClick={()=>handleEdit(index)}>Edit</button>
        <button className='btn' onClick={()=>setPopup(!popup)}>Delete</button>
        { popup ? (<PopUp popup={popup} setPopup={setPopup} index={index} handleDelete={handleDelete}/>):( null)
        
    }
    </div>
  )
}

export default UserCard