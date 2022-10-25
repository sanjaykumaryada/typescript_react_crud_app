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
}
export interface IUsersListContext{
    usersList:IUsersList[];
}