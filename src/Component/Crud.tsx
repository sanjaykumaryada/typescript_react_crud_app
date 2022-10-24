import React, { useState } from 'react'
import { IUser } from '../model';
import "./crud.css";
import UserForm from './UserForm';
import UserList from './UserList';
const Crud=()=>{
    const [user, setUser]=useState<IUser>({ name:"", email:"",address:""});
    const [usersList, setUsersList]=useState<IUser[]>([]);
    const [edit, setEdit]=useState<boolean>(false);
    const [updateIndex,setUpdateIndex]=useState<number>(0);
    const handleCreateUser=()=>{
          usersList.push(user);
          setUser({
            name:"", email:"",address:""
          })
    }
    const handleDelete=(index:number)=>{
        usersList.splice(index,1);
        setUsersList([...usersList])
    }
    const handleEdit=(index:number)=>{
       setUser(usersList[index]);
       setEdit(true);
       setUpdateIndex(index);
    }
    const handleUpdate=()=>{
           usersList.splice(updateIndex,1,user);
           setUsersList([...usersList])  
       setEdit(false);
       setUser({ name:"", email:"",address:""});
    }

  return (
    <div className='main-crud-div'>
         <h1>CRUD APP</h1>
         <UserForm user={user} setUser={setUser} handleCreateUser={handleCreateUser} edit={edit} handleUpdate={handleUpdate}/>
         <UserList usersList={usersList} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default Crud;