import React, { useState } from 'react'
import { IUser, IUsersList } from '../model';
import "./crud.css";
import UserForm from './UserForm';
import UserList from './UserList';
const Crud=()=>{
    const [user, setUser]=useState<IUser>({name:"", email:"",address:""});
    const [usersList, setUsersList]=useState<IUsersList[]>([]);
    const [edit, setEdit]=useState<boolean>(false);
    const [updateIndex,setUpdateIndex]=useState<number>(0);
    const handleCreateUser=(e:React.FormEvent)=>{
      e.preventDefault();
          setUsersList([...usersList,{id:Date.now(),user}]);
          setUser({
            name:"", email:"",address:""
          })
    }
  
    const handleDelete=(id:number)=>{
         setUsersList(usersList.filter(user=> user.id!==id))
    }
    const handleEdit=(id:number)=>{
        const editUser=usersList.filter((users=>users.id==id));
        setUser(editUser[0].user)
       setEdit(true);
       setUpdateIndex(id);
    }
    const handleUpdate=()=>{
    usersList.map((users=>users.id==updateIndex  ?(users.user=user):(null)));
       setEdit(false);
       setUser({ name:"", email:"",address:""});
    }
    const handleUser=()=>{

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