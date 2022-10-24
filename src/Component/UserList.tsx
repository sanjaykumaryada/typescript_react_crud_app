import React from 'react'
import { IUser } from '../model'
import "./crud.css"
import UserCard from './UserCard';
interface IUserListProps{
 usersList:IUser[];
 handleDelete:(i:number)=>void;
 handleEdit:(index:number)=>void;
}
const UserList:React.FC<IUserListProps>=({usersList, handleDelete, handleEdit})=> {
  return (
    <div className='userslist-div'>
        <h1>List of Users</h1>
        {
            usersList.length < 1? (
                <h1>List of Users will appear here!</h1>
            ):(
               usersList.map((user,i) =>  <UserCard  user={user} key={i} index={i} handleDelete={handleDelete} handleEdit={handleEdit} />) 
            )
        }
    </div>
  )
}

export default UserList