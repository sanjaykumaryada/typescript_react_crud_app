import React, { useContext } from 'react'
import { IUsersList } from '../model'
import "./crud.css"
import UserCard from './UserCard';
import {UsersListContext} from "./Crud";
interface IUserListProps{
 handleDelete:(i:number)=>void;
 handleEdit:(index:number)=>void;
}
const UserList:React.FC<IUserListProps>=({ handleDelete, handleEdit})=> {
  const {usersList}=useContext(UsersListContext);
  return (
    <div className='userslist-div'>
        <h1>List of Users</h1>
        {
            usersList.length < 1? (
                <h1>List of Users will appear here!</h1>
            ):(
               usersList.map((user) =>  <UserCard  user={user} key={user.id} index={user.id} handleDelete={handleDelete} handleEdit={handleEdit} />) 
            )
        }
    </div>
  )
}

export default UserList