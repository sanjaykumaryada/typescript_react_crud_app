import React from "react";

export interface IUser{
    name:string,
    email:string,
    address:string
}
export interface IUsersList{
    id:number;
    user:IUser;
}
export interface IUserContext{
    user:IUser;
   setUser:React.Dispatch<React.SetStateAction<IUser>>;
   usersList:IUsersList[];
   edit:boolean
}
