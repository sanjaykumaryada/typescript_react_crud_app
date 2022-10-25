import React, { createContext,useState } from 'react'
import { IUser, IUserContext, IUsersList} from '../model';
import "./crud.css";
import UserForm from './UserForm';
import UserList from './UserList';
   export const UserContext=createContext<IUserContext>({}as IUserContext);
const Crud=()=>{
    const [user, setUser]=useState<IUser>({name:"", email:"",address:""});
    const [usersList, setUsersList]=useState<IUsersList[]>([]);
    const [edit, setEdit]=useState<boolean>(false);
    const [updateIndex,setUpdateIndex]=useState<number>();
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
        const editUser=usersList.filter((users=>users.id===id));
        setUser(editUser[0].user)
       setEdit(true);
       setUpdateIndex(id);
    }
    const handleUpdate=()=>{
    usersList.map((users=>users.id===updateIndex  ?(users.user=user):(null)));
       setEdit(false);
       setUser({ name:"", email:"",address:""});
    }
    const handleUserForm=(e:React.FormEvent,user:IUser)=>{
             if(user){
              handleCreateUser(e);
             }
             if(updateIndex!==undefined){
                handleUpdate();
             }
    }
  return (
    <div className='main-crud-div'>
         <h1>CRUD APP</h1>
         <UserContext.Provider value={{user,setUser, usersList, edit}}>
         <UserForm handleUserForm={handleUserForm}/>
        <UserList  handleDelete={handleDelete} handleEdit={handleEdit}/>
         </UserContext.Provider>
    </div>
  )
}

export default Crud